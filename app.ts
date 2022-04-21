import Battlefield from './classes/Battlefield';
import Displayer from './classes/Displayer';
import GameManager from './classes/GameManager';
import Ship from './classes/Ship';
import ShipPlacer from './classes/ShipPlacer';
import Shooter from './classes/Shooter';
import Tile from './classes/Tile';



const battlefield = new Battlefield();
const displayer = new Displayer();
const shooter = new Shooter();
const shipPlacer = new ShipPlacer(battlefield);

const ships = [new Ship(5), new Ship(4), new Ship(4)];

const gameManager = new GameManager(ships, battlefield, displayer, shipPlacer, shooter);

gameManager.startGame();

