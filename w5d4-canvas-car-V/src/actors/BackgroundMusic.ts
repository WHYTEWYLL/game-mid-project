import { checkLimits } from '../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngleToRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

const audioSrc: string = 'src/assets/sounds/';

export class BackgroundMusic extends Actor {
    // Atributos
    music: HTMLAudioElement;

    constructor() {
        // Posición inicial del Snake
        super({ x: 0, y: 0 });
        this.music = new Audio();
        this.music.src = audioSrc + 'backgroundMusic.mp3';

        //Audio Configuration
        this.music.volume = 0.03;
        this.music.loop = true;
        this.music.autoplay = false
    }

    // Métodos
    update(delta: number): void {
        this.music.autoplay = true;
        this.music.play();
    }
}
