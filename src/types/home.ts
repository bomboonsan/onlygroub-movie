export type Home = {
    data: {
        seo: {
            meta: {
                author: {
                    description: string
                    title: string
                }
                date: {
                    description: string
                    title: string
                }
                config: {
                    separator: string
                }
                homepage: {
                    description: string
                    title: string
                }
                notFound: {
                    breadcrumb: string
                    title: string
                }
            }
            webmaster: {
                googleVerify: string
                yandexVerify: string
                msVerify: string
                baiduVerify: string
            }
            schema: {
                siteName: string
                wordpressSiteName: string
                siteUrl: string
                inLanguage: string
                companyName: string
                companyOrPerson: string
                companyLogo: {
                    url: string
                }
                logo: {
                    url: string
                }
                personLogo: {
                    url: string
                }
            }            
            breadcrumbs: {
                showBlogPage: boolean
                separator: string
                searchPrefix: string
                prefix: string
                homeText: string
                enabled: boolean
                boldLast: boolean
                archivePrefix: string
                notFoundText: string
            }
            social: {
                facebook: {
                    url: string
                    defaultImage: {
                        url: string
                    }
                }
                instagram: {
                    url: string
                }
                linkedIn: {
                    url: string
                }
                mySpace: {
                    url: string
                }
                pinterest: {
                    url: string
                    metaTag: string
                }
                twitter: {
                    cardType: string
                    username: string
                }
                wikipedia: {
                    url: string
                }
                youTube: {
                    url: string
                }
                otherSocials: string
            }
            openGraph: {
                frontPage: {
                    title: string
                    description: string
                    image: {
                        altText: string
                        sourceUrl: string
                        mediaItemUrl: string
                    }
                }
                defaultImage: {
                    altText: string
                    sourceUrl: string
                    mediaItemUrl: string
                }
            }
            contentTypes: {
                post: {
                    title: string
                    schemaType: string
                    metaRobotsNoindex: boolean
                    metaDesc: string
                    schema: {
                        raw: string
                    }
                    archive: {
                        fullHead: string
                        archiveLink: string
                        breadcrumbTitle: string
                        hasArchive: boolean
                        metaDesc: string
                        metaRobotsNoindex: boolean
                        title: string
                    }
                }
                page: {
                    metaDesc: string
                    metaRobotsNoindex: boolean
                    schemaType: string
                    title: string
                    schema: {
                        raw: string
                    }
                }
            }
            redirects: {
                origin: string
                target: string
                format: string
                type: string
            }
        }
    }
}