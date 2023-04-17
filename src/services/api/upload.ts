import service from '@/services/api/axios';

interface formData {
  file: File;
}

export function uploadImage(data: formData) {
  return service({
    url: 'upload',
    method: 'post',
    data,
  });
}
