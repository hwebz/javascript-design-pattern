/*!
 * jQuery UI Widget + RequireJS module boilerplate (for 1.8/9+)
 * Authors: @jrburke, @addyosmani
 * Licensed under the MIT license
 */
 
// Note from James:
//
// This assumes we are using the RequireJS+jQuery file, and
// that the following files are all in the same directory:
//
// - require-jquery.js
// - jquery-ui.custom.min.js (custom jQuery UI build with widget factory)
// - templates/
// - asset.html
// - ao.myWidget.js
 
// Then we can construct the widget as follows:
 
// ao.myWidget.js file:
define("ao.myWidget", ["jquery", "text!templates/asset.html", "underscore", "jquery-ui.custom.min"], function($, assetHtml, _) {
    // define our widget under a namespace of our choice
    // "ao" is used here as a demonstration
    $.widget("ao.myWidget", {
        // Options
        options: {},
        // Set up widget (e.g. create element, apply theming,
        // bind events, etc...)
        _create: function() {
            // _create will automatically run the first time
            // this widget is called. Put the initial widget
            // set-up code here, then we can access the element
            // on which the widget was called via this.element.
            // The options defined above can be accessed via
            // this.options

            // this.element.doStuff();
            // this.element.addStuff();

            // We can then use underscore templating with
            // with the assetHtml that has been pulled in
            // var template = _.template(assetHtml);
            // this.content.append(template({}));
        },

        // Destroy an instantiated plugin and clean up modifications
        // that the widget has made to the DOM
        destroy: function() {
            // this.element.removeStuff();
            // For UI 1.8, destroy must be invoked from the base
            // widget
            $.Widget.prototype.destroy.call(this);
            // For UI 1.9, define _destroy instead and don't worry
            // about calling the base widget
        },
        methodB: function(event) {
            // _trigger dispatches callbacks the plugin user can
            // subscribe to
            // signature: _trigger( "callbackName", [eventObject],
            // [uiObject] )
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
            // For UI 1.9 the _super method can be used instead
            // this._super("_setOption", key, value);
        }
    })
})

// index.html: <script data-main="scripts/main" src="http://requirejs.org/docs/release/1.0.1/minified/require.js"></script>
// main.js
require({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min",
        "jqueryui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min",
        "boilerplate": "../patterns/jquery.widget-factory.requirejs.boilerplate"
    }
}, ["require", "jquery", "jqueryui", "boilerplate"], function(req, $) {
    $(function() {
        var instance = $("#elem").myWidget();
        instance.myWidget("methodB");
    });
});