import phaser from 'phaser'


export class Preloader extends phaser.Scene {

    constructor () {
        super({
            key: 'preloader'
        })
    }

    preload () {
        console.log('game preloaded');
    }

    create () {
        this.scene.start("game");
    }
}