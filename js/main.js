// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.9.1',
    underscore: 'libs/underscore/underscore',
    text:'libs/require/text',
    domReady:'libs/require/domReady',
    backbone: 'libs/backbone/backbone-min',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    i18n:'i18n'
    },
    shim: {
      underscore: {
        exports: '_'
      } ,
      
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      }
    }

});

require([
         'jquery',
         'app',

       ], function($,App){
	 
         $(function () {
               //window.autonomia ="Madrid";// Declarando una variable global
               window.App=App;
               App.initialize();
           });
       });
