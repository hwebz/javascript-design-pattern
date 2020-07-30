var myBadSingleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // Singleton
        var privateRandomNumber = Math.random();

        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Always create a new Singleton instance
        getInstance: function () {
            instance = init();
            return instance;
        }
    };

})();

// Usage:

var badSingletonA = myBadSingleton.getInstance();
var badSingletonB = myBadSingleton.getInstance();
console.log(badSingletonA.getRandomNumber() === badSingletonB.getRandomNumber()) // false

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.