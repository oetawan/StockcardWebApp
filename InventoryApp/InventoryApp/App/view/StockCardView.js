/// <reference path="../../Backbone/backbone-min.js" />
/// <reference path="../../Backbone/underscore-min.js" />
/// <reference path="../app.js" />
/// <reference path="../model/StockCardMovement.js" />

dokuku.inventory.view.StockCard = Backbone.View.extend({
    tagName: 'tr',
    template: _.template('<td><a href="#"><%= ProductCode %></a></td>\
                          <td><a href="#"><%= Barcode %></a></td>\
                          <td><a href="#"><%= ProductName %></a></td>\
                          <td class="align-right"><a href="#"><%= Balance %></a></td>'),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        'click':'showStockMovement'
    },
    showStockMovement: function () {
        var tnId = $('#tenantidfield').val();
        var productId = this.model.get('ProductId');
        var stockCardMovementList = new dokuku.inventory.model.StockCardMovementList();
        var stockCardMovementListView = new dokuku.inventory.view.StockCardMovementListView({ collection: stockCardMovementList });
        $('#center-content').empty();
        $('#center-content').append("<h1>" + this.model.get('ProductName') + "</h1>");
        $('#center-content').append("<h2>Stock Awal: " + this.model.get('OpeningBalance') + "</h2>");
        $('#center-content').append("<h2>Balance: " + this.model.get('Balance') + "</h2>");
        $('#center-content').append(stockCardMovementListView.render().el);
        stockCardMovementList.fetch({ data: { tenantid: tnId, productid: productId } });
        $('#left-content').css('margin-left', '-1000px');
        $('#center-content').css('margin-top', '0px');
        $('#right-content').css('margin-right', '-1000px');
        $('#back-to-home-button').css('visibility','visible');
    },
});

dokuku.inventory.view.StockCardListView = Backbone.View.extend({
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
        var stockCardView = new dokuku.inventory.view.StockCard({model: item});
        this.$el.append(stockCardView.render().el);
    },
    emptyEl: function () {
        $(this.el).empty();
    },
    renderHeader: function () {
        this.$el.append('<thead>\
                            <th>Kode</th>\
                            <th>Barcode</th>\
                            <th>Nama</th>\
                            <th class="align-right">Balance</th>\
                         </thead>');
    }
});