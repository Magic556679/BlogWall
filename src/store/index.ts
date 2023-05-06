import { defineStore } from 'pinia';
import { profile } from '@/services/api/user';

interface UserInfo {
  userName: string,
  userId: string
}

export const useMainStore = defineStore({
  id: 'user',
  state: (): UserInfo => ({
      userName: '',
      userId: ''
  }),
  actions: {
    async getProfile() {
      try {
        const UserId = { id: this.userId }
        const {
          data: { data },
        } = await profile(UserId);
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
  }
});
