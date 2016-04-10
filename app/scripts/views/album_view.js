define(['backbone.marionette'], function(App) {

    return Backbone.Marionette.ItemView.extend({
        template: "#album-template",
        tagName: 'div',
        className: 'album_list_row'
    });
});

