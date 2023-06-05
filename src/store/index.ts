import { defineStore } from 'pinia';
import { profile } from '@/services/api/user';

interface UserInfo {
  userName: string,
  userId: string,
  userProfilePhoto: string,
  userGender: string
}

export const useMainStore = defineStore({
  id: 'user',
  state: (): UserInfo => ({
      userName: '',
      userId: '',
      userProfilePhoto: '',
      userGender: ''
  }),
  actions: {
    async getProfile() {
      try {
        const UserId = { id: this.userId }
        const {
          data: { data },
        } = await profile(UserId);
        this.userProfilePhoto = data.photo
        this.userGender = data.gender
      } catch (err) {
        console.error(err)
      }
    }
  }
});
