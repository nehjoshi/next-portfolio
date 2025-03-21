import "@/styles/rightbar.scss";

const Rightbar = () => {
  return (
    <div className="sticky top-0 right-0 flex flex-col h-auto w-96 rightbar-container">
      <h2 className="text-center text-white">Latest Blogs</h2>
      <div className="blog-container">
        <div className="blog-image-container">
        </div>
        <div className="blog-text-container">
          <h3 className="blog-title">How to Build a Website</h3>
          <p className="blog-description">Learn how to build a website with HTML, CSS, and JavaScript</p>
          <a href="https://www.example.com" className="blog-link">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Rightbar