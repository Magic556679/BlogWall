// popupStore.js
import { defineStore } from 'pinia';

export const useModelStore = defineStore({
  id: 'model',
  state: () => ({
    isLoginModel: false,
  }),
  actions: {
    openModel() {
      this.isLoginModel = true;
    },
    closeModel() {
      this.isLoginModel = false;
    },
  },
});

export default useModelStore;
