var myApplication = {
    // As we've seen, we can easily define functionality for
    // this object literal..
    getInfo: function() {
        // ..
    },

    // but we can also populate it to support
    // further object namespaces containing anything
    // anything we wish:
    models: {},
    views: {
        pages: {}
    },
    collections: {}
};

// Adding properties directly to the namespace
myApplication.foo = function() {
    return "bar";
}

myApplication.utils = {
    toString: function() {
        // ...
    },
    export: function() {
        // ...
    }
}

// Check to see if a variable (object or plugin namespace) already exists

// This doesn't check for exsitence of "myApplication" in
// the global namespace. Bad practice as we can easily
// clobber an existing variable/namespace with the same name
var myApplication = {};

// The following options *do* check for variable/namespace existence.
// If already defined, we use that instance, otherwise we assign a new
// object literal to myApplication.
//
// Option 1: var myApplication = myApplication || {};
// Option 2: if (!myApplication) { myApplication = {}};
// Option 3: window.myApplication || (window.myApplication = {});
// Option 4: var myApplication = $.fn.myApplication = function() {};
// Option 5: var myApplication = myApplication === undefined ? {} : myApplication;

function foo() {
    myApplication || (myApplication = {});
}

// myApplication hasn't been initialized,
// so foo() throws a Reference error

foo();

// However accepting myApplication as an
// argument

function foo(myApplication) {
    myApplication || (myApplication = {});
}

foo();

// Even if myApplication === undefined, there is no error
// and myApplication gets set to {} correctly

// Option 4
// If we were to define a new plugin.
var myPlugin = $.fn.myPlugin = function() {
    // ...
}

// Then later rather than having to type:
$.fn.myPlugin.defaults = {};

// We can do
myPlugin.defaults = {};

// Another option
var namespace = (function() {
    // define within the local store
    var privateMethod1 = function() { /* ... */ },
        privateMethod2 = function() { /* ... */ },
        privateProperty1 = "foobar";

    return {
        // the object literal returned here can have as many
        // nested depths as we wish, however as mentioned,
        // this way of doing things works best for smaller,
        // limited-scope applications in my personal opinion
        publicMethod1: privateMethod1,

        // nested namespace with public properties
        properties: {
            publicProperty1: privateProperty1
        },

        // another tested namespace
        utils: {
            publicMethod2: privateMethod2
        }
    }
})();

// For configuration
var myConfig = {
    language: "english",
    defaults: {
        enableGeolocation: true,
        enableSharing: false,
        maxPhotos: 20
    },
    theme: {
        skin: "a",
        toolbars: {
            index: "ui-navigation-toolbar",
            pages: "ui-custom-toolbar"
        }
    }
};