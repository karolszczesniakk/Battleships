abstract class Ship {
  protected _length: number;
  protected _maxHealthPoints: number;
  protected _shipName: string;

  displayHealth(): void {}
  isSunk(): void {}
  hit(): void {}
}

export default Ship;
