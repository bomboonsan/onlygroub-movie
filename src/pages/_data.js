import { GraphQLClient } from 'graphql-request';
import { Astro } from 'astro';

const POSTS_PER_PAGE = 30;
const client = new GraphQLClient('https://api.onlygroub.com/graphql');

export const allCategoryData = await (async () => {
    const category_Query = `
        query GetCategoriesWithCount {
        categories {
            nodes {
            slug
            count
            }
        }
        }
    `;
    const dataCategory = await client.request(category_Query);

    const allCategoryData = {};

    for (const category of dataCategory.categories.nodes) {
        let hasNextPage = true;
        let endCursor = null;
        const categoryData = [];

        while (hasNextPage) {
        const posts_Query = `
            query GetCategory {
                categories(where: {slug: "${slug}"}) {
                    nodes {
                        name
                        description
                        slug
                        seo {
                            title
                            metaDesc
                            breadcrumbs {
								url
								text
							}
							cornerstone
							schema {
								raw
							}
                        }
                        posts(first: ${postPerPage} , after: "${endCursor}") {
                            pageInfo {
                                hasNextPage
                                endCursor
                            }
                            nodes {
                                title
                                slug
                                date
                                excerpt
                                terms {
									nodes {
										name
										slug
									}
								}
                                featuredImageThumbnail: featuredImage {
                                    node {
                                        id
                                        sourceUrl(size: MEDIUM)
                                        altText
                                        srcSet(size: MEDIUM)
                                        sizes(size: MEDIUM)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        const data = await client.request(posts_Query);
        hasNextPage = data.categories.nodes[0].posts.pageInfo.hasNextPage;
        endCursor = data.categories.nodes[0].posts.pageInfo.endCursor;
        categoryData.push(data);
        }

        allCategoryData[category.slug] = categoryData;
    }

    return allCategoryData;
})();