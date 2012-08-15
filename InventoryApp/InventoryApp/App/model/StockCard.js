/// <reference path="../Backbone/underscore-min.js" />
/// <reference path="../Backbone/backbone-min.js" />
/// <reference path="app.js" />

dokuku.inventory.model.StockCard = Backbone.Model.extend({ url: 'api/stockcard' });
dokuku.inventory.model.StockCardList = Backbone.Collection.extend({
    url: 'api/stockcard',
    model: dokuku.inventory.model.StockCard
});