import React from 'react';
import { Link } from 'react-router-dom';
import beersimg from '../assets/beers.png';
import randomimg from '../assets/random-beer.png';
import newbeer from '../assets/new-beer.png';

export default function HomePage() {
  return (
    <div>
      <br />
      <Link to="/beers">All Beers</Link>
      <img src={beersimg} alt="beers" />
      Lorem, ipsum dolor sit amet consectetur adipisicing
      <br />
      <br />
      <Link to="/random-beer">Random Beer</Link>
      <img src={randomimg} alt="random" />
      Lorem, ipsum dolor sit amet consectetur adipisicing
      <br />
      <br />
      <Link to="/new-beer">New Beer</Link>
      <img src={newbeer} alt="newbeer" />
      Lorem, ipsum dolor sit amet consectetur adipisicing
    </div>
  );
}
