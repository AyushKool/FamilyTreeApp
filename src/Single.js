import React from "react";
// import SingleModal from "./Modals/SingleModal";

export default class Couple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      gender: this.props.gender,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    var name = prompt("Enter new name: ");
    if (name === null || name === '') return
    name = name[0].toUpperCase() + name.substring(1).toLowerCase();
    var gender = prompt("Enter new gender: (male/female)");
    if (gender === null || gender === '') return
    gender = gender.toLowerCase()
    if (gender !== 'male' && gender !== 'female'){alert('Invalid Input');return;}

    this.setState({name: name, gender : gender});
  }

  render() {
    return (
        <li>
          <div onClick={this.handleClick}>
            <span className={this.state.gender}>{this.state.name}</span>
          </div>
        </li>
    );
  }
}
