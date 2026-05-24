import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "./Navbar";

function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const publishPost = async () => {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/posts", {
        title,
        content
      });

      alert("Post Published Successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error publishing post");
    }
  };

  return (
    <>
      <Navbar />

      <div className="write-wrapper">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="write-card">
                <h2 className="fw-bold mb-2">Write a New Post</h2>
                <p className="text-secondary mb-4">Craft your thoughts and publish them to your audience.</p>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Content</label>
                  <textarea
                    rows="8"
                    className="form-control"
                    placeholder="Write your content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <button type="button" className="btn btn-primary btn-lg rounded-pill px-4" onClick={publishPost}>
                  Publish Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WritePost;