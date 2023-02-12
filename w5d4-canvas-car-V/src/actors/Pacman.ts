import { Point } from '../types/Point';
import { converAngletoRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

export class Pacman extends Actor {
    // Atributos
    size: number;
    mouthOpen: number;
    color: string;
    speed: Point;
    maxSpeed: number;

    constructor(position = { x: 250, y: 250 }, size = 75, mouthOpen = 30, color = '#fbe000', maxSpeed = 5) {
        // Posición inicial del Pacman
        super(position);
        // Dimensiones del Pacman
        this.size = size;
        this.mouthOpen = mouthOpen;
        this.color = color;
        this.speed = { x: maxSpeed, y: 0 };
        this.maxSpeed = maxSpeed;
    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        let open = 20 * Math.sin(20 * this.mouthOpen) + 20;
        let direction = 0;
        if (this.speed.x != 0 && this.speed.x < 0) {
            direction = 180;
        }
        ctx.strokeStyle = '#000';
        ctx.fillStyle = this.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.arc(this.position.x, this.position.y, this.size, converAngletoRad(-open + direction), converAngletoRad(open + direction), true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    update(delta: number): void {
        this.mouthOpen += 0.8 * delta;
        let newPosX = this.position.x + this.speed.x * (delta + 0.3);
        if (newPosX < 1024 - this.size && newPosX >= this.size) {
            this.position.x = newPosX;
        }
    }

    keyboardEvent(key: string): void {
        switch (key) {
            case 'ArrowRight':
                console.log('right');
                this.speed.x = this.maxSpeed;
                break;
            case 'ArrowLeft':
                console.log('left');
                this.speed.x = -this.maxSpeed;
                break;
            case 'ArrowUp':
                console.log('up');
                break;
            case 'ArrowDown':
                console.log('down');
                break;
            default:
                console.log('unvalid key');
        }
    }
}
