// SongQueue.js - Defines a backbone model class for the song queue.
// SongQueue is a constructor function that also has an initialize function

var SongQueue = Songs.extend({

  initialize: function(){
  	console.log('SongQueue initialize is working on this :',this);
  	// return  
  	// this.model.set('songQueue',currentSong)
  },

  render: function() {
  	alert('SONG QUEUE RENDERS!')
  }

});