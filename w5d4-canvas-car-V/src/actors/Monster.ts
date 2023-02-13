import { Point } from "../types/Point";
import { load_sprite } from "../utils/load_sprites";
import { Actor } from "./Actor";
import { canvas, canvasMid, ctx } from '../utils/getCanvas';
import { Size } from "../types/Size";
import { converAngleToRad } from "../utils/convertAngleToRad";
import { checkLimits } from "../utils/checkLimits";

const imagesSrc: string = 'src/assets/img/';

interface InitialThiefProps {
  position: Point;
  speed?: number;
  acceleration?: number;
  angle?: number;
  angleSpeed?: number;
}

export class Monster extends Actor {
  image: HTMLImageElement;
  monster_id?: string;
  size: Size;
  speed: number;
  acceleration: number;
  angle: number;
  angleSpeed: number;
  timer: number;
  


  constructor(props: InitialThiefProps) {
    super(props.position);
    console.log("New Thief");
    this.size = {
      w: 150,
      h: 150,
    };
    this.image = new Image();
    this.image.src = imagesSrc + 'monster.png';
    this.speed = props.speed || 0;
    this.acceleration = props.acceleration || 0;
    this.angle = props.angle || 0;
    this.angleSpeed = props.angleSpeed || 0;
    this.timer = 0;
    
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    ctx.drawImage(this.image, -10, 1, this.size.w, this.size.h);
  }
  
  update(delta: number): void {
  }





}