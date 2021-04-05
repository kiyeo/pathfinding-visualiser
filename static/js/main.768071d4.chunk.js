(this["webpackJsonpalgorithm-visualiser"]=this["webpackJsonpalgorithm-visualiser"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(8),a=n.n(i),u=(n(14),n(4)),s=n(2),l=n(3),d=(n(15),Object(o.forwardRef)((function(e,t){var n=e.row,o=e.col,c=e.isWall,i=e.isStart,a=e.isFinish,u=e.handleMouseDownForNode,s=e.handleMouseEnterForNode,l=(e.handleTouchMoveForNode,e.handleMouseUpForNode),d=e.displayWeight,h=e.isShowWeight,f=a?"node-finish":i?"node-start":c?"node-wall":"";return Object(r.jsx)("div",{id:"".concat(n,"-").concat(o),onPointerDown:function(){u(n,o)},onPointerEnter:function(){s(n,o)},onPointerUp:function(){l()},onDragStart:function(e){e.preventDefault(),e.stopPropagation()},ref:t,className:"node ".concat(f),children:i||a||d===1/0||h&&!c?"":d})})));n(16);function h(e){var t=e.type,n=e.handleFunction,o=e.disable,c=e.title,i=e.disabledTitle,a=t.replace("-"," ").replace(/(^\w{1})|(\s{1}\w{1})/g,(function(e){return e.toUpperCase()})),u="restore"===t&&o?i:"random-weights"!==t||o?"random-weights"===t&&o?i:"":c;return Object(r.jsx)("button",{shape:"round",title:u,className:t,disabled:o,onClick:function(){return n()},children:a})}var f=n(5);function v(e,t,n,r){n.isVisited=!1,n.isWall=!1;var o=p(n,e),c=0,i=[];t.distance=0,t.cumulativeWeight=0,t.isWall=!1;for(var a=function(e){var t,n=[],r=Object(f.a)(e);try{for(r.s();!(t=r.n()).done;){var o,c=t.value,i=Object(f.a)(c);try{for(i.s();!(o=i.n()).done;){var a=o.value;n.push(a)}}catch(u){i.e(u)}finally{i.f()}}}catch(u){r.e(u)}finally{r.f()}return n}(e);;){g(a);var u=a.shift();if(!u.isWall){if(u.distance===1/0)return i;if(u.isVisited=!0,i.push(u),r&&o.length>1){var s,l=Object(f.a)(o);try{for(l.s();!(s=l.n()).done;){var d=s.value,h=d.row,v=d.col;u.row===h&&u.col===v&&u.isVisited&&c++}}catch(b){l.e(b)}finally{l.f()}if(c===o.length)return o.filter((function(e){return e.isVisited=!1})),i}else if(u===n)return i;w(u,e,r)}}}function g(e){e.sort((function(e,t){return e.distance-t.distance}))}function w(e,t,n){var r,o=p(e,t),c=Object(f.a)(o);try{for(c.s();!(r=c.n()).done;){var i=r.value;n?(i.distace===1/0||i.distance>i.displayWeight+e.cumulativeWeight)&&(i.distance=i.displayWeight+e.cumulativeWeight,i.cumulativeWeight=i.distance,i.previousNode=e):(i.distance=e.distance+1,i.previousNode=e)}}catch(a){c.e(a)}finally{c.f()}}function p(e,t){for(var n=[],r=e.row,o=e.col,c=[[0,1],[1,0],[0,-1],[-1,0]],i=t.length,a=t[0].length,u=0;u<c.length;u++){var s=c[u],l=r+s[0],d=o-s[1];l>=0&&l<i&&d>=0&&d<a&&!t[l][d].isWall&&n.push(t[l][d])}return n.filter((function(e){return!e.isVisited}))}n(17);var b=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=function(){for(var n=[],r=0;r<20;r++){for(var o=[],i=0;i<50;i++)o.push(c(r,i)),10===r&&15===i&&(e.current={row:r,col:i}),10===r&&35===i&&(t.current={row:r,col:i});n.push(o)}return n},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{row:10,col:15},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{row:10,col:35};return{row:e,col:t,isWall:n,isStart:e===o.row&&t===o.col,isFinish:e===c.row&&t===c.col,isVisited:!1,distance:1/0,previousNode:null,displayWeight:r,cumulativeWeight:r,isShowWeight:!1}},i=Object(o.useState)((function(){return n()})),a=Object(l.a)(i,2),f=a[0],g=a[1],w=Object(o.useState)(!1),p=Object(l.a)(w,2),b=p[0],j=p[1],m=Object(o.useState)(!1),O=Object(l.a)(m,2),W=O[0],y=O[1],N=Object(o.useRef)([]),F=Object(o.useRef)([]),T=Object(o.useRef)(!1),x=Object(o.useRef)(!1),S=Object(o.useRef)([]),M=Object(o.useState)(!1),R=Object(l.a)(M,2),V=R[0],C=R[1],D=Object(o.useState)(!1),E=Object(l.a)(D,2),P=E[0],U=E[1],k=Object(o.useState)(!1),A=Object(l.a)(k,2),L=A[0],B=A[1],I=function(){C(!1),U(!1),B(!1)},J=function(e,t,n){var r=e.slice(),o=r[t][n],c=Object(s.a)(Object(s.a)({},o),{},{isWall:!o.isWall});r[t][n]=c,g(r)},q=function(n,r,o){var c=n.slice(),i=c[r][o],a=P?e.current:t.current,l=P?"isStart":"isFinish",d=Object(s.a)(Object(s.a)({},i),{},Object(u.a)({isWall:i.isWall},l,!0)),h=c[a.row][a.col],f=Object(s.a)(Object(s.a)({},h),{},Object(u.a)({displayWeight:null===h.displayWeight&&x.current?Math.ceil(10*Math.random()):h.displayWeight},l,!1));c[r][o]=d,c[a.row][a.col]=f,P?e.current={row:r,col:o}:t.current={row:r,col:o},g(c)},z=function(e){for(var t=0,n=function(n){t=n,S.current.push(setTimeout((function(){var t=e[n];F.current["".concat(t.row,"-").concat(t.col)].className="node node-shortest-path"}),50*n))},r=0;r<e.length;r++)n(r);S.current.push(setTimeout((function(){return j(!1)}),50*t)),y(!0)},G=function(){W&&H(),j(!0);var n=f[e.current.row][e.current.col],r=f[t.current.row][t.current.col];N.current=v(f,n,r,x.current);var o=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(r);!function(e,t){for(var n=function(n){if(n===e.length)return S.current.push(setTimeout((function(){z(t)}),5*n)),{v:void 0};S.current.push(setTimeout((function(){var t=e[n],r=F.current["".concat(t.row,"-").concat(t.col)];x.current&&(r.innerText="".concat(t.cumulativeWeight)),r.className="node node-visited"}),5*n))},r=0;r<=e.length;r++){var o=n(r);if("object"===typeof o)return o.v}}(N.current,o)},H=function(){for(var n=W?e.current:{row:10,col:15},r=W?t.current:{row:10,col:35},o=0;o<N.current.length;o++){var c=N.current[o],i=F.current["".concat(c.row,"-").concat(c.col)];c.row===n.row&&c.col===n.col?(i.innerText="",i.className="node node-start"):c.row===r.row&&c.col===r.col?(i.innerText="",i.className="node node-finish"):((b||W)&&x.current?i.innerText="".concat(c.displayWeight):i.innerText="",i.className="node")}},K=function(n,r){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];x.current=r;for(var i=[],a=e.current.row,u=e.current.col,s=t.current.row,l=t.current.col,d=0;d<20;d++){for(var h=[],f=0;f<50;f++){var v=F.current["".concat(d,"-").concat(f)];d===a&&f===u?(h.push(c(a,u,!1,null,{row:a,col:u},{row:s,col:l})),v.innerText="",v.className="node node-start"):d===s&&f===l?(h.push(c(s,l,!1,null,{row:a,col:u},{row:s,col:l})),v.innerText="",v.className="node node-finish"):(h.push(c(d,f,n[d][f].isWall,o?n[d][f].displayWeight:Math.random()>.5?Math.ceil(10*Math.random()):1,{row:a,col:u},{row:s,col:l})),v.className=n[d][f].isWall?"node node-wall":"node")}i.push(h)}g(i)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"button-container",style:{margin:"3rem auto"},children:[Object(r.jsx)(h,{type:"reset",handleFunction:function(){return function(){x.current=!1,S.current.forEach((function(e){clearTimeout(e)})),T.current=!0,j(!1),C(!1),y(!1);var e=n();g(e),H()}()}}),Object(r.jsx)(h,{type:"restore",handleFunction:function(){return function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];S.current.forEach((function(e){clearTimeout(e)})),j(!1),C(!1),y(!1),H(),K(f,x.current,e)}(f)},disable:!(b||W),disabledTitle:"Restores state before visualisation"}),Object(r.jsx)(h,{type:"random-weights",handleFunction:function(){return K(f,!0)},disable:b||W,title:"Assigns random weights to each node",disabledTitle:"Can only reassign random weights on restore"}),Object(r.jsx)(h,{type:"visualise",handleFunction:function(){return G()},disable:b})]}),Object(r.jsx)("div",{className:"grid",onMouseLeave:function(){I()},style:{margin:"auto",display:"grid",gridTemplateColumns:"repeat(".concat(50,", ").concat(2,"rem)"),gridTemplateRows:"repeat(".concat(20,", ").concat(2,"rem)"),width:"".concat(100,"rem"),touchAction:"none"},children:f.map((function(n){return n.map((function(n){var o=n.row,c=n.col,i=n.isWall,a=n.isStart,u=n.isFinish,s=n.isVisited,l=n.displayWeight,h=n.cumulativeWeight,v=n.isShowWeight;return Object(r.jsx)(d,{ref:function(e){return F.current["".concat(o,"-").concat(c)]=e},handleMouseDownForNode:function(n,r){return function(n,r){C(!0),n!==e.current.row||r!==e.current.col||b||W?n!==t.current.row||r!==t.current.col||b||W?b||W||J(f,n,r):B(!0):U(!0)}(n,r)},handleMouseEnterForNode:function(n,r){return function(n,r){(V||b)&&(P&&(n!==t.current.row||r!==t.current.col)||L&&(n!==e.current.row||r!==e.current.col)?q(f,n,r):b||W||J(f,n,r))}(n,r)},handleMouseUpForNode:function(){return I()},row:o,col:c,isWall:i,isStart:a,isFinish:u,isVisited:s,displayWeight:l,cumulativeWeight:h,isShowWeight:v},"".concat(o,"-").concat(c))}))}))})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),j()}],[[18,1,2]]]);
//# sourceMappingURL=main.768071d4.chunk.js.map