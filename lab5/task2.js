let car = {
    manufacturer: "Lamborgini", 
    model: "221B", 
    year: 2023, 
    averageSpeed: 442,
    show(){
        document.write(`manufacturer: ${this.manufacturer} <br> 
                        model: ${this.model} <br> 
                        year: ${this.year} <br> 
                        averageSpeed: ${this.averageSpeed}`);
    },
    calcTime(distance){
        let clearTime = distance/this.averageSpeed;
        let timeForBreak = Math.floor(clearTime/4); 
        return clearTime + timeForBreak;
    }


};
car.show();
console.log(car.calcTime(1000))