import { AxiosError } from 'axios';
import { useModelStore } from '@/stores';

const unLoginError = (err: Error) => {
  console.log(err);
  if (err instanceof AxiosError && err.response?.status === 401) {
    const useModel = useModelStore();
    useModel.openModel();
  }
  console.error(err);
};

export default unLoginError;
