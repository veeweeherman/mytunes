// Songs.js - Defines a backbone collection class for songs.

// Songs is a constructor function
// MAYBE Songs is a subclass of SongModel ?
	// bc model:SongModel looks like __subclass.prototype=Object.create(superclass)
var Songs = Backbone.Collection.extend({

  model: SongModel,
  thing: console.log('this in the Song collection',this),
  thisng2: console.log('SongModel : ',SongModel)
});
// var one = new Songs 