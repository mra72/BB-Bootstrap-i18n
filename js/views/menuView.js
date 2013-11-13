define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/menuTemplate.html',
  'i18n!internalization/nls/i18n'
], function($, _, Backbone, MenuTemplate, Lang){
  var MenuView = Backbone.View.extend({
    el: $('.containerMenu'),
   

    initialize: function()
    {
      
    },

    render: function(eventName,options){
      // Using Underscore we can compile our template with data
      var data = {};
     
      var compiledTemplate = _.template(MenuTemplate,{'Lang':Lang});
      // Append our compiled template to this Views "el"
      this.$el.empty().append(compiledTemplate);

      $('li > a').click(function(){
          $('.active').removeClass('active');
          $(this).parent().addClass('active');
      });
    }
  });
  // Our module now returns our view
  return MenuView;
});