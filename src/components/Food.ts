export default class Food{
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!;
    }

    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }

    change(){
        let positionX = Math.round((Math.random() * 41)) * 10;
        let positionY = Math.round((Math.random() * 41)) * 10;

        this.element.style.left = positionX + 'px';
        this.element.style.top = positionY + 'px';
    }
}
