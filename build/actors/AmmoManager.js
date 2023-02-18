import { Actor } from "./Actor";
import { Ammo } from "./Ammo";
export class AmmoManager extends Actor {
    constructor(player) {
        super();
        // Save player to pass it to all ammos in creation
        this.player = player;
        this.ammo = [];
    }
    addBullet() {
        const bullet = new Ammo({ player: this.player });
        this.ammo.push(bullet);
        console.log(`Created bullet=${bullet.id}, current bullets ${this.ammo.length}`);
    }
    getAmmoActors() {
        return this.ammo;
    }
    keyboardEventDown(key) {
        if (key == " ") {
            this.addBullet();
        }
    }
    update(delta) {
        // Delete expired bullets on each frame
        const not_expired_bullets = this.ammo.filter((a) => {
            const bullet = a;
            return !bullet.expired;
        });
        this.ammo = not_expired_bullets;
    }
}
