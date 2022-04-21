import Battlefield, { PlacingDirection } from './Battlefield';
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
        const rndDirection: PlacingDirection = this.randomDirection();
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

  private randomDirection(): PlacingDirection {
    let randomNum = this.getRandomNumber(1, 4);
    if (randomNum === 1) return PlacingDirection.UP;
    if (randomNum === 2) return PlacingDirection.DOWN;
    if (randomNum === 3) return PlacingDirection.RIGHT;
    return PlacingDirection.LEFT;
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default ShipPlacer;
