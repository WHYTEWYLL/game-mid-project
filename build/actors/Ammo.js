import { Actor } from "./Actor";
export class Ammo extends Actor {
    constructor(props) {
        super(props.position);
        this.player = props.player;
        this.id = parseInt((Math.random() * 10000).toFixed(0));
        this.expired = false;
        // Ammo starts at player postition
        this.position = this.player.position;
        // Ammo size and speed
        this.size = { w: 100, h: 100 };
        this.speed = 50;
        // Sprite
        this.image = new Image();
        this.image.src = 'bullet.png';
        console.log("New Ammo");
    }
    update(delta) {
        let newPos = {
            x: this.position.x + this.speed * (delta + 0.5),
            y: this.position.y,
        };
        this.position = newPos;
        // If this bullet is outside canvas, mark it to be deleted
        if (this.position.x > 1000) {
            this.expired = true;
        }
    }
    draw(ctx, delta) {
        ctx.translate(this.position.x, this.position.y);
        ctx.drawImage(this.image, 0, 0, 2048, 1365, -this.size.w / 2, -this.size.h / 2, this.size.w, this.size.h);
    }
}
