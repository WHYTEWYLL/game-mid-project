<img src="back.jpeg" width="100%"/>

# Luke Monster Game

# Technologies Used
- TypeScript
- HTML5 Canvas


# Project Motivation
This game was created as a fun project to explore the capabilities of TypeScript and HTML5 Canvas.
This is a game built using TypeScript. The game is a shooting game where the player has to shoot enemies and protect their territory.

# Project Access

https://whytewyll.github.io/game-mid-project/

# Table of Contents
- Technologies Used
- Images and Videos
- Project Motivation
- Project Structure
- Quick Start
- Installation and Deployment
- Code Examples
- Execution Environments
- Global Variables
- Packages and Dependencies
- Statistics
- Licenses
- Acknowledgments
- Other Considerations

# Project Structure
```lua

-|-- src/
|   |-- actors/
|   |   |-- Actor.ts
|   |   |-- Ammo.ts
|   |   |-- AmmoManager.ts
|   |   |-- Enemy.ts
|   |   |-- EnemyManager.ts
|   |   |-- FPSViewer.ts
|   |   |-- Sheriff.ts
|   |   |-- Timer.ts
|   |-- utils/
|   |   |-- getCanvas.ts
|   |-- index.ts
|-- dist/
|-- node_modules/
|-- package.json
|-- tsconfig.json
|-- README.md
```

# Quick Start
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open ` http://localhost:5173` in your browser.


# Installation and Deployment
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the project.
4. Copy the `dist` folder to your web server.
5. Open `index.html` in your browser.

# Code Examples
```typescript
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
```
# Execution Environments
The game can be run on any modern web browser.

# Global Variables
- canvas: The HTML canvas element
- canvasMid: The midpoint of the canvas
- ctx: The 2D rendering context of the canvas
