import "phaser";

var config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

export const start = () => new Phaser.Game(config);

function preload() {
  this.load.image("logo", "assets/images/logo.png");
}

function create() {
  var logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
