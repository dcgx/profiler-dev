import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {}
    }),

    actions: {
        getUserByUsername(username: string) {
            return $fetch(`api/user/${username}`, {
                method: 'GET',
            })
        },

        setUser(user: any) {
            sessionStorage.setItem('user', JSON.stringify(user))
            this.user = user
        }
    }
})