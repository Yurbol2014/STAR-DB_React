import React from 'react';
import {StarshipList } from '../sw-components';
import {useNavigate} from 'react-router-dom'


const StarshipsPage = () => {
   const navigate = useNavigate();

const newPath=(itemId) =>{
   navigate(`/starships/${itemId}`)
}

   return(
      <StarshipList
      onItemSelected={(id)=>newPath(id)}
      />
   )
}
export default StarshipsPage

