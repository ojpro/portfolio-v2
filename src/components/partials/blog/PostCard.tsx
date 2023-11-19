import Link from "next/link";
import Date from "@/components/partials/blog/Date";

export default function PostCard({postData}: { postData: { slug: string, title: string , date: string, thumbnail: string , keywords: string} }) {
    return (
        <>
            <div className="p-4 border dark:border-gray-800 my-4">
                <Link href={`/blog/${postData.slug}`} className="text-blue-500">{postData.title}</Link>
                <br/>
                <Date dateString={postData.date}></Date>
            </div>
        </>
    );
}
