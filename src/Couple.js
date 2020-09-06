import React from "react";
import './index.css'
import Single from "./Single";

export default class Couple extends React.Component {
  constructor(props) {
    super(props);
    var children = [];
    React.Children.forEach(this.props.children, (child) => {
      children.push(child);
    });
    this.state = {
      husband: this.props.husband,
      wife: this.props.wife,
      children: children,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    var mode = prompt("Do you want to edit or add? (edit/add): ");
    if (mode === null) return;
    else mode = mode.toLowerCase();

    if (mode === "add") {
      var children = this.state.children;
      var type = prompt("Enter type of child (single/couple): ");
      if (type === null || type === "") return;
      type = type.toLowerCase();
      if (type === "single") {
        var name = prompt("Enter new name: ");
        if (name === null || name === "") return;
        name = name[0].toUpperCase() + name.substring(1).toLowerCase();
        var gender = prompt("Enter new gender: (male/female)");
        if (gender === null || gender === "") return;
        gender = gender.toLowerCase();
        if (gender !== "male" && gender !== "female") {
          alert("Invalid Input");
          return;
        }
        children.push(<Single name={name} gender={gender} />);
      } else if (type === "couple") {
        var husband = prompt("Enter new husband's name: ");
        if (husband === null || husband === "") return;
        husband = husband[0].toUpperCase() + husband.substring(1).toLowerCase();

        var wife = prompt("Enter new wife's name: ");
        if (wife === null || wife === "") return;
        wife = wife[0].toUpperCase() + wife.substring(1).toLowerCase();

        children.push(<Couple husband={husband} wife={wife}></Couple>);
      } else {
        alert("Invalid Input");
        return;
      }
      this.setState((prevState) => {
        return {
          husband: prevState.husband ,
          wife: prevState.wife ,
          children: children
        };
      });
    } else if (mode === "edit") {
      husband = prompt("Enter new husband's name: ");
      if (husband === null || husband === "") return;
      husband = husband[0].toUpperCase() + husband.substring(1).toLowerCase();

      wife = prompt("Enter new wife's name: ");
      if (wife === null || wife === "") return;
      wife = wife[0].toUpperCase() + wife.substring(1).toLowerCase();
      this.setState((prevState) => {
        return { husband: husband, wife: wife, children: prevState.children };
      });
    } else alert("Invalid Input");
  }

  render() {
    const children = this.state.children;
    return (
      <li>
        <div onClick={this.handleClick}>
          <span className="male">{this.state.husband}</span>
          <span className="spacer"></span>
          <span className="female">{this.state.wife}</span>
        </div>
      {children != null && children.length !== 0 ? <ul>{this.state.children}</ul> : ""}
      </li>
    );
  }
}
