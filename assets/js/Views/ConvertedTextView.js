var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var KEY_ENTER = 13;

ConvertedTextView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#hash-tag-template').html()),

  events: {
    'dblclick label' : 'handleUpdateEvent',
    'click .edit-icon': 'handleUpdateEvent',
    'keypress .edit' : 'handleUpdateEvent',
    'mouseover .edit-icon': 'handleShowIconDescription',
    'mouseover .destroy': 'handleShowIconDescription',
    'blur .edit' : 'close',
    'click .editing' : 'close',
    'click .destroy': 'destroy'
  },

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  },

  handleShowIconDescription: function(event) {
    var getMessage = event.currentTarget.nextSibling.innerText;
    var getElement = event.currentTarget.nextSibling;

    if (getMessage === 'delete') {
    console.log(getElement)
    }
    else if (getMessage === 'edit') {
      getElement.removeClass('hide-edit');
      getElement.addClass('show-edit');
    }
  },

  handleUpdateEvent: function() {
    this.$el.addClass('editing');
    this.input.focus();
    if(event.which === KEY_ENTER) {
      this.close();
    }
  },

  close: function(){
    var text = this.input.val().trim();
    var hasText = text ? true : false;
    if(hasText) {
      this.model.save({text: text});
    }
    this.$el.removeClass('editing');
  },

  destroy: function(){
    this.model.destroy();
  }
});

module.exports = ConvertedTextView;
