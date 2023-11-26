import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import axios from "axios";

export default function Maincontent() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("posts");
  const [file, setFile] = useState(null);

  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
  };

  const handleFileChange = (e) => {
    // Handle file change logic here
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // Make API call to upload file to Cloudinary
        const response = await axios.post(
          "https://kind-tan-scallop-tie.cyclic.app/media/upload",
          formData
        );
        console.log("File uploaded successfully:", response.data);
        // You may want to update the state or perform other actions after successful upload
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 25000);
  }, []);

  async function fetchData() {
    fetch("https://kind-tan-scallop-tie.cyclic.app/media")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="col-md-6 gedf-main">
        <div className="card gedf-card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${tab === "posts" ? "active" : ""}`}
                  id="posts-tab"
                  href="#posts"
                  role="tab"
                  aria-controls="posts"
                  aria-selected={tab === "posts"}
                  onClick={() => handleTabChange("posts")}
                >
                  Make a publication
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${tab === "images" ? "active" : ""}`}
                  id="images-tab"
                  role="tab"
                  aria-controls="images"
                  aria-selected={tab === "images"}
                  href="#images"
                  onClick={() => handleTabChange("images")}
                >
                  Images
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade show ${
                  tab === "posts" ? "active" : ""
                }`}
                id="posts"
                role="tabpanel"
              >
                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    Post
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                  ></textarea>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  tab === "images" ? "show active" : ""
                }`}
                id="images"
                role="tabpanel"
              >
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={handleFileChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Upload image or video
                    </label>
                  </div>
                </div>
                <div className="py-4"></div>
              </div>
            </div>
            <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Share
                </button>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-globe"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-globe"></i> Public
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-users"></i> Friends
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user"></i> Just me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feed data={data} />
      </div>
    </>
  );
}
