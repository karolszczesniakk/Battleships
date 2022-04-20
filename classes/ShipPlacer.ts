import Battlefield from './Battlefield';
import Ship from './Ship';
import Tile, { GridPosition } from './Tile';

type PlacingDirection = 'up' | 'down' | 'right' | 'left';

class ShipPlacer {
  public placeShipsRandomly(battlefield: Battlefield, ships: Ship[]) {
    ships.forEach((ship) => {
      while (true) {
        const rndDirection: PlacingDirection = this.randomDirection();
        const rndRow = this.getRandomNumber(1, 10);
        const rndColumn = this.getRandomNumber(1, 10);
        if (
          this.placeShip(battlefield, ship, [rndRow, rndColumn], rndDirection)
        ) {
          break;
        }
      }
    });
  }

  private randomDirection(): PlacingDirection {
    let randomNum = this.getRandomNumber(1, 4);
    if (randomNum === 1) return 'up';
    if (randomNum === 2) return 'down';
    if (randomNum === 3) return 'right';
    return 'left';
  }

  getRandomNumber(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public placeShip(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition,
    direction: PlacingDirection
  ) {
    const shipLength = ship.length;

    const isShipPlaceable = this.canShipBePlaced(
      battlefield,
      shipLength,
      gridPosition,
      direction
    );

    if (!isShipPlaceable) return false;
    switch (direction) {
      case 'up':
        this.placeShipUpwards(battlefield, ship, gridPosition);
        break;
      case 'down':
        this.placeShipDownwards(battlefield, ship, gridPosition);
        break;
      case 'right':
        this.placeShipToTheRight(battlefield, ship, gridPosition);
        break;
      case 'left': {
        this.placeShipToTheLeft(battlefield, ship, gridPosition);
      }
    }

    return true;
  }

  private canShipBePlaced(
    battlefield: Battlefield,
    shipLength: number,
    gridPosition: GridPosition,
    direction: PlacingDirection
  ) {
    switch (direction) {
      case 'up':
        return this.checkUpwardsPlacement(
          battlefield,
          gridPosition,
          shipLength
        );
      case 'down':
        return this.checkDownwardsPlacement(
          battlefield,
          gridPosition,
          shipLength
        );
      case 'right':
        return this.checkToTheRightPlacement(
          battlefield,
          gridPosition,
          shipLength
        );
      case 'left':
        return this.checkToTheLeftPlacement(
          battlefield,
          gridPosition,
          shipLength
        );
    }
  }

  private checkUpwardsPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (row - shipLength < 0) return false;

    for (let i = row; i > row + 1 - shipLength; i--) {
      let tile = battlefield.grid[i][column];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkDownwardsPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (shipLength + row > 11) return false;

    for (let i = row; i < row + shipLength; i++) {
      let tile = battlefield.grid[i][column];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkToTheRightPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (column + shipLength > 11) return false;

    for (let i = column; i < column + shipLength; i++) {
      let tile = battlefield.grid[row][i];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkToTheLeftPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (column - shipLength < 0) return false;

    for (let i = column; i > column - shipLength; i--) {
      let tile = battlefield.grid[row][i];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private placeShipUpwards(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const shipLength = ship.length;
    const [row, column] = gridPosition;
    for (let i = row; i > row - shipLength; i--) {
      let tile = battlefield.grid[i][column];
      tile.state = ship;
    }
  }
  private placeShipDownwards(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = row; i < row + shipLength; i++) {
      let tile = battlefield.grid[i][column];
      tile.state = ship;
    }
  }

  private placeShipToTheRight(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = column; i < column + shipLength; i++) {
      let tile = battlefield.grid[row][i];
      tile.state = ship;
    }
  }

  private placeShipToTheLeft(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = column; i > column - shipLength; i--) {
      let tile = battlefield.grid[row][i];
      tile.state = ship;
    }
  }

  private isTileEmpty(tile: Tile) {
    if (tile.state === 'Water') return true;
    return false;
  }
}

export default ShipPlacer;
