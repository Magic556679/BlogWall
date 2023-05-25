import { defineStore } from 'pinia';
import { profile } from '@/services/api/user';

interface UserInfo {
  userName: string,
  userId: string,
  userProfilePhoto: string
}

export const useMainStore = defineStore({
  id: 'user',
  state: (): UserInfo => ({
      userName: '',
      userId: '',
      userProfilePhoto: ''
  }),
  actions: {
    async getProfile() {
      try {
        const UserId = { id: this.userId }
        const {
          data: { data },
        } = await profile(UserId);
        console.log('getProfile', data)
      } catch (err) {
        console.error(err)
      }
    }
  }
});
