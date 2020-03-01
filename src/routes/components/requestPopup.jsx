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
      <div className="bg-dark" style={{ borderRadius: "10px" }}>
        {/* <a style={{ float: "right" }} onClick={close}>
          &times;
        </a> */}
        <header style={{ width: "15%", margin: "0px auto" }}>
          <span
            style={{ margin: "5px auto", align: "centre" }}
            className="text-light text text-lg"
          >
            Blood Request
          </span>
        </header>
        <content>
          <form style={{ width: "90%", margin: " 5px auto" }}>
            <div className="row">
              <label
                className="form-check-label text-light"
                for="inlineCheckbox1"
              >
                Blood Groups:
              </label>
              <div className="form-check form-check-inline offset-sm-1">
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
                  B+
                </label>
              </div>
              <div className="form-check form-check-inline offset-sm-1">
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
                  O+
                </label>
              </div>
              <div className="form-check form-check-inline offset-sm-1">
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
                  A-
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
              <div className="form-check form-check-inline offset-sm-1">
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
                  AB-
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
            </div>
            <div className="row">
              <label
                className="form-check-label text-light"
                for="inlineCheckbox1"
              >
                Request Type:
              </label>
              <div className="form-check form-check-inline offset-sm-1">
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
            </div>
          </form>
        </content>
        <div style={{ width: "80%", margin: "5px auto" }}>
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
      </div>
    )}
  </Popup>
);

export default RequestPopup;
