import Ship from './Ship';


class Destroyer extends Ship {
  protected _length: number;
  protected _shipName: string;
  protected _maxHealthPoints: number;
  protected _currentHealthPoints: number;

  constructor() {
    super();
    this._length = 4;
    this._maxHealthPoints = 4;
    this._currentHealthPoints = 4;
    this._shipName = 'Destroyer';
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

export default Destroyer;
