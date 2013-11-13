define([
  'jquery',
  'underscore',
  'backbone',
  'views/menuView',
  'views/contenidoView',
  'views/acercadeView',
  'views/lugaresView'
], function($, _, Backbone,MenuView,ContenidoView,AcercadeView,LugaresView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '': 'home',
      'about':'about',
      'places':'places'
    },


   

    home:function()
    {
      

      var menuView = new MenuView();
      menuView.render();

      var contenidoView = new ContenidoView();
      contenidoView.render();
    },

    about: function(){
      var menuView = new MenuView();
      menuView.render();

      var acercadeView = new AcercadeView();
      acercadeView.render();

    },

    places : function(){

      var menuView = new MenuView();
      menuView.render();

      var lugaresView = new LugaresView();
      lugaresView.render();
    }

  });

  var initialize = function(){
    var app_router = new AppRouter;
    window.App.router=app_router;
     
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});