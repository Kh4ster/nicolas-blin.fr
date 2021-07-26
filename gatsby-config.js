/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        title: `Nicolas Blin`,
        description: 'Learn more about me and my projects.',
        author: `Nicolas Blin`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nicolas Blin · Website`,
                short_name: `Nicolas Blin`,
                start_url: `/`,
                background_color: `#1e77e3`,
                theme_color: `#1e77e3`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `config/typography`,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer"
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 900,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-github-repos`,
            options: {
                token: process.env.GITHUB_API_TOKEN,
                query: "user:Kh4ster topic:meta-project-show fork:true sort:updated-desc",
                limit: 10
            },
        }
    ],
}
