define(['backbone.marionette', './album_view'], function(App, AlbumView) {

    return Backbone.Marionette.CompositeView.extend({
        tagName: "div",
        id: "#albums_list",
        className: "album_list_container",
        template: "#albums_list-template",
        itemView: AlbumView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("div").append(itemView.el);
        }
    });
});

