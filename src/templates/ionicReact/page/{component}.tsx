import React from 'react';
import {
  IonPage, IonHeader, IonContent, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonButtons,
  IonButton, IonBackButton, IonIcon
} from '@ionic/react';
import { more } from 'ionicons/icons';
import './{Name}.scss';

const {Name}: React.FC<{}> = () => {
  return (
    <IonPage className="{kebabCase}-page">
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
  );
};

export default {Name};
