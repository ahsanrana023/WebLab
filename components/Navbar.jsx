import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            To-Do-List
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add"
                  className="nav-link"
                  style={{
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    marginRight: "30px",
                    borderRadius: "6px",
                  }}
                >
                  Add Task
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
