var Backbone = require('backbone');

HashTag = Backbone.Model.extend({
  defaults: {
    hashType : 'singleHash',
    text: ''
  }
});

module.exports = HashTag;
