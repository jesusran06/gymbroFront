<template>
    <v-container class="container-centered">
        <v-row>
            <v-col cols="4" md="6" lg="4">
                <v-card elevation="16" class="rounded-xl mx-10">
                    <v-card-item>
                        <v-card-title>
                            <v-row>
                                <v-col cols="5">
                                    <v-avatar size="95" class="elevation-16 my-7">
                                        <v-img src="@/assets/images/sin-imagen.webp"
                                            style="background-size: cover;"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="7" align="start">
                                    <h2 class="mt-10"><strong>Jesus Rangel</strong></h2>
                                    <h4 class="mt-3">Entrenador</h4>
                                </v-col>
                            </v-row>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mb-5 ml-3">
                        <v-row>
                            <v-col cols="5" align="start">
                                <h3><strong>CI: </strong>V-12345678</h3> <br />
                            </v-col>
                            <v-col cols="7" align="start">
                                <h3><strong>Nacimiento:</strong>13-01-1994</h3>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="7" align="start">
                                <h3><strong>Telefono: </strong>04245686466</h3>
                            </v-col>
                            <v-col cols="5" align="start">
                                <v-btn color="Principal" @click="dialog = !dialog"><v-icon icon="mdi-clock"></v-icon>Horario</v-btn>
                            </v-col>
                        </v-row>
                        <v-dialog v-model="dialog">
                            <div class="d-flex flex-column align-center justify-center">
                                <v-card class="calendar-card" style="overflow-y: auto;">
                                    <FullCalendar :options="calendarOptions" class="mt-10 ml-16" />
                                    <v-card-actions class="mt-10">
                                        <v-btn @click="dialog = !dialog">Salir
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </v-dialog>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="4" md="6" lg="4">
                <v-card elevation="16" class="rounded-xl mx-10">
                    <v-card-item>
                        <v-card-title>
                            <v-row>
                                <v-col cols="5">
                                    <v-avatar size="95" class="elevation-16 my-7">
                                        <v-img src="@/assets/images/sin-imagen.webp"
                                            style="background-size: cover;"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="7" align="start">
                                    <h2 class="mt-10"><strong>Jesus Rangel</strong></h2>
                                    <h4 class="mt-3">Entrenador</h4>
                                </v-col>
                            </v-row>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mb-5 ml-3">
                        <v-row>
                            <v-col cols="5" align="start">
                                <h3><strong>CI: </strong>V-12345678</h3> <br />
                            </v-col>
                            <v-col cols="7" align="start">
                                <h3><strong>Nacimiento:</strong>13-01-1994</h3>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="7" align="start">
                                <h3><strong>Telefono: </strong>04245686466</h3>
                            </v-col>
                            <v-col cols="5" align="start">
                                <v-btn color="Principal"><v-icon icon="mdi-clock"></v-icon>Horario</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="4" md="6" lg="4">
                <v-card elevation="16" class="rounded-xl mx-10">
                    <v-card-item>
                        <v-card-title>
                            <v-row>
                                <v-col cols="5">
                                    <v-avatar size="95" class="elevation-16 my-7">
                                        <v-img src="@/assets/images/sin-imagen.webp"
                                            style="background-size: cover;"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="7" align="start">
                                    <h2 class="mt-10"><strong>Jesus Rangel</strong></h2>
                                    <h4 class="mt-3">Entrenador</h4>
                                </v-col>
                            </v-row>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="mb-5 ml-3">
                        <v-row>
                            <v-col cols="5" align="start">
                                <h3><strong>CI: </strong>V-12345678</h3> <br />
                            </v-col>
                            <v-col cols="7" align="start">
                                <h3><strong>Nacimiento:</strong>13-01-1994</h3>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="7" align="start">
                                <h3><strong>Telefono: </strong>04245686466</h3>
                            </v-col>
                            <v-col cols="5" align="start">
                                <v-btn color="Principal"><v-icon icon="mdi-clock"></v-icon>Horario</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>


</template>

<script setup>
import { getAllUsers } from '@/api/modules/user';
import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'


const authStore = useAuthStore();
const loadingTable = ref(false)
const users = ref([])
const dialog = ref(false)
const calendarOptions = ref({
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    weekends: true,
    locale: 'es-ES',
    allDaySlot: false,
    slotDuration: '00:30:00',
    slotLabelFormat: [
        { hour: 'numeric', minute: '2-digit', hour12: true }
    ],
    dayHeaderFormat: { weekday: 'long' },
    nowIndicator: false,
    firstDay: 1,
    height: 'auto',
});
const getUsers = async () => {
    loadingTable.value = true
    let res = await getAllUsers(authStore.token);
    users.value = res
    console.log(users.value[0])
}
onMounted(getUsers)
</script>

<style>

.calendar-card {
    width: 80%;
    height: 85vh;
    z-index: 9999;
}

.fc-toolbar-chunk {
    display: none;
}
</style>
