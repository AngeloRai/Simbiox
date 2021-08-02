import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import ListScholarships from "./ListScholarships/ListScholarships";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" component={ListScholarships} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
