class Button{
    constructor(height,width,text){
        this.height = height;
        this.width = width;
        this.text = text;
    }
    showBtn(){
        document.write(`<button style="height:${this.height}px;width:${this.width}px">${this.text}</button>`)
        
    }
}
class BootstrapButton extends Button{
    constructor(height,width,text,color){
        super(height,width,text);
        this.color = color;
    }
    showBtn(){
        document.write(`<button style="background-color:${this.color};height:${this.height}px;width:${this.width}px">${this.text}</button>`)
    }
}
let btn = new Button(100,100,"ABOBA");
btn.showBtn();
let btnBootstrap = new BootstrapButton(100,100,"ABOBOVYCH","red");
btnBootstrap.showBtn();