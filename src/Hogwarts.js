import React from "react";
import whoseHouse from "./houses/whoseHouse";
import { colors, gryffMascot } from "./houses/Gryffindor"
import Hufflepuff from "/house/Hufflepuff"

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"
  return (
  <div>
  <h1>Welcome to Hogwarts!</h1>;
  <Hufflepuff />
  </div>
  )
}

console.log(colors);
// > 'Scarlet and Gold'

gryffMascot();