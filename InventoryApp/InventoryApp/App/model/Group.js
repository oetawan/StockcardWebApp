/// <reference path="../Backbone/underscore-min.js" />
/// <reference path="../Backbone/backbone-min.js" />
/// <reference path="app.js" />

dokuku.inventory.model.Group = Backbone.Model.extend({ url: 'api/group' });
dokuku.inventory.model.GroupList = Backbone.Collection.extend({
    url: 'api/group',
    model: dokuku.inventory.model.Group 
});