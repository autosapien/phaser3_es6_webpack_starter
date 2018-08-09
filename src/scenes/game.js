import phaser  from 'phaser';


export class Game extends phaser.Scene {

    constructor () {
        super({
            key: 'game',
        });

        // game variables
        this.staticBg = null;  // static background
    }

    create() {
        console.log('game created');
        this.events.once('shutdown', this.shutdown, this);
    }

    update(time, delta) {

    }

    shutdown () {

    }

}