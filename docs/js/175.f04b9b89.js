"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[175],{5175:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flexColumn",staticStyle:{"overflow-y":"scroll","margin-top":"60px"}},[t("el-card",{staticClass:"box-card card flexColumn",staticStyle:{height:"150px","flex-shrink":"0","margin-top":"-70px"}},[t("span",{staticClass:"mText"},[e._v(e._s(e.careHomeName))]),t("el-row",{staticStyle:{"margin-top":"20px"}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[t("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[e._v(e._s(e.recordsData.todays?"已生成":"未生成")+" ")]),t("span",{staticClass:"sText"},[e._v("今日用药记录")])])]),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[t("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[e._v(e._s(e.recordsData.notYet))]),t("span",{staticClass:"sText"},[e._v("今日待执行用药记录数")])])]),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[t("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[e._v(e._s(e.recordsData.count))]),t("span",{staticClass:"sText"},[e._v("今日全部用药记录数")])])])],1)],1),t("el-card",{staticClass:"box-card card flexColumn specialCard",staticStyle:{"margin-top":"20px","flex-shrink":"0"}},[t("div",{staticClass:"flexRow",staticStyle:{"margin-bottom":"20px","margin-top":"10px"}},[t("div",{staticStyle:{"margin-right":"auto","margin-left":"20px"}},[t("el-input",{staticClass:"input",attrs:{"suffix-icon":"el-icon-search",clearable:""},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),t("el-dropdown",{attrs:{size:"large","split-button":"",trigger:"click"},on:{click:function(t){return e.search()},command:e.handleClick}},[t("span",{staticStyle:{color:"var(--btnText)"}},[e._v(e._s(e.btnWord))]),t("el-dropdown-menu",{ref:"dropdown",staticStyle:{"background-color":"var(--lightBg)!important",border:"none"},attrs:{slot:"dropdown","append-to-body":!1},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"elder"}},[e._v("根据老人姓名搜索")]),t("el-dropdown-item",{attrs:{command:"worker"}},[e._v("根据护工姓名搜索")]),t("el-dropdown-item",{attrs:{command:"medication"}},[e._v("根据药品名称搜索")]),t("el-dropdown-item",{attrs:{command:"create_time"}},[e._v("根据生成日期搜索")]),t("el-dropdown-item",{attrs:{command:"status"}},[e._v("根据服用状态搜索")])],1)],1)],1),t("div",{ref:"here"}),t("div",{staticClass:"flexRow",staticStyle:{"margin-left":"auto","margin-right":"10px"}},[t("el-button",{on:{click:e.openDialog}},[t("i",{staticClass:"el-icon-upload2",staticStyle:{"font-weight":"bold","margin-right":"5px"}}),e._v("导出Excel ")]),t("el-button",{staticClass:"success",on:{click:e.generate}},[t("i",{staticClass:"el-icon-plus",staticStyle:{"font-weight":"bold","margin-right":"5px"}}),e._v(" 生成今日用药记录 ")])],1)]),t("el-table",{attrs:{data:e.records,"header-cell-style":{height:"70px"},"row-style":{height:"62px"}}},[t("el-table-column",{attrs:{width:"10px"}}),t("el-table-column",{attrs:{label:"记录生成日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.createTime?t.row.createTime.slice(0,10):"未知日期")+" ")]}}])}),t("el-table-column",{attrs:{prop:"elder.elderlyName",label:"用药老人"}}),t("el-table-column",{attrs:{prop:"medicationList.medication.name",label:"服用药品"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.medicationList?t.row.medicationList.medication.name:"未知药品")+" ")]}}])}),t("el-table-column",{attrs:{label:"服用剂量"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(" "+e._s(s.row.medicationList?s.row.medicationList.dosage:"未知剂量")+" "+e._s(s.row.medicationList?s.row.medicationList.unit:"")+" ")])]}}])}),t("el-table-column",{attrs:{prop:"time",label:"预定服用时间"}}),t("el-table-column",{attrs:{label:"实际服用时间"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.updateTime?s.row.updateTime.slice(11,19):"--:--:--"))])]}}])}),t("el-table-column",{attrs:{prop:"nurse.name",label:"负责护工"}}),t("el-table-column",{attrs:{label:"服用状态"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(1===s.row.status?"已服用":"未服用"))])]}}])}),t("el-table-column",{attrs:{label:"更新服用状态","class-name":"cellClass",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-switch",{staticStyle:{"margin-top":"10px"},attrs:{value:1===s.row.status,"active-color":"var(--btn)","inactive-color":"var(--th)"},on:{change:t=>e.updateStatus(t,s.row)}})]}}])})],1),t("el-pagination",{staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:e.total,"pager-count":11,"page-size":e.pageSize,"current-page":e.currentPage},on:{"current-change":e.pageChange}})],1),t("el-dialog",{ref:"dialog",staticClass:"dl",attrs:{visible:e.dialog,"show-close":!1,limit:1,"modal-append-to-body":!1,"append-to-body":!1},on:{"update:visible":function(t){e.dialog=t},close:e.closeDialog}},[t("h1",{staticStyle:{"font-size":"24px","padding-top":"20px",color:"var(--deepText)"},attrs:{align:"center"}},[e._v("选择导出内容")]),t("el-divider"),t("div",{staticClass:"flexColumn",staticStyle:{margin:"0 10% 0",padding:"3% 5% 1%","overflow-y":"scroll",height:"340px"}},[t("div",{ref:"choice0",staticClass:"choice",staticStyle:{"margin-bottom":"40px"},on:{click:e.choose0}},[t("span",{staticStyle:{"font-size":"18px"}},[e._v("导出"+e._s(e.careHomeName)+"全部用药记录")])]),t("div",{ref:"choice1",staticClass:"choice",on:{click:e.choose1}},[t("span",{staticStyle:{"font-size":"18px"}},[e._v("选择导出某个老人的用药记录")])]),1===e.choice?t("div",{staticClass:"flexRow",staticStyle:{"margin-top":"50px"}},[t("span",{staticClass:"mText",staticStyle:{"font-size":"15px","line-height":"30px"}},[e._v("选择要进行导出的老人： ")]),t("el-select",{staticStyle:{width:"240px","margin-left":"auto"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入老人姓名进行搜索","remote-method":e.getElders,loading:e.loading},model:{value:e.chooseId,callback:function(t){e.chooseId=t},expression:"chooseId"}},e._l(e.elders,(function(s){return t("el-option",{key:s.elderlyId,attrs:{label:s.elderlyName,value:s.elderlyId}},[t("el-row",[t("el-col",{attrs:{span:12}},[e._v(e._s(s.elderlyName))]),t("el-col",{attrs:{span:4}},[e._v(e._s(s.sex))]),t("el-col",{attrs:{span:8}},[e._v(e._s(s.bedNumber)+"床")])],1)],1)})),1)],1):e._e()]),t("el-divider"),t("div",{staticStyle:{display:"flex","flex-direction":"row","margin-top":"-20px"}},[t("el-button",{ref:"btn",staticClass:"formBtn",attrs:{disabled:null===e.choice},on:{click:e.exportRecords}},[e._v("导出")]),t("el-button",{staticClass:"formBtn",on:{click:e.closeDialog}},[e._v("取消")])],1)],1)],1)},i=[],o=s(2618),r={name:"MedicationRecords",data(){return{careHomeName:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).careHomeName:"",records:[],recordsData:{},currentPage:1,pageSize:7,total:0,keyword:"",searchMode:"elder",dialog:!1,serverIp:o.I,chooseId:"",elders:[],loading:!1,choice:null}},methods:{pageChange(e){this.currentPage=e,this.search()},load(){this.request.get("/medication-record/query-data?name="+this.careHomeName).then((e=>{"200"===e.code?this.recordsData=e.data:this.$notify({type:"error",title:"获取用药记录信息失败",message:e.msg})})).catch((e=>{this.$notify({type:"error",title:"获取用药记录信息失败",message:e})}))},search(){this.request.get("/medication-record/query",{params:{pageNum:this.currentPage,pageSize:this.pageSize,keyword:this.keywordC,type:this.searchMode,name:this.careHomeName}}).then((e=>{"200"===e.code?(this.records=e.data.records,this.total=parseInt(e.data.total)):this.$notify({type:"error",title:"获取用药记录失败",message:e.msg})})).catch((e=>{this.$notify({type:"error",title:"获取用药记录失败",message:e})}))},handleClick(e){this.searchMode=e},generate(){this.request.get("/medication-record/generate").then((e=>{"200"===e.code?(this.recordsData.todays?this.$notify({type:"warning",title:"用药记录生成失败",message:"今日已生成过用药记录"}):this.$notify({type:"success",title:"生成成功",message:"已生成今日记录"}),this.search(),this.load()):this.$notify({type:"error",title:"用药记录生成失败",message:e.msg})})).catch((e=>{this.$notify({type:"error",title:"用药记录生成失败",message:e})}))},updateStatus(e,t){const s=1===t.status?0:1;t.status=s,this.request.put("/medication-record/update-status?id="+t.id+"&status="+s).then((e=>{"200"===e.code?(this.$notify({type:"success",title:"更新成功",message:"记录服用状态已更新"}),this.load(),this.search()):this.$notify({type:"error",title:"记录服用状态更新失败",message:e.msg})})).catch((e=>{this.$notify({type:"error",title:"记录服用状态更新失败",message:e})}))},openDialog(){this.dialog=!0},closeDialog(){this.dialog=!1,this.chooseId="",this.choice=null,this.elders=[],this.$refs.choice0.classList.remove("isChecked"),this.$refs.choice1.classList.remove("isChecked")},exportRecords(){window.location.href="https://"+o.I+"/medication-record/export/"+this.careHomeName+"/"+this.chooseId},getElders(e){""!==e?(this.loading=!0,setTimeout((()=>{this.request.get("/elderly-information/query-has-ml?careHomeName="+this.careHomeName).then((t=>{"200"===t.code?this.elders=t.data.filter((t=>t.elderlyName.indexOf(e)>-1)):this.$notify({type:"error",title:"获取老人列表失败",message:t.msg}),this.loading=!1})).catch((e=>{this.$notify({type:"error",title:"获取老人列表失败",message:e}),this.loading=!1}))}),200)):this.elders=[]},choose0(){this.$refs.choice0.classList.add("isChecked"),this.$refs.choice1.classList.remove("isChecked"),this.choice=0,this.chooseId=0,this.elders=[]},choose1(){this.$refs.choice1.classList.add("isChecked"),this.$refs.choice0.classList.remove("isChecked"),this.choice=1,this.chooseId=""}},mounted(){this.search(),this.load(),this.$refs.here.appendChild(this.$refs.dropdown.popperElm)},computed:{btnWord(){switch(this.searchMode){case"elder":return"根据老人姓名搜索";case"worker":return"根据护工姓名搜索";case"medication":return"根据药品名称搜索";case"create_time":return"根据生成日期搜索";case"status":return"根据服用状态搜索";default:return"搜索"}},keywordC(){return"status"===this.searchMode?"已服用"===this.keyword||"已"===this.keyword||"1"===this.keyword?1:"未服用"===this.keyword||"未"===this.keyword||"0"===this.keyword?0:"服用"===this.keyword||"服"===this.keyword||"用"===this.keyword?"":this.keyword:this.keyword}}},l=r,c=s(1001),n=(0,c.Z)(l,a,i,!1,null,"4e2e463f",null),d=n.exports}}]);
//# sourceMappingURL=175.f04b9b89.js.map