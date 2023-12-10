import{s as Pe,e as B,S as mo,d as M,f as j,T as bo,i as A,p as P,k as Q,l as R,n as q,b as ae,j as le,y,U as he,V as _r,x as Xc,A as He,W as Ve,X as yd,c as Dt,u as St,g as It,a as Tt,r as yn,Q as Jr,Y as zi,t as rt,h as it,m as Wn,Z as At,_ as Pn,$ as Z0,v as yi,H as Aa,a0 as xa}from"./scheduler.d26a32f4.js";import{S as Oe,i as $e,g as Mt,a as X,e as jt,t as J,f as qe,c as we,b as ve,m as ye,d as _e}from"./index.3aa1f40d.js";import{B as K0}from"./SecondPagePre.svelte_svelte_type_style_lang.af5db5e2.js";import{_ as _i}from"./preload-helper.a4192956.js";function Lt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function xt(t,e){const n={},r={},i={$$scope:1};let o=t.length;for(;o--;){const s=t[o],a=e[o];if(a){for(const l in s)l in a||(r[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[o]=a}else for(const l in s)i[l]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Pt(t){return typeof t=="object"&&t!==null?t:{}}const Y0={common:{slotEmpty:"插槽内容为空！",loading:"加载中...",noData:"暂无数据",noMoreData:"没有更多数据了",done:"完成"},actionSheet:{cancelText:"取消"},bottomSheet:{title:"标题"},dialog:{title:"提示",content:"内容",primaryText:"确定",secondaryText:"取消"},input:{pleaseInput:"请输入"},modal:{title:"标题",content:"内容",btnText:"我知道了"},navBar:{title:"标题"},pagination:{defaultOnlyOnePage:"只有一页"},picker:{defaultTitle:"请选择",defaultCancel:"取消",defaultConfirm:"确定"},asyncPicker:{defaultTitle:"请选择",defaultCancel:"取消",defaultConfirm:"确定",defaultNext:"下一步",defaultPrev:"上一步",defaultSelected:"已选"},rate:{error1:"value 不能大于 total!",error2:"total 必须能被 1 整除！",error3:"非半选时 value 必须能被 1 整除！",error4:"半选时 value 必须能被 0.5 整除！",error5:"width 或 height 小于 20 会使移动端点击困难！"},timePicker:{defaultTitle:"请选择",defaultCancel:"取消",defaultConfirm:"确定",defaultYear:"年",defaultMonth:"月",defaultDay:"日",defaultHour:"时",defaultMinute:"分",defaultSecond:"秒"},calendar:{weekTextList:["一","二","三","四","五","六","日"],weekSundayStartTextList:["日","一","二","三","四","五","六"],monthTextList:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],confirmText:"确认",selectedText:"已选",dayText:"天",beforeText:"最近",afterText:"未来",currentWeekText:"本周",currentMonthText:"本月",currentQuarterText:"本季度"}};function qp(t){let e,n,r,i,o,s;return{c(){e=B("div"),n=mo("svg"),r=mo("circle"),i=mo("circle"),this.h()},l(a){e=M(a,"DIV",{class:!0});var l=j(e);n=bo(l,"svg",{viewBox:!0,class:!0,style:!0});var c=j(n);r=bo(c,"circle",{cx:!0,cy:!0,r:!0,"stroke-width":!0,fill:!0,class:!0,stroke:!0}),j(r).forEach(A),i=bo(c,"circle",{cx:!0,cy:!0,r:!0,"stroke-width":!0,class:!0,stroke:!0,fill:!0,"stroke-dashoffset":!0,"stroke-dasharray":!0,"stroke-linecap":!0}),j(i).forEach(A),c.forEach(A),l.forEach(A),this.h()},h(){P(r,"cx","12"),P(r,"cy","12"),P(r,"r","10"),P(r,"stroke-width","4"),P(r,"fill","none"),P(r,"class","opacity-5"),P(r,"stroke","currentColor"),P(i,"cx","12"),P(i,"cy","12"),P(i,"r","10"),P(i,"stroke-width","4"),P(i,"class","opacity-80"),P(i,"stroke","currentColor"),P(i,"fill","none"),P(i,"stroke-dashoffset","46.07669455648491"),P(i,"stroke-dasharray","69.11503837897544"),P(i,"stroke-linecap","round"),P(n,"viewBox","0 0 24 24"),P(n,"class",`animate-spin${t[3]()}`),P(n,"style",o=`color: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(e,"class",s=`${t[0]} m-auto`)},m(a,l){Q(a,e,l),R(e,n),R(n,r),R(n,i)},p(a,[l]){l&6&&o!==(o=`color: ${a[1][0]};animation-duration: ${1/a[2]}s;-webkit-animation-duration: ${1/a[2]}s;`)&&P(n,"style",o),l&1&&s!==(s=`${a[0]} m-auto`)&&P(e,"class",s)},i:q,o:q,d(a){a&&A(e)}}}function Gp(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" text-dark dark:text-primary":" text-white dark:text-black":r?" text-primary dark:text-dark":" text-black dark:text-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class J0 extends Oe{constructor(e){super(),$e(this,e,Gp,qp,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Zp(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=`${t[0]} m-auto border-2${t[3]()} rounded-full border-t-transparent dark:border-t-transparent animate-spin`),P(e,"style",r=`border-color: ${t[1][0]};border-top-color:transparent;animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=`${i[0]} m-auto border-2${i[3]()} rounded-full border-t-transparent dark:border-t-transparent animate-spin`)&&P(e,"class",n),o&6&&r!==(r=`border-color: ${i[1][0]};border-top-color:transparent;animation-duration: ${1/i[2]}s;-webkit-animation-duration: ${1/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function Kp(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-dark dark:border-primary":" border-white dark:border-black":r?" border-primary dark:border-dark":" border-black dark:border-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Yp extends Oe{constructor(e){super(),$e(this,e,Kp,Zp,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Jp(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=`${t[0]} m-auto border-2 rounded-full animate-spin ${t[3]()}`),P(e,"style",r=`border-color:${t[1][0]+"0D"};border-left-color:${t[1][0]+"FF"};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=`${i[0]} m-auto border-2 rounded-full animate-spin ${i[3]()}`)&&P(e,"class",n),o&6&&r!==(r=`border-color:${i[1][0]+"0D"};border-left-color:${i[1][0]+"FF"};animation-duration: ${1/i[2]}s;-webkit-animation-duration: ${1/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function Xp(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-opacity-5 dark:border-opacity-5 border-dark border-l-dark/[1] dark:border-primary dark:border-l-primary/[1]":" border-opacity-5 dark:border-opacity-5 border-white border-l-white/[1] dark:border-black dark:border-l-black/[1]":r?" border-opacity-5 dark:border-opacity-5 border-primary border-l-primary/[1] dark:border-dark dark:border-l-dark/[1]":" border-opacity-5 dark:border-opacity-5 border-black border-l-black/[1] dark:border-white dark:border-l-white/[1]";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Qp extends Oe{constructor(e){super(),$e(this,e,Xp,Jp,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function eg(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=`${t[0]} m-auto border-2 rounded-full${t[3]()} border-t-transparent border-b-transparent dark:border-t-transparent dark:border-b-transparent animate-spin`),P(e,"style",r=`border-color: ${t[1][0]};border-top-color:transparent;border-bottom-color:transparent;;animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=`${i[0]} m-auto border-2 rounded-full${i[3]()} border-t-transparent border-b-transparent dark:border-t-transparent dark:border-b-transparent animate-spin`)&&P(e,"class",n),o&6&&r!==(r=`border-color: ${i[1][0]};border-top-color:transparent;border-bottom-color:transparent;;animation-duration: ${1/i[2]}s;-webkit-animation-duration: ${1/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function tg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-dark dark:border-primary":" border-white dark:border-black":r?" text-primary dark:text-dark":" text-black dark:text-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class ng extends Oe{constructor(e){super(),$e(this,e,tg,eg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function rg(t){let e,n,r,i,o,s,a;return{c(){e=B("div"),n=B("div"),r=B("div"),i=ae(),o=B("div"),this.h()},l(l){e=M(l,"DIV",{class:!0});var c=j(e);n=M(c,"DIV",{class:!0,style:!0});var u=j(n);r=M(u,"DIV",{class:!0,style:!0}),j(r).forEach(A),i=le(u),o=M(u,"DIV",{class:!0,style:!0}),j(o).forEach(A),u.forEach(A),c.forEach(A),this.h()},h(){P(r,"class",`absolute${t[3]()} border-t-[5px] border-r-[5px] border-l-[5px] border-r-transparent border-l-transparent dark:border-r-transparent dark:border-l-transparent`),y(r,"transform","rotate(225deg)"),y(r,"border-color",t[1][0]),y(r,"border-right-color","transparent"),y(r,"border-left-color","transparent"),P(o,"class",`absolute bottom-0 right-0${t[3]()} border-t-[5px] border-r-[5px] border-l-[5px] border-r-transparent border-l-transparent dark:border-r-transparent dark:border-l-transparent`),y(o,"transform","rotate(45deg)"),y(o,"border-color",t[1][0]),y(o,"border-right-color","transparent"),y(o,"border-left-color","transparent"),P(n,"class",`relative w-[30px] h-[30px] m-auto border-2 rounded-full${t[3]()} border-t-transparent border-b-transparent dark:border-t-transparent dark:border-b-transparent animate-spin`),P(n,"style",s=`border-color: ${t[1][0]};border-top-color:transparent;border-bottom-color:transparent;animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(e,"class",a=`${t[0]} m-auto flex flex-col justify-center`)},m(l,c){Q(l,e,c),R(e,n),R(n,r),R(n,i),R(n,o)},p(l,[c]){c&2&&y(r,"border-color",l[1][0]),c&2&&y(o,"border-color",l[1][0]),c&6&&s!==(s=`border-color: ${l[1][0]};border-top-color:transparent;border-bottom-color:transparent;animation-duration: ${1/l[2]}s;-webkit-animation-duration: ${1/l[2]}s;`)&&P(n,"style",s),c&1&&a!==(a=`${l[0]} m-auto flex flex-col justify-center`)&&P(e,"class",a)},i:q,o:q,d(l){l&&A(e)}}}function ig(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-dark dark:border-primary":" border-white dark:border-black":r?" border-primary dark:border-dark":" border-black dark:border-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class og extends Oe{constructor(e){super(),$e(this,e,ig,rg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function sg(t){let e,n;return{c(){e=B("div"),this.h()},l(r){e=M(r,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto rounded-full${t[3]()}`)+" svelte-1a3d0jf"),y(e,"background",t[1][0]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(r,i){Q(r,e,i)},p(r,[i]){i&1&&n!==(n=he(`${r[0]} m-auto rounded-full${r[3]()}`)+" svelte-1a3d0jf")&&P(e,"class",n),i&2&&y(e,"background",r[1][0]),i&4&&y(e,"animation-duration",1/r[2]+"s"),i&4&&y(e,"-webkit-animation-duration",1/r[2]+"s")},i:q,o:q,d(r){r&&A(e)}}}function ag(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class lg extends Oe{constructor(e){super(),$e(this,e,ag,sg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function cg(t){let e,n,r,i,o;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);n=M(a,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(a),i=M(a,"DIV",{class:!0,style:!0}),j(i).forEach(A),a.forEach(A),this.h()},h(){P(n,"class",he(`absolute${t[3]()} w-1/3 h-1/3 rounded-full loading1`)+" svelte-1ttzdnu"),y(n,"background",t[1][0]),y(n,"animation-duration",1.5/t[2]+"s"),y(n,"-webkit-animation-duration",1.5/t[2]+"s"),P(i,"class",he(`absolute${t[3]()} w-1/3 h-1/3 rounded-full loading2`)+" svelte-1ttzdnu"),y(i,"background",t[1][0]),y(i,"animation-duration",1.5/t[2]+"s"),y(i,"-webkit-animation-duration",1.5/t[2]+"s"),P(e,"class",o=he(`relative ${t[0]} m-auto`)+" svelte-1ttzdnu")},m(s,a){Q(s,e,a),R(e,n),R(e,r),R(e,i)},p(s,[a]){a&2&&y(n,"background",s[1][0]),a&4&&y(n,"animation-duration",1.5/s[2]+"s"),a&4&&y(n,"-webkit-animation-duration",1.5/s[2]+"s"),a&2&&y(i,"background",s[1][0]),a&4&&y(i,"animation-duration",1.5/s[2]+"s"),a&4&&y(i,"-webkit-animation-duration",1.5/s[2]+"s"),a&1&&o!==(o=he(`relative ${s[0]} m-auto`)+" svelte-1ttzdnu")&&P(e,"class",o)},i:q,o:q,d(s){s&&A(e)}}}function ug(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class dg extends Oe{constructor(e){super(),$e(this,e,ug,cg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function fg(t){let e,n,r,i,o;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);n=M(a,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(a),i=M(a,"DIV",{class:!0,style:!0}),j(i).forEach(A),a.forEach(A),this.h()},h(){P(n,"class",he(`flex-1${t[3]()} rounded-full w-1/2 h-1/2 loading1`)+" svelte-4l0ze7"),y(n,"background",t[1][0]),y(n,"animation-duration",1/t[2]+"s"),y(n,"-webkit-animation-duration",1/t[2]+"s"),P(i,"class",he(`flex-1${t[3]()} rounded-full w-1/2 h-1/2 loading2`)+" svelte-4l0ze7"),y(i,"background",t[1][0]),y(i,"animation-duration",1/t[2]+"s"),y(i,"-webkit-animation-duration",1/t[2]+"s"),P(e,"class",o=he(`${t[0]} m-auto flex items-center`)+" svelte-4l0ze7")},m(s,a){Q(s,e,a),R(e,n),R(e,r),R(e,i)},p(s,[a]){a&2&&y(n,"background",s[1][0]),a&4&&y(n,"animation-duration",1/s[2]+"s"),a&4&&y(n,"-webkit-animation-duration",1/s[2]+"s"),a&2&&y(i,"background",s[1][0]),a&4&&y(i,"animation-duration",1/s[2]+"s"),a&4&&y(i,"-webkit-animation-duration",1/s[2]+"s"),a&1&&o!==(o=he(`${s[0]} m-auto flex items-center`)+" svelte-4l0ze7")&&P(e,"class",o)},i:q,o:q,d(s){s&&A(e)}}}function hg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class pg extends Oe{constructor(e){super(),$e(this,e,hg,fg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function gg(t){let e,n,r,i,o,s,a;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),this.h()},l(l){e=M(l,"DIV",{class:!0,style:!0});var c=j(e);n=M(c,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(c),i=M(c,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(c),s=M(c,"DIV",{class:!0,style:!0}),j(s).forEach(A),c.forEach(A),this.h()},h(){P(n,"class",he(`${t[3]()} rounded-full w-2 h-2`)+" svelte-14egoiu"),y(n,"background",t[1][0]),P(i,"class",he(`${t[3]()} rounded-full w-2 h-2`)+" svelte-14egoiu"),y(i,"background",t[1][0]),P(s,"class",he(`${t[3]()} rounded-full w-2 h-2`)+" svelte-14egoiu"),y(s,"background",t[1][0]),P(e,"class",a=he(`${t[0]} m-auto flex justify-between items-center loading`)+" svelte-14egoiu"),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(l,c){Q(l,e,c),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s)},p(l,[c]){c&2&&y(n,"background",l[1][0]),c&2&&y(i,"background",l[1][0]),c&2&&y(s,"background",l[1][0]),c&1&&a!==(a=he(`${l[0]} m-auto flex justify-between items-center loading`)+" svelte-14egoiu")&&P(e,"class",a),c&4&&y(e,"animation-duration",1/l[2]+"s"),c&4&&y(e,"-webkit-animation-duration",1/l[2]+"s")},i:q,o:q,d(l){l&&A(e)}}}function mg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class bg extends Oe{constructor(e){super(),$e(this,e,mg,gg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function _d(t,e,n){const r=t.slice();return r[6]=e[n],r}function Cd(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",he(`absolute${t[3]()} w-1/3 h-1/3 rounded-full loading`)+" svelte-qshxeg"),y(e,"animation-delay",t[6]-2+"s"),y(e,"background",t[1][0]),y(e,"animation-duration",1.5/t[2]+"s"),y(e,"-webkit-animation-duration",1.5/t[2]+"s")},m(n,r){Q(n,e,r)},p(n,r){r&2&&y(e,"background",n[1][0]),r&4&&y(e,"animation-duration",1.5/n[2]+"s"),r&4&&y(e,"-webkit-animation-duration",1.5/n[2]+"s")},d(n){n&&A(e)}}}function wg(t){let e,n,r=Lt([0,1,2]),i=[];for(let o=0;o<3;o+=1)i[o]=Cd(_d(t,r,o));return{c(){e=B("div");for(let o=0;o<3;o+=1)i[o].c();this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);for(let a=0;a<3;a+=1)i[a].l(s);s.forEach(A),this.h()},h(){P(e,"class",n=he(`relative ${t[0]} m-auto`)+" svelte-qshxeg")},m(o,s){Q(o,e,s);for(let a=0;a<3;a+=1)i[a]&&i[a].m(e,null)},p(o,[s]){if(s&14){r=Lt([0,1,2]);let a;for(a=0;a<3;a+=1){const l=_d(o,r,a);i[a]?i[a].p(l,s):(i[a]=Cd(l),i[a].c(),i[a].m(e,null))}for(;a<3;a+=1)i[a].d(1)}s&1&&n!==(n=he(`relative ${o[0]} m-auto`)+" svelte-qshxeg")&&P(e,"class",n)},i:q,o:q,d(o){o&&A(e),_r(i,o)}}}function vg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class yg extends Oe{constructor(e){super(),$e(this,e,vg,wg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Ed(t,e,n){const r=t.slice();return r[6]=e[n],r}function kd(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",he(`${t[3]()} rounded-full w-2 h-2 loading`)+" svelte-1wwpnns"),y(e,"animation-delay",(t[6]===1?-.3:0)+"s"),y(e,"background",t[1][0]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(n,r){Q(n,e,r)},p(n,r){r&2&&y(e,"background",n[1][0]),r&4&&y(e,"animation-duration",1/n[2]+"s"),r&4&&y(e,"-webkit-animation-duration",1/n[2]+"s")},d(n){n&&A(e)}}}function _g(t){let e,n,r=Lt([0,1,2]),i=[];for(let o=0;o<3;o+=1)i[o]=kd(Ed(t,r,o));return{c(){e=B("div");for(let o=0;o<3;o+=1)i[o].c();this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);for(let a=0;a<3;a+=1)i[a].l(s);s.forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto flex justify-between items-center`)+" svelte-1wwpnns")},m(o,s){Q(o,e,s);for(let a=0;a<3;a+=1)i[a]&&i[a].m(e,null)},p(o,[s]){if(s&14){r=Lt([0,1,2]);let a;for(a=0;a<3;a+=1){const l=Ed(o,r,a);i[a]?i[a].p(l,s):(i[a]=kd(l),i[a].c(),i[a].m(e,null))}for(;a<3;a+=1)i[a].d(1)}s&1&&n!==(n=he(`${o[0]} m-auto flex justify-between items-center`)+" svelte-1wwpnns")&&P(e,"class",n)},i:q,o:q,d(o){o&&A(e),_r(i,o)}}}function Cg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Eg extends Oe{constructor(e){super(),$e(this,e,Cg,_g,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Dd(t,e,n){const r=t.slice();return r[6]=e[n],r}function Sd(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",he(`absolute -left-1/2 top-1/4${t[3]()} rounded-full w-4 h-4 opacity-60 loading`)+" svelte-15q0c5u"),y(e,"animation-delay",-.5*t[6]+"s, "+-.5*(t[6]+1)+"s"),y(e,"top","calc(5)"),y(e,"background",t[1][0]),y(e,"animation-duration",2.5/t[2]+"s"),y(e,"-webkit-animation-duration",2.5/t[2]+"s")},m(n,r){Q(n,e,r)},p(n,r){r&2&&y(e,"background",n[1][0]),r&4&&y(e,"animation-duration",2.5/n[2]+"s"),r&4&&y(e,"-webkit-animation-duration",2.5/n[2]+"s")},d(n){n&&A(e)}}}function kg(t){let e,n,r=Lt([0,1,2,3,4]),i=[];for(let o=0;o<5;o+=1)i[o]=Sd(Dd(t,r,o));return{c(){e=B("div");for(let o=0;o<5;o+=1)i[o].c();this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);for(let a=0;a<5;a+=1)i[a].l(s);s.forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto relative`)+" svelte-15q0c5u")},m(o,s){Q(o,e,s);for(let a=0;a<5;a+=1)i[a]&&i[a].m(e,null)},p(o,[s]){if(s&14){r=Lt([0,1,2,3,4]);let a;for(a=0;a<5;a+=1){const l=Dd(o,r,a);i[a]?i[a].p(l,s):(i[a]=Sd(l),i[a].c(),i[a].m(e,null))}for(;a<5;a+=1)i[a].d(1)}s&1&&n!==(n=he(`${o[0]} m-auto relative`)+" svelte-15q0c5u")&&P(e,"class",n)},i:q,o:q,d(o){o&&A(e),_r(i,o)}}}function Dg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Sg extends Oe{constructor(e){super(),$e(this,e,Dg,kg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Ig(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class",he(`absolute${t[3]()} rounded-full ball`)+" svelte-102dznn"),y(n,"background",t[1][0]),y(n,"animation-duration",(t[2]>=1?.6/t[2]:.6)+"s"),y(n,"-webkit-animation-duration",(t[2]>=1?.6/t[2]:.6)+"s"),P(i,"class",he(`absolute top-0 right-0${t[3]()} steps step1`)+" svelte-102dznn"),y(i,"background",t[1][0]),y(i,"animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),y(i,"-webkit-animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),P(s,"class",he(`absolute top-0 right-0${t[3]()} steps step2`)+" svelte-102dznn"),y(s,"background",t[1][0]),y(s,"animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),y(s,"-webkit-animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),P(l,"class",he(`absolute top-0 right-0${t[3]()} steps step3`)+" svelte-102dznn"),y(l,"background",t[1][0]),y(l,"animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),y(l,"-webkit-animation-duration",(t[2]>=1?1.8/t[2]:1.8)+"s"),P(e,"class",c=he(`${t[0]} m-auto relative box-border loading`)+" svelte-102dznn")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",(u[2]>=1?.6/u[2]:.6)+"s"),d&4&&y(n,"-webkit-animation-duration",(u[2]>=1?.6/u[2]:.6)+"s"),d&2&&y(i,"background",u[1][0]),d&4&&y(i,"animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&4&&y(i,"-webkit-animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&4&&y(s,"-webkit-animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&2&&y(l,"background",u[1][0]),d&4&&y(l,"animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&4&&y(l,"-webkit-animation-duration",(u[2]>=1?1.8/u[2]:1.8)+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative box-border loading`)+" svelte-102dznn")&&P(e,"class",c)},i:q,o:q,d(u){u&&A(e)}}}function Tg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Ag extends Oe{constructor(e){super(),$e(this,e,Tg,Ig,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function xg(t){let e,n,r,i,o,s;return{c(){e=B("div"),n=B("div"),i=ae(),o=B("div"),this.h()},l(a){e=M(a,"DIV",{class:!0});var l=j(e);n=M(l,"DIV",{class:!0,style:!0}),j(n).forEach(A),i=le(l),o=M(l,"DIV",{class:!0,style:!0}),j(o).forEach(A),l.forEach(A),this.h()},h(){P(n,"class",r=he(`absolute top-1/2 left-1/2 ${t[0]} m-auto border-2 !border-r-transparent !border-l-transparent rounded-full${t[3]()} loading`)+" svelte-1iglopf"),y(n,"border-color",t[1][0]),y(n,"animation-duration",1.5/t[2]+"s"),y(n,"-webkit-animation-duration",1.5/t[2]+"s"),P(o,"class",he(`absolute top-1/2 left-1/2 w-1/2 h-1/2 m-auto border-2 !border-t-transparent !border-b-transparent rounded-full${t[3]()} loading`)+" svelte-1iglopf"),y(o,"animation-direction","reverse"),y(o,"border-color",t[1][0]),y(o,"animation-duration",1.5/t[2]+"s"),y(o,"-webkit-animation-duration",1.5/t[2]+"s"),P(e,"class",s=he(`${t[0]} m-auto relative box-border`)+" svelte-1iglopf")},m(a,l){Q(a,e,l),R(e,n),R(e,i),R(e,o)},p(a,[l]){l&1&&r!==(r=he(`absolute top-1/2 left-1/2 ${a[0]} m-auto border-2 !border-r-transparent !border-l-transparent rounded-full${a[3]()} loading`)+" svelte-1iglopf")&&P(n,"class",r),l&2&&y(n,"border-color",a[1][0]),l&4&&y(n,"animation-duration",1.5/a[2]+"s"),l&4&&y(n,"-webkit-animation-duration",1.5/a[2]+"s"),l&2&&y(o,"border-color",a[1][0]),l&4&&y(o,"animation-duration",1.5/a[2]+"s"),l&4&&y(o,"-webkit-animation-duration",1.5/a[2]+"s"),l&1&&s!==(s=he(`${a[0]} m-auto relative box-border`)+" svelte-1iglopf")&&P(e,"class",s)},i:q,o:q,d(a){a&&A(e)}}}function Pg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-dark dark:border-primary":" border-white dark:border-black":r?" border-primary dark:border-dark":" border-black dark:border-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Og extends Oe{constructor(e){super(),$e(this,e,Pg,xg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function $g(t){let e,n,r,i,o;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);n=M(a,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(a),i=M(a,"DIV",{class:!0,style:!0}),j(i).forEach(A),a.forEach(A),this.h()},h(){P(n,"class",he(`absolute w-full h-full border-2 !border-r-transparent !border-l-transparent rounded-full${t[3]()} loading1`)+" svelte-zrkypm"),y(n,"border-color",t[1][0]),y(n,"animation-duration",1/t[2]+"s"),y(n,"-webkit-animation-duration",1/t[2]+"s"),P(i,"class",he(`absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-full${t[4]()} loading2`)+" svelte-zrkypm"),y(i,"background",t[1][0]),y(i,"animation-duration",1/t[2]+"s"),y(i,"-webkit-animation-duration",1/t[2]+"s"),P(e,"class",o=he(`${t[0]} m-auto relative`)+" svelte-zrkypm")},m(s,a){Q(s,e,a),R(e,n),R(e,r),R(e,i)},p(s,[a]){a&2&&y(n,"border-color",s[1][0]),a&4&&y(n,"animation-duration",1/s[2]+"s"),a&4&&y(n,"-webkit-animation-duration",1/s[2]+"s"),a&2&&y(i,"background",s[1][0]),a&4&&y(i,"animation-duration",1/s[2]+"s"),a&4&&y(i,"-webkit-animation-duration",1/s[2]+"s"),a&1&&o!==(o=he(`${s[0]} m-auto relative`)+" svelte-zrkypm")&&P(e,"class",o)},i:q,o:q,d(s){s&&A(e)}}}function Ng(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" border-dark dark:border-primary":" border-white dark:border-black":r?" border-primary dark:border-dark":" border-black dark:border-white",c=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=u=>{"theme"in u&&n(5,r=u.theme),"inverse"in u&&n(6,i=u.inverse),"size"in u&&n(0,o=u.size),"customColor"in u&&n(1,s=u.customColor),"speed"in u&&n(2,a=u.speed)},[o,s,a,l,c,r,i]}class Rg extends Oe{constructor(e){super(),$e(this,e,Ng,$g,Pe,{theme:5,inverse:6,size:0,customColor:1,speed:2})}}function Bg(t){let e,n,r,i,o,s,a,l,c,u,d,f,h,m,w,_;return{c(){e=B("div"),n=B("div"),i=ae(),o=B("div"),a=ae(),l=B("div"),u=ae(),d=B("div"),h=ae(),m=B("div"),this.h()},l(D){e=M(D,"DIV",{class:!0});var v=j(e);n=M(v,"DIV",{class:!0,style:!0}),j(n).forEach(A),i=le(v),o=M(v,"DIV",{class:!0,style:!0}),j(o).forEach(A),a=le(v),l=M(v,"DIV",{class:!0,style:!0}),j(l).forEach(A),u=le(v),d=M(v,"DIV",{class:!0,style:!0}),j(d).forEach(A),h=le(v),m=M(v,"DIV",{class:!0,style:!0}),j(m).forEach(A),v.forEach(A),this.h()},h(){P(n,"class",he(`absolute${t[3]()} rounded-full w-1/4 h-1/4 top-1/2 loading1`)+" svelte-1k3g5kn"),P(n,"style",r=`left:0;background: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(o,"class",he(`absolute${t[3]()} rounded-full w-1/4 h-1/4 top-1/2 loading2`)+" svelte-1k3g5kn"),P(o,"style",s=`left:25%;background: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(l,"class",he(`absolute${t[3]()} rounded-full w-1/4 h-1/4 top-1/2 loading3`)+" svelte-1k3g5kn"),P(l,"style",c=`left:50%;background: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(d,"class",he(`absolute${t[3]()} rounded-full w-1/4 h-1/4 top-1/2 loading4`)+" svelte-1k3g5kn"),P(d,"style",f=`left:75%;background: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(m,"class",he(`absolute${t[3]()} rounded-full w-1/4 h-1/4 top-1/2 loading5`)+" svelte-1k3g5kn"),P(m,"style",w=`left:100%;background: ${t[1][0]};animation-duration: ${1/t[2]}s;-webkit-animation-duration: ${1/t[2]}s;`),P(e,"class",_=he(`${t[0]} m-auto relative`)+" svelte-1k3g5kn")},m(D,v){Q(D,e,v),R(e,n),R(e,i),R(e,o),R(e,a),R(e,l),R(e,u),R(e,d),R(e,h),R(e,m)},p(D,[v]){v&6&&r!==(r=`left:0;background: ${D[1][0]};animation-duration: ${1/D[2]}s;-webkit-animation-duration: ${1/D[2]}s;`)&&P(n,"style",r),v&6&&s!==(s=`left:25%;background: ${D[1][0]};animation-duration: ${1/D[2]}s;-webkit-animation-duration: ${1/D[2]}s;`)&&P(o,"style",s),v&6&&c!==(c=`left:50%;background: ${D[1][0]};animation-duration: ${1/D[2]}s;-webkit-animation-duration: ${1/D[2]}s;`)&&P(l,"style",c),v&6&&f!==(f=`left:75%;background: ${D[1][0]};animation-duration: ${1/D[2]}s;-webkit-animation-duration: ${1/D[2]}s;`)&&P(d,"style",f),v&6&&w!==(w=`left:100%;background: ${D[1][0]};animation-duration: ${1/D[2]}s;-webkit-animation-duration: ${1/D[2]}s;`)&&P(m,"style",w),v&1&&_!==(_=he(`${D[0]} m-auto relative`)+" svelte-1k3g5kn")&&P(e,"class",_)},i:q,o:q,d(D){D&&A(e)}}}function Mg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class jg extends Oe{constructor(e){super(),$e(this,e,Mg,Bg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Id(t,e,n){const r=t.slice();return r[6]=e[n],r}function Td(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",he(`${t[3]()} rounded-full w-2 h-2 loading`)+" svelte-rf79zy"),y(e,"animation-delay",t[6]*100-300+"ms"),y(e,"background",t[1][0]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(n,r){Q(n,e,r)},p(n,r){r&2&&y(e,"background",n[1][0]),r&4&&y(e,"animation-duration",1/n[2]+"s"),r&4&&y(e,"-webkit-animation-duration",1/n[2]+"s")},d(n){n&&A(e)}}}function Ug(t){let e,n,r=Lt([0,1,2]),i=[];for(let o=0;o<3;o+=1)i[o]=Td(Id(t,r,o));return{c(){e=B("div");for(let o=0;o<3;o+=1)i[o].c();this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);for(let a=0;a<3;a+=1)i[a].l(s);s.forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto flex justify-between items-center`)+" svelte-rf79zy")},m(o,s){Q(o,e,s);for(let a=0;a<3;a+=1)i[a]&&i[a].m(e,null)},p(o,[s]){if(s&14){r=Lt([0,1,2]);let a;for(a=0;a<3;a+=1){const l=Id(o,r,a);i[a]?i[a].p(l,s):(i[a]=Td(l),i[a].c(),i[a].m(e,null))}for(;a<3;a+=1)i[a].d(1)}s&1&&n!==(n=he(`${o[0]} m-auto flex justify-between items-center`)+" svelte-rf79zy")&&P(e,"class",n)},i:q,o:q,d(o){o&&A(e),_r(i,o)}}}function Lg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class zg extends Oe{constructor(e){super(),$e(this,e,Lg,Ug,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Ad(t,e,n){const r=t.slice();return r[6]=e[n],r}function xd(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",he(`${t[3]()} rounded-full w-2 h-2 loading`)+" svelte-1qszeev"),y(e,"animation-delay",t[6]*100-300+"ms"),y(e,"background",t[1][0]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(n,r){Q(n,e,r)},p(n,r){r&2&&y(e,"background",n[1][0]),r&4&&y(e,"animation-duration",1/n[2]+"s"),r&4&&y(e,"-webkit-animation-duration",1/n[2]+"s")},d(n){n&&A(e)}}}function Fg(t){let e,n,r=Lt([0,1,2]),i=[];for(let o=0;o<3;o+=1)i[o]=xd(Ad(t,r,o));return{c(){e=B("div");for(let o=0;o<3;o+=1)i[o].c();this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);for(let a=0;a<3;a+=1)i[a].l(s);s.forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto flex justify-between items-center`)+" svelte-1qszeev")},m(o,s){Q(o,e,s);for(let a=0;a<3;a+=1)i[a]&&i[a].m(e,null)},p(o,[s]){if(s&14){r=Lt([0,1,2]);let a;for(a=0;a<3;a+=1){const l=Ad(o,r,a);i[a]?i[a].p(l,s):(i[a]=xd(l),i[a].c(),i[a].m(e,null))}for(;a<3;a+=1)i[a].d(1)}s&1&&n!==(n=he(`${o[0]} m-auto flex justify-between items-center`)+" svelte-1qszeev")&&P(e,"class",n)},i:q,o:q,d(o){o&&A(e),_r(i,o)}}}function Wg(t,e,n){let{theme:r=!1}=e,{inverse:i=!1}=e,{size:o="w-8 h-8"}=e,{customColor:s=[]}=e,{speed:a=1}=e;const l=()=>i?r?" bg-dark dark:bg-primary":" bg-white dark:bg-black":r?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"theme"in c&&n(4,r=c.theme),"inverse"in c&&n(5,i=c.inverse),"size"in c&&n(0,o=c.size),"customColor"in c&&n(1,s=c.customColor),"speed"in c&&n(2,a=c.speed)},[o,s,a,l,r,i]}class Hg extends Oe{constructor(e){super(),$e(this,e,Wg,Fg,Pe,{theme:4,inverse:5,size:0,customColor:1,speed:2})}}function Vg(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 absolute left-0 top-0 shape1 "+t[3]()+" svelte-1o6q3v"),y(n,"background",t[1][0]),y(n,"animation-duration",.5/t[2]+"s"),y(n,"-webkit-animation-duration",.5/t[2]+"s"),P(i,"class","w-1/3 h-1/3 absolute right-0 top-0 shape2 "+t[3]()+" svelte-1o6q3v"),y(i,"background",t[1][0]),y(i,"animation-duration",.5/t[2]+"s"),y(i,"-webkit-animation-duration",.5/t[2]+"s"),P(s,"class","w-1/3 h-1/3 absolute right-0 bottom-0 shape3 "+t[3]()+" svelte-1o6q3v"),y(s,"background",t[1][0]),y(s,"animation-duration",.5/t[2]+"s"),y(s,"-webkit-animation-duration",.5/t[2]+"s"),P(l,"class","w-1/3 h-1/3 absolute left-0 bottom-0 shape4 "+t[3]()+" svelte-1o6q3v"),y(l,"background",t[1][0]),y(l,"animation-duration",.5/t[2]+"s"),y(l,"-webkit-animation-duration",.5/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.5/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(i,"background",u[1][0]),d&4&&y(i,"animation-duration",.5/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.5/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(l,"background",u[1][0]),d&4&&y(l,"animation-duration",.5/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.5/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")&&P(e,"class",c)},i:q,o:q,d(u){u&&A(e)}}}function qg(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{theme:s=!1}=e,{inverse:a=!1}=e;const l=()=>a?s?" bg-dark dark:bg-primary":" bg-white dark:bg-black":s?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"theme"in c&&n(4,s=c.theme),"inverse"in c&&n(5,a=c.inverse)},[r,i,o,l,s,a]}class Gg extends Oe{constructor(e){super(),$e(this,e,qg,Vg,Pe,{size:0,customColor:1,speed:2,theme:4,inverse:5})}}function Zg(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 rounded-full absolute shape1 "+t[3]()+" svelte-1xnvsmh"),y(n,"background",t[1][0]),y(n,"animation-duration",.8/t[2]+"s"),y(n,"-webkit-animation-duration",.8/t[2]+"s"),P(i,"class","w-1/3 h-1/3 rounded-full absolute shape2 "+t[3]()+" svelte-1xnvsmh"),y(i,"background",t[1][0]),y(i,"animation-duration",.8/t[2]+"s"),y(i,"-webkit-animation-duration",.8/t[2]+"s"),P(s,"class","w-1/3 h-1/3 rounded-full absolute shape3 "+t[3]()+" svelte-1xnvsmh"),y(s,"background",t[1][0]),y(s,"animation-duration",.8/t[2]+"s"),y(s,"-webkit-animation-duration",.8/t[2]+"s"),P(l,"class","w-1/3 h-1/3 rounded-full absolute shape4 "+t[3]()+" svelte-1xnvsmh"),y(l,"background",t[1][0]),y(l,"animation-duration",.8/t[2]+"s"),y(l,"-webkit-animation-duration",.8/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-1xnvsmh"),y(e,"animation-duration",1.6/t[2]+"s"),y(e,"-webkit-animation-duration",1.6/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.8/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(i,"background",u[1][0]),d&4&&y(i,"animation-duration",.8/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.8/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(l,"background",u[1][0]),d&4&&y(l,"animation-duration",.8/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.8/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-1xnvsmh")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.6/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.6/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function Kg(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{theme:s=!1}=e,{inverse:a=!1}=e;const l=()=>a?s?" bg-dark dark:bg-primary":" bg-white dark:bg-black":s?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"theme"in c&&n(4,s=c.theme),"inverse"in c&&n(5,a=c.inverse)},[r,i,o,l,s,a]}class Yg extends Oe{constructor(e){super(),$e(this,e,Kg,Zg,Pe,{size:0,customColor:1,speed:2,theme:4,inverse:5})}}function Jg(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto border-4 rounded-full loading ${t[3]()}`)+" svelte-mahp0b"),P(e,"style",r=`border-color: ${t[1][0]+"0D"} ${t[1][0]+"FF"} ${t[1][0]+"0D"} ${t[1][0]+"FF"};animation-duration: ${2/t[2]}s;-webkit-animation-duration: ${2/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=he(`${i[0]} m-auto border-4 rounded-full loading ${i[3]()}`)+" svelte-mahp0b")&&P(e,"class",n),o&6&&r!==(r=`border-color: ${i[1][0]+"0D"} ${i[1][0]+"FF"} ${i[1][0]+"0D"} ${i[1][0]+"FF"};animation-duration: ${2/i[2]}s;-webkit-animation-duration: ${2/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function Xg(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{theme:s=!1}=e,{inverse:a=!1}=e;const l=()=>a?s?" border-opacity-5 dark:border-opacity-5 border-dark border-l-dark/[1] dark:border-primary dark:border-l-primary/[1] border-r-dark/[1] dark:border-r-primary/[1]":" border-opacity-5 dark:border-opacity-5 border-white border-l-white/[1] dark:border-black dark:border-l-black/[1] border-r-white/[1] dark:border-r-black/[1]":s?" border-opacity-5 dark:border-opacity-5 border-primary dark:border-dark border-l-primary/[1] dark:border-l-dark/[1] border-r-primary/[1] dark:border-r-dark/[1]":" border-opacity-5 dark:border-opacity-5 border-black dark:border-white border-l-black/[1] dark:border-l-white/[1] border-r-black/[1] dark:border-r-white/[1]";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"theme"in c&&n(4,s=c.theme),"inverse"in c&&n(5,a=c.inverse)},[r,i,o,l,s,a]}class Qg extends Oe{constructor(e){super(),$e(this,e,Xg,Jg,Pe,{size:0,customColor:1,speed:2,theme:4,inverse:5})}}function em(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/2 h-1/2 rounded-tl-full absolute shape1 "+t[3]()+" svelte-w5qwgv"),y(n,"background",t[1][0]),y(n,"animation-duration",.6/t[2]+"s"),y(n,"-webkit-animation-duration",.6/t[2]+"s"),P(i,"class","w-1/2 h-1/2 rounded-tr-full absolute shape2 "+t[3]()+" svelte-w5qwgv"),y(i,"background",t[1][0]),y(i,"animation-duration",.6/t[2]+"s"),y(i,"-webkit-animation-duration",.6/t[2]+"s"),P(s,"class","w-1/2 h-1/2 rounded-br-full absolute shape3 "+t[3]()+" svelte-w5qwgv"),y(s,"background",t[1][0]),y(s,"animation-duration",.6/t[2]+"s"),y(s,"-webkit-animation-duration",.6/t[2]+"s"),P(l,"class","w-1/2 h-1/2 rounded-bl-full absolute shape4 "+t[3]()+" svelte-w5qwgv"),y(l,"background",t[1][0]),y(l,"animation-duration",.6/t[2]+"s"),y(l,"-webkit-animation-duration",.6/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-w5qwgv"),y(e,"animation-duration",1.2/t[2]+"s"),y(e,"-webkit-animation-duration",1.2/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.6/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(i,"background",u[1][0]),d&4&&y(i,"animation-duration",.6/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.6/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(l,"background",u[1][0]),d&4&&y(l,"animation-duration",.6/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.6/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-w5qwgv")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.2/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.2/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function tm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{theme:s=!1}=e,{inverse:a=!1}=e;const l=()=>a?s?" bg-dark dark:bg-primary":" bg-white dark:bg-black":s?" bg-primary dark:bg-dark":" bg-black dark:bg-white";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"theme"in c&&n(4,s=c.theme),"inverse"in c&&n(5,a=c.inverse)},[r,i,o,l,s,a]}class nm extends Oe{constructor(e){super(),$e(this,e,tm,em,Pe,{size:0,customColor:1,speed:2,theme:4,inverse:5})}}function rm(t){let e,n,r;return{c(){e=B("div"),n=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0});var o=j(e);n=M(o,"DIV",{class:!0,style:!0}),j(n).forEach(A),o.forEach(A),this.h()},h(){P(n,"class",`w-full h-full border-2 rounded-full${t[4]()}`),y(n,"border-color",t[1][1]&&"transparent"),y(n,"border-left-color",t[1][1]),P(e,"class",r=`${t[0]} m-auto border-2 p-0.5 rounded-full animate-spin${t[3]()}`),y(e,"border-color",t[1][0]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(i,o){Q(i,e,o),R(e,n)},p(i,[o]){o&2&&y(n,"border-color",i[1][1]&&"transparent"),o&2&&y(n,"border-left-color",i[1][1]),o&1&&r!==(r=`${i[0]} m-auto border-2 p-0.5 rounded-full animate-spin${i[3]()}`)&&P(e,"class",r),o&2&&y(e,"border-color",i[1][0]),o&4&&y(e,"animation-duration",1/i[2]+"s"),o&4&&y(e,"-webkit-animation-duration",1/i[2]+"s")},i:q,o:q,d(i){i&&A(e)}}}function im(t,e,n){let{inverse:r=!1}=e,{size:i="w-8 h-8"}=e,{customColor:o=[]}=e,{speed:s=1}=e;const a=()=>r?" border-white/10 dark:border-black/10":" border-black/10 dark:border-white/10",l=()=>r?" border-transparent dark:border-transparent border-l-dark dark:border-l-primary":" border-transparent dark:border-transparent border-l-primary dark:border-l-dark";return t.$$set=c=>{"inverse"in c&&n(5,r=c.inverse),"size"in c&&n(0,i=c.size),"customColor"in c&&n(1,o=c.customColor),"speed"in c&&n(2,s=c.speed)},[i,o,s,a,l,r]}class om extends Oe{constructor(e){super(),$e(this,e,im,rm,Pe,{inverse:5,size:0,customColor:1,speed:2})}}function sm(t){let e,n,r;return{c(){e=B("div"),n=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0});var o=j(e);n=M(o,"DIV",{class:!0,style:!0}),j(n).forEach(A),o.forEach(A),this.h()},h(){P(n,"class",`w-full h-full border-2 rounded-full${t[3]()}`),y(n,"border-color",t[1][0]),P(e,"class",r=`${t[0]} m-auto border-2 p-0.5 rounded-full animate-spin${t[4]()}`),y(e,"border-color",t[1][1]&&"transparent"),y(e,"border-left-color",t[1][1]),y(e,"animation-duration",1/t[2]+"s"),y(e,"-webkit-animation-duration",1/t[2]+"s")},m(i,o){Q(i,e,o),R(e,n)},p(i,[o]){o&2&&y(n,"border-color",i[1][0]),o&1&&r!==(r=`${i[0]} m-auto border-2 p-0.5 rounded-full animate-spin${i[4]()}`)&&P(e,"class",r),o&2&&y(e,"border-color",i[1][1]&&"transparent"),o&2&&y(e,"border-left-color",i[1][1]),o&4&&y(e,"animation-duration",1/i[2]+"s"),o&4&&y(e,"-webkit-animation-duration",1/i[2]+"s")},i:q,o:q,d(i){i&&A(e)}}}function am(t,e,n){let{inverse:r=!1}=e,{size:i="w-8 h-8"}=e,{customColor:o=[]}=e,{speed:s=1}=e;const a=()=>r?" border-white/10 dark:border-black/10":" border-black/10 dark:border-white/10",l=()=>r?" border-transparent dark:border-transparent border-l-dark dark:border-l-primary":" border-transparent dark:border-transparent border-l-primary dark:border-l-dark";return t.$$set=c=>{"inverse"in c&&n(5,r=c.inverse),"size"in c&&n(0,i=c.size),"customColor"in c&&n(1,o=c.customColor),"speed"in c&&n(2,s=c.speed)},[i,o,s,a,l,r]}class lm extends Oe{constructor(e){super(),$e(this,e,am,sm,Pe,{inverse:5,size:0,customColor:1,speed:2})}}function cm(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto border-4 rounded-full loading ${t[4]()}`)+" svelte-mahp0b"),P(e,"style",r=`border-color: ${t[1][0]||(t[3],"")} ${t[1][1]||(t[3],"")} ${t[1][0]||(t[3],"")} ${t[1][1]||(t[3],"")};animation-duration: ${2/t[2]}s;-webkit-animation-duration: ${2/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=he(`${i[0]} m-auto border-4 rounded-full loading ${i[4]()}`)+" svelte-mahp0b")&&P(e,"class",n),o&14&&r!==(r=`border-color: ${i[1][0]||(i[3],"")} ${i[1][1]||(i[3],"")} ${i[1][0]||(i[3],"")} ${i[1][1]||(i[3],"")};animation-duration: ${2/i[2]}s;-webkit-animation-duration: ${2/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function um(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{inverse:s=!1}=e;const a=()=>s?"border-white/5 dark:border-black/5 border-l-dark dark:border-l-primary border-r-dark dark:border-r-primary":"border-black/5 dark:border-white/5 border-l-primary dark:border-l-dark border-r-primary dark:border-r-dark";return t.$$set=l=>{"size"in l&&n(0,r=l.size),"customColor"in l&&n(1,i=l.customColor),"speed"in l&&n(2,o=l.speed),"inverse"in l&&n(3,s=l.inverse)},[r,i,o,s,a]}class dm extends Oe{constructor(e){super(),$e(this,e,um,cm,Pe,{size:0,customColor:1,speed:2,inverse:3})}}function fm(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 absolute left-0 top-0 shape1 "+t[3]()+" svelte-1o6q3v"),y(n,"background",t[1][0]),y(n,"animation-duration",.5/t[2]+"s"),y(n,"-webkit-animation-duration",.5/t[2]+"s"),P(i,"class","w-1/3 h-1/3 absolute right-0 top-0 shape2 "+t[4]()+" svelte-1o6q3v"),y(i,"background",t[1][1]),y(i,"animation-duration",.5/t[2]+"s"),y(i,"-webkit-animation-duration",.5/t[2]+"s"),P(s,"class","w-1/3 h-1/3 absolute right-0 bottom-0 shape3 "+t[3]()+" svelte-1o6q3v"),y(s,"background",t[1][0]),y(s,"animation-duration",.5/t[2]+"s"),y(s,"-webkit-animation-duration",.5/t[2]+"s"),P(l,"class","w-1/3 h-1/3 absolute left-0 bottom-0 shape4 "+t[4]()+" svelte-1o6q3v"),y(l,"background",t[1][1]),y(l,"animation-duration",.5/t[2]+"s"),y(l,"-webkit-animation-duration",.5/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.5/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(i,"background",u[1][1]),d&4&&y(i,"animation-duration",.5/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.5/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(l,"background",u[1][1]),d&4&&y(l,"animation-duration",.5/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.5/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")&&P(e,"class",c)},i:q,o:q,d(u){u&&A(e)}}}function hm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{inverse:s=!1}=e;const a=()=>s?"bg-dark dark:bg-primary":"bg-primary dark:bg-dark",l=()=>s?"bg-white/50 dark:bg-black/50":"bg-black/50 dark:bg-white/50";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"inverse"in c&&n(5,s=c.inverse)},[r,i,o,a,l,s]}class pm extends Oe{constructor(e){super(),$e(this,e,hm,fm,Pe,{size:0,customColor:1,speed:2,inverse:5})}}function gm(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 rounded-full absolute shape1 "+t[3]()+" svelte-1xnvsmh"),y(n,"background",t[1][0]),y(n,"animation-duration",.8/t[2]+"s"),y(n,"-webkit-animation-duration",.8/t[2]+"s"),P(i,"class","w-1/3 h-1/3 rounded-full absolute shape2 "+t[4]()+" svelte-1xnvsmh"),y(i,"background",t[1][1]),y(i,"animation-duration",.8/t[2]+"s"),y(i,"-webkit-animation-duration",.8/t[2]+"s"),P(s,"class","w-1/3 h-1/3 rounded-full absolute shape3 "+t[3]()+" svelte-1xnvsmh"),y(s,"background",t[1][0]),y(s,"animation-duration",.8/t[2]+"s"),y(s,"-webkit-animation-duration",.8/t[2]+"s"),P(l,"class","w-1/3 h-1/3 rounded-full absolute shape4 "+t[4]()+" svelte-1xnvsmh"),y(l,"background",t[1][1]),y(l,"animation-duration",.8/t[2]+"s"),y(l,"-webkit-animation-duration",.8/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-1xnvsmh"),y(e,"animation-duration",1.6/t[2]+"s"),y(e,"-webkit-animation-duration",1.6/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.8/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(i,"background",u[1][1]),d&4&&y(i,"animation-duration",.8/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.8/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(l,"background",u[1][1]),d&4&&y(l,"animation-duration",.8/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.8/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-1xnvsmh")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.6/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.6/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function mm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{inverse:s=!1}=e;const a=()=>s?"bg-dark dark:bg-primary":"bg-primary dark:bg-dark",l=()=>s?"bg-white/50 dark:bg-black/50":"bg-black/50 dark:bg-white/50";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"inverse"in c&&n(5,s=c.inverse)},[r,i,o,a,l,s]}class bm extends Oe{constructor(e){super(),$e(this,e,mm,gm,Pe,{size:0,customColor:1,speed:2,inverse:5})}}function wm(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/2 h-1/2 rounded-tl-full absolute shape1 "+t[3]()+" svelte-w5qwgv"),y(n,"background",t[1][0]),y(n,"animation-duration",.6/t[2]+"s"),y(n,"-webkit-animation-duration",.6/t[2]+"s"),P(i,"class","w-1/2 h-1/2 rounded-tr-full absolute shape2 "+t[4]()+" svelte-w5qwgv"),y(i,"background",t[1][1]),y(i,"animation-duration",.6/t[2]+"s"),y(i,"-webkit-animation-duration",.6/t[2]+"s"),P(s,"class","w-1/2 h-1/2 rounded-br-full absolute shape3 "+t[3]()+" svelte-w5qwgv"),y(s,"background",t[1][0]),y(s,"animation-duration",.6/t[2]+"s"),y(s,"-webkit-animation-duration",.6/t[2]+"s"),P(l,"class","w-1/2 h-1/2 rounded-bl-full absolute shape4 "+t[4]()+" svelte-w5qwgv"),y(l,"background",t[1][1]),y(l,"animation-duration",.6/t[2]+"s"),y(l,"-webkit-animation-duration",.6/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-w5qwgv"),y(e,"animation-duration",1.2/t[2]+"s"),y(e,"-webkit-animation-duration",1.2/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]),d&4&&y(n,"animation-duration",.6/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(i,"background",u[1][1]),d&4&&y(i,"animation-duration",.6/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(s,"background",u[1][0]),d&4&&y(s,"animation-duration",.6/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(l,"background",u[1][1]),d&4&&y(l,"animation-duration",.6/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.6/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-w5qwgv")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.2/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.2/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function vm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e,{inverse:s=!1}=e;const a=()=>s?"bg-dark dark:bg-primary":"bg-primary dark:bg-dark",l=()=>s?"bg-white/50 dark:bg-black/50":"bg-black/50 dark:bg-white/50";return t.$$set=c=>{"size"in c&&n(0,r=c.size),"customColor"in c&&n(1,i=c.customColor),"speed"in c&&n(2,o=c.speed),"inverse"in c&&n(5,s=c.inverse)},[r,i,o,a,l,s]}class ym extends Oe{constructor(e){super(),$e(this,e,vm,wm,Pe,{size:0,customColor:1,speed:2,inverse:5})}}function _m(t){let e,n,r;return{c(){e=B("div"),this.h()},l(i){e=M(i,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=he(`${t[0]} m-auto border-4 rounded-full loading`)+" svelte-mahp0b"),P(e,"style",r=`border-color: ${t[1][0]||"#DA1414"} ${t[1][1]||"#11BB8D"} ${t[1][2]||"#7356BF"} ${t[1][3]||"#FFC043"};animation-duration: ${2/t[2]}s;-webkit-animation-duration: ${2/t[2]}s;`)},m(i,o){Q(i,e,o)},p(i,[o]){o&1&&n!==(n=he(`${i[0]} m-auto border-4 rounded-full loading`)+" svelte-mahp0b")&&P(e,"class",n),o&6&&r!==(r=`border-color: ${i[1][0]||"#DA1414"} ${i[1][1]||"#11BB8D"} ${i[1][2]||"#7356BF"} ${i[1][3]||"#FFC043"};animation-duration: ${2/i[2]}s;-webkit-animation-duration: ${2/i[2]}s;`)&&P(e,"style",r)},i:q,o:q,d(i){i&&A(e)}}}function Cm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e;return t.$$set=s=>{"size"in s&&n(0,r=s.size),"customColor"in s&&n(1,i=s.customColor),"speed"in s&&n(2,o=s.speed)},[r,i,o]}class Em extends Oe{constructor(e){super(),$e(this,e,Cm,_m,Pe,{size:0,customColor:1,speed:2})}}function km(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 absolute left-0 top-0 shape1 svelte-1o6q3v"),y(n,"background",t[1][0]||"#DA1414"),y(n,"animation-duration",.5/t[2]+"s"),y(n,"-webkit-animation-duration",.5/t[2]+"s"),P(i,"class","w-1/3 h-1/3 absolute right-0 top-0 shape2 svelte-1o6q3v"),y(i,"background",t[1][1]||"#11BB8D"),y(i,"animation-duration",.5/t[2]+"s"),y(i,"-webkit-animation-duration",.5/t[2]+"s"),P(s,"class","w-1/3 h-1/3 absolute right-0 bottom-0 shape3 svelte-1o6q3v"),y(s,"background",t[1][2]||"#7356BF"),y(s,"animation-duration",.5/t[2]+"s"),y(s,"-webkit-animation-duration",.5/t[2]+"s"),P(l,"class","w-1/3 h-1/3 absolute left-0 bottom-0 shape4 svelte-1o6q3v"),y(l,"background",t[1][3]||"#FFC043"),y(l,"animation-duration",.5/t[2]+"s"),y(l,"-webkit-animation-duration",.5/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]||"#DA1414"),d&4&&y(n,"animation-duration",.5/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(i,"background",u[1][1]||"#11BB8D"),d&4&&y(i,"animation-duration",.5/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(s,"background",u[1][2]||"#7356BF"),d&4&&y(s,"animation-duration",.5/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.5/u[2]+"s"),d&2&&y(l,"background",u[1][3]||"#FFC043"),d&4&&y(l,"animation-duration",.5/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.5/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative rotate-45`)+" svelte-1o6q3v")&&P(e,"class",c)},i:q,o:q,d(u){u&&A(e)}}}function Dm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e;return t.$$set=s=>{"size"in s&&n(0,r=s.size),"customColor"in s&&n(1,i=s.customColor),"speed"in s&&n(2,o=s.speed)},[r,i,o]}class Sm extends Oe{constructor(e){super(),$e(this,e,Dm,km,Pe,{size:0,customColor:1,speed:2})}}function Im(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/3 h-1/3 rounded-full absolute shape1 svelte-1xnvsmh"),y(n,"background",t[1][0]||"#DA1414"),y(n,"animation-duration",.8/t[2]+"s"),y(n,"-webkit-animation-duration",.8/t[2]+"s"),P(i,"class","w-1/3 h-1/3 rounded-full absolute shape2 svelte-1xnvsmh"),y(i,"background",t[1][1]||"#11BB8D"),y(i,"animation-duration",.8/t[2]+"s"),y(i,"-webkit-animation-duration",.8/t[2]+"s"),P(s,"class","w-1/3 h-1/3 rounded-full absolute shape3 svelte-1xnvsmh"),y(s,"background",t[1][2]||"#7356BF"),y(s,"animation-duration",.8/t[2]+"s"),y(s,"-webkit-animation-duration",.8/t[2]+"s"),P(l,"class","w-1/3 h-1/3 rounded-full absolute shape4 svelte-1xnvsmh"),y(l,"background",t[1][3]||"#FFC043"),y(l,"animation-duration",.8/t[2]+"s"),y(l,"-webkit-animation-duration",.8/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-1xnvsmh"),y(e,"animation-duration",1.6/t[2]+"s"),y(e,"-webkit-animation-duration",1.6/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]||"#DA1414"),d&4&&y(n,"animation-duration",.8/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(i,"background",u[1][1]||"#11BB8D"),d&4&&y(i,"animation-duration",.8/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(s,"background",u[1][2]||"#7356BF"),d&4&&y(s,"animation-duration",.8/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.8/u[2]+"s"),d&2&&y(l,"background",u[1][3]||"#FFC043"),d&4&&y(l,"animation-duration",.8/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.8/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-1xnvsmh")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.6/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.6/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function Tm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e;return t.$$set=s=>{"size"in s&&n(0,r=s.size),"customColor"in s&&n(1,i=s.customColor),"speed"in s&&n(2,o=s.speed)},[r,i,o]}class Am extends Oe{constructor(e){super(),$e(this,e,Tm,Im,Pe,{size:0,customColor:1,speed:2})}}function xm(t){let e,n,r,i,o,s,a,l,c;return{c(){e=B("div"),n=B("div"),r=ae(),i=B("div"),o=ae(),s=B("div"),a=ae(),l=B("div"),this.h()},l(u){e=M(u,"DIV",{class:!0,style:!0});var d=j(e);n=M(d,"DIV",{class:!0,style:!0}),j(n).forEach(A),r=le(d),i=M(d,"DIV",{class:!0,style:!0}),j(i).forEach(A),o=le(d),s=M(d,"DIV",{class:!0,style:!0}),j(s).forEach(A),a=le(d),l=M(d,"DIV",{class:!0,style:!0}),j(l).forEach(A),d.forEach(A),this.h()},h(){P(n,"class","w-1/2 h-1/2 rounded-tl-full absolute shape1 svelte-w5qwgv"),y(n,"background",t[1][0]||"#DA1414"),y(n,"animation-duration",.6/t[2]+"s"),y(n,"-webkit-animation-duration",.6/t[2]+"s"),P(i,"class","w-1/2 h-1/2 rounded-tr-full absolute shape2 svelte-w5qwgv"),y(i,"background",t[1][1]||"#11BB8D"),y(i,"animation-duration",.6/t[2]+"s"),y(i,"-webkit-animation-duration",.6/t[2]+"s"),P(s,"class","w-1/2 h-1/2 rounded-br-full absolute shape3 svelte-w5qwgv"),y(s,"background",t[1][2]||"#7356BF"),y(s,"animation-duration",.6/t[2]+"s"),y(s,"-webkit-animation-duration",.6/t[2]+"s"),P(l,"class","w-1/2 h-1/2 rounded-bl-full absolute shape4 svelte-w5qwgv"),y(l,"background",t[1][3]||"#FFC043"),y(l,"animation-duration",.6/t[2]+"s"),y(l,"-webkit-animation-duration",.6/t[2]+"s"),P(e,"class",c=he(`${t[0]} m-auto relative loading`)+" svelte-w5qwgv"),y(e,"animation-duration",1.2/t[2]+"s"),y(e,"-webkit-animation-duration",1.2/t[2]+"s")},m(u,d){Q(u,e,d),R(e,n),R(e,r),R(e,i),R(e,o),R(e,s),R(e,a),R(e,l)},p(u,[d]){d&2&&y(n,"background",u[1][0]||"#DA1414"),d&4&&y(n,"animation-duration",.6/u[2]+"s"),d&4&&y(n,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(i,"background",u[1][1]||"#11BB8D"),d&4&&y(i,"animation-duration",.6/u[2]+"s"),d&4&&y(i,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(s,"background",u[1][2]||"#7356BF"),d&4&&y(s,"animation-duration",.6/u[2]+"s"),d&4&&y(s,"-webkit-animation-duration",.6/u[2]+"s"),d&2&&y(l,"background",u[1][3]||"#FFC043"),d&4&&y(l,"animation-duration",.6/u[2]+"s"),d&4&&y(l,"-webkit-animation-duration",.6/u[2]+"s"),d&1&&c!==(c=he(`${u[0]} m-auto relative loading`)+" svelte-w5qwgv")&&P(e,"class",c),d&4&&y(e,"animation-duration",1.2/u[2]+"s"),d&4&&y(e,"-webkit-animation-duration",1.2/u[2]+"s")},i:q,o:q,d(u){u&&A(e)}}}function Pm(t,e,n){let{size:r="w-8 h-8"}=e,{customColor:i=[]}=e,{speed:o=1}=e;return t.$$set=s=>{"size"in s&&n(0,r=s.size),"customColor"in s&&n(1,i=s.customColor),"speed"in s&&n(2,o=s.speed)},[r,i,o]}class Om extends Oe{constructor(e){super(),$e(this,e,Pm,xm,Pe,{size:0,customColor:1,speed:2})}}function $m(t){let e,n,r;function i(s){t[42](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new J0({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Nm(t){let e,n,r;function i(s){t[41](s)}let o={size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Om({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Rm(t){let e,n,r;function i(s){t[40](s)}let o={size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Am({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Bm(t){let e,n,r;function i(s){t[39](s)}let o={size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Sm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Mm(t){let e,n,r;function i(s){t[38](s)}let o={size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Em({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function jm(t){let e,n,r;function i(s){t[37](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new ym({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Um(t){let e,n,r;function i(s){t[36](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new bm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Lm(t){let e,n,r;function i(s){t[35](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new pm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function zm(t){let e,n,r;function i(s){t[34](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new dm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Fm(t){let e,n,r;function i(s){t[33](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new lm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Wm(t){let e,n,r;function i(s){t[32](s)}let o={inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new om({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Hm(t){let e,n,r;function i(s){t[31](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new nm({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Vm(t){let e,n,r;function i(s){t[30](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Qg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function qm(t){let e,n,r;function i(s){t[29](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Yg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Gm(t){let e,n,r;function i(s){t[28](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Gg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Zm(t){let e,n,r;function i(s){t[27](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Hg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Km(t){let e,n,r;function i(s){t[26](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new zg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Ym(t){let e,n,r;function i(s){t[25](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new jg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Jm(t){let e,n,r;function i(s){t[24](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Rg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Xm(t){let e,n,r;function i(s){t[23](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Og({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function Qm(t){let e,n,r;function i(s){t[22](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Ag({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function e2(t){let e,n,r;function i(s){t[21](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Sg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function t2(t){let e,n,r;function i(s){t[20](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Eg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function n2(t){let e,n,r;function i(s){t[19](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new yg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function r2(t){let e,n,r;function i(s){t[18](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new bg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function i2(t){let e,n,r;function i(s){t[17](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new pg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function o2(t){let e,n,r;function i(s){t[16](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new dg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function s2(t){let e,n,r;function i(s){t[15](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new lg({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function a2(t){let e,n,r;function i(s){t[14](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new og({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function l2(t){let e,n,r;function i(s){t[13](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new ng({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function c2(t){let e,n,r;function i(s){t[12](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Qp({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function u2(t){let e,n,r;function i(s){t[11](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new Yp({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function d2(t){let e,n,r;function i(s){t[10](s)}let o={theme:t[4],inverse:t[5],size:t[8](t[2],t[3]),customColor:t[6]};return t[0]!==void 0&&(o.speed=t[0]),e=new J0({props:o}),He.push(()=>qe(e,"speed",i)),{c(){we(e.$$.fragment)},l(s){ve(e.$$.fragment,s)},m(s,a){ye(e,s,a),r=!0},p(s,a){const l={};a[0]&16&&(l.theme=s[4]),a[0]&32&&(l.inverse=s[5]),a[0]&12&&(l.size=s[8](s[2],s[3])),a[0]&64&&(l.customColor=s[6]),!n&&a[0]&1&&(n=!0,l.speed=s[0],Ve(()=>n=!1)),e.$set(l)},i(s){r||(J(e.$$.fragment,s),r=!0)},o(s){X(e.$$.fragment,s),r=!1},d(s){_e(e,s)}}}function f2(t){let e,n,r,i;const o=[d2,u2,c2,l2,a2,s2,o2,i2,r2,n2,t2,e2,Qm,Xm,Jm,Ym,Km,Zm,Gm,qm,Vm,Hm,Wm,Fm,zm,Lm,Um,jm,Mm,Bm,Rm,Nm,$m],s=[];function a(l,c){return l[1]==="1_0"?0:l[1]==="1_1"?1:l[1]==="1_2"?2:l[1]==="1_3"?3:l[1]==="1_4"?4:l[1]==="1_5"?5:l[1]==="1_6"?6:l[1]==="1_7"?7:l[1]==="1_8"?8:l[1]==="1_9"?9:l[1]==="1_10"?10:l[1]==="1_11"?11:l[1]==="1_12"?12:l[1]==="1_13"?13:l[1]==="1_14"?14:l[1]==="1_15"?15:l[1]==="1_16"?16:l[1]==="1_17"?17:l[1]==="1_18"?18:l[1]==="1_19"?19:l[1]==="1_20"?20:l[1]==="1_21"?21:l[1]==="2_0"?22:l[1]==="2_1"?23:l[1]==="2_2"?24:l[1]==="2_3"?25:l[1]==="2_4"?26:l[1]==="2_5"?27:l[1]==="4_0"?28:l[1]==="4_1"?29:l[1]==="4_2"?30:l[1]==="4_3"?31:32}return n=a(t),r=s[n]=o[n](t),{c(){e=B("div"),r.c()},l(l){e=M(l,"DIV",{});var c=j(e);r.l(c),c.forEach(A)},m(l,c){Q(l,e,c),s[n].m(e,null),t[43](e),i=!0},p(l,c){let u=n;n=a(l),n===u?s[n].p(l,c):(Mt(),X(s[u],1,1,()=>{s[u]=null}),jt(),r=s[n],r?r.p(l,c):(r=s[n]=o[n](l),r.c()),J(r,1),r.m(e,null))},i(l){i||(J(r),i=!0)},o(l){X(r),i=!1},d(l){l&&A(e),s[n].d(),t[43](null)}}}function h2(t,e,n){let{type:r="1_0"}=e,{height:i="8"}=e,{width:o="8"}=e,{theme:s=!1}=e,{inverse:a=!1}=e,{customColor:l=[]}=e,{lazyAnimation:c=!0}=e,{speed:u=1}=e,d=null;const f={2:"h-2",4:"h-4",6:"h-6",8:"h-8",12:"h-12",16:"h-16",20:"h-20",28:"h-28",36:"h-36",48:"h-48",56:"h-56",64:"h-64",72:"h-72",80:"h-80",96:"h-96",full:"h-full"},h={2:"w-2",4:"w-4",6:"w-6",8:"w-8",12:"w-12",16:"w-16",20:"w-20",28:"w-28",36:"w-36",48:"w-48",56:"w-56",64:"w-64",72:"w-72",80:"w-80",96:"w-96",full:"w-full"},m=(te,$t)=>f[te]+" "+h[$t],w=te=>{var Nt;let $t=[];if((Nt=te==null?void 0:te.children)!=null&&Nt.length)for(let Gt=0;Gt<te.children.length;Gt++)$t.push(te.children[Gt]),$t=$t.concat(w(te.children[Gt]));return $t},_=new IntersectionObserver(te=>{te.forEach($t=>{const Nt=w(d);$t.isIntersecting?Nt.length>0&&Nt.forEach(Gt=>{Gt.style.animationPlayState="running"}):Nt.length>0&&Nt.forEach(Gt=>{Gt.style.animationPlayState="paused"})})});Xc(()=>{c&&_.observe(d)});function D(te){u=te,n(0,u)}function v(te){u=te,n(0,u)}function k(te){u=te,n(0,u)}function C(te){u=te,n(0,u)}function S(te){u=te,n(0,u)}function T(te){u=te,n(0,u)}function p(te){u=te,n(0,u)}function I(te){u=te,n(0,u)}function N(te){u=te,n(0,u)}function L(te){u=te,n(0,u)}function W(te){u=te,n(0,u)}function F(te){u=te,n(0,u)}function pe(te){u=te,n(0,u)}function ee(te){u=te,n(0,u)}function Z(te){u=te,n(0,u)}function H(te){u=te,n(0,u)}function V(te){u=te,n(0,u)}function K(te){u=te,n(0,u)}function ie(te){u=te,n(0,u)}function ne(te){u=te,n(0,u)}function oe(te){u=te,n(0,u)}function ue(te){u=te,n(0,u)}function re(te){u=te,n(0,u)}function Y(te){u=te,n(0,u)}function fe(te){u=te,n(0,u)}function Ce(te){u=te,n(0,u)}function me(te){u=te,n(0,u)}function Ee(te){u=te,n(0,u)}function Te(te){u=te,n(0,u)}function De(te){u=te,n(0,u)}function xe(te){u=te,n(0,u)}function Be(te){u=te,n(0,u)}function Me(te){u=te,n(0,u)}function zt(te){He[te?"unshift":"push"](()=>{d=te,n(7,d)})}return t.$$set=te=>{"type"in te&&n(1,r=te.type),"height"in te&&n(2,i=te.height),"width"in te&&n(3,o=te.width),"theme"in te&&n(4,s=te.theme),"inverse"in te&&n(5,a=te.inverse),"customColor"in te&&n(6,l=te.customColor),"lazyAnimation"in te&&n(9,c=te.lazyAnimation),"speed"in te&&n(0,u=te.speed)},[u,r,i,o,s,a,l,d,m,c,D,v,k,C,S,T,p,I,N,L,W,F,pe,ee,Z,H,V,K,ie,ne,oe,ue,re,Y,fe,Ce,me,Ee,Te,De,xe,Be,Me,zt]}class p2 extends Oe{constructor(e){super(),$e(this,e,h2,f2,Pe,{type:1,height:2,width:3,theme:4,inverse:5,customColor:6,lazyAnimation:9,speed:0},null,[-1,-1])}}function g2(t){let e,n,r;return{c(){e=mo("svg"),n=mo("use"),this.h()},l(i){e=bo(i,"svg",{width:!0,height:!0,style:!0});var o=j(e);n=bo(o,"use",{"xlink:href":!0}),j(n).forEach(A),o.forEach(A),this.h()},h(){yd(n,"xlink:href",r="/"+t[4]+"#"+t[0]),P(e,"width",t[1]),P(e,"height",t[1]),y(e,"fill","currentColor"),y(e,"fill-opacity",t[3]),y(e,"display","inline")},m(i,o){Q(i,e,o),R(e,n)},p(i,o){o&17&&r!==(r="/"+i[4]+"#"+i[0])&&yd(n,"xlink:href",r),o&2&&P(e,"width",i[1]),o&2&&P(e,"height",i[1]),o&8&&y(e,"fill-opacity",i[3])},i:q,o:q,d(i){i&&A(e)}}}function m2(t){let e;const n=t[8].default,r=Dt(n,t,t[7],null),i=r||b2();return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&128)&&St(r,n,o,o[7],e?Tt(n,o[7],s,null):It(o[7]),null)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function b2(t){let e,n="无插槽内容！";return{c(){e=B("span"),e.textContent=n},l(r){e=M(r,"SPAN",{"data-svelte-h":!0}),yn(e)!=="svelte-1lm1ucw"&&(e.textContent=n)},m(r,i){Q(r,e,i)},p:q,d(r){r&&A(e)}}}function w2(t){let e,n,r,i,o;const s=[m2,g2],a=[];function l(c,u){return c[0]==="slot"?0:1}return n=l(t),r=a[n]=s[n](t),{c(){e=B("i"),r.c(),this.h()},l(c){e=M(c,"I",{class:!0,style:!0});var u=j(e);r.l(u),u.forEach(A),this.h()},h(){P(e,"class",i=`cursor-pointer relative ${t[2]?"text-primary dark:text-dark":""} ${t[6]}`),y(e,"top",t[5]+"px")},m(c,u){Q(c,e,u),a[n].m(e,null),o=!0},p(c,[u]){let d=n;n=l(c),n===d?a[n].p(c,u):(Mt(),X(a[d],1,1,()=>{a[d]=null}),jt(),r=a[n],r?r.p(c,u):(r=a[n]=s[n](c),r.c()),J(r,1),r.m(e,null)),(!o||u&68&&i!==(i=`cursor-pointer relative ${c[2]?"text-primary dark:text-dark":""} ${c[6]}`))&&P(e,"class",i),(!o||u&32)&&y(e,"top",c[5]+"px")},i(c){o||(J(r),o=!0)},o(c){X(r),o=!1},d(c){c&&A(e),a[n].d()}}}function v2(t,e,n){let{$$slots:r={},$$scope:i}=e,{name:o=""}=e,{size:s=24}=e,{theme:a=!1}=e,{alpha:l=1}=e,{path:c="fonts/symbol.svg"}=e,{top:u=0}=e,{injClass:d=""}=e;return t.$$set=f=>{"name"in f&&n(0,o=f.name),"size"in f&&n(1,s=f.size),"theme"in f&&n(2,a=f.theme),"alpha"in f&&n(3,l=f.alpha),"path"in f&&n(4,c=f.path),"top"in f&&n(5,u=f.top),"injClass"in f&&n(6,d=f.injClass),"$$scope"in f&&n(7,i=f.$$scope)},[o,s,a,l,c,u,d,i,r]}class Vn extends Oe{constructor(e){super(),$e(this,e,v2,w2,Pe,{name:0,size:1,theme:2,alpha:3,path:4,top:5,injClass:6})}}const y2=t=>({}),Pd=t=>({}),_2=t=>({}),Od=t=>({});function C2(t){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function E2(t){let e,n=t[2][1]+"",r,i,o,s,a=t[2][0]+"",l,c;return{c(){e=B("span"),r=rt(n),o=ae(),s=B("span"),l=rt(a),this.h()},l(u){e=M(u,"SPAN",{class:!0});var d=j(e);r=it(d,n),d.forEach(A),o=le(u),s=M(u,"SPAN",{class:!0});var f=j(s);l=it(f,a),f.forEach(A),this.h()},h(){P(e,"class",i=t[0]?"":"hidden"),P(s,"class",c=t[0]?"hidden":"")},m(u,d){Q(u,e,d),R(e,r),Q(u,o,d),Q(u,s,d),R(s,l)},p(u,d){d&4&&n!==(n=u[2][1]+"")&&Wn(r,n),d&1&&i!==(i=u[0]?"":"hidden")&&P(e,"class",i),d&4&&a!==(a=u[2][0]+"")&&Wn(l,a),d&1&&c!==(c=u[0]?"hidden":"")&&P(s,"class",c)},i:q,o:q,d(u){u&&(A(e),A(o),A(s))}}}function k2(t){let e,n,r,i,o,s;const a=t[11].true,l=Dt(a,t,t[10],Od),c=t[11].false,u=Dt(c,t,t[10],Pd);return{c(){e=B("span"),l&&l.c(),r=ae(),i=B("span"),u&&u.c(),this.h()},l(d){e=M(d,"SPAN",{class:!0});var f=j(e);l&&l.l(f),f.forEach(A),r=le(d),i=M(d,"SPAN",{class:!0});var h=j(i);u&&u.l(h),h.forEach(A),this.h()},h(){P(e,"class",n=t[0]?"":"hidden"),P(i,"class",o=t[0]?"hidden":"")},m(d,f){Q(d,e,f),l&&l.m(e,null),Q(d,r,f),Q(d,i,f),u&&u.m(i,null),s=!0},p(d,f){l&&l.p&&(!s||f&1024)&&St(l,a,d,d[10],s?Tt(a,d[10],f,_2):It(d[10]),Od),(!s||f&1&&n!==(n=d[0]?"":"hidden"))&&P(e,"class",n),u&&u.p&&(!s||f&1024)&&St(u,c,d,d[10],s?Tt(c,d[10],f,y2):It(d[10]),Pd),(!s||f&1&&o!==(o=d[0]?"hidden":""))&&P(i,"class",o)},i(d){s||(J(l,d),J(u,d),s=!0)},o(d){X(l,d),X(u,d),s=!1},d(d){d&&(A(e),A(r),A(i)),l&&l.d(d),u&&u.d(d)}}}function D2(t){let e,n,r;const i=[t[5],{width:"full"},{height:"full"}];let o={};for(let s=0;s<i.length;s+=1)o=At(o,i[s]);return n=new p2({props:o}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);ve(n.$$.fragment,a),a.forEach(A),this.h()},h(){P(e,"class","m-0.5")},m(s,a){Q(s,e,a),ye(n,e,null),r=!0},p(s,a){const l=a&32?xt(i,[Pt(s[5]),i[1],i[2]]):{};n.$set(l)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){X(n.$$.fragment,s),r=!1},d(s){s&&A(e),_e(n)}}}function S2(t){let e,n='<div class="bg-black/80 dark:bg-white/90 w-1 h-3 mt-1 ml-2 rounded-full"></div>',r,i,o='<div class="w-3 h-3 mt-1 ml-1 border-2 border-black/80 dark:border-white/90 rounded-full"></div>';return{c(){e=B("span"),e.innerHTML=n,r=ae(),i=B("span"),i.innerHTML=o,this.h()},l(s){e=M(s,"SPAN",{"data-svelte-h":!0}),yn(e)!=="svelte-3s64af"&&(e.innerHTML=n),r=le(s),i=M(s,"SPAN",{"data-svelte-h":!0}),yn(i)!=="svelte-1ruobf2"&&(i.innerHTML=o),this.h()},h(){Pn(e,"hidden",!t[0]),Pn(i,"hidden",t[0])},m(s,a){Q(s,e,a),Q(s,r,a),Q(s,i,a)},p(s,a){a&1&&Pn(e,"hidden",!s[0]),a&1&&Pn(i,"hidden",s[0])},i:q,o:q,d(s){s&&(A(e),A(r),A(i))}}}function I2(t){let e,n,r,i,o,s,a,l,c,u;const d=[S2,D2,k2,E2,C2],f=[];function h(m,w){return w&4&&(r=null),m[2]==="state"?0:m[2]==="loading"?1:m[2]==="slot"?2:(r==null&&(r=!!(Array.isArray(m[2])&&m[2].length!==0)),r?3:4)}return i=h(t,-1),o=f[i]=d[i](t),{c(){e=B("div"),n=B("div"),o.c(),this.h()},l(m){e=M(m,"DIV",{class:!0});var w=j(e);n=M(w,"DIV",{class:!0,style:!0});var _=j(n);o.l(_),_.forEach(A),w.forEach(A),this.h()},h(){P(n,"class",s="bg-white dark:bg-black absolute w-5 h-5 leading-5 top-0.5 transition-all duration-300 text-xs text-center text-black/80 dark:text-white/90 "+(t[7][t[1]]||t[7].base)),y(n,"left",t[0]?"1.625rem":"0.125rem"),y(n,"transform",t[6]?"scaleX(1.3)":"scaleX(1)"),P(e,"class",a="flex justify-around w-12 h-6 relative transition-all duration-500 active:opacity-80 "+(t[7][t[1]]||t[7].base)+" "+(t[0]?`bg-primary dark:bg-dark ${t[3]}`:"bg-black/10 dark:bg-white/20")+" "+(t[4]?"cursor-not-allowed opacity-50":"cursor-pointer"))},m(m,w){Q(m,e,w),R(e,n),f[i].m(n,null),l=!0,c||(u=Jr(e,"click",t[8]),c=!0)},p(m,[w]){let _=i;i=h(m,w),i===_?f[i].p(m,w):(Mt(),X(f[_],1,1,()=>{f[_]=null}),jt(),o=f[i],o?o.p(m,w):(o=f[i]=d[i](m),o.c()),J(o,1),o.m(n,null)),(!l||w&2&&s!==(s="bg-white dark:bg-black absolute w-5 h-5 leading-5 top-0.5 transition-all duration-300 text-xs text-center text-black/80 dark:text-white/90 "+(m[7][m[1]]||m[7].base)))&&P(n,"class",s),(!l||w&1)&&y(n,"left",m[0]?"1.625rem":"0.125rem"),(!l||w&64)&&y(n,"transform",m[6]?"scaleX(1.3)":"scaleX(1)"),(!l||w&27&&a!==(a="flex justify-around w-12 h-6 relative transition-all duration-500 active:opacity-80 "+(m[7][m[1]]||m[7].base)+" "+(m[0]?`bg-primary dark:bg-dark ${m[3]}`:"bg-black/10 dark:bg-white/20")+" "+(m[4]?"cursor-not-allowed opacity-50":"cursor-pointer")))&&P(e,"class",a)},i(m){l||(J(o),l=!0)},o(m){X(o),l=!1},d(m){m&&A(e),f[i].d(),c=!1,u()}}}function T2(t,e,n){let{$$slots:r={},$$scope:i}=e,{check:o=!1}=e,{radius:s="base"}=e,{inside:a=[]}=e,{injClass:l=""}=e,{disabled:c=!1}=e,{async:u=!1}=e,{loading:d={}}=e,f=!1;const h={none:"rounded-none",base:"rounded",full:"rounded-full"},m=zi(),w=()=>{c||(u||(n(0,o=!o),m("change",o)),m("click"))};return t.$$set=_=>{"check"in _&&n(0,o=_.check),"radius"in _&&n(1,s=_.radius),"inside"in _&&n(2,a=_.inside),"injClass"in _&&n(3,l=_.injClass),"disabled"in _&&n(4,c=_.disabled),"async"in _&&n(9,u=_.async),"loading"in _&&n(5,d=_.loading),"$$scope"in _&&n(10,i=_.$$scope)},t.$$.update=()=>{t.$$.dirty&17&&(c||(n(0,o),n(4,c),n(6,f=!0),setTimeout(()=>{n(6,f=!1)},150)))},[o,s,a,l,c,d,f,h,w,u,i,r]}class A2 extends Oe{constructor(e){super(),$e(this,e,T2,I2,Pe,{check:0,radius:1,inside:2,injClass:3,disabled:4,async:9,loading:5})}}const x2=t=>({}),$d=t=>({}),P2=t=>({}),Nd=t=>({}),O2=t=>({}),Rd=t=>({});function $2(t){let e,n,r;const i=[t[4]];let o={};for(let s=0;s<i.length;s+=1)o=At(o,i[s]);return n=new Vn({props:o}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);ve(n.$$.fragment,a),a.forEach(A),this.h()},h(){P(e,"class","mr-1 flex flex-col justify-center")},m(s,a){Q(s,e,a),ye(n,e,null),r=!0},p(s,a){const l=a&16?xt(i,[Pt(s[4])]):{};n.$set(l)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){X(n.$$.fragment,s),r=!1},d(s){s&&A(e),_e(n)}}}function N2(t){let e;const n=t[22].left,r=Dt(n,t,t[21],Rd),i=r||B2(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&2097152)&&St(r,n,o,o[21],e?Tt(n,o[21],s,O2):It(o[21]),Rd)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function R2(t){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function B2(t){let e=t[15].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function M2(t){let e,n;return{c(){e=B("div"),n=rt(t[2]),this.h()},l(r){e=M(r,"DIV",{class:!0});var i=j(e);n=it(i,t[2]),i.forEach(A),this.h()},h(){P(e,"class","text-gray-700 dark:text-gray-300")},m(r,i){Q(r,e,i),R(e,n)},p(r,i){i&4&&Wn(n,r[2])},i:q,o:q,d(r){r&&A(e)}}}function j2(t){let e;const n=t[22].detail,r=Dt(n,t,t[21],Nd),i=r||U2(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&2097152)&&St(r,n,o,o[21],e?Tt(n,o[21],s,P2):It(o[21]),Nd)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function U2(t){let e=t[15].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function L2(t){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function z2(t){let e;const n=t[22].right,r=Dt(n,t,t[21],$d),i=r||q2(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&2097152)&&St(r,n,o,o[21],e?Tt(n,o[21],s,x2):It(o[21]),$d)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function F2(t){let e,n,r;const i=[t[3]];let o={};for(let s=0;s<i.length;s+=1)o=At(o,i[s]);return n=new Vn({props:o}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);ve(n.$$.fragment,a),a.forEach(A),this.h()},h(){P(e,"class","ml-1 flex flex-col justify-center")},m(s,a){Q(s,e,a),ye(n,e,null),r=!0},p(s,a){const l=a&8?xt(i,[Pt(s[3])]):{};n.$set(l)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){X(n.$$.fragment,s),r=!1},d(s){s&&A(e),_e(n)}}}function W2(t){let e,n,r;const i=[{check:t[0]},t[3].switch];let o={};for(let s=0;s<i.length;s+=1)o=At(o,i[s]);return n=new A2({props:o}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);ve(n.$$.fragment,a),a.forEach(A),this.h()},h(){P(e,"class","ml-1 flex flex-col justify-center")},m(s,a){Q(s,e,a),ye(n,e,null),r=!0},p(s,a){const l=a&9?xt(i,[a&1&&{check:s[0]},a&8&&Pt(s[3].switch)]):{};n.$set(l)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){X(n.$$.fragment,s),r=!1},d(s){s&&A(e),_e(n)}}}function H2(t){let e,n,r;return n=new Vn({props:{name:"ri-arrow-right-s-line",size:t[13]?26:20,alpha:.6,top:-2}}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(i){e=M(i,"DIV",{class:!0});var o=j(e);ve(n.$$.fragment,o),o.forEach(A),this.h()},h(){P(e,"class","text-gray-700 dark:text-gray-300 flex flex-col justify-center")},m(i,o){Q(i,e,o),ye(n,e,null),r=!0},p(i,o){const s={};o&8192&&(s.size=i[13]?26:20),n.$set(s)},i(i){r||(J(n.$$.fragment,i),r=!0)},o(i){X(n.$$.fragment,i),r=!1},d(i){i&&A(e),_e(n)}}}function V2(t){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function q2(t){let e=t[15].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function G2(t){let e,n,r,i,o,s,a,l,c,u,d,f,h,m,w,_,D,v,k,C,S,T,p,I,N,L,W,F,pe,ee;const Z=[R2,N2,$2],H=[];function V(Y,fe){return Y[4]===""?0:Y[4]==="slot"?1:2}i=V(t),o=H[i]=Z[i](t);const K=[j2,M2],ie=[];function ne(Y,fe){return Y[2]==="slot"?0:1}D=ne(t),v=ie[D]=K[D](t);const oe=[V2,H2,W2,F2,z2,L2],ue=[];function re(Y,fe){var Ce,me;return Y[3]==="none"?0:Y[3]==="arrow"?1:((Ce=Y[3])==null?void 0:Ce.constructor)===Object&&Y[3].type==="switch"?2:((me=Y[3])==null?void 0:me.constructor)===Object&&Y[3].type==="icon"?3:Y[3]==="slot"?4:5}return I=re(t),N=ue[I]=oe[I](t),{c(){e=B("div"),n=B("div"),r=B("div"),o.c(),s=ae(),a=B("div"),l=B("div"),c=rt(t[1]),u=ae(),d=B("div"),f=rt(t[5]),m=ae(),w=B("div"),_=B("div"),v.c(),k=ae(),C=B("div"),S=rt(t[6]),p=ae(),N.c(),this.h()},l(Y){e=M(Y,"DIV",{class:!0});var fe=j(e);n=M(fe,"DIV",{class:!0});var Ce=j(n);r=M(Ce,"DIV",{class:!0});var me=j(r);o.l(me),s=le(me),a=M(me,"DIV",{class:!0});var Ee=j(a);l=M(Ee,"DIV",{class:!0});var Te=j(l);c=it(Te,t[1]),Te.forEach(A),u=le(Ee),d=M(Ee,"DIV",{class:!0});var De=j(d);f=it(De,t[5]),De.forEach(A),Ee.forEach(A),me.forEach(A),m=le(Ce),w=M(Ce,"DIV",{class:!0});var xe=j(w);_=M(xe,"DIV",{class:!0});var Be=j(_);v.l(Be),k=le(Be),C=M(Be,"DIV",{class:!0});var Me=j(C);S=it(Me,t[6]),Me.forEach(A),Be.forEach(A),p=le(xe),N.l(xe),xe.forEach(A),Ce.forEach(A),fe.forEach(A),this.h()},h(){P(l,"class","font-medium"),P(d,"class","text-xs text-gray-500 dark:text-gray-400"),P(a,"class",h=`flex flex-col ${t[5]===""?"justify-center":"justify-between"}`),P(r,"class","flex justify-between items-center"),P(C,"class","text-xs text-gray-500 dark:text-gray-400 font-light"),P(_,"class",T=`flex flex-col ${t[6]===""?"justify-center":"justify-between"} text-right `),P(w,"class","flex justify-between items-center"),P(n,"class",L=`flex justify-between gap-4 py-4${t[7]&&t[8]==="0"?" border-b border-black/5 dark:border-white/5":""}`),P(e,"class",W=`px-4 cursor-pointer bg-white dark:bg-gray-800${t[14]?" active:bg-gray-100 dark:active:bg-gray-600":""} ${t[19][t[8]]||t[19][4]}${t[18][t[9]]||t[18][2]}${t[16][t[10]]||t[16].lg} ${t[17][t[11]]||t[17].sm}${t[13]?" text-xl":""} ${t[12]}`)},m(Y,fe){Q(Y,e,fe),R(e,n),R(n,r),H[i].m(r,null),R(r,s),R(r,a),R(a,l),R(l,c),R(a,u),R(a,d),R(d,f),R(n,m),R(n,w),R(w,_),ie[D].m(_,null),R(_,k),R(_,C),R(C,S),R(w,p),ue[I].m(w,null),F=!0,pe||(ee=Jr(e,"click",t[20]),pe=!0)},p(Y,[fe]){let Ce=i;i=V(Y),i===Ce?H[i].p(Y,fe):(Mt(),X(H[Ce],1,1,()=>{H[Ce]=null}),jt(),o=H[i],o?o.p(Y,fe):(o=H[i]=Z[i](Y),o.c()),J(o,1),o.m(r,s)),(!F||fe&2)&&Wn(c,Y[1]),(!F||fe&32)&&Wn(f,Y[5]),(!F||fe&32&&h!==(h=`flex flex-col ${Y[5]===""?"justify-center":"justify-between"}`))&&P(a,"class",h);let me=D;D=ne(Y),D===me?ie[D].p(Y,fe):(Mt(),X(ie[me],1,1,()=>{ie[me]=null}),jt(),v=ie[D],v?v.p(Y,fe):(v=ie[D]=K[D](Y),v.c()),J(v,1),v.m(_,k)),(!F||fe&64)&&Wn(S,Y[6]),(!F||fe&64&&T!==(T=`flex flex-col ${Y[6]===""?"justify-center":"justify-between"} text-right `))&&P(_,"class",T);let Ee=I;I=re(Y),I===Ee?ue[I].p(Y,fe):(Mt(),X(ue[Ee],1,1,()=>{ue[Ee]=null}),jt(),N=ue[I],N?N.p(Y,fe):(N=ue[I]=oe[I](Y),N.c()),J(N,1),N.m(w,null)),(!F||fe&384&&L!==(L=`flex justify-between gap-4 py-4${Y[7]&&Y[8]==="0"?" border-b border-black/5 dark:border-white/5":""}`))&&P(n,"class",L),(!F||fe&32512&&W!==(W=`px-4 cursor-pointer bg-white dark:bg-gray-800${Y[14]?" active:bg-gray-100 dark:active:bg-gray-600":""} ${Y[19][Y[8]]||Y[19][4]}${Y[18][Y[9]]||Y[18][2]}${Y[16][Y[10]]||Y[16].lg} ${Y[17][Y[11]]||Y[17].sm}${Y[13]?" text-xl":""} ${Y[12]}`))&&P(e,"class",W)},i(Y){F||(J(o),J(v),J(N),F=!0)},o(Y){X(o),X(v),X(N),F=!1},d(Y){Y&&A(e),H[i].d(),ie[D].d(),ue[I].d(),pe=!1,ee()}}}function Z2(t,e,n){let{$$slots:r={},$$scope:i}=e;const o=zi(),a=(Z0("STDF_lang")||Y0).common;let{title:l=""}=e,{detail:c=""}=e,{right:u="arrow"}=e,{left:d=""}=e,{subTitle:f=""}=e,{info:h=""}=e,{line:m=!1}=e,{my:w="4"}=e,{mx:_="2"}=e,{radius:D="lg"}=e,{switcheck:v=!1}=e,{shadow:k="sm"}=e,{injClass:C=""}=e,{love:S=!1}=e,{clickAll:T=!0}=e;const p={none:" rounded-none",base:" rounded",md:" rounded-md",lg:" rounded-lg",xl:" rounded-xl","2xl":" rounded-2xl",full:" rounded-full"},I={none:" shadow-none",sm:" shadow-sm dark:shadow-white/5",base:" shadow dark:shadow-white/10",md:" shadow-md dark:shadow-white/10",lg:" shadow-lg dark:shadow-white/10",xl:" shadow-xl dark:shadow-white/10","2xl":" shadow-2xl dark:shadow-white/25"},N={0:" mx-0",1:" mx-1",2:" mx-2",3:" mx-3",4:" mx-4",6:" mx-6",8:" mx-8"},L={0:" my-0",1:" my-1",2:" my-2",3:" my-3",4:" my-4",6:" my-6",8:" my-8"},W=()=>{var F,pe;T&&((u==null?void 0:u.constructor)===Object&&u.type==="switch"&&!((F=u.switch)!=null&&F.disabled)&&n(0,v=(pe=u.switch)!=null&&pe.async?v:!v),o("click"))};return t.$$set=F=>{"title"in F&&n(1,l=F.title),"detail"in F&&n(2,c=F.detail),"right"in F&&n(3,u=F.right),"left"in F&&n(4,d=F.left),"subTitle"in F&&n(5,f=F.subTitle),"info"in F&&n(6,h=F.info),"line"in F&&n(7,m=F.line),"my"in F&&n(8,w=F.my),"mx"in F&&n(9,_=F.mx),"radius"in F&&n(10,D=F.radius),"switcheck"in F&&n(0,v=F.switcheck),"shadow"in F&&n(11,k=F.shadow),"injClass"in F&&n(12,C=F.injClass),"love"in F&&n(13,S=F.love),"clickAll"in F&&n(14,T=F.clickAll),"$$scope"in F&&n(21,i=F.$$scope)},[v,l,c,u,d,f,h,m,w,_,D,k,C,S,T,a,p,I,N,L,W,i,r]}class Gs extends Oe{constructor(e){super(),$e(this,e,Z2,G2,Pe,{title:1,detail:2,right:3,left:4,subTitle:5,info:6,line:7,my:8,mx:9,radius:10,switcheck:0,shadow:11,injClass:12,love:13,clickAll:14})}}function Bd(t,e,n){const r=t.slice();return r[20]=e[n],r[22]=n,r}const K2=t=>({}),Md=t=>({}),Y2=t=>({}),jd=t=>({}),J2=t=>({}),Ud=t=>({});function X2(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0}),j(e).forEach(A),this.h()},h(){P(e,"class","w-4 h-full")},m(n,r){Q(n,e,r)},p:q,i:q,o:q,d(n){n&&A(e)}}}function Q2(t){let e,n,r,i,o;const s=[t[3]];let a={};for(let l=0;l<s.length;l+=1)a=At(a,s[l]);return n=new Vn({props:a}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(l){e=M(l,"DIV",{class:!0});var c=j(e);ve(n.$$.fragment,c),c.forEach(A),this.h()},h(){P(e,"class","text-center lining-nums min-w-[3rem] active:opacity-80")},m(l,c){Q(l,e,c),ye(n,e,null),r=!0,i||(o=Jr(e,"click",t[12]),i=!0)},p(l,c){const u=c&8?xt(s,[Pt(l[3])]):{};n.$set(u)},i(l){r||(J(n.$$.fragment,l),r=!0)},o(l){X(n.$$.fragment,l),r=!1},d(l){l&&A(e),_e(n),i=!1,o()}}}function eb(t){let e,n,r,i,o;return n=new Vn({props:{name:"ri-arrow-left-s-line",size:t[10],top:-2}}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(s){e=M(s,"DIV",{class:!0});var a=j(e);ve(n.$$.fragment,a),a.forEach(A),this.h()},h(){P(e,"class","text-center lining-nums min-w-[3rem] active:opacity-80")},m(s,a){Q(s,e,a),ye(n,e,null),r=!0,i||(o=Jr(e,"click",t[12]),i=!0)},p(s,a){const l={};a&1024&&(l.size=s[10]),n.$set(l)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){X(n.$$.fragment,s),r=!1},d(s){s&&A(e),_e(n),i=!1,o()}}}function tb(t){let e;const n=t[15].left,r=Dt(n,t,t[14],Ud),i=r||nb(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16384)&&St(r,n,o,o[14],e?Tt(n,o[14],s,J2):It(o[14]),Ud)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function nb(t){let e=t[11].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function rb(t){let e;return{c(){e=rt(t[0])},l(n){e=it(n,t[0])},m(n,r){Q(n,e,r)},p(n,r){r&1&&Wn(e,n[0])},i:q,o:q,d(n){n&&A(e)}}}function ib(t){let e;const n=t[15].title,r=Dt(n,t,t[14],jd),i=r||ob(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16384)&&St(r,n,o,o[14],e?Tt(n,o[14],s,Y2):It(o[14]),jd)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function ob(t){let e=t[11].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function sb(t){return{c:q,l:q,m:q,p:q,i:q,o:q,d:q}}function ab(t){let e,n,r=Lt(t[5]),i=[];for(let s=0;s<r.length;s+=1)i[s]=Ld(Bd(t,r,s));const o=s=>X(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=yi()},l(s){for(let a=0;a<i.length;a+=1)i[a].l(s);e=yi()},m(s,a){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(s,a);Q(s,e,a),n=!0},p(s,a){if(a&9248){r=Lt(s[5]);let l;for(l=0;l<r.length;l+=1){const c=Bd(s,r,l);i[l]?(i[l].p(c,a),J(i[l],1)):(i[l]=Ld(c),i[l].c(),J(i[l],1),i[l].m(e.parentNode,e))}for(Mt(),l=r.length;l<i.length;l+=1)o(l);jt()}},i(s){if(!n){for(let a=0;a<r.length;a+=1)J(i[a]);n=!0}},o(s){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)X(i[a]);n=!1},d(s){s&&A(e),_r(i,s)}}}function lb(t){let e;const n=t[15].right,r=Dt(n,t,t[14],Md),i=r||cb(t);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,s){i&&i.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16384)&&St(r,n,o,o[14],e?Tt(n,o[14],s,K2):It(o[14]),Md)},i(o){e||(J(i,o),e=!0)},o(o){X(i,o),e=!1},d(o){i&&i.d(o)}}}function Ld(t){let e,n,r,i,o,s;const a=[t[20],{size:t[10]}];let l={};for(let u=0;u<a.length;u+=1)l=At(l,a[u]);n=new Vn({props:l});function c(){return t[16](t[22])}return{c(){e=B("div"),we(n.$$.fragment),r=ae(),this.h()},l(u){e=M(u,"DIV",{class:!0});var d=j(e);ve(n.$$.fragment,d),r=le(d),d.forEach(A),this.h()},h(){P(e,"class","w-12 text-center active:opacity-80")},m(u,d){Q(u,e,d),ye(n,e,null),R(e,r),i=!0,o||(s=Jr(e,"click",c),o=!0)},p(u,d){t=u;const f=d&1056?xt(a,[d&32&&Pt(t[20]),d&1024&&{size:t[10]}]):{};n.$set(f)},i(u){i||(J(n.$$.fragment,u),i=!0)},o(u){X(n.$$.fragment,u),i=!1},d(u){u&&A(e),_e(n),o=!1,s()}}}function cb(t){let e=t[11].slotEmpty+"",n;return{c(){n=rt(e)},l(r){n=it(r,e)},m(r,i){Q(r,n,i)},p:q,d(r){r&&A(n)}}}function ub(t){let e,n,r,i,o,s,a,l,c,u,d,f,h;const m=[tb,eb,Q2,X2],w=[];function _(p,I){return p[4]?0:p[2]==="back"?1:p[2]==="customIcon"?2:3}n=_(t),r=w[n]=m[n](t);const D=[ib,rb],v=[];function k(p,I){return p[1]?0:1}s=k(t),a=v[s]=D[s](t);const C=[lb,ab,sb],S=[];function T(p,I){return p[6]?0:p[5].length>0?1:2}return u=T(t),d=S[u]=C[u](t),{c(){e=B("div"),r.c(),i=ae(),o=B("div"),a.c(),l=ae(),c=B("div"),d.c(),this.h()},l(p){e=M(p,"DIV",{class:!0});var I=j(e);r.l(I),i=le(I),o=M(I,"DIV",{class:!0});var N=j(o);a.l(N),N.forEach(A),l=le(I),c=M(I,"DIV",{class:!0});var L=j(c);d.l(L),L.forEach(A),I.forEach(A),this.h()},h(){P(o,"class","flex-1 truncate"),Pn(o,"pl-2",t[2]==="none"),P(c,"class","flex"),P(e,"class",f=`h-12 w-full border-black/10 dark:border-white/10 flex justify-between leading-[3rem] ${t[7]?"border-b ":" "}bg-white dark:bg-black/50${t[9]?" text-xl":""}${t[8]===""?"":" "+t[8]}`)},m(p,I){Q(p,e,I),w[n].m(e,null),R(e,i),R(e,o),v[s].m(o,null),R(e,l),R(e,c),S[u].m(c,null),h=!0},p(p,[I]){let N=n;n=_(p),n===N?w[n].p(p,I):(Mt(),X(w[N],1,1,()=>{w[N]=null}),jt(),r=w[n],r?r.p(p,I):(r=w[n]=m[n](p),r.c()),J(r,1),r.m(e,i));let L=s;s=k(p),s===L?v[s].p(p,I):(Mt(),X(v[L],1,1,()=>{v[L]=null}),jt(),a=v[s],a?a.p(p,I):(a=v[s]=D[s](p),a.c()),J(a,1),a.m(o,null)),(!h||I&4)&&Pn(o,"pl-2",p[2]==="none");let W=u;u=T(p),u===W?S[u].p(p,I):(Mt(),X(S[W],1,1,()=>{S[W]=null}),jt(),d=S[u],d?d.p(p,I):(d=S[u]=C[u](p),d.c()),J(d,1),d.m(c,null)),(!h||I&896&&f!==(f=`h-12 w-full border-black/10 dark:border-white/10 flex justify-between leading-[3rem] ${p[7]?"border-b ":" "}bg-white dark:bg-black/50${p[9]?" text-xl":""}${p[8]===""?"":" "+p[8]}`))&&P(e,"class",f)},i(p){h||(J(r),J(a),J(d),h=!0)},o(p){X(r),X(a),X(d),h=!1},d(p){p&&A(e),w[n].d(),v[s].d(),S[u].d()}}}function db(t,e,n){let r,{$$slots:i={},$$scope:o}=e;const s=zi(),a=Z0("STDF_lang")||Y0,l=a.navBar,c=a.common;let{title:u=l.title}=e,{titleSlot:d=!1}=e,{left:f="back"}=e,{leftIcon:h={}}=e,{leftSlot:m=!1}=e,{rights:w=[]}=e,{rightSlot:_=!1}=e,{line:D=!0}=e,{injClass:v=""}=e,{love:k=!1}=e;const C=()=>{s("clickleft")},S=p=>{s("clickright",p)},T=p=>S(p);return t.$$set=p=>{"title"in p&&n(0,u=p.title),"titleSlot"in p&&n(1,d=p.titleSlot),"left"in p&&n(2,f=p.left),"leftIcon"in p&&n(3,h=p.leftIcon),"leftSlot"in p&&n(4,m=p.leftSlot),"rights"in p&&n(5,w=p.rights),"rightSlot"in p&&n(6,_=p.rightSlot),"line"in p&&n(7,D=p.line),"injClass"in p&&n(8,v=p.injClass),"love"in p&&n(9,k=p.love),"$$scope"in p&&n(14,o=p.$$scope)},t.$$.update=()=>{t.$$.dirty&512&&n(10,r=k?30:24)},[u,d,f,h,m,w,_,D,v,k,r,c,C,S,o,i,T]}class fb extends Oe{constructor(e){super(),$e(this,e,db,ub,Pe,{title:0,titleSlot:1,left:2,leftIcon:3,leftSlot:4,rights:5,rightSlot:6,line:7,injClass:8,love:9})}}function zd(t,e,n){const r=t.slice();return r[25]=e[n],r[27]=n,r}function Fd(t){let e;return{c(){e=B("div"),this.h()},l(n){e=M(n,"DIV",{class:!0}),j(e).forEach(A),this.h()},h(){P(e,"class","absolute h-[2px] bg-black/5 dark:bg-white/5 w-full bottom-0")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Wd(t){let e,n,r,i;const o=[t[25].icon];let s={};for(let a=0;a<o.length;a+=1)s=At(s,o[a]);return n=new Vn({props:s}),{c(){e=B("div"),we(n.$$.fragment),this.h()},l(a){e=M(a,"DIV",{class:!0});var l=j(e);ve(n.$$.fragment,l),l.forEach(A),this.h()},h(){P(e,"class",r=`mr-[2px] ${t[19][t[4]]||t[19].base}`)},m(a,l){Q(a,e,l),ye(n,e,null),i=!0},p(a,l){const c=l&2?xt(o,[Pt(a[25].icon)]):{};n.$set(c),(!i||l&16&&r!==(r=`mr-[2px] ${a[19][a[4]]||a[19].base}`))&&P(e,"class",r)},i(a){i||(J(n.$$.fragment,a),i=!0)},o(a){X(n.$$.fragment,a),i=!1},d(a){a&&A(e),_e(n)}}}function Hd(t){let e,n=t[25].text+"",r,i;return{c(){e=B("div"),r=rt(n),this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);r=it(s,n),s.forEach(A),this.h()},h(){P(e,"class",i=`transition-all ${t[19][t[4]]||t[19].base}`)},m(o,s){Q(o,e,s),R(e,r)},p(o,s){s&2&&n!==(n=o[25].text+"")&&Wn(r,n),s&16&&i!==(i=`transition-all ${o[19][o[4]]||o[19].base}`)&&P(e,"class",i)},d(o){o&&A(e)}}}function Vd(t){let e,n,r,i,o,s,a,l=t[25].icon&&Wd(t),c=t[25].text&&Hd(t);function u(){return t[22](t[27])}return{c(){e=B("div"),l&&l.c(),n=ae(),c&&c.c(),r=ae(),this.h()},l(d){e=M(d,"DIV",{class:!0});var f=j(e);l&&l.l(f),n=le(f),c&&c.l(f),r=le(f),f.forEach(A),this.h()},h(){P(e,"class",i=`cursor-pointer flex-1 flex justify-center ${t[5]==="h"?"py-1":"py-2"} font-medium ${t[6]?"text-lg":"text-sm"} leading-6 ${t[18][t[3]]||t[18].base} ${t[8]} ${t[27]===t[0]?t[9]:""}`)},m(d,f){Q(d,e,f),l&&l.m(e,null),R(e,n),c&&c.m(e,null),R(e,r),o=!0,s||(a=Jr(e,"click",u),s=!0)},p(d,f){t=d,t[25].icon?l?(l.p(t,f),f&2&&J(l,1)):(l=Wd(t),l.c(),J(l,1),l.m(e,n)):l&&(Mt(),X(l,1,1,()=>{l=null}),jt()),t[25].text?c?c.p(t,f):(c=Hd(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null),(!o||f&873&&i!==(i=`cursor-pointer flex-1 flex justify-center ${t[5]==="h"?"py-1":"py-2"} font-medium ${t[6]?"text-lg":"text-sm"} leading-6 ${t[18][t[3]]||t[18].base} ${t[8]} ${t[27]===t[0]?t[9]:""}`))&&P(e,"class",i)},i(d){o||(J(l),o=!0)},o(d){X(l),o=!1},d(d){d&&A(e),l&&l.d(),c&&c.d(),s=!1,a()}}}function hb(t){let e,n,r,i,o,s,a,l,c,u,d=t[2]&&t[5]!=="v"&&Fd(),f=Lt(t[1]),h=[];for(let w=0;w<f.length;w+=1)h[w]=Vd(zd(t,f,w));const m=w=>X(h[w],1,1,()=>{h[w]=null});return{c(){e=B("div"),d&&d.c(),n=ae(),r=B("div"),o=ae(),s=B("div");for(let w=0;w<h.length;w+=1)h[w].c();this.h()},l(w){e=M(w,"DIV",{class:!0});var _=j(e);d&&d.l(_),n=le(_),r=M(_,"DIV",{class:!0,style:!0}),j(r).forEach(A),o=le(_),s=M(_,"DIV",{class:!0});var D=j(s);for(let v=0;v<h.length;v+=1)h[v].l(D);D.forEach(A),_.forEach(A),this.h()},h(){P(r,"class",i=` ${t[2]&&t[5]!=="v"?"":"shadow dark:shadow-sm dark:shadow-white/10"} absolute transition-all ${t[19][t[4]]||t[19].base} ${t[18][t[3]]||t[18].base} ${t[2]&&t[5]!=="v"?"bottom-0 bg-black/50 dark:bg-white/50":"bg-white dark:bg-gray-950"} ${t[10]}`),y(r,"width",t[17]+"px"),y(r,"height",(t[2]&&t[5]!=="v"?2:t[16])+"px"),y(r,"left",t[15]+"px"),y(r,"top",t[14]+"px"),P(s,"class",a=`relative ${t[5]==="h"?"flex justify-between":"px-4  whitespace-nowrap"}`),P(e,"class",l=`${t[2]&&t[5]!=="v"?"":"bg-black/5 dark:bg-white/10"} p-[2px] relative ${t[18][t[3]]||t[18].base}${t[20][t[11]]||t[20][4]} ${t[7]}`),Aa(()=>t[23].call(e))},m(w,_){Q(w,e,_),d&&d.m(e,null),R(e,n),R(e,r),R(e,o),R(e,s);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(s,null);c=xa(e,t[23].bind(e)),u=!0},p(w,[_]){if(w[2]&&w[5]!=="v"?d||(d=Fd(),d.c(),d.m(e,n)):d&&(d.d(1),d=null),(!u||_&1084&&i!==(i=` ${w[2]&&w[5]!=="v"?"":"shadow dark:shadow-sm dark:shadow-white/10"} absolute transition-all ${w[19][w[4]]||w[19].base} ${w[18][w[3]]||w[18].base} ${w[2]&&w[5]!=="v"?"bottom-0 bg-black/50 dark:bg-white/50":"bg-white dark:bg-gray-950"} ${w[10]}`))&&P(r,"class",i),(!u||_&131072)&&y(r,"width",w[17]+"px"),(!u||_&65572)&&y(r,"height",(w[2]&&w[5]!=="v"?2:w[16])+"px"),(!u||_&32768)&&y(r,"left",w[15]+"px"),(!u||_&16384)&&y(r,"top",w[14]+"px"),_&2884475){f=Lt(w[1]);let D;for(D=0;D<f.length;D+=1){const v=zd(w,f,D);h[D]?(h[D].p(v,_),J(h[D],1)):(h[D]=Vd(v),h[D].c(),J(h[D],1),h[D].m(s,null))}for(Mt(),D=f.length;D<h.length;D+=1)m(D);jt()}(!u||_&32&&a!==(a=`relative ${w[5]==="h"?"flex justify-between":"px-4  whitespace-nowrap"}`))&&P(s,"class",a),(!u||_&2220&&l!==(l=`${w[2]&&w[5]!=="v"?"":"bg-black/5 dark:bg-white/10"} p-[2px] relative ${w[18][w[3]]||w[18].base}${w[20][w[11]]||w[20][4]} ${w[7]}`))&&P(e,"class",l)},i(w){if(!u){for(let _=0;_<f.length;_+=1)J(h[_]);u=!0}},o(w){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)X(h[_]);u=!1},d(w){w&&A(e),d&&d.d(),_r(h,w),c()}}}function pb(t,e,n){let r,i,o,s,{labels:a=[]}=e,{active:l=0}=e,{lineType:c=!1}=e,{radius:u="base"}=e,{duration:d="base"}=e,{layout:f="h"}=e,{love:h=!1}=e,{injClass:m=""}=e,{tabInjClass:w=""}=e,{activeTabInjClass:_=""}=e,{activeInjClass:D=""}=e,{mx:v="4"}=e;const k={none:"rounded-none",base:"rounded",xl:"rounded-xl",full:"rounded-full"},C={fast:"duration-150",base:"duration-300",slow:"duration-500",slower:"duration-1000"},S={0:" mx-0",1:" mx-1",2:" mx-2",3:" mx-3",4:" mx-4",6:" mx-6",8:" mx-8",12:" mx-12",16:" mx-16",20:" mx-20"},T=zi(),p=F=>{n(0,l=F),T("clicktab",F)};let I=0,N=0;const L=F=>p(F);function W(){I=this.clientWidth,N=this.clientHeight,n(12,I),n(13,N)}return t.$$set=F=>{"labels"in F&&n(1,a=F.labels),"active"in F&&n(0,l=F.active),"lineType"in F&&n(2,c=F.lineType),"radius"in F&&n(3,u=F.radius),"duration"in F&&n(4,d=F.duration),"layout"in F&&n(5,f=F.layout),"love"in F&&n(6,h=F.love),"injClass"in F&&n(7,m=F.injClass),"tabInjClass"in F&&n(8,w=F.tabInjClass),"activeTabInjClass"in F&&n(9,_=F.activeTabInjClass),"activeInjClass"in F&&n(10,D=F.activeInjClass),"mx"in F&&n(11,v=F.mx)},t.$$.update=()=>{t.$$.dirty&4130&&n(17,r=f==="h"?(I-4)/a.length:I-4),t.$$.dirty&8226&&n(16,i=f==="h"?N-4:(N-4)/a.length),t.$$.dirty&4131&&n(15,o=f==="h"?2+l*((I-4)/a.length):2),t.$$.dirty&8231&&n(14,s=f==="h"?c?N-2:2:2+l*((N-4)/a.length))},[l,a,c,u,d,f,h,m,w,_,D,v,I,N,s,o,i,r,k,C,S,p,L,W]}class Cr extends Oe{constructor(e){super(),$e(this,e,pb,hb,Pe,{labels:1,active:0,lineType:2,radius:3,duration:4,layout:5,love:6,injClass:7,tabInjClass:8,activeTabInjClass:9,activeInjClass:10,mx:11})}}const gb=t=>({active:t&1}),qd=t=>({active:t[0]}),mb=t=>({active:t&1}),Gd=t=>({active:t[0]}),bb=t=>({active:t&1}),Zd=t=>({active:t[0]}),wb=t=>({active:t&1}),Kd=t=>({active:t[0]}),vb=t=>({active:t&1}),Yd=t=>({active:t[0]}),yb=t=>({active:t&1}),Jd=t=>({active:t[0]}),_b=t=>({active:t&1}),Xd=t=>({active:t[0]}),Cb=t=>({active:t&1}),Qd=t=>({active:t[0]});function Eb(t){let e,n="placement 参数错误！";return{c(){e=B("div"),e.textContent=n},l(r){e=M(r,"DIV",{"data-svelte-h":!0}),yn(e)!=="svelte-dbjjyc"&&(e.textContent=n)},m(r,i){Q(r,e,i)},p:q,i:q,o:q,d(r){r&&A(e)}}}function kb(t){let e,n,r,i,o,s;const a=t[9].default,l=Dt(a,t,t[8],qd),c=l||Ab(),u=[{active:t[0]},t[1],{layout:"v"}];let d={};for(let f=0;f<u.length;f+=1)d=At(d,u[f]);return o=new Cr({props:d}),o.$on("clicktab",t[6]),{c(){e=B("div"),n=B("div"),c&&c.c(),r=ae(),i=B("div"),we(o.$$.fragment),this.h()},l(f){e=M(f,"DIV",{class:!0});var h=j(e);n=M(h,"DIV",{class:!0});var m=j(n);c&&c.l(m),m.forEach(A),r=le(h),i=M(h,"DIV",{});var w=j(i);ve(o.$$.fragment,w),w.forEach(A),h.forEach(A),this.h()},h(){P(n,"class","grow"),P(e,"class","flex")},m(f,h){Q(f,e,h),R(e,n),c&&c.m(n,null),R(e,r),R(e,i),ye(o,i,null),s=!0},p(f,h){l&&l.p&&(!s||h&257)&&St(l,a,f,f[8],s?Tt(a,f[8],h,gb):It(f[8]),qd);const m=h&3?xt(u,[h&1&&{active:f[0]},h&2&&Pt(f[1]),u[2]]):{};o.$set(m)},i(f){s||(J(c,f),J(o.$$.fragment,f),s=!0)},o(f){X(c,f),X(o.$$.fragment,f),s=!1},d(f){f&&A(e),c&&c.d(f),_e(o)}}}function Db(t){let e,n,r,i,o,s;const a=[{active:t[0]},t[1],{layout:"v"}];let l={};for(let f=0;f<a.length;f+=1)l=At(l,a[f]);r=new Cr({props:l}),r.$on("clicktab",t[6]);const c=t[9].default,u=Dt(c,t,t[8],Gd),d=u||xb();return{c(){e=B("div"),n=B("div"),we(r.$$.fragment),i=ae(),o=B("div"),d&&d.c(),this.h()},l(f){e=M(f,"DIV",{class:!0});var h=j(e);n=M(h,"DIV",{});var m=j(n);ve(r.$$.fragment,m),m.forEach(A),i=le(h),o=M(h,"DIV",{class:!0});var w=j(o);d&&d.l(w),w.forEach(A),h.forEach(A),this.h()},h(){P(o,"class","grow"),P(e,"class","flex")},m(f,h){Q(f,e,h),R(e,n),ye(r,n,null),R(e,i),R(e,o),d&&d.m(o,null),s=!0},p(f,h){const m=h&3?xt(a,[h&1&&{active:f[0]},h&2&&Pt(f[1]),a[2]]):{};r.$set(m),u&&u.p&&(!s||h&257)&&St(u,c,f,f[8],s?Tt(c,f[8],h,mb):It(f[8]),Gd)},i(f){s||(J(r.$$.fragment,f),J(d,f),s=!0)},o(f){X(r.$$.fragment,f),X(d,f),s=!1},d(f){f&&A(e),_e(r),d&&d.d(f)}}}function Sb(t){let e,n,r;const i=t[9].default,o=Dt(i,t,t[8],Zd),s=o||Pb(),a=[{active:t[0]},t[1]];let l={};for(let c=0;c<a.length;c+=1)l=At(l,a[c]);return n=new Cr({props:l}),n.$on("clicktab",t[6]),{c(){s&&s.c(),e=ae(),we(n.$$.fragment)},l(c){s&&s.l(c),e=le(c),ve(n.$$.fragment,c)},m(c,u){s&&s.m(c,u),Q(c,e,u),ye(n,c,u),r=!0},p(c,u){o&&o.p&&(!r||u&257)&&St(o,i,c,c[8],r?Tt(i,c[8],u,bb):It(c[8]),Zd);const d=u&3?xt(a,[u&1&&{active:c[0]},u&2&&Pt(c[1])]):{};n.$set(d)},i(c){r||(J(s,c),J(n.$$.fragment,c),r=!0)},o(c){X(s,c),X(n.$$.fragment,c),r=!1},d(c){c&&A(e),s&&s.d(c),_e(n,c)}}}function Ib(t){let e,n,r;const i=[{active:t[0]},{duration:t[2]},t[1]];let o={};for(let c=0;c<i.length;c+=1)o=At(o,i[c]);e=new Cr({props:o}),e.$on("clicktab",t[6]);const s=t[9].default,a=Dt(s,t,t[8],Kd),l=a||Ob();return{c(){we(e.$$.fragment),n=ae(),l&&l.c()},l(c){ve(e.$$.fragment,c),n=le(c),l&&l.l(c)},m(c,u){ye(e,c,u),Q(c,n,u),l&&l.m(c,u),r=!0},p(c,u){const d=u&7?xt(i,[u&1&&{active:c[0]},u&4&&{duration:c[2]},u&2&&Pt(c[1])]):{};e.$set(d),a&&a.p&&(!r||u&257)&&St(a,s,c,c[8],r?Tt(s,c[8],u,wb):It(c[8]),Kd)},i(c){r||(J(e.$$.fragment,c),J(l,c),r=!0)},o(c){X(e.$$.fragment,c),X(l,c),r=!1},d(c){c&&A(n),_e(e,c),l&&l.d(c)}}}function Tb(t){let e,n,r,i;const o=[Mb,Bb,Rb,Nb,$b],s=[];function a(l,c){return l[3]==="t"?0:l[3]==="b"?1:l[3]==="l"?2:l[3]==="r"?3:4}return e=a(t),n=s[e]=o[e](t),{c(){n.c(),r=yi()},l(l){n.l(l),r=yi()},m(l,c){s[e].m(l,c),Q(l,r,c),i=!0},p(l,c){let u=e;e=a(l),e===u?s[e].p(l,c):(Mt(),X(s[u],1,1,()=>{s[u]=null}),jt(),n=s[e],n?n.p(l,c):(n=s[e]=o[e](l),n.c()),J(n,1),n.m(r.parentNode,r))},i(l){i||(J(n),i=!0)},o(l){X(n),i=!1},d(l){l&&A(r),s[e].d(l)}}}function Ab(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function xb(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Pb(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Ob(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function $b(t){let e,n="placement 参数错误！";return{c(){e=B("div"),e.textContent=n},l(r){e=M(r,"DIV",{"data-svelte-h":!0}),yn(e)!=="svelte-dbjjyc"&&(e.textContent=n)},m(r,i){Q(r,e,i)},p:q,i:q,o:q,d(r){r&&A(e)}}}function Nb(t){let e,n,r,i,o,s;const a=t[9].default,l=Dt(a,t,t[8],Yd),c=l||jb(),u=[{active:t[0]},t[1],{layout:"v"}];let d={};for(let f=0;f<u.length;f+=1)d=At(d,u[f]);return o=new Cr({props:d}),o.$on("clicktab",t[6]),{c(){e=B("div"),n=B("div"),c&&c.c(),r=ae(),i=B("div"),we(o.$$.fragment),this.h()},l(f){e=M(f,"DIV",{class:!0});var h=j(e);n=M(h,"DIV",{class:!0});var m=j(n);c&&c.l(m),m.forEach(A),r=le(h),i=M(h,"DIV",{});var w=j(i);ve(o.$$.fragment,w),w.forEach(A),h.forEach(A),this.h()},h(){P(n,"class","grow"),P(e,"class","flex")},m(f,h){Q(f,e,h),R(e,n),c&&c.m(n,null),R(e,r),R(e,i),ye(o,i,null),s=!0},p(f,h){l&&l.p&&(!s||h&257)&&St(l,a,f,f[8],s?Tt(a,f[8],h,vb):It(f[8]),Yd);const m=h&3?xt(u,[h&1&&{active:f[0]},h&2&&Pt(f[1]),u[2]]):{};o.$set(m)},i(f){s||(J(c,f),J(o.$$.fragment,f),s=!0)},o(f){X(c,f),X(o.$$.fragment,f),s=!1},d(f){f&&A(e),c&&c.d(f),_e(o)}}}function Rb(t){let e,n,r,i,o,s;const a=[{active:t[0]},t[1],{layout:"v"}];let l={};for(let f=0;f<a.length;f+=1)l=At(l,a[f]);r=new Cr({props:l}),r.$on("clicktab",t[6]);const c=t[9].default,u=Dt(c,t,t[8],Jd),d=u||Ub();return{c(){e=B("div"),n=B("div"),we(r.$$.fragment),i=ae(),o=B("div"),d&&d.c(),this.h()},l(f){e=M(f,"DIV",{class:!0});var h=j(e);n=M(h,"DIV",{});var m=j(n);ve(r.$$.fragment,m),m.forEach(A),i=le(h),o=M(h,"DIV",{class:!0});var w=j(o);d&&d.l(w),w.forEach(A),h.forEach(A),this.h()},h(){P(o,"class","grow"),P(e,"class","flex")},m(f,h){Q(f,e,h),R(e,n),ye(r,n,null),R(e,i),R(e,o),d&&d.m(o,null),s=!0},p(f,h){const m=h&3?xt(a,[h&1&&{active:f[0]},h&2&&Pt(f[1]),a[2]]):{};r.$set(m),u&&u.p&&(!s||h&257)&&St(u,c,f,f[8],s?Tt(c,f[8],h,yb):It(f[8]),Jd)},i(f){s||(J(r.$$.fragment,f),J(d,f),s=!0)},o(f){X(r.$$.fragment,f),X(d,f),s=!1},d(f){f&&A(e),_e(r),d&&d.d(f)}}}function Bb(t){let e,n,r,i,o,s,a;const l=t[9].default,c=Dt(l,t,t[8],Xd),u=c||Lb(),d=[{active:t[0]},t[1]];let f={};for(let h=0;h<d.length;h+=1)f=At(f,d[h]);return s=new Cr({props:f}),s.$on("clicktab",t[6]),{c(){e=B("div"),n=B("div"),u&&u.c(),o=ae(),we(s.$$.fragment),this.h()},l(h){e=M(h,"DIV",{class:!0});var m=j(e);n=M(m,"DIV",{class:!0,style:!0});var w=j(n);u&&u.l(w),w.forEach(A),m.forEach(A),o=le(h),ve(s.$$.fragment,h),this.h()},h(){P(n,"class",r=`transition-all relative flex ${t[7][t[2]]||t[7].base}`),y(n,"width",t[1].labels.length*t[5]+"px"),y(n,"left","-"+t[0]*t[5]+"px"),P(e,"class","overflow-hidden"),Aa(()=>t[11].call(e))},m(h,m){Q(h,e,m),R(e,n),u&&u.m(n,null),i=xa(e,t[11].bind(e)),Q(h,o,m),ye(s,h,m),a=!0},p(h,m){c&&c.p&&(!a||m&257)&&St(c,l,h,h[8],a?Tt(l,h[8],m,_b):It(h[8]),Xd),(!a||m&4&&r!==(r=`transition-all relative flex ${h[7][h[2]]||h[7].base}`))&&P(n,"class",r),(!a||m&34)&&y(n,"width",h[1].labels.length*h[5]+"px"),(!a||m&33)&&y(n,"left","-"+h[0]*h[5]+"px");const w=m&3?xt(d,[m&1&&{active:h[0]},m&2&&Pt(h[1])]):{};s.$set(w)},i(h){a||(J(u,h),J(s.$$.fragment,h),a=!0)},o(h){X(u,h),X(s.$$.fragment,h),a=!1},d(h){h&&(A(e),A(o)),u&&u.d(h),i(),_e(s,h)}}}function Mb(t){let e,n,r,i,o,s,a;const l=[{active:t[0]},{duration:t[2]},t[1]];let c={};for(let h=0;h<l.length;h+=1)c=At(c,l[h]);e=new Cr({props:c}),e.$on("clicktab",t[6]);const u=t[9].default,d=Dt(u,t,t[8],Qd),f=d||zb();return{c(){we(e.$$.fragment),n=ae(),r=B("div"),i=B("div"),f&&f.c(),this.h()},l(h){ve(e.$$.fragment,h),n=le(h),r=M(h,"DIV",{class:!0});var m=j(r);i=M(m,"DIV",{class:!0,style:!0});var w=j(i);f&&f.l(w),w.forEach(A),m.forEach(A),this.h()},h(){P(i,"class",o=`transition-all relative flex ${t[7][t[2]]||t[7].base}`),y(i,"width",t[1].labels.length*t[5]+"px"),y(i,"left","-"+t[0]*t[5]+"px"),P(r,"class","overflow-hidden"),Aa(()=>t[10].call(r))},m(h,m){ye(e,h,m),Q(h,n,m),Q(h,r,m),R(r,i),f&&f.m(i,null),s=xa(r,t[10].bind(r)),a=!0},p(h,m){const w=m&7?xt(l,[m&1&&{active:h[0]},m&4&&{duration:h[2]},m&2&&Pt(h[1])]):{};e.$set(w),d&&d.p&&(!a||m&257)&&St(d,u,h,h[8],a?Tt(u,h[8],m,Cb):It(h[8]),Qd),(!a||m&4&&o!==(o=`transition-all relative flex ${h[7][h[2]]||h[7].base}`))&&P(i,"class",o),(!a||m&34)&&y(i,"width",h[1].labels.length*h[5]+"px"),(!a||m&33)&&y(i,"left","-"+h[0]*h[5]+"px")},i(h){a||(J(e.$$.fragment,h),J(f,h),a=!0)},o(h){X(e.$$.fragment,h),X(f,h),a=!1},d(h){h&&(A(n),A(r)),_e(e,h),f&&f.d(h),s()}}}function jb(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Ub(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Lb(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function zb(t){let e;return{c(){e=rt("暂无 Tabs content！")},l(n){e=it(n,"暂无 Tabs content！")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function Fb(t){let e,n,r,i;const o=[Tb,Ib,Sb,Db,kb,Eb],s=[];function a(l,c){return l[4]?0:l[3]==="t"?1:l[3]==="b"?2:l[3]==="l"?3:l[3]==="r"?4:5}return e=a(t),n=s[e]=o[e](t),{c(){n.c(),r=yi()},l(l){n.l(l),r=yi()},m(l,c){s[e].m(l,c),Q(l,r,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?s[e].p(l,c):(Mt(),X(s[u],1,1,()=>{s[u]=null}),jt(),n=s[e],n?n.p(l,c):(n=s[e]=o[e](l),n.c()),J(n,1),n.m(r.parentNode,r))},i(l){i||(J(n),i=!0)},o(l){X(n),i=!1},d(l){l&&A(r),s[e].d(l)}}}function Wb(t,e,n){let{$$slots:r={},$$scope:i}=e,{tab:o={}}=e,{duration:s="base"}=e,{placement:a="t"}=e,{transition:l=!0}=e,{active:c=0}=e;const u=zi(),d=_=>{n(0,c=_.detail),u("change",c)};let f=0;const h={fast:"duration-150",base:"duration-300",slow:"duration-500",slower:"duration-1000"};function m(){f=this.clientWidth,n(5,f)}function w(){f=this.clientWidth,n(5,f)}return t.$$set=_=>{"tab"in _&&n(1,o=_.tab),"duration"in _&&n(2,s=_.duration),"placement"in _&&n(3,a=_.placement),"transition"in _&&n(4,l=_.transition),"active"in _&&n(0,c=_.active),"$$scope"in _&&n(8,i=_.$$scope)},[c,o,s,a,l,f,d,h,i,r,m,w]}class Hb extends Oe{constructor(e){super(),$e(this,e,Wb,Fb,Pe,{tab:1,duration:2,placement:3,transition:4,active:0})}}function ef(t,e,n){const r=t.slice();return r[17]=e[n],r[19]=n,r}function tf(t){let e,n;return{c(){e=B("div"),this.h()},l(r){e=M(r,"DIV",{class:!0,style:!0}),j(e).forEach(A),this.h()},h(){P(e,"class",n=`mx-auto rounded-full h-[2px] absolute transition-all bottom-px bg-primary dark:bg-dark ${t[9]}`),y(e,"width",(t[4]<1?t[10]/t[2].length:t[11]<2?2:t[11])+"px"),y(e,"left",(t[4]<1?t[0]*(t[10]/t[2].length):t[12])+"px")},m(r,i){Q(r,e,i)},p(r,i){i&512&&n!==(n=`mx-auto rounded-full h-[2px] absolute transition-all bottom-px bg-primary dark:bg-dark ${r[9]}`)&&P(e,"class",n),i&3092&&y(e,"width",(r[4]<1?r[10]/r[2].length:r[11]<2?2:r[11])+"px"),i&5141&&y(e,"left",(r[4]<1?r[0]*(r[10]/r[2].length):r[12])+"px")},d(r){r&&A(e)}}}function nf(t){let e,n,r,i,o,s,a,l;const c=[t[17].icon,{name:t[17].activeIcon?t[17].activeIcon.name:t[17].icon.name},{size:t[19]===t[0]&&t[17].activeIcon&&t[17].activeIcon.size*(t[5]?1.2:1)||t[17].icon.size*(t[5]?1.2:1)},{top:0}];let u={};for(let h=0;h<c.length;h+=1)u=At(u,c[h]);r=new Vn({props:u});const d=[t[17].icon,{name:t[17].icon.name},{size:t[19]===t[0]&&t[17].activeIcon&&t[17].activeIcon.size*(t[5]?1.2:1)||t[17].icon.size*(t[5]?1.2:1)},{top:0}];let f={};for(let h=0;h<d.length;h+=1)f=At(f,d[h]);return s=new Vn({props:f}),{c(){e=B("div"),n=B("i"),we(r.$$.fragment),i=ae(),o=B("i"),we(s.$$.fragment),this.h()},l(h){e=M(h,"DIV",{class:!0});var m=j(e);n=M(m,"I",{});var w=j(n);ve(r.$$.fragment,w),w.forEach(A),i=le(m),o=M(m,"I",{});var _=j(o);ve(s.$$.fragment,_),_.forEach(A),m.forEach(A),this.h()},h(){Pn(n,"hidden",t[19]!==t[0]),Pn(o,"hidden",t[19]===t[0]),P(e,"class",a=`${!t[17].text&&"py-2"}`)},m(h,m){Q(h,e,m),R(e,n),ye(r,n,null),R(e,i),R(e,o),ye(s,o,null),l=!0},p(h,m){const w=m&37?xt(c,[m&4&&Pt(h[17].icon),m&4&&{name:h[17].activeIcon?h[17].activeIcon.name:h[17].icon.name},{size:h[19]===h[0]&&h[17].activeIcon&&h[17].activeIcon.size*(h[5]?1.2:1)||h[17].icon.size*(h[5]?1.2:1)},c[3]]):{};r.$set(w),(!l||m&1)&&Pn(n,"hidden",h[19]!==h[0]);const _=m&37?xt(d,[m&4&&Pt(h[17].icon),m&4&&{name:h[17].icon.name},{size:h[19]===h[0]&&h[17].activeIcon&&h[17].activeIcon.size*(h[5]?1.2:1)||h[17].icon.size*(h[5]?1.2:1)},d[3]]):{};s.$set(_),(!l||m&1)&&Pn(o,"hidden",h[19]===h[0]),(!l||m&4&&a!==(a=`${!h[17].text&&"py-2"}`))&&P(e,"class",a)},i(h){l||(J(r.$$.fragment,h),J(s.$$.fragment,h),l=!0)},o(h){X(r.$$.fragment,h),X(s.$$.fragment,h),l=!1},d(h){h&&A(e),_e(r),_e(s)}}}function rf(t){let e,n=t[17].text+"",r,i;return{c(){e=B("div"),r=rt(n),this.h()},l(o){e=M(o,"DIV",{class:!0});var s=j(e);r=it(s,n),s.forEach(A),this.h()},h(){P(e,"class",i=`${t[17].icon?"mt-[2px]":"py-1 text-lg"} ${t[19]===t[0]&&!t[17].icon?" font-bold":""}`)},m(o,s){Q(o,e,s),R(e,r)},p(o,s){s&4&&n!==(n=o[17].text+"")&&Wn(r,n),s&5&&i!==(i=`${o[17].icon?"mt-[2px]":"py-1 text-lg"} ${o[19]===o[0]&&!o[17].icon?" font-bold":""}`)&&P(e,"class",i)},d(o){o&&A(e)}}}function of(t){let e,n,r,i,o,s,a,l=t[17].icon&&nf(t),c=t[17].text&&rf(t);function u(){return t[14](t[19])}return{c(){e=B("div"),l&&l.c(),n=ae(),c&&c.c(),r=ae(),this.h()},l(d){e=M(d,"DIV",{class:!0});var f=j(e);l&&l.l(f),n=le(f),c&&c.l(f),r=le(f),f.forEach(A),this.h()},h(){P(e,"class",i=`flex-1 flex flex-col justify-center text-center py-1 active:opacity-80 cursor-pointer ${t[19]===t[0]?"text-primary dark:text-dark":"text-black/80 dark:text-white/90"} ${t[5]?"text-lg":"text-sm"} ${t[7]} ${t[19]===t[0]&&t[8]}`)},m(d,f){Q(d,e,f),l&&l.m(e,null),R(e,n),c&&c.m(e,null),R(e,r),o=!0,s||(a=Jr(e,"click",u),s=!0)},p(d,f){t=d,t[17].icon?l?(l.p(t,f),f&4&&J(l,1)):(l=nf(t),l.c(),J(l,1),l.m(e,n)):l&&(Mt(),X(l,1,1,()=>{l=null}),jt()),t[17].text?c?c.p(t,f):(c=rf(t),c.c(),c.m(e,r)):c&&(c.d(1),c=null),(!o||f&417&&i!==(i=`flex-1 flex flex-col justify-center text-center py-1 active:opacity-80 cursor-pointer ${t[19]===t[0]?"text-primary dark:text-dark":"text-black/80 dark:text-white/90"} ${t[5]?"text-lg":"text-sm"} ${t[7]} ${t[19]===t[0]&&t[8]}`))&&P(e,"class",i)},i(d){o||(J(l),o=!0)},o(d){X(l),o=!1},d(d){d&&A(e),l&&l.d(),c&&c.d(),s=!1,a()}}}function Vb(t){let e,n,r,i,o,s,a,l=t[3]&&tf(t),c=Lt(t[2]),u=[];for(let f=0;f<c.length;f+=1)u[f]=of(ef(t,c,f));const d=f=>X(u[f],1,1,()=>{u[f]=null});return{c(){e=B("div"),l&&l.c(),n=ae(),r=B("div");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=M(f,"DIV",{class:!0,style:!0});var h=j(e);l&&l.l(h),n=le(h),r=M(h,"DIV",{class:!0});var m=j(r);for(let w=0;w<u.length;w+=1)u[w].l(m);m.forEach(A),h.forEach(A),this.h()},h(){P(r,"class",i=`flex justify-between ${t[1]&&"flex-col"}`),P(e,"class",o=`bg-white dark:bg-gray-800 relative ${t[6]}`),y(e,"padding-bottom","env(safe-area-inset-bottom)"),Aa(()=>t[15].call(e))},m(f,h){Q(f,e,h),l&&l.m(e,null),R(e,n),R(e,r);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(r,null);s=xa(e,t[15].bind(e)),a=!0},p(f,[h]){if(f[3]?l?l.p(f,h):(l=tf(f),l.c(),l.m(e,n)):l&&(l.d(1),l=null),h&8613){c=Lt(f[2]);let m;for(m=0;m<c.length;m+=1){const w=ef(f,c,m);u[m]?(u[m].p(w,h),J(u[m],1)):(u[m]=of(w),u[m].c(),J(u[m],1),u[m].m(r,null))}for(Mt(),m=c.length;m<u.length;m+=1)d(m);jt()}(!a||h&2&&i!==(i=`flex justify-between ${f[1]&&"flex-col"}`))&&P(r,"class",i),(!a||h&64&&o!==(o=`bg-white dark:bg-gray-800 relative ${f[6]}`))&&P(e,"class",o)},i(f){if(!a){for(let h=0;h<c.length;h+=1)J(u[h]);a=!0}},o(f){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)X(u[h]);a=!1},d(f){f&&A(e),l&&l.d(),_r(u,f),s()}}}function qb(t,e,n){let r,i,{vertical:o=!1}=e,{labels:s=[]}=e,{active:a=0}=e,{line:l=!1}=e,{lineW:c=4}=e,{love:u=!1}=e,{injClass:d=""}=e,{tabInjClass:f=""}=e,{activeTabInjClass:h=""}=e,{activeInjClass:m=""}=e;const w=zi(),_=C=>{n(0,a=C),w("change",a)};let D=0;const v=C=>_(C);function k(){D=this.clientWidth,n(10,D)}return t.$$set=C=>{"vertical"in C&&n(1,o=C.vertical),"labels"in C&&n(2,s=C.labels),"active"in C&&n(0,a=C.active),"line"in C&&n(3,l=C.line),"lineW"in C&&n(4,c=C.lineW),"love"in C&&n(5,u=C.love),"injClass"in C&&n(6,d=C.injClass),"tabInjClass"in C&&n(7,f=C.tabInjClass),"activeTabInjClass"in C&&n(8,h=C.activeTabInjClass),"activeInjClass"in C&&n(9,m=C.activeInjClass)},t.$$.update=()=>{t.$$.dirty&1044&&n(11,r=D/s.length/c),t.$$.dirty&3077&&n(12,i=a*(D/s.length)+D/s.length/2-r/2)},[a,o,s,l,c,u,d,f,h,m,D,r,i,_,v,k]}class sf extends Oe{constructor(e){super(),$e(this,e,qb,Vb,Pe,{vertical:1,labels:2,active:0,line:3,lineW:4,love:5,injClass:6,tabInjClass:7,activeTabInjClass:8,activeInjClass:9})}}function Qc(t,e={}){const{fees:n=t.fees,formatters:r=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:n,formatters:r,serializers:i}}const eu=Qc({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Gb="1.19.7",Zb=t=>t,Pa=t=>t,Kb=()=>`viem@${Gb}`;class se extends Error{constructor(e,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Kb()});const r=n.cause instanceof se?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof se&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return X0(this,e)}}function X0(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?X0(t.cause,e):e?null:t}class Yb extends se{constructor({max:e,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Jb extends se{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class Xb extends se{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function On(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function bt(t){return On(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function jr(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,r=0;for(let i=0;i<n.length-1&&n[e==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=e==="left"?n.slice(r):n.slice(0,n.length-r),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class Q0 extends se{constructor({offset:e,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class eh extends se{constructor({size:e,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Fi(t,{dir:e,size:n=32}={}){return typeof t=="string"?lr(t,{dir:e,size:n}):Qb(t,{dir:e,size:n})}function lr(t,{dir:e,size:n=32}={}){if(n===null)return t;const r=t.replace("0x","");if(r.length>n*2)throw new eh({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function Qb(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new eh({size:t.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=e==="right";r[o?i:n-i-1]=t[o?i:t.length-i-1]}return r}const ew=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Xn(t,e={}){return typeof t=="number"||typeof t=="bigint"?Re(t,e):typeof t=="string"?tu(t,e):typeof t=="boolean"?th(t,e):Do(t,e)}function th(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(Er(n,{size:e.size}),Fi(n,{size:e.size})):n}function Do(t,e={}){let n="";for(let i=0;i<t.length;i++)n+=ew[t[i]];const r=`0x${n}`;return typeof e.size=="number"?(Er(r,{size:e.size}),Fi(r,{dir:"right",size:e.size})):r}function Re(t,e={}){const{signed:n,size:r}=e,i=BigInt(t);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof t=="bigint"?"n":"";throw new Yb({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${t}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Fi(a,{size:r}):a}const tw=new TextEncoder;function tu(t,e={}){const n=tw.encode(t);return Do(n,e)}const nw=new TextEncoder;function hr(t,e={}){return typeof t=="number"||typeof t=="bigint"?iw(t,e):typeof t=="boolean"?rw(t,e):On(t)?nu(t,e):Hn(t,e)}function rw(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(Er(n,{size:e.size}),Fi(n,{size:e.size})):n}const Ln={zero:48,nine:57,A:65,F:70,a:97,f:102};function af(t){if(t>=Ln.zero&&t<=Ln.nine)return t-Ln.zero;if(t>=Ln.A&&t<=Ln.F)return t-(Ln.A-10);if(t>=Ln.a&&t<=Ln.f)return t-(Ln.a-10)}function nu(t,e={}){let n=t;e.size&&(Er(n,{size:e.size}),n=Fi(n,{dir:"right",size:e.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=af(r.charCodeAt(a++)),c=af(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new se(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function iw(t,e){const n=Re(t,e);return nu(n)}function Hn(t,e={}){const n=nw.encode(t);return typeof e.size=="number"?(Er(n,{size:e.size}),Fi(n,{dir:"right",size:e.size})):n}function Er(t,{size:e}){if(bt(t)>e)throw new Xb({givenSize:bt(t),maxSize:e})}function Oa(t,e={}){const{signed:n}=e;e.size&&Er(t,{size:e.size});const r=BigInt(t);if(!n)return r;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function ow(t,e={}){let n=t;if(e.size&&(Er(n,{size:e.size}),n=jr(n)),jr(n)==="0x00")return!1;if(jr(n)==="0x01")return!0;throw new Jb(n)}function Ut(t,e={}){return Number(Oa(t,e))}function nh(t,e={}){let n=nu(t);return e.size&&(Er(n,{size:e.size}),n=jr(n,{dir:"right"})),new TextDecoder().decode(n)}const rh={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function ih(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Ut(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Ut(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?rh[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function oh(t){var n;const e=(n=t.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:ih(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function _n(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const sw={"0x0":"reverted","0x1":"success"};function aw(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>_n(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Ut(t.transactionIndex):null,status:t.status?sw[t.status]:null,type:t.type?rh[t.type]||t.type:null}}const lw={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function $a(t){return{...t,gas:typeof t.gas<"u"?Re(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?Re(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?Re(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?Re(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?Re(t.nonce):void 0,type:typeof t.type<"u"?lw[t.type]:void 0,value:typeof t.value<"u"?Re(t.value):void 0}}class So extends se{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Ql extends se{constructor({blockNumber:e,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class cw extends se{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class uw extends se{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class sh extends se{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const dw={gwei:9,wei:18},fw={ether:-9,wei:9},hw={ether:-18,gwei:-9};function Zs(t,e){let n=t.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(e,"0");let[i,o]=[n.slice(0,n.length-e),n.slice(n.length-e)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function Yt(t,e="wei"){return Zs(t,fw[e])}class gi extends se{constructor({cause:e,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(gi,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(gi,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Ks extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Yt(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Ks,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class ec extends se{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Yt(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(ec,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class tc extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(tc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class nc extends se{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(nc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class rc extends se{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(rc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class ic extends se{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(ic,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class oc extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(oc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class sc extends se{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(sc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class ac extends se{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(ac,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Ys extends se{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Yt(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Yt(r)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Ys,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Na extends se{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const pw=/^0x[a-fA-F0-9]{40}$/;function Ci(t){return pw.test(t)}function qn(t){return typeof t[0]=="string"?ru(t):gw(t)}function gw(t){let e=0;for(const i of t)e+=i.length;const n=new Uint8Array(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return n}function ru(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}function mw(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const lf=/^tuple(?<array>(\[(\d*)\])*)$/;function lc(t){let e=t.type;if(lf.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let i=0;i<n;i++){const o=t.components[i];e+=lc(o),i<n-1&&(e+=", ")}const r=mw(lf,t.type);return e+=`)${(r==null?void 0:r.array)??""}`,lc({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function no(t){let e="";const n=t.length;for(let r=0;r<n;r++){const i=t[r];e+=lc(i),r!==n-1&&(e+=", ")}return e}function bw(t){return t.type==="function"?`function ${t.name}(${no(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${no(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${no(t.inputs)})`:t.type==="error"?`error ${t.name}(${no(t.inputs)})`:t.type==="constructor"?`constructor(${no(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function Ae(t,e,n){return r=>{var i;return((i=t[e.name||n])==null?void 0:i.call(t,r))??e(t,r)}}function Xr(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new xw(t.type);return`${t.name}(${Ra(t.inputs,{includeName:e})})`}function Ra(t,{includeName:e=!1}={}){return t?t.map(n=>ww(n,{includeName:e})).join(e?", ":","):""}function ww(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Ra(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class vw extends se{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class cf extends se{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class iu extends se{constructor({data:e,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Ra(n,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=r}}class Ba extends se{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class yw extends se{constructor({expectedLength:e,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class _w extends se{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${bt(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Cw extends se{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class ah extends se{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class Ew extends se{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class kw extends se{constructor(e,{docsPath:n}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class uf extends se{constructor(e,{docsPath:n}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class Js extends se{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Dw extends se{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Sw extends se{constructor({expectedSize:e,givenSize:n}){super(`Expected bytes${e}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class Fr extends se{constructor({abiItem:e,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Ra(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=n,this.params=r,this.size=i}}class Wi extends se{constructor({abiItem:e,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${Xr(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class Iw extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Tw extends se{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class Aw extends se{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class xw extends se{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class Pw extends se{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function Ow(t){let e=!0,n="",r=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&r++,a===")"&&r--,!!e){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}i+=a,n+=a}}if(!o)throw new se("Unable to normalize signature.");return i}const lh=t=>{const e=(()=>typeof t=="string"?t:bw(t))();return Ow(e)},$w=t=>lh(t);function df(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function ch(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function ff(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Nw(t,e){ch(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Ps=BigInt(2**32-1),hf=BigInt(32);function Rw(t,e=!1){return e?{h:Number(t&Ps),l:Number(t>>hf&Ps)}:{h:Number(t>>hf&Ps)|0,l:Number(t&Ps)|0}}function Bw(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=Rw(t[i],e);[n[i],r[i]]=[o,s]}return[n,r]}const Mw=(t,e,n)=>t<<n|e>>>32-n,jw=(t,e,n)=>e<<n|t>>>32-n,Uw=(t,e,n)=>e<<n-32|t>>>64-n,Lw=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const zw=t=>t instanceof Uint8Array,Fw=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Ww=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ww)throw new Error("Non little-endian hardware is not supported");function Hw(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function uh(t){if(typeof t=="string"&&(t=Hw(t)),!zw(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class Vw{clone(){return this._cloneInto()}}function qw(t){const e=r=>t().update(uh(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[dh,fh,hh]=[[],[],[]],Gw=BigInt(0),ro=BigInt(1),Zw=BigInt(2),Kw=BigInt(7),Yw=BigInt(256),Jw=BigInt(113);for(let t=0,e=ro,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],dh.push(2*(5*r+n)),fh.push((t+1)*(t+2)/2%64);let i=Gw;for(let o=0;o<7;o++)e=(e<<ro^(e>>Kw)*Jw)%Yw,e&Zw&&(i^=ro<<(ro<<BigInt(o))-ro);hh.push(i)}const[Xw,Qw]=Bw(hh,!0),pf=(t,e,n)=>n>32?Uw(t,e,n):Mw(t,e,n),gf=(t,e,n)=>n>32?Lw(t,e,n):jw(t,e,n);function e3(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=pf(c,u,1)^n[a],f=gf(c,u,1)^n[a+1];for(let h=0;h<50;h+=10)t[s+h]^=d,t[s+h+1]^=f}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=fh[s],l=pf(i,o,a),c=gf(i,o,a),u=dh[s];i=t[u],o=t[u+1],t[u]=l,t[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=Xw[r],t[1]^=Qw[r]}n.fill(0)}class ou extends Vw{constructor(e,n,r,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,df(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Fw(this.state)}keccak(){e3(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){ff(this);const{blockLen:n,state:r}=this;e=uh(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=e[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:i}=this;e[r]^=n,n&128&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){ff(this,!1),ch(e),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);e.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return df(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Nw(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new ou(n,r,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const t3=(t,e,n)=>qw(()=>new ou(e,t,n)),n3=t3(1,136,256/8);function Wt(t,e){const n=e||"hex",r=n3(On(t,{strict:!1})?hr(t):t);return n==="bytes"?r:Xn(r)}const r3=t=>Wt(hr(t)),su=t=>r3($w(t));function gt(t,e,n,{strict:r}={}){return On(t,{strict:!1})?o3(t,e,n,{strict:r}):i3(t,e,n,{strict:r})}function ph(t,e){if(typeof e=="number"&&e>0&&e>bt(t)-1)throw new Q0({offset:e,position:"start",size:bt(t)})}function gh(t,e,n){if(typeof e=="number"&&typeof n=="number"&&bt(t)!==n-e)throw new Q0({offset:n,position:"end",size:bt(t)})}function i3(t,e,n,{strict:r}={}){ph(t,e);const i=t.slice(e,n);return r&&gh(i,e,n),i}function o3(t,e,n,{strict:r}={}){ph(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return r&&gh(i,e,n),i}function us(t,e){if(t.length!==e.length)throw new Cw({expectedLength:t.length,givenLength:e.length});const n=s3({params:t,values:e}),r=lu(n);return r.length===0?"0x":r}function s3({params:t,values:e}){const n=[];for(let r=0;r<t.length;r++)n.push(au({param:t[r],value:e[r]}));return n}function au({param:t,value:e}){const n=Ma(t.type);if(n){const[r,i]=n;return l3(e,{length:r,param:{...t,type:i}})}if(t.type==="tuple")return h3(e,{param:t});if(t.type==="address")return a3(e);if(t.type==="bool")return u3(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const r=t.type.startsWith("int");return d3(e,{signed:r})}if(t.type.startsWith("bytes"))return c3(e,{param:t});if(t.type==="string")return f3(e);throw new Iw(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function lu(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=bt(a)}const n=[],r=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(n.push(Re(e+i,{size:32})),r.push(a),i+=bt(a)):n.push(a)}return qn([...n,...r])}function a3(t){if(!Ci(t))throw new So({address:t});return{dynamic:!1,encoded:lr(t.toLowerCase())}}function l3(t,{length:e,param:n}){const r=e===null;if(!Array.isArray(t))throw new Aw(t);if(!r&&t.length!==e)throw new yw({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=au({param:n,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=lu(o);if(r){const a=Re(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?qn([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:qn(o.map(({encoded:s})=>s))}}function c3(t,{param:e}){const[,n]=e.type.split("bytes"),r=bt(t);if(!n){let i=t;return r%32!==0&&(i=lr(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:qn([lr(Re(r,{size:32})),i])}}if(r!==parseInt(n))throw new _w({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:lr(t,{dir:"right"})}}function u3(t){return{dynamic:!1,encoded:lr(th(t))}}function d3(t,{signed:e}){return{dynamic:!1,encoded:Re(t,{size:32,signed:e})}}function f3(t){const e=tu(t),n=Math.ceil(bt(e)/32),r=[];for(let i=0;i<n;i++)r.push(lr(gt(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:qn([lr(Re(bt(e),{size:32})),...r])}}function h3(t,{param:e}){let n=!1;const r=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=au({param:o,value:t[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?lu(r):qn(r.map(({encoded:i})=>i))}}function Ma(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const p3=t=>Wt(hr(t)),cu=t=>gt(p3(lh(t)),0,4);function ds({abi:t,args:e=[],name:n}){const r=On(n,{strict:!1}),i=t.filter(o=>r?o.type==="function"?cu(o)===n:o.type==="event"?su(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((a,l)=>{const c="inputs"in o&&o.inputs[l];return c?cc(a,c):!1}))return o}return i[0]}}function cc(t,e){const n=typeof t,r=e.type;switch(r){case"address":return Ci(t);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>cc(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(t)&&t.every(i=>cc(i,{...e,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function fs({abi:t,eventName:e,args:n}){var a;let r=t[0];if(e&&(r=ds({abi:t,args:n,name:e}),!r))throw new uf(e,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new uf(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=Xr(r),o=su(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((f,h)=>mf({param:u,value:c[d][h]})):c[d]?mf({param:u,value:c[d]}):null))??[])}return[o,...s]}function mf({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Wt(hr(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new Pw(t.type);return us([t],[e])}function ja(t,{method:e}){var r,i;const n={};return t.transport.type==="fallback"&&((i=(r=t.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&e===o&&(n[s]=l.request)})),o=>n[o]||t.request}async function mh(t,{address:e,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=ja(t,{method:"eth_newFilter"}),c=i?fs({abi:n,args:r,eventName:i}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Re(o):o,toBlock:typeof a=="bigint"?Re(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function pn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function kr({abi:t,args:e,functionName:n}){let r=t[0];if(n&&(r=ds({abi:t,args:e,name:n}),!r))throw new Js(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new Js(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=Xr(r),o=cu(i),s="inputs"in r&&r.inputs?us(r.inputs,e??[]):void 0;return ru([o,s??"0x"])}const bh={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},g3={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},m3={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function uu(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),r=Wt(Hn(n),"bytes"),i=(e?n.substring(`${e}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function vn(t,e){if(!Ci(t))throw new So({address:t});return uu(t,e)}function Ua(t,e){if(e==="0x"&&t.length>0)throw new Ba;if(bt(e)&&bt(e)<32)throw new iu({data:e,params:t,size:bt(e)});return b3({data:e,params:t})}function b3({data:t,params:e}){const n=[];let r=0;for(let i=0;i<e.length;i++){if(r>=bt(t))throw new iu({data:t,params:e,size:bt(t)});const o=e[i],{consumed:s,value:a}=bi({data:t,param:o,position:r});n.push(a),r+=s}return n}function bi({data:t,param:e,position:n}){const r=Ma(e.type);if(r){const[o,s]=r;return v3(t,{length:o,param:{...e,type:s},position:n})}if(e.type==="tuple")return k3(t,{param:e,position:n});if(e.type==="string")return E3(t,{position:n});if(e.type.startsWith("bytes"))return _3(t,{param:e,position:n});const i=gt(t,n,n+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return C3(i,{param:e});if(e.type==="address")return w3(i);if(e.type==="bool")return y3(i);throw new Tw(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function w3(t){return{consumed:32,value:uu(gt(t,-20))}}function v3(t,{param:e,length:n,position:r}){if(!n){const s=Ut(gt(t,r,r+32,{strict:!0})),a=Ut(gt(t,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=bi({data:gt(t,s+32),param:e,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(Xs(e)){const s=Ma(e.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=Ut(gt(t,r,r+32,{strict:!0})),f=bi({data:gt(t,d),param:e,position:a?l:u*32});l+=f.consumed,c.push(f.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=bi({data:t,param:e,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function y3(t){return{consumed:32,value:ow(t)}}function _3(t,{param:e,position:n}){const[r,i]=e.type.split("bytes");if(!i){const s=Ut(gt(t,n,n+32,{strict:!0})),a=Ut(gt(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:gt(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:gt(t,n,n+parseInt(i),{strict:!0})}}function C3(t,{param:e}){const n=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Oa(t,{signed:n}):Ut(t,{signed:n})}}function E3(t,{position:e}){const n=Ut(gt(t,e,e+32,{strict:!0})),r=Ut(gt(t,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:nh(jr(gt(t,n+32,n+32+r,{strict:!0})))}}function k3(t,{param:e,position:n}){const r=e.components.length===0||e.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(Xs(e)){const s=Ut(gt(t,n,n+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const l=e.components[a],c=bi({data:gt(t,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],l=bi({data:t,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function Xs(t){var r;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(r=t.components)==null?void 0:r.some(Xs);const n=Ma(t.type);return!!(n&&Xs({...t,type:n[1]}))}function D3({abi:t,data:e}){const n=gt(e,0,4);if(n==="0x")throw new Ba;const i=[...t||[],g3,m3].find(o=>o.type==="error"&&n===cu(Xr(o)));if(!i)throw new ah(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Ua(i.inputs,gt(e,4)):void 0,errorName:i.name}}const Ht=(t,e,n)=>JSON.stringify(t,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(r,o):o},n);function wh({abiItem:t,args:e,includeFunctionName:n=!0,includeName:r=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Ht(e[o]):e[o]}`).join(", ")})`}function du(t,e="wei"){return Zs(t,dw[e])}function hs(t){const e=Object.entries(t).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=e.reduce((r,[i])=>Math.max(r,i.length),0);return e.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class S3 extends se{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class I3 extends se{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",hs(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class T3 extends se{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var m;const h=hs({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof f<"u"&&`${du(f)} ${((m=i==null?void 0:i.nativeCurrency)==null?void 0:m.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Yt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Yt(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class vh extends se{constructor({blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class yh extends se{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class A3 extends se{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class _h extends se{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var w;const h=n?pn(n):void 0,m=hs({from:h==null?void 0:h.address,to:d,value:typeof f<"u"&&`${du(f)} ${((w=i==null?void 0:i.nativeCurrency)==null?void 0:w.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Yt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Yt(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class fu extends se{constructor(e,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=ds({abi:n,args:r,name:s}),c=l?wh({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?Xr(l,{includeName:!0}):void 0,d=hs({address:i&&Zb(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class uc extends se{constructor({abi:e,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=D3({abi:e,data:n});const{abiItem:u,errorName:d,args:f}=s;if(d==="Error")l=f[0];else if(d==="Panic"){const[h]=f;l=bh[h]}else{const h=u?Xr(u,{includeName:!0}):void 0,m=u&&f?wh({abiItem:u,args:f,includeFunctionName:!1,includeName:!1}):void 0;a=[h?`Error: ${h}`:"",m&&m!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${m}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof ah&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class x3 extends se{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class hu extends se{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class wo extends se{constructor({body:e,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Pa(o)}`,e&&`Request body: ${Ht(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class P3 extends se{constructor({body:e,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Pa(r)}`,`Request body: ${Ht(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class pu extends se{constructor({body:e,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Pa(r)}`,`Request body: ${Ht(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class dc extends se{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Pa(n)}`,`Request body: ${Ht(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const O3=-1;class Qt extends se{constructor(e,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof pu?e.code:n??O3}}class Hi extends Qt{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Io extends Qt{constructor(e){super(e,{code:Io.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Io,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class To extends Qt{constructor(e){super(e,{code:To.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(To,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Ao extends Qt{constructor(e){super(e,{code:Ao.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Ao,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class xo extends Qt{constructor(e){super(e,{code:xo.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(xo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Ei extends Qt{constructor(e){super(e,{code:Ei.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Ei,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Wr extends Qt{constructor(e){super(e,{code:Wr.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Wr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Po extends Qt{constructor(e){super(e,{code:Po.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Po,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class ki extends Qt{constructor(e){super(e,{code:ki.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(ki,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Oo extends Qt{constructor(e){super(e,{code:Oo.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Oo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class $o extends Qt{constructor(e){super(e,{code:$o.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty($o,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class No extends Qt{constructor(e){super(e,{code:No.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(No,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Ro extends Qt{constructor(e){super(e,{code:Ro.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Ro,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Kt extends Hi{constructor(e){super(e,{code:Kt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Kt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Bo extends Hi{constructor(e){super(e,{code:Bo.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Bo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Mo extends Hi{constructor(e){super(e,{code:Mo.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Mo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class jo extends Hi{constructor(e){super(e,{code:jo.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Uo extends Hi{constructor(e){super(e,{code:Uo.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Uo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Gn extends Hi{constructor(e){super(e,{code:Gn.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Gn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class $3 extends Qt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const N3=3;function Lo(t,{abi:e,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=t instanceof hu?t:t instanceof se?t.walk(f=>"data"in f)||t.walk():{},d=(()=>t instanceof Ba?new x3({functionName:o}):[N3,Ei.code].includes(a)&&(l||c||u)?new uc({abi:e,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):t)();return new fu(d,{abi:e,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Vi extends se{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class R3 extends se{constructor(e,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var m;const h=hs({from:n==null?void 0:n.address,to:d,value:typeof f<"u"&&`${du(f)} ${((m=i==null?void 0:i.nativeCurrency)==null?void 0:m.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Yt(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Yt(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Yt(c)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function gu(t,e){const n=(t.details||"").toLowerCase(),r=t.walk(i=>i.code===gi.code);return r instanceof se?new gi({cause:t,message:r.details}):gi.nodeMessage.test(n)?new gi({cause:t,message:t.details}):Ks.nodeMessage.test(n)?new Ks({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):ec.nodeMessage.test(n)?new ec({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):tc.nodeMessage.test(n)?new tc({cause:t,nonce:e==null?void 0:e.nonce}):nc.nodeMessage.test(n)?new nc({cause:t,nonce:e==null?void 0:e.nonce}):rc.nodeMessage.test(n)?new rc({cause:t,nonce:e==null?void 0:e.nonce}):ic.nodeMessage.test(n)?new ic({cause:t}):oc.nodeMessage.test(n)?new oc({cause:t,gas:e==null?void 0:e.gas}):sc.nodeMessage.test(n)?new sc({cause:t,gas:e==null?void 0:e.gas}):ac.nodeMessage.test(n)?new ac({cause:t}):Ys.nodeMessage.test(n)?new Ys({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new Na({cause:t})}function B3(t,{docsPath:e,...n}){const r=(()=>{const i=gu(t,n);return i instanceof Na?t:i})();return new R3(r,{docsPath:e,...n})}function mu(t,{format:e}){if(!e)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in t&&(n[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=e(t||{});return r(i),n}function ps(t){const{account:e,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=t,s=e?pn(e):void 0;if(s&&!Ci(s.address))throw new So({address:s.address});if(o&&!Ci(o))throw new So({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new S3;if(r&&r>2n**256n-1n)throw new Ks({maxFeePerGas:r});if(i&&r&&i>r)throw new Ys({maxFeePerGas:r,maxPriorityFeePerGas:i})}class M3 extends se{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class bu extends se{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class j3 extends se{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Yt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class U3 extends se{constructor({blockHash:e,blockNumber:n}){let r="Block";e&&(r=`Block at hash "${e}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function pr(t,{blockHash:e,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,f;const o=r??"latest",s=i??!1,a=n!==void 0?Re(n):void 0;let l=null;if(e?l=await t.request({method:"eth_getBlockByHash",params:[e,s]}):l=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new U3({blockHash:e,blockNumber:n});return(((f=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:f.format)||oh)(l)}async function wu(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function L3(t,e){return Ch(t,e)}async function Ch(t,e){var o,s,a;const{block:n,chain:r=t.chain,request:i}=e||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await Ae(t,pr,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:t,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await t.request({method:"eth_maxPriorityFeePerGas"});return Oa(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):Ae(t,pr,"getBlock")({}),Ae(t,wu,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new bu;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function z3(t,e){return fc(t,e)}async function fc(t,e){var f,h;const{block:n,chain:r=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var m,w;return typeof((m=r==null?void 0:r.fees)==null?void 0:m.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:t,request:i}):((w=r==null?void 0:r.fees)==null?void 0:w.baseFeeMultiplier)??1.2})();if(s<1)throw new M3;const l=10**(((f=s.toString().split(".")[1])==null?void 0:f.length)??0),c=m=>m*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await Ae(t,pr,"getBlock")({});if(typeof((h=r==null?void 0:r.fees)==null?void 0:h.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:t,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new bu;const m=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await Ch(t,{block:u,chain:r,request:i}),w=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??w+m,maxPriorityFeePerGas:m}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await Ae(t,wu,"getGasPrice")({}))}}async function Eh(t,{address:e,blockTag:n="latest",blockNumber:r}){const i=await t.request({method:"eth_getTransactionCount",params:[e,r?Re(r):n]});return Ut(i)}function F3(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new I3({transaction:t})}async function La(t,e){const{account:n=t.account,chain:r,gas:i,nonce:o,type:s}=e;if(!n)throw new Vi;const a=pn(n),l=await Ae(t,pr,"getBlock")({blockTag:"latest"}),c={...e,from:a.address};if(typeof o>"u"&&(c.nonce=await Ae(t,Eh,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=F3(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await fc(t,{block:l,chain:r,request:c});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<d)throw new j3({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new bu;const{gasPrice:u}=await fc(t,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await Ae(t,vu,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),ps(c),c}async function vu(t,e){var i,o,s;const n=e.account??t.account;if(!n)throw new Vi({docsPath:"/docs/actions/public/estimateGas"});const r=pn(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:f,maxFeePerGas:h,maxPriorityFeePerGas:m,nonce:w,to:_,value:D,...v}=r.type==="local"?await La(t,e):e,C=(l?Re(l):void 0)||c;ps(e);const S=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,p=(S||$a)({...mu(v,{format:S}),from:r.address,accessList:a,data:u,gas:d,gasPrice:f,maxFeePerGas:h,maxPriorityFeePerGas:m,nonce:w,to:_,value:D}),I=await t.request({method:"eth_estimateGas",params:C?[p,C]:[p]});return BigInt(I)}catch(a){throw B3(a,{...e,account:r,chain:t.chain})}}async function W3(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=kr({abi:e,args:r,functionName:i});try{return await Ae(t,vu,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?pn(o.account):void 0;throw Lo(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const bf="/docs/contract/decodeEventLog";function gs({abi:t,data:e,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new Ew({docsPath:bf});const a=t.find(m=>m.type==="event"&&o===su(Xr(m)));if(!(a&&"name"in a)||a.type!=="event")throw new kw(o,{docsPath:bf});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(m=>!("name"in m&&m.name));let d=u?[]:{};const f=c.filter(m=>"indexed"in m&&m.indexed);for(let m=0;m<f.length;m++){const w=f[m],_=s[m];if(!_)throw new Wi({abiItem:a,param:w});d[w.name||m]=H3({param:w,value:_})}const h=c.filter(m=>!("indexed"in m&&m.indexed));if(h.length>0){if(e&&e!=="0x")try{const m=Ua(h,e);if(m)if(u)d=[...d,...m];else for(let w=0;w<h.length;w++)d[h[w].name]=m[w]}catch(m){if(i)throw m instanceof iu?new Fr({abiItem:a,data:m.data,params:m.params,size:m.size}):m}else if(i)throw new Fr({abiItem:a,data:"0x",params:h,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function H3({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(Ua([t],e)||[])[0]}async function yu(t,{address:e,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(h=>fs({abi:[h],eventName:h.name,args:a}))],o&&(d=d[0]));let f;return n?f=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,blockHash:n}]}):f=await t.request({method:"eth_getLogs",params:[{address:e,topics:d,fromBlock:typeof r=="bigint"?Re(r):r,toBlock:typeof i=="bigint"?Re(i):i}]}),f.map(h=>{var m;try{const{eventName:w,args:_}=u?gs({abi:u,data:h.data,topics:h.topics,strict:c}):{eventName:void 0,args:void 0};return _n(h,{args:_,eventName:w})}catch(w){let _,D;if(w instanceof Fr||w instanceof Wi){if(c)return;_=w.abiItem.name,D=(m=w.abiItem.inputs)==null?void 0:m.some(v=>!("name"in v&&v.name))}return _n(h,{args:D?[]:{},eventName:_})}}).filter(Boolean)}async function kh(t,{abi:e,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?ds({abi:e,name:o}):void 0,u=c?void 0:e.filter(d=>d.type==="event");return Ae(t,yu,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const _l="/docs/contract/decodeFunctionResult";function qi({abi:t,args:e,functionName:n,data:r}){let i=t[0];if(n&&(i=ds({abi:t,args:e,name:n}),!i))throw new Js(n,{docsPath:_l});if(i.type!=="function")throw new Js(void 0,{docsPath:_l});if(!i.outputs)throw new Dw(i.name,{docsPath:_l});const o=Ua(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const hc=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Dh=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],Sh=[...Dh,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],V3=[...Dh,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],wf=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],vf=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],q3=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],G3="0x82ad56cb";function Gi({blockNumber:t,chain:e,contract:n}){var i;const r=(i=e==null?void 0:e.contracts)==null?void 0:i[n];if(!r)throw new Ql({chain:e,contract:{name:n}});if(t&&r.blockCreated&&r.blockCreated>t)throw new Ql({blockNumber:t,chain:e,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function Z3(t,{docsPath:e,...n}){const r=(()=>{const i=gu(t,n);return i instanceof Na?t:i})();return new _h(r,{docsPath:e,...n})}const Cl=new Map;function _u({fn:t,id:e,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const d=u.map(({args:f})=>f);d.length!==0&&t(d).then(f=>{var h;i&&Array.isArray(f)&&f.sort(i);for(let m=0;m<u.length;m++){const{pendingPromise:w}=u[m];(h=w.resolve)==null||h.call(w,[f[m],f])}}).catch(f=>{var h;for(let m=0;m<u.length;m++){const{pendingPromise:w}=u[m];(h=w.reject)==null||h.call(w,f)}})},s=()=>Cl.delete(e),a=()=>l().map(({args:u})=>u),l=()=>Cl.get(e)||[],c=u=>Cl.set(e,[...l(),u]);return{flush:s,async schedule(u){const d={},f=new Promise((w,_)=>{d.resolve=w,d.reject=_});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:d}),f):(c({args:u,pendingPromise:d}),setTimeout(o,r),f)}}}async function za(t,e){var D,v,k,C;const{account:n=t.account,batch:r=!!((D=t.batch)!=null&&D.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:f,to:h,value:m,...w}=e,_=n?pn(n):void 0;try{ps(e);const T=(i?Re(i):void 0)||o,p=(C=(k=(v=t.chain)==null?void 0:v.formatters)==null?void 0:k.transactionRequest)==null?void 0:C.format,N=(p||$a)({...mu(w,{format:p}),from:_==null?void 0:_.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:f,to:h,value:m});if(r&&K3({request:N}))try{return await Y3(t,{...N,blockNumber:i,blockTag:o})}catch(W){if(!(W instanceof sh)&&!(W instanceof Ql))throw W}const L=await t.request({method:"eth_call",params:T?[N,T]:[N]});return L==="0x"?{data:void 0}:{data:L}}catch(S){const T=J3(S),{offchainLookup:p,offchainLookupSignature:I}=await _i(()=>import("./ccip.d1501653.js"),[],import.meta.url);if((T==null?void 0:T.slice(0,10))===I&&h)return{data:await p(t,{data:T,to:h})};throw Z3(S,{...e,account:_,chain:t.chain})}}function K3({request:t}){const{data:e,to:n,...r}=t;return!(!e||e.startsWith(G3)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function Y3(t,e){var w;const{batchSize:n=1024,wait:r=0}=typeof((w=t.batch)==null?void 0:w.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=e;let c=a;if(!c){if(!t.chain)throw new sh;c=Gi({blockNumber:i,chain:t.chain,contract:"multicall3"})}const d=(i?Re(i):void 0)||o,{schedule:f}=_u({id:`${t.uid}.${d}`,wait:r,shouldSplitBatch(_){return _.reduce((v,{data:k})=>v+(k.length-2),0)>n*2},fn:async _=>{const D=_.map(C=>({allowFailure:!0,callData:C.data,target:C.to})),v=kr({abi:hc,args:[D],functionName:"aggregate3"}),k=await t.request({method:"eth_call",params:[{data:v,to:c},d]});return qi({abi:hc,args:[D],functionName:"aggregate3",data:k||"0x"})}}),[{returnData:h,success:m}]=await f({data:s,to:l});if(!m)throw new hu({data:h});return h==="0x"?{data:void 0}:{data:h}}function J3(t){if(!(t instanceof se))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function gr(t,{abi:e,address:n,args:r,functionName:i,...o}){const s=kr({abi:e,args:r,functionName:i});try{const{data:a}=await Ae(t,za,"call")({data:s,to:n,...o});return qi({abi:e,args:r,functionName:i,data:a||"0x"})}catch(a){throw Lo(a,{abi:e,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function X3(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?pn(s.account):void 0,l=kr({abi:e,args:r,functionName:o});try{const{data:c}=await Ae(t,za,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:qi({abi:e,args:r,functionName:o,data:c||"0x"}),request:{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw Lo(c,{abi:e,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const El=new Map,yf=new Map;let Q3=0;function Zi(t,e,n){const r=++Q3,i=()=>El.get(t)||[],o=()=>{const u=i();El.set(t,u.filter(d=>d.id!==r))},s=()=>{const u=yf.get(t);i().length===1&&u&&u(),o()},a=i();if(El.set(t,[...a,{id:r,fns:e}]),a&&a.length>0)return s;const l={};for(const u in e)l[u]=(...d)=>{var h,m;const f=i();if(f.length!==0)for(const w of f)(m=(h=w.fns)[u])==null||m.call(h,...d)};const c=n(l);return typeof c=="function"&&yf.set(t,c),s}async function Qs(t){return new Promise(e=>setTimeout(e,t))}function ms(t,{emitOnBegin:e,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await Qs(l);const c=async()=>{i&&(await t({unpoll:o}),await Qs(r),c())};c()})(),o}const e5=new Map,t5=new Map;function n5(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=e(t,e5),r=e(t,t5);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function r5(t,{cacheKey:e,cacheTime:n=1/0}){const r=n5(e),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=t(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const i5=t=>`blockNumber.${t}`;async function bs(t,{cacheTime:e=t.cacheTime,maxAge:n}={}){const r=await r5(()=>t.request({method:"eth_blockNumber"}),{cacheKey:i5(t.uid),cacheTime:n??e});return BigInt(r)}async function Fa(t,{filter:e}){const n="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?gs({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return _n(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof Fr||s instanceof Wi){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return _n(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function Wa(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function o5(t,{abi:e,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){return(typeof l<"u"?l:t.transport.type!=="webSocket")?(()=>{const m=Ht(["watchContractEvent",n,r,i,t.uid,o,c]),w=u??!1;return Zi(m,{onLogs:a,onError:s},_=>{let D,v,k=!1;const C=ms(async()=>{var S;if(!k){try{v=await Ae(t,mh,"createContractEventFilter")({abi:e,address:n,args:r,eventName:o,strict:w})}catch{}k=!0;return}try{let T;if(v)T=await Ae(t,Fa,"getFilterChanges")({filter:v});else{const p=await Ae(t,bs,"getBlockNumber")({});D&&D!==p?T=await Ae(t,kh,"getContractEvents")({abi:e,address:n,args:r,eventName:o,fromBlock:D+1n,toBlock:p,strict:w}):T=[],D=p}if(T.length===0)return;if(i)_.onLogs(T);else for(const p of T)_.onLogs([p])}catch(T){v&&T instanceof Wr&&(k=!1),(S=_.onError)==null||S.call(_,T)}},{emitOnBegin:!0,interval:c});return async()=>{v&&await Ae(t,Wa,"uninstallFilter")({filter:v}),C()}})})():(()=>{let m=!0,w=()=>m=!1;return(async()=>{try{const _=o?fs({abi:e,eventName:o,args:r}):[],{unsubscribe:D}=await t.transport.subscribe({params:["logs",{address:n,topics:_}],onData(v){var C;if(!m)return;const k=v.result;try{const{eventName:S,args:T}=gs({abi:e,data:k.data,topics:k.topics,strict:u}),p=_n(k,{args:T,eventName:S});a([p])}catch(S){let T,p;if(S instanceof Fr||S instanceof Wi){if(u)return;T=S.abiItem.name,p=(C=S.abiItem.inputs)==null?void 0:C.some(N=>!("name"in N&&N.name))}const I=_n(k,{args:p?[]:{},eventName:T});a([I])}},onError(v){s==null||s(v)}});w=D,m||w()}catch(_){s==null||s(_)}})(),w})()}function Ih({chain:t,currentChainId:e}){if(!t)throw new uw;if(e!==t.id)throw new cw({chain:t,currentChainId:e})}function s5(t,{docsPath:e,...n}){const r=(()=>{const i=gu(t,n);return i instanceof Na?t:i})();return new T3(r,{docsPath:e,...n})}async function zo(t){const e=await t.request({method:"eth_chainId"});return Ut(e)}async function Cu(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Eu(t,e){var w,_,D,v;const{account:n=t.account,chain:r=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f,...h}=e;if(!n)throw new Vi({docsPath:"/docs/actions/wallet/sendTransaction"});const m=pn(n);try{ps(e);let k;if(r!==null&&(k=await Ae(t,zo,"getChainId")({}),Ih({currentChainId:k,chain:r})),m.type==="local"){const p=await Ae(t,La,"prepareTransactionRequest")({account:m,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f,...h});k||(k=await Ae(t,zo,"getChainId")({}));const I=(w=r==null?void 0:r.serializers)==null?void 0:w.transaction,N=await m.signTransaction({...p,chainId:k},{serializer:I});return await Ae(t,Cu,"sendRawTransaction")({serializedTransaction:N})}const C=(v=(D=(_=t.chain)==null?void 0:_.formatters)==null?void 0:D.transactionRequest)==null?void 0:v.format,T=(C||$a)({...mu(h,{format:C}),accessList:i,data:o,from:m.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f});return await t.request({method:"eth_sendTransaction",params:[T]})}catch(k){throw s5(k,{...e,account:m,chain:e.chain||void 0})}}async function a5(t,{abi:e,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=kr({abi:e,args:r,functionName:o});return await Ae(t,Eu,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function l5(t,{chain:e}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:Re(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const pc=256;let Os=pc,$s;function c5(t=11){if(!$s||Os+t>pc*2){$s="",Os=0;for(let e=0;e<pc;e++)$s+=(256+Math.random()*256|0).toString(16).substring(1)}return $s.substring(Os,Os+++t)}function Th(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,l=t.account?pn(t.account):void 0,{config:c,request:u,value:d}=t.transport({chain:a,pollingInterval:o}),f={...c,...d},h={account:l,batch:e,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:f,type:s,uid:c5()};function m(w){return _=>{const D=_(w);for(const k in h)delete D[k];const v={...w,...D};return Object.assign(v,{extend:m(v)})}}return Object.assign(h,{extend:m(h)})}function Ah(t,{delay:e=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof e=="function"?e({count:a,error:c}):e;u&&await Qs(u),s({count:a+1})};try{const c=await t();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const xh=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof wo&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function u5(t,{retryDelay:e=150,retryCount:n=3}={}){return async r=>Ah(async()=>{try{return await t(r)}catch(i){const o=i;switch(o.code){case Io.code:throw new Io(o);case To.code:throw new To(o);case Ao.code:throw new Ao(o);case xo.code:throw new xo(o);case Ei.code:throw new Ei(o);case Wr.code:throw new Wr(o);case Po.code:throw new Po(o);case ki.code:throw new ki(o);case Oo.code:throw new Oo(o);case $o.code:throw new $o(o);case No.code:throw new No(o);case Ro.code:throw new Ro(o);case Kt.code:throw new Kt(o);case Bo.code:throw new Bo(o);case Mo.code:throw new Mo(o);case jo.code:throw new jo(o);case Uo.code:throw new Uo(o);case Gn.code:throw new Gn(o);case 5e3:throw new Kt(o);default:throw i instanceof se?i:new $3(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof wo){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:n,shouldRetry:({error:i})=>!xh(i)})}function Ha({key:t,name:e,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:u5(n,{retryCount:r,retryDelay:i}),value:a}}function ku(t,e={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>Ha({key:n,name:r,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function _f(t,e={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=t,d=()=>{};const f=Ha({key:n,name:r,async request({method:h,params:m}){const w=async(_=0)=>{const D=u[_]({chain:a,retryCount:0,timeout:c});try{const v=await D.request({method:h,params:m});return d({method:h,params:m,response:v,transport:D,status:"success"}),v}catch(v){if(d({error:v,method:h,params:m,transport:D,status:"error"}),xh(v)||_===u.length-1)throw v;return w(_+1)}};return w()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:h=>d=h,transports:u.map(h=>h({chain:a,retryCount:0}))});if(i){const h=typeof i=="object"?i:{};d5({chain:a,interval:h.interval??l,onTransports:m=>u=m,sampleCount:h.sampleCount,timeout:h.timeout,transports:u,weights:h.weights})}return f}}function d5({chain:t,interval:e=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async m=>{const w=m({chain:t,retryCount:0,timeout:i}),_=Date.now();let D,v;try{await w.request({method:"net_listening"}),v=1}catch{v=0}finally{D=Date.now()}return{latency:D-_,success:v}}));c.push(d),c.length>r&&c.shift();const f=Math.max(...c.map(m=>Math.max(...m.map(({latency:w})=>w)))),h=o.map((m,w)=>{const _=c.map(S=>S[w].latency),v=1-_.reduce((S,T)=>S+T,0)/_.length/f,k=c.map(S=>S[w].success),C=k.reduce((S,T)=>S+T,0)/k.length;return C===0?[0,w]:[l*v+a*C,w]}).sort((m,w)=>w[0]-m[0]);n(h.map(([,m])=>o[m])),await Qs(e),u()};u()}class Ph extends se{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function f5(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Cf=f5();function Oh(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(e)},n)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let gc=0;async function h5(t,{body:e,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await Oh(async({signal:u})=>await fetch(t,{...n,body:Array.isArray(e)?Ht(e.map(f=>({jsonrpc:"2.0",id:f.id??gc++,...f}))):Ht({jsonrpc:"2.0",id:e.id??gc++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new dc({body:e,url:t}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new wo({body:e,details:Ht(c.error)||l.statusText,headers:l.headers,status:l.status,url:t});return c}catch(l){throw l instanceof wo||l instanceof dc?l:new wo({body:e,details:l.message,url:t})}}const kl=new Map;async function Dl(t){let e=kl.get(t);if(e)return e;const{schedule:n}=_u({id:t,fn:async()=>{const o=new Cf(t),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),f=d.method==="eth_subscription",h=f?d.params.subscription:d.id,m=f?a:s,w=m.get(h);w&&w({data:u}),f||m.delete(h)},c=()=>{kl.delete(t),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===Cf.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),e=Object.assign(o,{requests:s,subscriptions:a}),kl.set(t,e),[e]}}),[r,[i]]=await n();return i}function p5(t,{body:e,onResponse:n}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new P3({body:e,url:t.url,details:"Socket is closed."});const r=gc++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(r,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:r})),t}async function g5(t,{body:e,timeout:n=1e4}){return Oh(()=>new Promise(r=>wi.webSocket(t,{body:e,onResponse:r})),{errorInstance:new dc({body:e,url:t.url}),timeout:n})}const wi={http:h5,webSocket:p5,webSocketAsync:g5};function m5(t,e={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},f=e.retryCount??l,h=c??e.timeout??1e4,m=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!m)throw new Ph;return Ha({key:i,name:o,async request({method:w,params:_}){const D={method:w,params:_},{schedule:v}=_u({id:`${t}`,wait:d,shouldSplitBatch(T){return T.length>u},fn:T=>wi.http(m,{body:T,fetchOptions:r,timeout:h}),sort:(T,p)=>T.id-p.id}),k=async T=>n?v(T):[await wi.http(m,{body:T,fetchOptions:r,timeout:h})],[{error:C,result:S}]=await k(D);if(C)throw new pu({body:D,error:C,url:m});return S},retryCount:f,retryDelay:s,timeout:h,type:"http"},{fetchOptions:r,url:t})}}function Du(t,e){var r,i,o;if(!(t instanceof se))return!1;const n=t.walk(s=>s instanceof uc);return n instanceof uc?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===bh[50]):!1}function $h(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return On(e)?e:null}function zs(t){let e=new Uint8Array(32).fill(0);if(!t)return Do(e);const n=t.split(".");for(let r=n.length-1;r>=0;r-=1){const i=$h(n[r]),o=i?hr(i):Wt(Hn(n[r]),"bytes");e=Wt(qn([e,o]),"bytes")}return Do(e)}function b5(t){return`[${t.slice(2)}]`}function w5(t){const e=new Uint8Array(32).fill(0);return t?$h(t)||Wt(Hn(t)):Do(e)}function Va(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(Hn(e).byteLength+2);let r=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=Hn(i[o]);s.byteLength>255&&(s=Hn(b5(w5(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function v5(t,{blockNumber:e,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Gi({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=kr({abi:vf,functionName:"addr",...r!=null?{args:[zs(i),BigInt(r)]}:{args:[zs(i)]}}),l=await Ae(t,gr,"readContract")({address:s,abi:Sh,functionName:"resolve",args:[Xn(Va(i)),a],blockNumber:e,blockTag:n});if(l[0]==="0x")return null;const c=qi({abi:vf,args:r!=null?[zs(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||jr(c)==="0x00"?null:c}catch(a){if(Du(a,"resolve"))return null;throw a}}class y5 extends se{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class io extends se{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Su extends se{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class _5 extends se{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const C5=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,E5=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,k5=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,D5=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function S5(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=t})}}function Ef(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function Nh({uri:t,gatewayUrls:e}){const n=k5.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const r=Ef(e==null?void 0:e.ipfs,"https://ipfs.io"),i=Ef(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(C5),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||E5.test(t);if(t.startsWith("http")&&!u&&!d){let h=t;return e!=null&&e.arweave&&(h=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:h,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let f=t.replace(D5,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new Su({uri:t})}function Rh(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new y5({data:t});return t.image||t.image_url||t.image_data}async function I5({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(i=>i.json());return await Iu({gatewayUrls:t,uri:Rh(n)})}catch{throw new Su({uri:e})}}async function Iu({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:r}=Nh({uri:e,gatewayUrls:t});if(r||await S5(n))return n;throw new Su({uri:e})}function T5(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=e.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new io({reason:"Only EIP-155 supported"});if(!s)throw new io({reason:"Chain ID not found"});if(!l)throw new io({reason:"Contract address not found"});if(!i)throw new io({reason:"Token ID not found"});if(!a)throw new io({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function A5(t,{nft:e}){if(e.namespace==="erc721")return gr(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return gr(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new _5({namespace:e.namespace})}async function x5(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?P5(t,{gatewayUrls:e,record:n}):Iu({uri:n,gatewayUrls:e})}async function P5(t,{gatewayUrls:e,record:n}){const r=T5(n),i=await A5(t,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=Nh({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return Iu({uri:Rh(u),gatewayUrls:e})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),I5({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,l)})}async function Bh(t,{blockNumber:e,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Gi({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await Ae(t,gr,"readContract")({address:s,abi:Sh,functionName:"resolve",args:[Xn(Va(r)),kr({abi:wf,functionName:"text",args:[zs(r),i]})],blockNumber:e,blockTag:n});if(a[0]==="0x")return null;const l=qi({abi:wf,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(Du(a,"resolve"))return null;throw a}}async function O5(t,{blockNumber:e,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await Ae(t,Bh,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await x5(t,{record:s,gatewayUrls:r})}catch{return null}}async function $5(t,{address:e,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Gi({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{return(await Ae(t,gr,"readContract")({address:o,abi:V3,functionName:"reverse",args:[Xn(Va(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(Du(a,"reverse"))return null;throw a}}async function N5(t,{blockNumber:e,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Gi({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await Ae(t,gr,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Xn(Va(r))],blockNumber:e,blockTag:n});return s}async function R5(t){const e=ja(t,{method:"eth_newBlockFilter"}),n=await t.request({method:"eth_newBlockFilter"});return{id:n,request:e(n),type:"block"}}async function Mh(t,{address:e,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=ja(t,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(f=>fs({abi:[f],eventName:f.name,args:n}))],r&&(u=u[0]));const d=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?Re(o):o,toBlock:typeof a=="bigint"?Re(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function jh(t){const e=ja(t,{method:"eth_newPendingTransactionFilter"}),n=await t.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:e(n),type:"transaction"}}async function B5(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n?Re(n):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||r]});return BigInt(o)}async function M5(t,{blockHash:e,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Re(n):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Ut(o)}async function j5(t,{address:e,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Re(n):void 0,o=await t.request({method:"eth_getCode",params:[e,i||r]});if(o!=="0x")return o}function U5(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(n=>n.map(r=>BigInt(r)))}}async function L5(t,{blockCount:e,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Re(n):void 0,s=await t.request({method:"eth_feeHistory",params:[Re(e),o||r,i]});return U5(s)}async function z5(t,{filter:e}){const n=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?gs({abi:e.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return _n(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof Fr||s instanceof Wi){if("strict"in e&&e.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return _n(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const F5=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,W5=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function H5({domain:t,message:e,primaryType:n,types:r}){const i=typeof t>"u"?{}:t,o={EIP712Domain:Hh({domain:i}),...r};Wh({domain:i,message:e,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(V5({domain:i,types:o})),n!=="EIP712Domain"&&s.push(Uh({data:e,primaryType:n,types:o})),Wt(qn(s))}function V5({domain:t,types:e}){return Uh({data:t,primaryType:"EIP712Domain",types:e})}function Uh({data:t,primaryType:e,types:n}){const r=Lh({data:t,primaryType:e,types:n});return Wt(r)}function Lh({data:t,primaryType:e,types:n}){const r=[{type:"bytes32"}],i=[q5({primaryType:e,types:n})];for(const o of n[e]){const[s,a]=Fh({types:n,name:o.name,type:o.type,value:t[o.name]});r.push(s),i.push(a)}return us(r,i)}function q5({primaryType:t,types:e}){const n=Xn(G5({primaryType:t,types:e}));return Wt(n)}function G5({primaryType:t,types:e}){let n="";const r=zh({primaryType:t,types:e});r.delete(t);const i=[t,...Array.from(r).sort()];for(const o of i)n+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function zh({primaryType:t,types:e},n=new Set){const r=t.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||e[i]===void 0)return n;n.add(i);for(const o of e[i])zh({primaryType:o.type,types:e},n);return n}function Fh({types:t,name:e,type:n,value:r}){if(t[n]!==void 0)return[{type:"bytes32"},Wt(Lh({data:r,primaryType:n,types:t}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Wt(r)];if(n==="string")return[{type:"bytes32"},Wt(Xn(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>Fh({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Wt(us(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function Wh({domain:t,message:e,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,f=a[c],h=d.match(W5);if(h&&(typeof f=="number"||typeof f=="bigint")){const[_,D,v]=h;Re(f,{signed:D==="int",size:parseInt(v)/8})}if(d==="address"&&typeof f=="string"&&!Ci(f))throw new So({address:f});const m=d.match(F5);if(m){const[_,D]=m;if(D&&bt(f)!==parseInt(D))throw new Sw({expectedSize:parseInt(D),givenSize:bt(f)})}const w=i[d];w&&o(w,f)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),n!=="EIP712Domain"){const s=i[n];o(s,e)}}function Hh({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Sl="/docs/contract/encodeDeployData";function Vh({abi:t,args:e,bytecode:n}){if(!e||e.length===0)return n;const r=t.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new vw({docsPath:Sl});if(!("inputs"in r))throw new cf({docsPath:Sl});if(!r.inputs||r.inputs.length===0)throw new cf({docsPath:Sl});const i=us(r.inputs,e);return ru([n,i])}const Z5=`Ethereum Signed Message:
`;function K5(t,e){const n=(()=>typeof t=="string"?Hn(t):t.raw instanceof Uint8Array?t.raw:hr(t.raw))(),r=Hn(`${Z5}${n.length}`);return Wt(qn([r,n]),e)}function Y5(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function J5(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Ut(t.nonce):void 0,storageProof:t.storageProof?Y5(t.storageProof):void 0}}async function X5(t,{address:e,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Re(n):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return J5(a)}async function Q5(t,{address:e,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Re(n):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||r]})}async function Tu(t,{blockHash:e,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,f;const s=r||"latest",a=n!==void 0?Re(n):void 0;let l=null;if(i?l=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?l=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,Re(o)]}):(a||s)&&(l=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Re(o)]})),!l)throw new vh({blockHash:e,blockNumber:n,blockTag:s,hash:i,index:o});return(((f=(d=(u=t.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:f.format)||ih)(l)}async function ev(t,{hash:e,transactionReceipt:n}){const[r,i]=await Promise.all([Ae(t,bs,"getBlockNumber")({}),e?Ae(t,Tu,"getBlockNumber")({hash:e}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function mc(t,{hash:e}){var i,o,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new yh({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||aw)(n)}async function tv(t,e){var w;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,l=r??(typeof((w=t.batch)==null?void 0:w.multicall)=="object"&&t.batch.multicall.batchSize||1024);let c=a;if(!c){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");c=Gi({blockNumber:i,chain:t.chain,contract:"multicall3"})}const u=[[]];let d=0,f=0;for(let _=0;_<s.length;_++){const{abi:D,address:v,args:k,functionName:C}=s[_];try{const S=kr({abi:D,args:k,functionName:C});f+=(S.length-2)/2,l>0&&f>l&&u[d].length>0&&(d++,f=(S.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:S,target:v}]}catch(S){const T=Lo(S,{abi:D,address:v,args:k,docsPath:"/docs/contract/multicall",functionName:C});if(!n)throw T;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:v}]}}const h=await Promise.allSettled(u.map(_=>Ae(t,gr,"readContract")({abi:hc,address:c,args:[_],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),m=[];for(let _=0;_<h.length;_++){const D=h[_];if(D.status==="rejected"){if(!n)throw D.reason;for(let k=0;k<u[_].length;k++)m.push({status:"failure",error:D.reason,result:void 0});continue}const v=D.value;for(let k=0;k<v.length;k++){const{returnData:C,success:S}=v[k],{callData:T}=u[_][k],{abi:p,address:I,functionName:N,args:L}=s[m.length];try{if(T==="0x")throw new Ba;if(!S)throw new hu({data:C});const W=qi({abi:p,args:L,data:C,functionName:N});m.push(n?{result:W,status:"success"}:W)}catch(W){const F=Lo(W,{abi:p,address:I,args:L,docsPath:"/docs/contract/multicall",functionName:N});if(!n)throw F;m.push({error:F,result:void 0,status:"failure"})}}}if(m.length!==s.length)throw new se("multicall results mismatch");return m}const nv="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function rv(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function iv(t,e){const n=On(t)?hr(t):t,r=On(e)?hr(e):e;return rv(n,r)}async function qh(t,{address:e,hash:n,signature:r,...i}){const o=On(r)?r:Xn(r);try{const{data:s}=await Ae(t,za,"call")({data:Vh({abi:q3,args:[e,n,o],bytecode:nv}),...i});return iv(s??"0x0","0x1")}catch(s){if(s instanceof _h)return!1;throw s}}async function ov(t,{address:e,message:n,signature:r,...i}){const o=K5(n);return qh(t,{address:e,hash:o,signature:r,...i})}async function sv(t,{address:e,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=H5({message:r,primaryType:i,types:o,domain:s});return qh(t,{address:e,hash:l,signature:n,...a})}function Gh(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let l;return a?(()=>{const d=Ht(["watchBlockNumber",t.uid,e,n,s]);return Zi(d,{onBlockNumber:r,onError:i},f=>ms(async()=>{var h;try{const m=await Ae(t,bs,"getBlockNumber")({cacheTime:0});if(l){if(m===l)return;if(m-l>1&&n)for(let w=l+1n;w<m;w++)f.onBlockNumber(w,l),l=w}(!l||m>l)&&(f.onBlockNumber(m,l),l=m)}catch(m){(h=f.onError)==null||h.call(f,m)}},{emitOnBegin:e,interval:s}))})():(()=>{let d=!0,f=()=>d=!1;return(async()=>{try{const{unsubscribe:h}=await t.transport.subscribe({params:["newHeads"],onData(m){var _;if(!d)return;const w=Oa((_=m.result)==null?void 0:_.number);r(w,l),l=w},onError(m){i==null||i(m)}});f=h,d||f()}catch(h){i==null||i(h)}})(),f})()}async function av(t,{confirmations:e=1,hash:n,onReplaced:r,pollingInterval:i=t.pollingInterval,timeout:o}){const s=Ht(["waitForTransactionReceipt",t.uid,n]);let a,l,c,u=!1;return new Promise((d,f)=>{o&&setTimeout(()=>f(new A3({hash:n})),o);const h=Zi(s,{onReplaced:r,resolve:d,reject:f},m=>{const w=Ae(t,Gh,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(_){if(u)return;let D=_;const v=k=>{w(),k(),h()};try{if(c){if(e>1&&(!c.blockNumber||D-c.blockNumber+1n<e))return;v(()=>m.resolve(c));return}if(a||(u=!0,await Ah(async()=>{a=await Ae(t,Tu,"getTransaction")({hash:n}),a.blockNumber&&(D=a.blockNumber)},{delay:({count:k})=>~~(1<<k)*200,retryCount:6}),u=!1),c=await Ae(t,mc,"getTransactionReceipt")({hash:n}),e>1&&(!c.blockNumber||D-c.blockNumber+1n<e))return;v(()=>m.resolve(c))}catch(k){if(a&&(k instanceof vh||k instanceof yh))try{l=a;const S=(await Ae(t,pr,"getBlock")({blockNumber:D,includeTransactions:!0})).transactions.find(({from:p,nonce:I})=>p===l.from&&I===l.nonce);if(!S||(c=await Ae(t,mc,"getTransactionReceipt")({hash:S.hash}),e>1&&(!c.blockNumber||D-c.blockNumber+1n<e)))return;let T="replaced";S.to===l.to&&S.value===l.value?T="repriced":S.from===S.to&&S.value===0n&&(T="cancelled"),v(()=>{var p;(p=m.onReplaced)==null||p.call(m,{reason:T,replacedTransaction:l,transaction:S,transactionReceipt:c}),m.resolve(c)})}catch(C){v(()=>m.reject(C))}else v(()=>m.reject(k))}}})})})}function lv(t,{blockTag:e="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=t.pollingInterval}){const c=typeof a<"u"?a:t.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const m=Ht(["watchBlocks",t.uid,n,r,u,l]);return Zi(m,{onBlock:i,onError:o},w=>ms(async()=>{var _;try{const D=await Ae(t,pr,"getBlock")({blockTag:e,includeTransactions:u});if(D.number&&(d!=null&&d.number)){if(D.number===d.number)return;if(D.number-d.number>1&&n)for(let v=(d==null?void 0:d.number)+1n;v<D.number;v++){const k=await Ae(t,pr,"getBlock")({blockNumber:v,includeTransactions:u});w.onBlock(k,d),d=k}}(!(d!=null&&d.number)||e==="pending"&&!(D!=null&&D.number)||D.number&&D.number>d.number)&&(w.onBlock(D,d),d=D)}catch(D){(_=w.onError)==null||_.call(w,D)}},{emitOnBegin:r,interval:l}))})():(()=>{let m=!0,w=()=>m=!1;return(async()=>{try{const{unsubscribe:_}=await t.transport.subscribe({params:["newHeads"],onData(D){var C,S,T;if(!m)return;const k=(((T=(S=(C=t.chain)==null?void 0:C.formatters)==null?void 0:S.block)==null?void 0:T.format)||oh)(D.result);i(k,d),d=k},onError(D){o==null||o(D)}});w=_,m||w()}catch(_){o==null||o(_)}})(),w})()}function cv(t,{address:e,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=t.pollingInterval,strict:u}){const d=typeof l<"u"?l:t.transport.type!=="webSocket",f=u??!1;return d?(()=>{const w=Ht(["watchEvent",e,n,r,t.uid,i,c]);return Zi(w,{onLogs:a,onError:s},_=>{let D,v,k=!1;const C=ms(async()=>{var S;if(!k){try{v=await Ae(t,Mh,"createEventFilter")({address:e,args:n,event:i,events:o,strict:f})}catch{}k=!0;return}try{let T;if(v)T=await Ae(t,Fa,"getFilterChanges")({filter:v});else{const p=await Ae(t,bs,"getBlockNumber")({});D&&D!==p?T=await Ae(t,yu,"getLogs")({address:e,args:n,event:i,events:o,fromBlock:D+1n,toBlock:p}):T=[],D=p}if(T.length===0)return;if(r)_.onLogs(T);else for(const p of T)_.onLogs([p])}catch(T){v&&T instanceof Wr&&(k=!1),(S=_.onError)==null||S.call(_,T)}},{emitOnBegin:!0,interval:c});return async()=>{v&&await Ae(t,Wa,"uninstallFilter")({filter:v}),C()}})})():(()=>{let w=!0,_=()=>w=!1;return(async()=>{try{const D=o??(i?[i]:void 0);let v=[];D&&(v=[D.flatMap(C=>fs({abi:[C],eventName:C.name,args:n}))],i&&(v=v[0]));const{unsubscribe:k}=await t.transport.subscribe({params:["logs",{address:e,topics:v}],onData(C){var T;if(!w)return;const S=C.result;try{const{eventName:p,args:I}=gs({abi:D,data:S.data,topics:S.topics,strict:f}),N=_n(S,{args:I,eventName:p});a([N])}catch(p){let I,N;if(p instanceof Fr||p instanceof Wi){if(u)return;I=p.abiItem.name,N=(T=p.abiItem.inputs)==null?void 0:T.some(W=>!("name"in W&&W.name))}const L=_n(S,{args:N?[]:{},eventName:I});a([L])}},onError(C){s==null||s(C)}});_=k,w||_()}catch(D){s==null||s(D)}})(),_})()}function uv(t,{batch:e=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const c=Ht(["watchPendingTransactions",t.uid,e,o]);return Zi(c,{onTransactions:r,onError:n},u=>{let d;const f=ms(async()=>{var h;try{if(!d)try{d=await Ae(t,jh,"createPendingTransactionFilter")({});return}catch(w){throw f(),w}const m=await Ae(t,Fa,"getFilterChanges")({filter:d});if(m.length===0)return;if(e)u.onTransactions(m);else for(const w of m)u.onTransactions([w])}catch(m){(h=u.onError)==null||h.call(u,m)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await Ae(t,Wa,"uninstallFilter")({filter:d}),f()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await t.transport.subscribe({params:["newPendingTransactions"],onData(f){if(!c)return;const h=f.result;r([h])},onError(f){n==null||n(f)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function dv(t){return{call:e=>za(t,e),createBlockFilter:()=>R5(t),createContractEventFilter:e=>mh(t,e),createEventFilter:e=>Mh(t,e),createPendingTransactionFilter:()=>jh(t),estimateContractGas:e=>W3(t,e),estimateGas:e=>vu(t,e),getBalance:e=>B5(t,e),getBlock:e=>pr(t,e),getBlockNumber:e=>bs(t,e),getBlockTransactionCount:e=>M5(t,e),getBytecode:e=>j5(t,e),getChainId:()=>zo(t),getContractEvents:e=>kh(t,e),getEnsAddress:e=>v5(t,e),getEnsAvatar:e=>O5(t,e),getEnsName:e=>$5(t,e),getEnsResolver:e=>N5(t,e),getEnsText:e=>Bh(t,e),getFeeHistory:e=>L5(t,e),estimateFeesPerGas:e=>z3(t,e),getFilterChanges:e=>Fa(t,e),getFilterLogs:e=>z5(t,e),getGasPrice:()=>wu(t),getLogs:e=>yu(t,e),getProof:e=>X5(t,e),estimateMaxPriorityFeePerGas:e=>L3(t,e),getStorageAt:e=>Q5(t,e),getTransaction:e=>Tu(t,e),getTransactionConfirmations:e=>ev(t,e),getTransactionCount:e=>Eh(t,e),getTransactionReceipt:e=>mc(t,e),multicall:e=>tv(t,e),prepareTransactionRequest:e=>La(t,e),readContract:e=>gr(t,e),sendRawTransaction:e=>Cu(t,e),simulateContract:e=>X3(t,e),verifyMessage:e=>ov(t,e),verifyTypedData:e=>sv(t,e),uninstallFilter:e=>Wa(t,e),waitForTransactionReceipt:e=>av(t,e),watchBlocks:e=>lv(t,e),watchBlockNumber:e=>Gh(t,e),watchContractEvent:e=>o5(t,e),watchEvent:e=>cv(t,e),watchPendingTransactions:e=>uv(t,e)}}function kf(t){const{key:e="public",name:n="Public Client"}=t;return Th({...t,key:e,name:n,type:"publicClient"}).extend(dv)}function fv(t,{abi:e,args:n,bytecode:r,...i}){const o=Vh({abi:e,args:n,bytecode:r});return Eu(t,{...i,data:o})}async function hv(t){var n;return((n=t.account)==null?void 0:n.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>uu(r))}async function pv(t){return await t.request({method:"wallet_getPermissions"})}async function gv(t){return(await t.request({method:"eth_requestAccounts"})).map(n=>vn(n))}async function mv(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function bv(t,{account:e=t.account,message:n}){if(!e)throw new Vi({docsPath:"/docs/actions/wallet/signMessage"});const r=pn(e);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?tu(n):n.raw instanceof Uint8Array?Xn(n.raw):n.raw)();return t.request({method:"personal_sign",params:[i,r.address]})}async function wv(t,e){var c,u,d,f;const{account:n=t.account,chain:r=t.chain,...i}=e;if(!n)throw new Vi({docsPath:"/docs/actions/wallet/signTransaction"});const o=pn(n);ps({account:o,...e});const s=await Ae(t,zo,"getChainId")({});r!==null&&Ih({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=t.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||$a;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(f=(d=t.chain)==null?void 0:d.serializers)==null?void 0:f.transaction}):await t.request({method:"eth_signTransaction",params:[{...l(i),chainId:Re(s),from:o.address}]})}async function vv(t,{account:e=t.account,domain:n,message:r,primaryType:i,types:o}){if(!e)throw new Vi({docsPath:"/docs/actions/wallet/signTypedData"});const s=pn(e),a={EIP712Domain:Hh({domain:n}),...o};if(Wh({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Ht({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>On(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function yv(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:Re(e)}]})}async function _v(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function Cv(t){return{addChain:e=>l5(t,e),deployContract:e=>fv(t,e),getAddresses:()=>hv(t),getChainId:()=>zo(t),getPermissions:()=>pv(t),prepareTransactionRequest:e=>La(t,e),requestAddresses:()=>gv(t),requestPermissions:e=>mv(t,e),sendRawTransaction:e=>Cu(t,e),sendTransaction:e=>Eu(t,e),signMessage:e=>bv(t,e),signTransaction:e=>wv(t,e),signTypedData:e=>vv(t,e),switchChain:e=>yv(t,e),watchAsset:e=>_v(t,e),writeContract:e=>a5(t,e)}}function Au(t){const{key:e="wallet",name:n="Wallet Client",transport:r}=t;return Th({...t,key:e,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(Cv)}function Ev(t,e={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=e.retryCount??s,c=a??e.timeout??1e4,u=t||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new Ph;return Ha({key:n,name:r,async request({method:f,params:h}){const m={method:f,params:h},w=await Dl(u),{error:_,result:D}=await wi.webSocketAsync(w,{body:m,timeout:c});if(_)throw new pu({body:m,error:_,url:u});return D},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return Dl(u)},async subscribe({params:f,onData:h,onError:m}){const w=await Dl(u),{result:_}=await new Promise((D,v)=>wi.webSocket(w,{body:{method:"eth_subscribe",params:f},onResponse(k){if(k.error){v(k.error),m==null||m(k.error);return}if(typeof k.id=="number"){D(k);return}k.method==="eth_subscription"&&h(k.params)}}));return{subscriptionId:_,async unsubscribe(){return new Promise(D=>wi.webSocket(w,{body:{method:"eth_unsubscribe",params:[_]},onResponse:D}))}}}})}}const kv=Qc({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Ur=Qc({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Zh=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},Nr=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function ea(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Kh(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Yh={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var h=new i(u,d||l,f),m=n?n+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],h]:l._events[m].push(h):(l._events[m]=h,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)e.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,h=d.length,m=new Array(h);f<h;f++)m[f]=d[f].fn;return m},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,f,h,m){var w=n?n+c:c;if(!this._events[w])return!1;var _=this._events[w],D=arguments.length,v,k;if(_.fn){switch(_.once&&this.removeListener(c,_.fn,void 0,!0),D){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,u),!0;case 3:return _.fn.call(_.context,u,d),!0;case 4:return _.fn.call(_.context,u,d,f),!0;case 5:return _.fn.call(_.context,u,d,f,h),!0;case 6:return _.fn.call(_.context,u,d,f,h,m),!0}for(k=1,v=new Array(D-1);k<D;k++)v[k-1]=arguments[k];_.fn.apply(_.context,v)}else{var C=_.length,S;for(k=0;k<C;k++)switch(_[k].once&&this.removeListener(c,_[k].fn,void 0,!0),D){case 1:_[k].fn.call(_[k].context);break;case 2:_[k].fn.call(_[k].context,u);break;case 3:_[k].fn.call(_[k].context,u,d);break;case 4:_[k].fn.call(_[k].context,u,d,f);break;default:if(!v)for(S=1,v=new Array(D-1);S<D;S++)v[S-1]=arguments[S];_[k].fn.apply(_[k].context,v)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,f){var h=n?n+c:c;if(!this._events[h])return this;if(!u)return s(this,h),this;var m=this._events[h];if(m.fn)m.fn===u&&(!f||m.once)&&(!d||m.context===d)&&s(this,h);else{for(var w=0,_=[],D=m.length;w<D;w++)(m[w].fn!==u||f&&!m[w].once||d&&m[w].context!==d)&&_.push(m[w]);_.length?this._events[h]=_.length===1?_[0]:_:s(this,h)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(Yh);var Dv=Yh.exports;const Sv=qa(Dv);var Pu=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},Je=(t,e,n)=>(Pu(t,e,"read from private field"),n?n.call(t):e.get(t)),Zt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Fo=(t,e,n,r)=>(Pu(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Ct=(t,e,n)=>(Pu(t,e,"access private method"),n),Ou=class extends Sv{constructor({chains:t=[Ur,kv],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...n}=t.blockExplorers??{};if(e)return[e.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function Iv(t){var n;if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=t.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var Fs,Ga=class extends Ou{constructor({chains:t,options:e}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:n}),this.id="injected",Zt(this,Fs,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:vn(i[0])})},this.onChainChanged=i=>{const o=ea(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=Iv(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:t}={}){var e;try{const n=await this.getProvider();if(!n)throw new Nr;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=vn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new Kt(n):n.code===-32002?new ki(n):n}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new Nr;const e=await t.request({method:"eth_accounts"});return vn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new Nr;return t.request({method:"eth_chainId"}).then(ea)}async getProvider(){const t=this.options.getProvider();return t&&Fo(this,Fs,t),Je(this,Fs)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Au({account:n,chain:r,transport:ku(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Nr;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r,i,o;const e=await this.getProvider();if(!e)throw new Nr;const n=Re(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===t);if(!a)throw new Zh({chainId:t,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new Kt(new Error("User rejected switch after adding network."));return a}catch(l){throw new Kt(l)}throw this.isUserRejectedRequestError(s)?new Kt(s):new Gn(s)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new Nr;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}isUserRejectedRequestError(t){return t.code===4001}};Fs=new WeakMap;var $u=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},Il=(t,e,n)=>($u(t,e,"read from private field"),n?n.call(t):e.get(t)),Tl=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Ns=(t,e,n,r)=>($u(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Tv=(t,e,n)=>($u(t,e,"access private method"),n);const Av=t=>(e,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=f=>{const h=s(f);if(!u(d,h)){const m=d;a(d=h,m)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},t(e,n,r)},xv=Av;function Pv(t,e){let n;try{n=t()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,e==null?void 0:e.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>n.removeItem(i)}}const Wo=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return Wo(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Wo(r)(n)}}}},Ov=(t,e)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,D)=>({...D,..._}),...e},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(..._)},r,i);const u=Wo(o.serialize),d=()=>{const _=o.partialize({...r()});let D;const v=u({state:_,version:o.version}).then(k=>c.setItem(o.name,k)).catch(k=>{D=k});if(D)throw D;return v},f=i.setState;i.setState=(_,D)=>{f(_,D),d()};const h=t((..._)=>{n(..._),d()},r,i);let m;const w=()=>{var _;if(!c)return;s=!1,a.forEach(v=>v(r()));const D=((_=o.onRehydrateStorage)==null?void 0:_.call(o,r()))||void 0;return Wo(c.getItem.bind(c))(o.name).then(v=>{if(v)return o.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var k;return m=o.merge(v,(k=r())!=null?k:h),n(m,!0),d()}).then(()=>{D==null||D(m,void 0),s=!0,l.forEach(v=>v(m))}).catch(v=>{D==null||D(void 0,v)})};return i.persist={setOptions:_=>{o={...o,..._},_.getStorage&&(c=_.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},w(),m||h},$v=(t,e)=>(n,r,i)=>{let o={storage:Pv(()=>localStorage),partialize:w=>w,version:0,merge:(w,_)=>({..._,...w}),...e},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return t((...w)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...w)},r,i);const u=()=>{const w=o.partialize({...r()});return c.setItem(o.name,{state:w,version:o.version})},d=i.setState;i.setState=(w,_)=>{d(w,_),u()};const f=t((...w)=>{n(...w),u()},r,i);let h;const m=()=>{var w,_;if(!c)return;s=!1,a.forEach(v=>{var k;return v((k=r())!=null?k:f)});const D=((_=o.onRehydrateStorage)==null?void 0:_.call(o,(w=r())!=null?w:f))||void 0;return Wo(c.getItem.bind(c))(o.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var k;return h=o.merge(v,(k=r())!=null?k:f),n(h,!0),u()}).then(()=>{D==null||D(h,void 0),h=r(),s=!0,l.forEach(v=>v(h))}).catch(v=>{D==null||D(void 0,v)})};return i.persist={setOptions:w=>{o={...o,...w},w.storage&&(c=w.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>m(),hasHydrated:()=>s,onHydrate:w=>(a.add(w),()=>{a.delete(w)}),onFinishHydration:w=>(l.add(w),()=>{l.delete(w)})},o.skipHydration||m(),h||f},Nv=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?Ov(t,e):$v(t,e),Rv=Nv,Df=t=>{let e;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const d=e;e=c??typeof u!="object"?u:Object.assign({},e,u),n.forEach(f=>f(e,d))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return e=t(r,i,a),a},Bv=t=>t?Df(t):Df;function Jh(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[r,i]of t)if(!Object.is(i,e.get(r)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(e,n[r])||!Object.is(t[n[r]],e[n[r]]))return!1;return!0}function Xh(t,e,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of t){let f=!1;for(const h of e){const m=h(d);m&&(f=!0,l.some(({id:w})=>w===d.id)||(l=[...l,m.chain]),c[d.id]=[...c[d.id]||[],...m.rpcUrls.http],m.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...m.rpcUrls.webSocket]))}if(!f)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const f=l.find(w=>w.id===d)??t[0],h=c[f.id];if(!h||!h[0])throw new Error(`No providers configured for chain "${f.id}"`);const m=kf({batch:n,chain:f,transport:_f(h.map(w=>m5(w,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(m,{chains:l})},webSocketPublicClient:({chainId:d})=>{const f=l.find(w=>w.id===d)??t[0],h=u[f.id];if(!h||!h[0])return;const m=kf({batch:n,chain:f,transport:_f(h.map(w=>Ev(w,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(m,{chains:l})}}}var Mv=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},jv=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},Uv=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Lv=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},bc=(t,{find:e,replace:n})=>t&&e(t)?n(t):typeof t!="object"?t:Array.isArray(t)?t.map(r=>bc(r,{find:e,replace:n})):t instanceof Object?Object.entries(t).reduce((r,[i,o])=>({...r,[i]:bc(o,{find:e,replace:n})}),{}):t;function zv(t){const e=JSON.parse(t);return bc(e,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Sf(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(hw[t])}function If(t,e){return t.slice(0,e).join(".")||"."}function Tf(t,e){const{length:n}=t;for(let r=0;r<n;++r)if(t[r]===e)return r+1;return 0}function Fv(t,e){const n=typeof t=="function",r=typeof e=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=Tf(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=Tf(i,l);if(u!==0)return r?e.call(this,a,l,If(o,u)):`[ref=${If(o,u)}]`}else i[0]=l,o[0]=a;return n?t.call(this,a,l):l}}function Wv(t,e,n,r){return JSON.stringify(t,Fv((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},r),n??void 0)}var Hv={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function Vv({deserialize:t=zv,key:e="wagmi",serialize:n=Wv,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${e}.${i}`);else try{r.setItem(`${e}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${e}.${i}`)}}var Af="store",di,uo,wc,Qh,qv=class{constructor({autoConnect:t=!1,connectors:e=[new Ga],publicClient:n,storage:r=Vv({storage:typeof window<"u"?window.localStorage:Hv}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;Tl(this,wc),this.publicClients=new Map,this.webSocketPublicClients=new Map,Tl(this,di,void 0),Tl(this,uo,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const d=r.getItem(Af),f=(c=d==null?void 0:d.state)==null?void 0:c.data;s=f!=null&&f.account?"reconnecting":"connecting",a=(u=f==null?void 0:f.chain)==null?void 0:u.id}catch{}const l=typeof e=="function"?e():e;l.forEach(d=>d.setStorage(r)),this.store=Bv(xv(Rv(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:Af,storage:r,partialize:d=>{var f,h;return{...t&&{data:{account:(f=d==null?void 0:d.data)==null?void 0:f.account,chain:(h=d==null?void 0:d.data)==null?void 0:h.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,Ns(this,uo,r==null?void 0:r.getItem("wallet")),Tv(this,wc,Qh).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Ns(this,di,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Il(this,di))return;Ns(this,di,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const t=Il(this,uo)?[...this.connectors].sort(n=>n.id===Il(this,uo)?-1:1):this.connectors;let e=!1;for(const n of t){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Ns(this,di,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,this.publicClients.set(t??-1,e),e}setPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:n}=this.args;return e=typeof n=="function"?n({chainId:t}):n,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var n,r;const e=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};di=new WeakMap;uo=new WeakMap;wc=new WeakSet;Qh=function(){const t=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},e=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,f,h,m;(c=l==null?void 0:l.off)==null||c.call(l,"change",t),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",e),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((f=a.on)==null||f.call(a,"change",t),(h=a.on)==null||h.call(a,"disconnect",e),(m=a.on)==null||m.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var vc;function e1(t){const e=new qv(t);return vc=e,e}function Qn(){if(!vc)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return vc}async function xf({chainId:t,connector:e}){const n=Qn(),r=n.connector;if(r&&e.id===r.id)throw new jv;try{n.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return n.setLastUsedConnector(e.id),n.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function Nu(){const t=Qn();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var Gv=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Zv=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Ki({chainId:t}={}){const e=Qn();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function Kv({chainId:t,contracts:e,blockNumber:n,blockTag:r,...i}){const o=Ki({chainId:t});if(!o.chains)throw new Uv;if(t&&o.chain.id!==t)throw new Mv({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:e})}async function Yv({address:t,account:e,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return Ki({chainId:n}).readContract({abi:r,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function Jv({contracts:t,blockNumber:e,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=Ki(),s=t.reduce((u,d,f)=>{const h=d.chainId??o.chain.id;return{...u,[h]:[...u[h]||[],{contract:d,index:f}]}},{}),a=()=>Object.entries(s).map(([u,d])=>Kv({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:f})=>f),blockNumber:e,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,f)=>(u&&(u[c[f]]=d),u),[])}catch(o){if(o instanceof fu)throw o;const s=()=>t.map(a=>Yv({...a,blockNumber:e,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function Xv({address:t,chainId:e,formatUnits:n,token:r}){const i=Qn(),o=Ki({chainId:e});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:e},[f,h,m]=await Jv({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[t]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:h,formatted:Zs(f??"0",Sf(n??h)),symbol:m,value:f}};try{return await c({abi:Gv})}catch(u){if(u instanceof fu){const{symbol:d,...f}=await c({abi:Zv});return{symbol:nh(jr(d,{dir:"right"})),...f}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:Zs(a??"0",Sf(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function Ho(){const{data:t,connector:e,status:n}=Qn();switch(n){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function yc(){var i,o,s,a;const t=Qn(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,n=t.chains??[],r=[...((s=t.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...r,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:n}}async function Qv({chainId:t}){const{connector:e}=Qn();if(!e)throw new Nr;if(!e.switchChain)throw new Lv({connector:e});return e.switchChain(t)}function Ru(t,{selector:e=n=>n}={}){const n=Qn(),r=()=>t(Ho());return n.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:Jh})}function e4(t,{selector:e=n=>n}={}){const n=Qn(),r=()=>t(yc());return n.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:Jh})}async function t4({name:t,chainId:e}){const{normalize:n}=await _i(()=>import("./index.9c98d819.js"),[],import.meta.url);return await Ki({chainId:e}).getEnsAvatar({name:n(t)})}async function n4({address:t,chainId:e}){return Ki({chainId:e}).getEnsName({address:vn(t)})}const r4=Symbol(),Pf=Object.getPrototypeOf,_c=new WeakMap,i4=t=>t&&(_c.has(t)?_c.get(t):Pf(t)===Object.prototype||Pf(t)===Array.prototype),o4=t=>i4(t)&&t[r4]||null,Of=(t,e=!0)=>{_c.set(t,e)},Al=t=>typeof t=="object"&&t!==null,ir=new WeakMap,fo=new WeakSet,s4=(t=Object.is,e=(c,u)=>new Proxy(c,u),n=c=>Al(c)&&!fo.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const f=i.get(c);if((f==null?void 0:f[0])===u)return f[1];const h=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return Of(h,!0),i.set(c,[u,h]),Reflect.ownKeys(c).forEach(m=>{if(Object.getOwnPropertyDescriptor(h,m))return;const w=Reflect.get(c,m),_={value:w,enumerable:!0,configurable:!0};if(fo.has(w))Of(w,!1);else if(w instanceof Promise)delete _.value,_.get=()=>d(w);else if(ir.has(w)){const[D,v]=ir.get(w);_.value=o(D,v(),d)}Object.defineProperty(h,m,_)}),Object.preventExtensions(h)},s=new WeakMap,a=[1,1],l=c=>{if(!Al(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const f=new Set,h=(N,L=++a[0])=>{d!==L&&(d=L,f.forEach(W=>W(N,L)))};let m=a[1];const w=(N=++a[1])=>(m!==N&&!f.size&&(m=N,D.forEach(([L])=>{const W=L[1](N);W>d&&(d=W)})),d),_=N=>(L,W)=>{const F=[...L];F[1]=[N,...F[1]],h(F,W)},D=new Map,v=(N,L)=>{if(f.size){const W=L[3](_(N));D.set(N,[L,W])}else D.set(N,[L])},k=N=>{var L;const W=D.get(N);W&&(D.delete(N),(L=W[1])==null||L.call(W))},C=N=>(f.add(N),f.size===1&&D.forEach(([W,F],pe)=>{const ee=W[3](_(pe));D.set(pe,[W,ee])}),()=>{f.delete(N),f.size===0&&D.forEach(([W,F],pe)=>{F&&(F(),D.set(pe,[W]))})}),S=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),p=e(S,{deleteProperty(N,L){const W=Reflect.get(N,L);k(L);const F=Reflect.deleteProperty(N,L);return F&&h(["delete",[L],W]),F},set(N,L,W,F){const pe=Reflect.has(N,L),ee=Reflect.get(N,L,F);if(pe&&(t(ee,W)||s.has(W)&&t(ee,s.get(W))))return!0;k(L),Al(W)&&(W=o4(W)||W);let Z=W;if(W instanceof Promise)W.then(H=>{W.status="fulfilled",W.value=H,h(["resolve",[L],H])}).catch(H=>{W.status="rejected",W.reason=H,h(["reject",[L],H])});else{!ir.has(W)&&n(W)&&(Z=l(W));const H=!fo.has(Z)&&ir.get(Z);H&&v(L,H)}return Reflect.set(N,L,Z,F),h(["set",[L],W,ee]),!0}});s.set(c,p);const I=[S,w,o,C];return ir.set(p,I),Reflect.ownKeys(c).forEach(N=>{const L=Object.getOwnPropertyDescriptor(c,N);"value"in L&&(p[N]=c[N],delete L.value,delete L.writable),Object.defineProperty(S,N,L)}),p})=>[l,ir,fo,t,e,n,r,i,o,s,a],[a4]=s4();function qt(t={}){return a4(t)}function Dr(t,e,n){const r=ir.get(t);let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function ak(t,e){const n=ir.get(t),[r,i,o]=n;return o(r,i(),e)}function Vo(t){return fo.add(t),t}function kn(t,e,n,r){let i=t[e];return Dr(t,()=>{const o=t[e];Object.is(i,o)||n(i=o)},r)}const ho={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},Se={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=navigator.userAgent.toLowerCase();return Se.isMobile()&&t.includes("android")},isIos(){const t=navigator.userAgent.toLowerCase();return Se.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=ho.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=ho.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+ho.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...r)=>{function i(){t(...r)}n&&clearTimeout(n),n=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(Se.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(t,e){if(!Se.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(e);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,Se.wait(2e3)])},formatBalance(t,e){var r;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const i=Number(t);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${e}`:"0.000"},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return ho.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return Se.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return Se.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return Se.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}},ft=qt({isConnected:!1}),Ke={state:ft,subscribe(t){return Dr(ft,()=>t(ft))},subscribeKey(t,e){return kn(ft,t,e)},setIsConnected(t){ft.isConnected=t},setCaipAddress(t){ft.caipAddress=t,ft.address=t?Se.getPlainAddress(t):void 0},setBalance(t,e){ft.balance=t,ft.balanceSymbol=e},setProfileName(t){ft.profileName=t},setProfileImage(t){ft.profileImage=t},setAddressExplorerUrl(t){ft.addressExplorerUrl=t},resetAccount(){ft.isConnected=!1,ft.caipAddress=void 0,ft.address=void 0,ft.balance=void 0,ft.balanceSymbol=void 0,ft.profileName=void 0,ft.profileImage=void 0,ft.addressExplorerUrl=void 0}};class Bu{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:n}){const r=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const xl="WALLETCONNECT_DEEPLINK_CHOICE",$f="@w3m/recent",Nf="@w3m/connected_wallet_image_url",cn={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(xl,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(xl);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(xl)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=cn.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem($f,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem($f);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(Nf,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(Nf)}catch{console.info("Unable to set Connected Wallet Image Url")}}},nr=qt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),cr={state:nr,subscribeNetworkImages(t){return Dr(nr.networkImages,()=>t(nr.networkImages))},subscribeKey(t,e){return kn(nr,t,e)},setWalletImage(t,e){nr.walletImages[t]=e},setNetworkImage(t,e){nr.networkImages[t]=e},setConnectorImage(t,e){nr.connectorImages[t]=e},setTokenImage(t,e){nr.tokenImages[t]=e}},oo=qt({connectors:[]}),un={state:oo,subscribeKey(t,e){return kn(oo,t,e)},setConnectors(t){oo.connectors=t.map(e=>Vo(e))},addConnector(t){oo.connectors.push(Vo(t))},getConnectors(){return oo.connectors}},so=qt({open:!1,selectedNetworkId:void 0}),Di={state:so,subscribe(t){return Dr(so,()=>t(so))},set(t){Object.assign(so,{...so,...t})}},Rt=qt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),st={state:Rt,subscribeKey(t,e){return kn(Rt,t,e)},_getClient(){if(!Rt._client)throw new Error("NetworkController client not set");return Rt._client},setClient(t){Rt._client=Vo(t)},setCaipNetwork(t){Rt.caipNetwork=t,Di.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){Rt.caipNetwork=t,Di.set({selectedNetworkId:t==null?void 0:t.id}),Rt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){Rt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();Rt.supportsAllNetworks=t.supportsAllNetworks,Rt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),Rt.caipNetwork=t},resetNetwork(){Rt.isDefaultCaipNetwork||(Rt.caipNetwork=void 0),Rt.approvedCaipNetworkIds=void 0,Rt.supportsAllNetworks=!0}},tn=qt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Ge={state:tn,subscribeKey(t,e){return kn(tn,t,e)},setProjectId(t){tn.projectId=t},setIncludeWalletIds(t){tn.includeWalletIds=t},setExcludeWalletIds(t){tn.excludeWalletIds=t},setFeaturedWalletIds(t){tn.featuredWalletIds=t},setTokens(t){tn.tokens=t},setTermsConditionsUrl(t){tn.termsConditionsUrl=t},setPrivacyPolicyUrl(t){tn.privacyPolicyUrl=t},setCustomWallets(t){tn.customWallets=t},setEnableAnalytics(t){tn.enableAnalytics=t},setSdkVersion(t){tn.sdkVersion=t},setMetadata(t){tn.metadata=t}},l4=Se.getApiUrl(),Sn=new Bu({baseUrl:l4}),c4="40",Rf="4",Ft=qt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),We={state:Ft,subscribeKey(t,e){return kn(Ft,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ge.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Sn.baseUrl}/getWalletImage/${t}`,n=await Sn.getBlob({path:e,headers:We._getApiHeaders()});cr.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Sn.baseUrl}/public/getAssetImage/${t}`,n=await Sn.getBlob({path:e,headers:We._getApiHeaders()});cr.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Sn.baseUrl}/public/getAssetImage/${t}`,n=await Sn.getBlob({path:e,headers:We._getApiHeaders()});cr.setConnectorImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=st.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>We._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=un.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>We._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=Ge.state;if(t!=null&&t.length){const{data:e}=await Sn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):Rf,include:t==null?void 0:t.join(",")}});e.sort((r,i)=>t.indexOf(r.id)-t.indexOf(i.id));const n=e.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>We._fetchWalletImage(r))),Ft.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=Ge.state,r=[...e??[],...n??[]].filter(Boolean),{data:i,count:o}=await Sn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:Rf,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),s=cn.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>We._fetchWalletImage(c))),Ft.recommended=i,Ft.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:r}=Ge.state,i=[...Ft.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Sn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:String(t),entries:c4,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>We._fetchWalletImage(l)),Se.wait(300)]),Ft.wallets=[...Ft.wallets,...o],Ft.count=s>Ft.count?s:Ft.count,Ft.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:n}=Ge.state;Ft.search=[];const{data:r}=await Sn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>We._fetchWalletImage(o)),Se.wait(300)]),Ft.search=r},prefetch(){Ft.prefetchPromise=Promise.race([Promise.allSettled([We.fetchFeaturedWallets(),We.fetchRecommendedWallets(),We.fetchNetworkImages(),We.fetchConnectorImages()]),Se.wait(3e3)])}},u4=Se.getAnalyticsUrl(),d4=new Bu({baseUrl:u4}),f4=["MODAL_CREATED"],si=qt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Ye={state:si,subscribe(t){return Dr(si,()=>t(si))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=Ge.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(f4.includes(t.data.event)||typeof window>"u")return;await d4.post({path:"/e",headers:Ye._getApiHeaders(),body:{eventId:Se.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){si.timestamp=Date.now(),si.data=t,Ge.state.enableAnalytics&&Ye._sendAnalyticsEvent(si)}},kt=qt({view:"Connect",history:["Connect"]}),je={state:kt,subscribeKey(t,e){return kn(kt,t,e)},push(t,e){t!==kt.view&&(kt.view=t,kt.history.push(t),kt.data=e)},reset(t){kt.view=t,kt.history=[t]},replace(t){kt.history.length>1&&kt.history.at(-1)!==t&&(kt.view=t,kt.history[kt.history.length-1]=t)},goBack(){if(kt.history.length>1){kt.history.pop();const[t]=kt.history.slice(-1);t&&(kt.view=t)}}},Rs=qt({open:!1}),Et={state:Rs,subscribeKey(t,e){return kn(Rs,t,e)},async open(t){await We.state.prefetchPromise,t!=null&&t.view?je.reset(t.view):Ke.state.isConnected?je.reset("Account"):je.reset("Connect"),Rs.open=!0,Di.set({open:!0}),Ye.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Rs.open=!1,Di.set({open:!1}),Ye.sendEvent({type:"track",event:"MODAL_CLOSE"})}},h4=Se.getBlockchainApiUrl(),Bf=new Bu({baseUrl:h4}),t1={fetchIdentity({caipChainId:t,address:e}){return Bf.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:Ge.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n}){const r=n?{cursor:n}:{};return Bf.get({path:`/v1/account/${t}/history?projectId=${e}`,params:r})}},zn=qt({message:"",variant:"success",open:!1}),dn={state:zn,subscribeKey(t,e){return kn(zn,t,e)},showSuccess(t){zn.message=t,zn.variant="success",zn.open=!0},showError(t){zn.message=t,zn.variant="error",zn.open=!0},hide(){zn.open=!1}},ht=qt({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),bn={state:ht,subscribe(t){return Dr(ht,()=>t(ht))},async fetchTransactions(t){const{projectId:e}=Ge.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ht.loading=!0;try{const n=await t1.fetchTransactions({account:t,projectId:e,cursor:ht.next}),r=this.filterSpamTransactions(n.data),i=[...ht.transactions,...r];ht.loading=!1,ht.transactions=i,ht.transactionsByYear=this.groupTransactionsByYear(ht.transactionsByYear,r),ht.empty=i.length===0,ht.next=n.next?n.next:void 0}catch{Ye.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:ht.next}}),dn.showError("Failed to fetch transactions"),ht.loading=!1,ht.empty=!0}},groupTransactionsByYear(t={},e=[]){const n=t;return e.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){ht.transactions=[],ht.transactionsByYear={},ht.loading=!1,ht.empty=!1,ht.next=void 0}},_t=qt({wcError:!1,buffering:!1}),Ze={state:_t,subscribeKey(t,e){return kn(_t,t,e)},_getClient(){if(!_t._client)throw new Error("ConnectionController client not set");return _t._client},setClient(t){_t._client=Vo(t)},connectWalletConnect(){_t.wcPromise=this._getClient().connectWalletConnect(t=>{_t.wcUri=t,_t.wcPairingExpiry=Se.getPairingExpiry()})},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t))},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){_t.wcUri=void 0,_t.wcPairingExpiry=void 0,_t.wcPromise=void 0,_t.wcLinking=void 0,_t.recentWallet=void 0,bn.resetTransactions(),cn.deleteWalletConnectDeepLink()},setWcLinking(t){_t.wcLinking=t},setWcError(t){_t.wcError=t,_t.buffering=!1},setRecentWallet(t){_t.recentWallet=t},setBuffering(t){_t.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},sn=qt({status:"uninitialized"}),In={state:sn,subscribeKey(t,e){return kn(sn,t,e)},subscribe(t){return Dr(sn,()=>t(sn))},_getClient(){if(!sn._client)throw new Error("SIWEController client not set");return sn._client},setSIWEClient(t){sn._client=Vo(t),sn.status="ready"},setNonce(t){sn.nonce=t},setStatus(t){sn.status=t},setMessage(t){sn.message=t},setSession(t){sn.session=t}},ai=qt({themeMode:"dark",themeVariables:{}}),an={state:ai,subscribe(t){return Dr(ai,()=>t(ai))},setThemeMode(t){ai.themeMode=t},setThemeVariables(t){ai.themeVariables={...ai.themeVariables,...t}}},pt={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return cr.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return cr.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return cr.state.connectorImages[t.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis,Mu=Ws.ShadowRoot&&(Ws.ShadyCSS===void 0||Ws.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ju=Symbol(),Mf=new WeakMap;let n1=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ju)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Mu&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Mf.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Mf.set(n,e))}return e}toString(){return this.cssText}};const An=t=>new n1(typeof t=="string"?t:t+"",void 0,ju),be=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n1(n,t,ju)},p4=(t,e)=>{if(Mu)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=Ws.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},jf=Mu?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return An(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:g4,defineProperty:m4,getOwnPropertyDescriptor:b4,getOwnPropertyNames:w4,getOwnPropertySymbols:v4,getPrototypeOf:y4}=Object,ur=globalThis,Uf=ur.trustedTypes,_4=Uf?Uf.emptyScript:"",Pl=ur.reactiveElementPolyfillSupport,vo=(t,e)=>t,ta={toAttribute(t,e){switch(e){case Boolean:t=t?_4:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Uu=(t,e)=>!g4(t,e),Lf={attribute:!0,type:String,converter:ta,reflect:!1,hasChanged:Uu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ur.litPropertyMetadata??(ur.litPropertyMetadata=new WeakMap);let fi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Lf){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&m4(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:o}=b4(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lf}static _$Ei(){if(this.hasOwnProperty(vo("elementProperties")))return;const e=y4(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vo("properties"))){const n=this.properties,r=[...w4(n),...v4(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(jf(i))}else e!==void 0&&n.push(jf(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$E_)==null||n.delete(e)}_$ES(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p4(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ta).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ta;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Uu)(i?o:this[e],n))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(e){}firstUpdated(e){}};fi.elementStyles=[],fi.shadowRootOptions={mode:"open"},fi[vo("elementProperties")]=new Map,fi[vo("finalized")]=new Map,Pl==null||Pl({ReactiveElement:fi}),(ur.reactiveElementVersions??(ur.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=globalThis,na=yo.trustedTypes,zf=na?na.createPolicy("lit-html",{createHTML:t=>t}):void 0,r1="$lit$",or=`lit$${(Math.random()+"").slice(9)}$`,i1="?"+or,C4=`<${i1}>`,Hr=document,qo=()=>Hr.createComment(""),Go=t=>t===null||typeof t!="object"&&typeof t!="function",o1=Array.isArray,E4=t=>o1(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ol=`[ 	
\f\r]`,ao=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ff=/-->/g,Wf=/>/g,Pr=RegExp(`>|${Ol}(?:([^\\s"'>=/]+)(${Ol}*=${Ol}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hf=/'/g,Vf=/"/g,s1=/^(?:script|style|textarea|title)$/i,a1=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=a1(1),ge=a1(2),Vr=Symbol.for("lit-noChange"),ut=Symbol.for("lit-nothing"),qf=new WeakMap,Br=Hr.createTreeWalker(Hr,129);function l1(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return zf!==void 0?zf.createHTML(e):e}const k4=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=ao;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===ao?u[1]==="!--"?s=Ff:u[1]!==void 0?s=Wf:u[2]!==void 0?(s1.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Pr):u[3]!==void 0&&(s=Pr):s===Pr?u[0]===">"?(s=i??ao,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Pr:u[3]==='"'?Vf:Hf):s===Vf||s===Hf?s=Pr:s===Ff||s===Wf?s=ao:(s=Pr,i=void 0);const h=s===Pr&&t[a+1].startsWith("/>")?" ":"";o+=s===ao?l+C4:d>=0?(r.push(c),l.slice(0,d)+r1+l.slice(d)+or+h):l+or+(d===-2?a:h)}return[l1(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class Zo{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=e.length-1,l=this.parts,[c,u]=k4(e,n);if(this.el=Zo.createElement(c,r),Br.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Br.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(r1)){const f=u[s++],h=i.getAttribute(d).split(or),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:m[2],strings:h,ctor:m[1]==="."?S4:m[1]==="?"?I4:m[1]==="@"?T4:Za}),i.removeAttribute(d)}else d.startsWith(or)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(s1.test(i.tagName)){const d=i.textContent.split(or),f=d.length-1;if(f>0){i.textContent=na?na.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],qo()),Br.nextNode(),l.push({type:2,index:++o});i.append(d[f],qo())}}}else if(i.nodeType===8)if(i.data===i1)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(or,d+1))!==-1;)l.push({type:7,index:o}),d+=or.length-1}o++}}static createElement(e,n){const r=Hr.createElement("template");return r.innerHTML=e,r}}function Si(t,e,n=t,r){var s,a;if(e===Vr)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Go(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Si(t,i._$AS(t,e.values),i,r)),e}let D4=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??Hr).importNode(n,!0);Br.currentNode=i;let o=Br.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Lu(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new A4(o,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Br.nextNode(),s++)}return Br.currentNode=Hr,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Lu=class c1{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=ut,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Si(this,e,n),Go(e)?e===ut||e==null||e===""?(this._$AH!==ut&&this._$AR(),this._$AH=ut):e!==this._$AH&&e!==Vr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):E4(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ut&&Go(this._$AH)?this._$AA.nextSibling.data=e:this.$(Hr.createTextNode(e)),this._$AH=e}g(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Zo.createElement(l1(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new D4(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(e){let n=qf.get(e.strings);return n===void 0&&qf.set(e.strings,n=new Zo(e)),n}T(e){o1(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new c1(this.k(qo()),this.k(qo()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},Za=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=ut,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ut}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=Si(this,e,n,0),s=!Go(e)||e!==this._$AH&&e!==Vr,s&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Si(this,a[r+l],n,l),c===Vr&&(c=this._$AH[l]),s||(s=!Go(c)||c!==this._$AH[l]),c===ut?e=ut:e!==ut&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.O(e)}O(e){e===ut?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},S4=class extends Za{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===ut?void 0:e}};class I4 extends Za{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==ut)}}class T4 extends Za{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=Si(this,e,n,0)??ut)===Vr)return;const r=this._$AH,i=e===ut&&r!==ut||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==ut&&(r===ut||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class A4{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Si(this,e)}}const $l=yo.litHtmlPolyfillSupport;$l==null||$l(Zo,Lu),(yo.litHtmlVersions??(yo.litHtmlVersions=[])).push("3.1.0");const x4=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Lu(e.insertBefore(qo(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends fi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=x4(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Vr}};var q0;de._$litElement$=!0,de.finalized=!0,(q0=globalThis.litElementHydrateSupport)==null||q0.call(globalThis,{LitElement:de});const Nl=globalThis.litElementPolyfillSupport;Nl==null||Nl({LitElement:de});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let _o,dr,fr;function P4(t,e){_o=document.createElement("style"),dr=document.createElement("style"),fr=document.createElement("style"),_o.textContent=vi(t).core.cssText,dr.textContent=vi(t).dark.cssText,fr.textContent=vi(t).light.cssText,document.head.appendChild(_o),document.head.appendChild(dr),document.head.appendChild(fr),u1(e)}function u1(t){dr&&fr&&(t==="light"?(dr.removeAttribute("media"),fr.media="enabled"):(fr.removeAttribute("media"),dr.media="enabled"))}function O4(t){_o&&dr&&fr&&(_o.textContent=vi(t).core.cssText,dr.textContent=vi(t).dark.cssText,fr.textContent=vi(t).light.cssText)}function vi(t){return{core:be`
      :root {
        --w3m-color-mix-strength: ${An(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${An((t==null?void 0:t["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${An((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${An((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${An((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:be`
      :root {
        --w3m-color-mix: ${An((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${An((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:be`
      :root {
        --w3m-color-mix: ${An((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${An((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Ne=be`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,wt=be`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,zu=be`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function $4(t,e){const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function N4(t,e){return customElements.get(t)||customElements.define(t,e),e}function ce(t){return function(n){return typeof n=="function"?N4(t,n):$4(t,n)}}const R4=be`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var B4=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Cc=class extends de{render(){return $`<slot></slot>`}};Cc.styles=[Ne,R4];Cc=B4([ce("wui-card")],Cc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M4={attribute:!0,type:String,converter:ta,reflect:!1,hasChanged:Uu},j4=(t=M4,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+r)};function U(t){return(e,n)=>typeof n=="object"?j4(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ie(t){return U({...t,state:!0,attribute:!1})}const U4=be`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,L4=ge`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,z4=ge`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,F4=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,W4=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,H4=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,V4=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,q4=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,G4=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Z4=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,K4=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Y4=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,J4=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,X4=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Q4=ge`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,e6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,n6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,r6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,i6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,o6=ge` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,s6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,a6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,l6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,c6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,u6=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,d6=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,f6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,h6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,p6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,g6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,m6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,b6=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,w6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,v6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,y6=ge`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,_6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,C6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,E6=ge` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,k6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,D6=ge`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,S6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,I6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,T6=ge`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,A6=ge`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,x6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,P6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,O6=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,$6=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,N6=ge`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,R6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,B6=ge`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,M6=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Ka=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const j6={allWallets:L4,appStore:z4,chromeStore:Q4,apple:F4,arrowBottom:W4,arrowLeft:H4,arrowRight:V4,arrowTop:q4,browser:G4,checkmark:Z4,chevronBottom:K4,chevronLeft:Y4,chevronRight:J4,chevronTop:X4,clock:e6,close:t6,compass:r6,coinPlaceholder:n6,copy:i6,cursor:o6,desktop:s6,disconnect:a6,discord:l6,etherscan:c6,extension:u6,externalLink:d6,facebook:f6,filters:h6,github:p6,google:g6,helpCircle:m6,infoCircle:b6,mail:w6,mobile:v6,networkPlaceholder:y6,nftPlaceholder:_6,off:C6,playStore:E6,qrCode:k6,refresh:D6,search:S6,swapHorizontal:I6,swapHorizontalBold:T6,swapVertical:A6,telegram:x6,twitch:P6,twitter:O6,twitterIcon:$6,wallet:R6,walletConnect:B6,walletPlaceholder:N6,warningCircle:M6};let Ii=class extends de{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,$`${j6[this.name]}`}};Ii.styles=[Ne,zu,U4];Ka([U()],Ii.prototype,"size",void 0);Ka([U()],Ii.prototype,"name",void 0);Ka([U()],Ii.prototype,"color",void 0);Ii=Ka([ce("wui-icon")],Ii);const U6=be`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Fu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ko=class extends de{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return $`<img src=${this.src} alt=${this.alt} />`}};Ko.styles=[Ne,zu,U6];Fu([U()],Ko.prototype,"src",void 0);Fu([U()],Ko.prototype,"alt",void 0);Ko=Fu([ce("wui-image")],Ko);const L6=be`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var z6=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ec=class extends de{render(){return $`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ec.styles=[Ne,L6];Ec=z6([ce("wui-loading-hexagon")],Ec);const F6=be`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Wu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yo=class extends de{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,$`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Yo.styles=[Ne,F6];Wu([U()],Yo.prototype,"color",void 0);Wu([U()],Yo.prototype,"size",void 0);Yo=Wu([ce("wui-loading-spinner")],Yo);const W6=be`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var d1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ra=class extends de{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,r=36-e,i=116+r,o=245+r,s=360+r*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};ra.styles=[Ne,W6];d1([U({type:Number})],ra.prototype,"radius",void 0);ra=d1([ce("wui-loading-thumbnail")],ra);const H6=be`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Ya=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ti=class extends de{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};Ti.styles=[H6];Ya([U()],Ti.prototype,"width",void 0);Ya([U()],Ti.prototype,"height",void 0);Ya([U()],Ti.prototype,"borderRadius",void 0);Ti=Ya([ce("wui-shimmer")],Ti);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},h1=t=>(...e)=>({_$litDirective$:t,values:e});let p1=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V6=h1(class extends p1{constructor(t){var e;if(super(t),t.type!==f1.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.it)o in e||(n.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return Vr}}),q6=be`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Ja=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Ai=class extends de{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,$`<slot class=${V6(e)}></slot>`}};Ai.styles=[Ne,q6];Ja([U()],Ai.prototype,"variant",void 0);Ja([U()],Ai.prototype,"color",void 0);Ja([U()],Ai.prototype,"align",void 0);Ai=Ja([ce("wui-text")],Ai);const G6=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Z6=ge`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,K6=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Y6=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,J6=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,X6=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Q6=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ey=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,ty=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,ny=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ry=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,iy=ge`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,oy=ge`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,sy=be`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var g1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const ay={browser:G6,dao:Z6,defi:K6,defiAlt:Y6,eth:J6,layers:X6,lock:Q6,login:ey,network:ty,nft:ny,noun:ry,profile:iy,system:oy};let ia=class extends de{constructor(){super(...arguments),this.name="browser"}render(){return $`${ay[this.name]}`}};ia.styles=[Ne,sy];g1([U()],ia.prototype,"name",void 0);ia=g1([ce("wui-visual")],ia);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=t=>t??ut,et={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:r}){return t.length<=e+n?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]},tintColor(t,e){const[n,r,i]=t,o=Math.round(n+(255-n)*e),s=Math.round(r+(255-r)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},ly=be`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var rn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Vt=class extends de{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&et.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&et.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&et.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&et.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&et.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&et.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&et.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&et.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};Vt.styles=[Ne,ly];rn([U()],Vt.prototype,"flexDirection",void 0);rn([U()],Vt.prototype,"flexWrap",void 0);rn([U()],Vt.prototype,"flexBasis",void 0);rn([U()],Vt.prototype,"flexGrow",void 0);rn([U()],Vt.prototype,"flexShrink",void 0);rn([U()],Vt.prototype,"alignItems",void 0);rn([U()],Vt.prototype,"justifyContent",void 0);rn([U()],Vt.prototype,"columnGap",void 0);rn([U()],Vt.prototype,"rowGap",void 0);rn([U()],Vt.prototype,"gap",void 0);rn([U()],Vt.prototype,"padding",void 0);rn([U()],Vt.prototype,"margin",void 0);Vt=rn([ce("wui-flex")],Vt);const cy=be`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Xa=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xi=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return $`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",$`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=et.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};xi.styles=[Ne,cy];Xa([U()],xi.prototype,"imageSrc",void 0);Xa([U()],xi.prototype,"alt",void 0);Xa([U()],xi.prototype,"address",void 0);xi=Xa([ce("wui-avatar")],xi);const uy=be`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var er=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Cn=class extends de{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||o?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,$` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Cn.styles=[Ne,wt,uy];er([U()],Cn.prototype,"size",void 0);er([U()],Cn.prototype,"backgroundColor",void 0);er([U()],Cn.prototype,"iconColor",void 0);er([U()],Cn.prototype,"iconSize",void 0);er([U()],Cn.prototype,"background",void 0);er([U({type:Boolean})],Cn.prototype,"border",void 0);er([U()],Cn.prototype,"borderColor",void 0);er([U()],Cn.prototype,"icon",void 0);Cn=er([ce("wui-icon-box")],Cn);const dy=be`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Qr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zn=class extends de{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${Fe(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${et.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?$`<wui-image src=${this.networkSrc}></wui-image>`:$`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return $`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Zn.styles=[Ne,wt,dy];Qr([U()],Zn.prototype,"networkSrc",void 0);Qr([U()],Zn.prototype,"avatarSrc",void 0);Qr([U()],Zn.prototype,"balance",void 0);Qr([U({type:Boolean})],Zn.prototype,"disabled",void 0);Qr([U({type:Boolean})],Zn.prototype,"isProfileName",void 0);Qr([U()],Zn.prototype,"address",void 0);Zn=Qr([ce("wui-account-button")],Zn);const fy=be`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var ws=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let qr=class extends de{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};qr.styles=[Ne,fy];ws([U()],qr.prototype,"size",void 0);ws([U()],qr.prototype,"name",void 0);ws([U()],qr.prototype,"imageSrc",void 0);ws([U()],qr.prototype,"walletIcon",void 0);qr=ws([ce("wui-wallet-image")],qr);const hy=be`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var m1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Rl=4;let oa=class extends de{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Rl;return $`${this.walletImages.slice(0,Rl).map(({src:n,walletName:r})=>$`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${Fe(r)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(Rl-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};oa.styles=[Ne,hy];m1([U({type:Array})],oa.prototype,"walletImages",void 0);oa=m1([ce("wui-all-wallets-image")],oa);const py=be`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Yi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let mr=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}};mr.styles=[Ne,wt,py];Yi([U()],mr.prototype,"size",void 0);Yi([U({type:Boolean})],mr.prototype,"disabled",void 0);Yi([U({type:Boolean})],mr.prototype,"fullWidth",void 0);Yi([U({type:Boolean})],mr.prototype,"loading",void 0);Yi([U()],mr.prototype,"variant",void 0);mr=Yi([ce("wui-button")],mr);const b1=ge`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,gy=be`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var w1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let sa=class extends de{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${b1}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};sa.styles=[Ne,wt,gy];w1([U()],sa.prototype,"type",void 0);sa=w1([ce("wui-card-select-loader")],sa);const my=ge`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,by=be`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var vs=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Gr=class extends de{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,$`${this.templateVisual()} ${e?my:b1}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:$`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Gr.styles=[Ne,by];vs([U()],Gr.prototype,"size",void 0);vs([U()],Gr.prototype,"name",void 0);vs([U()],Gr.prototype,"imageSrc",void 0);vs([U({type:Boolean})],Gr.prototype,"selected",void 0);Gr=vs([ce("wui-network-image")],Gr);const wy=be`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Ji=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let br=class extends de{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return $`
      <button data-selected=${Fe(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?$`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Fe(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:$`
      <wui-wallet-image size="md" imageSrc=${Fe(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};br.styles=[Ne,wt,wy];Ji([U()],br.prototype,"name",void 0);Ji([U()],br.prototype,"type",void 0);Ji([U()],br.prototype,"imageSrc",void 0);Ji([U({type:Boolean})],br.prototype,"disabled",void 0);Ji([U({type:Boolean})],br.prototype,"selected",void 0);br=Ji([ce("wui-card-select")],br);const vy=be`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Xi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wr=class extends de{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return $`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${et.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}};wr.styles=[Ne,wt,vy];Xi([U()],wr.prototype,"variant",void 0);Xi([U()],wr.prototype,"imageSrc",void 0);Xi([U({type:Boolean})],wr.prototype,"disabled",void 0);Xi([U()],wr.prototype,"icon",void 0);Xi([U()],wr.prototype,"href",void 0);wr=Xi([ce("wui-chip")],wr);const yy=be`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Hu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Jo=class extends de{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return $`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?$`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Jo.styles=[Ne,wt,yy];Hu([U()],Jo.prototype,"size",void 0);Hu([U({type:Boolean})],Jo.prototype,"loading",void 0);Jo=Hu([ce("wui-connect-button")],Jo);const _y=be`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Qa=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pi=class extends de{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Pi.styles=[Ne,wt,_y];Qa([U({type:Boolean})],Pi.prototype,"disabled",void 0);Qa([U()],Pi.prototype,"label",void 0);Qa([U()],Pi.prototype,"buttonLabel",void 0);Pi=Qa([ce("wui-cta-button")],Pi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cy=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Co(i,e);return!0},aa=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},v1=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Dy(e)}};function Ey(t){this._$AN!==void 0?(aa(this),this._$AM=t,v1(this)):this._$AM=t}function ky(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Co(r[o],!1),aa(r[o]);else r!=null&&(Co(r,!1),aa(r));else Co(this,t)}const Dy=t=>{t.type==f1.CHILD&&(t._$AP??(t._$AP=ky),t._$AQ??(t._$AQ=Ey))};class Sy extends p1{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),v1(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Co(this,e),aa(this))}setValue(e){if(Cy(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y1=()=>new Iy;let Iy=class{};const Bl=new WeakMap,_1=h1(class extends Sy{render(t){return ut}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.ct=(r=t.options)==null?void 0:r.host,this.ot(this.lt=t.element)),ut}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let n=Bl.get(e);n===void 0&&(n=new WeakMap,Bl.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=Bl.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ty=be`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var ei=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kn=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=y1()}render(){const e=`wui-size-${this.size}`;return $` ${this.templateIcon()}
      <input
        ${_1(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Fe(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};Kn.styles=[Ne,wt,Ty];ei([U()],Kn.prototype,"size",void 0);ei([U()],Kn.prototype,"icon",void 0);ei([U({type:Boolean})],Kn.prototype,"disabled",void 0);ei([U()],Kn.prototype,"placeholder",void 0);ei([U()],Kn.prototype,"type",void 0);ei([U()],Kn.prototype,"keyHint",void 0);Kn=ei([ce("wui-input-text")],Kn);const Ay=be`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var C1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let la=class extends de{render(){return $`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?$`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};la.styles=[Ne,Ay];C1([U()],la.prototype,"errorMessage",void 0);la=C1([ce("wui-email-input")],la);const xy=be`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var ys=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Zr=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Zr.styles=[Ne,wt,zu,xy];ys([U()],Zr.prototype,"size",void 0);ys([U({type:Boolean})],Zr.prototype,"disabled",void 0);ys([U()],Zr.prototype,"icon",void 0);ys([U()],Zr.prototype,"iconColor",void 0);Zr=ys([ce("wui-icon-link")],Zr);const Py=be`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var E1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ca=class extends de{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ca.styles=[Ne,wt,Py];E1([U()],ca.prototype,"icon",void 0);ca=E1([ce("wui-input-element")],ca);const Oy=be`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var k1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ua=class extends de{constructor(){super(...arguments),this.disabled=!1}render(){return $`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};ua.styles=[Ne,wt,Oy];k1([U({type:Boolean})],ua.prototype,"disabled",void 0);ua=k1([ce("wui-input-numeric")],ua);const $y=be`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Vu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xo=class extends de{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Xo.styles=[Ne,wt,$y];Vu([U({type:Boolean})],Xo.prototype,"disabled",void 0);Vu([U()],Xo.prototype,"color",void 0);Xo=Vu([ce("wui-link")],Xo);const Ny=be`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Mn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fn=class extends de{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Fe(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};fn.styles=[Ne,wt,Ny];Mn([U()],fn.prototype,"icon",void 0);Mn([U()],fn.prototype,"iconSize",void 0);Mn([U()],fn.prototype,"variant",void 0);Mn([U()],fn.prototype,"iconVariant",void 0);Mn([U({type:Boolean})],fn.prototype,"disabled",void 0);Mn([U()],fn.prototype,"imageSrc",void 0);Mn([U()],fn.prototype,"alt",void 0);Mn([U({type:Boolean})],fn.prototype,"chevron",void 0);Mn([U({type:Boolean})],fn.prototype,"loading",void 0);fn=Mn([ce("wui-list-item")],fn);var kc;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(kc||(kc={}));const Ry=be`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var ti=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Yn=class extends de{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,r=(e==null?void 0:e.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,$`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?$`<div class="swap-images-container">
        ${e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?$`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?$`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?$`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:$`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?$`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Yn.styles=[Ry];ti([U()],Yn.prototype,"type",void 0);ti([U()],Yn.prototype,"status",void 0);ti([U()],Yn.prototype,"direction",void 0);ti([U()],Yn.prototype,"onlyDirectionIcon",void 0);ti([U()],Yn.prototype,"images",void 0);ti([U()],Yn.prototype,"secondImage",void 0);Yn=ti([ce("wui-transaction-visual")],Yn);const By=be`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Sr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $n=class extends de{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return $`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${kc[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?$`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?$`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};$n.styles=[Ne,By];Sr([U()],$n.prototype,"type",void 0);Sr([U()],$n.prototype,"descriptions",void 0);Sr([U()],$n.prototype,"date",void 0);Sr([U()],$n.prototype,"onlyDirectionIcon",void 0);Sr([U()],$n.prototype,"status",void 0);Sr([U()],$n.prototype,"direction",void 0);Sr([U()],$n.prototype,"images",void 0);$n=Sr([ce("wui-transaction-list-item")],$n);const My=be`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var jy=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Dc=class extends de{render(){return $`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Dc.styles=[Ne,My];Dc=jy([ce("wui-transaction-list-item-loader")],Dc);const Uy=be`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var D1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let da=class extends de{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,$`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};da.styles=[Ne,Uy];D1([U()],da.prototype,"variant",void 0);da=D1([ce("wui-tag")],da);const Ly=be`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var jn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let hn=class extends de{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};hn.styles=[Ne,wt,Ly];jn([U({type:Array})],hn.prototype,"walletImages",void 0);jn([U()],hn.prototype,"imageSrc",void 0);jn([U()],hn.prototype,"name",void 0);jn([U()],hn.prototype,"tagLabel",void 0);jn([U()],hn.prototype,"tagVariant",void 0);jn([U()],hn.prototype,"icon",void 0);jn([U()],hn.prototype,"walletIcon",void 0);jn([U({type:Boolean})],hn.prototype,"disabled",void 0);jn([U({type:Boolean})],hn.prototype,"showAllWallets",void 0);hn=jn([ce("wui-list-wallet")],hn);const zy=be`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var S1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let fa=class extends de{constructor(){super(...arguments),this.logo="google"}render(){return $`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};fa.styles=[Ne,zy];S1([U()],fa.prototype,"logo",void 0);fa=S1([ce("wui-logo")],fa);const Fy=be`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var qu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qo=class extends de{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Qo.styles=[Ne,wt,Fy];qu([U()],Qo.prototype,"logo",void 0);qu([U({type:Boolean})],Qo.prototype,"disabled",void 0);Qo=qu([ce("wui-logo-select")],Qo);const Wy=be`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var Gu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let es=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return $`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:$`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};es.styles=[Ne,wt,Wy];Gu([U()],es.prototype,"imageSrc",void 0);Gu([U({type:Boolean})],es.prototype,"disabled",void 0);es=Gu([ce("wui-network-button")],es);const Hy=be`
  :host {
    position: relative;
    display: block;
  }
`;var I1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ha=class extends de{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,n)=>{const r=e.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(e,n)=>{if(e==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return $`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,n)=>$`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,n){const r=e.target,i=this.getInputElement(r);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,n):et.isNumber(o)&&e.data?(i.value=e.data,this.focusInputField("next",n)):i.value=""}}handlePaste(e,n,r){const i=n[0];if(i&&et.isNumber(i)){e.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}};ha.styles=[Ne,Hy];I1([U({type:Number})],ha.prototype,"length",void 0);ha=I1([ce("wui-otp")],ha);var _s={},Vy=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},T1={},on={};let Zu;const qy=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];on.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};on.getSymbolTotalCodewords=function(e){return qy[e]};on.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};on.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Zu=e};on.isKanjiModeEnabled=function(){return typeof Zu<"u"};on.toSJIS=function(e){return Zu(e)};var el={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(el);function A1(){this.buffer=[],this.length=0}A1.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Gy=A1;function Cs(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Cs.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};Cs.prototype.get=function(t,e){return this.data[t*this.size+e]};Cs.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Cs.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Zy=Cs,x1={};(function(t){const e=on.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=e(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],o=t.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(x1);var P1={};const Ky=on.getSymbolSize,Gf=7;P1.getPositions=function(e){const n=Ky(e);return[[0,0],[n-Gf,0],[0,n-Gf]]};var O1={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let f=0;f<o;f++){let h=i.get(d,f);h===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=h,a=1),h=i.get(f,d),h===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=h,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function n(r,i,o){switch(r){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),t.applyMask(c,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(O1);var tl={};const ar=el,Bs=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ms=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];tl.getBlocksCount=function(e,n){switch(n){case ar.L:return Bs[(e-1)*4+0];case ar.M:return Bs[(e-1)*4+1];case ar.Q:return Bs[(e-1)*4+2];case ar.H:return Bs[(e-1)*4+3];default:return}};tl.getTotalCodewordsCount=function(e,n){switch(n){case ar.L:return Ms[(e-1)*4+0];case ar.M:return Ms[(e-1)*4+1];case ar.Q:return Ms[(e-1)*4+2];case ar.H:return Ms[(e-1)*4+3];default:return}};var $1={},nl={};const Eo=new Uint8Array(512),pa=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Eo[n]=e,pa[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Eo[n]=Eo[n-255]})();nl.log=function(e){if(e<1)throw new Error("log("+e+")");return pa[e]};nl.exp=function(e){return Eo[e]};nl.mul=function(e,n){return e===0||n===0?0:Eo[pa[e]+pa[n]]};(function(t){const e=nl;t.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(r[s],i[a]);return o},t.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=e.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})($1);const N1=$1;function Ku(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Ku.prototype.initialize=function(e){this.degree=e,this.genPoly=N1.generateECPolynomial(this.degree)};Ku.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=N1.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var Yy=Ku,R1={},Ir={},Yu={};Yu.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Un={};const B1="[0-9]+",Jy="[A-Z $%*+\\-./:]+";let ts="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ts=ts.replace(/u/g,"\\u");const Xy="(?:(?![A-Z0-9 $%*+\\-./:]|"+ts+`)(?:.|[\r
]))+`;Un.KANJI=new RegExp(ts,"g");Un.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Un.BYTE=new RegExp(Xy,"g");Un.NUMERIC=new RegExp(B1,"g");Un.ALPHANUMERIC=new RegExp(Jy,"g");const Qy=new RegExp("^"+ts+"$"),e8=new RegExp("^"+B1+"$"),t8=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Un.testKanji=function(e){return Qy.test(e)};Un.testNumeric=function(e){return e8.test(e)};Un.testAlphanumeric=function(e){return t8.test(e)};(function(t){const e=Yu,n=Un;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return n.testNumeric(o)?t.NUMERIC:n.testAlphanumeric(o)?t.ALPHANUMERIC:n.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return r(o)}catch{return s}}})(Ir);(function(t){const e=on,n=tl,r=el,i=Ir,o=Yu,s=7973,a=e.getBCHDigit(s);function l(f,h,m){for(let w=1;w<=40;w++)if(h<=t.getCapacity(w,m,f))return w}function c(f,h){return i.getCharCountIndicator(f,h)+4}function u(f,h){let m=0;return f.forEach(function(w){const _=c(w.mode,h);m+=_+w.getBitsLength()}),m}function d(f,h){for(let m=1;m<=40;m++)if(u(f,m)<=t.getCapacity(m,h,i.MIXED))return m}t.from=function(h,m){return o.isValid(h)?parseInt(h,10):m},t.getCapacity=function(h,m,w){if(!o.isValid(h))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=i.BYTE);const _=e.getSymbolTotalCodewords(h),D=n.getTotalCodewordsCount(h,m),v=(_-D)*8;if(w===i.MIXED)return v;const k=v-c(w,h);switch(w){case i.NUMERIC:return Math.floor(k/10*3);case i.ALPHANUMERIC:return Math.floor(k/11*2);case i.KANJI:return Math.floor(k/13);case i.BYTE:default:return Math.floor(k/8)}},t.getBestVersionForData=function(h,m){let w;const _=r.from(m,r.M);if(Array.isArray(h)){if(h.length>1)return d(h,_);if(h.length===0)return 1;w=h[0]}else w=h;return l(w.mode,w.getLength(),_)},t.getEncodedBits=function(h){if(!o.isValid(h)||h<7)throw new Error("Invalid QR Code version");let m=h<<12;for(;e.getBCHDigit(m)-a>=0;)m^=s<<e.getBCHDigit(m)-a;return h<<12|m}})(R1);var M1={};const Sc=on,j1=1335,n8=21522,Zf=Sc.getBCHDigit(j1);M1.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;Sc.getBCHDigit(i)-Zf>=0;)i^=j1<<Sc.getBCHDigit(i)-Zf;return(r<<10|i)^n8};var U1={};const r8=Ir;function Oi(t){this.mode=r8.NUMERIC,this.data=t.toString()}Oi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Oi.prototype.getLength=function(){return this.data.length};Oi.prototype.getBitsLength=function(){return Oi.getBitsLength(this.data.length)};Oi.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,o*3+1))};var i8=Oi;const o8=Ir,Ml=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function $i(t){this.mode=o8.ALPHANUMERIC,this.data=t}$i.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};$i.prototype.getLength=function(){return this.data.length};$i.prototype.getBitsLength=function(){return $i.getBitsLength(this.data.length)};$i.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Ml.indexOf(this.data[n])*45;r+=Ml.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Ml.indexOf(this.data[n]),6)};var s8=$i,a8=function(e){for(var n=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const l8=a8,c8=Ir;function Ni(t){this.mode=c8.BYTE,typeof t=="string"&&(t=l8(t)),this.data=new Uint8Array(t)}Ni.getBitsLength=function(e){return e*8};Ni.prototype.getLength=function(){return this.data.length};Ni.prototype.getBitsLength=function(){return Ni.getBitsLength(this.data.length)};Ni.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var u8=Ni;const d8=Ir,f8=on;function Ri(t){this.mode=d8.KANJI,this.data=t}Ri.getBitsLength=function(e){return e*13};Ri.prototype.getLength=function(){return this.data.length};Ri.prototype.getBitsLength=function(){return Ri.getBitsLength(this.data.length)};Ri.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=f8.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var h8=Ri,L1={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,f,h,m,w,_;!a.empty();){l=a.pop(),c=l.value,d=l.cost,f=n[c]||{};for(u in f)f.hasOwnProperty(u)&&(h=f[u],m=d+h,w=s[u],_=typeof s[u]>"u",(_||w>m)&&(s[u]=m,a.push(u,m),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var D=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(D)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(L1);var p8=L1.exports;(function(t){const e=Ir,n=i8,r=s8,i=u8,o=h8,s=Un,a=on,l=p8;function c(D){return unescape(encodeURIComponent(D)).length}function u(D,v,k){const C=[];let S;for(;(S=D.exec(k))!==null;)C.push({data:S[0],index:S.index,mode:v,length:S[0].length});return C}function d(D){const v=u(s.NUMERIC,e.NUMERIC,D),k=u(s.ALPHANUMERIC,e.ALPHANUMERIC,D);let C,S;return a.isKanjiModeEnabled()?(C=u(s.BYTE,e.BYTE,D),S=u(s.KANJI,e.KANJI,D)):(C=u(s.BYTE_KANJI,e.BYTE,D),S=[]),v.concat(k,C,S).sort(function(p,I){return p.index-I.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function f(D,v){switch(v){case e.NUMERIC:return n.getBitsLength(D);case e.ALPHANUMERIC:return r.getBitsLength(D);case e.KANJI:return o.getBitsLength(D);case e.BYTE:return i.getBitsLength(D)}}function h(D){return D.reduce(function(v,k){const C=v.length-1>=0?v[v.length-1]:null;return C&&C.mode===k.mode?(v[v.length-1].data+=k.data,v):(v.push(k),v)},[])}function m(D){const v=[];for(let k=0;k<D.length;k++){const C=D[k];switch(C.mode){case e.NUMERIC:v.push([C,{data:C.data,mode:e.ALPHANUMERIC,length:C.length},{data:C.data,mode:e.BYTE,length:C.length}]);break;case e.ALPHANUMERIC:v.push([C,{data:C.data,mode:e.BYTE,length:C.length}]);break;case e.KANJI:v.push([C,{data:C.data,mode:e.BYTE,length:c(C.data)}]);break;case e.BYTE:v.push([{data:C.data,mode:e.BYTE,length:c(C.data)}])}}return v}function w(D,v){const k={},C={start:{}};let S=["start"];for(let T=0;T<D.length;T++){const p=D[T],I=[];for(let N=0;N<p.length;N++){const L=p[N],W=""+T+N;I.push(W),k[W]={node:L,lastCount:0},C[W]={};for(let F=0;F<S.length;F++){const pe=S[F];k[pe]&&k[pe].node.mode===L.mode?(C[pe][W]=f(k[pe].lastCount+L.length,L.mode)-f(k[pe].lastCount,L.mode),k[pe].lastCount+=L.length):(k[pe]&&(k[pe].lastCount=L.length),C[pe][W]=f(L.length,L.mode)+4+e.getCharCountIndicator(L.mode,v))}}S=I}for(let T=0;T<S.length;T++)C[S[T]].end=0;return{map:C,table:k}}function _(D,v){let k;const C=e.getBestModeForData(D);if(k=e.from(v,C),k!==e.BYTE&&k.bit<C.bit)throw new Error('"'+D+'" cannot be encoded with mode '+e.toString(k)+`.
 Suggested mode is: `+e.toString(C));switch(k===e.KANJI&&!a.isKanjiModeEnabled()&&(k=e.BYTE),k){case e.NUMERIC:return new n(D);case e.ALPHANUMERIC:return new r(D);case e.KANJI:return new o(D);case e.BYTE:return new i(D)}}t.fromArray=function(v){return v.reduce(function(k,C){return typeof C=="string"?k.push(_(C,null)):C.data&&k.push(_(C.data,C.mode)),k},[])},t.fromString=function(v,k){const C=d(v,a.isKanjiModeEnabled()),S=m(C),T=w(S,k),p=l.find_path(T.map,"start","end"),I=[];for(let N=1;N<p.length-1;N++)I.push(T.table[p[N]].node);return t.fromArray(h(I))},t.rawSplit=function(v){return t.fromArray(d(v,a.isKanjiModeEnabled()))}})(U1);const rl=on,jl=el,g8=Gy,m8=Zy,b8=x1,w8=P1,Ic=O1,Tc=tl,v8=Yy,ga=R1,y8=M1,_8=Ir,Ul=U1;function C8(t,e){const n=t.size,r=w8.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(o+a,s+l,!0,!0):t.set(o+a,s+l,!1,!0))}}function E8(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function k8(t,e){const n=b8.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function D8(t,e){const n=t.size,r=ga.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function Ll(t,e,n){const r=t.size,i=y8.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function S8(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let c=!1;s<e.length&&(c=(e[s]>>>o&1)===1),t.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function I8(t,e,n){const r=new g8;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),_8.getCharCountIndicator(l.mode,t)),l.write(r)});const i=rl.getSymbolTotalCodewords(t),o=Tc.getTotalCodewordsCount(t,e),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return T8(r,t,e)}function T8(t,e,n){const r=rl.getSymbolTotalCodewords(e),i=Tc.getTotalCodewordsCount(e,n),o=r-i,s=Tc.getBlocksCount(e,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,f=c-u,h=new v8(f);let m=0;const w=new Array(s),_=new Array(s);let D=0;const v=new Uint8Array(t.buffer);for(let p=0;p<s;p++){const I=p<l?u:d;w[p]=v.slice(m,m+I),_[p]=h.encode(w[p]),m+=I,D=Math.max(D,I)}const k=new Uint8Array(r);let C=0,S,T;for(S=0;S<D;S++)for(T=0;T<s;T++)S<w[T].length&&(k[C++]=w[T][S]);for(S=0;S<f;S++)for(T=0;T<s;T++)k[C++]=_[T][S];return k}function A8(t,e,n,r){let i;if(Array.isArray(t))i=Ul.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const u=Ul.rawSplit(t);c=ga.getBestVersionForData(u,n)}i=Ul.fromString(t,c||40)}else throw new Error("Invalid data");const o=ga.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=I8(e,n,i),a=rl.getSymbolSize(e),l=new m8(a);return C8(l,e),E8(l),k8(l,e),Ll(l,n,0),e>=7&&D8(l,e),S8(l,s),isNaN(r)&&(r=Ic.getBestMask(l,Ll.bind(null,l,n))),Ic.applyMask(r,l),Ll(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}T1.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=jl.M,i,o;return typeof n<"u"&&(r=jl.from(n.errorCorrectionLevel,jl.M),i=ga.from(n.version),o=Ic.from(n.maskPattern),n.toSJISFunc&&rl.setToSJISFunction(n.toSJISFunc)),A8(e,i,r,o)};var z1={},Ju={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const o=t.getScale(r,i);return Math.floor((r+i.margin*2)*o)},t.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=t.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let f=0;f<c;f++)for(let h=0;h<c;h++){let m=(f*c+h)*4,w=o.color.light;if(f>=u&&h>=u&&f<c-u&&h<c-u){const _=Math.floor((f-u)/l),D=Math.floor((h-u)/l);w=d[a[_*s+D]?1:0]}r[m++]=w.r,r[m++]=w.g,r[m++]=w.b,r[m]=w.a}}})(Ju);(function(t){const e=Ju;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=e.getOptions(l);const u=e.getImageWidth(o.modules.size,l),d=c.getContext("2d"),f=d.createImageData(u,u);return e.qrToImageData(f.data,o,l),n(d,c,u),d.putImageData(f,0,0),c},t.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=t.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(z1);var F1={};const x8=Ju;function Kf(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function zl(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function P8(t,e,n){let r="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!o&&(o=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(r+=o?zl("M",l+n,.5+c+n):zl("m",i,0),i=0,o=!1),l+1<e&&t[a+1]||(r+=zl("h",s),s=0)):i++}return r}F1.render=function(e,n,r){const i=x8.getOptions(n),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+Kf(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Kf(i.color.dark,"stroke")+' d="'+P8(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,f),f};const O8=Vy,Ac=T1,W1=z1,$8=F1;function Xu(t,e,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!O8())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const u=Ac.create(n,r);l(t(u,e,r))}catch(u){c(u)}})}try{const l=Ac.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}_s.create=Ac.create;_s.toCanvas=Xu.bind(null,W1.render);_s.toDataURL=Xu.bind(null,W1.renderToDataURL);_s.toString=Xu.bind(null,function(t,e,n){return $8.render(t,n)});const N8=.1,Yf=2.5,Fn=7;function Fl(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+N8}function R8(t,e){const n=Array.prototype.slice.call(_s.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const B8={generate(t,e,n){const r="#141414",i="transparent",s=[],a=R8(t,"Q"),l=e/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:w,y:_})=>{const D=(a.length-Fn)*l*w,v=(a.length-Fn)*l*_,k=.45;for(let C=0;C<c.length;C+=1){const S=l*(Fn-C*2);s.push(ge`
            <rect
              fill=${C===2?r:i}
              width=${C===0?S-5:S}
              rx= ${C===0?(S-5)*k:S*k}
              ry= ${C===0?(S-5)*k:S*k}
              stroke=${r}
              stroke-width=${C===0?5:0}
              height=${C===0?S-5:S}
              x= ${C===0?v+l*C+5/2:v+l*C}
              y= ${C===0?D+l*C+5/2:D+l*C}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,f=a.length/2+u/2-1,h=[];a.forEach((w,_)=>{w.forEach((D,v)=>{if(a[_][v]&&!(_<Fn&&v<Fn||_>a.length-(Fn+1)&&v<Fn||_<Fn&&v>a.length-(Fn+1))&&!(_>d&&_<f&&v>d&&v<f)){const k=_*l+l/2,C=v*l+l/2;h.push([k,C])}})});const m={};return h.forEach(([w,_])=>{var D;m[w]?(D=m[w])==null||D.push(_):m[w]=[_]}),Object.entries(m).map(([w,_])=>{const D=_.filter(v=>_.every(k=>!Fl(v,k,l)));return[Number(w),D]}).forEach(([w,_])=>{_.forEach(D=>{s.push(ge`<circle cx=${w} cy=${D} fill=${r} r=${l/Yf} />`)})}),Object.entries(m).filter(([w,_])=>_.length>1).map(([w,_])=>{const D=_.filter(v=>_.some(k=>Fl(v,k,l)));return[Number(w),D]}).map(([w,_])=>{_.sort((v,k)=>v<k?-1:1);const D=[];for(const v of _){const k=D.find(C=>C.some(S=>Fl(v,S,l)));k?k.push(v):D.push([v])}return[w,D.map(v=>[v[0],v[v.length-1]])]}).forEach(([w,_])=>{_.forEach(([D,v])=>{s.push(ge`
              <line
                x1=${w}
                x2=${w}
                y1=${D}
                y2=${v}
                stroke=${r}
                stroke-width=${l/(Yf/2)}
                stroke-linecap="round"
              />
            `)})}),s}},M8=be`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Qi=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let vr=class extends de{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return ge`
      <svg height=${e} width=${e}>
        ${B8.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};vr.styles=[Ne,M8];Qi([U()],vr.prototype,"uri",void 0);Qi([U({type:Number})],vr.prototype,"size",void 0);Qi([U()],vr.prototype,"theme",void 0);Qi([U()],vr.prototype,"imageSrc",void 0);Qi([U()],vr.prototype,"alt",void 0);vr=Qi([ce("wui-qr-code")],vr);const j8=be`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var U8=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let xc=class extends de{constructor(){super(...arguments),this.inputComponentRef=y1()}render(){return $`
      <wui-input-text
        ${_1(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};xc.styles=[Ne,j8];xc=U8([ce("wui-search-bar")],xc);const L8=be`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Es=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Kr=class extends de{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return $`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Kr.styles=[Ne,L8];Es([U()],Kr.prototype,"backgroundColor",void 0);Es([U()],Kr.prototype,"iconColor",void 0);Es([U()],Kr.prototype,"icon",void 0);Es([U()],Kr.prototype,"message",void 0);Kr=Es([ce("wui-snackbar")],Kr);const z8=be`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Tr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nn=class extends de{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const r=n===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const r=this.buttons[this.activeTab],i=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};Nn.styles=[Ne,wt,z8];Tr([U({type:Array})],Nn.prototype,"tabs",void 0);Tr([U()],Nn.prototype,"onTabChange",void 0);Tr([U({type:Array})],Nn.prototype,"buttons",void 0);Tr([U({type:Boolean})],Nn.prototype,"disabled",void 0);Tr([Ie()],Nn.prototype,"activeTab",void 0);Tr([Ie()],Nn.prototype,"localTabWidth",void 0);Tr([Ie()],Nn.prototype,"isDense",void 0);Nn=Tr([ce("wui-tabs")],Nn);const F8=be`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Qu=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ns=class extends de{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return $`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ns.styles=[Ne,wt,F8];Qu([U()],ns.prototype,"placement",void 0);Qu([U()],ns.prototype,"message",void 0);ns=Qu([ce("wui-tooltip")],ns);const W8=be`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var il=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bi=class extends de{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,$`${this.templateVisual()}`}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:$`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Bi.styles=[Ne,W8];il([U()],Bi.prototype,"imageSrc",void 0);il([U()],Bi.prototype,"alt",void 0);il([U({type:Boolean})],Bi.prototype,"borderRadiusFull",void 0);Bi=il([ce("wui-visual-thumbnail")],Bi);const H8=be`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var gn=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Xt=class extends de{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&et.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&et.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&et.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&et.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&et.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&et.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&et.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&et.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};Xt.styles=[Ne,H8];gn([U()],Xt.prototype,"gridTemplateRows",void 0);gn([U()],Xt.prototype,"gridTemplateColumns",void 0);gn([U()],Xt.prototype,"justifyItems",void 0);gn([U()],Xt.prototype,"alignItems",void 0);gn([U()],Xt.prototype,"justifyContent",void 0);gn([U()],Xt.prototype,"alignContent",void 0);gn([U()],Xt.prototype,"columnGap",void 0);gn([U()],Xt.prototype,"rowGap",void 0);gn([U()],Xt.prototype,"gap",void 0);gn([U()],Xt.prototype,"padding",void 0);gn([U()],Xt.prototype,"margin",void 0);Xt=gn([ce("wui-grid")],Xt);const V8=be`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var H1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ma=class extends de{constructor(){super(...arguments),this.text=""}render(){return $`${this.template()}`}template(){return this.text?$`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ma.styles=[Ne,V8];H1([U()],ma.prototype,"text",void 0);ma=H1([ce("wui-separator")],ma);var V1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(xu,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",f="quarter",h="year",m="date",w="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ee){var Z=["th","st","nd","rd"],H=ee%100;return"["+ee+(Z[(H-20)%10]||Z[H]||Z[0])+"]"}},k=function(ee,Z,H){var V=String(ee);return!V||V.length>=Z?ee:""+Array(Z+1-V.length).join(H)+ee},C={s:k,z:function(ee){var Z=-ee.utcOffset(),H=Math.abs(Z),V=Math.floor(H/60),K=H%60;return(Z<=0?"+":"-")+k(V,2,"0")+":"+k(K,2,"0")},m:function ee(Z,H){if(Z.date()<H.date())return-ee(H,Z);var V=12*(H.year()-Z.year())+(H.month()-Z.month()),K=Z.clone().add(V,d),ie=H-K<0,ne=Z.clone().add(V+(ie?-1:1),d);return+(-(V+(H-K)/(ie?K-ne:ne-K))||0)},a:function(ee){return ee<0?Math.ceil(ee)||0:Math.floor(ee)},p:function(ee){return{M:d,y:h,w:u,d:c,D:m,h:l,m:a,s,ms:o,Q:f}[ee]||String(ee||"").toLowerCase().replace(/s$/,"")},u:function(ee){return ee===void 0}},S="en",T={};T[S]=v;var p="$isDayjsObject",I=function(ee){return ee instanceof F||!(!ee||!ee[p])},N=function ee(Z,H,V){var K;if(!Z)return S;if(typeof Z=="string"){var ie=Z.toLowerCase();T[ie]&&(K=ie),H&&(T[ie]=H,K=ie);var ne=Z.split("-");if(!K&&ne.length>1)return ee(ne[0])}else{var oe=Z.name;T[oe]=Z,K=oe}return!V&&K&&(S=K),K||!V&&S},L=function(ee,Z){if(I(ee))return ee.clone();var H=typeof Z=="object"?Z:{};return H.date=ee,H.args=arguments,new F(H)},W=C;W.l=N,W.i=I,W.w=function(ee,Z){return L(ee,{locale:Z.$L,utc:Z.$u,x:Z.$x,$offset:Z.$offset})};var F=function(){function ee(H){this.$L=N(H.locale,null,!0),this.parse(H),this.$x=this.$x||H.x||{},this[p]=!0}var Z=ee.prototype;return Z.parse=function(H){this.$d=function(V){var K=V.date,ie=V.utc;if(K===null)return new Date(NaN);if(W.u(K))return new Date;if(K instanceof Date)return new Date(K);if(typeof K=="string"&&!/Z$/i.test(K)){var ne=K.match(_);if(ne){var oe=ne[2]-1||0,ue=(ne[7]||"0").substring(0,3);return ie?new Date(Date.UTC(ne[1],oe,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,ue)):new Date(ne[1],oe,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,ue)}}return new Date(K)}(H),this.init()},Z.init=function(){var H=this.$d;this.$y=H.getFullYear(),this.$M=H.getMonth(),this.$D=H.getDate(),this.$W=H.getDay(),this.$H=H.getHours(),this.$m=H.getMinutes(),this.$s=H.getSeconds(),this.$ms=H.getMilliseconds()},Z.$utils=function(){return W},Z.isValid=function(){return this.$d.toString()!==w},Z.isSame=function(H,V){var K=L(H);return this.startOf(V)<=K&&K<=this.endOf(V)},Z.isAfter=function(H,V){return L(H)<this.startOf(V)},Z.isBefore=function(H,V){return this.endOf(V)<L(H)},Z.$g=function(H,V,K){return W.u(H)?this[V]:this.set(K,H)},Z.unix=function(){return Math.floor(this.valueOf()/1e3)},Z.valueOf=function(){return this.$d.getTime()},Z.startOf=function(H,V){var K=this,ie=!!W.u(V)||V,ne=W.p(H),oe=function(Te,De){var xe=W.w(K.$u?Date.UTC(K.$y,De,Te):new Date(K.$y,De,Te),K);return ie?xe:xe.endOf(c)},ue=function(Te,De){return W.w(K.toDate()[Te].apply(K.toDate("s"),(ie?[0,0,0,0]:[23,59,59,999]).slice(De)),K)},re=this.$W,Y=this.$M,fe=this.$D,Ce="set"+(this.$u?"UTC":"");switch(ne){case h:return ie?oe(1,0):oe(31,11);case d:return ie?oe(1,Y):oe(0,Y+1);case u:var me=this.$locale().weekStart||0,Ee=(re<me?re+7:re)-me;return oe(ie?fe-Ee:fe+(6-Ee),Y);case c:case m:return ue(Ce+"Hours",0);case l:return ue(Ce+"Minutes",1);case a:return ue(Ce+"Seconds",2);case s:return ue(Ce+"Milliseconds",3);default:return this.clone()}},Z.endOf=function(H){return this.startOf(H,!1)},Z.$set=function(H,V){var K,ie=W.p(H),ne="set"+(this.$u?"UTC":""),oe=(K={},K[c]=ne+"Date",K[m]=ne+"Date",K[d]=ne+"Month",K[h]=ne+"FullYear",K[l]=ne+"Hours",K[a]=ne+"Minutes",K[s]=ne+"Seconds",K[o]=ne+"Milliseconds",K)[ie],ue=ie===c?this.$D+(V-this.$W):V;if(ie===d||ie===h){var re=this.clone().set(m,1);re.$d[oe](ue),re.init(),this.$d=re.set(m,Math.min(this.$D,re.daysInMonth())).$d}else oe&&this.$d[oe](ue);return this.init(),this},Z.set=function(H,V){return this.clone().$set(H,V)},Z.get=function(H){return this[W.p(H)]()},Z.add=function(H,V){var K,ie=this;H=Number(H);var ne=W.p(V),oe=function(Y){var fe=L(ie);return W.w(fe.date(fe.date()+Math.round(Y*H)),ie)};if(ne===d)return this.set(d,this.$M+H);if(ne===h)return this.set(h,this.$y+H);if(ne===c)return oe(1);if(ne===u)return oe(7);var ue=(K={},K[a]=r,K[l]=i,K[s]=n,K)[ne]||1,re=this.$d.getTime()+H*ue;return W.w(re,this)},Z.subtract=function(H,V){return this.add(-1*H,V)},Z.format=function(H){var V=this,K=this.$locale();if(!this.isValid())return K.invalidDate||w;var ie=H||"YYYY-MM-DDTHH:mm:ssZ",ne=W.z(this),oe=this.$H,ue=this.$m,re=this.$M,Y=K.weekdays,fe=K.months,Ce=K.meridiem,me=function(De,xe,Be,Me){return De&&(De[xe]||De(V,ie))||Be[xe].slice(0,Me)},Ee=function(De){return W.s(oe%12||12,De,"0")},Te=Ce||function(De,xe,Be){var Me=De<12?"AM":"PM";return Be?Me.toLowerCase():Me};return ie.replace(D,function(De,xe){return xe||function(Be){switch(Be){case"YY":return String(V.$y).slice(-2);case"YYYY":return W.s(V.$y,4,"0");case"M":return re+1;case"MM":return W.s(re+1,2,"0");case"MMM":return me(K.monthsShort,re,fe,3);case"MMMM":return me(fe,re);case"D":return V.$D;case"DD":return W.s(V.$D,2,"0");case"d":return String(V.$W);case"dd":return me(K.weekdaysMin,V.$W,Y,2);case"ddd":return me(K.weekdaysShort,V.$W,Y,3);case"dddd":return Y[V.$W];case"H":return String(oe);case"HH":return W.s(oe,2,"0");case"h":return Ee(1);case"hh":return Ee(2);case"a":return Te(oe,ue,!0);case"A":return Te(oe,ue,!1);case"m":return String(ue);case"mm":return W.s(ue,2,"0");case"s":return String(V.$s);case"ss":return W.s(V.$s,2,"0");case"SSS":return W.s(V.$ms,3,"0");case"Z":return ne}return null}(De)||ne.replace(":","")})},Z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},Z.diff=function(H,V,K){var ie,ne=this,oe=W.p(V),ue=L(H),re=(ue.utcOffset()-this.utcOffset())*r,Y=this-ue,fe=function(){return W.m(ne,ue)};switch(oe){case h:ie=fe()/12;break;case d:ie=fe();break;case f:ie=fe()/3;break;case u:ie=(Y-re)/6048e5;break;case c:ie=(Y-re)/864e5;break;case l:ie=Y/i;break;case a:ie=Y/r;break;case s:ie=Y/n;break;default:ie=Y}return K?ie:W.a(ie)},Z.daysInMonth=function(){return this.endOf(d).$D},Z.$locale=function(){return T[this.$L]},Z.locale=function(H,V){if(!H)return this.$L;var K=this.clone(),ie=N(H,V,!0);return ie&&(K.$L=ie),K},Z.clone=function(){return W.w(this.$d,this)},Z.toDate=function(){return new Date(this.valueOf())},Z.toJSON=function(){return this.isValid()?this.toISOString():null},Z.toISOString=function(){return this.$d.toISOString()},Z.toString=function(){return this.$d.toUTCString()},ee}(),pe=F.prototype;return L.prototype=pe,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",h],["$D",m]].forEach(function(ee){pe[ee[1]]=function(Z){return this.$g(Z,ee[0],ee[1])}}),L.extend=function(ee,Z){return ee.$i||(ee(Z,F,L),ee.$i=!0),L},L.locale=N,L.isDayjs=I,L.unix=function(ee){return L(1e3*ee)},L.en=T[S],L.Ls=T,L.p={},L})})(V1);var q8=V1.exports;const rs=qa(q8);var q1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(xu,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(q1);var G8=q1.exports;const Z8=qa(G8);var G1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(xu,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,f){return o.fromToBase(c,u,d,f)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,f,h){for(var m,w,_,D=d.$locale().relativeTime||s,v=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],k=v.length,C=0;C<k;C+=1){var S=v[C];S.d&&(m=f?i(c).diff(d,S.d,!0):d.diff(c,S.d,!0));var T=(n.rounding||Math.round)(Math.abs(m));if(_=m>0,T<=S.r||!S.r){T<=1&&C>0&&(S=v[C-1]);var p=D[S.l];h&&(T=h(""+T)),w=typeof p=="string"?p.replace("%d",T):p(T,u,S.l,_);break}}if(u)return w;var I=_?D.future:D.past;return typeof I=="function"?I(w):I.replace("%s",w)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(G1);var K8=G1.exports;const Y8=qa(K8);rs.extend(Y8);rs.extend(Z8);rs.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Z1={getYear(t=new Date().toISOString()){return rs(t).year()},getRelativeDateFromNow(t){return rs(t).fromNow(!0)}},J8=3,X8=["receive","deposit","borrow","claim"],Q8=["withdraw","repay","burn"],mi={getTransactionGroupTitle(t){const e=Z1.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,n]=t,r=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!r?[this.getTransactionImage(e),this.getTransactionImage(n)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:mi.getTransactionTransferTokenType(t),url:mi.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,l;let e=null;const n=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&r&&(e=(l=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var d,f,h;const e=(d=t.metadata)==null?void 0:d.operationType,n=t.transfers,r=((f=t.transfers)==null?void 0:f.length)>0,i=((h=t.transfers)==null?void 0:h.length)>1,o=r&&(n==null?void 0:n.every(m=>!!m.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(e==="send"||e==="receive")&&o?(l=et.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=et.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[t.metadata.status];if(i)return n.map(m=>this.getTransferDescription(m));let u="";return X8.includes(e)?u="+":Q8.includes(e)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(J8):null}};var tr=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rn=class extends de{constructor(){super(),this.unsubscribe=[],this.networkImages=cr.state.networkImages,this.disabled=!1,this.balance="show",this.address=Ke.state.address,this.balanceVal=Ke.state.balance,this.balanceSymbol=Ke.state.balanceSymbol,this.profileName=Ke.state.profileName,this.profileImage=Ke.state.profileImage,this.network=st.state.caipNetwork,this.unsubscribe.push(Ke.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),st.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var r;const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return $`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Fe(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Fe(e)}
        avatarSrc=${Fe(this.profileImage)}
        balance=${n?Se.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){Et.open()}};tr([U({type:Boolean})],Rn.prototype,"disabled",void 0);tr([U()],Rn.prototype,"balance",void 0);tr([Ie()],Rn.prototype,"address",void 0);tr([Ie()],Rn.prototype,"balanceVal",void 0);tr([Ie()],Rn.prototype,"balanceSymbol",void 0);tr([Ie()],Rn.prototype,"profileName",void 0);tr([Ie()],Rn.prototype,"profileImage",void 0);tr([Ie()],Rn.prototype,"network",void 0);Rn=tr([ce("w3m-account-button")],Rn);var ni=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let yr=class extends de{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ke.state.isConnected,this.unsubscribe.push(Ke.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?$`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Fe(this.balance)}
          >
          </w3m-account-button>
        `:$`
          <w3m-connect-button
            size=${Fe(this.size)}
            label=${Fe(this.label)}
            loadingLabel=${Fe(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ni([U({type:Boolean})],yr.prototype,"disabled",void 0);ni([U()],yr.prototype,"balance",void 0);ni([U()],yr.prototype,"size",void 0);ni([U()],yr.prototype,"label",void 0);ni([U()],yr.prototype,"loadingLabel",void 0);ni([Ie()],yr.prototype,"isAccount",void 0);yr=ni([ce("w3m-button")],yr);var ks=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Mi=class extends de{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Et.state.open,this.unsubscribe.push(Et.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-connect-button
        size=${Fe(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Et.close():Et.open()}};ks([U()],Mi.prototype,"size",void 0);ks([U()],Mi.prototype,"label",void 0);ks([U()],Mi.prototype,"loadingLabel",void 0);ks([Ie()],Mi.prototype,"open",void 0);Mi=ks([ce("w3m-connect-button")],Mi);const e_=be`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var K1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const Jf="scroll-lock";let is=class extends de{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Et.state.open,this.initializeTheming(),We.prefetch(),this.unsubscribe.push(Et.subscribeKey("open",e=>e?this.onOpen():this.onClose())),Ye.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?$`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&Et.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=an.state,r=et.getColorTheme(n);P4(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,dn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Jf,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Jf}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")Et.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}};is.styles=e_;K1([Ie()],is.prototype,"open",void 0);is=K1([ce("w3m-modal")],is);const t_=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return is}},Symbol.toStringTag,{value:"Module"}));var ol=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let os=class extends de{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=st.state.caipNetwork,this.connected=Ke.state.isConnected,this.unsubscribe.push(st.subscribeKey("caipNetwork",e=>this.network=e),Ke.subscribeKey("isConnected",e=>this.connected=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return $`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${Fe(pt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){Et.open({view:"Networks"})}};ol([U({type:Boolean})],os.prototype,"disabled",void 0);ol([Ie()],os.prototype,"network",void 0);ol([Ie()],os.prototype,"connected",void 0);os=ol([ce("w3m-network-button")],os);const n_=be`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Y1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ba=class extends de{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=je.state.view,this.unsubscribe.push(je.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return $`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return $`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return $`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return $`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return $`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return $`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return $`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return $`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return $`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return $`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return $`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return $`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return $`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return $`<w3m-transactions-view></w3m-transactions-view>`;default:return $`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=je.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};ba.styles=n_;Y1([Ie()],ba.prototype,"view",void 0);ba=Y1([ce("w3m-router")],ba);const r_=be`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Ar=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bn=class extends de{constructor(){super(),this.usubscribe=[],this.networkImages=cr.state.networkImages,this.address=Ke.state.address,this.profileImage=Ke.state.profileImage,this.profileName=Ke.state.profileName,this.balance=Ke.state.balance,this.balanceSymbol=Ke.state.balanceSymbol,this.network=st.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ke.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Et.close()}),st.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return $`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Fe(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?et.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):et.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Se.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Fe(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=Ke.state;return e?$`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=st.state,n=e?e.length>1:!1,r=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(Se.copyToClopboard(this.address),dn.showSuccess("Address copied"))}catch{dn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&je.push("Networks")}onTransactions(){Ye.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),je.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Ze.disconnect(),Ye.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Et.close()}catch{Ye.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),dn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Ke.state;e&&Se.openHref(e,"_blank")}};Bn.styles=r_;Ar([Ie()],Bn.prototype,"address",void 0);Ar([Ie()],Bn.prototype,"profileImage",void 0);Ar([Ie()],Bn.prototype,"profileName",void 0);Ar([Ie()],Bn.prototype,"balance",void 0);Ar([Ie()],Bn.prototype,"balanceSymbol",void 0);Ar([Ie()],Bn.prototype,"network",void 0);Ar([Ie()],Bn.prototype,"disconecting",void 0);Bn=Ar([ce("w3m-account-view")],Bn);var J1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Pc=class extends de{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Se.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return $`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?$`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:$`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return Se.isMobile()?$`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){je.push("ConnectingWalletConnect")}};J1([Ie()],Pc.prototype,"search",void 0);Pc=J1([ce("w3m-all-wallets-view")],Pc);const i_=be`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var X1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let wa=class extends de{constructor(){super(),this.unsubscribe=[],this.connectors=un.state.connectors,this.unsubscribe.push(un.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Se.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?$`
      <wui-list-wallet
        imageSrc=${Fe(pt.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Ge.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(r=>$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:e}=We.state;return e.length?this.filterOutDuplicateWallets(e).map(r=>$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return cn.getRecentWallets().map(n=>$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Ze.checkInstalled()?null:$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${Fe(e?void 0:"installed")}
          tagVariant=${Fe(e?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=Math.floor(We.state.count/10)*10;return $`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=We.state,{customWallets:n,featuredWalletIds:r}=Ge.state,{connectors:i}=un.state,o=cn.getRecentWallets(),s=i.filter(u=>u.type==="ANNOUNCED");if(r||n||!e.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,l).map(u=>$`
        <wui-list-wallet
          imageSrc=${Fe(pt.getWalletImage(u))}
          name=${(u==null?void 0:u.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(u)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?Se.isMobile()?je.push("AllWallets"):je.push("ConnectingWalletConnect"):je.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:n}=un.state,i=cn.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Ye.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),je.push("AllWallets")}onConnectWallet(e){je.push("ConnectingWalletConnect",{wallet:e})}};wa.styles=i_;X1([Ie()],wa.prototype,"connectors",void 0);wa=X1([ce("w3m-connect-view")],wa);const o_=be`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ri=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};class en extends de{constructor(){var e,n,r,i;super(),this.wallet=(e=je.state.data)==null?void 0:e.wallet,this.connector=(n=je.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=pt.getWalletImage(this.wallet)??pt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Ze.state.wcUri,this.error=Ze.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ze.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Ze.subscribeKey("wcError",o=>this.error=o),Ze.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),$`
      <wui-flex
        data-error=${Fe(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Fe(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?$`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,n;this.buffering||(Ze.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=an.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return $`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Se.copyToClopboard(this.uri),dn.showSuccess("Link copied"))}catch{dn.showError("Failed to copy")}}}en.styles=o_;ri([Ie()],en.prototype,"uri",void 0);ri([Ie()],en.prototype,"error",void 0);ri([Ie()],en.prototype,"ready",void 0);ri([Ie()],en.prototype,"showRetry",void 0);ri([Ie()],en.prototype,"buffering",void 0);ri([U({type:Boolean})],en.prototype,"isMobile",void 0);ri([U()],en.prototype,"onRetry",void 0);var s_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const a_={INJECTED:"browser",ANNOUNCED:"browser"};let Xf=class extends en{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:a_[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&cn.setConnectedWalletImageUrl(this.connector.imageUrl),await Ze.connectExternal(this.connector),Et.close(),Ye.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Ye.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Xf=s_([ce("w3m-connecting-external-view")],Xf);var l_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Qf=class extends de{constructor(){var e,n;super(...arguments),this.dappUrl=(e=Ge.state.metadata)==null?void 0:e.url,this.dappName=(n=Ge.state.metadata)==null?void 0:n.name}render(){return $`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?$`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&Se.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){je.goBack()}};Qf=l_([ce("w3m-connecting-siwe-view")],Qf);var ed=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let va=class extends de{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=je.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ho.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),$`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):$`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=Ze.state;if(e||Se.isPairingExpired(n)){if(Ze.connectWalletConnect(),this.wallet){const r=pt.getWalletImage(this.wallet);r&&cn.setConnectedWalletImageUrl(r)}else{const i=un.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=pt.getConnectorImage(i);o&&cn.setConnectedWalletImageUrl(o)}await Ze.state.wcPromise,this.finalizeConnection(),Et.close()}}catch(n){Ye.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Ze.setWcError(!0),Se.isAllowedRetry(this.lastRetry)&&(dn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:n}=Ze.state;e&&cn.setWalletConnectDeepLink(e),n&&cn.setWeb3ModalRecent(n),Ye.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:m})=>m).filter(Boolean),a=o?[o]:s??[],l=a.length,c=e,u=r,d=Ze.checkInstalled(a),f=l&&d,h=n&&!Se.isMobile();f&&this.platforms.push("browser"),c&&this.platforms.push(Se.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!f&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return $`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return $`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return $`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return $`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return $`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return $`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?$`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ed([Ie()],va.prototype,"platform",void 0);ed([Ie()],va.prototype,"platforms",void 0);va=ed([ce("w3m-connecting-wc-view")],va);var c_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let e0=class extends de{constructor(){var e;super(...arguments),this.wallet=(e=je.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return $`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?$`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?$`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?$`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?$`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&Se.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&Se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&Se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&Se.openHref(this.wallet.homepage,"_blank")}};e0=c_([ce("w3m-downloads-view")],e0);var u_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const d_="https://walletconnect.com/explorer";let t0=class extends de{render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Se.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=We.state,{customWallets:r}=Ge.state;return[...n,...r??[],...e].slice(0,4).map(o=>$`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Fe(pt.getWalletImage(o))}
          @click=${()=>{Se.openHref(o.homepage??d_,"_blank")}}
        ></wui-list-wallet>
      `)}};t0=u_([ce("w3m-get-wallet-view")],t0);const f_=be`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var sl=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ji=class extends de{constructor(){var e;super(),this.network=(e=je.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=st.state.caipNetwork,this.unsubscribe.push(st.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&je.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return $`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Fe(pt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:$`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await st.switchActiveNetwork(this.network),je.goBack())}catch{this.error=!0}}};ji.styles=f_;sl([Ie()],ji.prototype,"showRetry",void 0);sl([Ie()],ji.prototype,"error",void 0);sl([Ie()],ji.prototype,"currentNetwork",void 0);ji=sl([ce("w3m-network-switch-view")],ji);var Q1=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Oc=class extends de{constructor(){super(),this.unsubscribe=[],this.caipNetwork=st.state.caipNetwork,this.unsubscribe.push(st.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Ye.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),je.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:r}=st.state,i=e,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return $`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${Fe(pt.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=Ke.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=st.state;n&&(o==null?void 0:o.id)!==e.id?r!=null&&r.includes(e.id)?await st.switchActiveNetwork(e):i&&je.push("SwitchNetwork",{network:e}):n||(st.setCaipNetwork(e),je.push("Connect"))}};Q1([Ie()],Oc.prototype,"caipNetwork",void 0);Oc=Q1([ce("w3m-networks-view")],Oc);const h_=be`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var ii=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const js="last-transaction",p_=7;let Jn=class extends de{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=Ke.state.address,this.transactions=bn.state.transactions,this.transactionsByYear=bn.state.transactionsByYear,this.loading=bn.state.loading,this.empty=bn.state.empty,this.next=bn.state.next,this.unsubscribe.push(Ke.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,bn.resetTransactions(),bn.fetchTransactions(e.address))}),bn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&bn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,r)=>{const i=r===e.length-1,o=parseInt(n,10),s=mi.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?$`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(e),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?$`
        <wui-transaction-list-item
          date=${r}
          direction=${o}
          id=${n&&this.next?js:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:d?c.map((h,m)=>{const w=mi.getTransferDescription(h),_=n&&m===c.length-1;return $` <wui-transaction-list-item
          date=${r}
          direction=${h.direction}
          id=${_&&this.next?js:""}
          status=${l}
          type=${u}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[m]]}
          .descriptions=${[w]}
        ></wui-transaction-list-item>`}):$`
      <wui-transaction-list-item
        date=${r}
        direction=${o}
        id=${n&&this.next?js:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((r,i)=>{const o=n&&i===e.length-1;return $`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return $`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(p_).fill($` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=Ge.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(bn.fetchTransactions(this.address),Ye.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${js}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var l,c,u,d,f;const n=Z1.getRelativeDateFromNow((l=e==null?void 0:e.metadata)==null?void 0:l.minedAt),r=mi.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(c=e==null?void 0:e.transfers)==null?void 0:c[0],s=!!o&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(h=>!!h.nft_info)),a=mi.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(d=e.metadata)==null?void 0:d.status,transfers:i,type:(f=e.metadata)==null?void 0:f.operationType}}};Jn.styles=h_;ii([Ie()],Jn.prototype,"address",void 0);ii([Ie()],Jn.prototype,"transactions",void 0);ii([Ie()],Jn.prototype,"transactionsByYear",void 0);ii([Ie()],Jn.prototype,"loading",void 0);ii([Ie()],Jn.prototype,"empty",void 0);ii([Ie()],Jn.prototype,"next",void 0);Jn=ii([ce("w3m-transactions-view")],Jn);var g_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const m_=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let n0=class extends de{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${m_}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Se.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};n0=g_([ce("w3m-what-is-a-network-view")],n0);var b_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const w_=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let r0=class extends de{render(){return $`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${w_}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Ye.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),je.push("GetWallet")}};r0=b_([ce("w3m-what-is-a-wallet-view")],r0);const v_=be`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ds=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const i0="local-paginator";let Yr=class extends de{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!We.state.wallets.length,this.wallets=We.state.wallets,this.recommended=We.state.recommended,this.featured=We.state.featured,this.unsubscribe.push(We.subscribeKey("wallets",e=>this.wallets=e),We.subscribeKey("recommended",e=>this.recommended=e),We.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return $`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await We.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>$`
        <wui-card-select-loader type="wallet" id=${Fe(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>$`
        <wui-card-select
          imageSrc=${Fe(pt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:r,count:i}=We.state,o=window.innerWidth<352?3:4,s=e.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=e.length?r.length%o:0,i===0||[...r,...e,...n].length<i?this.shimmerTemplate(l,i0):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${i0}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=We.state;s.length<o&&We.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:n}=un.state,r=n.find(({explorerId:i})=>i===e.id);r?je.push("ConnectingExternal",{connector:r}):je.push("ConnectingWalletConnect",{wallet:e})}};Yr.styles=v_;Ds([Ie()],Yr.prototype,"initial",void 0);Ds([Ie()],Yr.prototype,"wallets",void 0);Ds([Ie()],Yr.prototype,"recommended",void 0);Ds([Ie()],Yr.prototype,"featured",void 0);Yr=Ds([ce("w3m-all-wallets-list")],Yr);const y_=be`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var td=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ss=class extends de{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?$`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await We.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=We.state;return e.length?$`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(n=>$`
            <wui-card-select
              imageSrc=${Fe(pt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:$`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:n}=un.state,r=n.find(({explorerId:i})=>i===e.id);r?je.push("ConnectingExternal",{connector:r}):je.push("ConnectingWalletConnect",{wallet:e})}};ss.styles=y_;td([Ie()],ss.prototype,"loading",void 0);td([U()],ss.prototype,"query",void 0);ss=td([ce("w3m-all-wallets-search")],ss);var al=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let as=class extends de{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ze.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return $`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var r;const n=this.platformTabs[e];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};al([U({type:Array})],as.prototype,"platforms",void 0);al([U()],as.prototype,"onSelectPlatfrom",void 0);al([Ie()],as.prototype,"buffering",void 0);as=al([ce("w3m-connecting-header")],as);var __=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let o0=class extends en{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=un.state,n=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=e.find(i=>i.type==="INJECTED");n?await Ze.connectExternal(n):r&&await Ze.connectExternal(r),Et.close(),Ye.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Ye.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};o0=__([ce("w3m-connecting-wc-browser")],o0);var C_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let s0=class extends en{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=Se.formatNativeUrl(n,this.uri);Ze.setWcLinking({name:r,href:o}),Ze.setRecentWallet(this.wallet),Se.openHref(i,"_self")}catch{this.error=!0}}};s0=C_([ce("w3m-connecting-wc-desktop")],s0);var E_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let a0=class extends en{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=Se.formatNativeUrl(n,this.uri);Ze.setWcLinking({name:r,href:o}),Ze.setRecentWallet(this.wallet),Se.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=Se.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Ze.setBuffering(!0),setTimeout(()=>{Ze.setBuffering(!1)},5e3))}};a0=E_([ce("w3m-connecting-wc-mobile")],a0);const k_=be`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var D_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let $c=class extends en{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),$`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Ze.setWcLinking(void 0),Ze.setRecentWallet(this.wallet),$`<wui-qr-code
      size=${e}
      theme=${an.state.themeMode}
      uri=${this.uri}
      imageSrc=${Fe(pt.getWalletImage(this.wallet))}
      alt=${Fe(n)}
    ></wui-qr-code>`}};$c.styles=k_;$c=D_([ce("w3m-connecting-wc-qrcode")],$c);const S_=be`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var I_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Nc=class extends de{constructor(){var e;super(...arguments),this.dappImageUrl=(e=Ge.state.metadata)==null?void 0:e.icons,this.walletImageUrl=cn.getConnectedWalletImageUrl()}firstUpdated(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return $`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,n){e.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Nc.styles=S_;Nc=I_([ce("w3m-connecting-siwe")],Nc);var T_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let l0=class extends de{constructor(){var e;if(super(),this.wallet=(e=je.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return $`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Fe(pt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};l0=T_([ce("w3m-connecting-wc-unsupported")],l0);var A_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let c0=class extends en{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Ye.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=Se.formatUniversalUrl(n,this.uri);Ze.setWcLinking({name:r,href:o}),Ze.setRecentWallet(this.wallet),Se.openHref(i,"_blank")}catch{this.error=!0}}};c0=A_([ce("w3m-connecting-wc-web")],c0);const x_=be`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var ll=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};function u0(){var i,o,s,a,l,c;const t=(o=(i=je.state.data)==null?void 0:i.connector)==null?void 0:o.name,e=(a=(s=je.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(c=(l=je.state.data)==null?void 0:l.network)==null?void 0:c.name,r=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads",Transactions:"Activity"}}let Ui=class extends de{constructor(){super(),this.unsubscribe=[],this.heading=u0()[je.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(je.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Ze.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return $`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${Et.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Ye.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),je.push("WhatIsAWallet")}titleTemplate(){return $`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=je.state,n=e==="Connect";return this.showBack?$`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${je.goBack}
      ></wui-icon-link>`:$`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?$`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=u0()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:e}=je.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ui.styles=[x_];ll([Ie()],Ui.prototype,"heading",void 0);ll([Ie()],Ui.prototype,"buffering",void 0);ll([Ie()],Ui.prototype,"showBack",void 0);Ui=ll([ce("w3m-header")],Ui);var ep=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Rc=class extends de{constructor(){super(...arguments),this.data=[]}render(){return $`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>$`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>$`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ep([U({type:Array})],Rc.prototype,"data",void 0);Rc=ep([ce("w3m-help-widget")],Rc);const P_=be`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var O_=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let Bc=class extends de{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ge.state;return!e&&!n?null:$`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=Ge.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Ge.state;return e?$`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Ge.state;return e?$`<a href=${e}>Privacy Policy</a>`:null}};Bc.styles=[P_];Bc=O_([ce("w3m-legal-footer")],Bc);const $_=be`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var tp=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let ya=class extends de{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=Se.isMobile(),a=Se.isIos(),l=Se.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=et.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>je.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?$`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&Se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&Se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&Se.openHref(this.wallet.homepage,"_blank")}};ya.styles=[$_];tp([U({type:Object})],ya.prototype,"wallet",void 0);ya=tp([ce("w3m-mobile-download-links")],ya);const N_=be`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var np=globalThis&&globalThis.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};const R_={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let _a=class extends de{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=dn.state.open,this.unsubscribe.push(dn.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=dn.state,r=R_[n];return $`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>dn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};_a.styles=N_;np([Ie()],_a.prototype,"open",void 0);_a=np([ce("w3m-snackbar")],_a);let d0=!1;class B_{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{Ke.setIsConnected(n)},this.setCaipAddress=n=>{Ke.setCaipAddress(n)},this.setBalance=(n,r)=>{Ke.setBalance(n,r)},this.setProfileName=n=>{Ke.setProfileName(n)},this.setProfileImage=n=>{Ke.setProfileImage(n)},this.resetAccount=()=>{Ke.resetAccount()},this.setCaipNetwork=n=>{st.setCaipNetwork(n)},this.getCaipNetwork=()=>st.state.caipNetwork,this.setRequestedCaipNetworks=n=>{st.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>st.getApprovedCaipNetworksData(),this.resetNetwork=()=>{st.resetNetwork()},this.setConnectors=n=>{un.setConnectors(n)},this.addConnector=n=>{un.addConnector(n)},this.getConnectors=()=>un.getConnectors(),this.resetWcConnection=()=>{Ze.resetWcConnection()},this.fetchIdentity=n=>t1.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Ke.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{In.setNonce(n)},this.setSIWESession=n=>{In.setSession(n)},this.setSIWEStatus=n=>{In.setStatus(n)},this.setSIWEMessage=n=>{In.setMessage(n)},this.getSIWENonce=()=>In.state.nonce,this.getSIWESession=()=>In.state.session,this.getSIWEStatus=()=>In.state.status,this.getSIWEMessage=()=>In.state.message,this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Et.open(e)}async close(){await this.initOrContinue(),Et.close()}getThemeMode(){return an.state.themeMode}getThemeVariables(){return an.state.themeVariables}setThemeMode(e){an.setThemeMode(e),u1(an.state.themeMode)}setThemeVariables(e){an.setThemeVariables(e),O4(an.state.themeVariables)}subscribeTheme(e){return an.subscribe(e)}getState(){return{...Di.state}}subscribeState(e){return Di.subscribe(e)}getEvent(){return{...Ye.state}}subscribeEvents(e){return Ye.subscribe(e)}subscribeSIWEState(e){return In.subscribe(e)}initControllers(e){st.setClient(e.networkControllerClient),st.setDefaultCaipNetwork(e.defaultChain),Ge.setProjectId(e.projectId),Ge.setIncludeWalletIds(e.includeWalletIds),Ge.setExcludeWalletIds(e.excludeWalletIds),Ge.setFeaturedWalletIds(e.featuredWalletIds),Ge.setTokens(e.tokens),Ge.setTermsConditionsUrl(e.termsConditionsUrl),Ge.setPrivacyPolicyUrl(e.privacyPolicyUrl),Ge.setCustomWallets(e.customWallets),Ge.setEnableAnalytics(e.enableAnalytics),Ge.setSdkVersion(e._sdkVersion),Ze.setClient(e.connectionControllerClient),e.siweControllerClient&&In.setSIWEClient(e.siweControllerClient),e.metadata&&Ge.setMetadata(e.metadata),e.themeMode&&an.setThemeMode(e.themeMode),e.themeVariables&&an.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!d0&&Se.isClient()&&(d0=!0,this.initPromise=new Promise(async e=>{await Promise.all([_i(()=>import("./index.32673836.js"),[],import.meta.url),_i(()=>Promise.resolve().then(()=>t_),void 0,import.meta.url)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}const Le={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.3.2"},Rr={ConnectorExplorerIds:{[Le.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Le.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Le.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[Le.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Le.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Le.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Le.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Le.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Le.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Le.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Le.COINBASE_CONNECTOR_ID]:"Coinbase",[Le.LEDGER_CONNECTOR_ID]:"Ledger",[Le.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Le.INJECTED_CONNECTOR_ID]:"INJECTED",[Le.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Le.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},li={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,r])=>{e[`${Le.EIP155}:${n}`]=r}),e}};function M_(t){if(t)return{id:`${Le.EIP155}:${t.id}`,name:t.name,imageId:Rr.EIP155NetworkImageIds[t.id]}}const j_="wagmi.wallet";class U_ extends B_{constructor(e){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(d=>d.id===Le.WALLET_CONNECT_CONNECTOR_ID))throw new Error("web3modal:constructor - WalletConnectConnector is required");const c={switchCaipNetwork:async d=>{const f=li.caipNetworkIdToNumber(d==null?void 0:d.id);f&&await Qv({chainId:f})},async getApprovedCaipNetworksData(){var f,h,m,w;const d=localStorage.getItem(j_);if(d!=null&&d.includes(Le.WALLET_CONNECT_CONNECTOR_ID)){const _=n.connectors.find(S=>S.id===Le.WALLET_CONNECT_CONNECTOR_ID);if(!_)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const v=(h=(f=(await _.getProvider()).signer)==null?void 0:f.session)==null?void 0:h.namespaces,k=(m=v==null?void 0:v[Le.EIP155])==null?void 0:m.methods,C=(w=v==null?void 0:v[Le.EIP155])==null?void 0:w.chains;return{supportsAllNetworks:k==null?void 0:k.includes(Le.ADD_CHAIN_METHOD),approvedCaipNetworkIds:C}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async d=>{var m;const f=n.connectors.find(w=>w.id===Le.WALLET_CONNECT_CONNECTOR_ID);if(!f)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");f.on("message",w=>{w.type==="display_uri"&&(d(w.data),f.removeAllListeners())});const h=li.caipNetworkIdToNumber((m=this.getCaipNetwork())==null?void 0:m.id);await xf({connector:f,chainId:h})},connectExternal:async({id:d,provider:f,info:h})=>{var _,D;const m=n.connectors.find(v=>v.id===d);if(!m)throw new Error("connectionControllerClient:connectExternal - connector is undefined");f&&h&&m.id===Le.EIP6963_CONNECTOR_ID&&((_=m.setEip6963Wallet)==null||_.call(m,{provider:f,info:h}));const w=li.caipNetworkIdToNumber((D=this.getCaipNetwork())==null?void 0:D.id);await xf({connector:m,chainId:w})},checkInstalled:d=>{const f=this.getConnectors().filter(m=>m.type==="ANNOUNCED"),h=this.getConnectors().find(m=>m.type==="INJECTED");return d?f.length&&d.some(w=>f.some(_=>{var D;return((D=_.info)==null?void 0:D.rdns)===w}))?!0:h&&window!=null&&window.ethereum?d.some(m=>{var w;return!!((w=window.ethereum)!=null&&w[String(m)])}):!1:!!window.ethereum},disconnect:Nu};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:M_(o),tokens:li.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${Le.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(n),this.listenConnectors(n),Ru(()=>this.syncAccount()),e4(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:li.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:li.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(r=>{var i,o;return{id:`${Le.EIP155}:${r.id}`,name:r.name,imageId:Rr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:n}=Ho(),{chain:r}=yc();if(this.resetAccount(),n&&e&&r){const i=`${Le.EIP155}:${r.id}:${e}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:n}=Ho(),{chain:r}=yc();if(r){const l=String(r.id),c=`${Le.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Rr.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&e){const u=`${Le.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${Le.EIP155}:${Ur.id}`,address:e});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await n4({address:e,chainId:Ur.id});if(n){this.setProfileName(n);const r=await t4({name:n,chainId:Ur.id});r&&this.setProfileImage(r)}}}async syncBalance(e,n){var i,o,s;const r=await Xv({address:e,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){const n=[];e.connectors.forEach(({id:r,name:i})=>{var o,s;r!==Le.EIP6963_CONNECTOR_ID&&n.push({id:r,explorerId:Rr.ConnectorExplorerIds[r],imageId:Rr.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Rr.ConnectorNamesMap[r]??i,type:Rr.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}eip6963EventHandler(e,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:Le.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[Le.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenConnectors(e){const n=e.connectors.find(r=>r.id===Le.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(Le.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(Le.EIP6963_REQUEST_EVENT))}}}var Us=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(t,n):i?i.value=n:e.set(t,n),n},Ls=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},Hs,rr;const Wl="connectedRdns";class rp extends Ga{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",Hs.set(this,void 0),rr.set(this,void 0),Us(this,Hs,this.options.getProvider(),"f")}async connect(e){var r;const n=await super.connect(e);return Ls(this,rr,"f")&&((r=this.storage)==null||r.setItem(Wl,Ls(this,rr,"f").info.rdns)),n}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(Wl),Us(this,rr,void 0,"f")}async isAuthorized(e){var r;const n=(r=this.storage)==null?void 0:r.getItem(Wl);if(n){if(!e||n!==e.info.rdns)return!0;Us(this,rr,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=Ls(this,rr,"f"))==null?void 0:e.provider)??Ls(this,Hs,"f"))}setEip6963Wallet(e){Us(this,rr,e,"f")}}Hs=new WeakMap,rr=new WeakMap;var ip={},cl={};cl.byteLength=F_;cl.toByteArray=H_;cl.fromByteArray=G_;var xn=[],ln=[],L_=typeof Uint8Array<"u"?Uint8Array:Array,Hl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ci=0,z_=Hl.length;ci<z_;++ci)xn[ci]=Hl[ci],ln[Hl.charCodeAt(ci)]=ci;ln["-".charCodeAt(0)]=62;ln["_".charCodeAt(0)]=63;function op(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function F_(t){var e=op(t),n=e[0],r=e[1];return(n+r)*3/4-r}function W_(t,e,n){return(e+n)*3/4-n}function H_(t){var e,n=op(t),r=n[0],i=n[1],o=new L_(W_(t,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)e=ln[t.charCodeAt(l)]<<18|ln[t.charCodeAt(l+1)]<<12|ln[t.charCodeAt(l+2)]<<6|ln[t.charCodeAt(l+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=ln[t.charCodeAt(l)]<<2|ln[t.charCodeAt(l+1)]>>4,o[s++]=e&255),i===1&&(e=ln[t.charCodeAt(l)]<<10|ln[t.charCodeAt(l+1)]<<4|ln[t.charCodeAt(l+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function V_(t){return xn[t>>18&63]+xn[t>>12&63]+xn[t>>6&63]+xn[t&63]}function q_(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(V_(r));return i.join("")}function G_(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(q_(t,s,s+o>a?a:s+o));return r===1?(e=t[n-1],i.push(xn[e>>2]+xn[e<<4&63]+"==")):r===2&&(e=(t[n-2]<<8)+t[n-1],i.push(xn[e>>10]+xn[e>>4&63]+xn[e<<2&63]+"=")),i.join("")}var nd={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */nd.read=function(t,e,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,f=n?-1:1,h=t[e+d];for(d+=f,o=h&(1<<-u)-1,h>>=-u,u+=a;u>0;o=o*256+t[e+d],d+=f,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+t[e+d],d+=f,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(h?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(h?-1:1)*s*Math.pow(2,o-r)};nd.write=function(t,e,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,f=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:o-1,m=r?1:-1,w=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=f/l:e+=f*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,i),s=s+d):(a=e*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;t[n+h]=a&255,h+=m,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+h]=s&255,h+=m,s/=256,c-=8);t[n+h-m]|=w*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=cl,n=nd,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=v,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const E=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(E,g),E.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(E){if(E>i)throw new RangeError('The value "'+E+'" is invalid for option "size"');const g=new Uint8Array(E);return Object.setPrototypeOf(g,a.prototype),g}function a(E,g,b){if(typeof E=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(E)}return l(E,g,b)}a.poolSize=8192;function l(E,g,b){if(typeof E=="string")return f(E,g);if(ArrayBuffer.isView(E))return m(E);if(E==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof E);if(Xe(E,ArrayBuffer)||E&&Xe(E.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Xe(E,SharedArrayBuffer)||E&&Xe(E.buffer,SharedArrayBuffer)))return w(E,g,b);if(typeof E=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const x=E.valueOf&&E.valueOf();if(x!=null&&x!==E)return a.from(x,g,b);const O=_(E);if(O)return O;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof E[Symbol.toPrimitive]=="function")return a.from(E[Symbol.toPrimitive]("string"),g,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof E)}a.from=function(E,g,b){return l(E,g,b)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(E){if(typeof E!="number")throw new TypeError('"size" argument must be of type number');if(E<0)throw new RangeError('The value "'+E+'" is invalid for option "size"')}function u(E,g,b){return c(E),E<=0?s(E):g!==void 0?typeof b=="string"?s(E).fill(g,b):s(E).fill(g):s(E)}a.alloc=function(E,g,b){return u(E,g,b)};function d(E){return c(E),s(E<0?0:D(E)|0)}a.allocUnsafe=function(E){return d(E)},a.allocUnsafeSlow=function(E){return d(E)};function f(E,g){if((typeof g!="string"||g==="")&&(g="utf8"),!a.isEncoding(g))throw new TypeError("Unknown encoding: "+g);const b=k(E,g)|0;let x=s(b);const O=x.write(E,g);return O!==b&&(x=x.slice(0,O)),x}function h(E){const g=E.length<0?0:D(E.length)|0,b=s(g);for(let x=0;x<g;x+=1)b[x]=E[x]&255;return b}function m(E){if(Xe(E,Uint8Array)){const g=new Uint8Array(E);return w(g.buffer,g.byteOffset,g.byteLength)}return h(E)}function w(E,g,b){if(g<0||E.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(E.byteLength<g+(b||0))throw new RangeError('"length" is outside of buffer bounds');let x;return g===void 0&&b===void 0?x=new Uint8Array(E):b===void 0?x=new Uint8Array(E,g):x=new Uint8Array(E,g,b),Object.setPrototypeOf(x,a.prototype),x}function _(E){if(a.isBuffer(E)){const g=D(E.length)|0,b=s(g);return b.length===0||E.copy(b,0,0,g),b}if(E.length!==void 0)return typeof E.length!="number"||dt(E.length)?s(0):h(E);if(E.type==="Buffer"&&Array.isArray(E.data))return h(E.data)}function D(E){if(E>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return E|0}function v(E){return+E!=E&&(E=0),a.alloc(+E)}a.isBuffer=function(g){return g!=null&&g._isBuffer===!0&&g!==a.prototype},a.compare=function(g,b){if(Xe(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),Xe(b,Uint8Array)&&(b=a.from(b,b.offset,b.byteLength)),!a.isBuffer(g)||!a.isBuffer(b))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(g===b)return 0;let x=g.length,O=b.length;for(let z=0,G=Math.min(x,O);z<G;++z)if(g[z]!==b[z]){x=g[z],O=b[z];break}return x<O?-1:O<x?1:0},a.isEncoding=function(g){switch(String(g).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(g,b){if(!Array.isArray(g))throw new TypeError('"list" argument must be an Array of Buffers');if(g.length===0)return a.alloc(0);let x;if(b===void 0)for(b=0,x=0;x<g.length;++x)b+=g[x].length;const O=a.allocUnsafe(b);let z=0;for(x=0;x<g.length;++x){let G=g[x];if(Xe(G,Uint8Array))z+G.length>O.length?(a.isBuffer(G)||(G=a.from(G)),G.copy(O,z)):Uint8Array.prototype.set.call(O,G,z);else if(a.isBuffer(G))G.copy(O,z);else throw new TypeError('"list" argument must be an Array of Buffers');z+=G.length}return O};function k(E,g){if(a.isBuffer(E))return E.length;if(ArrayBuffer.isView(E)||Xe(E,ArrayBuffer))return E.byteLength;if(typeof E!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof E);const b=E.length,x=arguments.length>2&&arguments[2]===!0;if(!x&&b===0)return 0;let O=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return Nt(E).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b*2;case"hex":return b>>>1;case"base64":return mt(E).length;default:if(O)return x?-1:Nt(E).length;g=(""+g).toLowerCase(),O=!0}}a.byteLength=k;function C(E,g,b){let x=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0,g>>>=0,b<=g))return"";for(E||(E="utf8");;)switch(E){case"hex":return ie(this,g,b);case"utf8":case"utf-8":return ee(this,g,b);case"ascii":return V(this,g,b);case"latin1":case"binary":return K(this,g,b);case"base64":return pe(this,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,g,b);default:if(x)throw new TypeError("Unknown encoding: "+E);E=(E+"").toLowerCase(),x=!0}}a.prototype._isBuffer=!0;function S(E,g,b){const x=E[g];E[g]=E[b],E[b]=x}a.prototype.swap16=function(){const g=this.length;if(g%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let b=0;b<g;b+=2)S(this,b,b+1);return this},a.prototype.swap32=function(){const g=this.length;if(g%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let b=0;b<g;b+=4)S(this,b,b+3),S(this,b+1,b+2);return this},a.prototype.swap64=function(){const g=this.length;if(g%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let b=0;b<g;b+=8)S(this,b,b+7),S(this,b+1,b+6),S(this,b+2,b+5),S(this,b+3,b+4);return this},a.prototype.toString=function(){const g=this.length;return g===0?"":arguments.length===0?ee(this,0,g):C.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(g){if(!a.isBuffer(g))throw new TypeError("Argument must be a Buffer");return this===g?!0:a.compare(this,g)===0},a.prototype.inspect=function(){let g="";const b=t.INSPECT_MAX_BYTES;return g=this.toString("hex",0,b).replace(/(.{2})/g,"$1 ").trim(),this.length>b&&(g+=" ... "),"<Buffer "+g+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(g,b,x,O,z){if(Xe(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),!a.isBuffer(g))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof g);if(b===void 0&&(b=0),x===void 0&&(x=g?g.length:0),O===void 0&&(O=0),z===void 0&&(z=this.length),b<0||x>g.length||O<0||z>this.length)throw new RangeError("out of range index");if(O>=z&&b>=x)return 0;if(O>=z)return-1;if(b>=x)return 1;if(b>>>=0,x>>>=0,O>>>=0,z>>>=0,this===g)return 0;let G=z-O,ke=x-b;const ze=Math.min(G,ke),ot=this.slice(O,z),lt=g.slice(b,x);for(let Qe=0;Qe<ze;++Qe)if(ot[Qe]!==lt[Qe]){G=ot[Qe],ke=lt[Qe];break}return G<ke?-1:ke<G?1:0};function T(E,g,b,x,O){if(E.length===0)return-1;if(typeof b=="string"?(x=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b=+b,dt(b)&&(b=O?0:E.length-1),b<0&&(b=E.length+b),b>=E.length){if(O)return-1;b=E.length-1}else if(b<0)if(O)b=0;else return-1;if(typeof g=="string"&&(g=a.from(g,x)),a.isBuffer(g))return g.length===0?-1:p(E,g,b,x,O);if(typeof g=="number")return g=g&255,typeof Uint8Array.prototype.indexOf=="function"?O?Uint8Array.prototype.indexOf.call(E,g,b):Uint8Array.prototype.lastIndexOf.call(E,g,b):p(E,[g],b,x,O);throw new TypeError("val must be string, number or Buffer")}function p(E,g,b,x,O){let z=1,G=E.length,ke=g.length;if(x!==void 0&&(x=String(x).toLowerCase(),x==="ucs2"||x==="ucs-2"||x==="utf16le"||x==="utf-16le")){if(E.length<2||g.length<2)return-1;z=2,G/=2,ke/=2,b/=2}function ze(lt,Qe){return z===1?lt[Qe]:lt.readUInt16BE(Qe*z)}let ot;if(O){let lt=-1;for(ot=b;ot<G;ot++)if(ze(E,ot)===ze(g,lt===-1?0:ot-lt)){if(lt===-1&&(lt=ot),ot-lt+1===ke)return lt*z}else lt!==-1&&(ot-=ot-lt),lt=-1}else for(b+ke>G&&(b=G-ke),ot=b;ot>=0;ot--){let lt=!0;for(let Qe=0;Qe<ke;Qe++)if(ze(E,ot+Qe)!==ze(g,Qe)){lt=!1;break}if(lt)return ot}return-1}a.prototype.includes=function(g,b,x){return this.indexOf(g,b,x)!==-1},a.prototype.indexOf=function(g,b,x){return T(this,g,b,x,!0)},a.prototype.lastIndexOf=function(g,b,x){return T(this,g,b,x,!1)};function I(E,g,b,x){b=Number(b)||0;const O=E.length-b;x?(x=Number(x),x>O&&(x=O)):x=O;const z=g.length;x>z/2&&(x=z/2);let G;for(G=0;G<x;++G){const ke=parseInt(g.substr(G*2,2),16);if(dt(ke))return G;E[b+G]=ke}return G}function N(E,g,b,x){return ct(Nt(g,E.length-b),E,b,x)}function L(E,g,b,x){return ct(Gt(g),E,b,x)}function W(E,g,b,x){return ct(mt(g),E,b,x)}function F(E,g,b,x){return ct(xs(g,E.length-b),E,b,x)}a.prototype.write=function(g,b,x,O){if(b===void 0)O="utf8",x=this.length,b=0;else if(x===void 0&&typeof b=="string")O=b,x=this.length,b=0;else if(isFinite(b))b=b>>>0,isFinite(x)?(x=x>>>0,O===void 0&&(O="utf8")):(O=x,x=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const z=this.length-b;if((x===void 0||x>z)&&(x=z),g.length>0&&(x<0||b<0)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");O||(O="utf8");let G=!1;for(;;)switch(O){case"hex":return I(this,g,b,x);case"utf8":case"utf-8":return N(this,g,b,x);case"ascii":case"latin1":case"binary":return L(this,g,b,x);case"base64":return W(this,g,b,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F(this,g,b,x);default:if(G)throw new TypeError("Unknown encoding: "+O);O=(""+O).toLowerCase(),G=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pe(E,g,b){return g===0&&b===E.length?e.fromByteArray(E):e.fromByteArray(E.slice(g,b))}function ee(E,g,b){b=Math.min(E.length,b);const x=[];let O=g;for(;O<b;){const z=E[O];let G=null,ke=z>239?4:z>223?3:z>191?2:1;if(O+ke<=b){let ze,ot,lt,Qe;switch(ke){case 1:z<128&&(G=z);break;case 2:ze=E[O+1],(ze&192)===128&&(Qe=(z&31)<<6|ze&63,Qe>127&&(G=Qe));break;case 3:ze=E[O+1],ot=E[O+2],(ze&192)===128&&(ot&192)===128&&(Qe=(z&15)<<12|(ze&63)<<6|ot&63,Qe>2047&&(Qe<55296||Qe>57343)&&(G=Qe));break;case 4:ze=E[O+1],ot=E[O+2],lt=E[O+3],(ze&192)===128&&(ot&192)===128&&(lt&192)===128&&(Qe=(z&15)<<18|(ze&63)<<12|(ot&63)<<6|lt&63,Qe>65535&&Qe<1114112&&(G=Qe))}}G===null?(G=65533,ke=1):G>65535&&(G-=65536,x.push(G>>>10&1023|55296),G=56320|G&1023),x.push(G),O+=ke}return H(x)}const Z=4096;function H(E){const g=E.length;if(g<=Z)return String.fromCharCode.apply(String,E);let b="",x=0;for(;x<g;)b+=String.fromCharCode.apply(String,E.slice(x,x+=Z));return b}function V(E,g,b){let x="";b=Math.min(E.length,b);for(let O=g;O<b;++O)x+=String.fromCharCode(E[O]&127);return x}function K(E,g,b){let x="";b=Math.min(E.length,b);for(let O=g;O<b;++O)x+=String.fromCharCode(E[O]);return x}function ie(E,g,b){const x=E.length;(!g||g<0)&&(g=0),(!b||b<0||b>x)&&(b=x);let O="";for(let z=g;z<b;++z)O+=vt[E[z]];return O}function ne(E,g,b){const x=E.slice(g,b);let O="";for(let z=0;z<x.length-1;z+=2)O+=String.fromCharCode(x[z]+x[z+1]*256);return O}a.prototype.slice=function(g,b){const x=this.length;g=~~g,b=b===void 0?x:~~b,g<0?(g+=x,g<0&&(g=0)):g>x&&(g=x),b<0?(b+=x,b<0&&(b=0)):b>x&&(b=x),b<g&&(b=g);const O=this.subarray(g,b);return Object.setPrototypeOf(O,a.prototype),O};function oe(E,g,b){if(E%1!==0||E<0)throw new RangeError("offset is not uint");if(E+g>b)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(g,b,x){g=g>>>0,b=b>>>0,x||oe(g,b,this.length);let O=this[g],z=1,G=0;for(;++G<b&&(z*=256);)O+=this[g+G]*z;return O},a.prototype.readUintBE=a.prototype.readUIntBE=function(g,b,x){g=g>>>0,b=b>>>0,x||oe(g,b,this.length);let O=this[g+--b],z=1;for(;b>0&&(z*=256);)O+=this[g+--b]*z;return O},a.prototype.readUint8=a.prototype.readUInt8=function(g,b){return g=g>>>0,b||oe(g,1,this.length),this[g]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(g,b){return g=g>>>0,b||oe(g,2,this.length),this[g]|this[g+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(g,b){return g=g>>>0,b||oe(g,2,this.length),this[g]<<8|this[g+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),(this[g]|this[g+1]<<8|this[g+2]<<16)+this[g+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),this[g]*16777216+(this[g+1]<<16|this[g+2]<<8|this[g+3])},a.prototype.readBigUInt64LE=nt(function(g){g=g>>>0,Me(g,"offset");const b=this[g],x=this[g+7];(b===void 0||x===void 0)&&zt(g,this.length-8);const O=b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24,z=this[++g]+this[++g]*2**8+this[++g]*2**16+x*2**24;return BigInt(O)+(BigInt(z)<<BigInt(32))}),a.prototype.readBigUInt64BE=nt(function(g){g=g>>>0,Me(g,"offset");const b=this[g],x=this[g+7];(b===void 0||x===void 0)&&zt(g,this.length-8);const O=b*2**24+this[++g]*2**16+this[++g]*2**8+this[++g],z=this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+x;return(BigInt(O)<<BigInt(32))+BigInt(z)}),a.prototype.readIntLE=function(g,b,x){g=g>>>0,b=b>>>0,x||oe(g,b,this.length);let O=this[g],z=1,G=0;for(;++G<b&&(z*=256);)O+=this[g+G]*z;return z*=128,O>=z&&(O-=Math.pow(2,8*b)),O},a.prototype.readIntBE=function(g,b,x){g=g>>>0,b=b>>>0,x||oe(g,b,this.length);let O=b,z=1,G=this[g+--O];for(;O>0&&(z*=256);)G+=this[g+--O]*z;return z*=128,G>=z&&(G-=Math.pow(2,8*b)),G},a.prototype.readInt8=function(g,b){return g=g>>>0,b||oe(g,1,this.length),this[g]&128?(255-this[g]+1)*-1:this[g]},a.prototype.readInt16LE=function(g,b){g=g>>>0,b||oe(g,2,this.length);const x=this[g]|this[g+1]<<8;return x&32768?x|4294901760:x},a.prototype.readInt16BE=function(g,b){g=g>>>0,b||oe(g,2,this.length);const x=this[g+1]|this[g]<<8;return x&32768?x|4294901760:x},a.prototype.readInt32LE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),this[g]|this[g+1]<<8|this[g+2]<<16|this[g+3]<<24},a.prototype.readInt32BE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),this[g]<<24|this[g+1]<<16|this[g+2]<<8|this[g+3]},a.prototype.readBigInt64LE=nt(function(g){g=g>>>0,Me(g,"offset");const b=this[g],x=this[g+7];(b===void 0||x===void 0)&&zt(g,this.length-8);const O=this[g+4]+this[g+5]*2**8+this[g+6]*2**16+(x<<24);return(BigInt(O)<<BigInt(32))+BigInt(b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24)}),a.prototype.readBigInt64BE=nt(function(g){g=g>>>0,Me(g,"offset");const b=this[g],x=this[g+7];(b===void 0||x===void 0)&&zt(g,this.length-8);const O=(b<<24)+this[++g]*2**16+this[++g]*2**8+this[++g];return(BigInt(O)<<BigInt(32))+BigInt(this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+x)}),a.prototype.readFloatLE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),n.read(this,g,!0,23,4)},a.prototype.readFloatBE=function(g,b){return g=g>>>0,b||oe(g,4,this.length),n.read(this,g,!1,23,4)},a.prototype.readDoubleLE=function(g,b){return g=g>>>0,b||oe(g,8,this.length),n.read(this,g,!0,52,8)},a.prototype.readDoubleBE=function(g,b){return g=g>>>0,b||oe(g,8,this.length),n.read(this,g,!1,52,8)};function ue(E,g,b,x,O,z){if(!a.isBuffer(E))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>O||g<z)throw new RangeError('"value" argument is out of bounds');if(b+x>E.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(g,b,x,O){if(g=+g,b=b>>>0,x=x>>>0,!O){const ke=Math.pow(2,8*x)-1;ue(this,g,b,x,ke,0)}let z=1,G=0;for(this[b]=g&255;++G<x&&(z*=256);)this[b+G]=g/z&255;return b+x},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(g,b,x,O){if(g=+g,b=b>>>0,x=x>>>0,!O){const ke=Math.pow(2,8*x)-1;ue(this,g,b,x,ke,0)}let z=x-1,G=1;for(this[b+z]=g&255;--z>=0&&(G*=256);)this[b+z]=g/G&255;return b+x},a.prototype.writeUint8=a.prototype.writeUInt8=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,1,255,0),this[b]=g&255,b+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,2,65535,0),this[b]=g&255,this[b+1]=g>>>8,b+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,2,65535,0),this[b]=g>>>8,this[b+1]=g&255,b+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,4,4294967295,0),this[b+3]=g>>>24,this[b+2]=g>>>16,this[b+1]=g>>>8,this[b]=g&255,b+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,4,4294967295,0),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4};function re(E,g,b,x,O){Be(g,x,O,E,b,7);let z=Number(g&BigInt(4294967295));E[b++]=z,z=z>>8,E[b++]=z,z=z>>8,E[b++]=z,z=z>>8,E[b++]=z;let G=Number(g>>BigInt(32)&BigInt(4294967295));return E[b++]=G,G=G>>8,E[b++]=G,G=G>>8,E[b++]=G,G=G>>8,E[b++]=G,b}function Y(E,g,b,x,O){Be(g,x,O,E,b,7);let z=Number(g&BigInt(4294967295));E[b+7]=z,z=z>>8,E[b+6]=z,z=z>>8,E[b+5]=z,z=z>>8,E[b+4]=z;let G=Number(g>>BigInt(32)&BigInt(4294967295));return E[b+3]=G,G=G>>8,E[b+2]=G,G=G>>8,E[b+1]=G,G=G>>8,E[b]=G,b+8}a.prototype.writeBigUInt64LE=nt(function(g,b=0){return re(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=nt(function(g,b=0){return Y(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(g,b,x,O){if(g=+g,b=b>>>0,!O){const ze=Math.pow(2,8*x-1);ue(this,g,b,x,ze-1,-ze)}let z=0,G=1,ke=0;for(this[b]=g&255;++z<x&&(G*=256);)g<0&&ke===0&&this[b+z-1]!==0&&(ke=1),this[b+z]=(g/G>>0)-ke&255;return b+x},a.prototype.writeIntBE=function(g,b,x,O){if(g=+g,b=b>>>0,!O){const ze=Math.pow(2,8*x-1);ue(this,g,b,x,ze-1,-ze)}let z=x-1,G=1,ke=0;for(this[b+z]=g&255;--z>=0&&(G*=256);)g<0&&ke===0&&this[b+z+1]!==0&&(ke=1),this[b+z]=(g/G>>0)-ke&255;return b+x},a.prototype.writeInt8=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,1,127,-128),g<0&&(g=255+g+1),this[b]=g&255,b+1},a.prototype.writeInt16LE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,2,32767,-32768),this[b]=g&255,this[b+1]=g>>>8,b+2},a.prototype.writeInt16BE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,2,32767,-32768),this[b]=g>>>8,this[b+1]=g&255,b+2},a.prototype.writeInt32LE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,4,2147483647,-2147483648),this[b]=g&255,this[b+1]=g>>>8,this[b+2]=g>>>16,this[b+3]=g>>>24,b+4},a.prototype.writeInt32BE=function(g,b,x){return g=+g,b=b>>>0,x||ue(this,g,b,4,2147483647,-2147483648),g<0&&(g=4294967295+g+1),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4},a.prototype.writeBigInt64LE=nt(function(g,b=0){return re(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=nt(function(g,b=0){return Y(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function fe(E,g,b,x,O,z){if(b+x>E.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function Ce(E,g,b,x,O){return g=+g,b=b>>>0,O||fe(E,g,b,4),n.write(E,g,b,x,23,4),b+4}a.prototype.writeFloatLE=function(g,b,x){return Ce(this,g,b,!0,x)},a.prototype.writeFloatBE=function(g,b,x){return Ce(this,g,b,!1,x)};function me(E,g,b,x,O){return g=+g,b=b>>>0,O||fe(E,g,b,8),n.write(E,g,b,x,52,8),b+8}a.prototype.writeDoubleLE=function(g,b,x){return me(this,g,b,!0,x)},a.prototype.writeDoubleBE=function(g,b,x){return me(this,g,b,!1,x)},a.prototype.copy=function(g,b,x,O){if(!a.isBuffer(g))throw new TypeError("argument should be a Buffer");if(x||(x=0),!O&&O!==0&&(O=this.length),b>=g.length&&(b=g.length),b||(b=0),O>0&&O<x&&(O=x),O===x||g.length===0||this.length===0)return 0;if(b<0)throw new RangeError("targetStart out of bounds");if(x<0||x>=this.length)throw new RangeError("Index out of range");if(O<0)throw new RangeError("sourceEnd out of bounds");O>this.length&&(O=this.length),g.length-b<O-x&&(O=g.length-b+x);const z=O-x;return this===g&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(b,x,O):Uint8Array.prototype.set.call(g,this.subarray(x,O),b),z},a.prototype.fill=function(g,b,x,O){if(typeof g=="string"){if(typeof b=="string"?(O=b,b=0,x=this.length):typeof x=="string"&&(O=x,x=this.length),O!==void 0&&typeof O!="string")throw new TypeError("encoding must be a string");if(typeof O=="string"&&!a.isEncoding(O))throw new TypeError("Unknown encoding: "+O);if(g.length===1){const G=g.charCodeAt(0);(O==="utf8"&&G<128||O==="latin1")&&(g=G)}}else typeof g=="number"?g=g&255:typeof g=="boolean"&&(g=Number(g));if(b<0||this.length<b||this.length<x)throw new RangeError("Out of range index");if(x<=b)return this;b=b>>>0,x=x===void 0?this.length:x>>>0,g||(g=0);let z;if(typeof g=="number")for(z=b;z<x;++z)this[z]=g;else{const G=a.isBuffer(g)?g:a.from(g,O),ke=G.length;if(ke===0)throw new TypeError('The value "'+g+'" is invalid for argument "value"');for(z=0;z<x-b;++z)this[z+b]=G[z%ke]}return this};const Ee={};function Te(E,g,b){Ee[E]=class extends b{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${E}]`,this.stack,delete this.name}get code(){return E}set code(O){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:O,writable:!0})}toString(){return`${this.name} [${E}]: ${this.message}`}}}Te("ERR_BUFFER_OUT_OF_BOUNDS",function(E){return E?`${E} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Te("ERR_INVALID_ARG_TYPE",function(E,g){return`The "${E}" argument must be of type number. Received type ${typeof g}`},TypeError),Te("ERR_OUT_OF_RANGE",function(E,g,b){let x=`The value of "${E}" is out of range.`,O=b;return Number.isInteger(b)&&Math.abs(b)>2**32?O=De(String(b)):typeof b=="bigint"&&(O=String(b),(b>BigInt(2)**BigInt(32)||b<-(BigInt(2)**BigInt(32)))&&(O=De(O)),O+="n"),x+=` It must be ${g}. Received ${O}`,x},RangeError);function De(E){let g="",b=E.length;const x=E[0]==="-"?1:0;for(;b>=x+4;b-=3)g=`_${E.slice(b-3,b)}${g}`;return`${E.slice(0,b)}${g}`}function xe(E,g,b){Me(g,"offset"),(E[g]===void 0||E[g+b]===void 0)&&zt(g,E.length-(b+1))}function Be(E,g,b,x,O,z){if(E>b||E<g){const G=typeof g=="bigint"?"n":"";let ke;throw z>3?g===0||g===BigInt(0)?ke=`>= 0${G} and < 2${G} ** ${(z+1)*8}${G}`:ke=`>= -(2${G} ** ${(z+1)*8-1}${G}) and < 2 ** ${(z+1)*8-1}${G}`:ke=`>= ${g}${G} and <= ${b}${G}`,new Ee.ERR_OUT_OF_RANGE("value",ke,E)}xe(x,O,z)}function Me(E,g){if(typeof E!="number")throw new Ee.ERR_INVALID_ARG_TYPE(g,"number",E)}function zt(E,g,b){throw Math.floor(E)!==E?(Me(E,b),new Ee.ERR_OUT_OF_RANGE(b||"offset","an integer",E)):g<0?new Ee.ERR_BUFFER_OUT_OF_BOUNDS:new Ee.ERR_OUT_OF_RANGE(b||"offset",`>= ${b?1:0} and <= ${g}`,E)}const te=/[^+/0-9A-Za-z-_]/g;function $t(E){if(E=E.split("=")[0],E=E.trim().replace(te,""),E.length<2)return"";for(;E.length%4!==0;)E=E+"=";return E}function Nt(E,g){g=g||1/0;let b;const x=E.length;let O=null;const z=[];for(let G=0;G<x;++G){if(b=E.charCodeAt(G),b>55295&&b<57344){if(!O){if(b>56319){(g-=3)>-1&&z.push(239,191,189);continue}else if(G+1===x){(g-=3)>-1&&z.push(239,191,189);continue}O=b;continue}if(b<56320){(g-=3)>-1&&z.push(239,191,189),O=b;continue}b=(O-55296<<10|b-56320)+65536}else O&&(g-=3)>-1&&z.push(239,191,189);if(O=null,b<128){if((g-=1)<0)break;z.push(b)}else if(b<2048){if((g-=2)<0)break;z.push(b>>6|192,b&63|128)}else if(b<65536){if((g-=3)<0)break;z.push(b>>12|224,b>>6&63|128,b&63|128)}else if(b<1114112){if((g-=4)<0)break;z.push(b>>18|240,b>>12&63|128,b>>6&63|128,b&63|128)}else throw new Error("Invalid code point")}return z}function Gt(E){const g=[];for(let b=0;b<E.length;++b)g.push(E.charCodeAt(b)&255);return g}function xs(E,g){let b,x,O;const z=[];for(let G=0;G<E.length&&!((g-=2)<0);++G)b=E.charCodeAt(G),x=b>>8,O=b%256,z.push(O),z.push(x);return z}function mt(E){return e.toByteArray($t(E))}function ct(E,g,b,x){let O;for(O=0;O<x&&!(O+b>=g.length||O>=E.length);++O)g[O+b]=E[O];return O}function Xe(E,g){return E instanceof g||E!=null&&E.constructor!=null&&E.constructor.name!=null&&E.constructor.name===g.name}function dt(E){return E!==E}const vt=function(){const E="0123456789abcdef",g=new Array(256);for(let b=0;b<16;++b){const x=b*16;for(let O=0;O<16;++O)g[x+O]=E[b]+E[O]}return g}();function nt(E){return typeof BigInt>"u"?yt:E}function yt(){throw new Error("BigInt not supported")}})(ip);var G0;typeof window<"u"&&(window.Buffer||(window.Buffer=ip.Buffer),window.global||(window.global=window),window.process||(window.process={}),(G0=window.process)!=null&&G0.env||(window.process={env:{}}));var po,hi,sp=class extends Ou{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Zt(this,po,void 0),Zt(this,hi,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:vn(n[0])})},this.onChainChanged=n=>{const r=ea(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await e.enable(),r=vn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new Kt(e):e}}async disconnect(){if(!Je(this,hi))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return vn(e[0])}async getChainId(){const t=await this.getProvider();return ea(t.chainId)}async getProvider(){var t;if(!Je(this,hi)){let e=(await _i(()=>import("./index.8b8ade35.js").then(s=>s.i),["./index.8b8ade35.js","./events.f1d5a790.js"],import.meta.url)).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),Fo(this,po,new e(this.options));const n=(t=Je(this,po).walletExtension)==null?void 0:t.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Fo(this,hi,Je(this,po).makeWeb3Provider(o,i))}return Je(this,hi)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Au({account:n,chain:r,transport:ku(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var r;const e=await this.getProvider(),n=Re(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new Zh({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Kt(s)}throw new Gn(i)}}async watchAsset({address:t,decimals:e=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:n,symbol:r}}})}};po=new WeakMap;hi=new WeakMap;var rd={},ul={},Ue={},ap={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,f=l&65535;return u*f+(c*f+u*d<<16>>>0)|0}t.mul=Math.imul||e;function n(a,l){return a+l|0}t.add=n;function r(a,l){return a-l|0}t.sub=r;function i(a,l){return a<<l|a>>>32-l}t.rotl=i;function o(a,l){return a<<32-l|a>>>l}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(ap);Object.defineProperty(Ue,"__esModule",{value:!0});var lp=ap;function Z_(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Ue.readInt16BE=Z_;function K_(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Ue.readUint16BE=K_;function Y_(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Ue.readInt16LE=Y_;function J_(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Ue.readUint16LE=J_;function cp(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>8,e[n+1]=t>>>0,e}Ue.writeUint16BE=cp;Ue.writeInt16BE=cp;function up(t,e,n){return e===void 0&&(e=new Uint8Array(2)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e}Ue.writeUint16LE=up;Ue.writeInt16LE=up;function Mc(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Ue.readInt32BE=Mc;function jc(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Ue.readUint32BE=jc;function Uc(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Ue.readInt32LE=Uc;function Lc(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Ue.readUint32LE=Lc;function Ca(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>24,e[n+1]=t>>>16,e[n+2]=t>>>8,e[n+3]=t>>>0,e}Ue.writeUint32BE=Ca;Ue.writeInt32BE=Ca;function Ea(t,e,n){return e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0),e[n+0]=t>>>0,e[n+1]=t>>>8,e[n+2]=t>>>16,e[n+3]=t>>>24,e}Ue.writeUint32LE=Ea;Ue.writeInt32LE=Ea;function X_(t,e){e===void 0&&(e=0);var n=Mc(t,e),r=Mc(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Ue.readInt64BE=X_;function Q_(t,e){e===void 0&&(e=0);var n=jc(t,e),r=jc(t,e+4);return n*4294967296+r}Ue.readUint64BE=Q_;function e7(t,e){e===void 0&&(e=0);var n=Uc(t,e),r=Uc(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Ue.readInt64LE=e7;function t7(t,e){e===void 0&&(e=0);var n=Lc(t,e),r=Lc(t,e+4);return r*4294967296+n}Ue.readUint64LE=t7;function dp(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),Ca(t/4294967296>>>0,e,n),Ca(t>>>0,e,n+4),e}Ue.writeUint64BE=dp;Ue.writeInt64BE=dp;function fp(t,e,n){return e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0),Ea(t>>>0,e,n),Ea(t/4294967296>>>0,e,n+4),e}Ue.writeUint64LE=fp;Ue.writeInt64LE=fp;function n7(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=t/8+n-1;o>=n;o--)r+=e[o]*i,i*=256;return r}Ue.readUintBE=n7;function r7(t,e,n){if(n===void 0&&(n=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+t/8;o++)r+=e[o]*i,i*=256;return r}Ue.readUintLE=r7;function i7(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!lp.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+r-1;o>=r;o--)n[o]=e/i&255,i*=256;return n}Ue.writeUintBE=i7;function o7(t,e,n,r){if(n===void 0&&(n=new Uint8Array(t/8)),r===void 0&&(r=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!lp.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+t/8;o++)n[o]=e/i&255,i*=256;return n}Ue.writeUintLE=o7;function s7(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e)}Ue.readFloat32BE=s7;function a7(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat32(e,!0)}Ue.readFloat32LE=a7;function l7(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e)}Ue.readFloat64BE=l7;function c7(t,e){e===void 0&&(e=0);var n=new DataView(t.buffer,t.byteOffset,t.byteLength);return n.getFloat64(e,!0)}Ue.readFloat64LE=c7;function u7(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t),e}Ue.writeFloat32BE=u7;function d7(t,e,n){e===void 0&&(e=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat32(n,t,!0),e}Ue.writeFloat32LE=d7;function f7(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t),e}Ue.writeFloat64BE=f7;function h7(t,e,n){e===void 0&&(e=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(e.buffer,e.byteOffset,e.byteLength);return r.setFloat64(n,t,!0),e}Ue.writeFloat64LE=h7;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});function p7(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Dn.wipe=p7;Object.defineProperty(ul,"__esModule",{value:!0});var Bt=Ue,zc=Dn,g7=20;function m7(t,e,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],f=n[23]<<24|n[22]<<16|n[21]<<8|n[20],h=n[27]<<24|n[26]<<16|n[25]<<8|n[24],m=n[31]<<24|n[30]<<16|n[29]<<8|n[28],w=e[3]<<24|e[2]<<16|e[1]<<8|e[0],_=e[7]<<24|e[6]<<16|e[5]<<8|e[4],D=e[11]<<24|e[10]<<16|e[9]<<8|e[8],v=e[15]<<24|e[14]<<16|e[13]<<8|e[12],k=r,C=i,S=o,T=s,p=a,I=l,N=c,L=u,W=d,F=f,pe=h,ee=m,Z=w,H=_,V=D,K=v,ie=0;ie<g7;ie+=2)k=k+p|0,Z^=k,Z=Z>>>32-16|Z<<16,W=W+Z|0,p^=W,p=p>>>32-12|p<<12,C=C+I|0,H^=C,H=H>>>32-16|H<<16,F=F+H|0,I^=F,I=I>>>32-12|I<<12,S=S+N|0,V^=S,V=V>>>32-16|V<<16,pe=pe+V|0,N^=pe,N=N>>>32-12|N<<12,T=T+L|0,K^=T,K=K>>>32-16|K<<16,ee=ee+K|0,L^=ee,L=L>>>32-12|L<<12,S=S+N|0,V^=S,V=V>>>32-8|V<<8,pe=pe+V|0,N^=pe,N=N>>>32-7|N<<7,T=T+L|0,K^=T,K=K>>>32-8|K<<8,ee=ee+K|0,L^=ee,L=L>>>32-7|L<<7,C=C+I|0,H^=C,H=H>>>32-8|H<<8,F=F+H|0,I^=F,I=I>>>32-7|I<<7,k=k+p|0,Z^=k,Z=Z>>>32-8|Z<<8,W=W+Z|0,p^=W,p=p>>>32-7|p<<7,k=k+I|0,K^=k,K=K>>>32-16|K<<16,pe=pe+K|0,I^=pe,I=I>>>32-12|I<<12,C=C+N|0,Z^=C,Z=Z>>>32-16|Z<<16,ee=ee+Z|0,N^=ee,N=N>>>32-12|N<<12,S=S+L|0,H^=S,H=H>>>32-16|H<<16,W=W+H|0,L^=W,L=L>>>32-12|L<<12,T=T+p|0,V^=T,V=V>>>32-16|V<<16,F=F+V|0,p^=F,p=p>>>32-12|p<<12,S=S+L|0,H^=S,H=H>>>32-8|H<<8,W=W+H|0,L^=W,L=L>>>32-7|L<<7,T=T+p|0,V^=T,V=V>>>32-8|V<<8,F=F+V|0,p^=F,p=p>>>32-7|p<<7,C=C+N|0,Z^=C,Z=Z>>>32-8|Z<<8,ee=ee+Z|0,N^=ee,N=N>>>32-7|N<<7,k=k+I|0,K^=k,K=K>>>32-8|K<<8,pe=pe+K|0,I^=pe,I=I>>>32-7|I<<7;Bt.writeUint32LE(k+r|0,t,0),Bt.writeUint32LE(C+i|0,t,4),Bt.writeUint32LE(S+o|0,t,8),Bt.writeUint32LE(T+s|0,t,12),Bt.writeUint32LE(p+a|0,t,16),Bt.writeUint32LE(I+l|0,t,20),Bt.writeUint32LE(N+c|0,t,24),Bt.writeUint32LE(L+u|0,t,28),Bt.writeUint32LE(W+d|0,t,32),Bt.writeUint32LE(F+f|0,t,36),Bt.writeUint32LE(pe+h|0,t,40),Bt.writeUint32LE(ee+m|0,t,44),Bt.writeUint32LE(Z+w|0,t,48),Bt.writeUint32LE(H+_|0,t,52),Bt.writeUint32LE(V+D|0,t,56),Bt.writeUint32LE(K+v|0,t,60)}function hp(t,e,n,r,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){m7(a,o,t);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];w7(o,0,s)}return zc.wipe(a),i===0&&zc.wipe(o),r}ul.streamXOR=hp;function b7(t,e,n,r){return r===void 0&&(r=0),zc.wipe(n),hp(t,e,n,n,r)}ul.stream=b7;function w7(t,e,n){for(var r=1;n--;)r=r+(t[e]&255)|0,t[e]=r&255,r>>>=8,e++;if(r>0)throw new Error("ChaCha: counter overflow")}var pp={},xr={};Object.defineProperty(xr,"__esModule",{value:!0});function v7(t,e,n){return~(t-1)&e|t-1&n}xr.select=v7;function y7(t,e){return(t|0)-(e|0)-1>>>31&1}xr.lessOrEqual=y7;function gp(t,e){if(t.length!==e.length)return 0;for(var n=0,r=0;r<t.length;r++)n|=t[r]^e[r];return 1&n-1>>>8}xr.compare=gp;function _7(t,e){return t.length===0||e.length===0?!1:gp(t,e)!==0}xr.equal=_7;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=xr,n=Dn;t.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var f=a[8]|a[9]<<8;this._r[4]=(d>>>4|f<<12)&255,this._r[5]=f>>>1&8190;var h=a[10]|a[11]<<8;this._r[6]=(f>>>14|h<<2)&8191;var m=a[12]|a[13]<<8;this._r[7]=(h>>>11|m<<5)&8065;var w=a[14]|a[15]<<8;this._r[8]=(m>>>8|w<<8)&8191,this._r[9]=w>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],f=this._h[1],h=this._h[2],m=this._h[3],w=this._h[4],_=this._h[5],D=this._h[6],v=this._h[7],k=this._h[8],C=this._h[9],S=this._r[0],T=this._r[1],p=this._r[2],I=this._r[3],N=this._r[4],L=this._r[5],W=this._r[6],F=this._r[7],pe=this._r[8],ee=this._r[9];c>=16;){var Z=a[l+0]|a[l+1]<<8;d+=Z&8191;var H=a[l+2]|a[l+3]<<8;f+=(Z>>>13|H<<3)&8191;var V=a[l+4]|a[l+5]<<8;h+=(H>>>10|V<<6)&8191;var K=a[l+6]|a[l+7]<<8;m+=(V>>>7|K<<9)&8191;var ie=a[l+8]|a[l+9]<<8;w+=(K>>>4|ie<<12)&8191,_+=ie>>>1&8191;var ne=a[l+10]|a[l+11]<<8;D+=(ie>>>14|ne<<2)&8191;var oe=a[l+12]|a[l+13]<<8;v+=(ne>>>11|oe<<5)&8191;var ue=a[l+14]|a[l+15]<<8;k+=(oe>>>8|ue<<8)&8191,C+=ue>>>5|u;var re=0,Y=re;Y+=d*S,Y+=f*(5*ee),Y+=h*(5*pe),Y+=m*(5*F),Y+=w*(5*W),re=Y>>>13,Y&=8191,Y+=_*(5*L),Y+=D*(5*N),Y+=v*(5*I),Y+=k*(5*p),Y+=C*(5*T),re+=Y>>>13,Y&=8191;var fe=re;fe+=d*T,fe+=f*S,fe+=h*(5*ee),fe+=m*(5*pe),fe+=w*(5*F),re=fe>>>13,fe&=8191,fe+=_*(5*W),fe+=D*(5*L),fe+=v*(5*N),fe+=k*(5*I),fe+=C*(5*p),re+=fe>>>13,fe&=8191;var Ce=re;Ce+=d*p,Ce+=f*T,Ce+=h*S,Ce+=m*(5*ee),Ce+=w*(5*pe),re=Ce>>>13,Ce&=8191,Ce+=_*(5*F),Ce+=D*(5*W),Ce+=v*(5*L),Ce+=k*(5*N),Ce+=C*(5*I),re+=Ce>>>13,Ce&=8191;var me=re;me+=d*I,me+=f*p,me+=h*T,me+=m*S,me+=w*(5*ee),re=me>>>13,me&=8191,me+=_*(5*pe),me+=D*(5*F),me+=v*(5*W),me+=k*(5*L),me+=C*(5*N),re+=me>>>13,me&=8191;var Ee=re;Ee+=d*N,Ee+=f*I,Ee+=h*p,Ee+=m*T,Ee+=w*S,re=Ee>>>13,Ee&=8191,Ee+=_*(5*ee),Ee+=D*(5*pe),Ee+=v*(5*F),Ee+=k*(5*W),Ee+=C*(5*L),re+=Ee>>>13,Ee&=8191;var Te=re;Te+=d*L,Te+=f*N,Te+=h*I,Te+=m*p,Te+=w*T,re=Te>>>13,Te&=8191,Te+=_*S,Te+=D*(5*ee),Te+=v*(5*pe),Te+=k*(5*F),Te+=C*(5*W),re+=Te>>>13,Te&=8191;var De=re;De+=d*W,De+=f*L,De+=h*N,De+=m*I,De+=w*p,re=De>>>13,De&=8191,De+=_*T,De+=D*S,De+=v*(5*ee),De+=k*(5*pe),De+=C*(5*F),re+=De>>>13,De&=8191;var xe=re;xe+=d*F,xe+=f*W,xe+=h*L,xe+=m*N,xe+=w*I,re=xe>>>13,xe&=8191,xe+=_*p,xe+=D*T,xe+=v*S,xe+=k*(5*ee),xe+=C*(5*pe),re+=xe>>>13,xe&=8191;var Be=re;Be+=d*pe,Be+=f*F,Be+=h*W,Be+=m*L,Be+=w*N,re=Be>>>13,Be&=8191,Be+=_*I,Be+=D*p,Be+=v*T,Be+=k*S,Be+=C*(5*ee),re+=Be>>>13,Be&=8191;var Me=re;Me+=d*ee,Me+=f*pe,Me+=h*F,Me+=m*W,Me+=w*L,re=Me>>>13,Me&=8191,Me+=_*N,Me+=D*I,Me+=v*p,Me+=k*T,Me+=C*S,re+=Me>>>13,Me&=8191,re=(re<<2)+re|0,re=re+Y|0,Y=re&8191,re=re>>>13,fe+=re,d=Y,f=fe,h=Ce,m=me,w=Ee,_=Te,D=De,v=xe,k=Be,C=Me,l+=16,c-=16}this._h[0]=d,this._h[1]=f,this._h[2]=h,this._h[3]=m,this._h[4]=w,this._h[5]=_,this._h[6]=D,this._h[7]=v,this._h[8]=k,this._h[9]=C},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,f,h;if(this._leftover){for(h=this._leftover,this._buffer[h++]=1;h<16;h++)this._buffer[h]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,h=2;h<10;h++)this._h[h]+=u,u=this._h[h]>>>13,this._h[h]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,h=1;h<10;h++)c[h]=this._h[h]+u,u=c[h]>>>13,c[h]&=8191;for(c[9]-=8192,d=(u^1)-1,h=0;h<10;h++)c[h]&=d;for(d=~d,h=0;h<10;h++)this._h[h]=this._h[h]&d|c[h];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,f=this._h[0]+this._pad[0],this._h[0]=f&65535,h=1;h<8;h++)f=(this._h[h]+this._pad[h]|0)+(f>>>16)|0,this._h[h]=f&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(pp);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ul,n=pp,r=Dn,i=Ue,o=xr;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,c.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,f){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var h=new Uint8Array(16);h.set(c,h.length-c.length);var m=new Uint8Array(32);e.stream(this._key,h,m,4);var w=u.length+this.tagLength,_;if(f){if(f.length!==w)throw new Error("ChaCha20Poly1305: incorrect destination length");_=f}else _=new Uint8Array(w);return e.streamXOR(this._key,h,u,_,4),this._authenticate(_.subarray(_.length-this.tagLength,_.length),m,_.subarray(0,_.length-this.tagLength),d),r.wipe(h),_},l.prototype.open=function(c,u,d,f){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var h=new Uint8Array(16);h.set(c,h.length-c.length);var m=new Uint8Array(32);e.stream(this._key,h,m,4);var w=new Uint8Array(this.tagLength);if(this._authenticate(w,m,u.subarray(0,u.length-this.tagLength),d),!o.equal(w,u.subarray(u.length-this.tagLength,u.length)))return null;var _=u.length-this.tagLength,D;if(f){if(f.length!==_)throw new Error("ChaCha20Poly1305: incorrect destination length");D=f}else D=new Uint8Array(_);return e.streamXOR(this._key,h,u.subarray(0,u.length-this.tagLength),D,4),r.wipe(h),D},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,f){var h=new n.Poly1305(u);f&&(h.update(f),f.length%16>0&&h.update(s.subarray(f.length%16))),h.update(d),d.length%16>0&&h.update(s.subarray(d.length%16));var m=new Uint8Array(8);f&&i.writeUint64LE(f.length,m),h.update(m),i.writeUint64LE(d.length,m),h.update(m);for(var w=h.digest(),_=0;_<w.length;_++)c[_]=w[_];h.clean(),r.wipe(w),r.wipe(m)},l}();t.ChaCha20Poly1305=a})(rd);var mp={},Ss={},id={};Object.defineProperty(id,"__esModule",{value:!0});function C7(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}id.isSerializableHash=C7;Object.defineProperty(Ss,"__esModule",{value:!0});var Tn=id,E7=xr,k7=Dn,bp=function(){function t(e,n){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Tn.isSerializableHash(this._inner)&&Tn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),k7.wipe(r)}return t.prototype.reset=function(){if(!Tn.isSerializableHash(this._inner)||!Tn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Tn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Tn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Tn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Tn.isSerializableHash(this._inner)||!Tn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Tn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();Ss.HMAC=bp;function D7(t,e,n){var r=new bp(t,e);r.update(n);var i=r.digest();return r.clean(),i}Ss.hmac=D7;Ss.equal=E7.equal;Object.defineProperty(mp,"__esModule",{value:!0});var f0=Ss,h0=Dn,S7=function(){function t(e,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=f0.hmac(this._hash,r,n);this._hmac=new f0.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var n=new Uint8Array(e),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},t.prototype.clean=function(){this._hmac.clean(),h0.wipe(this._buffer),h0.wipe(this._counter),this._bufpos=0},t}(),I7=mp.HKDF=S7,dl={},fl={},hl={};Object.defineProperty(hl,"__esModule",{value:!0});hl.BrowserRandomSource=void 0;const p0=65536;class T7{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(e);for(let r=0;r<n.length;r+=p0)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,p0)));return n}}hl.BrowserRandomSource=T7;function A7(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pl={};const x7={},P7=Object.freeze(Object.defineProperty({__proto__:null,default:x7},Symbol.toStringTag,{value:"Module"})),O7=Kh(P7);Object.defineProperty(pl,"__esModule",{value:!0});pl.NodeRandomSource=void 0;const $7=Dn;class N7{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof A7<"u"){const e=O7;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(e);if(n.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(e);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,$7.wipe)(n),r}}pl.NodeRandomSource=N7;Object.defineProperty(fl,"__esModule",{value:!0});fl.SystemRandomSource=void 0;const R7=hl,B7=pl;class M7{constructor(){if(this.isAvailable=!1,this.name="",this._source=new R7.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new B7.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}fl.SystemRandomSource=M7;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=fl,n=Ue,r=Dn;t.defaultRandomSource=new e.SystemRandomSource;function i(c,u=t.defaultRandomSource){return u.randomBytes(c)}t.randomBytes=i;function o(c=t.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let f="";const h=u.length,m=256-256%h;for(;c>0;){const w=i(Math.ceil(c*256/m),d);for(let _=0;_<w.length&&c>0;_++){const D=w[_];D<m&&(f+=u.charAt(D%h),c--)}(0,r.wipe)(w)}return f}t.randomString=a;function l(c,u=s,d=t.defaultRandomSource){const f=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(f,u,d)}t.randomStringForEntropy=l})(dl);var gl={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Ue,n=Dn;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,f=c<<3,h=c%64<56?64:128;this._buffer[u]=128;for(var m=u+1;m<h-8;m++)this._buffer[m]=0;e.writeUint32BE(d,this._buffer,h-8),e.writeUint32BE(f,this._buffer,h-4),o(this._temp,this._state,this._buffer,0,h),this._finished=!0}for(var m=0;m<this.digestLength/4;m++)e.writeUint32BE(this._state[m],l,m*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();t.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var f=l[0],h=l[1],m=l[2],w=l[3],_=l[4],D=l[5],v=l[6],k=l[7],C=0;C<16;C++){var S=u+C*4;a[C]=e.readUint32BE(c,S)}for(var C=16;C<64;C++){var T=a[C-2],p=(T>>>17|T<<32-17)^(T>>>19|T<<32-19)^T>>>10;T=a[C-15];var I=(T>>>7|T<<32-7)^(T>>>18|T<<32-18)^T>>>3;a[C]=(p+a[C-7]|0)+(I+a[C-16]|0)}for(var C=0;C<64;C++){var p=(((_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&D^~_&v)|0)+(k+(i[C]+a[C]|0)|0)|0,I=((f>>>2|f<<32-2)^(f>>>13|f<<32-13)^(f>>>22|f<<32-22))+(f&h^f&m^h&m)|0;k=v,v=D,D=_,_=w+p|0,w=m,m=h,h=f,f=p+I|0}l[0]+=f,l[1]+=h,l[2]+=m,l[3]+=w,l[4]+=_,l[5]+=D,l[6]+=v,l[7]+=k,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}t.hash=s})(gl);var od={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=dl,n=Dn;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function r(C){const S=new Float64Array(16);if(C)for(let T=0;T<C.length;T++)S[T]=C[T];return S}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(C){let S=1;for(let T=0;T<16;T++){let p=C[T]+S+65535;S=Math.floor(p/65536),C[T]=p-S*65536}C[0]+=S-1+37*(S-1)}function a(C,S,T){const p=~(T-1);for(let I=0;I<16;I++){const N=p&(C[I]^S[I]);C[I]^=N,S[I]^=N}}function l(C,S){const T=r(),p=r();for(let I=0;I<16;I++)p[I]=S[I];s(p),s(p),s(p);for(let I=0;I<2;I++){T[0]=p[0]-65517;for(let L=1;L<15;L++)T[L]=p[L]-65535-(T[L-1]>>16&1),T[L-1]&=65535;T[15]=p[15]-32767-(T[14]>>16&1);const N=T[15]>>16&1;T[14]&=65535,a(p,T,1-N)}for(let I=0;I<16;I++)C[2*I]=p[I]&255,C[2*I+1]=p[I]>>8}function c(C,S){for(let T=0;T<16;T++)C[T]=S[2*T]+(S[2*T+1]<<8);C[15]&=32767}function u(C,S,T){for(let p=0;p<16;p++)C[p]=S[p]+T[p]}function d(C,S,T){for(let p=0;p<16;p++)C[p]=S[p]-T[p]}function f(C,S,T){let p,I,N=0,L=0,W=0,F=0,pe=0,ee=0,Z=0,H=0,V=0,K=0,ie=0,ne=0,oe=0,ue=0,re=0,Y=0,fe=0,Ce=0,me=0,Ee=0,Te=0,De=0,xe=0,Be=0,Me=0,zt=0,te=0,$t=0,Nt=0,Gt=0,xs=0,mt=T[0],ct=T[1],Xe=T[2],dt=T[3],vt=T[4],nt=T[5],yt=T[6],E=T[7],g=T[8],b=T[9],x=T[10],O=T[11],z=T[12],G=T[13],ke=T[14],ze=T[15];p=S[0],N+=p*mt,L+=p*ct,W+=p*Xe,F+=p*dt,pe+=p*vt,ee+=p*nt,Z+=p*yt,H+=p*E,V+=p*g,K+=p*b,ie+=p*x,ne+=p*O,oe+=p*z,ue+=p*G,re+=p*ke,Y+=p*ze,p=S[1],L+=p*mt,W+=p*ct,F+=p*Xe,pe+=p*dt,ee+=p*vt,Z+=p*nt,H+=p*yt,V+=p*E,K+=p*g,ie+=p*b,ne+=p*x,oe+=p*O,ue+=p*z,re+=p*G,Y+=p*ke,fe+=p*ze,p=S[2],W+=p*mt,F+=p*ct,pe+=p*Xe,ee+=p*dt,Z+=p*vt,H+=p*nt,V+=p*yt,K+=p*E,ie+=p*g,ne+=p*b,oe+=p*x,ue+=p*O,re+=p*z,Y+=p*G,fe+=p*ke,Ce+=p*ze,p=S[3],F+=p*mt,pe+=p*ct,ee+=p*Xe,Z+=p*dt,H+=p*vt,V+=p*nt,K+=p*yt,ie+=p*E,ne+=p*g,oe+=p*b,ue+=p*x,re+=p*O,Y+=p*z,fe+=p*G,Ce+=p*ke,me+=p*ze,p=S[4],pe+=p*mt,ee+=p*ct,Z+=p*Xe,H+=p*dt,V+=p*vt,K+=p*nt,ie+=p*yt,ne+=p*E,oe+=p*g,ue+=p*b,re+=p*x,Y+=p*O,fe+=p*z,Ce+=p*G,me+=p*ke,Ee+=p*ze,p=S[5],ee+=p*mt,Z+=p*ct,H+=p*Xe,V+=p*dt,K+=p*vt,ie+=p*nt,ne+=p*yt,oe+=p*E,ue+=p*g,re+=p*b,Y+=p*x,fe+=p*O,Ce+=p*z,me+=p*G,Ee+=p*ke,Te+=p*ze,p=S[6],Z+=p*mt,H+=p*ct,V+=p*Xe,K+=p*dt,ie+=p*vt,ne+=p*nt,oe+=p*yt,ue+=p*E,re+=p*g,Y+=p*b,fe+=p*x,Ce+=p*O,me+=p*z,Ee+=p*G,Te+=p*ke,De+=p*ze,p=S[7],H+=p*mt,V+=p*ct,K+=p*Xe,ie+=p*dt,ne+=p*vt,oe+=p*nt,ue+=p*yt,re+=p*E,Y+=p*g,fe+=p*b,Ce+=p*x,me+=p*O,Ee+=p*z,Te+=p*G,De+=p*ke,xe+=p*ze,p=S[8],V+=p*mt,K+=p*ct,ie+=p*Xe,ne+=p*dt,oe+=p*vt,ue+=p*nt,re+=p*yt,Y+=p*E,fe+=p*g,Ce+=p*b,me+=p*x,Ee+=p*O,Te+=p*z,De+=p*G,xe+=p*ke,Be+=p*ze,p=S[9],K+=p*mt,ie+=p*ct,ne+=p*Xe,oe+=p*dt,ue+=p*vt,re+=p*nt,Y+=p*yt,fe+=p*E,Ce+=p*g,me+=p*b,Ee+=p*x,Te+=p*O,De+=p*z,xe+=p*G,Be+=p*ke,Me+=p*ze,p=S[10],ie+=p*mt,ne+=p*ct,oe+=p*Xe,ue+=p*dt,re+=p*vt,Y+=p*nt,fe+=p*yt,Ce+=p*E,me+=p*g,Ee+=p*b,Te+=p*x,De+=p*O,xe+=p*z,Be+=p*G,Me+=p*ke,zt+=p*ze,p=S[11],ne+=p*mt,oe+=p*ct,ue+=p*Xe,re+=p*dt,Y+=p*vt,fe+=p*nt,Ce+=p*yt,me+=p*E,Ee+=p*g,Te+=p*b,De+=p*x,xe+=p*O,Be+=p*z,Me+=p*G,zt+=p*ke,te+=p*ze,p=S[12],oe+=p*mt,ue+=p*ct,re+=p*Xe,Y+=p*dt,fe+=p*vt,Ce+=p*nt,me+=p*yt,Ee+=p*E,Te+=p*g,De+=p*b,xe+=p*x,Be+=p*O,Me+=p*z,zt+=p*G,te+=p*ke,$t+=p*ze,p=S[13],ue+=p*mt,re+=p*ct,Y+=p*Xe,fe+=p*dt,Ce+=p*vt,me+=p*nt,Ee+=p*yt,Te+=p*E,De+=p*g,xe+=p*b,Be+=p*x,Me+=p*O,zt+=p*z,te+=p*G,$t+=p*ke,Nt+=p*ze,p=S[14],re+=p*mt,Y+=p*ct,fe+=p*Xe,Ce+=p*dt,me+=p*vt,Ee+=p*nt,Te+=p*yt,De+=p*E,xe+=p*g,Be+=p*b,Me+=p*x,zt+=p*O,te+=p*z,$t+=p*G,Nt+=p*ke,Gt+=p*ze,p=S[15],Y+=p*mt,fe+=p*ct,Ce+=p*Xe,me+=p*dt,Ee+=p*vt,Te+=p*nt,De+=p*yt,xe+=p*E,Be+=p*g,Me+=p*b,zt+=p*x,te+=p*O,$t+=p*z,Nt+=p*G,Gt+=p*ke,xs+=p*ze,N+=38*fe,L+=38*Ce,W+=38*me,F+=38*Ee,pe+=38*Te,ee+=38*De,Z+=38*xe,H+=38*Be,V+=38*Me,K+=38*zt,ie+=38*te,ne+=38*$t,oe+=38*Nt,ue+=38*Gt,re+=38*xs,I=1,p=N+I+65535,I=Math.floor(p/65536),N=p-I*65536,p=L+I+65535,I=Math.floor(p/65536),L=p-I*65536,p=W+I+65535,I=Math.floor(p/65536),W=p-I*65536,p=F+I+65535,I=Math.floor(p/65536),F=p-I*65536,p=pe+I+65535,I=Math.floor(p/65536),pe=p-I*65536,p=ee+I+65535,I=Math.floor(p/65536),ee=p-I*65536,p=Z+I+65535,I=Math.floor(p/65536),Z=p-I*65536,p=H+I+65535,I=Math.floor(p/65536),H=p-I*65536,p=V+I+65535,I=Math.floor(p/65536),V=p-I*65536,p=K+I+65535,I=Math.floor(p/65536),K=p-I*65536,p=ie+I+65535,I=Math.floor(p/65536),ie=p-I*65536,p=ne+I+65535,I=Math.floor(p/65536),ne=p-I*65536,p=oe+I+65535,I=Math.floor(p/65536),oe=p-I*65536,p=ue+I+65535,I=Math.floor(p/65536),ue=p-I*65536,p=re+I+65535,I=Math.floor(p/65536),re=p-I*65536,p=Y+I+65535,I=Math.floor(p/65536),Y=p-I*65536,N+=I-1+37*(I-1),I=1,p=N+I+65535,I=Math.floor(p/65536),N=p-I*65536,p=L+I+65535,I=Math.floor(p/65536),L=p-I*65536,p=W+I+65535,I=Math.floor(p/65536),W=p-I*65536,p=F+I+65535,I=Math.floor(p/65536),F=p-I*65536,p=pe+I+65535,I=Math.floor(p/65536),pe=p-I*65536,p=ee+I+65535,I=Math.floor(p/65536),ee=p-I*65536,p=Z+I+65535,I=Math.floor(p/65536),Z=p-I*65536,p=H+I+65535,I=Math.floor(p/65536),H=p-I*65536,p=V+I+65535,I=Math.floor(p/65536),V=p-I*65536,p=K+I+65535,I=Math.floor(p/65536),K=p-I*65536,p=ie+I+65535,I=Math.floor(p/65536),ie=p-I*65536,p=ne+I+65535,I=Math.floor(p/65536),ne=p-I*65536,p=oe+I+65535,I=Math.floor(p/65536),oe=p-I*65536,p=ue+I+65535,I=Math.floor(p/65536),ue=p-I*65536,p=re+I+65535,I=Math.floor(p/65536),re=p-I*65536,p=Y+I+65535,I=Math.floor(p/65536),Y=p-I*65536,N+=I-1+37*(I-1),C[0]=N,C[1]=L,C[2]=W,C[3]=F,C[4]=pe,C[5]=ee,C[6]=Z,C[7]=H,C[8]=V,C[9]=K,C[10]=ie,C[11]=ne,C[12]=oe,C[13]=ue,C[14]=re,C[15]=Y}function h(C,S){f(C,S,S)}function m(C,S){const T=r();for(let p=0;p<16;p++)T[p]=S[p];for(let p=253;p>=0;p--)h(T,T),p!==2&&p!==4&&f(T,T,S);for(let p=0;p<16;p++)C[p]=T[p]}function w(C,S){const T=new Uint8Array(32),p=new Float64Array(80),I=r(),N=r(),L=r(),W=r(),F=r(),pe=r();for(let V=0;V<31;V++)T[V]=C[V];T[31]=C[31]&127|64,T[0]&=248,c(p,S);for(let V=0;V<16;V++)N[V]=p[V];I[0]=W[0]=1;for(let V=254;V>=0;--V){const K=T[V>>>3]>>>(V&7)&1;a(I,N,K),a(L,W,K),u(F,I,L),d(I,I,L),u(L,N,W),d(N,N,W),h(W,F),h(pe,I),f(I,L,I),f(L,N,F),u(F,I,L),d(I,I,L),h(N,I),d(L,W,pe),f(I,L,o),u(I,I,W),f(L,L,I),f(I,W,pe),f(W,N,p),h(N,F),a(I,N,K),a(L,W,K)}for(let V=0;V<16;V++)p[V+16]=I[V],p[V+32]=L[V],p[V+48]=N[V],p[V+64]=W[V];const ee=p.subarray(32),Z=p.subarray(16);m(ee,ee),f(Z,Z,ee);const H=new Uint8Array(32);return l(H,Z),H}t.scalarMult=w;function _(C){return w(C,i)}t.scalarMultBase=_;function D(C){if(C.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const S=new Uint8Array(C);return{publicKey:_(S),secretKey:S}}t.generateKeyPairFromSeed=D;function v(C){const S=(0,e.randomBytes)(32,C),T=D(S);return(0,n.wipe)(S),T}t.generateKeyPair=v;function k(C,S,T=!1){if(C.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(S.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const p=w(C,S);if(T){let I=0;for(let N=0;N<p.length;N++)I|=p[N];if(I===0)throw new Error("X25519: invalid shared key")}return p}t.sharedKey=k})(od);function sd(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function wp(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?sd(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function g0(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const n=wp(e);let r=0;for(const i of t)n.set(i,r),r+=i.length;return sd(n)}function j7(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=t.length,l=t.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(m){if(m instanceof Uint8Array||(ArrayBuffer.isView(m)?m=new Uint8Array(m.buffer,m.byteOffset,m.byteLength):Array.isArray(m)&&(m=Uint8Array.from(m))),!(m instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(m.length===0)return"";for(var w=0,_=0,D=0,v=m.length;D!==v&&m[D]===0;)D++,w++;for(var k=(v-D)*u+1>>>0,C=new Uint8Array(k);D!==v;){for(var S=m[D],T=0,p=k-1;(S!==0||T<_)&&p!==-1;p--,T++)S+=256*C[p]>>>0,C[p]=S%a>>>0,S=S/a>>>0;if(S!==0)throw new Error("Non-zero carry");_=T,D++}for(var I=k-_;I!==k&&C[I]===0;)I++;for(var N=l.repeat(w);I<k;++I)N+=t.charAt(C[I]);return N}function f(m){if(typeof m!="string")throw new TypeError("Expected String");if(m.length===0)return new Uint8Array;var w=0;if(m[w]!==" "){for(var _=0,D=0;m[w]===l;)_++,w++;for(var v=(m.length-w)*c+1>>>0,k=new Uint8Array(v);m[w];){var C=n[m.charCodeAt(w)];if(C===255)return;for(var S=0,T=v-1;(C!==0||S<D)&&T!==-1;T--,S++)C+=a*k[T]>>>0,k[T]=C%256>>>0,C=C/256>>>0;if(C!==0)throw new Error("Non-zero carry");D=S,w++}if(m[w]!==" "){for(var p=v-D;p!==v&&k[p]===0;)p++;for(var I=new Uint8Array(_+(v-p)),N=_;p!==v;)I[N++]=k[p++];return I}}}function h(m){var w=f(m);if(w)return w;throw new Error(`Non-${e} character`)}return{encode:d,decodeUnsafe:f,decode:h}}var U7=j7,L7=U7;const z7=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},F7=t=>new TextEncoder().encode(t),W7=t=>new TextDecoder().decode(t);class H7{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class V7{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return vp(this,e)}}class q7{constructor(e){this.decoders=e}or(e){return vp(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const vp=(t,e)=>new q7({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class G7{constructor(e,n,r,i){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new H7(e,n,r),this.decoder=new V7(e,n,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const ml=({name:t,prefix:e,encode:n,decode:r})=>new G7(t,e,n,r),Is=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:i}=L7(n,e);return ml({prefix:t,name:e,encode:r,decode:o=>z7(i(o))})},Z7=(t,e,n,r)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[t[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},K7=(t,e,n)=>{const r=e[e.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<t.length;++l)for(a=a<<8|t[l],s+=8;s>n;)s-=n,o+=e[i&a>>s];if(s&&(o+=e[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},Ot=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>ml({prefix:e,name:t,encode(i){return K7(i,r,n)},decode(i){return Z7(i,r,n,t)}}),Y7=ml({prefix:"\0",name:"identity",encode:t=>W7(t),decode:t=>F7(t)}),J7=Object.freeze(Object.defineProperty({__proto__:null,identity:Y7},Symbol.toStringTag,{value:"Module"})),X7=Ot({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),Q7=Object.freeze(Object.defineProperty({__proto__:null,base2:X7},Symbol.toStringTag,{value:"Module"})),e9=Ot({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),t9=Object.freeze(Object.defineProperty({__proto__:null,base8:e9},Symbol.toStringTag,{value:"Module"})),n9=Is({prefix:"9",name:"base10",alphabet:"0123456789"}),r9=Object.freeze(Object.defineProperty({__proto__:null,base10:n9},Symbol.toStringTag,{value:"Module"})),i9=Ot({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),o9=Ot({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),s9=Object.freeze(Object.defineProperty({__proto__:null,base16:i9,base16upper:o9},Symbol.toStringTag,{value:"Module"})),a9=Ot({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),l9=Ot({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),c9=Ot({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),u9=Ot({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),d9=Ot({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),f9=Ot({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),h9=Ot({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),p9=Ot({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),g9=Ot({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),m9=Object.freeze(Object.defineProperty({__proto__:null,base32:a9,base32hex:d9,base32hexpad:h9,base32hexpadupper:p9,base32hexupper:f9,base32pad:c9,base32padupper:u9,base32upper:l9,base32z:g9},Symbol.toStringTag,{value:"Module"})),b9=Is({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),w9=Is({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),v9=Object.freeze(Object.defineProperty({__proto__:null,base36:b9,base36upper:w9},Symbol.toStringTag,{value:"Module"})),y9=Is({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),_9=Is({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),C9=Object.freeze(Object.defineProperty({__proto__:null,base58btc:y9,base58flickr:_9},Symbol.toStringTag,{value:"Module"})),E9=Ot({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),k9=Ot({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),D9=Ot({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),S9=Ot({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),I9=Object.freeze(Object.defineProperty({__proto__:null,base64:E9,base64pad:k9,base64url:D9,base64urlpad:S9},Symbol.toStringTag,{value:"Module"})),yp=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),T9=yp.reduce((t,e,n)=>(t[n]=e,t),[]),A9=yp.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function x9(t){return t.reduce((e,n)=>(e+=T9[n],e),"")}function P9(t){const e=[];for(const n of t){const r=A9[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const O9=ml({prefix:"🚀",name:"base256emoji",encode:x9,decode:P9}),$9=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:O9},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const m0={...J7,...Q7,...t9,...r9,...s9,...m9,...v9,...C9,...I9,...$9};function _p(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const b0=_p("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),Vl=_p("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=wp(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),Cp={utf8:b0,"utf-8":b0,hex:m0.base16,latin1:Vl,ascii:Vl,binary:Vl,...m0};function wn(t,e="utf8"){const n=Cp[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?sd(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function En(t,e="utf8"){const n=Cp[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}var w0=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))},N9=function(){function t(e,n,r){this.name=e,this.version=n,this.os=r,this.type="browser"}return t}(),R9=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),B9=function(){function t(e,n,r,i){this.name=e,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return t}(),M9=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),j9=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),U9=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,L9=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,v0=3,z9=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",U9]],y0=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function F9(t){return t?_0(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new j9:typeof navigator<"u"?_0(navigator.userAgent):V9()}function W9(t){return t!==""&&z9.reduce(function(e,n){var r=n[0],i=n[1];if(e)return e;var o=i.exec(t);return!!o&&[r,o]},!1)}function _0(t){var e=W9(t);if(!e)return null;var n=e[0],r=e[1];if(n==="searchbot")return new M9;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<v0&&(i=w0(w0([],i,!0),q9(v0-i.length),!0)):i=[];var o=i.join("."),s=H9(t),a=L9.exec(t);return a&&a[1]?new B9(n,o,s,a[1]):new N9(n,o,s)}function H9(t){for(var e=0,n=y0.length;e<n;e++){var r=y0[e],i=r[0],o=r[1],s=o.exec(t);if(s)return i}return null}function V9(){var t=typeof process<"u"&&process.version;return t?new R9(process.version.slice(1)):null}function q9(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var Lr={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fc=function(t,e){return Fc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Fc(t,e)};function G9(t,e){Fc(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Wc=function(){return Wc=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Wc.apply(this,arguments)};function Z9(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function K9(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function Y9(t,e){return function(n,r){e(n,r,t)}}function J9(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function X9(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function Q9(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function eC(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}function tC(t,e){for(var n in t)n!=="default"&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Hc(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ep(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function nC(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Ep(arguments[e]));return t}function rC(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function ls(t){return this instanceof ls?(this.v=t,this):new ls(t)}function iC(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(f){r[f]&&(i[f]=function(h){return new Promise(function(m,w){o.push([f,h,m,w])>1||a(f,h)})})}function a(f,h){try{l(r[f](h))}catch(m){d(o[0][3],m)}}function l(f){f.value instanceof ls?Promise.resolve(f.value.v).then(c,u):d(o[0][2],f)}function c(f){a("next",f)}function u(f){a("throw",f)}function d(f,h){f(h),o.shift(),o.length&&a(o[0][0],o[0][1])}}function oC(t){var e,n;return e={},r("next"),r("throw",function(i){throw i}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(i,o){e[i]=t[i]?function(s){return(n=!n)?{value:ls(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function sC(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Hc=="function"?Hc(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function aC(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function lC(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function cC(t){return t&&t.__esModule?t:{default:t}}function uC(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function dC(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}const fC=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Wc},__asyncDelegator:oC,__asyncGenerator:iC,__asyncValues:sC,__await:ls,__awaiter:X9,__classPrivateFieldGet:uC,__classPrivateFieldSet:dC,__createBinding:eC,__decorate:K9,__exportStar:tC,__extends:G9,__generator:Q9,__importDefault:cC,__importStar:lC,__makeTemplateObject:aC,__metadata:J9,__param:Y9,__read:Ep,__rest:Z9,__spread:nC,__spreadArrays:rC,__values:Hc},Symbol.toStringTag,{value:"Module"})),bl=Kh(fC);var ql={},lo={},C0;function hC(){if(C0)return lo;C0=1,Object.defineProperty(lo,"__esModule",{value:!0}),lo.delay=void 0;function t(e){return new Promise(n=>{setTimeout(()=>{n(!0)},e)})}return lo.delay=t,lo}var Or={},Gl={},$r={},E0;function pC(){return E0||(E0=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.ONE_THOUSAND=$r.ONE_HUNDRED=void 0,$r.ONE_HUNDRED=100,$r.ONE_THOUSAND=1e3),$r}var Zl={},k0;function gC(){return k0||(k0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(Zl)),Zl}var D0;function kp(){return D0||(D0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=bl;e.__exportStar(pC(),t),e.__exportStar(gC(),t)}(Gl)),Gl}var S0;function mC(){if(S0)return Or;S0=1,Object.defineProperty(Or,"__esModule",{value:!0}),Or.fromMiliseconds=Or.toMiliseconds=void 0;const t=kp();function e(r){return r*t.ONE_THOUSAND}Or.toMiliseconds=e;function n(r){return Math.floor(r/t.ONE_THOUSAND)}return Or.fromMiliseconds=n,Or}var I0;function bC(){return I0||(I0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=bl;e.__exportStar(hC(),t),e.__exportStar(mC(),t)}(ql)),ql}var ui={},T0;function wC(){if(T0)return ui;T0=1,Object.defineProperty(ui,"__esModule",{value:!0}),ui.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return ui.Watch=t,ui.default=t,ui}var Kl={},co={},A0;function vC(){if(A0)return co;A0=1,Object.defineProperty(co,"__esModule",{value:!0}),co.IWatch=void 0;class t{}return co.IWatch=t,co}var x0;function yC(){return x0||(x0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),bl.__exportStar(vC(),t)}(Kl)),Kl}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=bl;e.__exportStar(bC(),t),e.__exportStar(wC(),t),e.__exportStar(yC(),t),e.__exportStar(kp(),t)})(Lr);var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.getLocalStorage=tt.getLocalStorageOrThrow=tt.getCrypto=tt.getCryptoOrThrow=Sp=tt.getLocation=tt.getLocationOrThrow=ad=tt.getNavigator=tt.getNavigatorOrThrow=Dp=tt.getDocument=tt.getDocumentOrThrow=tt.getFromWindowOrThrow=tt.getFromWindow=void 0;function oi(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}tt.getFromWindow=oi;function eo(t){const e=oi(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}tt.getFromWindowOrThrow=eo;function _C(){return eo("document")}tt.getDocumentOrThrow=_C;function CC(){return oi("document")}var Dp=tt.getDocument=CC;function EC(){return eo("navigator")}tt.getNavigatorOrThrow=EC;function kC(){return oi("navigator")}var ad=tt.getNavigator=kC;function DC(){return eo("location")}tt.getLocationOrThrow=DC;function SC(){return oi("location")}var Sp=tt.getLocation=SC;function IC(){return eo("crypto")}tt.getCryptoOrThrow=IC;function TC(){return oi("crypto")}tt.getCrypto=TC;function AC(){return eo("localStorage")}tt.getLocalStorageOrThrow=AC;function xC(){return oi("localStorage")}tt.getLocalStorage=xC;var ld={};Object.defineProperty(ld,"__esModule",{value:!0});var Ip=ld.getWindowMetadata=void 0;const P0=tt;function PC(){let t,e;try{t=P0.getDocumentOrThrow(),e=P0.getLocationOrThrow()}catch{return null}function n(){const d=t.getElementsByTagName("link"),f=[];for(let h=0;h<d.length;h++){const m=d[h],w=m.getAttribute("rel");if(w&&w.toLowerCase().indexOf("icon")>-1){const _=m.getAttribute("href");if(_)if(_.toLowerCase().indexOf("https:")===-1&&_.toLowerCase().indexOf("http:")===-1&&_.indexOf("//")!==0){let D=e.protocol+"//"+e.host;if(_.indexOf("/")===0)D+=_;else{const v=e.pathname.split("/");v.pop();const k=v.join("/");D+=k+"/"+_}f.push(D)}else if(_.indexOf("//")===0){const D=e.protocol+_;f.push(D)}else f.push(_)}}return f}function r(...d){const f=t.getElementsByTagName("meta");for(let h=0;h<f.length;h++){const m=f[h],w=["itemprop","property","name"].map(_=>m.getAttribute(_)).filter(_=>_?d.includes(_):!1);if(w.length&&w){const _=m.getAttribute("content");if(_)return _}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=t.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=e.origin,c=n();return{description:a,url:l,icons:c,name:s}}Ip=ld.getWindowMetadata=PC;var cs={},OC=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Tp="%[a-f0-9]{2}",O0=new RegExp("("+Tp+")|([^%]+?)","gi"),$0=new RegExp("("+Tp+")+","gi");function Vc(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],Vc(n),Vc(r))}function $C(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(O0)||[],n=1;n<e.length;n++)t=Vc(e,n).join(""),e=t.match(O0)||[];return t}}function NC(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=$0.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var r=$C(n[0]);r!==n[0]&&(e[n[0]]=r)}n=$0.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var RC=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return NC(t)}},BC=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},MC=function(t,e){for(var n={},r=Object.keys(t),i=Array.isArray(e),o=0;o<r.length;o++){var s=r[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(n[s]=a)}return n};(function(t){const e=OC,n=RC,r=BC,i=MC,o=v=>v==null,s=Symbol("encodeFragmentIdentifier");function a(v){switch(v.arrayFormat){case"index":return k=>(C,S)=>{const T=C.length;return S===void 0||v.skipNull&&S===null||v.skipEmptyString&&S===""?C:S===null?[...C,[u(k,v),"[",T,"]"].join("")]:[...C,[u(k,v),"[",u(T,v),"]=",u(S,v)].join("")]};case"bracket":return k=>(C,S)=>S===void 0||v.skipNull&&S===null||v.skipEmptyString&&S===""?C:S===null?[...C,[u(k,v),"[]"].join("")]:[...C,[u(k,v),"[]=",u(S,v)].join("")];case"colon-list-separator":return k=>(C,S)=>S===void 0||v.skipNull&&S===null||v.skipEmptyString&&S===""?C:S===null?[...C,[u(k,v),":list="].join("")]:[...C,[u(k,v),":list=",u(S,v)].join("")];case"comma":case"separator":case"bracket-separator":{const k=v.arrayFormat==="bracket-separator"?"[]=":"=";return C=>(S,T)=>T===void 0||v.skipNull&&T===null||v.skipEmptyString&&T===""?S:(T=T===null?"":T,S.length===0?[[u(C,v),k,u(T,v)].join("")]:[[S,u(T,v)].join(v.arrayFormatSeparator)])}default:return k=>(C,S)=>S===void 0||v.skipNull&&S===null||v.skipEmptyString&&S===""?C:S===null?[...C,u(k,v)]:[...C,[u(k,v),"=",u(S,v)].join("")]}}function l(v){let k;switch(v.arrayFormat){case"index":return(C,S,T)=>{if(k=/\[(\d*)\]$/.exec(C),C=C.replace(/\[\d*\]$/,""),!k){T[C]=S;return}T[C]===void 0&&(T[C]={}),T[C][k[1]]=S};case"bracket":return(C,S,T)=>{if(k=/(\[\])$/.exec(C),C=C.replace(/\[\]$/,""),!k){T[C]=S;return}if(T[C]===void 0){T[C]=[S];return}T[C]=[].concat(T[C],S)};case"colon-list-separator":return(C,S,T)=>{if(k=/(:list)$/.exec(C),C=C.replace(/:list$/,""),!k){T[C]=S;return}if(T[C]===void 0){T[C]=[S];return}T[C]=[].concat(T[C],S)};case"comma":case"separator":return(C,S,T)=>{const p=typeof S=="string"&&S.includes(v.arrayFormatSeparator),I=typeof S=="string"&&!p&&d(S,v).includes(v.arrayFormatSeparator);S=I?d(S,v):S;const N=p||I?S.split(v.arrayFormatSeparator).map(L=>d(L,v)):S===null?S:d(S,v);T[C]=N};case"bracket-separator":return(C,S,T)=>{const p=/(\[\])$/.test(C);if(C=C.replace(/\[\]$/,""),!p){T[C]=S&&d(S,v);return}const I=S===null?[]:S.split(v.arrayFormatSeparator).map(N=>d(N,v));if(T[C]===void 0){T[C]=I;return}T[C]=[].concat(T[C],I)};default:return(C,S,T)=>{if(T[C]===void 0){T[C]=S;return}T[C]=[].concat(T[C],S)}}}function c(v){if(typeof v!="string"||v.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(v,k){return k.encode?k.strict?e(v):encodeURIComponent(v):v}function d(v,k){return k.decode?n(v):v}function f(v){return Array.isArray(v)?v.sort():typeof v=="object"?f(Object.keys(v)).sort((k,C)=>Number(k)-Number(C)).map(k=>v[k]):v}function h(v){const k=v.indexOf("#");return k!==-1&&(v=v.slice(0,k)),v}function m(v){let k="";const C=v.indexOf("#");return C!==-1&&(k=v.slice(C)),k}function w(v){v=h(v);const k=v.indexOf("?");return k===-1?"":v.slice(k+1)}function _(v,k){return k.parseNumbers&&!Number.isNaN(Number(v))&&typeof v=="string"&&v.trim()!==""?v=Number(v):k.parseBooleans&&v!==null&&(v.toLowerCase()==="true"||v.toLowerCase()==="false")&&(v=v.toLowerCase()==="true"),v}function D(v,k){k=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},k),c(k.arrayFormatSeparator);const C=l(k),S=Object.create(null);if(typeof v!="string"||(v=v.trim().replace(/^[?#&]/,""),!v))return S;for(const T of v.split("&")){if(T==="")continue;let[p,I]=r(k.decode?T.replace(/\+/g," "):T,"=");I=I===void 0?null:["comma","separator","bracket-separator"].includes(k.arrayFormat)?I:d(I,k),C(d(p,k),I,S)}for(const T of Object.keys(S)){const p=S[T];if(typeof p=="object"&&p!==null)for(const I of Object.keys(p))p[I]=_(p[I],k);else S[T]=_(p,k)}return k.sort===!1?S:(k.sort===!0?Object.keys(S).sort():Object.keys(S).sort(k.sort)).reduce((T,p)=>{const I=S[p];return I&&typeof I=="object"&&!Array.isArray(I)?T[p]=f(I):T[p]=I,T},Object.create(null))}t.extract=w,t.parse=D,t.stringify=(v,k)=>{if(!v)return"";k=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},k),c(k.arrayFormatSeparator);const C=I=>k.skipNull&&o(v[I])||k.skipEmptyString&&v[I]==="",S=a(k),T={};for(const I of Object.keys(v))C(I)||(T[I]=v[I]);const p=Object.keys(T);return k.sort!==!1&&p.sort(k.sort),p.map(I=>{const N=v[I];return N===void 0?"":N===null?u(I,k):Array.isArray(N)?N.length===0&&k.arrayFormat==="bracket-separator"?u(I,k)+"[]":N.reduce(S(I),[]).join("&"):u(I,k)+"="+u(N,k)}).filter(I=>I.length>0).join("&")},t.parseUrl=(v,k)=>{k=Object.assign({decode:!0},k);const[C,S]=r(v,"#");return Object.assign({url:C.split("?")[0]||"",query:D(w(v),k)},k&&k.parseFragmentIdentifier&&S?{fragmentIdentifier:d(S,k)}:{})},t.stringifyUrl=(v,k)=>{k=Object.assign({encode:!0,strict:!0,[s]:!0},k);const C=h(v.url).split("?")[0]||"",S=t.extract(v.url),T=t.parse(S,{sort:!1}),p=Object.assign(T,v.query);let I=t.stringify(p,k);I&&(I=`?${I}`);let N=m(v.url);return v.fragmentIdentifier&&(N=`#${k[s]?u(v.fragmentIdentifier,k):v.fragmentIdentifier}`),`${C}${I}${N}`},t.pick=(v,k,C)=>{C=Object.assign({parseFragmentIdentifier:!0,[s]:!1},C);const{url:S,query:T,fragmentIdentifier:p}=t.parseUrl(v,C);return t.stringifyUrl({url:S,query:i(T,k),fragmentIdentifier:p},C)},t.exclude=(v,k,C)=>{const S=Array.isArray(k)?T=>!k.includes(T):(T,p)=>!k(T,p);return t.pick(v,S,C)}})(cs);const jC={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},UC=":";function WD(t){const[e,n]=t.split(UC);return{namespace:e,reference:n}}function HD(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const i=t[r];n.push(...i.accounts)}),n}function Ap(t,e){return t.includes(":")?[t]:e.chains||[]}const xp="base10",Jt="base16",qc="base64pad",cd="utf8",Pp=0,Ts=1,LC=0,N0=1,Gc=12,ud=32;function VD(){const t=od.generateKeyPair();return{privateKey:En(t.secretKey,Jt),publicKey:En(t.publicKey,Jt)}}function qD(){const t=dl.randomBytes(ud);return En(t,Jt)}function GD(t,e){const n=od.sharedKey(wn(t,Jt),wn(e,Jt),!0),r=new I7(gl.SHA256,n).expand(ud);return En(r,Jt)}function ZD(t){const e=gl.hash(wn(t,Jt));return En(e,Jt)}function KD(t){const e=gl.hash(wn(t,cd));return En(e,Jt)}function zC(t){return wn(`${t}`,xp)}function wl(t){return Number(En(t,xp))}function YD(t){const e=zC(typeof t.type<"u"?t.type:Pp);if(wl(e)===Ts&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?wn(t.senderPublicKey,Jt):void 0,r=typeof t.iv<"u"?wn(t.iv,Jt):dl.randomBytes(Gc),i=new rd.ChaCha20Poly1305(wn(t.symKey,Jt)).seal(r,wn(t.message,cd));return FC({type:e,sealed:i,iv:r,senderPublicKey:n})}function JD(t){const e=new rd.ChaCha20Poly1305(wn(t.symKey,Jt)),{sealed:n,iv:r}=Op(t.encoded),i=e.open(r,n);if(i===null)throw new Error("Failed to decrypt");return En(i,cd)}function FC(t){if(wl(t.type)===Ts){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return En(g0([t.type,t.senderPublicKey,t.iv,t.sealed]),qc)}return En(g0([t.type,t.iv,t.sealed]),qc)}function Op(t){const e=wn(t,qc),n=e.slice(LC,N0),r=N0;if(wl(n)===Ts){const a=r+ud,l=a+Gc,c=e.slice(r,a),u=e.slice(a,l),d=e.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+Gc,o=e.slice(r,i),s=e.slice(i);return{type:n,sealed:s,iv:o}}function XD(t,e){const n=Op(t);return WC({type:wl(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?En(n.senderPublicKey,Jt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function WC(t){const e=(t==null?void 0:t.type)||Pp;if(e===Ts){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function QD(t){return t.type===Ts&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var HC=Object.defineProperty,R0=Object.getOwnPropertySymbols,VC=Object.prototype.hasOwnProperty,qC=Object.prototype.propertyIsEnumerable,B0=(t,e,n)=>e in t?HC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M0=(t,e)=>{for(var n in e||(e={}))VC.call(e,n)&&B0(t,n,e[n]);if(R0)for(var n of R0(e))qC.call(e,n)&&B0(t,n,e[n]);return t};const GC="ReactNative",nn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},ZC="js";function $p(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function vl(){return!Dp()&&!!ad()&&navigator.product===GC}function dd(){return!$p()&&!!ad()}function As(){return vl()?nn.reactNative:$p()?nn.node:dd()?nn.browser:nn.unknown}function KC(t,e){let n=cs.parse(t);return n=M0(M0({},n),e),t=cs.stringify(n),t}function eS(){return Ip()||{name:"",description:"",url:"",icons:[""]}}function YC(){if(As()===nn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=F9();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function JC(){var t;const e=As();return e===nn.browser?[e,((t=Sp())==null?void 0:t.host)||"unknown"].join(":"):e}function XC(t,e,n){const r=YC(),i=JC();return[[t,e].join("-"),[ZC,n].join("-"),r,i].join("/")}function tS({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=XC(t,e,r),c={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},u=KC(a[1]||"",c);return a[0]+"?"+u}function Mr(t,e){return t.filter(n=>e.includes(n)).length===t.length}function nS(t){return Object.fromEntries(t.entries())}function rS(t){return new Map(Object.entries(t))}function iS(t=Lr.FIVE_MINUTES,e){const n=Lr.toMiliseconds(t||Lr.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},n),r=s,i=a})}}function oS(t,e,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),e);try{const s=await t;r(s)}catch(s){i(s)}clearTimeout(o)})}function Np(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function sS(t){return Np("topic",t)}function aS(t){return Np("id",t)}function lS(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function cS(t,e){return Lr.fromMiliseconds((e||Date.now())+Lr.toMiliseconds(t))}function uS(t){return Date.now()>=Lr.toMiliseconds(t)}function dS(t,e){return`${t}${e?`:${e}`:""}`}function Yl(t=[],e=[]){return[...new Set([...t,...e])]}async function fS({id:t,topic:e,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=As();s===nn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===nn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const QC="irn";function hS(t){return(t==null?void 0:t.relay)||{protocol:QC}}function pS(t){const e=jC[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var eE=Object.defineProperty,j0=Object.getOwnPropertySymbols,tE=Object.prototype.hasOwnProperty,nE=Object.prototype.propertyIsEnumerable,U0=(t,e,n)=>e in t?eE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,rE=(t,e)=>{for(var n in e||(e={}))tE.call(e,n)&&U0(t,n,e[n]);if(j0)for(var n of j0(e))nE.call(e,n)&&U0(t,n,e[n]);return t};function iE(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=t[i];n[o]=s}}),n}function gS(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n).split("@"),o=typeof n<"u"?t.substring(n):"",s=cs.parse(o);return{protocol:r,topic:oE(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:iE(s)}}function oE(t){return t.startsWith("//")?t.substring(2):t}function sE(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(i=>{const o=n+e+i;t[i]&&(r[o]=t[i])}),r}function mS(t){return`${t.protocol}:${t.topic}@${t.version}?`+cs.stringify(rE({symKey:t.symKey},sE(t.relay)))}var aE=Object.defineProperty,lE=Object.defineProperties,cE=Object.getOwnPropertyDescriptors,L0=Object.getOwnPropertySymbols,uE=Object.prototype.hasOwnProperty,dE=Object.prototype.propertyIsEnumerable,z0=(t,e,n)=>e in t?aE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fE=(t,e)=>{for(var n in e||(e={}))uE.call(e,n)&&z0(t,n,e[n]);if(L0)for(var n of L0(e))dE.call(e,n)&&z0(t,n,e[n]);return t},hE=(t,e)=>lE(t,cE(e));function to(t){const e=[];return t.forEach(n=>{const[r,i]=n.split(":");e.push(`${r}:${i}`)}),e}function pE(t){const e=[];return Object.values(t).forEach(n=>{e.push(...to(n.accounts))}),e}function gE(t,e){const n=[];return Object.values(t).forEach(r=>{to(r.accounts).includes(e)&&n.push(...r.methods)}),n}function mE(t,e){const n=[];return Object.values(t).forEach(r=>{to(r.accounts).includes(e)&&n.push(...r.events)}),n}function bS(t,e){const n=SE(t,e);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(t))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function Rp(t){return t.includes(":")}function bE(t){return Rp(t)?t.split(":")[0]:t}function Bp(t){var e,n,r;const i={};if(!fd(t))return i;for(const[o,s]of Object.entries(t)){const a=Rp(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=bE(o);i[u]=hE(fE({},i[u]),{chains:Yl(a,(e=i[u])==null?void 0:e.chains),methods:Yl(l,(n=i[u])==null?void 0:n.methods),events:Yl(c,(r=i[u])==null?void 0:r.events)})}return i}const wE={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},vE={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function sr(t,e){const{message:n,code:r}=vE[t];return{message:e?`${n} ${e}`:n,code:r}}function Li(t,e){const{message:n,code:r}=wE[t];return{message:e?`${n} ${e}`:n,code:r}}function yl(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function fd(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function zr(t){return typeof t>"u"}function mn(t,e){return e&&zr(t)?!0:typeof t=="string"&&!!t.trim().length}function hd(t,e){return e&&zr(t)?!0:typeof t=="number"&&!isNaN(t)}function wS(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),i=Object.keys(n);let o=!0;return Mr(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=t.namespaces[s],u=to(a),d=n[s];(!Mr(Ap(s,d),u)||!Mr(d.methods,l)||!Mr(d.events,c))&&(o=!1)}),o):!1}function ka(t){return mn(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function yE(t){if(mn(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&ka(n)}}return!1}function vS(t){if(mn(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function yS(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function _S(t){return t==null?void 0:t.topic}function CS(t,e){let n=null;return mn(t==null?void 0:t.publicKey,!1)||(n=sr("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function F0(t){let e=!0;return yl(t)?t.length&&(e=t.every(n=>mn(n,!1))):e=!1,e}function _E(t,e,n){let r=null;return yl(e)&&e.length?e.forEach(i=>{r||ka(i)||(r=Li("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):ka(t)||(r=Li("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function CE(t,e,n){let r=null;return Object.entries(t).forEach(([i,o])=>{if(r)return;const s=_E(i,Ap(i,o),`${e} ${n}`);s&&(r=s)}),r}function EE(t,e){let n=null;return yl(t)?t.forEach(r=>{n||yE(r)||(n=Li("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Li("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function kE(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=EE(r==null?void 0:r.accounts,`${e} namespace`);i&&(n=i)}),n}function DE(t,e){let n=null;return F0(t==null?void 0:t.methods)?F0(t==null?void 0:t.events)||(n=Li("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=Li("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function Mp(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const i=DE(r,`${e}, namespace`);i&&(n=i)}),n}function ES(t,e,n){let r=null;if(t&&fd(t)){const i=Mp(t,e);i&&(r=i);const o=CE(t,e,n);o&&(r=o)}else r=sr("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function SE(t,e){let n=null;if(t&&fd(t)){const r=Mp(t,e);r&&(n=r);const i=kE(t,e);i&&(n=i)}else n=sr("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function IE(t){return mn(t.protocol,!0)}function kS(t,e){let n=!1;return e&&!t?n=!0:t&&yl(t)&&t.length&&t.forEach(r=>{n=IE(r)}),n}function DS(t){return typeof t=="number"}function SS(t){return typeof t<"u"&&typeof t!==null}function IS(t){return!(!t||typeof t!="object"||!t.code||!hd(t.code,!1)||!t.message||!mn(t.message,!1))}function TS(t){return!(zr(t)||!mn(t.method,!1))}function AS(t){return!(zr(t)||zr(t.result)&&zr(t.error)||!hd(t.id,!1)||!mn(t.jsonrpc,!1))}function xS(t){return!(zr(t)||!mn(t.name,!1))}function PS(t,e){return!(!ka(e)||!pE(t).includes(e))}function OS(t,e,n){return mn(n,!1)?gE(t,e).includes(n):!1}function $S(t,e,n){return mn(n,!1)?mE(t,e).includes(n):!1}function NS(t,e,n){let r=null;const i=TE(t),o=AE(e),s=Object.keys(i),a=Object.keys(o),l=W0(Object.keys(t)),c=W0(Object.keys(e)),u=l.filter(d=>!c.includes(d));return u.length&&(r=sr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),Mr(s,a)||(r=sr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(d=>{if(!d.includes(":")||r)return;const f=to(e[d].accounts);f.includes(d)||(r=sr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${f.toString()}`))}),s.forEach(d=>{r||(Mr(i[d].methods,o[d].methods)?Mr(i[d].events,o[d].events)||(r=sr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=sr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function TE(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(i=>{e[i]={methods:t[n].methods,events:t[n].events}})}),e}function W0(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function AE(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=to(t[n].accounts);r==null||r.forEach(i=>{e[i]={accounts:t[n].accounts.filter(o=>o.includes(`${i}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function RS(t,e){return hd(t,!1)&&t<=e.max&&t>=e.min}function BS(){const t=As();return new Promise(e=>{switch(t){case nn.browser:e(xE());break;case nn.reactNative:e(PE());break;case nn.node:e(OE());break;default:e(!0)}})}function xE(){return dd()&&(navigator==null?void 0:navigator.onLine)}async function PE(){if(vl()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function OE(){return!0}function MS(t){switch(As()){case nn.browser:$E(t);break;case nn.reactNative:NE(t);break}}function $E(t){!vl()&&dd()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function NE(t){vl()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const Jl={};class jS{static get(e){return Jl[e]}static set(e,n){Jl[e]=n}static delete(e){delete Jl[e]}}var jp="eip155",RE="store",Up="requestedChains",Zc="wallet_addEthereumChain",at,ko,Vs,Kc,pd,Lp,qs,Yc,Jc,zp,Da,gd,pi,go,Sa,md,Ia,bd,Ta,wd,Fp=class extends Ou{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),Zt(this,Vs),Zt(this,pd),Zt(this,qs),Zt(this,Jc),Zt(this,Da),Zt(this,pi),Zt(this,Sa),Zt(this,Ia),Zt(this,Ta),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Zt(this,at,void 0),Zt(this,ko,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:vn(e[0])})},this.onChainChanged=e=>{const n=Number(e),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{Ct(this,pi,go).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},Ct(this,Vs,Kc).call(this)}async connect({chainId:t,pairingTopic:e}={}){var n,r,i,o,s;try{let a=t;if(!a){const m=(n=this.storage)==null?void 0:n.getItem(RE),w=(o=(i=(r=m==null?void 0:m.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;w&&!this.isChainUnsupported(w)?a=w:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();Ct(this,Jc,zp).call(this);const c=Ct(this,qs,Yc).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const m=this.chains.filter(w=>w.id!==a).map(w=>w.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:e,chains:[a],optionalChains:m.length?m:void 0}),Ct(this,pi,go).call(this,this.chains.map(({id:w})=>w))}const u=await l.enable(),d=vn(u[0]),f=await this.getChainId(),h=this.isChainUnsupported(f);return{account:d,chain:{id:f,unsupported:h}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Kt(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{Ct(this,Da,gd).call(this),Ct(this,pi,go).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return vn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return Je(this,at)||await Ct(this,Vs,Kc).call(this),t&&await this.switchChain(t),Je(this,at)}async getWalletClient({chainId:t}={}){const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),r=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Au({account:n,chain:r,transport:ku(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=Ct(this,qs,Yc).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var n,r;const e=this.chains.find(i=>i.id===t);if(!e)throw new Gn(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=Ct(this,Ia,bd).call(this),s=Ct(this,Ta,wd).call(this);if(!o.includes(t)&&s.includes(Zc)){await i.request({method:Zc,params:[{chainId:Re(e.id),blockExplorerUrls:[(r=(n=e.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const l=Ct(this,Sa,md).call(this);l.push(t),Ct(this,pi,go).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Re(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Kt(i):new Gn(i)}}};at=new WeakMap;ko=new WeakMap;Vs=new WeakSet;Kc=async function(){return!Je(this,ko)&&typeof window<"u"&&Fo(this,ko,Ct(this,pd,Lp).call(this)),Je(this,ko)};pd=new WeakSet;Lp=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:n}=await _i(()=>import("./index.es.94fa5a02.js"),["./index.es.94fa5a02.js","./preload-helper.a4192956.js","./events.f1d5a790.js"],import.meta.url),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:c}=this.options;Fo(this,at,await t.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:e,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:l,relayUrl:c}))}};qs=new WeakSet;Yc=function(){if(Ct(this,Ta,wd).call(this).includes(Zc)||!this.options.isNewChainsStale)return!1;const e=Ct(this,Sa,md).call(this),n=this.chains.map(({id:i})=>i),r=Ct(this,Ia,bd).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>e.includes(i))};Jc=new WeakSet;zp=function(){Je(this,at)&&(Ct(this,Da,gd).call(this),Je(this,at).on("accountsChanged",this.onAccountsChanged),Je(this,at).on("chainChanged",this.onChainChanged),Je(this,at).on("disconnect",this.onDisconnect),Je(this,at).on("session_delete",this.onDisconnect),Je(this,at).on("display_uri",this.onDisplayUri),Je(this,at).on("connect",this.onConnect))};Da=new WeakSet;gd=function(){Je(this,at)&&(Je(this,at).removeListener("accountsChanged",this.onAccountsChanged),Je(this,at).removeListener("chainChanged",this.onChainChanged),Je(this,at).removeListener("disconnect",this.onDisconnect),Je(this,at).removeListener("session_delete",this.onDisconnect),Je(this,at).removeListener("display_uri",this.onDisplayUri),Je(this,at).removeListener("connect",this.onConnect))};pi=new WeakSet;go=function(t){var e;(e=this.storage)==null||e.setItem(Up,t)};Sa=new WeakSet;md=function(){var t;return((t=this.storage)==null?void 0:t.getItem(Up))??[]};Ia=new WeakSet;bd=function(){var r,i,o;if(!Je(this,at))return[];const t=(r=Je(this,at).session)==null?void 0:r.namespaces;return t?((o=(i=Bp(t)[jp])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Ta=new WeakSet;wd=function(){var r,i;if(!Je(this,at))return[];const t=(r=Je(this,at).session)==null?void 0:r.namespaces;return t?((i=Bp(t)[jp])==null?void 0:i.methods)??[]:[]};function Wp(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const BE=Se.getBlockchainApiUrl();function Hp({projectId:t}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${BE}/v1/?chainId=${Le.EIP155}:${n.id}&projectId=${t}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function Vp({projectId:t,chains:e,metadata:n}){const{publicClient:r}=Xh(e,[Hp({projectId:t}),Wp()]);return e1({autoConnect:!0,connectors:[new Fp({chains:e,options:{projectId:t,showQrModal:!1,metadata:n}}),new rp({chains:e}),new Ga({chains:e,options:{shimDisconnect:!0}}),new sp({chains:e,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}function vd(t){return new U_({...t,_sdkVersion:`html-wagmi-${Le.VERSION}`})}function ME(t){let e;return{c(){e=B("w3m-button")},l(n){e=M(n,"W3M-BUTTON",{}),j(e).forEach(A)},m(n,r){Q(n,e,r)},p:q,i:q,o:q,d(n){n&&A(e)}}}const H0="35139a84c84ac9501435c94ab1a8252a";function jE(t){const e={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},n=[Ur,eu],r=Vp({chains:n,projectId:H0,metadata:e});return vd({wagmiConfig:r,projectId:H0,chains:n,themeMode:"light"}),[]}class UE extends Oe{constructor(e){super(),$e(this,e,jE,ME,Pe,{})}}function LE(t){let e;return{c(){e=rt("Connect")},l(n){e=it(n,"Connect")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function zE(t){let e,n='<img class="w-10" src="/test-logo.png" alt=""/>';return{c(){e=B("div"),e.innerHTML=n,this.h()},l(r){e=M(r,"DIV",{slot:!0,class:!0,"data-svelte-h":!0}),yn(e)!=="svelte-1xrmulg"&&(e.innerHTML=n),this.h()},h(){P(e,"slot","left"),P(e,"class","mr-1 shrink-0")},m(r,i){Q(r,e,i)},p:q,d(r){r&&A(e)}}}function FE(t){let e,n,r,i;return e=new K0({props:{$$slots:{default:[LE]},$$scope:{ctx:t}}}),e.$on("click",t[1]),r=new Gs({props:{injClass:"maxs-w-[1050px]",title:"0xabc...124f@Endurance",left:"slot",subTitle:t[0],$$slots:{left:[zE]},$$scope:{ctx:t}}}),{c(){we(e.$$.fragment),n=ae(),we(r.$$.fragment)},l(o){ve(e.$$.fragment,o),n=le(o),ve(r.$$.fragment,o)},m(o,s){ye(e,o,s),Q(o,n,s),ye(r,o,s),i=!0},p(o,[s]){const a={};s&128&&(a.$$scope={dirty:s,ctx:o}),e.$set(a);const l={};s&1&&(l.subTitle=o[0]),s&128&&(l.$$scope={dirty:s,ctx:o}),r.$set(l)},i(o){i||(J(e.$$.fragment,o),J(r.$$.fragment,o),i=!0)},o(o){X(e.$$.fragment,o),X(r.$$.fragment,o),i=!1},d(o){o&&A(n),_e(e,o),_e(r,o)}}}const V0="35139a84c84ac9501435c94ab1a8252a";function WE(t,e,n){const r={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},i=[Ur,eu],o=Vp({chains:i,projectId:V0,metadata:r}),s=vd({wagmiConfig:o,projectId:V0,chains:i,termsConditionsUrl:"https://www.mytermsandconditions.com",privacyPolicyUrl:"https://www.myprivacypolicy.com",customWallets:[{id:"myCustomWallet",name:"My Custom Wallet",homepage:"www.mycustomwallet.com",image_url:"https://particle.network/_next/static/media/logo-5.61d54210.png",mobile_link:"mobile_link",app_store:"app_store",play_store:"play_store"}],featuredWalletIds:["1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"]});function a(){Ho().isConnected?Nu():s.open()}let l="";return Xc(()=>{Ru(c=>{n(0,l=c.address??""),c.isConnected})}),[l,a]}class HE extends Oe{constructor(e){super(),$e(this,e,WE,FE,Pe,{})}}function VE({rpc:t}){return function(e){const n=t(e);return!n||n.http===""?null:{chain:{...e,rpcUrls:{...e.rpcUrls,default:{http:[n.http]}}},rpcUrls:{http:[n.http],webSocket:n.webSocket?[n.webSocket]:void 0}}}}function qE(t){let e;return{c(){e=rt("Connect")},l(n){e=it(n,"Connect")},m(n,r){Q(n,e,r)},d(n){n&&A(e)}}}function GE(t){let e,n='<img class="w-10" src="/test-logo.png" alt=""/>';return{c(){e=B("div"),e.innerHTML=n,this.h()},l(r){e=M(r,"DIV",{slot:!0,class:!0,"data-svelte-h":!0}),yn(e)!=="svelte-1xrmulg"&&(e.innerHTML=n),this.h()},h(){P(e,"slot","left"),P(e,"class","mr-1 shrink-0")},m(r,i){Q(r,e,i)},p:q,d(r){r&&A(e)}}}function ZE(t){let e,n,r,i;return e=new K0({props:{$$slots:{default:[qE]},$$scope:{ctx:t}}}),e.$on("click",t[1]),r=new Gs({props:{injClass:"maxs-w-[1050px]",title:"0xabc...124f@Endurance",left:"slot",subTitle:t[0],$$slots:{left:[GE]},$$scope:{ctx:t}}}),{c(){we(e.$$.fragment),n=ae(),we(r.$$.fragment)},l(o){ve(e.$$.fragment,o),n=le(o),ve(r.$$.fragment,o)},m(o,s){ye(e,o,s),Q(o,n,s),ye(r,o,s),i=!0},p(o,[s]){const a={};s&256&&(a.$$scope={dirty:s,ctx:o}),e.$set(a);const l={};s&1&&(l.subTitle=o[0]),s&256&&(l.$$scope={dirty:s,ctx:o}),r.$set(l)},i(o){i||(J(e.$$.fragment,o),J(r.$$.fragment,o),i=!0)},o(o){X(e.$$.fragment,o),X(r.$$.fragment,o),i=!1},d(o){o&&A(n),_e(e,o),_e(r,o)}}}const Xl="35139a84c84ac9501435c94ab1a8252a";function KE(t,e,n){const{chains:r,publicClient:i}=Xh([Ur,eu],[VE({rpc:u=>(console.log(u),u.id==1?{http:"https://core.gashawk.io/rpc"}:{http:""})}),Hp({projectId:Xl}),Wp()]),o={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},s=e1({autoConnect:!0,connectors:[new Fp({chains:r,options:{projectId:Xl,showQrModal:!1,metadata:o}}),new rp({chains:r}),new Ga({chains:r,options:{shimDisconnect:!0}}),new sp({chains:r,options:{appName:o.name}})],publicClient:i}),a=vd({wagmiConfig:s,projectId:Xl,chains:r});function l(){Ho().isConnected?Nu():a.open()}let c="";return Xc(()=>{Ru(u=>{n(0,c=u.address??""),u.isConnected})}),[c,l]}class YE extends Oe{constructor(e){super(),$e(this,e,KE,ZE,Pe,{})}}function JE(t){let e,n='<img class="w-10" src="/test-logo.png" alt=""/>';return{c(){e=B("div"),e.innerHTML=n,this.h()},l(r){e=M(r,"DIV",{slot:!0,class:!0,"data-svelte-h":!0}),yn(e)!=="svelte-mwnkym"&&(e.innerHTML=n),this.h()},h(){P(e,"slot","left"),P(e,"class","mr-1 shrink-0")},m(r,i){Q(r,e,i)},p:q,d(r){r&&A(e)}}}function XE(t){let e,n='<div class="w-full px-4 h-full bg-white rounded-md">sf</div>';return{c(){e=B("div"),e.innerHTML=n,this.h()},l(r){e=M(r,"DIV",{class:!0,"data-svelte-h":!0}),yn(e)!=="svelte-17rivi8"&&(e.innerHTML=n),this.h()},h(){P(e,"class","w-full h-full -ml-4 px-2")},m(r,i){Q(r,e,i)},p:q,d(r){r&&A(e)}}}function QE(t){let e,n,r,i,o,s='<img alt="fusionist logo" src="/test-logo.png" class="w-12"/>',a,l,c,u,d,f,h,m,w,_='<div class="flex justify-start items-center"><img alt="fusionist logo" src="/test-logo.png" class="w-8"/> <span class="ml-4 text-black">Funionist Wallet</span></div>',D,v,k,C,S,T,p,I,N,L,W,F,pe,ee,Z,H,V,K,ie;return l=new sf({props:{injClass:"flex-1",vertical:!0,labels:t[0]}}),d=new fb({props:{title:"设置",left:"none"}}),k=new Gs({props:{injClass:"maxs-w-[1050px]",title:"0xabc...124f@Endurance",left:"slot",subTitle:"0x1bc...288df",$$slots:{left:[JE]},$$scope:{ctx:t}}}),S=new UE({}),p=new HE({}),N=new YE({}),F=new Hb({props:{love:!0,tab:{labels:t[1]},placement:"l",injClass:"",$$slots:{default:[XE,({active:ne})=>({2:ne}),({active:ne})=>ne?4:0]},$$scope:{ctx:t}}}),Z=new Gs({props:{title:"About Fusionist Wallet",detail:"v0.1.0",right:"none",clickAll:!1}}),K=new sf({props:{labels:t[0]}}),{c(){e=B("div"),n=B("div"),r=B("div"),i=B("div"),o=B("div"),o.innerHTML=s,a=ae(),we(l.$$.fragment),c=ae(),u=B("div"),we(d.$$.fragment),f=ae(),h=B("div"),m=B("div"),w=B("div"),w.innerHTML=_,D=ae(),v=B("div"),we(k.$$.fragment),C=ae(),we(S.$$.fragment),T=ae(),we(p.$$.fragment),I=ae(),we(N.$$.fragment),L=ae(),W=B("div"),we(F.$$.fragment),pe=ae(),ee=B("div"),we(Z.$$.fragment),H=ae(),V=B("div"),we(K.$$.fragment),this.h()},l(ne){e=M(ne,"DIV",{class:!0});var oe=j(e);n=M(oe,"DIV",{class:!0});var ue=j(n);r=M(ue,"DIV",{class:!0});var re=j(r);i=M(re,"DIV",{class:!0});var Y=j(i);o=M(Y,"DIV",{class:!0,"data-svelte-h":!0}),yn(o)!=="svelte-1t6353k"&&(o.innerHTML=s),a=le(Y),ve(l.$$.fragment,Y),Y.forEach(A),c=le(re),u=M(re,"DIV",{class:!0});var fe=j(u);ve(d.$$.fragment,fe),f=le(fe),h=M(fe,"DIV",{class:!0});var Ce=j(h);m=M(Ce,"DIV",{});var me=j(m);w=M(me,"DIV",{class:!0,"data-svelte-h":!0}),yn(w)!=="svelte-i70bpt"&&(w.innerHTML=_),D=le(me),v=M(me,"DIV",{class:!0});var Ee=j(v);ve(k.$$.fragment,Ee),Ee.forEach(A),C=le(me),ve(S.$$.fragment,me),T=le(me),ve(p.$$.fragment,me),I=le(me),ve(N.$$.fragment,me),L=le(me),W=M(me,"DIV",{class:!0});var Te=j(W);ve(F.$$.fragment,Te),Te.forEach(A),pe=le(me),ee=M(me,"DIV",{class:!0});var De=j(ee);ve(Z.$$.fragment,De),De.forEach(A),me.forEach(A),Ce.forEach(A),fe.forEach(A),re.forEach(A),H=le(ue),V=M(ue,"DIV",{class:!0});var xe=j(V);ve(K.$$.fragment,xe),xe.forEach(A),ue.forEach(A),oe.forEach(A),this.h()},h(){P(o,"class","px-4 flex justify-center mb-4"),P(i,"class","w-24 hidden sm:block bg-white dark:bg-gray-800 py-4"),P(w,"class","sm:hidden hidden w-full px-4 py-2"),P(v,"class","sm:px-2"),P(W,"class","hidden sm:block 2max-w-[1050px]"),P(ee,"class","sm:hidden"),P(h,"class","grid sm:grid-cols-1 grid-cols-1"),P(u,"class","flex-1 bg-bluse-200"),P(r,"class","flex flex-1"),P(V,"class","w-full sm:hidden"),P(n,"class","flex flex-col sm:max-w-[1000px] md:max-w-[1400px] lg:max-w-[1600px] w-full h-screen sm:h-[90vh] rounded-lg bg-blue-50"),P(e,"class","flex justify-center min-h-screen justify-center items-center bg-gray-50")},m(ne,oe){Q(ne,e,oe),R(e,n),R(n,r),R(r,i),R(i,o),R(i,a),ye(l,i,null),R(r,c),R(r,u),ye(d,u,null),R(u,f),R(u,h),R(h,m),R(m,w),R(m,D),R(m,v),ye(k,v,null),R(m,C),ye(S,m,null),R(m,T),ye(p,m,null),R(m,I),ye(N,m,null),R(m,L),R(m,W),ye(F,W,null),R(m,pe),R(m,ee),ye(Z,ee,null),R(n,H),R(n,V),ye(K,V,null),ie=!0},p(ne,[oe]){const ue={};oe&8&&(ue.$$scope={dirty:oe,ctx:ne}),k.$set(ue);const re={};oe&8&&(re.$$scope={dirty:oe,ctx:ne}),F.$set(re)},i(ne){ie||(J(l.$$.fragment,ne),J(d.$$.fragment,ne),J(k.$$.fragment,ne),J(S.$$.fragment,ne),J(p.$$.fragment,ne),J(N.$$.fragment,ne),J(F.$$.fragment,ne),J(Z.$$.fragment,ne),J(K.$$.fragment,ne),ie=!0)},o(ne){X(l.$$.fragment,ne),X(d.$$.fragment,ne),X(k.$$.fragment,ne),X(S.$$.fragment,ne),X(p.$$.fragment,ne),X(N.$$.fragment,ne),X(F.$$.fragment,ne),X(Z.$$.fragment,ne),X(K.$$.fragment,ne),ie=!1},d(ne){ne&&A(e),_e(l),_e(d),_e(k),_e(S),_e(p),_e(N),_e(F),_e(Z),_e(K)}}}function ek(t){return[[{text:"首页",icon:{name:"ri-home-3-line",size:20},activeIcon:{name:"ri-home-3-fill",size:20}},{text:"设置",icon:{name:"ri-account-circle-line",size:20},activeIcon:{name:"ri-account-circle-fill",size:20}}],[{text:"Dark"},{text:"Language"},{text:"Network"},{text:"About"}]]}class tk extends Oe{constructor(e){super(),$e(this,e,ek,QE,Pe,{})}}function nk(t){let e,n;return e=new tk({}),{c(){we(e.$$.fragment)},l(r){ve(e.$$.fragment,r)},m(r,i){ye(e,r,i),n=!0},p:q,i(r){n||(J(e.$$.fragment,r),n=!0)},o(r){X(e.$$.fragment,r),n=!1},d(r){_e(e,r)}}}class US extends Oe{constructor(e){super(),$e(this,e,null,nk,Pe,{})}}export{O5 as $,Kn as A,Xo as B,fn as C,$n as D,Dc as E,hn as F,Qo as G,fa as H,es as I,Gr as J,ha as K,vr as L,xc as M,Kr as N,Nn as O,da as P,ns as Q,Yn as R,Bi as S,mi as T,et as U,qr as V,Cc as W,Vt as X,Xt as Y,ma as Z,v5 as _,O4 as a,lS as a$,$5 as a0,N5 as a1,Bh as a2,w5 as a3,zs as a4,qa as a5,qt as a6,Dr as a7,ak as a8,se as a9,VD as aA,qD as aB,GD as aC,ZD as aD,WC as aE,QD as aF,YD as aG,XD as aH,JD as aI,Op as aJ,wl as aK,Jt as aL,oS as aM,BS as aN,tS as aO,MS as aP,Ts as aQ,cS as aR,mS as aS,gS as aT,iS as aU,dS as aV,Li as aW,uS as aX,SS as aY,vS as aZ,mn as a_,Pa as aa,Ht as ab,Ci as ac,So as ad,D3 as ae,za as af,qn as ag,us as ah,wo as ai,On as aj,ge as ak,_s as al,Kh as am,bl as an,Lr as ao,Ue as ap,Dn as aq,dl as ar,wn as as,En as at,g0 as au,xu as av,zr as aw,yS as ax,_S as ay,sr as az,Ii as b,sS as b0,aS as b1,vl as b2,dd as b3,$p as b4,nS as b5,rS as b6,KD as b7,hS as b8,pS as b9,HD as bA,O7 as bB,ip as bC,G9 as bD,US as bE,yl as ba,eS as bb,fd as bc,bS as bd,fS as be,wS as bf,jS as bg,kS as bh,ES as bi,SE as bj,NS as bk,IS as bl,IE as bm,CS as bn,PS as bo,TS as bp,OS as bq,RS as br,AS as bs,xS as bt,$S as bu,DS as bv,bE as bw,Rp as bx,Yl as by,WD as bz,ce as c,Ko as d,Ec as e,Yo as f,ra as g,Ti as h,P4 as i,Ai as j,ia as k,Zn as l,oa as m,xi as n,mr as o,sa as p,br as q,wr as r,u1 as s,Jo as t,Pi as u,la as v,Cn as w,Zr as x,ca as y,ua as z};
