/// <reference path="../Backbone/underscore-min.js" />
/// <reference path="../Backbone/backbone-min.js" />
/// <reference path="app.js" />

dokuku.inventory.view.GroupView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<a href="#"><%= GroupName %></a>'),
    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});

dokuku.inventory.view.GroupListView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function () {
        this.collection.on('reset', this.render, this);
    },
    render: function () {
        this.emptyEl();
        this.collection.forEach(this.addItem, this);
    },
    addItem: function (item) {
        var groupView = new dokuku.inventory.view.GroupView({ model: item });
        this.$el.append(groupView.render().el);
    },
    emptyEl: function () {
        this.$el.html('');
    }
});