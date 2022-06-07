import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from "../item-details/item-details";
import DummySwapiService from '../../services/dummy-swapi-service'
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service--context";
import "./app.css";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";

export default class App extends Component {
  

  state = {
    showRandomPlanet: true,
    swapiService : new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService})=> {
     
      const Service = swapiService instanceof SwapiService ?
       DummySwapiService : SwapiService;
       console.log("switched to" , Service.name);
       
       return {
          swapiService: new  Service()
       }

    })
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

   render() {
  
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
     
    } = this.state.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
   
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <PersonDetails itemId={5} />

            <PlanetDetails itemId={11} />

            <StarshipDetails itemId={5} />

            <PersonList />

            <PlanetList />

            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
