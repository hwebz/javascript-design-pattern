var myCar = {
    name: "Ford Escort",

    drive: function () {
        console.log("Wee. I'm Driving!");
    },

    panic: function () {
        console.log("Wait. How do you stop this thing?");
    }
};

// Use Object.create to instantiate a new car
var yourCar = Object.create(myCar);

// Now we can see that one is a prototype of the other
console.log(yourCar.name);

// Another example
var vechicle = {
    getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
    }
};

var car = Object.create(vehicle, {
    "id": {
        value: MY_GLOBAL.nextId(),
        // writable: false, configurable: false by default
        enumerable: true
    },
    "model": {
        value: "Ford",
        enumerable: true
    }
});