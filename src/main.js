import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/app.css'

const app = createApp(App)
app.provide('apiKey', '8B1lmdWVSMeUzJvCDgSRqii3DzfYhcke5neewXRK');
app.provide('apiUrl', 'https://api.nasa.gov/neo/rest/v1/');

app.use(createPinia())
app.use(router)


app.mount('#app')
