import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";
import ErrorButton from '../error-button/error-button'

import './app.css';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';


export default class App extends Component {

   swapiService = new SwapiService();
 
   state = {
     showRandomPlanet: true,
     hasError: false
   };

   componentDidCatch(){
      this.setState({
         hasError: true
      })
   }
 
   toggleRandomPlanet = () => {
     this.setState((state) => {
       return {
         showRandomPlanet: !state.showRandomPlanet
       }
     });
   };

 

render() {
    
   if(this.state.hasError){
      return <ErrorIndicator/>
   }

   const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
  return (
    <div>
      <Header />
      {planet}
      <div className='row mb2 button-row'>
         <button className='toggle-planet btn btn-warning btn-lg'
         onClick={this.toggleRandomPlanet}>
            Toggle Random Planet

         </button>
         <ErrorButton />
      </div>
      

      <PeoplePage/>
      <PeoplePage/>
      <PeoplePage/>
    </div>
  );
};

}