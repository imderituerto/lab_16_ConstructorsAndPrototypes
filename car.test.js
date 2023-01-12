const Car = require('/.car');

//setup
let car;
beforeEach( () => {
    car = new Car("BMW", 20_000,"Hybrid");
});

//tests
describe("Accessing car properties", () => {
    test("Can access the manufacturer property", () =>{
        const expected = "BMW";
        const actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    test("Can access the price property", () =>{
        const expected = 20_000;
        const actual = car.price;
        expect(actual).toBe(expected);
    });

    test("Can access the engine property", () =>{
        const expected = "Hybrid";
        const actual = car.engine;
        expect(actual).toBe(expected);
    });
});