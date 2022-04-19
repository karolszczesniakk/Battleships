import Battlefield from '../classes/Battlefield';

describe('Battleground', () => {
  it('should have id of "A1"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[0][0].text).toBe('A1');
  });
  it('should have id of "B1"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[0][1].text).toBe('B1');
  });
  it('should have id of "B2"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[0][2].text).toBe('C1');
  });
  it('should have id of "J9"', () => {
    const bg = new Battlefield();
    bg.setupBattlefield();
    expect(bg.battlefield[8][9].text).toBe('J9');
  });
});
