import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function AllBeers() {
  const [beers, setBeers] = useState({});
  const { id: beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log('beers date', response.data);
        setBeers(response.data);
      })

      .catch(console.log);
  }, []);

  return (
    <div>
      <Header /><br/>

      <img src={beers.image_url} width="60px" alt="beer" />
      <h3>{beers.name}</h3>
      <h5>{beers.tagline}</h5>
      <p>First brewed: {beers.first_brewed}</p>
      <p>Attenuation level: {beers.attenuation_level}</p>
      <p>{beers.description}</p>
      <p>Contributed by: {beers.contributed_by}</p>
    </div>
  );
}
