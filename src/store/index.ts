import { defineStore } from 'pinia';
import { profile } from '@/services/api/user';
import { getUserId } from '@/utils/checkLogin';

interface UserInfo {
  userName: string;
  userId: string;
  userProfilePhoto: string;
  userGender: string;
}

export const useMainStore = defineStore({
  id: 'user',
  state: (): UserInfo => ({
    userName: '',
    userId: '',
    userProfilePhoto: '',
    userGender: '',
  }),
  actions: {
    async getProfile() {
      try {
        if (getUserId()) {
          const params = { id: getUserId() };
          const {
            data: { data },
          } = await profile(params);
          this.userName = data.name;
          this.userId = data._id;
          this.userProfilePhoto = data.photo;
          this.userGender = data.gender;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
});
