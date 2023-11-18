import Head from "next/head";
import {getAllPostSlugs, getPostData} from "@/lib/posts";
import BlogLayout from "@/components/layouts/BlogLayout";
import PostPage from "@/components/partials/blog/PostPage";

export default function Post({postData}: { postData: { slug: number, title: string, date: string, contentHtml: string } }) {
    return (
        <>
            <BlogLayout>
                <Head>
                    <title>{postData.title}</title>
                </Head>

                <PostPage postData={postData}></PostPage>
            </BlogLayout>
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
