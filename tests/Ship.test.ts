import Battleship from '../classes/Battleship';
import Destroyer from '../classes/Destroyer';

describe('Ship', () => {
  it('should equal true', () => {
    const ship = new Battleship();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('should equal false', () => {
    const ship = new Battleship();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it('should equal true', () => {
    const ship = new Destroyer();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
});
