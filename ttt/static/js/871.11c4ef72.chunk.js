"use strict";(self.webpackChunkbuild0=self.webpackChunkbuild0||[]).push([[871],{17:function(e,s,n){n.r(s);var a=n(152),i=n(791),t=(n(853),n(724),n(504)),c=(n(431),n(184));s.default=function(){var e=(0,i.useState)([]),s=(0,a.Z)(e,2),n=s[0],l=s[1],r=(0,i.useState)(1),u=(0,a.Z)(r,2),d=u[0],h=u[1];return(0,i.useEffect)((function(){fetch("https://api.pandascore.co/matches/running?sort=&page=".concat(d,"&per_page=50&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0 ")).then((function(e){return e.json()})).then((function(e){l(e),console.log(e),h(d)}))}),[d]),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h2",{className:"white_h2",children:" Live Games "}),(0,c.jsx)("br",{}),n.length>0&&(0,c.jsx)("div",{className:"columns is-multiline",children:n.map((function(e){return(0,c.jsx)("div",{className:"column is-half gamesBoxes",id:e.id,children:(0,c.jsx)("div",{className:"inner",children:(0,c.jsxs)("div",{className:"inner__box",children:[(0,c.jsx)(t.rU,{to:e.slug,className:"h2link",id:e.slug,children:e.name}),(0,c.jsx)("span",{className:"is-pulled-right tag is-danger",children:e.status.toUpperCase()})]})})},e.id)}))})]})}},724:function(){}}]);
//# sourceMappingURL=871.11c4ef72.chunk.js.map