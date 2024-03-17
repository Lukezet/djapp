<template>
	<div class="father w-full flex justify-center items-center">
		<div class="container  backdrop-filter backdrop-blur-md bg-opacity-30" :class="{ 'right-panel-active': isSignUp }"
			id="container">
			<div class="form-container sign-up-container">
				<form action="#">
					<h1 class="text-xl tracking-wider">¡Crea tu cuenta!</h1>
					<!-- <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span> -->
					<input
						class="w-full mt-8 relative focus text-sm hover:shadow-lg hover:shadow-purple-500/50 border-violet-200 rounded-3xl transition-colors focus:ring-purple-300 focus:border-purple-400 border-2 my-2"
						type="text" placeholder="UserName" v-model="registerUserName" />	
					<input
						class="w-full relative focus text-sm hover:shadow-lg hover:shadow-purple-500/50 border-violet-200 rounded-3xl transition-colors focus:ring-purple-300 focus:border-purple-400 border-2 my-2"
						type="text" placeholder="Email" v-model="registerEmail"/>
					<input
						class="w-full relative focus text-sm hover:shadow-lg hover:shadow-purple-500/50 border-violet-200 rounded-3xl transition-colors focus:ring-purple-300 focus:border-purple-400 border-2 my-2"
						type="text" placeholder="Name" v-model="registerName" />
					<input
						class="w-full  relative focus text-sm hover:shadow-lg hover:shadow-purple-500/50 border-violet-200 rounded-3xl transition-colors focus:ring-purple-300 focus:border-purple-400 border-2 my-2"
						type="password" placeholder="Contraseña" v-model="registerPassword" />
					<input
						class="w-full  relative focus text-sm hover:shadow-lg hover:shadow-purple-500/50 border-violet-200 rounded-3xl transition-colors focus:ring-purple-300 focus:border-purple-400 border-2 my-2 mb-8"
						type="password" placeholder="Repetir constraseña" v-model="registerRepeatPass"/>
					<button
						class="w-full flex justify-center items-center text-md shadow-lg h-12 border-2 bg-gradient-to-r from-indigo-300 via-purple-400 to-purple-300 font-semibold tracking-wide text-white hover:shadow-lg hover:shadow-purple-500/50 hover:from-indigo-500 hover:via-purple-600 hover:to-purple-500 transition duration-150 ease-out md:ease-in border-purple-200 rounded-full ">
						Crear nueva cuenta</button>
				</form>
			</div>
			<div class="form-container sign-in-container">
				<form action="#">
					<h1 class="text-2xl tracking-wider font-['Montserrat'] mb-8 text-white font-semibold">¡Bienvenido!</h1>
					<!-- <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div> -->
					<!-- <span>or use your account</span> -->
					<input
						class="w-full  italic font-medium py-2 my-2 text-white bg-transparent rounded-[40px] shadow border border-white border-opacity-50 ring-1 ring-inset ring-purple-300 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in"
						type="text" placeholder="Ingresa tu Usuario" v-model="username" />
					<input
						class="w-full  italic font-medium py-2 my-2 text-white bg-transparent rounded-[40px] shadow border border-white border-opacity-50 ring-1 ring-inset ring-purple-300 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in"
						type="password" placeholder="Ingresa tu contraseña" v-model="password" />
					<a class="text-xs text-white mt-2 mb-4" href="#">¿Olvidaste tu contraseña?</a>
            <button id="btn-awesome" href="#" @click.prevent="authUser">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Iniciar sesion
            </button>
				</form>
			</div>
			<div class="overlay-container">
				<div class="overlay bg-neutral-800 backdrop-filter backdrop-blur-md">
					<div class="overlay-panel overlay-left ">
						<h1>Bienvenido de vuelta!</h1>
						<p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
						<button @click="togglePanel"
							class="flex items-center cursor-pointer hover:scale-110 px-5 h-12 border-2 font-semibold text-white hover:text-white shadow-lg hover:bg-purple-500/50 shadow-purple-500/50 hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in border-purple-200 hover:border-white rounded-3xl"
							id="signIn">
							Iniciar sesión</button>
					</div>
					<div class="overlay-panel overlay-right">
						<img src="../assets/soundpackTransparent2.svg" alt="SoundPack" class="h-16">
						<h2 class="mb-4 font-['Montserrat'] text-gray-200 font-semibold text-xs">A NEW WAY TO PLAY YOUR MUSIC</h2>
						<button @click="togglePanel"
							class="flex items-center cursor-pointer hover:scale-110 px-5 h-12 border-2 font-semibold text-white hover:text-white shadow-lg hover:bg-purple-500/50 shadow-purple-500/50 hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in border-purple-200 hover:border-white rounded-3xl"
							id="signUp">
							Crear nueva cuenta</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const isSignUp = ref(false);
//Login
let username = ref('');
let password = ref('');

//Register
let registerUserName = ref('')
let registerEmail = ref('')
let registerName = ref('')
let registerPassword = ref('')
let registerRepeatPass = ref('')

//functions
const authUser = async () => {
	let credentials = {
		username: username.value,
		password: password.value
	};
	let success = false;
	const auth = useAuthStore();
	console.log(credentials)
	success = await auth.login(credentials);

	if (success) {
    router.push('/')
	} else {
		alert('usuario incorrecto')
	}

}

const togglePanel = () => {
	isSignUp.value = !isSignUp.value;
};

import axios from 'axios';

// Define la URL a la que enviar la solicitud POST
const url = 'https://ejemplo.com/api/endpoint';

// Define los datos que quieres enviar en el cuerpo de la solicitud
const registerData = {
  nombre: registerName.value,
  email: registerEmail.value,
  username: registerUserName.value,
  password: registerPassword.value,
  repeatPass: registerPassword.value
}

// Realiza la solicitud POST utilizando Axios
axios.post('/api/LoginContable/Registro', registerData)
  .then(response => {
    // Maneja la respuesta exitosa
    console.log('Respuesta exitosa:', response.data);
		alert('Respuesta exitosa:');
	})
  .catch(error => {
    // Maneja el error en caso de que la solicitud falle
    console.error('Error al enviar la solicitud:', error);
  });
</script>

<style scoped>
.father {
	height: 90vh;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}


h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}


/* button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
} */

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

/* input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
} */

.container {
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
	opacity: 0;
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {

	0%,
	49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%,
	100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container {
	transform: translateX(-100%);
}

.overlay {
	/* background: -webkit-linear-gradient(to right, #a5b4fc, #c084fc);
	background: linear-gradient(to right, #8b5cf6, #d8b4fe); */
	/* background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0; */
	color: #363636;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}


/*awesome button*/

#btn-awesome{
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #5eead4;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

#btn-awesome:hover {
  background: #5eead4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #5eead4,
              0 0 25px #5eead4,
              0 0 50px #5eead4,
              0 0 100px #5eead4;
}

#btn-awesome span {
  position: absolute;
  display: block;
}

#btn-awesome span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5eead4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

#btn-awesome span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #5eead4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

#btn-awesome span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #5eead4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

#btn-awesome span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #5eead4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>