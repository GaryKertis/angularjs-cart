module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                src: 'src/angularjs-cart.js',
                dest: 'angularjs-cart.js',
            },
        },
        ngtemplates: {
            AngularStore: {
                src: 'partials/**.html',
                dest: 'angularjs-cart.js',
                options: {
                    append: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['copy', 'ngtemplates']);

};
