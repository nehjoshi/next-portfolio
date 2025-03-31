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
        <span className="blog__date">March 31, 2025</span>
        <h1 className="blog__title">The Purpose of This Blog</h1>
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
          "Create your own blog. Share your technical journey," they said. "You
          never know who you might inspire."
          <br />
          <br />
          Well, here I am, creating my own blog, and sharing my technical
          journey. Will anyone read it? I doubt it. But the purpose of this blog
          isn't to inspire, or motivate, or instruct, or preach. It's more like
          a journal (albeit, a technical one) - a diary I'll look back at in a
          few years' time and laugh at the kind of novice I was.
        </p>
        <h2 className="blog__h2">Rejected at Canonical</h2>
        <p className="blog__paragraph">
          I had the good fortune of interviewing at Canonical, a process that
          lasted about a month and a half. The amount of time I invested into
          the company, thinking I would certainly receive an offer after the
          last round, was a little too much (especially considering the
          outcome). It started with a "written interview" - a document with
          almost 34 questions and answers, and around 8-10 pages in length.
          <br />
          <br />I gave it my all, and, to my surprise, I received positive
          feedback and was invited for a technical assessment, as well as a
          psychometric test. I studied relentlessly, especially for the
          psychometric test, and was once again rewarded with a fantastic score.
          The next round consisted of 3 technical interviews - one for frontend,
          one for Linux and one for system design. Once again, I aced all three
          interviews and was moved forward to the Talent Interview.
          <br />
          <br />
          Things were really starting to get serious now. I was required to take
          a behavioural test before this interview (Thomas PPA, to be precise),
          which was rather intuitive. And finally, the Talent Interview went
          awesome, which had questions you would typically expect in a
          behavioural interview.
          <br />
          <br />
          The following week, I received an email stating that I have moved
          forward in the process, and would be meeting with the hiring lead. It
          was a 10-day wait before the interview occurred, which was quite
          straightforward, and I was confident I had answered all the questions
          to the best of my ability.
          <br />
          <br />
          Fast forward to the following morning, the day after the interview,
          and I received an extremely long email from Canonical - one I didn't
          bother to read fully. I skimmed through it and noticed the phrases,
          "we regret to inform you," and "unfortunately, we..."
          <br />
          <br />
          And that was the end. A time investment of a month and a half gone
          down the drain, in the blink of an eye. I'd be lying if I said I
          didn't cry, or felt broken, and shattered. I had done everything
          seemingly right, and yet I got rejected. Hell, I'd even made
          open-source contributions to Canonical's projects during the interview
          process to showcase my proactiveness, but all that for nothing.
        </p>
        <h2 className="blog__h2">A New Beginning</h2>
        <p className="blog__paragraph">
          A new end leads to a new beginning. At least, that's how I like to see
          things.
          <br />
          <br />
          So here I am now, about to start my new job as a software engineer at an early-stage startup, hoping to make a real-world impact.
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
