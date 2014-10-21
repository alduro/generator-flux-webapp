'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FluxWebappGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the incredible FluxWebapp generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname
    }];
    this.prompt(prompts, function (props) {
      this.name = props.name;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      var context = {
        title: this.name,
        description: 'Flux Webapp application',
        appname: this.name
      };

      this.template('_package.json', 'package.json', context);
      this.src.copy('_bower.json', 'bower.json');
      this.dest.mkdir('config');
      this.dest.mkdir('src');
      this.dest.mkdir('src/actions');
      this.dest.mkdir('src/assets');
      this.dest.mkdir('src/components');
      this.dest.mkdir('src/constants');
      this.dest.mkdir('src/images');
      this.dest.mkdir('src/layouts');
      this.dest.mkdir('src/pages');
      this.template('src/pages/404.html');
      this.template('src/pages/_template.html', 'src/pages/_template.html', context);
      this.src.copy('src/actions/RouteActions.js', 'src/actions/RouteActions.js');
      this.src.copy('src/pages/index.jsx', 'src/pages/index.jsx');
      this.src.copy('src/pages/Privacy.jsx', 'src/pages/Privacy.jsx');
      this.directory('src/assets/', 'src/assets/');
      this.directory('src/components/', 'src/components/');
      this.directory('src/constants/', 'src/constants/');
      this.directory('src/images/', 'src/images/');
      this.directory('src/layouts/', 'src/layouts/');
      this.directory('src/styles/', 'src/styles/');
      this.directory('config/', 'config/');
      this.src.copy('src/app.js', 'src/app.js');
      this.src.copy('src/AppDispatcher.js', 'src/AppDispatcher.js');

    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('_.gitignore', '.gitignore');
      this.src.copy('gulpfile.js', 'gulpfile.js');
      this.src.copy('LICENSE.txt', 'LICENSE.txt');
      this.src.copy('README.md', 'README.md');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = FluxWebappGenerator;
