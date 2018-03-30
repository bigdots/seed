import Vue from "vue";
import Hello from './components/Hello.vue';
// import { Button, Select } from 'element-ui';
// Vue.use(Button);

import { Button, Select } from 'element-ui';
Vue.component(Button.name, Button);


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

let vm = new Vue({
    el: "#app",
    components: { Hello },
    template: '<Hello/>'
});
