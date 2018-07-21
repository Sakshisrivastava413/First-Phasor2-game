var game = new Phaser.Game(800, 600, Phaser.CANVAS);

var platforms;

var gameState = {
    preload: function () {
        game.load.image('background', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'background');
        platforms = game.add.group();
        platforms.enableBody = true;

        var ground = platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;
   
    },
    update: function () {

    }
}



game.state.add('gameState', gameState);
game.state.start('gameState');