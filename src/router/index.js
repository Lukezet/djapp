import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../views/Home.vue";
import UploadFiles from "../views/UploadFiles.vue";
import LoginLayout from "../layouts/LoginLayout.vue";
import { useAuthStore } from '../store/auth';
import Memberships from "../views/Memberships.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta:{
      requireAuth:true
    },
    children:[
      {
        path: "/",
        name: "home",
        component: Home,
        meta:{
          requireAuth:true
        }
      },
      {
        path: "/upload-Files",
        name: "uploadFiles",
        component: UploadFiles,
        meta:{
          requireAuth:true
        }
      },
      {
        path: "/memberships",
        name: "memberships",
        component: Memberships,
        meta:{
          requireAuth:true
        }
      },
    ]
  },
  {
    path:'/login',
    component: LoginLayout,
    meta:{
      requireAuth:false
    }
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const authStore = useAuthStore();//si el usuario está logueado y guardado en el state
  const authVerif = authStore.auth !== null && authStore.auth !== undefined;
  const needAuth = to.meta.requireAuth

  if(needAuth && !authVerif){
    next('/login')
  }else{
    next()
  }
})

export default router;
