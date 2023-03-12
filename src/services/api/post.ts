import service from '@/services/api/axios';

export function fetchAllPosts() {
  return service({
    url: 'posts',
    method: 'get'
  });
}