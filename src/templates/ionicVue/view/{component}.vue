<template>
  <ion-page className="{kebabCase}-page">
    <IonContent>
      <h2>{Name} Page</h2>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
} from '@ionic/vue';
import {

} from 'ionicons/icons';
import './{Name}.scss';

export default  {
  name: '{Name}',
  components: {
    IonPage,
  },
  setup() {
    return {

    }
  }
}
</script>
