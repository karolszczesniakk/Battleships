import Battlefield, { PlacingDirection } from '../classes/Battlefield'
import Displayer from '../classes/Displayer';
import Ship from '../classes/Ship';
import Shooter from '../classes/Shooter';

describe('Shooter', () => {
  it('Should hit a placed ship', () => {
    const bf = new Battlefield();
    const ship = new Ship(5);
    const shooter = new Shooter();
    const displayer = new Displayer();
    
    bf.setupBattlefield();
    bf.placeShip(ship, [6, 6], PlacingDirection.UP);

    shooter.fireAt(bf, displayer, "F6");

    expect(displayer.latestMessage).toBe(`Hit. ${ship.name}`);
    expect(ship.currentHealth).toBe(4);
    
  })
})