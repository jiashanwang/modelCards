(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"060d":function(t,e,i){"use strict";i.r(e);var n=i("781c"),a=i("061e");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9886");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"26861ad0",null,!1,n["a"],void 0);e["default"]=d.exports},"061e":function(t,e,i){"use strict";i.r(e);var n=i("c28d"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"144e":function(t,e,i){"use strict";i.r(e);var n=i("c592"),a=i("c62b");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("2444"),i("6580");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"55284830",null,!1,n["a"],void 0);e["default"]=d.exports},2444:function(t,e,i){"use strict";var n=i("f145"),a=i.n(n);a.a},2645:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("ed0f").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:[{margin:t.margin},t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-search__content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100px":"4px",borderColor:t.borderColor}},[t.$slots.label||null!==t.label?[t._t("label",[i("v-uni-text",{staticClass:"u-search__content__label"},[t._v(t._s(t.label))])])]:t._e(),i("v-uni-view",{staticClass:"u-search__content__icon"},[i("u-icon",{attrs:{size:t.searchIconSize,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickIcon.apply(void 0,arguments)}}})],1),i("v-uni-input",{staticClass:"u-search__content__input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor,height:t.$u.addUnit(t.height)},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-search__content__input--placeholder",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-search__content__icon u-search__content__close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"}})],1):t._e()],2),i("v-uni-text",{staticClass:"u-search__action",class:[(t.showActionBtn||t.show)&&"u-search__action--active"],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},r=[]},"2a0c":function(t,e,i){"use strict";i.r(e);var n=i("3ded"),a=i("4276");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d8d8");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"23a72621",null,!1,n["a"],void 0);e["default"]=d.exports},"3ded":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+t.indicatorMode],style:{width:t.$u.addUnit(t.lineWidth*t.length),backgroundColor:t.indicatorInactiveColor}},[i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[t.lineStyle]})],1):t._e(),"dot"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},t._l(t.length,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-swiper-indicator__wrapper__dot",class:[n===t.current&&"u-swiper-indicator__wrapper__dot--active"],style:[t.dotStyle(n)]})})),1):t._e()],1)},a=[]},"406a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-d4342702], uni-scroll-view[data-v-d4342702], uni-swiper-item[data-v-d4342702]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-d4342702]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-d4342702]{flex:1}.u-swiper__wrapper__item[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-d4342702]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-d4342702]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-d4342702]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-d4342702]{position:absolute;bottom:10px}',""]),t.exports=e},4276:function(t,e,i){"use strict";i.r(e);var n=i("8ee0"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},5628:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.integral_price[data-v-55284830]{display:flex;justify-content:flex-start;align-items:center}.home-page-header[data-v-55284830]{display:block;padding:0 %?24?%}.swiper-img[data-v-55284830]{border-top-left-radius:%?25?%;border-top-right-radius:%?25?%}.search-wrap[data-v-55284830]{height:%?60?%;background-color:#f3f3f3;border-radius:%?30?%}.search-wrap .iconfont[data-v-55284830]{font-size:%?38?%;margin-top:%?4?%;color:#bbb;margin-left:%?30?%}.search-input[data-v-55284830]{flex:1;color:#b4b4b4;padding-left:%?25?%}#index_swiper[data-v-55284830]{position:relative;height:%?300?%;margin-top:%?20?%}.line-operate[data-v-55284830]{width:calc(100% - %?48?%);margin:0 auto;height:%?10?%;background-color:#f5f5f5}.often-used-list[data-v-55284830]{display:flex;height:%?300?%;justify-content:center;align-items:center;flex-wrap:wrap;background-color:#fff;border-bottom-left-radius:%?25?%;border-bottom-right-radius:%?25?%;padding-top:%?10?%}.ofter-item[data-v-55284830]{width:25%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-bottom:%?20?%}.ofter-item .img[data-v-55284830]{width:%?80?%}.typeName[data-v-55284830]{\n  /* margin-top:10rpx; */}.notice-wrap[data-v-55284830]{height:%?60?%;display:flex;justify-content:flex-start;align-items:center;margin-top:%?20?%;background-color:#fff;border-radius:%?5?%}.notice-wrap .title[data-v-55284830]{width:%?150?%;text-align:center}.notice-wrap .notice[data-v-55284830]{color:#c0a633}.mf-list[data-v-55284830]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;background-color:#fff}.mf-item[data-v-55284830]{width:50%}.mf-item .img[data-v-55284830]{width:100%}.product-title[data-v-55284830]{width:calc(100%-48rpx);display:flex;justify-content:center;align-items:center;background-color:#fff;padding:%?30?% 0 %?50?% 0}.product-title .title[data-v-55284830]{text-align:center;font-size:%?34?%;margin:0 %?20?%}.product-title i[data-v-55284830]{color:#bbb}.product_list[data-v-55284830]{height:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding-top:%?20?%}.product-item[data-v-55284830]{width:48%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-bottom:%?34?%\n  /* position: relative;\n    margin-top:94rpx; */}.product-item .img[data-v-55284830]{width:100%;border-top-left-radius:%?25?%;border-top-right-radius:%?25?%}.product-item .imgWrap[data-v-55284830]{position:relative}.product-desc-container[data-v-55284830]{width:100%;padding:%?10?% 0 %?20?% %?20?%;background-color:#fff;border-bottom-left-radius:%?25?%;border-bottom-right-radius:%?25?%}.product-desc-container .product_price[data-v-55284830]{height:%?40?%;display:flex;justify-content:space-between!important;align-items:center}.product_price .tag[data-v-55284830]{display:inline-block;font-size:%?35?%;margin-right:%?5?%}.product-desc-container .product_name[data-v-55284830]{font-size:%?32?%;overflow:hidden;white-space:nowrap}.product-desc-container .product_sales[data-v-55284830]{color:#bbb;font-size:%?26?%;margin:%?10?% 0}.product-desc-container .product_price[data-v-55284830]{display:flex;justify-content:flex-start;color:#ec7e17}.product-desc-container .card_type[data-v-55284830]{margin-left:%?20?%;text-align:center;border:%?1?% solid #ec7e17;padding:%?2?% %?12?%;border-radius:%?16?%;font-size:%?18?%;margin-right:%?20?%}',""]),t.exports=e},"56e7":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=n},"5df9":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ccb1")),r={name:"u-search",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!this.animation&&this.showAction}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")},clickIcon:function(){this.$emit("clickIcon")}}};e.default=r},"5f2b":function(t,e,i){"use strict";i.r(e);var n=i("2645"),a=i("c151");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("8429");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"72bdd996",null,!1,n["a"],void 0);e["default"]=d.exports},"629e":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}};e.default=n},6580:function(t,e,i){"use strict";var n=i("d66b"),a=i.n(n);a.a},"708f":function(t,e,i){var n=i("ba5c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("606472e3",n,!0,{sourceMap:!1,shadowMode:!1})},"781c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():i("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return i("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?i("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},a=[]},"7a9a":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("53ca"));i("ac1f"),i("00b4");var r=n(i("629e")),o={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{currentIndex:0}},watch:{current:function(t,e){t!==e&&(this.currentIndex=t)}},computed:{itemStyle:function(){var t=this;return function(e){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=uni.$u.addUnit(t.radius),e!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?uni.$u.test.video(this.getSource(t))?"video":"image":"object"===(0,a.default)(t)&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":uni.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===(0,a.default)(t)&&this.keyName?t[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(t){var e=t.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=e,this.$emit("change",t.detail)},pauseVideo:function(t){var e=this.getSource(this.list[t]);if(uni.$u.test.video(e)){var i=uni.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(t){return"object"===(0,a.default)(t)&&t.poster?t.poster:""},clickHandler:function(t){this.$emit("click",t)}}};e.default=o},8429:function(t,e,i){"use strict";var n=i("af3f"),a=i.n(n);a.a},"843f":function(t,e,i){"use strict";var n=i("cd9f"),a=i.n(n);a.a},"8ee0":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d5e1")),r={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.lineWidth),t.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),t.backgroundColor=this.indicatorActiveColor,t},dotStyle:function(){var t=this;return function(e){var i={};return i.backgroundColor=e===t.current?t.indicatorActiveColor:t.indicatorInactiveColor,i}}}};e.default=r},9886:function(t,e,i){"use strict";var n=i("98fe"),a=i.n(n);a.a},"98fe":function(t,e,i){var n=i("d549");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b7e16652",n,!0,{sourceMap:!1,shadowMode:!1})},a7f6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-55284830]{background-color:#fff}body.?%PAGE?%[data-v-55284830]{background-color:#fff}.product_list[data-v-55284830]{display:flex;justify-content:center;align-items:center}.product_list .u-transition[data-v-55284830]{width:100%!important}.product_list .u-transition .u-image[data-v-55284830]{height:200px!important}.product_list .u-image__image[data-v-55284830]{width:80%!important}.uni-scroll-view-content[data-v-55284830]{display:flex;justify-content:center;align-items:center}',""]),t.exports=e},af3f:function(t,e,i){var n=i("e8d1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("756efd6c",n,!0,{sourceMap:!1,shadowMode:!1})},ba5c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-23a72621], uni-scroll-view[data-v-23a72621], uni-swiper-item[data-v-23a72621]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-23a72621]{display:flex;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-23a72621]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-23a72621]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-23a72621]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-23a72621]{width:12px}',""]),t.exports=e},c151:function(t,e,i){"use strict";i.r(e);var n=i("5df9"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c28d:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a630"),i("3ca3");var a=n(i("56e7")),r={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),i=e[e.length-1],n=i.$getAppWebview();n.addEventListener("hide",(function(){t.webviewHide=!0})),n.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=r},c592:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uSearch:i("5f2b").default,uSwiper:i("fc12").default,"u-Image":i("fc69").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home-page-header"},[i("v-uni-view",{},[i("u-search",{attrs:{placeholder:"搜索大牌卡劵",showAction:!1},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),i("v-uni-view",{attrs:{id:"index_swiper"}},[i("u-swiper",{attrs:{list:t.swiperList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"home-page-container"},[i("v-uni-view",{staticClass:"notice-wrap"},[i("v-uni-view",{staticClass:"title"},[t._v("最新公告")]),i("v-uni-view",{staticClass:"notice"},[t._v("积分按照1:1兑换 1元 = 1积分")])],1)],1),i("v-uni-view",{staticClass:"product-title"},[i("i",[t._v("———")]),i("v-uni-view",{staticClass:"title"},[t._v("缤纷卡劵")]),i("i",[t._v("———")])],1),i("v-uni-view",{staticClass:"product_list"},[t._l(t.productList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"product-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetailPage(e)}}},[i("u--image",{attrs:{src:e.square_colour_icon,width:"100%",height:"100px",mode:"widthFix"}}),i("v-uni-view",{staticClass:"product-desc-container"},[i("v-uni-view",{staticClass:"product_name"},[t._v(t._s(e.brand_name))]),i("v-uni-view",{staticClass:"product_price"},[i("v-uni-view",{staticClass:"integral_price"},[i("v-uni-view",{staticClass:"tag"},[t._v("¥")]),i("v-uni-view",{staticClass:"price"},[t._v(t._s(e.amount)+" 起")])],1),i("v-uni-view",{staticClass:"card_type"},[t._v("电子卡")])],1)],1)],1)]}))],2)],1)},r=[]},c62b:function(t,e,i){"use strict";i.r(e);var n=i("fbc9"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},ccb1:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("841c"),i("a9e3");var n={props:{shape:{type:String,default:uni.$u.props.search.shape},bgColor:{type:String,default:uni.$u.props.search.bgColor},placeholder:{type:String,default:uni.$u.props.search.placeholder},clearabled:{type:Boolean,default:uni.$u.props.search.clearabled},focus:{type:Boolean,default:uni.$u.props.search.focus},showAction:{type:Boolean,default:uni.$u.props.search.showAction},actionStyle:{type:Object,default:uni.$u.props.search.actionStyle},actionText:{type:String,default:uni.$u.props.search.actionText},inputAlign:{type:String,default:uni.$u.props.search.inputAlign},inputStyle:{type:Object,default:uni.$u.props.search.inputStyle},disabled:{type:Boolean,default:uni.$u.props.search.disabled},borderColor:{type:String,default:uni.$u.props.search.borderColor},searchIconColor:{type:String,default:uni.$u.props.search.searchIconColor},color:{type:String,default:uni.$u.props.search.color},placeholderColor:{type:String,default:uni.$u.props.search.placeholderColor},searchIcon:{type:String,default:uni.$u.props.search.searchIcon},searchIconSize:{type:[Number,String],default:uni.$u.props.search.searchIconSize},margin:{type:String,default:uni.$u.props.search.margin},animation:{type:Boolean,default:uni.$u.props.search.animation},value:{type:String,default:uni.$u.props.search.value},maxlength:{type:[String,Number],default:uni.$u.props.search.maxlength},height:{type:[String,Number],default:uni.$u.props.search.height},label:{type:[String,Number,null],default:uni.$u.props.search.label}}};e.default=n},cd9f:function(t,e,i){var n=i("406a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5c66ace3",n,!0,{sourceMap:!1,shadowMode:!1})},d549:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-26861ad0], uni-scroll-view[data-v-26861ad0], uni-swiper-item[data-v-26861ad0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-26861ad0]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-26861ad0]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-26861ad0]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-26861ad0 1s linear infinite;animation:u-rotate-data-v-26861ad0 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-26861ad0]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-26861ad0]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-26861ad0]{flex-direction:column}[data-v-26861ad0]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-26861ad0]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-26861ad0]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-26861ad0]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-26861ad0]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-26861ad0]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-26861ad0]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-26861ad0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},d5e1:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}};e.default=n},d66b:function(t,e,i){var n=i("5628");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("142f9db4",n,!0,{sourceMap:!1,shadowMode:!1})},d8d8:function(t,e,i){"use strict";var n=i("708f"),a=i.n(n);a.a},e22b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uLoadingIcon:i("060d").default,uSwiperIndicator:i("2a0c").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:t.bgColor,height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)}},[t.loading?i("v-uni-view",{staticClass:"u-swiper__loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):i("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:t.$u.addUnit(t.height)},attrs:{circular:t.circular,interval:t.interval,duration:t.duration,autoplay:t.autoplay,current:t.current,currentItemId:t.currentItemId,previousMargin:t.$u.addUnit(t.previousMargin),nextMargin:t.$u.addUnit(t.nextMargin),acceleration:t.acceleration,displayMultipleItems:t.displayMultipleItems,easingFunction:t.easingFunction},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper__wrapper__item"},[i("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[t.itemStyle(n)]},["image"===t.getItemType(e)?i("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)},attrs:{src:t.getSource(e),mode:t.imgMode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(n)}}}):t._e(),"video"===t.getItemType(e)?i("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:t.$u.addUnit(t.height)},attrs:{id:"video-"+n,"enable-progress-gesture":!1,src:t.getSource(e),poster:t.getPoster(e),title:t.showTitle&&t.$u.test.object(e)&&e.title?e.title:"",controls:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(n)}}}):t._e(),t.showTitle&&t.$u.test.object(e)&&e.title&&t.$u.test.image(t.getSource(e))?i("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[t._t("indicator",[t.loading||!t.indicator||t.showTitle?t._e():i("u-swiper-indicator",{attrs:{indicatorActiveColor:t.indicatorActiveColor,indicatorInactiveColor:t.indicatorInactiveColor,length:t.list.length,current:t.currentIndex,indicatorMode:t.indicatorMode}})])],2)],1)},r=[]},e3af:function(t,e,i){"use strict";i.r(e);var n=i("7a9a"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},e8d1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-72bdd996], uni-scroll-view[data-v-72bdd996], uni-swiper-item[data-v-72bdd996]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}[type="search"][data-v-72bdd996]::-webkit-search-decoration{display:none}.u-search[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center;flex:1}.u-search__content[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center;padding:0 10px;flex:1;justify-content:space-between;border-width:1px;border-color:transparent;border-style:solid;overflow:hidden}.u-search__content__icon[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center}.u-search__content__label[data-v-72bdd996]{color:#303133;font-size:14px;margin:0 4px}.u-search__content__close[data-v-72bdd996]{width:20px;height:20px;border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;background-color:#c6c7cb;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-transform:scale(.82);transform:scale(.82)}.u-search__content__input[data-v-72bdd996]{flex:1;font-size:14px;line-height:1;margin:0 5px;color:#303133}.u-search__content__input--placeholder[data-v-72bdd996]{color:#909193}.u-search__action[data-v-72bdd996]{font-size:14px;color:#303133;width:0;overflow:hidden;transition-property:width;transition-duration:.3s;white-space:nowrap;text-align:center}.u-search__action--active[data-v-72bdd996]{width:40px;margin-left:5px}',""]),t.exports=e},f145:function(t,e,i){var n=i("a7f6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4abb681a",n,!0,{sourceMap:!1,shadowMode:!1})},fbc9:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4");var n=i("a763"),a={data:function(){return{keyword:"搜索大牌卡劵",swiperList:["../../static/dapaikajuan_banner.jpeg"],productList:[]}},onLoad:function(){this.getCardList()},methods:{getCardList:function(){var t=this;(0,n.getCardList)({keyword:""}).then((function(e){t.productList=e})).catch((function(t){}))},jumpDetailPage:function(t){t.brand_id,t.square_colour_icon,t.brand_name,t.circular_colour_icon,t.product_type,t.coupon_name,t.exchange_notice,t.writeoff_notice;var e=encodeURIComponent(JSON.stringify(t));console.log("data="),console.log(e),uni.navigateTo({url:"/pages/cardDetail/index?data="+e})}}};e.default=a},fc12:function(t,e,i){"use strict";i.r(e);var n=i("e22b"),a=i("e3af");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("843f");var o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"d4342702",null,!1,n["a"],void 0);e["default"]=d.exports}}]);