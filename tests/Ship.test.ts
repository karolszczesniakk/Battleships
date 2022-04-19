import Battleship from '../classes/Battleship';

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
});
