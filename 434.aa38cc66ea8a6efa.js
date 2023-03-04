"use strict";(self.webpackChunkhsmynewapp=self.webpackChunkhsmynewapp||[]).push([[434],{8434:(eo,A,n)=>{n.r(A),n.d(A,{CourseAdditionalModule:()=>K});var U=n(9808),$=n(8248),T=n(8713),N=n(4466),r=n(5620),u=n(506),m=n(5215),s=n(2382);const k=(0,r.PH)("[Course/API] Load Course Additional",(0,r.Ky)()),C=(0,r.PH)("[Course/API] Load Course Additional",(0,r.Ky)()),f=(0,r.PH)("[Course/API] Load Course Additional Failure",(0,r.Ky)()),I=(0,r.PH)("[Course/API] Add Course Additional",(0,r.Ky)()),h=(0,r.PH)("[Course/API] Add Course Additional Success",(0,r.Ky)()),Z=(0,r.PH)("[Course/API] Add Course Additional Failure",(0,r.Ky)());var o=n(5e3);const P=[{path:"add-course-property",component:(()=>{class e{constructor(t){this.store=t}ngOnInit(){this.myForm=new s.cw({coursePrice:new s.NI,courseDuration:new s.NI,totalSections:new s.NI,totalTopics:new s.NI,skillsLearned1:new s.NI,skillsLearned2:new s.NI,skillsLearned3:new s.NI,skillsLearned4:new s.NI,toolsUsed1:new s.NI,toolsUsed2:new s.NI,toolsUsed3:new s.NI,toolsUsed4:new s.NI,toolsUsedImg1:new s.NI,toolsUsedImg2:new s.NI,toolsUsedImg3:new s.NI,toolsUsedImg4:new s.NI})}onSubmit(t){console.log("form value",t.value),this.store.dispatch(I({courseAdditional:t.value}))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.yh))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-add-course-additional"]],decls:41,vars:1,consts:[["routerLink","/"],["src","assets/logo/hslogo.png","alt","",1,"logo"],[1,"wrap"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","coursePrice","name","coursePrice","placeholder","course Price","type","number"],["formControlName","courseDuration","name","courseDuration","placeholder","course Duration","type","text"],["formControlName","totalSections","name","totalSections","placeholder","total Sections","type","number"],["formControlName","totalTopics","name","totalTopics","placeholder","total topics","type","number"],["formControlName","skillsLearned1","name","skillsLearned1","placeholder","skills Learned 1","type","text"],["formControlName","skillsLearned2","name","skillsLearned2","placeholder","skills Learned 2","type","text"],["formControlName","skillsLearned3","name","skillsLearned3","placeholder","skills Learned 3","type","text"],["formControlName","skillsLearned4","name","skillsLearned4","placeholder","skills Learned 4","type","text"],["formControlName","toolsUsed1","name","toolsUsed1","placeholder","tools Used 1","type","text"],["formControlName","toolsUsed2","name","toolsUsed2","placeholder","tools Used 2","type","text"],["formControlName","toolsUsed3","name","toolsUsed3","placeholder","tools Used 3","type","text"],["formControlName","toolsUsed4","name","toolsUsed4","placeholder","tools Used 4","type","text"],["formControlName","toolsUsedImg1","name","toolsUsedImg1","placeholder","tools Used Img 1","type","text"],["formControlName","toolsUsedImg2","name","toolsUsedImg2","placeholder","tools Used Img 2","type","text"],["formControlName","toolsUsedImg3","name","toolsUsedImg3","placeholder","tools Used Img 3","type","text"],["formControlName","toolsUsedImg4","name","toolsUsedImg4","placeholder","tools Used Img 4","type","text"],["type","submit",1,"btn"]],template:function(t,a){1&t&&(o.TgZ(0,"a",0),o._UZ(1,"img",1),o.qZA(),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"h4"),o._uU(5,"Add Course Property"),o.qZA(),o.TgZ(6,"form",4),o.NdJ("ngSubmit",function(){return a.onSubmit(a.myForm)}),o.TgZ(7,"div",5),o._UZ(8,"input",6),o.qZA(),o.TgZ(9,"div",5),o._UZ(10,"input",7),o.qZA(),o.TgZ(11,"div",5),o._UZ(12,"input",8),o.qZA(),o.TgZ(13,"div",5),o._UZ(14,"input",9),o.qZA(),o.TgZ(15,"div",5),o._UZ(16,"input",10),o.qZA(),o.TgZ(17,"div",5),o._UZ(18,"input",11),o.qZA(),o.TgZ(19,"div",5),o._UZ(20,"input",12),o.qZA(),o.TgZ(21,"div",5),o._UZ(22,"input",13),o.qZA(),o.TgZ(23,"div",5),o._UZ(24,"input",14),o.qZA(),o.TgZ(25,"div",5),o._UZ(26,"input",15),o.qZA(),o.TgZ(27,"div",5),o._UZ(28,"input",16),o.qZA(),o.TgZ(29,"div",5),o._UZ(30,"input",17),o.qZA(),o.TgZ(31,"div",5),o._UZ(32,"input",18),o.qZA(),o.TgZ(33,"div",5),o._UZ(34,"input",19),o.qZA(),o.TgZ(35,"div",5),o._UZ(36,"input",20),o.qZA(),o.TgZ(37,"div",5),o._UZ(38,"input",21),o.qZA(),o.TgZ(39,"button",22),o._uU(40," Submit "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.Q6J("formGroup",a.myForm))},directives:[m.yS,s._Y,s.JL,s.sg,s.Fj,s.wV,s.JJ,s.u],styles:[".login-btn[_ngcontent-%COMP%]{color:#494949;text-transform:uppercase;text-decoration:none;background:#ffffff;padding:3px;border:1px solid #494949;display:inline-block;transition:all .4s ease 0s}.container[_ngcontent-%COMP%]{max-width:500px;background:white;padding:2px 16px;box-shadow:#18274b26 0 19px 80px,#18274b26 0 10px 60px;width:100%;border-radius:20px;margin:2rem auto}input[_ngcontent-%COMP%]{width:100%;background:#f5f5f5;border:0;padding:18px;border-radius:15px;margin-bottom:20px;border:1px solid #eee}h4[_ngcontent-%COMP%]{text-align:center;font-size:1.4rem;font-weight:700;color:#282828;margin:15px auto}.btn[_ngcontent-%COMP%]{position:relative;width:100%;padding:14px;border-radius:14px;border:0;background:#282828;font-size:1.2em;color:#fff;text-shadow:1px 1px 0px rgba(0,0,0,.1);box-shadow:0 3px #e4e4e4;margin-bottom:1rem;font-weight:700}.btn[_ngcontent-%COMP%]:active{top:3px;box-shadow:none}.wrap[_ngcontent-%COMP%]{margin-top:1rem}.logo[_ngcontent-%COMP%]{display:block;margin-top:2rem;margin-left:auto;margin-right:auto;width:200px}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),e})();const v=(0,n(5685).H)(),F=v.getInitialState({error:void 0,singleCourseAdditional:void 0,addedCourseAdditional:void 0}),D=(0,r.Lq)(F,(0,r.on)(C,(e,l)=>Object.assign(Object.assign({},e),{singleCourseAdditional:l.courseAdditional})),(0,r.on)(f,(e,l)=>Object.assign(Object.assign({},e),{error:l.error})),(0,r.on)(h,(e,l)=>Object.assign(Object.assign({},e),{addedCourseAdditional:l.courseAdditional})),(0,r.on)(Z,(e,l)=>Object.assign(Object.assign({},e),{error:l.error})));v.getSelectors();var L=n(9646),y=n(5577),S=n(8505),g=n(4004),x=n(262),p=n(9478),M=n(9298);let j=(()=>{class e{constructor(t){this.apollo=t}getOneCourseAdditional(t){return this.apollo.watchQuery({query:E,variables:{id:t}}).valueChanges.pipe((0,g.U)(c=>c.data.findOneAdditionalCourse))}addOneCourseAdditional(t,a,c,d,i,J,R,H,B,Q,Y,W,X,V,_,oo){return console.log("add course additioonal sertvice runs - coursePrice",t),console.log("add course additioonal sertvice runs - courseDuration",a),this.apollo.mutate({mutation:z,variables:{coursePrice:t,courseDuration:a,totalSections:c,totalTopics:d,skillsLearned1:i,skillsLearned2:J,skillsLearned3:R,skillsLearned4:H,toolsUsed1:B,toolsUsed2:Q,toolsUsed3:Y,toolsUsed4:W,toolsUsedImg1:X,toolsUsedImg2:V,toolsUsedImg3:_,toolsUsedImg4:oo},refetchQueries:[{query:q}]})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(M._M))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const E=p.Ps`
    query findOneAdditionalCourse($id: String!) {
        findOneAdditionalCourse(id: $id) {
            id
            coursePrice
            courseDuration
            totalSections
        }
    }
`,z=p.Ps`
    mutation createAdditionalCourse(
        $coursePrice: Float!
        $courseDuration: String!
        $totalSections: Float!
        $totalTopics: Float!
        $skillsLearned1: String
        $skillsLearned2: String
        $skillsLearned3: String
        $skillsLearned4: String
        $toolsUsed1: String
        $toolsUsed2: String
        $toolsUsed3: String
        $toolsUsed4: String
        $toolsUsedImg1: String
        $toolsUsedImg2: String
        $toolsUsedImg3: String
        $toolsUsedImg4: String
    ) {
        createAdditionalCourse(
            coursePrice: $coursePrice
            courseDuration: $courseDuration
            totalSections: $totalSections
            totalTopics: $totalTopics
            skillsLearned1: $skillsLearned1
            skillsLearned2: $skillsLearned2
            skillsLearned3: $skillsLearned3
            skillsLearned4: $skillsLearned4
            toolsUsed1: $toolsUsed1
            toolsUsed2: $toolsUsed2
            toolsUsed3: $toolsUsed3
            toolsUsed4: $toolsUsed4
            toolsUsedImg1: $toolsUsedImg1
            toolsUsedImg2: $toolsUsedImg2
            toolsUsedImg3: $toolsUsedImg3
            toolsUsedImg4: $toolsUsedImg4
        ) {
            id
            coursePrice
            courseDuration
            totalSections
            totalTopics
            skillsLearned1
            skillsLearned2
            skillsLearned3
            skillsLearned4
            toolsUsed1
            toolsUsed2
            toolsUsed3
            toolsUsed4
            toolsUsedImg1
            toolsUsedImg2
            toolsUsedImg3
            toolsUsedImg4
        }
    }
`,q=p.Ps`
    query {
        findAllAdditionalCourse {
            id
            coursePrice
            courseDuration
            totalSections
            totalTopics
            skillsLearned1
            skillsLearned2
            skillsLearned3
            skillsLearned4
            toolsUsed1
            toolsUsed2
            toolsUsed3
            toolsUsed4
            toolsUsedImg1
            toolsUsedImg2
            toolsUsedImg3
            toolsUsedImg4
        }
    }
`;let G=(()=>{class e{constructor(t,a,c){this.actions$=t,this.courseAdditionalService=a,this.router=c,this.loadCourseAdditional$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(k),(0,y.z)(d=>this.courseAdditionalService.getOneCourseAdditional(d.id).pipe((0,S.b)(i=>{}),(0,g.U)(i=>C({courseAdditional:i})),(0,x.K)(i=>(0,L.of)(f({error:i}))))))),this.addCourseAdditional$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(I),(0,y.z)(d=>this.courseAdditionalService.addOneCourseAdditional(d.courseAdditional.coursePrice,d.courseAdditional.courseDuration,d.courseAdditional.totalSections,d.courseAdditional.totalTopics,d.courseAdditional.skillsLearned1,d.courseAdditional.skillsLearned2,d.courseAdditional.skillsLearned3,d.courseAdditional.skillsLearned4,d.courseAdditional.toolsUsed1,d.courseAdditional.toolsUsed2,d.courseAdditional.toolsUsed3,d.courseAdditional.toolsUsed4,d.courseAdditional.toolsUsedImg1,d.courseAdditional.toolsUsedImg2,d.courseAdditional.toolsUsedImg3,d.courseAdditional.toolsUsedImg4).pipe((0,S.b)(i=>{console.log("loadCourses$ - effect",i)}),(0,g.U)(i=>i.data.createAdditionalCourse),(0,g.U)(i=>h({courseAdditional:i})),(0,x.K)(i=>(0,L.of)(Z({error:i})))))))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(u.eX),o.LFG(j),o.LFG(m.F0))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[b,U.ez,U.ez,$._J,T.W,N.m,s.UX,r.Aw.forFeature("course-additional",D),u.sQ.forFeature([G])]]}),e})()}}]);