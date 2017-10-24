#!/usr/bin/env node

console.log('Generator created by a lazy guy. You are at:', process.cwd());

var generator = require('custom-template-generator');
var program = require('commander');

program
  .arguments('<name> [dest]')
  .action(function (name, dest) {
    main(name, dest);
  })
  .parse(process.argv);

function main(name, dest) {
  var name = name || 'dumb';
  var dest = dest || 'src/app/shared/components';

  dest = process.cwd() + '/' + dest.replace(/^\//i, '');

  generator({
    componentName: name, // <-- as {name}
    customTemplatesUrl: './templates/',
    dest: dest,
    templateName: 'component', // <-- folder under ./templates/
    autoIndent: false,
    data: {}
  });
}
