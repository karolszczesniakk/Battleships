import Battlefield from './classes/Battlefield';
import BattlefieldDisplayer from './classes/BattlefieldDisplayer';
import Ship from './classes/Ship';
import ShipPlacer from './classes/ShipPlacer';


const bf = new Battlefield();

bf.setupBattlefield();

const displayer = new BattlefieldDisplayer(bf);

const shipPlacer = new ShipPlacer();

shipPlacer.placeShipsRandomly(bf,[new Ship(5), new Ship(4), new Ship(4)]);

displayer.display();




