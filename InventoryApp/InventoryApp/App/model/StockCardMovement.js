/// <reference path="../Backbone/underscore-min.js" />
/// <reference path="../Backbone/backbone-min.js" />
/// <reference path="app.js" />

dokuku.inventory.model.StockCardMovement = Backbone.Model.extend({ url: 'api/stockcardmovement' });
dokuku.inventory.model.StockCardMovementList = Backbone.Collection.extend({
    url: 'api/stockcardmovement',
    model: dokuku.inventory.model.StockCardMovement
});