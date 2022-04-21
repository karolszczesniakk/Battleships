import Battlefield from './Battlefield';
import Displayer from './Displayer';

import Ship from './Ship';

class Shooter {
  constructor() {}

  public fireAt(battlefield: Battlefield, displayer: Displayer,positionName: string) {
    const targetTile = battlefield.findTile(positionName);

    if (!targetTile || targetTile === undefined || targetTile.state === null) {
      displayer.updateMessage('Wrong target position');
      return;
    }

    if (targetTile.state === 'Water') {
      targetTile.state = 'Miss';
      displayer.updateMessage('Miss!');
      return;
    }
    if (targetTile.state === 'Hit' || targetTile.state === 'Miss') {
      displayer.updateMessage('You already shot here');
      return;
    }

    if (targetTile.state instanceof Ship) {
      let ship = targetTile.state;
      ship.hit();

      if(ship.isSunk()) displayer.updateMessage(`You DESTROYED ${ship.name}`)
      else displayer.updateMessage(`You hit ${ship.name}`);

      targetTile.state = 'Hit';
      return;
    }
  }
}

export default Shooter;
