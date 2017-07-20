export default function (kibana) {
	return new kibana.Plugin({
	    id: 'sdk',
	    require: ['kibana', 'elasticsearch'],
	    uiExports: {
	      visTypes: [
	      	'plugins/sdk/viz'
	      ]
	    }
	})
}
