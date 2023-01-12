//object
const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.carStock = [];
}

//methods
Dealership.prototype.carsInStock = function() {
    return this.carStock.length;
};

Dealership.prototype.addCar = function(car) {
    if (this.carStock.length < this.maxCars){
    this.carStock.push(car);
    }
};

Dealership.prototype.allManufacturers = function (){
    return this.carStock.map((car) => {
    return car.manufacturer;
    })
};

Dealership.prototype.findByManufacturer = function (manufacturer){
    return this.carStock.filter((car) => 
    {car.manufacturer === manufacturer;
    })
};

Dealership.prototype.carValue = function() {
    return this.carStock.reduce((reducer, car) => reducer + car.price, 0);
};

//- Count the number of cars in stock
// - Add a car to stock
// - Return an array containing each car's manufacturer
// - Find all the cars from a given manufacturer
// - Find the total value of all the cars in stock

module.exports = Dealership;