"use strict";(self.webpackChunkfrontend_crypto=self.webpackChunkfrontend_crypto||[]).push([[786],{27786:function(n,t,i){i.r(t),i.d(t,{default:function(){return sn}});var e=i(1413),o=i(74165),r=i(15861),a=i(43144),c=i(15671),s=i(97326),l=i(60136),f=i(29388),u=i(70885),d=i(82644),v=i(62810),p=i(21009),y=i(12290),h=i(49615);i(82379),i(5524),i(4819),i(84471),i(93721),i(82514),i(57381),i(97143);function x(n,t){var i=t.from,e=t.to,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=getComputedStyle(n),a="none"===r.transform?"":r.transform,c=r.transformOrigin.split(" ").map(parseFloat),s=(0,u.Z)(c,2),l=s[0],f=s[1],v=i.left+i.width*l/e.width-(e.left+l),p=i.top+i.height*f/e.height-(e.top+f),y=o.delay,h=void 0===y?0:y,x=o.duration,m=void 0===x?function(n){return 120*Math.sqrt(n)}:x,b=o.easing,g=void 0===b?d.ae:b;return{delay:h,duration:(0,d.Z)(m)?m(Math.sqrt(v*v+p*p)):m,easing:g,css:function(n,t){var o=t*v,r=t*p,c=n+t*i.width/e.width,s=n+t*i.height/e.height;return"transform: ".concat(a," translate(").concat(o,"px, ").concat(r,"px) scale(").concat(c,", ").concat(s,");")}}}function m(n){(0,d.a)(n,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function b(n){var t,i;return{c:function(){t=(0,d.n)("div"),(0,d.r)(t,"class","border svelte-13cuwwo"),(0,d.r)(t,"style",i="\n    width: ".concat(n[2]-2*n[3],"px; \n    height: ").concat(n[2]-2*n[3],"px; \n    border-color: var(").concat(n[1],"); \n    padding: ").concat(n[3],"px; \n    background-color: ").concat(n[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))},m:function(i,e){(0,d.b)(i,t,e),t.innerHTML=n[0]},p:function(n,e){var o=(0,u.Z)(e,1)[0];1&o&&(t.innerHTML=n[0]),30&o&&i!==(i="\n    width: ".concat(n[2]-2*n[3],"px; \n    height: ").concat(n[2]-2*n[3],"px; \n    border-color: var(").concat(n[1],"); \n    padding: ").concat(n[3],"px; \n    background-color: ").concat(n[4],";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  "))&&(0,d.r)(t,"style",i)},i:d.M,o:d.M,d:function(n){n&&(0,d.h)(t)}}}function g(n,t,i){var e=t.icon,o=t.borderColorVar,r=t.size,a=t.padding,c=void 0===a?0:a,s=t.background,l=void 0===s?"transparent":s;return n.$$set=function(n){"icon"in n&&i(0,e=n.icon),"borderColorVar"in n&&i(1,o=n.borderColorVar),"size"in n&&i(2,r=n.size),"padding"in n&&i(3,c=n.padding),"background"in n&&i(4,l=n.background)},[e,o,r,c,l]}var w=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,g,b,d.s,{icon:0,borderColorVar:1,size:2,padding:3,background:4},m),e}return(0,a.Z)(i)}(d.S);function k(n){(0,d.a)(n,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function $(n){var t,i,e,o,r,a,c,s,l=d.af[n[1].type].eventIcon+"",f=!n[1].id.includes("customNotification")&&!n[1].id.includes("preflight"),u="pending"===n[1].type&&Z(),v=f&&C(n);return{c:function(){t=(0,d.n)("div"),u&&u.c(),i=(0,d.p)(),e=(0,d.n)("div"),o=(0,d.n)("div"),c=(0,d.p)(),v&&v.c(),(0,d.r)(o,"class",r=(0,d.R)("notification-icon flex items-center justify-center ".concat("pending"===n[1].type?"pending-icon":""))+" svelte-jvic9v"),(0,d.r)(e,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),(0,d.r)(e,"style",a="background:".concat(d.af[n[1].type].backgroundColor,"; color: ").concat(d.af[n[1].type].iconColor||"","; ").concat("pending"===n[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(d.af[n[1].type].borderColor),"; ")),(0,d.r)(t,"class","relative")},m:function(n,r){(0,d.b)(n,t,r),u&&u.m(t,null),(0,d.v)(t,i),(0,d.v)(t,e),(0,d.v)(e,o),o.innerHTML=l,(0,d.v)(t,c),v&&v.m(t,null),s=!0},p:function(n,c){"pending"===n[1].type?u||((u=Z()).c(),u.m(t,i)):u&&(u.d(1),u=null),(!s||2&c)&&l!==(l=d.af[n[1].type].eventIcon+"")&&(o.innerHTML=l),(!s||2&c&&r!==(r=(0,d.R)("notification-icon flex items-center justify-center ".concat("pending"===n[1].type?"pending-icon":""))+" svelte-jvic9v"))&&(0,d.r)(o,"class",r),(!s||2&c&&a!==(a="background:".concat(d.af[n[1].type].backgroundColor,"; color: ").concat(d.af[n[1].type].iconColor||"","; ").concat("pending"===n[1].type?"height: 28px; width: 28px; margin: 2px;":"border: 2px solid ".concat(d.af[n[1].type].borderColor),"; ")))&&(0,d.r)(e,"style",a),2&c&&(f=!n[1].id.includes("customNotification")&&!n[1].id.includes("preflight")),f?v?(v.p(n,c),2&c&&(0,d.t)(v,1)):((v=C(n)).c(),(0,d.t)(v,1),v.m(t,null)):v&&((0,d.g)(),(0,d.d)(v,1,1,(function(){v=null})),(0,d.c)())},i:function(n){s||((0,d.t)(v),s=!0)},o:function(n){(0,d.d)(v),s=!1},d:function(n){n&&(0,d.h)(t),u&&u.d(),v&&v.d()}}}function Z(n){var t;return{c:function(){t=(0,d.n)("div"),(0,d.r)(t,"class","border-action absolute svelte-jvic9v")},m:function(n,i){(0,d.b)(n,t,i)},d:function(n){n&&(0,d.h)(t)}}}function C(n){var t,i,e;return i=new w({props:{icon:n[0].icon,size:16,background:n[0].color,borderColorVar:"--onboard-gray-600, var(--gray-600)",padding:3}}),{c:function(){t=(0,d.n)("div"),(0,d.o)(i.$$.fragment),(0,d.r)(t,"class","absolute chain-icon-container svelte-jvic9v")},m:function(n,o){(0,d.b)(n,t,o),(0,d.w)(i,t,null),e=!0},p:function(n,t){var e={};1&t&&(e.icon=n[0].icon),1&t&&(e.background=n[0].color),i.$set(e)},i:function(n){e||((0,d.t)(i.$$.fragment,n),e=!0)},o:function(n){(0,d.d)(i.$$.fragment,n),e=!1},d:function(n){n&&(0,d.h)(t),(0,d.A)(i)}}}function j(n){var t,i,e=n[1].type&&$(n);return{c:function(){e&&e.c(),t=(0,d.e)()},m:function(n,o){e&&e.m(n,o),(0,d.b)(n,t,o),i=!0},p:function(n,i){var o=(0,u.Z)(i,1)[0];n[1].type?e?(e.p(n,o),2&o&&(0,d.t)(e,1)):((e=$(n)).c(),(0,d.t)(e,1),e.m(t.parentNode,t)):e&&((0,d.g)(),(0,d.d)(e,1,1,(function(){e=null})),(0,d.c)())},i:function(n){i||((0,d.t)(e),i=!0)},o:function(n){(0,d.d)(e),i=!1},d:function(n){e&&e.d(n),n&&(0,d.h)(t)}}}function z(n,t,i){var e=t.chainStyles,o=void 0===e?d._:e,r=t.notification;return n.$$set=function(n){"chainStyles"in n&&i(0,o=n.chainStyles),"notification"in n&&i(1,r=n.notification)},[o,r]}var L=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,z,j,d.s,{chainStyles:0,notification:1},k),e}return(0,a.Z)(i)}(d.S);function M(n){(0,d.a)(n,"svelte-pm7idu","div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}")}function P(n){var t,i,e,o,r=n[2](n[1]-n[0])+"";return{c:function(){t=(0,d.q)("-\n    "),i=(0,d.n)("span"),e=(0,d.q)(r),o=(0,d.q)("\n    ago"),(0,d.r)(i,"class","svelte-pm7idu")},m:function(n,r){(0,d.b)(n,t,r),(0,d.b)(n,i,r),(0,d.v)(i,e),(0,d.b)(n,o,r)},p:function(n,t){3&t&&r!==(r=n[2](n[1]-n[0])+"")&&(0,d.z)(e,r)},d:function(n){n&&(0,d.h)(t),n&&(0,d.h)(i),n&&(0,d.h)(o)}}}function T(n){var t,i=n[0]&&P(n);return{c:function(){t=(0,d.n)("div"),i&&i.c(),(0,d.r)(t,"class","time svelte-pm7idu")},m:function(n,e){(0,d.b)(n,t,e),i&&i.m(t,null)},p:function(n,e){var o=(0,u.Z)(e,1)[0];n[0]?i?i.p(n,o):((i=P(n)).c(),i.m(t,null)):i&&(i.d(1),i=null)},i:d.M,o:d.M,d:function(n){n&&(0,d.h)(t),i&&i.d()}}}function S(n,t,i){var e,o;(0,d.j)(n,v._,(function(n){return i(3,e=n)})),(0,d.j)(n,v.SP,(function(n){return i(4,o=n)}));var r=t.startTime;var a=Date.now(),c=setInterval((function(){i(1,a=Date.now())}),1e3);return(0,d.ad)((function(){clearInterval(c)})),n.$$set=function(n){"startTime"in n&&i(0,r=n.startTime)},[r,a,function(n){var t=Math.floor(n/1e3),i=t<0?0:t;return i>=60?"".concat(Math.floor(i/60).toLocaleString(o)," ").concat(e("notify.time.minutes")):"".concat(i.toLocaleString(o)," ").concat(e("notify.time.seconds"))}]}var R=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,S,T,d.s,{startTime:0},M),e}return(0,a.Z)(i)}(d.S);function q(n){(0,d.a)(n,"svelte-gv6x72","div.notify-transaction-data.svelte-gv6x72{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-gv6x72{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-gv6x72{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-gv6x72{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-gv6x72{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-gv6x72{color:var(\n      --notify-onboard-transaction-status,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}")}function N(n){var t,i,e,o;function r(n,t){return n[0].link?D:O}var a=r(n),c=a(n);return e=new R({props:{startTime:n[0].startTime}}),{c:function(){t=(0,d.n)("span"),c.c(),i=(0,d.p)(),(0,d.o)(e.$$.fragment),(0,d.r)(t,"class","hash-time svelte-gv6x72")},m:function(n,r){(0,d.b)(n,t,r),c.m(t,null),(0,d.v)(t,i),(0,d.w)(e,t,null),o=!0},p:function(n,o){a===(a=r(n))&&c?c.p(n,o):(c.d(1),(c=a(n))&&(c.c(),c.m(t,i)));var s={};1&o&&(s.startTime=n[0].startTime),e.$set(s)},i:function(n){o||((0,d.t)(e.$$.fragment,n),o=!0)},o:function(n){(0,d.d)(e.$$.fragment,n),o=!1},d:function(n){n&&(0,d.h)(t),c.d(),(0,d.A)(e)}}}function O(n){var t,i,e=(0,d.m)(n[0].id)+"";return{c:function(){t=(0,d.n)("div"),i=(0,d.q)(e),(0,d.r)(t,"class","address-hash svelte-gv6x72")},m:function(n,e){(0,d.b)(n,t,e),(0,d.v)(t,i)},p:function(n,t){1&t&&e!==(e=(0,d.m)(n[0].id)+"")&&(0,d.z)(i,e)},d:function(n){n&&(0,d.h)(t)}}}function D(n){var t,i,e,o=(0,d.m)(n[0].id)+"";return{c:function(){t=(0,d.n)("a"),i=(0,d.q)(o),(0,d.r)(t,"class","address-hash svelte-gv6x72"),(0,d.r)(t,"href",e=n[0].link),(0,d.r)(t,"target","_blank"),(0,d.r)(t,"rel","noreferrer noopener")},m:function(n,e){(0,d.b)(n,t,e),(0,d.v)(t,i)},p:function(n,r){1&r&&o!==(o=(0,d.m)(n[0].id)+"")&&(0,d.z)(i,o),1&r&&e!==(e=n[0].link)&&(0,d.r)(t,"href",e)},d:function(n){n&&(0,d.h)(t)}}}function E(n){var t,i,e,o,r,a=n[0].message+"",c=n[0].id&&!n[0].id.includes("customNotification")&&!n[0].id.includes("preflight"),s=c&&N(n);return{c:function(){t=(0,d.n)("div"),i=(0,d.n)("span"),e=(0,d.q)(a),o=(0,d.p)(),s&&s.c(),(0,d.r)(i,"class","transaction-status svelte-gv6x72"),(0,d.r)(t,"class","flex flex-column notify-transaction-data svelte-gv6x72")},m:function(n,a){(0,d.b)(n,t,a),(0,d.v)(t,i),(0,d.v)(i,e),(0,d.v)(t,o),s&&s.m(t,null),r=!0},p:function(n,i){var o=(0,u.Z)(i,1)[0];(!r||1&o)&&a!==(a=n[0].message+"")&&(0,d.z)(e,a),1&o&&(c=n[0].id&&!n[0].id.includes("customNotification")&&!n[0].id.includes("preflight")),c?s?(s.p(n,o),1&o&&(0,d.t)(s,1)):((s=N(n)).c(),(0,d.t)(s,1),s.m(t,null)):s&&((0,d.g)(),(0,d.d)(s,1,1,(function(){s=null})),(0,d.c)())},i:function(n){r||((0,d.t)(s),r=!0)},o:function(n){(0,d.d)(s),r=!1},d:function(n){n&&(0,d.h)(t),s&&s.d()}}}function I(n,t,i){var e=t.notification;return n.$$set=function(n){"notification"in n&&i(0,e=n.notification)},[e]}var _=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,I,E,d.s,{notification:0},q),e}return(0,a.Z)(i)}(d.S),H=["txPool"],K=["main","matic-main"],V=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],A=function(n){return H.includes(n)},F=function(n){return K.includes(n)},B=function(n){return n&&V.includes(n.label)};function G(n){return J.apply(this,arguments)}function J(){return(J=(0,r.Z)((0,o.Z)().mark((function n(t){var i,r,a,c,s,l,f,v,p,y,x,m,b,g,w,k,$,Z,C,j,z,L,M;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.type,r=t.wallet,a=t.transaction,c=a.from,s=a.input,l=a.value,f=a.to,v=a.nonce,p=a.gas,y=a.network,x=d.ag[y],m=d.a4.get().notify.replacement.gasPriceProbability,b=d.a8.gas,g=d.a8.apiKey,n.next=7,b.get({chains:[d.ag[y]],endpoint:"blockPrices",apiKey:g});case 7:return w=n.sent,k=(0,u.Z)(w,1),$=k[0],Z=$.blockPrices[0].estimatedPrices.find((function(n){return n.confidence===("speedup"===i?m.speedup:m.cancel)})),C=Z.maxFeePerGas,j=Z.maxPriorityFeePerGas,z=(0,d.ah)(C),L=(0,d.ah)(j),M="0x"===s?{}:{data:s},n.abrupt("return",r.provider.request({method:"eth_sendTransaction",params:[(0,e.Z)({type:"0x2",from:c,to:"cancel"===i?c:f,chainId:parseInt(x),value:"".concat(h.O$.from(l).toHexString()),nonce:(0,d.ai)(v),gasLimit:(0,d.ai)(p),maxFeePerGas:z,maxPriorityFeePerGas:L},M)]}));case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function U(n){(0,d.a)(n,"svelte-4xaywn",".bn-notify-notification.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;background:var(\n      --notify-onboard-background,\n      var(--onboard-gray-600, var(--gray-600))\n    );border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );display:flex;flex-direction:column;position:relative;overflow:hidden}.bn-notify-notification-inner.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{padding:0.75rem}.bn-notify-notification.svelte-4xaywn:hover>div.bn-notify-notification-inner.svelte-4xaywn>div.notify-close-btn-desktop.svelte-4xaywn{visibility:visible;opacity:1}div.notify-close-btn.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-4xaywn .close-icon.svelte-4xaywn.svelte-4xaywn{width:20px;margin:auto}.notify-close-btn.svelte-4xaywn>.close-icon.svelte-4xaywn.svelte-4xaywn{color:var(\n      --notify-onboard-close-icon-color,\n      var(--onboard-gray-300, var(--gray-300))\n    )}.notify-close-btn.svelte-4xaywn:hover>.close-icon.svelte-4xaywn.svelte-4xaywn{color:var(\n      --notify-onboard-close-icon-hover,\n      var(--onboard-gray-100, var(--gray-100))\n    )}.transaction-status.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{height:48px}.dropdown-buttons.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{background-color:var(\n      --notify-onboard-gray-700,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{padding:4px 12px;border-radius:var(\n      --notify-onboard-border-radius-5,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-font-size-6,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-primary-400,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn:hover{background-color:rgba(146, 155, 237, 0.2)}")}function Q(n){var t,i,e,o,r,a;return{c:function(){t=(0,d.n)("div"),(i=(0,d.n)("button")).textContent="Cancel",e=(0,d.p)(),(o=(0,d.n)("button")).textContent="Speed-up",(0,d.r)(i,"class","dropdown-button svelte-4xaywn"),(0,d.r)(o,"class","dropdown-button svelte-4xaywn"),(0,d.r)(t,"class","dropdown-buttons flex items-center justify-end svelte-4xaywn")},m:function(c,s){(0,d.b)(c,t,s),(0,d.v)(t,i),(0,d.v)(t,e),(0,d.v)(t,o),r||(a=[(0,d.x)(i,"click",n[9]),(0,d.x)(o,"click",n[10])],r=!0)},p:d.M,d:function(n){n&&(0,d.h)(t),r=!1,(0,d.B)(a)}}}function W(n){var t,i,e,o,r,a,c,s,l,f,v,p,y,h;e=new L({props:{notification:n[0],chainStyles:d.aj[d.ag[n[0].network]]}}),r=new _({props:{notification:n[0]}});var x="txPool"===n[0].eventCode&&Q(n);return{c:function(){t=(0,d.n)("div"),i=(0,d.n)("div"),(0,d.o)(e.$$.fragment),o=(0,d.p)(),(0,d.o)(r.$$.fragment),a=(0,d.p)(),c=(0,d.n)("div"),s=(0,d.n)("div"),l=(0,d.p)(),f=(0,d.n)("div"),x&&x.c(),(0,d.r)(s,"class","flex items-center close-icon svelte-4xaywn"),(0,d.r)(c,"class","notify-close-btn notify-close-btn-"+n[4].type+" pointer flex svelte-4xaywn"),(0,d.r)(i,"class","flex bn-notify-notification-inner svelte-4xaywn"),(0,d.r)(f,"class","dropdown svelte-4xaywn"),(0,d.u)(f,"dropdown-visible",n[2]&&n[5]&&A(n[0].eventCode)&&F(n[0].network)&&B(n[7])),(0,d.r)(t,"class",v="bn-notify-notification bn-notify-notification-"+n[0].type+"} svelte-4xaywn"),(0,d.u)(t,"bn-notify-clickable",n[0].onClick)},m:function(u,v){(0,d.b)(u,t,v),(0,d.v)(t,i),(0,d.w)(e,i,null),(0,d.v)(i,o),(0,d.w)(r,i,null),(0,d.v)(i,a),(0,d.v)(i,c),(0,d.v)(c,s),s.innerHTML='\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n',(0,d.v)(t,l),(0,d.v)(t,f),x&&x.m(f,null),p=!0,y||(h=[(0,d.x)(c,"click",(0,d.y)(n[8])),(0,d.x)(t,"mouseenter",n[11]),(0,d.x)(t,"mouseleave",n[12]),(0,d.x)(t,"click",n[13])],y=!0)},p:function(n,i){var o=(0,u.Z)(i,1)[0],a={};1&o&&(a.notification=n[0]),1&o&&(a.chainStyles=d.aj[d.ag[n[0].network]]),e.$set(a);var c={};1&o&&(c.notification=n[0]),r.$set(c),"txPool"===n[0].eventCode?x?x.p(n,o):((x=Q(n)).c(),x.m(f,null)):x&&(x.d(1),x=null),(!p||165&o)&&(0,d.u)(f,"dropdown-visible",n[2]&&n[5]&&A(n[0].eventCode)&&F(n[0].network)&&B(n[7])),(!p||1&o&&v!==(v="bn-notify-notification bn-notify-notification-"+n[0].type+"} svelte-4xaywn"))&&(0,d.r)(t,"class",v),(!p||1&o)&&(0,d.u)(t,"bn-notify-clickable",n[0].onClick)},i:function(n){p||((0,d.t)(e.$$.fragment,n),(0,d.t)(r.$$.fragment,n),p=!0)},o:function(n){(0,d.d)(e.$$.fragment,n),(0,d.d)(r.$$.fragment,n),p=!1},d:function(n){n&&(0,d.h)(t),(0,d.A)(e),(0,d.A)(r),x&&x.d(),y=!1,(0,d.B)(h)}}}function X(n,t,i){var e,a;(0,d.j)(n,d.N,(function(n){return i(15,e=n)})),(0,d.j)(n,v._,(function(n){return i(3,a=n)}));var c,s=d.a8.device,l=d.a8.gas,f=t.notification,u=t.updateParentOnRemove,p=!1,y=d.ak.getValue().find((function(n){return n.hash===f.id})),h=y&&e.find((function(n){return!!n.accounts.find((function(n){return n.address.toLowerCase()===y.from.toLowerCase()}))}));(0,d.al)((function(){f.autoDismiss&&(c=setTimeout((function(){(0,d.am)(f.id),(0,d.an)(f.id)}),f.autoDismiss))})),(0,d.ad)((function(){clearTimeout(c)}));var x=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G({type:"cancel",wallet:h,transaction:y});case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t="".concat(y.hash.slice(0,9),":txReplaceError").concat(y.hash.slice(-5)),(0,d.ao)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3});case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G({type:"speedup",wallet:h,transaction:y});case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),t="".concat(y.hash.slice(0,9),":txReplaceError").concat(y.hash.slice(-5)),(0,d.ao)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3});case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return n.$$set=function(n){"notification"in n&&i(0,f=n.notification),"updateParentOnRemove"in n&&i(1,u=n.updateParentOnRemove)},[f,u,p,a,s,l,y,h,function(){(0,d.am)(f.id),(0,d.an)(f.id),u()},x,m,function(){return i(2,p=!0)},function(){return i(2,p=!1)},function(n){return f.onClick&&f.onClick(n)}]}var Y=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,X,W,d.s,{notification:0,updateParentOnRemove:1},U),e}return(0,a.Z)(i)}(d.S);function nn(n){(0,d.a)(n,"svelte-17x6hrg","ul.svelte-17x6hrg{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family-normal,\n      var(--onboard-font-family-normal, var(--font-family-normal))\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-17x6hrg{overflow-y:scroll}.y-visible.svelte-17x6hrg{overflow-y:visible}li.notification-list-top.svelte-17x6hrg:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-17x6hrg:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-17x6hrg,ul.bn-notify-bottomRight.svelte-17x6hrg{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-17x6hrg{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-17x6hrg::-webkit-scrollbar{display:none}")}function tn(n,t,i){var e=n.slice();return e[12]=t[i],e}function en(n){for(var t,i,e,o,r=[],a=new Map,c=n[2],s=function(n){return n[12].key},l=0;l<c.length;l+=1){var f=tn(n,c,l),u=s(f);a.set(u,r[l]=on(u,f))}return{c:function(){t=(0,d.n)("ul");for(var o=0;o<r.length;o+=1)r[o].c();(0,d.r)(t,"class",i="bn-notify-"+n[0]+" "+n[5]+" svelte-17x6hrg"),(0,d.r)(t,"style",e="".concat(n[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(n[6].expanded?"412px":n[1]&&"mobile"!==n[7].type?"82px":n[1]||"mobile"!==n[7].type?"24px":"108px",")"))},m:function(n,i){(0,d.b)(n,t,i);for(var e=0;e<r.length;e+=1)r[e].m(t,null);o=!0},p:function(n,l){if(517&l){c=n[2],(0,d.g)();for(var f=0;f<r.length;f+=1)r[f].r();r=(0,d.U)(r,l,s,1,n,c,a,t,d.as,on,null,tn);for(var u=0;u<r.length;u+=1)r[u].a();(0,d.c)()}(!o||33&l&&i!==(i="bn-notify-"+n[0]+" "+n[5]+" svelte-17x6hrg"))&&(0,d.r)(t,"class",i),(!o||67&l&&e!==(e="".concat(n[0].includes("top")?"justify-content:flex-start;":"","; max-height: calc(100vh - ").concat(n[6].expanded?"412px":n[1]&&"mobile"!==n[7].type?"82px":n[1]||"mobile"!==n[7].type?"24px":"108px",")")))&&(0,d.r)(t,"style",e)},i:function(n){if(!o){for(var t=0;t<c.length;t+=1)(0,d.t)(r[t]);o=!0}},o:function(n){for(var t=0;t<r.length;t+=1)(0,d.d)(r[t]);o=!1},d:function(n){n&&(0,d.h)(t);for(var i=0;i<r.length;i+=1)r[i].d()}}}function on(n,t){var i,e,o,r,a,c,s,l,f,u,v=d.M;return e=new Y({props:{notification:t[12],updateParentOnRemove:t[9]}}),{key:n,first:null,c:function(){i=(0,d.n)("li"),(0,d.o)(e.$$.fragment),o=(0,d.p)(),(0,d.r)(i,"class",r=(0,d.R)("bn-notify-li-".concat(t[0]," ").concat(t[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-17x6hrg"),this.first=i},m:function(n,r){(0,d.b)(n,i,r),(0,d.w)(e,i,null),(0,d.v)(i,o),l=!0,f||(u=(0,d.x)(i,"click",(0,d.y)(t[10])),f=!0)},p:function(n,o){t=n;var a={};4&o&&(a.notification=t[12]),e.$set(a),(!l||1&o&&r!==(r=(0,d.R)("bn-notify-li-".concat(t[0]," ").concat(t[0].includes("top")?"notification-list-top":"notification-list-bottom"))+" svelte-17x6hrg"))&&(0,d.r)(i,"class",r)},r:function(){s=i.getBoundingClientRect()},f:function(){(0,d.ap)(i),v(),(0,d.aq)(i,s)},a:function(){v(),v=(0,d.ar)(i,s,x,{duration:500})},i:function(n){l||((0,d.t)(e.$$.fragment,n),(0,d.J)((function(){c&&c.end(1),(a=(0,d.K)(i,d.a3,{duration:1200,delay:300,x:t[3],y:t[4],easing:an})).start()})),l=!0)},o:function(n){(0,d.d)(e.$$.fragment,n),a&&a.invalidate(),c=(0,d.ac)(i,d.L,{duration:300,easing:d.ae}),l=!1},d:function(n){n&&(0,d.h)(i),(0,d.A)(e),n&&c&&c.end(),f=!1,u()}}}function rn(n){var t,i,e=n[2].length&&en(n);return{c:function(){e&&e.c(),t=(0,d.e)()},m:function(n,o){e&&e.m(n,o),(0,d.b)(n,t,o),i=!0},p:function(n,i){var o=(0,u.Z)(i,1)[0];n[2].length?e?(e.p(n,o),4&o&&(0,d.t)(e,1)):((e=en(n)).c(),(0,d.t)(e,1),e.m(t.parentNode,t)):e&&((0,d.g)(),(0,d.d)(e,1,1,(function(){e=null})),(0,d.c)())},i:function(n){i||((0,d.t)(e),i=!0)},o:function(n){(0,d.d)(e),i=!1},d:function(n){e&&e.d(n),n&&(0,d.h)(t)}}}function an(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-35*n)+1}function cn(n,t,i){var e,o=d.a8.device,r=d.a4.select("accountCenter").pipe((0,p.O)(d.a4.get().accountCenter),(0,y.d)(1));(0,d.j)(n,r,(function(n){return i(6,e=n)}));var a,c=t.position,s=t.sharedContainer,l=t.notifications;a=0;var f="y-scroll",u=function(){var n=null;return function(t,i){clearTimeout(n),n=setTimeout(t,i)}}();return n.$$set=function(n){"position"in n&&i(0,c=n.position),"sharedContainer"in n&&i(1,s=n.sharedContainer),"notifications"in n&&i(2,l=n.notifications)},n.$$.update=function(){1&n.$$.dirty&&(c.includes("top")?i(4,a=-50):i(4,a=50))},[c,s,l,0,a,f,e,o,r,function(){"y-visible"!==f&&i(5,f="y-visible"),u((function(){i(5,f="y-scroll")}),1e3)},function(t){d.a9.call(this,n,t)}]}var sn=function(n){(0,l.Z)(i,n);var t=(0,f.Z)(i);function i(n){var e;return(0,c.Z)(this,i),e=t.call(this),(0,d.i)((0,s.Z)(e),n,cn,rn,d.s,{position:0,sharedContainer:1,notifications:2},nn),e}return(0,a.Z)(i)}(d.S)}}]);
//# sourceMappingURL=786.2976af73.chunk.js.map