// @flow

/*
  Generated by generator https://github.com/mrhieu/generator
*/

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../dashboard/reactRedux/store';
import {Name} from '../../../dashboard/reactComponents/{name}/{name}';

class {Name}WrapperCtrl {
  wrapperElement: HTMLElement;

  constructor($scope, $element) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;

    this.name = '{Name}Wrapper';
  }

  $onInit() {
    this.reactRender();// Whatever the services that react might need, pass them here

    // Must manually unmount component for `componentWillUnmount` to be triggered
    this.$scope.$on('$destroy', () => {
      unmountComponentAtNode(this.wrapperElement);
    });
  }

  reactRender() {
    this.wrapperElement = angular.element(this.$element)[0];

    if (this.wrapperElement) {
      render(
        <Provider store={ store }>
          <{Name}/>
        </Provider>, this.wrapperElement
      );
    }
  }
}

export default {Name}WrapperCtrl
