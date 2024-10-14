import Article from "@/components/article";
import Header from "@/components/header";
import { posts } from "@/utils/posts";

export default function Home() {
  return (
    <main>
      <Header post={posts[posts.length - 1]} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-12 gap-y-12">
        {posts.map((post) => (
          <Article post={post} key={`post-${post.id}`} />
        ))}
      </div>
    </main>
  );
}
