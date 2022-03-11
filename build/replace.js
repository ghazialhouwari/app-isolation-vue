var replace = require("replace");
var zipper = require('zip-local');

replace({
    regex: "webpackJsonp",
    replacement: "webpackJsonp_app_isolation",
    paths: ['dist/app-isolation/static/js'],
    recursive: true,
    silent: true,
    includes: "*.js"
});
replace({
    regex: "_babelPolyfill",
    replacement: "_babelPolyfill_app_isolation",
    paths: ['dist/app-isolation/static/js'],
    recursive: true,
    silent: true,
    includes: "*.js"
});
console.log('webpackJsonp renamed');
zipper.sync.zip("dist/app-isolation").compress().save("dist/app-isolation.zip");
console.log('app-isolation.zip ready');
