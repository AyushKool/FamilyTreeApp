import React from "react";

export default function CoupleModal() {
  return (
    <div id="coupleModal" classNameName="modal">
      <div className="modal-content">
        <span className="close" id="coupleclose">
          &times;
        </span>
        <form className="form">
          <label for="hname">Name of Husband</label>
          <input
            type="text"
            id="hname"
            name="hname"
            placeholder="Husband's name..."
          />

          <label for="wname">Name of Wife</label>
          <input
            type="text"
            id="hname"
            name="wname"
            placeholder="Wife's name.."
          />

          <input
            type="submit"
            value="Submit"
            className="submit"
            id="couplesubmitbtn"
          />
        </form>
      </div>
    </div>
  );
}
