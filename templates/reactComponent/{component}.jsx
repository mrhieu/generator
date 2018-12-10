// @flow

import React, { Component } from 'react';
import './{name}.scss';

type Props = {};

type State = {};

class {Name} extends Component<Props, State> {

  state = {};

  componentDidMount() {}

  render () {
    return (
      <div className="{kebabCase}">
        Hello! I am {Name} and I am written in React!
      </div>
    );
  }
}

export default {Name};
