import{s}from"./index-a018d2c7.js";function o(t){return s({url:"posts",method:"get",params:t})}function r(t){return s({url:"posts",method:"post",data:t})}function n(t){return s({url:`posts/${t.postId}/comment`,method:"post",data:t})}function p(t){return s({url:`posts/${t.postId}/like`,method:"post"})}function u(t){return s({url:`posts/${t.postId}/like`,method:"delete",data:t})}export{p as A,u as a,r as b,n as c,o as f};