(this.webpackJsonpcurrencyconverter=this.webpackJsonpcurrencyconverter||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),s=n(6),l=n(1);n(12);function o(e){var t=e.cOptions,n=e.c,a=e.changeC,r=e.amt,u=e.changeAmt;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",pattern:"[0-9]*",inputMode:"numeric",maxLength:"16",className:"input",value:r,onChange:u}),c.a.createElement("select",{value:n,id:"button",onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}function i(){return c.a.createElement("div",{className:"header"},"Currency Conversion")}var m=(new Date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});function b(){return c.a.createElement("div",{className:"Date"},"Last updated ",m," 16:00 CET")}var h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(-99),m=Object(l.a)(u,2),h=m[0],f=m[1],p=Object(a.useState)(),g=Object(l.a)(p,2),v=g[0],E=g[1],O=Object(a.useState)(),j=Object(l.a)(O,2),d=j[0],y=j[1],C=Object(a.useState)("1"),S=Object(l.a)(C,2),k=S[0],N=S[1];console.log(h);var w,x,D=Object(a.useState)(!0),J=Object(l.a)(D,2),U=J[0],A=J[1];return U?(x=k,w=k*h):(w=k,x=k/h),Object(a.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,EUR,RUB,CNY,HKD,JPY,KRW").then((function(e){return e.json()})).then((function(e){console.log(e);var t=Object.keys(e.rates)[0];r([e.base].concat(Object(s.a)(Object.keys(e.rates)))),E(e.base),y(Object.keys(e.rates)[0]),f(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=v&&null!=d&&fetch("https://api.exchangeratesapi.io/latest?base="+v+"&symbols="+d).then((function(e){return e.json()})).then((function(e){return f(e.rates[d])}))}),[v,d]),c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement("div",{className:"main"},c.a.createElement(o,{cOptions:n,c:v,changeC:function(e){return E(e.target.value)},changeAmt:function(e){N(e.target.value),A(!0)},amt:x}),c.a.createElement("div",{id:"equals"},"="),c.a.createElement(o,{cOptions:n,c:d,changeC:function(e){return y(e.target.value)},changeAmt:function(e){N(e.target.value),A(!1)},amt:w})),c.a.createElement(b,null),c.a.createElement("div",{className:"footer"},c.a.createElement("h5",null,"Justin Krasner | CISC3140"),c.a.createElement("h6",null,"Powered by exchangeratesapi.io")))};u.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.77545e71.chunk.js.map