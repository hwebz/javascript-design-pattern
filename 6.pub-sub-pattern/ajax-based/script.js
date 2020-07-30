;(function($) {

    // Pre-compile template and "cache" it using closure
    var resultTemplate = _.template($("#resultTemplate").html());

    // Subscribe to the new search tag topic
    $.subscribe("/search/tags", function(e, tags) {
        $("#lastQuery").html("<p>Searched for: <strong>" + tags + "</strong></p>");
    });

    // Subscribe to the new results topic
    $.subscribe("/search/resultSet", function(e, results) {
        $("#searchResults").empty().append(resultTemplate(results));
    });

    // Submit a search query and publish tags on the /search/tags topic
    $("#flickrSearch").submit(function(e) {
        e.preventDefault();
        var tags = $(this).find("#query").val();

        if (!tags) {
            return;
        }

        $.publish("/search/tags", [$.trim(tags)]);
    });

    $.subscribe("/search/tags", function(e, tags) {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: tags,
            tagmode: "any",
            format: "json"
        }, function (data) {
            if (!data.items.length) {
                return;
            }

            $.publish("/search/resultSet", {items: data.items});
        })
    });

})(jQuery);