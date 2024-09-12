"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[129],{6129:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-left":"5px","overflow-y":"scroll","margin-top":"60px"}},[e("el-card",{staticClass:"card box-card flexRow",staticStyle:{height:"75px","margin-bottom":"20px","margin-top":"-60px"}},[e("span",{staticClass:"mText"},[t._v(t._s(t.careHomeName))]),e("span",{staticStyle:{"margin-left":"auto"}},[e("el-input",{staticClass:"input",attrs:{"suffix-icon":"el-icon-search",clearable:""},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.load.apply(null,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),e("el-button",{staticClass:"searchBtn"},[t._v("根据老人姓名搜索")])],1)]),e("el-card",{staticClass:"card box-card addCard",style:"cursor: "+(t.adding?"default":"pointer"),nativeOn:{click:function(e){return t.addNewList.apply(null,arguments)}}},[t.adding?e("div",{staticClass:"flexRow",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"flexColumn"},[e("span",{staticClass:"mText",staticStyle:{"margin-right":"20px","font-size":"15px"}},[t._v("选择要添加药单的老人")]),e("el-select",{staticStyle:{"margin-top":"20px"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入老人名称搜索","remote-method":t.getElders,loading:t.loading},model:{value:t.chooseElderId,callback:function(e){t.chooseElderId=e},expression:"chooseElderId"}},t._l(t.elders,(function(i){return e("el-option",{key:i.elderlyId,attrs:{label:i.elderlyName,value:i.elderlyId}},[e("el-row",[e("el-col",{attrs:{span:12}},[t._v(t._s(i.elderlyName))]),e("el-col",{attrs:{span:4}},[t._v(t._s(i.sex))]),e("el-col",{attrs:{span:8}},[t._v(t._s(i.bedNumber)+"床")])],1)],1)})),1)],1),"{}"!==JSON.stringify(t.chooseElder)?e("div",{staticClass:"flexRow",staticStyle:{"margin-left":"40px"}},[e("el-avatar",{staticStyle:{width:"80px",height:"80px"},attrs:{shape:"square",src:t.chooseElder.image}}),e("div",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{"font-weight":"bold","font-size":"25px"}},[t._v(t._s(t.chooseElder.elderlyName))]),e("div",{staticStyle:{"margin-top":"14px"}},[e("span",[t._v(t._s(t.chooseElder.sex))]),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.chooseElder.age)+"岁")]),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.chooseElder.bedNumber)+"床")])])])],1):t._e(),e("div",{staticClass:"flexColumn",staticStyle:{"margin-left":"40px"}},[e("span",{staticClass:"mText",staticStyle:{"margin-right":"20px","font-size":"15px"}},[t._v("选择负责该药单的护工")]),e("el-select",{staticStyle:{"margin-top":"20px",width:"180px"},attrs:{filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入护工名称搜索","remote-method":t.getWorkers,loading:t.loading},model:{value:t.chooseWorkerId,callback:function(e){t.chooseWorkerId=e},expression:"chooseWorkerId"}},t._l(t.workers,(function(i){return e("el-option",{key:i.userId,attrs:{label:i.name,value:i.userId}},[e("el-row",[e("el-col",{attrs:{span:18}},[t._v(t._s(i.name))]),e("el-col",{attrs:{span:6}},[t._v(t._s(i.sex?"男":"女"))])],1)],1)})),1)],1),"{}"!==JSON.stringify(t.chooseWorker)?e("div",{staticClass:"flexColumn",staticStyle:{"margin-left":"40px"}},[e("span",{staticStyle:{"font-weight":"bold","font-size":"25px"}},[t._v(t._s(t.chooseWorker.name))]),e("div",{staticStyle:{"margin-top":"14px"}},[e("span",[t._v(t._s(t.chooseWorker.sex?"男":"女"))])])]):t._e(),e("div",{staticStyle:{margin:"0 75px 0 auto","align-self":"center"}},[e("el-button",{staticClass:"btn success",staticStyle:{padding:"15px 22px"},on:{click:function(e){return e.stopPropagation(),t.addMedicationList.apply(null,arguments)}}},[e("i",{staticClass:"el-icon-check",staticStyle:{"font-size":"25px"}})]),e("el-button",{staticClass:"btn danger",staticStyle:{padding:"15px 22px","margin-left":"15px"},on:{click:function(e){return e.stopPropagation(),t.cancelNewList.apply(null,arguments)}}},[e("i",{staticClass:"el-icon-close",staticStyle:{"font-size":"25px"}})])],1)]):e("span",{staticClass:"el-icon-plus",staticStyle:{"font-size":"50px",margin:"15px auto"}})]),e("el-collapse",{attrs:{accordion:""}},[t._l(t.groupedItem,(function(i,s){return e("el-collapse-item",{key:s},[e("template",{slot:"title"},[e("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[e("el-avatar",{staticStyle:{width:"80px",height:"80px"},attrs:{shape:"square",src:i[0].elder.image}}),e("div",{staticStyle:{"margin-left":"20px",display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{"font-weight":"bold","font-size":"25px"}},[t._v(t._s(i[0].elder.elderlyName))]),e("div",{staticStyle:{"margin-top":"-14px"}},[e("span",[t._v(t._s(i[0].elder.sex))]),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(i[0].elder.age)+"岁")]),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(i[0].elder.bedNumber)+"床")])])]),e("div",{staticStyle:{"margin-left":"auto","align-self":"center","margin-right":"40px"}},[e("el-button",{staticClass:"btn success",staticStyle:{padding:"15px 22px"},on:{click:function(e){return e.stopPropagation(),t.openDialog(i)}}},[e("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"25px"}})]),e("el-popconfirm",{attrs:{title:"确定删除该老人的全部药单项吗?"},on:{confirm:function(e){return t.delElderList(i[0].elder)}}},[e("el-button",{staticClass:"btn danger",staticStyle:{padding:"15px 22px","margin-left":"15px"},attrs:{slot:"reference"},on:{click:function(t){t.stopPropagation()}},slot:"reference"},[e("i",{staticClass:"el-icon-delete",staticStyle:{"font-size":"25px"}})])],1)],1)],1)]),e("el-collapse",{staticClass:"medicationList",staticStyle:{margin:"0 20px"},attrs:{value:[0,1]}},t._l(i,(function(s,l){return e("el-collapse-item",{key:l,attrs:{name:l}},[e("template",{slot:"title"},[e("el-row",{staticStyle:{width:"100%"}},[s.listNum?e("el-col",{staticStyle:{"font-size":"18px"},attrs:{span:3}},[t._v(" "+t._s("长期"===s.list[0].term?"长期药单":"短期药单")+" ")]):e("el-col",{staticStyle:{"font-size":"18px"},attrs:{span:3}},[t._v("药单"+t._s(l+1))]),e("el-col",{staticStyle:{"font-weight":"lighter"},attrs:{span:11}},[t._v(" 由护工"),e("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(s.nurse?s.nurse.name:"unknown"))]),t._v("负责 ")]),s.listNum?e("el-col",{staticStyle:{"font-weight":"lighter"},attrs:{span:5}},[t._v("编号 "+t._s(s.listNum))]):e("el-col",{staticStyle:{"font-weight":"normal",color:"var(--danger)"},attrs:{span:5}},[t._v("! 该药单暂未保存")]),e("div",{staticStyle:{float:"right","margin-right":"30px"}},[s.listNum?e("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"确定要删除该药单吗? "},on:{confirm:function(e){return t.deleteList(s.listNum)}}},[e("el-button",{staticClass:"btn danger",attrs:{slot:"reference"},on:{click:function(t){t.stopPropagation()}},slot:"reference"},[e("i",{staticClass:"el-icon-delete"})])],1):e("el-button",{staticClass:"btn danger",on:{click:function(t){return t.stopPropagation(),i.pop()}}},[e("i",{staticClass:"el-icon-delete"})])],1)],1)],1),e("el-table",{staticStyle:{width:"100%",height:"100%",border:"solid black 1px","border-radius":"0 0 7px 7px"},attrs:{data:s.list,"header-cell-style":{height:"40px"},"row-style":{height:"62px"}}},[e("el-table-column",{attrs:{width:"10px"}}),e("el-table-column",{attrs:{prop:"medication.name",label:"药品名称"}}),e("el-table-column",{attrs:{prop:"medication.type",label:"药物剂型"}}),e("el-table-column",{attrs:{prop:"medication.mode",label:"给药途径"}}),e("el-table-column",{attrs:{prop:"frequency.frequency",label:"给药频率"}}),e("el-table-column",{attrs:{label:"给药剂量"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.dosage)+" "+t._s(e.row.unit)+" ")]}}],null,!0)}),e("el-table-column",{attrs:{prop:"startTime",label:"用药开始时间"}}),e("el-table-column",{attrs:{prop:"endTime",label:"用药结束时间"}}),e("el-table-column",{attrs:{prop:"term",label:"时效"}}),e("el-table-column",{attrs:{label:"具体用药时间"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v(" "+t._s(i.row.takeTime?i.row.takeTime.split(";")[0]:"")+" "),i.row.takeTime&&i.row.takeTime.split(";")[1]?e("span",[t._v("···")]):t._e()]}}],null,!0)}),e("el-table-column",{attrs:{"min-width":"120","class-name":"cellClass",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button-group",[e("el-button",{staticClass:"btnOption primary",on:{click:function(e){return t.openEdit(i)}}},[e("span",{staticClass:"el-icon-edit"})]),e("el-popconfirm",{attrs:{title:"确定删除该药单项吗?"},on:{confirm:function(e){return t.deleteItem(i.row)}}},[e("el-button",{staticClass:"btnOption danger",attrs:{slot:"reference"},slot:"reference"},[e("span",{staticClass:"el-icon-delete"})])],1)],1)]}}],null,!0)}),e("el-table-column",{attrs:{width:"10px"}})],1)],2)})),1)],2)})),e("el-dialog",{ref:"dialog",attrs:{visible:t.dialogOption,"show-close":!1,limit:1,"modal-append-to-body":!1,"append-to-body":!1},on:{"update:visible":function(e){t.dialogOption=e},close:t.closeDialog}},[e("h1",{staticStyle:{"font-size":"24px","padding-top":"20px",color:"var(--deepText)"},attrs:{align:"center"}},[t._v(" "+t._s(t.mode?"添加":"修改")+"药单项 ")]),e("el-divider"),e("div",{staticStyle:{margin:"0 10% 0",padding:"3% 5% 1%","overflow-y":"scroll",height:"380px"}},[e("el-form",{ref:"form",attrs:{model:t.medicationList,"label-width":"140px","label-position":"left"}},[e("el-form-item",{attrs:{label:"服用药品"}},[e("el-select",{staticStyle:{width:"210px"},on:{change:t.medicationOptionChange},model:{value:t.medicationList.medicationId,callback:function(e){t.$set(t.medicationList,"medicationId",e)},expression:"medicationList.medicationId"}},t._l(t.medications,(function(t){return e("el-option",{key:t.id,staticStyle:{"font-weight":"bold"},attrs:{label:t.name,value:t.id}})})),1)],1),e("el-form-item",{attrs:{label:"药物剂型"}},[e("el-select",{staticStyle:{width:"120px"},model:{value:t.medicationList.type,callback:function(e){t.$set(t.medicationList,"type",e)},expression:"medicationList.type"}},[e("el-option",{attrs:{value:"冲剂"}}),e("el-option",{attrs:{value:"片剂"}}),e("el-option",{attrs:{value:"栓剂"}}),e("el-option",{attrs:{value:"丸剂"}}),e("el-option",{attrs:{value:"胶囊剂"}}),e("el-option",{attrs:{value:"颗粒剂"}}),e("el-option",{attrs:{value:"气雾剂"}}),e("el-option",{attrs:{value:"软膏剂"}}),e("el-option",{attrs:{value:"糖浆剂"}}),e("el-option",{attrs:{value:"注射剂"}}),e("el-option",{attrs:{value:"口服液体剂"}})],1)],1),e("el-form-item",{attrs:{label:"给药途径"}},[e("el-select",{staticStyle:{width:"106px"},model:{value:t.medicationList.mode,callback:function(e){t.$set(t.medicationList,"mode",e)},expression:"medicationList.mode"}},[e("el-option",{attrs:{value:"口服给药"}}),e("el-option",{attrs:{value:"注射给药"}}),e("el-option",{attrs:{value:"舌下给药"}}),e("el-option",{attrs:{value:"吸入给药"}}),e("el-option",{attrs:{value:"直肠给药"}}),e("el-option",{attrs:{value:"皮下给药"}})],1)],1),e("el-form-item",{attrs:{label:"给药频率"}},[e("el-select",{staticStyle:{width:"165px"},on:{change:t.frequencyChange},model:{value:t.medicationList.frequencyId,callback:function(e){t.$set(t.medicationList,"frequencyId",e)},expression:"medicationList.frequencyId"}},t._l(t.frequencies,(function(i){return e("el-option",{key:i.id,attrs:{label:i.frequency,value:i.id}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:8}},[t._v(t._s(i.abbreviation))]),e("el-col",{attrs:{span:16}},[t._v(" "+t._s(i.frequency))])],1)],1)})),1)],1),e("el-form-item",{attrs:{label:"给药剂量"}},[e("el-input-number",{staticStyle:{width:"140px"},attrs:{precision:2,step:.1,min:0},model:{value:t.medicationList.dosage,callback:function(e){t.$set(t.medicationList,"dosage",e)},expression:"medicationList.dosage"}}),e("el-select",{staticStyle:{width:"100px","margin-left":"20px"},attrs:{placeholder:"单位"},model:{value:t.medicationList.unit,callback:function(e){t.$set(t.medicationList,"unit",e)},expression:"medicationList.unit"}},[e("el-option",{attrs:{value:"g"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("g")]),e("el-col",{attrs:{span:10}},[t._v("克")])],1)],1),e("el-option",{attrs:{value:"mg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("mg")]),e("el-col",{attrs:{span:10}},[t._v("毫克")])],1)],1),e("el-option",{attrs:{value:"μg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("μg")]),e("el-col",{attrs:{span:10}},[t._v("微克")])],1)],1),e("el-option",{attrs:{value:"ng"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("ng")]),e("el-col",{attrs:{span:10}},[t._v("纳克")])],1)],1),e("el-option",{attrs:{value:"ml"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("ml")]),e("el-col",{attrs:{span:10}},[t._v("毫升")])],1)],1),e("el-option",{attrs:{value:"μl"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("μl")]),e("el-col",{attrs:{span:10}},[t._v("微升")])],1)],1),e("el-option",{attrs:{value:"mg/kg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("mg/kg")]),e("el-col",{attrs:{span:10}},[t._v("毫克/公斤")])],1)],1),e("el-option",{attrs:{value:"mg/kg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("mg/kg")]),e("el-col",{attrs:{span:10}},[t._v("毫克/公斤")])],1)],1),e("el-option",{attrs:{value:"mg/kg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("mg/kg")]),e("el-col",{attrs:{span:10}},[t._v("毫克/公斤")])],1)],1),e("el-option",{attrs:{value:"mg/kg"}},[e("el-row",[e("el-col",{staticStyle:{"font-weight":"bold"},attrs:{span:14}},[t._v("mg/kg")]),e("el-col",{attrs:{span:10}},[t._v("毫克/公斤")])],1)],1)],1)],1),e("el-form-item",{attrs:{label:"用药起始日期"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择开始日期时间",clearable:!1},model:{value:t.medicationList.startTime,callback:function(e){t.$set(t.medicationList,"startTime",e)},expression:"medicationList.startTime"}})],1),e("el-form-item",{attrs:{label:"用药结束日期"}},[e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择结束日期时间",clearable:!1},model:{value:t.medicationList.endTime,callback:function(e){t.$set(t.medicationList,"endTime",e)},expression:"medicationList.endTime"}})],1),e("el-form-item",{attrs:{label:"时效"}},[e("span",[t._v(t._s(t.termCal(t.medicationList.startTime,t.medicationList.endTime)))])]),t.medicationList.frequencyId?e("el-form-item",{attrs:{label:"具体用药时间"}},t._l(t.medicationList.times,(function(i,s){return e("div",{key:s},[e("el-time-picker",{ref:"time"+s,refInFor:!0,staticStyle:{width:"120px","margin-right":"20px","margin-bottom":"20px"},attrs:{"value-format":"HH:mm:ss",placeholder:"第"+(s+1)+"次","picker-options":{format:"HH:mm:ss"},clearable:!1,"default-value":new Date(0,0,0,12,0,0)},on:{input:t.changeValue},model:{value:t.medicationList.times[s],callback:function(e){t.$set(t.medicationList.times,s,e)},expression:"medicationList.times[index]"}})],1)})),0):t._e()],1)],1),e("el-divider"),e("div",{staticStyle:{display:"flex","flex-direction":"row"}},[t.mode?e("el-button",{staticClass:"formBtn",on:{click:t.addOption}},[t._v("添加")]):e("el-button",{staticClass:"formBtn",on:{click:t.editOption}},[t._v("修改")]),e("el-button",{staticClass:"formBtn",on:{click:t.closeDialog}},[t._v("取消")])],1)],1)],2)],1)},l=[],a=(i(7658),i(541),{name:"MedicationList",data(){return{list:[],dialogOption:!1,mode:!0,medicationList:{},frequencies:[],medications:[],groupedItem:{},careHomeName:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).careHomeName:"",keyword:"",adding:!1,elders:[],loading:!1,chooseElder:{},chooseElderId:"",workers:[],chooseWorkerId:"",chooseWorker:{}}},methods:{load(){this.request.get("/medication-list/get-all",{params:{careHomeName:this.careHomeName,keyword:this.keyword}}).then((t=>{"200"===t.code?(this.list=t.data,this.groupedItem=Object.values(this.list.reduce(((t,e)=>{const i=e.elder.elderlyName;return t[i]||(t[i]=[]),t[i].push(e),t}),{})),this.groupedItem=this.groupedItem.sort(((t,e)=>t[0].elder.elderlyName.localeCompare(e[0].elder.elderlyName)))):this.$notify({type:"error",title:"获取药单信息失败",message:t.msg})})).catch((t=>{this.$notify({type:"error",title:"获取药单信息失败",message:t})}))},deleteList(t){this.request.delete("/medication-list/delete-batch?listNum="+t).then((e=>{"200"===e.code?(this.$notify({type:"success",title:"药单删除成功",message:"药单编号为"+t+"的药单项已全部删除"}),this.load()):this.$notify({type:"error",title:"药单删除失败",message:e.msg})})).catch((t=>{this.$notify({type:"error",title:"药单删除失败",message:t})}))},openDialog(t){this.mode=!0,this.medicationList.dto=t,this.medicationList.elderlyId=t[0].elder.elderlyId,this.medicationList.nurseId=t[0].nurse.userId,this.dialogOption=!0},closeDialog(){this.medicationList={},this.dialogOption=!1},addOption(){this.medicationList.takeTime=this.medicationList.times.join(";");let t=this.termCal(this.medicationList.startTime,this.medicationList.endTime),e=this.medicationList.dto.find((e=>e.list[0].term===t));null!=e&&(this.medicationList.listNum=e.listNum),delete this.medicationList.times,delete this.medicationList.dto,this.request.post("/medication-list/add",this.medicationList).then((t=>{"200"===t.code?(this.$notify({type:"success",title:"添加成功",message:"药单项添加成功"}),this.load(),this.closeDialog()):(this.$notify({type:"error",title:"药单项添加失败",message:t.msg}),this.closeDialog())})).catch((t=>{this.$notify({type:"error",title:"药单项添加失败",message:t})}))},medicationOptionChange(t){let e=this.medications.find((e=>e.id===t));this.medicationList.frequencyId=e.frequency.id,this.medicationList.dosage=e.dosage,this.medicationList.unit=e.unit,this.medicationList.type=e.type,this.medicationList.mode=e.mode,this.frequencyChange()},openEdit(t){this.mode=!1,this.medicationList=t.row,this.medicationList.medicationId=this.medicationList.medication.id,this.medicationList.frequencyId=this.medicationList.frequency.id,this.dialogOption=!0,this.frequencyChange(),this.medicationList.takeTime.endsWith(";")&&(this.medicationList.takeTime=this.medicationList.takeTime.slice(0,-1)),this.medicationList.times=this.medicationList.takeTime?this.medicationList.takeTime.split(";"):""},editOption(){this.medicationList.takeTime=this.medicationList.times.join(";"),delete this.medicationList.times,delete this.medicationList.medication,delete this.medicationList.frequency,delete this.medicationList.term,this.request.put("/medication-list/update",this.medicationList).then((t=>{"200"===t.code?(this.$notify({type:"success",title:"成功",message:"修改药单项成功"}),this.load(),this.closeDialog()):(this.$notify({type:"error",title:"修改药单项失败",message:t.msg}),this.load(),this.closeDialog())})).catch((t=>{this.$notify({type:"error",title:"修改药单项失败",message:t})}))},frequencyChange(){this.medicationList.times=new Array(this.frequencies.find((t=>t.id===this.medicationList.frequencyId)).value),this.$forceUpdate()},changeValue(){this.$forceUpdate()},addList(t){t.length>=2?this.$notify({type:"warning",title:"药单添加失败",message:"该老人已有两个药单"}):t.push({elder:t[0].elder,nurse:t[0].nurse,list:[]})},deleteItem(t){this.request.delete("/medication-list/delete?id="+t.id).then((t=>{"200"===t.code?(this.$notify({type:"success",title:"药单项删除成功",message:"该药单项已被删除"}),this.load()):this.$notify({type:"error",title:"药单项删除失败",message:t.msg})})).catch((t=>{this.$notify({type:"error",title:"药单项删除失败",message:t})}))},addNewList(){this.adding||(this.adding=!0)},delElderList(t){this.request.delete("/medication-list/delete-elder?elderId="+t.elderlyId).then((e=>{"200"===e.code?(this.$notify({type:"success",title:"药单项删除成功",message:t.elderlyName+"所属的药单项已全部删除"}),this.load()):this.$notify({type:"error",title:"获取频率信息失败",message:e.msg})})).catch((t=>{this.$notify({type:"error",title:"获取频率信息失败",message:t})}))},getElders(t){""!==t?(this.loading=!0,setTimeout((()=>{this.request.get("/elderly-information/query-no-ml?careHomeName="+this.careHomeName).then((e=>{"200"===e.code?this.elders=e.data.filter((e=>e.elderlyName.indexOf(t)>-1)):this.$notify({type:"error",title:"获取老人列表失败",message:e.msg}),this.loading=!1})).catch((t=>{this.$notify({type:"error",title:"获取老人列表失败",message:t}),this.loading=!1}))}),200)):this.elders=[]},getWorkers(t){""!==t?(this.loading=!0,setTimeout((()=>{this.request.get("/user/query-worker?careHomeName="+this.careHomeName).then((e=>{"200"===e.code?this.workers=e.data.filter((e=>e.name.indexOf(t)>-1)):this.$notify({type:"error",title:"获取护工列表失败",message:e.msg}),this.loading=!1})).catch((t=>{this.$notify({type:"error",title:"获取护工列表失败",message:t}),this.loading=!1}))}),200)):this.workers=[]},cancelNewList(){this.elders=[],this.workers=[],this.chooseElderId="",this.chooseWorkerId="",this.chooseElder={},this.chooseWorker={},this.adding=!1},addMedicationList(){"{}"!==JSON.stringify(this.chooseElder)?"{}"!==JSON.stringify(this.chooseWorker)?(this.groupedItem.unshift([{elder:this.chooseElder,nurse:this.chooseWorker,listNum:"",list:[]}]),this.$forceUpdate(),this.cancelNewList()):this.$notify({type:"error",title:"添加药单失败",message:"请先选择负责此药单的护工"}):this.$notify({type:"error",title:"添加药单失败",message:"请先选择药单所属的老人"})},termCal(t,e){if(null==t||null==e)return null;let i=Date.parse(t),s=Date.parse(e),l=s-i,a=l>=432e6;return a?"长期":"短期"}},watch:{chooseElderId(t){""!==t&&(this.chooseElder=this.elders.find((e=>e.elderlyId===t)))},chooseWorkerId(t){""!==t&&(this.chooseWorker=this.workers.find((e=>e.userId===t)))}},mounted(){this.load(),this.request.get("/medication-frequency/getAll").then((t=>{"200"===t.code?this.frequencies=t.data:this.$notify({type:"error",title:"获取频率信息失败",message:t.msg})})).catch((t=>{this.$notify({type:"error",title:"获取频率信息失败",message:t})})),this.request.get("/medication/getAll?careHomeName="+this.careHomeName).then((t=>{"200"===t.code?this.medications=t.data:this.$notify({type:"error",title:"获取药品信息失败",message:t.msg})})).catch((t=>{this.$notify({type:"error",title:"获取药品信息失败",message:t})}))}}),o=a,n=i(1001),r=(0,n.Z)(o,s,l,!1,null,"b2f79ccc",null),c=r.exports}}]);
//# sourceMappingURL=129.3c0b731a.js.map