import { Post } from "@/utils/posts";
import Image from "next/image";

export default function Header({ post }: { post: Post }) {
  return (
    <a
      href={`/${post.id}`}
      className="w-full border-2 border-white rounded-xl md:min-h-96 flex flex-col md:flex-row"
    >
      <Image
        src={post.image}
        alt={post.alt}
        width={520}
        height={100}
        className="rounded-l-xl"
      />
      <div className="text-white text-nowrap p-4">
        <div className="text-xl">{post.title}</div>
        <div className="text-xs text-zinc-300">{post.date}</div>
        <ul className="mt-4">
          {post.news.map((news, i) => {
            return <li key={`${post.id}-news-${i}`}>{news}</li>;
          })}
        </ul>
      </div>
    </a>
  );
}
