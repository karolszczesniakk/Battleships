import Ship from './Ship';

export type TileState = Ship | 'Water' | 'Hit' | 'Miss' | null
export type GridPosition = [row:number, column: number];

type Tile = {
  name: string;
  gridPosition: GridPosition;
  state: TileState | null;
};

export default Tile;
