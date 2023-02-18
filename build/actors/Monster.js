import { Actor } from "./Actor";
import { abs, hypot } from "../utils/Math";
export class Monster extends Actor {
    constructor(props, ammo_manager) {
        super(props.position);
        this.to_delete = false;
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
    draw(ctx) {
        ctx.translate(this.position.x, this.position.y);
        // ctx.drawImage(this.image, -10, 1, this.size.w, this.size.h);
        ctx.drawImage(this.image, 200, 150, 800, 800, -this.size.w / 2, -this.size.h / 2, this.size.w, this.size.h);
    }
    update(delta) {
        const actors_to_check = this.ammo.getAmmoActors();
        if (actors_to_check.length > 0) {
            actors_to_check.forEach((actor) => {
                let playerPosX = actor.position.x + actor.size.w / 2;
                let playerPosY = actor.position.y + actor.size.h / 2;
                let alienX = this.position.x + this.size.w / 2;
                let alienY = this.position.y + this.size.h / 2;
                let posX = abs(alienX - playerPosX);
                let posY = abs(alienY - playerPosY);
                let distance = hypot(posX, posY);
                let difDistance = actor.size.w / 2 + this.size.w / 2;
                if (distance <= difDistance) {
                    //this.death = true;
                    this.to_delete = true;
                }
            });
        }
    }
}
