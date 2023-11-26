import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <a href="#" className="navbar-brand">
          <span style={{color:'rgb(1,113,206)', fontWeight:'bolder', fontSize:30, marginLeft:40}}>Social</span> <span style={{color:'grey', fontWeight:'bold', fontSize:20}}>App</span> 
        </a>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </nav>
    </>
  );
}
