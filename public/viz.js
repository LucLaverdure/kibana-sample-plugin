define(function (require) {

  // we need to load the css ourselves
  require('plugins/sdk/styles.css');

  // we also need to load the controller and used by the template
  require('plugins/sdk/controller');

  // register the provider with the visTypes registry
  require('ui/registry/vis_types').register(sdkProvider);

    function sdkProvider(Private) {

	var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));

	return new TemplateVisType({
      		name: 'sdk',
      		title: 'SDK',
      		description: 'Software Development Kit for Kibana',
     		icon: 'fa-tachometer',
      		template: require('plugins/sdk/view.html'),
      		params: {
			defaults: {
				myField: "Hello Human."
			},
			editor: require("plugins/sdk/params.html")
		}
	});

    }

    return sdkProvider;
});
