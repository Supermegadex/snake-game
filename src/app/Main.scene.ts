import { Scene } from 'gamedeck/lib/Scene';
import { Game } from 'gamedeck/lib/Game';
import { Rectangle } from 'gamedeck/lib/GObjects';
import { Vector2 } from 'gamedeck/lib/Utils';
import { PlayableArea } from './gobjects/PlayableArea.gobject';
import { Tile } from './gobjects/Tile.gobject';
import { Text } from 'gamedeck/lib/gobjects/Text';
import { NameEntry } from './NameEntry.scene';

export class Main extends Scene {
  headDir = new Vector2(0, 1);
  bodyPos: Vector2[] = [new Vector2(5, 8), new Vector2(4, 8)];
  apple = new Vector2(0, 0);
  pauseGame = false;
  points = 0;

  constructor() {
    super();
    // this.start();
  }

  build(game: Game) {
    return new Rectangle({
      color: 'black',
      x: 0,
      y: 0,
      width: game.width,
      height: game.height,
      children: [
        // new Text({
        //   font: '50px monospace',
        //   color: 'white',
        //   text: this.points.toString(),
        //   position: new Vector2(game.width / 2, 100),
        //   positioning: 'middle center'
        // }),
        new PlayableArea({
          dimensions: new Vector2(400, 400),
          children: [
            new Rectangle({
              color: 'grey',
              x: 0,
              y: 0,
              width: 400,
              height: 400
              // children: [
              //   ...this.bodyPos.map(
              //     part =>
              //       new Tile({
              //         position: part.scalar(10),
              //         dimensions: new Vector2(10, 10),
              //         color: 'green'
              //       })
              //   ),
              //   new Tile({
              //     position: this.apple.scalar(10),
              //     dimensions: new Vector2(10, 10),
              //     color: 'red'
              //   })
              // ]
            })
          ]
        })
      ]
    });
  }

  update(game: Game) {
    //   game.setTimer('update', '10f', () => {
    //     if (!this.pauseGame) {
    //       const head = this.bodyPos[0];
    //       for (let i = this.bodyPos.length - 1; i >= 0; i--) {
    //         if (i > 0) {
    //           this.bodyPos[i] = this.bodyPos[i - 1].clone();
    //         } else {
    //           this.bodyPos[i].addM(this.headDir);
    //         }
    //       }
    //       if (this.apple.x === head.x && this.apple.y === head.y) {
    //         this.bodyPos.push(this.bodyPos[this.bodyPos.length - 1].clone());
    //         this.points++;
    //         while (
    //           !this.bodyPos.every(
    //             v => v.x !== this.apple.x && v.y !== this.apple.y
    //           )
    //         ) {
    //           this.newApple();
    //         }
    //       }
    //       if (this.bodyPos.length > 3) {
    //         for (let part of this.bodyPos.slice(1)) {
    //           if (part.x === head.x && part.y === head.y) {
    //             game.loadScene(new NameEntry(this.points));
    //           }
    //         }
    //       }
    //       if (head.x >= 40 || head.y >= 40 || head.x < 0 || head.y < 0) {
    //         game.loadScene(new NameEntry(this.points));
    //       }
    //     }
    //   });
    //   if (game.input.isPressed('up')) {
    //     this.headDir = new Vector2(0, -1);
    //   }
    //   if (game.input.isPressed('down')) {
    //     this.headDir = new Vector2(0, 1);
    //   }
    //   if (game.input.isPressed('left')) {
    //     this.headDir = new Vector2(-1, 0);
    //   }
    //   if (game.input.isPressed('right')) {
    //     this.headDir = new Vector2(1, 0);
    //   }
  }

  // start() {
  //   this.points = 0;
  //   this.bodyPos = [
  //     new Vector2(
  //       Math.floor(Math.random() * 40),
  //       Math.floor(Math.random() * 40)
  //     )
  //   ];
  //   this.newApple();
  // }

  // newApple() {
  //   this.apple = new Vector2(
  //     Math.floor(Math.random() * 40),
  //     Math.floor(Math.random() * 40)
  //   );
  // }
}
