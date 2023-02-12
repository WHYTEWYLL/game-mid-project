import { Point } from "../types/Point";
import { abs, hypot } from "../utils/Math";
import { load_sprite } from "../utils/load_sprite";
import { Actor } from "./Actor";
import { Sheriff } from "./Sheriff";

const SPRITE = load_sprite("/images/alienSprites/thief.png");

export class Thief extends Actor {
  sprite: HTMLImageElement;
  player: Sheriff;
  alien_id?: string;

  constructor(props: Point, speed: number, player: Sheriff) {
    super(props);
    console.log("New Thief");
    this.speed = speed;
    this.size = {
      w: 100,
      h: 100,
    };
    this.sprite = SPRITE;
    this.player = player;
    this.alien_id = Math.floor(Math.random() * 1000).toFixed(0);
  }

  update(delta: number): void {
    this.angle += this.angleSpeed;
    this.angleSpeed *= 0.95;
    this.speed = (this.speed + this.acceleration) * 0.95;

    const boostedDelta = delta * 10;
    let newPos: Point = {
        x: this.position.x + this.speed * boostedDelta * Math.cos(converAngleToRad(this.angle)),
        y: this.position.y + this.speed * boostedDelta * Math.sin(converAngleToRad(this.angle)),
    };
    checkLimits(newPos) ? (this.position = newPos) : (this.speed = 0);

    this.timer += delta;

    if (this.timer >= 0.05) {
        this.currentImagePosition = (this.currentImagePosition + 1) % 3;
        this.timer = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.sprite, this.position.x, this.position.y);
  }


}