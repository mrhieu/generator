import React from 'react';
import {
  IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonBackButton, IonIcon
} from '@ionic/react';
import { more } from 'ionicons/icons';
import './{Name}.scss';

const {Name}: React.FC<{}> = () => {
  return (
    <div className="{kebabCase}">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>{Name}</IonTitle>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={{more}} mode="ios" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/some/where">
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
