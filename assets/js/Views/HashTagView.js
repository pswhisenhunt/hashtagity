var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

HashTagView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#hash-tag-template').html()),

  events: {
    'dblclick label' : 'edit',
    'keypress .edit' : 'updateOnEnter',
    'blur .edit' : 'close',
    'click .destroy': 'destroy'
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  },

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  edit: function(){
    this.$el.addClass('editing');
    this.input.focus();
  },

  close: function(){
    var text = this.input.val().trim();
    console.log(this.model)
    if(text) {
      this.model.save({text: text});
    }
    this.$el.removeClass('editing');
  },

  updateOnEnter: function(e){
    if(e.which == 13){
      this.close();
    }
  },

  destroy: function(){
    this.model.destroy();
  }
});

module.exports = HashTagView;
