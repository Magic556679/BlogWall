import useUserStore from './module/user';
import useModelStore from './module/model';
import useLoadStore from './module/load';

export default function useStore() {
  return {
    user: useUserStore(),
    model: useModelStore(),
    load: useLoadStore(),
  };
}
