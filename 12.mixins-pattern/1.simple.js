var myMixins = {
    moveUp: function() {
        console.log("move up");
    },
    moveDown: function() {
        console.log("move down");
    },
    stop: function() {
        console.log("stop! in the name of love!");
    }
};

// A skeleton carAnimator constructor
function CarAnimatior() {
    this.moveLeft = function() {
        console.log("move left");
    };
}

// A skeleton personAnimator constructor
function PersonAnimator() {
    this.moveRandomly = function() {
        // ...
    }
}

// Extend both constructors with our Mixin
_.extend(CarAnimatior.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

// Create a new instance of carAnimator
var myAnimator = new CarAnimatior();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move right
// stop! in the name of love!