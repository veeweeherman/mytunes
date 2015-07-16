// SongModel.js - Defines a backbone model class for songs.
// this is probably nOT the syntax we should use in the app... but for now, its JS-ese
// SongModel is a contructor function that adds a new propert od a play-function/method
// so,
	// var songA = new SongModel, that when songA.trigger() will play the song.... as inm tell another function to fire in order to make this happen
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});