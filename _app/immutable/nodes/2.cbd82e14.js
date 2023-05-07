import{S as $e,i as ke,s as ze,k as u,q as h,l as i,m as N,r as p,h as g,b as Re,E as a,u as Se,F as ve,o as Me,t as De,w as ce,L as qe,a as Q,y as Ne,c as j,z as Ae,n as f,A as Ee,M as S,N as y,O as Oe,g as Be,d as Ce,B as Pe,P as Le}from"../chunks/index.a9d806a6.js";import{M as Te}from"../chunks/MathQuill.f5dbaa15.js";function Ue(l){let e,s;return{c(){e=u("span"),s=h(l[0])},l(r){e=i(r,"SPAN",{});var o=N(e);s=p(o,l[0]),o.forEach(g)},m(r,o){Re(r,e,o),a(e,s),l[2](e)},p(r,[o]){o&1&&Se(s,r[0])},i:ve,o:ve,d(r){r&&g(e),l[2](null)}}}function Qe(l,e,s){let r,o,m,{latex:d=""}=e;Me(()=>{o=globalThis.MathQuill.getInterface(2),d&&v()});function v(){if(d==""){m==null||m.revert();return}m&&m.revert(),m=o==null?void 0:o.StaticMath(r)}function _(c){ce[c?"unshift":"push"](()=>{r=c,s(1,r)})}return l.$$set=c=>{"latex"in c&&s(0,d=c.latex)},l.$$.update=()=>{l.$$.dirty&1&&d!==void 0&&De().then(v)},[d,r,_]}class je extends $e{constructor(e){super(),ke(this,e,Qe,Ue,ze,{latex:0})}}function ye(l){let e,s,r,o,m,d,v,_,c,w,I,A,M,P,z,F,H,G,q,J,K,V,W,E,X,Y,O,Z,x,$,ee,te,T,ae,le,B,ne,se,C,re,k,oe,R,fe="<MathQuill config={({ autoCommands, autoOperatorNames })} bind:latex={latex}/><br/>",ue,D,ie,me;function we(n){l[5](n)}function Ie(n){l[6](n)}let he={config:{autoCommands:l[1],autoOperatorNames:l[2]},noBorderOutline:l[3]};return l[4]!==void 0&&(he.focused=l[4]),l[0]!==void 0&&(he.latex=l[0]),q=new Te({props:he}),ce.push(()=>qe(q,"focused",we)),ce.push(()=>qe(q,"latex",Ie)),B=new je({props:{latex:l[0]}}),{c(){e=u("main"),s=u("h1"),r=h("svelte-mathquill "),o=u("span"),m=h("mathquill wrapper for svelte"),d=u("br"),v=Q(),_=u("span"),c=u("a"),w=h("github"),I=h(" | "),A=u("a"),M=h("npm"),P=Q(),z=u("code"),F=h("npm i -D svelte-mathquill"),H=u("br"),G=Q(),Ne(q.$$.fragment),V=u("br"),W=h(`

	Auto Commands: `),E=u("input"),X=u("br"),Y=h(`
	Auto Operator Names: `),O=u("input"),Z=u("br"),x=h(`
	No outline / border: `),$=u("input"),ee=u("br"),te=h(`
	Is focused: `),T=h(l[4]),ae=u("br"),le=h(`
	Static: `),Ne(B.$$.fragment),ne=u("br"),se=h(`
	Latex: `),C=u("input"),re=Q(),k=u("p"),oe=h("Code: "),R=u("code"),ue=h(fe),this.h()},l(n){e=i(n,"MAIN",{class:!0});var t=N(e);s=i(t,"H1",{class:!0});var b=N(s);r=p(b,"svelte-mathquill "),o=i(b,"SPAN",{class:!0});var L=N(o);m=p(L,"mathquill wrapper for svelte"),L.forEach(g),d=i(b,"BR",{}),v=j(b),_=i(b,"SPAN",{class:!0});var U=N(_);c=i(U,"A",{href:!0,class:!0});var de=N(c);w=p(de,"github"),de.forEach(g),I=p(U," | "),A=i(U,"A",{href:!0,class:!0});var _e=N(A);M=p(_e,"npm"),_e.forEach(g),U.forEach(g),b.forEach(g),P=j(t),z=i(t,"CODE",{class:!0});var be=N(z);F=p(be,"npm i -D svelte-mathquill"),be.forEach(g),H=i(t,"BR",{}),G=j(t),Ae(q.$$.fragment,t),V=i(t,"BR",{}),W=p(t,`

	Auto Commands: `),E=i(t,"INPUT",{placeholder:!0}),X=i(t,"BR",{}),Y=p(t,`
	Auto Operator Names: `),O=i(t,"INPUT",{placeholder:!0}),Z=i(t,"BR",{}),x=p(t,`
	No outline / border: `),$=i(t,"INPUT",{type:!0}),ee=i(t,"BR",{}),te=p(t,`
	Is focused: `),T=p(t,l[4]),ae=i(t,"BR",{}),le=p(t,`
	Static: `),Ae(B.$$.fragment,t),ne=i(t,"BR",{}),se=p(t,`
	Latex: `),C=i(t,"INPUT",{placeholder:!0}),re=j(t),k=i(t,"P",{class:!0});var pe=N(k);oe=p(pe,"Code: "),R=i(pe,"CODE",{class:!0});var ge=N(R);ue=p(ge,fe),ge.forEach(g),pe.forEach(g),t.forEach(g),this.h()},h(){f(o,"class","svelte-hhze9r"),f(c,"href","https://github.com/LeoDog896/svelte-mathquill"),f(c,"class","svelte-hhze9r"),f(A,"href","https://www.npmjs.com/package/svelte-mathquill"),f(A,"class","svelte-hhze9r"),f(_,"class","svelte-hhze9r"),f(s,"class","svelte-hhze9r"),f(z,"class","svelte-hhze9r"),f(E,"placeholder","Auto Commands"),f(O,"placeholder","Auto Operator Names"),f($,"type","checkbox"),f(C,"placeholder","Result (editable) Latex"),f(R,"class","svelte-hhze9r"),f(k,"class","py-4"),f(e,"class","svelte-hhze9r")},m(n,t){Re(n,e,t),a(e,s),a(s,r),a(s,o),a(o,m),a(s,d),a(s,v),a(s,_),a(_,c),a(c,w),a(_,I),a(_,A),a(A,M),a(e,P),a(e,z),a(z,F),a(e,H),a(e,G),Ee(q,e,null),a(e,V),a(e,W),a(e,E),S(E,l[1]),a(e,X),a(e,Y),a(e,O),S(O,l[2]),a(e,Z),a(e,x),a(e,$),$.checked=l[3],a(e,ee),a(e,te),a(e,T),a(e,ae),a(e,le),Ee(B,e,null),a(e,ne),a(e,se),a(e,C),S(C,l[0]),a(e,re),a(e,k),a(k,oe),a(k,R),a(R,ue),D=!0,ie||(me=[y(E,"input",l[7]),y(O,"input",l[8]),y($,"change",l[9]),y(C,"input",l[10])],ie=!0)},p(n,[t]){const b={};t&6&&(b.config={autoCommands:n[1],autoOperatorNames:n[2]}),t&8&&(b.noBorderOutline=n[3]),!J&&t&16&&(J=!0,b.focused=n[4],Oe(()=>J=!1)),!K&&t&1&&(K=!0,b.latex=n[0],Oe(()=>K=!1)),q.$set(b),t&2&&E.value!==n[1]&&S(E,n[1]),t&4&&O.value!==n[2]&&S(O,n[2]),t&8&&($.checked=n[3]),(!D||t&16)&&Se(T,n[4]);const L={};t&1&&(L.latex=n[0]),B.$set(L),t&1&&C.value!==n[0]&&S(C,n[0])},i(n){D||(Be(q.$$.fragment,n),Be(B.$$.fragment,n),D=!0)},o(n){Ce(q.$$.fragment,n),Ce(B.$$.fragment,n),D=!1},d(n){n&&g(e),Pe(q),Pe(B),ie=!1,Le(me)}}}function Fe(l,e,s){let r="x + \\sqrt{5}",o="pi theta sqrt sum",m="sin cos tan arcsin arccos arctan",d=!1,v=!1;function _(P){v=P,s(4,v)}function c(P){r=P,s(0,r)}function w(){o=this.value,s(1,o)}function I(){m=this.value,s(2,m)}function A(){d=this.checked,s(3,d)}function M(){r=this.value,s(0,r)}return[r,o,m,d,v,_,c,w,I,A,M]}class Je extends $e{constructor(e){super(),ke(this,e,Fe,ye,ze,{})}}export{Je as component};
