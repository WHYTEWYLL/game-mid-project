import { checkLimits } from './../utils/checkLimits';
import { Actor } from './Actor';
export class Sheriff extends Actor {
    constructor(props, maxSpeed = 3.5) {
        // Posición inicial del Car
        super(props.position);
        // Dimensiones del Car
        this.size = props.size;
        this.initialPosition = props.position;
        this.image = new Image();
        this.image.src = '/cowboy.png';
        this.speed = { x: 0, y: 0 };
        this.maxSpeed = maxSpeed;
        this.ammunition = [];
    }
    // Métodos
    draw(ctx, delta) {
        ctx.translate(this.position.x, this.position.y);
        // ctx.rotate(converAngleToRad(this.angle));
        if (this.speed.x === 0 && this.speed.y === 0) {
            // Image
            ctx.drawImage(this.image, 10, 0, 40, 30, -this.size.w / 2, -this.size.h / 2, this.size.w, this.size.h);
        }
        if (this.speed.x !== 0 || this.speed.y !== 0) {
            ctx.drawImage(this.image, 70, 0, 40, 30, -this.size.w / 2, -this.size.h / 2, this.size.w, this.size.h);
        }
    }
    update() {
        let newPos = {
            x: this.position.x + this.speed.x,
            y: this.position.y + this.speed.y,
        };
        checkLimits(newPos) ? (this.position = newPos) : (this.speed = { x: 0, y: 0 });
    }
    keyboardEventDown(key) {
        switch (key) {
            case `ArrowRight`:
                console.log("right");
                this.speed.y = 0;
                this.speed.x = this.maxSpeed;
                break;
            case `ArrowLeft`:
                console.log("left");
                this.speed.y = 0;
                this.speed.x = -this.maxSpeed;
                break;
            case `ArrowUp`:
                console.log("up");
                this.speed.x = 0;
                this.speed.y = -this.maxSpeed;
                break;
            case `ArrowDown`:
                console.log("down");
                this.speed.x = 0;
                this.speed.y = this.maxSpeed;
                break;
            case ` `:
                this.speed.y = 0;
                this.speed.x = 0;
                console.log("space");
                console.log(this.ammunition);
                console.log(...this.ammunition);
        }
    }
    keyboardEventUp(key) {
        switch (key) {
            case 'ArrowUp':
                this.speed.y = 0;
                break;
            case 'ArrowDown':
                this.speed.y = 0;
                break;
            case 'ArrowLeft':
                this.speed.x = 0;
                break;
            case 'ArrowRight':
                this.speed.x = 0;
                break;
        }
    }
    restart() {
        this.position = this.initialPosition;
    }
}
