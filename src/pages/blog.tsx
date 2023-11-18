import {getSortedPostsData} from '@/lib/posts';
import BlogLayout from "@/components/layouts/BlogLayout";
import PostCard from "@/components/partials/blog/PostCard";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}


export default function Blog({allPostsData}: { allPostsData: { slug: string, date: string, title: string }[] }) {
    return (
        <BlogLayout>
            <div className="lg:w-1/2 mx-auto">
                <h1 className="font-semibold text-3xl py-6 px-2">Blog</h1>
                <div>
                    {allPostsData.map((postData) => (
                        <PostCard postData={postData}></PostCard>
                    ))}
                </div>
            </div>
        </BlogLayout>

    );
}
