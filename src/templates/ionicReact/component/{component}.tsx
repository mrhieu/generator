import React from 'react';
import {
  IonItem, IonLabel,
} from '@ionic/react';
import { more } from 'ionicons/icons';
import './{Name}.scss';

type Props = {
  isThat?: boolean,
}

const {Name}: React.FC<Props> = (props) => {
  return (
    <div className="{kebabCase}">
      <IonItem>
        <IonLabel>
          <h2>Component: {Name}</h2>
        </IonLabel>
      </IonItem>
    </div>
  );
};

{Name}.defaultProps = {
  isThat: true,
}

export default {Name};
