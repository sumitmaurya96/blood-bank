import React from "react";
import Popup from "reactjs-popup";

const RequestPopup = props => (
  <Popup
    trigger={
      <button
        className="btn-lg m-2"
        style={{
          backgroundColor: "#ff8080",
          border: "3px solid #f7e6e6"
        }}
      >
        REQUEST NOW
      </button>
    }
    modal
  >
    {close => (
      <div className="bg-danger p-1" style={{ borderRadius: "10px" }}>
        <header className="mx-auto" style={{ width: "110px" }}>
          <p className="m-2 badge badge-dark">Blood Request</p>
        </header>
        <content>
          <form className="mx-2-auto" style={{ width: "90%" }}>
            <dl className="row">
              <dt
                className="ml-2 col-sm-3 form-check-label text-light"
                for="inlineCheckbox1"
              >
                Blood Groups:
              </dt>
              <dd className="col-sm-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox1"
                  >
                    A+
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox2"
                  >
                    A-
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox1"
                  >
                    B+
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox2"
                  >
                    B-
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox1"
                  >
                    AB+
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox2"
                  >
                    AB-
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox1"
                  >
                    O+
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox2"
                  >
                    O-
                  </label>
                </div>
              </dd>

              <dt
                className="col-sm-3 ml-2 form-check-label text-light"
                for="inlineCheckbox1"
              >
                Request Type:
              </dt>
              <dd className="col-sm-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    required
                  />
                  <label
                    className="form-check-label text-light"
                    for="inlineCheckbox1"
                  >
                    Urgent
                  </label>
                </div>
              </dd>
            </dl>
            <div className="row ml-1">
              <button
                className="btn-lg m-2"
                style={{
                  backgroundColor: "#ff8080",
                  border: "3px solid #f7e6e6"
                }}
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Request
              </button>
              <button
                className="btn-lg m-2"
                style={{
                  backgroundColor: "#ff8080",
                  border: "3px solid #f7e6e6",
                  float: "right"
                }}
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </content>
      </div>
    )}
  </Popup>
);

export default RequestPopup;
