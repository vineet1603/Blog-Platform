import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg app-navbar px-3 px-lg-5 py-3">
      <div className="container-fluid p-0">
        <Link to="/" className="navbar-brand text-white fw-bold fs-4 brand-glow">
          Blog Platform
        </Link>

        <div className="d-flex align-items-center gap-2 ms-auto">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-light btn-sm rounded-pill px-3 fw-semibold">
                Dashboard
              </Link>
              <Link to="/write" className="btn btn-outline-light btn-sm rounded-pill px-3 fw-semibold">
                Write Post
              </Link>

              <div className="position-relative">
                <button
                  type="button"
                  className="btn btn-light btn-sm rounded-pill px-3 fw-semibold"
                  onClick={() => setOpen(!open)}
                >
                  👤 {user.username}
                </button>

                {open && (
                  <div className="user-menu shadow-lg">
                    <p className="menu-item mb-2">Profile</p>
                    <button type="button" className="menu-item menu-danger" onClick={logout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="btn btn-light btn-sm rounded-pill px-3 fw-semibold">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;