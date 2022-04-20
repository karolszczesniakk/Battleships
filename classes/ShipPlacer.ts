import Battlefield from './Battlefield';
import Ship from './Ship';
import Tile, { GridPosition } from './Tile';

type PlacingDirection = 'up' | 'down' | 'left' | 'right';

class ShipPlacer {
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
    }

    return true;
  }

  public canShipBePlaced(
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
        break;
      case 'right':
        break;
      case 'left':
        break;
    }
  }

  public checkUpwardsPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (shipLength > row) return false;

    for (let i = row; i > row - shipLength; i--) {
      let tile = battlefield.grid[i][column];
      if (!this.isTileEmpty(tile)) {
        return false;
      }
    }
    return true;
  }

  public checkDownwardsPlacement(
    battlefield: Battlefield,
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (shipLength + row > 11) return false;

    for (let i = row; i < 11; i++) {
      let tile = battlefield.grid[i][column];
      if (!this.isTileEmpty(tile)) {
        return false;
      }
    }
    return true;
  }

  public placeShipUpwards(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const shipLength = ship.length;
    const [row, column] = gridPosition;
    for (let i = row; i >= row + 1 - shipLength; i--) {
      let tile = battlefield.grid[i][column];
      tile.state = ship;
    }
  }
  public placeShipDownwards(
    battlefield: Battlefield,
    ship: Ship,
    gridPosition: GridPosition
  ) {
    const shipLength = ship.length;
    const [row, column] = gridPosition;
   for (let i = row; i < 11; i++) {
     let tile = battlefield.grid[i][column];
     if (!this.isTileEmpty(tile)) {
       return false;
     }
   }
  }

  public isTileEmpty(tile: Tile) {
    if (tile.state === 'Water') return true;
    return false;
  }
}

export default ShipPlacer;
