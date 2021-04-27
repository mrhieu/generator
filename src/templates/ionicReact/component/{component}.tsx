import React from 'react';
import {

} from '@ionic/react';
import {

} from 'ionicons/icons';
import './{Name}.scss';

type Props = {

}

const {Name}: React.FC<Props> = () => {
  return (
    <div className="{kebabCase}">
      <h2>{Name} Component</h2>
    </div>
  );
};

{Name}.defaultProps = {

}

export default {Name};
