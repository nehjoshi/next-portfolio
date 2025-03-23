import Sidebar from "@/components/Sidebar";
import "@/styles/home.scss";
import Image from "next/image";

const page = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="flex-1 !pr-[150px]">
        <h1 className="main-heading">PROJECTS</h1>
        <p className="main-paragraph mt-4 about-text">
          My name's Neh, and I'm a software engineer. With years of experiencing
          working at startups, as well as interning at companies like Samsung, I
          have a diverse set of skills that I bring to the table. Although I've
          primarily worked on frontends, I have experience building full-stack
          applications.
        </p>
        <section className="section-projects">
          <h2>Projects</h2>
          <div className="projects-row">
            <div className="project">
              <div className="image-container">
                <Image
                  src="/project1.webp"
                  alt="Dashboard showing job application statistics, with a pie chart and a bar chart"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="project-title">Job Application Tracker</h3>
              <p className="project-description">
                A job application status tracker used to manage and track 1000+
                job applications for over 5 users. Established a robust cloud
                infrastructure with AWS S3 for efficient media storage, RDS for
                scalable database management, EC2 for server deployment and API
                Gateway for proxy management. Includes a CI/CD pipeline
                integrating Docker on EC2 with GitHub Actions, automating JUnit
                and Mockito tests before deployment. &nbsp;
                <a
                  href="https://github.com/nehjoshi/Job-Application-Tracker"
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                >
                  View Project
                </a>
              </p>
            </div>
            <div className="project">
              <div className="image-container">
                <Image
                  src="/project2.webp"
                  alt="Homepage of The Mirror Test project"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="project-title">The Mirror Test</h3>
              <p className="project-description">
                An interactive web app (Next.JS, MongoDB, Node.JS, OAuth) that
                provides mental health insights based on 5 scientifically
                researched questionnaires, with over 160 questions. Includes
                email reminders using nodemailer, with downloadable PDF results
                and auto-save functionality to retain user progress. Also has an
                AI-powered chat system to consistently provide detailed mental
                health explanations based on questionnaire results. &nbsp;
                <a
                  href="https://github.com/nehjoshi/The-Mirror-Test"
                  rel="noreferrer"
                  target="_blank"
                  className="project-link"
                >
                  View Project
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
