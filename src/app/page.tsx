import React from 'react'
import "@/styles/home.scss"
import Sidebar from '@/components/Sidebar'
import Rightbar from '@/components/Rightbar'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <main className='flex-1'>
        <h1 className='main-heading'>Hi. I'm Neh.</h1>
        <span className='italic text-white'>Pronunciation: /neɪ/</span>
        <p className="main-paragraph mt-4 about-text">
          My name's Neh, and I'm a software engineer. With years of experiencing working at startups, as well as interning at companies like Samsung, I have a diverse set of skills that I bring to the table.
          Although I've primarily worked on frontends, I have experience building full-stack applications.
        </p>
        <section className="section-explore">
          <h2>Get To Know Me</h2>
          <div className="explore-links">
            <Link href="/experience" className="explore-link">Experience</Link>
            <Link href="/projects" className="explore-link">Projects</Link>
            <a href="#projects" className="explore-link">Skills</a>
          </div>
        </section>
        {/* Experience section */}
        {/* <section className="section-exp">
          <h2>Experience</h2>
          <ol className="relative border-s timeline-container">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5"></div>
              <time className="mb-2 text-md leading-none text-gray-200 ">June 2024 - Sep 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer (Contract), <i>BoomerRoomers LLC</i></h3>
              <ul>
                <li>Implemented a preference-based matching algorithm with Node.JS resulting in 30% expansion of the user base</li>
                <li>Revamped frontend architecture with Next.js and Material-UI, optimizing for performance, SEO, and accessibility</li>
                <li>Designed a professional browsing UI with optimized components, assets and handled state management with Redux</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5"></div>
              <time className="text-gray-200 text-md ">June 2022 - Sep 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Development Intern, <i>MITACS</i></h3>
              <ul>
                <li>Guided creation of novel full-stack MERN application delivering personalized assignments for 10+ academic grades</li>
                <li>Optimized accessibility and performance, ensuring AAA compliance and improving Time-To-First-Byte by 20%</li>
                <li>Honored with a nomination for the coveted MITACS Award for Outstanding Innovation - International</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5"></div>
              <time className="mb-2 text-md leading-none text-gray-200 ">Aug 2020 – July 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development Team Lead, <i>OWASP (University Chapter)</i></h3>
              <ul>
                <li>Progressed from Developer to Development Team Lead within OWASP over a span of two years</li>
                <li>Coordinated 10+ developers to organize a nationwide cybersecurity hackathon, resulting in 200+ participants</li>
                <li>Crafted an organization-centric recruitment application using Next.js and Google Firebase with a CI/CD pipeline,
                  on-boarding 70+ candidates</li>
              </ul>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5"></div>
              <time className="mb-2 text-md leading-none text-gray-200 ">June 2021 – Jan 2022</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern, <i>Samsung R&D Institute</i></h3>
              <ul>
                <li>Developed an innovative computer–vision app for high quality video annotation with TensorFlow, Flask and React</li>
                <li>Designed a mobile-friendly UI for seamless media uploading, dataset selection and viewable annotation results</li>
                <li>Awarded the Samsung Certificate of Excellence in a pool of over 20 teams</li>
              </ul>
            </li>
          </ol>
        </section> */}
        {/* Projects here */}
        {/* <section className="section-projects">
          <h2>Projects</h2>
          <div className='projects-row'>
            <div className="project">
              <div className="image-container">
                <Image
                  src="/project1.webp"
                  alt="Dashboard showing job application statistics, with a pie chart and a bar chart"
                  width={600}
                  height={600}
                />
              </div>
              <h3 className="project-title">Job Application Tracker</h3>
              <p className="project-description">A job application status tracker used to manage and track
                1000+ job applications for over 5 users. Established a robust cloud infrastructure with AWS S3 for efficient media storage,
                RDS for scalable database management, EC2 for server deployment and API Gateway for proxy management. Includes a
                CI/CD pipeline integrating Docker on EC2 with GitHub Actions, automating JUnit and Mockito
                tests before deployment. &nbsp;
                <a
                  href="https://github.com/nehjoshi/Job-Application-Tracker"
                  rel='noreferrer'
                  target='_blank'
                  className="project-link">
                  View Project</a>
              </p>
            </div>
            <div className="project">
              <div className="image-container">
                <Image src="/project2.webp" alt="Homepage of The Mirror Test project" width={600} height={600} />
              </div>
              <h3 className="project-title">The Mirror Test</h3>
              <p className="project-description">An interactive web app (Next.JS, MongoDB, Node.JS, OAuth) that provides mental health insights
                based on 5 scientifically researched questionnaires, with over 160 questions. Includes email reminders using nodemailer,
                with downloadable PDF results and auto-save functionality to retain user progress. Also has an AI-powered chat system to
                consistently provide detailed mental health explanations based on questionnaire results. &nbsp;
                <a
                  href="https://github.com/nehjoshi/The-Mirror-Test"
                  rel='noreferrer'
                  target='_blank'
                  className="project-link">
                  View Project</a>
              </p>
            </div>
          </div>
        </section> */}
      </main>
      <Rightbar />
    </div>
  )
}

export default Home