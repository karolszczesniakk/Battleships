import Battlefield from '../classes/Battlefield';
import Ship from '../classes/Ship';
import ShipPlacer from '../classes/ShipPlacer';

describe('ShipPlacer', () => {
  it('should place ship upwards', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [6, 3], 'up')).toBe(true);
    expect(bf.grid[1][3].state instanceof Ship).toBe(false);
    expect(bf.grid[5][3].state instanceof Ship).toBe(true);
    expect(bf.grid[4][3].state instanceof Ship).toBe(true);
    expect(bf.grid[3][3].state instanceof Ship).toBe(true);
    expect(bf.grid[2][3].state instanceof Ship).toBe(true);
    expect(bf.grid[1][3].state instanceof Ship).toBe(false);
  });

  it('shouldnt place ship and return false', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [1, 3], 'up')).toBe(false);
    expect(bf.grid[1][3].state instanceof Ship).toBe(false);
  });

  it('should place ship', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [6, 3], 'down')).toBe(true);
    expect(bf.grid[6][3].state instanceof Ship).toBe(true);
    expect(bf.grid[7][3].state instanceof Ship).toBe(true);
    expect(bf.grid[8][3].state instanceof Ship).toBe(true);
    expect(bf.grid[9][3].state instanceof Ship).toBe(true);
    expect(bf.grid[10][3].state instanceof Ship).toBe(true);
  });

  it('should place ship to the right', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [1, 3], 'right')).toBe(true);
    expect(bf.grid[1][3].state instanceof Ship).toBe(true);
    expect(bf.grid[1][4].state instanceof Ship).toBe(true);
    expect(bf.grid[1][5].state instanceof Ship).toBe(true);
    expect(bf.grid[1][6].state instanceof Ship).toBe(true);
    expect(bf.grid[1][7].state instanceof Ship).toBe(true);
    expect(bf.grid[1][8].state instanceof Ship).toBe(false);
  });

  it('should place ship to the left', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [1, 7], 'left')).toBe(true);
    expect(bf.grid[1][7].state instanceof Ship).toBe(true);
    expect(bf.grid[1][6].state instanceof Ship).toBe(true);
    expect(bf.grid[1][5].state instanceof Ship).toBe(true);
    expect(bf.grid[1][4].state instanceof Ship).toBe(true);
    expect(bf.grid[1][3].state instanceof Ship).toBe(true);
    expect(bf.grid[1][2].state instanceof Ship).toBe(false);
  });

  it('shouldnt place ship', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shipPlacer = new ShipPlacer();
    bf.setupBattlefield();

    expect(shipPlacer.placeShip(bf, ship, [1, 4], 'left')).toBe(false);
    expect(bf.grid[1][4].state instanceof Ship).toBe(false);
    expect(bf.grid[1][3].state instanceof Ship).toBe(false);
    expect(bf.grid[1][2].state instanceof Ship).toBe(false);
    expect(bf.grid[1][1].state instanceof Ship).toBe(false);
  });
});
