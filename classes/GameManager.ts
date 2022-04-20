import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import Battlefield from './Battlefield';
import BattlefieldDisplayer from './Displayer';
import Ship from './Ship';
import ShipPlacer from './ShipPlacer';
import Shooter from './Shooter';

class GameManager {
  private _ships: Ship[];
  private _battlefield: Battlefield;
  private _displayer: BattlefieldDisplayer;
  private _shipPlacer: ShipPlacer;
  private _shooter: Shooter;

  constructor(ships: Ship[], battlefield: Battlefield) {
    this._ships = ships;
    this._battlefield = battlefield;
    this._displayer = new BattlefieldDisplayer();
    this._shipPlacer = new ShipPlacer();
    this._shooter = new Shooter(battlefield, this._displayer);
  }

  public startGame() {
    this._battlefield.setupBattlefield();
    this._shipPlacer.placeShipsRandomly(this._battlefield, this._ships);
    this._shooter.setupOneDimensionalGrid();

    this._displayer.renderGame(this._battlefield, this._ships)
    console.log("Enter Firing Position:");

    process.stdin.on('data', (data) => {
      let position = data.toString().trim();
      this._shooter.shoot(position);
      console.clear();
      this._displayer.renderGame(this._battlefield, this._ships);
      console.log('Enter Firing Position:');
      if (this.areAllShipsSunk() === true) {
        this.finishGame();
        process.exit();
        
      }
    });
  }

  private areAllShipsSunk() {
    return this._ships.every((ship) => ship.isSunk());
  }

  private finishGame() {
    console.clear();
    this._displayer.displayBattlefield(this._battlefield);
    console.log("\nYou destroyed all enemy ships");
  }
}

export default GameManager;
