define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/acercadeTemplate.html',
  'i18n!internalization/nls/i18n'
], function($, _, Backbone, AcercadeTemplate, Lang){
  var ContenidoView = Backbone.View.extend({
    el: $('.containerPpal'),
    render: function(){
      //alert('RENDER DE AcercaDeView');
      // Using Underscore we can compile our template with data
      var data = {};
     
      var compiledTemplate = _.template(AcercadeTemplate,{'Lang':Lang});
      // Append our compiled template to this Views "el"
      this.$el.empty().append(compiledTemplate);

      $('.active').removeClass();
      $('#about').addClass('active');

    }
  });
  // Our module now returns our view
  return ContenidoView;
});