export default class Snake{
    element: HTMLElement;
    head: HTMLElement;
    body: HTMLCollection;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.getElementById('head') as HTMLElement;
        this.body = this.element.getElementsByTagName('div');
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value){
        if(this.X === value){
            return;
        }
        if(value < 0 || value > 410){
            throw new Error('蛇撞墙了！');
        }

        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkCross();
    }

    set Y(value){
        if(this.Y === value){
            return;
        }
        if(value < 0 || value > 410){
            throw new Error('蛇撞墙了！');
        }
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkCross();
    }

    addBody(){
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
        console.log(this.body);
        console.log(this.head)
    }

    moveBody(){
        for (let i = this.body.length - 1; i > 0; i--) {
            let prevBodyX = (this.body[i-1] as HTMLElement).offsetLeft;
            let prevBodyY = (this.body[i-1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = prevBodyX + 'px';
            (this.body[i] as HTMLElement).style.top = prevBodyY + 'px';
        }
    }

    checkCross(){
        for(let i = 1; i <=  this.body.length; i++){
            if((this.body[i] as HTMLElement).offsetLeft === this.X && (this.body[i] as HTMLElement).offsetTop === this.Y){
                throw new Error('撞到自己了！');
            }
        }
    }
}