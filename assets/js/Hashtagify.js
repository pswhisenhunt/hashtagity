var Hashtagify = {
  singleHash: function(text) {
    return '#' + text;
  },

  shrinkify: function(text) {
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
  }
}

module.exports = Hashtagify;
