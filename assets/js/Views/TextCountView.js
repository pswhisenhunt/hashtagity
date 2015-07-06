var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var TextCountView = Backbone.View.extend({
    el: '.text-count',

    template: _.template($('#text-count-template').html()),

    initialize: function() {
      this.textCounter = this.$('text-counter');
      this.model.on('change', this.render, this)
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    handleDecrementCounter: function() {
      this.model.decrement();

    },

    handleIncrementCounter: function() {
      this.model.increment();

    },

    handleResetCounter: function() {
      this.model.reset();
    }
});

module.exports = TextCountView;
