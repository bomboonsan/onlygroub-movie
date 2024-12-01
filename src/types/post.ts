export type Post = {
    guid: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    modified: string;
    movie: {
        director: string;
        actors: string;
        releaseDate: string;
        youtubeId: string;
        imdbId: string;
        rating : number;
        ratingCount : number;
        synopsis: string;
    }
    featuredImage: {
        node: {
            mediaItemUrl: string;
            srcSet: string;
            sizes: string;
            altText: string;
            mediaDetails :{
                width: number
                height: number
            };
        };
    };
    featuredImageThumbnail : {
        node : {
            id : string
            sourceUrl : string
            altText : string
            srcSet : string
            sizes : string
            mediaDetails :{
                width: number
                height: number
            };
        }
    };
    featuredImageMedium : {
        node : {
            id : string
            sourceUrl : string
            altText : string
            srcSet : string
            sizes : string
            mediaDetails :{
                width: number
                height: number
            };
        }
    };
    featuredImageFull : {
        node : {
            id : string
            sourceUrl : string
            altText : string
            srcSet : string
            sizes : string
            mediaDetails :{
                width: number
                height: number
            };
        }
    };
    content: string;
    author: {
        node: {
            name: string;
        };
    };
    terms: {
        nodes: {
            name: string;
            slug: string;
        }[];
    };
    seo: {
        title: string;
        metaDesc: string;
        opengraphTitle: string;
        opengraphDescription: string;
        opengraphImage: {
            altText: string;
            sourceUrl: string;
            srcSet: string;
        };
        opengraphUrl: string;
        opengraphSiteName: string;
        opengraphPublishedTime: string;
        opengraphModifiedTime: string;
        twitterTitle: string;
        twitterDescription: string;
        twitterImage: {
            altText: string;
            sourceUrl: string;
            srcSet: string;
        };
        breadcrumbs: {
            url : string
            text : string
        }
        cornerstone : string
        schema: {
            pageType : string
            articleType : string
            raw : string
        }
    };
    relatedPost : {
        nodes: {
            title: string;
            date: string;
            featuredImage : {
                node : {
                    mediaItemUrl : string;
                    srcSet : string;
                    sizes : string;
                    altText : string;
                }
            }
        }[];
    }
};