import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>

            {/* Meta Tags */}
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description"
                    content="Hey. I'am Oussama ELJABBARI, a Full-Stack Web Developer, and this is my portfolio where I share my work, projects, and achievements." />
                <meta name="keywords"
                    content="ojpro,oussama eljabbari,full-stack web developer,web development,web design,ojpro portfolio,oussama ojpro,oussama portfolio" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="author" content="Oussama ELJabbari <contact@ojpro.me>" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="mssmarttagspreventparsing" content="true" />
                <meta name="generator" content="WebStorm" />
                <link rel="canonical" href="https://ojpro.me/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Oussama ELJabbari's Personal Portfolio 👋" />
                <meta property="og:description"
                    content="Hey. I'am Oussama ELJABBARI, a Full-Stack Web Developer, and this is my portfolio where I share my work, projects, and achievements." />
                <meta property="og:url" content="https://ojpro.me/" />
                <meta property="og:site_name" content="Oussama ELJABBARI's Portfolio" />
                <meta property="article:modified_time" content="2023-04-06T17:09:32+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Script id='google-analytics-import-script' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id='google-analytics-script-execution' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>


            <Component {...pageProps} />
        </>
    )
}
