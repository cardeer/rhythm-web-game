import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
  preload() {}

  create() {
    const lineY1 = this.game.canvas.height / 2;

    this.add.rectangle(0, lineY1, this.game.canvas.width, 2, 0xff0000).setOrigin(0, 0.5);
    this.add.rectangle(0, lineY1 + 100, this.game.canvas.width, 2, 0xff0000).setOrigin(0, 0.5);

    this.input.keyboard?.on("keydown-LEFT", this.handleKeyDown, this);
    this.input.keyboard?.on("keydown-RIGHT", this.handleKeyDown, this);
    this.input.keyboard?.on("keydown-UP", this.handleKeyDown, this);
    this.input.keyboard?.on("keydown-DOWN", this.handleKeyDown, this);
  }

  handleKeyDown(event: Phaser.Input.Keyboard.Key) {
    console.log(event);
  }

  update(time: number, delta: number): void {}
}
