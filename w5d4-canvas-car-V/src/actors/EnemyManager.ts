import { Actor } from "./Actor";
import { Ammo } from "./Ammo";
import { Monster } from "./Monster";
import { AmmoManager } from "./AmmoManager";

export class EnemyManager extends Actor {
  // This will hold all alive bullets in game
  enemies: Monster[];

  constructor(ammo_manager: AmmoManager ) {
    super();

    this.enemies = [];

    for (let i = 0; i < 10; i++) {
      
      let position = {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
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