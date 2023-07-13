import service from '@/services/api/axios';

export function fetchAllPosts() {
  return service({
    url: 'posts',
    method: 'get'
  });
}

interface CreatePostData {
  image: string;
  content: string;
  user: string;
};

export function createPosts(data: CreatePostData) {
  return service({
    url: 'posts',
    method: 'post',
    data
  });
}