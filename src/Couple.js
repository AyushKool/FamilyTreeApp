import React from "react";
import Single from "./Single";

function Couple(props) {
  let numChildren = 0;
  for (const ind in props.children) {
    const comp = props.children[ind];
    if (comp == null) continue;
    else if (comp.type === Single || comp.type === Couple) {
      numChildren++;
    }
  }
  const Children = () => {
    if (numChildren !== 0) return <ul>{props.children}</ul>;
    else return <span display="none"></span>;
  };
  let modal = document.getElementById("coupleModal");
  const handleClick = () => {
    modal.style.display = "block";
  };

  let submitbtn = document.getElementById("couplesubmitbtn");
  let info = {
    husband : props.husband,
    wife : props.wife
  }
  submitbtn.onclick = () => {
    modal.style.display = 'none';
    info.husband = document.getElementById("name").value;
    info.wife = document.getElementById("wname_inp").value;
    alert(info.husband + ' ' + info.wife)
  };
  return (
    <li>
      <div onClick={handleClick}>
        <span className="male">{info.husband}</span>
        <span className="spacer"></span>
        <span className="female">{info.wife}</span>
      </div>
      <Children />
    </li>
  );
}

export default Couple;
