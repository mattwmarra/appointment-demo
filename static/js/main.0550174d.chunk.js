(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(9),s=a.n(c),o=(a(15),a(2)),i=(a(5),a(6)),d=(a(16),a(3)),l=a(0);var m=function(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),m=i[0],j=i[1],b=Object(r.useState)(""),p=Object(o.a)(b,2),u=p[0],h=p[1],O=Object(r.useState)(""),x=Object(o.a)(O,2),N=x[0],f=x[1],v=Object(r.useState)(""),g=Object(o.a)(v,2),w=g[0],y=g[1];return Object(l.jsxs)("div",{className:"card textcenter mt-3 "+(e.formDisplay?"":"add-appointment"),children:[Object(l.jsxs)("div",{className:"apt-addheading card-header bg-primary text-white",onClick:e.toggleForm,children:[Object(l.jsx)(d.a,{})," Add Appointment"]}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("form",{id:"aptForm",noValidate:!0,onSubmit:function(t){t.preventDefault();var a={petName:n,ownerName:m,aptDate:u+" "+N,aptNotes:w};e.addApt(a)},children:[Object(l.jsxs)("div",{className:"form-group form-row",children:[Object(l.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"petName",readOnly:!0,children:"Pet Name"}),Object(l.jsx)("div",{className:"col-md-10",children:Object(l.jsx)("input",{type:"text",className:"form-control",name:"petName",placeholder:"Pet's Name",value:n,onChange:function(e){return c(e.target.value)}})})]}),Object(l.jsxs)("div",{className:"form-group form-row",children:[Object(l.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName",children:"Pet Owner"}),Object(l.jsx)("div",{className:"col-md-10",children:Object(l.jsx)("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:m,onChange:function(e){return j(e.target.value)}})})]}),Object(l.jsxs)("div",{className:"form-group form-row",children:[Object(l.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptDate",children:"Date"}),Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("input",{type:"date",className:"form-control",name:"aptDate",id:"aptDate",value:u,onChange:function(e){return h(e.target.value)}})}),Object(l.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptTime",children:"Time"}),Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:N,onChange:function(e){return f(e.target.value)}})})]}),Object(l.jsxs)("div",{className:"form-group form-row",children:[Object(l.jsx)("label",{className:"col-md-2 text-md-right",htmlFor:"aptNotes",children:"Apt. Notes"}),Object(l.jsx)("div",{className:"col-md-10",children:Object(l.jsx)("textarea",{className:"form-control",rows:"4",cols:"50",name:"aptNotes",id:"aptNotes",placeholder:"Appointment Notes",value:w,onChange:function(e){return y(e.target.value)}})})]}),Object(l.jsx)("div",{className:"form-group form-row mb-0",children:Object(l.jsx)("div",{className:"offset-md-2 col-md-10",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary d-block ml-auto",children:"Add Appointment"})})})]})})]})},j=a(10),b=a.n(j);var p=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"List Appointments"}),Object(l.jsx)("div",{className:"appointment-list item-list mb-3",children:e.appointments.map((function(t){return Object(l.jsxs)("div",{className:"pet-item col media py-3",children:[Object(l.jsx)("div",{className:"mr-3",children:Object(l.jsx)("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return e.deleteAppointment(t)},children:Object(l.jsx)(d.b,{})})}),Object(l.jsxs)("div",{className:"pet-info media-body",children:[Object(l.jsxs)("div",{className:"pet-head d-flex",children:[Object(l.jsx)("span",{className:"pet-name",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.updateInfo("petName",a.target.innerText,t.index)},children:t.petName}),Object(l.jsx)("span",{className:"apt-date ml-auto",children:Object(l.jsx)(b.a,{date:t.aptDate,parse:"YYYY-MM-dd hh:mm",format:"MMM D h:ma"})})]}),Object(l.jsxs)("div",{className:"owner-name",children:[Object(l.jsx)("span",{className:"label-item",children:"Owner: "}),Object(l.jsx)("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.updateInfo("ownerName",a.target.innerText,t.index)},children:t.ownerName})]}),Object(l.jsx)("div",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.updateInfo("aptNotes",a.target.innerText,t.index)},children:t.aptNotes})]})]},t.index)}))})]})};var u=function(e){return Object(l.jsx)("div",{className:"search-appointments row justify-content-center my-4",children:Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("input",{id:"SearchApts",type:"text",className:"form-control","aria-label":"Search Appointments",onChange:function(t){return e.searchApts(t.target.value)}}),Object(l.jsxs)("div",{className:"input-group-append",children:[Object(l.jsxs)("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:["Sort by: ",Object(l.jsx)("span",{className:"caret"})]}),Object(l.jsxs)("div",{className:"sort-menu dropdown-menu dropdown-menu-right",children:[Object(l.jsx)("button",{className:"sort-by dropdown-item"+("petName"===e.orderBy?"active":""),href:"#",onClick:function(){return e.changeOrder("petName",e.orderDir)},children:"Pet Name"}),Object(l.jsx)("button",{className:"sort-by dropdown-item"+("aptDate"===e.orderBy?"active":""),href:"#",onClick:function(){return e.changeOrder("aptDate",e.orderDir)},children:"Date"}),Object(l.jsx)("button",{className:"sort-by dropdown-item"+("ownerName"===e.orderBy?"active":""),href:"#",onClick:function(){return e.changeOrder("ownerName",e.orderDir)},children:"Owner"}),Object(l.jsx)("div",{role:"separator",className:"dropdown-divider"}),Object(l.jsx)("button",{className:"sort-by dropdown-item"+("asc"===e.orderDir?"active":""),href:"#",onClick:function(){return e.changeOrder(e.orderBy,"asc")},children:"Asc"}),Object(l.jsx)("button",{className:"sort-by dropdown-item"+("desc"===e.orderDir?"active":""),href:"#",onClick:function(){return e.changeOrder(e.orderBy,"desc")},children:"Desc"})]})]})]})})})};var h=function(){var e,t=Object(r.useState)(null),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(!0),d=Object(o.a)(s,2),j=d[0],b=d[1],h=Object(r.useState)(0),O=Object(o.a)(h,2),x=O[0],N=O[1],f=Object(r.useState)(!1),v=Object(o.a)(f,2),g=v[0],w=v[1],y=Object(r.useState)(""),C=Object(o.a)(y,2),D=C[0],A=C[1],B=Object(r.useState)({orderBy:"ownerName",orderDir:"desc"}),S=Object(o.a)(B,2),L=S[0],k=S[1];if(Object(r.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return e.index=t,N(t),e}));c(t),b(!1)}))}),[]),j)return Object(l.jsx)("h1",{children:"Loading..."});var E=n;return e="asc"===L.orderDir?1:-1,E=E.sort((function(t,a){return t[L.orderBy].toLowerCase()<a[L.orderBy].toLowerCase()?-1*e:e})).filter((function(e){return e.petName.toLowerCase().includes(D.toLowerCase())||e.ownerName.toLowerCase().includes(D.toLowerCase())||e.aptNotes.toLowerCase().includes(D.toLowerCase())})),Object(l.jsxs)("main",{className:"page bg-white",id:"petratings",children:[Object(l.jsx)("div",{className:"heading",children:Object(l.jsx)("h1",{className:"display-4",children:"Lorem's Appointments"})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-12 bg-white",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{formDisplay:g,toggleForm:function(){return w(!g)},addApt:function(e){return function(e){var t=n;e.index=x,t.unshift(e),c(t),N(x+1),w(!1)}(e)}}),Object(l.jsx)(u,{orderBy:L.orderBy,orderDir:L.orderBy,changeOrder:function(e,t){k({orderBy:e,orderDir:t})},searchApts:function(e){A(e)}}),Object(l.jsx)(p,{appointments:E,deleteAppointment:function(e){var t=n;t=Object(i.without)(t,e),c(t)},updateInfo:function(e,t,a){var r=n;r[Object(i.findIndex)(n,{index:a})][e]=t,c(r)}})]})})})})]})};a(19),a(20);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0550174d.chunk.js.map