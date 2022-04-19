import Ship from './Battleship';

export type TileState = Ship | 'Water' | 'Hit' | 'Miss' | null

type Tile = {
  id: string;
  row: number;
  column: string;
  state: TileState | null;
};

export default Tile;
