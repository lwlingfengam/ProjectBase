(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8c0353a"],{"1a3a":function(t,a,e){var n=e("3590");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("4a30e438",n,!0,{})},3590:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,"",""])},"6aae":function(t,a,e){var n=e("90d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("499e").default;o("b89b70c8",n,!0,{})},"90d0":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,"\n.account-header[data-v-2a68df0e] {\n  width: 100%;\n  height: 4.4rem;\n  text-align: center;\n}\n.account-header .account-header-avatar[data-v-2a68df0e] {\n  display: inline-block;\n  width: 2.8rem;\n  height: 2.8rem;\n  margin-top: 0.2rem;\n  border-radius: 50%;\n}\n.account-header .account-header-name[data-v-2a68df0e] {\n  display: block;\n  color: #131313;\n  font-size: 0.52rem;\n}\n.account-logout[data-v-2a68df0e] {\n  text-align: center;\n  margin-bottom: 0.3rem;\n}\n.account-logout .van-button[data-v-2a68df0e] {\n  width: 4rem;\n}\n.account-logout .van-button--normal[data-v-2a68df0e] {\n  font-size: 0.34rem;\n  font-weight: 600;\n}\n",""])},afff:function(t,a,e){"use strict";e.r(a);var n=e("37a2"),o=e("cae7"),r={name:"AccountInfo",components:{AccountHeader:o["a"]},data:function(){return{userInfo:null}},created:function(){this.init()},methods:{init:function(){var t=this;this.$toast.loading({mask:!0,message:"加载中..."}),Object(n["b"])().then(function(a){t.$toast.clear(),t.userInfo=a}).catch(function(){}).finally(function(){})}}},c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-content"},[e("account-header"),t._v(" "),e("van-cell-group",{attrs:{title:"基本信息"}},[e("van-cell",{attrs:{title:"用户名称",value:t.userInfo&&t.userInfo.Name}}),t._v(" "),e("van-cell",{attrs:{title:"联系电话",value:t.userInfo&&t.userInfo.Mobile}}),t._v(" "),e("van-cell",{attrs:{title:"邮箱",value:t.userInfo&&t.userInfo.Email}})],1)],1)},s=[],u=e("2455");function i(t){e("1a3a")}var l=!1,f=i,d="data-v-354498dc",v=null,h=Object(u["a"])(r,c,s,l,f,d,v);a["default"]=h.exports},cae7:function(t,a,e){"use strict";var n=e("47df"),o=e("ca00"),r={name:"AccountHeader",props:{},data:function(){return{userAvatar:"",userName:""}},computed:{userInfo:function(){return Object(n["a"])()}},created:function(){Object(o["e"])(this.userInfo)&&Object(o["e"])(this.userInfo.Avatar)?this.userAvatar=this.userInfo.Avatar:this.userAvatar="./img/temp/2.png",Object(o["e"])(this.userInfo)&&Object(o["e"])(this.userInfo.UserName)?this.userName=this.userInfo.UserName:this.userName="测试账户"},methods:{Logout:function(){Object(n["g"])()}}},c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"account-header"},[e("img",{staticClass:"account-header-avatar",attrs:{src:t.userAvatar}}),t._v(" "),e("span",{staticClass:"account-header-name"},[t._v(t._s(t.userInfo.UserName))])]),t._v(" "),e("div",{staticClass:"account-logout"},[e("van-button",{attrs:{type:"info",plain:""},on:{click:t.Logout}},[t._v("退出登录")])],1)])},s=[],u=e("2455");function i(t){e("6aae")}var l=!1,f=i,d="data-v-2a68df0e",v=null,h=Object(u["a"])(r,c,s,l,f,d,v);a["a"]=h.exports}}]);