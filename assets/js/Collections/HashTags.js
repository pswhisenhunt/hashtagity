var HashTag = require('../Models/HashTag');
var Backbone = require('backbone');
var LocalStorage = require('backbone.localstorage');

HashTagList = Backbone.Collection.extend({
  model: HashTag,
  localStorage: new LocalStorage("backbone-hashtags")
});

module.exports = HashTagList;
