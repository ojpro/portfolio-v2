import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <title>My Portfolio 💻 - ojpro </title>
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
