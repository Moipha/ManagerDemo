"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[583],{6583:function(t,e,a){a.r(e),a.d(e,{default:function(){return n}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flexColumn",staticStyle:{"overflow-y":"scroll","margin-top":"60px"}},[e("div",{staticClass:"flexRow",staticStyle:{"margin-top":"-70px"}},[e("el-card",{staticClass:"box-card card flexColumn",staticStyle:{height:"150px",width:"100%"}},[e("span",{staticClass:"mText"},[t._v("线下探望统计")]),e("el-row",{staticStyle:{"margin-top":"20px"}},[e("el-col",{attrs:{span:8}},[e("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[e("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(t.names[t.names.length-1]))]),e("span",{staticClass:"sText"},[t._v("总访问时间最长用户")])])]),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[e("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(Math.max(...t.durations))+" 分钟")]),e("span",{staticClass:"sText"},[t._v("最高总访问时长")])])]),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"flexColumn",staticStyle:{"align-items":"center"}},[e("span",{staticClass:"lText",staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(Math.max(...t.counts))+" 次")]),e("span",{staticClass:"sText"},[t._v("最高总访问次数")])])])],1)],1)],1),e("div",{staticClass:"flexRow",staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card card flexColumn",staticStyle:{width:"calc(50% - 10px)","margin-right":"20px"}},[e("div",{staticClass:"flexRow"},[e("span",{staticClass:"mText"},[t._v("本周访问时长排行榜")])]),t.weekAttendance.length?e("div",{ref:"chart2",staticStyle:{height:"500px"}}):e("div",{staticClass:"flexColumn",staticStyle:{height:"500px",width:"100%"}},[e("div",{staticClass:"flexColumn",staticStyle:{margin:"auto",width:"120px",height:"120px"}},[e("svg",{staticClass:"icon",staticStyle:{margin:"auto"},attrs:{t:"1708426155933",viewBox:"0 0 1666 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8968",width:"100",height:"100"}},[e("path",{attrs:{d:"M1659.700493 956.420446v1.980501a65.599053 65.599053 0 0 1-65.599052 65.599053H492.457707a65.599053 65.599053 0 0 1-65.599053-65.599053v-1.980501a65.599053 65.599053 0 0 1 65.599053-65.599053h192.027787c16.167357-0.687113 66.730768-7.194474 83.908585-61.516795 16.571541-52.543912-36.376554-75.178212-56.949516-81.928083H66.569094a66.609513 66.609513 0 0 1 0-133.178607h457.334123l-1.414644-3.435563s68.307085 3.435563 88.920466-64.871522c15.884429-52.907677-31.768857-77.118295-54.079811-85.363647H377.346122a66.609513 66.609513 0 0 1 0-133.380699h1137.21192a66.609513 66.609513 0 0 1 0 133.380699H1277.221235c-16.167357 0.404184-81.806828 6.264851-81.806828 75.137793 0 78.532939 71.661812 78.0075 71.661812 78.0075v0.687113h333.087981a66.609513 66.609513 0 0 1 0 133.178606h-162.886126l0.444602 0.970042s-79.988001-3.03138-79.988001 71.459719c0 57.192027 38.963331 68.711269 57.11119 71.015118h179.255576a65.599053 65.599053 0 0 1 65.599052 65.437379zM1280.616381 460.527176z",fill:"#D3E1F2","p-id":"8969"}}),e("path",{attrs:{d:"M720.498283 475.118216S723.974265 396.100257 634.932544 396.100257s-81.5239 98.742135-81.5239 98.742135h168.746793z",fill:"#F2F2F2","p-id":"8970"}}),e("path",{attrs:{d:"M734.887231 506.563726h-192.310716l-0.848787-10.832129c0-2.101756-3.597237-52.543912 26.554885-84.878627 16.167357-17.460746 38.639984-26.352793 66.649931-26.352792 31.405092 0 56.019893 9.094139 73.157292 26.999486 23.563923 24.65522 24.251036 57.474956 24.251036 63.376042z m-169.757253-23.40225h144.334084l-0.646695-7.80075v-0.727531c0-0.646694 0.646694-28.292875-17.824511-47.249102-12.529702-13.014723-31.405092-19.602921-56.060312-19.602921-21.260075 0-37.912453 6.345688-49.512532 18.87539-15.965265 17.218236-19.562502 42.196803-20.330452 56.504914z",fill:"#5A9CE5","p-id":"8971"}}),e("path",{attrs:{d:"M738.726978 471.157213s2.546359-41.469272-63.093112-41.469271c-54.84776 0-60.14257 51.816381-60.142569 51.81638h124.448233z",fill:"#D6E9FC","p-id":"8972"}}),e("path",{attrs:{d:"M542.172331 504.744898v-5.860667c-0.565858-17.905348 2.142175-62.365581 30.354213-90.658456 15.6015-15.763173 36.376554-23.927689 61.39554-24.251036h6.305269l-0.282928 4.365186 13.095559 10.427946-8.083678 10.023761-7.80075-0.525439h-2.425104c-19.1179 0-33.830195 5.618157-45.02609 16.935307-22.351372 22.674719-23.64476 61.920979-23.483087 73.399803v4.567278zM634.568778 408.225775z m1.980502-24.251036z",fill:"#5A9CE5","p-id":"8973"}}),e("path",{attrs:{d:"M656.718058 398.202013c1.657154 0.323347 3.354727 0.606276 4.971462 1.01046s3.314308 0.848786 4.890626 1.333807c41.50969 12.893468 51.008013 50.886757 53.109769 70.004657v421.725518s-5.820249 93.245234 80.836787 99.348412c78.896704 5.577738 99.025064-77.724571 99.025064-77.764989h266.074285V482.393527s1.980501-87.182475-78.937123-87.182475H644.228774",fill:"#F6F6F6","p-id":"8974"}}),e("path",{attrs:{d:"M808.367871 1004.11415c-2.788869 0-5.658575 0-8.609118-0.282928-78.290428-5.496902-94.579041-75.865325-92.436866-112.282298v-420.351292c-2.101756-17.824512-10.670456-48.502072-44.460233-59.010855-1.25297-0.404184-2.667614-0.808368-4.04184-1.131715s-2.101756-0.444602-3.112216-0.646694l-1.333807-0.24251 0.565858-2.748451h-10.710875v-24.251036h442.500573c26.231537 0 47.572449 8.083679 63.416459 24.251036 28.292875 29.101243 27.807855 73.399803 27.767437 75.259048v443.430196h-269.46943c-8.04326 22.593882-34.557726 78.0075-100.075942 78.007499zM731.855852 893.246497c-0.24251 4.041839-3.395145 81.160134 69.4388 86.29327 67.498717 4.809789 85.565739-65.477798 86.333688-68.468759l2.26343-9.29623h263.447089V478.311269c-0.565858-9.781251-3.597237-36.376554-20.775054-53.918137-11.07464-11.236313-26.474048-16.935307-45.834458-16.935307h-383.974739c21.745096 20.209197 27.484508 47.976633 28.979988 61.759305V893.246497z",fill:"#5A9CE5","p-id":"8975"}}),e("path",{attrs:{d:"M830.032129 523.014012h227.595974v24.453128h-227.595974zM830.032129 609.388119h227.595974v24.453128h-227.595974zM830.032129 695.721808h227.595974v24.453128h-227.595974zM830.032129 782.095915h227.595974v24.453128h-227.595974z",fill:"#5A9CE5","p-id":"8976"}}),e("path",{attrs:{d:"M1203.013065 619.613973l-58.727926-13.863509-58.727926-13.823091 30.717979 51.937636 30.677561 51.937636 216.480916 159.24847a49.06793 49.06793 0 0 0 55.939056-76.026998z",fill:"#F6F6F6","p-id":"8977"}}),e("path",{attrs:{d:"M1380.490231 870.248431a60.14257 60.14257 0 0 1-20.209197-3.5164 11.761753 11.761753 0 0 1-4.041839-1.899665l-215.470456-158.561358a12.125518 12.125518 0 0 1-4.324768-4.284349L1075.129268 598.192224a12.125518 12.125518 0 0 1 13.33807-18.10744l117.455851 27.646181a12.368028 12.368028 0 0 1 5.53732 2.990961L1426.769291 769.081192a12.610539 12.610539 0 0 1 3.03138 3.193053 61.274285 61.274285 0 0 1-49.270022 97.974186z m-11.31715-26.271956A36.861575 36.861575 0 0 0 1410.601934 787.592816l-213.004934-156.74253-86.859127-20.532544L1155.966055 687.11269z",fill:"#5A9CE5","p-id":"8978"}}),e("path",{attrs:{d:"M1202.972647 620.988198l-56.504915 73.844405",fill:"#F6F6F6","p-id":"8979"}}),e("path",{attrs:{d:"M1146.467732 707.079376a12.125518 12.125518 0 0 1-9.700414-19.683757l56.585751-73.844405a12.125518 12.125518 0 0 1 19.441247 14.873969l-56.585751 73.844405a12.125518 12.125518 0 0 1-9.740833 4.809788z",fill:"#5A9CE5","p-id":"8980"}}),e("path",{attrs:{d:"M1104.311348 407.740754v485.950345h49.55295V487.85001s4.688534-72.268088-49.55295-80.109256zM1197.394908 905.008249c-3.233471 18.188277-16.369449 66.93286-64.426919 89.728834h38.842076c69.277127 0 71.580975-89.728834 71.580975-89.728834z",fill:"#4989E8","p-id":"8981"}}),e("path",{attrs:{d:"M799.192895 991.30152c76.22909 0 99.307993-84.878626 99.307993-84.878627h353.337596s-2.303848 89.728834-71.580975 89.728834H801.496744",fill:"#F6F6F6","p-id":"8982"}}),e("path",{attrs:{d:"M1180.217091 1008.277245h-378.720347v-4.769371h-2.303849v-24.251036c65.760726 0 86.657036-72.753108 87.505822-76.026998l2.465522-8.972883h375.244366l-0.323347 12.529702c-0.929623 34.96191-19.602921 101.490586-83.868167 101.490586z m-320.437024-24.453128H1180.217091c43.126426 0 54.969015-43.207263 58.162068-65.275706h-330.945806a143.16195 143.16195 0 0 1-47.612868 65.275706z",fill:"#5A9CE5","p-id":"8983"}}),e("path",{attrs:{d:"M413.237655 0h6.669035v28.979988h28.979989v6.669035h-28.979989V64.66943h-6.669035V35.649023H383.974739V28.979988h29.101243zM714.233432 182.1657H719.447405v21.745095h21.745095v4.971463H719.447405v21.866351h-5.011881v-21.866351h-21.825933v-4.971463h21.825933z",fill:"#C6E7F7","p-id":"8984"}}),e("path",{attrs:{d:"M72.348924 335.796013h6.669035v28.979989h28.979989v6.709453h-28.979989v29.101243H72.348924v-29.101243h-29.141661v-6.709453h29.141661zM1480.081153 149.548056h5.496901v23.806434h23.806434v5.496901h-23.806434v23.927689h-5.496901v-23.766015h-23.887271v-5.496902h23.887271zM1479.313203 488.456286a34.113124 34.113124 0 1 1 34.113124-34.072706 34.153543 34.153543 0 0 1-34.113124 34.072706z m0-55.979475a21.906769 21.906769 0 1 0 21.866351 21.906769A21.906769 21.906769 0 0 0 1479.313203 432.476811z",fill:"#94CBED","p-id":"8985"}}),e("path",{attrs:{d:"M476.937044 249.34107a34.113124 34.113124 0 1 1 34.113124-34.113124 34.153543 34.153543 0 0 1-34.113124 34.113124z m0-55.979475a21.866351 21.866351 0 1 0 21.906769 21.866351 21.906769 21.906769 0 0 0-21.906769-21.866351z",fill:"#5DB6E2","p-id":"8986"}}),e("path",{attrs:{d:"M49.512532 188.268877a34.113124 34.113124 0 1 1 34.113124-34.072706 34.113124 34.113124 0 0 1-34.113124 34.072706z m0-55.979475a21.906769 21.906769 0 1 0 21.866351 21.906769 21.906769 21.906769 0 0 0-21.866351-21.906769z",fill:"#94CBED","p-id":"8987"}}),e("path",{attrs:{d:"M245.622577 253.180817m-10.387527 0a10.387527 10.387527 0 1 0 20.775055 0 10.387527 10.387527 0 1 0-20.775055 0Z",fill:"#C6E7F7","p-id":"8988"}})]),e("span",{staticStyle:{"text-align":"center",color:"var(--lightText)","font-weight":"lighter"}},[t._v("暂无本周记录")])])])]),e("el-card",{staticClass:"box-card card flexColumn",staticStyle:{width:"calc(50% - 10px)"}},[e("div",{staticClass:"flexRow"},[e("span",{staticClass:"mText"},[t._v("访问时长总排行榜")])]),e("div",{ref:"chart",staticStyle:{height:"500px"}})])],1),e("div",{staticClass:"flexRow",staticStyle:{"margin-top":"20px"}},[e("el-card",{staticClass:"box-card card flexColumn",staticStyle:{width:"calc(50% - 10px)","margin-right":"20px"}},[e("div",{staticClass:"flexRow"},[e("span",{staticClass:"mText"},[t._v("本周访问频次排行榜")])]),t.weekAttendance.length?e("div",{ref:"chart4",staticStyle:{height:"500px"}}):e("div",{staticClass:"flexColumn",staticStyle:{height:"500px",width:"100%"}},[e("div",{staticClass:"flexColumn",staticStyle:{margin:"auto",width:"120px",height:"120px"}},[e("svg",{staticClass:"icon",staticStyle:{margin:"auto"},attrs:{t:"1708426155933",viewBox:"0 0 1666 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8968",width:"100",height:"100"}},[e("path",{attrs:{d:"M1659.700493 956.420446v1.980501a65.599053 65.599053 0 0 1-65.599052 65.599053H492.457707a65.599053 65.599053 0 0 1-65.599053-65.599053v-1.980501a65.599053 65.599053 0 0 1 65.599053-65.599053h192.027787c16.167357-0.687113 66.730768-7.194474 83.908585-61.516795 16.571541-52.543912-36.376554-75.178212-56.949516-81.928083H66.569094a66.609513 66.609513 0 0 1 0-133.178607h457.334123l-1.414644-3.435563s68.307085 3.435563 88.920466-64.871522c15.884429-52.907677-31.768857-77.118295-54.079811-85.363647H377.346122a66.609513 66.609513 0 0 1 0-133.380699h1137.21192a66.609513 66.609513 0 0 1 0 133.380699H1277.221235c-16.167357 0.404184-81.806828 6.264851-81.806828 75.137793 0 78.532939 71.661812 78.0075 71.661812 78.0075v0.687113h333.087981a66.609513 66.609513 0 0 1 0 133.178606h-162.886126l0.444602 0.970042s-79.988001-3.03138-79.988001 71.459719c0 57.192027 38.963331 68.711269 57.11119 71.015118h179.255576a65.599053 65.599053 0 0 1 65.599052 65.437379zM1280.616381 460.527176z",fill:"#D3E1F2","p-id":"8969"}}),e("path",{attrs:{d:"M720.498283 475.118216S723.974265 396.100257 634.932544 396.100257s-81.5239 98.742135-81.5239 98.742135h168.746793z",fill:"#F2F2F2","p-id":"8970"}}),e("path",{attrs:{d:"M734.887231 506.563726h-192.310716l-0.848787-10.832129c0-2.101756-3.597237-52.543912 26.554885-84.878627 16.167357-17.460746 38.639984-26.352793 66.649931-26.352792 31.405092 0 56.019893 9.094139 73.157292 26.999486 23.563923 24.65522 24.251036 57.474956 24.251036 63.376042z m-169.757253-23.40225h144.334084l-0.646695-7.80075v-0.727531c0-0.646694 0.646694-28.292875-17.824511-47.249102-12.529702-13.014723-31.405092-19.602921-56.060312-19.602921-21.260075 0-37.912453 6.345688-49.512532 18.87539-15.965265 17.218236-19.562502 42.196803-20.330452 56.504914z",fill:"#5A9CE5","p-id":"8971"}}),e("path",{attrs:{d:"M738.726978 471.157213s2.546359-41.469272-63.093112-41.469271c-54.84776 0-60.14257 51.816381-60.142569 51.81638h124.448233z",fill:"#D6E9FC","p-id":"8972"}}),e("path",{attrs:{d:"M542.172331 504.744898v-5.860667c-0.565858-17.905348 2.142175-62.365581 30.354213-90.658456 15.6015-15.763173 36.376554-23.927689 61.39554-24.251036h6.305269l-0.282928 4.365186 13.095559 10.427946-8.083678 10.023761-7.80075-0.525439h-2.425104c-19.1179 0-33.830195 5.618157-45.02609 16.935307-22.351372 22.674719-23.64476 61.920979-23.483087 73.399803v4.567278zM634.568778 408.225775z m1.980502-24.251036z",fill:"#5A9CE5","p-id":"8973"}}),e("path",{attrs:{d:"M656.718058 398.202013c1.657154 0.323347 3.354727 0.606276 4.971462 1.01046s3.314308 0.848786 4.890626 1.333807c41.50969 12.893468 51.008013 50.886757 53.109769 70.004657v421.725518s-5.820249 93.245234 80.836787 99.348412c78.896704 5.577738 99.025064-77.724571 99.025064-77.764989h266.074285V482.393527s1.980501-87.182475-78.937123-87.182475H644.228774",fill:"#F6F6F6","p-id":"8974"}}),e("path",{attrs:{d:"M808.367871 1004.11415c-2.788869 0-5.658575 0-8.609118-0.282928-78.290428-5.496902-94.579041-75.865325-92.436866-112.282298v-420.351292c-2.101756-17.824512-10.670456-48.502072-44.460233-59.010855-1.25297-0.404184-2.667614-0.808368-4.04184-1.131715s-2.101756-0.444602-3.112216-0.646694l-1.333807-0.24251 0.565858-2.748451h-10.710875v-24.251036h442.500573c26.231537 0 47.572449 8.083679 63.416459 24.251036 28.292875 29.101243 27.807855 73.399803 27.767437 75.259048v443.430196h-269.46943c-8.04326 22.593882-34.557726 78.0075-100.075942 78.007499zM731.855852 893.246497c-0.24251 4.041839-3.395145 81.160134 69.4388 86.29327 67.498717 4.809789 85.565739-65.477798 86.333688-68.468759l2.26343-9.29623h263.447089V478.311269c-0.565858-9.781251-3.597237-36.376554-20.775054-53.918137-11.07464-11.236313-26.474048-16.935307-45.834458-16.935307h-383.974739c21.745096 20.209197 27.484508 47.976633 28.979988 61.759305V893.246497z",fill:"#5A9CE5","p-id":"8975"}}),e("path",{attrs:{d:"M830.032129 523.014012h227.595974v24.453128h-227.595974zM830.032129 609.388119h227.595974v24.453128h-227.595974zM830.032129 695.721808h227.595974v24.453128h-227.595974zM830.032129 782.095915h227.595974v24.453128h-227.595974z",fill:"#5A9CE5","p-id":"8976"}}),e("path",{attrs:{d:"M1203.013065 619.613973l-58.727926-13.863509-58.727926-13.823091 30.717979 51.937636 30.677561 51.937636 216.480916 159.24847a49.06793 49.06793 0 0 0 55.939056-76.026998z",fill:"#F6F6F6","p-id":"8977"}}),e("path",{attrs:{d:"M1380.490231 870.248431a60.14257 60.14257 0 0 1-20.209197-3.5164 11.761753 11.761753 0 0 1-4.041839-1.899665l-215.470456-158.561358a12.125518 12.125518 0 0 1-4.324768-4.284349L1075.129268 598.192224a12.125518 12.125518 0 0 1 13.33807-18.10744l117.455851 27.646181a12.368028 12.368028 0 0 1 5.53732 2.990961L1426.769291 769.081192a12.610539 12.610539 0 0 1 3.03138 3.193053 61.274285 61.274285 0 0 1-49.270022 97.974186z m-11.31715-26.271956A36.861575 36.861575 0 0 0 1410.601934 787.592816l-213.004934-156.74253-86.859127-20.532544L1155.966055 687.11269z",fill:"#5A9CE5","p-id":"8978"}}),e("path",{attrs:{d:"M1202.972647 620.988198l-56.504915 73.844405",fill:"#F6F6F6","p-id":"8979"}}),e("path",{attrs:{d:"M1146.467732 707.079376a12.125518 12.125518 0 0 1-9.700414-19.683757l56.585751-73.844405a12.125518 12.125518 0 0 1 19.441247 14.873969l-56.585751 73.844405a12.125518 12.125518 0 0 1-9.740833 4.809788z",fill:"#5A9CE5","p-id":"8980"}}),e("path",{attrs:{d:"M1104.311348 407.740754v485.950345h49.55295V487.85001s4.688534-72.268088-49.55295-80.109256zM1197.394908 905.008249c-3.233471 18.188277-16.369449 66.93286-64.426919 89.728834h38.842076c69.277127 0 71.580975-89.728834 71.580975-89.728834z",fill:"#4989E8","p-id":"8981"}}),e("path",{attrs:{d:"M799.192895 991.30152c76.22909 0 99.307993-84.878626 99.307993-84.878627h353.337596s-2.303848 89.728834-71.580975 89.728834H801.496744",fill:"#F6F6F6","p-id":"8982"}}),e("path",{attrs:{d:"M1180.217091 1008.277245h-378.720347v-4.769371h-2.303849v-24.251036c65.760726 0 86.657036-72.753108 87.505822-76.026998l2.465522-8.972883h375.244366l-0.323347 12.529702c-0.929623 34.96191-19.602921 101.490586-83.868167 101.490586z m-320.437024-24.453128H1180.217091c43.126426 0 54.969015-43.207263 58.162068-65.275706h-330.945806a143.16195 143.16195 0 0 1-47.612868 65.275706z",fill:"#5A9CE5","p-id":"8983"}}),e("path",{attrs:{d:"M413.237655 0h6.669035v28.979988h28.979989v6.669035h-28.979989V64.66943h-6.669035V35.649023H383.974739V28.979988h29.101243zM714.233432 182.1657H719.447405v21.745095h21.745095v4.971463H719.447405v21.866351h-5.011881v-21.866351h-21.825933v-4.971463h21.825933z",fill:"#C6E7F7","p-id":"8984"}}),e("path",{attrs:{d:"M72.348924 335.796013h6.669035v28.979989h28.979989v6.709453h-28.979989v29.101243H72.348924v-29.101243h-29.141661v-6.709453h29.141661zM1480.081153 149.548056h5.496901v23.806434h23.806434v5.496901h-23.806434v23.927689h-5.496901v-23.766015h-23.887271v-5.496902h23.887271zM1479.313203 488.456286a34.113124 34.113124 0 1 1 34.113124-34.072706 34.153543 34.153543 0 0 1-34.113124 34.072706z m0-55.979475a21.906769 21.906769 0 1 0 21.866351 21.906769A21.906769 21.906769 0 0 0 1479.313203 432.476811z",fill:"#94CBED","p-id":"8985"}}),e("path",{attrs:{d:"M476.937044 249.34107a34.113124 34.113124 0 1 1 34.113124-34.113124 34.153543 34.153543 0 0 1-34.113124 34.113124z m0-55.979475a21.866351 21.866351 0 1 0 21.906769 21.866351 21.906769 21.906769 0 0 0-21.906769-21.866351z",fill:"#5DB6E2","p-id":"8986"}}),e("path",{attrs:{d:"M49.512532 188.268877a34.113124 34.113124 0 1 1 34.113124-34.072706 34.113124 34.113124 0 0 1-34.113124 34.072706z m0-55.979475a21.906769 21.906769 0 1 0 21.866351 21.906769 21.906769 21.906769 0 0 0-21.866351-21.906769z",fill:"#94CBED","p-id":"8987"}}),e("path",{attrs:{d:"M245.622577 253.180817m-10.387527 0a10.387527 10.387527 0 1 0 20.775055 0 10.387527 10.387527 0 1 0-20.775055 0Z",fill:"#C6E7F7","p-id":"8988"}})]),e("span",{staticStyle:{"text-align":"center",color:"var(--lightText)","font-weight":"lighter"}},[t._v("暂无本周记录")])])])]),e("el-card",{staticClass:"box-card card flexColumn",staticStyle:{width:"calc(50% - 10px)"}},[e("div",{staticClass:"flexRow"},[e("span",{staticClass:"mText"},[t._v("访问频次总排行榜")])]),e("div",{ref:"chart3",staticStyle:{height:"500px"}})])],1),e("el-card",{staticClass:"box-card card flexColumn specialCard",staticStyle:{width:"100%","margin-top":"20px"}},[e("div",{staticClass:"flexRow",staticStyle:{"margin-bottom":"30px"}},[e("span",{staticClass:"mText"},[t._v("线下访问记录")]),e("div",{staticStyle:{"margin-left":"auto"}},[e("el-input",{staticClass:"input",attrs:{"suffix-icon":"el-icon-search",clearable:""},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),e("el-dropdown",{attrs:{size:"large","split-button":"",trigger:"click"},on:{click:function(e){return t.search()},command:t.handleClick}},[e("span",{staticStyle:{color:"var(--btnText)"}},[t._v(t._s(t.btnWord))]),e("el-dropdown-menu",{ref:"dropdown",staticStyle:{"background-color":"var(--lightBg)!important",border:"none"},attrs:{slot:"dropdown","append-to-body":!1},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"visitor_id"}},[t._v("根据到访用户搜索")]),e("el-dropdown-item",{attrs:{command:"elder_id"}},[t._v("根据访问老人搜索")]),e("el-dropdown-item",{attrs:{command:"check_out_time"}},[t._v("根据签到日期搜索")]),e("el-dropdown-item",{attrs:{command:"visit_duration"}},[t._v("根据访问时长搜索")])],1)],1)],1),e("div",{ref:"here"})]),e("el-table",{attrs:{data:t.list,"header-cell-style":{height:"40px"},"row-style":{height:"62px"}}},[e("el-table-column",{attrs:{width:"10px"}}),e("el-table-column",{attrs:{prop:"visitor.name",label:"到访用户"}}),e("el-table-column",{attrs:{prop:"elderly.elderlyName",label:"访问老人"}}),e("el-table-column",{attrs:{prop:"checkInTime",label:"签到时间"}}),e("el-table-column",{attrs:{prop:"checkOutTime",label:"签退时间"}}),e("el-table-column",{attrs:{label:"访问时长"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.visitDuration))]),t._v(" 分钟 ")]}}])}),e("el-table-column",{attrs:{label:"签到状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1===a.row.status?"已完成":"未完成"))])]}}])})],1),e("el-pagination",{staticStyle:{"text-align":"center","margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"pager-count":11,"page-size":t.pageSize,"current-page":t.currentPage},on:{"current-change":t.pageChange}})],1)],1)},r=[],o=a(9252),l={name:"Attendance",data(){return{attendance:[],weekAttendance:[],counts:[],names:[],durations:[],list:[],careHomeName:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).careHomeName:"",currentPage:1,pageSize:7,total:0,keyword:"",searchMode:"visitor_id"}},methods:{load(){this.request.get("/manager-attendance/query-data",{params:{careHomeName:this.careHomeName}}).then((t=>{"200"!==t.code?this.$notify({type:"error",title:"获取排行榜数据失败",message:t.msg}):(this.attendance=t.data,this.createChart())})).catch((t=>{this.$notify({type:"error",title:"获取排行榜数据失败",message:t})}))},search(){this.request.get("/manager-attendance/query-records",{params:{careHomeName:this.careHomeName,pageNum:this.currentPage,pageSize:this.pageSize,keyword:this.keyword,type:this.searchMode}}).then((t=>{"200"===t.code?(this.list=t.data.records,this.total=parseInt(t.data.total)):this.$notify({type:"error",title:"获取到访记录失败",message:t.msg})})).catch((t=>{this.$notify({type:"error",title:"获取到访记录失败",message:t})})),this.request.get("/manager-attendance/query-week",{params:{careHomeName:this.careHomeName}}).then((t=>{"200"!==t.code?this.$notify({type:"error",title:"获取排行榜数据失败",message:t.msg}):(this.weekAttendance=t.data,this.createChart2())})).catch((t=>{this.$notify({type:"error",title:"获取排行榜数据失败",message:t})}))},pageChange(t){this.currentPage=t,this.search()},handleClick(t){this.searchMode=t},createChart(){const t=this.attendance.map((t=>t[Object.keys(t)].user.name)).reverse().slice(0,10),e=this.attendance.map((t=>t[Object.keys(t)].totalDuration)).reverse().slice(0,10),a=this.attendance.map((t=>t[Object.keys(t)].visitCount)).reverse().slice(0,10);this.names=t,this.durations=e,this.counts=a,this.$echarts.init(this.$refs.chart).setOption({tooltip:{trigger:"axis"},grid:{left:"80",right:"20",bottom:"20",top:"20",containLabel:!1},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:t,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:70,width:60,align:"left",overflow:"truncate",formatter:(e,a)=>{let i=a+1;return i===t.length?"{one|"+(t.length-a)+"} {a|"+e+"}":i+1===t.length?"{two|"+(t.length-a)+"} {b|"+e+"}":i+2===t.length?"{three|"+(t.length-a)+"} {c|"+e+"}":t.length-a>9?"{five|"+(t.length-a)+"} {d|"+e+"}":"{four|"+(t.length-a)+"} {d|"+e+"}"},rich:{a:{color:"dodgerblue",fontWeight:"bolder"},b:{color:"dodgerblue",fontWeight:"bolder"},c:{color:"dodgerblue",fontWeight:"bolder"},d:{color:"dodgerblue",fontWeight:"bolder"},one:{backgroundColor:"#E86452",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},two:{backgroundColor:"#FF9845",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},three:{backgroundColor:"#F6BD16",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},four:{backgroundColor:"rgb(187,187,187)",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},five:{backgroundColor:"rgb(187,187,187)",color:"white",width:16,height:16,padding:[1,0,0,1],borderRadius:10,fontSize:11}}}},series:[{type:"bar",showBackground:!0,label:{show:!0,position:"right",color:"dodgerblue",fontWeight:"bolder"},barWidth:20,data:e,itemStyle:{borderRadius:7,color:new o.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"royalblue"},{offset:1,color:"#37BBF8"}])}}]}),this.attendance.sort(((t,e)=>{const a=parseInt(Object.values(t)[0].visitCount),i=parseInt(Object.values(e)[0].visitCount);return i-a}));const i=this.attendance.map((t=>{const e=Object.values(t)[0].user;return{name:e.name,visitCount:Object.values(t)[0].visitCount}})),r=i.map((t=>t.name)).reverse(),l=i.map((t=>t.visitCount)).reverse();this.$echarts.init(this.$refs.chart3).setOption({tooltip:{trigger:"axis"},grid:{left:"80",right:"20",bottom:"20",top:"20",containLabel:!1},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:r,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:70,width:60,align:"left",overflow:"truncate",formatter:(t,e)=>{let a=e+1;return a===r.length?"{one|"+(r.length-e)+"} {a|"+t+"}":a+1===r.length?"{two|"+(r.length-e)+"} {b|"+t+"}":a+2===r.length?"{three|"+(r.length-e)+"} {c|"+t+"}":r.length-e>9?"{five|"+(r.length-e)+"} {d|"+t+"}":"{four|"+(r.length-e)+"} {d|"+t+"}"},rich:{a:{color:"dodgerblue",fontWeight:"bolder"},b:{color:"dodgerblue",fontWeight:"bolder"},c:{color:"dodgerblue",fontWeight:"bolder"},d:{color:"dodgerblue",fontWeight:"bolder"},one:{backgroundColor:"#E86452",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},two:{backgroundColor:"#FF9845",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},three:{backgroundColor:"#F6BD16",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},four:{backgroundColor:"rgb(187,187,187)",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},five:{backgroundColor:"rgb(187,187,187)",color:"white",width:16,height:16,padding:[1,0,0,1],borderRadius:10,fontSize:11}}}},series:[{type:"bar",showBackground:!0,label:{show:!0,position:"right",color:"dodgerblue",fontWeight:"bolder"},barWidth:20,data:l,itemStyle:{borderRadius:7,color:new o.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"royalblue"},{offset:1,color:"#37BBF8"}])}}]})},createChart2(){const t=this.weekAttendance.map((t=>t[Object.keys(t)].user.name)).reverse().slice(0,10),e=this.weekAttendance.map((t=>t[Object.keys(t)].totalDuration)).reverse().slice(0,10);this.weekAttendance.length&&this.$echarts.init(this.$refs.chart2).setOption({tooltip:{trigger:"axis"},grid:{left:"80",right:"20",bottom:"20",top:"20",containLabel:!1},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:t,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:70,width:60,align:"left",overflow:"truncate",formatter:(e,a)=>{let i=a+1;return i===t.length?"{one|"+(t.length-a)+"} {a|"+e+"}":i+1===t.length?"{two|"+(t.length-a)+"} {b|"+e+"}":i+2===t.length?"{three|"+(t.length-a)+"} {c|"+e+"}":t.length-a>9?"{five|"+(t.length-a)+"} {d|"+e+"}":"{four|"+(t.length-a)+"} {d|"+e+"}"},rich:{a:{color:"dodgerblue",fontWeight:"bolder"},b:{color:"dodgerblue",fontWeight:"bolder"},c:{color:"dodgerblue",fontWeight:"bolder"},d:{color:"dodgerblue",fontWeight:"bolder"},one:{backgroundColor:"#E86452",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},two:{backgroundColor:"#FF9845",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},three:{backgroundColor:"#F6BD16",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},four:{backgroundColor:"rgb(187,187,187)",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},five:{backgroundColor:"rgb(187,187,187)",color:"white",width:16,height:16,padding:[1,0,0,1],borderRadius:10,fontSize:11}}}},series:[{type:"bar",showBackground:!0,label:{show:!0,position:"right",color:"dodgerblue",fontWeight:"bolder"},barWidth:20,data:e,itemStyle:{borderRadius:7,color:new o.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"royalblue"},{offset:1,color:"#37BBF8"}])}}]}),this.weekAttendance.sort(((t,e)=>{const a=parseInt(Object.values(t)[0].visitCount),i=parseInt(Object.values(e)[0].visitCount);return i-a}));const a=this.weekAttendance.map((t=>{const e=Object.values(t)[0].user;return{name:e.name,visitCount:Object.values(t)[0].visitCount}})),i=a.map((t=>t.name)).reverse(),r=a.map((t=>t.visitCount)).reverse();this.weekAttendance.length&&this.$echarts.init(this.$refs.chart4).setOption({tooltip:{trigger:"axis"},grid:{left:"80",right:"20",bottom:"20",top:"20",containLabel:!1},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:i,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:70,width:60,align:"left",overflow:"truncate",formatter:(t,e)=>{let a=e+1;return a===i.length?"{one|"+(i.length-e)+"} {a|"+t+"}":a+1===i.length?"{two|"+(i.length-e)+"} {b|"+t+"}":a+2===i.length?"{three|"+(i.length-e)+"} {c|"+t+"}":i.length-e>9?"{five|"+(i.length-e)+"} {d|"+t+"}":"{four|"+(i.length-e)+"} {d|"+t+"}"},rich:{a:{color:"dodgerblue",fontWeight:"bolder"},b:{color:"dodgerblue",fontWeight:"bolder"},c:{color:"dodgerblue",fontWeight:"bolder"},d:{color:"dodgerblue",fontWeight:"bolder"},one:{backgroundColor:"#E86452",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},two:{backgroundColor:"#FF9845",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},three:{backgroundColor:"#F6BD16",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},four:{backgroundColor:"rgb(187,187,187)",color:"white",width:12,height:16,padding:[1,0,0,5],borderRadius:10,fontSize:11},five:{backgroundColor:"rgb(187,187,187)",color:"white",width:16,height:16,padding:[1,0,0,1],borderRadius:10,fontSize:11}}}},series:[{type:"bar",showBackground:!0,label:{show:!0,position:"right",color:"dodgerblue",fontWeight:"bolder"},barWidth:20,data:r,itemStyle:{borderRadius:7,color:new o.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"royalblue"},{offset:1,color:"#37BBF8"}])}}]})}},mounted(){this.load(),this.search(),this.$refs.here.appendChild(this.$refs.dropdown.popperElm)},computed:{btnWord(){switch(this.searchMode){case"visitor_id":return"根据到访用户搜索";case"elder_id":return"根据访问老人搜索";case"check_out_time":return"根据签到日期搜索";case"visit_duration":return"根据访问时长搜索";default:return"搜索"}}}},s=l,h=a(1001),d=(0,h.Z)(s,i,r,!1,null,"bcddf4b2",null),n=d.exports}}]);
//# sourceMappingURL=583.47778afb.js.map