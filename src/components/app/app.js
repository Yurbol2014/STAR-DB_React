import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";

import "./app.css";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} 
      getData={getPerson} 
      getImageUrl={getPersonImage}/>
    );
    const starshipDetalis = (
      <ItemDetails itemId={5} 
      getData={getStarship}
      getImageUrl={getStarshipImage} />
    );

    return (
      <ErrorBoundry>
        <div className=" stardb-app">
          <Header />
          <Row left={personDetails} right={starshipDetalis} />
        </div>
      </ErrorBoundry>
    );
  }
}
