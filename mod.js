// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var A=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&g.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,N=_;var P=A,F=function(r){var t,n,e;if(null==r)return N.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[S]=n:delete r[S],e},I=j()?F:P,T=Boolean.prototype.toString;var G=I,V=function(r){try{return T.call(r),!0}catch(r){return!1}},H=j();var x=function(r){return"object"==typeof r&&(r instanceof Boolean||(H?V(r):"[object Boolean]"===G(r)))},B=d,L=x;var M=s,k=function(r){return B(r)||L(r)},W=x;M(k,"isPrimitive",d),M(k,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=k.isPrimitive,Y=function(){return new Function("return this;")()},z=C,D=R,q=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(z)return z;if(D)return D;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=m,rr=Q,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=I;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},fr=ar;var cr=function(r){return null!==r&&"object"==typeof r};s(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(cr));var lr=cr;var vr=I,yr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=vr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},wr=function(r){return mr(r).toLowerCase()},jr=nr()?wr:dr;var _r=function(r){return"function"===jr(r)},hr=_r;var Ar=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&hr(r.next)};var gr=function(r){return"number"==typeof r},Or=Number,Er=Or.prototype.toString;var Ur=I,Sr=Or,Nr=function(r){try{return Er.call(r),!0}catch(r){return!1}},Pr=j();var Fr=function(r){return"object"==typeof r&&(r instanceof Sr||(Pr?Nr(r):"[object Number]"===Ur(r)))},Ir=gr,Tr=Fr;var Gr=s,Vr=function(r){return Ir(r)||Tr(r)},Hr=Fr;Gr(Vr,"isPrimitive",gr),Gr(Vr,"isObject",Hr);var xr=Vr,Br=O;var Lr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Br(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Mr=ar;var kr=function(r){return"object"==typeof r&&null!==r&&!Mr(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=I,Xr=Cr;var Yr=function(r){var t=Xr(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},zr=Wr,Dr=Yr,qr=_r(Object.getPrototypeOf)?zr:Dr;var Jr=kr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),qr(r))},Zr=O,$r=I,rt=Object.prototype;var tt=function(r){var t;return!!Jr(r)&&(!(t=Qr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Kr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Kr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=s,ut=_r,it=Ar,at=xr.isPrimitive,ft=Lr,ct=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ct(o,e)))throw i;return ot(u={},"next",f),ot(u,"return",c),ft&&ut(t[ft])&&ot(u,ft,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ft](),n,o)}},vt=lt,yt=I,pt="function"==typeof Uint32Array;var bt="function"==typeof Uint32Array?Uint32Array:null,st=function(r){return pt&&r instanceof Uint32Array||"[object Uint32Array]"===yt(r)},mt=bt;var dt=function(){var r,t;if("function"!=typeof mt)return!1;try{t=new mt(t=[1,3.14,-3.14,4294967296,4294967297]),r=st(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wt="function"==typeof Uint32Array?Uint32Array:void 0,jt=function(){throw new Error("not implemented")},_t=dt()?wt:jt,ht=I,At="function"==typeof Float64Array;var gt="function"==typeof Float64Array?Float64Array:null,Ot=function(r){return At&&r instanceof Float64Array||"[object Float64Array]"===ht(r)},Et=gt;var Ut=function(){var r,t;if("function"!=typeof Et)return!1;try{t=new Et([1,3.14,-3.14,NaN]),r=Ot(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var St="function"==typeof Float64Array?Float64Array:void 0,Nt=function(){throw new Error("not implemented")},Pt=Ut()?St:Nt,Ft=I,It="function"==typeof Uint8Array;var Tt="function"==typeof Uint8Array?Uint8Array:null,Gt=function(r){return It&&r instanceof Uint8Array||"[object Uint8Array]"===Ft(r)},Vt=Tt;var Ht=function(){var r,t;if("function"!=typeof Vt)return!1;try{t=new Vt(t=[1,3.14,-3.14,256,257]),r=Gt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var xt="function"==typeof Uint8Array?Uint8Array:void 0,Bt=function(){throw new Error("not implemented")},Lt=Ht()?xt:Bt,Mt=I,kt="function"==typeof Uint16Array;var Wt="function"==typeof Uint16Array?Uint16Array:null,Ct=function(r){return kt&&r instanceof Uint16Array||"[object Uint16Array]"===Mt(r)},Rt=Wt;var Xt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,65536,65537]),r=Ct(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Yt,zt="function"==typeof Uint16Array?Uint16Array:void 0,Dt=function(){throw new Error("not implemented")},qt={uint16:Xt()?zt:Dt,uint8:Lt};(Yt=new qt.uint16(1))[0]=4660;var Jt=52===new qt.uint8(Yt.buffer)[0],Kt=_t,Qt=!0===Jt?1:0,Zt=new Pt(1),$t=new Kt(Zt.buffer);var rn=function(r){return Zt[0]=r,$t[Qt]};var tn=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},nn=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var en=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*tn(u),e+=o*o*nn(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},on=-.16666666666666632;var un=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(on+o*n):r-(o*(.5*t-e*n)-t-e*on)},an=_t,fn=!0===Jt?0:1,cn=new Pt(1),ln=new an(cn.buffer);var vn,yn,pn=function(r){return cn[0]=r,ln[fn]};!0===Jt?(vn=1,yn=0):(vn=0,yn=1);var bn=_t,sn={HIGH:vn,LOW:yn},mn=new Pt(1),dn=new bn(mn.buffer),wn=sn.HIGH,jn=sn.LOW;var _n=function(r,t){return dn[wn]=r,dn[jn]=t,mn[0]},hn=_n,An=Math.floor,gn=Number.POSITIVE_INFINITY,On=Or.NEGATIVE_INFINITY;var En=function(r){return r!=r},Un=gn,Sn=On;var Nn,Pn,Fn=function(r){return r===Un||r===Sn};!0===Jt?(Nn=1,Pn=0):(Nn=0,Pn=1);var In=_t,Tn={HIGH:Nn,LOW:Pn},Gn=new Pt(1),Vn=new In(Gn.buffer),Hn=Tn.HIGH,xn=Tn.LOW;var Bn=function(r,t){return Gn[0]=t,r[0]=Vn[Hn],r[1]=Vn[xn],r};var Ln=function(r,t){return 1===arguments.length?Bn([0,0],r):Bn(r,t)},Mn=Ln,kn=rn,Wn=hn,Cn=[0,0];var Rn=Fn,Xn=En,Yn=function(r){return Math.abs(r)};var zn=function(r,t){return Xn(t)||Rn(t)?(r[0]=t,r[1]=0,r):0!==t&&Yn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Dn=rn;var qn=function(r){var t=Dn(r);return(t=(2146435072&t)>>>20)-1023|0},Jn=gn,Kn=On,Qn=En,Zn=Fn,$n=function(r,t){var n,e;return Mn(Cn,r),n=Cn[0],n&=2147483647,e=kn(t),Wn(n|=e&=2147483648,Cn[1])},re=function(r,t){return 1===arguments.length?zn([0,0],r):zn(r,t)},te=qn,ne=Ln,ee=hn,oe=[0,0],ue=[0,0];var ie=function(r,t){var n,e;return 0===t||0===r||Qn(r)||Zn(r)?r:(re(oe,r),t+=oe[1],(t+=te(r=oe[0]))<-1074?$n(0,r):t>1023?r<0?Kn:Jn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ne(ue,r),n=ue[0],n&=2148532223,e*ee(n|=t+1023<<20,ue[1])))};var ae=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var fe=An,ce=ie,le=function(r){return ae(0,r)},ve=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ye=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pe=5.960464477539063e-8,be=le(20),se=le(20),me=le(20),de=le(20);function we(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,b,s,m,d;for(y=u,d=e[n],m=n,p=0;m>0;p++)l=pe*d|0,de[p]=d-16777216*l|0,d=e[m-1]+l,m-=1;if(d=ce(d,o),d-=8*fe(.125*d),d-=s=0|d,v=0,o>0?(s+=p=de[n-1]>>24-o,de[n-1]-=p<<24-o,v=de[n-1]>>23-o):0===o?v=de[n-1]>>23:d>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)m=de[p],0===c?0!==m&&(c=1,de[p]=16777216-m):de[p]=16777215-m;if(o>0)switch(o){case 1:de[n-1]&=8388607;break;case 2:de[n-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=ce(1,o)))}if(0===d){for(m=0,p=n-1;p>=u;p--)m|=de[p];if(0===m){for(b=1;0===de[u-b];b++);for(p=n+1;p<=n+b;p++){for(f[a+p]=ve[i+p],l=0,m=0;m<=a;m++)l+=r[m]*f[a+(p-m)];e[p]=l}return we(r,t,n+=b,e,o,u,i,a,f)}}if(0===d)for(n-=1,o-=24;0===de[n];)n-=1,o-=24;else(d=ce(d,-o))>=16777216?(l=pe*d|0,de[n]=d-16777216*l|0,o+=24,de[n+=1]=l):de[n]=0|d;for(l=ce(1,o),p=n;p>=0;p--)e[p]=l*de[p],l*=pe;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=ye[b]*e[p+b];me[n-p]=l}for(l=0,p=n;p>=0;p--)l+=me[p];for(t[0]=0===v?l:-l,l=me[0]-l,p=1;p<=n;p++)l+=me[p];return t[1]=0===v?l:-l,7&s}var je=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)be[f]=c<0?0:ve[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*be[i+(f-c)];se[f]=o}return 4,we(r,t,4,se,a,4,u,i,be)},_e=Math.round,he=rn;var Ae=rn,ge=pn,Oe=hn,Ee=je,Ue=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=_e(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(he(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(he(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Se=1.5707963267341256,Ne=6077100506506192e-26,Pe=2*Ne,Fe=4*Ne,Ie=[0,0,0],Te=[0,0];var Ge=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Ae(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ue(r,o,t):o<=1073928572?r>0?(f=r-Se,t[0]=f-Ne,t[1]=f-t[0]-Ne,1):(f=r+Se,t[0]=f+Ne,t[1]=f-t[0]+Ne,-1):r>0?(f=r-2*Se,t[0]=f-Pe,t[1]=f-t[0]-Pe,2):(f=r+2*Se,t[0]=f+Pe,t[1]=f-t[0]+Pe,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ue(r,o,t):r>0?(f=r-3*Se,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Se,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Ue(r,o,t):r>0?(f=r-4*Se,t[0]=f-Fe,t[1]=f-t[0]-Fe,4):(f=r+4*Se,t[0]=f+Fe,t[1]=f-t[0]+Fe,-4);if(o<1094263291)return Ue(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=ge(r),f=Oe(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ie[i]=0|f,f=16777216*(f-Ie[i]);for(Ie[2]=f,u=3;0===Ie[u-1];)u-=1;return a=Ee(Ie,Te,e,u),r<0?(t[0]=-Te[0],t[1]=-Te[1],-a):(t[0]=Te[0],t[1]=Te[1],a)},Ve=rn,He=en,xe=un,Be=Ge,Le=[0,0];var Me=function(r){var t;if(t=Ve(r),(t&=2147483647)<=1072243195)return t<1045430272?r:xe(r,0);if(t>=2146435072)return NaN;switch(3&Be(r,Le)){case 0:return xe(Le[0],Le[1]);case 1:return He(Le[0],Le[1]);case 2:return-xe(Le[0],Le[1]);default:return-He(Le[0],Le[1])}};var ke=vt,We=function(r){return 1-Me(r)};var Ce=function(r){return ke(r,We)},Re=Ce;export{Re as default};
//# sourceMappingURL=mod.js.map
