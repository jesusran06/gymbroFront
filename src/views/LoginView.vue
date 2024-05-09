<template>
    <v-app style="background-color:#8a98a0;">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="6">
                <div class="full-height-image"></div>
            </v-col>
            <v-col cols="6">
                <div class="keyboard">
                    <span class="key">G</span>
                    <span class="key">Y</span>
                    <span class="key">M</span>
                    <span class="key">B</span>
                    <span class="key">R</span>
                    <span class="key">O</span>
                </div>
                <v-card elevation="24" class="loginCard rounded-xl">
                    <v-card-text>
                        <v-form @submit.prevent="loginUser">
                            <v-text-field label="Usuario" variant="underlined" :rules="[required]"
                                v-model="ci"></v-text-field>
                            <v-text-field label="Contraseña" variant="underlined" :rules="[required]" v-model="password"
                                type="password"></v-text-field>
                            <v-btn color="primary" type="submit" class="mt-5">Iniciar Sesión</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
    <Loading v-model:active="loading" is-full-page>
    </Loading>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

const swal = inject('$swal')
const ci = ref('')
const password = ref('')
const loading = useLoading()
const authStore = useAuthStore();
const router = useRouter()
const overlay = ref(false)
const required = value => !!value || 'Campo requerido.'
const loginUser = async () => {
    const loader = loading.show()
    try {
        overlay.value = true
        await authStore.login(ci.value, password.value)
        loader.hide()
        router.push({ name: 'home' })
    } catch (error) {
        loader.hide()
        if (error.response.status == 401) {
            const toast = swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = swal.stopTimer;
                    toast.onmouseleave = swal.resumeTimer;
                }
            })
            toast.fire({
                icon: "error",
                title: "Credenciales incorrectas"
            })
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-height-image {
    height: 100vh;
    /* Toma el 100% del alto de la pantalla */
    background-image: url('../assets/images/login.jpg');
    background-size: cover;
}

.loginCard {
    margin-right: 20%;
    margin-left: 20%;
}

.key {
    font-size: 6vw;
    font-weight: bolder;
    display: inline-block;
    letter-spacing: 0vw;
    transition: transform 0.2s;
}



@keyframes pressDown1 {

    30%,
    40%,
    100% {
        transform: translateY(0);
    }

    35% {
        transform: translateY(10px);
    }
}

@keyframes pressDown2 {

    70%,
    80%,
    100% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(10px);
    }
}

@keyframes pressDown3 {

    30%,
    40%,
    100% {
        transform: translateY(0);
    }

    35% {
        transform: translateY(10px);
    }
}

@keyframes pressDown4 {

    40%,
    50%,
    100% {
        transform: translateY(0);
    }

    45% {
        transform: translateY(10px);
    }
}

@keyframes pressDown5 {

    20%,
    30%,
    100% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(10px);
    }
}

@keyframes pressDown6 {

    60%,
    70%,
    100% {
        transform: translateY(0);
    }

    65% {
        transform: translateY(10px);
    }
}

@keyframes pressDown7 {

    10%,
    20%,
    100% {
        transform: translateY(0);
    }

    15% {
        transform: translateY(10px);
    }
}

@keyframes pressDown8 {

    35%,
    45%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(10px);
    }
}



.key:nth-child(1) {
    animation: pressDown1 2s infinite;
}

.key:nth-child(2) {
    animation: pressDown2 3s infinite;
}

.key:nth-child(3) {
    animation: pressDown3 4s infinite;
}

.key:nth-child(4) {
    animation: pressDown4 2.5s infinite;
}

.key:nth-child(5) {
    animation: pressDown5 2.5s infinite;
}

.key:nth-child(6) {
    animation: pressDown6 3.5s infinite;
}

.key:nth-child(7) {
    animation: pressDown7 2.2s infinite;
}

.key:nth-child(8) {
    animation: pressDown8 3.2s infinite;
}




/* extra stuff */
.jux-linx {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    position: absolute;
    left: 20px;
    bottom: 20px;
}

a {
    text-decoration: none;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-size: 10px;
    color: white;
    background-color: black;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    padding: 5px 10px;
    transition: 0.1s all ease-in;
}

a:nth-child(1):hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0px 2px 0 #349eff;
}

a:nth-child(2):hover {
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0px 2px 0 #ff5757;
}

.semipolar-spinner,
.semipolar-spinner * {
    box-sizing: border-box;
}

.semipolar-spinner {
    height: 65px;
    width: 65px;
    position: relative;
}

.semipolar-spinner .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(65px * 0.05) solid transparent;
    border-top-color: #ff1d5e;
    border-left-color: #ff1d5e;
    animation: semipolar-spinner-animation 2s infinite;
}

.semipolar-spinner .ring:nth-child(1) {
    height: calc(65px - 65px * 0.2 * 0);
    width: calc(65px - 65px * 0.2 * 0);
    top: calc(65px * 0.1 * 0);
    left: calc(65px * 0.1 * 0);
    animation-delay: calc(2000ms * 0.1 * 4);
    z-index: 5;
}

.semipolar-spinner .ring:nth-child(2) {
    height: calc(65px - 65px * 0.2 * 1);
    width: calc(65px - 65px * 0.2 * 1);
    top: calc(65px * 0.1 * 1);
    left: calc(65px * 0.1 * 1);
    animation-delay: calc(2000ms * 0.1 * 3);
    z-index: 4;
}

.semipolar-spinner .ring:nth-child(3) {
    height: calc(65px - 65px * 0.2 * 2);
    width: calc(65px - 65px * 0.2 * 2);
    top: calc(65px * 0.1 * 2);
    left: calc(65px * 0.1 * 2);
    animation-delay: calc(2000ms * 0.1 * 2);
    z-index: 3;
}

.semipolar-spinner .ring:nth-child(4) {
    height: calc(65px - 65px * 0.2 * 3);
    width: calc(65px - 65px * 0.2 * 3);
    top: calc(65px * 0.1 * 3);
    left: calc(65px * 0.1 * 3);
    animation-delay: calc(2000ms * 0.1 * 1);
    z-index: 2;
}

.semipolar-spinner .ring:nth-child(5) {
    height: calc(65px - 65px * 0.2 * 4);
    width: calc(65px - 65px * 0.2 * 4);
    top: calc(65px * 0.1 * 4);
    left: calc(65px * 0.1 * 4);
    animation-delay: calc(2000ms * 0.1 * 0);
    z-index: 1;
}

@keyframes semipolar-spinner-animation {
    50% {
        transform: rotate(360deg) scale(0.7);
    }
}
</style>@/store/auth