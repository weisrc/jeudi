import "phaser";
import { anims, atlas, keys } from "../data/dungeon.json";

import DungeonScene from "../scenes/DungeonScene";

export default class Entity extends Phaser.GameObjects.Sprite {
  _scene: DungeonScene;
  scene: DungeonScene;
  body: Phaser.Physics.Arcade.Body;
  constructor(scene: DungeonScene, x: number, y: number, tex = "") {
    super(scene, x, y, tex);
    this._scene = scene;
    if (scene.game.settings.ambiantLight !== 1) {
      this.setPipeline("Light2D");
    }
    scene.entities.add(this, true);
  }
}
