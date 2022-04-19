import Ship from '../interfaces/Ship';

class Battleship implements Ship {
  readonly _length: number;
  readonly _shipName: string;
  readonly _maxHealthPoints: number;
  private _currentHealthPoints: number;

  constructor() {
    this._length = 5;
    this._maxHealthPoints = 5;
    this._currentHealthPoints = 5;
    this._shipName = 'Battleship';
  }

  displayHealth() {
    console.log(
      `${this._shipName} - ${this._currentHealthPoints}/${this._maxHealthPoints}hp`
    );
  }

  isSunk() {
    return this._currentHealthPoints <= 0;
  }
  hit() {
    this._currentHealthPoints -= 1;
  }
}

export default Battleship;
