var assert = require('assert')
var Hashtagify = require('../assets/js/Hashtagify');

describe('Hashtagify', function() {
  describe('#singleHash', function() {
    context('when given a string', function() {
      beforeEach(function() {
        this.testSentence = 'hello world';
        this.notCorrectTestResult = '#hello #world';
        this.correctTestResult = '#hello world';
        this.singleHashResult = Hashtagify.singleHash(this.testSentence);
      });
      it('should return a single hashtag', function() {
        assert.equal(this.singleHashResult, this.correctTestResult);
      });
      it('should not return a single hash', function() {
        assert.notEqual(this.singleHashResult, this.notCorrectTestResult);
      });
    });
  });

  describe('#hashEvery', function() {
    context('when given a string', function() {
      beforeEach(function() {
        this.testSentence = 'hello world';
        this.notCorrectTestResult = '#hello world';
        this.correctTestResult = '#hello #world';
        this.everyHashResult = Hashtagify.hashEvery(this.testSentence);
      });
      it('should return every word in the sentence hashed', function() {
        assert.equal(this.everyHashResult, this.correctTestResult);
      });
      it('should not retun every word in the sentence hashed', function() {
        assert.notEqual(this.everyHashResult, this.notCorrectTestResult);
      });
    });
  });

  describe('#shrinkify', function() {
    context('when given a string', function() {
      it('should return the first letter of each word in the string(an acronym), and a single hash at the beginning of the acronym', function() {
        var testSentence = 'i love you';
        var correctTestResult = '#ily';
        var notCorrectTestResult = '#ilu'
        var shrinkifyTestSentence = Hashtagify.shrinkify(testSentence);
        assert.equal(shrinkifyTestSentence, correctTestResult);
        assert.notEqual(shrinkifyTestSentence, notCorrectTestResult);
      });

      it('should return a single hashed acronym, but replace the "are" with "r" instead of an "a"', function() {
        var areTestSentence = 'how are you?';
        var areCorrectTestResult = '#hry';
        var areNotCorrectTestResult = '#hay';
        var shrinkifyAreTestSentence = Hashtagify.shrinkify(areTestSentence);
        assert.equal(shrinkifyAreTestSentence, areCorrectTestResult);
        assert.notEqual(shrinkifyAreTestSentence, areNotCorrectTestResult);
      });
      it('should return a single hashed acronym, but replace the "why" they "y" instead of "w"', function() {
        var whyTestSentence = 'why so sad?';
        var whyCorrectTestSentence = '#yss';
        var whyNotCorrectTestSentence = '#wss';
        var shrinkifyWhyTestSentence = Hashtagify.shrinkify(whyTestSentence);
        assert.equal(shrinkifyWhyTestSentence, whyCorrectTestSentence);
        assert.notEqual(shrinkifyWhyTestSentence, whyNotCorrectTestSentence);
      })
    });
  })
});
