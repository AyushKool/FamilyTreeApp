import React from "react";
import Couple from "./Couple";
import Single from "./Single";



export default class App extends React.Component {
  //2:46:00 freeCodeCamp video
  // State vs Props: https://lucybain.com/blog/2016/react-state-vs-pros/

  render() {
    return (
      <div className="App">
        <ul>
          <Single name="Luffy" gender="male" />
          <Couple husband="Zoro" wife="Nami">
            <Single name="Robin" gender="female" />
          </Couple>
        </ul>
      </div>
    );
  }
}
