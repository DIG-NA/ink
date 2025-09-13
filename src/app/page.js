import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts(); // fetch metadata

  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link> - {post.date}
          </li>
        ))}
      </ul>
    </main>
  );
}
