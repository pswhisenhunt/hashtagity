var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var ConvertedTextView= require('./ConvertedTextView');
var Hashtagify = require('../Hashtagify');
var TextCount = require('../Models/TextCount');
var TextCountView = require('./TextCountView');

var KEY_ENTER = 13;
var KEY_DELETE = 46;
var KEY_BACKSPACE = 8;

var AppView = Backbone.View.extend({
  el: '#hashtagity',

  events: {
    'keyup #new-hash-tag' : 'handleTextAreaKeyUp',
    'click #create-hash' : 'handleConvertTextClick',
    'focus #new-hash-tag' : 'handleClearError'
  },

  initialize: function () {
    this.input = this.$('#new-hash-tag');
    this.$error = this.$('.error');
    this.addTextCountView();
    this.collection.on('add', this.addConvertedTextView, this);
    this.collection.fetch();
  },

  handleClearError: function() {
    this.$error[0].innerHTML = '';
  },

  handleConvertTextClick: function(event) {
    if (!this.input.val()) {
      this.$error[0].innerHTML = 'There\'s no text to do anything with!';
      return;
    } else {
      if (this.input.val().trim().length <= 40) {
        this.convertText();
      } else {
        this.input.addClass('error');
        return;
      }
    }
  },

  handleTextAreaKeyUp: function(event) {
    this.input.removeClass('error');
    var didNotPressEnter = event.which !== KEY_ENTER;
    var pressedDeleteKey = event.which === KEY_DELETE;
    var pressedBackSpaceKey = event.which === KEY_BACKSPACE;
    var isEmptyText = !this.input.val().trim();

    if (pressedBackSpaceKey) {
      this.textCountView.handleIncrementCounter()
    } else {
      this.textCountView.handleDecrementCounter();
    }

    if (isEmptyText) {
      this.textCountView.handleResetCounter();
    }

    if (didNotPressEnter || isEmptyText) {
      return;
    }

    if (this.input.val().trim().length <= 40) {
        this.convertText();
    } else {
      this.input.addClass('error');
      return;
    }
  },

  convertText: function() {
    var hashType = this.$('.hashtagity-hash-type-input:checked').val();
    var convertedText = null;
    var textToConvert = this.input.val().trim();

    if (hashType === 'singleHash') {
      convertedText = Hashtagify.singleHash(textToConvert);
    }
    if (hashType === 'acryonymify') {
      console.log('acryonymify');
      convertedText = Hashtagify.acryonymify(textToConvert);
    }
    if (hashType === 'hashEvery') {
      convertedText = Hashtagify.hashEvery(textToConvert);
    }
    if (hashType === 'shrinkify') {
      convertedText = Hashtagify.shrinkify(textToConvert);
    }
    if(convertedText !== null || convertedText !== undefined) {
      this.collection.create({text: convertedText});
    }
    else {
      return;
    }
    this.input.val('');
  },

  addConvertedTextView: function(hashTag){
    var view = new ConvertedTextView({model: hashTag});
    this.$('#hash-tag-list').append(view.render().el);
    this.addTextCountView();
  },

  addTextCountView: function() {
    var textCount = new TextCount();
    var textCountView = new TextCountView({model: textCount});
    this.$('.text-count').append(textCountView.render().el);
    this.textCountView = textCountView;
  }
});

module.exports = AppView;
