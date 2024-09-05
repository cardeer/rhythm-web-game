import Phaser from "phaser";
import { MenuScene } from "../scenes/Menu";

export const game = new Phaser.Game({
  scene: MenuScene,
  width: window.innerWidth,
  height: window.innerHeight,
  input: {
    keyboard: true,
    mouse: true,
  },
});
