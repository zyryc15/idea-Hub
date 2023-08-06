import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Idea-Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {user && (
                  <Link className="nav-link" to="/createpost">
                    Create Post
                  </Link>
                )}
              </li>
            </ul>
            <LogIn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
