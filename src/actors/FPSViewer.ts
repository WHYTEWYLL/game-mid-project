import { Actor } from './Actor';

export class FPSViewer extends Actor {
    // Atributos
    constructor(position = { x: 10, y: 35 }) {
        super(position);
    }
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        const FPS = (1 / delta).toFixed(0);
        ctx.font = '35px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`FPS: ${FPS}`, this.position.x, this.position.y);
    }
}
