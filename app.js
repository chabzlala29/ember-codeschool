var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function(){
  this.route('about');
  this.resource('products');
  this.resource('product', { path: '/products/:title' });
});

App.PRODUCTS = [
  {
    title: 'Apple',
    price: 99,
    description: 'Apple is Love',
    isOnSale: true,
    image: 'images/apple.jpeg'
  },
  {
    title: 'Gear',
    price: 75,
    description: 'Gears',
    isOnSale: true,
    image: 'images/gear.jpeg'
  },
  {
    title: 'Shoe',
    price: 125,
    description: 'Shoe',
    isOnSale: true,
    image: 'images/shoe.jpeg'
  }
]

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/download.jpeg',
  time: function(){
    return(new Date()).toDateString()
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function(){
    return App.PRODUCTS;
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params){
    return App.PRODUCTS.findBy('title', params.title);
  }
});
