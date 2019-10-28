#!/usr/bin/env node

var generator = require('custom-template-generator');
var program = require('commander');
var _ = require('lodash');

var FRAMEWORKS = {
  angularjs: {
    types: ['component', 'directive', 'react'],
    defaultPath: 'src/app/shared',
    defaultPathReactComponents: 'src/app/dashboard/reactComponents',
    defaultPathReactWrappers: 'src/app/shared/reactWrappers',
  },
  ionicReact: {
    types: ['component'],
    defaultPath: 'src/components'
  }
}

function copyTemplateFiles(framework, type, name, dest) {
  console.log('LOG:::', framework, type, name, dest); // eslint-disable-line

  generator({
    componentName: name, // <-- as {name}
    customTemplatesUrl: './src/templates/',
    dest: dest,
    templateName: `${framework}/${type}`, // <-- folder under ./templates/
    autoIndent: false,
    data: {
      kebabCase: _.kebabCase(name)
    }
  });
}

function start(framework, type, name, dest) {
  if (Object.keys(FRAMEWORKS).indexOf(framework) < 0) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -framework-');
  }

  if (FRAMEWORKS[framework].types.indexOf(type) < 0) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -type-');
  }

  if (name == null) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -name-');
  } else {
    name = _.camelCase(name);
    if (framework === 'ionicReact') name = _.upperFirst(name);
  }

  if (dest == null) {
    dest = `${FRAMEWORKS[framework].defaultPath}`;
    if (framework === 'angularjs' && type === 'react') dest = `${FRAMEWORKS[framework].defaultPathReactComponents}`;
    console.log('\x1b[45m%s\x1b[0m', `WARNING: no -dest- given. Will use "${dest}"`);
  }

  dest = process.cwd() + '/' + dest.replace(/^\//i, '');
  copyTemplateFiles(framework, type, name, dest);

  // Only for React: we are actually adding a react component in an angularjs project
  // Need one more step
  if (framework === 'angularjs' && type === 'react') {
    var type2 = 'reactWrapper';
    var dest2 = process.cwd() + '/' + `${FRAMEWORKS[framework].defaultPathReactWrappers}`.replace(/^\//i, '');
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
main();
