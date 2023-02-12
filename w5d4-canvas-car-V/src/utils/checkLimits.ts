import { Point } from './../types/Point';
import { canvas } from './getCanvas';
import { Size } from '../types/Size';

export const checkLimits = (position: Point): boolean => {
    return position.x > 0 && position.x < canvas.width * 0.2 && position.y > 0 && position.y < canvas.height;
};
