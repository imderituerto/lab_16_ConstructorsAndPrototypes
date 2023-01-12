const Car = require('/.car')
const Dealership = require('/.dealership')

//setup
let dealership;
beforeEach( () => {
    dealership = new Dealership("Wheeler Dealer", 4);
});

//tests
describe("Testing dealership methods", () => {
    test("Can count total stock", () => {
        dealership.addCar(new Car("BMW", 20_000, "Something"))
        dealership.addCar(new Car("Ford", 10_000, "Something"))
        dealership.addCar(new Car("Toyota", 15_000, "Something"))

        const expected = 3;
        const actual = dealership.carsInStock();
        expect(actual).toBe(expected);
    })

    test("Can add car to stock", () => {
        dealership.addCar(new Car("Volvo", 25_000, "Something"))

        const expected = 4;
        const actual = dealership.carsInStock();
        expect(actual).toBe(expected);
    })

    test("Can print array of car manufacturers", () => {
        const expected = ['BMW', 'Ford', 'Toyota'];
        const actual = dealership.allManufacturers();
        expect(actual).toEqual(expected);
    })

    test("Return nothing if manufacturer doesn't exist", () => {
        const expected = [];
        const actual = dealership.findByManufacturer("Fiat");
        expect(actual).toEqual(expected);
    })

    test("Can add total value", () => {

    })

})