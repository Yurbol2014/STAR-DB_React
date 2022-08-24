import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { useNavigate } from 'react-router-dom';

const PeoplePage =()=> {
const navigate = useNavigate();
//const {id} = useParams;

const newPath=(itemId) =>{
   navigate(`/people/${itemId}`)
}
    return (
      <Row
        left={<PersonList onItemSelected={(id)=> newPath(id)} />}
        right={<PersonDetails  />} />
    );
  }

  export default PeoplePage;

