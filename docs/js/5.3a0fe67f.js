"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[5],{5358:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{height:"100vh","background-color":"var(--lightBg)"}},[e("div",{staticStyle:{width:"100%",height:"1px"}}),e("div",{staticClass:"background"}),e("el-card",{staticStyle:{width:"900px",height:"500px",margin:"18vh auto","border-radius":"10px","box-shadow":"43px 43px 59px #000000,-43px -43px 59px #ffffff"}},[e("div",{ref:"r1",staticClass:"containerLeft",staticStyle:{"z-index":"8"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("注册")]),e("FFAInput",{attrs:{placeholder:"邮箱","keydown-enter":t.getCode},model:{value:t.user.mail,callback:function(e){t.$set(t.user,"mail",e)},expression:"user.mail"}}),e("FFAInput",{staticClass:"codeInput",staticStyle:{"margin-bottom":"-33px"},attrs:{placeholder:"验证码","keydown-enter":t.verifyCode},model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[e("button",{ref:"codeBtn",staticClass:"getCode",staticStyle:{float:"right"},on:{click:t.getCode}},[t._v("获取验证码 "),0!==t.waitTime?e("span",[t._v(t._s(t.waitTime)+"s")]):t._e()])]),e("el-button",{staticClass:"btn",on:{click:t.verifyCode}},[t._v("→")])],1),e("div",{ref:"r2",staticClass:"containerLeft",staticStyle:{position:"absolute","z-index":"3",width:"450px",height:"500px",left:"calc(50% - 450px)"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("设置名称")]),e("FFAInput",{attrs:{placeholder:"姓名 (用户名)","keydown-enter":t.goToR3},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),e("FFAInput",{attrs:{placeholder:"养老院名","keydown-enter":t.goToR3},model:{value:t.user.careHomeName,callback:function(e){t.$set(t.user,"careHomeName",e)},expression:"user.careHomeName"}}),e("div",{staticStyle:{margin:"80px auto 0",width:"300px"}},[e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"left",margin:"0"},on:{click:t.backToR1}},[t._v("←")]),e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"right",margin:"0"},on:{click:t.goToR3}},[t._v("→")])],1)],1),e("div",{ref:"r3",staticClass:"containerLeft",staticStyle:{position:"absolute","z-index":"2",width:"450px",height:"500px",left:"calc(50% - 450px)"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("设置密码")]),e("FFAInput",{attrs:{placeholder:"密码","keydown-enter":t.register,type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),e("FFAInput",{attrs:{placeholder:"确认密码","keydown-enter":t.register,type:"password"},model:{value:t.user.confirm,callback:function(e){t.$set(t.user,"confirm",e)},expression:"user.confirm"}}),e("div",{staticStyle:{margin:"80px auto 0",width:"300px"}},[e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"left",margin:"0"},on:{click:t.backToR2}},[t._v("←")]),e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"right",margin:"0"},on:{click:t.register}},[t._v("→")])],1)],1),e("div",{ref:"r4",staticClass:"containerLeft",staticStyle:{position:"absolute","z-index":"1",width:"450px",height:"500px",left:"calc(50% - 450px)"}},[t.status?e("el-result",{staticStyle:{"margin-top":"80px"},attrs:{icon:"success",title:"注册成功",subTitle:"继续将前往登录界面"}},[e("template",{slot:"extra"},[e("el-button",{staticClass:"btn",staticStyle:{margin:"20px auto"},on:{click:t.changeMode}},[t._v("→")])],1)],2):e("el-result",{staticStyle:{"margin-top":"80px"},attrs:{icon:"error",title:"注册失败",subTitle:"继续将返回注册界面"}},[e("template",{slot:"extra"},[e("el-button",{staticClass:"btn",staticStyle:{margin:"20px auto"},on:{click:t.backToR3}},[t._v("←")])],1)],2)],1),e("div",{ref:"float",staticClass:"container float"},[e("span",{staticStyle:{"text-align":"center","font-size":"26px","margin-top":"80px","font-weight":"bold","letter-spacing":"3px"}},[t._v("至孝智慧养老")]),e("span",{staticStyle:{"text-align":"center","font-size":"18px","margin-top":"20px"}},[t._v("后台管理系统")]),e("div",{staticClass:"logo-container"},[e("img",{staticClass:"logo",attrs:{src:t.logo,alt:"LOGO"}})]),t.mode?e("span",{staticStyle:{"text-align":"center"}},[t._v("没有账号? "),e("span",{staticClass:"rText",on:{click:t.changeMode}},[t._v("前往注册")])]):e("span",{staticStyle:{"text-align":"center"}},[e("span",{staticClass:"rText",on:{click:t.changeMode}},[t._v("返回登录")])]),e("div",{staticStyle:{width:"200px",margin:"20px auto",display:"flex"}},[e("div",{staticStyle:{width:"40px",margin:"auto"}},[e("svg",{staticClass:"icon",staticStyle:{"border-radius":"50%","background-color":"white",border:"1px var(--btn) solid","justify-content":"center",cursor:"pointer"},attrs:{t:"1697272725080",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5276",width:"40",height:"40"}},[e("path",{attrs:{d:"M347.729118 353.0242c-16.487119 0-29.776737 13.389539-29.776737 29.776737S331.241998 412.677596 347.729118 412.677596s29.776737-13.389539 29.776737-29.776737-13.289617-29.876659-29.776737-29.876659zM577.749415 511.800156c-13.689305 0-24.880562 11.091335-24.880563 24.880562 0 13.689305 11.091335 24.880562 24.880563 24.880562 13.689305 0 24.880562-11.191257 24.880562-24.880562s-11.191257-24.880562-24.880562-24.880562zM500.909446 412.677596c16.487119 0 29.776737-13.389539 29.776737-29.776737s-13.389539-29.776737-29.776737-29.776737c-16.487119 0-29.776737 13.389539-29.776737 29.776737s13.289617 29.776737 29.776737 29.776737zM698.455113 511.600312c-13.689305 0-24.880562 11.091335-24.880562 24.880562 0 13.689305 11.091335 24.880562 24.880562 24.880562 13.689305 0 24.880562-11.091335 24.880562-24.880562-0.099922-13.689305-11.191257-24.880562-24.880562-24.880562z",fill:"#00C800","p-id":"5277"}}),e("path",{attrs:{d:"M511.601093 0.799375C229.12178 0.799375 0.000781 229.820453 0.000781 512.399688s229.021077 511.600312 511.600312 511.600312 511.600312-229.021077 511.600312-511.600312S794.180328 0.799375 511.601093 0.799375z m-90.229508 634.504294c-27.37861 0-49.361436-5.595628-76.839969-10.991413l-76.640125 38.469945 21.882904-65.948477c-54.957065-38.370023-87.73146-87.831382-87.73146-148.084309 0-104.318501 98.722873-186.554254 219.32865-186.554255 107.815769 0 202.34192 65.648712 221.327088 153.979703-6.994536-0.799375-13.989071-1.298985-21.083529-1.298985-104.118657 0-186.454333 77.739266-186.454332 173.564403 0 15.98751 2.498048 31.275566 6.794692 45.964091-6.794692 0.599532-13.689305 0.899297-20.583919 0.899297z m323.547228 76.839969l16.48712 54.757221-60.153006-32.874317c-21.882904 5.495706-43.965652 10.991413-65.848555 10.991413-104.318501 0-186.554254-71.344262-186.554255-159.175644 0-87.631538 82.135831-159.175644 186.554255-159.175644 98.523029 0 186.254489 71.444184 186.254488 159.175644 0.099922 49.461358-32.774395 93.227166-76.740047 126.301327z",fill:"#00C800","p-id":"5278"}})])])])]),e("div",{ref:"l1",staticClass:"containerRight",staticStyle:{"z-index":"5"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("登录")]),e("FFAInput",{attrs:{placeholder:"用户名","keydown-enter":t.login},model:{value:t.loginUser.name,callback:function(e){t.$set(t.loginUser,"name",e)},expression:"loginUser.name"}}),e("FFAInput",{attrs:{placeholder:"密码","keydown-enter":t.login,type:"password"},model:{value:t.loginUser.password,callback:function(e){t.$set(t.loginUser,"password",e)},expression:"loginUser.password"}}),e("el-button",{staticClass:"btn",on:{click:t.login}},[t._v("→")]),e("div",{staticStyle:{width:"300px",margin:"auto","font-weight":"lighter","font-size":"14px",color:"var(--btn)"}},[e("span",{staticClass:"aText",staticStyle:{float:"left"},on:{click:t.goToL2}},[t._v("通过邮箱验证码登录")]),e("span",{staticClass:"aText",staticStyle:{float:"right"},on:{click:t.goToL3}},[t._v("忘记密码?")])])],1),e("div",{ref:"l2",staticClass:"containerRight",staticStyle:{position:"absolute","z-index":"4",width:"450px",height:"500px",left:"50%"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("邮箱登录")]),e("FFAInput",{attrs:{placeholder:"邮箱","keydown-enter":t.getCode2},model:{value:t.loginUser.mail1,callback:function(e){t.$set(t.loginUser,"mail1",e)},expression:"loginUser.mail1"}}),e("FFAInput",{staticClass:"codeInput",staticStyle:{"margin-bottom":"-33px"},attrs:{placeholder:"验证码","keydown-enter":t.verifyCode2},model:{value:t.loginUser.code1,callback:function(e){t.$set(t.loginUser,"code1",e)},expression:"loginUser.code1"}},[e("button",{ref:"codeBtn2",staticClass:"getCode",staticStyle:{float:"right"},on:{click:t.getCode2}},[t._v("获取验证码 "),0!==t.waitTime?e("span",[t._v(t._s(t.waitTime)+"s")]):t._e()])]),e("el-button",{staticClass:"btn",on:{click:t.verifyCode2}},[t._v("→")]),e("span",{staticClass:"aText",staticStyle:{"text-align":"center","font-weight":"lighter","font-size":"14px",color:"var(--btn)","margin-top":"30px"},on:{click:t.mailBack}},[t._v("通过用户名密码登录")])],1),e("div",{ref:"l3",staticClass:"containerRight",staticStyle:{position:"absolute","z-index":"3",width:"450px",height:"500px",left:"50%"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("找回密码")]),e("FFAInput",{attrs:{placeholder:"邮箱","keydown-enter":t.getCode3},model:{value:t.loginUser.mail2,callback:function(e){t.$set(t.loginUser,"mail2",e)},expression:"loginUser.mail2"}}),e("FFAInput",{staticClass:"codeInput",staticStyle:{"margin-bottom":"-33px"},attrs:{placeholder:"验证码","keydown-enter":t.verifyCode3},model:{value:t.loginUser.code2,callback:function(e){t.$set(t.loginUser,"code2",e)},expression:"loginUser.code2"}},[e("button",{ref:"codeBtn3",staticClass:"getCode",staticStyle:{float:"right"},on:{click:t.getCode3}},[t._v("获取验证码 "),0!==t.waitTime?e("span",[t._v(t._s(t.waitTime)+"s")]):t._e()])]),e("el-button",{staticClass:"btn",on:{click:t.verifyCode3}},[t._v("→")]),e("span",{staticClass:"aText",staticStyle:{"text-align":"center","font-weight":"lighter","font-size":"14px",color:"var(--btn)","margin-top":"30px"},on:{click:t.findBack}},[t._v("返回登录")])],1),e("div",{ref:"l4",staticClass:"containerRight",staticStyle:{position:"absolute","z-index":"2",width:"450px",height:"500px",left:"50%"}},[e("span",{staticStyle:{"margin-left":"73px","margin-top":"50px","font-size":"30px","font-weight":"lighter","letter-spacing":"3px"}},[t._v("设置新的密码")]),e("FFAInput",{attrs:{placeholder:"密码","keydown-enter":t.changePassword,type:"password"},model:{value:t.loginUser.pass,callback:function(e){t.$set(t.loginUser,"pass",e)},expression:"loginUser.pass"}}),e("FFAInput",{attrs:{placeholder:"确认密码","keydown-enter":t.changePassword,type:"password"},model:{value:t.loginUser.confirm,callback:function(e){t.$set(t.loginUser,"confirm",e)},expression:"loginUser.confirm"}}),e("div",{staticStyle:{margin:"80px auto 0",width:"300px"}},[e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"left",margin:"0"},on:{click:t.backToL3}},[t._v("←")]),e("el-button",{staticClass:"btn",staticStyle:{width:"125px",float:"right",margin:"0"},on:{click:t.changePassword}},[t._v("→")])],1)],1),e("div",{staticClass:"containerRight",staticStyle:{position:"absolute","z-index":"1",width:"450px",height:"500px",left:"50%"}},[t.status?e("el-result",{staticStyle:{"margin-top":"80px"},attrs:{icon:"success",title:"密码修改成功",subTitle:"继续将前往登录界面"}},[e("template",{slot:"extra"},[e("el-button",{staticClass:"btn",staticStyle:{margin:"20px auto"},on:{click:t.reset}},[t._v("→")])],1)],2):e("el-result",{staticStyle:{"margin-top":"80px"},attrs:{icon:"error",title:"密码修改失败",subTitle:"继续将返回设置密码界面"}},[e("template",{slot:"extra"},[e("el-button",{staticClass:"btn",staticStyle:{margin:"20px auto"},on:{click:t.backToL4}},[t._v("←")])],1)],2)],1),e("a",{staticStyle:{position:"absolute",bottom:"10px","text-align":"center",left:"calc(50% - 450px)",right:"calc(50% - 450px)",cursor:"pointer"},attrs:{href:"https://beian.miit.gov.cn"}},[t._v(" 冀ICP备案号2023040066 ")])])],1)},a=[],l=(s(7658),s.p+"img/logo.2a5f17d5.png"),r=s(1120),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputContainer"},[e("span",{ref:"text",staticClass:"placeholder",on:{click:t.doFocus}},[t._v(t._s(t.placeholder))]),e("div",["text"===t.type?e("el-input",{ref:"input",attrs:{type:"text"},on:{focus:t.inputFocus,blur:t.inputBlur,input:t.changeInput},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keydownEnter.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):e("el-input",{ref:"input",attrs:{type:"password"},on:{focus:t.inputFocus,blur:t.inputBlur,input:t.changeInput},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keydownEnter.apply(null,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),t._t("default")],2)])},n=[],c={name:"FFAInput",data(){return{inputValue:""}},props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},keydownEnter:{type:Function,default:()=>{}},type:{type:[String],default:"text"}},methods:{changeInput(t){this.$emit("input",t)},inputFocus(){this.$refs.text.style.top="0"},inputBlur(){""!==this.inputValue&&null!=this.inputValue||(this.$refs.text.style.top="25px")},doFocus(){this.$refs.input.focus()}}},p=c,h=s(1001),d=(0,h.Z)(p,o,n,!1,null,"8e2481c4",null),g=d.exports,u={name:"Login",components:{FFAInput:g},data(){return{user:{},loginUser:{},loading:!1,mode:!0,waitTime:0,status:!1,timer1:null,timer2:null,timer3:null,to1:null,to2:null,to3:null,logo:l}},methods:{login(){this.loading=!0;const t=this.loginUser.password?this.md5(this.loginUser.password):"";this.request.post("/user/login",{name:this.loginUser.name,password:t}).then((t=>{"200"!==t.code?(this.$notify({title:"登录失败",message:t.msg,type:"error"}),this.loginUser.password="",this.loading=!1):this.loginSuccess(t)})).catch((t=>{this.$notify({title:"登录失败",message:t,type:"error"}),this.loginUser.password="",this.loading=!1}))},changeMode(){this.mode?(this.$refs.float.style.left="50%",this.$refs.float.style.borderRadius="0 10px 10px 0"):(this.$refs.float.style.left="calc(50% - 450px)",this.$refs.float.style.borderRadius="10px 0 0 10px"),this.mode=!this.mode,this.reset()},reset(){this.$refs.r1.style.left="calc(50% - 450px)",this.$refs.r2.style.left="calc(50% - 450px)",this.$refs.r3.style.left="calc(50% - 450px)",this.$refs.l1.style.right="0",this.$refs.l2.style.left="50%",this.$refs.l3.style.left="50%",this.$refs.l4.style.left="50%",this.user={},this.loginUser={}},getCode(){this.$refs.codeBtn.disabled=!0,this.$refs.codeBtn.classList.add("disabled"),this.request.get("/manager/sign-code",{params:{mail:this.user.mail?this.user.mail:""}}).then((t=>{"200"!==t.code?(this.$notify({type:"error",title:"发送失败",message:t.msg}),this.$refs.codeBtn.disabled=!1,this.$refs.codeBtn.classList.remove("disabled")):(this.$notify({type:"success",title:"发送成功",message:"验证码已发送至"+this.user.mail}),this.waitTime=60,this.timer1=setInterval((()=>{this.waitTime>0&&this.waitTime--}),1e3),this.to1=setTimeout((()=>{this.$refs.codeBtn.disabled=!1,this.$refs.codeBtn.classList.remove("disabled")}),6e4))})).catch((t=>{this.$notify({type:"error",title:"发送失败",message:t}),this.$refs.codeBtn.disabled=!1,this.$refs.codeBtn.classList.remove("disabled")}))},getCode2(){this.$refs.codeBtn2.disabled=!0,this.$refs.codeBtn2.classList.add("disabled"),this.request.get("/manager/login-code",{params:{mail:this.loginUser.mail1?this.loginUser.mail1:""}}).then((t=>{"200"!==t.code?(this.$notify({type:"error",title:"发送失败",message:t.msg}),this.$refs.codeBtn2.disabled=!1,this.$refs.codeBtn2.classList.remove("disabled")):(this.$notify({type:"success",title:"发送成功",message:"验证码已发送至"+this.loginUser.mail1}),this.waitTime=60,this.timer2=setInterval((()=>{this.waitTime>0&&this.waitTime--}),1e3),this.to2=setTimeout((()=>{this.$refs.codeBtn2.disabled=!1,this.$refs.codeBtn2.classList.remove("disabled")}),6e4))})).catch((t=>{this.$notify({type:"error",title:"发送失败",message:t}),this.$refs.codeBtn2.disabled=!1,this.$refs.codeBtn2.classList.remove("disabled")}))},getCode3(){this.$refs.codeBtn3.disabled=!0,this.$refs.codeBtn3.classList.add("disabled"),this.request.get("/manager/change-code",{params:{mail:this.loginUser.mail2?this.loginUser.mail2:""}}).then((t=>{"200"!==t.code?(this.$notify({type:"error",title:"发送失败",message:t.msg}),this.$refs.codeBtn3.disabled=!1,this.$refs.codeBtn3.classList.remove("disabled")):(this.$notify({type:"success",title:"发送成功",message:"验证码已发送至"+this.loginUser.mail2}),this.waitTime=60,this.timer3=setInterval((()=>{this.waitTime>0&&this.waitTime--}),1e3),this.to3=setTimeout((()=>{this.$refs.codeBtn3.disabled=!1,this.$refs.codeBtn3.classList.remove("disabled")}),6e4))})).catch((t=>{this.$notify({type:"error",title:"发送失败",message:t}),this.$refs.codeBtn3.disabled=!1,this.$refs.codeBtn3.classList.remove("disabled")}))},verifyCode(){this.request.get("/manager/verify-sign",{params:{mail:this.user.mail?this.user.mail:"",code:this.user.code?this.user.code:""}}).then((t=>{"200"!==t.code?this.$notify({type:"error",title:"验证失败",message:t.msg}):this.$refs.r1.style.left="450px"})).catch((t=>{this.$notify({type:"error",title:"验证失败",message:t})}))},verifyCode2(){this.loading=!0,this.request.get("/manager/verify-login",{params:{mail:this.loginUser.mail1?this.loginUser.mail1:"",code:this.loginUser.code1?this.loginUser.code1:""}}).then((t=>{"200"!==t.code?(this.$notify({title:"登录失败",message:t.msg,type:"error"}),this.loginUser.password="",this.loading=!1):this.loginSuccess(t)})).catch((t=>{this.$notify({title:"登录失败",message:t,type:"error"}),this.loginUser.password="",this.loading=!1}))},verifyCode3(){this.request.get("/manager/verify-change",{params:{mail:this.loginUser.mail2?this.loginUser.mail2:"",code:this.loginUser.code2?this.loginUser.code2:""}}).then((t=>{"200"!==t.code?this.$notify({type:"error",title:"验证失败",message:t.msg}):this.$refs.l3.style.left="calc(50% - 450px)"})).catch((t=>{this.$notify({type:"error",title:"验证失败",message:t})}))},backToR1(){this.$refs.r1.style.left="0"},goToR3(){this.user.name?this.user.careHomeName?this.$refs.r2.style.left="50%":this.$notify({type:"error",title:"名称设置失败",message:"未填写养老院名"}):this.$notify({type:"error",title:"名称设置失败",message:"未填写姓名"})},backToR2(){this.$refs.r2.style.left="calc(50% - 450px)"},register(){if(this.user.password!==this.user.confirm)return void this.$notify({type:"error",title:"注册失败",message:"两次密码输入不一致"});if(!this.user.password||!this.user.confirm)return void this.$notify({type:"error",title:"注册失败",message:"未设置密码"});const t=this.user.password?this.md5(this.user.password):"";this.request.post("/user/register",{name:this.user.name,password:t,mail:this.user.mail,careHomeName:this.user.careHomeName}).then((t=>{"200"===t.code?(this.$notify({type:"success",title:"成功",message:"账号已成功注册"}),this.registerRecall(!0)):(this.$notify({type:"error",title:"注册失败",message:t.msg}),this.registerRecall(!1))})).catch((t=>{this.$notify({type:"error",title:"注册失败",message:t}),this.registerRecall(!1)}))},registerRecall(t){this.status=t,this.$refs.r3.style.left="50%"},backToR3(){this.$refs.r3.style.left="calc(50% - 450px)"},goToL2(){this.$refs.l1.style.right="450px",this.$refs.l3.style.left="calc(50% - 450px)"},goToL3(){this.$refs.l1.style.right="450px",this.$refs.l2.style.left="calc(50% - 450px)"},mailBack(){this.$refs.l1.style.right="0",this.$refs.l3.style.left="50%"},findBack(){this.$refs.l1.style.right="0",this.$refs.l2.style.left="50%"},backToL3(){this.$refs.l3.style.left="50%"},changePassword(){if(this.loginUser.pass!==this.loginUser.confirm)return void this.$notify({type:"error",title:"密码修改失败",message:"两次密码输入不一致"});if(!this.loginUser.pass||!this.loginUser.confirm)return void this.$notify({type:"error",title:"密码修改失败",message:"未设置密码"});console.log(this.loginUser,this.user);const t=this.loginUser.pass?this.md5(this.loginUser.pass):"";this.request.put(`/user/change-password?password=${t}&mail=${this.loginUser.mail2}`).then((t=>{"200"===t.code?(this.$notify({type:"success",title:"成功",message:"已成功修改密码"}),this.changeRecall(!0)):(this.$notify({type:"error",title:"密码修改失败",message:t.msg}),this.changeRecall(!1))})).catch((t=>{this.$notify({type:"error",title:"密码修改失败",message:t}),this.changeRecall(!1)}))},changeRecall(t){this.status=t,this.$refs.l4.style.left="calc(50% - 450px)"},backToL4(){this.$refs.l4.style.left="50%"},loginSuccess(t){localStorage.setItem("user",JSON.stringify(t.data)),(0,r.lX)(),this.loading=!1,this.$router.push("/elder"),this.$notify({title:"登录成功",type:"success"})}},beforeDestroy(){clearInterval(this.timer1),clearInterval(this.timer2),clearInterval(this.timer3),clearTimeout(this.to1),clearTimeout(this.to2),clearTimeout(this.to3)}},f=u,m=(0,h.Z)(f,i,a,!1,null,"0e05c98e",null),y=m.exports}}]);
//# sourceMappingURL=5.3a0fe67f.js.map