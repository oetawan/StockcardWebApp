/// <reference path="../../Backbone/backbone-min.js" />
/// <reference path="../../Backbone/underscore-min.js" />
/// <reference path="../app.js" />

dokuku.inventory.view.StockCardMovement = Backbone.View.extend({
    tagName: 'tr',
    template: _.template('<td><a href="#"><%= TransactionNumber %></a></td>\
                          <td><a href="#"><%= DateString %></a></td>\
                          <td><a href="#"><%= TransctionType %></a></td>\
                          <td class="align-right"><a href="#"><%= Qty %></a></td>\
                          <td class="align-right"><a href="#"><%= Balance %></a></td>'),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

dokuku.inventory.view.StockCardMovementListView = Backbone.View.extend({
    tagName: 'table',
    attributes: {
        border: 1,
    },
    initialize: function () {
        this.collection.on('reset', this.render, this);
    },
    render: function () {
        this.emptyEl();
        this.renderHeader();
        this.collection.forEach(this.addOne, this);
        return this;
    },
    addOne: function (item) {
        var view = new dokuku.inventory.view.StockCardMovement({model: item});
        this.$el.append(view.render().el);
    },
    emptyEl: function () {
        $(this.el).empty();
    },
    renderHeader: function () {
        this.$el.append('<thead>\
                            <th>No. Transaksi</th>\
                            <th>Tanggal</th>\
                            <th>Jns. Transaksi</th>\
                            <th class="align-right">Qty</th>\
                            <th class="align-right">Balance</th>\
                         </thead>');
    }
});