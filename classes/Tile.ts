import Ship from './Battleship';

export type TileState = Ship | 'Water' | 'Hit' | 'Miss'

type Tile = {
  id: string;
  row: string;
  column: number;
  state: TileState | null;
};

export default Tile;
