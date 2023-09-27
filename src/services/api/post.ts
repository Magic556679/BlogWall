import service from '@/services/api/axios';

interface SearchContent {
  search: string;
}
export function fetchAllPosts(data: SearchContent) {
  return service({
    url: 'posts',
    method: 'get',
    params: data,
  });
}

interface CreatePostData {
  image: string;
  content: string;
  user: string;
}

export function createPosts(data: CreatePostData) {
  return service({
    url: 'posts',
    method: 'post',
    data,
  });
}

interface createCommentData {
  postId: string;
  comment: string;
  user: string;
}

export function createComment(data: createCommentData) {
  return service({
    url: `posts/${data.postId}/comment`,
    method: 'post',
    data,
  });
}

interface addLikeData {
  postId: string;
}

export function ApiAddLike(data: addLikeData) {
  return service({
    url: `posts/${data.postId}/like`,
    method: 'post',
  });
}

export function ApiUnLike(data: addLikeData) {
  return service({
    url: `posts/${data.postId}/like`,
    method: 'delete',
    data,
  });
}
