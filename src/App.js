import React from "react";
import Couple from "./Couple";
import Single from "./Single";
function App() {
  return (
    <div className="App">
      <ul>
        <Couple husband="Jim" wife="Pam">
          <Single name="Bob" gender="male" />
          <Single name="Cody" gender="male" />
          <Couple husband="James" wife="Sarah">
            <Single name="Luffy" gender="male" />
            <Couple husband = 'Zoro' wife = 'Nami'/>
          </Couple>
        </Couple>
      </ul>
    </div>
  );
}

export default App;
