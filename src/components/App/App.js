import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CharacterDetailsContainer from "../../containers/CharacterDetailsContainer";
import CharacterListContainers from "../../containers/CharacterListContainers";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-wrapper">
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={CharacterListContainers} />
              <Route path="/page/:id" component={CharacterListContainers} />
              <Route path="/char/:id" component={CharacterDetailsContainer} />
              <Route render={() => <h2>404. Page not found</h2>} />
            </Switch>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
