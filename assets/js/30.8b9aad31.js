(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{358:function(t,e,a){},377:function(t,e,a){"use strict";a(358)},419:function(t,e,a){"use strict";a.r(e);a(193),a(115),a(8),a(116),a(89);var s={name:"TabComponent",props:{headerAlign:{type:String,required:!1,default:"left",validator:function(t){return["center","left"].includes(t)}},defaultTab:{type:String,default:function(){return""}}},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.defaultTab&&this.selectTab({name:this.defaultTab});var t,e,a=this.$refs.refTabs,s=!1;a.addEventListener("mousedown",(function(i){s=!0,a.classList.add("active"),t=i.pageX-a.offsetLeft,e=a.offsetLeft})),a.addEventListener("mouseup",(function(){s=!1,a.classList.remove("active")})),a.addEventListener("mouseleave",(function(){s=!1,a.classList.remove("active")})),a.addEventListener("mousemove",(function(i){if(s){i.preventDefault();var n=2*(i.pageX-a.offsetLeft-t);a.scrollLeft=e-n}}))},methods:{selectTab:function(t){var e=this;this.tabs.forEach((function(a){var s=a.name===t.name;a.isActive=s,s&&e.$emit("change-tab",a.name)}))}}},i=(a(377),a(53)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"tab --"+t.headerAlign},[a("div",{staticClass:"tab__header"},[a("div",{ref:"refTabs",staticClass:"tab__header__list"},t._l(t.tabs,(function(e){return a("div",{key:e.name,staticClass:"tab__header__list__item",class:{"is-active":e.isActive}},[a("div",{staticClass:"tab__header__list__item__clickable",on:{click:function(a){return t.selectTab(e)}}},[t._v("\n          "+t._s(e.name)+"\n          "),a("div",{staticClass:"tab__header__list__item__clickable__bar"})])])})),0),t._v(" "),a("div",{staticClass:"tab__header__line-bar"})]),t._v(" "),a("div",{staticClass:"tab__content"},[t._t("default")],2)])}),[],!1,null,"143d10b8",null);e.default=n.exports}}]);