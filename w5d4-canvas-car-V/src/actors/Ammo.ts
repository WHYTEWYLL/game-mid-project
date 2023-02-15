import { Actor } from "./Actor";
import { Point } from "../types/Point";
import { Size } from "../types/Size";

interface InitialAmmoProps {
  position?: Point;
  speed?: number;
  player: Actor;
}

export class Ammo extends Actor {
  size: Size;
  distance?: Point;
  speed: number;
  image: HTMLImageElement;
  player: Actor;
  expired: boolean;
  id: number;
  constructor(props: InitialAmmoProps) {
    super(props.position);
    this.player = props.player;
    this.id = parseInt((Math.random() * 10000).toFixed(0));

    this.expired = false;

    // Ammo starts at player postition
    const { x, y } = this.player.position;
    this.position = { x, y };

    // Ammo size and speed
    this.size = { w: 100, h: 100 };
    this.speed = 105;

    // Sprite
    this.image = new Image();
    this.image.src = 'src/assets/img/bullet.png';
    console.log("New Ammo");
  }

  update(delta: number): void {
    let newPos: Point = {
      x: this.position.x + this.speed * (delta + 0.5),
      y: this.position.y,
    };
    this.position = newPos;

    // If this bullet is outside canvas, mark it to be deleted
    if (this.position.x > 1000) {
      this.expired = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D, delta: number): void {
    ctx.translate(this.position.x, this.position.y);

    ctx.drawImage(
      this.image,
      0,
      0,
      2048,
      1365,
      -this.size.w / 2,
      -this.size.h / 2,
      this.size.w,
      this.size.h
    );
  }
}
