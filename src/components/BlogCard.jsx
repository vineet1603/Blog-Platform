function BlogCard({ title, image, author, date }) {
  return (
    <article className="card blog-card border-0 h-100">
      <img src={image} alt="blog" className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h3 className="h5 fw-bold mb-2">{title}</h3>
        <div className="blog-meta mb-3">
          By <span className="fw-semibold">{author}</span> • {date}
        </div>
        <button type="button" className="btn btn-outline-primary btn-sm rounded-pill mt-auto align-self-start px-3">
          Read More
        </button>
      </div>
    </article>
  );
}

export default BlogCard;