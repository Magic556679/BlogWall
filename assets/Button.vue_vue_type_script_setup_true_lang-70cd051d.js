import{s as a,d as r,b as l,o as n,c as d,z as u,j as p,g as c}from"./index-f45917a3.js";function b(e){return a({url:"upload",method:"post",data:e})}const m=r({__name:"Button",props:{size:{type:String,default:"w-full"},bgColor:{type:String,default:"bg-[#03438D]"},shadow:{type:Boolean,default:!1}},setup(e){const o=e,t=l(()=>[o.size,o.bgColor,o.shadow?"shadow-3xl":""]);return(s,i)=>(n(),d("button",{class:p([c(t),"py-4 border-2 border-solid border-black rounded-lg text-white"]),type:"button"},[u(s.$slots,"default")],2))}});export{m as _,b as u};
