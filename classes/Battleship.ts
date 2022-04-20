/*
import Ship from './Ship';

class Battleship extends Ship {
  protected _length: number;
  protected _shipName: string;
  protected _maxHealthPoints: number;
  protected _currentHealthPoints: number;

  constructor() {
    super();
    this._length = 5;
    this._maxHealthPoints = 5;
    this._currentHealthPoints = 5;
    this._shipName = 'Battleship';
  }

  get battleship() {
    return this;
  }

  get length() {
    return this._length;
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
