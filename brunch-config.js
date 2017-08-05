// See http://brunch.io for documentation.
exports.files = {
    javascripts: {
        joinTo: {
            'js/app.js': /^app/,
            'js/vendor.js': /^node_modules/
        }
    },
    stylesheets: { joinTo: 'css/app.css' },
    templates: { joinTo: 'js/app.js' }
};

exports.plugins = {
    babel: { presets: ['latest', 'stage-0'] }
};

exports.npm = {
    enabled: true,
    globals: {
        jQuery: 'jquery',
        $: 'jquery',
        bootstrap: 'bootstrap'
    },
    styles: {
        bootstrap: ['dist/css/bootstrap.css']
    }
};