console.log('Js Collegato!');

/* Vue JS */
const { createApp } = Vue

  const app = createApp({
    data() {
      return {
        message: 'Vue Start'
      }
    }
  }).mount('#app');