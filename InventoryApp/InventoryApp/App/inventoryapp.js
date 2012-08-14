/// <reference path="../../Backbone/backbone-min.js" />
/// <reference path="../../Backbone/underscore-min.js" />
/// <reference path="../app.js" />
/// <reference path="../model/Group.js" />
/// <reference path="../view/Group.js" />
/// <reference path="controller/Inventory.js" />

$(function () {
    dokuku.inventory.App = new dokuku.inventory.controller.InventoryController();
    dokuku.inventory.App.start();
});