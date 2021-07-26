import Typography from "typography"

import "fontsource-open-sans"
import "fontsource-open-sans/600.css"
import "fontsource-questrial"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.6,
    scaleRatio: 1.4,
    headerFontFamily: ['Questrial', 'sans-serif'],
    headerWeight: 'normal',
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    bodyColor: 'rgb(60, 60, 60)',
    headerColor: 'rgb(0, 0, 0)',
    googleFonts: [
        {
            name: 'Open Sans',
            styles: ['400', '600'],
        },
        {
            name: 'Questrial',
            styles: ['400'],
        },
    ],
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
        const linkColor = "#1e77e3"
        return {
            a: {
                color: linkColor,
                textDecoration: "none",
            },
            "a:hover, a:active": {
                textDecoration: "underline",
            },
            "h1, h2": {
                marginTop: rhythm(2.8),
                marginBottom: rhythm(0.8),
            },
            "h3": {
                marginTop: rhythm(1),
                marginBottom: rhythm(0.8),
            },
            p: {
                marginBottom: rhythm(0.5),
                textAlign: 'justify'
                
            },
            ul: {
                textAlign: 'justify',
                marginLeft: '20px'
            }
        }
    },
})

export const { scale, rhythm, options } = typography
export default typography