class Ship {
  private _length: number;
  private _name: string;
  private _maxHealthPoints: number;
  private _currentHealthPoints: number;

  constructor(length: number) {
    this._length = length;
    this._maxHealthPoints = length;
    this._currentHealthPoints = length;
    this._name = this.chooseShipName(length);
  }

  private chooseShipName(length: number) {
    if (length === 5) return 'Battleship';
    else if (length === 4) return 'Destroyer';
    else return this._name = 'Ship';
  }

  public get length() {
    return this._length;
  }

  public get name() {
    return this._name;
  }

  get currentHealth() {
    return this._currentHealthPoints;
  }

  get maxHealth() {
    return this._maxHealthPoints;
  }

  public isSunk() {
    return this._currentHealthPoints <= 0;
  }
  public hit() {
    this._currentHealthPoints -= 1;
  }
}

export default Ship;
