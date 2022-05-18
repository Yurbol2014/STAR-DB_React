import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";


import './app.css';


export default class App extends Component {

   swapiService = new SwapiService();
 
   state = {
     showRandomPlanet: true,
     selectedPerson: null
   };
 
   toggleRandomPlanet = () => {
     this.setState((state) => {
       return {
         showRandomPlanet: !state.showRandomPlanet
       }
     });
   };

   onPersonSelected = (id) =>{

      this.setState({
        selectedPerson: id     
      });

   }

render() {
   const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
  return (
    <div>
      <Header />
      <RandomPlanet />
      

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    </div>
  );
};

}