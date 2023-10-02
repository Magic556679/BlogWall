import { AxiosError } from 'axios';
import useStore from '@/store/index';

const unLoginError = (err: Error) => {
  if (
    err instanceof AxiosError &&
    err.response?.data.error.statusCode === 401
  ) {
    useStore().model.openModel();
  }
  console.error(err);
};

export default unLoginError;
