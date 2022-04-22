import Tile from '../classes/battlefield/model/Tile'

describe('Tile', () => {
  it('should create tile with name of "A1"', () => {
    const tile = new Tile([1, 1])
    expect(tile.name).toBe('A1');
  });

    it('should create tile with name of "D5"', () => {
      const tile = new Tile([5, 4]);
      expect(tile.name).toBe('D5');
    });

})