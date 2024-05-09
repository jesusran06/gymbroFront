import { defineStore } from 'pinia';
import { login } from '@/api/modules/auth'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: {},
        token: '',
        exchange_rate: 0,
        schedule: [],
        config: {},
    }),
    actions: {
        async login(ci, password) {
            try {
                const data = await login(ci, password);
                console.log(data)
                this.user = data.user;
                this.token = data.access_token
                this.exchange_rate = data.config !== null ? data.config.exchange_rate : 0
                this.schedule = data.schedule
                this.config = data.config
                this.isAuthenticated = true;
            } catch (error) {
                let res = error
                throw res
            }
        },
        logout() {
            this.isAuthenticated = false;
        },
    },
});