import{d as b,u as f,j as c,o as _,c as v,h as e,w as g,v as x,q as h,a as i,x as w,y}from"./index-94c2bb08.js";import{b as k}from"./post-540b8fc4.js";import{_ as C,u as U}from"./Button.vue_vue_type_script_setup_true_lang-8c97c4be.js";import{_ as $}from"./Aside.vue_vue_type_script_setup_true_lang-4afd41b4.js";const D={class:"flex justify-between sm:mt-12 p-4 sm:p-0"},I={class:"sm:w-[65%]"},V={class:"w-full py-4 rounded-lg border-2 border-solid border-black"},B={class:"mt-3 p-8 rounded-lg border-2 border-solid border-black"},N=e("h3",{class:"text-base"},"貼文內容",-1),S=e("label",{for:"fileUpload",class:"inline-block my-4 px-8 py-4 border-2 border-solid border-black rounded-lg text-white bg-black cursor-pointer"},"上傳圖片",-1),j={class:"text-center"},E=b({__name:"CreatePosts",setup(z){const l=f().user;console.log(l.userId);const r=c(""),a=c(""),u=async()=>{try{const t={image:a.value,content:r.value,user:l.userId};await k(t)}catch(t){console.error(t)}},m=async t=>{var s;try{const o=t.target,n=(s=o==null?void 0:o.files)==null?void 0:s[0];if(!n)return;const d=new FormData;d.append("file",n);const{data:{data:p}}=await U(d);a.value=p.url}catch(o){console.error(o)}};return(t,s)=>(_(),v("div",D,[e("section",I,[e("div",V,[e("h1",{class:"text-xl font-medium text-center",onClick:s[0]||(s[0]=o=>t.$router.push({path:""}))}," 張貼動態 ")]),e("div",B,[N,g(e("textarea",{"onUpdate:modelValue":s[1]||(s[1]=o=>r.value=o),name:"userComment",rows:"4",cols:"50",class:"mt-1 px-4 py-3 w-full rounded-lg border-2 border-solid border-black"},`
        `,512),[[x,r.value]])]),e("div",null,[S,e("input",{id:"fileUpload",ref:"fileUpload",type:"file",class:"hidden",onChange:s[2]||(s[2]=o=>m(o))},null,544)]),e("div",{class:"w-full h-[157px] rounded-lg border-2 border-solid border-black bg-cover bg-center",style:h({backgroundImage:`url(${a.value})`})},null,4),e("div",j,[i(C,{class:"my-4",size:"w-80",onClick:u},{default:w(()=>[y(" 送出貼文 ")]),_:1})])]),i($)]))}});export{E as default};
