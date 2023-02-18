import { Actor } from './Actor';
export class Timer extends Actor {
    constructor(props) {
        super(props.position);
        this.elapsed = props.elapsed || 0;
    }
    // Métodos
    draw(ctx, delta) {
        ctx.translate(this.position.x, this.position.y);
        const timer = this.elapsed += delta;
        ctx.font = '35px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText('Timer', 0, 0);
        ctx.fillText(`${timer.toFixed(1)}s`, 6, 50);
    }
}
