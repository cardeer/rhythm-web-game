import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
  create() {
    this.add.particles(this.game.canvas.width / 2, this.game.canvas.height / 2, "", {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: Phaser.BlendModes.ADD,
    });
  }
}
