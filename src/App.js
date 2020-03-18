import React from "react";
import Button from "@material-ui/core/Button";

import SignIn from  "./SignIn/SignIn";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
