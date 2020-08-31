import React from "react";

function Single(props) {
  let modal = document.getElementById('singleModal')
  const handleClick = () => {
    modal.style.display = 'block'
  }

  let submitbtn = document.getElementById("singlesubmitbtn");
  let info = {
    name : props.name,
    gender : props.gender
  }
  submitbtn.onclick = () => {
    modal.style.display = 'none';
    info.name = document.getElementById("name").value;
    info.gender = document.getElementById("gender").value;
    alert(info.name + ' ' + info.gender)
  };
  return (
    <li>
      <div onClick={handleClick}>
        <span className={info.gender}>{info.name}</span>
      </div>
    </li>
  );
}

export default Single;
