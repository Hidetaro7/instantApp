(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,e,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("2c412abb",content,!0,{sourceMap:!1})},236:function(t,e,r){"use strict";r(232)},237:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,".main p[data-v-00c9974d]{\n  --tw-text-opacity:1;\n  color:rgba(153, 27, 27, var(--tw-text-opacity))\n}",""]),t.exports=n},242:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(39),r(27),r(60),r(82),r(38)),o=r.n(c),l={transition:"slide-fade",data:function(){return{sizeTableDom:[]}},computed:{createTable:function(){var t="<table>";return this.sizeTableDom.forEach((function(e){t+="<tr>",e.forEach((function(e){t+="<td>"+e+"</td>"})),t+="</tr>"})),t+="</table>"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,o.a.get("https://tuqulore.microcms.io/api/v1/instant/".concat(r.slug),{headers:{"X-API-KEY":"c1567ee1-ca6e-4d8c-b1c7-0263a1130920"}});case 3:return n=e.sent,(data=n.data).sizeTableDom=JSON.parse(data.sizes.replace(/[\u0000-\u0019]+/g,"")),e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})))()}},d=(r(236),r(21)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main prose max-w-5xl m-auto"},[r("div",{staticClass:"py-8"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("もどる")])],1),t._v(" "),r("div",{staticClass:"mb-8"},[r("div",{staticClass:"text-xl mb-4 font-bold text-gray-500"},[t._v(t._s(t.type))]),t._v(" "),r("h1",{staticClass:"mb-4"},[t._v(t._s(t.shape))]),t._v(" "),r("div",{staticClass:"text-sm text-red-700"},[t._v(t._s(t.safety))])]),t._v(" "),r("div",{staticClass:"md:flex mb-8"},[r("div",{staticClass:"md:w-80 md:mr-16 flex-shrink-0"},[r("img",{staticClass:"m-0 object-cover w-full h-80 rounded-md",attrs:{src:t.image.url,alt:t.shape}}),t._v(" "),r("div",{staticClass:"mt-16"},[r("img",{staticClass:"object-cover w-full",attrs:{src:t.product_size.url,alt:""}})])]),t._v(" "),r("div",{staticClass:"flex-grow"},[r("div",{staticClass:"post",domProps:{innerHTML:t._s(t.summary)}}),t._v(" "),r("div",{staticClass:"overflow-scroll"},[r("div",{staticClass:"size",domProps:{innerHTML:t._s(t.createTable)}})])])])])}),[],!1,null,"00c9974d",null);e.default=component.exports}}]);