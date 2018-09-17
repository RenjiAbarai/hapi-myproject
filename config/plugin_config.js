//plugin_config.js

const SwaggerOptions = {
	info: {
		'title': 'hapi API Documentation',
		'version': '1.0.0'
	}
};

const goodOptions = {
	ops: {
		interval: 1000
	},
	reporters: {
		myConsoleReporter: [{
			module: 'good-squeeze',
			name: 'Squeeze',
			args: [{
				log: '*',
				response: '*'
			}]
		}, {
			module: 'good-console'
		}, 'stdout'],
		myFileReporter: [{
			module: 'good-squeeze',
			name: 'Squeeze',
			args: [{
				log: '*',
				response: '*',
				request: '*'
			}]
		}, {
			module: 'good-squeeze',
			name: 'SafeJson'
		}, {
			module: 'good-file',
			args: ['./log/fixtures/awesome_log']
		}],
		myHTTPReporter: [{
			module: 'good-squeeze',
			name: 'Squeeze',
			args: [{
				error: '*'
			}]
		}, {
			module: 'good-http',
			args: ['http://prod.logs:3000', {
				wreck: {
					headers: {
						'x-api-key': 12345
					}
				}
			}]
		}]
	}
};

module.exports = [{
	plugin: require('inert')
}, {
	plugin: require('hapi-swagger'),
	options: SwaggerOptions
}, {
	plugin: require('vision')
}, {
	plugin: require('good'),
	options: goodOptions
}, {
	plugin: require('hapi-auth-jwt2')
}];