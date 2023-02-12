import { Point } from '../types/Point';

export interface ActorModel {
    // Atributos
    position: Point;

    // Métodos
    update: (delta: number) => void;
    draw: (ctx: CanvasRenderingContext2D, delta: number) => void;
    keyboardEventDown: (key: string) => void;
    keyboardEventUp: (key: string) => void
}

export class Actor implements ActorModel {
    // Atributos por defecto
    position: Point;
    constructor(position: Point = { x: 0, y: 0 }) {
        this.position = position;
    }
    // Métodos por defecto
    update(delta: number) {}
    draw(ctx: CanvasRenderingContext2D, delta: number) {}
    keyboardEventDown(key: string) {}
    keyboardEventUp(key: string) {}
}
