var Hashtagify = {
  singleHash: function(text) {
    return '#' + text;
  },

  acryonymify: function(text) {
    text = text.split(' ');
    for (var i = 0; i <= text.length-1; i++) {
      if (text[i] === 'are') {
        text[i] = 'r'
      }
      if (text[i] === 'why') {
        text[i] = 'y'
      }
    }
    var shortenedHash = '';
    for (var j = 0; j <= text.length-1; j++) {
      shortenedHash += text[j].charAt(0)
    }
    return '#' + shortenedHash;
  },

  hashEvery: function(text) {
    text = text.split(' ');
    for (var i = 0; i <= text.length-1; i++) {
      text[i] = '#' + text[i];
    }
    return text.join(' ');
  },

  shrinkify: function(text) {
    var acceptableShortenWords = {
      'how': 'hw',
      'are': 'r',
      'you': 'u',
      'to': '2',
      'too': '2',
      'two': '2',
      'tomorrow': '2morrow',
      'love': 'luv',
      'night': 'nite',
      'tonight': '2nite',
      'doing': 'doin',
      'today': '2day',
      'good': 'g\'',
      'cutie': 'QT',
      'because': 'bc',
      'whatever': 'w/e',
      'what': 'wat',
      'see': 'c',
      'later': 'lata',
      'for': '4',
      'before': 'b4',
      'be': 'b',
      'information': 'info',
      'in': 'n'
    }
    text = text.split(' ');
    var shortenedSentence = '';
    var lastWordInSentence = text.pop()
    var hasPunctation = lastWordInSentence.charAt(lastWordInSentence.length-1);
    if (hasPunctation === '?' || hasPunctation === '.' || hasPunctation === '!' || hasPunctation === ';') {
      lastWordInSentence = lastWordInSentence.substring(0, lastWordInSentence.length-1);
      text.push(lastWordInSentence);
    }
    else {
      text.push(lastWordInSentence);
    }
    for(var i = 0; i < text.length; i++) {
      if (acceptableShortenWords.hasOwnProperty(text[i])) {
        shortenedSentence += acceptableShortenWords[text[i]] + ' ';
      }
      else {
        shortenedSentence += text[i] + ' ';
      }
    }
    return '#' + shortenedSentence.trim();
  }
}

module.exports = Hashtagify;
