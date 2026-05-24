import BlogCard from "./BlogCard";

function FeaturedBlogs() {
  return (
    <section className="section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Featured Blogs</h2>
          <p className="text-secondary mb-0">Curated picks from creators and thought leaders</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Why I started Blogi"
              image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
              author="Brandon Freeman"
              date="Feb 14, 2018"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Blogi Launches Public URL"
              image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              author="Daniel Stewart"
              date="Feb 14, 2018"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Why I started Blogi"
              image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              author="Jane Cooper"
              date="Feb 14, 2018"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-4">
          <button type="button" className="btn btn-primary btn-sm rounded-pill px-3">01</button>
          <button type="button" className="btn btn-outline-primary btn-sm rounded-pill px-3">02</button>
          <button type="button" className="btn btn-outline-primary btn-sm rounded-pill px-3">03</button>
          <button type="button" className="btn btn-outline-primary btn-sm rounded-pill px-3">Next</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlogs;