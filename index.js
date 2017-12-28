#!/usr/bin/env node

console.log('Generator created by a lazy guy. You are at:', process.cwd());

var generator = require('custom-template-generator');
var program = require('commander');

program
  .arguments('<type> <name> [dest]')
  .action(function (type, name, dest) {
    main(type, name, dest);
  })
  .parse(process.argv);

function main(type, name, dest) {
  var type = type || 'component'; // supported types: 'directive' - 'component'
  var name = name || 'dummy';
  var dest = dest || `src/app/shared/${type}s`;

  dest = process.cwd() + '/' + dest.replace(/^\//i, '');

  generator({
    componentName: name, // <-- as {name}
    customTemplatesUrl: './templates/',
    dest: dest,
    templateName: type, // <-- folder under ./templates/
    autoIndent: false,
    data: {}
  });
}
