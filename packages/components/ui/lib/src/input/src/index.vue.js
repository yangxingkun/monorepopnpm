"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({name:"SInput"}),a=Object.assign(n,{props:{clearable:{type:Boolean,default:!0},placeholder:{type:String,default:"请输入"}},setup(l){return(t,c)=>{const o=e.resolveComponent("el-input");return e.openBlock(),e.createBlock(o,e.mergeProps(t.$attrs,{placeholder:l.placeholder,clearable:l.clearable}),e.createSlots({_:2},[e.renderList(t.$slots,(s,r)=>({name:r,fn:e.withCtx(()=>[e.renderSlot(t.$slots,r)])}))]),1040,["placeholder","clearable"])}}});exports.default=a;
