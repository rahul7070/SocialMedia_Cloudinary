import React from "react";

export default function Leftsidebar() {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5">@Rashi Entertainment</div>
            <div className="h7 text-muted">Fullname : Rahul Raman</div>
            <div className="h7">
              Web Developer 
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">Followers</div>
              <div className="h5">5K</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">Following</div>
              <div className="h5">5000</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
