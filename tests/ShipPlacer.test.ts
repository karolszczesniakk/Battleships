import Battlefield from '../classes/battlefield/model/Battlefield';
import Ship from '../classes/ship/model/Ship';
import ShipPlacer from '../classes/application/service/ShipPlacer';
import Tile from '../classes/battlefield/model/Tile';

describe('ShipPlacer', () => {
  it('should place one Battleship (5 length) on battlefield', () => {
    const bf = new Battlefield();
    const shipPlacer = new ShipPlacer(bf);
    
    bf.setupBattlefield();
    shipPlacer.placeShipsRandomly([new Ship(5)]);

    const totalShipsLength = bf.tilesArray.reduce((total: number, currentTile: Tile) => {
      if (currentTile.state instanceof Ship) {
        return total + 1;
      }
      return total;
    }, 0);
    
    expect(totalShipsLength).toBe(5);
  })

});
