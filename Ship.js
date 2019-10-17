export class Ship {
  constructor(name, hitPoints, losePoints) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.losePoints = losePoints;
  }  
  pointsLeft() {
    return this.hitPoints >= this.losePoints ? this.hitPoints -= this.losePoints : this.hitPoints = 0;
  }
}
export const makeShips = (shipType, numOfShips, hitPoints, losePoints) => {
  let ships = [];
  for(let i=0; i < numOfShips; i++) {
    ships[i] = new Ship(shipType, hitPoints, losePoints);
  }
  return ships;
}
export const allShips = makeShips("Mother", 1, 100, 9).concat(makeShips("Defence", 5, 80, 10), makeShips("Attack", 8, 45, 12));
export const reducePoints = () => {
  let index = Math.floor(Math.random()*14);
  allShips[index].pointsLeft();
  document.getElementById(`no${index}`).innerHTML = `<p>${allShips[index].name} Ship</p><p>Total Points:${allShips[index].hitPoints}</p></div>`;
}
export const checkWinStatus = () => {
  if(allShips[0].hitPoints <= 0) {
    alert("Congratulations, you have destroyed the alien fleet!")
  } else {
    reducePoints();
  }
}