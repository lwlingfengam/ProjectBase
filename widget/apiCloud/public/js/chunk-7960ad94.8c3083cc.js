(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7960ad94"],{"889b":function(a,t,e){"use strict";e.r(t);var i={name:"AppVersionCheck",data:function(){return{loading:!1,appName:"",appVersion:"",isLatestVersion:!0}},created:function(){this.$acApi&&(this.appName=this.$acApi.appName,this.appVersion=this.$acApi.appVersion)},methods:{checkUpdate:function(){if(this.$acApi){this.loading=!0;var a=this,t=this.$acApi.require("mam");t.checkUpdate(function(t,e){if(t){a.loading=!1;var i=t.result;if(!0===i.update&&!1===i.closed){var n="新版本型号:"+i.version+";更新提示语:"+i.updateTip+";下载地址:"+i.source+";发布时间:"+i.time;a.$acApi.confirm({title:"有新的版本,是否下载并安装 ",msg:n,buttons:["确定","取消"]},function(t,e){1===t.buttonIndex&&("android"===a.$acApi.systemType&&a.$acApi.download({url:i.source,report:!0},function(t,e){if(t&&0===t.state&&a.$acApi.toast({msg:"正在下载应用"+t.percent+"%",duration:2e3}),t&&1===t.state){var i=t.savePath;a.$acApi.installApp({appUri:i})}}),"ios"===a.$acApi.systemType&&a.$acApi.installApp({appUri:i.source}))})}else a.$acApi.alert({msg:"已是最新版本，暂无更新"})}else a.loading=!1,a.$acApi.alert({msg:"检测失败，请检查您的网络！"})})}}}},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-content appInfo"},[e("van-cell-group",{attrs:{title:"基本信息"}},[e("van-cell",{attrs:{title:"应用名称",value:a.appName}}),a._v(" "),e("van-cell",{attrs:{title:"应用版本",value:a.appVersion}})],1),a._v(" "),e("div",{staticClass:"account-operate"},[e("van-button",{attrs:{type:"default",loading:a.loading},on:{click:a.checkUpdate}},[a._v("检测最新版本")])],1)],1)},p=[],c=e("2455");function s(a){e("a05e")}var o=!1,r=s,l="data-v-e9cbacfc",u=null,d=Object(c["a"])(i,n,p,o,r,l,u);t["default"]=d.exports},a05e:function(a,t,e){var i=e("e230");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("499e").default;n("17b7d682",i,!0,{})},e230:function(a,t,e){t=a.exports=e("2350")(!1),t.push([a.i,"\n.appInfo .account-operate[data-v-e9cbacfc] {\n  text-align: center;\n}\n",""])}}]);