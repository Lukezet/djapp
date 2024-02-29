import { defineStore } from "pinia";
import axiosClient from '../axiosClient';

export const useAuthStore = defineStore('auth',{
  state:() => {
    return{
      auth:null
    }
  },
  persist:true,
  getters:{},
  
  actions:{
    async login(credentials){
     try{
      this.auth ={prueba:"SinLOGIN"}//BORRAR ESTO PARA TESTEAR 
      // const res = await axiosClient.post('/api/LoginContable/Login', credentials)  
      // this.auth = res.data;
      // console.log(res.data);
      return true;
     }catch(error) {
        console.error(error)
        return false;  
      }
    }
  }
}) 