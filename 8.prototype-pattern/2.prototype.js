var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },

    getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
    }
};

// function vehicle(model) {
//     function F() {};
//     F.prototype = vehiclePrototype;

//     var f = new F();

//     f.init(model);
//     return f;
// }
// var car = vehicle("Ford Ecosrt");
// or
function vehicle(model) {
    function F() {}

    return function(proto) {
        F.prototype = proto;
        return new F();
    }
}

var car = vehicle(vehiclePrototype);
car.init("Ford Ecosrt");
car.getModel();