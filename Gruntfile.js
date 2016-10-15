var themeBase = 'web/app/themes/{{ theme_slug }}',
    projectFileList = [
        themeBase + "/external/bootstrap-sass/assets/javascripts/bootstrap.js",
        themeBase + "/external/slick-carousel/slick/slick.js",
        themeBase + "/js/_main.js",
        themeBase + "/js/modules/_*.js"

    ];

function getCssMinFiles() {
    var obj = {};
    var key = themeBase + '/style.css';
    obj[key] = [themeBase + '/style.css'];
    return obj;

}

function getSassProductionFiles(){

    var obj = {};
    var key = themeBase + '/style.css';
    obj[key] = themeBase + '/sass/main.scss';
    return obj;


}

function getUglifyFiles(){

    var obj = {};
    var key = themeBase + '/js/main.min.js';
    obj[key] = projectFileList;
    return obj;
}


module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {

            options: {
                loadPath: [
                    'sass'

                ]
            },
            production: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto',
                    precision: 4
                },
                files: getSassProductionFiles()
            }
        },

        "uglify": {
            "theme": {
                "options": {
                    "preserveComments": "some"
                },
                "files": getUglifyFiles()
            }
        },
        "cssmin": {
            target: {
                files: getCssMinFiles()

            }

        },
        "autoprefixer": {
            "multiple_files": {
                "src": themeBase + "/style.css"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [
                    themeBase + '/sass/*.scss',
                    themeBase + '/sass/**/*.scss'
                ],
                tasks: ['default']
            },
            js: {
                files: [
                    themeBase + '/js/*.js',
                    themeBase + '/js/**/*.js',
                    '!' + themeBase + '/js/main.min.js'
                ],
                tasks: ['default']
            },
            composer: {
                "files": "composer.json",
                "tasks": ["composer:update"]
            }

        },
        bower: {
            install: {
                options: {
                    targetDir: './' + themeBase + '/external'
                }
            }
        }


    });


    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-composer');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-bower-installer');
    grunt.registerTask('dev', ['sass']);
    grunt.registerTask('default', ['composer:install', 'bower:install', 'sass', 'autoprefixer', 'cssmin', 'uglify']);


};