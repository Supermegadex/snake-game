import { Scene } from 'gamedeck/lib/Scene';
import { Game } from 'gamedeck/lib/Game';
import { Rectangle } from 'gamedeck/lib/GObjects';
import { Text } from 'gamedeck/lib/gobjects/Text';
import { Vector2 } from 'gamedeck/lib/Utils';
import { PlayableArea } from './gobjects/PlayableArea.gobject';
import { getTextSettings } from './util';

export class NameEntry extends Scene {
  currentInput = [0, 0, 0];
  letterSelected = 0;
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  text_continue = 'Press ENTER to continue...';
  text_gameover = 'Game Over!';
  text_leaderboard = 'Leaderboard';
  downPressed = false;
  upPressed = false;
  leftPressed = false;
  rightPressed = false;
  blinker = false;
  defaultTextSettings: {
    font: string;
    positioning: 'middle center';
    color: string;
  } = { font: '50px monospace', positioning: 'middle center', color: 'white' };

  constructor(private score: number) {
    super();
  }

  build(game: Game) {
    return new Rectangle({
      x: 0,
      y: 0,
      width: game.width,
      height: game.height,
      color: 'black',
      children: [
        new Text({
          ...getTextSettings(),
          position: new Vector2(game.width / 2, 75),
          text: this.text_gameover
        }),
        new Text({
          ...getTextSettings('25px'),
          position: new Vector2(game.width / 2, 150),
          text: 'Your score: ' + this.score
        }),
        this.nameSelectorText(),
        new Text({
          ...getTextSettings('20px', this.blinker ? 'black' : 'white'),
          position: new Vector2(game.width / 2, game.height - 100),
          text: this.text_continue
        })
      ]
    });
  }

  update(game: Game) {
    if (game.input.isPressed('up')) {
      if (!this.upPressed) {
        this.upPressed = true;
        let ci = this.currentInput;
        let ls = this.letterSelected;
        ci[ls]++;
        if (ci[ls] > this.letters.length - 1) {
          ci[ls] = 0;
        }
      }
    } else {
      this.upPressed = false;
    }
    if (game.input.isPressed('down')) {
      if (!this.downPressed) {
        this.downPressed = true;
        let ci = this.currentInput;
        let ls = this.letterSelected;
        ci[ls]--;
        if (ci[ls] < 0) {
          ci[ls] = this.letters.length - 1;
        }
      }
    } else {
      this.downPressed = false;
    }
    if (game.input.isPressed('left')) {
      if (!this.leftPressed) {
        this.leftPressed = true;
        let ci = this.currentInput;
        this.letterSelected--;
        if (this.letterSelected < 0) {
          this.letterSelected = ci.length - 1;
        }
      }
    } else {
      this.leftPressed = false;
    }
    if (game.input.isPressed('right')) {
      if (!this.rightPressed) {
        this.rightPressed = true;
        let ci = this.currentInput;
        this.letterSelected++;
        if (this.letterSelected > ci.length - 1) {
          this.letterSelected = 0;
        }
      }
    } else {
      this.rightPressed = false;
    }

    game.setTimer('toggleBlinker', '40f', () => {
      this.blinker = !this.blinker;
    });
  }

  nameSelectorText() {
    const DIM = [200, 200];
    return new PlayableArea({
      dimensions: new Vector2(DIM[0], DIM[1]),
      children: [
        ...[[0, 0], [DIM[0] / 2, 0], [DIM[0], 0]].map(
          c =>
            new Text({
              ...getTextSettings(),
              text: '▲',
              position: new Vector2(c[0], c[1])
            })
        ),
        ...[
          [0, DIM[1] / 2],
          [DIM[0] / 2, DIM[1] / 2],
          [DIM[0], DIM[1] / 2]
        ].map(
          (c, i) =>
            new Text({
              ...getTextSettings(
                '50px',
                i === this.letterSelected ? 'yellow' : 'white'
              ),
              text: this.letters[this.currentInput[i]],
              position: new Vector2(c[0], c[1])
            })
        ),
        ...[[0, DIM[1]], [DIM[0] / 2, DIM[1]], [DIM[0], DIM[1]]].map(
          c =>
            new Text({
              ...this.defaultTextSettings,
              text: '▼',
              position: new Vector2(c[0], c[1])
            })
        )
      ]
    });
  }
}
