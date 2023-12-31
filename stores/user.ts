import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {}
    }),

    actions: {
        setUser(user: any) {
            sessionStorage.setItem('user', JSON.stringify(user))
            this.user = user
        }
    }
})