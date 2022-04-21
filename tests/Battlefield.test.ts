import Battlefield, { PlacingDirection } from '../classes/Battlefield';
import Ship from '../classes/Ship';

describe('Battlefield', () => {
  const bf = new Battlefield();
  bf.setupBattlefield();

  it('should have id of "A1"', () => {
    expect(bf.grid[1][1].name).toBe('A1');
  });

  it('should have id of "B1"', () => {
    expect(bf.grid[1][2].name).toBe('B1');
  });

  it('should have id of "B2"', () => {
    expect(bf.grid[1][3].name).toBe('C1');
  });

  it('should have id of "J9"', () => {
    expect(bf.grid[9][10].name).toBe('J9');
  });

  it('should have id of "2"', () => {
    expect(bf.grid[2][0].name).toBe('2');
  });

  it('should have null state ', () => {
    expect(bf.grid[0][0].state).toBe(null);
  });

  it('should have id of "2"', () => {
    expect(bf.grid[0][2].name).toBe('B');
  });

  it('should have id of "2"', () => {
    expect(bf.grid[5][0].name).toBe('5');
  });

  it('should have id of "2"', () => {
    expect(bf.grid[0][0].name).toBe(' ');
  });

  it('should successfully place ship upwards', () => {
    const wasSuccesfull = bf.placeShip(new Ship(5), [7, 7], PlacingDirection.UP
    );
    expect(wasSuccesfull).toBe(true);
    expect(bf.grid[6][7].state instanceof Ship).toBe(true);
  });
    it('should not place a ship', () => {
      const wasSuccesfull = bf.placeShip(new Ship(5), [1, 1], PlacingDirection.UP
      );
      expect(wasSuccesfull).toBe(false);
      expect(bf.grid[1][1].state instanceof Ship).toBe(false);
    });


});
