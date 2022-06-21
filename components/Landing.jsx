import React from "react";
const Landing = () => {
  return (
    <div
      className="landing"
      style={{ width: "100%", backgroundColor: "#2c3e50", height: "100vh" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "white",
          paddingTop: "150px",
        }}
      >
        To Do List
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          textTransform: "capitalize",
          color: "#fff",
          paddingTop: "10px",
          paddingBottom: "50px",
          letterSpacing: "2px",
          wordSpacing: "2px",
        }}
      >
        Manage All your daily tasks using To-do-list
      </p>
      <section className="news" style={{ width: "40%", margin: "10px auto" }}>
        <div className="container">
          <h3
            className="nletter"
            style={{ textAlign: "center", color: "#fff", marginTop: "15px" }}
          >
            Subscribe To NewsLetter
          </h3>
          <hr style={{ color: "#fff", opacity: "1" }} />
        </div>
        <div class="input-group mb-3 container">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          style={{
            marginLeft: "40%",
            backgroundColor: "#1abc9c",
            border: "1px solid #1abc9c",
          }}
        >
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default Landing;
