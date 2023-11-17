import {getSortedPostsData} from '@/lib/posts';

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
                    {title}
                    <br/>
                    {slug}
                    <br/>
                    {date}
                </li>
            ))}
        </div>

    );
}
