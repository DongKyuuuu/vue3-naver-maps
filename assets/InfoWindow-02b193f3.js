import{c as W,S as N,r,C as v,I as O,p as w,q as k,s as E,_ as I,U as R,V as m,N as _,z as f,R as C}from"./framework-6e2137aa.js";import{N as L}from"./NaverMarker-5d9fed82.js";import{h as g,b as c,i as x,N as y}from"./NaverMap-302c9891.js";import{u as h}from"./useLoad-79562827.js";import{E as B,a as M}from"./app-7682e42d.js";const z=W({__name:"NaverInfoWindow",props:{marker:null,open:{type:Boolean},options:null},emits:[...g,"onLoad"],setup(p,{emit:s}){const u=p,{marker:n,options:i,open:l}=N(u),o=r(),a=r(),e=()=>{if(!c.value)throw new Error(B);if(!o.value)throw new Error(M);l.value?o.value.open(c.value,n.value):o.value.close()},t=()=>{const d=Object.assign({content:a.value??""},(i==null?void 0:i.value)??{});o.value=new window.naver.maps.InfoWindow(d),e(),x(s,o.value),s("onLoad",o.value)};return v(()=>l.value,()=>e(),{immediate:!1}),v(()=>n.value,()=>n.value&&h(t),{immediate:!1}),O(()=>o.value&&o.value.close()),(d,F)=>(w(),k("div",{ref_key:"infoWindowElement",ref:a},[E(d.$slots,"default")],512))}}),D=I(z,[["__file","NaverInfoWindow.vue"]]);const T=C("div",{class:"infowindow-style"},"click Marker!😎",-1),V={__name:"InfoWindow",setup(p){const s=r(),u=r(),n=r(!0),i=a=>{s.value=a},l=a=>{u.value=a},o={latitude:37.51347,longitude:127.041722,zoom:13,zoomControl:!1,zoomControlOptions:{position:"TOP_RIGHT"}};return(a,e)=>(w(),R(f(y),{style:{width:"100%",height:"400px"},mapOptions:o},{default:m(()=>[_(f(L),{onClick:e[0]||(e[0]=t=>n.value=!n.value),latitude:37.51347,longitude:127.041722,onOnLoad:e[1]||(e[1]=t=>i(t))},null,8,["latitude","longitude"]),_(f(D),{marker:s.value,open:n.value,onOnLoad:e[2]||(e[2]=t=>l(t))},{default:m(()=>[T]),_:1},8,["marker","open"])]),_:1}))}},j=I(V,[["__file","InfoWindow.vue"]]);export{j as default};
