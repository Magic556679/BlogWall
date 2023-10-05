import { AxiosError } from 'axios';
import useStore from '@/store/index';

const unLoginError = (err: Error) => {
  console.log(err);
  if (err instanceof AxiosError && err.response?.status === 401) {
    useStore().model.openModel();
  }
  console.error(err);
};

export default unLoginError;
