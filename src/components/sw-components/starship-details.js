import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import {useParams } from "react-router-dom";



const StarshipDetails = (props) => {
   
   
      const { id } = useParams();
      
      console.log({id});
    
    

  
  
   
   
  return (
    <ItemDetails {...props} itemId={id}>
      
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
    
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
