import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "./Navbar";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    API.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const likePost = async (id) => {
    await API.post(`/posts/${id}/like`);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await API.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <>
      <Navbar />

      <section className="dashboard-section py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <h2 className="fw-bold mb-0">Dashboard</h2>
            <Link to="/write" className="btn btn-primary rounded-pill px-4 fw-semibold">
              Write Post
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className="alert alert-light border text-center fw-semibold">No Posts Yet</div>
          ) : (
            <div className="row g-4">
              {posts.map((post) => (
                <div key={post.id} className="col-12">
                  <div className="card post-card border-0 shadow-sm">
                    <div className="card-body">
                      <h3 className="h5 fw-bold mb-2">{post.title}</h3>
                      <p className="text-secondary mb-3">{post.content}</p>
                      <p className="mb-3"><strong>Likes:</strong> {post.likes}</p>

                      <div className="d-flex gap-2">
                        <button type="button" className="btn btn-outline-primary btn-sm rounded-pill px-3" onClick={() => likePost(post.id)}>
                          Like
                        </button>
                        <button type="button" className="btn btn-outline-danger btn-sm rounded-pill px-3" onClick={() => deletePost(post.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Dashboard;