module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            messages: {
                files: {
                    'cli.js': ['src/**/*.js']
                },
                options: {
                    transform: [
                        ['icuify', {ext: '.txt'}]
                    ],
                    browserifyOptions: {
                        paths: ['.', './src']
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify:messages']);

}
