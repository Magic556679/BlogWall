import useUserStore from './module/user';
import useModelStore from './module/model';

export default function useStore() {
  return {
    user: useUserStore(),
    model: useModelStore(),
  };
}
