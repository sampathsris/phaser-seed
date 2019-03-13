import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 450,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

function preload() {
    this.load.image('square', 'assets/square.png');
}

function create() {
    let square = this.physics.add.image(10, 10, 'square');
    square.setVelocityX(200);
    square.setVelocityY(200);
    square.setBounce(1);
    square.setCollideWorldBounds(true);
}

function update() {
    // update loop
}

new Phaser.Game(config);
