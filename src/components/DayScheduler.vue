<template>
    <v-row align="center" justify="center">
        <v-switch v-model="dayState" hide-details inset color="green">{{ dayLabel }}</v-switch>
    </v-row>
    <v-row align="center" justify="center">
        <h5>{{ dayLabel }}</h5>
    </v-row>
    <v-text-field v-if="dayState" class="mt-10" label="Inicio" type="text" variant="underlined" :rules="[required]"
        v-model="startTime" append-inner-icon="mdi-clock-time-four-outline" readonly
        @click:append-inner="openStartTimeDialog" />
    <v-dialog v-model="startDialogVisible" width="auto">
        <v-time-picker v-model="startTime" format="24hr" title="Secciona la hora de inicio"/>
        <v-row align="center" justify="center">
            <v-btn @click="startDialogVisible=false" color="primary">Cerrar</v-btn>
        </v-row>
    </v-dialog>
    <v-text-field v-if="dayState" label="Fin" type="text" variant="underlined" :rules="[required]" v-model="endTime"
        append-inner-icon="mdi-clock-time-four-outline" readonly @click:append-inner="openEndTimeDialog" />
    <v-dialog v-model="endDialogVisible" width="auto">
        <v-time-picker v-model="endTime" format="24hr" title="Secciona la hora final"/>
        <v-row align="center" justify="center">
            <v-btn @click="endDialogVisible = false" color="primary">Cerrar</v-btn>
        </v-row>
    </v-dialog>
</template>

<script>
import { ref, toRefs, watch } from 'vue';

export default {
    name: 'DayScheduler',
    props: {
        dayLabel: String,
        dayData: {
            type: Object,
            default: () => ({
                state: false,
                start: '',
                end: '',
                name:''
            })
        },
    },
    emits: ['update:dayData'],
    setup(props, { emit }) {
        const { dayData } = toRefs(props);
        const dayState = ref(dayData.value.state);
        const startTime = ref(dayData.value.start);
        const endTime = ref(dayData.value.end);
        const startDialogVisible = ref(false);
        const endDialogVisible = ref(false);
        const required = value => !!value || 'Campo requerido.'
        const openStartTimeDialog = () => {
            startDialogVisible.value = true;
        };

        const openEndTimeDialog = () => {
            endDialogVisible.value = true;
        };

        // const updateStartTime = (newTime) => {
        //     console.log('newTime', newTime)
        //     startTime.value = newTime;
        //     emit('update:dayData', { ...dayData.value, start: newTime });
        // };

        // const updateEndTime = (newTime) => {
        //     endTime.value = newTime;
        //     emit('update:dayData', { ...dayData.value, end: newTime });
        // };

        watch(dayState, (newState) => {
            emit('update:dayData', { ...dayData.value, state: newState });
        });
        watch(startTime, (newValue) => {
            emit('update:dayData', { ...dayData.value, start: newValue });
        })
        watch(endTime, (newValue) => {
            emit('update:dayData', { ...dayData.value, end: newValue });
        })

        return {
            dayState,
            startTime,
            endTime,
            startDialogVisible,
            endDialogVisible,
            openStartTimeDialog,
            openEndTimeDialog,
            required
        };
    }
};
</script>