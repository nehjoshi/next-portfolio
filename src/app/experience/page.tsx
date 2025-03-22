import Sidebar from "@/components/Sidebar";
import "@/styles/home.scss";

const page = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <main className='flex-1 !pr-[150px]'>
                <h1 className='main-heading'>EXPERIENCE</h1>
                <p className="main-paragraph mt-4 about-text">
                    My name's Neh, and I'm a software engineer. With years of experiencing working at startups, as well as interning at companies like Samsung, I have a diverse set of skills that I bring to the table.
                    Although I've primarily worked on frontends, I have experience building full-stack applications.
                </p>
                {/* Experiences start here */}
                <section className="section-exp">
                    <h2>Timeline</h2>
                    <ol className="relative border-s timeline-container !px-8">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5"></div>
                            <time className="mb-2 text-md leading-none text-gray-200">June 2024 - Sep 2024</time>
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
                </section>
            </main>
        </div>
    )
}

export default page