import type { IState, IUser } from "./type"

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: null,
    token: '',
    userData:<IUser> {}
  }),
  actions: {
    fetchUserData() {
      setTimeout(() => {
        this.userData = { name: 'codermey', age: 18 }
      }, 10 * 1000)
    }
  },
  persist: true
})
