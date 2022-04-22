import Battlefield from '../../battlefield/model/Battlefield';
import BattlefieldDisplayer from '../service/Displayer';
import Ship from '../../ship/model/Ship';
import ShipPlacer from '../service/ShipPlacer';
import Shooter from '../service/Shooter';
import Displayer from '../service/Displayer';

class GameManager {
  private _ships: Ship[];
  private _battlefield: Battlefield;
  private _displayer: BattlefieldDisplayer;
  private _shipPlacer: ShipPlacer;
  private _shooter: Shooter;

  public constructor(ships: Ship[], battlefield: Battlefield, displayer: Displayer, shipPlacer: ShipPlacer, shooter: Shooter) {
    this._ships = ships;
    this._battlefield = battlefield;
    this._displayer = displayer;
    this._shipPlacer = shipPlacer;
    this._shooter = shooter;
  }

  public startGame() {
    this._battlefield.setupBattlefield();
    this._shipPlacer.placeShipsRandomly(this._ships);
    this._displayer.renderGame(this._battlefield, this._ships);
    
    console.log('\nEnter Firing Position (e.g. A5):');

    //gameloop
    process.stdin.on('data', (data) => {
      let position = data.toString().trim().toUpperCase();
      this._shooter.fireAt(this._battlefield,this._displayer,position);
      this._displayer.renderGame(this._battlefield, this._ships);
      console.log('\nEnter Firing Position (e.g. A5):');

      if (this.areAllShipsSunk() === true) {
        this.finishGame();
      }
    });
  }

  private areAllShipsSunk() {
    return this._ships.every((ship) => ship.isSunk());
  }

  private finishGame() {
    console.clear();
    this._displayer.displayBattlefield(this._battlefield);
    console.log('\nYou destroyed all enemy ships');
    process.exit();
  }
}

export default GameManager;
