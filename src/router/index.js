import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/Home.vue";
import UploadFiles from "../views/UploadFiles.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/upload-Files",
        name: "uploadFiles",
        component: UploadFiles,
      },
    ]
  },
  {
    path:'/guest',
    component: GuestLayout
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;