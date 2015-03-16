var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Set Adapter

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
})

// Router
App.Router.map(function(){
  this.route('about');
  this.resource('products', function(){
    this.resource('product', { path: '/:product_id' });
  });
});

// Models

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('number'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true })
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('product')
});

// Data Fixtures

App.Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Apple',
      price: 99,
      description: 'Apple is Love',
      isOnSale: true,
      image: 'images/apple.jpeg',
      reviews: [100,101]
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

App.Review.reopenClass({
  FIXTURES: [
    {
      id: 100,
      product: 1,
      text: 'Review Test 1'
    },
    {
      id: 101,
      product: 1,
      text: 'Review Test 2'
    }
  ]
})

// Route Handlers

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

// Controllers

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'images/download.jpeg',
  time: function(){
    return(new Date()).toDateString()
  }.property()
});

