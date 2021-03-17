import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "yakisoba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nagata_Honjoken_Bokkake_Yakisoba.jpg/330px-Nagata_Honjoken_Bokkake_Yakisoba.jpg",
    rating: 4.5
  },
  {
    id:2,
    name: "sushi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg/330px-Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg",
    rating: 4.2
  },
  {
    id:3,
    name: "sprite",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Evolution_of_Sprite_Bottles.JPG",
    rating: 4.0
  },
  {
    id:4,
    name: "kimchi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg",
    rating: 3.8
  },
  {
    id:5,
    name: "donkatsu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Original_Tonkatsu.jpg/1920px-Original_Tonkatsu.jpg",
    rating: 4.9
  }
];

function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
