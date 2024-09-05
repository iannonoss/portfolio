import{Aa as b,Ba as r,Ca as D,Da as B,Ea as N,K as C,R as g,S,Y as k,Z as E,_ as P,ca as p,la as v,qa as O,ra as n,sa as o,ta as l,ua as M,va as T,wa as I,xa as _,ya as f,za as y}from "./chunk-SAP7EUQV.js";function x(){return x=Object.assign?Object.assign.bind():function(a){for(var s=1; s<arguments.length; s++){var t=arguments[s];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e])}return a},x.apply(this,arguments)}var R={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(a){},onComplete:function(a){},preStringTyped:function(a, s){},onStringTyped:function(a, s){},onLastStringBackspaced:function(a){},onTypingPaused:function(a, s){},onTypingResumed:function(a, s){},onReset:function(a){},onStop:function(a, s){},onStart:function(a, s){},onDestroy:function(a){}},J=new(function(){function a(){}var s=a.prototype;return s.load=function(t, e, i){if(t.el=typeof i=="string"?document.querySelector(i):i,t.options=x({},R,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(h){return h.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var d=Array.prototype.slice.apply(t.stringsElement.children),c=d.length;if(c)for(var u=0; u<c; u+=1)t.strings.push(d[u].innerHTML.trim())}for(var m in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[m]=m;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var i=document.createElement("style");i.setAttribute(e,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var i=document.createElement("style");i.setAttribute(e,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},a}()),A=new(function(){function a(){}var s=a.prototype;return s.typeHtmlChars=function(t,e,i){if(i.contentType!=="html")return e;var d=t.substring(e).charAt(0);if(d==="<"||d==="&"){var c;for(c=d==="<"?">":";";t.substring(e+1).charAt(0)!==c&&!(1+ ++e>t.length););e++}return e},s.backSpaceHtmlChars=function(t,e,i){if(i.contentType!=="html")return e;var d=t.substring(e).charAt(0);if(d===">"||d===";"){var c;for(c=d===">"?"<":"&";t.substring(e-1).charAt(0)!==c&&!(--e<0););e--}return e},a}()),L=function(){function a(t,e){J.load(this,e,t),this.begin()}var s=a.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,e){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var d=this.humanizer(this.typeSpeed),c=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=A.typeHtmlChars(t,e,i);var u=0,m=t.substring(e);if(m.charAt(0)==="^"&&/^\^\d+/.test(m)){var h=1;h+=(m=/\d+/.exec(m)[0]).length,u=parseInt(m),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),t=t.substring(0,e)+t.substring(e+h),i.toggleBlinking(!0)}if(m.charAt(0)==="`"){for(;t.substring(e+c).charAt(0)!=="`"&&(c++,!(e+c>t.length)););var w=t.substring(0,e),H=t.substring(w.length+1,e+c),q=t.substring(e+c+1);t=w+H+q,c--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),e>=t.length?i.doneTyping(t,e):i.keepTyping(t,e,c),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},u)},d):this.setPauseStatus(t,e,!0)},s.keepTyping=function(t,e,i){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var d=t.substring(0,e+=i);this.replaceText(d),this.typewrite(t,e)},s.doneTyping=function(t,e){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(t,e)},this.backDelay))},s.backspace=function(t,e){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var d=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=A.backSpaceHtmlChars(t,e,i);var c=t.substring(0,e);if(i.replaceText(c),i.smartBackspace){var u=i.strings[i.arrayPos+1];i.stopNum=u&&c===u.substring(0,e)?e:0}e>i.stopNum?(e--,i.backspace(t,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},d)}else this.setPauseStatus(t,e,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,e,i){this.pause.typewrite=i,this.pause.curString=t,this.pause.curStrPos=e},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},a}();var V=["wrapper"],Y=["*"],F=(()=>{class a{constructor(){this.typeSpeed=30,this.completed=new p,this.preStringTyped=new p,this.stringTyped=new p,this.lastStringBackspaced=new p,this.typingPaused=new p,this.typingResumed=new p,this.reset=new p,this.stopped=new p,this.started=new p,this.destroyed=new p}ngAfterViewInit(){this.typed=new L(this.content.nativeElement.querySelector(".typing"),this.options),this.showCursor!==!1&&this.updateCursorStyle()}toggle(){this.typed.toggle()}stop(){this.typed.stop()}start(){this.typed.start()}destroy(){this.typed.destroy()}doReset(t){this.typed.reset(t)}get options(){let t=d=>()=>d.emit(),e=d=>c=>d.emit(c),i={strings:this.strings??[""],stringsElement:this.stringsElement,typeSpeed:this.typeSpeed,startDelay:this.startDelay,backSpeed:this.backSpeed,smartBackspace:this.smartBackspace,shuffle:this.shuffle,backDelay:this.backDelay,fadeOut:this.fadeOut,fadeOutClass:this.fadeOutClass,fadeOutDelay:this.fadeOutDelay,loop:this.loop,loopCount:this.loopCount,showCursor:this.showCursor,autoInsertCss:this.autoInsertCss,attr:this.attr,bindInputFocusEvents:this.bindInputFocusEvents,contentType:this.contentType,onComplete:t(this.completed),preStringTyped:e(this.preStringTyped),onStringTyped:e(this.stringTyped),onLastStringBackspaced:t(this.lastStringBackspaced),onTypingPaused:e(this.typingPaused),onTypingResumed:e(this.typingResumed),onReset:t(this.reset),onStop:e(this.stopped),onStart:e(this.started),onDestroy:t(this.destroyed)};return Object.keys(i).forEach(d=>{i[d]===void 0&&delete i[d]}),i}updateCursorStyle(){let t=getComputedStyle(this.content.nativeElement.querySelector(".typing")),e=this.content.nativeElement.querySelector(".typed-cursor").style;e.fontSize=t.fontSize,e.color=this.cursorColor||t.color}ngOnChanges(t){this.typed&&(this.typed.destroy(),this.ngAfterViewInit())}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=g({type:a,selectors:[["ngx-typed-js"]],viewQuery:function(t,e){if(t&1&&f(V,7),t&2){let i;y(i=b())&&(e.content=i.first)}},inputs:{cursorColor:"cursorColor",strings:"strings",stringsElement:"stringsElement",typeSpeed:"typeSpeed",startDelay:"startDelay",backSpeed:"backSpeed",smartBackspace:"smartBackspace",shuffle:"shuffle",backDelay:"backDelay",fadeOut:"fadeOut",fadeOutClass:"fadeOutClass",fadeOutDelay:"fadeOutDelay",loop:"loop",loopCount:"loopCount",showCursor:"showCursor",cursorChar:"cursorChar",autoInsertCss:"autoInsertCss",attr:"attr",bindInputFocusEvents:"bindInputFocusEvents",contentType:"contentType"},outputs:{completed:"completed",preStringTyped:"preStringTyped",stringTyped:"stringTyped",lastStringBackspaced:"lastStringBackspaced",typingPaused:"typingPaused",typingResumed:"typingResumed",reset:"reset",stopped:"stopped",started:"started",destroyed:"destroyed"},features:[k],ngContentSelectors:Y,decls:3,vars:0,consts:[["wrapper",""]],template:function(t,e){t&1&&(I(),n(0,"div",null,0),_(2),o())},styles:["[_nghost-%COMP%] > .typing[_ngcontent-%COMP%]{display:inline}"]}),a})(),j=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=S({type:a}),a.\u0275inj=C({imports:[[]]}),a})();var U=["portfolio"],W=()=>["Mattia Iannone","Front-End Developer","Developer"],z=class a{portfolio;email="iannonemattia7@gmail.com";responsiveOn;ngOnInit(){this.responsiveOn=window?.innerWidth>=768}viewPortfolio(){this.portfolio.nativeElement.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["app-home"]],viewQuery:function(t,e){if(t&1&&f(U,5),t&2){let i;y(i=b())&&(e.portfolio=i.first)}},standalone:!0,features:[B],decls:219,vars:6,consts:[["portfolio",""],[2,"background","rgb(9,9,121)","background","linear-gradient(103deg, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)"],["id","home",1,"bg-home","rtl-personal-hero","bg-light","d-flex","align-items-center",2,"background","url('./foto_portfolio.png') bottom right"],[1,"bg-overlay"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-8","col-md-9","p-4"],[1,"title-heading","mt-4"],[1,"display-3","fw-bold","mb-3","text-white-50"],[3,"strings","shuffle","typeSpeed","loop"],[1,"element","typing","text-primary"],[1,"para-desc","text-white-50"],[1,"mt-4","pt-2"],[1,"btn","btn-primary","mt-2","me-2",3,"click"],[1,"uil","uil-camera"],[1,"section",2,"background-color","#d3d3d333"],[1,"col-lg-12"],[1,"card","public-profile","border-0","rounded","shadow",2,"z-index","1"],[1,"card-body"],[1,"col-lg-2","col-md-3","text-md-start","text-center"],["src","./img_1.png","alt","",1,"avatar","avatar-large","rounded-circle","shadow","d-block","mx-auto"],[1,"col-lg-10","col-md-9"],[1,"row","align-items-end"],[1,"col-md-7","text-md-start","text-center","mt-4","mt-sm-0"],[1,"title","mb-0"],[1,"text-muted","h6","me-2"],[1,"list-inline","mb-0","mt-3"],[1,"list-inline-item","me-2"],["href","https://www.instagram.com/iannonss/","title","Instagram",1,"text-muted"],[1,"bi","bi-instagram"],[1,"list-inline-item"],["href","https://www.linkedin.com/in/mattia-iannone-9105b025b/","title","Linkedin",1,"text-muted"],[1,"bi","bi-linkedin"],["href","https://github.com/iannonoss","title","GitHub",1,"text-muted"],[1,"bi","bi-github"],["href","https://gitlab.com/IannoneM","title","GitHub",1,"text-muted"],[1,"bi","bi-gitlab"],[1,"row"],[1,"col-md-6","mt-4"],[1,"mt-4","p-3","card","border-0","shadow"],[1,"d-flex","align-items-center"],[1,"bi","col-2","bi-envelope"],[1,"flex-1","col-10"],[1,"text-primary","mb-0"],[1,"text-muted","text-decoration-none"],[1,"d-flex","align-items-center","mt-3"],[1,"bi","col-2","bi-bookmark"],[1,"bi","col-2","bi-globe"],[1,"bi","col-2","bi-cake2"],[1,"text-muted","mb-0","text-decoration-none"],[1,"bi","col-2","bi-geo"],[1,"col-md-6","mt-4","pt-2","pt-sm-0"],[1,"d-flex","key-feature","align-items-center","p-3","rounded","shadow","mt-4","bg-white"],["src","./razzo_democom_1000px.png","alt","",1,"avatar","avatar-ex-sm"],[1,"flex-1","content","ms-3"],[1,"text-muted","mb-0"],["href","https://www.democom.it/",1,"text-primary"],[1,"section"],[1,"col-md-6"],[1,"section-title"],[1,"title"],[1,"text-primary","mb-4"],["id","myTab","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","ita-tab","data-bs-toggle","tab","data-bs-target","#ita","type","button","role","tab","aria-controls","ita","aria-selected","true",1,"nav-link","active","d-flex","align-items-center"],["src","./it.svg","width","20","height","20",1,"img-fluid","ms-1"],["id","eng-tab","data-bs-toggle","tab","data-bs-target","#eng","type","button","role","tab","aria-controls","eng","aria-selected","false",1,"nav-link","d-flex","align-items-center"],["src","./gb.svg","width","20","height","20",1,"img-fluid","ms-1"],["id","myTabContent",1,"tab-content"],["id","ita","role","tabpanel","aria-labelledby","ita-tab",1,"tab-pane","fade","show","active"],[1,"text-muted","p-2"],["id","eng","role","tabpanel","aria-labelledby","eng-tab",1,"tab-pane","fade"],[1,"mt-4"],["href","mailto:iannonemattia7@gmail.com",1,"btn","btn-primary","mouse-down"],[1,"mdi","mdi-phone"],[1,"col-md-6","mt-4","mt-sm-0","pt-2","pt-sm-0"],[1,"ms-md-4"],[1,"progress-box"],[1,"title","text-muted"],[1,"progress"],[1,"progress-bar","position-relative","bg-primary",2,"width","60%"],[1,"progress-box","mt-4"],[1,"progress-bar","position-relative","bg-primary",2,"width","50%"],[1,"progress-bar","position-relative","bg-primary",2,"width","75%"],[1,"progress-bar","position-relative","bg-primary",2,"width","55%"],[1,"progress-bar","position-relative","bg-primary",2,"width","80%"],[1,"progress-bar","position-relative","bg-primary",2,"width","30%"],[1,"bg-home","rtl-personal-hero","bg-light","d-flex","align-items-center",2,"background","rgb(0,32,247)","background","linear-gradient(150deg, rgba(0,32,247,1) 0%, rgba(20,120,163,1) 27%, rgba(255,255,255,1) 100%)","height","-webkit-fill-available"],[1,"bg-overlay","d-grid",2,"position","unset"],[1,"p-5"],[1,"col-12"],[1,"title-heading"],[1,"heading","text-white-50","m-2","justify-content-center","d-flex","mb-5"],[1,"row","justify-content-between"],[1,"col-md-4","col-sm-12"],[1,"card","shadow","rounded","border-0","overflow-hidden","card-custom","my-2"],["src","./Pilla.webp","alt","",1,"img-fluid",2,"height","15rem","object-fit","cover"],[1,"card-body","text-white-50",2,"height","12rem"],[1,"card-title"],["src","./pesche.jpeg","alt","",1,"img-fluid",2,"height","15rem","object-fit","cover"],["src","./unicusano.jpg","alt","",1,"img-fluid",2,"height","15rem","object-fit","cover"]],template:function(t,e){if(t&1){let i=M();n(0,"div",1)(1,"section",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h1",8),r(8,"Here I'm "),l(9,"br"),n(10,"ngx-typed-js",9),l(11,"span",10),o()(),n(12,"p",11),r(13,"Hi, I\u2019m Mattia Iannone, a developer with an immense curiosity and dedication to learning. I like to immerse myself in the world of software development with enthusiasm. In the future, I plan to perfect my skills. I hope to share something important with you! \u{1F60A}\u{1F680}"),o(),n(14,"div",12)(15,"a",13),T("click",function(){return E(i),P(e.viewPortfolio())}),l(16,"i",14),r(17," View Portfolio"),o()()()()()()()()(),n(18,"section",15)(19,"div",4)(20,"div",16)(21,"div",17)(22,"div",18)(23,"div",5)(24,"div",19,0),l(26,"img",20),o(),n(27,"div",21)(28,"div",22)(29,"div",23)(30,"h3",24),r(31,"Mattia Iannone"),o(),n(32,"small",25),r(33,"Front-End developer"),o(),n(34,"ul",26)(35,"li",27)(36,"a",28),l(37,"i",29),r(38,"iannonss "),o()(),n(39,"li",30)(40,"a",31),l(41,"i",32),r(42,"Mattia Iannone "),o()(),n(43,"li",30)(44,"a",33),l(45,"i",34),r(46,"iannonoss "),o()(),n(47,"li",30)(48,"a",35),l(49,"i",36),r(50,"IannoneM "),o()()()()()()()()()(),n(51,"div",37)(52,"div",38)(53,"h5"),r(54,"Personal Details :"),o(),n(55,"div",39)(56,"div",40),l(57,"i",41),n(58,"div",42)(59,"h6",43),r(60,"Email :"),o(),n(61,"a",44),r(62),o()()(),n(63,"div",45),l(64,"i",46),n(65,"div",42)(66,"h6",43),r(67,"Skills :"),o(),n(68,"a",44),r(69,"html"),o(),r(70,", "),n(71,"a",44),r(72,"css"),o(),r(73,", "),n(74,"a",44),r(75,"js, ts"),o(),r(76,", "),n(77,"a",44),r(78,"Angular"),o(),r(79,", "),n(80,"a",44),r(81,"& a good listener \u{1F308}"),o()()(),n(82,"div",45),l(83,"i",47),n(84,"div",42)(85,"h6",43),r(86,"Language :"),o(),n(87,"a",44),r(88,"Italian mother tongue"),o(),r(89,", "),n(90,"a",44),r(91,"average knowledge of English, spoken and written"),o()()(),n(92,"div",45),l(93,"i",48),n(94,"div",42)(95,"h6",43),r(96,"Birthday :"),o(),n(97,"p",49),r(98,"29nd May, 1998"),o()()(),n(99,"div",45),l(100,"i",50),n(101,"div",42)(102,"h6",43),r(103,"Location :"),o(),n(104,"a",44),r(105,"Campobasso, Molise, Italy"),o()()()()(),n(106,"div",51)(107,"h5"),r(108,"Experience :"),o(),n(109,"div",52),l(110,"img",53),n(111,"div",54)(112,"h4",24),r(113,"Front-end Developer"),o(),n(114,"p",55),r(115,"2 Years Experience"),o(),n(116,"p",55)(117,"a",56),r(118,"Democom srl"),o()()()()()()()(),n(119,"section",57)(120,"div",4)(121,"div",5)(122,"div",58)(123,"div",59)(124,"h4",60),r(125,"About Me"),o(),n(126,"h6",61),r(127,"I'm passionate front-end developer"),o(),n(128,"ul",62)(129,"li",63)(130,"button",64),r(131,"ITA "),l(132,"img",65),o()(),n(133,"li",63)(134,"button",66),r(135,"ENG "),l(136,"img",67),o()()(),n(137,"div",68)(138,"div",69)(139,"p",70),r(140,"Fin dalle scuole superiori, ho scoperto la mia passione per la programmazione. Grazie all'istituto secondario superiore, ho intrapreso i miei primi passi nel mondo del codice, iniziando con linguaggi come C, HTML e PHP. Questo interesse si \xE8 trasformato in una vera e propria vocazione, che mi ha spinto a proseguire i miei studi presso la facolt\xE0 di Informatica. Dopo aver conseguito la laurea, ho avuto l'opportunit\xE0 di mettere in pratica le competenze acquisite, trovando lavoro gi\xE0 negli ultimi mesi del mio percorso universitario. Da due anni, lavoro come sviluppatore front-end, specializzandomi in Angular, e quando possibile, sviluppo skills secondarie utili per l'albiente lavorativo in cui opero. Affronto tutti i giorni nuove sfide di sviluppo con voglia e dedizione ed ho una grande voglia di crescere e di scoprire nuovi approcci e nuovi sviluppi dell'informatica e dello sviluppo. "),o()(),n(141,"div",71)(142,"p",70),r(143,"Since high school, I discovered my passion for programming. Thanks to secondary school, I took my first steps in the world of code, starting with languages \u200B\u200Bsuch as C, HTML and PHP. This interest turned into a real vocation, which pushed me to continue my studies at the Faculty of Computer Science. After graduating, I had the opportunity to put into practice the skills acquired, finding work already in the last months of my university career. For two years, I have been working as a front-end developer, specializing in Angular, and when possible, I develop secondary skills useful for the work environment in which I operate. I face new development challenges every day with desire and dedication and I have a great desire to grow and discover new approaches and new developments in computer science and development. "),o()(),n(144,"div",72)(145,"a",73),l(146,"i",74),r(147," Contact Me"),o()()()()(),n(148,"div",75)(149,"div",76)(150,"div",77)(151,"h6",78),r(152,"C"),o(),n(153,"div",79),l(154,"div",80),o()(),n(155,"div",81)(156,"h6",78),r(157,"MYSQL"),o(),n(158,"div",79),l(159,"div",82),o()(),n(160,"div",81)(161,"h6",78),r(162,"Angular / TypeScript / JavaScript"),o(),n(163,"div",79),l(164,"div",83),o()(),n(165,"div",81)(166,"h6",78),r(167,"Java"),o(),n(168,"div",79),l(169,"div",84),o()(),n(170,"div",81)(171,"h6",78),r(172,"HTML"),o(),n(173,"div",79),l(174,"div",85),o()(),n(175,"div",81)(176,"h6",78),r(177,"CSS"),o(),n(178,"div",79),l(179,"div",83),o()(),n(180,"div",81)(181,"h6",78),r(182,"Docker"),o(),n(183,"div",79),l(184,"div",86),o()()()()()()(),n(185,"section",87)(186,"div",88)(187,"div",89)(188,"div",4)(189,"div",90)(190,"div",91)(191,"h2",92),r(192," Chronology of studies "),o()()()(),n(193,"div",4)(194,"div",93)(195,"div",94)(196,"div",95),l(197,"img",96),n(198,"div",97)(199,"h5",98),r(200,'Istituto di Istruzione Secondaria Superiore "Leopoldo Pilla"'),o(),n(201,"p"),r(202,"I followed the corporate information systems direction"),o()()()(),n(203,"div",94)(204,"div",95),l(205,"img",99),n(206,"div",97)(207,"h5",98),r(208,"Universit\xE0 degli Studi del Molise"),o(),n(209,"p"),r(210,"I graduated from the faculty of computer science"),o()()()(),n(211,"div",94)(212,"div",95),l(213,"img",100),n(214,"div",97)(215,"h5",98),r(216,"Universit\xE0 Niccol\xF2 Cusano"),o(),n(217,"p"),r(218,"I am currently studying for a Master Data science: information & knowledge management for data scientist"),o()()()()()()()()()}t&2&&(v(10),O("strings",N(5,W))("shuffle",!0)("typeSpeed",80)("loop",!0),v(52),D(e.email))},dependencies:[j,F],styles:[".bg-home[_ngcontent-%COMP%]{height:100vh;-ms-flex-item-align:center;align-self:center;position:relative;background-position:right;background-repeat:no-repeat!important;background-size:contain!important;background-color:transparent!important}.btn-custom[_ngcontent-%COMP%]{background-color:#3d6a96;color:#fff}.btn-custom[_ngcontent-%COMP%]:is(:hover, [_ngcontent-%COMP%]:active){background-color:#fff;color:#3d6a96;border:solid 1px #3D6A96}.padding-bottom-d[_ngcontent-%COMP%]{padding-bottom:15vh}.section[_ngcontent-%COMP%]{padding:50px 0;position:relative}.progress[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#2f55d4;-webkit-transition:width .6s ease;transition:width .6s ease}.progress-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px}.progress-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{height:8px;overflow:visible;background:#e9ecef}.progress-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{position:absolute;top:-32px;left:-15px;font-size:13px}.progress-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-radius:6px;-webkit-animation:animate-positive 3s;animation:animate-positive 3s;overflow:visible!important}.avatar.avatar-ex-sm[_ngcontent-%COMP%]{max-height:25px}.rounded[_ngcontent-%COMP%]{border-radius:6px!important}.avatar.avatar-large[_ngcontent-%COMP%]{height:140px;width:140px;object-fit:contain;background-color:#2f4f4f}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}.bi[_ngcontent-%COMP%]{display:inline-block;vertical-align:-.125em;fill:currentcolor;color:#d3d3d3;height:2rem;width:2rem}.bg-overlay[_ngcontent-%COMP%]{background-color:#3c4858b3;position:absolute;inset:0;width:100%;height:100%;display:flex;align-items:center}.text-white-50[_ngcontent-%COMP%]{--bs-text-opacity: 1;color:#ffffff80!important}.gallery-col[_ngcontent-%COMP%]{top:0;visibility:visible;will-change:transform;left:0;opacity:1;transition-duration:.25s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,opacity}.work-container.work-grid[_ngcontent-%COMP%]:hover{-webkit-box-shadow:0 0 3px rgba(60,72,88,.15);box-shadow:0 0 3px #3c485826}.work-container.work-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-transition:all .5s ease;transition:all .5s ease}.tobii-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.work-container.work-creative[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%], .work-container.work-grid[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]{-webkit-transform:translateY(0);transform:translateY(0)}.work-container.work-creative[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .work-container.work-grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;left:0;-webkit-transform:translateY(150px);transform:translateY(150px);overflow:hidden;-webkit-transition:all .5s ease;transition:all .5s ease;z-index:1}.work-container.work-grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:#fff}.card-custom[_ngcontent-%COMP%]{background-color:#fff0;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.title-heading[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:45px}"]})};export{z as HomeComponent};
