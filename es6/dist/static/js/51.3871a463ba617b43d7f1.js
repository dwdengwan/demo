webpackJsonp([51],{H1Y5:function(t,e,i){"use strict";function o(t){i("iom1")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("+q0O"),n=i("rYnR"),s=i("Gs2z"),l=i("mtWM"),c=i.n(l),r=i("Fd2+"),h={components:{myHeader:n.default,headerThree:s.a,compApply:a.default},data:function(){return{isShowBtn:!0,icon:"arrow-down",isPeopleShow:0,isQuery:!1,message:{title:"居民用水申请",span1:"本业务适用于“居民用水报装”业务,",span2:"请您仔细阅读报装说明后填写相关信息",isShow:""},applyType:"1",isShowInfo:!1,isLoading:!1,scrollTop:0,invoiceTypeList:[],invoiceTypeNameList:[],invoiceTypeShow:!1,PhotoShow1:!0,PhotoShow2:!0,PhotoShow3:!0,bankPhotoShow:!1,title:"居民用水申请",contentShowA:!0,contentShowB:!1,contentShowC:!1,contentShowD:!1,btnShow:!0,bankShow:!1,invoiceShow:!1,bank:{openBank:"",accountName:"",bankNo:""},invoice:{invoiceType:"",invoiceTypeName:"",unitName:"",identifiNum:"",mobile:"",invOpenBank:"",invAccountNo:"",contactAddr:""},tableData:{groupName:"",groupCode:"",ctmName:"",predictWater:"",predictUser:"",userAddress:"",ctmIdCard:""},fileList1:[],fileList2:[],fileList3:[],fileList4:[],fileList:[],fileUrlList:[],fileUrlOBJList:[],initFileList:[],isReadyonly:!1,ftoken:"",editShow:!0,relationShow:!1,showAddress:!1,areaNum:"01013",areaList:{},emailURL:""}},mounted:function(){console.log(this.$route.query.busiType),"1"==this.$route.query.isDraft||void 0==this.$route.query.busiType?this.isShowBtn=!0:this.isShowBtn=!1,document.body.addEventListener("focusout",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),this.emailURL=URLurl,0==this.$route.query.isModify?(this.isReadyonly=!0,this.icon="",this.iconType="",this.init(),this.title="居民用水申请",this.contentShowA=!0,this.contentShowB=!0,this.contentShowC=!0,this.contentShowD=!0,this.btnShow=!1,this.isQuery=!0):1==this.$route.query.isModify?(this.isReadyonly=!0,this.icon="",this.iconType="",this.init(),this.title="居民用水申请",this.contentShowA=!0,this.contentShowB=!0,this.contentShowC=!0,this.contentShowD=!0,this.btnShow=!1,this.editShow=!1,this.isQuery=!0):2==this.$route.query.isModify&&(this.isReadyonly=!1,this.getArrList2(),this.isQuery=!1)},watch:{fileUrlList:{handler:function(t,e){},deep:!0}},methods:{blur:function(t,e){var i="";if(""===t){switch(e){case"ctmName":i="业主名称不能为空";break;case"ctmIdCard":i="业主身份证不能为空";break;case"userAddress":i="用水地址不能为空";break;case"operatorPhone":i="联系人电话不能为空";break;case"predictWater":i="预估用水量不能为空";break;case"predictUser":i="预估用水量人数不能为空";break;case"openBank":i="开户银行不能为空";break;case"accountName":i="开户名称不能为空";break;case"bankNo":i="银行账户不能为空";break;case"unitName":i="单位名称不能为空";break;case"identifiNum":i="纳税人识别号不能为空";break;case"mobile":i="联系电话不能为空";break;case"invOpenBank":i="开户银行不能为空";break;case"invAccountNo":i="银行账户不能为空";break;case"contactAddr":i="联系地址不能为空"}Object(r.d)(i)}else"ctmIdCard"!=e||/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(t)?"operatorPhone"!=e||/^1[3456789]\d{9}$/.test(this.tableData.operatorPhone)?"mobile"!=e||/^1[3456789]\d{9}$/.test(this.invoice.mobile)?"predictUser"==e?0==t&&(i="预估用水量人数不能为0!",Object(r.d)(i),this.tableData.predictUser=""):"predictWater"==e&&0==t&&(i="预估用水量不能为0!",Object(r.d)(i),this.tableData.predictWater=""):(i="联系电话有误!",Object(r.d)(i)):(i="联系人电话有误!",Object(r.d)(i)):(i="业主身份证号有误!",Object(r.d)(i))},applyTypeChange:function(t){this.isPeopleShow=t,this.$emit("isPeopleShow",this.isPeopleShow)},takeInfo:function(){this.isShowInfo?this.isShowInfo=!1:this.isShowInfo=!0},scroll:function(t){parseInt(t.target.clientHeight)+Math.ceil(t.target.scrollTop)===parseInt(t.target.scrollHeight)||0==t.target.scrollTop&&t.stopPropagation(),this.$set(this,"scrollTop",t.target.scrollTop)},touchmove:function(t){0!==this.scrollTop&&t.stopPropagation()},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1,t.emailURL=URLurl,0==t.$route.query.isModify?(t.isReadyonly=!0,t.icon="",t.iconType="",t.init(),t.title="居民用水申请",t.contentShowA=!0,t.contentShowB=!0,t.contentShowC=!0,t.contentShowD=!0,t.btnShow=!1):1==t.$route.query.isModify?(t.isReadyonly=!1,t.init()):2==t.$route.query.isModify&&(t.isReadyonly=!1,t.getArrList2())},500)},getInvoiceType:function(){var t=this,e={data:["invoice"]};t.$api.fetch({params:e,apiUrl:"/common/dictDownList"}).then(function(e){t.invoiceTypeList=e.invoice;for(var i=0;i<e.invoice.length;i++)t.invoiceTypeNameList.push(e.invoice[i].name);if(2!=t.$route.query.isModify)for(var o=0;o<t.invoiceTypeList.length;o++)t.invoice.invoiceType==t.invoiceTypeList[o].value&&(t.invoice.invoiceTypeName=t.invoiceTypeList[o].name)})},selectRelation:function(){this.invoiceTypeShow=!0},onCancelRelation:function(){this.invoiceTypeShow=!1},onConfirmRelation:function(t,e){this.invoice.invoiceTypeName=t;for(var i=0;i<this.invoiceTypeList.length;i++)t==this.invoiceTypeList[i].name&&(this.invoice.invoiceType=this.invoiceTypeList[i].value);this.invoiceTypeShow=!1},init:function(){var t=this,e={data:{groupCode:this.$route.query.groupCode,busiId:this.$route.query.busiId,busiType:this.$route.query.busiType,source:this.$route.query.source}};this.$api.fetch({params:e,apiUrl:"/myWater/busiQuery"}).then(function(e){t.tableData=e.data,t.tableData.groupCode=e.groupCode,t.tableData.groupName=e.groupName,"bank"in e.data&&null!==e.data.bank?(t.bank=e.data.bank,t.bankShow=!0):(t.contentShowB=!1,t.bankPhotoShow=!1),"invoice"in e.data&&null!==e.data.invoice?(t.invoice=e.data.invoice,t.invoiceShow=!0):t.contentShowC=!1,t.getArrList2(),t.tableData.accessory.length>=1?(t.PhotoShow1=!0,t.fileList1.push({url:t.tableData.accessory[0].url})):t.PhotoShow1=!1,t.tableData.accessory.length>=2?(t.PhotoShow2=!0,t.fileList2.push({url:t.tableData.accessory[1].url})):t.PhotoShow2=!1,t.tableData.accessory.length>=3?(t.PhotoShow3=!0,t.fileList3.push({url:t.tableData.accessory[2].url})):t.PhotoShow3=!1,t.tableData.accessory.length>=4&&(t.bankPhotoShow=!0,t.fileList4.push({url:t.tableData.accessory[3].url})),t.initFileList=e.data.accessory,t.getInvoiceType()})},getImgBase64:function(t){"url"in this.fileList1[0]?this.fileList.push(this.fileList1[0].url):this.fileList.push(this.fileList1[0].file),"url"in this.fileList2[0]?this.fileList.push(this.fileList2[0].url):this.fileList.push(this.fileList2[0].file),"url"in this.fileList3[0]?this.fileList.push(this.fileList3[0].url):this.fileList.push(this.fileList3[0].file),this.bankPhotoShow&&("url"in this.fileList4[0]?this.fileList.push(this.fileList4[0].url):this.fileList.push(this.fileList4[0].file)),this.getFtoken(t)},modify:function(){this.isReadyonly=!1,this.title="居民用水申请",this.contentShowA=!0,this.contentShowB=!1,this.contentShowC=!1,this.contentShowD=!1,this.btnShow=!0,this.PhotoShow1=!0,this.PhotoShow2=!0,this.PhotoShow3=!0,this.editShow=!0,this.icon="arrow-down"},getFtoken:function(t){var e=this,i={data:{}};this.$api.fetch({params:i,apiUrl:"/myWater/getFtoken"}).then(function(i){if(e.ftoken=i.ftoken,2==e.$route.query.isModify)for(var o=0;o<e.fileList.length;o++)e.getImgUrl(e.fileList[o],o,t);else{for(var a=0,n=0;n<e.fileList.length;n++)"string"==typeof e.fileList[n]?(e.fileUrlList[n]=e.fileList[n],a++):e.getImgUrl(e.fileList[n],n,t);a==e.fileList.length&&e.submit(t)}})},getImgUrl:function(t,e,i){var o=this,a=new FormData;a.append("file",t),a.append("ftoken",this.ftoken);var n={url:o.emailURL,method:"post",timeout:6e4,headers:{"Content-Type":"application/json"},withCredentials:!0,data:a};c()(n).then(function(t){200===t.status&&0===t.data.code&&(o.fileUrlList[e]=t.data.data.path,o.fileUrlList.length==o.fileList.length&&o.submit(i))},function(t){}).catch(function(t){})},moduleAccess:function(t){var e={data:{groupCode:t,openId:localStorage.getItem("openId"),moduleId:"3"}};this.$api.fetch({params:e,apiUrl:"/common/moduleVisitAdd"}).then(function(t){})},submit:function(t){var e=this;if(""===this.tableData.groupCode)return void Object(r.d)("所属地区未填");if(""===this.tableData.ctmName)return void Object(r.d)("业主名称未填");for(var i=0;i<e.fileUrlList.length;i++)if(void 0===e.fileUrlList[i])return;var o={data:{isSave:t,groupCode:this.tableData.groupCode,busiType:"0",data:{ctmName:this.tableData.ctmName,ctmIdCard:this.tableData.ctmIdCard,userAddress:this.tableData.userAddress,applyReason:this.tableData.applyReason,predictWater:Number(this.tableData.predictWater),predictUser:Number(this.tableData.predictUser),operatorPhone:this.tableData.operatorPhone,accessory:[]}}};this.contentShowD&&(o.data.data.accessory=[{fileId:"",type:"房产证",url:e.fileUrlList[0]},{fileId:"",type:"居民身份证正面",url:e.fileUrlList[1]},{fileId:"",type:"居民身份证反面",url:e.fileUrlList[2]}]),this.bankShow?o.data.data.bank={openBank:this.bank.openBank,accountName:this.bank.accountName,bankNo:this.bank.bankNo}:o.data.data.bank=null,this.invoiceShow?o.data.data.invoice={invoiceType:this.invoice.invoiceType,unitName:this.invoice.unitName,identifiNum:this.invoice.identifiNum,contactAddr:this.invoice.contactAddr,mobile:this.invoice.mobile,invOpenBank:this.invoice.invOpenBank,invAccountNo:this.invoice.invAccountNo}:o.data.data.invoice=null,void 0!==e.fileUrlList[3]&&o.data.data.accessory.push({fileId:"",type:"银行卡照片",url:e.fileUrlList[3]});for(var a=0;a<o.data.data.accessory.length;a++)if(!("url"in o.data.data.accessory[a]))return;if(1==e.$route.query.isModify){o.data.source=e.$route.query.source,o.data.busiId=e.$route.query.busiId;for(var n=0;n<e.initFileList.length;n++)"fileId"in e.initFileList[n]?o.data.data.accessory[n].fileId=e.initFileList[n].fileId:o.data.data.accessory[n].fileId=""}else 2==e.$route.query.isModify&&(o.data.openId=localStorage.getItem("openId"));var s="";s=1==e.$route.query.isModify?"/myWater/busiUpdate":"/myWater/waterApply",this.$api.fetch({params:o,apiUrl:s}).then(function(t){r.d.success({message:"提交居民用水申请成功！",position:"middle",duration:3e3}),setTimeout(function(){e.moduleAccess(e.tableData.groupCode),e.tableData={},e.$route.query.isModify,e.$router.push({path:"/progressQuery"})},3e3)})},sure:function(t){void 0===t[2]||""==t[2].code?(this.tableData.groupCode=t[1].code.slice(2),this.tableData.groupName=t[0].name+t[1].name):(this.tableData.groupCode=t[2].code.slice(4),this.tableData.groupName=t[0].name+t[1].name+t[2].name),this.tableData.groupName=this.tableData.groupName.replace("*",""),this.relationShow=!1},exit:function(){this.relationShow=!1},getArrList2:function(){var t=this,e={data:{openId:localStorage.getItem("openId")}};t.$api.fetch({params:e,apiUrl:"/common/wAreaTree"}).then(function(e){t.areaList.province_list=e.provinceMap,t.areaList.city_list=e.cityMap,t.areaList.county_list=e.areaMap,t.getInvoiceType(),t.getBindData()})},getBindData:function(){var t=this,e={data:{}};t.$api.fetch({params:e,apiUrl:"/common/getUserInfo"}).then(function(e){var i=e.bwcList;if(i.length>0){t.tableData.groupCode=i[0].groupCode,t.tableData.groupName=i[0].groupName;var o=t.tableData.groupCode,a=t.areaList.county_list,n=t.areaList.city_list,s=t.areaNum;t.areaNum=t.common.companyTree(o,a,n,s)}else t.getGeolocation()})},getSpaceNum:function(t,e){var i=this,o={data:{longitude:t,latitude:e}};i.$api.fetch({params:o,apiUrl:"/common/getShortestComp"}).then(function(t){i.$set(i.tableData,"groupCode",t.groupCode),i.$set(i.tableData,"groupName",t.groupArea)})},getGeolocation:function(){var t=this,e=new AMap.Map("container",{resizeEnable:!0});AMap.plugin("AMap.Geolocation",function(){var i=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});e.addControl(i),i.getCurrentPosition(function(e,i){"complete"==e&&t.getSpaceNum(i.position.lng,i.position.lat)})})},showAddressChuang:function(){this.isReadyonly||(this.relationShow=!0)},goBackB:function(){this.title="居民用水申请",this.contentShowA=!0,this.contentShowB=!1,this.contentShowC=!1,this.contentShowD=!1,this.bankPhotoShow=!0},goBackC:function(){var t=this;this.bankShow?(this.title="银行卡资料",this.contentShowA=!1,this.contentShowB=!0,this.contentShowC=!1,this.contentShowD=!1,this.bankPhotoShow=!0):setTimeout(function(){window.scrollTo(0,0),r.b.confirm({message:"是否需要填写银行卡资料？",confirmButtonText:"前往填写",cancelButtonText:"暂不填写"}).then(function(){t.title="银行卡资料",t.contentShowA=!1,t.contentShowB=!0,t.contentShowC=!1,t.contentShowD=!1,t.bankPhotoShow=!0,t.bankShow=!0}).catch(function(){t.goBackB(),t.bankPhotoShow=!1,t.bankShow=!1})},1e3)},goBackD:function(){var t=this;this.invoiceShow?(this.title="开票资料",this.contentShowA=!1,this.contentShowB=!1,this.contentShowC=!0,this.contentShowD=!1):setTimeout(function(){r.b.confirm({message:"是否需要填写开票资料？",confirmButtonText:"前往填写",cancelButtonText:"暂不填写"}).then(function(){t.title="开票资料",t.contentShowA=!1,t.contentShowB=!1,t.contentShowC=!0,t.contentShowD=!1,t.invoiceShow=!0}).catch(function(){t.goBackC(),t.invoiceShow=!1})},1e3)},goBackE:function(){this.title="上传附件",this.contentShowA=!1,this.contentShowB=!1,this.contentShowC=!1,this.contentShowD=!0,this.btnShow=!0,0!=this.$route.query.isModify&&(this.isReadyonly=!1)},nextA:function(){var t=this;return""===this.tableData.groupName?void Object(r.d)("所属地区未填"):""===this.tableData.ctmName?void Object(r.d)("业主名称未填"):""===this.tableData.ctmIdCard?void Object(r.d)("业主身份证号码未填"):""===this.tableData.userAddress?void Object(r.d)("用水地址未填"):""===this.tableData.operatorPhone?void Object(r.d)("联系人电话未填"):""===this.tableData.predictWater?void Object(r.d)("预估月用水量未填"):""===this.tableData.predictUser?void Object(r.d)("预估月用水人数未填"):/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(this.tableData.ctmIdCard)?/^1[3456789]\d{9}$/.test(this.tableData.operatorPhone)?void(this.bankShow?(this.title="银行卡资料",this.contentShowA=!1,this.contentShowB=!0,this.bankPhotoShow=!0,this.contentShowC=!1,this.contentShowD=!1):(window.scrollTo(0,0),setTimeout(function(){r.b.confirm({message:"是否需要填写银行卡资料？",confirmButtonText:"前往填写",cancelButtonText:"暂不填写"}).then(function(){t.title="银行卡资料",t.contentShowA=!1,t.contentShowB=!0,t.bankPhotoShow=!0,t.contentShowC=!1,t.contentShowD=!1,t.bankShow=!0}).catch(function(){t.contentShowB=!1,t.nextB(),t.bankShow=!1})},1e3))):void Object(r.d)("手机号码格式有误"):void Object(r.d)("身份证号码格式有误")},nextB:function(){var t=this;if(this.contentShowB){if(""===this.bank.openBank)return void Object(r.d)("开户银行未填");if(""===this.bank.accountName)return void Object(r.d)("开户名称未填");if(""===this.bank.bankNo)return void Object(r.d)("银行账户未填");if(!/^([1-9]{1})(\d{14}|\d{18})$/.test(_this.bank.bankNo))return void Object(r.d)("银行账户格式有误")}this.invoiceShow?(this.title="开票资料",this.contentShowA=!1,this.contentShowB=!1,this.contentShowC=!0,this.contentShowD=!1):(window.scrollTo(0,0),setTimeout(function(){r.b.confirm({message:"是否现在录入银行代扣资料？",confirmButtonText:"前往填写",cancelButtonText:"暂不填写"}).then(function(){t.title="开票资料",t.contentShowA=!1,t.contentShowB=!1,t.contentShowC=!0,t.contentShowD=!1,t.invoiceShow=!0}).catch(function(){t.contentShowC=!1,t.nextC(),t.invoiceShow=!1})},1e3))},nextC:function(){if(this.contentShowC){if(""===this.invoice.invoiceType)return void Object(r.d)("发票类型未选");if(""===this.invoice.unitName)return void Object(r.d)("单位名称未填");if(""===this.invoice.identifiNum)return void Object(r.d)("纳税人识别号未填");if(""===this.invoice.mobile)return void Object(r.d)("联系电话未填");if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(_this.invoice.mobile))return void Object(r.d)("联系电话格式有误");if(""==this.invoice.invOpenBank)return void Object(r.d)("开户银行未填");if(""==this.invoice.invAccountNo)return void Object(r.d)("银行账户未填");if(""==this.invoice.contactAddr)return void Object(r.d)("联系地址未填");if(!/^([1-9]{1})(\d{14}|\d{18})$/.test(_this.invoice.invAccountNo))return void Object(r.d)("银行账户格式有误");this.title="上传附件",this.contentShowA=!1,this.contentShowB=!1,this.contentShowC=!1,this.contentShowD=!0}else this.title="上传附件",this.contentShowA=!1,this.contentShowB=!1,this.contentShowC=!1,this.contentShowD=!0},nextD:function(){return 0==this.fileList1.length||0==this.fileList2.length||0==this.fileList3.length?void Object(r.d)("请先上传完整图片"):this.bankPhotoShow&&0==this.fileList4.length?void Object(r.d)("请先上传完整图片"):(this.title="居民用水申请",this.contentShowA=!0,this.contentShowD=!0,this.isQuery=!0,this.btnShow=!1,0!=this.$route.query.isModify&&(this.isReadyonly=!0,this.icon="",this.iconType=""),this.bankShow?(this.contentShowB=!0,this.bankPhotoShow=!0):(this.contentShowB=!1,this.bankPhotoShow=!1),void(this.invoiceShow?this.contentShowC=!0:this.contentShowC=!1))},cancel:function(){var t=this;0!==this.$route.query.isModify?r.b.confirm({message:"数据未保存，是否确定退出？"}).then(function(){t.$router.push("/businesshand")}).catch(function(){}):this.$router.push("/progressQuery")}}},d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"peopleApply"},[o("page-content",[o("div",{staticClass:"content-padded"},[o("headerThree",{attrs:{message:t.message}}),t._v(" "),o("div",{staticClass:"yh-body",on:{touchmove:function(e){t.touchmove(e)},scroll:function(e){t.scroll(e)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShowA,expression:"contentShowA"}],staticClass:"span_content",on:{touchmove:function(e){t.touchmove(e)},scroll:function(e){t.scroll(e)}}},[t.isQuery?t._e():o("van-radio-group",{on:{change:t.applyTypeChange},model:{value:t.applyType,callback:function(e){t.applyType=e},expression:"applyType"}},[o("span",{staticClass:"radio_span"},[o("van-radio",{attrs:{name:"1"}},[t._v("居民用水申请")])],1),t._v(" "),o("span",{staticClass:"radio_span"},[o("van-radio",{attrs:{name:"2"}},[t._v("企业用水申请")])],1)]),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{"left-icon":"location-o",readonly:"",required:"",label:"所属地区","right-icon":t.icon,placeholder:"请选择地区",size:"large"},on:{click:t.showAddressChuang},model:{value:t.tableData.groupName,callback:function(e){t.$set(t.tableData,"groupName",e)},expression:"tableData.groupName"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{"left-icon":"user-o",readonly:t.isReadyonly,label:"业主名称",required:"",placeholder:t.isReadyonly?"-":"请输入业主名称",size:"large"},on:{blur:function(e){t.blur(t.tableData.ctmName,"ctmName")}},model:{value:t.tableData.ctmName,callback:function(e){t.$set(t.tableData,"ctmName",e)},expression:"tableData.ctmName"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{"left-icon":"idcard",readonly:t.isReadyonly,label:"业主身份证号码",required:"",oninput:"this.value=this.value.replace(/[^0-9xX]+/,'');",placeholder:t.isReadyonly?"-":"请输入身份证号码",size:"large"},on:{blur:function(e){t.blur(t.tableData.ctmIdCard,"ctmIdCard")}},model:{value:t.tableData.ctmIdCard,callback:function(e){t.$set(t.tableData,"ctmIdCard",e)},expression:"tableData.ctmIdCard"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{"left-icon":"wap-home-o",readonly:t.isReadyonly,label:"用水地址",required:"",placeholder:t.isReadyonly?"-":"请输入用水地址",size:"large"},on:{blur:function(e){t.blur(t.tableData.userAddress,"userAddress")}},model:{value:t.tableData.userAddress,callback:function(e){t.$set(t.tableData,"userAddress",e)},expression:"tableData.userAddress"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{"left-icon":"phone-o",readonly:t.isReadyonly,clearable:"",label:"联系人电话",placeholder:t.isReadyonly?"-":"请输入联系人电话",type:"number",required:"",oninput:"this.value=this.value.replace(/[^0-9]+/,'');",size:"large"},on:{blur:function(e){t.blur(t.tableData.operatorPhone,"operatorPhone")}},model:{value:t.tableData.operatorPhone,callback:function(e){t.$set(t.tableData,"operatorPhone",e)},expression:"tableData.operatorPhone"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{"left-icon":"bar-chart-o",readonly:t.isReadyonly,label:"预估月用水量",placeholder:t.isReadyonly?"-":"请输入用水量",required:"",oninput:"this.value=this.value.replace(/[^0-9.]+/,'');",type:"number",size:"large"},on:{blur:function(e){t.blur(t.tableData.predictWater,"predictWater")}},model:{value:t.tableData.predictWater,callback:function(e){t.$set(t.tableData,"predictWater",e)},expression:"tableData.predictWater"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{"left-icon":"friends-o",readonly:t.isReadyonly,type:"number",required:"",oninput:"this.value=this.value.replace(/[^0-9]+/,'');",label:"预估月用水人数",placeholder:t.isReadyonly?"-":"请输入用水人数",size:"large"},on:{blur:function(e){t.blur(t.tableData.predictUser,"predictUser")}},model:{value:t.tableData.predictUser,callback:function(e){t.$set(t.tableData,"predictUser",e)},expression:"tableData.predictUser"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{"left-icon":"comment-o",readonly:t.isReadyonly,label:"申请原因",placeholder:t.isReadyonly?"-":"请输入申请原因",size:"large"},model:{value:t.tableData.applyReason,callback:function(e){t.$set(t.tableData,"applyReason",e)},expression:"tableData.applyReason"}}),t._v(" "),t.btnShow?o("div",{staticClass:"submit_box"},[t.isShowBtn?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:function(e){t.submit(1)}}},[t._v("暂 存")]):t._e(),t._v(" "),t.btnShow?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.nextA}},[t._v("下一步")]):t._e()],1):t._e(),t._v(" "),t.btnShow?o("div",{staticClass:"yh-footer"},[o("div",{staticClass:"yh-info",on:{click:function(e){t.takeInfo()}}},[o("img",{attrs:{src:i("URio"),alt:""}}),t._v(" "),o("span",{staticClass:"kr-span kr-info"},[t._v("报装说明")])]),t._v(" "),t.isShowInfo?o("div",[o("span",{staticClass:"kr-span"},[t._v("申请须知：报装用户取得产权证后办理。")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("业务咨询电话：0774-3823402，供水热线：0774-3956000")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("如电子文档资料过大无法上传，请发送至供水业务邮箱：yhjhyyb@163.com，并在备注信息处说明备注。")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("有关“产权证”说明如下：")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("①有效房产证明包括：房产证、不动产证、国有土地使用证、建设用地许可证、规划许可证、集体土地证、直接与房地产公司签订的商品房买卖合同或土地买卖合同。")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("②无法提供产权证原件的，用于贷款抵押的需提供银行贷款合同，或房产交易中心出具的房产证复印件，或房产交易与产权档案查询证明等。")]),t._v(" "),o("span",{staticClass:"kr-span"},[t._v("③产权证地址信息不详或地址已变更的，需提供居委会或派出所证明。")])]):t._e()]):t._e()],1),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShowB,expression:"contentShowB"}],staticClass:"span_content",on:{touchmove:function(e){t.touchmove(e)},scroll:function(e){t.scroll(e)}}},[o("div",{staticClass:"top_title"},[t._v(" 银行代扣资料")]),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"shop-o",readonly:t.isReadyonly,label:"开户银行：",clearable:"",placeholder:t.isReadyonly?"-":"请输入开户银行",size:"large"},on:{blur:function(e){t.blur(t.bank.openBank,"openBank")}},model:{value:t.bank.openBank,callback:function(e){t.$set(t.bank,"openBank",e)},expression:"bank.openBank"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{required:"","left-icon":"user-circle-o",readonly:t.isReadyonly,label:"开户名称：",clearable:"",placeholder:t.isReadyonly?"-":"请输入开户名称",size:"large"},on:{blur:function(e){t.blur(t.bank.accountName,"accountName")}},model:{value:t.bank.accountName,callback:function(e){t.$set(t.bank,"accountName",e)},expression:"bank.accountName"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"contact",readonly:t.isReadyonly,label:"银行账户：",placeholder:t.isReadyonly?"-":"请输入银行账户",clearable:"",size:"large"},on:{blur:function(e){t.blur(t.bank.bankNo,"bankNo")}},model:{value:t.bank.bankNo,callback:function(e){t.$set(t.bank,"bankNo",e)},expression:"bank.bankNo"}}),t._v(" "),t.btnShow?o("div",{staticClass:"submit_box"},[t.btnShow?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.goBackB}},[t._v("上一步")]):t._e(),t._v(" "),0!=t.$route.query.isModify?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:function(e){t.submit(1)}}},[t._v("暂 存")]):t._e(),t._v(" "),t.btnShow?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.nextB}},[t._v("下一步")]):t._e()],1):t._e()],1),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShowC,expression:"contentShowC"}],staticClass:"span_content",on:{touchmove:function(e){t.touchmove(e)},scroll:function(e){t.scroll(e)}}},[o("div",{staticClass:"top_title"},[t._v(" 开票资料")]),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"label-o",readonly:"",label:"发票类型：",clearable:"",placeholder:t.isReadyonly?"-":"请选择发票类型",size:"large","right-icon":t.icon},on:{click:function(e){t.selectRelation()},"click-right-icon":function(e){t.selectRelation()},blur:function(e){t.blur(t.invoice.invoiceTypeName,"invoiceTypeName")}},model:{value:t.invoice.invoiceTypeName,callback:function(e){t.$set(t.invoice,"invoiceTypeName",e)},expression:"invoice.invoiceTypeName"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{required:"","left-icon":"shop-collect-o",readonly:t.isReadyonly,label:"单位名称：",placeholder:t.isReadyonly?"-":"请输入单位名称",clearable:"",size:"large"},on:{blur:function(e){t.blur(t.invoice.unitName,"unitName")}},model:{value:t.invoice.unitName,callback:function(e){t.$set(t.invoice,"unitName",e)},expression:"invoice.unitName"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"user-o",readonly:t.isReadyonly,label:"纳税人识别号：",type:"number",oninput:"this.value=this.value.replace(/[^0-9.a-zA-Z]+/,'');",placeholder:t.isReadyonly?"-":"请输入纳税人识别号",clearable:"",size:"large"},on:{blur:function(e){t.blur(t.invoice.identifiNum,"identifiNum")}},model:{value:t.invoice.identifiNum,callback:function(e){t.$set(t.invoice,"identifiNum",e)},expression:"invoice.identifiNum"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{required:"","left-icon":"phone-o",readonly:t.isReadyonly,label:"联系电话：",type:"number",oninput:"this.value=this.value.replace(/[^0-9]+/,'');",clearable:"",placeholder:t.isReadyonly?"-":"请输入联系电话",size:"large"},on:{blur:function(e){t.blur(t.invoice.mobile,"mobile")}},model:{value:t.invoice.mobile,callback:function(e){t.$set(t.invoice,"mobile",e)},expression:"invoice.mobile"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"gold-coin-o",readonly:t.isReadyonly,label:"开户银行：",placeholder:t.isReadyonly?"-":"请输入开户银行",clearable:"",size:"large"},on:{blur:function(e){t.blur(t.invoice.invOpenBank,"invOpenBank")}},model:{value:t.invoice.invOpenBank,callback:function(e){t.$set(t.invoice,"invOpenBank",e)},expression:"invoice.invOpenBank"}}),t._v(" "),o("van-field",{staticClass:"yh-my-red",attrs:{required:"","left-icon":"balance-list-o",readonly:t.isReadyonly,label:"银行账户：",placeholder:t.isReadyonly?"-":"请输入银行账户",clearable:"",type:"number",oninput:"this.value=this.value.replace(/[^0-9]+/,'');",size:"large"},on:{blur:function(e){t.blur(t.invoice.invAccountNo,"invAccountNo")}},model:{value:t.invoice.invAccountNo,callback:function(e){t.$set(t.invoice,"invAccountNo",e)},expression:"invoice.invAccountNo"}}),t._v(" "),o("van-field",{staticClass:"yh-my-blue",attrs:{required:"","left-icon":"wap-home-o",readonly:t.isReadyonly,label:"联系地址：",clearable:"",placeholder:t.isReadyonly?"-":"请输入联系地址",size:"large"},on:{blur:function(e){t.blur(t.invoice.contactAddr,"contactAddr")}},model:{value:t.invoice.contactAddr,callback:function(e){t.$set(t.invoice,"contactAddr",e)},expression:"invoice.contactAddr"}}),t._v(" "),t.btnShow?o("div",{staticClass:"submit_box"},[t.btnShow?o("van-button",{staticClass:"yh-my-blue submit_btn",attrs:{type:"info"},on:{click:t.goBackC}},[t._v("上一步")]):t._e(),t._v(" "),0!=t.$route.query.isModify?o("van-button",{staticClass:"yh-my-red submit_btn",attrs:{type:"info"},on:{click:function(e){t.submit(1)}}},[t._v("暂 存")]):t._e(),t._v(" "),t.btnShow?o("van-button",{staticClass:"yh-my-blue submit_btn",attrs:{type:"info"},on:{click:t.nextC}},[t._v("下一步")]):t._e()],1):t._e()],1),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShowD,expression:"contentShowD"}],staticClass:"span_content",on:{touchmove:function(e){t.touchmove(e)},scroll:function(e){t.scroll(e)}}},[t.PhotoShow1?o("div",[o("div",{staticClass:"upLoad_title"},[t._v("工商营业执照"),o("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),o("van-uploader",{attrs:{"max-count":1,deletable:!t.isReadyonly},model:{value:t.fileList1,callback:function(e){t.fileList1=e},expression:"fileList1"}})],1):t._e(),t._v(" "),t.PhotoShow2?o("div",[o("div",{staticClass:"upLoad_title"},[t._v("法人身份证正面"),o("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),o("van-uploader",{attrs:{"max-count":1,deletable:!t.isReadyonly},model:{value:t.fileList2,callback:function(e){t.fileList2=e},expression:"fileList2"}})],1):t._e(),t._v(" "),t.PhotoShow3?o("div",[o("div",{staticClass:"upLoad_title"},[t._v("法人身份证反面"),o("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),o("van-uploader",{attrs:{"max-count":1,deletable:!t.isReadyonly},model:{value:t.fileList3,callback:function(e){t.fileList3=e},expression:"fileList3"}})],1):t._e(),t._v(" "),t.bankPhotoShow?o("div",[o("div",{staticClass:"upLoad_title"},[t._v("银行卡照片"),o("span",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),o("van-uploader",{attrs:{"max-count":1,deletable:!t.isReadyonly},model:{value:t.fileList4,callback:function(e){t.fileList4=e},expression:"fileList4"}})],1):t._e(),t._v(" "),t.btnShow?o("div",{staticClass:"submit_box"},[t.btnShow?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.goBackD}},[t._v("上一步")]):t._e(),t._v(" "),0!=t.$route.query.isModify?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:function(e){t.getImgBase64(1)}}},[t._v("暂 存")]):t._e(),t._v(" "),t.btnShow?o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.nextD}},[t._v("下一步")]):t._e()],1):t._e()]),t._v(" "),t.editShow?o("div",{staticClass:"submit_box"},[t.btnShow||0==t.$route.query.isModify?t._e():o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:t.goBackE}},[t._v("上一步")]),t._v(" "),t.btnShow||0==t.$route.query.isModify?t._e():o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:function(e){t.getImgBase64(1)}}},[t._v("暂存")]),t._v(" "),t.btnShow||0==t.$route.query.isModify?t._e():o("van-button",{staticClass:"submit_btn",attrs:{type:"info"},on:{click:function(e){t.getImgBase64(0)}}},[t._v("提交")])],1):o("div",[o("van-button",{staticClass:"next",staticStyle:{"margin-top":"10px"},attrs:{type:"info"},on:{click:t.modify}},[t._v("修改")])],1)])],1)]),t._v(" "),o("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.relationShow,callback:function(e){t.relationShow=e},expression:"relationShow"}},[o("van-area",{attrs:{"area-list":t.areaList,value:t.areaNum},on:{confirm:t.sure,cancel:t.exit}})],1),t._v(" "),o("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.invoiceTypeShow,callback:function(e){t.invoiceTypeShow=e},expression:"invoiceTypeShow"}},[o("van-picker",{staticClass:"timepicker",attrs:{"show-toolbar":"",title:"发票类型",columns:t.invoiceTypeNameList},on:{cancel:t.onCancelRelation,confirm:t.onConfirmRelation}})],1)],1)},p=[],u={render:d,staticRenderFns:p},b=u,f=i("VU/8"),v=o,y=f(h,b,!1,v,"data-v-04fc98c4",null);e.default=y.exports},iom1:function(t,e,i){var o=i("wQmc");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("po5z")("9672ec8a",o,!0)},wQmc:function(t,e,i){e=t.exports=i("FZ+f")(void 0),e.push([t.i,".peopleApply .van-cell--large[data-v-04fc98c4]{border-bottom:1px solid #eee;padding-top:10px;padding-bottom:10px}.peopleApply .myheader[data-v-04fc98c4]{height:9rem}.peopleApply .bottomBtn_content[data-v-04fc98c4]{margin-top:10px}.peopleApply .van-uploader[data-v-04fc98c4]{width:100%}.peopleApply .span_content[data-v-04fc98c4]{display:inline-block;width:100%;padding:0 2%}.peopleApply .van-radio-group[data-v-04fc98c4]{padding:2%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.peopleApply .radio_span[data-v-04fc98c4]{display:inline-block;width:45%;padding:0;font-size:16px}.peopleApply .yh-footer[data-v-04fc98c4]{padding:3% 1% 3% 3%;font-size:14px}.peopleApply .yh-footer .kr-span[data-v-04fc98c4]{display:block}.peopleApply .yh-footer .yh-info[data-v-04fc98c4]{text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.peopleApply .yh-footer .yh-info img[data-v-04fc98c4]{width:8%;color:#232a9c}.peopleApply .yh-footer .kr-info[data-v-04fc98c4]{text-align:center;color:#3193f6;font-size:.8rem;display:inline-block}.peopleApply .page-content .list li[data-v-04fc98c4]{border:none}.peopleApply .top_title[data-v-04fc98c4]{height:1.2rem;line-height:1.2rem;font-size:16px;font-weight:bolder;margin-left:3%;margin-top:3%;border-left:.25rem solid #3193f6}.peopleApply .upLoad_title[data-v-04fc98c4]{height:1.5rem;line-height:1.5rem;font-size:16px;font-weight:bolder;margin-left:3%;margin-top:10px;margin-bottom:10px}.peopleApply .next[data-v-04fc98c4]{float:right;margin-right:3%;height:1.6rem;line-height:1.6rem;margin-bottom:.5rem}.peopleApply .submit_box[data-v-04fc98c4]{display:-webkit-box;display:-ms-flexbox;display:flex}.peopleApply .submit_box .submit_btn[data-v-04fc98c4]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:1.6rem;line-height:1.6rem;margin:0 20px;margin-top:10px;margin-bottom:10px}.peopleApply .bottom_content[data-v-04fc98c4]{margin:0;padding-bottom:10px;padding-top:10px}.peopleApply .bottom_content .col-100[data-v-04fc98c4]{margin-left:3%}.peopleApply .bottom_content .list[data-v-04fc98c4]{margin:1rem .5rem 1rem 0;-webkit-box-shadow:1px 1px 5px 1px #888;box-shadow:1px 1px 5px 1px #888}.peopleApply .bottom_content .list .item-content[data-v-04fc98c4]{padding:0}.peopleApply .bottom_content .col-100[data-v-04fc98c4]{width:94%}.peopleApply .bottom_content .button[data-v-04fc98c4]{background-color:#fff;color:#b6b6b6;font-size:1.3rem}.peopleApply .item-title-row[data-v-04fc98c4]{margin-bottom:1%}.peopleApply .first_content[data-v-04fc98c4]{display:inline-block;width:45%;border-bottom:1px solid #dcdcdc;padding-left:1%}.peopleApply .first_content span[data-v-04fc98c4]{font-size:12px;color:#989898;font-weight:600}.peopleApply .first_content input[data-v-04fc98c4]{width:90%;font-size:15px;border:none}.peopleApply .list li+li .item-content[data-v-04fc98c4]:before{background-color:#fff}.peopleApply .second_content[data-v-04fc98c4]{display:inline-block;width:35%;border-bottom:1px solid #dcdcdc;padding-left:.75rem}.peopleApply .second_content span[data-v-04fc98c4]{font-size:13px;color:#989898;font-weight:600}.peopleApply .second_content input[data-v-04fc98c4]{width:90%;font-size:15px;border:none}.peopleApply .second_content[data-v-04fc98c4]:first-child{width:25%}.peopleApply .Third_content[data-v-04fc98c4]{display:inline-block;width:100%;border-bottom:1px solid #dcdcdc;padding-left:.75rem}.peopleApply .Third_content span[data-v-04fc98c4]{font-size:13px;color:#888;font-weight:300}.peopleApply .Third_content input[data-v-04fc98c4]{width:90%;font-size:15px;border:none}.peopleApply .add_box[data-v-04fc98c4]{position:absolute;width:20%;top:77.5%;right:6%;height:8%;z-index:2000}.peopleApply .add_box .midle-bar[data-v-04fc98c4]{float:right}.peopleApply .content-padded[data-v-04fc98c4]{margin:0}.peopleApply .content-padded .img_content[data-v-04fc98c4]{height:9rem}.peopleApply .col-100 .list[data-v-04fc98c4]{margin:0}.peopleApply .col-100 .list .list-title[data-v-04fc98c4]{padding:0}.peopleApply .col-100 .form-list .item-title.label[data-v-04fc98c4]{width:40%}.peopleApply .col-100 .form-list .item-content img[data-v-04fc98c4]{position:absolute;top:.2rem;left:50%}",""])}});
//# sourceMappingURL=51.3871a463ba617b43d7f1.js.map