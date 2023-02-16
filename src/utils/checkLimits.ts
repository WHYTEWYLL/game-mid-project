import { Point } from './../types/Point';
import { canvas } from './getCanvas';
import { Size } from '../types/Size';

export const checkLimits = (position: Point): boolean => {
    return position.x > 50 && position.x < canvas.width * 0.2 && position.y > 200 && position.y < canvas.height - 100;
};
