var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var HashTagView = require('./HashTagView');
var Actions = require('../Actions');
var KEY_ENTER = 13;

var AppView = Backbone.View.extend({
  el: '#hashtagity',

  events: {
    'keypress #new-hash-tag': 'createOnEnter',
    'click #create-hash' : 'createHash'
  },

  initialize: function () {
    this.input = this.$('#new-hash-tag');
    this.collection.on('add', this.addOne, this);
    this.collection.fetch();
  },

  createHash : function() {
    var hashType = this.$('.hash-type:checked').val();
    var convertedText = null;
    var textToConvert = this.input.val().trim();

    switch(hashType) {
      case 'singleHash':
        convertedText = Actions.singleHash(textToConvert)
      case 'shrinkify':
        convertedText = Actions.shrinkify(textToConvert);
      case 'hashEvery':
        convertedText = Actions.hashEvery(textToConvert);
    }
    this.collection.create({text: convertedText});
    this.input.val('');
  },

  createOnEnter: function(e){
    var didNotPressEnter = e.which !== KEY_ENTER;
    var isEmptyText = !this.input.val().trim();
    if (didNotPressEnter || isEmptyText) {
      return;
    }
    this.createHash();
  },

  addOne: function(hashTag){
    var view = new HashTagView({model: hashTag});
    this.$('#hash-tag-list').append(view.render().el);
  }
});

module.exports = AppView;
