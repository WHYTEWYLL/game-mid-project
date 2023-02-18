import { canvas } from './getCanvas';
export const checkLimits = (position) => {
    return position.x > 50 && position.x < canvas.width * 0.2 && position.y > 200 && position.y < canvas.height - 100;
};
