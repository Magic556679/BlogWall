import{d as b,u as f,k as m,m as g,o as n,c as i,g as l,h as e,t as k,j as x,p as _,q as w}from"./index-f45917a3.js";const v="/BlogWall/assets/userDefault-e9409870.jpg",y={key:0},C={class:"flex items-center mt-6"},$=["src"],D=e("div",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full flex justify-center items-center"},[e("i",{class:"fa-solid fa-house"})],-1),P=e("p",null,"首頁",-1),j=[D,P],B=e("div",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block relative"},[e("i",{class:"fa-solid fa-pen-to-square text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"})],-1),I=e("p",null,"修改個人資料",-1),L=[B,I],T=e("div",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full flex justify-center items-center"},[e("i",{class:"fa-solid fa-arrow-right-from-bracket"})],-1),S=e("p",null,"登出",-1),U=[T,S],q={key:1},J=b({__name:"Aside",props:{width:{type:String,default:"sm:w-[30%]"}},setup(d){const a=d,u=_(),c=w(),o=f().user;o.getProfile();const p=m(["/user","/posts"]);g(()=>{const t=c.path,s=o.userLoggedIn;p.value.includes(t)&&!s&&u.push({path:"/"})});const h=()=>{o.userLoggedIn=!1,document.cookie="id_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"};return(t,s)=>(n(),i("div",{class:x([a.width,"hidden sm:block px-5 py-8 h-full border-2 rounded-lg border-black"])},[l(o).userLoggedIn?(n(),i("div",y,[e("button",{type:"button",class:"w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl",onClick:s[0]||(s[0]=r=>t.$router.push({path:"posts"}))}," 張貼動態 "),e("div",C,[e("img",{class:"w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block",src:l(o).userProfilePhoto||l(v),alt:""},null,8,$),e("p",null,k(l(o).userName),1)]),e("div",{class:"flex items-center mt-6 cursor-pointer",onClick:s[1]||(s[1]=r=>t.$router.push({path:"/"}))},j),e("div",{class:"flex items-center mt-6 cursor-pointer",onClick:s[2]||(s[2]=r=>t.$router.push({path:"user"}))},L),e("div",{class:"flex items-center mt-6 cursor-pointer",onClick:h},U)])):(n(),i("div",q,[e("button",{class:"w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl",onClick:s[3]||(s[3]=r=>t.$router.push({path:"login"}))}," 登入 "),e("button",{class:"w-full mt-2 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl",onClick:s[4]||(s[4]=r=>t.$router.push({path:"login/register"}))}," 註冊 ")]))],2))}});export{J as _,v as p};
