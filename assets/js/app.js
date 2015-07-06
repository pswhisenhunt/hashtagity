var ConvertedTextList = require('./Collections/ConvertedTextList');
var AppView = require('./Views/AppView');
var TextCount = require('./Models/TextCount');
var TextCountView = require('./Views/TextCountView');


var convertedTextList = new ConvertedTextList();
var appView = new AppView({collection: convertedTextList});
