import {
    createApp
} from "vue";
import App from "./App.vue";
import mitt from "mitt";

import store from "@/store";
import router from "@/router";
import typeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination"

import 'swiper/css/swiper.css';
import "@/mock/mockServe";
import * as API from "@/api";

import VueLazyload from "vue-lazyload";

const app = createApp(App);

app.component(typeNav.name, typeNav);
app.component(Carousel.name, Carousel);
app.component(Pagination.name, Pagination)
app.use(store);
app.use(router);
app.use(VueLazyload);
app.config.globalProperties.$bus = new mitt();
app.config.globalProperties.$API = API;
app.mount("#app");