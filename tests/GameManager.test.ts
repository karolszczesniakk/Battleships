import Battlefield from '../classes/battlefield/model/Battlefield'
import Displayer from '../classes/application/service/Displayer';
import GameManager from '../classes/application/manager/GameManager';
import Ship from '../classes/ship/model/Ship';
import ShipPlacer from '../classes/application/service/ShipPlacer';
import Shooter from '../classes/application/service/Shooter';

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