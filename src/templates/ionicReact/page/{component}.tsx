import React from 'react';
import {
  IonPage, IonContent,
} from '@ionic/react';
import {

} from 'ionicons/icons';
import './{Name}.scss';

type Props = {

}

const {Name}: React.FC<Props> = () => {
  return (
    <IonPage className="ion-page {kebabCase}-page">
      <IonContent>
        <h2>{Name} Page</h2>
      </IonContent>
    </IonPage>
  );
};

{Name}.defaultProps = {

}

export default {Name};
