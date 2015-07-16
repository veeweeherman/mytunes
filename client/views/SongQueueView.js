// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	console.log('song queue view to intitialize')
  	// this.model.set('songQueue',whaticlickedon)
  	this.render();

    this.model.on('change:currentSong', function(model){ //this.model is the app
      console.log('test');
      this.playerView.setSong(model.set('currentSong'));
    }, this);
  },

  render: function() {
    var html = ['<div>','test','</div>'].join('');
    this.$el.html(html);
    this.$el.$('body').append(html)
  }

});
// var one = new SongQueueView;


