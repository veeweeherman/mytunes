// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	console.log('song queue view to intitialize')
  	this.render();
  },

  render: function() {
    var html = ['<div>','test','</div>'].join('');
    this.$el.html(html);
    this.$el.$('body').append(html)
  }

});
// var one = new SongQueueView;