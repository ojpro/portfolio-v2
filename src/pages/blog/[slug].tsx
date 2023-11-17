import {getAllPostSlugs, getPostData} from "@/lib/posts";
import Head from 'next/head';
import Date from "@/components/partials/blog/Date";

export default function Post({postData}: { postData: { slug: number, title: string, date: string, contentHtml: string } }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>

            {postData.title}
            <br/>
            {postData.slug}
            <br/>
            <Date dateString={postData.date}/>
            <br/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}
