export class Actor {
    constructor(position = { x: 0, y: 0 }) {
        this.position = position;
    }
    // Métodos por defecto
    update(delta) { }
    draw(ctx, delta) { }
    keyboardEventDown(key) { }
    keyboardEventUp(key) { }
}
