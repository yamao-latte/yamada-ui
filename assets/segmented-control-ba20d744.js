import{j as y,a as M}from"./jsx-runtime-29545a09.js";import{u as Z}from"./index-fbad4289.js";import{c as ee}from"./index-8815662f.js";import{t as te}from"./index-c09023fc.js";import{u as se}from"./index-4843b127.js";import{r as s}from"./index-76fb7be0.js";import{o as ne,c as ae,y as B,w as N,v as A,s as oe,d as k,e as W}from"./factory-3e6420ff.js";import{f as X}from"./forward-ref-8b7d2a6f.js";import{a as le}from"./use-component-style-fb710021.js";import{o as re,a as h,d as x}from"./theme-f3d0af46.js";const{DescendantsContextProvider:ie,useDescendants:ce,useDescendant:de}=ee(),[ue,fe]=ne({strict:!1,name:"SegmentedControlContext"}),Se=X((V,_)=>{const[p,R]=le("SegmentedControl",V);let{className:S,id:d,name:g,isReadOnly:r,isDisabled:n,children:w,...i}=re(R);d=d??s.useId(),g=g??`segmented-control-${s.useId()}`,i.onChange=ae(i.onChange);const C=ce(),[f,v]=s.useState(-1),[P,I]=s.useState(!1),[b,Y]=se(),F=s.useRef(null),O=s.useRef(new Map),[$,q]=s.useState({width:0,height:0,x:0,y:0}),[m,D]=Z({value:i.value,defaultValue:i.defaultValue,onChange:i.onChange});s.useEffect(()=>te(I),[]),s.useEffect(()=>{const e=O.current.get(m);if(!e||!F.current||!b.current)return;const{paddingLeft:t,paddingTop:c}=getComputedStyle(F.current),l=parseFloat(t)||0,a=parseFloat(c)||0;let{width:o,height:u}=e.getBoundingClientRect();const j=e.offsetLeft-l,U=e.offsetTop-a;o=o*(e.offsetWidth/o)||0,u=u*(e.offsetWidth/o)||0,q({width:o,height:u,x:j,y:U})},[f,Y,O,b,m]);const L=s.useCallback(e=>{if(n||r){e.preventDefault();return}D(e.target.value)},[n,r,D]),z=s.useCallback((e,t)=>{if(!n)if(t){const c=C.enabledNextValue(e);c&&v(c.index)}else v(e)},[C,n]),E=s.useCallback(()=>v(-1),[]),G=s.useCallback((e={},t=null)=>({...B(i,["value","defaultValue","onChange"]),...e,ref:N(F,b,t),id:d,"aria-disabled":h(n),"aria-readonly":h(r),onBlur:A(e.onBlur,E)}),[d,n,r,b,E,i]),H=s.useCallback((e={},t=null)=>{const{width:c,height:l,x:a,y:o}=$;return{...e,ref:t,style:{position:"absolute",zIndex:1,width:c,height:l,transform:`translate(${a}px, ${o}px)`}}},[$]),J=s.useCallback(({index:e,...t}={},c=null)=>{const l=t.disabled??t.isDisabled??n,a=t.readOnly??t.isReadOnly??r,o=t.value===m;return{...B(t,["isDisabled","isReadOnly"]),ref:c,id:`${d}-${e}`,type:"radio",name:g,disabled:l||a,readOnly:a,checked:o,"aria-disabled":h(l),"aria-readonly":h(a),"data-checked":x(o),"data-focus":x(e===f),style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:A(t.onChange,u=>!l&&!a?L(u):{})}},[n,r,m,d,g,f,L]),K=s.useCallback(({index:e,...t}={},c=null)=>{const l=t.disabled??t.isDisabled??n,a=t.readOnly??t.isReadOnly??r,o=t.value===m,u=e===f;return{props:t,ref:N(j=>O.current.set(t.value,j),c),"aria-disabled":h(l),"aria-readonly":h(a),"data-checked":x(o),"data-focus":x(u),"data-focus-visible":x(u&&P),onFocus:A(t.onFocus,()=>z(e,l||a)),...l||a?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},style:{position:"relative",zIndex:2}}},[f,n,P,r,z,m]),Q={position:"relative",display:"inline-flex",alignItems:"center",...p.container},T=oe(w);if(m==null&&i.defaultValue==null)for(const e of T){if(e.type!==me)continue;const t=e.props.value;D(t);break}return y(ie,{value:C,children:y(ue,{value:{getInputProps:J,getLabelProps:K,styles:p},children:M(k.div,{...G({},_),className:W("ui-segmented-control",S),__css:Q,children:[y(k.span,{className:"ui-segmented-control-active",...H(),__css:p.active}),T]})})})}),me=X(({className:V,disabled:_,readOnly:p,isDisabled:R,isReadOnly:S,value:d,onChange:g,children:r,...n},w)=>{const{getInputProps:i,getLabelProps:C,styles:f}=fe(),{index:v,register:P}=de({disabled:R||S}),I={index:v,value:d,onChange:g,disabled:_,readOnly:p,isDisabled:R,isReadOnly:S},b={cursor:"pointer",flex:"1 1 0%",display:"inline-flex",justifyContent:"center",alignItems:"center",...f.button};return M(k.label,{...C(B(I,["onChange"])),className:W("ui-segmented-control-button",V),__css:b,...n,children:[y(k.input,{...i(I,N(P,w))}),y(k.span,{children:r})]})});export{Se as S,me as a};
//# sourceMappingURL=segmented-control-ba20d744.js.map