// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
 //  console.log('song queue entry view js here')
  enqueue: function(song){
  	console.log(this)
    this.model.on('click', function(){/*this.model.set('queue[0]', song)*/console.log(this.model)})
	},

 // events: 

  showAlert: function() {alert("HOOOO")}

  
	// first listens for click event on a specific song (in the library?).. on change
	// enqueue the song to the playlist
	// render to the DOM


});
