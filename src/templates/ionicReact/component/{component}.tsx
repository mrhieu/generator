import React from 'react';
import {
  IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import './{Name}.scss';

const {Name}: React.FC<{}> = () => {
  return (
    <div className="{kebabCase}">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab Two</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/tab2/details">
              <IonLabel>
                <h2>Go to detail</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default {Name};
