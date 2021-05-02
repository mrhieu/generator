<template>
  <IonPage className="ion-page {kebabCase}-page">
    <IonContent>
      <h2>{Name} Page</h2>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage, IonContent,
} from '@ionic/vue';
import {

} from 'ionicons/icons';
import './{Name}.scss';

export default defineComponent({
  name: '{Name}',
  components: {
    IonPage, IonContent,
  },
  setup() {
    return {

    }
  }
})
</script>
