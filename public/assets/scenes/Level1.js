export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.audio('intro_music', ['/assets/audio/01-Opening.ogg']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('bgbox', '/assets/sprites/titlescreen/bgbox.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.image(
			'tictactoe',
			'/assets/sprites/titlescreen/tictactoetitle.png'
		);
		this.load.image(
			'championships',
			'/assets/sprites/titlescreen/championshipstitle.png'
		);
		this.load.image(
			'startbutton',
			'/assets/sprites/titlescreen/startbutton.png'
		);
		this.load.audio('coin_sound', ['/assets/audio/sfx_coin_double1.wav']);
		this.load.audio('winning_sound', ['/assets/audio/sfx_sounds_powerup4.wav']);
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.image('box_blank', '/assets/sprites/box_blank.png');
		this.load.image('box_xblue', '/assets/sprites/box_xblue.png');
		this.load.image('box_ored', '/assets/sprites/box_ored.png');
		this.load.image('boardbg', '/assets/sprites/board/boardbg.png');
		this.load.image('playagain', '/assets/sprites/board/playagain.png');
		this.load.image('wins', '/assets/sprites/board/wins.png');
		this.load.image('xIcon', '/assets/sprites/board/x.png');
		this.load.image('oIcon', '/assets/sprites/board/o.png');
	}
	create() {
		this.arr = [0];
		this.coin_sound = this.sound.add('coin_sound');
		this.winning_sound = this.sound.add('winning_sound');
		// this.gameBoard = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
		this.currentPlayer = true;
		this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);
		this.title = this.add
			.image(this.game.config.width / 2, 50, 'title')
			.setScale(0.5, 0.5);
		this.boardbg = this.add.image(21, 91, 'boardbg').setOrigin(0, 0);
		// 	this.playagainBtn = this.add
		// 	.image(this.game.config.width / 2, 275, 'playagain')
		// 	.setDepth(5);
		// this.playagainBtn
		// 	.setInteractive()
		// 	.on('pointerdown', (pointer, event, localX, localY) => {
		// 		// this.game.destroy(true);
		// 		// this.intro_music.stop();
		// 		this.scene.stop();
		// 		this.scene.start('Level1');
		// 	});
		this.wins = this.add.image(-200, 150, 'wins').setDepth(5);
		this.xIcon = this.add
			.image(this.game.config.width / 2 - 0, 140, 'xIcon')
			.setAlpha(0)
			.setScale(0.5, 0.5)
			.setDepth(6);
		this.oIcon = this.add
			.image(this.game.config.width / 2 - 10, 140, 'oIcon')
			.setAlpha(0)
			.setScale(0.5, 0.5)
			.setDepth(6);

		this.box_blank1 = this.add
			.image(32, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 1);
		this.arr.push(this.box_blank1);

		this.box_blank2 = this.add
			.image(74, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 2);
		this.arr.push(this.box_blank2);
		this.box_blank3 = this.add
			.image(116, 102, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 3);
		this.arr.push(this.box_blank3);
		this.box_blank4 = this.add
			.image(32, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 4);
		this.arr.push(this.box_blank4);
		this.box_blank5 = this.add
			.image(74, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 5);
		this.arr.push(this.box_blank5);
		this.box_blank6 = this.add
			.image(116, 144, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 6);
		this.arr.push(this.box_blank6);
		this.box_blank7 = this.add
			.image(32, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 7);
		this.arr.push(this.box_blank7);
		this.box_blank8 = this.add
			.image(74, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 8);
		this.arr.push(this.box_blank8);
		this.box_blank9 = this.add
			.image(116, 186, 'box_blank')
			.setOrigin(0, 0)
			.setInteractive()
			.setDataEnabled()
			.data.set('val', 9);
		this.arr.push(this.box_blank9);
		this.clickedBox();
	}

	ai() {
		// 	 linearChoose
		// for (let i=1; i<this.arr.length; i++){
		// 	// console.log(this.arr[i].list.val);

		// 	if (this.arr[i].list.val < 10){
		// 	// console.log(this.arr[i]);

		// 		this.arr[i] = this.add
		// 		.image(this.arr[i].parent.x,
		// 			this.arr[i].parent.y,'box_ored')
		// 		.setOrigin(0, 0)
		// 		.setInteractive()
		// 		.setDataEnabled()
		// 		.data.set('val', 12);
		// 		this.currentPlayer = !this.currentPlayer;
		// 		break
		// 	}

		// }

		// 	 randomChoose
			let avaliable = []
			for (let i=1; i<this.arr.length; i++){

				if (this.arr[i].list.val < 10){
					avaliable.push(this.arr[i].list.val)
		}
			}
			let move = avaliable[Math.floor(Math.random() * avaliable.length)]
			console.log(move);

					for (let i=1; i<this.arr.length; i++){

				if (this.arr[i].list.val == move){

					this.arr[i] = this.add
					.image(this.arr[i].parent.x,
						this.arr[i].parent.y,'box_ored')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 12);
					this.currentPlayer = !this.currentPlayer;
					break
				}

			}


	}

	clickedBox() {
		this.input.on('gameobjectdown', (pointer, gameObject) => {
			if (gameObject.data.get('val') == 1) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank1 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				// console.log(this.box_blank1);
				this.arr[1] = this.box_blank1;

				this.coin_sound.play();

				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 2) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank2 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[2] = this.box_blank2;
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 3) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank3 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[3] = this.box_blank3;
				// this.checkWin();
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 4) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank4 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[4] = this.box_blank4;
				//

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 5) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank5 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[5] = this.box_blank5;

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 6) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank6 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[6] = this.box_blank6;
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 7) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank7 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[7] = this.box_blank7;
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 8) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank8 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[8] = this.box_blank8;
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
			if (gameObject.data.get('val') == 9) {
				// console.log(gameObject.data.values.val);

				gameObject.destroy();

				this.box_blank9 = this.add
					.image(gameObject.x, gameObject.y, 'box_xblue')
					.setOrigin(0, 0)
					.setInteractive()
					.setDataEnabled()
					.data.set('val', 11);
				// this.gameBoard[1] = 'x';
				this.currentPlayer = !this.currentPlayer;
				this.arr[9] = this.box_blank9;
				// console.log(gameObject);

				this.coin_sound.play();
				this.ai();
				this.checkWin();
			}
		});
	}
	winningAnimation(winner) {
		this.playagainBtn = this.add
			.image(this.game.config.width / 2, 275, 'playagain')
			.setDepth(5);
		this.playagainBtn
			.setInteractive()
			.on('pointerdown', (pointer, event, localX, localY) => {
				// this.game.destroy(true);
				// this.intro_music.stop();
				this.scene.stop();
				this.scene.start('Level1');
			});
		this.tweens.add({
			targets: this.wins,
			x: this.game.config.width / 2,
			y: 150,
			ease: 'Linear',
			duration: 500,
			repeat: 0,
			yoyo: false
		});
		if (winner == 'x') {
			this.tweens.add({
				targets: this.xIcon,
				x: this.game.config.width / 2,
				y: 140,
				alpha: 1,
				ease: 'Linear',
				delay: 500,
				duration: 300,
				repeat: 0,
				yoyo: false
			});
			this.winning_sound.play();
		} else if (winner == 'o') {
			this.tweens.add({
				targets: this.oIcon,
				x: this.game.config.width / 2,
				y: 140,
				alpha: 1,
				ease: 'Linear',
				delay: 500,
				duration: 300,
				repeat: 0,
				yoyo: false
			});
			this.winning_sound.play();
		}

		this.tweens.add({
			targets: this.playagainBtn,
			x: this.game.config.width / 2,
			y: 275,
			alpha: 1,
			ease: 'Linear',
			delay: 1000,
			duration: 300,
			repeat: 0,
			yoyo: false
		});
	}

	checkWin() {
		let player = 0;
		// console.log(this.arr[1].list.val, this.arr[2].list.val,this.arr[3].list.val, this.arr[4].list.val,this.arr[5].list.val);

		if (
			this.arr[4].list.val == this.arr[5].list.val &&
			this.arr[5].list.val == this.arr[6].list.val
		) {
			if (this.arr[4].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[4].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[1].list.val == this.arr[2].list.val &&
			this.arr[2].list.val == this.arr[3].list.val
		) {
			if (this.arr[1].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[1].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[7].list.val == this.arr[8].list.val &&
			this.arr[8].list.val == this.arr[9].list.val
		) {
			if (this.arr[7].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[7].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[1].list.val == this.arr[4].list.val &&
			this.arr[4].list.val == this.arr[7].list.val
		) {
			if (this.arr[1].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[1].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[2].list.val == this.arr[5].list.val &&
			this.arr[5].list.val == this.arr[8].list.val
		) {
			if (this.arr[2].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[2].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[3].list.val == this.arr[6].list.val &&
			this.arr[6].list.val == this.arr[9].list.val
		) {
			if (this.arr[3].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[3].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[1].list.val == this.arr[5].list.val &&
			this.arr[5].list.val == this.arr[9].list.val
		) {
			if (this.arr[1].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[1].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[3].list.val == this.arr[5].list.val &&
			this.arr[5].list.val == this.arr[7].list.val
		) {
			if (this.arr[3].list.val == 11) {
				player = 'x';
				this.winningAnimation(player);
			}
			if (this.arr[3].list.val == 12) {
				player = 'o';
				this.winningAnimation(player);
			}
		} else if (
			this.arr[1].list.val != 1 &&
			this.arr[2].list.val != 2 &&
			this.arr[3].list.val != 3 &&
			this.arr[4].list.val != 4 &&
			this.arr[5].list.val != 5 &&
			this.arr[6].list.val != 6 &&
			this.arr[7].list.val != 7 &&
			this.arr[8].list.val != 8 &&
			this.arr[9].list.val != 9
		) {
			player = 'xo';
			alert('Draw');
		}
		return player;
	}
	update(time, delta) {}
}
