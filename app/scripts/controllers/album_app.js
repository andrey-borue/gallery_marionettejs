define(['backbone.marionette'], function(App) {


    var AlbumApp = function(){
        var AlbumApp = {};

        AlbumApp.alert = function(message){
            alert(message);
        };

        AlbumApp.privateAlert = function(message){
            privateMessage(message);
        };

        var privateMessage = function(message){
            alert('private: ' + message);
        };

        return AlbumApp;
    }();

    //MyApp.AlbumRouting = function(){
    //    var AlbumRouting = {};
    //
    //    AlbumRouting.Router = Backbone.Marionette.AppRouter.extend({
    //        appRoutes: {
    //            '': 'defaultSearch',
    //            'search/:searchTerm': 'search'
    //        }
    //    });
    //
    //    MyApp.addInitializer(function(){
    //        AlbumRouting.router = new AlbumRouting.Router({
    //            controller: MyApp.AlbumApp
    //        });
    //
    //        MyApp.vent.trigger('routing:started');
    //    });
    //
    //    return AlbumRouting;
    //}();

    AlbumApp.search = function(term){
        //LibraryApp.initializeLayout();
        //MyApp.LibraryApp.BookList.showBooks(LibraryApp.Books);

        //MyApp.vent.trigger("search:term", term);

        console.log(term);
    };

    AlbumApp.defaultSearch = function(){
        console.log(2);
        //LibraryApp.search("Neuromarketing");
    };


    return AlbumApp;
});


