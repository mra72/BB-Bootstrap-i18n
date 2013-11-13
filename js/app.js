// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'i18n!internalization/nls/i18n'
], function($, _, Backbone, Router){
	
  var initialize = function(){
	  $window = $(window);
    $.fn.serializeObject = function() {
      console.log('ESTOYYYYY SeriaLize');
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
          }
              o[this.name].push(this.value || '');
        }
          else
          {
            o[this.name] = this.value || '';
          }
      });
      return o;
    };
    // Pass in our Router module and call it's initialize function
   
	  Router.initialize();
  };

  return {
    initialize: initialize
  };
});