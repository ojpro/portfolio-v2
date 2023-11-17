import {getSortedPostsData} from '@/lib/posts';
import Link from "next/link";
import Date from "@/components/partials/blog/Date";

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
        <div>
            {allPostsData.map(({slug, date, title}) => (
                <li key={slug}>
                    <Link href={`/blog/${slug}`} className="text-blue-500">{title}</Link>
                    <br/>
                    <Date dateString={date}></Date>
                </li>
            ))}
        </div>

    );
}
