Ext.define('NAF.view.activity.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.activitylist',
    store: 'Activities',
    collapsible: true,

    title : 'Alle aktiviteter',

    initComponent: function() {


        this.columns = [
            {header: 'Dato',  dataIndex: 'dato',  width:70, shrinkToFit:true},
            {header: 'Navn',  dataIndex: 'navn',  flex: 1},
            {header: 'Kategori', dataIndex: 'kategori', flex: 1}
        ];

        this.callParent(arguments);
    }
});