(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a("0iUn"),i=a("sLSF"),c=a("MI3g"),s=a("a7VT"),r=a("Tit0"),l=a("q1tI"),m=a.n(l),o=a("QdZy"),d=a("5Yp1"),g=a("3vEF"),u=(a("lT9O"),function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(c.default)(this,Object(s.default)(t).call(this,e))).state={city:[{img:"https://jarunwang.github.io/localsstays.github.io/static/img/montreal.png",name:"America"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/toronto.png",name:"America"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/vancouver.png",name:"America"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/okland.png",name:"America"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Bangkok.png",name:"Thailand"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Pattaya.png",name:"Thailand"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/ChangMai.png",name:"Thailand"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Phuket.png",name:"Thailand"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/beijing.png",name:"China"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/shanghai.png",name:"China"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/guangzhou.png",name:"China"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/shenzhen.png",name:"China"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Tokyo.png",name:"Japan"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Osaka.png",name:"Japan"},{img:"https://jarunwang.github.io/localsstays.github.io/static/img/Hokkaido.png",name:"Japan"}],active:{cityName:"America",index:0}},a}return Object(r.default)(t,e),Object(i.default)(t,[{key:"componentDidMount",value:function(){this.listen(),g.a.importWOW()}},{key:"renderCity",value:function(){var e=this,t=[];return this.state.city.map(function(a,n){t.push(m.a.createElement("div",{id:n,key:n,onMouseMove:function(){e.doCity(n)},className:e.state.active.index===n?"swiper-slide active":"swiper-slide"},m.a.createElement("img",{id:n,src:a.img})))}),t}},{key:"doCity",value:function(e){this.setState({active:{cityName:this.state.city[e].name,index:e}})}},{key:"checkActive",value:function(e,t){var a=e.activeIndex;t?a=t:e.clickedSlideIndex&&(a=e.clickedSlideIndex),this.setState({active:{cityName:this.state.city[a].name,index:a}})}},{key:"listen",value:function(){var e=this,t=new o.a(".city-swiper",{slidesPerGroup:4,width:222,grabCursor:!0,autoplay:0,autoplayDisableOnInteraction:!1,navigation:{nextEl:".common_right_btn",prevEl:".common_left_btn"},on:{slideChangeTransitionEnd:function(){this.isEnd,e.checkActive(t)}},onProgressChange:function(a){for(var n=0;n<a.slides.length;n++){var i=a.slides[n],c=i.progress,s=c*a.width,r=1-Math.min(Math.abs(c),1);i.style.opacity=r,a.setTransform(i,"translate3d("+s+"px,0,0)")}e.checkActive(t)},onTouchStart:function(e){for(var t=0;t<e.slides.length;t++)e.setTransition(e.slides[t],0)},onSetWrapperTransition:function(e,t){for(var a=0;a<e.slides.length;a++)e.setTransition(e.slides[a],t)}})}},{key:"render",value:function(){return m.a.createElement(d.a,{footerBorder:!1},m.a.createElement("div",{className:"content first-content"},m.a.createElement("div",{className:"index_content_locals"},m.a.createElement("h1",{className:"common_content_title tl index_content_locals_title lightSpeedIn wow"},"Why Locals"),m.a.createElement("div",{className:"common_content_text index_content_locals_text lightSpeedIn wow"},"our unique approach smartly balances short,mid and long lettings to deliver superior earnings",m.a.createElement("br",null),m.a.createElement("br",null),"international track record of delivering superior yields",m.a.createElement("br",null),m.a.createElement("br",null),"Customized pricing algorithm based on rich industry data and market expertise",m.a.createElement("br",null),m.a.createElement("br",null),"Achieve more 5 star reviews with customized welcome packs and 24/7 guest support"))),m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"index_content_area lightSpeedIn wow"},m.a.createElement("div",{className:"index_content_area_img city-swiper"},m.a.createElement("div",{className:"swiper-wrapper"},this.renderCity())),m.a.createElement("div",{className:"index_content_area_action animated pulse"},m.a.createElement("h1",{className:"common_content_title tl"},"Service Area"),m.a.createElement("div",{className:"common_content_text"},m.a.createElement("div",{className:"city"},this.state.active.cityName),m.a.createElement("div",{className:"common_left_btn"},m.a.createElement("div",{className:"wrapper left"},m.a.createElement("div",{className:"circleProgress rightcircle"}))),m.a.createElement("div",{className:"common_right_btn"},m.a.createElement("div",{className:"wrapper right"},m.a.createElement("div",{className:"circleProgress rightcircle"}))))))))}}]),t}(m.a.Component))},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,2]]]);