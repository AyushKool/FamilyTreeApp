import React from "react";
import Couple from "./Couple";



export default class App extends React.Component {
  //2:46:00 freeCodeCamp video
  // State vs Props: https://lucybain.com/blog/2016/react-state-vs-pros/
  // Deploy and Commit: https://www.geeksforgeeks.org/how-to-deploy-your-react-websites-on-github/

  
  // "homepage": "https://ayushkool.github.io/FamilyTreeApp/",
  // "homepage": ".",
  render() {
    return (
      <div className="App">
        <ul>
          <Couple husband="Father" wife="Mother"></Couple>
        </ul>
      </div>
    );
  }
}
