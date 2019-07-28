import { GObject } from 'gamedeck/lib/GObject';
import { Vector2 } from 'gamedeck/lib/Utils';
import { Rectangle } from 'gamedeck/lib/GObjects';

export class Tile extends GObject {
  color: string;

  constructor(props: {
    color: string;
    position: Vector2;
    dimensions: Vector2;
  }) {
    super(props);
    this.color = props.color;
  }

  build() {
    return new Rectangle({
      color: this.color,
      x: 1,
      y: 1,
      width: this.dimensions.x - 2,
      height: this.dimensions.y - 2
    });
  }
}
