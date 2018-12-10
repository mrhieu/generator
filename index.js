#!/usr/bin/env node

var generator = require('custom-template-generator');
var program = require('commander');
var _ = require('lodash');

var TYPES = ['directive', 'component', 'reactComponent'];
var DEST_PATH_DEFAULT = 'src/app/shared';

function copyTemplates(type, name, dest) {
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

function generatorStart(type, name, dest) {
  if (TYPES.indexOf(type) < 0) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -type-');
  }

  if (name == null) {
    return console.log('\x1b[45m%s\x1b[0m', 'ERROR: Invalid -name-');
  } else {
    name = _.camelCase(name);
  }

  if (dest == null) {
    dest = `${DEST_PATH_DEFAULT}/${type}s`;
    console.log('\x1b[45m%s\x1b[0m', `WARNING: no -dest- given. Will use "${dest}"`);
  }

  dest = process.cwd() + '/' + dest.replace(/^\//i, '');
  copyTemplates(type, name, dest);

  // Create reactWrapper
  if (type === 'reactComponent') {
    var dest2 = process.cwd() + '/' + `${DEST_PATH_DEFAULT}/reactWrappers`.replace(/^\//i, '');
    var type2 = 'reactWrapper';
    copyTemplates(type2, name, dest2);
  }
}

function main() {
  console.log('Generator created by a lazy guy. You are at:', process.cwd());

  program
    .arguments('<type> <name> [dest]')
    .action(function (type, name, dest) {
      generatorStart(type, name, dest);
    })
    .parse(process.argv);
}

/**
 * ========= Main ============
 */
main();
