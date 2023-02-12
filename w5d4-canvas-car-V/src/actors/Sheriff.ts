import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngleToRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

const imagesSrc: string = 'src/assets/img/';

interface InitialSheriffProps {
    position: Point;
    size: Size;
    speed?: number;
    acceleration?: number;
    angle?: number;
    angleSpeed?: number;
}

export class Sheriff extends Actor {
    
    size: Size;
    initialPosition: Point;
    image: HTMLImageElement;
    speed: Point;
    maxSpeed: number;
    
    constructor(props: InitialSheriffProps, maxSpeed = 3.5 ) {
    // Posición inicial del Car
    super(props.position);
    // Dimensiones del Car
    this.size = props.size;
    this.initialPosition = props.position;
    this.image = new Image();
    this.image.src = imagesSrc + 'cowboy.png';

    this.speed = { x: 0, y: 0 };
    this.maxSpeed = maxSpeed;

    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        // ctx.rotate(converAngleToRad(this.angle));

        if (this.speed.x === 0 && this.speed.y === 0) {
            // Image
            ctx.drawImage(
                this.image,
                10,
                0,
                40,
                30,
                -this.size.w / 2,
                -this.size.h / 2,
                this.size.w,
                this.size.h
        );
        }
        if (this.speed.x !== 0 || this.speed.y !== 0) {
            ctx.drawImage(
                this.image,
                70,
                0,
                40,
                30,
                -this.size.w / 2,
                -this.size.h / 2,
                this.size.w,
                this.size.h
            );
        }

    }


    update() {

        let newPos: Point = {
            x: this.position.x + this.speed.x,
            y: this.position.y + this.speed.y,
        };

        checkLimits(newPos) ? (this.position = newPos) : (this.speed = {x:0, y:0});    }

    keyboardEventDown(key: string): void {
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
                console.log("space");

        }
    }

    keyboardEventUp(key: string): void {
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

    restart(): void {
        this.position = this.initialPosition;
        // this.angle = -90;
        // this.speed = 0;
    }
}