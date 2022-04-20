class Ship {
  private _length: number;
  private _name: string;
  private _maxHealthPoints: number;
  private _currentHealthPoints: number;

  constructor(length: number) {
    this._length = length;
    this._maxHealthPoints = length;
    this._currentHealthPoints = length;
    if (length === 5) this._name = 'Battleship';
    else if (length === 4) this._name = 'Destroyer';
    else this._name = 'Ship';
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  get currentHealth() {
    return this._currentHealthPoints;
  }

  get maxHealth() {
    return this._maxHealthPoints;
  }

  isSunk() {
    return this._currentHealthPoints <= 0;
  }
  hit() {
    this._currentHealthPoints -= 1;
  }
}

export default Ship;
