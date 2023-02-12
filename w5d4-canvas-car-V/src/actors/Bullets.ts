
import { Size } from "../types/Size";
import { abs, hypot } from "../utils/Math";
import { Actor } from "./Actor";
import { Manager } from "./ActorManager";
import { Sheriff } from "./Sheriff";




export class Ammunition extends Actor {
    hit: boolean;
    size: Size;
    frame: number;
    timer: number;
    player: Sheriff;
  
    constructor(player: Sheriff) {
      const pos = {
        x: player.position.x + player.size.w / 2 - 10,
        y: player.position.y,
      };
      super(pos);
      this.hit = false;
      this.size = {
        w: 10,
        h: 60,
      };
  
      this.player = player;
      // Some animation data
      this.frame = 0;
      this.timer = 0;
    //   this.play();
    }
  
    update(delta: number): void {
      this.position = {
        x: this.position.x,
        y: (this.position.y -= 20),
      };
      this.frame = (this.frame + 1) % SPRITE_FRAMES.length;
      this.timer = Number((this.frame / 2).toFixed(0));
      if (this.position.y < 0) {
        this.to_delete = true;
      }
  
      // Check if there's any actor nearby
      const actors_to_check: Actor[] = Manager.actors.filter((a) =>
        a.getname().startsWith("Alien")
      );
  
      // Check for collisions
      actors_to_check.forEach((alien) => {
        let alienX = alien.position.x + alien.size.w / 2;
        let alienY = alien.position.y + alien.size.h / 2;
        let laserX = this.position.x + this.size.w / 2;
        let laserY = this.position.y + this.size.h / 2;
        let posX: number = abs(laserX - alienX);
        let posY: number = abs(laserY - alienY);
  
        let distance = hypot(posX, posY);
        let difDistance = alien.size.w / 2 + this.size.w / 2;
  
        // There's a collision with an objective
        if (distance <= difDistance) {
          this.hit = true;
          alien.to_delete = true;
          this.to_delete = true;
          this.player.score += 1;
        }
      });
    }
  
    draw(ctx: CanvasRenderingContext2D): void {
      ctx.drawImage(    [this.frame], this.position.x, this.position.y);
    }
  
    getname(): string {
      return "Bullet";
    }
  
  }