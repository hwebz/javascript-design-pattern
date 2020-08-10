/*!
 * jQuery custom-events plugin boilerplate
 * Author: DevPatch
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */

 // In this pattern, we use jQuery's custom events to add
 // pub/sub (lublish/subscribe) capabilities to widgets.
 // each widget would publish certain events and subscribe
 // to others. This approach effectively helps to decouple
 // the widgets and enables them to function independently.

 ;(function($, window, document, undefined) {
    $.widget("ao.eventStatus", {
        options: {

        },
        _create: function() {
            var self = this;

            // self.element.addClass("my-widget");

            // subscribe to "myEventStart"
            self.element.on("myEventStart", function(e) {
                console.log("event start");
            });

            // subscribe to "myEventEnd"
            self.element.on("myEventEnd", function(e) {
                console.log("event end");
            });

            // unsubscribe to "myEventStart"
            // self.element.off("myEventStart", function(e) {
                // console.log("unsubscribe to this event");
            // })
        },
        destroy: function() {
            $.Widget.prototype.destroy.apply(this, arguments);
        },
    });
 })(jQuery, window, document);

 // Publishing event notifications
 // $(".my-widget").trigger("myEventStart");
 // $(".my-widget").trigger("myEventEnd");

 // Usage
 var el = $("#elem");
 el.eventStatus();
 el.eventStatus().trigger("myEventStart");