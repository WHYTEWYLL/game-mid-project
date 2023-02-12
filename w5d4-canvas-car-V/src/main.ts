import { BackgroundMusic } from './actors/BackgroundMusic';
import { Circuit } from './actors/Circuit';
import { canvas, canvasMid, ctx } from './utils/getCanvas';
import { Actor } from './actors/Actor';
import { FPSViewer } from './actors/FPSViewer';
import { Car } from './actors/Car';
import { Timer } from './actors/Timer';
import { Snake } from './actors/Snake';

window.onload = () => {
    // Actors
    const player = new Car({ position: { x: canvasMid.x, y: 850 }, size: { w: 100, h: 40 }, speed: 10, angle: -90 });

    const circuit = new Circuit({ car: player });

    const fps = new FPSViewer();

    const timer = new Timer({ position: { x: canvasMid.x - 50, y: 35 } });

    const snake = new Snake({ position: { x: 200, y: 500 }, size: { w: 100, h: 100 }, speed: 10, angle: -90 });

    const music = new BackgroundMusic();

    // Array de Actores que se van a dibujar en pantalla
    const actors: Actor[] = [fps, player, snake, timer, circuit, ...circuit.barriers, music];

    // Inicializar el primer frame
    let lastFrame = 0;

    // Renderizado
    // "time" es el tiempo transcurrido
    const render = (time: number) => {
        // "delta" es la diferencia de tiempo entre el frame anterior y el actual
        let delta = (time - lastFrame) / 1000;

        // Actualizando "lastFrame"
        lastFrame = time;

        // Actualiza la posición de los actores del canvas
        actors.forEach((actor) => {
            actor.update(delta);
        });

        // Borra lo pintado en el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibuja o pinta los actores en el canvas
        actors.forEach((actor) => {
            ctx.save();
            actor.draw(ctx, delta);
            ctx.restore();
        });

        // Recursividad para el renderizado correcto
        window.requestAnimationFrame(render);
    };

    // Primera llamada del renderizado
    window.requestAnimationFrame(render);

    // Escuchar la tecla presionada
    document.body.addEventListener('keydown', (e) => {
        actors.forEach((player) => {
            player.keyboardEventDown(e.key);
        });
    });

    // Escuchar la tecla liberada
    document.body.addEventListener('keyup', (e) => {
        actors.forEach((player) => {
            player.keyboardEventUp(e.key);
        });
    });
};
