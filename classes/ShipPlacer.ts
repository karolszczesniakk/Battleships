import Battlefield, { PlacingDirections } from './Battlefield';
import Ship from './Ship';
import Tile, { GridPosition } from './Tile';


class ShipPlacer {
  private _battlefield: Battlefield;

  constructor(battlefield: Battlefield) {
    this._battlefield = battlefield;
  }

  public placeShipsRandomly(ships: Ship[]) {
    ships.forEach((ship) => {
      while (true) {
        const rndDirection: PlacingDirections = this.randomDirection();
        const rndRow = this.getRandomNumber(1, 10);
        const rndColumn = this.getRandomNumber(1, 10);
        const isPlaceable = this._battlefield.placeShip(
          ship,
          [rndRow, rndColumn],
          rndDirection
        );
        if (isPlaceable) break;
      }
    });
  }

  private randomDirection(): PlacingDirections {
    let randomNum = this.getRandomNumber(1, 4);
    if (randomNum === 1) return PlacingDirections.UP;
    if (randomNum === 2) return PlacingDirections.DOWN;
    if (randomNum === 3) return PlacingDirections.RIGHT;
    return PlacingDirections.LEFT;
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

export default ShipPlacer;
