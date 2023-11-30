import { defineStore } from 'pinia';

export const useModelStore = defineStore('model', {
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
