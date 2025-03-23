import React from "react";
import "@/styles/home.scss";
import Sidebar from "@/components/Sidebar";
import Rightbar from "@/components/Rightbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="flex-1">
        <h1 className="main-heading">Hi. I'm Neh.</h1>
        <span className="italic text-white">Pronunciation: /neɪ/</span>
        <p className="main-paragraph mt-4 about-text">
          My name's Neh, and I'm a software engineer. With years of experiencing
          working at startups, as well as interning at companies like Samsung, I
          have a diverse set of skills that I bring to the table. Although I've
          primarily worked on frontends, I have experience building full-stack
          applications.
        </p>
        <section className="section-explore">
          <h2>Get To Know Me</h2>
          <div className="explore-links">
            <Link href="/experience" className="explore-link">
              Experience
            </Link>
            <Link href="/projects" className="explore-link">
              Projects
            </Link>
            <Link href="/skills" className="explore-link">
              Skills
            </Link>
            <a href="blog" className="explore-link">
              Blog
            </a>
          </div>
        </section>
      </main>
      <Rightbar />
    </div>
  );
};

export default Home;
