(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd9cd69c"],{"2e07":function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,"",""])},aa26:function(e,a,t){"use strict";t.r(a);var r=t("603b"),n={name:"QualityMonitor",components:{PageHeader:r["a"]},data:function(){return{frameName:"waterqua_group"}},mounted:function(){this.$acApi&&this.openPlayerFrame()},methods:{openPlayerFrame:function(){this.$acApi.closeFrame({name:this.frameName});var e={x:0,y:44,w:"auto",h:"auto"};console.log("frameName",this.frameName),this.$acApi.openFrame({name:this.frameName,url:"./html/waterqua_group.html",rect:e})},handleHeaderLeft:function(){this.$acApi.closeFrameGroup({name:"reportFrameGroup"}),this.$acApi.closeFrame({name:this.frameName}),this.$router.back()},handleHeaderRight:function(){}}},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-content"},[t("page-header",{on:{handleHeaderLeft:e.handleHeaderLeft,handleHeaderRight:e.handleHeaderRight}})],1)},i=[],c=t("2455");function s(e){t("ad3b")}var u=!1,m=s,h="data-v-373b0ba4",l=null,d=Object(c["a"])(n,o,i,u,m,h,l);a["default"]=d.exports},ad3b:function(e,a,t){var r=t("2e07");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("499e").default;n("01093580",r,!0,{})}}]);