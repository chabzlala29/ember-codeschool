var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/download.jpeg',
  time: function(){
    return(new Date()).toDateString()
  }.property()
});
