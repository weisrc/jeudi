import "phaser";
import { JeudiGame } from "..";
import { atlas, keys } from "../data/dungeon.json";

const storyText = `Once upon a time, some Thursday of some week of some year, a certain fancy knight with a fancy sword and some shiny armour must save his beloved princess from the dangers of a bloody dungeon. Red potions give you health, blue for speed, yellow for range and green for strength. Coins make you richer!`;

export default class StoryScene extends Phaser.Scene {
  game: JeudiGame;
  constructor() {
    super({});
  }

  create({ music }) {
    this.add.bitmapText(200, 100, "atari", "Story", 16).setOrigin(0.5);

    this.add
      .bitmapText(200, 120, "atari", [storyText, "", "", "Basically, bring her back!"], 8)
      .setOrigin(0.5, 0)
      .setMaxWidth(300)
      .setCenterAlign();

    this.add.sprite(200, 235, "dungeon", "elf_f_idle_anim0").setScale(2);

    this.add.bitmapText(200, 280, "atari", "Hit space to continue!", 8).setOrigin(0.5);

    this.input.keyboard.addListener("keydown", (e: KeyboardEvent) => {
      if (e.key == " ") {
        this.scene.start("settings", { music });
      }
    });
  }
}