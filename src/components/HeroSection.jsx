function HeroSection() {
  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <span className="badge rounded-pill text-bg-light px-3 py-2 mb-3">
              Creative Stories • Daily Insights
            </span>
            <h1 className="display-4 fw-bold mb-3">Discover Ideas That Spark Action</h1>
            <p className="lead mb-4">
              Explore trending articles, personal stories, and expert tips in one beautifully crafted place.
            </p>
            <a href="#popular-blogs" className="btn btn-light btn-lg px-4 rounded-pill fw-semibold">
              Explore Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;