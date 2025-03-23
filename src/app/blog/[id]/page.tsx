"use client";
import "@/styles/blogpost.scss";
import Image from "next/image";
import { useParams } from "next/navigation";

const page = () => {
  //Get blog id
  const { id } = useParams();
  console.log(id);

  return (
    <div className="page-container">
      <main className="blog flex flex-col">
        <span className="blog__date">July 12, 2024</span>
        <h2 className="blog__title">Sample Blog Post Title</h2>
        <p className="blog__subtitle">
          This is a subtitle for the blog post. It should be a brief summary of
          what the blog post is about. Remember, it shouldn't be too long.
        </p>
        <div className="blog__main_image_container">
          <Image src="/sample-blog.webp" alt="" height={700} width={700} />
        </div>
        <span className="blog__main_image_caption">
          This is a sample caption for a sample blog
        </span>
        <p className="blog__paragraph">
          This is a sample paragraph for the blog post. It should be a brief
          summary of what the blog post is about. Remember, it shouldn't be too
          long. This is a sample paragraph for the blog post. It should be a
          brief summary of what the blog post is about. Remember, it shouldn't
          be too long. This is a sample paragraph for the blog post. It should
          be a brief summary of what the blog post is about.
        </p>
        <blockquote className="blog__quote">
          Our goal is to make open source available to everyone across the
          world, from Calcutta to California, and allow to the world to
          contribute to the world's most meaningful projects.
        </blockquote>
      </main>
    </div>
  );
};

export default page;
