import { Point } from "../types/Point";
import { load_sprite } from "../utils/load_sprites";
import { Actor } from "./Actor";
import { Sheriff } from "./Sheriff";
import { Size } from "../types/Size";

const imagesSrc: string = 'src/assets/img/';

interface InitialThiefProps {
  position: Point;
}

export class Monster extends Actor {
  image: HTMLImageElement;
  monster_id?: string;
  size: Size;

  constructor(props: InitialThiefProps) {
    super(props.position);
    console.log("New Thief");
    this.size = {
      w: 150,
      h: 150,
    };
    this.image = new Image();
    this.image.src = imagesSrc + 'monster.png';
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    
    ctx.drawImage(this.image, -10, 1, this.size.w, this.size.h);
  }
  
  update(delta: number): void {
    // this.angle += this.angleSpeed;
    // this.angleSpeed *= 0.95;
    // this.speed = (this.speed + this.acceleration) * 0.95;

    // const boostedDelta = delta * 10;
    // let newPos: Point = {
    //     x: this.position.x + this.speed * boostedDelta * Math.cos(converAngleToRad(this.angle)),
    //     y: this.position.y + this.speed * boostedDelta * Math.sin(converAngleToRad(this.angle)),
    // };
    // checkLimits(newPos) ? (this.position = newPos) : (this.speed = 0);

    // this.timer += delta;

    // if (this.timer >= 0.05) {
    //     this.currentImagePosition = (this.currentImagePosition + 1) % 3;
    //     this.timer = 0;
    // }
  }





}