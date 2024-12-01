export const HOME_QUERY = `
query GetSeoConfig {
    seo {
        meta {
            author {
                description
                title
            }
            date {
                description
                title
            }
            config {
                separator
            }
            homepage {
                description
                title
            }
            notFound {
                breadcrumb
                title
            }
        }
        webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
        }
        schema {
            siteName
            wordpressSiteName
            siteUrl
            inLanguage
            companyName
            companyOrPerson
            companyLogo {
                mediaItemUrl
            }
            logo {
                mediaItemUrl
            }
            personLogo {
                mediaItemUrl
            }
        }
        breadcrumbs {
            showBlogPage
            separator
            searchPrefix
            prefix
            homeText
            enabled
            boldLast
            archivePrefix
            notFoundText
        }
        social {
            facebook {
                url
                defaultImage {
                    mediaItemUrl
                }
            }
            instagram {
                url
            }
            linkedIn {
                url
            }
            mySpace {
                url
            }
            pinterest {
                url
                metaTag
            }
            twitter {
                cardType
                username
            }
            wikipedia {
                url
            }
            youTube {
                url
            }
            otherSocials
        }
        openGraph {
            frontPage {
                title
                description
                image {
                    altText
                    sourceUrl
                    mediaItemUrl
                }
            }
            defaultImage {
                altText
                sourceUrl
                mediaItemUrl
            }
        }
        contentTypes {
            post {
                title
                schemaType
                metaRobotsNoindex
                metaDesc
                schema {
                    raw
                }

                archive {
                    fullHead
                    archiveLink
                    breadcrumbTitle
                    hasArchive
                    metaDesc
                    metaRobotsNoindex
                    title
                }
            }
            page {
                metaDesc
                metaRobotsNoindex
                schemaType
                title
                schema {
                    raw
                }
            }
        }
        redirects {
            origin
            target
            format
            type
        }
    }
}
`