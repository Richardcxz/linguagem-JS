class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
print(){
    console.log(`${this.make} ${this.model} (${this.year})`);
}
}

let myCar = new Car('porsche','panamera',2021);
myCar.print();

class Car2 extends Car{

}

let myCar2 = new Car2('kawazaki','ninja',2017);

myCar2.print();