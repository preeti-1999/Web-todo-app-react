import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from "./pages/Register";
import Welcome from  "./pages/Welcome";
import Todo from "./pages/Todo";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route exact path="/register"><Register/></Route>
          <Route exact path="/todo"><Todo/></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
