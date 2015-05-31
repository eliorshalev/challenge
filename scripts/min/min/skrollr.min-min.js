!function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,Y(),le=this,r=r||{},me=r.constants||{},r.easing)for(var n in r.easing)X[n]=r.easing[n];Te=r.edgeStrategy||"set",fe={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ue=r.forceHeight!==!1,ue&&(ze=r.scale||1),pe=r.mobileDeceleration||x,ge=r.smoothScrolling!==!1,ve=r.smoothScrollingDuration||A,he={targetTop:le.getScrollTop()},Ke=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Ke?(ce=t.getElementById(r.skrollrBody||E),ce&&ie(),j(),De(o,[y,S],[T])):De(o,[y,b],[T]),le.refresh(),ke(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Be||e!==$e)&&(Be=t,$e=e,_e=!0)});var i=R();return function l(){J(),Se=i(l)}(),le}var o,a,i={get:function(){return le},init:function(e){return le||new n(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E="skrollr-body",A=200,F="start",C="end",H="center",D="bottom",I="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,N=/^\s+|\s+$/g,O=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^(@?[a-z\-]+)\[(\w+)\]$/,q=/-([a-z0-9_])/g,L=function(e,t){return t.toUpperCase()},M=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,B=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,G="",K="",Y=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(G=n.match(e)||+n==n&&t[n].match(e))break;if(!G)return G=K="",r;G=G[0],"-"===G.slice(0,1)?(K=G,G={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[G]):K="-"+G.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[G.toLowerCase()+"RequestAnimationFrame"],r=Ne();return(Ke||!t)&&(t=function(t){var n=Ne()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Ne(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[G.toLowerCase()+"CancelAnimationFrame"];return(Ke||!t)&&(t=function(t){return e.clearTimeout(t)}),t},X={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,se=[],Ge=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=ge,f=Te,u=!1;if(a&&I in i&&delete i[I],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(O);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(q,L)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==C?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===C?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*ze))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&I in i?(x=i[I],k=se[x].styleAttr,w=se[x].classAttr):(x=i[I]=Ge++,k=i.style.cssText,w=He(i)),se[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},De(i,[d],[])}}}for(Ae(),n=0,o=e.length;o>n;n++){var E=se[e[n][I]];E!==r&&(Q(E),te(E))}return le},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===H&&(i-=n/2),r===D?i+=l:r===H&&(i+=l/2),i+=le.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Ne(),o=le.getScrollTop();return de={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:X[t.easing||k],done:t.done},de.topDiff||(de.done&&de.done.call(le,!1),de=r),le},n.prototype.stopAnimateTo=function(){de&&de.done&&de.done.call(le,!0),de=r},n.prototype.isAnimatingTo=function(){return!!de},n.prototype.isMobile=function(){return Ke},n.prototype.setScrollTop=function(t,r){return ye=r===!0,Ke?Ye=s.min(s.max(t,0),Ve):e.scrollTo(0,t),le},n.prototype.getScrollTop=function(){return Ke?Ye:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ve},n.prototype.on=function(e,t){return fe[e]=t,le},n.prototype.off=function(e){return delete fe[e],le},n.prototype.destroy=function(){var e=U();e(Se),xe(),De(o,[T],[y,b,S]);for(var t=0,n=se.length;n>t;t++)ae(se[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",ce&&i.setStyle(ce,"transform","none"),le=r,ce=r,fe=r,ue=r,Ve=0,ze=1,me=r,pe=r,qe="down",Le=-1,$e=0,Be=0,_e=!1,de=r,ge=r,ve=r,he=r,ye=r,Ge=0,Te=r,Ke=!1,Ye=0,be=r};var j=function(){var n,i,l,c,d,g,v,h,y,T,b,S;ke(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),le.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:P.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,le.setScrollTop(Ye-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!P.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/pe),F=E*A+.5*pe*A*A,C=le.getScrollTop()-F,H=0;C>Ve?(H=(Ve-C)/F,C=Ve):0>C&&(H=-C/F,C=0),A*=1-H,le.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},W=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=Fe();for(c=0,f=se.length;f>c;c++)for(e=se[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ae(t),l.frame=le.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ae(t,!0)),l.frame+=m,ue&&!l.isEnd&&l.frame>Ve&&(Ve=l.frame);for(Ve=s.max(Ve,Ce()),c=0,f=se.length;f>c;c++){for(e=se[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ve-l.offset+m);e.keyFrames.sort(Oe)}},Z=function(e,t){for(var r=0,n=se.length;n>r;r++){var o,a,s=se[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(De(c,[g],[h,v]),k&&w>-1&&(Ee(c,p.eventType,qe),s.lastFrameIndex=-1)):(De(c,[h],[g,v]),k&&m>w&&(Ee(c,y.eventType,qe),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ae(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=oe(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(De(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=ne(A.props[o].value,F.props[o].value,C),a=oe(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===qe?Ee(c,A.eventType,qe):Ee(c,F.eventType,qe),s.lastFrameIndex=E);break}}},J=function(){_e&&(_e=!1,Ae());var e,t,n=le.getScrollTop(),o=Ne();if(de)o>=de.endTime?(n=de.targetTop,e=de.done,de=r):(t=de.easing((o-de.startTime)/de.duration),n=0|de.startTop+t*de.topDiff),le.setScrollTop(n,!0);else if(!ye){var a=he.targetTop-n;a&&(he={startTop:Le,topDiff:n-Le,targetTop:n,startTime:Me,endTime:Me+ve}),he.endTime>=o&&(t=X.sqrt((o-he.startTime)/ve),n=0|he.startTop+t*he.topDiff)}if(Ke&&ce&&i.setStyle(ce,"transform","translate(0, "+-Ye+"px) "+be),ye||Le!==n){qe=n>Le?"down":Le>n?"up":qe,ye=!1;var l={curTop:n,lastTop:Le,maxTop:Ve,direction:qe},s=fe.beforerender&&fe.beforerender.call(le,l);s!==!1&&(Z(n,le.getScrollTop()),Le=n,fe.render&&fe.render.call(le,l)),e&&e.call(le,!1)}Me=o},Q=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?ee(o):[o.slice(1)],s[a]={value:o,easing:X[n]};l.props=s}},ee=function(e){var t=[];return B.lastIndex=0,e=e.replace(B,function(e){return e.replace(M,function(e){return 100*(e/255)+"%"})}),K&&(_.lastIndex=0,e=e.replace(_,function(e){return K+e})),e=e.replace(M,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},te=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)re(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)re(e.keyFrames[t],n)},re=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},ne=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},oe=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},ae=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=se[n[I]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,De(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=He(n),n.style.cssText=r.styleAttr,De(n,r.classAttr)))},ie=function(){be="translateZ(0)",i.setStyle(ce,"transform",be);var e=c(ce),t=e.getPropertyValue("transform"),r=e.getPropertyValue(K+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(be="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,L).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{G&&(n[G+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var le,se,ce,fe,ue,me,pe,de,ge,ve,he,ye,Te,be,Se,ke=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Re.push({element:t,name:a,listener:n})},we=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},xe=function(){for(var e,t=0,r=Re.length;r>t;t++)e=Re[t],we(e.element,e.name,e.listener);Re=[]},Ee=function(e,t,r){fe.keyframe&&fe.keyframe.call(le,e,t,r)},Ae=function(){var e=le.getScrollTop();Ve=0,ue&&!Ke&&(a.style.height=""),W(),ue&&!Ke&&(a.style.height=Ve+o.clientHeight+"px"),Ke?le.setScrollTop(s.min(le.getScrollTop(),Ve)):le.setScrollTop(e,!0),ye=!0},Fe=function(){var e,t,r=o.clientHeight,n={};for(e in me)t=me[e],"function"==typeof t?t=t.call(le):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ce=function(){var e,t=0;return ce&&(t=s.max(ce.offsetHeight,ce.scrollHeight)),e=s.max(t,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight),e-o.clientHeight},He=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},De=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Pe(i).replace(Pe(o[l])," ");i=Ie(i);for(var c=0,f=n.length;f>c;c++)-1===Pe(i).indexOf(Pe(n[c]))&&(i+=" "+n[c]);t[a]=Ie(i)},Ie=function(e){return e.replace(N,"")},Pe=function(e){return" "+e+" "},Ne=Date.now||function(){return+new Date},Oe=function(e,t){return e.frame-t.frame},Ve=0,ze=1,qe="down",Le=-1,Me=Ne(),$e=0,Be=0,_e=!1,Ge=0,Ke=!1,Ye=0,Re=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i}(window,document);