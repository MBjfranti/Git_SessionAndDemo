import React from "react";

const Authorship: React.FC = () => (
    <p className="authorship" style={{ fontSize: "0.9em" }}>
        Created by{" "}
        <a
            href="https://github.com/MBjfranti"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
        >
            John Franti
        </a>
        &nbsp;|&nbsp;6/25/2025&nbsp;|&nbsp;Built in React
    </p>
);

export default Authorship;
