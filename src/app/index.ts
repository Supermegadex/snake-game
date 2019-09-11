import { Main } from './Main.scene';
import { startGame } from 'gamedeck/lib/Game';

const canvas = document.querySelector<HTMLCanvasElement>('canvas#box')!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = startGame(new Main(), {
  canvas
});
game.input.setAlias('up', 'ArrowUp');
game.input.setAlias('down', 'ArrowDown');
game.input.setAlias('left', 'ArrowLeft');
game.input.setAlias('right', 'ArrowRight');
game.input.setAlias('confirm', 'Enter');
console.log(game);
