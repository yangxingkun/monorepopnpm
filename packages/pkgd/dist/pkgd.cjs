"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function o(t){let e=0;const n=i=>{e=i,t.innerHTML=`count is ${e}`};t.addEventListener("click",()=>n(++e)),n(0)}const r=t=>/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t);exports.isEmail=r;exports.setupCounter=o;
