(this.webpackJsonpreviewspage=this.webpackJsonpreviewspage||[]).push([[0],{76:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(15),i=n.n(s),l=n(27),o=n.n(l),j=n(39),d=n(12),u=n(40),O=n.n(u),b=n(108),h=n(109),v=n(107),m=n(102),x=n(103);n(76);var g=function(e){var t=e.IsLoading,n=e.reviews,c=e.currentPage,r=e.reviewsPerPage,s=e.showMore;if(e.rendering,console.log("dafdsv"),t)return Object(a.jsx)("h3",{children:"Loading..."});var i=c*r,l=i-r,o=n.slice(l,i);return o.map((function(e){return e.hasOwnProperty("showMore")||(e.showMore=!0),null})),Object(a.jsx)("div",{className:"reviews",children:o.map((function(e,t){return Object(a.jsxs)("div",{className:"review",children:[Object(a.jsxs)("div",{className:"reviewer",children:[Object(a.jsx)(h.a,{}),Object(a.jsx)("h4",{className:"reviewer_name",children:e.friend?e.reviewer.name:""})]}),Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.Overall,readOnly:!0,size:"medium"}),Object(a.jsxs)("h4",{className:"review_title",children:['"',e.title,'"']})]}),Object(a.jsx)("p",{children:e.comment}),Object(a.jsx)("div",{children:e.showMore?null:Object(a.jsxs)("div",{className:"ratings_rem",children:[Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Delivery Time"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.delivery_time,readOnly:!0,size:"small"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Discounts and Offers"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.discounts_and_offers,readOnly:!0,size:"small"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Matches Description"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.matches_description,readOnly:!0,size:"small"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Matches Photo"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.matches_photo,readOnly:!0,size:"small"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Packaging"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.packaging,readOnly:!0,size:"small"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(m.a,{component:"legend",children:"Price"}),Object(a.jsx)(b.a,{name:"read-only",value:e.ratings.price,readOnly:!0,size:"small"})]})]})}),Object(a.jsx)("button",{className:"showMore",onClick:function(){return s(e)},children:e.showMore?"Show more":"Show less"}),Object(a.jsx)(x.a,{className:"dr"})]},t)}))})},f=n(106);n(81);var p=function(e){var t=e.numberOfReviews,n=e.reviewsPerPage,c=e.pagenate;if(!t)return Object(a.jsx)("div",{});for(var r=[],s=1;s<=Math.ceil(t/n);s++)r.push(s);return Object(a.jsx)("div",{className:"pagenation",children:Object(a.jsx)(f.a,{count:Math.ceil(t/n),onChange:c})})},w=n(104);n(82);var y=function(){for(var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(d.a)(s,2),l=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),v=h[0],m=h[1],x=Object(c.useState)(""),f=Object(d.a)(x,2),y=f[0],P=f[1],S=Object(c.useState)(""),M=Object(d.a)(S,2),N=M[0],_=M[1],C=Object(c.useState)(3),k=Object(d.a)(C,1)[0],z=Object(c.useState)(1),L=Object(d.a)(z,2),D=L[0],F=L[1],I=Object(c.useState)(!0),T=Object(d.a)(I,2),B=T[0],E=T[1],J=[],R=[],V=1;V<=20;V++){var W={label:"Product ".concat(V),value:"".concat(V)};J.push(W)}for(var q=1;q<=10;q++){var A={label:"Viewer ".concat(q),value:"".concat(q)};R.push(A)}return Object(c.useEffect)((function(){y&&N&&function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,O.a.get("http://www.i2ce.in/reviews/".concat(y,"/").concat(N));case 3:t=e.sent,u(t.data.reviews),r(t.data.reviews.length),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[y,N]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"select_options",children:[Object(a.jsxs)("select",{className:"product_id",value:y,onChange:function(e){P(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select Product"}),J.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.label},t)}))]}),Object(a.jsxs)("select",{className:"viewer_id",value:N,onChange:function(e){_(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select Viewer"}),R.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.label},t)}))]}),Object(a.jsx)("button",{onClick:function(){l.sort((function(e,t){return t.ratings.Overall-e.ratings.Overall})),E(!B)},children:"Sort by rating"})]}),Object(a.jsxs)(w.a,{maxWidth:"sm",children:[Object(a.jsx)("div",{children:Object(a.jsx)(g,{reviews:l,IsLoading:v,currentPage:D,reviewsPerPage:k,showMore:function(e){e.showMore=!e.showMore,E(!B)},rendering:B})}),Object(a.jsx)("div",{children:Object(a.jsx)(p,{numberOfReviews:n,reviewsPerPage:k,pagenate:function(e,t){F(t)}})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),P()}},[[83,1,2]]]);
//# sourceMappingURL=main.b0ef30cc.chunk.js.map