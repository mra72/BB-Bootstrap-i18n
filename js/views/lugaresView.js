define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/lugaresTemplate.html',
  'i18n!internalization/nls/i18n'
], function($, _, Backbone, LugaresTemplate, Lang){
  var LugaresView = Backbone.View.extend({
    el: $('.containerPpal'),
  
    render: function(){
      //alert('RENDER DE PlaceView');
      // Using Underscore we can compile our template with data
      var data = {};
     
      var compiledTemplate = _.template(LugaresTemplate,{'Lang':Lang});
      // Append our compiled template to this Views "el"
      this.$el.empty().append(compiledTemplate);

      $('.active').removeClass();
      $('#places').addClass('active');
    }
  });
  // Our module now returns our view
  return LugaresView;
});