(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o,s=n(6),i=n.n(s),c=n(5),r=n(7),u=n(1),a=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function b(t,e){var n=e.sortType,s=e.isReversed,i=Object(r.a)(t);return n===o.ALPHABET&&i.sort((function(t,e){return t.localeCompare(e)})),n===o.LENGTH&&i.sort((function(t,e){return t.length-e.length})),s&&i.reverse(),i}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(o||(o={}));var j=function(){var t=Object(u.useState)(o.NONE),e=Object(c.a)(t,2),n=e[0],s=e[1],i=Object(u.useState)(!1),r=Object(c.a)(i,2),j=r[0],h=r[1];return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:n===o.ALPHABET?"button is-info":"button is-info is-light",onClick:function(){s(o.ALPHABET)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:n===o.LENGTH?"button is-info":"button is-info is-light",onClick:function(){s(o.LENGTH)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:!0===j?"button is-info":"button is-info is-light",onClick:function(){h(!j)},children:"Reverse"}),(n||j)&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(o.NONE),h(!1)},children:"Reset"})]}),Object(a.jsx)("ul",{children:Object(a.jsx)("ul",{children:b(l,{sortType:n,isReversed:j}).map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};i.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f5cce76a.chunk.js.map