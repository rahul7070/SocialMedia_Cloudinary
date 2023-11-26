import React from "react";
import Leftsidebar from "./components/Leftsidebar";
import Maincontent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import Rightsidebar from "./components/Rightsidebar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar />
          <Maincontent />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}
