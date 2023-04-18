let addSecond = document.querySelector(".add-second");
let substractSecond = document.querySelector(".substract-second");
let time = {
    hours: 10,
    minutes: 59,
    seconds: 55,
    add(){
        ++this.seconds;
        if(this.seconds >= 60){
            this.seconds = 0;
            ++this.minutes;
        }
        if(this.minutes >= 60){
            this.minutes = 0;
            ++this.hours;
        }
        if(this.hours >= 24){
            this.hours = 0;
        }
    },
    substract(){
        --this.seconds;
        if(this.seconds < 0){
            this.seconds = 59;
            --this.minutes;
        }
        if(this.minutes < 0){
            this.minutes = 59;
            --this.hours;
        }
        if(this.hours < 0){
            this.hours = 23;
        }
    },
    display(){
        return `${this.hours < 10 ? "0"+this.hours:this.hours}:${this.minutes < 10 ? "0"+this.minutes:this.minutes}:${this.seconds < 10 ? "0"+this.seconds:this.seconds}`;
    },
    show(){
        document.write(`<div class="time">${this.display()}</time>`)
    }

};
time.show();
addSecond.addEventListener('click',()=>{
    console.log("add");
    time.add();
    document.querySelector(".time").innerHTML = time.display();
});
substractSecond.addEventListener('click',()=>{
    console.log("substract");
    time.substract();
    document.querySelector(".time").innerHTML = time.display();
})