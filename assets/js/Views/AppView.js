var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var HashTagView = require('./HashTagView');
var Actions = require('../Actions');


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
    if ( e.which !== 13 || !this.input.val().trim() ) {
      return;
    }
    this.createHash();
  },

  addOne: function(hashTag){
    var view = new HashTagView({model: hashTag});
    $('#hash-tag-list').append(view.render().el);
  }
});

module.exports = AppView;
