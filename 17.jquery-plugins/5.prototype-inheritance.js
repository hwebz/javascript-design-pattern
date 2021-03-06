/*!
 * jQuery prototypal inheritance plugin boilerplate
 * Author: Alex Sexton, Scott Gonzalez
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */
 
 // myObject - an objecte representing a concept we wish to model
 // (e.g a car)
 var myObject = {
     init: function(options, elem) {
         // Mix in the passed-in options with the default options
         this.options = $.extend({}, this.options, options);

         // Save the element reference, both as a jQuery
         // reference and a normal reference
         this.elem = elem;
         this.$elem = $(elem);

         // Build the DOM's initial structure
         this._build();

         // return this so that we can chain and use the bridge with less code.
         return this;
     },
     options: {
         name: "No name"
     },
     _build: function() {
         // this.$elem.html("<h1>" + this.options.name + "</h1>");
     },
     myMethod: function(msg) {
         // We have direct access to the associated and cached
         // jQuery element
         // this.$elem.append("<p>" + msg + "</p>");
     }
 };

 // Object.create support test, and fallback for browsers without it
 if (typeof Object.create !== "function") {
     Object.create = function(o) {
         function F() {
         F.prototype = o;
         return new F();
     };
 }

 // Create a plugin based on a defined object
 $.plugin = function(name, object) {
     $.fn[name] = function(options) {
         return this.each(function(options) {
            if (!$.data(this, name)) {
                $.data(this, name, Object.create(object).init(options, this));
            }
         });
     };
 };

 // Usage:
$.plugin("myobj", myObject);
$("#elem").myobj({ name: "John" });
var collection = $("#elem").data("myobj");
collection.myMethod("I am a method");