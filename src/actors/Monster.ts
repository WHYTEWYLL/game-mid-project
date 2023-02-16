import { Point } from "../types/Point";
import { Actor } from "./Actor";
import { Size } from "../types/Size";
import { AmmoManager } from "./AmmoManager";
import { Ammo } from "./Ammo";
import { abs, hypot } from "../utils/Math";



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
  to_delete: boolean = false;
  ammo: AmmoManager;
  


  constructor(props: InitialThiefProps, ammo_manager: AmmoManager) {
    super(props.position);
    console.log("New Enemy");
    this.size = {
      w: 100,
      h: 100,
    };
    this.image = new Image();
    this.image.src = 'monster.png';
    this.ammo = ammo_manager;
    this.to_delete = false;
  
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    // ctx.drawImage(this.image, -10, 1, this.size.w, this.size.h);
    ctx.drawImage(
      this.image,
      200,
      150,
      800,
      800,
      -this.size.w / 2,
      -this.size.h / 2,
      this.size.w,
      this.size.h
    );
  }

  
  update(delta: number): void {

    const actors_to_check: Ammo[] = this.ammo.getAmmoActors()

    
    
    if (actors_to_check.length > 0) {
      actors_to_check.forEach((actor) => {

        let playerPosX: number = actor.position.x + actor.size.w / 2;
        let playerPosY: number = actor.position.y + actor.size.h / 2;
        let alienX = this.position.x + this.size.w / 2;
        let alienY = this.position.y + this.size.h / 2;
        let posX: number = abs(alienX - playerPosX);
        let posY: number = abs(alienY - playerPosY);
    
        let distance = hypot(posX, posY);
        let difDistance = actor.size.w / 2 + this.size.w / 2;
        if (distance <= difDistance) {
          //this.death = true;
          this.to_delete = true;
        }

      })
    }
  }





}