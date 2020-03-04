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
                <span className="badge badge-danger">Your Donors</span>
              </h1>
              <div
                className="list-group rounded border border-dark p-3 scroll-Y"
                style={{
                  overflowY: "scroll",
                  WebkitOverflowScrolling: "touch",
                  maxHeight: "65vh"
                }}
              >
                <a
                  href="#"
                  className="list-group-item list-group-item-action my-2"
                  style={{ backgroundColor: "#ff8080" }}
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action my-2"
                  style={{ backgroundColor: "#ff8080" }}
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action my-2"
                  style={{ backgroundColor: "#ff8080" }}
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action my-2"
                  style={{ backgroundColor: "#ff8080" }}
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action my-2"
                  style={{ backgroundColor: "#ff8080" }}
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2"
                >
                  Dapibus ac facilisis in
                </a>
              </div>
            </div>

            <div className="p-4 col-md-6">
              <h1>
                <span className="badge badge-danger">Your Donations</span>
              </h1>
              <div
                className="list-group rounded border border-dark p-3"
                style={{
                  overflowY: "scroll",
                  WebkitOverflowScrolling: "touch",
                  maxHeight: "65vh"
                }}
              >
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Dapibus ac facilisis in
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Cras justo odio
                </a>
                <a
                  href="#"
                  style={{ backgroundColor: "#ff8080" }}
                  className="list-group-item list-group-item-action my-2 text-light"
                >
                  Dapibus ac facilisis in
                </a>
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
