import Battlefield from './classes/Battlefield';
import BattlefieldDisplayer from './classes/BattlefieldDisplayer';
import Ship from './classes/Ship';
import ShipPlacer from './classes/ShipPlacer';


const bf = new Battlefield();

bf.setupBattlefield();





const ship = new Ship(5);

const displayer = new BattlefieldDisplayer(bf);

const shipPlacer = new ShipPlacer();

shipPlacer.placeShip(bf,ship,[8,4],'up')

displayer.display();




