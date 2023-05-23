import service from '@/services/api/axios';

interface LoginData {
  email: string;
  password: string;
}

export function login(data: LoginData) {
  return service({
    url: 'users/login',
    method: 'post',
    data,
  });
}

export function register(data: Record<string, string>) {
  return service({
    url: 'users/register',
    method: 'post',
    data,
  });
}

interface UserId {
  id: string;
}

export function profile({id}: UserId) {
  return service({
    url: 'users/profile',
    method: 'get',
    params: { id },
  });
}

interface UpdateUserProfile {
  gender: string,
  name: string,
  photo: string
}

export function updateProfile(data: UpdateUserProfile) {
  return service({
    url: 'users/profile',
    method: 'patch',
    data
  });
}
