(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GKcL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("0iUn"),i=a("sLSF"),s=a("MI3g"),m=a("a7VT"),c=a("Tit0"),r=a("q1tI"),l=a.n(r),o=a("5Yp1"),g=(a("wXDF"),a("L8kh"),a("3vEF")),d=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(s.default)(this,Object(m.default)(t).call(this,e))).state={careArr:[{img:"https://jarunwang.github.io/localsstays.github.io/static/img/1.png",title:"Profile & Listing",content:"Stand-out listings created across all the best channels"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/2.png",title:"Professional Photography",content:"Professional Photography"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/3.png",title:"Guest Relations",content:"24/7 guest support and callout service"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/4.png",title:"Daily Pricing",content:"Daily pricing review for yield maximization"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/5.png",title:"Interior Design",content:"Interior design service"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/6.png",title:"Housekeeping",content:"5-star housekeeping and linen"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/7.png",title:"Maintenance",content:"Quickly resolving maintenance issues"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/8.png",title:"24/7 key Exchange",content:"In-person meet & greets, warmly welcoming guests to your home"}],commentsMsgArr:[{msg:"Locals is awesome! I travel a lot for work. As a result my flat just sits there for months out of the year. It always seem like such a waste. With Locals I’m able to rent my home on Airbnb and they take care all the work. With the money they made me I was able to take a trip last year to Africa. That’s always been my dream and Locals help me get there. Thanks Locals.",img:"https://jarunwang.github.io/localsstays.github.io/static/img/man.png",title:"SD",content:"Hosting Since 2018"},{msg:"Locals has done a remarkable job. The occupancy levels are high and the rates per night excellent. They go out of their way to make the life of the property owner easier.",img:"https://jarunwang.github.io/localsstays.github.io/static/img/man2.png",title:"Matt",content:"Hosting Since 2018"}],landlordsImg:[{img:"https://jarunwang.github.io/localsstays.github.io/static/img/sprite/icon5.png",name:"Yield maximization With our superior Pricing strategy"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/sprite/icon6.png",name:"Total peace of mind Insurance and all maintenance managed"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/sprite/icon7.png",name:"Maximised visibility of your listing, managed by us across 15+ channels"}],activeCare:0,activeCommentsMsg:0,animateComment:!1,animateCare:!1},a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){g.a.importWOW()}},{key:"renderLandlordsImg",value:function(){var e=this,t=[];return this.state.landlordsImg.map(function(a,n){t.push(l.a.createElement("td",{key:n,className:"content_landlord_img_item flipInX wow"},l.a.createElement("img",{src:a.img}),l.a.createElement("div",{className:"content_landlord_img_item_name"},a.name))),n<e.state.landlordsImg.length-1&&t.push(l.a.createElement("td",{key:"space"+n}))}),t}},{key:"renderCareArr",value:function(){var e=this,t=[];return this.state.careArr.map(function(a,n){t.push(l.a.createElement("a",{className:"content_care_list_item flipInX wow",onClick:function(){e.doCareImg(n)},key:n},l.a.createElement("div",{className:"title",id:n},a.title),l.a.createElement("div",{className:"content",id:n},a.content)))}),t}},{key:"doCareImg",value:function(e){var t=this;this.setState({activeCare:e,animateCare:!0}),setTimeout(function(){t.setState({animateCare:!1})},1e3)}},{key:"renderCommentsMsg",value:function(e){var t=this,a=this.state.activeCommentsMsg;e>0?a=a+1>this.state.commentsMsgArr.length-1?0:a+1:e<0&&(a=a-1<0?this.state.commentsMsgArr.length-1:a-1),this.setState({activeCommentsMsg:a,animateComment:!0}),setTimeout(function(){t.setState({animateComment:!1})},1e3)}},{key:"render",value:function(){var e=this;return l.a.createElement(o.a,{footerBorder:!0},l.a.createElement("div",{className:"content content_landlord first-content"},l.a.createElement("div",null,l.a.createElement("h1",{className:"common_content_title tc dib wow flipInX"},"What benefits landlords get with Locals"),l.a.createElement("table",{className:"content_landlord_img",border:"0"},l.a.createElement("tbody",null,l.a.createElement("tr",null,this.renderLandlordsImg()))))),l.a.createElement("div",{className:"content content_comment wow flipInX"},l.a.createElement("div",null,l.a.createElement("h1",{className:"common_content_title tc dib"},"The landlord comments"),l.a.createElement("div",{className:"content_comment_slide"},l.a.createElement("div",{className:"common_left_btn",onClick:function(){e.renderCommentsMsg(1)}},l.a.createElement("div",{className:"wrapper left"},l.a.createElement("div",{className:"circleProgress rightcircle"}))),l.a.createElement("div",{className:"common_right_btn",onClick:function(){e.renderCommentsMsg(-1)}},l.a.createElement("div",{className:"wrapper right"},l.a.createElement("div",{className:"circleProgress rightcircle"}))),l.a.createElement("span",{className:"content_comment_tall"},l.a.createElement("div",{className:"content_comment_tall_content"},l.a.createElement("div",{className:this.state.animateComment?"shake animated":"animated"},this.state.commentsMsgArr[this.state.activeCommentsMsg].msg)),l.a.createElement("div",{className:"content_comment_tall_thir"}),l.a.createElement("div",{className:this.state.animateComment?"content_comment_tall_head pulse animated":"content_comment_tall_head animated"},l.a.createElement("img",{src:this.state.commentsMsgArr[this.state.activeCommentsMsg].img})),l.a.createElement("div",{className:"content_comment_tall_title"},this.state.commentsMsgArr[this.state.activeCommentsMsg].title),l.a.createElement("div",{className:"content_comment_tall_text"},this.state.commentsMsgArr[this.state.activeCommentsMsg].content))))),l.a.createElement("div",{className:"content content_care wow flipInX"},l.a.createElement("div",null,l.a.createElement("h1",{className:"common_content_title tc dib"},"Everything taken care of")),l.a.createElement("div",{className:"content_care_box"},l.a.createElement("div",{className:this.state.animateCare?"content_care_img jackInTheBox animated":"content_care_img animated"},l.a.createElement("img",{src:this.state.careArr[this.state.activeCare].img})),l.a.createElement("div",{className:this.state.animateCare?"content_care_list headShake animated":"content_care_list animated"},this.renderCareArr()))))}}]),t}(l.a.Component)},l4J6:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/whatWeDo",function(){var e=a("GKcL");return{page:e.default||e}}])}},[["l4J6",1,0,2]]]);