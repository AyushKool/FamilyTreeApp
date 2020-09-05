import React from "react";

export default class Couple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      husband: this.props.husband,
      wife: this.props.wife,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = this.state
    const modal = document.getElementById('coupleModal');
    modal.style.display = 'block';
    const submitbtn = document.getElementById('couplesubmitbtn');
    submitbtn.onClick = (event) => {
      event.preventDefault()
      modal.style.display = 'none'
      newState.husband = document.getElementById('hname').value;
      newState.wife = document.getElementById('wname').value;
    }
    this.setState(newState);
  }

  render() {
    const children = this.props.children;
    return (
      <li>
        <div onClick={this.handleClick}>
          <span className="male">{this.state.husband}</span>
          <span className="spacer"></span>
          <span className="female">{this.state.wife}</span>
        </div>
        {children != null && children.length !== 0 ? <ul>{children}</ul> : ""}
      </li>
    );
  }
}
