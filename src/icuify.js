var transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeStringTransform('icu', null, function(content, transformOptions, done) {

    var fn = transformOptions.file;
    var ext = transformOptions.config.ext;

    if (fn.indexOf(ext, fn.length-ext.length) !== -1) {
        var src = 'module.exports = ';

        var parser = require('icu-converter').parseFile;
        var formatter = require('icu-converter').getFormatter('json');

        var jsObj = parser(fn, {
            encoding: 'utf-8'
        });

        var jsonContent = formatter.stringify(jsObj, {
            spaces: 4
        });

        done(null, src + jsonContent);
    } else {
        done(null, content);
    }
});

