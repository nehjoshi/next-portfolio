import Sidebar from "@/components/Sidebar";
import "@/styles/home.scss";

const page = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="flex-1 !pr-[150px]">
        <h1 className="main-heading">BLOG</h1>
        <p className="main-paragraph mt-4 about-text">
          I try to write a new blog post every week. I write about a variety of
          topics, including software engineering, productivity, emerging trends
          and what I've learnt recently.
        </p>
      </main>
    </div>
  );
};

export default page;
