var assert = require('assert')
var Hashtagify = require('../assets/js/Hashtagify');

describe('Hashtagify', function() {
  describe('#singleHash', function() {
    context('when given a string', function() {
      beforeEach(function() {
        this.testSentence = 'hello world';
        this.correctTestResult = '#hello world';
        this.singleHashResult = Hashtagify.singleHash(this.testSentence);
      });
      it('should return a single hashtag', function() {
        assert.equal(this.singleHashResult, this.correctTestResult);
      });
    });
  });

  describe('#hashEvery', function() {
    context('when given a string', function() {
      beforeEach(function() {
        this.testSentence = 'hello world';
        this.correctTestResult = '#hello #world';
        this.everyHashResult = Hashtagify.hashEvery(this.testSentence);
      });
      it('should return every word in the sentence hashed', function() {
        assert.equal(this.everyHashResult, this.correctTestResult);
      });
    });
  });

  describe('#acryonymify', function() {
    context('when given a string', function() {
      it('should return an acronym of the string where each word\'s first letter is chosen.', function() {
        var testSentence = 'i love you';
        var correctTestResult = '#ily';
        var notCorrectTestResult = '#ilu'
        var acryonymifyTestSentence = Hashtagify.acryonymify(testSentence);
        assert.equal(acryonymifyTestSentence, correctTestResult);
        assert.notEqual(acryonymifyTestSentence, notCorrectTestResult);
      });

      it('should return a single hashed acronym, but replace the "are" with "r"', function() {
        var areTestSentence = 'how are you?';
        var areCorrectTestResult = '#hry';
        var areNotCorrectTestResult = '#hay';
        var acryonymifyAreTestSentence = Hashtagify.acryonymify(areTestSentence);
        assert.equal(acryonymifyAreTestSentence, areCorrectTestResult);
        assert.notEqual(acryonymifyAreTestSentence, areNotCorrectTestResult);
      });
      it('should return a single hashed acronym, but replace the "why" they "y"', function() {
        var whyTestSentence = 'why so sad?';
        var whyCorrectTestSentence = '#yss';
        var whyNotCorrectTestSentence = '#wss';
        var acryonymifyWhyTestSentence = Hashtagify.acryonymify(whyTestSentence);
        assert.equal(acryonymifyWhyTestSentence, whyCorrectTestSentence);
        assert.notEqual(acryonymifyWhyTestSentence, whyNotCorrectTestSentence);
      })
    });
  });

  describe('#shrinkify', function() {
    context('when given a string', function() {
      it('should return a new sentence with each word shorten, but is still human readable', function() {
        var howAreYoutestSentence = 'how are you';
        var howAreYouCorrectTestResult = '#hw r u';
        var shrinkifyHowAreYouTestSentence = Hashtagify.shrinkify(howAreYoutestSentence);
        assert.equal(howAreYouCorrectTestResult, shrinkifyHowAreYouTestSentence);

        var iLoveYouTestSentence = 'i love you';
        var iLoveYouCorrectTestResult = '#i luv u';
        var shrinkifyILoveYouTestSentence = Hashtagify.shrinkify(iLoveYouTestSentence);
        assert.equal(iLoveYouCorrectTestResult, shrinkifyILoveYouTestSentence);

        var seeYouTomorrowBooTestSentence = 'see you tomorrow boo';
        var seeYouTomorrowBooCorrectTestResult = '#c u 2morrow boo';
        var shrinkifySeeYouTomorrowBooTestSentence = Hashtagify.shrinkify(seeYouTomorrowBooTestSentence);
        assert.equal(seeYouTomorrowBooCorrectTestResult, shrinkifySeeYouTomorrowBooTestSentence);
      });
    });
  });
});
