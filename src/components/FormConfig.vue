<template>
    <div>
        <v-dialog v-model="dialog">
            <div class="d-flex flex-column align-center justify-center">
                <v-card class="update-config-card">
                    <v-row justify="end">
                        <v-btn @click="dialog = false" color="primary" icon class="position-fixed top-0 right-0 mt-n5">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>

                    <v-card-title class="text-center mt-10">
                        <h1>CONFIGURA DE TU GIMNASIO</h1>
                    </v-card-title>
                    <v-form @submit.prevent="saveConfig" class="my-16">
                        <v-row justify="space-around" class="mx-5">
                            <v-col cols="1" align="center" justify="center" v-for="day in days" :key="day.id">
                                <DayScheduler :day-label="day.name" v-model:dayData="day.dayData" />
                            </v-col>
                            <v-col cols="2">
                                <v-text-field label="Tasa de cambio" type="number" variant="underlined"
                                    :rules="[required]" v-model="exchange_rate"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-btn color="primary" :loading="loadingButton" type="submit"
                                class="mt-5">Actualizar</v-btn>
                        </v-row>
                    </v-form>
                </v-card>
            </div>
        </v-dialog>
    </div>

</template>
<script setup>

import DayScheduler from '@/components/DayScheduler'
import { ref, onMounted, inject, defineProps  } from 'vue'
import { useLoading } from 'vue-loading-overlay'
import { createConfig, updateConfig } from '@/api/modules/config'
import { useAuthStore } from '@/store/auth';

const loading = useLoading()
const swal = inject('$swal')
const authStore = useAuthStore();
const loadingButton = ref(false);
const create = ref(false);
const exchange_rate = ref(null)
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  dialog: Boolean
})
const required = value => !!value || 'Campo requerido.'
const days = ref([{
    name: 'Lunes',
    dayData: {
        id: 1,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Martes',
    dayData: {
        id: 2,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Miercoles',
    dayData: {
        id: 3,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Jueves',
    dayData: {
        id: 4,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Viernes',
    dayData: {
        id: 5,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Sabado',
    dayData: {
        id: 6,
        state: false,
        start: '',
        end: '',
    }
},
{
    name: 'Domingo',
    dayData: {
        id: 7,
        state: false,
        start: '',
        end: '',
    }
}
])
onMounted(() => {
    getDaysSchedule()
})
const getDaysSchedule = () => {
    if (authStore.schedule != null) {
        exchange_rate.value = authStore.exchange_rate
        days.value.forEach(day => {
            create.value = false
            let filterDay = authStore.schedule.filter(e => e.day_id == day.dayData.id)
            if (filterDay.length > 0) {
                day.dayData.state = filterDay[0].state
                day.dayData.start = filterDay[0].day_time_init
                day.dayData.end = filterDay[0].day_time_end
            }
        })
    } else create.value = true
}
const saveConfig = async () => {
    loadingButton.value = true;
    const loader = loading.show()
    let bodyDays = []
    let body = {}
    days.value.forEach(day => {
        bodyDays.push(day.dayData)
    })
    if (create.value) {
        body = {
            exchange_rate: parseInt(exchange_rate.value),
            days: bodyDays
        }
    } else {
        body = {
            exchange_rate: parseInt(exchange_rate.value),
            schedule_id: authStore.config.schedule_id,
            id: authStore.config.id,
            days: bodyDays
        }
    }

    try {
        if (create.value) {
            await createConfig(body, authStore.token)
        } else await updateConfig(body, authStore.token)
        loadingButton.value = false
        loader.hide()
        dialog = false
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
            icon: "success",
            title: create.value ? "Configuración guardada" : "Cofiguracion actualizada"
        })
    } catch (error) {
        loadingButton.value = false
        loader.hide()
        dialog = false
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
            title: create.value ? "Error al guardar la configuración" : "Error al actualizar la configuración"
        })
        console.log(error)
    }

}

</script>