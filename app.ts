import Battlefield from './classes/Battlefield';
import Displayer from './classes/Displayer';
import GameManager from './classes/GameManager';
import Ship from './classes/Ship';
import ShipPlacer from './classes/ShipPlacer';
import Shooter from './classes/Shooter';

const battlefield = new Battlefield();
const displayer = new Displayer();
const shooter = new Shooter();
const shipPlacer = new ShipPlacer();
const ship1 = new Ship(2);
const ship2 = new Ship(2);

const ships = [ship1,ship2];

const gameManager = new GameManager(ships, battlefield, displayer, shipPlacer, shooter);

gameManager.startGame();
