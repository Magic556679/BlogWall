import{A as B,u as y,d as P,b as v,e as z,o as a,c,F as x,f as A,g as i,h as e,t as _,n as E,i as K,j as M,w as $,v as S,k as L,l as N,a as C}from"./index-a018d2c7.js";import{p as k,_ as F}from"./Aside.vue_vue_type_script_setup_true_lang-23591712.js";import{c as I,A as T,a as q,f as G}from"./post-4c274bdb.js";let H=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((o,r)=>(r&=63,r<36?o+=r.toString(36):r<62?o+=(r-26).toString(36).toUpperCase():r>62?o+="-":o+="_",o),"");const w=n=>{var o;console.log(n),n instanceof B&&((o=n.response)==null?void 0:o.status)===401&&y().model.openModel(),console.error(n)},R={key:0},W={class:"flex"},J=["src"],O={class:"mt-4"},Q=["onClick"],X={key:0,type:"button"},Y={key:1,type:"button"},Z=e("i",{class:"fa-regular fa-heart cursor-pointer mt-5 mr-2"},null,-1),ee=[Z],te={class:"flex mt-4 items-center"},oe=["src"],se=["onUpdate:modelValue"],re=["onClick"],ne=e("span",null,"留言",-1),le=[ne],ae=["src"],ce={key:1,class:"mt-4 p-6 border-2 border-black rounded-lg"},de=e("p",null,"目前尚無動態，新增一則貼文吧！",-1),ue=[de],ie=P({__name:"StoryWall",props:{data:{type:Array,required:!0}},emits:["getAllPosts"],setup(n,{emit:o}){const r=n,d=y().user,h=v(()=>r.data.map(s=>({...s,uuid:H()}))),p=s=>s.split("T")[0],m=v(()=>d.checkLogin),f=s=>s.includes(d.userId);let b=z([]);const D=async(s,l)=>{try{const t=b[s],g={postId:l,comment:t,user:d.userId};await I(g),b=[],o("getAllPosts")}catch(t){w(t)}},U=(s,l)=>{f(l)?j(s):V(s)},V=async s=>{try{await T({postId:s}),o("getAllPosts")}catch(l){w(l)}},j=async s=>{try{await q({postId:s}),o("getAllPosts")}catch(l){w(l)}};return(s,l)=>n.data.length!==0?(a(),c("div",R,[(a(!0),c(x,null,A(i(h),(t,g)=>(a(),c("div",{key:t.uuid,class:"mt-4 p-6 border-2 border-black rounded-lg"},[e("section",W,[e("img",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full",src:t.user.photo||i(k),alt:"posterLogo"},null,8,J),e("div",null,[e("p",null,_(t.user.name),1),e("span",null,_(p(t.createAt)),1)])]),e("section",O,[e("p",null,_(t.content),1),t.image?(a(),c("div",{key:0,class:"mt-4 w-full h-52 bg-cover bg-center",style:E({backgroundImage:`url(${t.image})`})},null,4)):K("",!0),e("span",{onClick:u=>U(t._id,t.likes)},[i(m)?(a(),c("button",X,[e("i",{class:M(["fa-regular fa-heart cursor-pointer mt-5 mr-2",{"text-red-500":f(t.likes)}])},null,2)])):(a(),c("button",Y,ee))],8,Q),e("span",null,_(t.likes.length||0)+" 個讚",1)]),e("section",te,[e("img",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full",src:i(d).userProfilePhoto?i(d).userProfilePhoto:i(k),alt:"loggedInUserLogo"},null,8,oe),$(e("input",{"onUpdate:modelValue":u=>i(b)[g]=u,type:"text",placeholder:"請留言",class:"h-10 px-4 rounded-l-lg border-l-2 border-t-2 border-b-2 border-black sm:flex-grow min-w-0"},null,8,se),[[S,i(b)[g]]]),e("button",{onClick:u=>D(g,t._id),type:"button",class:"h-10 px-2 rounded-r-lg border-2 border-solid border-black text-white bg-[#03438D] whitespace-nowrap"},le,8,re)]),(a(!0),c(x,null,A(t.comments,u=>(a(),c("section",{key:u._id,class:"flex px-4 py-[18px]"},[e("img",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full",src:u.user.photo||i(k),alt:"commenterLogo"},null,8,ae),e("div",null,[e("div",null,[e("p",null,_(u.user.name),1),e("span",null,_(p(u.createdAt)),1)]),e("div",null,[e("p",null,_(u.comment),1)])])]))),128))]))),128))])):(a(),c("div",ce,ue))}}),pe={class:"flex justify-between sm:mt-12 p-4 sm:p-0"},_e={class:"sm:w-[65%]"},he={class:"flex justify-between"},ge={class:"relative grow"},me=["onKeyup"],fe=e("svg",{class:"w-4 h-4 absolute left-2.5 top-3.5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),ye=P({__name:"Home",setup(n){const o=L([]),r=L(""),d=y().load,h=async()=>{try{d.toggleLoad();const{data:{data:p}}=await G({search:r.value});o.value=p,d.toggleLoad()}catch(p){console.error(p),d.toggleLoad()}};return h(),(p,m)=>(a(),c("div",pe,[e("div",_e,[e("div",he,[e("div",ge,[$(e("input",{"onUpdate:modelValue":m[0]||(m[0]=f=>r.value=f),onKeyup:N(h,["enter"]),type:"text",class:"p-2 pl-8 w-full rounded-lg border-2 border-solid border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent",placeholder:"搜尋文章內容..."},null,40,me),[[S,r.value]]),fe])]),e("main",null,[C(ie,{data:o.value,onGetAllPosts:h},null,8,["data"])])]),C(F)]))}});export{ye as default};
