interface Ship {
  readonly _length: number;
  readonly _maxHealthPoints: number;
  readonly _shipName: string;

  displayHealth(): void;
  isSunk(): void;
  hit(): void;
}

export default Ship;