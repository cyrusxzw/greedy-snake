import Food from '../components/Food';
import ScorePanel from '../components/ScorePanel';
import Snake from '../components/Snake';


export default class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string;
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.direction = "";

        this.init();
    }

    init(){
        document.addEventListener('keydown', this.keydownHandle);
        this.run();
    }

    keydownHandle = (e: KeyboardEvent) => {
        this.direction = e.key;
    }

    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up': 
                Y -= 10;   
                break;
            case 'ArrowDown':
            case 'Down':  
                Y += 10;  
                break;
            case 'ArrowLeft':
            case 'Left':   
                X -= 10; 
                break;
            case 'ArrowRight':
            case 'Right': 
                X += 10;    
                break;
            default:
                break;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y; 
        } catch (error) {
            alert(error.message + 'Game Over!');
            this.isLive = false;
        }

        this.isLive && setTimeout(() => {
            this.run();
        }, 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }

    }
}




