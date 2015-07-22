var Backbone = require('backbone');

var TextCount = Backbone.Model.extend({
  defaults: {
    count: 40,
  },

  url: "http://localhost:8000",

  decrement: function() {
    // set instead of save
    this.save({
      count: this.get('count') - 1
    });
  },

  increment: function() {
    this.save({
      count: this.get('count') + 1
    });
  },

  reset: function() {
    this.save({
      count: 40
    });
  }
});

module.exports = TextCount;
