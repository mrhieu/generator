#!/usr/bin/env node

var generator = require('custom-template-generator');
var program = require('commander');
var _ = require('lodash');

var FRAMEWORKS = ['angularjs', 'react', 'ionicReact'];
var TYPES = ['component', 'directive'];
var DEST_PATH_DEFAULT = {
  angularjs: 'src/app/shared',
  react: 'src/app/shared',
  ionicReact: 'src'
};

function copyTemplateFiles(framework, type, name, dest) {
  console.log('LOG:::', framework, type, name, dest); // eslint-disable-line

  generator({
    componentName: name, // <-- as {name}
    customTemplatesUrl: './templates/',
    dest: dest,
    templateName: type, // <-- folder under ./templates/
    autoIndent: false,
    data: {
      kebabCase: _.kebabCase(name)
    }
  });
}

function start(framework, type, name, dest) {
  if (FRAMEWORKS.indexOf(framework) < 0) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -framework-');
  }

  if (TYPES.indexOf(type) < 0) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -type-');
  }

  if (name == null) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -name-');
  } else {
    name = _.camelCase(name);
  }

  if (dest == null) {
    dest = `${DEST_PATH_DEFAULT[framework]}/${type}s`;
    console.log('\x1b[45m%s\x1b[0m', `WARNING: no -dest- given. Will use "${dest}"`);
  }

  dest = process.cwd() + '/' + dest.replace(/^\//i, '');
  copyTemplateFiles(framework, type, name, dest);

  // Only for React: we are actually adding a react component in an angularjs project
  // Need one more step
  if (framework === 'react' && type === 'component') {
    var dest2 = process.cwd() + '/' + `${DEST_PATH_DEFAULT[framework]}/reactWrappers`.replace(/^\//i, '');
    var type2 = 'reactWrapper';
    copyTemplateFiles(framework, type2, name, dest2);
  }
}

function main() {
  console.log('Generator created by a lazy guy, for a lazy guy. You are at:', process.cwd());

  program
    .arguments('<framework> <type> <name> [dest]')
    .action(function (framework, type, name, dest) {
      start(framework, type, name, dest);
    })
    .parse(process.argv);
}

/**
 * ========= Main ============
 */
// main();
var dest = 'src/test';
dest = process.cwd() + '/' + dest.replace(/^\//i, '')
copyTemplateFiles('ionicReact', 'component', 'hieuTest', dest);
