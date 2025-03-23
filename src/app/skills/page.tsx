import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="flex-1 !pr-[150px]">
        <h1 className="main-heading">SKILLS</h1>
        <p className="main-paragraph mt-4 about-text">
          Like most developers, I started my journey learning HTML, CSS and JS.
          I learnt about the DOM, the asynchronous nature of JS, and the event
          loop. I then moved on to frameworks like React (back when class-based
          components were the norm). Later, I continued my journey by learning
          backend technologies like Node.Js and Spring Boot, and devops skills
          like Git, Docker, and AWS. I also have experience with databases like
          MongoDB and PostgreSQL.
        </p>
      </main>
    </div>
  );
};

export default page;
