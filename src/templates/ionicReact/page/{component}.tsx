import React from 'react';
import {
  IonPage
} from '@ionic/react';
import {

} from 'ionicons/icons';
import './{Name}.scss';

type Props = {

}

const {Name}: React.FC<Props> = () => {
  return (
    <IonPage>
      <h2>My Component</h2>
    </IonPage>
  );
};

{Name}.defaultProps = {

}

export default {Name};
