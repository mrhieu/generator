/*
  Generated by generator https://github.com/mrhieu/generator
*/

import React from "react";
import { render } from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../../../steps/reactRedux/store";
import {Name} from "../../reactComponents/{name}/{name}";

class {Name}WrapperCtrl {
  constructor() {
    'ngInject';

    this.name = '{Name}Wrapper';
  }

  $onInit() {
    this.reactRender();// Whatever the services that react might need, pass them here
  }

  reactRender() {
    const wrapperElement = document.getElementById('{kebabCase}-wrapper');

    if (wrapperElement) {
      render(
        <Provider store={ store }>
          <{Name}/>
        </Provider>, wrapperElement
      );
    }
  }
}

export default {Name}WrapperCtrl
