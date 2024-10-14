"use client";
import { Post, posts } from "@/utils/posts";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function JournalPage() {
  const [post, setPost] = useState<Post>();
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/${slug}/index.md`);
        if (!response.ok) {
          throw new Error("File not found");
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchMarkdown();
    const id: number = JSON.parse(slug[0]);
    setPost(posts[id]);
  }, [slug]);

  return (
    <article className="relative px-4">
      <div className="flex justify-between text-sm text-zinc-600">
        <div>სერია N-{slug}</div>
        <div>{post?.date}</div>
        <div>Space-Georgia</div>
      </div>

      <h1 className="font-bold text-lg md:text-2xl text-center">
        {post?.title}
      </h1>
      <div className="text-sm text-center font-zinc-300 text-zinc-800">
        {post?.description}
      </div>
      <div className="md:min-h-96 w-full bg-black my-8 rounded-xl flex flex-col">
        <Image src={post?.image!} alt={post?.alt!} width={896} height={100} />
        <div className="flex justify-between text-white text-xs p-1">
          <div>{post?.alt!}</div>
          <div>{post?.source && `წყარო: ${post?.source!}`}</div>
        </div>
      </div>
      <Markdown
        className="mt-12"
        components={{
          h2: ({ children }) => {
            return (
              <h2 className="text-lg md:text-xl my-8 font-semibold">
                {children}
              </h2>
            );
          },
          a: ({ children, href }) => {
            return (
              <a href={href} className="underline">
                {children}
              </a>
            );
          },
          img: ({ src, alt }) => {
            return (
              <div className="flex justify-center w-full my-4">
                <Image
                  src={`/posts/${slug}/${src!}`}
                  alt={alt!}
                  width={448}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            );
          },
        }}
      >
        {markdownContent}
      </Markdown>
      <div className="text-center text-lg md:text-xl my-24">
        სერია N-{slug} დასასრული
      </div>
    </article>
  );
}
