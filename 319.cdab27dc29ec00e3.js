"use strict";(self.webpackChunkhsmynewapp=self.webpackChunkhsmynewapp||[]).push([[319],{4319:(q,l,n)=>{n.r(l),n.d(l,{HelpModule:()=>x});var r=n(9808),c=n(5215),u=n(9646),e=n(5e3),g=n(6181),m=n(6094),p=n(8248);const d=function(){return{"width.px":45,"margin-top.px":7}};function f(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"svg-icon",17),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().showQAnswer(s.id)}),e.qZA()}2&o&&e.Q6J("svgStyle",e.DdM(1,d))}function h(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"svg-icon",18),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().closeQAnswer(s.id)}),e.qZA()}2&o&&e.Q6J("svgStyle",e.DdM(1,d))}function v(o,i){if(1&o&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.a," ")}}function y(o,i){if(1&o&&(e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.TgZ(2,"div",11),e.TgZ(3,"div",12),e._uU(4),e.qZA(),e.YNc(5,f,1,2,"svg-icon",13),e.YNc(6,h,1,2,"svg-icon",14),e.qZA(),e.TgZ(7,"div",15),e.YNc(8,v,2,1,"div",16),e.qZA(),e.qZA(),e.qZA()),2&o){const t=i.$implicit;e.xp6(4),e.hij(" ",t.q," "),e.xp6(1),e.Q6J("ngIf",!t.open),e.xp6(1),e.Q6J("ngIf",t.open),e.xp6(2),e.Q6J("ngIf",t.open)}}const w=[{path:"",component:(()=>{class o{constructor(){this.data=[{id:1,q:"Who are we?",a:"We are developers that are passionate to show you the newest and best technology to build your websites, apps. Our full stack courses are PROJECT - DRIVEN, meaning one course will provide the entire packages that you need to build you app(UI/UX, Frontend, Backend, database, SEO, Hosting, etc), there is no need to purchase multiple courses from different developers, no need to pick up different things from mulptile sources on line",open:!1},{id:2,q:"What kind of courses you are offering?",a:"We are offering Free and Paid courses, for free courses all you have to do is just sign-up, enroll the course, and you are ready to go. For paid courses, you can check the price in our course section.",open:!1},{id:3,q:"Do you have any promo, or dicounts?",a:"Sorry as for now, we are not offering any discounts yet.",open:!1},{id:4,q:"What do I get if I purchase your paid course?",a:"All our paid courses are life-time use after purchased, you can get our updates and ask us questions regarding to the topic through emails.",open:!1},{id:5,q:"How do I purchase your course?",a:"Please go to our courses section, click - More info, you can see the detail of the course, click  - add to cart, then go to the cart section, click - place order, you can see the PayPal button - Pay with Paypal, click the button to check out.",open:!1},{id:6,q:"What payment method do you accept?",a:"As for now, we only accept PayPal payment. If you are new  to PayPal, you can visit www.paypal.com to register an account",open:!1},{id:7,q:"Can I find your courses in any other platform?",a:"Yes, our courses will be available on other platforms such as Udemy. We will be announcing soon.",open:!1},{id:8,q:"How can I contact you if I have more questions?",a:"You can reach us at stackmy@gmail.com. We will get back to you asap",open:!1}],this.showAnswer=!1}ngOnInit(){(0,u.of)(this.data).subscribe(t=>{this.items=t})}showQAnswer(t){console.log("id",t);const a=this.data.find(s=>s.id==t);a&&(a.open=!0,console.log("findItem,",a))}closeQAnswer(t){const a=this.data.find(s=>s.id==t);a&&(a.open=!1,console.log("findItem,",a))}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-help-main"]],decls:10,vars:1,consts:[[1,"desktop-view-layout"],[1,"topbar-d"],[1,"sidebar-a"],["routerLink","/",1,"stackmy-logo-c","showwlogo"],["src","assets/logo/irresistible.courses-b.png","alt",""],["routerLink","/",1,"stackmy-logo-c","shwodlogo"],["src","assets/logo/irresistible.courses.png","alt",""],[1,"faq-container"],["class","question-items-container",4,"ngFor","ngForOf"],[1,"question-items-container"],[1,"question-item"],[1,"question-a-container"],[1,"faq-question"],["class","question-icon","src","assets/icon/bx-plus-circle-w.svg",3,"svgStyle","click",4,"ngIf"],["class","question-icon","src","assets/icon/bx-minus-circle-w.svg",3,"svgStyle","click",4,"ngIf"],[1,"faq-a-container"],["class","faq-answer",4,"ngIf"],["src","assets/icon/bx-plus-circle-w.svg",1,"question-icon",3,"svgStyle","click"],["src","assets/icon/bx-minus-circle-w.svg",1,"question-icon",3,"svgStyle","click"],[1,"faq-answer"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-navbar-wide",1),e.TgZ(2,"div",2),e._UZ(3,"app-sidebar-menu-main"),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"img",6),e.qZA(),e.TgZ(8,"div",7),e.YNc(9,y,9,4,"div",8),e.qZA(),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngForOf",a.items))},directives:[g.A,m.H,c.rH,r.sg,r.O5,p.bk],styles:['.desktop-view-layout[_ngcontent-%COMP%]{display:grid;grid-column-gap:.5rem;column-gap:.5rem;grid-template-columns:260px 1fr 1fr 1fr 1fr;grid-template-rows:150px 1fr 1fr 1fr 1fr;grid-template-areas:"hslogo topbarArea topbarArea topbarArea topbarArea" "sidebar contentArea contentArea contentArea contentArea" "sidebar contentArea contentArea contentArea contentArea" "sidebar contentArea contentArea contentArea contentArea" "sidebar contentArea contentArea contentArea contentArea";align-items:start;width:100vw;height:100vh}.stackmy-logo-c[_ngcontent-%COMP%]{width:180px;margin:3.5rem 0 0 3rem}.sidebar-a[_ngcontent-%COMP%]{grid-area:sidebar;position:sticky;top:150px;align-self:start}.hslogo-c[_ngcontent-%COMP%]{grid-area:hslogo;width:180px;margin:2.6rem 0 0 3rem}.topbar-d[_ngcontent-%COMP%]{margin-top:1rem;grid-area:topbarArea;position:sticky;top:18px;align-self:start}.content-b[_ngcontent-%COMP%]{grid-area:contentArea}.promo-card[_ngcontent-%COMP%]{grid-area:rightSidebar1}.faq-container[_ngcontent-%COMP%]{width:600px;margin:0 auto;grid-area:contentArea}.question-icon[_ngcontent-%COMP%]{fill:var(--text-color)}.question-item[_ngcontent-%COMP%]{margin:1.5rem auto}.faq-question[_ngcontent-%COMP%]{font-size:.9rem;font-weight:600;color:var(--text-color);margin-top:.5rem}.faq-answer[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;color:var(--help-bodt-text);text-align:left;width:540px;line-height:1.7em}.question-a-container[_ngcontent-%COMP%]{width:600px;display:flex;justify-content:space-between}.showwlogo[_ngcontent-%COMP%]{display:var(--showw-logo-display);visibility:var(--showw-logo-visibility);transition:all .3s linear}.shwodlogo[_ngcontent-%COMP%]{display:var(--showb-logo-display);visibility:var(--showb-logo-visibility);transition:all .3s linear}']}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.Bz.forChild(w)],c.Bz]}),o})();var b=n(8713),M=n(4466);let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[r.ez,A,b.W,p._J,M.m]]}),o})()}}]);