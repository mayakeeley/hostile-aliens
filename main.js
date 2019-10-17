import {allShips, checkWinStatus} from "./Ship.js";
const alienContainer = document.getElementById("alienContainer");
const hitAlienShip = document.getElementById("hitAlienShip");
const addShipsToHTML = () => {
  let alienShips = "";
  for(let i = 0; i < allShips.length; i++) {
    alienShips = `<div id="no${i}" class="${allShips[i].name}"><p>${allShips[i].name} Ship</p><p>Total Points:${allShips[i].hitPoints}</p></div>`;
    alienContainer.insertAdjacentHTML("beforeend", alienShips);
  }
}
addShipsToHTML();
hitAlienShip.addEventListener("click", checkWinStatus);