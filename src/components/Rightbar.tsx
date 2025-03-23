import "@/styles/rightbar.scss";
import Image from "next/image";

const Rightbar = () => {
  return (
    <div className="sticky top-0 right-0 flex flex-col h-auto w-96 rightbar-container">
      <h2 className="text-center text-white">Latest Blogs</h2>
      <div className="blog-container flex flex-col gap-4">
        <div className="blog-item flex flex-col">
          <div className="blog-image-container">
            <Image src={"/sample-blog.webp"} width={400} height={400} alt="" className="object-cover"/>
          </div>
          <div className="blog-text-container flex flex-col gap-3">
            <h3 className="blog-title">How to Build a Website</h3>
            <p className="blog-description">
              Learn how to build a website with HTML, CSS, and JavaScript
            </p>
            <a href="https://www.example.com" className="blog-link">
              Read More
            </a>
          </div>
        </div>
        <div className="blog-item flex flex-col">
          <div className="blog-image-container">
            <Image src={"/sample-blog-2.webp"} width={400} height={400} alt="" className="object-cover"/>
          </div>
          <div className="blog-text-container flex flex-col gap-3">
            <h3 className="blog-title">Optimizing Frontend Performance</h3>
            <p className="blog-description">
              Learn how to optimize your frontend performance with these tips
            </p>
            <a href="https://www.example.com" className="blog-link">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
