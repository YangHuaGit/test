(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1069:function(e,t,i){"use strict";i.r(t);var a=i(1108),r=i(1099);for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);i(1131);var o=i(2),l=Object(o.a)(r.default,a.a,a.b,!1,null,"396eb5ec",null);t.default=l.exports},1097:function(e,t,i){},1098:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(i(77)),r=o(i(29)),s=o(i(598));o(i(68)),i(78);function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){var e=this,t=function(e,t,i){var a=new RegExp("^[ a-zA-Z0-9_一-龥]+$");console.log(t),t?a.test(t)?t.length>20?i(new Error("真实姓名不得超过20个字符")):t.trim()?i():i(new Error("不能全为空格")):i(new Error("只允许输入中文、英文、数字、下划线及空格")):i(new Error("请输入真实姓名"))};return{oldEmail:"",props:{value:"id",label:"name",children:"children"},options:[],columns:[{label:"部门名称",prop:"name",minWidth:"300px"}],departs:[],data4:[],data2:[],defaultProps:{children:"children",label:"authName"},userAuths:[],permission:{},ids:{authIds:[],uid:"",uids:[],roleId:"",directoryIds:[]},permissionVisible:!1,permissionLoading:!1,search:{label:"realName",value:"realName"},pager:{total:1,pageSize:10,pageIndex:1,currentPage:""},filters:{name:""},filters1:{departId:""},state1:"",userSearch:[],abc:{a:!0,b:!0},users:[],listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editForm:{fullName:"",email:"",website:"",location:"",passwd:"",maxRepoCreation:"",isActive:"",isAdmin:"",prohibitLogin:"",allowGitHook:""},addFormVisible:!1,addLoading:!1,addForm:{name:"",email:"",passwd:"",checkPass:"",departId:""},roleVisble:!1,roleLoading:!1,roles:[],roles1:[],userRole:{assigned:[],uid:"",uids:[]},addFormRules:{name:[{required:!0,validator:function(t,i,a){var r=new RegExp("^[ a-zA-Z0-9_-]+$");if(console.log(i),i)if(r.test(i))if(i.length>20)a(new Error("用户名不得超过20个字符"));else if(i.trim()){var s={name:""};s.name=i,e.$http({url:"/api/user/nameExist",method:"post",data:s}).then(function(t){e.editLoading=!1,t.data.flag?a(new Error("用户名重复")):a()})}else a(new Error("不能全为空格"));else a(new Error("只允许输入英文、数字、下划线及空格"));else a(new Error("请输入用户名"))},trigger:"blur"}],email:[{required:!0,validator:function(t,i,a){var r=new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$");if(console.log(i),i)if(r.test(i)){var s={email:""};s.email=i,e.$http({url:"/api/user/emailExist",method:"post",data:s}).then(function(t){e.editLoading=!1,t.data.flag?a(new Error("邮箱地址重复")):a()})}else a(new Error("请输入正确的邮箱地址"));else a(new Error("请输入邮箱地址"))},trigger:"blur"}],fullName:[{required:!0,validator:t,trigger:"blur"}],passwd:[{required:!0,validator:function(t,i,a){i||e.addForm.checkPass?i.length<6?a(new Error("密码长度不得小于6位")):(""!==e.addForm.checkPass&&e.$refs.addForm.validateField("checkPass"),a()):a()},trigger:"blur"}],checkPass:[{required:!0,validator:function(t,i,a){console.log(e.addForm.passwd),e.addForm.passwd?i?i!=e.addForm.passwd?a(new Error("两次输入密码不一致")):a():a(new Error("请再次输入密码")):a()},trigger:"blur"}],departId:[{required:!0,message:"部门不能为空"}]},editFormRules:{email:[{required:!0,validator:function(t,i,a){var r=new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$");if(console.log(i),i)if(r.test(i))if(i==e.oldEmail)a();else{var s={email:""};s.email=i,e.$http({url:"/api/user/emailExist",method:"post",data:s}).then(function(t){e.editLoading=!1,t.data.flag?a(new Error("邮箱地址重复")):a()})}else a(new Error("请输入正确的邮箱地址"));else a(new Error("请输入邮箱地址"))},trigger:"blur"}],fullName:[{required:!0,validator:t,trigger:"blur"}],passwd:[{validator:function(e,t,i){t&&t.length<6?i(new Error("密码长度不得小于6位")):i()},trigger:"blur"}],departId:[{required:!0,message:"部门不能为空"}]},directory:{},data3:[],modelVisible:!1,modelLoading:!1,model:!1,defaultProps1:{label:"name",children:"children"}}},methods:{transferRender:function(e,t){return e("span",{class:"spanEllipsis",attrs:{title:t.label}},[t.label])},nodeRender1:function(e,t){var i=t.node,a=t.data;t.store;return 0==!a.parentId?e("span",{attrs:{title:i.label},class:"spanEllipsis"},[i.label]):e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",[e("i",{class:"iconfont icon-wenjianjia"}),e("span",{attrs:{title:i.label}},[i.label])])])},nodeRender2:function(e,t){var i=this,a=t.node,r=t.data,o=(t.store,18*(a.level<=10?a.level:10));return 0==!r.parentId?e("span",{style:"width:100%;font-size: 14px; "},[e("span",{style:{maxWidth:200-o+"px",minWidth:"100px"},class:"spanEllipsis",attrs:{title:a.label}},[e("svg",{class:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-wenjianjiayigongxiang"}})]),a.label]),e("span",{style:"margin-right:10px;min-width:250px;position:absolute;right:5%"},[e("el-radio-group",(0,s.default)([{attrs:{value:r.mode},on:{input:function(e){r.mode=e}}},{directives:[{name:"model",value:r.mode}]}]),[e("el-radio",{attrs:{label:1}},["可读"]),e("el-radio",{attrs:{label:2}},["读/写"]),e("el-radio",{attrs:{label:3}},["管理"])]),e("el-button",{attrs:{size:"small",type:"text",icon:"el-icon-close"},on:{click:function(){return i.modeClear(r)}},style:"margin-left:5px;"})])]):e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",[e("svg",{class:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-wenjianjiayigongxiang"}})]),e("span",[a.label])])])},modeClear:function(e){e.mode=0},handleChange:function(e){console.log(e),console.log(this.$refs.editDialog)},getCheckedNodes:function(){return this.$refs.tree.getCheckedNodes()},setCheckedNodes:function(e){this.$refs.tree.setCheckedNodes(e)},getRoles:function(){var e=this;e.$http.post("/api/role/list").then(function(t){var i=t.data.role;e.roles1=t.data.role;for(var a=0;a<i.length;a++)e.roles.push({key:i[a].id,label:i[a].name})}).catch(function(e){console.log(e)})},reset:function(){this.filters={},this.getUsers()},handleCurrentChange:function(e){console.log(e),this.pager.pageIndex=e,this.getUsers()},handleSizeChange:function(e){console.log(e),this.pager.pageSize=e,this.getUsers()},searchSelect:function(){this.getUsers()},querySearch:function(e,t){var i=this.userSearch,a=e?i.filter(this.createFilter(e)):i;console.log(a),t(a)},createFilter:function(e){return function(t){return 0===t.realName.indexOf(e.toLowerCase())}},query:function(){var e=this,t=(0,r.default)({},e.filters,e.pager);console.log(this.filters),e.$http({method:"post",url:"/api/user/query",data:t}).then(function(t){e.users=t.data.users,e.pager.total=t.data.total}).catch(function(e){console.log(e)})},getUsers:function(e){var t=this;t.filters1.departId=e?e.id:1;var i=(0,r.default)({},t.filters1,t.pager);t.$http({method:"post",url:"/api/user/list",data:i}).then(function(e){t.users=e.data.users,t.pager.total=e.data.total}).catch(function(e){console.log(e)})},getGroups:function(){var e=this;e.$http.post("/api/auth/list").then(function(t){e.data2=t.data.group}).catch(function(e){console.log(e)})},handleDel:function(e,t){var i=this;1==t.id?this.$message({message:"管理员用户不允许删除",type:"error"}):this.$confirm("确认删除该用户吗?","提示",{type:"warning",closeOnClickModal:!1}).then(function(){i.listLoading=!0;var e={id:t.id};i.$http({url:"/api/user/deleteGUser",method:"post",data:e}).then(function(e){i.listLoading=!1,e.data.flag?i.$message({message:"删除成功",type:"success"}):i.$message({message:"删除失败",type:"error"}),i.getUsers()})}).catch(function(){})},handleRole:function(e,t){this.userRole.assigned=t.roles,this.userRole.uid=t.id,this.roleVisble=!0,this.$refs.userTable.clearSelection()},handleRoleBatch:function(){this.userRole={assigned:[],uid:""},this.roleVisble=!0},handleAuth:function(e,t){this.ids.uid=t.id,this.permissionVisible=!0;var i=[];t.userAuths.forEach(function(e){return i.push(e.auth_id)}),console.log(i),this.authTree=i,this.$refs.userTable.clearSelection()},handleAuthBatch:function(){this.permissionVisible=!0,this.authTree=[]},modelAuth:function(e,t){this.ids.uid=t.id,this.modelVisible=!0;var i=[];t.directoryAuths.forEach(function(e){return i.push(e.directoryId)}),this.modelTree=i,this.setMode(this.data3,t.directoryAuths),console.log(this.data3),this.$refs.userTable.clearSelection()},setMode:function(e,t){var i=!0,r=!1,s=void 0;try{for(var o,l=(0,a.default)(e);!(i=(o=l.next()).done);i=!0){var n=o.value,d=!1,c=!0,u=!1,p=void 0;try{for(var m,h=(0,a.default)(t);!(c=(m=h.next()).done);c=!0){var f=m.value;n.id==f.directory_id&&(d=!0,f.mode>0?n.mode=f.mode:n.mode=0)}}catch(e){u=!0,p=e}finally{try{!c&&h.return&&h.return()}finally{if(u)throw p}}d||(n.mode=0),n.children&&this.setMode(n.children,t)}}catch(e){r=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(r)throw s}}},modelAuthBatch:function(){this.modelVisible=!0,this.modelTree=[],this.setMode(this.data3,[])},handleAdd:function(){this.addFormVisible=!0,this.addForm={}},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,r.default)({},t),this.oldEmail=t.email},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){if(t){e.editLoading=!0;var i=(0,r.default)({},e.editForm);i.departId=i.departId[i.departId.length-1],e.$http({url:"/api/user/updateGUser",method:"post",data:i}).then(function(t){e.editLoading=!1,t.data.flag?e.$message({message:"编辑成功",type:"success"}):e.$message({message:"编辑失败",type:"error"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})}})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){if(t){e.addLoading=!0,console.log(e.addForm);var i=(0,r.default)({},e.addForm);i.departId=i.departId[i.departId.length-1],console.log(i),e.$http({method:"post",url:"api/user/addGuser",data:i}).then(function(t){e.addLoading=!1,t.data.flag?e.$message({message:t.data.msg,type:"success"}):e.$message({message:t.data.msg,type:"error"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})}})},roleSubmit:function(){var e=this;if(this.roleLoading=!0,this.sels.length>0){var t=[];this.sels.forEach(function(e){return t.push(e.id)}),this.userRole.uids=t}var i=(0,r.default)({},this.userRole);this.$http({method:"post",url:"api/user/assignRole",data:i}).then(function(t){e.roleLoading=!1,t.data.flag?e.$message({message:t.data.msg,type:"success"}):e.$message({message:t.data.msg,type:"error"}),e.roleVisble=!1,e.getUsers()})},permissionSubmit:function(){var e=this;this.$refs.permission.validate(function(t){if(t){if(e.permissionLoading=!0,e.sels.length>0){var i=[];e.sels.forEach(function(e){return i.push(e.id)}),e.ids.uids=i}var a=[];e.getCheckedNodes().forEach(function(e){return a.push(e.authId)}),e.ids.authIds=a;var s=(0,r.default)({},e.ids);e.$http({url:"/api/user/assign",method:"post",data:s}).then(function(t){e.permissionLoading=!1,t.data.flag?e.$message({message:"编辑成功",type:"success"}):e.$message({message:"编辑失败",type:"error"}),e.$refs.permission.resetFields(),e.permissionVisible=!1,e.getGroups(),e.getUsers()})}})},modelAuthSubmit:function(){var e=this;this.$refs.directoryForm.validate(function(t){if(t){if(e.modelVisible=!0,e.sels.length>0){var i=[];e.sels.forEach(function(e){return i.push(e.id)}),e.ids.uids=i}var s=[];e.$refs.tree1.getCheckedNodes().forEach(function(e){return s.push(e.id)}),e.ids.directoryIds=s;var o=(0,r.default)({},e.ids),l=!0,n=!1,d=void 0;try{for(var c,u=(0,a.default)(e.data3);!(l=(c=u.next()).done);l=!0){var p=c.value;if(!p.children)break;console.log(p)}}catch(e){n=!0,d=e}finally{try{!l&&u.return&&u.return()}finally{if(n)throw d}}o.directoryAuth=e.data3,e.$http({url:"/api/user/modelAuth",method:"post",data:o}).then(function(t){e.modelLoading=!1,t.data.flag?e.$message({message:"编辑成功",type:"success"}):e.$message({message:"编辑失败",type:"error"}),e.$refs.directoryForm.resetFields(),e.modelVisible=!1,e.getUsers()})}})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id});this.$confirm("确认删除选中记录吗？","提示",{type:"warning",closeOnClickModal:!1}).then(function(){e.listLoading=!0;var i={ids:t};e.$http({url:"/api/user/deleteGUsers",method:"post",data:i}).then(function(t){e.listLoading=!1,t.data.flag?e.$message({message:"删除成功",type:"success"}):e.$message({message:"删除失败",type:"error"}),e.getUsers()})}).catch(function(){})},getDeparts:function(){var e=this;e.$http.post("api/depart/list").then(function(t){e.departs=t.data.depart,e.options=t.data.depart,e.data4=t.data.depart}).catch(function(e){console.log(e)})},getDirectoryTree:function(){var e=this;e.$http.post("api/directory/getDirectoryTree").then(function(t){e.data3=t.data.directoryTree}).catch(function(e){console.log(e)})}},mounted:function(){this.getUsers(),this.getRoles(),this.getGroups(),this.getDeparts(),this.getDirectoryTree()}}},1099:function(e,t,i){"use strict";i.r(t);var a=i(1098),r=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t.default=r.a},1108:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"user-view"},[i("div",{staticStyle:{height:"50px","margin-top":"10px","min-width":"500px"}},[i("el-form",{attrs:{inline:!0,model:e.filters},nativeOn:{submit:function(e){e.preventDefault()}}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"用户名/真实姓名/邮箱"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.query(t):null}},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.query}},[e._v("查询\n          "),i("i",{staticClass:"el-icon-search el-icon--right"})])],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.reset}},[e._v("重置\n          "),i("i",{staticClass:"el-icon-refresh el-icon--right"})])],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleAdd}},[e._v("新增\n          "),i("i",{staticClass:"el-icon-plus el-icon--right"})])],1)],1)],1),e._v(" "),i("hr"),e._v(" "),i("div",{staticStyle:{display:"flex",height:"inherit",flex:"1"}},[i("el-tree",{ref:"tree2",staticStyle:{"min-width":"200px",height:"100%","overflow-y":"auto"},attrs:{data:e.data4,props:e.defaultProps1,"default-expand-all":!0,"render-content":e.nodeRender1,"expand-on-click-node":!1},on:{"node-click":e.getUsers}}),e._v(" "),i("div",{staticStyle:{width:"100%","overflow-x":"auto"}},[i("el-table",{ref:"userTable",staticStyle:{height:"inherit"},attrs:{data:e.users,"highlight-current-row":"",center:"",height:"100%"},on:{"selection-change":e.selsChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"用户名","min-width":"120",sortable:"","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{prop:"departName",label:"部门","min-width":"120",sortable:"","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"120",sortable:"","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{prop:"prohibitLogin",label:"允许登录","min-width":"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(e){return[e.row.prohibitLogin?i("i",{staticClass:"el-icon-close"}):i("i",{staticClass:"el-icon-check"})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-dropdown",[i("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n                选项\n                "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.handleEdit(t.$index,t.row)}}},[i("span",[e._v("\n                      编辑\n                    ")])])]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.handleDel(t.$index,t.row)}}},[i("span",[e._v("\n                      删除\n                    ")])])]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.handleRole(t.$index,t.row)}}},[i("span",[e._v("\n                      分配角色\n                    ")])])]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.handleAuth(t.$index,t.row)}}},[i("span",[e._v("\n                      分配权限\n                    ")])])]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"#66b1ff"},on:{click:function(i){e.modelAuth(t.$index,t.row)}}},[i("span",[e._v("\n                      目录控制\n                    ")])])])],1)],1)]}}])})],1)],1)],1),e._v(" "),i("div",[i("div",{staticStyle:{display:"flex",height:"40px","margin-top":"10px","margin-bottom":"10px",width:"100%","text-align":"justify","justify-content":"space-between"}},[i("div",[i("el-dropdown",[i("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n            批量操作\n            "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{staticStyle:{width:"inherit"},attrs:{disabled:0===this.sels.length}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"red"},on:{click:e.batchRemove}},[i("el-button",{staticStyle:{width:"inherit"},attrs:{type:"text",size:"small",disabled:0===this.sels.length}},[e._v("删除")])],1)]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"},attrs:{disabled:0===this.sels.length}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"red"},on:{click:e.handleRoleBatch}},[i("el-button",{staticStyle:{width:"inherit"},attrs:{type:"text",size:"small",disabled:0===this.sels.length}},[e._v("分配角色")])],1)]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"},attrs:{disabled:0===this.sels.length}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"red"},on:{click:e.handleAuthBatch}},[i("el-button",{staticStyle:{width:"inherit"},attrs:{type:"text",size:"small",disabled:0===this.sels.length}},[e._v("分配权限")])],1)]),e._v(" "),i("el-dropdown-item",{staticStyle:{width:"inherit"},attrs:{disabled:0===this.sels.length}},[i("div",{staticStyle:{"font-size":"12px","text-align":"center",color:"red"},attrs:{size:"small"},on:{click:e.modelAuthBatch}},[i("el-button",{staticStyle:{width:"inherit"},attrs:{type:"text",disabled:0===this.sels.length}},[e._v("目录控制")])],1)])],1)],1)],1),e._v(" "),i("div",[i("el-pagination",{attrs:{"current-page":e.pager.pageIndex,"page-sizes":[10,30,50,100],"page-size":e.pager.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pager.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),e._v(" "),e.editFormVisible?i("el-dialog",{ref:"editDialog",attrs:{title:"编辑用户信息",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px",rules:e.editFormRules}},[i("el-form-item",{attrs:{label:"用户名",prop:"name"}},[e._v("\n        "+e._s(e.editForm.name)+"\n      ")]),e._v(" "),i("el-form-item",{attrs:{label:"部门",prop:"departId"}},[i("el-cascader",{attrs:{options:e.options,props:e.props,"change-on-select":"","show-all-levels":!1,"expand-trigger":"hover"},on:{change:e.handleChange},model:{value:e.editForm.departId,callback:function(t){e.$set(e.editForm,"departId",t)},expression:"editForm.departId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"真实姓名",prop:"fullName"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.fullName,callback:function(t){e.$set(e.editForm,"fullName",t)},expression:"editForm.fullName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"passwd"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"将值留空使其保持不变"},model:{value:e.editForm.passwd,callback:function(t){e.$set(e.editForm,"passwd",t)},expression:"editForm.passwd"}})],1),e._v(" "),i("el-form-item",{staticStyle:{"margin-left":"20px"},attrs:{"label-width":"20px",prop:"prohibitLogin"}},[i("el-checkbox",{model:{value:e.editForm.prohibitLogin,callback:function(t){e.$set(e.editForm,"prohibitLogin",t)},expression:"editForm.prohibitLogin"}},[e._v("该账户被禁止登录")])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1):e._e(),e._v(" "),e.addFormVisible?i("el-dialog",{attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[i("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[i("el-form-item",{attrs:{label:"用户名",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"真实姓名",prop:"fullName"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.fullName,callback:function(t){e.$set(e.addForm,"fullName",t)},expression:"addForm.fullName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"passwd"}},[i("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"为空则使用默认密码"},model:{value:e.addForm.passwd,callback:function(t){e.$set(e.addForm,"passwd",t)},expression:"addForm.passwd"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[i("el-input",{attrs:{type:"password",disabled:!this.addForm.passwd,"auto-complete":"off"},model:{value:e.addForm.checkPass,callback:function(t){e.$set(e.addForm,"checkPass",t)},expression:"addForm.checkPass"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"部门",prop:"departId"}},[i("el-cascader",{attrs:{options:e.options,props:e.props,"change-on-select":"","show-all-levels":!1,"expand-trigger":"hover"},on:{change:e.handleChange},model:{value:e.addForm.departId,callback:function(t){e.$set(e.addForm,"departId",t)},expression:"addForm.departId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.roleId,callback:function(t){e.$set(e.addForm,"roleId",t)},expression:"addForm.roleId"}},e._l(e.roles1,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1):e._e(),e._v(" "),i("el-dialog",{attrs:{title:"分配角色",visible:e.roleVisble,"close-on-click-modal":!1,width:"60%"},on:{"update:visible":function(t){e.roleVisble=t}}},[i("el-transfer",{attrs:{data:e.roles,"render-content":e.transferRender,"button-texts":["移除","分配"],titles:["未分配","已分配"]},model:{value:e.userRole.assigned,callback:function(t){e.$set(e.userRole,"assigned",t)},expression:"userRole.assigned"}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.roleVisble=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.roleLoading},nativeOn:{click:function(t){return e.roleSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),e.permissionVisible?i("el-dialog",{attrs:{title:"分配权限",visible:e.permissionVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.permissionVisible=t}}},[i("div",[i("el-form",{ref:"permission",attrs:{model:e.permission,"label-width":"100px"}},[i("el-tree",{ref:"tree",attrs:{data:e.data2,"show-checkbox":"","node-key":"authId","highlight-current":"",props:e.defaultProps,"default-checked-keys":e.authTree}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.permissionVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.permissionLoading},nativeOn:{click:function(t){return e.permissionSubmit(t)}}},[e._v("提交")])],1)]):e._e(),e._v(" "),e.modelVisible?i("el-dialog",{staticStyle:{"min-width":"1200px"},attrs:{title:"目录控制",center:"",visible:e.modelVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.modelVisible=t}}},[i("el-form",{ref:"directoryForm",attrs:{model:e.directory,"label-width":"100px"}},[i("el-tree",{ref:"tree1",attrs:{data:e.data3,"node-key":"id","highlight-current":"",props:e.defaultProps1,"default-checked-keys":e.modelTree,"default-expand-all":!0,"expand-on-click-node":!1,"render-content":e.nodeRender2}})],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.modelVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.modelLoading},nativeOn:{click:function(t){return e.modelAuthSubmit(t)}}},[e._v("提交")])],1)],1):e._e()],1)},r=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r})},1131:function(e,t,i){"use strict";var a=i(1097);i.n(a).a}}]);
//# sourceMappingURL=../../map/8.js.map