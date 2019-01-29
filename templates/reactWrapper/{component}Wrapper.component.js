/*
  Generated by generator https://github.com/mrhieu/generator

  USAGE: add these lines to your module declaration
  `import {Name}WrapperComponent from '../shared/reactWrappers/{name}/{name}Wrapper.component';
  dashboard.component('{name}Wrapper', {Name}WrapperComponent);`
*/

import {Name}WrapperCtrl from './{name}Wrapper.ctrl';

export default {
  bindings: {},
  template: '<div id="{kebabCase}-wrapper"></div>',// I suggest that we add the suffix `-wrapper` for react component's mounting point
  controller: {Name}WrapperCtrl,
  controllerAs: '$ctrl'
}