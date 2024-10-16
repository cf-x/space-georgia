import { Post } from "@/utils/posts";
import Image from "next/image";

export default function Article({ post }: { post: Post }) {
  return (
    <a
      href={`/${post.id}`}
      className="max-w-64 bg-zinc-900 text-white rounded-xl mx-auto"
    >
      <Image
        src={post.image}
        alt={post.alt}
        height={256}
        width={256}
        className="rounded-xl"
      />
      <div className="p-2 font-semibold">{post.title}</div>
      <div className="flex justify-between p-2">
        <div>{post.date}</div>
        <div>სერია N{post.id}</div>
      </div>
    </a>
  );
}
