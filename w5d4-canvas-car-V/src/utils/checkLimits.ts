import { Point } from './../types/Point';
import { canvas } from './getCanvas';

export const checkLimits = (position: Point): boolean => {
    return position.x > 0 && position.x < canvas.width && position.y > 0 && position.y < canvas.height;
};
