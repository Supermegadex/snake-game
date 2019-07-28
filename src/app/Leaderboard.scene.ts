import { Scene } from 'gamedeck/lib/Scene';
import { Game } from 'gamedeck/lib/Game';
import { Rectangle } from 'gamedeck/lib/GObjects';

export class Leaderboard extends Scene {
  build(game: Game) {
    return new Rectangle({
      x: 0,
      y: 0,
      width: game.width,
      height: game.height,
      color: 'black'
    });
  }

  update(game: Game) {}
}
