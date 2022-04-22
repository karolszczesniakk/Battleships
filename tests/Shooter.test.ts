import Battlefield, { PlacingDirection } from '../classes/battlefield/model/Battlefield'
import Displayer from '../classes/application/service/Displayer';
import Ship from '../classes/ship/model/Ship';
import Shooter from '../classes/application/service/Shooter';

describe('Shooter', () => {
  it('Should miss a placed ship', () => {
    const bf = new Battlefield();
    const shooter = new Shooter();
    const displayer = new Displayer();

    bf.setupBattlefield();

    const F6Tile = bf.findTile('F6');
    expect(F6Tile).toBeTruthy();

    if (F6Tile) {
      expect(F6Tile.state).toBe("Water")
      shooter.fireAt(bf, displayer, "F6");
      expect(displayer.latestMessage).toBe('Miss!');
      expect(F6Tile.state).toBe('Miss');
    }
  });
})