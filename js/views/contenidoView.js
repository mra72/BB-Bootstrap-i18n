define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/contenidoTemplate.html',
  'i18n!internalization/nls/i18n'
], function($, _, Backbone, ContenidoTemplate, Lang){
  var ContenidoView = Backbone.View.extend({
    el: $('.containerPpal'),
    render: function(){
      //alert('RENDER DE ContenidoView');
      // Using Underscore we can compile our template with data
      var data = {};
     
      var compiledTemplate = _.template(ContenidoTemplate,{'Lang':Lang});
      // Append our compiled template to this Views "el"
      this.$el.empty().append(compiledTemplate);

      $('.icons a').hover(function(){ $(this).fadeTo('fast', 1); },function(){ $(this).fadeTo('fast', 0.5);});
    }
  });
  // Our module now returns our view
  return ContenidoView;
});

