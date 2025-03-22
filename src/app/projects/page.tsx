import Sidebar from "@/components/Sidebar";
import "@/styles/home.scss";

const page = () => {
    return (
        <div className="home-container">
            <Sidebar />
            <main className='flex-1 !pr-[150px]'>
                <h1 className='main-heading'>PROJECTS</h1>
                <p className="main-paragraph mt-4 about-text">
                    My name's Neh, and I'm a software engineer. With years of experiencing working at startups, as well as interning at companies like Samsung, I have a diverse set of skills that I bring to the table.
                    Although I've primarily worked on frontends, I have experience building full-stack applications.
                </p>
            </main>
        </div>
    )
}

export default page