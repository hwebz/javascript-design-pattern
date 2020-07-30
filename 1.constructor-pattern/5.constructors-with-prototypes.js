function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// toString() will now be shared between all of the Car objects
Car.prototype.toString = function () {
    return this.model + " has done " + this.year + " miles";
}

// Usage:
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());