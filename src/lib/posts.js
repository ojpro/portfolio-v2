import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

export function getSortedPostsData() {

    // Get file names under [posts] directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Loop through the markdown files
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {

            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                slug,
                ...matterResult.data,
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


// Get posts' slugs
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        // prevent opening non-markdown files
        .filter(fileName => fileName.endsWith('.md'))
        .map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, ''),
                },
            };
        });
}


export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}
