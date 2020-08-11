var myApp = myApp || {};
myApp.utils = {};

(function() {
    var val = 5;

    this.getValue = function() {
        return val;
    };

    this.setValue = function(newVal) {
        val = newVal;
    }

    // also introduce a new sub-namespace
    this.tools = {};
}).apply(myApp.utils);

// inject new behavior into the tools namespace
// which we defined via the utilities module

(function() {
    this.diagnose = function() {
        return "diagnosis";
    }
}).apply(myApp.utils.tools);

// note, this same approach to extension could be applied
// to a regular IIFE, by just passing in the context as
// an argument and modifying the context rather than just
// "this"

// Usage:

// Outputs our populated namespace
console.log(myApp);

// Outputs: 5
console.log(myApp.utils.getValue());

// Sets the value of `val` and returns it
myApp.utils.setValue(25);
console.log(myApp.utils.getValue());

// Testing another level down
console.log(myApp.utils.tools.diagnose());

//===========================================================
// define a namespace we can use later
var ns = ns || {},
    ns2 = ns2 || {};

// the module/namespace creator
var creator = function(val) {
    var val = val || 0;

    this.next = function() {
        return val++;
    };

    this.reset = function() {
        val = 0;
    };
};

creator.call(ns);

// ns.next, ns.reset now exist
creator.call(ns2, 5000);

// ns2 contains the same methods
// but has an overridden value for val
// of 5000