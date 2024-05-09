<template>
    <v-container class="container-centered mt-12">
        <v-row>
            <v-col cols="4" align="center" justify="center">
                <div class="cardbox">
                    <div class="card">
                        <div class="card-front">
                            <h5>PLANES</h5>
                        </div>
                        <div class="card-back">Gestiona los planes para tus clientes</div>
                    </div>
                </div>
            </v-col>
            <v-col cols="4" align="center" justify="center">
                <div class="cardbox">
                    <div class="card" @click="dialog = !dialog">
                        <div class="card-front">
                            <h5>EMPRESA</h5>
                        </div>
                        <div class="card-back">Configura informacion de tu empresa como horario y tasa de cambio</div>
                        <FormConfig :dialog="dialog" @close="dialog = !dialog"/>
                    </div>
                </div>
            </v-col>
            <v-col cols="4" align="center" justify="center">
                <div class="cardbox">
                    <div class="card">
                        <div class="card-front">
                            <h5>PROMOCIONES</h5>
                        </div>
                        <div class="card-back">Gestiona tus promociones</div>
                    </div>
                </div>
            </v-col>
            <v-col cols="4" align="center" justify="center" class="mt-15">
                <div class="cardbox">
                    <div class="card">
                        <div class="card-front">
                            <h5>EQUIPOS</h5>
                        </div>
                        <div class="card-back">Gestiona los equipos de tu gimnasio</div>
                    </div>
                </div>
            </v-col>
            <v-col cols="4" align="center" justify="center" class="mt-15">
                <div class="cardbox" @click="navigateToView('/user')">
                    <div class="card">
                        <div class="card-front">
                            <h5>USUARIOS</h5>
                        </div>
                        <div class="card-back">Gestiona los usuarios de la aplicacion</div>
                    </div>
                </div>
            </v-col>
            <v-col cols="4" align="center" justify="center" class="mt-15">
                <div class="cardbox">
                    <div class="card">
                        <div class="card-front">
                            <h5>TIPOS DE PAGO</h5>
                        </div>
                        <div class="card-back">Gestiona los tipos de pagos aceptados</div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import FormConfig from '@/components/FormConfig.vue'

const router = useRouter();
const dialog = ref(false);
const navigateToView = (path) => {
    router.push({ path: path });
};
</script>

<style>
.cardbox {
    perspective: 500px;
    width: 280px;
    height: 280px;
}

.card {
    position: relative;
    border-radius: 5%;
    width: 280px;
    height: 280px;
    background: black;
    transform-style: preserve-3d;
    transition: 0.25s ease;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);
    cursor: pointer;

}

.card-front,
.card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 280px;
    color: white;
    backface-visibility: hidden;

}

.card-front {
    font-size: 40px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
}

.card-back {
    font-size: 30px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: bolder;
}

.cardbox:hover .card {
    transform: rotateY(180deg);
}

.card-back {
    transform: rotateY(180deg);
}

.update-config-card {
    overflow-y: auto;
    width: 80%;
}
</style>