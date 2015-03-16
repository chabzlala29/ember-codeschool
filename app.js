var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
})
App.Router.map(function(){
  this.route('about');
  this.resource('products', function(){
    this.resource('product', { path: '/:product_id' });
  });
});

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('number'),
  image: DS.attr('string')
});

App.Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Apple',
      price: 99,
      description: 'Apple is Love',
      isOnSale: true,
      image: 'images/apple.jpeg'
    },
    {
      id: 2,
      title: 'Gear',
      price: 75,
      description: 'Gears',
      isOnSale: true,
      image: 'images/gear.jpeg'
    },
    {
      id: 3,
      title: 'Shoe',
      price: 125,
      description: 'Shoe',
      isOnSale: true,
      image: 'images/shoe.jpeg'
    }
  ]

})

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/download.jpeg',
  time: function(){
    return(new Date()).toDateString()
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('product');
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('product', params.product_id);
  }
});
