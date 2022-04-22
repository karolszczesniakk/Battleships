import Battlefield from './classes/battlefield/model/Battlefield';
import Displayer from './classes/application/service/Displayer';
import GameManager from './classes/application/manager/GameManager';
import Ship from './classes/ship/model/Ship';
import ShipPlacer from './classes/application/service/ShipPlacer';
import Shooter from './classes/application/service/Shooter';
import Tile from './classes/battlefield/model/Tile';



const battlefield = new Battlefield();
const displayer = new Displayer();
const shooter = new Shooter();
const shipPlacer = new ShipPlacer(battlefield);

const ships = [new Ship(5), new Ship(4), new Ship(4)];

const gameManager = new GameManager(ships, battlefield, displayer, shipPlacer, shooter);

gameManager.startGame();

