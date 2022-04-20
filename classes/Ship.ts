class Ship {
  protected _length: number;
  protected _shipName: string;
  protected _maxHealthPoints: number;
  protected _currentHealthPoints: number;

  constructor(length: number) {
    this._length = length;
    this._maxHealthPoints = length;
    this._currentHealthPoints = length;
    if (length === 5) this._shipName = 'Battleship';
    else if (length === 4) this._shipName = 'Destroyer';
    else this._shipName = "Ship";
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

export default Ship;
