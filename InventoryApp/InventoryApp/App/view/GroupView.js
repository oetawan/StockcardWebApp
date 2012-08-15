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
    },
    events: {
        'click a': 'showStockCard'
    },
    showStockCard: function () {
        var tnId = $('#tenantidfield').val();
        var groupCode = this.model.get('GroupCode');
        var stockCardList = new dokuku.inventory.model.StockCardList();
        var stockCardListView = new dokuku.inventory.view.StockCardListView({ collection: stockCardList });
        $('#right-content').html(stockCardListView.render().el);
        stockCardList.fetch({ data: {tenantid: tnId, groupcode: groupCode}});
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