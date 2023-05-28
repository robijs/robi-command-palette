import React from "react";
import { Link } from "react-router-dom";
import MyTheme from "../components/Themes/MyTheme";

export default function Home() {
    return (
        <div className="Home">
            <p>
                Use one of these keyboard shortcuts from any page to launch the
                command palete.
            </p>
            <div className="mb-7">
                <h3>macOS</h3>
                <kbd>Cmd ⌘</kbd> <span className="plus">+</span>{" "}
                <kbd>Shift ⇧</kbd> <span className="plus">+</span> <kbd>P</kbd>
            </div>
            <div className="mb-7">
                <h3>Windows Linux</h3>
                <kbd>Ctrl ⌃</kbd> <span className="plus">+</span>{" "}
                <kbd>Shift ⇧</kbd> <span className="plus">+</span> <kbd>P</kbd>
            </div>
            <div className="mb-10">
                <img
                    style={{ objectFit: "cover", width: "50%", height: "50%" }}
                    src="/images/cmd-palette.png"
                    alt="Command Palette"
                    title="Command-Palette"
                />
            </div>
            <Link to="/Docs" className="link">
                Go to docs <i className="bi bi-caret-right-fill"></i>
            </Link>

            {/* Themems */}
            <div style={{ marginTop: "100px" }}>
                <MyTheme />
            </div>
        </div>
    );
}
