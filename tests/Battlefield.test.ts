import Battlefield from '../classes/Battlefield';

describe('Battlefield', () => {
  const bf = new Battlefield();
  bf.setupBattlefield();

  it('should have id of "A1"', () => {
    expect(bf.battlefield[1][1].id).toBe('A1');
  });

  it('should have id of "B1"', () => {
    expect(bf.battlefield[1][2].id).toBe('B1');
  });

  it('should have id of "B2"', () => {
    expect(bf.battlefield[1][3].id).toBe('C1');
  });

  it('should have id of "J9"', () => {
    expect(bf.battlefield[9][10].id).toBe('J9');
  });

  it('should have id of "2"', () => {
    expect(bf.battlefield[2][0].id).toBe('2');
  });

  it('should have null state ', () => {
    expect(bf.battlefield[0][0].state).toBe(null);
  });

  it('should have id of "2"', () => {
    expect(bf.battlefield[0][2].id).toBe('B');
  });

  it('should have id of "2"', () => {
    expect(bf.battlefield[5][0].id).toBe('5');
  });

  it('should have id of "2"', () => {
    expect(bf.battlefield[0][0].id).toBe(' ');
  });
});
