var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var HashTagList = require('./Collections/HashTags');
var HashTag = require('./Models/HashTag');
var HashTagView = require('./Views/HashTagView');
var Actions = require('./Actions');


AppView = Backbone.View.extend({
  el: '#hashtagity',

  initialize: function () {
    this.input = this.$('#new-hash-tag');
    this.collection.on('add', this.addOne, this);
    this.collection.fetch();
  },

  events: {
    'keypress #new-hash-tag': 'createOnEnter',
    'click #create-hash' : 'createHash'
  },

  createHash : function() {
    this.hashType = this.$('.hash-type:checked').val();
    if (this.hashType === 'singleHash') {
      var text = Actions.singleHash(this.input.val().trim());
    }
    else if (this.hashType === 'shrinkify') {
      var text = Actions.shrinkify(this.input.val().trim());
    }
    else if (this.hashType === 'hashEvery') {
      var text = Actions.hashEvery(this.input.val().trim());
    }
    this.collection.create({text: text, hashType: this.hashType});
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

var hashTagList = new HashTagList();
var appView = new AppView({collection: hashTagList});
