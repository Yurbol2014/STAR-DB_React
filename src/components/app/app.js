import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { StarshipDetails} from '../sw-components';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
     
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
 
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
        <BrowserRouter>
          <div className="stardb-app">
            
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            
              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                <Route path="/people" element={<h2>People</h2>} />
                <Route path="/people/:id?" element={<PeoplePage/>} />
                <Route path="/planets" element={<PlanetsPage/>} />
                <Route path="/starships"  element={<StarshipsPage/>} />
               <Route path ="/starships/:id"  element={< StarshipDetails   />} />

              </Routes>
            
       
          </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}


