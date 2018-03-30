import Vue from "vue";
import Main from './Main.vue';
// import { Button, Select } from 'element-ui';
// Vue.use(Button);

let vm = new Vue({
    el: "#app",
    components: { Main }, // 注册组件
    template: '<Main/>'
});
