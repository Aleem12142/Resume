import React from "react";

export default function Resume() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        maxWidth: "800px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#a7e9d1",
          padding: "20px",
          color: "#004d40",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/image/aleem.jpg"
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginRight: "20px",
              border: "2px solid #fff",
            }}
          />
          <div>
            <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Muhammad Aleem</h1>
            <h2
              style={{ margin: "5px 0", fontSize: "1.2rem", fontWeight: "400" }}
            >
              Junior Web Developer
            </h2>
            <p style={{ margin: 0 }}>Karachi, Pakistan</p>
            <p style={{ margin: 0 }}>
              <a
                href="mailto:muhammadaleem123@gmail.com"
                style={{ color: "#004d40", textDecoration: "none" }}
              >
                m.aleem62162@gmail.com
              </a>
            </p>
            <p style={{ margin: 0 }}>0308-0195295</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div style={{ padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
        <a
          href="https://www.facebook.com/muhammad.aleem.9822/"
          target="_blank"
          style={{
            marginRight: "10px",
            color: "#004d40",
            textDecoration: "none",
          }}
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/m.aleem_150/"
          target="_blank"
          style={{
            marginRight: "10px",
            color: "#004d40",
            textDecoration: "none",
          }}
        >
          Instagram
        </a>
      </div>

      {/* Content Section */}
      <div style={{ padding: "20px" }}>
        {/* Profile Section */}
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Profile
          </h3>
          <p className="text-md font-sans tracking-tight">
            A passionate and detail-oriented Junior Web Developer with a solid
            foundation in HTML, CSS, JavaScript, and React. Skilled at creating
            responsive, user-friendly web interfaces and collaborating
            effectively within a team environment. Quick to adapt to new
            technologies and eager to contribute to innovative projects that
            solve real-world problems. Committed to continuous learning and
            improving technical expertise to deliver high-quality solutions
            aligned with organizational goals.
          </p> <br/>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Languages
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Punjabi</li>
            <li>Urdu</li>
            <li>English</li>
          </ul>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Education
          </h3>
          <p>
            <strong>DAE, Pakistan Navy Polytechnic Institute, Karachi</strong>
            <br />
            January 2020 — January 2023
          </p>
        </div>

        {/* Courses */}
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Courses
          </h3>
          <p>
            <strong>A-Grade Welder, Pakistan Navy (Dockyard)</strong>
            <br />
            November 2023 — February 2024
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Skills
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Ability to Multitask</li>
            <li>Leadership</li>
            <li>Effective Time Management</li>
            <li>Computer Skills</li>
            <li>Fast Learner</li>
            <li>Communication Skills</li>
            <li>Ability to Work in a Team</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: "20px" }}>
          <h3
            style={{
              color: "#00796b",
              marginBottom: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            Technical Skills
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Languages */}
        <div style={{ marginBottom: "20px" }}></div>
      </div>
    </div>
  );
}
