
export default class ScorePanel{
    score = 0;
    level = 1;
    maxLevel: number;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    constructor(maxLevel:number = 10){
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
    }

    addScore(){
        this.scoreElement.innerHTML = (++this.score).toString();
        if(this.score % 10 === 0){
            this.levelUp();
        }
    }

    levelUp(){
        if(this.level < this.maxLevel){
            this.levelElement.innerHTML = (++this.level).toString();
        } 
    }
}