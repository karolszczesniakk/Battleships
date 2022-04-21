import Battlefield from '../classes/Battlefield'
import Displayer from '../classes/Displayer';
import GameManager from '../classes/GameManager';
import Ship from '../classes/Ship';
import ShipPlacer from '../classes/ShipPlacer';
import Shooter from '../classes/Shooter';

describe('GameManager', () => {
  it('should create instance of gameManager', () => {
    const bf = new Battlefield();
    const displayer = new Displayer();
    const shooter = new Shooter();
    const shipPlacer = new ShipPlacer(bf);
    const ships = [new Ship(5), new Ship(4)]

    const gameManager = new GameManager(ships, bf, displayer, shipPlacer, shooter);
    expect(gameManager instanceof GameManager).toBe(true);
  })
})