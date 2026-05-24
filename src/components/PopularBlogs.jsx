import BlogCard from "./BlogCard";

function PopularBlogs() {
  return (
    <section id="popular-blogs" className="section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Popular Blogs</h2>
          <span className="text-primary fw-semibold">Updated Hourly</span>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Don't miss a single math lesson"
              image="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              author="Michael"
              date="3hr ago"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Game or international tournament"
              image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              author="Michael"
              date="2hr ago"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogCard
              title="Download to start streaming"
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              author="Michael"
              date="1hr ago"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularBlogs;