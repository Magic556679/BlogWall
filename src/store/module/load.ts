// popupStore.js
import { defineStore } from 'pinia';

export const useModelStore = defineStore({
  id: 'load',
  state: () => ({
    isLoading: false,
  }),
  actions: {
    toggleLoad() {
      this.isLoading = !this.isLoading;
    },
    // closeModel() {
    //   this.isLoading = false;
    // },
  },
});

export default useModelStore;
