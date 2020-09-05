import React from "react";

export default class Couple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      gender: this.props.gender,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = this.state
    const modal = document.getElementById('singleModal');
    modal.style.display = 'block';
    const submitbtn = document.getElementById('singlesubmitbtn');
    submitbtn.onClick = (event) => {
      event.preventDefault()
      modal.style.display = 'none'
      newState.husband = document.getElementById('name').value;
      newState.wife = document.getElementById('gender').value;
    }
    this.setState(newState);
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
