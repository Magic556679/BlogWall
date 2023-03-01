import service from '@/services/api/axios';

interface LoginData {
  email: string;
  password: string;
}

export function login(data:LoginData) {
  return service({
    url: 'users/login',
    method: 'post',
    data
  });
}
