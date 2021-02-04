const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 
mix.pug = require('laravel-mix-pug');
mix
    .pug('resources/views/_*.pug', '../../public/html/', {
        pug: {
            pretty: true,
            debug: true
        }
    })
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/main.scss', 'public/css')
    .sass('resources/sass/index.scss', 'public/css')

    // .sass('resources/sass/right.scss', 'public/css');

// mix.js('resources/js/app.js', 'public/js')

.disableNotifications();

