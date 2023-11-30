import { defineStore } from 'pinia';

export const useLoadStore = defineStore('load', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    toggleLoad() {
      this.isLoading = !this.isLoading;
    },
  },
});
