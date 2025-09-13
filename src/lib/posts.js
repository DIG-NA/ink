import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Get all posts metadata
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents); // frontmatter
    return { slug: fileName.replace(/\.md$/, ''), ...data };
  }).sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first
}

// Get single post content
export async function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return { slug, ...data, content: processedContent.toString() };
}
