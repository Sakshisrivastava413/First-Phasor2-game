var game = new Phaser.Game(800, 600, Phaser.CANVAS);

var platforms;

var gameState = {
    preload: function () {
        
    },
    create: function () {
        
    },
    update: function () {

    }
}



game.state.add('gameState', gameState);
game.state.start('gameState');