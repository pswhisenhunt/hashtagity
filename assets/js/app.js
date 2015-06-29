var HashTagList = require('./Collections/HashTags');
var AppView = require('./Views/AppView');
var hashTagList = new HashTagList();
var appView = new AppView({collection: hashTagList});
