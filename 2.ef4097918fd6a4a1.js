"use strict";(self.webpackChunkhsmynewapp=self.webpackChunkhsmynewapp||[]).push([[2],{9002:(xt,Z,r)=>{r.r(Z),r.d(Z,{SectionsModule:()=>vt});var y=r(9808),l=r(2382),p=r(5215),n=r(5620);const J=(0,n.PH)("[Section List Component] Load multiple Sections",(0,n.Ky)()),P=(0,n.PH)("[Section List Component] Load Sections Success",(0,n.Ky)()),M=(0,n.PH)("[Section List Component] Load Sections Failure",(0,n.Ky)()),I=(0,n.PH)("[Section List Component] Load Single Section",(0,n.Ky)()),w=(0,n.PH)("[Section List Component] Load Single Section Success",(0,n.Ky)()),A=(0,n.PH)("[Section List Component] Load Single Section Failure",(0,n.Ky)()),T=(0,n.PH)("[Section List Component] Load Sections By CourseId",(0,n.Ky)()),F=(0,n.PH)("[Section List Component] Load Sections By CourseId Success",(0,n.Ky)()),N=(0,n.PH)("[Section List Component] Load Sections By CourseId Failure",(0,n.Ky)()),_=(0,n.PH)("[Section List Component] Create Section",(0,n.Ky)()),U=(0,n.PH)("[Section List Component] Create Section Success",(0,n.Ky)()),L=(0,n.PH)("[Section List Component] Create Section Failure",(0,n.Ky)()),$=(0,n.PH)("[Section List Component] Delete Section",(0,n.Ky)()),k=(0,n.PH)("[Section List Component] Delete Section Success",(0,n.Ky)()),q=(0,n.PH)("[Section List Component] Delete Section Failure",(0,n.Ky)()),Q=(0,n.PH)("[Section API Delete] Delete Section From Course",(0,n.Ky)()),j=(0,n.PH)("[Section API Delete] Delete Section From Course Success",(0,n.Ky)()),E=(0,n.PH)("[Section API Delete] Delete Section From Course Failure",(0,n.Ky)()),x=(0,n.PH)("[Section List Component] Edit Section",(0,n.Ky)()),B=(0,n.PH)("[Section List Component] Edit Section Success",(0,n.Ky)()),K=(0,n.PH)("[Section List Component] Edit Section Failure",(0,n.Ky)());var t=r(5e3);let W=(()=>{class e{constructor(o){this.store=o}ngOnInit(){this.myForm=new l.cw({sectionName:new l.NI,sectionIntroduction:new l.NI,courseId:new l.NI})}onSubmit(o){console.log("form value",o.value);let s={};o.value.sectionName&&(s.sectionName=o.value.sectionName),o.value.sectionIntroduction&&(s.sectionIntroduction=o.value.sectionIntroduction),o.value.courseId&&(s.courseId=o.value.courseId),this.store.dispatch(_({section:s}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-section"]],decls:15,vars:1,consts:[["routerLink","/"],["src","assets/logo/hslogo.png","alt","",1,"logo"],[1,"wrap"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","courseId","name","courseId","placeholder","Course Id","type","text"],["formControlName","sectionName","name","sectionName","placeholder","Section Name","type","text"],["formControlName","sectionIntroduction","name","sectionIntroduction","placeholder","Section Introduction","type","text"],["type","submit",1,"btn"]],template:function(o,s){1&o&&(t.TgZ(0,"a",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Add Section"),t.qZA(),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return s.onSubmit(s.myForm)}),t.TgZ(7,"div",5),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"button",9),t._uU(14," Submit "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",s.myForm))},directives:[p.yS,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u],styles:[".login-btn[_ngcontent-%COMP%]{color:#494949;text-transform:uppercase;text-decoration:none;background:#ffffff;padding:3px;border:1px solid #494949;display:inline-block;transition:all .4s ease 0s}.container[_ngcontent-%COMP%]{max-width:500px;max-height:600px;background:white;padding:2px 16px;box-shadow:#18274b26 0 19px 80px,#18274b26 0 10px 60px;width:100%;border-radius:20px;margin:2rem auto}input[_ngcontent-%COMP%]{width:100%;background:#f5f5f5;border:0;padding:18px;border-radius:15px;margin-bottom:20px;border:1px solid #eee}h4[_ngcontent-%COMP%]{text-align:center;font-size:1.4rem;font-weight:700;color:#282828;margin:15px auto}.btn[_ngcontent-%COMP%]{position:relative;width:100%;padding:14px;border-radius:14px;border:0;background:#282828;font-size:1.2em;color:#fff;text-shadow:1px 1px 0px rgba(0,0,0,.1);box-shadow:0 3px #e4e4e4;margin-bottom:1rem;font-weight:700}.btn[_ngcontent-%COMP%]:active{top:3px;box-shadow:none}.wrap[_ngcontent-%COMP%]{margin-top:1rem}.logo[_ngcontent-%COMP%]{display:block;margin-top:2rem;margin-left:auto;margin-right:auto;width:200px}"]}),e})();var R=r(5685);const z="sections",v=(0,R.H)(),X=v.getInitialState({error:void 0,selectedSection:void 0,sections:void 0,updateSection:void 0,sectionsByCourse:void 0}),D=(0,n.Lq)(X,(0,n.on)(P,(e,i)=>Object.assign(Object.assign({},e),{sections:i.sections})),(0,n.on)(M,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(w,(e,i)=>Object.assign(Object.assign({},e),{selectedSection:i.section})),(0,n.on)(A,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(F,(e,i)=>Object.assign(Object.assign({},e),{sectionsByCourse:i.sections})),(0,n.on)(N,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(U,(e,i)=>v.addOne(i.section,e)),(0,n.on)(L,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(k,(e,i)=>{const o=e.sectionsByCourse.filter(s=>s.id!==i.id);return Object.assign(Object.assign({},e),{sectionsByCourse:o})}),(0,n.on)(q,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(j,(e,i)=>Object.assign(Object.assign({},e),{sectionsByCourse:e.sectionsByCourse.filter(o=>o.id!==i.id)})),(0,n.on)(E,(e,i)=>Object.assign(Object.assign({},e),{error:i.error})),(0,n.on)(x,(e,i)=>v.updateOne(i.section,e)),(0,n.on)(B,(e,i)=>Object.assign(Object.assign({},e),{updateSection:i.section})),(0,n.on)(K,(e,i)=>Object.assign(Object.assign({},e),{error:i.error}))),{selectAll:V}=v.getSelectors(),O=(0,n.ZF)(z),H=((0,n.P1)(O,V),(0,n.P1)(O,e=>e.selectedSection)),tt=(0,n.P1)(O,e=>e.sectionsByCourse);let et=(()=>{class e{constructor(o,s,a,d){this.store=o,this.route=s,this.router=a,this.fb=d}ngOnInit(){const o=this.route.snapshot.paramMap.get("id");console.log("sectionId",o),o&&this.store.dispatch(I({id:o})),this.section$=this.store.select(H),this.subscription$=this.store.select(H).subscribe(s=>{this.singleSection=s,this.loadSection()})}loadSection(){console.log("section",this.singleSection),this.myForm=this.fb.group({sectionId:this.fb.control(this.singleSection&&this.singleSection.id||""),sectionName:this.fb.control(this.singleSection&&this.singleSection.sectionName||""),sectionIntroduction:this.fb.control(this.singleSection&&this.singleSection.sectionIntroduction||"")})}onSubmit(o){const a={id:this.route.snapshot.paramMap.get("id"),changes:o.value};console.log("update",a),this.store.dispatch(x({section:a})),this.router.navigate(["/courses"])}ngOnDestroy(){this.subscription$.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.yh),t.Y36(p.gz),t.Y36(p.F0),t.Y36(l.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-section"]],decls:15,vars:1,consts:[["routerLink","/"],["src","assets/logo/hslogo.png","alt","",1,"logo"],[1,"wrap"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","sectionId","name","sectionId","placeholder","Section Id","type","text"],["formControlName","sectionName","name","sectionName","placeholder","Section Name","type","text"],["formControlName","sectionIntroduction","name","sectionIntroduction","placeholder","Section Introduction","type","text"],["type","submit",1,"btn"]],template:function(o,s){1&o&&(t.TgZ(0,"a",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4"),t._uU(5,"Edit Section"),t.qZA(),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return s.onSubmit(s.myForm)}),t.TgZ(7,"div",5),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"button",9),t._uU(14," Submit "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(6),t.Q6J("formGroup",s.myForm))},directives:[p.yS,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u],styles:[".login-btn[_ngcontent-%COMP%]{color:#494949;text-transform:uppercase;text-decoration:none;background:#ffffff;padding:3px;border:1px solid #494949;display:inline-block;transition:all .4s ease 0s}.container[_ngcontent-%COMP%]{max-width:500px;max-height:600px;background:white;padding:2px 16px;box-shadow:#18274b26 0 19px 80px,#18274b26 0 10px 60px;width:100%;border-radius:20px;margin:2rem auto}input[_ngcontent-%COMP%]{width:100%;background:#f5f5f5;border:0;padding:18px;border-radius:15px;margin-bottom:20px;border:1px solid #eee}h4[_ngcontent-%COMP%]{text-align:center;font-size:1.4rem;font-weight:700;color:#282828;margin:15px auto}.btn[_ngcontent-%COMP%]{position:relative;width:100%;padding:14px;border-radius:14px;border:0;background:#282828;font-size:1.2em;color:#fff;text-shadow:1px 1px 0px rgba(0,0,0,.1);box-shadow:0 3px #e4e4e4;margin-bottom:1rem;font-weight:700}.btn[_ngcontent-%COMP%]:active{top:3px;box-shadow:none}.wrap[_ngcontent-%COMP%]{margin-top:1rem}.logo[_ngcontent-%COMP%]{display:block;margin-top:2rem;margin-left:auto;margin-right:auto;width:200px}"]}),e})();var ot=r(3852),nt=r(6181),it=r(6094),Y=r(8248);const ct=function(e){return["/courses/sections/topics",e]},st=function(){return{"width.px":28}};function rt(e,i){if(1&e&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"div",18),t.TgZ(3,"h4",19),t._uU(4),t.qZA(),t.TgZ(5,"div",20),t.TgZ(6,"p",21),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",22),t.TgZ(9,"div",23),t.TgZ(10,"span",24),t._uU(11,"8 "),t.qZA(),t._uU(12,"lessons"),t.qZA(),t._UZ(13,"div",25),t.TgZ(14,"div",26),t.TgZ(15,"span",24),t._uU(16,"75 "),t.qZA(),t._uU(17," min"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",27),t.TgZ(19,"div",28),t._UZ(20,"svg-icon",29),t.qZA(),t.qZA(),t.qZA(),t._UZ(21,"div",30),t.qZA()),2&e){const o=i.$implicit;t.xp6(4),t.Oqu(o.sectionName),t.xp6(3),t.Oqu(o.sectionIntroduction),t.xp6(12),t.Q6J("routerLink",t.VKq(4,ct,o.id)),t.xp6(1),t.Q6J("svgStyle",t.DdM(6,st))}}function at(e,i){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.AsE(" ",o.sectionName," ",o.id,"\n")}}const dt=[{path:"add-section",component:W},{path:"edit-section/:id",component:et},{path:":id",component:(()=>{class e{constructor(o,s,a,d,c){this.store=o,this.route=s,this.router=a,this.activatedRoute=d,this.location=c,this.sections$=o.select(tt)}ngOnInit(){this.courseID=this.route.snapshot.paramMap.get("id"),this.store.dispatch(T({id:this.courseID}))}deleteSection(o){this.store.dispatch($({id:o}))}backClicked(){this.location.back()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(n.yh),t.Y36(p.gz),t.Y36(p.F0),t.Y36(p.gz),t.Y36(y.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sections-main"]],decls:22,vars:6,consts:[[1,"desktop-view-layout"],[1,"topbar-h"],[1,"topbar-d"],["routerLink","/",1,"stackmy-logo-c","showwlogo"],["src","assets/logo/appready-logo-b.png","alt",""],["routerLink","/",1,"stackmy-logo-c","shwodlogo"],["src","assets/logo/appready-logo-w.png","alt",""],[1,"sidebar-a"],[1,"course-detail-container","content-b"],[1,"course-head"],[1,"course-section-container"],[1,"course-section-header"],["type","submit",1,"btn",3,"click"],[1,"section-bg"],["class","section-items",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"section-items"],[1,"section-item"],[1,"section-header"],[1,"section-title"],[1,"section-intro-container"],[1,"section-intro"],[1,"extra-info"],[1,"section-course-counts"],[1,"text-700"],[1,"vl"],[1,"section-course-duration"],[1,"section-body"],[1,"right-arrow-icon-container",3,"routerLink"],["src","assets/icon/bx-chevron-right.svg ",1,"arrow-icon",3,"svgStyle"],[1,"divider"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-navbar-main",1),t._UZ(2,"app-navbar-wide",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t._UZ(7,"app-sidebar-menu-main",7),t.TgZ(8,"div",8),t.TgZ(9,"div",9),t.TgZ(10,"div",10),t.TgZ(11,"div"),t.TgZ(12,"h4",11),t._uU(13,"Sections"),t.qZA(),t.qZA(),t.TgZ(14,"div"),t.TgZ(15,"a",12),t.NdJ("click",function(){return s.backClicked()}),t._uU(16," Back to course "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",13),t.YNc(18,rt,22,7,"div",14),t.ALo(19,"async"),t.qZA(),t.qZA(),t.qZA(),t.YNc(20,at,2,2,"div",15),t.ALo(21,"async")),2&o&&(t.xp6(18),t.Q6J("ngForOf",t.lcZ(19,2,s.sections$)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(21,4,s.sectionSelected$)))},directives:[ot.N,nt.A,p.rH,it.H,y.sg,Y.bk],pipes:[y.Ov],styles:['.desktop-view-layout[_ngcontent-%COMP%]{display:grid;grid-column-gap:.5rem;column-gap:.5rem;grid-template-columns:260px 1fr 1fr 1fr;grid-template-rows:150px 1fr 1fr;grid-template-areas:"hslogo topbarArea topbarArea topbarArea " "sidebar contentArea contentArea contentArea " "sidebar contentArea contentArea contentArea ";align-items:start}.sidebar-a[_ngcontent-%COMP%]{grid-area:sidebar}.content-b[_ngcontent-%COMP%]{grid-area:contentArea}.stackmy-logo-c[_ngcontent-%COMP%]{width:180px;margin:2.6rem 0 0 3rem}.topbar-d[_ngcontent-%COMP%]{margin-top:1rem;grid-area:topbarArea;position:sticky;top:18px;align-self:start;z-index:1008}.topbar-h[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{width:100%;padding:5px 9px;border-radius:8px;border:0;font-size:.7em;background:var(--section-btn-bg);color:var(--section-btn);margin:.5rem 2rem;font-weight:700}.btn-danger[_ngcontent-%COMP%]{width:100%;padding:3px 6px;border-radius:6px;border:0;background:#a50505;font-size:.7em;color:#fff;text-shadow:1px 1px 0px rgba(0,0,0,.1);box-shadow:0 3px #e4e4e4;margin:.5rem 0;font-weight:700}.btn[_ngcontent-%COMP%]:active{top:3px;box-shadow:none}.btn-container[_ngcontent-%COMP%]{margin:.7rem auto}.course-detail-container[_ngcontent-%COMP%]{max-width:550px;background:var(--bg-mylearning-color);box-shadow:var(--course-back-ground-dark);width:100%;border-radius:18px;margin:0 auto}.course-section-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.back-logo[_ngcontent-%COMP%]{width:25px;color:#3f3f3f}.back-logo-container[_ngcontent-%COMP%]{margin-right:1rem}.course-section-header[_ngcontent-%COMP%]{margin-left:2.2rem;font-size:1.1rem;color:var(--text-color)}.course-head[_ngcontent-%COMP%]{max-width:550px;width:100%;border-radius:18px 18px 0 0;background-color:var(--section-header-bg);text-align:center;padding-top:1.5rem;padding-bottom:.8rem}.arrow-icon[_ngcontent-%COMP%]{fill:var(--text-color)}.right-arrow-icon-container[_ngcontent-%COMP%]{padding-top:.6rem;cursor:pointer}.hs-logo[_ngcontent-%COMP%]{width:12px}.fire-logo[_ngcontent-%COMP%]{padding-top:.11rem}.section-items[_ngcontent-%COMP%]{width:100%}.section-item[_ngcontent-%COMP%]:last-child > .section-body[_ngcontent-%COMP%]{padding-bottom:.8rem}.divider[_ngcontent-%COMP%]{content:"";border-bottom:1px solid var(--section-vl);width:480px;margin:.7rem auto}.section-bg[_ngcontent-%COMP%]{background:var(--bg-mylearning-color);border-radius:0 0 18px 18px;margin:.5rem auto;display:flex;flex-wrap:wrap;max-height:500px;overflow-y:scroll;grid-column-gap:10px;column-gap:10px}.section-item[_ngcontent-%COMP%]{margin:.4rem .7rem;display:flex;justify-content:space-between;align-items:center}.section-header[_ngcontent-%COMP%]{margin:0 1.5rem;align-items:center}.section-title[_ngcontent-%COMP%]{color:var(--text-color);font-size:.9rem}.section-body[_ngcontent-%COMP%]{margin-right:.5rem}.section-course-counts[_ngcontent-%COMP%], .section-course-duration[_ngcontent-%COMP%]{font-size:.7rem;color:var(--text-color);font-weight:500}.extra-info[_ngcontent-%COMP%]{display:flex;margin-top:.4rem}.text-700[_ngcontent-%COMP%]{font-weight:700;color:var(--course-title-darker)}.section-intro-container[_ngcontent-%COMP%]{margin:.3rem auto;overflow-wrap:break-word;max-width:430px}.section-intro[_ngcontent-%COMP%]{font-size:.7rem;color:var(--section-body-text)}.vl[_ngcontent-%COMP%]{border-left:1px solid var(--section-body-text);height:12px;margin:.2rem .7rem}.section-items[_ngcontent-%COMP%]:last-child > .divider[_ngcontent-%COMP%]{display:none}.section-single-item[_ngcontent-%COMP%]{margin:1rem 2rem;align-items:center}.form-control[_ngcontent-%COMP%]{font-weight:700;line-height:1.1;display:grid;grid-template-columns:1em auto;grid-gap:.5em;gap:.5em}input[type=checkbox][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--form-background);margin:0;font:inherit;color:#090909;width:.95em;height:.95em;border:.15em solid currentColor;border-radius:.25em;transform:translateY(-.075em);display:grid;place-content:center}input[type=checkbox][_ngcontent-%COMP%]:before{content:"";width:.55em;height:.55em;-webkit-clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);transform:scale(0);transform-origin:bottom left;transition:.12s transform ease-in-out;box-shadow:inset 1em 1em #0c0c0c;background-color:CanvasText}input[type=checkbox][_ngcontent-%COMP%]:checked:before{transform:scale(1)}.section-item-container[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center;margin-left:1.8rem}.play-logo-img[_ngcontent-%COMP%]{max-width:16px}.form-section-title[_ngcontent-%COMP%]{font-weight:500;font-size:.8rem;margin-left:.5rem}.play-logo-img[_ngcontent-%COMP%]{width:20px;margin:.3rem auto;display:block}.section-item-time[_ngcontent-%COMP%]{margin-left:.5rem}.time-title[_ngcontent-%COMP%]{font-size:.75rem;color:#888}.showwlogo[_ngcontent-%COMP%]{display:var(--showw-logo-display);visibility:var(--showw-logo-visibility);transition:all .3s linear}.shwodlogo[_ngcontent-%COMP%]{display:var(--showb-logo-display);visibility:var(--showb-logo-visibility);transition:all .3s linear}']}),e})()}];let lt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(dt)],p.Bz]}),e})();var gt=r(8713),ut=r(4466),g=r(506),m=r(5577),u=r(4004),S=r(262),h=r(9646),f=r(8505),b=r(9478),pt=r(9298);let mt=(()=>{class e{constructor(o){this.apollo=o}getSections(){return this.apollo.watchQuery({query:C}).valueChanges.pipe((0,u.U)(s=>s.data.sections),(0,f.b)(s=>console.log("sections",s)))}getSectionByCourseId(o){return this.apollo.watchQuery({query:ht,variables:{courseId:o}}).valueChanges.pipe((0,u.U)(a=>a.data.findSectionByCourseId),(0,f.b)(a=>console.log("findSectionByCourseId",a)))}getSection(o){return this.apollo.watchQuery({query:St,variables:{sectionId:o}}).valueChanges.pipe((0,u.U)(a=>a.data.section))}createSection(o){const{courseId:s,sectionName:a,sectionIntroduction:d}=o;return this.apollo.mutate({mutation:ft,variables:{courseId:s,sectionName:a,sectionIntroduction:d},refetchQueries:[{query:C}]})}updateSection(o,s){const{sectionName:a,sectionIntroduction:d}=s;return this.apollo.mutate({mutation:bt,variables:{sectionId:o,sectionName:a,sectionIntroduction:d},refetchQueries:[{query:C}]})}deleteSection(o){return this.apollo.mutate({mutation:G,variables:{sectionId:o},refetchQueries:[{query:C}]})}deleteSectionByCourse(o){return this.apollo.mutate({mutation:G,variables:{sectionId:o},refetchQueries:[{query:C}]})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(pt._M))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const C=b.Ps`
    query {
        sections {
            id
            created
            sectionName
            sectionIntroduction
        }
    }
`,St=b.Ps`
    query section($sectionId: String!) {
        section(sectionId: $sectionId) {
            id
            sectionName
            sectionIntroduction
        }
    }
`,ht=b.Ps`
    query findSectionByCourseId($courseId: String!) {
        findSectionByCourseId(courseId: $courseId) {
            id
            sectionName
            sectionIntroduction
        }
    }
`,ft=b.Ps`
    mutation createSection(
        $courseId: String!
        $sectionName: String!
        $sectionIntroduction: String!
    ) {
        createSection(
            creatSectionDTO: {
                courseId: $courseId
                sectionName: $sectionName
                sectionIntroduction: $sectionIntroduction
            }
        ) {
            id
            sectionName
            sectionIntroduction
        }
    }
`,bt=b.Ps`
    mutation updateSection(
        $sectionId: String!
        $sectionName: String!
        $sectionIntroduction: String!
    ) {
        updateSection(
            updatedSectionDTO: {
                sectionId: $sectionId
                sectionName: $sectionName
                sectionIntroduction: $sectionIntroduction
            }
        ) {
            id
            sectionName
            sectionIntroduction
        }
    }
`,G=b.Ps`
    mutation deleteSection($sectionId: String!) {
        deleteSection(sectionId: $sectionId)
    }
`;let Ct=(()=>{class e{constructor(o,s,a){this.actions$=o,this.sectionService=s,this.router=a,this.loadSections$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(J),(0,m.z)(d=>this.sectionService.getSections().pipe((0,u.U)(c=>P({sections:c})),(0,S.K)(c=>(0,h.of)(M({error:c}))))))),this.loadSection$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(I),(0,m.z)(d=>this.sectionService.getSection(d.id).pipe((0,u.U)(c=>w({section:c})),(0,S.K)(c=>(0,h.of)(A({error:c}))))))),this.loadSectionByCourse$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(T),(0,m.z)(d=>this.sectionService.getSectionByCourseId(d.id).pipe((0,f.b)(c=>console.log("effect load section by courseID",c)),(0,u.U)(c=>F({sections:c})),(0,S.K)(c=>(0,h.of)(N({error:c}))))))),this.createSection$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(_),(0,m.z)(d=>this.sectionService.createSection(d.section).pipe((0,f.b)(c=>console.log("effect add section runs",c)),(0,u.U)(c=>c.data.createSection),(0,u.U)(c=>U({section:c})),(0,S.K)(c=>(0,h.of)(L({error:c}))))))),this.editSection$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(x),(0,m.z)(d=>this.sectionService.updateSection(d.section.id,d.section.changes).pipe((0,f.b)(c=>console.log("effect edit section runs",c)),(0,u.U)(c=>c.data.updateSection),(0,u.U)(c=>B({section:c})),(0,S.K)(c=>(0,h.of)(K({error:c}))))))),this.deleteSection$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)($),(0,m.z)(d=>this.sectionService.deleteSection(d.id).pipe((0,u.U)(c=>c.data.deleteSection),(0,f.b)(c=>console.log("effect delete Section runs",c)),(0,u.U)(c=>k({id:c})),(0,S.K)(c=>(0,h.of)(q({error:c}))))))),this.deleteSectionByCourse=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(Q),(0,m.z)(d=>this.sectionService.deleteSectionByCourse(d.id).pipe((0,u.U)(c=>c.data.deleteSection),(0,u.U)(c=>j({id:c.id})),(0,S.K)(c=>(0,h.of)(E({error:c})))))))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eX),t.LFG(mt),t.LFG(p.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var yt=r(4321);let vt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[lt,y.ez,l.UX,Y._J,gt.W,yt.TopicsModule,ut.m,n.Aw.forFeature(z,D),g.sQ.forFeature([Ct])]]}),e})()}}]);