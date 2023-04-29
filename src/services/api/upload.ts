import service from '@/services/api/axios';

export function uploadImage(data: FormData) {
  return service({
    url: 'upload',
    method: 'post',
    data,
  });
}