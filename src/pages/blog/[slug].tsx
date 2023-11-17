import {getAllPostSlugs, getPostData} from "@/lib/posts";

export default function Post({postData}: {postData : {slug: number, title: string, date: string}}) {
    return (
        <>
            <h1>{ postData.title }</h1>
            <span> { postData.date } </span>

            <div>
                { postData.slug }
            </div>
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
    const postData = getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}
