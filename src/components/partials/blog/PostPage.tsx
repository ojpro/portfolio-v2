import Head from "next/head";
import Date from "@/components/partials/blog/Date";

export default function PostPage({postData}: { postData: { slug: number, title: string, date: string, contentHtml: string } }) {
    return (
        <>
          <div className="container p-4 w-2/3 mx-auto">
              <section>
                  <h1 className="text-2xl font-medium">{postData.title}</h1>
                  <Date dateString={postData.date}/>
              </section>
              <section className="my-2">
                  <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
              </section>
          </div>
        </>
    );
}
