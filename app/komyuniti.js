Ext.application({
	name: 'Komyuniti',
	launch: function() {
		Ext.Viewport.add({
			xtype: 'panel',
			id: 'JSONP',
			scrollable : {
				direction     : 'vertical',
				directionLock : true
			},
			items: [{
				xtype: 'toolbar',
				docked: 'top',
				title: '#YoSoyPAC',
				items: [{
					text: 'Actualizar',
					handler: function() {
						var panel = Ext.getCmp('JSONP'),
						tpl = new Ext.XTemplate([
							'<div>',
							'<tpl for=".">',
							'<h2>{headline}</h2>',
							'<p>{description}</p>',
							'</br>',
							'</tpl>',
							'</div>'
							]);

						Ext.Viewport.mask({ xtype: 'loadmask' });

						Ext.util.JSONP.request({
							url: 'http://api.espn.com/v1/sports/news/headlines',
							params: {
								'region': 'mx',
								'inseder': 'yes',
								'lang': 'es',
								'apikey': 'gp5wjkaxtfrnxrpqd93vhkrb',
								'_accept': 'application/json'},
								callbackKey: 'callback',
								callback: function(successful, data){
									// for (var i = 0; i < data.length; i++) {
									// 	results = data[i];
									// }
									console.log(data);
									panel.updateHtml(tpl.applyTemplate(data.headlines));
									Ext.Viewport.unmask();
								}
							}); 
					}
				}]
			}]
		});
}
});