module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Myd's Portfolio",
        description: "",
        author: "Rangga Myd",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "myd",
        twitterUsername: "@consecter",
        getform_url:
            "https://getform.io/f/avrekoya",
        socials: [
            {
                id: 1,
                title: "instagram",
                path: "https://instagram.com/ranggaamyd",
                icon: "Instagram",
            },
            {
                id: 2,
                title: "github",
                path: "https://github.com/ranggamyd",
                icon: "GitHub",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://www.linkedin.com/in/ranggamyd/",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "62 821-1821-4793",
            email: "ranggaamyd@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Myd's Portfolio",
                short_name: "myd",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon-32x32.png",
            },
        },
    ],
};
