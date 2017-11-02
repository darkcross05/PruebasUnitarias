module.exports = function(grunt) {

  grunt.initConfig({
    // Aqui se declaran todas las tareas
    watch: {
      script: {
        files: ['app/*.js', 'test/*.js'],
        tasks: ['jshint', 'concat', 'uglify', 'clean']
      },
      css: {
        files: ['app/*.css', 'test/*.css'],
        tasks: ['concat', 'cssmin', 'clean']
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['app/*.js', 'test/*.js'],
        dest: 'grunt/js/concatenacionjs.js',
      },
      css: {
        src: ['app/*.css', 'test/*.css'],
        dest: 'grunt/css/concatenacion.css',
      }
    },
    jshint: {
      options: {
        curly: true, //Esta opción requiere que siempre se utilicen llaves {} alrededor de los bloques en ciclos y condicionales.
        eqeqeq: false, //Esta opción prohibe el uso de igualdad (==) y no igualdad (!=) para utilizar identidad === y no identidad (!==).
        latedef: true, //Esta opción prohibe el uso de una variable antes de que fuera definida.
        quotmark: 'single', //Esta opción refuerza la consistencia en las comillas utilizadas en el código.Acepta tres valores: true si no se quiere forzar un estilo en particular, “single” si únicamente se permiten comillas simples y “double” si únicamente se permiten comillas dobles.
        undef: false, //Esta opción prohibe el uso explícito de variables no declaradas. (Si estuviera en true generaria advertencia sobre "alert() or module.exports")
        es5: true, // Permitir la sintaxis de EcmaScript 5.
        newcap: true, //Requiere capitalización de todas las funciones del constructor,
        unused: true, // Advertencia sobre variables no utilizadas.
        strict: false, //Requiere `use strict` pragma en cada archivo.
        trailing: true, //Prohibición de espacios en blanco.
        smarttabs: true, // Suppresses warnings about mixed tabs and spaces
      },
      files: ['app/*.js', 'test/*.js', 'Gruntfile.js']
    },
    cssmin: {
      files: [{
        expand: true,
        cwd: ['./app', './test'],
        src: ['*.css', '!*.min.css'],
        dest: ['./app', './test'],
        ext: '.min.css'
      }]
    },
    uglify: {
      files: [{
        expand: true,
        cwd: 'grunt/js/*.js',
        src: ['*.js', '!*.min.js'],
        dest: 'grunt/js/',
        ext: '.min.js'
      }]
    },
    clean: {
      //js: ['lib/js/*.js', '!lib/js/*.min.js'],
      //css: ['lib/css/*.css', '!lib/css/*.min.css']
      //js:['app/*.js', 'test/*.js', '!app/*.min.js', '!test/*.min.js']
      js:['grunt/js/*.js', '!grunt/js/*.min.js']
    },
    copy: {
      files: {
        expand: true,
        cwd: ['./app', './test'],
        src: ['*.js', '!*.min.js'],
        dest: ['./app', './test'],
        flatten: true,
        filter: 'isFile',
      },
    }
  });

  //Registro de todas las tareas
  //
  //grunt.registerTask('default', ['concat']);
  //grunt.registerTask('personalizada', ['jshint']);

  // Carga de las tareas
  //
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarea por defecto
  //
  //grunt.registerTask('default1', ['watch:script']);
  //grunt.registerTask('default2', ['watch:css']);
  grunt.registerTask('all', ['concat', 'uglify', 'clean']);

};
//investigar watch(1.jshint 2.concat 3.uglify 4.clean 5.copy)
//usando "personalizada"
