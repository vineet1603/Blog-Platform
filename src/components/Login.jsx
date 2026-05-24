import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        username,
        password
      });

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      }
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-5">
            <div className="login-box">
              <h2 className="fw-bold mb-2">Welcome Back</h2>
              <p className="text-secondary mb-4">Sign in to continue your writing journey</p>

              <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Username</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4 text-start">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="button" className="btn btn-primary-success btn-lg w-100 rounded-pill" onClick={handleLogin}>
                Login
              </button>

              <div className="login-subtext">Access your Blog Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;