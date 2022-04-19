import Battlefield from '../classes/Battlefield';

describe('Battlefield', () => {
  it('should have id of "A1"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[1][1].id).toBe('A1');
  });
  it('should have id of "B1"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[1][2].id).toBe('B1');
  });
  it('should have id of "B2"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[1][3].id).toBe('C1');
  });
  it('should have id of "J9"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[9][10].id).toBe('J9');
  });
});
