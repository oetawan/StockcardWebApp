/// <reference path="../../Backbone/backbone-min.js" />
/// <reference path="../../Backbone/underscore-min.js" />
/// <reference path="../app.js" />
/// <reference path="../model/Group.js" />
/// <reference path="../view/Group.js" />

dokuku.inventory.controller.InventoryController = Backbone.Router.extend({
    routes: {
        '': 'index',
        'group': 'loadGroup'
    },
    initialize: function () {

        _.bind(this.loadGroup, this);
        _.bind(this.showTenantFinder, this);
        _.bind(this.submitFindTenant, this);

        this.groupList = new dokuku.inventory.model.GroupList({});
        this.groupListView = new dokuku.inventory.view.GroupListView({ collection: this.groupList });

        $('#left-content').html(this.groupListView.el);
        $('#show-tenant-finder-button').click(this.showTenantFinder);
        $('#submit-tenant-finder').click(this.submitFindTenant);
    },
    start: function () {
        Backbone.history.start({ pushState: true });
    },
    index: function () {
        this.groupList.reset([
            new dokuku.inventory.model.Group({ id: '1', GroupName: 'Item 1', GroupCode: 'Default' }),
            new dokuku.inventory.model.Group({ id: '2', GroupName: 'Item 2', GroupCode: 'Default' }),
            new dokuku.inventory.model.Group({ id: '3', GroupName: 'Item 3', GroupCode: 'Default' })
        ]);
    },
    loadGroup: function () {
        var tnId = $('#tenantidfield').val();
        this.groupList.fetch({ data: { tenantId: tnId} });
    },
    showTenantFinder: function (ev) {
        $('#tenant-finder').css('top', '50px');
    },
    submitFindTenant: function (ev) {
        ev.preventDefault();
        $('#tenant-finder').css('top', '-200px');
        var tnId = $('#tenantidfield').val();
        if ($.trim(tnId) === '') return; ;
        dokuku.inventory.App.groupList.fetch({ data: { tenantid: tnId} });
    }
});