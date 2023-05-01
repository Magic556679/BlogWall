import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import zh from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { localize, setLocale } from '@vee-validate/i18n';
import './style.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh');
const pinia = createPinia()
const app = createApp(App)

app.component('VeeForm', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.use(pinia)
app.mount('#app')
