"use strict";

var App = {
    items: ['Learn Brunch', 'Apply to my projects', '…', 'Profit!'],

    init: function() {
        var tmpl = require('views/navbar');
        var html = tmpl({ items: App.items });
        // $('#pkg').append(pkg);
    }

};

module.exports = App;