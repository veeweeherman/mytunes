// Songs.js - Defines a backbone collection class for songs.

// Songs is a constructor function
// MAYBE Songs is a subclass of SongModel ?
	// bc model:SongModel looks like __subclass.prototype=Object.create(superclass)
var Songs = Backbone.Collection.extend({

  model: SongModel

});