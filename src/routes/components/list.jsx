import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const List = props => {
  const [request, setRequest] = useState([2]);

  (() => {
    axios.get(`http://localhost:5000/hospital`).then(res => {
      setRequest([...res.data]);
    });
  })();

  const handleClick = listName => {
    props.handleSubmit(listName);
  };

  return (
    <React.Fragment>
      {request.length !== 0 && (
        <div className="p-4">
          <div className="rounded border border-dark row">
            <div className="p-4 col-md-6">
              <h1>
                <span className="h1 badge badge-danger">Your doners</span>
              </h1>
              <div
                className="list-group rounded border border-dark p-3 scroll-Y"
                style={{
                  overflowY: "scroll",
                  WebkitOverflowScrolling: "touch",
                  maxHeight: "65vh"
                }}
              >
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#ff8080"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-muted row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#ff8080"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-muted row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#ff8080"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-muted row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#ff8080"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-muted row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
              </div>
            </div>

            <div className="p-4 col-md-6">
              <h1>
                <span className="badge badge-danger">You donating</span>
              </h1>
              <div
                className="list-group rounded border border-dark p-3"
                style={{
                  overflowY: "scroll",
                  WebkitOverflowScrolling: "touch",
                  maxHeight: "65vh"
                }}
              >
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#c11758"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-warning row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#c11758"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-warning row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#c11758"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-warning row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#c11758"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-warning row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
                <button
                  className="btn btn-danger list-group-item my-2 p-2 text-light"
                  style={{
                    backgroundColor: "#c11758"
                  }}
                >
                  <div className="col-md-5">
                    <span className="h3 row">Aniket Kumar</span>
                    <span className="h6 text-warning row offset-md-2">
                      Ye bhadwagiri me ustad hai
                    </span>
                  </div>
                  <h1 className="float-right mt-n5">
                    <span className="badge badge-dark mb-4">28Km</span>
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {request.length === 0 && (
        <div style={{ width: "100%" }}>
          <div
            className="text-center"
            style={{
              paddingTop: "300px",
              paddingBottom: "300px"
            }}
          >
            <p className="h1">You have no Request</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default List;
