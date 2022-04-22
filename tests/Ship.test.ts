import Ship from '../classes/ship/model/Ship';


describe('Ship', () => {
  it('should equal true', () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it('should equal false', () => {
    const ship = new Ship(5);;
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it('should equal true', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  })
});
