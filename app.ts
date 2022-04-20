import Battlefield from './classes/Battlefield';
import Displayer from './classes/Displayer';
import GameManager from './classes/GameManager';
import Ship from './classes/Ship';
import ShipPlacer from './classes/ShipPlacer';

const battlefield = new Battlefield();
const ship1 = new Ship(2);
const ship2 = new Ship(4);
const ship3 = new Ship(4);

const ships = [ship1];

const gameManager = new GameManager(ships, battlefield)

gameManager.startGame();
