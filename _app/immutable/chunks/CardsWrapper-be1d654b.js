import{S as K,i as N,s as O,k as v,a as R,q as T,l as m,m as g,h,c as z,r as W,I as A,n as u,b as B,D as f,u as M,B as S,f as V,g as Q,d as X,t as U,F as Y,w as Z,x,y as ee,z as te}from"./index-a870c061.js";function se(o){let t,a,e,l,n,d,r,w,_,s,c,i=`Title:  ${o[0].snippet.title}`,y,I,E,D=`Description:  ${o[0].snippet.description}`,b,C;return{c(){t=v("div"),a=v("a"),e=v("figure"),l=v("picture"),n=v("img"),_=R(),s=v("div"),c=v("h5"),y=T(i),I=R(),E=v("h5"),b=T(D),this.h()},l(p){t=m(p,"DIV",{class:!0});var $=g(t);a=m($,"A",{href:!0,class:!0});var k=g(a);e=m(k,"FIGURE",{class:!0,"data-category":!0});var F=g(e);l=m(F,"PICTURE",{});var G=g(l);n=m(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(h),F.forEach(h),_=z(k),s=m(k,"DIV",{class:!0});var q=g(s);c=m(q,"H5",{class:!0});var H=g(c);y=W(H,i),H.forEach(h),I=z(q),E=m(q,"H5",{class:!0});var L=g(E);b=W(L,D),L.forEach(h),q.forEach(h),k.forEach(h),$.forEach(h),this.h()},h(){A(n.src,d=o[0].snippet.thumbnails.high.url)||u(n,"src",d),u(n,"alt",r=o[0].snippet.title),u(n,"class","cards__item__img svelte-1s501y3"),u(e,"class","cards__item__pic-wrap svelte-1s501y3"),u(e,"data-category",w=o[1](o[0])),u(c,"class","cards__item__text svelte-1s501y3"),u(E,"class","cards__item__text svelte-1s501y3"),u(s,"class","cards__item__info svelte-1s501y3"),u(a,"href",C=`https://www.youtube.com/watch?v=${o[0].id.videoId}`),u(a,"class","cards__item__link svelte-1s501y3"),u(t,"class","cards__item svelte-1s501y3")},m(p,$){B(p,t,$),f(t,a),f(a,e),f(e,l),f(l,n),f(a,_),f(a,s),f(s,c),f(c,y),f(s,I),f(s,E),f(E,b)},p(p,[$]){$&1&&!A(n.src,d=p[0].snippet.thumbnails.high.url)&&u(n,"src",d),$&1&&r!==(r=p[0].snippet.title)&&u(n,"alt",r),$&1&&w!==(w=p[1](p[0]))&&u(e,"data-category",w),$&1&&i!==(i=`Title:  ${p[0].snippet.title}`)&&M(y,i),$&1&&D!==(D=`Description:  ${p[0].snippet.description}`)&&M(b,D),$&1&&C!==(C=`https://www.youtube.com/watch?v=${p[0].id.videoId}`)&&u(a,"href",C)},i:S,o:S,d(p){p&&h(t)}}}function ae(o,t,a){let{card:e}=t;const l=n=>new Date(n.snippet.publishTime).toDateString();return o.$$set=n=>{"card"in n&&a(0,e=n.card)},[e,l]}class le extends K{constructor(t){super(),N(this,t,ae,se,O,{card:0})}}function P(o,t,a){const e=o.slice();return e[1]=t[a],e}function j(o){let t,a;return{c(){t=v("li"),a=T("Waiting for content...")},l(e){t=m(e,"LI",{});var l=g(t);a=W(l,"Waiting for content..."),l.forEach(h)},m(e,l){B(e,t,l),f(t,a)},p:S,d(e){e&&h(t)}}}function J(o){let t,a;return t=new le({props:{card:o[1]}}),{c(){Z(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,l){ee(t,e,l),a=!0},p(e,l){const n={};l&1&&(n.card=e[1]),t.$set(n)},i(e){a||(V(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){te(t,e)}}}function re(o){let t,a,e,l,n,d=o[0],r=[];for(let s=0;s<d.length;s+=1)r[s]=J(P(o,d,s));const w=s=>U(r[s],1,1,()=>{r[s]=null});let _=null;return d.length||(_=j()),{c(){t=v("div"),a=v("div"),e=v("div"),l=v("ul");for(let s=0;s<r.length;s+=1)r[s].c();_&&_.c(),this.h()},l(s){t=m(s,"DIV",{class:!0});var c=g(t);a=m(c,"DIV",{class:!0});var i=g(a);e=m(i,"DIV",{class:!0});var y=g(e);l=m(y,"UL",{class:!0});var I=g(l);for(let E=0;E<r.length;E+=1)r[E].l(I);_&&_.l(I),I.forEach(h),y.forEach(h),i.forEach(h),c.forEach(h),this.h()},h(){u(l,"class","cards__items svelte-1qn97ou"),u(e,"class","cards__wrapper"),u(a,"class","cards__container svelte-1qn97ou"),u(t,"class","cards svelte-1qn97ou")},m(s,c){B(s,t,c),f(t,a),f(a,e),f(e,l);for(let i=0;i<r.length;i+=1)r[i].m(l,null);_&&_.m(l,null),n=!0},p(s,[c]){if(c&1){d=s[0];let i;for(i=0;i<d.length;i+=1){const y=P(s,d,i);r[i]?(r[i].p(y,c),V(r[i],1)):(r[i]=J(y),r[i].c(),V(r[i],1),r[i].m(l,null))}for(Q(),i=d.length;i<r.length;i+=1)w(i);X(),!d.length&&_?_.p(s,c):d.length?_&&(_.d(1),_=null):(_=j(),_.c(),_.m(l,null))}},i(s){if(!n){for(let c=0;c<d.length;c+=1)V(r[c]);n=!0}},o(s){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)U(r[c]);n=!1},d(s){s&&h(t),Y(r,s),_&&_.d()}}}function ie(o,t,a){let{cards:e=[]}=t;return o.$$set=l=>{"cards"in l&&a(0,e=l.cards)},[e]}class ce extends K{constructor(t){super(),N(this,t,ie,re,O,{cards:0})}}export{ce as C};
