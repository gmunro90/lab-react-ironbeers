import React from 'react';
import Header from '../components/Header';

export default function NewBeer() {
  return (
    <div>
      <Header />
      <form>
        <label>Name </label>
        <input type="text" name="name" value={name} />

        <label>Tagline</label>
        <input type="text" name="tagline" value={tagline} />

        <label>Description </label>
        <input type="text" name="description" value={description} />

        <label>First Brewed </label>
        <input type="text" name="first brewed" checked={first_brewed} />

        <label>Brewers Tips </label>
        <input type="text" name="brewers tips" checked={brewers_tips} />

        <label>Attenuation Level </label>
        <input
          type="number"
          name="Attenuation level"
          checked={attenuation_level}
        />

        <label>Contributed By </label>
        <input type="text" name="Contributed by" checked={contributed_by} />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}
