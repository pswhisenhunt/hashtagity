var HashTag = require('../Models/ConvertedText');
var Backbone = require('backbone');
var LocalStorage = require('backbone.localstorage');

ConvertedTextList = Backbone.Collection.extend({
  model: ConvertedText,

  localStorage: new LocalStorage("backbone-hashtags")

});

module.exports = ConvertedTextList;
