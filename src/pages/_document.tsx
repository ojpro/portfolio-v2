import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description"
                      content="Hey. I'am Oussama ELJABBARI, a Full-Stack Web Developer, and this is my portfolio where I share my work, projects, and achievements."/>
                <meta name="keywords"
                      content="ojpro,oussama eljabbari,full-stack web developer,web development,web design,ojpro portfolio,oussama ojpro,oussama portfolio"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="author" content="Oussama ELJabbari <contact@ojpro.me>"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="mssmarttagspreventparsing" content="true"/>
                <meta name="generator" content="WebStorm"/>
                <link rel="canonical" href="https://ojpro.me/"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Oussama ELJabbari's Personal Portfolio 👋"/>
                <meta property="og:description"
                      content="Hey. I'am Oussama ELJABBARI, a Full-Stack Web Developer, and this is my portfolio where I share my work, projects, and achievements."/>
                <meta property="og:url" content="https://ojpro.me/"/>
                <meta property="og:site_name" content="Oussama ELJABBARI's Portfolio"/>
                <meta property="article:modified_time" content="2023-04-06T17:09:32+00:00"/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* TODO: favicons */}

                <title>My Portfolio 💻 - ojpro </title>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body className="dark font-open-sans overflow-x-hidden scrollbar-hide">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
