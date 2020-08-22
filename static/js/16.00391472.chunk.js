(this["webpackJsonphubble-console"]=this["webpackJsonphubble-console"]||[]).push([[16],{325:function(e,a,t){"use strict";var i=t(32),n=t(0),l=t.n(n),r=t(2),s=t(51),d=t(16),o=t(290),u=t(292),c=t(291),m=t(70),p=Object(s.a)((function(e){return{appBar:{color:e.palette.primary,background:"white"},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},buttons:{marginLeft:"auto"},action:{textTransform:"none",paddingLeft:16,paddingRight:16},title:{color:e.palette.text.primary,fontWeight:500},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(d.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},actionIcon:{marginRight:4}}}));a.a=function(e){var a=p(),t=e.title,n=e.selectionCount,s=e.actions,d=e.onAction,h=function(e){return function(){return d(e)}},f=l.a.createElement(m.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},t),b=l.a.createElement(m.a,{className:a.title,variant:"subtitle1",component:"div"},n," selected"),y=n>0;return l.a.createElement(o.a,{position:"static",elevation:1,className:a.appBar},l.a.createElement(c.a,{className:Object(r.a)(a.toolbar,Object(i.a)({},a.highlight,y))},y?b:f,l.a.createElement("div",{className:a.buttons},y?s?s.map((function(e){return!e.primary&&l.a.createElement(u.a,{className:a.action,variant:"text",size:"small",color:"primary",onClick:h(e.identifier)},l.a.createElement(e.icon,{className:a.actionIcon}),e.title)})):null:s?l.a.createElement(l.a.Fragment,null,s.map((function(e){return e.primary&&l.a.createElement(u.a,{className:a.action,variant:"text",size:"small",color:"primary",onClick:h(e.identifier)},l.a.createElement(e.icon,{className:a.actionIcon}),e.title)}))):null)))}},360:function(e,a,t){"use strict";var i=t(1),n=t(3),l=t(0),r=(t(4),t(2)),s=t(125),d=t(5),o=l.forwardRef((function(e,a){var t=e.classes,d=e.className,o=e.raised,u=void 0!==o&&o,c=Object(n.a)(e,["classes","className","raised"]);return l.createElement(s.a,Object(i.a)({className:Object(r.a)(t.root,d),elevation:u?8:1,ref:a},c))}));a.a=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(o)},361:function(e,a,t){"use strict";var i=t(1),n=t(3),l=t(0),r=(t(4),t(2)),s=t(5),d=l.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.component,o=void 0===d?"div":d,u=Object(n.a)(e,["classes","className","component"]);return l.createElement(o,Object(i.a)({className:Object(r.a)(t.root,s),ref:a},u))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},557:function(e,a,t){"use strict";var i=t(1),n=t(3),l=t(0),r=(t(4),t(2)),s=t(5),d=l.forwardRef((function(e,a){var t=e.disableSpacing,s=void 0!==t&&t,d=e.classes,o=e.className,u=Object(n.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(i.a)({className:Object(r.a)(d.root,o,!s&&d.spacing),ref:a},u))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(d)},862:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return V}));var i=t(40);function n(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=t(0),r=t.n(l),s=t(51),d=t(249),o=t(187),u=t(311),c=t(126),m=t(360),p=t(361),h=t(325),f=t(557),b=t(292),y=t(38),v=Object(s.a)((function(e){return{root:{margin:0,borderRadius:0,width:"50%"},details:{padding:24},actions:{width:"100%",display:"flex",flexDirection:"row-reverse"},action:{width:100},actionIcon:{marginRight:4,display:"inline-block"}}}));function g(e){var a=v(),t=e.groups,n=r.a.useState(Object(y.b)(t)),l=Object(i.a)(n,2),s=l[0],d=l[1],o=r.a.useState(!0),u=Object(i.a)(o,2),c=u[0],h=u[1];return r.a.createElement("div",null,r.a.createElement(m.a,{className:a.root,variant:"outlined"},r.a.createElement(p.a,{className:a.details},r.a.createElement(y.a,{groups:t,values:s,onValueChange:function(e,a){var t=JSON.parse(JSON.stringify(s));t[e.identifier]=a,d(t)},tabIndex:0,showMore:!0,onValidityChange:h})),r.a.createElement(f.a,{className:a.actions},r.a.createElement(b.a,{disabled:c,size:"small",variant:"text",color:"primary",className:a.action},"Save"))))}function q(e){var a=e.children,t=e.value,i=e.index,l=n(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==i,id:"vertical-tabpanel-".concat(i)},l),t===i&&r.a.createElement(u.a,{p:3}," ",a))}var E=Object(s.a)((function(e){return{card:{margin:24,borderRadius:0,justifyContent:"space-evenly"},details:{flexDirection:"column",padding:0},tabs:{margin:0,paddingTop:24},tab:{margin:0}}})),O=[{label:"Basic",children:[{label:"First Name",identifier:"firstName",type:"text",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The first name of the user.",multipleValues:!1,defaultValue:"",validations:"isAlphanumeric,minLength:3,maxLength:30",validationErrors:{isAlphanumeric:"The first name can contain only letters and digits.",minLength:"The first name must be 3-30 characters long.",maxLength:"The first name must be 3-30 characters long."}},{label:"Last Name",identifier:"lastName",type:"text",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The last name of the user.",multipleValues:!1,defaultValue:"",validations:"isAlphanumeric,minLength:3,maxLength:30",validationErrors:{isAlphanumeric:"The last name can contain only letters and digits.",minLength:"The last name must be 3-30 characters long.",maxLength:"The last name must be 3-30 characters long."}},{label:"Email Address",identifier:"emailAddress",type:"email_address",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The email address of the account.",multipleValues:!0,defaultValue:"",validations:"isEmail",validationErrors:{isEmail:"Please enter a valid email address."}},{label:"Phone Number",identifier:"phoneNumber",type:"phone_number",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The phone number of the account.",multipleValues:!0,defaultValue:""}]}],w=[{label:"Basic",children:[{label:"Name",identifier:"name",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The name of the company.",multipleValues:!1,defaultValue:"",validations:"isAlphanumeric,minLength:3,maxLength:100",validationErrors:{isAlphanumeric:"The company name can contain only letters and digits.",minLength:"The conmpany name must be 3-100 characters long.",maxLength:"The company name must be 3-100 characters long."}},{label:"Email Address",identifier:"emailAddress",type:"email_address",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The email address of the account.",multipleValues:!0,defaultValue:"",validations:"isEmail",validationErrors:{isEmail:"Please enter a valid email address."}},{label:"Phone Number",identifier:"phoneNumber",type:"phone_number",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The phone number of the account.",multipleValues:!0,defaultValue:""},{label:"Address Line 1",identifier:"addressLine1",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The first line of address.",multipleValues:!1,defaultValue:""},{label:"Address Line 2",identifier:"addressLine2",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The first line of address.",multipleValues:!1,defaultValue:""},{label:"City",identifier:"city",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The city.",multipleValues:!1,defaultValue:""},{label:"State",identifier:"state",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The state where the customer resides.",multipleValues:!1,defaultValue:""},{label:"Country",identifier:"country",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The country where the customer resides.",multipleValues:!1,defaultValue:""},{label:"Zip Code",identifier:"zipCode",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The zip code of the location where the customer resides.",multipleValues:!1,defaultValue:""},{label:"Website",identifier:"website",type:"text",required:!1,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The website of the company.",multipleValues:!1,defaultValue:""},{label:"Industry",identifier:"industry",type:"select",options:[{value:"business_service",title:"Business Service"},{value:"computer_software",title:"Computer Software"},{value:"computer_hardware",title:"Computer Hardware"},{value:"retail",title:"Retail"},{value:"education",title:"Education"},{value:"entertainment",title:"Entertainment"},{value:"finance_real_estate_insurance",title:"Finance, Real Estate, Insurance"},{value:"government",title:"Government"},{value:"healthcare",title:"Healthcare"},{value:"nonprofit",title:"Nonprofit"},{value:"telecommunications",title:"Telecommunications"}],required:!1,readOnly:!1,quickAdd:!0,unique:!1,hidden:!1,tooltip:"The industry which the company serves.",multipleValues:!0,defaultValue:null}]}],N=[{label:"Basic",children:[{label:"Old Password",identifier:"oldPassword",type:"password",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The old password of the user.",multipleValues:!1,defaultValue:""},{label:"New Password",identifier:"newPassword",type:"password",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The new password of the user.",multipleValues:!1,defaultValue:""},{label:"Confirm Password",identifier:"confirmPassword",type:"password",required:!0,readOnly:!1,quickAdd:!1,unique:!1,hidden:!1,tooltip:"The new password of the user.",multipleValues:!1,defaultValue:""}]}];function V(){var e=E(),a=r.a.useState(0),t=Object(i.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(h.a,{title:"Preferences"}),r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:12,md:2},r.a.createElement(m.a,{variant:"outlined",className:e.card},r.a.createElement(p.a,{className:e.details},r.a.createElement(d.a,{orientation:"vertical",variant:"fullWidth",value:n,onChange:function(e,a){l(a)},className:e.tabs},r.a.createElement(o.a,{label:"Profile"}),r.a.createElement(o.a,{label:"Security"}),r.a.createElement(o.a,{label:"Company"}))))),r.a.createElement(c.a,{item:!0,xs:12,md:10},r.a.createElement(q,{value:n,index:0},r.a.createElement(g,{groups:O})),r.a.createElement(q,{value:n,index:1},r.a.createElement(g,{groups:N})),r.a.createElement(q,{value:n,index:2},r.a.createElement(g,{groups:w})))))}}}]);
//# sourceMappingURL=16.00391472.chunk.js.map