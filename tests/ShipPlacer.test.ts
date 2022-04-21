import Battlefield from '../classes/Battlefield';
import Ship from '../classes/Ship';
import ShipPlacer from '../classes/ShipPlacer';
import Tile from '../classes/Tile';

describe('ShipPlacer', () => {
  it('should place one Battleship (5 length) on battlefield', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer(bf);
    bf.setupBattlefield();
    shipPlacer.placeShipsRandomly([new Ship(5)]);

    const totalShipsLength = bf.tilesArray.reduce((total: number, currentTile: Tile) => {
      if (currentTile.state instanceof Ship) {
        console.log(currentTile.state)
        return total + 1;
      }
      return total;
    }, 0);
    
    expect(totalShipsLength).toBe(5);
  })

});
