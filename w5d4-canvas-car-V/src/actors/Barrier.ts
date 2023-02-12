import { converAngleToRad } from '../utils/convertAngleToRad';
import { Point } from './../types/Point';
import { Actor } from './Actor';
import { Car } from './Car';

interface InitialBarrierProps {
    position: Point;
    car: Car;
    color?: string;
    angle?: number;
    linkedBarrier?: Barrier;
}

export class Barrier extends Actor {
    //Atributos
    color: string;
    car: Car;
    touched: boolean = false;
    thouching: boolean = false;
    barrierLength: number = 35;
    angle: number = 0;
    distance?: number;
    linkedBarrier?: Barrier;

    constructor(props: InitialBarrierProps) {
        super(props.position);
        this.car = props.car;
        this.color = props.color || 'blue';
        this.angle = props.angle || 0;
        this.linkedBarrier = props.linkedBarrier;
    }

    update(delta: number): void {
        this.distance = Math.sqrt(Math.pow(this.position.x - this.car.position.x, 2) + Math.pow(this.position.y - this.car.position.y, 2));

        if (this.distance <= this.barrierLength) {
            this.thouching = true;
            if (this.linkedBarrier) {
                if (this.linkedBarrier.touched) {
                    this.touched = true;
                }
            } else {
                this.touched = true;
            }
        } else {
            this.thouching = false;
        }
    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(converAngleToRad(this.angle));

        ctx.fillStyle = this.touched ? 'pink' : this.color;

        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, converAngleToRad(360));
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = this.thouching ? 'green' : this.touched && !this.thouching ? 'pink' : this.color;
        ctx.beginPath();
        ctx.moveTo(-this.barrierLength, 0);
        ctx.lineTo(this.barrierLength, 0);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = '#000';
        ctx.font = '30px Consolas';
        ctx.fillText(`${this.distance?.toFixed(0)}`, -20, 35);
    }

    restart(): void {
        this.touched = false;
    }
}
