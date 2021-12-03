import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SingleBeers() {
  //function getBeersBoi (){
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('beers date', response.data);
        setBeers(response.data);
      })

      .catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} width="60px" alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>more details</Link>
        </div>
      ))}
    </div>
  );
}
