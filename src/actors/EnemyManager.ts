import { Actor } from "./Actor";
import { Ammo } from "./Ammo";
import { Monster } from "./Monster";
import { AmmoManager } from "./AmmoManager";
import { canvas } from '../utils/getCanvas';


export class EnemyManager extends Actor {
  // This will hold all alive bullets in game
  enemies: Monster[];

  constructor(ammo_manager: AmmoManager ) {
    super();

    this.enemies = [];

    const minX = canvas.width * 0.2;
    const maxX = canvas.width;
    const minY = 200;
    const maxY = canvas.height - 100;
    const numEnemies = 10;

    for (let i = 0; i < numEnemies; i++) {
      
      let position = {
        x: Math.random() * (maxX - minX) + minX,
        y: Math.random() * (maxY - minY) + minY,
      }
      const monster = new Monster( {position: position}, ammo_manager);
      this.enemies.push(monster);
    }
  }

  getEnemies() {
    return this.enemies;
  }

  update(delta: number): void {
    this.enemies = this.enemies.filter((actor) => !actor.to_delete);
    }

}