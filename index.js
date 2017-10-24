#!/usr/bin/env node

console.log('Hello Generator! 23423');

var generator = require('custom-template-generator');
var program = require('commander');

// var name = 'button';
// var dest = 'src/app/shared/components';

program
  .arguments('<name> [dest]')
  .action(function (name, dest) {
    main(name, dest);
  });

function main(name, dest) {
  console.log('hey', name, dest);

  generator({
    componentName: name, // <-- as {name}
    customTemplatesUrl: './templates/',
    dest: dest,
    templateName: 'component', // <-- folder under ./templates/
    autoIndent: true,
    data: {}
  });
}
