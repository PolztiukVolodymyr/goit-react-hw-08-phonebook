(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[379],{2379:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var a=t(2791),r=t(9434),s=t(885),o=t(8174),i=t(611),c=function(e){return e.contacts.contacts},u=function(e){return e.contacts.isRefreshing},l="ContactForm_label__-cVXI",d="ContactForm_form__dhl+T",m=t(184);function p(){var e=(0,a.useState)(""),n=(0,s.Z)(e,2),t=n[0],p=n[1],h=(0,a.useState)(""),f=(0,s.Z)(h,2),_=f[0],b=f[1],v=(0,r.I0)(),x=(0,r.v9)(c),g=(0,r.v9)(u),j=function(e){"name"===e.target.name&&p(e.target.value),"number"===e.target.name&&b(e.target.value)},y=function(){p(""),b("")};return(0,m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),x.find((function(e){return e.name.toLocaleLowerCase()===t.toLocaleLowerCase()})))return y(),o.Am.warning("".concat(t," is alredy in contacts"));t&&_&&(v((0,i.uK)({name:t,number:_})),o.Am.success("Contact created"),y())},className:d,children:[(0,m.jsxs)("label",{className:l,children:["Name",(0,m.jsx)("input",{onChange:j,type:"text",name:"name",value:t,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:l,children:["Number",(0,m.jsx)("input",{onChange:j,type:"tel",name:"number",value:_,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",disabled:g,children:"Add contact"}),(0,m.jsx)(o.Ix,{theme:"colored",autoClose:2e3})]})}var h=t(2007),f=t.n(h),_={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO"},b=function(e){var n=e.id,t=e.name,u=e.number,l=(0,a.useState)(t),d=(0,s.Z)(l,2),p=d[0],h=d[1],f=(0,a.useState)(u),b=(0,s.Z)(f,2),v=b[0],x=b[1],g=(0,a.useState)(!1),j=(0,s.Z)(g,2),y=j[0],C=j[1],N=(0,r.v9)(c),k=(0,r.I0)();return(0,m.jsxs)("li",{className:_.item,id:n,children:[y?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",{className:_.input,type:"name",name:"name",value:p,placeholder:"Name Lastname",required:!0,onChange:function(e){return h(e.target.value)}}),(0,m.jsx)("input",{className:_.input,type:"tel",name:"number",value:v,placeholder:"XXX-XX-XX",required:!0,onChange:function(e){return x(e.target.value)}})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{className:_.name,children:[t,": "]}),(0,m.jsx)("span",{children:u})]}),(0,m.jsxs)("div",{className:_.BlockButtons,children:[(0,m.jsx)("div",{className:_.btn,children:(0,m.jsx)("button",{type:"button",onClick:function(){if(y){if(t===p&&u===v)return void C(!y);if(N.find((function(e){return e.name.toLocaleLowerCase()===p.toLocaleLowerCase()&&e.id!==n})))return void o.Am.warning("".concat(p," is alredy in contacts"));k((0,i.mP)({id:n,name:p,number:v}))}C(!y)},children:y?"Save":"Edit"})}),(0,m.jsx)("div",{className:_.BtnWrap,children:(0,m.jsx)("button",{type:"button",onClick:function(){return k((0,i.GK)(n))},children:"Delete"})})]})]})},v=b;b.propType={id:f().string.isRequired,name:f().string.isRequired,number:f().string.isRequired};var x=function(e){var n=e.contacts;return(0,m.jsx)("ul",{className:_.list,children:n&&n.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,m.jsx)(v,{id:t,data:n,name:a,number:r},t)}))})},g="Filter_label__vEd1E",j=function(e){var n=e.filter,t=e.onChange;return(0,m.jsxs)("label",{className:g,children:["Filter",(0,m.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]})},y="PhoneBook_container__qH1yN",C="PhoneBook_wrap__pI6ok",N="PhoneBook_title__QJwXO",k="PhoneBook_titleSection__LFcLz";function w(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.contacts.contacts})),t=(0,r.v9)((function(e){return e.contacts.filter})),s=function(n){e(o(n))};(0,a.useEffect)((function(){e((0,i.yF)())}),[e]);var o=function(e){s(e.target.value)};return(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("h1",{className:N,children:"Phonebook"}),(0,m.jsx)("div",{className:C,children:(0,m.jsx)(p,{})}),(0,m.jsx)("h2",{className:k,children:"Contacts"}),(0,m.jsx)(j,{filter:t,onChange:o}),(0,m.jsx)(x,{contacts:(console.log("contacts: ",n),0!==n.length&&"string"!==typeof n?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):[])})]})}},888:function(e,n,t){"use strict";var a=t(9047);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,s,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:r};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=379.d22cfb7b.chunk.js.map