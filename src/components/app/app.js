import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ItemDetails, { Record } from "../item-details/item-details";

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
  swapiService = new SwapiService();

//  state = {
//    showRandomPlanet: true,
//  };

//  toggleRandomPlanet = () => {
//    this.setState((state) => {
//      return {
//        showRandomPlanet: !state.showRandomPlanet,
//      };
//    });
//  };

//  
   // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

   // const {
   //   getPerson,
   //   getStarship,
   //   getPersonImage,
   //   getStarshipImage,
   //   getPlanetImage,
   //   getAllPeople,
   //   getAllPlanets,
   // } = this.swapiService;

   // const personDetails = (
   //   <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
   //     <Record field="gender" label="Gender" />
   //     <Record field="eyeColor" label="Eye Color" />
   //   </ItemDetails>
   // );

   // const starshipDetails = (
   //   <ItemDetails
   //     itemId={5}
   //     getData={getStarship}
   //     getImageUrl={getStarshipImage}
   //   >
   //     <Record field="model" label="Model" />
   //     <Record field="length" label="Length" />
   //     <Record field="costInCredits" label="Cost" />
   //   </ItemDetails>
   // );
   render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

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
