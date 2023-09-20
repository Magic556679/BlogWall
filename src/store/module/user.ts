import { defineStore } from 'pinia';
import { profile } from '@/services/api/user';
import { getUserId } from '@/utils/checkLogin';

interface UserInfo {
  userName: string;
  userId: string;
  userProfilePhoto: string;
  userGender: string;
  userLoggedIn: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserInfo => ({
    userName: '',
    userId: '',
    userProfilePhoto: '',
    userGender: '',
    userLoggedIn: false,
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
          this.userLoggedIn = true;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    checkLogin: (state) => {
      return state.userLoggedIn;
    },
  },
});

export default useUserStore;
