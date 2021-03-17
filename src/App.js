import React from "react";



const foodILike = [
  {
    id:1,
    name: "yakisoba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nagata_Honjoken_Bokkake_Yakisoba.jpg/330px-Nagata_Honjoken_Bokkake_Yakisoba.jpg"
  },
  {
    id:2,
    name: "sushi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg/330px-Chirashi_zushi_by_Marshall_Astor_in_Gardena%2C_CA.jpg"
  },
  {
    id:3,
    name: "sprite",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Evolution_of_Sprite_Bottles.JPG"
  },
  {
    id:4,
    name: "kimchi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/330px-Various_kimchi.jpg"
  },
  {
    id:5,
    name: "donkatsu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Original_Tonkatsu.jpg/1920px-Original_Tonkatsu.jpg"
  }
];

function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
