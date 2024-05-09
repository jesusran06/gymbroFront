<template>
  <v-card style="z-index: 9998;">
    <v-layout>
      <v-navigation-drawer expand-on-hover rail style="background-color: #27272c;">
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="sandra_a88@gmailcom"
            title="Sandra Adams" style="color: white;"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" style="color: white;"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"
            style="color: white;"></v-list-item>
          <v-list-item prepend-icon="mdi-wrench" to="/config" title="Configuracion" value="starred"
            style="color: white;"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app style="background-color: white;">
        <v-toolbar-title>Menú Horizontal</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>Item 1</v-btn>
        <v-btn>Item 2</v-btn>
        <v-btn>Item 3</v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
  <v-row class="mt-16 ml-16">
    <v-btn v-if="showBackButton" class="mt-7" icon @click="goBack"><v-icon>mdi-arrow-left</v-icon></v-btn>
    <h1 v-if="showBackButton" class="ml-4 mt-7">{{ currentRouteName }}</h1>
  </v-row>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const showBackButton = ref(false);
const currentRouteName = ref("");

watch(route, (to) => {
  console.log(to.path)
  showBackButton.value = to.path !== "/";
  currentRouteName.value = to.name;
});
const goBack = () => {
  router.go(-1);
};

onMounted(() => {
  currentRouteName.value = route.name;
});
</script>