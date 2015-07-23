# hashtagity

I built Hashtagity to help me learn Backbone.js and TDD with Mocha, as well as get some more practice with Grunt, Sass, and Browserify. It is a client-side application only. I used the npm module 'backbone.localstorage' to persist the data.

Hashtagity takes text, and converts it based on the user's selection like so:

User puts in text and selects an option:

![hashtagity](https://github.com/pswhisenhunt/hashtagity/blob/master/hashtagity-images/put_in_text.png)

This is an example of what each option produces when given the text 'i love you':

![hashtagity](https://github.com/pswhisenhunt/hashtagity/blob/master/hashtagity-images/display_each_method.png)

You can edit text inline by double clicking the text, or by clicking the edit (pencil) icon, and you can delete the text by clicking the 'x' icon.

![hashtagity](https://github.com/pswhisenhunt/hashtagity/blob/master/hashtagity-images/edit.png)

You cannot create a hashtag without text:

![hashtagity](https://github.com/pswhisenhunt/hashtagity/blob/master/hashtagity-images/no_text_error.png)

You also cannot create a hashtag over 40 characters long. There is a counter that keeps track of the text length for the user. It starts at 40 and counts downward.

![hashtagity](https://github.com/pswhisenhunt/hashtagity/blob/master/hashtagity-images/over_40_error.png)
