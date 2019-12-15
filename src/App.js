import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import ClassesSchedule from "./containers/ClassesSchedule/ClassesSchedule";
import BellsSchedule from "./containers/BellsSchedule/BellsSchedule";
import Classes from "./containers/Classes/Classes";
import Teachers from "./containers/Teachers/Teachers";
import PageError from "./containers/PageError/PageError";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/ClassesSchedule" exact component={ClassesSchedule}/>
          <Route path="/BellsSchedule" exact component={BellsSchedule}/>
          <Route path="/Classes" exact component={Classes}/>
          <Route path="/Teachers" exact component={Teachers}/>
          <Route path="/" component={PageError}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
