import { getAllPosts, getPost } from '@/lib/posts';

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);



  return (
  <main>
    <article dir={post.dir || "ltr"}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  </main>
);
}

// Next.js 13 App Router dynamic params
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
