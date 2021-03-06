Package.describe({
	name: 'gsabran:accounts-ui-bootstrap-3',
	summary: 'Bootstrap-styled accounts-ui with multi-language support.',
	version: '1.2.88',
	git: "https://github.com/gsabran/meteor-accounts-ui-bootstrap-3"
})

Package.on_use(function (api) {
	api.use(['session@1.0.0',
		'spacebars@1.0.0',
		'stylus@1.0.0 || 2.0.0',
		'accounts-base@1.0.0',
		'underscore@1.0.0',
		'templating@1.0.0'
		],'client')

	api.imply('accounts-base', ['client', 'server']);

	// Allows us to call Accounts.oauth.serviceNames, if there are any OAuth
	// services.
	api.use('accounts-oauth@1.0.0', {weak: true});
	// Allows us to directly test if accounts-password (which doesn't use
	// Accounts.oauth.registerService) exists.
	api.use('accounts-password@1.0.0', {weak: true});

	api.add_files([
		'accounts_ui.js',

		'login_buttons.html',
		'login_buttons_single.html',
		'login_buttons_dropdown.html',
		'login_buttons_dialogs.html',

		'login_buttons_session.js',

		'login_buttons.js',
		'login_buttons_single.js',
		'login_buttons_dropdown.js',
		'login_buttons_dialogs.js',
		'accounts_ui.styl'
		], 'client')

	api.export('accountsUIBootstrap3', 'client')
})
