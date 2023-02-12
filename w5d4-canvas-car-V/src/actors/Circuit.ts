import { Point } from '../types/Point';
import { Actor } from './Actor';
import { Barrier } from './Barrier';
import { Car } from './Car';

interface InitialCircuitProps {
    position?: Point;
    car: Car;
    linkedBarrier?: Barrier;
}

export class Circuit extends Actor {
    //Atributos
    barriers: Barrier[] = [];
    completed: boolean = false;
    car: Car;
    nextBarrierToTouch?: number = 1;
    currentBarrierTouching?: number = undefined;

    constructor(props: InitialCircuitProps) {
        super({ x: 800, y: 35 });
        this.car = props.car;
        let barrier: Barrier | undefined;
        for (let i = 5; i > 0; i--) {
            barrier = new Barrier({ position: { x: 511, y: 100 + i * 110 }, angle: 0, car: props.car, linkedBarrier: barrier });

            this.barriers.push(barrier);
        }
    }

    // Métodos
    update(delta: number): void {
        // Comprueba que todos los Barrier han sido tocados
        let countBarrier = 0;
        for (let i = 0; i < this.barriers.length; i++) {
            if (this.barriers[i].touched) countBarrier++;
        }
        if (countBarrier == this.barriers.length) this.completed = true;

        // Comprueba el orden de los Barrier
        for (let i = 0; i < this.barriers.length; i++) {
            const currentBarrier = this.barriers[i];
            if (!currentBarrier.touched) break;
            this.nextBarrierToTouch = i + 1;
        }

        let currentIndex = this.barriers.findIndex((e) => e.thouching);

        if (typeof this.currentBarrierTouching == 'undefined') {
            this.currentBarrierTouching = 0;
        }

        if (currentIndex != -1) {
            this.currentBarrierTouching = currentIndex;
        }

        // Reinicio si recorre el orden mal
        if (this.currentBarrierTouching != 0 && this.nextBarrierToTouch != this.currentBarrierTouching + 1) {
            this.currentBarrierTouching = undefined;
            this.car.restart();
            this.barriers.forEach((barrier) => barrier.restart());
        }
    }

    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.font = '35px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`CURRENT:${this.currentBarrierTouching}`, 0, 0);
        ctx.fillText(`NEXT:${this.nextBarrierToTouch}`, 0, 50);
    }
}
