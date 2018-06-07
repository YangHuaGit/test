(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1065:function(e,t,i){"use strict";i.r(t);var o=i(1103),a=i(1087);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);i(1123);var n=i(2),s=Object(n.a)(a.default,o.a,o.b,!1,null,null,null);t.default=s.exports},1085:function(e,t,i){},1086:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(i(29)),a=s(i(77)),r=s(i(598)),n=s(i(68));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e=this;return{currentRow:null,roleName:"",addFormRules:{name:[{validator:function(t,i,o){var a=new RegExp("^[ a-zA-Z0-9_一-龥]+$");if(console.log(i),i)if(a.test(i))if(i.length>20)o(new Error("角色名称不得超过20个字符"));else if(i.trim()){var r={name:""};r.name=i,e.$http({url:"/api/role/nameExist",method:"post",data:r}).then(function(t){e.editLoading=!1,t.data.flag?o(new Error("角色名称重复")):o()})}else o(new Error("不能全为空格"));else o(new Error("只允许输入中文、英文、数字、下划线及空格"));else o(new Error("请输入角色名称"))},trigger:"blur",required:!0}],description:[{max:120,message:"长度不得超过120个字符",trigger:"blur"}]},editFormRules:{name:[{validator:function(t,i,o){console.log(e.editForm.name);var a=new RegExp("^[ a-zA-Z0-9_一-龥]+$");if(console.log(i),i)if(a.test(i))if(i==e.roleName)o();else if(i.length>20)o(new Error("角色名称不得超过20个字符"));else if(i.trim()){var r={name:""};r.name=i,e.$http({url:"/api/role/nameExist",method:"post",data:r}).then(function(t){e.editLoading=!1,t.data.flag?o(new Error("角色名称重复")):o()})}else o(new Error("不能全为空格"));else o(new Error("只允许输入中文、字母、数字、下划线及空格"));else o(new Error("请输入角色名称"))},trigger:"blur",required:!0}],description:[{max:120,message:"长度不得超过120个字符",trigger:"blur"}]},data2:[],defaultProps:{children:"children",label:"authName"},auths:[],ids:{authIds:[],roleId:""},addItem:{authName:"",authCode:"",description:""},editItem:{authName:"",authCode:"",description:""},groups:[],roles:[],listLoading:!1,sels:[],perCheck:[],editFormVisible:!1,editLoading:!1,addItemLoading:!1,addItemVisible:!1,dialogVisible:!1,editItemLoading:!1,editItemVisible:!1,permissionVisible:!1,permissionLoading:!1,modelVisible:!1,modelLoading:!1,defaultProps1:{label:"name",children:"children"},data3:[],modelTree:[],directory:{},editForm:{name:"",description:""},permission:{},addFormVisible:!1,addLoading:!1,addForm:{name:"",description:""},roleTree:[]}},methods:{nodeRender:function(e,t){var i=this,o=t.node,a=t.data,n=(t.store,18*(o.level<=10?o.level:10));return 0==!a.parentId?e("span",{style:"width:100%;font-size: 14px; "},[e("span",{style:{maxWidth:200-n+"px",minWidth:"100px"},class:"spanEllipsis",attrs:{title:o.label}},[e("svg",{class:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-wenjianjiayigongxiang"}})]),o.label]),e("span",{style:"margin-right:10px;min-width:250px;position:absolute;right:5%"},[e("el-radio-group",(0,r.default)([{attrs:{value:a.mode},on:{input:function(e){a.mode=e}}},{directives:[{name:"model",value:a.mode}]}]),[e("el-radio",{attrs:{label:1}},["可读"]),e("el-radio",{attrs:{label:2}},["读/写"]),e("el-radio",{attrs:{label:3}},["完全"])]),e("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-close"},on:{click:function(){return i.modeClear(a)}},style:"margin-left:5px;"})])]):e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",[e("svg",{class:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-wenjianjiayigongxiang"}})]),e("span",[o.label])])])},modeClear:function(e){e.mode=0},modelAuth:function(e,t){this.ids.roleId=t.id,this.modelVisible=!0;var i=[];t.directoryAuth.forEach(function(e){return i.push(e.directory_id)}),this.modelTree=i,this.setMode(this.data3,t.directoryAuth)},selsChange:function(e){this.sels=e,console.log(e)},handleCurrentChange:function(e){this.currentRow=e},getCheckedNodes:function(){return this.$refs.tree.getCheckedNodes()},setCheckedNodes:function(e){this.$refs.tree.setCheckedNodes(e)},getRoles:function(){var e=this;e.$http.post("/api/role/list").then(function(t){e.roles=t.data.role}).catch(function(e){})},getGroups:function(){var e=this;e.$http.post("/api/auth/list").then(function(t){e.groups=t.data.group,e.data2=t.data.group}).catch(function(e){console.log(e)})},handleDel:function(){var e=this;1==this.currentRow.id?this.$message({message:"管理员角色不允许删除",type:"error"}):this.$confirm("确认删除该角色吗?","提示",{type:"warning",closeOnClickModal:!1}).then(function(){e.listLoading=!0;var t={id:e.currentRow.id};e.$http({url:"/api/role/delete",method:"post",data:t}).then(function(t){e.listLoading=!1,t.data.flag?e.$message({message:"删除成功",type:"success"}):e.$message({message:"删除失败",type:"error"}),e.getRoles()})}).catch(function(e){this.listLoading=!1,console.log(e)})},modelAuthSubmit:function(){var e=this,t={directoryAuth:"",roleId:""};t.directoryAuth=this.data3,t.roleId=this.ids.roleId,this.$http({method:"post",url:"api/DirectoryAuth/roleAdd",data:t}).then(function(t){e.addLoading=!1,t.data.flag?e.$message({message:t.data.msg,type:"success"}):e.$message({message:t.data.msg,type:"error"}),e.modelVisible=!1,e.getRoles()}).catch(function(e){this.addLoading=!1,console.log(e)})},setMode:function(e,t){var i=!0,o=!1,r=void 0;try{for(var n,s=(0,a.default)(e);!(i=(n=s.next()).done);i=!0){var l=n.value,d=!1,c=!0,u=!1,m=void 0;try{for(var f,p=(0,a.default)(t);!(c=(f=p.next()).done);c=!0){var h=f.value;l.id==h.directory_id&&(d=!0,h.mode>0?l.mode=h.mode:l.mode=0)}}catch(e){u=!0,m=e}finally{try{!c&&p.return&&p.return()}finally{if(u)throw m}}d||(l.mode=0),l.children&&this.setMode(l.children,t)}}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}},getDirectoryTree:function(){var e=this;e.$http.post("api/directory/getDirectoryTree").then(function(t){e.data3=t.data.directoryTree}).catch(function(e){console.log(e)})},handleEdit:function(){this.editFormVisible=!0,this.roleName=this.currentRow.name,this.editForm=(0,o.default)({},this.currentRow)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",description:""}},handlePermission:function(e,t){this.ids.roleId=t.id,this.permissionVisible=!0;var i=[];t.auths.forEach(function(e){return i.push(e.auth_id)}),this.roleTree=i},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){if(t){e.editLoading=!0;var i=(0,o.default)({},e.editForm);e.$http({url:"/api/role/edit",method:"post",data:i}).then(function(t){e.editLoading=!1,t.data.flag?e.$message({message:"编辑成功",type:"success"}):e.$message({message:"编辑失败",type:"error"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getRoles()}).catch(function(e){this.editLoading=!1,console.log(e)})}})},permissionSubmit:function(){var e=this;this.$refs.permissionForm.validate(function(t){if(t){e.permissionLoading=!0,e.ids.authIds=e.getCheckedNodes();var i=(0,o.default)({},e.ids);e.$http({url:"/api/role/assign",method:"post",data:i}).then(function(t){e.permissionLoading=!1,t.data.flag?e.$message({message:"编辑成功",type:"success"}):e.$message({message:"编辑失败",type:"error"}),e.$refs.permissionForm.resetFields(),e.permissionVisible=!1,e.getGroups(),e.getRoles()}).catch(function(e){this.permissionLoading=!1,console.log(e)})}})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){if(t){e.addLoading=!0;var i=(0,o.default)({},e.addForm);e.$http({method:"post",url:"api/role/add",data:i}).then(function(t){e.addLoading=!1,t.data.flag?e.$message({message:t.data.msg,type:"success"}):e.$message({message:t.data.msg,type:"error"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getRoles()})}})},dateFormatter:function(e,t){if(null!=e.createDate)return n.default.formatDate.format(new Date(e.createDate),"yyyy-MM-dd ")}},mounted:function(){this.getRoles(),this.getGroups(),this.getDirectoryTree()}}},1087:function(e,t,i){"use strict";i.r(t);var o=i(1086),a=i.n(o);for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);t.default=a.a},1103:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"role-view"},[i("el-form",{staticStyle:{height:"50px"},attrs:{inline:!0}},[i("el-form-item",[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleAdd}},[e._v("新建\n         "),i("i",{staticClass:"el-icon-plus el-icon--right"})]),e._v(" "),i("el-button",{attrs:{size:"small",disabled:null===this.currentRow},on:{click:e.handleEdit}},[e._v("编辑\n         "),i("i",{staticClass:"el-icon-edit el-icon--right"})]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"small",disabled:null===this.currentRow},on:{click:e.handleDel}},[e._v("删除\n         "),i("i",{staticClass:"el-icon-delete el-icon--right"})])],1)],1),e._v(" "),i("hr"),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roles,"highlight-current-row":"",height:"100%"},on:{"current-change":e.handleCurrentChange}},[i("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"tableEllipsis",staticStyle:{"min-width":"120px"},attrs:{title:t.row.name}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"createDate",label:"创建时间","min-width":"160",sortable:"",formatter:e.dateFormatter}}),e._v(" "),i("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"160",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"tableEllipsis",staticStyle:{"min-width":"160px"},attrs:{title:t.row.description}},[e._v(e._s(t.row.description))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-dropdown",[i("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n             选项\n             "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.handlePermission(t.$index,t.row)}}},[i("span",[e._v("\n                   分配权限\n                 ")])])]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.modelAuth(t.$index,t.row)}}},[i("span",[e._v("\n                   目录控制\n                 ")])])])],1)],1)]}}])})],1),e._v(" "),e.editFormVisible?i("el-dialog",{attrs:{title:"编辑角色",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:10},placeholder:"请添加相关描述","auto-complete":"off"},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1):e._e(),e._v(" "),e.addFormVisible?i("el-dialog",{attrs:{title:"新建角色",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[i("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述",prop:"description"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:10},placeholder:"请添加相关描述","auto-complete":"off"},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1):e._e(),e._v(" "),e.permissionVisible?i("el-dialog",{ref:"permissionDialog",attrs:{title:"分配权限",visible:e.permissionVisible,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(t){e.permissionVisible=t}}},[i("el-form",{ref:"permissionForm",attrs:{model:e.permission,"label-width":"80px"}},[i("el-tree",{ref:"tree",attrs:{data:e.data2,"show-checkbox":"","node-key":"authId","highlight-current":"",props:e.defaultProps,"default-checked-keys":e.roleTree}})],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.permissionVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.permissionLoading},nativeOn:{click:function(t){return e.permissionSubmit(t)}}},[e._v("提交")])],1)],1):e._e(),e._v(" "),e.modelVisible?i("el-dialog",{staticStyle:{"min-width":"1200px"},attrs:{title:"目录控制",visible:e.modelVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.modelVisible=t}}},[i("el-form",{ref:"directoryForm",attrs:{model:e.directory,"label-width":"100px"}},[i("el-tree",{ref:"tree1",attrs:{data:e.data3,"node-key":"id","highlight-current":"",props:e.defaultProps1,"default-checked-keys":e.modelTree,"default-expand-all":!0,"expand-on-click-node":!1,"render-content":e.nodeRender}})],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.modelVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.modelLoading},nativeOn:{click:function(t){return e.modelAuthSubmit(t)}}},[e._v("提交")])],1)],1):e._e()],1)},a=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return a})},1123:function(e,t,i){"use strict";var o=i(1085);i.n(o).a}}]);
//# sourceMappingURL=../../map/4.js.map