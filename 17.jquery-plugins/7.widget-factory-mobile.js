/*!
 * (jQuery mobile) jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
 * Author: @scottjehl
 * Further changes: @addyosmani
 * Licensed under the MIT license
 */

 ;(function() {
    // define a widget under a namespace of our choice
    // here "mobile" has been used in the first argument
    $.widget("mobile.widgetName", $.mobile.widget, {
        // Options to be used as defaults
        options: {
            foo: true,
            bar: false
        },

        _create: function() {
            // _create will automatically run the first time this
            // widget is called. Put the initial widget set-up code
            // here, then we can access the element on which
            // the widget was called via this.element
            // The options defined above can be accessed via
            // this.options

            // var m = this.element,
            // p = m.parents(":jqmData(role='page')"),
            // c = p.find(":jqmDatData(role='content");
        },

        // Private methods/props start with underscores
        _dosomething: function() {
            // ...
        },

        // Public methods like these below can be called
        // externally:
        // $("#myelem").foo("enable", arguments);
        enable: function() {
            // ...
        },

        // Destroy an instantiated plugin and clean up modifications
        // the widget has made to the DOM
        destroy: function() {
            // this.element.removeStuff();
            // For UI 1.8, destroy must be invoked from the
            // base widget
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't
            // worry about calling the base widget
        },

        methodB: function(event) {
            //_trigger dispatches callbacks the plugin user can
            // subscribe to
            // signature: _trigger( "callbackName", [eventObject],
            // [uiObject] )
            // e.g. this._trigger( "hover", e /*where e.type ==
            // "mouseenter"*/, { hovered: $(e.target)});
            this._trigger( "methodA", event, {
                key: value
            });
        },

        methodA: function(event) {
            this._trigger("dataChanged", event, {
                key: value
            });
        },

        // Respond to any changes the user makes to the option method
        _setOption: function(key, value) {
            switch(key) {
                case "someValue":
                    // this.options.someValue = doSomethingWith(value);
                    break;
                default:
                    // this.options[key] = value;
                    break;
            }

            // For UI 1.8, _setOption must be manually invoked from
            // the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // For UI 1.9 the _super metho can be used instead
            // this._super("_setOption", key, value);
        }
    });
 })(jQuery, window, document);

 // Usage:
 var instance = $("#foo").widgetName({
     foo: false
 });

 instance.widgetName("methodB");

 // Or
 $(document).on("pagecreate", function(e) {
    // In here, e.target refers to the page that was created
    // (it's the target of the pagecreate event)
    // So, we can simply find elements on this page that match a
    // selector of our choosing, and call our plugin on them.
    // Here's how we'd call our "foo" plugin on any element with a
    // data-role attribute of "foo":
     $(e.target).find("[data-role='foo']").foo(options);

    // Or, better yet, let's write the selector accounting for the configurable
    // data-attribute namespace
     $(e.target).find(":jqmData(role='foo')").foo(options);
 })