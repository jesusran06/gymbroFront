// import { defineStore } from 'pinia';
// import { createConfig } from '@/api/modules/config'
// export const useAuthStore = defineStore('auth', {
//     state: () => ({
//         isAuthenticated: false,
//         user: {},
//         token: '',
//     }),
//     actions: {
//         async createConfig(ci, password) {
//             try {
//                 const data = await login(ci, password);
//                 this.user = data.user;
//                 this.token = data.access_token
//                 this.isAuthenticated = true;
//             } catch (error) {
//                 let res = error
//                 throw res
//             }
//         },
//         logout() {
//             this.isAuthenticated = false;
//         },
//     },
// });