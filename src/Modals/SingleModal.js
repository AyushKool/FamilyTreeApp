import React from "react";

export default function SingleModal() {
  return (
    <div id="singleModal" className="modal">
      <div className="modal-content">
        <span className="close" id="singleclose">
          &times;
        </span>
        <form className="form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="submit"
            value="Submit"
            className="submit"
            id="singlesubmitbtn"
          />
        </form>
      </div>
    </div>
  );
}
