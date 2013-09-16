Ext.Loader.setConfig({enabled : true});

Ext.application({
    name               : 'Komyuniti',
    appFolder          : 'app',
    launch : function() {
        window[this.getName()].app = this;
    }
});