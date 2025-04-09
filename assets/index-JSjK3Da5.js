const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BSaw_OTI.js","assets/AboutView-BWRshLF2.css","assets/ProductsView-epOWcW7c.js","assets/ProductsView-Dfuyhk7G.css","assets/ProductDetailView-Btmpl4rA.js","assets/ProductDetailView--OsUEuw_.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jt(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const nt={},Xs=[],Zt=()=>{},Or=()=>!1,Ss=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vc=t=>t.startsWith("onUpdate:"),it=Object.assign,Ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$E=Object.prototype.hasOwnProperty,ft=(t,e)=>$E.call(t,e),De=Array.isArray,$s=t=>cr(t)==="[object Map]",xs=t=>cr(t)==="[object Set]",cf=t=>cr(t)==="[object Date]",Ag=t=>cr(t)==="[object RegExp]",qe=t=>typeof t=="function",Ke=t=>typeof t=="string",En=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",Sc=t=>(gt(t)||qe(t))&&qe(t.then)&&qe(t.catch),wh=Object.prototype.toString,cr=t=>wh.call(t),Cg=t=>cr(t).slice(8,-1),ga=t=>cr(t)==="[object Object]",xc=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=Jt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rg=Jt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),yc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qE=/-(\w)/g,bt=yc(t=>t.replace(qE,(e,n)=>n?n.toUpperCase():"")),jE=/\B([A-Z])/g,cn=yc(t=>t.replace(jE,"-$1").toLowerCase()),ys=yc(t=>t.charAt(0).toUpperCase()+t.slice(1)),qs=yc(t=>t?`on${ys(t)}`:""),on=(t,e)=>!Object.is(t,e),js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ih=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qo=t=>{const e=Ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Yd;const _a=()=>Yd||(Yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),YE=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function KE(t){return YE.test(t)?`__props.${t}`:`__props[${JSON.stringify(t)}]`}function ZE(t,e){return t+JSON.stringify(e,(n,i)=>typeof i=="function"?i.toString():i)}const JE={TEXT:1,1:"TEXT",CLASS:2,2:"CLASS",STYLE:4,4:"STYLE",PROPS:8,8:"PROPS",FULL_PROPS:16,16:"FULL_PROPS",NEED_HYDRATION:32,32:"NEED_HYDRATION",STABLE_FRAGMENT:64,64:"STABLE_FRAGMENT",KEYED_FRAGMENT:128,128:"KEYED_FRAGMENT",UNKEYED_FRAGMENT:256,256:"UNKEYED_FRAGMENT",NEED_PATCH:512,512:"NEED_PATCH",DYNAMIC_SLOTS:1024,1024:"DYNAMIC_SLOTS",DEV_ROOT_FRAGMENT:2048,2048:"DEV_ROOT_FRAGMENT",CACHED:-1,"-1":"CACHED",BAIL:-2,"-2":"BAIL"},QE={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"NEED_HYDRATION",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},eS={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"},tS={STABLE:1,1:"STABLE",DYNAMIC:2,2:"DYNAMIC",FORWARDED:3,3:"FORWARDED"},nS={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},iS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Ph=Jt(iS),sS=Ph,Kd=2;function wg(t,e=0,n=t.length){if(e=Math.max(0,Math.min(e,t.length)),n=Math.max(0,Math.min(n,t.length)),e>n)return"";let i=t.split(/(\r?\n)/);const s=i.filter((a,l)=>l%2===1);i=i.filter((a,l)=>l%2===0);let r=0;const o=[];for(let a=0;a<i.length;a++)if(r+=i[a].length+(s[a]&&s[a].length||0),r>=e){for(let l=a-Kd;l<=a+Kd||n>r;l++){if(l<0||l>=i.length)continue;const c=l+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${i[l]}`);const u=i[l].length,f=s[l]&&s[l].length||0;if(l===a){const h=e-(r-(u+f)),d=Math.max(1,n>r?u-h:n-e);o.push("   |  "+" ".repeat(h)+"^".repeat(d))}else if(l>a){if(n>r){const h=Math.max(Math.min(n-r,u),1);o.push("   |  "+"^".repeat(h))}r+=u+f}}break}return o.join(`
`)}function ur(t){if(De(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ke(i)?Nh(i):ur(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ke(t)||gt(t))return t}const rS=/;(?![^(]*\))/g,oS=/:([^]+)/,aS=/\/\*[^]*?\*\//g;function Nh(t){const e={};return t.replace(aS,"").split(rS).forEach(n=>{if(n){const i=n.split(oS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lS(t){if(!t)return"";if(Ke(t))return t;let e="";for(const n in t){const i=t[n];if(Ke(i)||typeof i=="number"){const s=n.startsWith("--")?n:cn(n);e+=`${s}:${i};`}}return e}function lo(t){let e="";if(Ke(t))e=t;else if(De(t))for(let n=0;n<t.length;n++){const i=lo(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ig(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ke(e)&&(t.class=lo(e)),n&&(t.style=ur(n)),t}const cS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",uS="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",fS="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",hS="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Pg=Jt(cS),Ng=Jt(uS),Lg=Jt(fS),Dg=Jt(hS),Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=Jt(Og),dS=Jt(Og+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Lh(t){return!!t||t===""}const pS=/[>/="'\u0009\u000a\u000c\u0020]/,lu={};function mS(t){if(lu.hasOwnProperty(t))return lu[t];const e=pS.test(t);return e&&console.error(`unsafe attribute name: ${t}`),lu[t]=!e}const gS={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},_S=Jt("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),vS=Jt("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),ES=Jt("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");function SS(t){if(t==null)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"}const xS=/["'&<>]/;function yS(t){const e=""+t,n=xS.exec(e);if(!n)return e;let i="",s,r,o=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#39;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}o!==r&&(i+=e.slice(o,r)),o=r+1,i+=s}return o!==r?i+e.slice(o,r):i}const MS=/^-?>|<!--|-->|--!>|<!-$/g;function TS(t){return t.replace(MS,"")}const Fg=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function bS(t,e){return t.replace(Fg,n=>e?n==='"'?'\\\\\\"':`\\\\${n}`:`\\${n}`)}function AS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ui(t[i],e[i]);return n}function Ui(t,e){if(t===e)return!0;let n=cf(t),i=cf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=En(t),i=En(e),n||i)return t===e;if(n=De(t),i=De(e),n||i)return n&&i?AS(t,e):!1;if(n=gt(t),i=gt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ui(t[o],e[o]))return!1}}return String(t)===String(e)}function va(t,e){return t.findIndex(n=>Ui(n,e))}const Bg=t=>!!(t&&t.__v_isRef===!0),as=t=>Ke(t)?t:t==null?"":De(t)||gt(t)&&(t.toString===wh||!qe(t.toString))?Bg(t)?as(t.value):JSON.stringify(t,kg,2):String(t),kg=(t,e)=>Bg(e)?kg(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[cu(i,r)+" =>"]=s,n),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cu(n))}:En(e)?cu(e):gt(e)&&!De(e)&&!ga(e)?String(e):e,cu=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t},CS=Object.freeze(Object.defineProperty({__proto__:null,EMPTY_ARR:Xs,EMPTY_OBJ:nt,NO:Or,NOOP:Zt,PatchFlagNames:QE,PatchFlags:JE,ShapeFlags:eS,SlotFlags:tS,camelize:bt,capitalize:ys,cssVarNameEscapeSymbolsRE:Fg,def:Ih,escapeHtml:yS,escapeHtmlComment:TS,extend:it,genCacheKey:ZE,genPropsAccessExp:KE,generateCodeFrame:wg,getEscapedCssVarName:bS,getGlobalThis:_a,hasChanged:on,hasOwn:ft,hyphenate:cn,includeBooleanAttr:Lh,invokeArrayFns:js,isArray:De,isBooleanAttr:dS,isBuiltInDirective:Rg,isDate:cf,isFunction:qe,isGloballyAllowed:Ph,isGloballyWhitelisted:sS,isHTMLTag:Pg,isIntegerKey:xc,isKnownHtmlAttr:_S,isKnownMathMLAttr:ES,isKnownSvgAttr:vS,isMap:$s,isMathMLTag:Lg,isModelListener:vc,isObject:gt,isOn:Ss,isPlainObject:ga,isPromise:Sc,isRegExp:Ag,isRenderableAttrValue:SS,isReservedProp:Ni,isSSRSafeAttrName:mS,isSVGTag:Ng,isSet:xs,isSpecialBooleanAttr:Ug,isString:Ke,isSymbol:En,isVoidTag:Dg,looseEqual:Ui,looseIndexOf:va,looseToNumber:$o,makeMap:Jt,normalizeClass:lo,normalizeProps:Ig,normalizeStyle:ur,objectToString:wh,parseStringStyle:Nh,propsToAttrMap:gS,remove:Ec,slotFlagsText:nS,stringifyStyle:lS,toDisplayString:as,toHandlerKey:qs,toNumber:qo,toRawType:Cg,toTypeString:cr},Symbol.toStringTag,{value:"Module"}));/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class Dh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function RS(t){return new Dh(t)}function Vg(){return mn}function wS(t,e=!1){mn&&mn.cleanups.push(t)}let Tt;const uu=new WeakSet;class jo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uu.has(this)&&(uu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zd(this),Gg(this);const e=Tt,n=ei;Tt=this,ei=!0;try{return this.fn()}finally{Wg(this),Tt=e,ei=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fh(e);this.deps=this.depsTail=void 0,Zd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uf(this)&&this.run()}get dirty(){return uf(this)}}let Hg=0,Uo,Fo;function zg(t,e=!1){if(t.flags|=8,e){t.next=Fo,Fo=t;return}t.next=Uo,Uo=t}function Oh(){Hg++}function Uh(){if(--Hg>0)return;if(Fo){let e=Fo;for(Fo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Uo;){let e=Uo;for(Uo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Gg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Fh(i),IS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function uf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yo))return;t.globalVersion=Yo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uf(t)){t.flags&=-3;return}const n=Tt,i=ei;Tt=t,ei=!0;try{Gg(t);const s=t.fn(t._value);(e.version===0||on(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Tt=n,ei=i,Wg(t),t.flags&=-3}}function Fh(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Fh(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function IS(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function PS(t,e){t.effect instanceof jo&&(t=t.effect.fn);const n=new jo(t);e&&it(n,e);try{n.run()}catch(s){throw n.stop(),s}const i=n.run.bind(n);return i.effect=n,i}function NS(t){t.effect.stop()}let ei=!0;const $g=[];function Ms(){$g.push(ei),ei=!1}function Ts(){const t=$g.pop();ei=t===void 0?!0:t}function Zd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Tt;Tt=void 0;try{e()}finally{Tt=n}}}let Yo=0;class LS{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Tt||!ei||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new LS(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,qg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=i)}return n}trigger(e){this.version++,Yo++,this.notify(e)}notify(e){Oh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uh()}}}function qg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $l=new WeakMap,Ys=Symbol(""),ff=Symbol(""),Ko=Symbol("");function an(t,e,n){if(ei&&Tt){let i=$l.get(t);i||$l.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Mc),s.map=i,s.key=n),s.track()}}function bi(t,e,n,i,s,r){const o=$l.get(t);if(!o){Yo++;return}const a=l=>{l&&l.trigger()};if(Oh(),e==="clear")o.forEach(a);else{const l=De(t),c=l&&xc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ko||!En(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ko)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ys)),$s(t)&&a(o.get(ff)));break;case"delete":l||(a(o.get(Ys)),$s(t)&&a(o.get(ff)));break;case"set":$s(t)&&a(o.get(Ys));break}}Uh()}function DS(t,e){const n=$l.get(t);return n&&n.get(e)}function pr(t){const e=ot(t);return e===t?e:(an(e,"iterate",Ko),Pn(t)?e:e.map(ln))}function Tc(t){return an(t=ot(t),"iterate",Ko),t}const OS={__proto__:null,[Symbol.iterator](){return fu(this,Symbol.iterator,ln)},concat(...t){return pr(this).concat(...t.map(e=>De(e)?pr(e):e))},entries(){return fu(this,"entries",t=>(t[1]=ln(t[1]),t))},every(t,e){return pi(this,"every",t,e,void 0,arguments)},filter(t,e){return pi(this,"filter",t,e,n=>n.map(ln),arguments)},find(t,e){return pi(this,"find",t,e,ln,arguments)},findIndex(t,e){return pi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pi(this,"findLast",t,e,ln,arguments)},findLastIndex(t,e){return pi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pi(this,"forEach",t,e,void 0,arguments)},includes(...t){return hu(this,"includes",t)},indexOf(...t){return hu(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return hu(this,"lastIndexOf",t)},map(t,e){return pi(this,"map",t,e,void 0,arguments)},pop(){return Eo(this,"pop")},push(...t){return Eo(this,"push",t)},reduce(t,...e){return Jd(this,"reduce",t,e)},reduceRight(t,...e){return Jd(this,"reduceRight",t,e)},shift(){return Eo(this,"shift")},some(t,e){return pi(this,"some",t,e,void 0,arguments)},splice(...t){return Eo(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return Eo(this,"unshift",t)},values(){return fu(this,"values",ln)}};function fu(t,e,n){const i=Tc(t),s=i[e]();return i!==t&&!Pn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const US=Array.prototype;function pi(t,e,n,i,s,r){const o=Tc(t),a=o!==t&&!Pn(t),l=o[e];if(l!==US[e]){const f=l.apply(t,r);return a?ln(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,ln(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Jd(t,e,n,i){const s=Tc(t);let r=n;return s!==t&&(Pn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,ln(a),l,t)}),s[e](r,...i)}function hu(t,e,n){const i=ot(t);an(i,"iterate",Ko);const s=i[e](...n);return(s===-1||s===!1)&&Cc(n[0])?(n[0]=ot(n[0]),i[e](...n)):s}function Eo(t,e,n=[]){Ms(),Oh();const i=ot(t)[e].apply(t,n);return Uh(),Ts(),i}const FS=Jt("__proto__,__v_isRef,__isVue"),jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function BS(t){En(t)||(t=String(t));const e=ot(this);return an(e,"has",t),e.hasOwnProperty(t)}class Yg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?t_:e_:r?Qg:Jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=De(e);if(!s){let l;if(o&&(l=OS[n]))return l;if(n==="hasOwnProperty")return BS}const a=Reflect.get(e,n,$t(e)?e:i);return(En(n)?jg.has(n):FS(n))||(s||an(e,"get",n),r)?a:$t(a)?o&&xc(n)?a:a.value:gt(a)?s?kh(a):Ea(a):a}}class Kg extends Yg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ms(r);if(!Pn(i)&&!ms(i)&&(r=ot(r),i=ot(i)),!De(e)&&$t(r)&&!$t(i))return l?!1:(r.value=i,!0)}const o=De(e)&&xc(n)?Number(n)<e.length:ft(e,n),a=Reflect.set(e,n,i,$t(e)?e:s);return e===ot(s)&&(o?on(i,r)&&bi(e,"set",n,i):bi(e,"add",n,i)),a}deleteProperty(e,n){const i=ft(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&bi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!En(n)||!jg.has(n))&&an(e,"has",n),i}ownKeys(e){return an(e,"iterate",De(e)?"length":Ys),Reflect.ownKeys(e)}}class Zg extends Yg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kS=new Kg,VS=new Zg,HS=new Kg(!0),zS=new Zg(!0),hf=t=>t,$a=t=>Reflect.getPrototypeOf(t);function GS(t,e,n){return function(...i){const s=this.__v_raw,r=ot(s),o=$s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?hf:e?df:ln;return!e&&an(r,"iterate",l?ff:Ys),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function qa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function WS(t,e){const n={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);t||(on(s,a)&&an(o,"get",s),an(o,"get",a));const{has:l}=$a(o),c=e?hf:t?df:ln;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&an(ot(s),"iterate",Ys),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return t||(on(s,a)&&an(o,"has",s),an(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?hf:t?df:ln;return!t&&an(l,"iterate",Ys),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return it(n,t?{add:qa("add"),set:qa("set"),delete:qa("delete"),clear:qa("clear")}:{add(s){!e&&!Pn(s)&&!ms(s)&&(s=ot(s));const r=ot(this);return $a(r).has.call(r,s)||(r.add(s),bi(r,"add",s,s)),this},set(s,r){!e&&!Pn(r)&&!ms(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=$a(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?on(r,u)&&bi(o,"set",s,r):bi(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=$a(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&bi(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&bi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=GS(s,t,e)}),n}function bc(t,e){const n=WS(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ft(n,s)&&s in i?n:i,s,r)}const XS={get:bc(!1,!1)},$S={get:bc(!1,!0)},qS={get:bc(!0,!1)},jS={get:bc(!0,!0)},Jg=new WeakMap,Qg=new WeakMap,e_=new WeakMap,t_=new WeakMap;function YS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KS(t){return t.__v_skip||!Object.isExtensible(t)?0:YS(Cg(t))}function Ea(t){return ms(t)?t:Ac(t,!1,kS,XS,Jg)}function Bh(t){return Ac(t,!1,HS,$S,Qg)}function kh(t){return Ac(t,!0,VS,qS,e_)}function ZS(t){return Ac(t,!0,zS,jS,t_)}function Ac(t,e,n,i,s){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=KS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ls(t){return ms(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ms(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function Cc(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function n_(t){return!ft(t,"__v_skip")&&Object.isExtensible(t)&&Ih(t,"__v_skip",!0),t}const ln=t=>gt(t)?Ea(t):t,df=t=>gt(t)?kh(t):t;function $t(t){return t?t.__v_isRef===!0:!1}function cs(t){return i_(t,!1)}function Vh(t){return i_(t,!0)}function i_(t,e){return $t(t)?t:new JS(t,e)}class JS{constructor(e,n){this.dep=new Mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:ln(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Pn(e)||ms(e);e=i?e:ot(e),on(e,n)&&(this._rawValue=e,this._value=i?e:ln(e),this.dep.trigger())}}function QS(t){t.dep&&t.dep.trigger()}function Vn(t){return $t(t)?t.value:t}function ex(t){return qe(t)?t():Vn(t)}const tx={get:(t,e,n)=>e==="__v_raw"?t:Vn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return $t(s)&&!$t(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Hh(t){return ls(t)?t:new Proxy(t,tx)}class nx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Mc,{get:i,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function s_(t){return new nx(t)}function ix(t){const e=De(t)?new Array(t.length):{};for(const n in t)e[n]=r_(t,n);return e}class sx{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return DS(ot(this._object),this._key)}}class rx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ox(t,e,n){return $t(t)?t:qe(t)?new rx(t):gt(t)&&arguments.length>1?r_(t,e,n):cs(t)}function r_(t,e,n){const i=t[e];return $t(i)?i:new sx(t,e,n)}class ax{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return zg(this,!0),!0}get value(){const e=this.dep.track();return Xg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lx(t,e,n=!1){let i,s;return qe(t)?i=t:(i=t.get,s=t.set),new ax(i,s,n)}const cx={GET:"get",HAS:"has",ITERATE:"iterate"},ux={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},ja={},ql=new WeakMap;let Ji;function fx(){return Ji}function o_(t,e=!1,n=Ji){if(n){let i=ql.get(n);i||ql.set(n,i=[]),i.push(t)}}function hx(t,e,n=nt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=E=>s?E:Pn(E)||s===!1||s===0?Ai(E,1):Ai(E);let u,f,h,d,_=!1,g=!1;if($t(t)?(f=()=>t.value,_=Pn(t)):ls(t)?(f=()=>c(t),_=!0):De(t)?(g=!0,_=t.some(E=>ls(E)||Pn(E)),f=()=>t.map(E=>{if($t(E))return E.value;if(ls(E))return c(E);if(qe(E))return l?l(E,2):E()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ms();try{h()}finally{Ts()}}const E=Ji;Ji=u;try{return l?l(t,3,[d]):t(d)}finally{Ji=E}}:f=Zt,e&&s){const E=f,w=s===!0?1/0:s;f=()=>Ai(E(),w)}const m=Vg(),p=()=>{u.stop(),m&&m.active&&Ec(m.effects,u)};if(r&&e){const E=e;e=(...w)=>{E(...w),p()}}let b=g?new Array(t.length).fill(ja):ja;const v=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const w=u.run();if(s||_||(g?w.some((C,P)=>on(C,b[P])):on(w,b))){h&&h();const C=Ji;Ji=u;try{const P=[w,b===ja?void 0:g&&b[0]===ja?[]:b,d];l?l(e,3,P):e(...P),b=w}finally{Ji=C}}}else u.run()};return a&&a(v),u=new jo(f),u.scheduler=o?()=>o(v,!1):v,d=E=>o_(E,!1,u),h=u.onStop=()=>{const E=ql.get(u);if(E){if(l)l(E,4);else for(const w of E)w();ql.delete(u)}},e?i?v(!0):b=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ai(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$t(t))Ai(t.value,e,n);else if(De(t))for(let i=0;i<t.length;i++)Ai(t[i],e,n);else if(xs(t)||$s(t))t.forEach(i=>{Ai(i,e,n)});else if(ga(t)){for(const i in t)Ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const a_=[];function dx(t){a_.push(t)}function px(){a_.pop()}function mx(t,e){}const gx={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},_x={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function co(t,e,n,i){try{return i?t(...i):t()}catch(s){fr(s,e,n)}}function Gn(t,e,n,i){if(qe(t)){const s=co(t,e,n,i);return s&&Sc(s)&&s.catch(r=>{fr(r,e,n)}),s}if(De(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Gn(t[r],e,n,i));return s}}function fr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ms(),co(r,null,10,[t,l,c]),Ts();return}}vx(t,n,s,i,o)}function vx(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const gn=[];let si=-1;const Br=[];let Qi=null,Nr=0;const l_=Promise.resolve();let jl=null;function Sa(t){const e=jl||l_;return t?e.then(this?t.bind(this):t):e}function Ex(t){let e=si+1,n=gn.length;for(;e<n;){const i=e+n>>>1,s=gn[i],r=Jo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function zh(t){if(!(t.flags&1)){const e=Jo(t),n=gn[gn.length-1];!n||!(t.flags&2)&&e>=Jo(n)?gn.push(t):gn.splice(Ex(e),0,t),t.flags|=1,c_()}}function c_(){jl||(jl=l_.then(u_))}function Zo(t){De(t)?Br.push(...t):Qi&&t.id===-1?Qi.splice(Nr+1,0,t):t.flags&1||(Br.push(t),t.flags|=1),c_()}function Qd(t,e,n=si+1){for(;n<gn.length;n++){const i=gn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;gn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yl(t){if(Br.length){const e=[...new Set(Br)].sort((n,i)=>Jo(n)-Jo(i));if(Br.length=0,Qi){Qi.push(...e);return}for(Qi=e,Nr=0;Nr<Qi.length;Nr++){const n=Qi[Nr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qi=null,Nr=0}}const Jo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function u_(t){try{for(si=0;si<gn.length;si++){const e=gn[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<gn.length;si++){const e=gn[si];e&&(e.flags&=-2)}si=-1,gn.length=0,Yl(),jl=null,(gn.length||Br.length)&&u_()}}let Lr,Ya=[];function f_(t,e){var n,i;Lr=t,Lr?(Lr.enabled=!0,Ya.forEach(({event:s,args:r})=>Lr.emit(s,...r)),Ya=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{f_(r,e)}),setTimeout(()=>{Lr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ya=[])},3e3)):Ya=[]}let Xt=null,Rc=null;function Qo(t){const e=Xt;return Xt=t,Rc=t&&t.type.__scopeId||null,e}function Sx(t){Rc=t}function xx(){Rc=null}const yx=t=>rs;function rs(t,e=Xt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&xf(-1);const r=Qo(e);let o;try{o=t(...s)}finally{Qo(r),i._d&&xf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function h_(t,e){if(Xt===null)return t;const n=Ta(Xt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=nt]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&Ai(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ri(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ms(),Gn(l,n,8,[t.el,a,t,e]),Ts())}}const d_=Symbol("_vte"),p_=t=>t.__isTeleport,Bo=t=>t&&(t.disabled||t.disabled===""),ep=t=>t&&(t.defer||t.defer===""),tp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,np=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,pf=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},m_={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:_,createText:g,createComment:m}}=c,p=Bo(e.props);let{shapeFlag:b,children:v,dynamicChildren:E}=e;if(t==null){const w=e.el=g(""),C=e.anchor=g("");d(w,n,i),d(C,n,i);const P=(M,y)=>{b&16&&(s&&s.isCE&&(s.ce._teleportTarget=M),u(v,M,y,s,r,o,a,l))},L=()=>{const M=e.target=pf(e.props,_),y=g_(M,e,g,d);M&&(o!=="svg"&&tp(M)?o="svg":o!=="mathml"&&np(M)&&(o="mathml"),p||(P(M,y),Al(e,!1)))};p&&(P(n,C),Al(e,!0)),ep(e.props)?Gt(()=>{L(),e.el.__isMounted=!0},r):L()}else{if(ep(e.props)&&!t.el.__isMounted){Gt(()=>{m_.process(t,e,n,i,s,r,o,a,l,c),delete t.el.__isMounted},r);return}e.el=t.el,e.targetStart=t.targetStart;const w=e.anchor=t.anchor,C=e.target=t.target,P=e.targetAnchor=t.targetAnchor,L=Bo(t.props),M=L?n:C,y=L?w:P;if(o==="svg"||tp(C)?o="svg":(o==="mathml"||np(C))&&(o="mathml"),E?(h(t.dynamicChildren,E,M,s,r,o,a),Qh(t,e,!0)):l||f(t,e,M,y,s,r,o,a,!1),p)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ka(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=pf(e.props,_);N&&Ka(e,N,null,c,0)}else L&&Ka(e,C,P,c,1);Al(e,p)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=t;if(f&&(s(c),s(u)),r&&s(l),o&16){const d=r||!Bo(h);for(let _=0;_<a.length;_++){const g=a[_];i(g,e,n,d,!!g.dynamicChildren)}}},move:Ka,hydrate:Mx};function Ka(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||Bo(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,n,2);f&&i(a,e,n)}function Mx(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const h=e.target=pf(e.props,l);if(h){const d=Bo(e.props),_=h._lpa||h.firstChild;if(e.shapeFlag&16)if(d)e.anchor=f(o(t),e,a(t),n,i,s,r),e.targetStart=_,e.targetAnchor=_&&o(_);else{e.anchor=o(t);let g=_;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")e.targetStart=g;else if(g.data==="teleport anchor"){e.targetAnchor=g,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}g=o(g)}e.targetAnchor||g_(h,e,u,c),f(_&&o(_),e,h,n,i,s,r)}Al(e,d)}return e.anchor&&o(e.anchor)}const Tx=m_;function Al(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function g_(t,e,n,i){const s=e.targetStart=n(""),r=e.targetAnchor=n("");return s[d_]=r,t&&(i(s,t),i(r,t)),r}const es=Symbol("_leaveCb"),Za=Symbol("_enterCb");function Gh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ya(()=>{t.isMounted=!0}),Nc(()=>{t.isUnmounting=!0}),t}const On=[Function,Array],Wh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},__=t=>{const e=t.subTree;return e.component?__(e.component):e},bx={name:"BaseTransition",props:Wh,setup(t,{slots:e}){const n=Wn(),i=Gh();return()=>{const s=e.default&&wc(e.default(),!0);if(!s||!s.length)return;const r=v_(s),o=ot(t),{mode:a}=o;if(i.isLeaving)return du(r);const l=ip(r);if(!l)return du(r);let c=Gr(l,o,i,n,f=>c=f);l.type!==kt&&Fi(l,c);let u=n.subTree&&ip(n.subTree);if(u&&u.type!==kt&&!Zn(l,u)&&__(n).type!==kt){let f=Gr(u,o,i,n);if(Fi(u,f),a==="out-in"&&l.type!==kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},du(r);a==="in-out"&&l.type!==kt?f.delayLeave=(h,d,_)=>{const g=S_(i,u);g[String(u.key)]=u,h[es]=()=>{d(),h[es]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function v_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kt){e=n;break}}return e}const E_=bx;function S_(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Gr(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:v}=e,E=String(t.key),w=S_(n,t),C=(M,y)=>{M&&Gn(M,i,9,y)},P=(M,y)=>{const N=y[1];C(M,y),De(M)?M.every(D=>D.length<=1)&&N():M.length<=1&&N()},L={mode:o,persisted:a,beforeEnter(M){let y=l;if(!n.isMounted)if(r)y=m||l;else return;M[es]&&M[es](!0);const N=w[E];N&&Zn(t,N)&&N.el[es]&&N.el[es](),C(y,[M])},enter(M){let y=c,N=u,D=f;if(!n.isMounted)if(r)y=p||c,N=b||u,D=v||f;else return;let k=!1;const j=M[Za]=te=>{k||(k=!0,te?C(D,[M]):C(N,[M]),L.delayedLeave&&L.delayedLeave(),M[Za]=void 0)};y?P(y,[M,j]):j()},leave(M,y){const N=String(t.key);if(M[Za]&&M[Za](!0),n.isUnmounting)return y();C(h,[M]);let D=!1;const k=M[es]=j=>{D||(D=!0,y(),j?C(g,[M]):C(_,[M]),M[es]=void 0,w[N]===t&&delete w[N])};w[N]=t,d?P(d,[M,k]):k()},clone(M){const y=Gr(M,e,n,i,s);return s&&s(y),y}};return L}function du(t){if(xa(t))return t=fi(t),t.children=null,t}function ip(t){if(!xa(t))return p_(t.type)&&t.children?v_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function Fi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wc(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Dt?(o.patchFlag&128&&s++,i=i.concat(wc(o.children,e,a))):(e||o.type!==kt)&&i.push(a!=null?fi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function hi(t,e){return qe(t)?it({name:t.name},e,{setup:t}):t}function Ax(){const t=Wn();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Xh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Cx(t){const e=Wn(),n=Vh(null);if(e){const s=e.refs===nt?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function ea(t,e,n,i,s=!1){if(De(t)){t.forEach((_,g)=>ea(_,e&&(De(e)?e[g]:e),n,i,s));return}if(us(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ea(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ta(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,h=ot(f),d=f===nt?()=>!1:_=>ft(h,_);if(c!=null&&c!==l&&(Ke(c)?(u[c]=null,d(c)&&(f[c]=null)):$t(c)&&(c.value=null)),qe(l))co(l,a,12,[o,u]);else{const _=Ke(l),g=$t(l);if(_||g){const m=()=>{if(t.f){const p=_?d(l)?f[l]:u[l]:l.value;s?De(p)&&Ec(p,r):De(p)?p.includes(r)||p.push(r):_?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Gt(m,n)):m()}}}let sp=!1;const mr=()=>{sp||(console.error("Hydration completed but contains mismatches."),sp=!0)},Rx=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",wx=t=>t.namespaceURI.includes("MathML"),Ja=t=>{if(t.nodeType===1){if(Rx(t))return"svg";if(wx(t))return"mathml"}},Ur=t=>t.nodeType===8;function Ix(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,E)=>{if(!E.hasChildNodes()){n(null,v,E),Yl(),E._vnode=v;return}f(E.firstChild,v,null,null,null),Yl(),E._vnode=v},f=(v,E,w,C,P,L=!1)=>{L=L||!!E.dynamicChildren;const M=Ur(v)&&v.data==="[",y=()=>g(v,E,w,C,P,M),{type:N,ref:D,shapeFlag:k,patchFlag:j}=E;let te=v.nodeType;E.el=v,j===-2&&(L=!1,E.dynamicChildren=null);let z=null;switch(N){case fs:te!==3?E.children===""?(l(E.el=s(""),o(v),v),z=v):z=y():(v.data!==E.children&&(mr(),v.data=E.children),z=r(v));break;case kt:b(v)?(z=r(v),p(E.el=v.content.firstChild,v,w)):te!==8||M?z=y():z=r(v);break;case Js:if(M&&(v=r(v),te=v.nodeType),te===1||te===3){z=v;const re=!E.children.length;for(let H=0;H<E.staticCount;H++)re&&(E.children+=z.nodeType===1?z.outerHTML:z.data),H===E.staticCount-1&&(E.anchor=z),z=r(z);return M?r(z):z}else y();break;case Dt:M?z=_(v,E,w,C,P,L):z=y();break;default:if(k&1)(te!==1||E.type.toLowerCase()!==v.tagName.toLowerCase())&&!b(v)?z=y():z=h(v,E,w,C,P,L);else if(k&6){E.slotScopeIds=P;const re=o(v);if(M?z=m(v):Ur(v)&&v.data==="teleport start"?z=m(v,v.data,"teleport end"):z=r(v),e(E,re,null,w,C,Ja(re),L),us(E)&&!E.type.__asyncResolved){let H;M?(H=tt(Dt),H.anchor=z?z.previousSibling:re.lastChild):H=v.nodeType===3?Qs(""):tt("div"),H.el=v,E.component.subTree=H}}else k&64?te!==8?z=y():z=E.type.hydrate(v,E,w,C,P,L,t,d):k&128&&(z=E.type.hydrate(v,E,w,C,Ja(o(v)),P,L,t,f))}return D!=null&&ea(D,null,C,E),z},h=(v,E,w,C,P,L)=>{L=L||!!E.dynamicChildren;const{type:M,props:y,patchFlag:N,shapeFlag:D,dirs:k,transition:j}=E,te=M==="input"||M==="option";if(te||N!==-1){k&&ri(E,null,w,"created");let z=!1;if(b(v)){z=q_(null,j)&&w&&w.vnode.props&&w.vnode.props.appear;const H=v.content.firstChild;z&&j.beforeEnter(H),p(H,v,w),E.el=v=H}if(D&16&&!(y&&(y.innerHTML||y.textContent))){let H=d(v.firstChild,E,v,w,C,P,L);for(;H;){Qa(v,1)||mr();const ve=H;H=H.nextSibling,a(ve)}}else if(D&8){let H=E.children;H[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(H=H.slice(1)),v.textContent!==H&&(Qa(v,0)||mr(),v.textContent=E.children)}if(y){if(te||!L||N&48){const H=v.tagName.includes("-");for(const ve in y)(te&&(ve.endsWith("value")||ve==="indeterminate")||Ss(ve)&&!Ni(ve)||ve[0]==="."||H)&&i(v,ve,null,y[ve],void 0,w)}else if(y.onClick)i(v,"onClick",null,y.onClick,void 0,w);else if(N&4&&ls(y.style))for(const H in y.style)y.style[H]}let re;(re=y&&y.onVnodeBeforeMount)&&yn(re,w,E),k&&ri(E,null,w,"beforeMount"),((re=y&&y.onVnodeMounted)||k||z)&&nv(()=>{re&&yn(re,w,E),z&&j.enter(v),k&&ri(E,null,w,"mounted")},C)}return v.nextSibling},d=(v,E,w,C,P,L,M)=>{M=M||!!E.dynamicChildren;const y=E.children,N=y.length;for(let D=0;D<N;D++){const k=M?y[D]:y[D]=Mn(y[D]),j=k.type===fs;v?(j&&!M&&D+1<N&&Mn(y[D+1]).type===fs&&(l(s(v.data.slice(k.children.length)),w,r(v)),v.data=k.children),v=f(v,k,C,P,L,M)):j&&!k.children?l(k.el=s(""),w):(Qa(w,1)||mr(),n(null,k,w,null,C,P,Ja(w),L))}return v},_=(v,E,w,C,P,L)=>{const{slotScopeIds:M}=E;M&&(P=P?P.concat(M):M);const y=o(v),N=d(r(v),E,y,w,C,P,L);return N&&Ur(N)&&N.data==="]"?r(E.anchor=N):(mr(),l(E.anchor=c("]"),y,N),N)},g=(v,E,w,C,P,L)=>{if(Qa(v.parentElement,1)||mr(),E.el=null,L){const N=m(v);for(;;){const D=r(v);if(D&&D!==N)a(D);else break}}const M=r(v),y=o(v);return a(v),n(null,E,y,M,w,C,Ja(y),P),w&&(w.vnode.el=E.el,Oc(w,E.el)),M},m=(v,E="[",w="]")=>{let C=0;for(;v;)if(v=r(v),v&&Ur(v)&&(v.data===E&&C++,v.data===w)){if(C===0)return r(v);C--}return v},p=(v,E,w)=>{const C=E.parentNode;C&&C.replaceChild(v,E);let P=w;for(;P;)P.vnode.el===E&&(P.vnode.el=P.subTree.el=v),P=P.parent},b=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[u,f]}const rp="data-allow-mismatch",Px={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Qa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(rp);)t=t.parentElement;const n=t&&t.getAttribute(rp);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:n.split(",").includes(Px[e])}}const Nx=_a().requestIdleCallback||(t=>setTimeout(t,1)),Lx=_a().cancelIdleCallback||(t=>clearTimeout(t)),Dx=(t=1e4)=>e=>{const n=Nx(e,{timeout:t});return()=>Lx(n)};function Ox(t){const{top:e,left:n,bottom:i,right:s}=t.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(e>0&&e<r||i>0&&i<r)&&(n>0&&n<o||s>0&&s<o)}const Ux=t=>(e,n)=>{const i=new IntersectionObserver(s=>{for(const r of s)if(r.isIntersecting){i.disconnect(),e();break}},t);return n(s=>{if(s instanceof Element){if(Ox(s))return e(),i.disconnect(),!1;i.observe(s)}}),()=>i.disconnect()},Fx=t=>e=>{if(t){const n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},Bx=(t=[])=>(e,n)=>{Ke(t)&&(t=[t]);let i=!1;const s=o=>{i||(i=!0,r(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{n(o=>{for(const a of t)o.removeEventListener(a,s)})};return n(o=>{for(const a of t)o.addEventListener(a,s,{once:!0})}),r};function kx(t,e){if(Ur(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ur(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const us=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Vx(t){qe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let _;return c||(_=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((m,p)=>{l(g,()=>m(h()),()=>p(g),f+1)});throw g}).then(g=>_!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return hi({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(_,g,m){const p=r?()=>{const b=r(m,v=>kx(_,v));b&&(g.bum||(g.bum=[])).push(b)}:m;u?p():d().then(()=>!g.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const _=Wt;if(Xh(_),u)return()=>pu(u,_);const g=v=>{c=null,fr(v,_,13,!i)};if(a&&_.suspense||Wr)return d().then(v=>()=>pu(v,_)).catch(v=>(g(v),()=>i?tt(i,{error:v}):null));const m=cs(!1),p=cs(),b=cs(!!s);return s&&setTimeout(()=>{b.value=!1},s),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const v=new Error(`Async component timed out after ${o}ms.`);g(v),p.value=v}},o),d().then(()=>{m.value=!0,_.parent&&xa(_.parent.vnode)&&_.parent.update()}).catch(v=>{g(v),p.value=v}),()=>{if(m.value&&u)return pu(u,_);if(p.value&&i)return tt(i,{error:p.value});if(n&&!b.value)return tt(n)}}})}function pu(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=tt(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const xa=t=>t.type.__isKeepAlive,Hx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Wn(),i=n.ctx;if(!i.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(b,v,E,w,C)=>{const P=b.component;c(b,v,E,0,a),l(P.vnode,b,v,E,P,a,w,b.slotScopeIds,C),Gt(()=>{P.isDeactivated=!1,P.a&&js(P.a);const L=b.props&&b.props.onVnodeMounted;L&&yn(L,P.parent,b)},a)},i.deactivate=b=>{const v=b.component;Zl(v.m),Zl(v.a),c(b,h,null,1,a),Gt(()=>{v.da&&js(v.da);const E=b.props&&b.props.onVnodeUnmounted;E&&yn(E,v.parent,b),v.isDeactivated=!0},a)};function d(b){mu(b),u(b,n,a,!0)}function _(b){s.forEach((v,E)=>{const w=Cf(v.type);w&&!b(w)&&g(E)})}function g(b){const v=s.get(b);v&&(!o||!Zn(v,o))?d(v):o&&mu(o),s.delete(b),r.delete(b)}Zs(()=>[t.include,t.exclude],([b,v])=>{b&&_(E=>Po(b,E)),v&&_(E=>!Po(v,E))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(Jl(n.subTree.type)?Gt(()=>{s.set(m,el(n.subTree))},n.subTree.suspense):s.set(m,el(n.subTree)))};return ya(p),Pc(p),Nc(()=>{s.forEach(b=>{const{subTree:v,suspense:E}=n,w=el(v);if(b.type===w.type&&b.key===w.key){mu(w);const C=w.component.da;C&&Gt(C,E);return}d(b)})}),()=>{if(m=null,!e.default)return o=null;const b=e.default(),v=b[0];if(b.length>1)return o=null,b;if(!Bi(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let E=el(v);if(E.type===kt)return o=null,E;const w=E.type,C=Cf(us(E)?E.type.__asyncResolved||{}:w),{include:P,exclude:L,max:M}=t;if(P&&(!C||!Po(P,C))||L&&C&&Po(L,C))return E.shapeFlag&=-257,o=E,v;const y=E.key==null?w:E.key,N=s.get(y);return E.el&&(E=fi(E),v.shapeFlag&128&&(v.ssContent=E)),m=y,N?(E.el=N.el,E.component=N.component,E.transition&&Fi(E,E.transition),E.shapeFlag|=512,r.delete(y),r.add(y)):(r.add(y),M&&r.size>parseInt(M,10)&&g(r.values().next().value)),E.shapeFlag|=256,o=E,Jl(v.type)?v:E}}},zx=Hx;function Po(t,e){return De(t)?t.some(n=>Po(n,e)):Ke(t)?t.split(",").includes(e):Ag(t)?(t.lastIndex=0,t.test(e)):!1}function x_(t,e){M_(t,"a",e)}function y_(t,e){M_(t,"da",e)}function M_(t,e,n=Wt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ic(e,i,n),n){let s=n.parent;for(;s&&s.parent;)xa(s.parent.vnode)&&Gx(i,e,n,s),s=s.parent}}function Gx(t,e,n,i){const s=Ic(e,t,i,!0);Lc(()=>{Ec(i[e],s)},n)}function mu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function el(t){return t.shapeFlag&128?t.ssContent:t}function Ic(t,e,n=Wt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ms();const a=nr(n),l=Gn(e,n,t,o);return a(),Ts(),l});return i?s.unshift(r):s.push(r),r}}const Hi=t=>(e,n=Wt)=>{(!Wr||t==="sp")&&Ic(t,(...i)=>e(...i),n)},T_=Hi("bm"),ya=Hi("m"),$h=Hi("bu"),Pc=Hi("u"),Nc=Hi("bum"),Lc=Hi("um"),b_=Hi("sp"),A_=Hi("rtg"),C_=Hi("rtc");function R_(t,e=Wt){Ic("ec",t,e)}const qh="components",Wx="directives";function jh(t,e){return Yh(qh,t,!0,e)||t}const w_=Symbol.for("v-ndc");function Xx(t){return Ke(t)?Yh(qh,t,!1)||t:t||w_}function $x(t){return Yh(Wx,t)}function Yh(t,e,n=!0,i=!1){const s=Xt||Wt;if(s){const r=s.type;if(t===qh){const a=Cf(r,!1);if(a&&(a===e||a===bt(e)||a===ys(bt(e))))return r}const o=op(s[t]||r[t],e)||op(s.appContext[t],e);return!o&&i?r:o}}function op(t,e){return t&&(t[e]||t[bt(e)]||t[ys(bt(e))])}function I_(t,e,n,i){let s;const r=n&&n[i],o=De(t);if(o||Ke(t)){const a=o&&ls(t);let l=!1;a&&(l=!Pn(t),t=Tc(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?ln(t[c]):t[c],c,void 0,r&&r[c])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(gt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function qx(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(De(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function P_(t,e,n={},i,s){if(Xt.ce||Xt.parent&&us(Xt.parent)&&Xt.parent.ce)return e!=="default"&&(n.name=e),en(),Ql(Dt,null,[tt("slot",n,i&&i())],64);let r=t[e];r&&r._c&&(r._d=!1),en();const o=r&&Kh(r(n)),a=n.key||o&&o.key,l=Ql(Dt,{key:(a&&!En(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Kh(t){return t.some(e=>Bi(e)?!(e.type===kt||e.type===Dt&&!Kh(e.children)):!0)?t:null}function jx(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:qs(i)]=t[i];return n}const mf=t=>t?uv(t)?Ta(t):mf(t.parent):null,ko=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mf(t.parent),$root:t=>mf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zh(t),$forceUpdate:t=>t.f||(t.f=()=>{zh(t.update)}),$nextTick:t=>t.n||(t.n=Sa.bind(t.proxy)),$watch:t=>Ay.bind(t)}),gu=(t,e)=>t!==nt&&!t.__isScriptSetup&&ft(t,e),gf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(gu(i,e))return o[e]=1,i[e];if(s!==nt&&ft(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ft(c,e))return o[e]=3,r[e];if(n!==nt&&ft(n,e))return o[e]=4,n[e];_f&&(o[e]=0)}}const u=ko[e];let f,h;if(u)return e==="$attrs"&&an(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==nt&&ft(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ft(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return gu(s,e)?(s[e]=n,!0):i!==nt&&ft(i,e)?(i[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==nt&&ft(t,o)||gu(e,o)||(a=r[0])&&ft(a,o)||ft(i,o)||ft(ko,o)||ft(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Yx=it({},gf,{get(t,e){if(e!==Symbol.unscopables)return gf.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Ph(e)}});function Kx(){return null}function Zx(){return null}function Jx(t){}function Qx(t){}function ey(){return null}function ty(){}function ny(t,e){return null}function iy(){return N_().slots}function sy(){return N_().attrs}function N_(){const t=Wn();return t.setupContext||(t.setupContext=dv(t))}function ta(t){return De(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function ry(t,e){const n=ta(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?De(s)||qe(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function oy(t,e){return!t||!e?t||e:De(t)&&De(e)?t.concat(e):it({},ta(t),ta(e))}function ay(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function ly(t){const e=Wn();let n=t();return Tf(),Sc(n)&&(n=n.catch(i=>{throw nr(e),i})),[n,()=>nr(e)]}let _f=!0;function cy(t){const e=Zh(t),n=t.proxy,i=t.ctx;_f=!1,e.beforeCreate&&ap(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:v,unmounted:E,render:w,renderTracked:C,renderTriggered:P,errorCaptured:L,serverPrefetch:M,expose:y,inheritAttrs:N,components:D,directives:k,filters:j}=e;if(c&&uy(c,i,null),o)for(const re in o){const H=o[re];qe(H)&&(i[re]=H.bind(n))}if(s){const re=s.call(n,n);gt(re)&&(t.data=Ea(re))}if(_f=!0,r)for(const re in r){const H=r[re],ve=qe(H)?H.bind(n,n):qe(H.get)?H.get.bind(n,n):Zt,Ae=!qe(H)&&qe(H.set)?H.set.bind(n):Zt,Oe=Bn({get:ve,set:Ae});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Ge=>Oe.value=Ge})}if(a)for(const re in a)L_(a[re],i,n,re);if(l){const re=qe(l)?l.call(n):l;Reflect.ownKeys(re).forEach(H=>{Vo(H,re[H])})}u&&ap(u,t,"c");function z(re,H){De(H)?H.forEach(ve=>re(ve.bind(n))):H&&re(H.bind(n))}if(z(T_,f),z(ya,h),z($h,d),z(Pc,_),z(x_,g),z(y_,m),z(R_,L),z(C_,C),z(A_,P),z(Nc,b),z(Lc,E),z(b_,M),De(y))if(y.length){const re=t.exposed||(t.exposed={});y.forEach(H=>{Object.defineProperty(re,H,{get:()=>n[H],set:ve=>n[H]=ve})})}else t.exposed||(t.exposed={});w&&t.render===Zt&&(t.render=w),N!=null&&(t.inheritAttrs=N),D&&(t.components=D),k&&(t.directives=k),M&&Xh(t)}function uy(t,e,n=Zt){De(t)&&(t=vf(t));for(const i in t){const s=t[i];let r;gt(s)?"default"in s?r=li(s.from||i,s.default,!0):r=li(s.from||i):r=li(s),$t(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ap(t,e,n){Gn(De(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function L_(t,e,n,i){let s=i.includes(".")?J_(n,i):()=>n[i];if(Ke(t)){const r=e[t];qe(r)&&Zs(s,r)}else if(qe(t))Zs(s,t.bind(n));else if(gt(t))if(De(t))t.forEach(r=>L_(r,e,n,i));else{const r=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(r)&&Zs(s,r,t)}}function Zh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Kl(l,c,o,!0)),Kl(l,e,o)),gt(e)&&r.set(e,l),l}function Kl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Kl(t,r,n,!0),s&&s.forEach(o=>Kl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=fy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fy={data:lp,props:cp,emits:cp,methods:No,computed:No,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:No,directives:No,watch:dy,provide:lp,inject:hy};function lp(t,e){return e?t?function(){return it(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function hy(t,e){return No(vf(t),vf(e))}function vf(t){if(De(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dn(t,e){return t?[...new Set([].concat(t,e))]:e}function No(t,e){return t?it(Object.create(null),t,e):e}function cp(t,e){return t?De(t)&&De(e)?[...new Set([...t,...e])]:it(Object.create(null),ta(t),ta(e??{})):e}function dy(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const i in e)n[i]=dn(t[i],e[i]);return n}function D_(){return{app:null,config:{isNativeTag:Or,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function my(t,e){return function(i,s=null){qe(i)||(i=it({},i)),s!=null&&!gt(s)&&(s=null);const r=D_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:py++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:mv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||tt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):t(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ta(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ks;Ks=c;try{return u()}finally{Ks=f}}};return c}}let Ks=null;function Vo(t,e){if(Wt){let n=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===n&&(n=Wt.provides=Object.create(i)),n[t]=e}}function li(t,e,n=!1){const i=Wt||Xt;if(i||Ks){const s=Ks?Ks._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function gy(){return!!(Wt||Xt||Ks)}const O_={},U_=()=>Object.create(O_),F_=t=>Object.getPrototypeOf(t)===O_;function _y(t,e,n,i=!1){const s={},r=U_();t.propsDefaults=Object.create(null),B_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Bh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function vy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ot(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Dc(t.emitsOptions,h))continue;const d=e[h];if(l)if(ft(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=bt(h);s[_]=Ef(l,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{B_(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!ft(e,f)&&((u=cn(f))===f||!ft(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ef(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!ft(e,f))&&(delete r[f],c=!0)}c&&bi(t.attrs,"set","")}function B_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ni(l))continue;const c=e[l];let u;s&&ft(s,u=bt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Dc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(n),c=a||nt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ef(s,l,f,c[f],t,!ft(c,f))}}return o}function Ef(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=nr(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cn(n))&&(i=!0))}return i}const Ey=new WeakMap;function k_(t,e,n=!1){const i=n?Ey:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[h,d]=k_(f,e,!0);it(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return gt(t)&&i.set(t,Xs),Xs;if(De(r))for(let u=0;u<r.length;u++){const f=bt(r[u]);up(f)&&(o[f]=nt)}else if(r)for(const u in r){const f=bt(u);if(up(f)){const h=r[u],d=o[f]=De(h)||qe(h)?{type:h}:it({},h),_=d.type;let g=!1,m=!0;if(De(_))for(let p=0;p<_.length;++p){const b=_[p],v=qe(b)&&b.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(m=!1)}else g=qe(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||ft(d,"default"))&&a.push(f)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function up(t){return t[0]!=="$"&&!Ni(t)}const V_=t=>t[0]==="_"||t==="$stable",Jh=t=>De(t)?t.map(Mn):[Mn(t)],Sy=(t,e,n)=>{if(e._n)return e;const i=rs((...s)=>Jh(e(...s)),n);return i._c=!1,i},H_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(V_(s))continue;const r=t[s];if(qe(r))e[s]=Sy(s,r,i);else if(r!=null){const o=Jh(r);e[s]=()=>o}}},z_=(t,e)=>{const n=Jh(e);t.slots.default=()=>n},G_=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},xy=(t,e,n)=>{const i=t.slots=U_();if(t.vnode.shapeFlag&32){const s=e._;s?(G_(i,e,n),n&&Ih(i,"_",s,!0)):H_(e,i)}else e&&z_(t,e)},yy=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:G_(s,e,n):(r=!e.$stable,H_(e,s)),o=e}else e&&(z_(t,e),o={default:1});if(r)for(const a in s)!V_(a)&&o[a]==null&&delete s[a]},Gt=nv;function W_(t){return $_(t)}function X_(t){return $_(t,Ix)}function $_(t,e){const n=_a();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Zt,insertStaticContent:_}=t,g=(I,S,Y,oe=null,Q=null,ee=null,ge=void 0,ae=null,A=!!S.dynamicChildren)=>{if(I===S)return;I&&!Zn(I,S)&&(oe=G(I),Ge(I,Q,ee,!0),I=null),S.patchFlag===-2&&(A=!1,S.dynamicChildren=null);const{type:x,ref:V,shapeFlag:X}=S;switch(x){case fs:m(I,S,Y,oe);break;case kt:p(I,S,Y,oe);break;case Js:I==null&&b(S,Y,oe,ge);break;case Dt:D(I,S,Y,oe,Q,ee,ge,ae,A);break;default:X&1?w(I,S,Y,oe,Q,ee,ge,ae,A):X&6?k(I,S,Y,oe,Q,ee,ge,ae,A):(X&64||X&128)&&x.process(I,S,Y,oe,Q,ee,ge,ae,A,he)}V!=null&&Q&&ea(V,I&&I.ref,ee,S||I,!S)},m=(I,S,Y,oe)=>{if(I==null)i(S.el=a(S.children),Y,oe);else{const Q=S.el=I.el;S.children!==I.children&&c(Q,S.children)}},p=(I,S,Y,oe)=>{I==null?i(S.el=l(S.children||""),Y,oe):S.el=I.el},b=(I,S,Y,oe)=>{[I.el,I.anchor]=_(I.children,S,Y,oe,I.el,I.anchor)},v=({el:I,anchor:S},Y,oe)=>{let Q;for(;I&&I!==S;)Q=h(I),i(I,Y,oe),I=Q;i(S,Y,oe)},E=({el:I,anchor:S})=>{let Y;for(;I&&I!==S;)Y=h(I),s(I),I=Y;s(S)},w=(I,S,Y,oe,Q,ee,ge,ae,A)=>{S.type==="svg"?ge="svg":S.type==="math"&&(ge="mathml"),I==null?C(S,Y,oe,Q,ee,ge,ae,A):M(I,S,Q,ee,ge,ae,A)},C=(I,S,Y,oe,Q,ee,ge,ae)=>{let A,x;const{props:V,shapeFlag:X,transition:Z,dirs:K}=I;if(A=I.el=o(I.type,ee,V&&V.is,V),X&8?u(A,I.children):X&16&&L(I.children,A,null,oe,Q,_u(I,ee),ge,ae),K&&ri(I,null,oe,"created"),P(A,I,I.scopeId,ge,oe),V){for(const _e in V)_e!=="value"&&!Ni(_e)&&r(A,_e,null,V[_e],ee,oe);"value"in V&&r(A,"value",null,V.value,ee),(x=V.onVnodeBeforeMount)&&yn(x,oe,I)}K&&ri(I,null,oe,"beforeMount");const xe=q_(Q,Z);xe&&Z.beforeEnter(A),i(A,S,Y),((x=V&&V.onVnodeMounted)||xe||K)&&Gt(()=>{x&&yn(x,oe,I),xe&&Z.enter(A),K&&ri(I,null,oe,"mounted")},Q)},P=(I,S,Y,oe,Q)=>{if(Y&&d(I,Y),oe)for(let ee=0;ee<oe.length;ee++)d(I,oe[ee]);if(Q){let ee=Q.subTree;if(S===ee||Jl(ee.type)&&(ee.ssContent===S||ee.ssFallback===S)){const ge=Q.vnode;P(I,ge,ge.scopeId,ge.slotScopeIds,Q.parent)}}},L=(I,S,Y,oe,Q,ee,ge,ae,A=0)=>{for(let x=A;x<I.length;x++){const V=I[x]=ae?ts(I[x]):Mn(I[x]);g(null,V,S,Y,oe,Q,ee,ge,ae)}},M=(I,S,Y,oe,Q,ee,ge)=>{const ae=S.el=I.el;let{patchFlag:A,dynamicChildren:x,dirs:V}=S;A|=I.patchFlag&16;const X=I.props||nt,Z=S.props||nt;let K;if(Y&&ws(Y,!1),(K=Z.onVnodeBeforeUpdate)&&yn(K,Y,S,I),V&&ri(S,I,Y,"beforeUpdate"),Y&&ws(Y,!0),(X.innerHTML&&Z.innerHTML==null||X.textContent&&Z.textContent==null)&&u(ae,""),x?y(I.dynamicChildren,x,ae,Y,oe,_u(S,Q),ee):ge||H(I,S,ae,null,Y,oe,_u(S,Q),ee,!1),A>0){if(A&16)N(ae,X,Z,Y,Q);else if(A&2&&X.class!==Z.class&&r(ae,"class",null,Z.class,Q),A&4&&r(ae,"style",X.style,Z.style,Q),A&8){const xe=S.dynamicProps;for(let _e=0;_e<xe.length;_e++){const Ee=xe[_e],Ye=X[Ee],me=Z[Ee];(me!==Ye||Ee==="value")&&r(ae,Ee,Ye,me,Q,Y)}}A&1&&I.children!==S.children&&u(ae,S.children)}else!ge&&x==null&&N(ae,X,Z,Y,Q);((K=Z.onVnodeUpdated)||V)&&Gt(()=>{K&&yn(K,Y,S,I),V&&ri(S,I,Y,"updated")},oe)},y=(I,S,Y,oe,Q,ee,ge)=>{for(let ae=0;ae<S.length;ae++){const A=I[ae],x=S[ae],V=A.el&&(A.type===Dt||!Zn(A,x)||A.shapeFlag&70)?f(A.el):Y;g(A,x,V,null,oe,Q,ee,ge,!0)}},N=(I,S,Y,oe,Q)=>{if(S!==Y){if(S!==nt)for(const ee in S)!Ni(ee)&&!(ee in Y)&&r(I,ee,S[ee],null,Q,oe);for(const ee in Y){if(Ni(ee))continue;const ge=Y[ee],ae=S[ee];ge!==ae&&ee!=="value"&&r(I,ee,ae,ge,Q,oe)}"value"in Y&&r(I,"value",S.value,Y.value,Q)}},D=(I,S,Y,oe,Q,ee,ge,ae,A)=>{const x=S.el=I?I.el:a(""),V=S.anchor=I?I.anchor:a("");let{patchFlag:X,dynamicChildren:Z,slotScopeIds:K}=S;K&&(ae=ae?ae.concat(K):K),I==null?(i(x,Y,oe),i(V,Y,oe),L(S.children||[],Y,V,Q,ee,ge,ae,A)):X>0&&X&64&&Z&&I.dynamicChildren?(y(I.dynamicChildren,Z,Y,Q,ee,ge,ae),(S.key!=null||Q&&S===Q.subTree)&&Qh(I,S,!0)):H(I,S,Y,V,Q,ee,ge,ae,A)},k=(I,S,Y,oe,Q,ee,ge,ae,A)=>{S.slotScopeIds=ae,I==null?S.shapeFlag&512?Q.ctx.activate(S,Y,oe,ge,A):j(S,Y,oe,Q,ee,ge,A):te(I,S,A)},j=(I,S,Y,oe,Q,ee,ge)=>{const ae=I.component=cv(I,oe,Q);if(xa(I)&&(ae.ctx.renderer=he),fv(ae,!1,ge),ae.asyncDep){if(Q&&Q.registerDep(ae,z,ge),!I.el){const A=ae.subTree=tt(kt);p(null,A,S,Y)}}else z(ae,I,S,Y,Q,ee,ge)},te=(I,S,Y)=>{const oe=S.component=I.component;if(Ny(I,S,Y))if(oe.asyncDep&&!oe.asyncResolved){re(oe,S,Y);return}else oe.next=S,oe.update();else S.el=I.el,oe.vnode=S},z=(I,S,Y,oe,Q,ee,ge)=>{const ae=()=>{if(I.isMounted){let{next:X,bu:Z,u:K,parent:xe,vnode:_e}=I;{const Be=j_(I);if(Be){X&&(X.el=_e.el,re(I,X,ge)),Be.asyncDep.then(()=>{I.isUnmounted||ae()});return}}let Ee=X,Ye;ws(I,!1),X?(X.el=_e.el,re(I,X,ge)):X=_e,Z&&js(Z),(Ye=X.props&&X.props.onVnodeBeforeUpdate)&&yn(Ye,xe,X,_e),ws(I,!0);const me=Cl(I),Ce=I.subTree;I.subTree=me,g(Ce,me,f(Ce.el),G(Ce),I,Q,ee),X.el=me.el,Ee===null&&Oc(I,me.el),K&&Gt(K,Q),(Ye=X.props&&X.props.onVnodeUpdated)&&Gt(()=>yn(Ye,xe,X,_e),Q)}else{let X;const{el:Z,props:K}=S,{bm:xe,m:_e,parent:Ee,root:Ye,type:me}=I,Ce=us(S);if(ws(I,!1),xe&&js(xe),!Ce&&(X=K&&K.onVnodeBeforeMount)&&yn(X,Ee,S),ws(I,!0),Z&&$e){const Be=()=>{I.subTree=Cl(I),$e(Z,I.subTree,I,Q,null)};Ce&&me.__asyncHydrate?me.__asyncHydrate(Z,I,Be):Be()}else{Ye.ce&&Ye.ce._injectChildStyle(me);const Be=I.subTree=Cl(I);g(null,Be,Y,oe,I,Q,ee),S.el=Be.el}if(_e&&Gt(_e,Q),!Ce&&(X=K&&K.onVnodeMounted)){const Be=S;Gt(()=>yn(X,Ee,Be),Q)}(S.shapeFlag&256||Ee&&us(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&I.a&&Gt(I.a,Q),I.isMounted=!0,S=Y=oe=null}};I.scope.on();const A=I.effect=new jo(ae);I.scope.off();const x=I.update=A.run.bind(A),V=I.job=A.runIfDirty.bind(A);V.i=I,V.id=I.uid,A.scheduler=()=>zh(V),ws(I,!0),x()},re=(I,S,Y)=>{S.component=I;const oe=I.vnode.props;I.vnode=S,I.next=null,vy(I,S.props,oe,Y),yy(I,S.children,Y),Ms(),Qd(I),Ts()},H=(I,S,Y,oe,Q,ee,ge,ae,A=!1)=>{const x=I&&I.children,V=I?I.shapeFlag:0,X=S.children,{patchFlag:Z,shapeFlag:K}=S;if(Z>0){if(Z&128){Ae(x,X,Y,oe,Q,ee,ge,ae,A);return}else if(Z&256){ve(x,X,Y,oe,Q,ee,ge,ae,A);return}}K&8?(V&16&&Ie(x,Q,ee),X!==x&&u(Y,X)):V&16?K&16?Ae(x,X,Y,oe,Q,ee,ge,ae,A):Ie(x,Q,ee,!0):(V&8&&u(Y,""),K&16&&L(X,Y,oe,Q,ee,ge,ae,A))},ve=(I,S,Y,oe,Q,ee,ge,ae,A)=>{I=I||Xs,S=S||Xs;const x=I.length,V=S.length,X=Math.min(x,V);let Z;for(Z=0;Z<X;Z++){const K=S[Z]=A?ts(S[Z]):Mn(S[Z]);g(I[Z],K,Y,null,Q,ee,ge,ae,A)}x>V?Ie(I,Q,ee,!0,!1,X):L(S,Y,oe,Q,ee,ge,ae,A,X)},Ae=(I,S,Y,oe,Q,ee,ge,ae,A)=>{let x=0;const V=S.length;let X=I.length-1,Z=V-1;for(;x<=X&&x<=Z;){const K=I[x],xe=S[x]=A?ts(S[x]):Mn(S[x]);if(Zn(K,xe))g(K,xe,Y,null,Q,ee,ge,ae,A);else break;x++}for(;x<=X&&x<=Z;){const K=I[X],xe=S[Z]=A?ts(S[Z]):Mn(S[Z]);if(Zn(K,xe))g(K,xe,Y,null,Q,ee,ge,ae,A);else break;X--,Z--}if(x>X){if(x<=Z){const K=Z+1,xe=K<V?S[K].el:oe;for(;x<=Z;)g(null,S[x]=A?ts(S[x]):Mn(S[x]),Y,xe,Q,ee,ge,ae,A),x++}}else if(x>Z)for(;x<=X;)Ge(I[x],Q,ee,!0),x++;else{const K=x,xe=x,_e=new Map;for(x=xe;x<=Z;x++){const je=S[x]=A?ts(S[x]):Mn(S[x]);je.key!=null&&_e.set(je.key,x)}let Ee,Ye=0;const me=Z-xe+1;let Ce=!1,Be=0;const We=new Array(me);for(x=0;x<me;x++)We[x]=0;for(x=K;x<=X;x++){const je=I[x];if(Ye>=me){Ge(je,Q,ee,!0);continue}let Xe;if(je.key!=null)Xe=_e.get(je.key);else for(Ee=xe;Ee<=Z;Ee++)if(We[Ee-xe]===0&&Zn(je,S[Ee])){Xe=Ee;break}Xe===void 0?Ge(je,Q,ee,!0):(We[Xe-xe]=x+1,Xe>=Be?Be=Xe:Ce=!0,g(je,S[Xe],Y,null,Q,ee,ge,ae,A),Ye++)}const Ue=Ce?My(We):Xs;for(Ee=Ue.length-1,x=me-1;x>=0;x--){const je=xe+x,Xe=S[je],ut=je+1<V?S[je+1].el:oe;We[x]===0?g(null,Xe,Y,ut,Q,ee,ge,ae,A):Ce&&(Ee<0||x!==Ue[Ee]?Oe(Xe,Y,ut,2):Ee--)}}},Oe=(I,S,Y,oe,Q=null)=>{const{el:ee,type:ge,transition:ae,children:A,shapeFlag:x}=I;if(x&6){Oe(I.component.subTree,S,Y,oe);return}if(x&128){I.suspense.move(S,Y,oe);return}if(x&64){ge.move(I,S,Y,he);return}if(ge===Dt){i(ee,S,Y);for(let X=0;X<A.length;X++)Oe(A[X],S,Y,oe);i(I.anchor,S,Y);return}if(ge===Js){v(I,S,Y);return}if(oe!==2&&x&1&&ae)if(oe===0)ae.beforeEnter(ee),i(ee,S,Y),Gt(()=>ae.enter(ee),Q);else{const{leave:X,delayLeave:Z,afterLeave:K}=ae,xe=()=>i(ee,S,Y),_e=()=>{X(ee,()=>{xe(),K&&K()})};Z?Z(ee,xe,_e):_e()}else i(ee,S,Y)},Ge=(I,S,Y,oe=!1,Q=!1)=>{const{type:ee,props:ge,ref:ae,children:A,dynamicChildren:x,shapeFlag:V,patchFlag:X,dirs:Z,cacheIndex:K}=I;if(X===-2&&(Q=!1),ae!=null&&ea(ae,null,Y,I,!0),K!=null&&(S.renderCache[K]=void 0),V&256){S.ctx.deactivate(I);return}const xe=V&1&&Z,_e=!us(I);let Ee;if(_e&&(Ee=ge&&ge.onVnodeBeforeUnmount)&&yn(Ee,S,I),V&6)Me(I.component,Y,oe);else{if(V&128){I.suspense.unmount(Y,oe);return}xe&&ri(I,null,S,"beforeUnmount"),V&64?I.type.remove(I,S,Y,he,oe):x&&!x.hasOnce&&(ee!==Dt||X>0&&X&64)?Ie(x,S,Y,!1,!0):(ee===Dt&&X&384||!Q&&V&16)&&Ie(A,S,Y),oe&&st(I)}(_e&&(Ee=ge&&ge.onVnodeUnmounted)||xe)&&Gt(()=>{Ee&&yn(Ee,S,I),xe&&ri(I,null,S,"unmounted")},Y)},st=I=>{const{type:S,el:Y,anchor:oe,transition:Q}=I;if(S===Dt){ce(Y,oe);return}if(S===Js){E(I);return}const ee=()=>{s(Y),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(I.shapeFlag&1&&Q&&!Q.persisted){const{leave:ge,delayLeave:ae}=Q,A=()=>ge(Y,ee);ae?ae(I.el,ee,A):A()}else ee()},ce=(I,S)=>{let Y;for(;I!==S;)Y=h(I),s(I),I=Y;s(S)},Me=(I,S,Y)=>{const{bum:oe,scope:Q,job:ee,subTree:ge,um:ae,m:A,a:x}=I;Zl(A),Zl(x),oe&&js(oe),Q.stop(),ee&&(ee.flags|=8,Ge(ge,I,S,Y)),ae&&Gt(ae,S),Gt(()=>{I.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Ie=(I,S,Y,oe=!1,Q=!1,ee=0)=>{for(let ge=ee;ge<I.length;ge++)Ge(I[ge],S,Y,oe,Q)},G=I=>{if(I.shapeFlag&6)return G(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=h(I.anchor||I.el),Y=S&&S[d_];return Y?h(Y):S};let ue=!1;const pe=(I,S,Y)=>{I==null?S._vnode&&Ge(S._vnode,null,null,!0):g(S._vnode||null,I,S,null,null,null,Y),S._vnode=I,ue||(ue=!0,Qd(),Yl(),ue=!1)},he={p:g,um:Ge,m:Oe,r:st,mt:j,mc:L,pc:H,pbc:y,n:G,o:t};let He,$e;return e&&([He,$e]=e(he)),{render:pe,hydrate:He,createApp:my(pe,He)}}function _u({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function q_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qh(t,e,n=!1){const i=t.children,s=e.children;if(De(i)&&De(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ts(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Qh(o,a)),a.type===fs&&(a.el=o.el)}}function My(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function j_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:j_(e)}function Zl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Y_=Symbol.for("v-scx"),K_=()=>li(Y_);function Ty(t,e){return Ma(t,null,e)}function by(t,e){return Ma(t,null,{flush:"post"})}function Z_(t,e){return Ma(t,null,{flush:"sync"})}function Zs(t,e,n){return Ma(t,e,n)}function Ma(t,e,n=nt){const{immediate:i,deep:s,flush:r,once:o}=n,a=it({},n),l=e&&i||!e&&r!=="post";let c;if(Wr){if(r==="sync"){const d=K_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Zt,d.resume=Zt,d.pause=Zt,d}}const u=Wt;a.call=(d,_,g)=>Gn(d,u,_,g);let f=!1;r==="post"?a.scheduler=d=>{Gt(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():zh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=hx(t,e,a);return Wr&&(c?c.push(h):l&&h()),h}function Ay(t,e,n){const i=this.proxy,s=Ke(t)?t.includes(".")?J_(i,t):()=>i[t]:t.bind(i,i);let r;qe(e)?r=e:(r=e.handler,n=e);const o=nr(this),a=Ma(s,r.bind(i),n);return o(),a}function J_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Cy(t,e,n=nt){const i=Wn(),s=bt(e),r=cn(e),o=Q_(t,s),a=s_((l,c)=>{let u,f=nt,h;return Z_(()=>{const d=t[s];on(u,d)&&(u=d,c())}),{get(){return l(),n.get?n.get(u):u},set(d){const _=n.set?n.set(d):d;if(!on(_,u)&&!(f!==nt&&on(d,f)))return;const g=i.vnode.props;g&&(e in g||s in g||r in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${r}`in g)||(u=d,c()),i.emit(`update:${e}`,_),on(d,_)&&on(d,f)&&!on(_,h)&&c(),f=d,h=_}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||nt:a,done:!1}:{done:!0}}}},a}const Q_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${cn(e)}Modifiers`];function Ry(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||nt;let s=n;const r=e.startsWith("update:"),o=r&&Q_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Ke(u)?u.trim():u)),o.number&&(s=n.map($o)));let a,l=i[a=qs(e)]||i[a=qs(bt(e))];!l&&r&&(l=i[a=qs(cn(e))]),l&&Gn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gn(c,t,6,s)}}function ev(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=ev(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(gt(t)&&i.set(t,null),null):(De(r)?r.forEach(l=>o[l]=null):it(o,r),gt(t)&&i.set(t,o),o)}function Dc(t,e){return!t||!Ss(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,cn(e))||ft(t,e))}function Cl(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=Qo(t);let p,b;try{if(n.shapeFlag&4){const E=s||i,w=E;p=Mn(c.call(w,E,u,f,d,h,_)),b=a}else{const E=e;p=Mn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),b=e.props?a:Iy(a)}}catch(E){Ho.length=0,fr(E,t,1),p=tt(kt)}let v=p;if(b&&g!==!1){const E=Object.keys(b),{shapeFlag:w}=v;E.length&&w&7&&(r&&E.some(vc)&&(b=Py(b,r)),v=fi(v,b,!1,!0))}return n.dirs&&(v=fi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Fi(v,n.transition),p=v,Qo(m),p}function wy(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(Bi(s)){if(s.type!==kt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ss(n))&&((e||(e={}))[n]=t[n]);return e},Py=(t,e)=>{const n={};for(const i in t)(!vc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ny(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?fp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Dc(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?fp(i,o,c):!0:!!o;return!1}function fp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Dc(n,r))return!0}return!1}function Oc({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jl=t=>t.__isSuspense;let Sf=0;const Ly={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)Oy(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Uy(t,e,n,i,s,o,a,l,c)}},hydrate:Fy,normalize:By},Dy=Ly;function na(t,e){const n=t.props&&t.props[e];qe(n)&&n()}function Oy(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=tv(t,s,i,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,r,o),h.deps>0?(na(t,"onPending"),na(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),kr(h,t.ssFallback)):h.resolve(!1,!0)}function Uy(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:_,pendingBranch:g,isInFallback:m,isHydrating:p}=f;if(g)f.pendingBranch=h,Zn(h,g)?(l(g,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():m&&(p||(l(_,d,n,i,s,null,r,o,a),kr(f,d)))):(f.pendingId=Sf++,p?(f.isHydrating=!1,f.activeBranch=g):c(g,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(_,d,n,i,s,null,r,o,a),kr(f,d))):_&&Zn(h,_)?(l(_,h,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(_&&Zn(h,_))l(_,h,n,i,s,f,r,o,a),kr(f,h);else if(na(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Sf++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:b,pendingId:v}=f;b>0?setTimeout(()=>{f.pendingId===v&&f.fallback(d)},b):b===0&&f.fallback(d)}}function tv(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:_,o:{parentNode:g,remove:m}}=c;let p;const b=ky(t);b&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const v=t.props?qo(t.props.timeout):void 0,E=r,w={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Sf++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(C=!1,P=!1){const{vnode:L,activeBranch:M,pendingBranch:y,pendingId:N,effects:D,parentComponent:k,container:j}=w;let te=!1;w.isHydrating?w.isHydrating=!1:C||(te=M&&y.transition&&y.transition.mode==="out-in",te&&(M.transition.afterLeave=()=>{N===w.pendingId&&(h(y,j,r===E?_(M):r,0),Zo(D))}),M&&(g(M.el)===j&&(r=_(M)),d(M,k,w,!0)),te||h(y,j,r,0)),kr(w,y),w.pendingBranch=null,w.isInFallback=!1;let z=w.parent,re=!1;for(;z;){if(z.pendingBranch){z.effects.push(...D),re=!0;break}z=z.parent}!re&&!te&&Zo(D),w.effects=[],b&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!P&&e.resolve()),na(L,"onResolve")},fallback(C){if(!w.pendingBranch)return;const{vnode:P,activeBranch:L,parentComponent:M,container:y,namespace:N}=w;na(P,"onFallback");const D=_(L),k=()=>{w.isInFallback&&(f(null,C,y,D,M,null,N,a,l),kr(w,C))},j=C.transition&&C.transition.mode==="out-in";j&&(L.transition.afterLeave=k),w.isInFallback=!0,d(L,M,null,!0),j||k()},move(C,P,L){w.activeBranch&&h(w.activeBranch,C,P,L),w.container=C},next(){return w.activeBranch&&_(w.activeBranch)},registerDep(C,P,L){const M=!!w.pendingBranch;M&&w.deps++;const y=C.vnode.el;C.asyncDep.catch(N=>{fr(N,C,0)}).then(N=>{if(C.isUnmounted||w.isUnmounted||w.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:D}=C;bf(C,N,!1),y&&(D.el=y);const k=!y&&C.subTree.el;P(C,D,g(y||C.subTree.el),y?null:_(C.subTree),w,o,L),k&&m(k),Oc(C,D.el),M&&--w.deps===0&&w.resolve()})},unmount(C,P){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,n,C,P),w.pendingBranch&&d(w.pendingBranch,n,C,P)}};return w}function Fy(t,e,n,i,s,r,o,a,l){const c=e.suspense=tv(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function By(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=hp(i?n.default:n),t.ssFallback=i?hp(n.fallback):tt(kt)}function hp(t){let e;if(qe(t)){const n=tr&&t._c;n&&(t._d=!1,en()),t=t(),n&&(t._d=!0,e=un,iv())}return De(t)&&(t=wy(t)),t=Mn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function nv(t,e){e&&e.pendingBranch?De(t)?e.effects.push(...t):e.effects.push(t):Zo(t)}function kr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,Oc(i,s))}function ky(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Dt=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),Js=Symbol.for("v-stc"),Ho=[];let un=null;function en(t=!1){Ho.push(un=t?null:[])}function iv(){Ho.pop(),un=Ho[Ho.length-1]||null}let tr=1;function xf(t,e=!1){tr+=t,t<0&&un&&e&&(un.hasOnce=!0)}function sv(t){return t.dynamicChildren=tr>0?un||Xs:null,iv(),tr>0&&un&&un.push(t),t}function Nn(t,e,n,i,s,r){return sv(mt(t,e,n,i,s,r,!0))}function Ql(t,e,n,i,s){return sv(tt(t,e,n,i,s,!0))}function Bi(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}function Vy(t){}const rv=({key:t})=>t??null,Rl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||$t(t)||qe(t)?{i:Xt,r:t,k:e,f:!!n}:t:null);function mt(t,e=null,n=null,i=0,s=null,r=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rv(e),ref:e&&Rl(e),scopeId:Rc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(ed(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),tr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const tt=Hy;function Hy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===w_)&&(t=kt),Bi(t)){const a=fi(t,e,!0);return n&&ed(a,n),tr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag=-2,a}if(jy(t)&&(t=t.__vccOpts),e){e=ov(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=lo(a)),gt(l)&&(Cc(l)&&!De(l)&&(l=it({},l)),e.style=ur(l))}const o=Ke(t)?1:Jl(t)?128:p_(t)?64:gt(t)?4:qe(t)?2:0;return mt(t,e,n,i,s,o,r,!0)}function ov(t){return t?Cc(t)||F_(t)?it({},t):t:null}function fi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?lv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&rv(c),ref:e&&e.ref?n&&r?De(r)?r.concat(Rl(e)):[r,Rl(e)]:Rl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Fi(u,l.clone(u)),u}function Qs(t=" ",e=0){return tt(fs,null,t,e)}function av(t,e){const n=tt(Js,null,t);return n.staticCount=e,n}function yf(t="",e=!1){return e?(en(),Ql(kt,null,t)):tt(kt,null,t)}function Mn(t){return t==null||typeof t=="boolean"?tt(kt):De(t)?tt(Dt,null,t.slice()):Bi(t)?ts(t):tt(fs,null,String(t))}function ts(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function ed(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(De(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ed(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!F_(e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),i&64?(n=16,e=[Qs(e)]):n=8);t.children=e,t.shapeFlag|=n}function lv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=lo([e.class,i.class]));else if(s==="style")e.style=ur([e.style,i.style]);else if(Ss(s)){const r=e[s],o=i[s];o&&r!==o&&!(De(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function yn(t,e,n,i=null){Gn(t,e,7,[n,i])}const zy=D_();let Gy=0;function cv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||zy,r={uid:Gy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:k_(i,s),emitsOptions:ev(i,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ry.bind(null,r),t.ce&&t.ce(r),r}let Wt=null;const Wn=()=>Wt||Xt;let ec,Mf;{const t=_a(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ec=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),Mf=e("__VUE_SSR_SETTERS__",n=>Wr=n)}const nr=t=>{const e=Wt;return ec(t),t.scope.on(),()=>{t.scope.off(),ec(e)}},Tf=()=>{Wt&&Wt.scope.off(),ec(null)};function uv(t){return t.vnode.shapeFlag&4}let Wr=!1;function fv(t,e=!1,n=!1){e&&Mf(e);const{props:i,children:s}=t.vnode,r=uv(t);_y(t,i,r,e),xy(t,s,n);const o=r?Wy(t,e):void 0;return e&&Mf(!1),o}function Wy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gf);const{setup:i}=n;if(i){Ms();const s=t.setupContext=i.length>1?dv(t):null,r=nr(t),o=co(i,t,0,[t.props,s]),a=Sc(o);if(Ts(),r(),(a||t.sp)&&!us(t)&&Xh(t),a){if(o.then(Tf,Tf),e)return o.then(l=>{bf(t,l,e)}).catch(l=>{fr(l,t,0)});t.asyncDep=o}else bf(t,o,e)}else hv(t,e)}function bf(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=Hh(e)),hv(t,n)}let tc,Af;function Xy(t){tc=t,Af=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Yx))}}const $y=()=>!tc;function hv(t,e,n){const i=t.type;if(!t.render){if(!e&&tc&&!i.render){const s=i.template||Zh(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=it(it({isCustomElement:r,delimiters:a},o),l);i.render=tc(s,c)}}t.render=i.render||Zt,Af&&Af(t)}{const s=nr(t);Ms();try{cy(t)}finally{Ts(),s()}}}const qy={get(t,e){return an(t,"get",""),t[e]}};function dv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qy),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hh(n_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ko)return ko[n](t)},has(e,n){return n in e||n in ko}})):t.proxy}function Cf(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function jy(t){return qe(t)&&"__vccOpts"in t}const Bn=(t,e)=>lx(t,e,Wr);function Xr(t,e,n){const i=arguments.length;return i===2?gt(e)&&!De(e)?Bi(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bi(n)&&(n=[n]),tt(t,e,n))}function Yy(){}function Ky(t,e,n,i){const s=n[i];if(s&&pv(s,t))return s;const r=e();return r.memo=t.slice(),r.cacheIndex=i,n[i]=r}function pv(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(on(n[i],e[i]))return!1;return tr>0&&un&&un.push(t),!0}const mv="3.5.13",Zy=Zt,Jy=_x,Qy=Lr,eM=f_,tM={createComponentInstance:cv,setupComponent:fv,renderComponentRoot:Cl,setCurrentRenderingInstance:Qo,isVNode:Bi,normalizeVNode:Mn,getComponentPublicInstance:Ta,ensureValidVNode:Kh,pushWarningContext:dx,popWarningContext:px},nM=tM,iM=null,sM=null,rM=null;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rf;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{Rf=dp.createPolicy("vue",{createHTML:t=>t})}catch{}const gv=Rf?t=>Rf.createHTML(t):t=>t,oM="http://www.w3.org/2000/svg",aM="http://www.w3.org/1998/Math/MathML",Ti=typeof document<"u"?document:null,pp=Ti&&Ti.createElement("template"),lM={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ti.createElementNS(oM,t):e==="mathml"?Ti.createElementNS(aM,t):n?Ti.createElement(t,{is:n}):Ti.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ti.createTextNode(t),createComment:t=>Ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{pp.innerHTML=gv(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=pp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zi="transition",So="animation",$r=Symbol("_vtc"),_v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vv=it({},Wh,_v),cM=t=>(t.displayName="Transition",t.props=vv,t),uM=cM((t,{slots:e})=>Xr(E_,Ev(t),e)),Is=(t,e=[])=>{De(t)?t.forEach(n=>n(...e)):t&&t(...e)},mp=t=>t?De(t)?t.some(e=>e.length>1):t.length>1:!1;function Ev(t){const e={};for(const D in t)D in _v||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=fM(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:v,onLeave:E,onLeaveCancelled:w,onBeforeAppear:C=p,onAppear:P=b,onAppearCancelled:L=v}=e,M=(D,k,j,te)=>{D._enterCancelled=te,Zi(D,k?u:a),Zi(D,k?c:o),j&&j()},y=(D,k)=>{D._isLeaving=!1,Zi(D,f),Zi(D,d),Zi(D,h),k&&k()},N=D=>(k,j)=>{const te=D?P:b,z=()=>M(k,D,j);Is(te,[k,z]),gp(()=>{Zi(k,D?l:r),ii(k,D?u:a),mp(te)||_p(k,i,g,z)})};return it(e,{onBeforeEnter(D){Is(p,[D]),ii(D,r),ii(D,o)},onBeforeAppear(D){Is(C,[D]),ii(D,l),ii(D,c)},onEnter:N(!1),onAppear:N(!0),onLeave(D,k){D._isLeaving=!0;const j=()=>y(D,k);ii(D,f),D._enterCancelled?(ii(D,h),wf()):(wf(),ii(D,h)),gp(()=>{D._isLeaving&&(Zi(D,f),ii(D,d),mp(E)||_p(D,i,m,j))}),Is(E,[D,j])},onEnterCancelled(D){M(D,!1,void 0,!0),Is(v,[D])},onAppearCancelled(D){M(D,!0,void 0,!0),Is(L,[D])},onLeaveCancelled(D){y(D),Is(w,[D])}})}function fM(t){if(t==null)return null;if(gt(t))return[vu(t.enter),vu(t.leave)];{const e=vu(t);return[e,e]}}function vu(t){return qo(t)}function ii(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$r]||(t[$r]=new Set)).add(e)}function Zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[$r];n&&(n.delete(e),n.size||(t[$r]=void 0))}function gp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hM=0;function _p(t,e,n,i){const s=t._endId=++hM,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Sv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function Sv(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${zi}Delay`),r=i(`${zi}Duration`),o=vp(s,r),a=i(`${So}Delay`),l=i(`${So}Duration`),c=vp(a,l);let u=null,f=0,h=0;e===zi?o>0&&(u=zi,f=o,h=r.length):e===So?c>0&&(u=So,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?zi:So:null,h=u?u===zi?r.length:l.length:0);const d=u===zi&&/\b(transform|all)(,|$)/.test(i(`${zi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ep(n)+Ep(t[i])))}function Ep(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wf(){return document.body.offsetHeight}function dM(t,e,n){const i=t[$r];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nc=Symbol("_vod"),xv=Symbol("_vsh"),td={beforeMount(t,{value:e},{transition:n}){t[nc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),xo(t,!0),i.enter(t)):i.leave(t,()=>{xo(t,!1)}):xo(t,e))},beforeUnmount(t,{value:e}){xo(t,e)}};function xo(t,e){t.style.display=e?t[nc]:"none",t[xv]=!e}function pM(){td.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const yv=Symbol("");function mM(t){const e=Wn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ic(r,s))},i=()=>{const s=t(e.proxy);e.ce?ic(e.ce,s):If(e.subTree,s),n(s)};$h(()=>{Zo(i)}),ya(()=>{Zs(i,Zt,{flush:"post"});const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Lc(()=>s.disconnect())})}function If(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{If(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ic(t.el,e);else if(t.type===Dt)t.children.forEach(n=>If(n,e));else if(t.type===Js){let{el:n,anchor:i}=t;for(;n&&(ic(n,e),n!==i);)n=n.nextSibling}}function ic(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[yv]=i}}const gM=/(^|;)\s*display\s*:/;function _M(t,e,n){const i=t.style,s=Ke(n);let r=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wl(i,a,"")}else for(const o in e)n[o]==null&&wl(i,o,"");for(const o in n)o==="display"&&(r=!0),wl(i,o,n[o])}else if(s){if(e!==n){const o=i[yv];o&&(n+=";"+o),i.cssText=n,r=gM.test(n)}}else e&&t.removeAttribute("style");nc in t&&(t[nc]=r?i.display:"",t[xv]&&(i.display="none"))}const Sp=/\s*!important$/;function wl(t,e,n){if(De(n))n.forEach(i=>wl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=vM(t,e);Sp.test(n)?t.setProperty(cn(i),n.replace(Sp,""),"important"):t[i]=n}}const xp=["Webkit","Moz","ms"],Eu={};function vM(t,e){const n=Eu[e];if(n)return n;let i=bt(e);if(i!=="filter"&&i in t)return Eu[e]=i;i=ys(i);for(let s=0;s<xp.length;s++){const r=xp[s]+i;if(r in t)return Eu[e]=r}return e}const yp="http://www.w3.org/1999/xlink";function Mp(t,e,n,i,s,r=Ug(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yp,e.slice(6,e.length)):t.setAttributeNS(yp,e,n):n==null||r&&!Lh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":En(n)?String(n):n)}function Tp(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gv(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ci(t,e,n,i){t.addEventListener(e,n,i)}function EM(t,e,n,i){t.removeEventListener(e,n,i)}const bp=Symbol("_vei");function SM(t,e,n,i,s=null){const r=t[bp]||(t[bp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=xM(e);if(i){const c=r[e]=TM(i,s);Ci(t,a,c,l)}else o&&(EM(t,a,o,l),r[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function xM(t){let e;if(Ap.test(t)){e={};let i;for(;i=t.match(Ap);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cn(t.slice(2)),e]}let Su=0;const yM=Promise.resolve(),MM=()=>Su||(yM.then(()=>Su=0),Su=Date.now());function TM(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Gn(bM(i,n.value),e,5,[i])};return n.value=t,n.attached=MM(),n}function bM(t,e){if(De(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AM=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?dM(t,i,o):e==="style"?_M(t,n,i):Ss(e)?vc(e)||SM(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CM(t,e,i,o))?(Tp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mp(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(i))?Tp(t,bt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Mp(t,e,i,o))};function CM(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cp(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cp(e)&&Ke(n)?!1:e in t}const Rp={};/*! #__NO_SIDE_EFFECTS__ */function Mv(t,e,n){const i=hi(t,e);ga(i)&&it(i,e);class s extends Uc{constructor(o){super(i,o,n)}}return s.def=i,s}/*! #__NO_SIDE_EFFECTS__ */const RM=(t,e)=>Mv(t,e,Ov),wM=typeof HTMLElement<"u"?HTMLElement:class{};class Uc extends wM{constructor(e,n={},i=oc){super(),this._def=e,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==oc?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof Uc){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,Sa(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:o}=i;let a;if(r&&!De(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=qo(this._props[l])),(a||(a=Object.create(null)))[bt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const i in n)ft(this,i)||Object.defineProperty(this,i,{get:()=>Vn(n[i])})}_resolveProps(e){const{props:n}=e,i=De(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(const s of i.map(bt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const n=this.hasAttribute(e);let i=n?this.getAttribute(e):Rp;const s=bt(e);n&&this._numberProps&&this._numberProps[s]&&(i=qo(i)),this._setProp(s,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!1){if(n!==this._props[e]&&(n===Rp?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),i)){const r=this._ob;r&&r.disconnect(),n===!0?this.setAttribute(cn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(cn(e),n+""):n||this.removeAttribute(cn(e)),r&&r.observe(this,{attributes:!0})}}_update(){Dv(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const n=tt(this._def,it(e,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,ga(o[0])?it({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),cn(r)!==r&&s(cn(r),o)},this._setParent()}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const i=this._nonce;for(let s=e.length-1;s>=0;s--){const r=document.createElement("style");i&&r.setAttribute("nonce",i),r.textContent=e[s],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let n;for(;n=this.firstChild;){const i=n.nodeType===1&&n.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),n=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const s=e[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const c=n+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let f;for(;f=u.nextNode();)f.setAttribute(c,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function Tv(t){const e=Wn(),n=e&&e.ce;return n||null}function IM(){const t=Tv();return t&&t.shadowRoot}function PM(t="$style"){{const e=Wn();if(!e)return nt;const n=e.type.__cssModules;if(!n)return nt;const i=n[t];return i||nt}}const bv=new WeakMap,Av=new WeakMap,sc=Symbol("_moveCb"),wp=Symbol("_enterCb"),NM=t=>(delete t.props.mode,t),LM=NM({name:"TransitionGroup",props:it({},vv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Wn(),i=Gh();let s,r;return Pc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!BM(s[0].el,n.vnode.el,o))return;s.forEach(OM),s.forEach(UM);const a=s.filter(FM);wf(),a.forEach(l=>{const c=l.el,u=c.style;ii(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[sc]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[sc]=null,Zi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=ot(t),a=Ev(o);let l=o.tag||Dt;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Fi(u,Gr(u,a,i,n)),bv.set(u,u.el.getBoundingClientRect()))}r=e.default?wc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Fi(u,Gr(u,a,i,n))}return tt(l,null,r)}}}),DM=LM;function OM(t){const e=t.el;e[sc]&&e[sc](),e[wp]&&e[wp]()}function UM(t){Av.set(t,t.el.getBoundingClientRect())}function FM(t){const e=bv.get(t),n=Av.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function BM(t,e,n){const i=t.cloneNode(),s=t[$r];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=Sv(i);return r.removeChild(i),o}const gs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return De(e)?n=>js(e,n):e};function kM(t){t.target.composing=!0}function Ip(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign"),rc={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Hn]=gs(s);const r=i||s.props&&s.props.type==="number";Ci(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=$o(a)),t[Hn](a)}),n&&Ci(t,"change",()=>{t.value=t.value.trim()}),e||(Ci(t,"compositionstart",kM),Ci(t,"compositionend",Ip),Ci(t,"change",Ip))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Hn]=gs(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?$o(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},nd={deep:!0,created(t,e,n){t[Hn]=gs(n),Ci(t,"change",()=>{const i=t._modelValue,s=qr(t),r=t.checked,o=t[Hn];if(De(i)){const a=va(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(xs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Rv(t,r))})},mounted:Pp,beforeUpdate(t,e,n){t[Hn]=gs(n),Pp(t,e,n)}};function Pp(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(De(e))s=va(e,i.props.value)>-1;else if(xs(e))s=e.has(i.props.value);else{if(e===n)return;s=Ui(e,Rv(t,!0))}t.checked!==s&&(t.checked=s)}const id={created(t,{value:e},n){t.checked=Ui(e,n.props.value),t[Hn]=gs(n),Ci(t,"change",()=>{t[Hn](qr(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Hn]=gs(i),e!==n&&(t.checked=Ui(e,i.props.value))}},Cv={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=xs(e);Ci(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(qr(o)):qr(o));t[Hn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Sa(()=>{t._assigning=!1})}),t[Hn]=gs(i)},mounted(t,{value:e}){Np(t,e)},beforeUpdate(t,e,n){t[Hn]=gs(n)},updated(t,{value:e}){t._assigning||Np(t,e)}};function Np(t,e){const n=t.multiple,i=De(e);if(!(n&&!i&&!xs(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=qr(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=va(e,a)>-1}else o.selected=e.has(a);else if(Ui(qr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qr(t){return"_value"in t?t._value:t.value}function Rv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wv={created(t,e,n){tl(t,e,n,null,"created")},mounted(t,e,n){tl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){tl(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){tl(t,e,n,i,"updated")}};function Iv(t,e){switch(t){case"SELECT":return Cv;case"TEXTAREA":return rc;default:switch(e){case"checkbox":return nd;case"radio":return id;default:return rc}}}function tl(t,e,n,i,s){const o=Iv(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function VM(){rc.getSSRProps=({value:t})=>({value:t}),id.getSSRProps=({value:t},e)=>{if(e.props&&Ui(e.props.value,t))return{checked:!0}},nd.getSSRProps=({value:t},e)=>{if(De(t)){if(e.props&&va(t,e.props.value)>-1)return{checked:!0}}else if(xs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},wv.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Iv(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const HM=["ctrl","shift","alt","meta"],zM={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HM.some(n=>t[`${n}Key`]&&!e.includes(n))},GM=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=zM[e[o]];if(a&&a(s,e))return}return t(s,...r)})},WM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},XM=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=cn(s.key);if(e.some(o=>o===r||WM[o]===r))return t(s)})},Pv=it({patchProp:AM},lM);let zo,Lp=!1;function Nv(){return zo||(zo=W_(Pv))}function Lv(){return zo=Lp?zo:X_(Pv),Lp=!0,zo}const Dv=(...t)=>{Nv().render(...t)},$M=(...t)=>{Lv().hydrate(...t)},oc=(...t)=>{const e=Nv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Fv(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Uv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Ov=(...t)=>{const e=Lv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Fv(i);if(s)return n(s,!0,Uv(s))},e};function Uv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fv(t){return Ke(t)?document.querySelector(t):t}let Dp=!1;const qM=()=>{Dp||(Dp=!0,VM(),pM())},jM=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:E_,BaseTransitionPropsValidators:Wh,Comment:kt,DeprecationTypes:rM,EffectScope:Dh,ErrorCodes:gx,ErrorTypeStrings:Jy,Fragment:Dt,KeepAlive:zx,ReactiveEffect:jo,Static:Js,Suspense:Dy,Teleport:Tx,Text:fs,TrackOpTypes:cx,Transition:uM,TransitionGroup:DM,TriggerOpTypes:ux,VueElement:Uc,assertNumber:mx,callWithAsyncErrorHandling:Gn,callWithErrorHandling:co,camelize:bt,capitalize:ys,cloneVNode:fi,compatUtils:sM,computed:Bn,createApp:oc,createBlock:Ql,createCommentVNode:yf,createElementBlock:Nn,createElementVNode:mt,createHydrationRenderer:X_,createPropsRestProxy:ay,createRenderer:W_,createSSRApp:Ov,createSlots:qx,createStaticVNode:av,createTextVNode:Qs,createVNode:tt,customRef:s_,defineAsyncComponent:Vx,defineComponent:hi,defineCustomElement:Mv,defineEmits:Zx,defineExpose:Jx,defineModel:ty,defineOptions:Qx,defineProps:Kx,defineSSRCustomElement:RM,defineSlots:ey,devtools:Qy,effect:PS,effectScope:RS,getCurrentInstance:Wn,getCurrentScope:Vg,getCurrentWatcher:fx,getTransitionRawChildren:wc,guardReactiveProps:ov,h:Xr,handleError:fr,hasInjectionContext:gy,hydrate:$M,hydrateOnIdle:Dx,hydrateOnInteraction:Bx,hydrateOnMediaQuery:Fx,hydrateOnVisible:Ux,initCustomFormatter:Yy,initDirectivesForSSR:qM,inject:li,isMemoSame:pv,isProxy:Cc,isReactive:ls,isReadonly:ms,isRef:$t,isRuntimeOnly:$y,isShallow:Pn,isVNode:Bi,markRaw:n_,mergeDefaults:ry,mergeModels:oy,mergeProps:lv,nextTick:Sa,normalizeClass:lo,normalizeProps:Ig,normalizeStyle:ur,onActivated:x_,onBeforeMount:T_,onBeforeUnmount:Nc,onBeforeUpdate:$h,onDeactivated:y_,onErrorCaptured:R_,onMounted:ya,onRenderTracked:C_,onRenderTriggered:A_,onScopeDispose:wS,onServerPrefetch:b_,onUnmounted:Lc,onUpdated:Pc,onWatcherCleanup:o_,openBlock:en,popScopeId:xx,provide:Vo,proxyRefs:Hh,pushScopeId:Sx,queuePostFlushCb:Zo,reactive:Ea,readonly:kh,ref:cs,registerRuntimeCompiler:Xy,render:Dv,renderList:I_,renderSlot:P_,resolveComponent:jh,resolveDirective:$x,resolveDynamicComponent:Xx,resolveFilter:iM,resolveTransitionHooks:Gr,setBlockTracking:xf,setDevtoolsHook:eM,setTransitionHooks:Fi,shallowReactive:Bh,shallowReadonly:ZS,shallowRef:Vh,ssrContextKey:Y_,ssrUtils:nM,stop:NS,toDisplayString:as,toHandlerKey:qs,toHandlers:jx,toRaw:ot,toRef:ox,toRefs:ix,toValue:ex,transformVNodeArgs:Vy,triggerRef:QS,unref:Vn,useAttrs:sy,useCssModule:PM,useCssVars:mM,useHost:Tv,useId:Ax,useModel:Cy,useSSRContext:K_,useShadowRoot:IM,useSlots:iy,useTemplateRef:Cx,useTransitionState:Gh,vModelCheckbox:nd,vModelDynamic:wv,vModelRadio:id,vModelSelect:Cv,vModelText:rc,vShow:td,version:mv,warn:Zy,watch:Zs,watchEffect:Ty,watchPostEffect:by,watchSyncEffect:Z_,withAsyncContext:ly,withCtx:rs,withDefaults:ny,withDirectives:h_,withKeys:XM,withMemo:Ky,withModifiers:GM,withScopeId:yx},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Bv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function YM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bv(t.default)}const _t=Object.assign;function xu(t,e){const n={};for(const i in e){const s=e[i];n[i]=ni(s)?s.map(t):t(s)}return n}const Go=()=>{},ni=Array.isArray,kv=/#/g,KM=/&/g,ZM=/\//g,JM=/=/g,QM=/\?/g,Vv=/\+/g,eT=/%5B/g,tT=/%5D/g,Hv=/%5E/g,nT=/%60/g,zv=/%7B/g,iT=/%7C/g,Gv=/%7D/g,sT=/%20/g;function sd(t){return encodeURI(""+t).replace(iT,"|").replace(eT,"[").replace(tT,"]")}function rT(t){return sd(t).replace(zv,"{").replace(Gv,"}").replace(Hv,"^")}function Pf(t){return sd(t).replace(Vv,"%2B").replace(sT,"+").replace(kv,"%23").replace(KM,"%26").replace(nT,"`").replace(zv,"{").replace(Gv,"}").replace(Hv,"^")}function oT(t){return Pf(t).replace(JM,"%3D")}function aT(t){return sd(t).replace(kv,"%23").replace(QM,"%3F")}function lT(t){return t==null?"":aT(t).replace(ZM,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cT=/\/$/,uT=t=>t.replace(cT,"");function yu(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pT(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ia(o)}}function fT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hT(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&jr(e.matched[i],n.matched[s])&&Wv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dT(t[n],e[n]))return!1;return!0}function dT(t,e){return ni(t)?Up(t,e):ni(e)?Up(e,t):t===e}function Up(t,e){return ni(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function pT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var sa;(function(t){t.pop="pop",t.push="push"})(sa||(sa={}));var Wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wo||(Wo={}));function mT(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uT(t)}const gT=/^[^#]+#/;function _T(t,e){return t.replace(gT,"#")+e}function vT(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fc=()=>({left:window.scrollX,top:window.scrollY});function ET(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Fp(t,e){return(history.state?history.state.position-e:-1)+t}const Nf=new Map;function ST(t,e){Nf.set(t,e)}function xT(t){const e=Nf.get(t);return Nf.delete(t),e}let yT=()=>location.protocol+"//"+location.host;function Xv(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Op(l,"")}return Op(n,t)+i+s}function MT(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Xv(t,location),_=n.value,g=e.value;let m=0;if(h){if(n.value=d,e.value=h,o&&o===_){o=null;return}m=g?h.position-g.position:0}else i(d);s.forEach(p=>{p(n.value,_,{delta:m,type:sa.pop,direction:m?m>0?Wo.forward:Wo.back:Wo.unknown})})};function l(){o=n.value}function c(h){s.push(h);const d=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(_t({},h.state,{scroll:Fc()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Bp(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Fc():null}}function TT(t){const{history:e,location:n}=window,i={value:Xv(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:yT()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(l,c){const u=_t({},e.state,Bp(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=_t({},s.value,e.state,{forward:l,scroll:Fc()});r(u.current,u,!0);const f=_t({},Bp(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function bT(t){t=mT(t);const e=TT(t),n=MT(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=_t({location:"",base:t,go:i,createHref:_T.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AT(t){return typeof t=="string"||t&&typeof t=="object"}function $v(t){return typeof t=="string"||typeof t=="symbol"}const qv=Symbol("");var kp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kp||(kp={}));function Yr(t,e){return _t(new Error,{type:t,[qv]:!0},e)}function mi(t,e){return t instanceof Error&&qv in t&&(e==null||!!(t.type&e))}const Vp="[^/]+?",CT={sensitive:!1,strict:!1,start:!0,end:!0},RT=/[.+*?^${}()[\]/\\]/g;function wT(t,e){const n=_t({},CT,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(RT,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:g,optional:m,regexp:p}=h;r.push({name:_,repeatable:g,optional:m});const b=p||Vp;if(b!==Vp){d+=10;try{new RegExp(`(${b})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+E.message)}}let v=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),s+=v,d+=20,m&&(d+=-8),g&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=r[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:g,optional:m}=d,p=_ in c?c[_]:"";if(ni(p)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=ni(p)?p.join("/"):p;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function IT(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jv(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=IT(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Hp(i))return 1;if(Hp(s))return-1}return s.length-i.length}function Hp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PT={type:0,value:""},NT=/[a-zA-Z0-9_]/;function LT(t){if(!t)return[[]];if(t==="/")return[[PT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:NT.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function DT(t,e,n){const i=wT(LT(t.path),n),s=_t(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OT(t,e){const n=[],i=new Map;e=Xp({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,d){const _=!d,g=Gp(f);g.aliasOf=d&&d.record;const m=Xp(e,f),p=[g];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of E)p.push(Gp(_t({},g,{components:d?d.record.components:g.components,path:w,aliasOf:d?d.record:g})))}let b,v;for(const E of p){const{path:w}=E;if(h&&w[0]!=="/"){const C=h.record.path,P=C[C.length-1]==="/"?"":"/";E.path=h.record.path+(w&&P+w)}if(b=DT(E,h,m),d?d.alias.push(b):(v=v||b,v!==b&&v.alias.push(b),_&&f.name&&!Wp(b)&&o(f.name)),Yv(b)&&l(b),g.children){const C=g.children;for(let P=0;P<C.length;P++)r(C[P],b,d&&d.children[P])}d=d||b}return v?()=>{o(v)}:Go}function o(f){if($v(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=BT(f,n);n.splice(h,0,f),f.record.name&&!Wp(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},g,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Yr(1,{location:f});m=d.record.name,_=_t(zp(h.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&zp(f.params,d.keys.map(v=>v.name))),g=d.stringify(_)}else if(f.path!=null)g=f.path,d=n.find(v=>v.re.test(g)),d&&(_=d.parse(g),m=d.record.name);else{if(d=h.name?i.get(h.name):n.find(v=>v.re.test(h.path)),!d)throw Yr(1,{location:f,currentLocation:h});m=d.record.name,_=_t({},h.params,f.params),g=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:g,params:_,matched:p,meta:FT(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function zp(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Gp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FT(t){return t.reduce((e,n)=>_t(e,n.meta),{})}function Xp(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function BT(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;jv(t,e[r])<0?i=r:n=r+1}const s=kT(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function kT(t){let e=t;for(;e=e.parent;)if(Yv(e)&&jv(t,e)===0)return e}function Yv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Vv," "),o=r.indexOf("="),a=ia(o<0?r:r.slice(0,o)),l=o<0?null:ia(r.slice(o+1));if(a in e){let c=e[a];ni(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $p(t){let e="";for(let n in t){const i=t[n];if(n=oT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ni(i)?i.map(r=>r&&Pf(r)):[i&&Pf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function HT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ni(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zT=Symbol(""),qp=Symbol(""),rd=Symbol(""),Kv=Symbol(""),Lf=Symbol("");function yo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ns(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Yr(4,{from:n,to:e})):h instanceof Error?l(h):AT(h)?l(Yr(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Mu(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Bv(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ns(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=YM(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ns(d,n,i,o,a,s)()}))}}return r}function jp(t){const e=li(rd),n=li(Kv),i=Bn(()=>{const l=Vn(t.to);return e.resolve(l)}),s=Bn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(jr.bind(null,u));if(h>-1)return h;const d=Yp(l[c-2]);return c>1&&Yp(u)===d&&f[f.length-1].path!==d?f.findIndex(jr.bind(null,l[c-2])):h}),r=Bn(()=>s.value>-1&&qT(n.params,i.value.params)),o=Bn(()=>s.value>-1&&s.value===n.matched.length-1&&Wv(n.params,i.value.params));function a(l={}){if($T(l)){const c=e[Vn(t.replace)?"replace":"push"](Vn(t.to)).catch(Go);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Bn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function GT(t){return t.length===1?t[0]:t}const WT=hi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jp,setup(t,{slots:e}){const n=Ea(jp(t)),{options:i}=li(rd),s=Bn(()=>({[Kp(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Kp(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&GT(e.default(n));return t.custom?r:Xr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),XT=WT;function $T(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qT(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ni(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Yp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kp=(t,e,n)=>t??e??n,jT=hi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=li(Lf),s=Bn(()=>t.route||i.value),r=li(qp,0),o=Bn(()=>{let c=Vn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Bn(()=>s.value.matched[o.value]);Vo(qp,Bn(()=>o.value+1)),Vo(zT,a),Vo(Lf,s);const l=cs();return Zs(()=>[l.value,a.value,t.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!jr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Zp(n.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Xr(h,_t({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Zp(n.default,{Component:m,route:c})||m}}});function Zp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zv=jT;function YT(t){const e=OT(t.routes,t),n=t.parseQuery||VT,i=t.stringifyQuery||$p,s=t.history,r=yo(),o=yo(),a=yo(),l=Vh(Gi);let c=Gi;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xu.bind(null,G=>""+G),f=xu.bind(null,lT),h=xu.bind(null,ia);function d(G,ue){let pe,he;return $v(G)?(pe=e.getRecordMatcher(G),he=ue):he=G,e.addRoute(he,pe)}function _(G){const ue=e.getRecordMatcher(G);ue&&e.removeRoute(ue)}function g(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function p(G,ue){if(ue=_t({},ue||l.value),typeof G=="string"){const S=yu(n,G,ue.path),Y=e.resolve({path:S.path},ue),oe=s.createHref(S.fullPath);return _t(S,Y,{params:h(Y.params),hash:ia(S.hash),redirectedFrom:void 0,href:oe})}let pe;if(G.path!=null)pe=_t({},G,{path:yu(n,G.path,ue.path).path});else{const S=_t({},G.params);for(const Y in S)S[Y]==null&&delete S[Y];pe=_t({},G,{params:f(S)}),ue.params=f(ue.params)}const he=e.resolve(pe,ue),He=G.hash||"";he.params=u(h(he.params));const $e=fT(i,_t({},G,{hash:rT(He),path:he.path})),I=s.createHref($e);return _t({fullPath:$e,hash:He,query:i===$p?HT(G.query):G.query||{}},he,{redirectedFrom:void 0,href:I})}function b(G){return typeof G=="string"?yu(n,G,l.value.path):_t({},G)}function v(G,ue){if(c!==G)return Yr(8,{from:ue,to:G})}function E(G){return P(G)}function w(G){return E(_t(b(G),{replace:!0}))}function C(G){const ue=G.matched[G.matched.length-1];if(ue&&ue.redirect){const{redirect:pe}=ue;let he=typeof pe=="function"?pe(G):pe;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=b(he):{path:he},he.params={}),_t({query:G.query,hash:G.hash,params:he.path!=null?{}:G.params},he)}}function P(G,ue){const pe=c=p(G),he=l.value,He=G.state,$e=G.force,I=G.replace===!0,S=C(pe);if(S)return P(_t(b(S),{state:typeof S=="object"?_t({},He,S.state):He,force:$e,replace:I}),ue||pe);const Y=pe;Y.redirectedFrom=ue;let oe;return!$e&&hT(i,he,pe)&&(oe=Yr(16,{to:Y,from:he}),Oe(he,he,!0,!1)),(oe?Promise.resolve(oe):y(Y,he)).catch(Q=>mi(Q)?mi(Q,2)?Q:Ae(Q):H(Q,Y,he)).then(Q=>{if(Q){if(mi(Q,2))return P(_t({replace:I},b(Q.to),{state:typeof Q.to=="object"?_t({},He,Q.to.state):He,force:$e}),ue||Y)}else Q=D(Y,he,!0,I,He);return N(Y,he,Q),Q})}function L(G,ue){const pe=v(G,ue);return pe?Promise.reject(pe):Promise.resolve()}function M(G){const ue=ce.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(G):G()}function y(G,ue){let pe;const[he,He,$e]=KT(G,ue);pe=Mu(he.reverse(),"beforeRouteLeave",G,ue);for(const S of he)S.leaveGuards.forEach(Y=>{pe.push(ns(Y,G,ue))});const I=L.bind(null,G,ue);return pe.push(I),Ie(pe).then(()=>{pe=[];for(const S of r.list())pe.push(ns(S,G,ue));return pe.push(I),Ie(pe)}).then(()=>{pe=Mu(He,"beforeRouteUpdate",G,ue);for(const S of He)S.updateGuards.forEach(Y=>{pe.push(ns(Y,G,ue))});return pe.push(I),Ie(pe)}).then(()=>{pe=[];for(const S of $e)if(S.beforeEnter)if(ni(S.beforeEnter))for(const Y of S.beforeEnter)pe.push(ns(Y,G,ue));else pe.push(ns(S.beforeEnter,G,ue));return pe.push(I),Ie(pe)}).then(()=>(G.matched.forEach(S=>S.enterCallbacks={}),pe=Mu($e,"beforeRouteEnter",G,ue,M),pe.push(I),Ie(pe))).then(()=>{pe=[];for(const S of o.list())pe.push(ns(S,G,ue));return pe.push(I),Ie(pe)}).catch(S=>mi(S,8)?S:Promise.reject(S))}function N(G,ue,pe){a.list().forEach(he=>M(()=>he(G,ue,pe)))}function D(G,ue,pe,he,He){const $e=v(G,ue);if($e)return $e;const I=ue===Gi,S=Dr?history.state:{};pe&&(he||I?s.replace(G.fullPath,_t({scroll:I&&S&&S.scroll},He)):s.push(G.fullPath,He)),l.value=G,Oe(G,ue,pe,I),Ae()}let k;function j(){k||(k=s.listen((G,ue,pe)=>{if(!Me.listening)return;const he=p(G),He=C(he);if(He){P(_t(He,{replace:!0,force:!0}),he).catch(Go);return}c=he;const $e=l.value;Dr&&ST(Fp($e.fullPath,pe.delta),Fc()),y(he,$e).catch(I=>mi(I,12)?I:mi(I,2)?(P(_t(b(I.to),{force:!0}),he).then(S=>{mi(S,20)&&!pe.delta&&pe.type===sa.pop&&s.go(-1,!1)}).catch(Go),Promise.reject()):(pe.delta&&s.go(-pe.delta,!1),H(I,he,$e))).then(I=>{I=I||D(he,$e,!1),I&&(pe.delta&&!mi(I,8)?s.go(-pe.delta,!1):pe.type===sa.pop&&mi(I,20)&&s.go(-1,!1)),N(he,$e,I)}).catch(Go)}))}let te=yo(),z=yo(),re;function H(G,ue,pe){Ae(G);const he=z.list();return he.length?he.forEach(He=>He(G,ue,pe)):console.error(G),Promise.reject(G)}function ve(){return re&&l.value!==Gi?Promise.resolve():new Promise((G,ue)=>{te.add([G,ue])})}function Ae(G){return re||(re=!G,j(),te.list().forEach(([ue,pe])=>G?pe(G):ue()),te.reset()),G}function Oe(G,ue,pe,he){const{scrollBehavior:He}=t;if(!Dr||!He)return Promise.resolve();const $e=!pe&&xT(Fp(G.fullPath,0))||(he||!pe)&&history.state&&history.state.scroll||null;return Sa().then(()=>He(G,ue,$e)).then(I=>I&&ET(I)).catch(I=>H(I,G,ue))}const Ge=G=>s.go(G);let st;const ce=new Set,Me={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:t,push:E,replace:w,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:ve,install(G){const ue=this;G.component("RouterLink",XT),G.component("RouterView",Zv),G.config.globalProperties.$router=ue,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Vn(l)}),Dr&&!st&&l.value===Gi&&(st=!0,E(s.location).catch(He=>{}));const pe={};for(const He in Gi)Object.defineProperty(pe,He,{get:()=>l.value[He],enumerable:!0});G.provide(rd,ue),G.provide(Kv,Bh(pe)),G.provide(Lf,l);const he=G.unmount;ce.add(G),G.unmount=function(){ce.delete(G),ce.size<1&&(c=Gi,k&&k(),k=null,l.value=Gi,st=!1,re=!1),he()}}};function Ie(G){return G.reduce((ue,pe)=>ue.then(()=>M(pe)),Promise.resolve())}return Me}function KT(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>jr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>jr(c,l))||s.push(l))}return[n,i,s]}const ZT="/assets/logo-BuohwxNp.svg",Jv=/^[a-z0-9]+(-[a-z0-9]+)*$/,Bc=(t,e,n,i="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;i=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),c={provider:s.length>0?s[0]:i,prefix:l,name:a};return e&&!Il(c)?null:c}const r=s[0],o=r.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!Il(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:r};return e&&!Il(a,n)?null:a}return null},Il=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,Qv=Object.freeze({left:0,top:0,width:16,height:16}),ac=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),kc=Object.freeze({...Qv,...ac}),Df=Object.freeze({...kc,body:"",hidden:!1});function JT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function Jp(t,e){const n=JT(t,e);for(const i in Df)i in ac?i in t&&!(i in n)&&(n[i]=ac[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function QT(t,e){const n=t.icons,i=t.aliases||Object.create(null),s=Object.create(null);function r(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=i[o]&&i[o].parent,l=a&&r(a);l&&(s[o]=[a].concat(l))}return s[o]}return Object.keys(n).concat(Object.keys(i)).forEach(r),s}function eb(t,e,n){const i=t.icons,s=t.aliases||Object.create(null);let r={};function o(a){r=Jp(i[a]||s[a],r)}return o(e),n.forEach(o),Jp(t,r)}function e0(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const i=QT(t);for(const s in i){const r=i[s];r&&(e(s,eb(t,s,r)),n.push(s))}return n}const tb={provider:"",aliases:{},not_found:{},...Qv};function Tu(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function t0(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Tu(t,tb))return null;const n=e.icons;for(const s in n){const r=n[s];if(!s||typeof r.body!="string"||!Tu(r,Df))return null}const i=e.aliases||Object.create(null);for(const s in i){const r=i[s],o=r.parent;if(!s||typeof o!="string"||!n[o]&&!i[o]||!Tu(r,Df))return null}return e}const Qp=Object.create(null);function nb(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Kr(t,e){const n=Qp[t]||(Qp[t]=Object.create(null));return n[e]||(n[e]=nb(t,e))}function n0(t,e){return t0(e)?e0(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function ib(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let ra=!1;function i0(t){return typeof t=="boolean"&&(ra=t),ra}function sb(t){const e=typeof t=="string"?Bc(t,!0,ra):t;if(e){const n=Kr(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function rb(t,e){const n=Bc(t,!0,ra);if(!n)return!1;const i=Kr(n.provider,n.prefix);return e?ib(i,n.name,e):(i.missing.add(n.name),!0)}function ob(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ra&&!e&&!t.prefix){let s=!1;return t0(t)&&(t.prefix="",e0(t,(r,o)=>{rb(r,o)&&(s=!0)})),s}const n=t.prefix;if(!Il({prefix:n,name:"a"}))return!1;const i=Kr(e,n);return!!n0(i,t)}const s0=Object.freeze({width:null,height:null}),r0=Object.freeze({...s0,...ac}),ab=/(-?[0-9.]*[0-9]+[0-9.]*)/g,lb=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function em(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(ab);if(i===null||!i.length)return t;const s=[];let r=i.shift(),o=lb.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?s.push(r):s.push(Math.ceil(a*e*n)/n)}else s.push(r);if(r=i.shift(),r===void 0)return s.join("");o=!o}}function cb(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const s=t.indexOf(">",i),r=t.indexOf("</"+e);if(s===-1||r===-1)break;const o=t.indexOf(">",r);if(o===-1)break;n+=t.slice(s+1,r).trim(),t=t.slice(0,i).trim()+t.slice(o+1)}return{defs:n,content:t}}function ub(t,e){return t?"<defs>"+t+"</defs>"+e:e}function fb(t,e,n){const i=cb(t);return ub(i.defs,e+i.content+n)}const hb=t=>t==="unset"||t==="undefined"||t==="none";function db(t,e){const n={...kc,...t},i={...r0,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(g=>{const m=[],p=g.hFlip,b=g.vFlip;let v=g.rotate;p?b?v+=2:(m.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),m.push("scale(-1 1)"),s.top=s.left=0):b&&(m.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),m.push("scale(1 -1)"),s.top=s.left=0);let E;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:E=s.height/2+s.top,m.unshift("rotate(90 "+E.toString()+" "+E.toString()+")");break;case 2:m.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:E=s.width/2+s.left,m.unshift("rotate(-90 "+E.toString()+" "+E.toString()+")");break}v%2===1&&(s.left!==s.top&&(E=s.left,s.left=s.top,s.top=E),s.width!==s.height&&(E=s.width,s.width=s.height,s.height=E)),m.length&&(r=fb(r,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=s.width,c=s.height;let u,f;o===null?(f=a===null?"1em":a==="auto"?c:a,u=em(f,l/c)):(u=o==="auto"?l:o,f=a===null?em(u,c/l):a==="auto"?c:a);const h={},d=(g,m)=>{hb(m)||(h[g]=m.toString())};d("width",u),d("height",f);const _=[s.left,s.top,l,c];return h.viewBox=_.join(" "),{attributes:h,viewBox:_,body:r}}const pb=/\sid="(\S+)"/g,mb="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gb=0;function _b(t,e=mb){const n=[];let i;for(;i=pb.exec(t);)n.push(i[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const o=typeof e=="function"?e(r):e+(gb++).toString(),a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Of=Object.create(null);function vb(t,e){Of[t]=e}function Uf(t){return Of[t]||Of[""]}function od(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ad=Object.create(null),Mo=["https://api.simplesvg.com","https://api.unisvg.com"],Pl=[];for(;Mo.length>0;)Mo.length===1||Math.random()>.5?Pl.push(Mo.shift()):Pl.push(Mo.pop());ad[""]=od({resources:["https://api.iconify.design"].concat(Pl)});function Eb(t,e){const n=od(e);return n===null?!1:(ad[t]=n,!0)}function ld(t){return ad[t]}const Sb=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let tm=Sb();function xb(t,e){const n=ld(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const r=e+".json?icons=";i=n.maxURL-s-n.path.length-r.length}return i}function yb(t){return t===404}const Mb=(t,e,n)=>{const i=[],s=xb(t,e),r="icons";let o={type:r,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=s&&c>0&&(i.push(o),o={type:r,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Tb(t){if(typeof t=="string"){const e=ld(t);if(e)return e.path}return"/"}const bb=(t,e,n)=>{if(!tm){n("abort",424);return}let i=Tb(e.provider);switch(e.type){case"icons":{const r=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=r+".json?"+l.toString();break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;tm(t+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(yb(o)?"abort":"next",o)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})},Ab={prepare:Mb,send:bb};function Cb(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(s=>{if(i.name===s.name&&i.prefix===s.prefix&&i.provider===s.provider)return;i=s;const r=s.provider,o=s.prefix,a=s.name,l=n[r]||(n[r]=Object.create(null)),c=l[o]||(l[o]=Kr(r,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const f={provider:r,prefix:o,name:a};u.push(f)}),e}function o0(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(s=>s.id!==e))})}function Rb(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,s=t.prefix;e.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==s)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:i,prefix:s,name:c});else if(t.missing.has(c))o.missing.push({provider:i,prefix:s,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||o0([t],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let wb=0;function Ib(t,e,n){const i=wb++,s=o0.bind(null,n,i);if(!e.pending.length)return s;const r={id:i,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),s}function Pb(t,e=!0,n=!1){const i=[];return t.forEach(s=>{const r=typeof s=="string"?Bc(s,e,n):s;r&&i.push(r)}),i}var Nb={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Lb(t,e,n,i){const s=t.resources.length,r=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let C=t.resources.slice(0);for(o=[];C.length>1;){const P=Math.floor(Math.random()*C.length);o.push(C[P]),C=C.slice(0,P).concat(C.slice(P+1))}o=o.concat(C)}else o=t.resources.slice(r).concat(t.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,f=null,h=[],d=[];typeof i=="function"&&d.push(i);function _(){f&&(clearTimeout(f),f=null)}function g(){l==="pending"&&(l="aborted"),_(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function m(C,P){P&&(d=[]),typeof C=="function"&&d.push(C)}function p(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:h.length,subscribe:m,abort:g}}function b(){l="failed",d.forEach(C=>{C(void 0,u)})}function v(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function E(C,P,L){const M=P!=="success";switch(h=h.filter(y=>y!==C),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(P==="abort"){u=L,b();return}if(M){u=L,h.length||(o.length?w():b());return}if(_(),v(),!t.random){const y=t.resources.indexOf(C.resource);y!==-1&&y!==t.index&&(t.index=y)}l="completed",d.forEach(y=>{y(L)})}function w(){if(l!=="pending")return;_();const C=o.shift();if(C===void 0){if(h.length){f=setTimeout(()=>{_(),l==="pending"&&(v(),b())},t.timeout);return}b();return}const P={status:"pending",resource:C,callback:(L,M)=>{E(P,L,M)}};h.push(P),c++,f=setTimeout(w,t.rotate),n(C,e,P.callback)}return setTimeout(w),p}function a0(t){const e={...Nb,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function s(a,l,c){const u=Lb(e,a,l,(f,h)=>{i(),c&&c(f,h)});return n.push(u),u}function r(a){return n.find(l=>a(l))||null}return{query:s,find:r,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function nm(){}const bu=Object.create(null);function Db(t){if(!bu[t]){const e=ld(t);if(!e)return;const n=a0(e),i={config:e,redundancy:n};bu[t]=i}return bu[t]}function Ob(t,e,n){let i,s;if(typeof t=="string"){const r=Uf(t);if(!r)return n(void 0,424),nm;s=r.send;const o=Db(t);o&&(i=o.redundancy)}else{const r=od(t);if(r){i=a0(r);const o=t.resources?t.resources[0]:"",a=Uf(o);a&&(s=a.send)}}return!i||!s?(n(void 0,424),nm):i.query(e,s,n)().abort}function im(){}function Ub(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Rb(t)}))}function Fb(t){const e=[],n=[];return t.forEach(i=>{(i.match(Jv)?e:n).push(i)}),{valid:e,invalid:n}}function To(t,e,n){function i(){const s=t.pendingIcons;e.forEach(r=>{s&&s.delete(r),t.icons[r]||t.missing.add(r)})}if(n&&typeof n=="object")try{if(!n0(t,n).length){i();return}}catch(s){console.error(s)}i(),Ub(t)}function sm(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Bb(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const r=t.loadIcon;if(t.loadIcons&&(s.length>1||!r)){sm(t.loadIcons(s,i,n),u=>{To(t,s,u)});return}if(r){s.forEach(u=>{const f=r(u,i,n);sm(f,h=>{const d=h?{prefix:i,icons:{[u]:h}}:null;To(t,[u],d)})});return}const{valid:o,invalid:a}=Fb(s);if(a.length&&To(t,a,null),!o.length)return;const l=i.match(Jv)?Uf(n):null;if(!l){To(t,o,null);return}l.prepare(n,i,o).forEach(u=>{Ob(n,u,f=>{To(t,u.icons,f)})})}))}const kb=(t,e)=>{const n=Pb(t,!0,i0()),i=Cb(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,im)}),()=>{l=!1}}const s=Object.create(null),r=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(Kr(c,u));const f=s[c]||(s[c]=Object.create(null));f[u]||(f[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:f}=l,h=Kr(c,u),d=h.pendingIcons||(h.pendingIcons=new Set);d.has(f)||(d.add(f),s[c][u].push(f))}),r.forEach(l=>{const c=s[l.provider][l.prefix];c.length&&Bb(l,c)}),e?Ib(e,i,r):im};function Vb(t,e){const n={...t};for(const i in e){const s=e[i],r=typeof s;i in s0?(s===null||s&&(r==="string"||r==="number"))&&(n[i]=s):r===typeof n[i]&&(n[i]=i==="rotate"?s%4:s)}return n}const Hb=/[\s,]+/;function zb(t,e){e.split(Hb).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Gb(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:i(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?i(r):0)}}return e}function Wb(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Xb(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function $b(t){return"data:image/svg+xml,"+Xb(t)}function qb(t){return'url("'+$b(t)+'")'}const rm={...r0,inline:!1},jb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yb={display:"inline-block"},Ff={backgroundColor:"currentColor"},l0={backgroundColor:"transparent"},om={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},am={webkitMask:Ff,mask:Ff,background:l0};for(const t in am){const e=am[t];for(const n in om)e[t+n]=om[n]}const Nl={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Nl[t+"-flip"]=e,Nl[t.slice(0,1)+"-flip"]=e,Nl[t+"Flip"]=e});function lm(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const cm=(t,e)=>{const n=Vb(rm,e),i={...jb},s=e.mode||"svg",r={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let g in e){const m=e[g];if(m!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[g]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&zb(n,m);break;case"color":r.color=m;break;case"rotate":typeof m=="string"?n[g]=Gb(m):typeof m=="number"&&(n[g]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const p=Nl[g];p?(m===!0||m==="true"||m===1)&&(n[p]=!0):rm[g]===void 0&&(i[g]=m)}}}const l=db(t,n),c=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),s==="svg"){i.style={...r,...a},Object.assign(i,c);let g=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=_b(l.body,m?()=>m+"ID"+g++:"iconifyVue"),Xr("svg",i)}const{body:u,width:f,height:h}=t,d=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),_=Wb(u,{...c,width:f+"",height:h+""});return i.style={...r,"--svg":qb(_),width:lm(c.width),height:lm(c.height),...Yb,...d?Ff:l0,...a},Xr("span",i)};i0(!0);vb("",Ab);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!ob(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;Eb(n,s)||console.error(i)}catch{console.error(i)}}}}const Kb={...kc,body:""},Zb=hi({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let i;if(typeof t!="string"||(i=Bc(t,!1,!0))===null)return this.abortLoading(),null;let s=sb(i);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:kb([i],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,i.name,i.prefix,i.provider);typeof o=="string"&&(s.body=o)}const r=["iconify"];return i.prefix!==""&&r.push("iconify--"+i.prefix),i.provider!==""&&r.push("iconify--"+i.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return cm(Kb,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),cm({...kc,...e.data},n)}}),Jb={props:["title","brand"]};window.onscroll=function(){var t,e;document.documentElement.scrollTop<24?(t=document.querySelector("header"))==null||t.style.setProperty("padding-top",(32-document.documentElement.scrollTop||0).toString()+"px"):(e=document.querySelector("header"))==null||e.style.setProperty("padding-top","8px")};const Qb=hi({...Jb,__name:"TopBar",setup(t,{expose:e}){const n=cs(!1),i=()=>{n.value=!1};return e({closeMenu:i}),(s,r)=>(en(),Nn("header",null,[r[2]||(r[2]=mt("img",{src:ZT,alt:"Logo",class:"logo"},null,-1)),tt(Vn(Zb),{onClick:r[0]||(r[0]=o=>n.value=!0),icon:"gg:details-more",class:"icon-button"}),h_(mt("div",{class:"menuMask",onClick:r[1]||(r[1]=o=>i())},null,512),[[td,n.value]]),mt("div",{class:"drawer",style:ur({right:n.value?"0":" -10vw"})},[P_(s.$slots,"default",{},void 0,!0)],4)]))}}),bs=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},eA=bs(Qb,[["__scopeId","data-v-a9a572f3"]]),tA={props:["title","brand"]},nA={class:"banner"},iA={key:0,class:"title"},sA={key:1,class:"brand-wrapper"},rA={class:"enlarge"};function oA(t,e,n,i,s,r){return en(),Nn("div",nA,[n.brand!==n.title?(en(),Nn("h1",iA,as(n.title),1)):yf("",!0),n.brand==n.title?(en(),Nn("div",sA,[mt("h1",null,as(n.brand.slice(0,n.brand.indexOf(" "))),1),mt("h1",rA,as(n.brand.slice(n.brand.indexOf(" "))),1)])):yf("",!0),e[0]||(e[0]=av('<div class="line1" data-v-dafe7f91></div><div class="line2" data-v-dafe7f91></div><div class="line3" data-v-dafe7f91></div><div class="line4" data-v-dafe7f91></div><div class="line5" data-v-dafe7f91></div><div class="line6" data-v-dafe7f91></div><div class="line7" data-v-dafe7f91></div><div class="line8" data-v-dafe7f91></div>',8))])}const aA=bs(tA,[["render",oA],["__scopeId","data-v-dafe7f91"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="175",lA=0,um=1,cA=2,c0=1,uA=2,yi=3,_s=0,bn=1,Ri=2,hs=0,Vr=1,fm=2,hm=3,dm=4,fA=5,Vs=100,hA=101,dA=102,pA=103,mA=104,gA=200,_A=201,vA=202,EA=203,Bf=204,kf=205,SA=206,xA=207,yA=208,MA=209,TA=210,bA=211,AA=212,CA=213,RA=214,Vf=0,Hf=1,zf=2,Zr=3,Gf=4,Wf=5,Xf=6,$f=7,u0=0,wA=1,IA=2,ds=0,PA=1,NA=2,LA=3,DA=4,OA=5,UA=6,FA=7,f0=300,Jr=301,Qr=302,qf=303,jf=304,Vc=306,Yf=1e3,zs=1001,Kf=1002,ti=1003,BA=1004,nl=1005,ai=1006,Au=1007,Gs=1008,ki=1009,h0=1010,d0=1011,oa=1012,ud=1013,ir=1014,Ii=1015,ba=1016,fd=1017,hd=1018,aa=1020,p0=35902,m0=1021,g0=1022,Qn=1023,_0=1024,v0=1025,la=1026,ca=1027,E0=1028,dd=1029,S0=1030,pd=1031,md=1033,Ll=33776,Dl=33777,Ol=33778,Ul=33779,Zf=35840,Jf=35841,Qf=35842,eh=35843,th=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,lh=37812,ch=37813,uh=37814,fh=37815,hh=37816,dh=37817,ph=37818,mh=37819,gh=37820,_h=37821,Fl=36492,vh=36494,Eh=36495,x0=36283,Sh=36284,xh=36285,yh=36286,kA=3200,VA=3201,y0=0,HA=1,ss="",Fn="srgb",eo="srgb-linear",lc="linear",Et="srgb",gr=7680,pm=519,zA=512,GA=513,WA=514,M0=515,XA=516,$A=517,qA=518,jA=519,mm=35044,gm="300 es",Pi=2e3,cc=2001;class uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,Mh=180/Math.PI;function Aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function at(t,e,n){return Math.max(e,Math.min(n,t))}function YA(t,e){return(t%e+e)%e}function Ru(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,n=0){xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],b=s[1],v=s[4],E=s[7],w=s[2],C=s[5],P=s[8];return r[0]=o*g+a*b+l*w,r[3]=o*m+a*v+l*C,r[6]=o*p+a*E+l*P,r[1]=c*g+u*b+f*w,r[4]=c*m+u*v+f*C,r[7]=c*p+u*E+f*P,r[2]=h*g+d*b+_*w,r[5]=h*m+d*v+_*C,r[8]=h*p+d*E+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,_=n*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new Qe;function T0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KA(){const t=uc("canvas");return t.style.display="block",t}const _m={};function Bl(t){t in _m||(_m[t]=!0,console.warn(t))}function ZA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function JA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function QA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eC(){const t={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?lc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[eo]:{primaries:e,whitePoint:i,transfer:lc,toXYZ:vm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:vm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const ht=eC();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _r;class tC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_r===void 0&&(_r=uc("canvas")),_r.width=e.width,_r.height=e.height;const s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nC=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=Aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Iu(s[o].image)):r.push(Iu(s[o]))}else r=Iu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iC=0;class An extends uo{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=zs,s=zs,r=ai,o=Gs,a=Qn,l=ki,c=An.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Aa(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yf:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yf:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=f0;An.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,s=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(d+1)/2,w=(p+1)/2,C=(u+h)/4,P=(f+g)/4,L=(_+m)/4;return v>E&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=P/i):E>w?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=L/r),this.set(i,s,r,n),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this.w=at(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this.w=at(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sC extends uo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new An(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new gd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends sC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class b0 extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rC extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),C=Math.atan2(w,p*b);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const E=a*b;if(l=l*m+h*E,c=c*m+d*E,u=u*m+_*E,f=f*m+g*E,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*d-c*h,e[n+1]=l*_+u*h+c*f-a*d,e[n+2]=c*_+u*d+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new se,Sm=new Ca;class Ra{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),sl.subVectors(this.max,Ao),vr.subVectors(e.a,Ao),Er.subVectors(e.b,Ao),Sr.subVectors(e.c,Ao),Wi.subVectors(Er,vr),Xi.subVectors(Sr,Er),Ps.subVectors(vr,Sr);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Ps.z,Ps.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Ps.z,0,-Ps.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Ps.y,Ps.x,0];return!Nu(n,vr,Er,Sr,sl)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,vr,Er,Sr,sl))?!1:(rl.crossVectors(Wi,Xi),n=[rl.x,rl.y,rl.z],Nu(n,vr,Er,Sr,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new se,new se,new se,new se,new se,new se,new se,new se],$n=new se,il=new Ra,vr=new se,Er=new se,Sr=new se,Wi=new se,Xi=new se,Ps=new se,Ao=new se,sl=new se,rl=new se,Ns=new se;function Nu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ns.fromArray(t,r);const a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=e.dot(Ns),c=n.dot(Ns),u=i.dot(Ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oC=new Ra,Co=new se,Lu=new se;class _d{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oC.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Lu)),this.expandByPoint(Co.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new se,Du=new se,ol=new se,$i=new se,Ou=new se,al=new se,Uu=new se;class aC{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Du.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Du);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ol),a=$i.dot(this.direction),l=-$i.dot(ol),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Du).addScaledVector(ol,h),d}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,s,r){Ou.subVectors(n,e),al.subVectors(i,e),Uu.crossVectors(Ou,al);let o=this.direction.dot(Uu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors($i,al));if(l<0)return null;const c=a*this.direction.dot(Ou.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Uu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,s,r,o,a,l,c,u,f,h,d,_,g,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,d,_,g,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;n[0]=h-g*a,n[4]=-o*f,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=l*u,n[4]=_*c-d,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=d*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=g-h*f,n[8]=_*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+_,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+g,n[5]=o*u,n[9]=d*f-_,n[2]=_*f-d,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lC,e,cC)}lookAt(e,n,i){const s=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),qi.crossVectors(i,Cn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),qi.crossVectors(i,Cn)),qi.normalize(),ll.crossVectors(Cn,qi),s[0]=qi.x,s[4]=ll.x,s[8]=Cn.x,s[1]=qi.y,s[5]=ll.y,s[9]=Cn.y,s[2]=qi.z,s[6]=ll.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],b=i[3],v=i[7],E=i[11],w=i[15],C=s[0],P=s[4],L=s[8],M=s[12],y=s[1],N=s[5],D=s[9],k=s[13],j=s[2],te=s[6],z=s[10],re=s[14],H=s[3],ve=s[7],Ae=s[11],Oe=s[15];return r[0]=o*C+a*y+l*j+c*H,r[4]=o*P+a*N+l*te+c*ve,r[8]=o*L+a*D+l*z+c*Ae,r[12]=o*M+a*k+l*re+c*Oe,r[1]=u*C+f*y+h*j+d*H,r[5]=u*P+f*N+h*te+d*ve,r[9]=u*L+f*D+h*z+d*Ae,r[13]=u*M+f*k+h*re+d*Oe,r[2]=_*C+g*y+m*j+p*H,r[6]=_*P+g*N+m*te+p*ve,r[10]=_*L+g*D+m*z+p*Ae,r[14]=_*M+g*k+m*re+p*Oe,r[3]=b*C+v*y+E*j+w*H,r[7]=b*P+v*N+E*te+w*ve,r[11]=b*L+v*D+E*z+w*Ae,r[15]=b*M+v*k+E*re+w*Oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+g*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+n*c*f-n*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,v=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,E=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,w=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,C=n*b+i*v+s*E+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(g*h*r-f*m*r-g*s*d+i*m*d+f*s*p-i*h*p)*P,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*P,e[4]=v*P,e[5]=(u*m*r-_*h*r+_*s*d-n*m*d-u*s*p+n*h*p)*P,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*P,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*d+n*l*d)*P,e[8]=E*P,e[9]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*P,e[10]=(o*g*r-_*a*r+_*i*c-n*g*c-o*i*p+n*a*p)*P,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*d-n*a*d)*P,e[12]=w*P,e[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*P,e[14]=(_*a*s-o*g*s-_*i*l+n*g*l+o*i*m-n*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,_=r*f,g=o*u,m=o*f,p=a*f,b=l*c,v=l*u,E=l*f,w=i.x,C=i.y,P=i.z;return s[0]=(1-(g+p))*w,s[1]=(d+E)*w,s[2]=(_-v)*w,s[3]=0,s[4]=(d-E)*C,s[5]=(1-(h+p))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(_+v)*P,s[9]=(m-b)*P,s[10]=(1-(h+g))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=xr.set(s[0],s[1],s[2]).length();const o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const c=1/r,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Pi){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let d,_;if(a===Pi)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===cc)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Pi){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,d=(i+s)*u;let _,g;if(a===Pi)_=(o+r)*f,g=-2*f;else if(a===cc)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new se,qn=new Vt,lC=new se(0,0,0),cC=new se(1,1,1),qi=new se,ll=new se,Cn=new se,xm=new Vt,ym=new Ca;class Vi{constructor(e=0,n=0,i=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uC=0;const Mm=new se,yr=new Ca,vi=new Vt,cl=new se,Ro=new se,fC=new se,hC=new Ca,Tm=new se(1,0,0),bm=new se(0,1,0),Am=new se(0,0,1),Cm={type:"added"},dC={type:"removed"},Mr={type:"childadded",child:null},Fu={type:"childremoved",child:null};class Ln extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new se,n=new Vi,i=new Ca,s=new se(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Qe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,n){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ro,cl,this.up):vi.lookAt(cl,Ro,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(vi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dC),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,fC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,hC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ln.DEFAULT_UP=new se(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new se,Ei=new se,Bu=new se,Si=new se,Tr=new se,br=new se,Rm=new se,ku=new se,Vu=new se,Hu=new se,zu=new Ot,Gu=new Ot,Wu=new Ot;class Jn{constructor(e=new se,n=new se,i=new se){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),jn.subVectors(e,n),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){jn.subVectors(s,n),Ei.subVectors(i,n),Bu.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Ei),l=jn.dot(Bu),c=Ei.dot(Ei),u=Ei.dot(Bu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return zu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),zu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zu,r.x),o.addScaledVector(Gu,r.y),o.addScaledVector(Wu,r.z),o}static isFrontFacing(e,n,i,s){return jn.subVectors(i,n),Ei.subVectors(e,n),jn.cross(Ei).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Tr.subVectors(s,i),br.subVectors(r,i),ku.subVectors(e,i);const l=Tr.dot(ku),c=br.dot(ku);if(l<=0&&c<=0)return n.copy(i);Vu.subVectors(e,s);const u=Tr.dot(Vu),f=br.dot(Vu);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Tr,o);Hu.subVectors(e,r);const d=Tr.dot(Hu),_=br.dot(Hu);if(_>=0&&d<=_)return n.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(br,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Rm.subVectors(r,s),a=(f-u)/(f-u+(d-_)),n.copy(s).addScaledVector(Rm,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(Tr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=ht.workingColorSpace){if(e=YA(e,1),n=at(n,0,1),i=at(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Xu(o,r,e+1/3),this.g=Xu(o,r,e),this.b=Xu(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,n=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=C0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ht.fromWorkingColorSpace(nn.copy(this),e),Math.round(at(nn.r*255,0,255))*65536+Math.round(at(nn.g*255,0,255))*256+Math.round(at(nn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Fn){ht.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(ul);const i=Ru(ji.h,ul.h,n),s=Ru(ji.s,ul.s,n),r=Ru(ji.l,ul.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new St;St.NAMES=C0;let pC=0;class wa extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=Vr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=kf,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bf&&(i.blendSrc=this.blendSrc),this.blendDst!==kf&&(i.blendDst=this.blendDst),this.blendEquation!==Vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class R0 extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new se,fl=new xt;let mC=0;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mm,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class w0 extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class I0 extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gC=0;const Un=new Vt,$u=new Ln,Ar=new se,Rn=new Ra,wo=new Ra,Kt=new se;class As extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T0(e)?I0:w0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Rn.min,wo.min),Rn.expandByPoint(Kt),Kt.addVectors(Rn.max,wo.max),Rn.expandByPoint(Kt)):(Rn.expandByPoint(wo.min),Rn.expandByPoint(wo.max))}Rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),Kt.add(Ar)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new se,l[L]=new se;const c=new se,u=new se,f=new se,h=new xt,d=new xt,_=new xt,g=new se,m=new se;function p(L,M,y){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[L].add(g),a[M].add(g),a[y].add(g),l[L].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const y=b[L],N=y.start,D=y.count;for(let k=N,j=N+D;k<j;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new se,E=new se,w=new se,C=new se;function P(L){w.fromBufferAttribute(s,L),C.copy(w);const M=a[L];v.copy(M),v.sub(w.multiplyScalar(w.dot(M))).normalize(),E.crossVectors(C,M);const N=E.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,N)}for(let L=0,M=b.length;L<M;++L){const y=b[L],N=y.start,D=y.count;for(let k=N,j=N+D;k<j;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new se,r=new se,o=new se,a=new se,l=new se,c=new se,u=new se,f=new se;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new ci(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new As,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Vt,Ls=new aC,hl=new _d,Im=new se,dl=new se,pl=new se,ml=new se,qu=new se,gl=new se,Pm=new se,_l=new se;class kn extends Ln{constructor(e=new As,n=new R0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){gl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(qu.fromBufferAttribute(f,e),o?gl.addScaledVector(qu,u):gl.addScaledVector(qu.sub(n),u))}n.add(gl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(hl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(hl,Im)===null||Ls.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(wm.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,w=v;E<w;E+=3){const C=a.getX(E),P=a.getX(E+1),L=a.getX(E+2);s=vl(this,p,e,i,c,u,f,C,P,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);s=vl(this,o,e,i,c,u,f,b,v,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=b,w=v;E<w;E+=3){const C=E,P=E+1,L=E+2;s=vl(this,p,e,i,c,u,f,C,P,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=m,v=m+1,E=m+2;s=vl(this,o,e,i,c,u,f,b,v,E),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function _C(t,e,n,i,s,r,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_s,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_l);return c<n.near||c>n.far?null:{distance:c,point:_l.clone(),object:t}}function vl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,dl),t.getVertexPosition(l,pl),t.getVertexPosition(c,ml);const u=_C(t,e,n,i,dl,pl,ml,Pm);if(u){const f=new se;Jn.getBarycoord(Pm,dl,pl,ml,f),s&&(u.uv=Jn.getInterpolatedAttribute(s,a,l,c,f,new xt)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,a,l,c,f,new xt)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new se),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new se,materialIndex:0};Jn.getNormal(dl,pl,ml,h.normal),u.face=h,u.barycoord=f}return u}class Ia extends As{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function _(g,m,p,b,v,E,w,C,P,L,M){const y=E/P,N=w/L,D=E/2,k=w/2,j=C/2,te=P+1,z=L+1;let re=0,H=0;const ve=new se;for(let Ae=0;Ae<z;Ae++){const Oe=Ae*N-k;for(let Ge=0;Ge<te;Ge++){const st=Ge*y-D;ve[g]=st*b,ve[m]=Oe*v,ve[p]=j,c.push(ve.x,ve.y,ve.z),ve[g]=0,ve[m]=0,ve[p]=C>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Ge/P),f.push(1-Ae/L),re+=1}}for(let Ae=0;Ae<L;Ae++)for(let Oe=0;Oe<P;Oe++){const Ge=h+Oe+te*Ae,st=h+Oe+te*(Ae+1),ce=h+(Oe+1)+te*(Ae+1),Me=h+(Oe+1)+te*Ae;l.push(Ge,st,Me),l.push(st,ce,Me),H+=6}a.addGroup(d,H,M),d+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const s in i)e[s]=i[s]}return e}function vC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const EC={clone:to,merge:pn};var SC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SC,this.fragmentShader=xC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=vC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new se,Nm=new xt,Lm=new xt;class Kn extends N0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Nm,Lm),n.subVectors(Lm,Nm)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cu*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,Rr=1;class yC extends Ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kn(Cr,Rr,e,n);s.layers=this.layers,this.add(s);const r=new Kn(Cr,Rr,e,n);r.layers=this.layers,this.add(r);const o=new Kn(Cr,Rr,e,n);o.layers=this.layers,this.add(o);const a=new Kn(Cr,Rr,e,n);a.layers=this.layers,this.add(a);const l=new Kn(Cr,Rr,e,n);l.layers=this.layers,this.add(l);const c=new Kn(Cr,Rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class L0 extends An{constructor(e=[],n=Jr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MC extends sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new L0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ia(5,5,5),r=new vs({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:hs});r.uniforms.tEquirect.value=n;const o=new kn(s,r),a=n.minFilter;return n.minFilter===Gs&&(n.minFilter=ai),new yC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Lo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TC={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bC extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yu=new se,AC=new se,CC=new Qe;class Fs{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Yu.subVectors(i,n).cross(AC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CC.getNormalMatrix(e),s=this.coplanarPoint(Yu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new _d,El=new se;class D0{constructor(e=new Fs,n=new Fs,i=new Fs,s=new Fs,r=new Fs,o=new Fs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],_=s[9],g=s[10],m=s[11],p=s[12],b=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,h-c,m-d,E-p).normalize(),i[1].setComponents(l+r,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+_,E+b).normalize(),i[3].setComponents(l-o,h-u,m-_,E-b).normalize(),i[4].setComponents(l-a,h-f,m-g,E-v).normalize(),n===Pi)i[5].setComponents(l+a,h+f,m+g,E+v).normalize();else if(n===cc)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(El.x=s.normal.x>0?e.max.x:e.min.x,El.y=s.normal.y>0?e.max.y:e.min.y,El.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends An{constructor(e,n,i=ir,s,r,o,a=ti,l=ti,c,u=la){if(u!==la&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Hc extends As{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let v=0;v<c;v++){const E=v*f-r;_.push(E,-b,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const v=b+c*p,E=b+c*(p+1),w=b+1+c*(p+1),C=b+1+c*p;d.push(v,E,C),d.push(E,w,C)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(g,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xo extends As{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new se,h=new se,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const b=[],v=p/i;let E=0;p===0&&o===0?E=.5/n:p===i&&l===Math.PI&&(E=-.5/n);for(let w=0;w<=n;w++){const C=w/n;f.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(C+E,1-v),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<n;b++){const v=u[p][b+1],E=u[p][b],w=u[p+1][b],C=u[p+1][b+1];(p!==0||o>0)&&d.push(v,E,C),(p!==i-1||l<Math.PI)&&d.push(E,w,C)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(g,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ku extends wa{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class RC extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wC extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class U0 extends N0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IC extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Dm(t,e,n,i){const s=PC(i);switch(n){case m0:return t*e;case _0:return t*e;case v0:return t*e*2;case E0:return t*e/s.components*s.byteLength;case dd:return t*e/s.components*s.byteLength;case S0:return t*e*2/s.components*s.byteLength;case pd:return t*e*2/s.components*s.byteLength;case g0:return t*e*3/s.components*s.byteLength;case Qn:return t*e*4/s.components*s.byteLength;case md:return t*e*4/s.components*s.byteLength;case Ll:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:case eh:return Math.max(t,16)*Math.max(e,8)/4;case Zf:case Qf:return Math.max(t,8)*Math.max(e,8)/2;case th:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fl:case vh:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case x0:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PC(t){switch(t){case ki:case h0:return{byteLength:1,components:1};case oa:case d0:case ba:return{byteLength:2,components:1};case fd:case hd:return{byteLength:2,components:4};case ir:case ud:case Ii:return{byteLength:4,components:1};case p0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function NC(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var LC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$C=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ER=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$R=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:LC,alphahash_pars_fragment:DC,alphamap_fragment:OC,alphamap_pars_fragment:UC,alphatest_fragment:FC,alphatest_pars_fragment:BC,aomap_fragment:kC,aomap_pars_fragment:VC,batching_pars_vertex:HC,batching_vertex:zC,begin_vertex:GC,beginnormal_vertex:WC,bsdfs:XC,iridescence_fragment:$C,bumpmap_pars_fragment:qC,clipping_planes_fragment:jC,clipping_planes_pars_fragment:YC,clipping_planes_pars_vertex:KC,clipping_planes_vertex:ZC,color_fragment:JC,color_pars_fragment:QC,color_pars_vertex:eR,color_vertex:tR,common:nR,cube_uv_reflection_fragment:iR,defaultnormal_vertex:sR,displacementmap_pars_vertex:rR,displacementmap_vertex:oR,emissivemap_fragment:aR,emissivemap_pars_fragment:lR,colorspace_fragment:cR,colorspace_pars_fragment:uR,envmap_fragment:fR,envmap_common_pars_fragment:hR,envmap_pars_fragment:dR,envmap_pars_vertex:pR,envmap_physical_pars_fragment:bR,envmap_vertex:mR,fog_vertex:gR,fog_pars_vertex:_R,fog_fragment:vR,fog_pars_fragment:ER,gradientmap_pars_fragment:SR,lightmap_pars_fragment:xR,lights_lambert_fragment:yR,lights_lambert_pars_fragment:MR,lights_pars_begin:TR,lights_toon_fragment:AR,lights_toon_pars_fragment:CR,lights_phong_fragment:RR,lights_phong_pars_fragment:wR,lights_physical_fragment:IR,lights_physical_pars_fragment:PR,lights_fragment_begin:NR,lights_fragment_maps:LR,lights_fragment_end:DR,logdepthbuf_fragment:OR,logdepthbuf_pars_fragment:UR,logdepthbuf_pars_vertex:FR,logdepthbuf_vertex:BR,map_fragment:kR,map_pars_fragment:VR,map_particle_fragment:HR,map_particle_pars_fragment:zR,metalnessmap_fragment:GR,metalnessmap_pars_fragment:WR,morphinstance_vertex:XR,morphcolor_vertex:$R,morphnormal_vertex:qR,morphtarget_pars_vertex:jR,morphtarget_vertex:YR,normal_fragment_begin:KR,normal_fragment_maps:ZR,normal_pars_fragment:JR,normal_pars_vertex:QR,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:r1,opaque_fragment:o1,packing:a1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:d1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:v1,skinning_pars_vertex:E1,skinning_vertex:S1,skinnormal_vertex:x1,specularmap_fragment:y1,specularmap_pars_fragment:M1,tonemapping_fragment:T1,tonemapping_pars_fragment:b1,transmission_fragment:A1,transmission_pars_fragment:C1,uv_pars_fragment:R1,uv_pars_vertex:w1,uv_vertex:I1,worldpos_vertex:P1,background_vert:N1,background_frag:L1,backgroundCube_vert:D1,backgroundCube_frag:O1,cube_vert:U1,cube_frag:F1,depth_vert:B1,depth_frag:k1,distanceRGBA_vert:V1,distanceRGBA_frag:H1,equirect_vert:z1,equirect_frag:G1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:$1,meshbasic_frag:q1,meshlambert_vert:j1,meshlambert_frag:Y1,meshmatcap_vert:K1,meshmatcap_frag:Z1,meshnormal_vert:J1,meshnormal_frag:Q1,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:sw,meshtoon_frag:rw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:fw},we={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},oi={basic:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new St(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new St(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:pn([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:pn([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:pn([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:pn([we.common,we.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:pn([we.lights,we.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};oi.physical={uniforms:pn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Sl={r:0,b:0,g:0},Os=new Vi,hw=new Vt;function dw(t,e,n,i,s,r,o){const a=new St(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?n:e).get(E)),E}function g(v){let E=!1;const w=_(v);w===null?p(a,l):w&&w.isColor&&(p(w,1),E=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,E){const w=_(E);w&&(w.isCubeTexture||w.mapping===Vc)?(u===void 0&&(u=new kn(new Ia(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:to(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Os.copy(E.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(Os)),u.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,(f!==w||h!==w.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new kn(new Hc(2,2),new vs({name:"BackgroundMaterial",uniforms:to(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,E){v.getRGB(Sl,P0(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,E,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:m,dispose:b}}function pw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(y,N,D,k,j){let te=!1;const z=f(k,D,N);r!==z&&(r=z,c(r.object)),te=d(y,k,D,j),te&&_(y,k,D,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,E(y,N,D,k),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,N,D){const k=D.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let te=j[N.id];te===void 0&&(te={},j[N.id]=te);let z=te[k];return z===void 0&&(z=h(l()),te[k]=z),z}function h(y){const N=[],D=[],k=[];for(let j=0;j<n;j++)N[j]=0,D[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,N,D,k){const j=r.attributes,te=N.attributes;let z=0;const re=D.getAttributes();for(const H in re)if(re[H].location>=0){const Ae=j[H];let Oe=te[H];if(Oe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Oe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Oe=y.instanceColor)),Ae===void 0||Ae.attribute!==Oe||Oe&&Ae.data!==Oe.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function _(y,N,D,k){const j={},te=N.attributes;let z=0;const re=D.getAttributes();for(const H in re)if(re[H].location>=0){let Ae=te[H];Ae===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor));const Oe={};Oe.attribute=Ae,Ae&&Ae.data&&(Oe.data=Ae.data),j[H]=Oe,z++}r.attributes=j,r.attributesNum=z,r.index=k}function g(){const y=r.newAttributes;for(let N=0,D=y.length;N<D;N++)y[N]=0}function m(y){p(y,0)}function p(y,N){const D=r.newAttributes,k=r.enabledAttributes,j=r.attributeDivisors;D[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),j[y]!==N&&(t.vertexAttribDivisor(y,N),j[y]=N)}function b(){const y=r.newAttributes,N=r.enabledAttributes;for(let D=0,k=N.length;D<k;D++)N[D]!==y[D]&&(t.disableVertexAttribArray(D),N[D]=0)}function v(y,N,D,k,j,te,z){z===!0?t.vertexAttribIPointer(y,N,D,j,te):t.vertexAttribPointer(y,N,D,k,j,te)}function E(y,N,D,k){g();const j=k.attributes,te=D.getAttributes(),z=N.defaultAttributeValues;for(const re in te){const H=te[re];if(H.location>=0){let ve=j[re];if(ve===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const Ae=ve.normalized,Oe=ve.itemSize,Ge=e.get(ve);if(Ge===void 0)continue;const st=Ge.buffer,ce=Ge.type,Me=Ge.bytesPerElement,Ie=ce===t.INT||ce===t.UNSIGNED_INT||ve.gpuType===ud;if(ve.isInterleavedBufferAttribute){const G=ve.data,ue=G.stride,pe=ve.offset;if(G.isInstancedInterleavedBuffer){for(let he=0;he<H.locationSize;he++)p(H.location+he,G.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let he=0;he<H.locationSize;he++)m(H.location+he);t.bindBuffer(t.ARRAY_BUFFER,st);for(let he=0;he<H.locationSize;he++)v(H.location+he,Oe/H.locationSize,ce,Ae,ue*Me,(pe+Oe/H.locationSize*he)*Me,Ie)}else{if(ve.isInstancedBufferAttribute){for(let G=0;G<H.locationSize;G++)p(H.location+G,ve.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let G=0;G<H.locationSize;G++)m(H.location+G);t.bindBuffer(t.ARRAY_BUFFER,st);for(let G=0;G<H.locationSize;G++)v(H.location+G,Oe/H.locationSize,ce,Ae,Oe*Me,Oe/H.locationSize*G*Me,Ie)}}else if(z!==void 0){const Ae=z[re];if(Ae!==void 0)switch(Ae.length){case 2:t.vertexAttrib2fv(H.location,Ae);break;case 3:t.vertexAttrib3fv(H.location,Ae);break;case 4:t.vertexAttrib4fv(H.location,Ae);break;default:t.vertexAttrib1fv(H.location,Ae)}}}}b()}function w(){L();for(const y in i){const N=i[y];for(const D in N){const k=N[D];for(const j in k)u(k[j].object),delete k[j];delete N[D]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const N=i[y.id];for(const D in N){const k=N[D];for(const j in k)u(k[j].object),delete k[j];delete N[D]}delete i[y.id]}function P(y){for(const N in i){const D=i[N];if(D[y.id]===void 0)continue;const k=D[y.id];for(const j in k)u(k[j].object),delete k[j];delete D[y.id]}}function L(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function mw(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];n.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gw(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Qn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ki&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ii&&!L)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:w,maxSamples:C}}function _w(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Fs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,v=b*4;let E=p.clippingState||null;l.value=E,E=u(_,h,v,d);for(let w=0;w!==v;++w)E[w]=n[w];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=d;v!==g;++v,E+=4)o.copy(f[v]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function vw(t){let e=new WeakMap;function n(o,a){return a===qf?o.mapping=Jr:a===jf&&(o.mapping=Qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qf||a===jf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new MC(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fr=4,Om=[.125,.215,.35,.446,.526,.582],Hs=20,Zu=new U0,Um=new St;let Ju=null,Qu=0,ef=0,tf=!1;const Bs=(1+Math.sqrt(5))/2,wr=1/Bs,Fm=[new se(-Bs,wr,0),new se(Bs,wr,0),new se(-wr,0,Bs),new se(wr,0,Bs),new se(0,Bs,-wr),new se(0,Bs,wr),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],Ew=new se;class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=Ew}=r;Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Qu,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ba,format:Qn,colorSpace:eo,depthBuffer:!1},s=km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(r)),this._blurMaterial=xw(r,e,n)}return s}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,s,r){const l=new Kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Um),f.toneMapping=ds,f.autoClear=!1;const _=new R0({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new kn(new Ia,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Um),m=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const E=this._cubeSize;xl(s,v*E,b>2?E:0,E,E),f.setRenderTarget(s),m&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Jr||e.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fm[(s-r-1)%Fm.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kn(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Hs;m>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);const p=[];let b=0;for(let P=0;P<Hs;++P){const L=P/g,M=Math.exp(-L*L/2);p.push(M),P===0?b+=M:P<m&&(b+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[s],w=3*E*(s>v-Fr?s-v+Fr:0),C=4*(this._cubeSize-E);xl(n,w,C,3*E,2*E),l.setRenderTarget(n),l.render(f,Zu)}}function Sw(t){const e=[],n=[],i=[];let s=t;const r=t-Fr+1+Om.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Fr?l=Om[o-t+Fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),v=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,L=C>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(M,g*_*C),v.set(h,m*_*C);const y=[C,C,C,C,C,C];E.set(y,p*_*C)}const w=new As;w.setAttribute("position",new ci(b,g)),w.setAttribute("uv",new ci(v,m)),w.setAttribute("faceIndex",new ci(E,p)),e.push(w),s>Fr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function km(t,e,n){const i=new sr(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function xw(t,e,n){const i=new Float32Array(Hs),s=new se(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Vm(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Hm(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qf||l===jf,u=l===Jr||l===Qr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Bm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new Bm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Mw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Bl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tw(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let v=0,E=b.length;v<E;v+=3){const w=b[v+0],C=b[v+1],P=b[v+2];h.push(w,C,C,P,P,w)}}else if(_!==void 0){const b=_.array;g=_.version;for(let v=0,E=b.length/3-1;v<E;v+=3){const w=v+0,C=v+1,P=v+2;h.push(w,C,C,P,P,w)}}else return;const m=new(T0(h)?I0:w0)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bw(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,r,h*o),n.update(d,i,1)}function c(h,d,_){_!==0&&(t.drawElementsInstanced(i,d,r,h*o,_),n.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];n.update(m,i,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b]*g[b];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Aw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Cw(t,e,n){const i=new WeakMap,s=new Ot;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*w*4*f),P=new b0(C,E,w,f);P.type=Ii,P.needsUpdate=!0;const L=v*4;for(let y=0;y<f;y++){const N=m[y],D=p[y],k=b[y],j=E*w*4*y;for(let te=0;te<N.count;te++){const z=te*L;d===!0&&(s.fromBufferAttribute(N,te),C[j+z+0]=s.x,C[j+z+1]=s.y,C[j+z+2]=s.z,C[j+z+3]=0),_===!0&&(s.fromBufferAttribute(D,te),C[j+z+4]=s.x,C[j+z+5]=s.y,C[j+z+6]=s.z,C[j+z+7]=0),g===!0&&(s.fromBufferAttribute(k,te),C[j+z+8]=s.x,C[j+z+9]=s.y,C[j+z+10]=s.z,C[j+z+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new xt(E,w)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Rw(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const B0=new An,zm=new O0(1,1),k0=new b0,V0=new rC,H0=new L0,Gm=[],Wm=[],Xm=new Float32Array(16),$m=new Float32Array(9),qm=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zc(t,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function Lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;qm.set(i),t.uniformMatrix2fv(this.addr,!1,qm),jt(n,i)}}function Dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;$m.set(i),t.uniformMatrix3fv(this.addr,!1,$m),jt(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Xm.set(i),t.uniformMatrix4fv(this.addr,!1,Xm),jt(n,i)}}function Uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function Ww(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(zm.compareFunction=M0,r=zm):r=B0,n.setTexture2D(e||r,s)}function Xw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||V0,s)}function $w(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||H0,s)}function qw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||k0,s)}function jw(t){switch(t){case 5126:return ww;case 35664:return Iw;case 35665:return Pw;case 35666:return Nw;case 35674:return Lw;case 35675:return Dw;case 35676:return Ow;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Bw;case 35669:case 35673:return kw;case 5125:return Vw;case 36294:return Hw;case 36295:return zw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return qw}}function Yw(t,e){t.uniform1fv(this.addr,e)}function Kw(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function Zw(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function Jw(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function Qw(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eI(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tI(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nI(t,e){t.uniform1iv(this.addr,e)}function iI(t,e){t.uniform2iv(this.addr,e)}function sI(t,e){t.uniform3iv(this.addr,e)}function rI(t,e){t.uniform4iv(this.addr,e)}function oI(t,e){t.uniform1uiv(this.addr,e)}function aI(t,e){t.uniform2uiv(this.addr,e)}function lI(t,e){t.uniform3uiv(this.addr,e)}function cI(t,e){t.uniform4uiv(this.addr,e)}function uI(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||B0,r[o])}function fI(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||V0,r[o])}function hI(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||H0,r[o])}function dI(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||k0,r[o])}function pI(t){switch(t){case 5126:return Yw;case 35664:return Kw;case 35665:return Zw;case 35666:return Jw;case 35674:return Qw;case 35675:return eI;case 35676:return tI;case 5124:case 35670:return nI;case 35667:case 35671:return iI;case 35668:case 35672:return sI;case 35669:case 35673:return rI;case 5125:return oI;case 36294:return aI;case 36295:return lI;case 36296:return cI;case 35678:case 36198:case 36298:case 36306:case 35682:return uI;case 35679:case 36299:case 36307:return fI;case 35680:case 36300:case 36308:case 36293:return hI;case 36289:case 36303:case 36311:case 36292:return dI}}class mI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jw(n.type)}}class gI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pI(n.type)}}class _I{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function jm(t,e){t.seq.push(e),t.map[e.id]=e}function vI(t,e,n){const i=t.name,s=i.length;for(nf.lastIndex=0;;){const r=nf.exec(i),o=nf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jm(n,c===void 0?new mI(a,t,e):new gI(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new _I(a),jm(n,f)),n=f}}}class kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);vI(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EI=37297;let SI=0;function xI(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Km=new Qe;function yI(t){ht._getMatrix(Km,ht.workingColorSpace,t);const e=`mat3( ${Km.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(t)){case lc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+xI(t.getShaderSource(e),o)}else return s}function MI(t,e){const n=yI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TI(t,e){let n;switch(e){case PA:n="Linear";break;case NA:n="Reinhard";break;case LA:n="Cineon";break;case DA:n="ACESFilmic";break;case UA:n="AgX";break;case FA:n="Neutral";break;case OA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new se;function bI(){ht.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function CI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Do(t){return t!==""}function Jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(t){return t.replace(wI,PI)}const II=new Map;function PI(t,e){let n=et[e];if(n===void 0){const i=II.get(e);if(i!==void 0)n=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Th(n)}const NI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(t){return t.replace(NI,LI)}function LI(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function OI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function FI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case u0:e="ENVMAP_BLENDING_MULTIPLY";break;case wA:e="ENVMAP_BLENDING_MIX";break;case IA:e="ENVMAP_BLENDING_ADD";break}return e}function BI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kI(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DI(n),c=OI(n),u=UI(n),f=FI(n),h=BI(n),d=AI(n),_=CI(r),g=s.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Do).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Do).join(`
`),p.length>0&&(p+=`
`)):(m=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),p=[tg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?et.tonemapping_pars_fragment:"",n.toneMapping!==ds?TI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,MI("linearToOutputTexel",n.outputColorSpace),bI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),o=Th(o),o=Jm(o,n),o=Qm(o,n),a=Th(a),a=Jm(a,n),a=Qm(a,n),o=eg(o),a=eg(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+o,E=b+p+a,w=Ym(s,s.VERTEX_SHADER,v),C=Ym(s,s.FRAGMENT_SHADER,E);s.attachShader(g,w),s.attachShader(g,C),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(N){if(t.debug.checkShaderErrors){const D=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(w).trim(),j=s.getShaderInfoLog(C).trim();let te=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,w,C);else{const re=Zm(s,w,"vertex"),H=Zm(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+re+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||j==="")&&(z=!1);z&&(N.diagnostics={runnable:te,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(w),s.deleteShader(C),L=new kl(s,g),M=RI(s,g)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,EI)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SI++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}let VI=0;class HI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zI(e),n.set(e,i)),i}}class zI{constructor(e){this.id=VI++,this.code=e,this.usedTimes=0}}function GI(t,e,n,i,s,r,o){const a=new A0,l=new HI,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,N,D,k){const j=D.fog,te=k.geometry,z=M.isMeshStandardMaterial?D.environment:null,re=(M.isMeshStandardMaterial?n:e).get(M.envMap||z),H=re&&re.mapping===Vc?re.image.height:null,ve=_[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Ae=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Oe=Ae!==void 0?Ae.length:0;let Ge=0;te.morphAttributes.position!==void 0&&(Ge=1),te.morphAttributes.normal!==void 0&&(Ge=2),te.morphAttributes.color!==void 0&&(Ge=3);let st,ce,Me,Ie;if(ve){const dt=oi[ve];st=dt.vertexShader,ce=dt.fragmentShader}else st=M.vertexShader,ce=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),Ie=l.getFragmentShaderID(M);const G=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,he=k.isBatchedMesh===!0,He=!!M.map,$e=!!M.matcap,I=!!re,S=!!M.aoMap,Y=!!M.lightMap,oe=!!M.bumpMap,Q=!!M.normalMap,ee=!!M.displacementMap,ge=!!M.emissiveMap,ae=!!M.metalnessMap,A=!!M.roughnessMap,x=M.anisotropy>0,V=M.clearcoat>0,X=M.dispersion>0,Z=M.iridescence>0,K=M.sheen>0,xe=M.transmission>0,_e=x&&!!M.anisotropyMap,Ee=V&&!!M.clearcoatMap,Ye=V&&!!M.clearcoatNormalMap,me=V&&!!M.clearcoatRoughnessMap,Ce=Z&&!!M.iridescenceMap,Be=Z&&!!M.iridescenceThicknessMap,We=K&&!!M.sheenColorMap,Ue=K&&!!M.sheenRoughnessMap,je=!!M.specularMap,Xe=!!M.specularColorMap,ut=!!M.specularIntensityMap,W=xe&&!!M.transmissionMap,Re=xe&&!!M.thicknessMap,le=!!M.gradientMap,de=!!M.alphaMap,Le=M.alphaTest>0,Ne=!!M.alphaHash,Je=!!M.extensions;let vt=ds;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ht={shaderID:ve,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:ce,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:Ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:he,batchingColor:he&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:G===null?t.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:eo,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:$e,envMap:I,envMapMode:I&&re.mapping,envMapCubeUVHeight:H,aoMap:S,lightMap:Y,bumpMap:oe,normalMap:Q,displacementMap:h&&ee,emissiveMap:ge,normalMapObjectSpace:Q&&M.normalMapType===HA,normalMapTangentSpace:Q&&M.normalMapType===y0,metalnessMap:ae,roughnessMap:A,anisotropy:x,anisotropyMap:_e,clearcoat:V,clearcoatMap:Ee,clearcoatNormalMap:Ye,clearcoatRoughnessMap:me,dispersion:X,iridescence:Z,iridescenceMap:Ce,iridescenceThicknessMap:Be,sheen:K,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:je,specularColorMap:Xe,specularIntensityMap:ut,transmission:xe,transmissionMap:W,thicknessMap:Re,gradientMap:le,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Ne,combine:M.combine,mapUv:He&&g(M.map.channel),aoMapUv:S&&g(M.aoMap.channel),lightMapUv:Y&&g(M.lightMap.channel),bumpMapUv:oe&&g(M.bumpMap.channel),normalMapUv:Q&&g(M.normalMap.channel),displacementMapUv:ee&&g(M.displacementMap.channel),emissiveMapUv:ge&&g(M.emissiveMap.channel),metalnessMapUv:ae&&g(M.metalnessMap.channel),roughnessMapUv:A&&g(M.roughnessMap.channel),anisotropyMapUv:_e&&g(M.anisotropyMap.channel),clearcoatMapUv:Ee&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(M.sheenRoughnessMap.channel),specularMapUv:je&&g(M.specularMap.channel),specularColorMapUv:Xe&&g(M.specularColorMap.channel),specularIntensityMapUv:ut&&g(M.specularIntensityMap.channel),transmissionMapUv:W&&g(M.transmissionMap.channel),thicknessMapUv:Re&&g(M.thicknessMap.channel),alphaMapUv:de&&g(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Q||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(He||de),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===Et,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ri,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Je&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&M.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(b(y,M),v(y,M),y.push(t.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){const y=_[M.type];let N;if(y){const D=oi[y];N=EC.clone(D.uniforms)}else N=M.uniforms;return N}function w(M,y){let N;for(let D=0,k=u.length;D<k;D++){const j=u[D];if(j.cacheKey===y){N=j,++N.usedTimes;break}}return N===void 0&&(N=new kI(t,y,M,r),u.push(N)),N}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:L}}function WI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function XI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ig(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||XI),i.length>1&&i.sort(h||ng),s.length>1&&s.sort(h||ng)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $I(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ig,t.set(i,[o])):s>=r.length?(o=new ig,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new St};break;case"SpotLight":n={position:new se,direction:new se,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new se,halfWidth:new se,halfHeight:new se};break}return t[e.id]=n,n}}}function jI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YI=0;function KI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZI(t){const e=new qI,n=jI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const s=new se,r=new Vt,o=new Vt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,b=0,v=0,E=0,w=0,C=0,P=0;c.sort(KI);for(let M=0,y=c.length;M<y;M++){const N=c[M],D=N.color,k=N.intensity,j=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=D.r*k,f+=D.g*k,h+=D.b*k;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],k);P++}else if(N.isDirectionalLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const re=N.shadow,H=n.get(N);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=te,i.directionalShadowMatrix[d]=N.shadow.matrix,b++}i.directional[d]=z,d++}else if(N.isSpotLight){const z=e.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(D).multiplyScalar(k),z.distance=j,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[g]=z;const re=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,re.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[g]=re.matrix,N.castShadow){const H=n.get(N);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=te,E++}g++}else if(N.isRectAreaLight){const z=e.get(N);z.color.copy(D).multiplyScalar(k),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=z,m++}else if(N.isPointLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const re=N.shadow,H=n.get(N);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=N.shadow.matrix,v++}i.point[_]=z,_++}else if(N.isHemisphereLight){const z=e.get(N);z.skyColor.copy(N.color).multiplyScalar(k),z.groundColor.copy(N.groundColor).multiplyScalar(k),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==w||L.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,L.directionalLength=d,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=w,L.numLightProbes=P,i.version=YI++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const v=c[p];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(v.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function sg(t){const e=new ZI(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function JI(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new sg(t),e.set(s,[a])):r>=o.length?(a=new sg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tP(t,e,n){let i=new D0;const s=new xt,r=new xt,o=new Ot,a=new RC({depthPacking:VA}),l=new wC,c={},u=n.maxTextureSize,f={[_s]:bn,[bn]:_s,[Ri]:Ri},h=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:QI,fragmentShader:eP}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new As;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let p=this.type;this.render=function(C,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),y=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),D=t.state;D.setBlending(hs),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=p!==yi&&this.type===yi,j=p===yi&&this.type!==yi;for(let te=0,z=C.length;te<z;te++){const re=C[te],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ve=H.getFrameExtents();if(s.multiply(ve),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,H.mapSize.y=r.y)),H.map===null||k===!0||j===!0){const Oe=this.type!==yi?{minFilter:ti,magFilter:ti}:{};H.map!==null&&H.map.dispose(),H.map=new sr(s.x,s.y,Oe),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Ae=H.getViewportCount();for(let Oe=0;Oe<Ae;Oe++){const Ge=H.getViewport(Oe);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),D.viewport(o),H.updateMatrices(re,Oe),i=H.getFrustum(),E(P,L,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===yi&&b(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,y,N)};function b(C,P){const L=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sr(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,L,h,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,L,d,g,null)}function v(C,P,L,M){let y=null;const N=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)y=N;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const D=y.uuid,k=P.uuid;let j=c[D];j===void 0&&(j={},c[D]=j);let te=j[k];te===void 0&&(te=y.clone(),j[k]=te,P.addEventListener("dispose",w)),y=te}if(y.visible=P.visible,y.wireframe=P.wireframe,M===yi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=t.properties.get(y);D.light=L}return y}function E(C,P,L,M,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=e.update(C),j=C.material;if(Array.isArray(j)){const te=k.groups;for(let z=0,re=te.length;z<re;z++){const H=te[z],ve=j[H.materialIndex];if(ve&&ve.visible){const Ae=v(C,ve,M,y);C.onBeforeShadow(t,C,P,L,k,Ae,H),t.renderBufferDirect(L,null,k,Ae,C,H),C.onAfterShadow(t,C,P,L,k,Ae,H)}}}else if(j.visible){const te=v(C,j,M,y);C.onBeforeShadow(t,C,P,L,k,te,null),t.renderBufferDirect(L,null,k,te,C,null),C.onAfterShadow(t,C,P,L,k,te,null)}}const D=C.children;for(let k=0,j=D.length;k<j;k++)E(D[k],P,L,M,y)}function w(C){C.target.removeEventListener("dispose",w);for(const L in c){const M=c[L],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const nP={[Vf]:Hf,[zf]:Xf,[Gf]:$f,[Zr]:Wf,[Hf]:Vf,[Xf]:zf,[$f]:Gf,[Wf]:Zr};function iP(t,e){function n(){let W=!1;const Re=new Ot;let le=null;const de=new Ot(0,0,0,0);return{setMask:function(Le){le!==Le&&!W&&(t.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Ne,Je,vt,Ht){Ht===!0&&(Le*=vt,Ne*=vt,Je*=vt),Re.set(Le,Ne,Je,vt),de.equals(Re)===!1&&(t.clearColor(Le,Ne,Je,vt),de.copy(Re))},reset:function(){W=!1,le=null,de.set(-1,0,0,0)}}}function i(){let W=!1,Re=!1,le=null,de=null,Le=null;return{setReversed:function(Ne){if(Re!==Ne){const Je=e.get("EXT_clip_control");Ne?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Re=Ne;const vt=Le;Le=null,this.setClear(vt)}},getReversed:function(){return Re},setTest:function(Ne){Ne?G(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Ne){le!==Ne&&!W&&(t.depthMask(Ne),le=Ne)},setFunc:function(Ne){if(Re&&(Ne=nP[Ne]),de!==Ne){switch(Ne){case Vf:t.depthFunc(t.NEVER);break;case Hf:t.depthFunc(t.ALWAYS);break;case zf:t.depthFunc(t.LESS);break;case Zr:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case $f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){Le!==Ne&&(Re&&(Ne=1-Ne),t.clearDepth(Ne),Le=Ne)},reset:function(){W=!1,le=null,de=null,Le=null,Re=!1}}}function s(){let W=!1,Re=null,le=null,de=null,Le=null,Ne=null,Je=null,vt=null,Ht=null;return{setTest:function(dt){W||(dt?G(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(dt){Re!==dt&&!W&&(t.stencilMask(dt),Re=dt)},setFunc:function(dt,hn,Xn){(le!==dt||de!==hn||Le!==Xn)&&(t.stencilFunc(dt,hn,Xn),le=dt,de=hn,Le=Xn)},setOp:function(dt,hn,Xn){(Ne!==dt||Je!==hn||vt!==Xn)&&(t.stencilOp(dt,hn,Xn),Ne=dt,Je=hn,vt=Xn)},setLocked:function(dt){W=dt},setClear:function(dt){Ht!==dt&&(t.clearStencil(dt),Ht=dt)},reset:function(){W=!1,Re=null,le=null,de=null,Le=null,Ne=null,Je=null,vt=null,Ht=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,v=null,E=null,w=null,C=null,P=new St(0,0,0),L=0,M=!1,y=null,N=null,D=null,k=null,j=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,re=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=re>=2);let ve=null,Ae={};const Oe=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),st=new Ot().fromArray(Oe),ce=new Ot().fromArray(Ge);function Me(W,Re,le,de){const Le=new Uint8Array(4),Ne=t.createTexture();t.bindTexture(W,Ne),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<le;Je++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(Re+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return Ne}const Ie={};Ie[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(t.DEPTH_TEST),o.setFunc(Zr),oe(!1),Q(um),G(t.CULL_FACE),S(hs);function G(W){u[W]!==!0&&(t.enable(W),u[W]=!0)}function ue(W){u[W]!==!1&&(t.disable(W),u[W]=!1)}function pe(W,Re){return f[W]!==Re?(t.bindFramebuffer(W,Re),f[W]=Re,W===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),W===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function he(W,Re){let le=d,de=!1;if(W){le=h.get(Re),le===void 0&&(le=[],h.set(Re,le));const Le=W.textures;if(le.length!==Le.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Ne=0,Je=Le.length;Ne<Je;Ne++)le[Ne]=t.COLOR_ATTACHMENT0+Ne;le.length=Le.length,de=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,de=!0);de&&t.drawBuffers(le)}function He(W){return _!==W?(t.useProgram(W),_=W,!0):!1}const $e={[Vs]:t.FUNC_ADD,[hA]:t.FUNC_SUBTRACT,[dA]:t.FUNC_REVERSE_SUBTRACT};$e[pA]=t.MIN,$e[mA]=t.MAX;const I={[gA]:t.ZERO,[_A]:t.ONE,[vA]:t.SRC_COLOR,[Bf]:t.SRC_ALPHA,[TA]:t.SRC_ALPHA_SATURATE,[yA]:t.DST_COLOR,[SA]:t.DST_ALPHA,[EA]:t.ONE_MINUS_SRC_COLOR,[kf]:t.ONE_MINUS_SRC_ALPHA,[MA]:t.ONE_MINUS_DST_COLOR,[xA]:t.ONE_MINUS_DST_ALPHA,[bA]:t.CONSTANT_COLOR,[AA]:t.ONE_MINUS_CONSTANT_COLOR,[CA]:t.CONSTANT_ALPHA,[RA]:t.ONE_MINUS_CONSTANT_ALPHA};function S(W,Re,le,de,Le,Ne,Je,vt,Ht,dt){if(W===hs){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(G(t.BLEND),g=!0),W!==fA){if(W!==m||dt!==M){if((p!==Vs||E!==Vs)&&(t.blendEquation(t.FUNC_ADD),p=Vs,E=Vs),dt)switch(W){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.ONE,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,v=null,w=null,C=null,P.set(0,0,0),L=0,m=W,M=dt}return}Le=Le||Re,Ne=Ne||le,Je=Je||de,(Re!==p||Le!==E)&&(t.blendEquationSeparate($e[Re],$e[Le]),p=Re,E=Le),(le!==b||de!==v||Ne!==w||Je!==C)&&(t.blendFuncSeparate(I[le],I[de],I[Ne],I[Je]),b=le,v=de,w=Ne,C=Je),(vt.equals(P)===!1||Ht!==L)&&(t.blendColor(vt.r,vt.g,vt.b,Ht),P.copy(vt),L=Ht),m=W,M=!1}function Y(W,Re){W.side===Ri?ue(t.CULL_FACE):G(t.CULL_FACE);let le=W.side===bn;Re&&(le=!le),oe(le),W.blending===Vr&&W.transparent===!1?S(hs):S(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const de=W.stencilWrite;a.setTest(de),de&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ge(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?G(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){y!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),y=W)}function Q(W){W!==lA?(G(t.CULL_FACE),W!==N&&(W===um?t.cullFace(t.BACK):W===cA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),N=W}function ee(W){W!==D&&(z&&t.lineWidth(W),D=W)}function ge(W,Re,le){W?(G(t.POLYGON_OFFSET_FILL),(k!==Re||j!==le)&&(t.polygonOffset(Re,le),k=Re,j=le)):ue(t.POLYGON_OFFSET_FILL)}function ae(W){W?G(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function A(W){W===void 0&&(W=t.TEXTURE0+te-1),ve!==W&&(t.activeTexture(W),ve=W)}function x(W,Re,le){le===void 0&&(ve===null?le=t.TEXTURE0+te-1:le=ve);let de=Ae[le];de===void 0&&(de={type:void 0,texture:void 0},Ae[le]=de),(de.type!==W||de.texture!==Re)&&(ve!==le&&(t.activeTexture(le),ve=le),t.bindTexture(W,Re||Ie[W]),de.type=W,de.texture=Re)}function V(){const W=Ae[ve];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function X(){try{t.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{t.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{t.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{t.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{t.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{t.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{t.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(W){st.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),st.copy(W))}function Ue(W){ce.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),ce.copy(W))}function je(W,Re){let le=c.get(Re);le===void 0&&(le=new WeakMap,c.set(Re,le));let de=le.get(W);de===void 0&&(de=t.getUniformBlockIndex(Re,W.name),le.set(W,de))}function Xe(W,Re){const de=c.get(Re).get(W);l.get(Re)!==de&&(t.uniformBlockBinding(Re,de,W.__bindingPointIndex),l.set(Re,de))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ve=null,Ae={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,v=null,E=null,w=null,C=null,P=new St(0,0,0),L=0,M=!1,y=null,N=null,D=null,k=null,j=null,st.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:ue,bindFramebuffer:pe,drawBuffers:he,useProgram:He,setBlending:S,setMaterial:Y,setFlipSided:oe,setCullFace:Q,setLineWidth:ee,setPolygonOffset:ge,setScissorTest:ae,activeTexture:A,bindTexture:x,unbindTexture:V,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:Ce,texImage3D:Be,updateUBOMapping:je,uniformBlockBinding:Xe,texStorage2D:Ye,texStorage3D:me,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:We,viewport:Ue,reset:ut}}function sP(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return d?new OffscreenCanvas(A,x):uc("canvas")}function g(A,x,V){let X=1;const Z=ae(A);if((Z.width>V||Z.height>V)&&(X=V/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(X*Z.width),xe=Math.floor(X*Z.height);f===void 0&&(f=_(K,xe));const _e=x?_(K,xe):f;return _e.width=K,_e.height=xe,_e.getContext("2d").drawImage(A,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+xe+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,x,V,X,Z=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=x;if(x===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),x===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGB8UI),V===t.UNSIGNED_SHORT&&(K=t.RGB16UI),V===t.UNSIGNED_INT&&(K=t.RGB32UI),V===t.BYTE&&(K=t.RGB8I),V===t.SHORT&&(K=t.RGB16I),V===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),V===t.UNSIGNED_INT&&(K=t.RGBA32UI),V===t.BYTE&&(K=t.RGBA8I),V===t.SHORT&&(K=t.RGBA16I),V===t.INT&&(K=t.RGBA32I)),x===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const xe=Z?lc:ht.getTransfer(X);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=xe===Et?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(A,x){let V;return A?x===null||x===ir||x===aa?V=t.DEPTH24_STENCIL8:x===Ii?V=t.DEPTH32F_STENCIL8:x===oa&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ir||x===aa?V=t.DEPTH_COMPONENT24:x===Ii?V=t.DEPTH_COMPONENT32F:x===oa&&(V=t.DEPTH_COMPONENT16),V}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ti&&A.minFilter!==ai?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&u.delete(x)}function P(A){const x=A.target;x.removeEventListener("dispose",P),y(x)}function L(A){const x=i.get(A);if(x.__webglInit===void 0)return;const V=A.source,X=h.get(V);if(X){const Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(A),Object.keys(X).length===0&&h.delete(V)}i.remove(A)}function M(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const V=A.source,X=h.get(V);delete X[x.__cacheKey],o.memory.textures--}function y(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Z=0;Z<x.__webglFramebuffer[X].length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[X][Z]);else t.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)t.deleteFramebuffer(x.__webglFramebuffer[X]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=A.textures;for(let X=0,Z=V.length;X<Z;X++){const K=i.get(V[X]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(V[X])}i.remove(A)}let N=0;function D(){N=0}function k(){const A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function j(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function te(A,x){const V=i.get(A);if(A.isVideoTexture&&ee(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,A,x);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+x)}function z(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){ce(V,A,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+x)}function re(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){ce(V,A,x);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+x)}function H(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Me(V,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+x)}const ve={[Yf]:t.REPEAT,[zs]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},Ae={[ti]:t.NEAREST,[BA]:t.NEAREST_MIPMAP_NEAREST,[nl]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[Au]:t.LINEAR_MIPMAP_NEAREST,[Gs]:t.LINEAR_MIPMAP_LINEAR},Oe={[zA]:t.NEVER,[jA]:t.ALWAYS,[GA]:t.LESS,[M0]:t.LEQUAL,[WA]:t.EQUAL,[qA]:t.GEQUAL,[XA]:t.GREATER,[$A]:t.NOTEQUAL};function Ge(A,x){if(x.type===Ii&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ai||x.magFilter===Au||x.magFilter===nl||x.magFilter===Gs||x.minFilter===ai||x.minFilter===Au||x.minFilter===nl||x.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ve[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ve[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ve[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ae[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ti||x.minFilter!==nl&&x.minFilter!==Gs||x.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const X=x.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const K=j(x);if(K!==A.__cacheKey){Z[K]===void 0&&(Z[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[K].usedTimes++;const xe=Z[A.__cacheKey];xe!==void 0&&(Z[A.__cacheKey].usedTimes--,xe.usedTimes===0&&M(x)),A.__cacheKey=K,A.__webglTexture=Z[K].texture}return V}function ce(A,x,V){let X=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=t.TEXTURE_3D);const Z=st(A,x),K=x.source;n.bindTexture(X,A.__webglTexture,t.TEXTURE0+V);const xe=i.get(K);if(K.version!==xe.__version||Z===!0){n.activeTexture(t.TEXTURE0+V);const _e=ht.getPrimaries(ht.workingColorSpace),Ee=x.colorSpace===ss?null:ht.getPrimaries(x.colorSpace),Ye=x.colorSpace===ss||_e===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let me=g(x.image,!1,s.maxTextureSize);me=ge(x,me);const Ce=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let We=v(x.internalFormat,Ce,Be,x.colorSpace,x.isVideoTexture);Ge(X,x);let Ue;const je=x.mipmaps,Xe=x.isVideoTexture!==!0,ut=xe.__version===void 0||Z===!0,W=K.dataReady,Re=w(x,me);if(x.isDepthTexture)We=E(x.format===ca,x.type),ut&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,We,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,We,me.width,me.height,0,Ce,Be,null));else if(x.isDataTexture)if(je.length>0){Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,Re,We,je[0].width,je[0].height);for(let le=0,de=je.length;le<de;le++)Ue=je[le],Xe?W&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ue.width,Ue.height,Ce,Be,Ue.data):n.texImage2D(t.TEXTURE_2D,le,We,Ue.width,Ue.height,0,Ce,Be,Ue.data);x.generateMipmaps=!1}else Xe?(ut&&n.texStorage2D(t.TEXTURE_2D,Re,We,me.width,me.height),W&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me.width,me.height,Ce,Be,me.data)):n.texImage2D(t.TEXTURE_2D,0,We,me.width,me.height,0,Ce,Be,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,We,je[0].width,je[0].height,me.depth);for(let le=0,de=je.length;le<de;le++)if(Ue=je[le],x.format!==Qn)if(Ce!==null)if(Xe){if(W)if(x.layerUpdates.size>0){const Le=Dm(Ue.width,Ue.height,x.format,x.type);for(const Ne of x.layerUpdates){const Je=Ue.data.subarray(Ne*Le/Ue.data.BYTES_PER_ELEMENT,(Ne+1)*Le/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Ne,Ue.width,Ue.height,1,Ce,Je)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ue.width,Ue.height,me.depth,Ce,Ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,We,Ue.width,Ue.height,me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?W&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Ue.width,Ue.height,me.depth,Ce,Be,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,We,Ue.width,Ue.height,me.depth,0,Ce,Be,Ue.data)}else{Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,Re,We,je[0].width,je[0].height);for(let le=0,de=je.length;le<de;le++)Ue=je[le],x.format!==Qn?Ce!==null?Xe?W&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Ue.width,Ue.height,Ce,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,le,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?W&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ue.width,Ue.height,Ce,Be,Ue.data):n.texImage2D(t.TEXTURE_2D,le,We,Ue.width,Ue.height,0,Ce,Be,Ue.data)}else if(x.isDataArrayTexture)if(Xe){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,We,me.width,me.height,me.depth),W)if(x.layerUpdates.size>0){const le=Dm(me.width,me.height,x.format,x.type);for(const de of x.layerUpdates){const Le=me.data.subarray(de*le/me.data.BYTES_PER_ELEMENT,(de+1)*le/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,me.width,me.height,1,Ce,Be,Le)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Be,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,Ce,Be,me.data);else if(x.isData3DTexture)Xe?(ut&&n.texStorage3D(t.TEXTURE_3D,Re,We,me.width,me.height,me.depth),W&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Be,me.data)):n.texImage3D(t.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,Ce,Be,me.data);else if(x.isFramebufferTexture){if(ut)if(Xe)n.texStorage2D(t.TEXTURE_2D,Re,We,me.width,me.height);else{let le=me.width,de=me.height;for(let Le=0;Le<Re;Le++)n.texImage2D(t.TEXTURE_2D,Le,We,le,de,0,Ce,Be,null),le>>=1,de>>=1}}else if(je.length>0){if(Xe&&ut){const le=ae(je[0]);n.texStorage2D(t.TEXTURE_2D,Re,We,le.width,le.height)}for(let le=0,de=je.length;le<de;le++)Ue=je[le],Xe?W&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Ce,Be,Ue):n.texImage2D(t.TEXTURE_2D,le,We,Ce,Be,Ue);x.generateMipmaps=!1}else if(Xe){if(ut){const le=ae(me);n.texStorage2D(t.TEXTURE_2D,Re,We,le.width,le.height)}W&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Be,me)}else n.texImage2D(t.TEXTURE_2D,0,We,Ce,Be,me);m(x)&&p(X),xe.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Me(A,x,V){if(x.image.length!==6)return;const X=st(A,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const K=i.get(Z);if(Z.version!==K.__version||X===!0){n.activeTexture(t.TEXTURE0+V);const xe=ht.getPrimaries(ht.workingColorSpace),_e=x.colorSpace===ss?null:ht.getPrimaries(x.colorSpace),Ee=x.colorSpace===ss||xe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ye=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let de=0;de<6;de++)!Ye&&!me?Ce[de]=g(x.image[de],!0,s.maxCubemapSize):Ce[de]=me?x.image[de].image:x.image[de],Ce[de]=ge(x,Ce[de]);const Be=Ce[0],We=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),je=v(x.internalFormat,We,Ue,x.colorSpace),Xe=x.isVideoTexture!==!0,ut=K.__version===void 0||X===!0,W=Z.dataReady;let Re=w(x,Be);Ge(t.TEXTURE_CUBE_MAP,x);let le;if(Ye){Xe&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,je,Be.width,Be.height);for(let de=0;de<6;de++){le=Ce[de].mipmaps;for(let Le=0;Le<le.length;Le++){const Ne=le[Le];x.format!==Qn?We!==null?Xe?W&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Ne.width,Ne.height,We,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,je,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Ne.width,Ne.height,We,Ue,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,je,Ne.width,Ne.height,0,We,Ue,Ne.data)}}}else{if(le=x.mipmaps,Xe&&ut){le.length>0&&Re++;const de=ae(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,je,de.width,de.height)}for(let de=0;de<6;de++)if(me){Xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ce[de].width,Ce[de].height,We,Ue,Ce[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,je,Ce[de].width,Ce[de].height,0,We,Ue,Ce[de].data);for(let Le=0;Le<le.length;Le++){const Je=le[Le].image[de].image;Xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,Je.width,Je.height,We,Ue,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,je,Je.width,Je.height,0,We,Ue,Je.data)}}else{Xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,We,Ue,Ce[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,je,We,Ue,Ce[de]);for(let Le=0;Le<le.length;Le++){const Ne=le[Le];Xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,We,Ue,Ne.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,je,We,Ue,Ne.image[de])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ie(A,x,V,X,Z,K){const xe=r.convert(V.format,V.colorSpace),_e=r.convert(V.type),Ee=v(V.internalFormat,xe,_e,V.colorSpace),Ye=i.get(x),me=i.get(V);if(me.__renderTarget=x,!Ye.__hasExternalTextures){const Ce=Math.max(1,x.width>>K),Be=Math.max(1,x.height>>K);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,K,Ee,Ce,Be,x.depth,0,xe,_e,null):n.texImage2D(Z,K,Ee,Ce,Be,0,xe,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Z,me.__webglTexture,0,oe(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Z,me.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(A,x,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,Z=X&&X.isDepthTexture?X.type:null,K=E(x.stencilBuffer,Z),xe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=oe(x);Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,K,x.width,x.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,A)}else{const X=x.textures;for(let Z=0;Z<X.length;Z++){const K=X[Z],xe=r.convert(K.format,K.colorSpace),_e=r.convert(K.type),Ee=v(K.internalFormat,xe,_e,K.colorSpace),Ye=oe(x);V&&Q(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ee,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,Ee,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),te(x.depthTexture,0);const Z=X.__webglTexture,K=oe(x);if(x.depthTexture.format===la)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(x.depthTexture.format===ca)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function pe(A){const x=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,A)}else if(V){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=t.createRenderbuffer(),G(x.__webglDepthbuffer[X],A,!1);else{const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),G(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,Z)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,x,V){const X=i.get(A);x!==void 0&&Ie(X.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&pe(A)}function He(A){const x=A.texture,V=i.get(A),X=i.get(x);A.addEventListener("dispose",P);const Z=A.textures,K=A.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=x.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)V.__webglFramebuffer[_e][Ee]=t.createFramebuffer()}else V.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)V.__webglFramebuffer[_e]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(xe)for(let _e=0,Ee=Z.length;_e<Ee;_e++){const Ye=i.get(Z[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Q(A)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<Z.length;_e++){const Ee=Z[_e];V.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);const Ye=r.convert(Ee.format,Ee.colorSpace),me=r.convert(Ee.type),Ce=v(Ee.internalFormat,Ye,me,Ee.colorSpace,A.isXRRenderTarget===!0),Be=oe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),G(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Ie(V.__webglFramebuffer[_e][Ee],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else Ie(V.__webglFramebuffer[_e],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let _e=0,Ee=Z.length;_e<Ee;_e++){const Ye=Z[_e],me=i.get(Ye);n.bindTexture(t.TEXTURE_2D,me.__webglTexture),Ge(t.TEXTURE_2D,Ye),Ie(V.__webglFramebuffer,A,Ye,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),m(Ye)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,X.__webglTexture),Ge(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Ie(V.__webglFramebuffer[Ee],A,x,t.COLOR_ATTACHMENT0,_e,Ee);else Ie(V.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,_e,0);m(x)&&p(_e),n.unbindTexture()}A.depthBuffer&&pe(A)}function $e(A){const x=A.textures;for(let V=0,X=x.length;V<X;V++){const Z=x[V];if(m(Z)){const K=b(A),xe=i.get(Z).__webglTexture;n.bindTexture(K,xe),p(K),n.unbindTexture()}}}const I=[],S=[];function Y(A){if(A.samples>0){if(Q(A)===!1){const x=A.textures,V=A.width,X=A.height;let Z=t.COLOR_BUFFER_BIT;const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(A),_e=x.length>1;if(_e)for(let Ee=0;Ee<x.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const Ye=i.get(x[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,V,X,0,0,V,X,Z,t.NEAREST),l===!0&&(I.length=0,S.length=0,I.push(t.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(I.push(K),S.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,S)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Ee=0;Ee<x.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const Ye=i.get(x[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function oe(A){return Math.min(s.maxSamples,A.samples)}function Q(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ge(A,x){const V=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==eo&&V!==ss&&(ht.getTransfer(V)===Et?(X!==Qn||Z!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=te,this.setTexture2DArray=z,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=he,this.setupRenderTarget=He,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Q}function rP(t,e){function n(i,s=ss){let r;const o=ht.getTransfer(s);if(i===ki)return t.UNSIGNED_BYTE;if(i===fd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===p0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===h0)return t.BYTE;if(i===d0)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===ud)return t.INT;if(i===ir)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===ba)return t.HALF_FLOAT;if(i===m0)return t.ALPHA;if(i===g0)return t.RGB;if(i===Qn)return t.RGBA;if(i===_0)return t.LUMINANCE;if(i===v0)return t.LUMINANCE_ALPHA;if(i===la)return t.DEPTH_COMPONENT;if(i===ca)return t.DEPTH_STENCIL;if(i===E0)return t.RED;if(i===dd)return t.RED_INTEGER;if(i===S0)return t.RG;if(i===pd)return t.RG_INTEGER;if(i===md)return t.RGBA_INTEGER;if(i===Ll||i===Dl||i===Ol||i===Ul)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Jf||i===Qf||i===eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===th||i===nh)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===_h)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===vh||i===Eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===x0||i===Sh||i===xh||i===yh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const oP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new An,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vs({vertexShader:oP,fragmentShader:aP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new Hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cP extends uo{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new lP,m=n.getContextAttributes();let p=null,b=null;const v=[],E=[],w=new xt;let C=null;const P=new Kn;P.viewport=new Ot;const L=new Kn;L.viewport=new Ot;const M=[P,L],y=new IC;let N=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Me=v[ce];return Me===void 0&&(Me=new ju,v[ce]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ce){let Me=v[ce];return Me===void 0&&(Me=new ju,v[ce]=Me),Me.getGripSpace()},this.getHand=function(ce){let Me=v[ce];return Me===void 0&&(Me=new ju,v[ce]=Me),Me.getHandSpace()};function k(ce){const Me=E.indexOf(ce.inputSource);if(Me===-1)return;const Ie=v[Me];Ie!==void 0&&(Ie.update(ce.inputSource,ce.frame,c||o),Ie.dispatchEvent({type:ce.type,data:ce.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",te);for(let ce=0;ce<v.length;ce++){const Me=E[ce];Me!==null&&(E[ce]=null,v[ce].disconnect(Me))}N=null,D=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,G=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ie=m.stencil?ca:la,G=m.stencil?aa:ir);const pe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new sr(h.textureWidth,h.textureHeight,{format:Qn,type:ki,depthTexture:new O0(h.textureWidth,h.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,Ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new sr(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(ce){for(let Me=0;Me<ce.removed.length;Me++){const Ie=ce.removed[Me],G=E.indexOf(Ie);G>=0&&(E[G]=null,v[G].disconnect(Ie))}for(let Me=0;Me<ce.added.length;Me++){const Ie=ce.added[Me];let G=E.indexOf(Ie);if(G===-1){for(let pe=0;pe<v.length;pe++)if(pe>=E.length){E.push(Ie),G=pe;break}else if(E[pe]===null){E[pe]=Ie,G=pe;break}if(G===-1)break}const ue=v[G];ue&&ue.connect(Ie)}}const z=new se,re=new se;function H(ce,Me,Ie){z.setFromMatrixPosition(Me.matrixWorld),re.setFromMatrixPosition(Ie.matrixWorld);const G=z.distanceTo(re),ue=Me.projectionMatrix.elements,pe=Ie.projectionMatrix.elements,he=ue[14]/(ue[10]-1),He=ue[14]/(ue[10]+1),$e=(ue[9]+1)/ue[5],I=(ue[9]-1)/ue[5],S=(ue[8]-1)/ue[0],Y=(pe[8]+1)/pe[0],oe=he*S,Q=he*Y,ee=G/(-S+Y),ge=ee*-S;if(Me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(ge),ce.translateZ(ee),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),ue[10]===-1)ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ae=he+ee,A=He+ee,x=oe-ge,V=Q+(G-ge),X=$e*He/A*ae,Z=I*He/A*ae;ce.projectionMatrix.makePerspective(x,V,X,Z,ae,A),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function ve(ce,Me){Me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let Me=ce.near,Ie=ce.far;g.texture!==null&&(g.depthNear>0&&(Me=g.depthNear),g.depthFar>0&&(Ie=g.depthFar)),y.near=L.near=P.near=Me,y.far=L.far=P.far=Ie,(N!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,D=y.far),P.layers.mask=ce.layers.mask|2,L.layers.mask=ce.layers.mask|4,y.layers.mask=P.layers.mask|L.layers.mask;const G=ce.parent,ue=y.cameras;ve(y,G);for(let pe=0;pe<ue.length;pe++)ve(ue[pe],G);ue.length===2?H(y,P,L):y.projectionMatrix.copy(P.projectionMatrix),Ae(ce,y,G)};function Ae(ce,Me,Ie){Ie===null?ce.matrix.copy(Me.matrixWorld):(ce.matrix.copy(Ie.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Mh*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ce){l=ce,h!==null&&(h.fixedFoveation=ce),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ce)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Oe=null;function Ge(ce,Me){if(u=Me.getViewerPose(c||o),_=Me,u!==null){const Ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let G=!1;Ie.length!==y.cameras.length&&(y.cameras.length=0,G=!0);for(let he=0;he<Ie.length;he++){const He=Ie[he];let $e=null;if(d!==null)$e=d.getViewport(He);else{const S=f.getViewSubImage(h,He);$e=S.viewport,he===0&&(e.setRenderTargetTextures(b,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(b))}let I=M[he];I===void 0&&(I=new Kn,I.layers.enable(he),I.viewport=new Ot,M[he]=I),I.matrix.fromArray(He.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(He.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set($e.x,$e.y,$e.width,$e.height),he===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),G===!0&&y.cameras.push(I)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const he=f.getDepthInformation(Ie[0]);he&&he.isValid&&he.texture&&g.init(e,he,s.renderState)}}for(let Ie=0;Ie<v.length;Ie++){const G=E[Ie],ue=v[Ie];G!==null&&ue!==void 0&&ue.update(G,Me,c||o)}Oe&&Oe(ce,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),_=null}const st=new F0;st.setAnimationLoop(Ge),this.setAnimationLoop=function(ce){Oe=ce},this.dispose=function(){}}}const Us=new Vi,uP=new Vt;function fP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,P0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),v=b.envMap,E=b.envMapRotation;v&&(m.envMap.value=v,Us.copy(E),Us.x*=-1,Us.y*=-1,Us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(uP.makeRotationFromEuler(Us)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const E=v.program;i.uniformBlockBinding(b,E)}function c(b,v){let E=s[b.id];E===void 0&&(_(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(b,w);const C=e.render.frame;r[b.id]!==C&&(h(b),r[b.id]=C)}function u(b){const v=f();b.__bindingPointIndex=v;const E=t.createBuffer(),w=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=s[b.id],E=b.uniforms,w=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,P=E.length;C<P;C++){const L=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,y=L.length;M<y;M++){const N=L[M];if(d(N,C,M,w)===!0){const D=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let te=0;te<k.length;te++){const z=k[te],re=g(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,D+j,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,j),j+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(b,v,E,w){const C=b.value,P=v+"_"+E;if(w[P]===void 0)return typeof C=="number"||typeof C=="boolean"?w[P]=C:w[P]=C.clone(),!0;{const L=w[P];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return w[P]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function _(b){const v=b.uniforms;let E=0;const w=16;for(let P=0,L=v.length;P<L;P++){const M=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,N=M.length;y<N;y++){const D=M[y],k=Array.isArray(D.value)?D.value:[D.value];for(let j=0,te=k.length;j<te;j++){const z=k[j],re=g(z),H=E%w,ve=H%re.boundary,Ae=H+ve;E+=ve,Ae!==0&&w-Ae<re.storage&&(E+=w-Ae),D.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=re.storage}}}const C=E%w;return C>0&&(E+=w-C),b.__size=E,b.__cache={},this}function g(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class dP{constructor(e={}){const{canvas:n=KA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const b=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=Fn;let C=0,P=0,L=null,M=-1,y=null;const N=new Ot,D=new Ot;let k=null;const j=new St(0);let te=0,z=n.width,re=n.height,H=1,ve=null,Ae=null;const Oe=new Ot(0,0,z,re),Ge=new Ot(0,0,z,re);let st=!1;const ce=new D0;let Me=!1,Ie=!1;const G=new Vt,ue=new Vt,pe=new se,he=new Ot,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function I(){return L===null?H:1}let S=i;function Y(R,$){return n.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),S===null){const $="webgl2";if(S=Y($,R),S===null)throw Y($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,Q,ee,ge,ae,A,x,V,X,Z,K,xe,_e,Ee,Ye,me,Ce,Be,We,Ue,je,Xe,ut,W;function Re(){oe=new Mw(S),oe.init(),Xe=new rP(S,oe),Q=new gw(S,oe,e,Xe),ee=new iP(S,oe),Q.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),ge=new Aw(S),ae=new WI,A=new sP(S,oe,ee,ae,Q,Xe,ge),x=new vw(E),V=new yw(E),X=new NC(S),ut=new pw(S,X),Z=new Tw(S,X,ge,ut),K=new Rw(S,Z,X,ge),We=new Cw(S,Q,A),me=new _w(ae),xe=new GI(E,x,V,oe,Q,ut,me),_e=new fP(E,ae),Ee=new $I,Ye=new JI(oe),Be=new dw(E,x,V,ee,K,d,l),Ce=new tP(E,K,Q),W=new hP(S,ge,Q,ee),Ue=new mw(S,oe,ge),je=new bw(S,oe,ge),ge.programs=xe.programs,E.capabilities=Q,E.extensions=oe,E.properties=ae,E.renderLists=Ee,E.shadowMap=Ce,E.state=ee,E.info=ge}Re();const le=new cP(E,S);this.xr=le,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(z,re,!1))},this.getSize=function(R){return R.set(z,re)},this.setSize=function(R,$,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,re=$,n.width=Math.floor(R*H),n.height=Math.floor($*H),ne===!0&&(n.style.width=R+"px",n.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(z*H,re*H).floor()},this.setDrawingBufferSize=function(R,$,ne){z=R,re=$,H=ne,n.width=Math.floor(R*ne),n.height=Math.floor($*ne),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Oe)},this.setViewport=function(R,$,ne,ie){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,$,ne,ie),ee.viewport(N.copy(Oe).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Ge)},this.setScissor=function(R,$,ne,ie){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,$,ne,ie),ee.scissor(D.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){ee.setScissorTest(st=R)},this.setOpaqueSort=function(R){ve=R},this.setTransparentSort=function(R){Ae=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ne=!0){let ie=0;if(R){let q=!1;if(L!==null){const ye=L.texture.format;q=ye===md||ye===pd||ye===dd}if(q){const ye=L.texture.type,Pe=ye===ki||ye===ir||ye===oa||ye===aa||ye===fd||ye===hd,Fe=Be.getClearColor(),T=Be.getClearAlpha(),O=Fe.r,U=Fe.g,F=Fe.b;Pe?(_[0]=O,_[1]=U,_[2]=F,_[3]=T,S.clearBufferuiv(S.COLOR,0,_)):(g[0]=O,g[1]=U,g[2]=F,g[3]=T,S.clearBufferiv(S.COLOR,0,g))}else ie|=S.COLOR_BUFFER_BIT}$&&(ie|=S.DEPTH_BUFFER_BIT),ne&&(ie|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Be.dispose(),Ee.dispose(),Ye.dispose(),ae.dispose(),x.dispose(),V.dispose(),K.dispose(),ut.dispose(),W.dispose(),xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ua),le.removeEventListener("sessionend",Fa),di.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=ge.autoReset,$=Ce.enabled,ne=Ce.autoUpdate,ie=Ce.needsUpdate,q=Ce.type;Re(),ge.autoReset=R,Ce.enabled=$,Ce.autoUpdate=ne,Ce.needsUpdate=ie,Ce.type=q}function Ne(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Je(R){const $=R.target;$.removeEventListener("dispose",Je),vt($)}function vt(R){Ht(R),ae.remove(R)}function Ht(R){const $=ae.get(R).programs;$!==void 0&&($.forEach(function(ne){xe.releaseProgram(ne)}),R.isShaderMaterial&&xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ne,ie,q,ye){$===null&&($=He);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Fe=ou(R,$,ne,ie,q);ee.setMaterial(ie,Pe);let T=ne.index,O=1;if(ie.wireframe===!0){if(T=Z.getWireframeAttribute(ne),T===void 0)return;O=2}const U=ne.drawRange,F=ne.attributes.position;let B=U.start*O,J=(U.start+U.count)*O;ye!==null&&(B=Math.max(B,ye.start*O),J=Math.min(J,(ye.start+ye.count)*O)),T!==null?(B=Math.max(B,0),J=Math.min(J,T.count)):F!=null&&(B=Math.max(B,0),J=Math.min(J,F.count));const fe=J-B;if(fe<0||fe===1/0)return;ut.setup(q,ie,Fe,ne,T);let Te,be=Ue;if(T!==null&&(Te=X.get(T),be=je,be.setIndex(Te)),q.isMesh)ie.wireframe===!0?(ee.setLineWidth(ie.wireframeLinewidth*I()),be.setMode(S.LINES)):be.setMode(S.TRIANGLES);else if(q.isLine){let Se=ie.linewidth;Se===void 0&&(Se=1),ee.setLineWidth(Se*I()),q.isLineSegments?be.setMode(S.LINES):q.isLineLoop?be.setMode(S.LINE_LOOP):be.setMode(S.LINE_STRIP)}else q.isPoints?be.setMode(S.POINTS):q.isSprite&&be.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Bl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))be.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Se=q._multiDrawStarts,ze=q._multiDrawCounts,Ve=q._multiDrawCount,rt=T?X.get(T).bytesPerElement:1,It=ae.get(ie).currentProgram.getUniforms();for(let wt=0;wt<Ve;wt++)It.setValue(S,"_gl_DrawID",wt),be.render(Se[wt]/rt,ze[wt])}else if(q.isInstancedMesh)be.renderInstances(B,fe,q.count);else if(ne.isInstancedBufferGeometry){const Se=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ze=Math.min(ne.instanceCount,Se);be.renderInstances(B,fe,ze)}else be.render(B,fe)};function dt(R,$,ne){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,dr(R,$,ne),R.side=_s,R.needsUpdate=!0,dr(R,$,ne),R.side=Ri):dr(R,$,ne)}this.compile=function(R,$,ne=null){ne===null&&(ne=R),p=Ye.get(ne),p.init($),v.push(p),ne.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==ne&&R.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ie=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Fe=ye[Pe];dt(Fe,ne,q),ie.add(Fe)}else dt(ye,ne,q),ie.add(ye)}),p=v.pop(),ie},this.compileAsync=function(R,$,ne=null){const ie=this.compile(R,$,ne);return new Promise(q=>{function ye(){if(ie.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){q(R);return}setTimeout(ye,10)}oe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let hn=null;function Xn(R){hn&&hn(R)}function Ua(){di.stop()}function Fa(){di.start()}const di=new F0;di.setAnimationLoop(Xn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(R){hn=R,le.setAnimationLoop(R),R===null?di.stop():di.start()},le.addEventListener("sessionstart",Ua),le.addEventListener("sessionend",Fa),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera($),$=le.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,$,L),p=Ye.get(R,v.length),p.init($),v.push(p),ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ce.setFromProjectionMatrix(ue),Ie=this.localClippingEnabled,Me=me.init(this.clippingPlanes,Ie),m=Ee.get(R,b.length),m.init(),b.push(m),le.enabled===!0&&le.isPresenting===!0){const ye=E.xr.getDepthSensingMesh();ye!==null&&mo(ye,$,-1/0,E.sortObjects)}mo(R,$,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ve,Ae),$e=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$e&&Be.addToRenderList(m,R),this.info.render.frame++,Me===!0&&me.beginShadows();const ne=p.state.shadowsArray;Ce.render(ne,R,$),Me===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,q=m.transmissive;if(p.setupLights(),$.isArrayCamera){const ye=$.cameras;if(q.length>0)for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++){const T=ye[Pe];ka(ie,q,R,T)}$e&&Be.render(R);for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++){const T=ye[Pe];Ba(m,R,T,T.viewport)}}else q.length>0&&ka(ie,q,R,$),$e&&Be.render(R),Ba(m,R,$);L!==null&&P===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(E,R,$),ut.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],Me===!0&&me.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function mo(R,$,ne,ie){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ce.intersectsSprite(R)){ie&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const Pe=K.update(R),Fe=R.material;Fe.visible&&m.push(R,Pe,Fe,ne,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ce.intersectsObject(R))){const Pe=K.update(R),Fe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),he.copy(Pe.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(ue)),Array.isArray(Fe)){const T=Pe.groups;for(let O=0,U=T.length;O<U;O++){const F=T[O],B=Fe[F.materialIndex];B&&B.visible&&m.push(R,Pe,B,ne,he.z,F)}}else Fe.visible&&m.push(R,Pe,Fe,ne,he.z,null)}}const ye=R.children;for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++)mo(ye[Pe],$,ne,ie)}function Ba(R,$,ne,ie){const q=R.opaque,ye=R.transmissive,Pe=R.transparent;p.setupLightsView(ne),Me===!0&&me.setGlobalState(E.clippingPlanes,ne),ie&&ee.viewport(N.copy(ie)),q.length>0&&hr(q,$,ne),ye.length>0&&hr(ye,$,ne),Pe.length>0&&hr(Pe,$,ne),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function ka(R,$,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new sr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ba:ki,minFilter:Gs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ye=p.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||N;ye.setSize(Pe.z*E.transmissionResolutionScale,Pe.w*E.transmissionResolutionScale);const Fe=E.getRenderTarget();E.setRenderTarget(ye),E.getClearColor(j),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),E.clear(),$e&&Be.render(ne);const T=E.toneMapping;E.toneMapping=ds;const O=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),Me===!0&&me.setGlobalState(E.clippingPlanes,ie),hr(R,ne,ie),A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye),oe.has("WEBGL_multisampled_render_to_texture")===!1){let U=!1;for(let F=0,B=$.length;F<B;F++){const J=$[F],fe=J.object,Te=J.geometry,be=J.material,Se=J.group;if(be.side===Ri&&fe.layers.test(ie.layers)){const ze=be.side;be.side=bn,be.needsUpdate=!0,Va(fe,ne,ie,Te,be,Se),be.side=ze,be.needsUpdate=!0,U=!0}}U===!0&&(A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye))}E.setRenderTarget(Fe),E.setClearColor(j,te),O!==void 0&&(ie.viewport=O),E.toneMapping=T}function hr(R,$,ne){const ie=$.isScene===!0?$.overrideMaterial:null;for(let q=0,ye=R.length;q<ye;q++){const Pe=R[q],Fe=Pe.object,T=Pe.geometry,O=Pe.group;let U=Pe.material;U.allowOverride===!0&&ie!==null&&(U=ie),Fe.layers.test(ne.layers)&&Va(Fe,$,ne,T,U,O)}}function Va(R,$,ne,ie,q,ye){R.onBeforeRender(E,$,ne,ie,q,ye),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(E,$,ne,ie,R,ye),q.transparent===!0&&q.side===Ri&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,E.renderBufferDirect(ne,$,ie,q,R,ye),q.side=_s,q.needsUpdate=!0,E.renderBufferDirect(ne,$,ie,q,R,ye),q.side=Ri):E.renderBufferDirect(ne,$,ie,q,R,ye),R.onAfterRender(E,$,ne,ie,q,ye)}function dr(R,$,ne){$.isScene!==!0&&($=He);const ie=ae.get(R),q=p.state.lights,ye=p.state.shadowsArray,Pe=q.state.version,Fe=xe.getParameters(R,q.state,ye,$,ne),T=xe.getProgramCacheKey(Fe);let O=ie.programs;ie.environment=R.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(R.isMeshStandardMaterial?V:x).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,O===void 0&&(R.addEventListener("dispose",Je),O=new Map,ie.programs=O);let U=O.get(T);if(U!==void 0){if(ie.currentProgram===U&&ie.lightsStateVersion===Pe)return go(R,Fe),U}else Fe.uniforms=xe.getUniforms(R),R.onBeforeCompile(Fe,E),U=xe.acquireProgram(Fe,T),O.set(T,U),ie.uniforms=Fe.uniforms;const F=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(F.clippingPlanes=me.uniform),go(R,Fe),ie.needsLights=_o(R),ie.lightsStateVersion=Pe,ie.needsLights&&(F.ambientLightColor.value=q.state.ambient,F.lightProbe.value=q.state.probe,F.directionalLights.value=q.state.directional,F.directionalLightShadows.value=q.state.directionalShadow,F.spotLights.value=q.state.spot,F.spotLightShadows.value=q.state.spotShadow,F.rectAreaLights.value=q.state.rectArea,F.ltc_1.value=q.state.rectAreaLTC1,F.ltc_2.value=q.state.rectAreaLTC2,F.pointLights.value=q.state.point,F.pointLightShadows.value=q.state.pointShadow,F.hemisphereLights.value=q.state.hemi,F.directionalShadowMap.value=q.state.directionalShadowMap,F.directionalShadowMatrix.value=q.state.directionalShadowMatrix,F.spotShadowMap.value=q.state.spotShadowMap,F.spotLightMatrix.value=q.state.spotLightMatrix,F.spotLightMap.value=q.state.spotLightMap,F.pointShadowMap.value=q.state.pointShadowMap,F.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=U,ie.uniformsList=null,U}function Ha(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=kl.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function go(R,$){const ne=ae.get(R);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function ou(R,$,ne,ie,q){$.isScene!==!0&&($=He),A.resetTextureUnits();const ye=$.fog,Pe=ie.isMeshStandardMaterial?$.environment:null,Fe=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:eo,T=(ie.isMeshStandardMaterial?V:x).get(ie.envMap||Pe),O=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,U=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),F=!!ne.morphAttributes.position,B=!!ne.morphAttributes.normal,J=!!ne.morphAttributes.color;let fe=ds;ie.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=E.toneMapping);const Te=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,be=Te!==void 0?Te.length:0,Se=ae.get(ie),ze=p.state.lights;if(Me===!0&&(Ie===!0||R!==y)){const yt=R===y&&ie.id===M;me.setState(ie,R,yt)}let Ve=!1;ie.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==ze.state.version||Se.outputColorSpace!==Fe||q.isBatchedMesh&&Se.batching===!1||!q.isBatchedMesh&&Se.batching===!0||q.isBatchedMesh&&Se.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Se.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Se.instancing===!1||!q.isInstancedMesh&&Se.instancing===!0||q.isSkinnedMesh&&Se.skinning===!1||!q.isSkinnedMesh&&Se.skinning===!0||q.isInstancedMesh&&Se.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Se.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Se.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Se.instancingMorph===!1&&q.morphTexture!==null||Se.envMap!==T||ie.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==me.numPlanes||Se.numIntersection!==me.numIntersection)||Se.vertexAlphas!==O||Se.vertexTangents!==U||Se.morphTargets!==F||Se.morphNormals!==B||Se.morphColors!==J||Se.toneMapping!==fe||Se.morphTargetsCount!==be)&&(Ve=!0):(Ve=!0,Se.__version=ie.version);let rt=Se.currentProgram;Ve===!0&&(rt=dr(ie,$,q));let It=!1,wt=!1,Ct=!1;const ke=rt.getUniforms(),zt=Se.uniforms;if(ee.useProgram(rt.program)&&(It=!0,wt=!0,Ct=!0),ie.id!==M&&(M=ie.id,wt=!0),It||y!==R){ee.buffers.depth.getReversed()?(G.copy(R.projectionMatrix),JA(G),QA(G),ke.setValue(S,"projectionMatrix",G)):ke.setValue(S,"projectionMatrix",R.projectionMatrix),ke.setValue(S,"viewMatrix",R.matrixWorldInverse);const Mt=ke.map.cameraPosition;Mt!==void 0&&Mt.setValue(S,pe.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&ke.setValue(S,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&ke.setValue(S,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,wt=!0,Ct=!0)}if(q.isSkinnedMesh){ke.setOptional(S,q,"bindMatrix"),ke.setOptional(S,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ke.setValue(S,"boneTexture",yt.boneTexture,A))}q.isBatchedMesh&&(ke.setOptional(S,q,"batchingTexture"),ke.setValue(S,"batchingTexture",q._matricesTexture,A),ke.setOptional(S,q,"batchingIdTexture"),ke.setValue(S,"batchingIdTexture",q._indirectTexture,A),ke.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&ke.setValue(S,"batchingColorTexture",q._colorsTexture,A));const Ut=ne.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&We.update(q,ne,rt),(wt||Se.receiveShadow!==q.receiveShadow)&&(Se.receiveShadow=q.receiveShadow,ke.setValue(S,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(zt.envMap.value=T,zt.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(zt.envMapIntensity.value=$.environmentIntensity),wt&&(ke.setValue(S,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&au(zt,Ct),ye&&ie.fog===!0&&_e.refreshFogUniforms(zt,ye),_e.refreshMaterialUniforms(zt,ie,H,re,p.state.transmissionRenderTarget[R.id]),kl.upload(S,Ha(Se),zt,A)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(kl.upload(S,Ha(Se),zt,A),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&ke.setValue(S,"center",q.center),ke.setValue(S,"modelViewMatrix",q.modelViewMatrix),ke.setValue(S,"normalMatrix",q.normalMatrix),ke.setValue(S,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const yt=ie.uniformsGroups;for(let Mt=0,Cs=yt.length;Mt<Cs;Mt++){const ct=yt[Mt];W.update(ct,rt),W.bind(ct,rt)}}return rt}function au(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function _o(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,$,ne){const ie=ae.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ae.get(R.texture).__webglTexture=$,ae.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const ne=ae.get(R);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0};const za=S.createFramebuffer();this.setRenderTarget=function(R,$=0,ne=0){L=R,C=$,P=ne;let ie=!0,q=null,ye=!1,Pe=!1;if(R){const T=ae.get(R);if(T.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(S.FRAMEBUFFER,null),ie=!1;else if(T.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(T.__hasExternalTextures)A.rebindTextures(R,ae.get(R.texture).__webglTexture,ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const F=R.depthTexture;if(T.__boundDepthTexture!==F){if(F!==null&&ae.has(F)&&(R.width!==F.image.width||R.height!==F.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const O=R.texture;(O.isData3DTexture||O.isDataArrayTexture||O.isCompressedArrayTexture)&&(Pe=!0);const U=ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(U[$])?q=U[$][ne]:q=U[$],ye=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?q=ae.get(R).__webglMultisampledFramebuffer:Array.isArray(U)?q=U[ne]:q=U,N.copy(R.viewport),D.copy(R.scissor),k=R.scissorTest}else N.copy(Oe).multiplyScalar(H).floor(),D.copy(Ge).multiplyScalar(H).floor(),k=st;if(ne!==0&&(q=za),ee.bindFramebuffer(S.FRAMEBUFFER,q)&&ie&&ee.drawBuffers(R,q),ee.viewport(N),ee.scissor(D),ee.setScissorTest(k),ye){const T=ae.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,T.__webglTexture,ne)}else if(Pe){const T=ae.get(R.texture),O=$;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,T.__webglTexture,ne,O)}else if(R!==null&&ne!==0){const T=ae.get(R.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,T.__webglTexture,ne)}M=-1},this.readRenderTargetPixels=function(R,$,ne,ie,q,ye,Pe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){ee.bindFramebuffer(S.FRAMEBUFFER,Fe);try{const T=R.texture,O=T.format,U=T.type;if(!Q.textureFormatReadable(O)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ie&&ne>=0&&ne<=R.height-q&&S.readPixels($,ne,ie,q,Xe.convert(O),Xe.convert(U),ye)}finally{const T=L!==null?ae.get(L).__webglFramebuffer:null;ee.bindFramebuffer(S.FRAMEBUFFER,T)}}},this.readRenderTargetPixelsAsync=async function(R,$,ne,ie,q,ye,Pe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if($>=0&&$<=R.width-ie&&ne>=0&&ne<=R.height-q){ee.bindFramebuffer(S.FRAMEBUFFER,Fe);const T=R.texture,O=T.format,U=T.type;if(!Q.textureFormatReadable(O))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const F=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,F),S.bufferData(S.PIXEL_PACK_BUFFER,ye.byteLength,S.STREAM_READ),S.readPixels($,ne,ie,q,Xe.convert(O),Xe.convert(U),0);const B=L!==null?ae.get(L).__webglFramebuffer:null;ee.bindFramebuffer(S.FRAMEBUFFER,B);const J=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await ZA(S,J,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,F),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ye),S.deleteBuffer(F),S.deleteSync(J),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ne=0){const ie=Math.pow(2,-ne),q=Math.floor(R.image.width*ie),ye=Math.floor(R.image.height*ie),Pe=$!==null?$.x:0,Fe=$!==null?$.y:0;A.setTexture2D(R,0),S.copyTexSubImage2D(S.TEXTURE_2D,ne,0,0,Pe,Fe,q,ye),ee.unbindTexture()};const Ga=S.createFramebuffer(),Wa=S.createFramebuffer();this.copyTextureToTexture=function(R,$,ne=null,ie=null,q=0,ye=null){ye===null&&(q!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Pe,Fe,T,O,U,F,B,J,fe;const Te=R.isCompressedTexture?R.mipmaps[ye]:R.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,T=ne.isBox3?ne.max.z-ne.min.z:1,O=ne.min.x,U=ne.min.y,F=ne.isBox3?ne.min.z:0;else{const Ut=Math.pow(2,-q);Pe=Math.floor(Te.width*Ut),Fe=Math.floor(Te.height*Ut),R.isDataArrayTexture?T=Te.depth:R.isData3DTexture?T=Math.floor(Te.depth*Ut):T=1,O=0,U=0,F=0}ie!==null?(B=ie.x,J=ie.y,fe=ie.z):(B=0,J=0,fe=0);const be=Xe.convert($.format),Se=Xe.convert($.type);let ze;$.isData3DTexture?(A.setTexture3D($,0),ze=S.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(A.setTexture2DArray($,0),ze=S.TEXTURE_2D_ARRAY):(A.setTexture2D($,0),ze=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,$.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,$.unpackAlignment);const Ve=S.getParameter(S.UNPACK_ROW_LENGTH),rt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),It=S.getParameter(S.UNPACK_SKIP_PIXELS),wt=S.getParameter(S.UNPACK_SKIP_ROWS),Ct=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Te.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Te.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,O),S.pixelStorei(S.UNPACK_SKIP_ROWS,U),S.pixelStorei(S.UNPACK_SKIP_IMAGES,F);const ke=R.isDataArrayTexture||R.isData3DTexture,zt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Ut=ae.get(R),yt=ae.get($),Mt=ae.get(Ut.__renderTarget),Cs=ae.get(yt.__renderTarget);ee.bindFramebuffer(S.READ_FRAMEBUFFER,Mt.__webglFramebuffer),ee.bindFramebuffer(S.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let ct=0;ct<T;ct++)ke&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ae.get(R).__webglTexture,q,F+ct),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ae.get($).__webglTexture,ye,fe+ct)),S.blitFramebuffer(O,U,Pe,Fe,B,J,Pe,Fe,S.DEPTH_BUFFER_BIT,S.NEAREST);ee.bindFramebuffer(S.READ_FRAMEBUFFER,null),ee.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||ae.has(R)){const Ut=ae.get(R),yt=ae.get($);ee.bindFramebuffer(S.READ_FRAMEBUFFER,Ga),ee.bindFramebuffer(S.DRAW_FRAMEBUFFER,Wa);for(let Mt=0;Mt<T;Mt++)ke?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ut.__webglTexture,q,F+Mt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ut.__webglTexture,q),zt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,yt.__webglTexture,ye,fe+Mt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,yt.__webglTexture,ye),q!==0?S.blitFramebuffer(O,U,Pe,Fe,B,J,Pe,Fe,S.COLOR_BUFFER_BIT,S.NEAREST):zt?S.copyTexSubImage3D(ze,ye,B,J,fe+Mt,O,U,Pe,Fe):S.copyTexSubImage2D(ze,ye,B,J,O,U,Pe,Fe);ee.bindFramebuffer(S.READ_FRAMEBUFFER,null),ee.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?S.texSubImage3D(ze,ye,B,J,fe,Pe,Fe,T,be,Se,Te.data):$.isCompressedArrayTexture?S.compressedTexSubImage3D(ze,ye,B,J,fe,Pe,Fe,T,be,Te.data):S.texSubImage3D(ze,ye,B,J,fe,Pe,Fe,T,be,Se,Te):R.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ye,B,J,Pe,Fe,be,Se,Te.data):R.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ye,B,J,Te.width,Te.height,be,Te.data):S.texSubImage2D(S.TEXTURE_2D,ye,B,J,Pe,Fe,be,Se,Te);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ve),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,rt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,It),S.pixelStorei(S.UNPACK_SKIP_ROWS,wt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ct),ye===0&&$.generateMipmaps&&S.generateMipmap(ze),ee.unbindTexture()},this.copyTextureToTexture3D=function(R,$,ne=null,ie=null,q=0){return Bl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,ne,ie,q)},this.initRenderTarget=function(R){ae.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ee.unbindTexture()},this.resetState=function(){C=0,P=0,L=null,ee.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=ht._getUnpackColorSpace()}}const Ir=Math.PI/2,Io=4*8,pP={data(){return{camera:null,scene:null,renderer:null,brain:null,progress:0,container:null}},methods:{init:function(){if(document.documentElement.scrollTop=0,this.container=document.getElementById("model"),!this.container){console.error("Container element not found");return}const t=this.container.clientWidth,e=this.container.clientHeight,n=e,i=t/e;this.camera=new U0(-i*n/2,i*n/2,n/2,-n/2,-1e3,1e3),this.camera.position.z=1,this.scene=new bC,this.brain=this.brainDummy(Io);const s=(Math.min(this.container.clientHeight,this.container.clientWidth)-64)/Io/2;this.brain.scale.set(s,s,s),this.scene.add(this.brain),this.renderer=new dP({antialias:!0,alpha:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement)},brainDummy:function(t){const e=new kn(new Xo(t,20,10),new Ku);e.scale.y=.9,e.position.y=0,e.scale.z=.6,e.position.z=10;const n=new kn(new Xo(t,20,10),new Ku);n.scale.y=.9,n.position.y=0,n.scale.z=.6,n.position.z=-10;const i=new kn(new Xo(t/2,20,10),new Ku);i.scale.y=.6,i.position.y=-20,i.position.x=10;const s=new Lo;return s.add(e),s.add(n),s.add(i),s},animate:function(t=0){if(!this.brain||!this.renderer||!this.scene||!this.camera||!this.container){console.error("Error loading three.js components");return}if(this.brain.rotation.x>=0||t>0){const e=(Math.min(this.container.clientHeight,this.container.clientWidth)-64)/Io/2,n=-this.container.clientWidth/2+64+Io,i=this.container.clientHeight/2-32-Io;this.brain.rotation.x+=.01*t,this.brain.rotation.y+=.01*t,this.brain.position.x+=n/(Ir/.01)*t,this.brain.position.y+=i/(Ir/.01)*t;const s=e-Math.min(Math.max(e*this.brain.position.x/n,1),e)+1;if(this.brain.scale.set(s,s,s),this.brain.rotation.x>Ir||this.progress>0){this.brain.scale.set(1,1,1),this.brain.rotation.x=Ir,this.brain.rotation.y=Ir,this.brain.position.x=n,this.brain.position.y=i,this.progress+=t;const r=100;this.container.style.opacity=(Math.max(r-this.progress,0)/r).toString(),this.progress>=r&&this.endAnimation()}else this.brain.rotation.x<0?(this.brain.scale.set(e,e,e),this.brain.rotation.x=0,this.brain.rotation.y=0,this.brain.position.x=0,this.brain.position.y=0):this.brain.rotation.x<Ir&&(this.progress=0);this.renderer.render(ot(this.scene),this.camera)}},updateThree:function(){if(!this.renderer||!this.camera||!this.scene){console.error("Error loading three.js components");return}if(!this.container){console.error("Container element not found");return}this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);const t=this.container.clientWidth,e=this.container.clientHeight,n=e,i=t/e;this.camera.left=-(i*n)/2,this.camera.right=i*n/2,this.camera.top=n/2,this.camera.bottom=-n/2,this.camera.updateProjectionMatrix(),this.renderer.render(ot(this.scene),this.camera)},showLogo:function(){let t=document.querySelector(".logo"),e=document.getElementById("model");t&&e&&(t.style.opacity="1",setTimeout(()=>{e.style.opacity="0"},400),setTimeout(()=>{t.style.opacity="0"},1200))},endAnimation:function(){document.removeEventListener("wheel",this.animateByStep),window.removeEventListener("resize",this.updateThree);const t=document.getElementById("model");t&&t.remove(),document.body.style.overflow="auto"},animateByStep:function(t){requestAnimationFrame(()=>this.animate(t.deltaY))}},mounted(){this.init(),this.animate()},created(){this.updateThree=this.updateThree.bind(this),this.animateByStep=this.animateByStep.bind(this),window.addEventListener("resize",this.updateThree),document.addEventListener("wheel",this.animateByStep),document.body.style.overflow="hidden"},destroyed(){window.removeEventListener("resize",this.updateThree),document.removeEventListener("wheel",this.animateByStep),document.body.style.overflow="auto"}},mP=hi({...pP,__name:"LogoAnimation",setup(t){return(e,n)=>(en(),Nn("div",null,n[0]||(n[0]=[mt("div",{id:"model"},null,-1)])))}}),gP=bs(mP,[["__scopeId","data-v-7f50c26d"]]),_P="Tomorrow's Brain",vP={"/title":"Lead the Future",title:"Tomorrow's Brain",mission:{banner:"https://picsum.photos/500/100",image:"https://picsum.photos/500/500"}},EP={title:"About Us"},SP={title:"Contact Us",items:{"Phone number":"1234 5678",Email:"abc@test.com",Address:"1234 Test St, Test City, Test Country"}},xP=[{id:"1",name:"product 1",description:"description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1",category:"category 1",image:"https://picsum.photos/200/200",detailImage:"https://picsum.photos/600/200",functions:[{url:"https://picsum.photos/200/200",isVideo:!1,name:"function 1",description:"function description 1"},{url:"https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4",isVideo:!0,name:"function 2",description:"function description 2"}]},{id:"2",name:"product 2",description:"description 2",category:"category 1",image:"https://picsum.photos/200/200"},{id:"3",name:"product 3",description:"description 3",category:"category 1",image:"https://picsum.photos/200/200"},{id:"4",name:"product 7",description:"description 7",category:"category 2",image:"https://picsum.photos/200/200"},{id:"5",name:"product 8",description:"description 8",category:"category 3",image:"https://picsum.photos/200/200"},{id:"6",name:"product 9",description:"description 9",category:"category 3",image:"https://picsum.photos/200/200"},{id:"7",name:"product 10",description:"description 10",category:"category 4",image:"https://picsum.photos/200/200"},{id:"8",name:"product 11",description:"description 11",category:"category 5",image:"https://picsum.photos/200/200"},{id:"9",name:"product 12",description:"description 12",category:"category 6",image:"https://picsum.photos/200/200"},{id:"10",name:"product 4",description:"description 4",category:"category 2",image:"https://picsum.photos/200/200"},{id:"11",name:"product 5",description:"description 5",category:"category 2",image:"https://picsum.photos/200/200"},{id:"12",name:"product 6",description:"description 6",category:"category 2",image:"https://picsum.photos/200/200"},{id:"13",name:"product 13",description:"description 13",category:"category 7",image:"https://picsum.photos/200/200"},{id:"14",name:"product 14",description:"description 14",category:"category 8",image:"https://picsum.photos/200/200"},{id:"15",name:"product 15",description:"description 15",category:"category 9",image:"https://picsum.photos/200/200"},{id:"16",name:"product 16",description:"description 16",category:"category 10",image:"https://picsum.photos/200/200"},{id:"17",name:"product 17",description:"description 17",category:"category 11",image:"https://picsum.photos/200/200"},{id:"18",name:"product 18",description:"description 18",category:"category 12",image:"https://picsum.photos/200/200"},{id:"19",name:"product 19",description:"description 19",category:"category 13",image:"https://picsum.photos/200/200"},{id:"20",name:"product 20",description:"description 20",category:"category 14",image:"https://picsum.photos/200/200"}],yP=[{image:"https://picsum.photos/200/100",alt:"logo 1"},{image:"https://picsum.photos/210/100",alt:"logo 2"},{image:"https://picsum.photos/220/100"},{image:"https://picsum.photos/230/100"}],MP={brand:_P,home:vP,about:EP,contacts:SP,products:xP,sponsors:yP},TP={props:["data"]},bP={class:"wrapper"},AP={class:"padding"},CP={class:"contacts"};function RP(t,e,n,i,s,r){var o;return en(),Nn("div",bP,[mt("div",AP,[e[0]||(e[0]=mt("h2",null,"Contact Us",-1)),mt("div",CP,[(en(!0),Nn(Dt,null,I_((o=n.data)==null?void 0:o.items,(a,l)=>(en(),Nn("div",{key:l},[mt("p",null,as(l)+": "+as(a),1)]))),128))])]),e[1]||(e[1]=mt("hr",null,null,-1)),e[2]||(e[2]=mt("div",{class:"padding"},[mt("a",{href:"http://google.com",target:"_blank",rel:"noopener noreferrer"}," Terms and Conditions ")],-1))])}const wP=bs(TP,[["render",RP],["__scopeId","data-v-23968609"]]);function Ed(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),n}var Oo={exports:{}},sf={exports:{}},rf={};/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const no=Symbol(""),zr=Symbol(""),Gc=Symbol(""),ua=Symbol(""),Sd=Symbol(""),Es=Symbol(""),xd=Symbol(""),yd=Symbol(""),Wc=Symbol(""),Xc=Symbol(""),ho=Symbol(""),$c=Symbol(""),Md=Symbol(""),qc=Symbol(""),jc=Symbol(""),Yc=Symbol(""),Kc=Symbol(""),Zc=Symbol(""),Jc=Symbol(""),Td=Symbol(""),bd=Symbol(""),Pa=Symbol(""),fa=Symbol(""),Qc=Symbol(""),eu=Symbol(""),io=Symbol(""),po=Symbol(""),tu=Symbol(""),fc=Symbol(""),z0=Symbol(""),hc=Symbol(""),ha=Symbol(""),G0=Symbol(""),W0=Symbol(""),nu=Symbol(""),X0=Symbol(""),$0=Symbol(""),iu=Symbol(""),Ad=Symbol(""),rr={[no]:"Fragment",[zr]:"Teleport",[Gc]:"Suspense",[ua]:"KeepAlive",[Sd]:"BaseTransition",[Es]:"openBlock",[xd]:"createBlock",[yd]:"createElementBlock",[Wc]:"createVNode",[Xc]:"createElementVNode",[ho]:"createCommentVNode",[$c]:"createTextVNode",[Md]:"createStaticVNode",[qc]:"resolveComponent",[jc]:"resolveDynamicComponent",[Yc]:"resolveDirective",[Kc]:"resolveFilter",[Zc]:"withDirectives",[Jc]:"renderList",[Td]:"renderSlot",[bd]:"createSlots",[Pa]:"toDisplayString",[fa]:"mergeProps",[Qc]:"normalizeClass",[eu]:"normalizeStyle",[io]:"normalizeProps",[po]:"guardReactiveProps",[tu]:"toHandlers",[fc]:"camelize",[z0]:"capitalize",[hc]:"toHandlerKey",[ha]:"setBlockTracking",[G0]:"pushScopeId",[W0]:"popScopeId",[nu]:"withCtx",[X0]:"unref",[$0]:"isRef",[iu]:"withMemo",[Ad]:"isMemoSame"};function q0(t){Object.getOwnPropertySymbols(t).forEach(e=>{rr[e]=t[e]})}const IP={HTML:0,0:"HTML",SVG:1,1:"SVG",MATH_ML:2,2:"MATH_ML"},PP={ROOT:0,0:"ROOT",ELEMENT:1,1:"ELEMENT",TEXT:2,2:"TEXT",COMMENT:3,3:"COMMENT",SIMPLE_EXPRESSION:4,4:"SIMPLE_EXPRESSION",INTERPOLATION:5,5:"INTERPOLATION",ATTRIBUTE:6,6:"ATTRIBUTE",DIRECTIVE:7,7:"DIRECTIVE",COMPOUND_EXPRESSION:8,8:"COMPOUND_EXPRESSION",IF:9,9:"IF",IF_BRANCH:10,10:"IF_BRANCH",FOR:11,11:"FOR",TEXT_CALL:12,12:"TEXT_CALL",VNODE_CALL:13,13:"VNODE_CALL",JS_CALL_EXPRESSION:14,14:"JS_CALL_EXPRESSION",JS_OBJECT_EXPRESSION:15,15:"JS_OBJECT_EXPRESSION",JS_PROPERTY:16,16:"JS_PROPERTY",JS_ARRAY_EXPRESSION:17,17:"JS_ARRAY_EXPRESSION",JS_FUNCTION_EXPRESSION:18,18:"JS_FUNCTION_EXPRESSION",JS_CONDITIONAL_EXPRESSION:19,19:"JS_CONDITIONAL_EXPRESSION",JS_CACHE_EXPRESSION:20,20:"JS_CACHE_EXPRESSION",JS_BLOCK_STATEMENT:21,21:"JS_BLOCK_STATEMENT",JS_TEMPLATE_LITERAL:22,22:"JS_TEMPLATE_LITERAL",JS_IF_STATEMENT:23,23:"JS_IF_STATEMENT",JS_ASSIGNMENT_EXPRESSION:24,24:"JS_ASSIGNMENT_EXPRESSION",JS_SEQUENCE_EXPRESSION:25,25:"JS_SEQUENCE_EXPRESSION",JS_RETURN_STATEMENT:26,26:"JS_RETURN_STATEMENT"},NP={ELEMENT:0,0:"ELEMENT",COMPONENT:1,1:"COMPONENT",SLOT:2,2:"SLOT",TEMPLATE:3,3:"TEMPLATE"},LP={NOT_CONSTANT:0,0:"NOT_CONSTANT",CAN_SKIP_PATCH:1,1:"CAN_SKIP_PATCH",CAN_CACHE:2,2:"CAN_CACHE",CAN_STRINGIFY:3,3:"CAN_STRINGIFY"},Yt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function j0(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Yt}}function so(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=Yt){return t&&(a?(t.helper(Es),t.helper(lr(t.inSSR,c))):t.helper(ar(t.inSSR,c)),o&&t.helper(Zc)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function ps(t,e=Yt){return{type:17,loc:e,elements:t}}function In(t,e=Yt){return{type:15,loc:e,properties:t}}function Nt(t,e){return{type:16,loc:Yt,key:Ke(t)?Ze(t,!0):t,value:e}}function Ze(t,e=!1,n=Yt,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function DP(t,e){return{type:5,loc:e,content:Ke(t)?Ze(t,!1,e):t}}function zn(t,e=Yt){return{type:8,loc:e,children:t}}function Bt(t,e=[],n=Yt){return{type:14,loc:n,callee:t,arguments:e}}function or(t,e=void 0,n=!1,i=!1,s=Yt){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function dc(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Yt}}function Y0(t,e,n=!1,i=!1){return{type:20,index:t,value:e,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:Yt}}function K0(t){return{type:21,body:t,loc:Yt}}function OP(t){return{type:22,elements:t,loc:Yt}}function UP(t,e,n){return{type:23,test:t,consequent:e,alternate:n,loc:Yt}}function FP(t,e){return{type:24,left:t,right:e,loc:Yt}}function BP(t){return{type:25,expressions:t,loc:Yt}}function kP(t){return{type:26,returns:t,loc:Yt}}function ar(t,e){return t||e?Wc:Xc}function lr(t,e){return t||e?xd:yd}function su(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(ar(i,t.isComponent)),e(Es),e(lr(i,t.isComponent)))}const rg=new Uint8Array([123,123]),og=new Uint8Array([125,125]);function ag(t){return t>=97&&t<=122||t>=65&&t<=90}function wn(t){return t===32||t===10||t===9||t===12||t===13}function Ki(t){return t===47||t===62||wn(t)}function pc(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const sn={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class VP{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=rg,this.delimiterClose=og,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=rg,this.delimiterClose=og}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Ki(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||wn(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===sn.TitleEnd||this.currentSequence===sn.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===sn.Cdata[this.sequenceIndex]?++this.sequenceIndex===sn.Cdata.length&&(this.state=28,this.currentSequence=sn.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===sn.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):ag(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Ki(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Ki(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(pc("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){wn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=ag(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||wn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):wn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):wn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Ki(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Ki(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Ki(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Ki(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Ki(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):wn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):wn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){wn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=sn.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===sn.ScriptEnd[3]?this.startSpecial(sn.ScriptEnd,4):e===sn.StyleEnd[3]?this.startSpecial(sn.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===sn.TitleEnd[3]?this.startSpecial(sn.TitleEnd,4):e===sn.TextareaEnd[3]?this.startSpecial(sn.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===sn.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}const HP={COMPILER_IS_ON_ELEMENT:"COMPILER_IS_ON_ELEMENT",COMPILER_V_BIND_SYNC:"COMPILER_V_BIND_SYNC",COMPILER_V_BIND_OBJECT_ORDER:"COMPILER_V_BIND_OBJECT_ORDER",COMPILER_V_ON_NATIVE:"COMPILER_V_ON_NATIVE",COMPILER_V_IF_V_FOR_PRECEDENCE:"COMPILER_V_IF_V_FOR_PRECEDENCE",COMPILER_NATIVE_TEMPLATE:"COMPILER_NATIVE_TEMPLATE",COMPILER_INLINE_TEMPLATE:"COMPILER_INLINE_TEMPLATE",COMPILER_FILTERS:"COMPILER_FILTERS"},zP={COMPILER_IS_ON_ELEMENT:{message:'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',link:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"},COMPILER_V_BIND_SYNC:{message:t=>`.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${t}.sync\` should be changed to \`v-model:${t}\`.`,link:"https://v3-migration.vuejs.org/breaking-changes/v-model.html"},COMPILER_V_BIND_OBJECT_ORDER:{message:'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',link:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html"},COMPILER_V_ON_NATIVE:{message:".native modifier for v-on has been removed as is no longer necessary.",link:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"},COMPILER_V_IF_V_FOR_PRECEDENCE:{message:"v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",link:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"},COMPILER_NATIVE_TEMPLATE:{message:"<template> with no special directives will render as a native template element instead of its inner content in Vue 3."},COMPILER_INLINE_TEMPLATE:{message:'"inline-template" has been removed in Vue 3.',link:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"},COMPILER_FILTERS:{message:'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',link:"https://v3-migration.vuejs.org/breaking-changes/filters.html"}};function bh(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function er(t,e){const n=bh("MODE",e),i=bh(t,e);return n===3?i===!0:i!==!1}function ro(t,e,n,...i){return er(t,e)}function GP(t,e,n,...i){if(bh(t,e)==="suppress-warning")return;const{message:r,link:o}=zP[t],a=`(deprecation ${t}) ${typeof r=="function"?r(...i):r}${o?`
  Details: ${o}`:""}`,l=new SyntaxError(a);l.code=t,n&&(l.loc=n),e.onWarn(l)}function Cd(t){throw t}function Z0(t){}function At(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const WP={ABRUPT_CLOSING_OF_EMPTY_COMMENT:0,0:"ABRUPT_CLOSING_OF_EMPTY_COMMENT",CDATA_IN_HTML_CONTENT:1,1:"CDATA_IN_HTML_CONTENT",DUPLICATE_ATTRIBUTE:2,2:"DUPLICATE_ATTRIBUTE",END_TAG_WITH_ATTRIBUTES:3,3:"END_TAG_WITH_ATTRIBUTES",END_TAG_WITH_TRAILING_SOLIDUS:4,4:"END_TAG_WITH_TRAILING_SOLIDUS",EOF_BEFORE_TAG_NAME:5,5:"EOF_BEFORE_TAG_NAME",EOF_IN_CDATA:6,6:"EOF_IN_CDATA",EOF_IN_COMMENT:7,7:"EOF_IN_COMMENT",EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT:8,8:"EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",EOF_IN_TAG:9,9:"EOF_IN_TAG",INCORRECTLY_CLOSED_COMMENT:10,10:"INCORRECTLY_CLOSED_COMMENT",INCORRECTLY_OPENED_COMMENT:11,11:"INCORRECTLY_OPENED_COMMENT",INVALID_FIRST_CHARACTER_OF_TAG_NAME:12,12:"INVALID_FIRST_CHARACTER_OF_TAG_NAME",MISSING_ATTRIBUTE_VALUE:13,13:"MISSING_ATTRIBUTE_VALUE",MISSING_END_TAG_NAME:14,14:"MISSING_END_TAG_NAME",MISSING_WHITESPACE_BETWEEN_ATTRIBUTES:15,15:"MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",NESTED_COMMENT:16,16:"NESTED_COMMENT",UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME:17,17:"UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE:18,18:"UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME:19,19:"UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",UNEXPECTED_NULL_CHARACTER:20,20:"UNEXPECTED_NULL_CHARACTER",UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME:21,21:"UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",UNEXPECTED_SOLIDUS_IN_TAG:22,22:"UNEXPECTED_SOLIDUS_IN_TAG",X_INVALID_END_TAG:23,23:"X_INVALID_END_TAG",X_MISSING_END_TAG:24,24:"X_MISSING_END_TAG",X_MISSING_INTERPOLATION_END:25,25:"X_MISSING_INTERPOLATION_END",X_MISSING_DIRECTIVE_NAME:26,26:"X_MISSING_DIRECTIVE_NAME",X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END:27,27:"X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",X_V_IF_NO_EXPRESSION:28,28:"X_V_IF_NO_EXPRESSION",X_V_IF_SAME_KEY:29,29:"X_V_IF_SAME_KEY",X_V_ELSE_NO_ADJACENT_IF:30,30:"X_V_ELSE_NO_ADJACENT_IF",X_V_FOR_NO_EXPRESSION:31,31:"X_V_FOR_NO_EXPRESSION",X_V_FOR_MALFORMED_EXPRESSION:32,32:"X_V_FOR_MALFORMED_EXPRESSION",X_V_FOR_TEMPLATE_KEY_PLACEMENT:33,33:"X_V_FOR_TEMPLATE_KEY_PLACEMENT",X_V_BIND_NO_EXPRESSION:34,34:"X_V_BIND_NO_EXPRESSION",X_V_ON_NO_EXPRESSION:35,35:"X_V_ON_NO_EXPRESSION",X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET:36,36:"X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",X_V_SLOT_MIXED_SLOT_USAGE:37,37:"X_V_SLOT_MIXED_SLOT_USAGE",X_V_SLOT_DUPLICATE_SLOT_NAMES:38,38:"X_V_SLOT_DUPLICATE_SLOT_NAMES",X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN:39,39:"X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",X_V_SLOT_MISPLACED:40,40:"X_V_SLOT_MISPLACED",X_V_MODEL_NO_EXPRESSION:41,41:"X_V_MODEL_NO_EXPRESSION",X_V_MODEL_MALFORMED_EXPRESSION:42,42:"X_V_MODEL_MALFORMED_EXPRESSION",X_V_MODEL_ON_SCOPE_VARIABLE:43,43:"X_V_MODEL_ON_SCOPE_VARIABLE",X_V_MODEL_ON_PROPS:44,44:"X_V_MODEL_ON_PROPS",X_INVALID_EXPRESSION:45,45:"X_INVALID_EXPRESSION",X_KEEP_ALIVE_INVALID_CHILDREN:46,46:"X_KEEP_ALIVE_INVALID_CHILDREN",X_PREFIX_ID_NOT_SUPPORTED:47,47:"X_PREFIX_ID_NOT_SUPPORTED",X_MODULE_MODE_NOT_SUPPORTED:48,48:"X_MODULE_MODE_NOT_SUPPORTED",X_CACHE_HANDLER_NOT_SUPPORTED:49,49:"X_CACHE_HANDLER_NOT_SUPPORTED",X_SCOPE_ID_NOT_SUPPORTED:50,50:"X_SCOPE_ID_NOT_SUPPORTED",X_VNODE_HOOKS:51,51:"X_VNODE_HOOKS",X_V_BIND_INVALID_SAME_NAME_ARGUMENT:52,52:"X_V_BIND_INVALID_SAME_NAME_ARGUMENT",__EXTEND_POINT__:53,53:"__EXTEND_POINT__"},XP={0:"Illegal comment.",1:"CDATA section is allowed only in XML context.",2:"Duplicate attribute.",3:"End tag cannot have attributes.",4:"Illegal '/' in tags.",5:"Unexpected EOF in tag.",6:"Unexpected EOF in CDATA section.",7:"Unexpected EOF in comment.",8:"Unexpected EOF in script.",9:"Unexpected EOF in tag.",10:"Incorrectly closed comment.",11:"Incorrectly opened comment.",12:"Illegal tag name. Use '&lt;' to print '<'.",13:"Attribute value was expected.",14:"End tag name was expected.",15:"Whitespace was expected.",16:"Unexpected '<!--' in comment.",17:`Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,18:"Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",19:"Attribute name cannot start with '='.",21:"'<?' is allowed only in XML context.",20:"Unexpected null character.",22:"Illegal '/' in tags.",23:"Invalid end tag.",24:"Element is missing end tag.",25:"Interpolation end sign was not found.",27:"End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",26:"Legal directive name was expected.",28:"v-if/v-else-if is missing expression.",29:"v-if/else branches must use unique keys.",30:"v-else/v-else-if has no adjacent v-if or v-else-if.",31:"v-for is missing expression.",32:"v-for has invalid expression.",33:"<template v-for> key should be placed on the <template> tag.",34:"v-bind is missing expression.",52:"v-bind with same-name shorthand only allows static argument.",35:"v-on is missing expression.",36:"Unexpected custom directive on <slot> outlet.",37:"Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",38:"Duplicate slot names found. ",39:"Extraneous children found when component already has explicitly named default slot. These children will be ignored.",40:"v-slot can only be used on components or <template> tags.",41:"v-model is missing expression.",42:"v-model value must be a valid JavaScript member expression.",43:"v-model cannot be used on v-for or v-slot scope variables because they are not writable.",44:`v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,45:"Error parsing JavaScript expression: ",46:"<KeepAlive> expects exactly one child component.",51:"@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",47:'"prefixIdentifiers" option is not supported in this build of compiler.',48:"ES module mode is not supported in this build of compiler.",49:'"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',50:'"scopeId" option is only supported in module mode.',53:""};function $P(t,e,n=!1,i=[],s=Object.create(null)){}function qP(t,e,n){return!1}function jP(t,e){if(t&&(t.type==="ObjectProperty"||t.type==="ArrayPattern")){let n=e.length;for(;n--;){const i=e[n];if(i.type==="AssignmentExpression")return!0;if(i.type!=="ObjectProperty"&&!i.type.endsWith("Pattern"))break}}return!1}function YP(t){let e=t.length;for(;e--;){const n=t[e];if(n.type==="NewExpression")return!0;if(n.type!=="MemberExpression")break}return!1}function KP(t,e){for(const n of t.params)for(const i of wi(n))e(i)}function ZP(t,e){for(const n of t.body)if(n.type==="VariableDeclaration"){if(n.declare)continue;for(const i of n.declarations)for(const s of wi(i.id))e(s)}else if(n.type==="FunctionDeclaration"||n.type==="ClassDeclaration"){if(n.declare||!n.id)continue;e(n.id)}else JP(n)&&QP(n,!0,e)}function JP(t){return t.type==="ForOfStatement"||t.type==="ForInStatement"||t.type==="ForStatement"}function QP(t,e,n){const i=t.type==="ForStatement"?t.init:t.left;if(i&&i.type==="VariableDeclaration"&&(i.kind==="var"&&e))for(const s of i.declarations)for(const r of wi(s.id))n(r)}function wi(t,e=[]){switch(t.type){case"Identifier":e.push(t);break;case"MemberExpression":let n=t;for(;n.type==="MemberExpression";)n=n.object;e.push(n);break;case"ObjectPattern":for(const i of t.properties)i.type==="RestElement"?wi(i.argument,e):wi(i.value,e);break;case"ArrayPattern":t.elements.forEach(i=>{i&&wi(i,e)});break;case"RestElement":wi(t.argument,e);break;case"AssignmentPattern":wi(t.left,e);break}return e}const eN=t=>/Function(?:Expression|Declaration)$|Method$/.test(t.type),J0=t=>t&&(t.type==="ObjectProperty"||t.type==="ObjectMethod")&&!t.computed,tN=(t,e)=>J0(e)&&e.key===t,Q0=["TSAsExpression","TSTypeAssertion","TSNonNullExpression","TSInstantiationExpression","TSSatisfiesExpression"];function eE(t){return Q0.includes(t.type)?eE(t.expression):t}const vn=t=>t.type===4&&t.isStatic;function Rd(t){switch(t){case"Teleport":case"teleport":return zr;case"Suspense":case"suspense":return Gc;case"KeepAlive":case"keep-alive":return ua;case"BaseTransition":case"base-transition":return Sd}}const nN=/^\d|[^\$\w\xA0-\uFFFF]/,Na=t=>!nN.test(t),iN=/[A-Za-z_$\xA0-\uFFFF]/,sN=/[\.\?\w$\xA0-\uFFFF]/,rN=/\s+[.[]\s*|\s*[.[]\s+/g,tE=t=>t.type===4?t.content:t.loc.source,nE=t=>{const e=tE(t).trim().replace(rN,a=>a.trim());let n=0,i=[],s=0,r=0,o=null;for(let a=0;a<e.length;a++){const l=e.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,s++;else if(l==="(")i.push(n),n=2,r++;else if(!(a===0?iN:sN).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?s++:l==="]"&&(--s||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===e.length-1)return!1;--r||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!s&&!r},oN=Zt,wd=nE,aN=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,iE=t=>aN.test(tE(t)),lN=Zt,sE=iE;function cN(t,e,n=e.length){return rE({offset:t.offset,line:t.line,column:t.column},e,n)}function rE(t,e,n=e.length){let i=0,s=-1;for(let r=0;r<n;r++)e.charCodeAt(r)===10&&(i++,s=r);return t.offset+=n,t.line+=i,t.column=s===-1?t.column+n:n-s,t}function uN(t,e){if(!t)throw new Error(e||"unexpected compiler condition")}function _n(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(Ke(e)?s.name===e:e.test(s.name)))return s}}function La(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&os(r.arg,e))return r}}function os(t,e){return!!(t&&vn(t)&&t.content===e)}function oE(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Vl(t){return t.type===5||t.type===2}function Id(t){return t.type===7&&t.name==="slot"}function oo(t){return t.type===1&&t.tagType===3}function da(t){return t.type===1&&t.tagType===2}const fN=new Set([io,po]);function aE(t,e=[]){if(t&&!Ke(t)&&t.type===14){const n=t.callee;if(!Ke(n)&&fN.has(n))return aE(t.arguments[0],e.concat(t))}return[t,e]}function pa(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!Ke(s)&&s.type===14){const a=aE(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||Ke(s))i=In([e]);else if(s.type===14){const a=s.arguments[0];!Ke(a)&&a.type===15?lg(e,a)||a.properties.unshift(e):s.callee===tu?i=Bt(n.helper(fa),[In([e]),s]):s.arguments.unshift(In([e])),!i&&(i=s)}else s.type===15?(lg(e,s)||s.properties.unshift(e),i=s):(i=Bt(n.helper(fa),[In([e]),s]),o&&o.callee===po&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function lg(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function ao(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function Yn(t,e){if(!t||Object.keys(e).length===0)return!1;switch(t.type){case 1:for(let n=0;n<t.props.length;n++){const i=t.props[n];if(i.type===7&&(Yn(i.arg,e)||Yn(i.exp,e)))return!0}return t.children.some(n=>Yn(n,e));case 11:return Yn(t.source,e)?!0:t.children.some(n=>Yn(n,e));case 9:return t.branches.some(n=>Yn(n,e));case 10:return Yn(t.condition,e)?!0:t.children.some(n=>Yn(n,e));case 4:return!t.isStatic&&Na(t.content)&&!!e[t.content];case 8:return t.children.some(n=>gt(n)&&Yn(n,e));case 5:case 12:return Yn(t.content,e);case 2:case 3:case 20:return!1;default:return!1}}function lE(t){return t.type===14&&t.callee===iu?t.arguments[1].returns:t}const cE=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,uE={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Or,isPreTag:Or,isIgnoreNewlineTag:Or,isCustomElement:Or,onError:Cd,onWarn:Z0,comments:!1,prefixIdentifiers:!1};let pt=uE,ma=null,Di="",rn=null,lt=null,xn="",Mi=-1,ks=-1,Pd=0,is=!1,Ah=null;const Rt=[],Pt=new VP(Rt,{onerr:xi,ontext(t,e){Ml(Qt(t,e),t,e)},ontextentity(t,e,n){Ml(t,e,n)},oninterpolation(t,e){if(is)return Ml(Qt(t,e),t,e);let n=t+Pt.delimiterOpen.length,i=e-Pt.delimiterClose.length;for(;wn(Di.charCodeAt(n));)n++;for(;wn(Di.charCodeAt(i-1));)i--;let s=Qt(n,i);s.includes("&")&&(s=pt.decodeEntities(s,!1)),Ch({type:5,content:zl(s,!1,Lt(n,i)),loc:Lt(t,e)})},onopentagname(t,e){const n=Qt(t,e);rn={type:1,tag:n,ns:pt.getNamespace(n,Rt[0],pt.ns),tagType:0,props:[],children:[],loc:Lt(t-1,e),codegenNode:void 0}},onopentagend(t){ug(t)},onclosetag(t,e){const n=Qt(t,e);if(!pt.isVoidTag(n)){let i=!1;for(let s=0;s<Rt.length;s++)if(Rt[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&xi(24,Rt[0].loc.start.offset);for(let o=0;o<=s;o++){const a=Rt.shift();Hl(a,e,o<s)}break}i||xi(23,fE(t,60))}},onselfclosingtag(t){const e=rn.tag;rn.isSelfClosing=!0,ug(t),Rt[0]&&Rt[0].tag===e&&Hl(Rt.shift(),t)},onattribname(t,e){lt={type:6,name:Qt(t,e),nameLoc:Lt(t,e),value:void 0,loc:Lt(t)}},ondirname(t,e){const n=Qt(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!is&&i===""&&xi(26,t),is||i==="")lt={type:6,name:n,nameLoc:Lt(t,e),value:void 0,loc:Lt(t)};else if(lt={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[Ze("prop")]:[],loc:Lt(t)},i==="pre"){is=Pt.inVPre=!0,Ah=rn;const s=rn.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=yN(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Qt(t,e);if(is)lt.name+=n,Ws(lt.nameLoc,e);else{const i=n[0]!=="[";lt.arg=zl(i?n:n.slice(1,-1),i,Lt(t,e),i?3:0)}},ondirmodifier(t,e){const n=Qt(t,e);if(is)lt.name+="."+n,Ws(lt.nameLoc,e);else if(lt.name==="slot"){const i=lt.arg;i&&(i.content+="."+n,Ws(i.loc,e))}else{const i=Ze(n,!0,Lt(t,e));lt.modifiers.push(i)}},onattribdata(t,e){xn+=Qt(t,e),Mi<0&&(Mi=t),ks=e},onattribentity(t,e,n){xn+=t,Mi<0&&(Mi=e),ks=n},onattribnameend(t){const e=lt.loc.start.offset,n=Qt(e,t);lt.type===7&&(lt.rawName=n),rn.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&xi(2,e)},onattribend(t,e){if(rn&&lt){if(Ws(lt.loc,e),t!==0)if(xn.includes("&")&&(xn=pt.decodeEntities(xn,!0)),lt.type===6)lt.name==="class"&&(xn=dE(xn).trim()),t===1&&!xn&&xi(13,e),lt.value={type:2,content:xn,loc:t===1?Lt(Mi,ks):Lt(Mi-1,ks+1)},Pt.inSFCRoot&&rn.tag==="template"&&lt.name==="lang"&&xn&&xn!=="html"&&Pt.enterRCDATA(pc("</template"),0);else{let n=0;lt.exp=zl(xn,!1,Lt(Mi,ks),0,n),lt.name==="for"&&(lt.forParseResult=dN(lt.exp));let i=-1;lt.name==="bind"&&(i=lt.modifiers.findIndex(s=>s.content==="sync"))>-1&&ro("COMPILER_V_BIND_SYNC",pt,lt.loc,lt.rawName)&&(lt.name="model",lt.modifiers.splice(i,1))}(lt.type!==7||lt.name!=="pre")&&rn.props.push(lt)}xn="",Mi=ks=-1},oncomment(t,e){pt.comments&&Ch({type:3,content:Qt(t,e),loc:Lt(t-4,e+3)})},onend(){const t=Di.length;for(let e=0;e<Rt.length;e++)Hl(Rt[e],t-1),xi(24,Rt[e].loc.start.offset)},oncdata(t,e){Rt[0].ns!==0?Ml(Qt(t,e),t,e):xi(1,t-9)},onprocessinginstruction(t){(Rt[0]?Rt[0].ns:pt.ns)===0&&xi(21,t-1)}}),cg=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,hN=/^\(|\)$/g;function dN(t){const e=t.loc,n=t.content,i=n.match(cE);if(!i)return;const[,s,r]=i,o=(f,h,d=!1)=>{const _=e.start.offset+h,g=_+f.length;return zl(f,!1,Lt(_,g),0,d?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(hN,"").trim();const c=s.indexOf(l),u=l.match(cg);if(u){l=l.replace(cg,"").trim();const f=u[1].trim();let h;if(f&&(h=n.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const d=u[2].trim();d&&(a.index=o(d,n.indexOf(d,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Qt(t,e){return Di.slice(t,e)}function ug(t){Pt.inSFCRoot&&(rn.innerLoc=Lt(t+1,t+1)),Ch(rn);const{tag:e,ns:n}=rn;n===0&&pt.isPreTag(e)&&Pd++,pt.isVoidTag(e)?Hl(rn,t):(Rt.unshift(rn),(n===1||n===2)&&(Pt.inXML=!0)),rn=null}function Ml(t,e,n){{const r=Rt[0]&&Rt[0].tag;r!=="script"&&r!=="style"&&t.includes("&")&&(t=pt.decodeEntities(t,!1))}const i=Rt[0]||ma,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=t,Ws(s.loc,n)):i.children.push({type:2,content:t,loc:Lt(e,n)})}function Hl(t,e,n=!1){n?Ws(t.loc,fE(e,60)):Ws(t.loc,pN(e,62)+1),Pt.inSFCRoot&&(t.children.length?t.innerLoc.end=it({},t.children[t.children.length-1].loc.end):t.innerLoc.end=it({},t.innerLoc.start),t.innerLoc.source=Qt(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s,children:r}=t;if(is||(i==="slot"?t.tagType=2:fg(t)?t.tagType=3:gN(t)&&(t.tagType=1)),Pt.inRCDATA||(t.children=hE(r)),s===0&&pt.isIgnoreNewlineTag(i)){const o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&pt.isPreTag(i)&&Pd--,Ah===t&&(is=Pt.inVPre=!1,Ah=null),Pt.inXML&&(Rt[0]?Rt[0].ns:pt.ns)===0&&(Pt.inXML=!1);{const o=t.props;if(!Pt.inSFCRoot&&er("COMPILER_NATIVE_TEMPLATE",pt)&&t.tag==="template"&&!fg(t)){const l=Rt[0]||ma,c=l.children.indexOf(t);l.children.splice(c,1,...t.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&ro("COMPILER_INLINE_TEMPLATE",pt,a.loc)&&t.children.length&&(a.value={type:2,content:Qt(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:a.loc})}}function pN(t,e){let n=t;for(;Di.charCodeAt(n)!==e&&n<Di.length-1;)n++;return n}function fE(t,e){let n=t;for(;Di.charCodeAt(n)!==e&&n>=0;)n--;return n}const mN=new Set(["if","else","else-if","for","slot"]);function fg({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&mN.has(e[n].name))return!0}return!1}function gN({tag:t,props:e}){if(pt.isCustomElement(t))return!1;if(t==="component"||_N(t.charCodeAt(0))||Rd(t)||pt.isBuiltInComponent&&pt.isBuiltInComponent(t)||pt.isNativeTag&&!pt.isNativeTag(t))return!0;for(let n=0;n<e.length;n++){const i=e[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(ro("COMPILER_IS_ON_ELEMENT",pt,i.loc))return!0}}else if(i.name==="bind"&&os(i.arg,"is")&&ro("COMPILER_IS_ON_ELEMENT",pt,i.loc))return!0}return!1}function _N(t){return t>64&&t<91}const vN=/\r\n/g;function hE(t,e){const n=pt.whitespace!=="preserve";let i=!1;for(let s=0;s<t.length;s++){const r=t[s];if(r.type===2)if(Pd)r.content=r.content.replace(vN,`
`);else if(EN(r.content)){const o=t[s-1]&&t[s-1].type,a=t[s+1]&&t[s+1].type;!o||!a||n&&(o===3&&(a===3||a===1)||o===1&&(a===3||a===1&&SN(r.content)))?(i=!0,t[s]=null):r.content=" "}else n&&(r.content=dE(r.content))}return i?t.filter(Boolean):t}function EN(t){for(let e=0;e<t.length;e++)if(!wn(t.charCodeAt(e)))return!1;return!0}function SN(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function dE(t){let e="",n=!1;for(let i=0;i<t.length;i++)wn(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function Ch(t){(Rt[0]||ma).children.push(t)}function Lt(t,e){return{start:Pt.getPos(t),end:e==null?e:Pt.getPos(e),source:e==null?e:Qt(t,e)}}function xN(t){return Lt(t.start.offset,t.end.offset)}function Ws(t,e){t.end=Pt.getPos(e),t.source=Qt(t.start.offset,e)}function yN(t){const e={type:6,name:t.rawName,nameLoc:Lt(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function zl(t,e=!1,n,i=0,s=0){return Ze(t,e,n,i)}function xi(t,e,n){pt.onError(At(t,Lt(e,e)))}function MN(){Pt.reset(),rn=null,lt=null,xn="",Mi=-1,ks=-1,Rt.length=0}function Nd(t,e){if(MN(),Di=t,pt=it({},uE),e){let s;for(s in e)e[s]!=null&&(pt[s]=e[s])}Pt.mode=pt.parseMode==="html"?1:pt.parseMode==="sfc"?2:0,Pt.inXML=pt.ns===1||pt.ns===2;const n=e&&e.delimiters;n&&(Pt.delimiterOpen=pc(n[0]),Pt.delimiterClose=pc(n[1]));const i=ma=j0([],t);return Pt.parse(Di),i.loc=Lt(0,t.length),i.children=hE(i.children),ma=null,i}function TN(t,e){Gl(t,void 0,e,pE(t,t.children[0]))}function pE(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!da(e)}function Gl(t,e,n,i=!1,s=!1){const{children:r}=t,o=[];for(let u=0;u<r.length;u++){const f=r[u];if(f.type===1&&f.tagType===0){const h=i?0:Tn(f,n);if(h>0){if(h>=2){f.codegenNode.patchFlag=-1,o.push(f);continue}}else{const d=f.codegenNode;if(d.type===13){const _=d.patchFlag;if((_===void 0||_===512||_===1)&&gE(f,n)>=2){const g=_E(f);g&&(d.props=n.hoist(g))}d.dynamicProps&&(d.dynamicProps=n.hoist(d.dynamicProps))}}}else if(f.type===12&&(i?0:Tn(f,n))>=2){o.push(f);continue}if(f.type===1){const h=f.tagType===1;h&&n.scopes.vSlot++,Gl(f,t,n,!1,s),h&&n.scopes.vSlot--}else if(f.type===11)Gl(f,t,n,f.children.length===1,!0);else if(f.type===9)for(let h=0;h<f.branches.length;h++)Gl(f.branches[h],t,n,f.branches[h].children.length===1,s)}let a=!1;if(o.length===r.length&&t.type===1){if(t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&De(t.codegenNode.children))t.codegenNode.children=l(ps(t.codegenNode.children)),a=!0;else if(t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!De(t.codegenNode.children)&&t.codegenNode.children.type===15){const u=c(t.codegenNode,"default");u&&(u.returns=l(ps(u.returns)),a=!0)}else if(t.tagType===3&&e&&e.type===1&&e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!De(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=_n(t,"slot",!0),f=u&&u.arg&&c(e.codegenNode,u.arg);f&&(f.returns=l(ps(f.returns)),a=!0)}}if(!a)for(const u of o)u.codegenNode=n.cache(u.codegenNode);function l(u){const f=n.cache(u);return s&&n.hmr&&(f.needArraySpread=!0),f}function c(u,f){if(u.children&&!De(u.children)&&u.children.type===15){const h=u.children.properties.find(d=>d.key===f||d.key.content===f);return h&&h.value}}o.length&&n.transformHoist&&n.transformHoist(r,n,t)}function Tn(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject"&&t.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3;const a=gE(t,e);if(a===0)return n.set(t,0),0;a<o&&(o=a);for(let l=0;l<t.children.length;l++){const c=Tn(t.children[l],e);if(c===0)return n.set(t,0),0;c<o&&(o=c)}if(o>1)for(let l=0;l<t.props.length;l++){const c=t.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const u=Tn(c.exp,e);if(u===0)return n.set(t,0),0;u<o&&(o=u)}}if(s.isBlock){for(let l=0;l<t.props.length;l++)if(t.props[l].type===7)return n.set(t,0),0;e.removeHelper(Es),e.removeHelper(lr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(ar(e.inSSR,s.isComponent))}return n.set(t,o),o}else return n.set(t,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Tn(t.content,e);case 4:return t.constType;case 8:let r=3;for(let o=0;o<t.children.length;o++){const a=t.children[o];if(Ke(a)||En(a))continue;const l=Tn(a,e);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}const bN=new Set([Qc,eu,io,po]);function mE(t,e){if(t.type===14&&!Ke(t.callee)&&bN.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Tn(n,e);if(n.type===14)return mE(n,e)}return 0}function gE(t,e){let n=3;const i=_E(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Tn(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Tn(a,e):a.type===14?c=mE(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function _E(t){const e=t.codegenNode;if(e.type===13)return e.props}function vE(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Zt,isCustomElement:u=Zt,expressionPlugins:f=[],scopeId:h=null,slotted:d=!0,ssr:_=!1,inSSR:g=!1,ssrCssVars:m="",bindingMetadata:p=nt,inline:b=!1,isTS:v=!1,onError:E=Cd,onWarn:w=Z0,compatConfig:C}){const P=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={filename:e,selfName:P&&ys(bt(P[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:d,ssr:_,inSSR:g,ssrCssVars:m,bindingMetadata:p,inline:b,isTS:v,onError:E,onWarn:w,compatConfig:C,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(M){const y=L.helpers.get(M)||0;return L.helpers.set(M,y+1),M},removeHelper(M){const y=L.helpers.get(M);if(y){const N=y-1;N?L.helpers.set(M,N):L.helpers.delete(M)}},helperString(M){return`_${rr[L.helper(M)]}`},replaceNode(M){L.parent.children[L.childIndex]=L.currentNode=M},removeNode(M){const y=L.parent.children,N=M?y.indexOf(M):L.currentNode?L.childIndex:-1;!M||M===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>N&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(N,1)},onNodeRemoved:Zt,addIdentifiers(M){},removeIdentifiers(M){},hoist(M){Ke(M)&&(M=Ze(M)),L.hoists.push(M);const y=Ze(`_hoisted_${L.hoists.length}`,!1,M.loc,2);return y.hoisted=M,y},cache(M,y=!1,N=!1){const D=Y0(L.cached.length,M,y,N);return L.cached.push(D),D}};return L.filters=new Set,L}function EE(t,e){const n=vE(t,e);Da(t,n),e.hoistStatic&&TN(t,n),e.ssr||AN(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function AN(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(pE(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&su(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=so(e,n(no),void 0,t.children,s,void 0,void 0,!0,void 0,!1)}}function CN(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];Ke(s)||(e.grandParent=e.parent,e.parent=t,e.childIndex=n,e.onNodeRemoved=i,Da(s,e))}}function Da(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(De(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(ho);break;case 5:e.ssr||e.helper(Pa);break;case 9:for(let r=0;r<t.branches.length;r++)Da(t.branches[r],e);break;case 10:case 11:case 1:case 0:CN(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function Ld(t,e){const n=Ke(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(Id))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const ru="/*@__PURE__*/",SE=t=>`${rr[t]}: _${rr[t]}`;function RN(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(g){return`_${rr[g]}`},push(g,m=-2,p){d.code+=g},indent(){_(++d.indentLevel)},deindent(g=!1){g?--d.indentLevel:_(--d.indentLevel)},newline(){_(d.indentLevel)}};function _(g){d.push(`
`+"  ".repeat(g),0)}return d}function xE(t,e={}){const n=RN(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),h=f.length>0,d=!r&&i!=="module";wN(t,n);const g=u?"ssrRender":"render",p=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${g}(${p}) {`),o(),d&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(SE).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(of(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(of(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),of(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let b=0;b<t.temps;b++)s(`${b>0?", ":""}_temp${b}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?fn(t.codegenNode,n):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function wN(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[Wc,Xc,ho,$c,Md].filter(h=>u.includes(h)).map(SE).join(", ");s(`const { ${f} } = _Vue
`,-1)}IN(t.hoists,e),r(),s("return ")}function of(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?Kc:e==="component"?qc:Yc);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${ao(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function IN(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i}=e;i();for(let s=0;s<t.length;s++){const r=t[s];r&&(n(`const _hoisted_${s+1} = `),fn(r,e),i())}e.pure=!1}function Dd(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),Oa(t,e,n),n&&e.deindent(),e.push("]")}function Oa(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];Ke(a)?s(a,-3):De(a)?Dd(a,e):fn(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function fn(t,e){if(Ke(t)){e.push(t,-3);return}if(En(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:fn(t.codegenNode,e);break;case 2:PN(t,e);break;case 4:yE(t,e);break;case 5:NN(t,e);break;case 12:fn(t.codegenNode,e);break;case 8:ME(t,e);break;case 3:DN(t,e);break;case 13:ON(t,e);break;case 14:FN(t,e);break;case 15:BN(t,e);break;case 17:kN(t,e);break;case 18:VN(t,e);break;case 19:HN(t,e);break;case 20:zN(t,e);break;case 21:Oa(t.body,e,!0,!1);break}}function PN(t,e){e.push(JSON.stringify(t.content),-3,t)}function yE(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function NN(t,e){const{push:n,helper:i,pure:s}=e;s&&n(ru),n(`${i(Pa)}(`),fn(t.content,e),n(")")}function ME(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];Ke(i)?e.push(i,-3):fn(i,e)}}function LN(t,e){const{push:n}=e;if(t.type===8)n("["),ME(t,e),n("]");else if(t.isStatic){const i=Na(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function DN(t,e){const{push:n,helper:i,pure:s}=e;s&&n(ru),n(`${i(ho)}(${JSON.stringify(t.content)})`,-3,t)}function ON(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:d}=t;let _;l&&(_=String(l)),u&&n(i(Zc)+"("),f&&n(`(${i(Es)}(${h?"true":""}), `),s&&n(ru);const g=f?lr(e.inSSR,d):ar(e.inSSR,d);n(i(g)+"(",-2,t),Oa(UN([r,o,a,_,c]),e),n(")"),f&&n(")"),u&&(n(", "),fn(u,e),n(")"))}function UN(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function FN(t,e){const{push:n,helper:i,pure:s}=e,r=Ke(t.callee)?t.callee:i(t.callee);s&&n(ru),n(r+"(",-2,t),Oa(t.arguments,e),n(")")}function BN(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];LN(c,e),n(": "),fn(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function kN(t,e){Dd(t.elements,e)}function VN(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${rr[nu]}(`),n("(",-2,t),De(r)?Oa(r,e):r&&fn(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),De(o)?Dd(o,e):fn(o,e)):a&&fn(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function HN(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!Na(n.content);f&&o("("),yE(n,e),f&&o(")")}else o("("),fn(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),fn(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,fn(s,e),u||e.indentLevel--,r&&l(!0)}function zN(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e,{needPauseTracking:a,needArraySpread:l}=t;l&&n("[...("),n(`_cache[${t.index}] || (`),a&&(s(),n(`${i(ha)}(-1`),t.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${t.index}] = `),fn(t.value,e),a&&(n(`).cacheIndex = ${t.index},`),o(),n(`${i(ha)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")"),l&&n(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const GN=(t,e)=>{if(t.type===5)t.content=Wl(t.content,e);else if(t.type===1){const n=_n(t,"memo");for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&s.name!=="for"){const r=s.exp,o=s.arg;r&&r.type===4&&!(s.name==="on"&&o)&&!(n&&o&&o.type===4&&o.content==="key")&&(s.exp=Wl(r,e,s.name==="slot")),o&&o.type===4&&!o.isStatic&&(s.arg=Wl(o,e))}}}};function Wl(t,e,n=!1,i=!1,s=Object.create(e.identifiers)){return t}function TE(t){return Ke(t)?t:t.type===4?t.content:t.children.map(TE).join("")}const WN=Ld(/^(if|else|else-if)$/,(t,e,n)=>bE(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=dg(s,l,n);else{const c=XN(i.codegenNode);c.alternate=dg(s,l+i.branches.length-1,n)}}}));function bE(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(At(28,e.loc)),e.exp=Ze("true",!1,s)}if(e.name==="if"){const s=hg(t,e),r={type:9,loc:xN(t.loc),branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(At(30,t.loc)),n.removeNode();const a=hg(t,e);o.branches.push(a);const l=i&&i(o,a,!1);Da(a,n),l&&l(),n.currentNode=null}else n.onError(At(30,t.loc));break}}}function hg(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!_n(t,"for")?t.children:[t],userKey:La(t,"key"),isTemplateIf:n}}function dg(t,e,n){return t.condition?dc(t.condition,pg(t,e,n),Bt(n.helper(ho),['""',"true"])):pg(t,e,n)}function pg(t,e,n){const{helper:i}=n,s=Nt("key",Ze(`${e}`,!1,Yt,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return pa(l,s,n),l}else return so(n,i(no),In([s]),r,64,void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=lE(l);return c.type===13&&su(c,n),pa(c,s,n),l}}function XN(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const AE=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(o&&o.type===4&&!o.content.trim()&&(o=void 0),!o){if(r.type!==4||!r.isStatic)return n.onError(At(52,r.loc)),{props:[Nt(r,Ze("",!0,s))]};CE(t),o=t.exp}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=bt(r.content):r.content=`${n.helperString(fc)}(${r.content})`:(r.children.unshift(`${n.helperString(fc)}(`),r.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&mg(r,"."),i.some(a=>a.content==="attr")&&mg(r,"^")),{props:[Nt(r,o)]}},CE=(t,e)=>{const n=t.arg,i=bt(n.content);t.exp=Ze(i,!1,n.loc)},mg=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},$N=Ld("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return RE(t,e,n,r=>{const o=Bt(i(Jc),[r.source]),a=oo(t),l=_n(t,"memo"),c=La(t,"key",!1,!0);c&&c.type===7&&!c.exp&&CE(c);let f=c&&(c.type===6?c.value?Ze(c.value.content,!0):void 0:c.exp);const h=c&&f?Nt("key",f):null,d=r.source.type===4&&r.source.constType>0,_=d?64:c?128:256;return r.codegenNode=so(n,i(no),void 0,o,_,void 0,void 0,!0,!d,!1,t.loc),()=>{let g;const{children:m}=r,p=m.length!==1||m[0].type!==1,b=da(t)?t:a&&t.children.length===1&&da(t.children[0])?t.children[0]:null;if(b?(g=b.codegenNode,a&&h&&pa(g,h,n)):p?g=so(n,i(no),h?In([h]):void 0,t.children,64,void 0,void 0,!0,void 0,!1):(g=m[0].codegenNode,a&&h&&pa(g,h,n),g.isBlock!==!d&&(g.isBlock?(s(Es),s(lr(n.inSSR,g.isComponent))):s(ar(n.inSSR,g.isComponent))),g.isBlock=!d,g.isBlock?(i(Es),i(lr(n.inSSR,g.isComponent))):i(ar(n.inSSR,g.isComponent))),l){const v=or(mc(r.parseResult,[Ze("_cached")]));v.body=K0([zn(["const _memo = (",l.exp,")"]),zn(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${n.helperString(Ad)}(_cached, _memo)) return _cached`]),zn(["const _item = ",g]),Ze("_item.memo = _memo"),Ze("return _item")]),o.arguments.push(v,Ze("_cache"),Ze(String(n.cached.length))),n.cached.push(null)}else o.arguments.push(or(mc(r.parseResult),g,!0))}})});function RE(t,e,n,i){if(!e.exp){n.onError(At(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(At(32,e.loc));return}Od(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:oo(t)?t.children:[t]};n.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}function Od(t,e){t.finalized||(t.finalized=!0)}function mc({value:t,key:e,index:n},i=[]){return qN([t,e,n,...i])}function qN(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||Ze("_".repeat(i+1),!1))}const gg=Ze("undefined",!1),wE=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=_n(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},jN=(t,e)=>{let n;if(oo(t)&&t.props.some(Id)&&(n=_n(t,"for"))){const i=n.forParseResult;if(i){Od(i);const{value:s,key:r,index:o}=i,{addIdentifiers:a,removeIdentifiers:l}=e;return s&&a(s),r&&a(r),o&&a(o),()=>{s&&l(s),r&&l(r),o&&l(o)}}}},YN=(t,e,n,i)=>or(t,n,!1,!0,n.length?n[0].loc:i);function IE(t,e,n=YN){e.helper(nu);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=_n(t,"slot",!0);if(l){const{arg:m,exp:p}=l;m&&!vn(m)&&(a=!0),r.push(Nt(m||Ze("default",!0),n(p,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let d=0;for(let m=0;m<i.length;m++){const p=i[m];let b;if(!oo(p)||!(b=_n(p,"slot",!0))){p.type!==3&&f.push(p);continue}if(l){e.onError(At(37,b.loc));break}c=!0;const{children:v,loc:E}=p,{arg:w=Ze("default",!0),exp:C,loc:P}=b;let L;vn(w)?L=w?w.content:"default":a=!0;const M=_n(p,"for"),y=n(C,M,v,E);let N,D;if(N=_n(p,"if"))a=!0,o.push(dc(N.exp,Tl(w,y,d++),gg));else if(D=_n(p,/^else(-if)?$/,!0)){let k=m,j;for(;k--&&(j=i[k],j.type===3););if(j&&oo(j)&&_n(j,/^(else-)?if$/)){let te=o[o.length-1];for(;te.alternate.type===19;)te=te.alternate;te.alternate=D.exp?dc(D.exp,Tl(w,y,d++),gg):Tl(w,y,d++)}else e.onError(At(30,D.loc))}else if(M){a=!0;const k=M.forParseResult;k?(Od(k),o.push(Bt(e.helper(Jc),[k.source,or(mc(k),Tl(w,y),!0)]))):e.onError(At(32,M.loc))}else{if(L){if(h.has(L)){e.onError(At(38,P));continue}h.add(L),L==="default"&&(u=!0)}r.push(Nt(w,y))}}if(!l){const m=(p,b)=>{const v=n(p,void 0,b,s);return e.compatConfig&&(v.isNonScopedSlot=!0),Nt("default",v)};c?f.length&&f.some(p=>PE(p))&&(u?e.onError(At(39,f[0].loc)):r.push(m(void 0,f))):r.push(m(void 0,i))}const _=a?2:Xl(t.children)?3:1;let g=In(r.concat(Nt("_",Ze(_+"",!1))),s);return o.length&&(g=Bt(e.helper(bd),[g,ps(o)])),{slots:g,hasDynamicSlots:a}}function Tl(t,e,n){const i=[Nt("name",t),Nt("fn",e)];return n!=null&&i.push(Nt("key",Ze(String(n),!0))),In(i)}function Xl(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||Xl(n.children))return!0;break;case 9:if(Xl(n.branches))return!0;break;case 10:case 11:if(Xl(n.children))return!0;break}}return!1}function PE(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():PE(t.content)}const NE=new WeakMap,LE=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?DE(t,e):`"${i}"`;const a=gt(o)&&o.callee===jc;let l,c,u=0,f,h,d,_=a||o===zr||o===Gc||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){const g=Ud(t,e,void 0,r,a);l=g.props,u=g.patchFlag,h=g.dynamicPropNames;const m=g.directives;d=m&&m.length?ps(m.map(p=>OE(p,e))):void 0,g.shouldUseBlock&&(_=!0)}if(t.children.length>0)if(o===ua&&(_=!0,u|=1024),r&&o!==zr&&o!==ua){const{slots:m,hasDynamicSlots:p}=IE(t,e);c=m,p&&(u|=1024)}else if(t.children.length===1&&o!==zr){const m=t.children[0],p=m.type,b=p===5||p===8;b&&Tn(m,e)===0&&(u|=1),b||p===2?c=m:c=t.children}else c=t.children;h&&h.length&&(f=ZN(h)),t.codegenNode=so(e,o,l,c,u===0?void 0:u,f,d,!!_,!1,r,t.loc)};function DE(t,e,n=!1){let{tag:i}=t;const s=Rh(i),r=La(t,"is",!1,!0);if(r)if(s||er("COMPILER_IS_ON_ELEMENT",e)){let a;if(r.type===6?a=r.value&&Ze(r.value.content,!0):(a=r.exp,a||(a=Ze("is",!1,r.arg.loc))),a)return Bt(e.helper(jc),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=Rd(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(qc),e.components.add(i),ao(i,"component"))}function Ud(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],h=l.length>0;let d=!1,_=0,g=!1,m=!1,p=!1,b=!1,v=!1,E=!1;const w=[],C=y=>{c.length&&(u.push(In(_g(c),a)),c=[]),y&&u.push(y)},P=()=>{e.scopes.vFor>0&&c.push(Nt(Ze("ref_for",!0),Ze("true")))},L=({key:y,value:N})=>{if(vn(y)){const D=y.content,k=Ss(D);if(k&&(!i||s)&&D.toLowerCase()!=="onclick"&&D!=="onUpdate:modelValue"&&!Ni(D)&&(b=!0),k&&Ni(D)&&(E=!0),k&&N.type===14&&(N=N.arguments[0]),N.type===20||(N.type===4||N.type===8)&&Tn(N,e)>0)return;D==="ref"?g=!0:D==="class"?m=!0:D==="style"?p=!0:D!=="key"&&!w.includes(D)&&w.push(D),i&&(D==="class"||D==="style")&&!w.includes(D)&&w.push(D)}else v=!0};for(let y=0;y<n.length;y++){const N=n[y];if(N.type===6){const{loc:D,name:k,nameLoc:j,value:te}=N;let z=!0;if(k==="ref"&&(g=!0,P()),k==="is"&&(Rh(o)||te&&te.content.startsWith("vue:")||er("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Nt(Ze(k,!0,j),Ze(te?te.content:"",z,te?te.loc:D)))}else{const{name:D,arg:k,exp:j,loc:te,modifiers:z}=N,re=D==="bind",H=D==="on";if(D==="slot"){i||e.onError(At(40,te));continue}if(D==="once"||D==="memo"||D==="is"||re&&os(k,"is")&&(Rh(o)||er("COMPILER_IS_ON_ELEMENT",e))||H&&r)continue;if((re&&os(k,"key")||H&&h&&os(k,"vue:before-update"))&&(d=!0),re&&os(k,"ref")&&P(),!k&&(re||H)){if(v=!0,j)if(re){if(P(),C(),er("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(j);continue}u.push(j)}else C({type:14,loc:te,callee:e.helper(tu),arguments:i?[j]:[j,"true"]});else e.onError(At(re?34:35,te));continue}re&&z.some(Ae=>Ae.content==="prop")&&(_|=32);const ve=e.directiveTransforms[D];if(ve){const{props:Ae,needRuntime:Oe}=ve(N,t,e);!r&&Ae.forEach(L),H&&k&&!vn(k)?C(In(Ae,a)):c.push(...Ae),Oe&&(f.push(N),En(Oe)&&NE.set(N,Oe))}else Rg(D)||(f.push(N),h&&(d=!0))}}let M;if(u.length?(C(),u.length>1?M=Bt(e.helper(fa),u,a):M=u[0]):c.length&&(M=In(_g(c),a)),v?_|=16:(m&&!i&&(_|=2),p&&!i&&(_|=4),w.length&&(_|=8),b&&(_|=32)),!d&&(_===0||_===32)&&(g||E||f.length>0)&&(_|=512),!e.inSSR&&M)switch(M.type){case 15:let y=-1,N=-1,D=!1;for(let te=0;te<M.properties.length;te++){const z=M.properties[te].key;vn(z)?z.content==="class"?y=te:z.content==="style"&&(N=te):z.isHandlerKey||(D=!0)}const k=M.properties[y],j=M.properties[N];D?M=Bt(e.helper(io),[M]):(k&&!vn(k.value)&&(k.value=Bt(e.helper(Qc),[k.value])),j&&(p||j.value.type===4&&j.value.content.trim()[0]==="["||j.value.type===17)&&(j.value=Bt(e.helper(eu),[j.value])));break;case 14:break;default:M=Bt(e.helper(io),[Bt(e.helper(po),[M])]);break}return{props:M,directives:f,patchFlag:_,dynamicPropNames:w,shouldUseBlock:d}}function _g(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||Ss(r))&&KN(o,s):(e.set(r,s),n.push(s))}return n}function KN(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=ps([t.value,e.value],t.loc)}function OE(t,e){const n=[],i=NE.get(t);i?n.push(e.helperString(i)):(e.helper(Yc),e.directives.add(t.name),n.push(ao(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=Ze("true",!1,s);n.push(In(t.modifiers.map(o=>Nt(o,r)),s))}return ps(n,t.loc)}function ZN(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function Rh(t){return t==="component"||t==="Component"}const JN=(t,e)=>{if(da(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=UE(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=or([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Bt(e.helper(Td),o,i)}};function UE(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=bt(o.name),s.push(o)));else if(o.name==="bind"&&os(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=bt(o.arg.content);n=o.exp=Ze(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&vn(o.arg)&&(o.arg.content=bt(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=Ud(t,e,s,!1,!1);i=r,o.length&&e.onError(At(36,o[0].loc))}return{slotName:n,slotProps:i}}const Fd=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(At(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?qs(bt(f)):`on:${f}`;a=Ze(h,!0,o.loc)}else a=zn([`${n.helperString(hc)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(hc)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=wd(l),h=!(f||sE(l)),d=l.content.includes(";");(h||c&&f)&&(l=zn([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[Nt(a,l||Ze("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},QN=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(Vl(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(Vl(l))i||(i=n[r]=zn([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(Vl(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Tn(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Bt(e.helper($c),a)}}}}},vg=new WeakSet,eL=(t,e)=>{if(t.type===1&&_n(t,"once",!0))return vg.has(t)||e.inVOnce||e.inSSR?void 0:(vg.add(t),e.inVOnce=!0,e.helper(ha),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0,!0))})},Bd=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(At(41,t.loc)),bl();const r=i.loc.source.trim(),o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(At(44,i.loc)),bl();if(!o.trim()||!wd(i))return n.onError(At(42,i.loc)),bl();const l=s||Ze("modelValue",!0),c=s?vn(s)?`onUpdate:${bt(s.content)}`:zn(['"onUpdate:" + ',s]):"onUpdate:modelValue";let u;const f=n.isTS?"($event: any)":"$event";u=zn([`${f} => ((`,i,") = $event)"]);const h=[Nt(l,t.exp),Nt(c,u)];if(t.modifiers.length&&e.tagType===1){const d=t.modifiers.map(g=>g.content).map(g=>(Na(g)?g:JSON.stringify(g))+": true").join(", "),_=s?vn(s)?`${s.content}Modifiers`:zn([s,' + "Modifiers"']):"modelModifiers";h.push(Nt(_,Ze(`{ ${d} }`,!1,t.loc,2)))}return bl(h)};function bl(t=[]){return{props:t}}const tL=/[\w).+\-_$\]]/,nL=(t,e)=>{er("COMPILER_FILTERS",e)&&(t.type===5?gc(t.content,e):t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&gc(n.exp,e)}))};function gc(t,e){if(t.type===4)Eg(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?Eg(i,e):i.type===8?gc(t,e):i.type===5&&gc(i.content,e))}}function Eg(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,d,_,g=[];for(d=0;d<n.length;d++)if(h=f,f=n.charCodeAt(d),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)_===void 0?(u=d+1,_=n.slice(0,d).trim()):m();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let p=d-1,b;for(;p>=0&&(b=n.charAt(p),b===" ");p--);(!b||!tL.test(b))&&(o=!0)}}_===void 0?_=n.slice(0,d).trim():u!==0&&m();function m(){g.push(n.slice(u,d).trim()),u=d+1}if(g.length){for(d=0;d<g.length;d++)_=iL(_,g[d],e);t.content=_,t.ast=void 0}}function iL(t,e,n){n.helper(Kc);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${ao(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${ao(s,"filter")}(${t}${r!==")"?","+r:r}`}}const Sg=new WeakSet,sL=(t,e)=>{if(t.type===1){const n=_n(t,"memo");return!n||Sg.has(t)?void 0:(Sg.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&su(i,e),t.codegenNode=Bt(e.helper(iu),[n.exp,or(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))})}};function FE(t){return[[eL,WN,sL,$N,nL,JN,LE,wE,QN],{on:Fd,bind:AE,model:Bd}]}function BE(t,e={}){const n=e.onError||Cd,i=e.mode==="module";e.prefixIdentifiers===!0?n(At(47)):i&&n(At(48));const s=!1;e.cacheHandlers&&n(At(49)),e.scopeId&&!i&&n(At(50));const r=it({},e,{prefixIdentifiers:s}),o=Ke(t)?Nd(t,r):t,[a,l]=FE();return EE(o,it({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:it({},l,e.directiveTransforms||{})})),xE(o,r)}const rL={DATA:"data",PROPS:"props",PROPS_ALIASED:"props-aliased",SETUP_LET:"setup-let",SETUP_CONST:"setup-const",SETUP_REACTIVE_CONST:"setup-reactive-const",SETUP_MAYBE_REF:"setup-maybe-ref",SETUP_REF:"setup-ref",OPTIONS:"options",LITERAL_CONST:"literal-const"},kE=()=>({props:[]});/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kd=Symbol(""),Vd=Symbol(""),Hd=Symbol(""),zd=Symbol(""),_c=Symbol(""),Gd=Symbol(""),Wd=Symbol(""),Xd=Symbol(""),$d=Symbol(""),qd=Symbol("");q0({[kd]:"vModelRadio",[Vd]:"vModelCheckbox",[Hd]:"vModelText",[zd]:"vModelSelect",[_c]:"vModelDynamic",[Gd]:"withModifiers",[Wd]:"withKeys",[Xd]:"vShow",[$d]:"Transition",[qd]:"TransitionGroup"});let Pr;function oL(t,e=!1){return Pr||(Pr=document.createElement("div")),e?(Pr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,Pr.children[0].getAttribute("foo")):(Pr.innerHTML=t,Pr.textContent)}const jd={parseMode:"html",isVoidTag:Dg,isNativeTag:t=>Pg(t)||Ng(t)||Lg(t),isPreTag:t=>t==="pre",isIgnoreNewlineTag:t=>t==="pre"||t==="textarea",decodeEntities:oL,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return $d;if(t==="TransitionGroup"||t==="transition-group")return qd},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},VE=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:Ze("style",!0,e.loc),exp:aL(e.value.content,e.loc),modifiers:[],loc:e.loc})})},aL=(t,e)=>{const n=Nh(t);return Ze(JSON.stringify(n),!1,e,3)};function Oi(t,e){return At(t,e)}const lL={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},cL={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},uL=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Oi(53,s)),e.children.length&&(n.onError(Oi(54,s)),e.children.length=0),{props:[Nt(Ze("innerHTML",!0,s),i||Ze("",!0))]}},fL=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Oi(55,s)),e.children.length&&(n.onError(Oi(56,s)),e.children.length=0),{props:[Nt(Ze("textContent",!0),i?Tn(i,n)>0?i:Bt(n.helperString(Pa),[i],s):Ze("",!0))]}},hL=(t,e,n)=>{const i=Bd(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Oi(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=Hd,a=!1;if(s==="input"||r){const l=La(e,"type");if(l){if(l.type===7)o=_c;else if(l.value)switch(l.value.content){case"radio":o=kd;break;case"checkbox":o=Vd;break;case"file":a=!0,n.onError(Oi(59,t.loc));break}}else oE(e)&&(o=_c)}else s==="select"&&(o=zd);a||(i.needRuntime=n.helper(o))}else n.onError(Oi(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},dL=Jt("passive,once,capture"),pL=Jt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),mL=Jt("left,right"),HE=Jt("onkeyup,onkeydown,onkeypress"),gL=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a].content;l==="native"&&ro("COMPILER_V_ON_NATIVE",n)||dL(l)?o.push(l):mL(l)?vn(t)?HE(t.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):pL(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},xg=(t,e)=>vn(t)&&t.content.toLowerCase()==="onclick"?Ze(e,!0):t.type!==4?zn(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,_L=(t,e,n)=>Fd(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=gL(r,s,n,t.loc);if(l.includes("right")&&(r=xg(r,"onContextmenu")),l.includes("middle")&&(r=xg(r,"onMouseup")),l.length&&(o=Bt(n.helper(Gd),[o,JSON.stringify(l)])),a.length&&(!vn(r)||HE(r.content.toLowerCase()))&&(o=Bt(n.helper(Wd),[o,JSON.stringify(a)])),c.length){const u=c.map(ys).join("");r=vn(r)?Ze(`${r.content}${u}`,!0):zn(["(",r,`) + "${u}"`])}return{props:[Nt(r,o)]}}),vL=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Oi(61,s)),{props:[],needRuntime:n.helper(Xd)}},EL=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},zE=[VE],GE={cloak:kE,html:uL,text:fL,model:hL,on:_L,show:vL};function SL(t,e={}){return BE(t,it({},jd,e,{nodeTransforms:[EL,...zE,...e.nodeTransforms||[]],directiveTransforms:it({},GE,e.directiveTransforms||{}),transformHoist:null}))}function xL(t,e={}){return Nd(t,it({},jd,e))}const yL=Object.freeze(Object.defineProperty({__proto__:null,BASE_TRANSITION:Sd,BindingTypes:rL,CAMELIZE:fc,CAPITALIZE:z0,CREATE_BLOCK:xd,CREATE_COMMENT:ho,CREATE_ELEMENT_BLOCK:yd,CREATE_ELEMENT_VNODE:Xc,CREATE_SLOTS:bd,CREATE_STATIC:Md,CREATE_TEXT:$c,CREATE_VNODE:Wc,CompilerDeprecationTypes:HP,ConstantTypes:LP,DOMDirectiveTransforms:GE,DOMErrorCodes:lL,DOMErrorMessages:cL,DOMNodeTransforms:zE,ElementTypes:NP,ErrorCodes:WP,FRAGMENT:no,GUARD_REACTIVE_PROPS:po,IS_MEMO_SAME:Ad,IS_REF:$0,KEEP_ALIVE:ua,MERGE_PROPS:fa,NORMALIZE_CLASS:Qc,NORMALIZE_PROPS:io,NORMALIZE_STYLE:eu,Namespaces:IP,NodeTypes:PP,OPEN_BLOCK:Es,POP_SCOPE_ID:W0,PUSH_SCOPE_ID:G0,RENDER_LIST:Jc,RENDER_SLOT:Td,RESOLVE_COMPONENT:qc,RESOLVE_DIRECTIVE:Yc,RESOLVE_DYNAMIC_COMPONENT:jc,RESOLVE_FILTER:Kc,SET_BLOCK_TRACKING:ha,SUSPENSE:Gc,TELEPORT:zr,TO_DISPLAY_STRING:Pa,TO_HANDLERS:tu,TO_HANDLER_KEY:hc,TRANSITION:$d,TRANSITION_GROUP:qd,TS_NODE_TYPES:Q0,UNREF:X0,V_MODEL_CHECKBOX:Vd,V_MODEL_DYNAMIC:_c,V_MODEL_RADIO:kd,V_MODEL_SELECT:zd,V_MODEL_TEXT:Hd,V_ON_WITH_KEYS:Wd,V_ON_WITH_MODIFIERS:Gd,V_SHOW:Xd,WITH_CTX:nu,WITH_DIRECTIVES:Zc,WITH_MEMO:iu,advancePositionWithClone:cN,advancePositionWithMutation:rE,assert:uN,baseCompile:BE,baseParse:Nd,buildDirectiveArgs:OE,buildProps:Ud,buildSlots:IE,checkCompatEnabled:ro,compile:SL,convertToBlock:su,createArrayExpression:ps,createAssignmentExpression:FP,createBlockStatement:K0,createCacheExpression:Y0,createCallExpression:Bt,createCompilerError:At,createCompoundExpression:zn,createConditionalExpression:dc,createDOMCompilerError:Oi,createForLoopParams:mc,createFunctionExpression:or,createIfStatement:UP,createInterpolation:DP,createObjectExpression:In,createObjectProperty:Nt,createReturnStatement:kP,createRoot:j0,createSequenceExpression:BP,createSimpleExpression:Ze,createStructuralDirectiveTransform:Ld,createTemplateLiteral:OP,createTransformContext:vE,createVNodeCall:so,errorMessages:XP,extractIdentifiers:wi,findDir:_n,findProp:La,forAliasRE:cE,generate:xE,generateCodeFrame:wg,getBaseTransformPreset:FE,getConstantType:Tn,getMemoedVNodeCall:lE,getVNodeBlockHelper:lr,getVNodeHelper:ar,hasDynamicKeyVBind:oE,hasScopeRef:Yn,helperNameMap:rr,injectProp:pa,isCoreComponent:Rd,isFnExpression:sE,isFnExpressionBrowser:iE,isFnExpressionNode:lN,isFunctionType:eN,isInDestructureAssignment:jP,isInNewExpression:YP,isMemberExpression:wd,isMemberExpressionBrowser:nE,isMemberExpressionNode:oN,isReferencedIdentifier:qP,isSimpleIdentifier:Na,isSlotOutlet:da,isStaticArgOf:os,isStaticExp:vn,isStaticProperty:J0,isStaticPropertyKey:tN,isTemplateNode:oo,isText:Vl,isVSlot:Id,locStub:Yt,noopDirectiveTransform:kE,parse:xL,parserOptions:jd,processExpression:Wl,processFor:RE,processIf:bE,processSlotOutlet:UE,registerRuntimeHelpers:q0,resolveComponentType:DE,stringifyExpression:TE,toValidAssetId:ao,trackSlotScopes:wE,trackVForSlotScopes:jN,transform:EE,transformBind:AE,transformElement:LE,transformExpression:GN,transformModel:Bd,transformOn:Fd,transformStyle:VE,traverseNode:Da,unwrapTSNode:eE,walkBlockDeclarations:ZP,walkFunctionParams:KP,walkIdentifiers:$P,warnDeprecation:GP},Symbol.toStringTag,{value:"Module"})),ML=Ed(yL),TL=Ed(jM),bL=Ed(CS);/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var yg;function AL(){return yg||(yg=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ML,n=TL,i=bL;function s(l){var c=Object.create(null);if(l)for(var u in l)c[u]=l[u];return c.default=l,Object.freeze(c)}var r=s(n);const o=Object.create(null);function a(l,c){if(!i.isString(l))if(l.nodeType)l=l.innerHTML;else return i.NOOP;const u=i.genCacheKey(l,c),f=o[u];if(f)return f;if(l[0]==="#"){const g=document.querySelector(l);l=g?g.innerHTML:""}const h=i.extend({hoistStatic:!0,onError:void 0,onWarn:i.NOOP},c);!h.isCustomElement&&typeof customElements<"u"&&(h.isCustomElement=g=>!!customElements.get(g));const{code:d}=e.compile(l,h),_=new Function("Vue",d)(r);return _._rc=!0,o[u]=_}n.registerRuntimeCompiler(a),t.compile=a,Object.keys(n).forEach(function(l){l!=="default"&&!Object.prototype.hasOwnProperty.call(t,l)&&(t[l]=n[l])})}(rf)),rf}var Mg;function CL(){return Mg||(Mg=1,sf.exports=AL()),sf.exports}var RL=Oo.exports,Tg;function wL(){return Tg||(Tg=1,function(t,e){(function(n,i){i(e,CL())})(RL,function(n,i){const s=/^[a-z0-9]+(-[a-z0-9]+)*$/,r=(T,O,U,F="")=>{const B=T.split(":");if(T.slice(0,1)==="@"){if(B.length<2||B.length>3)return null;F=B.shift().slice(1)}if(B.length>3||!B.length)return null;if(B.length>1){const Te=B.pop(),be=B.pop(),Se={provider:B.length>0?B[0]:F,prefix:be,name:Te};return O&&!o(Se)?null:Se}const J=B[0],fe=J.split("-");if(fe.length>1){const Te={provider:F,prefix:fe.shift(),name:fe.join("-")};return O&&!o(Te)?null:Te}if(U&&F===""){const Te={provider:F,prefix:"",name:J};return O&&!o(Te,U)?null:Te}return null},o=(T,O)=>T?!!((O&&T.prefix===""||T.prefix)&&T.name):!1,a=Object.freeze({left:0,top:0,width:16,height:16}),l=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),c=Object.freeze({...a,...l}),u=Object.freeze({...c,body:"",hidden:!1});function f(T,O){const U={};!T.hFlip!=!O.hFlip&&(U.hFlip=!0),!T.vFlip!=!O.vFlip&&(U.vFlip=!0);const F=((T.rotate||0)+(O.rotate||0))%4;return F&&(U.rotate=F),U}function h(T,O){const U=f(T,O);for(const F in u)F in l?F in T&&!(F in U)&&(U[F]=l[F]):F in O?U[F]=O[F]:F in T&&(U[F]=T[F]);return U}function d(T,O){const U=T.icons,F=T.aliases||Object.create(null),B=Object.create(null);function J(fe){if(U[fe])return B[fe]=[];if(!(fe in B)){B[fe]=null;const Te=F[fe]&&F[fe].parent,be=Te&&J(Te);be&&(B[fe]=[Te].concat(be))}return B[fe]}return Object.keys(U).concat(Object.keys(F)).forEach(J),B}function _(T,O,U){const F=T.icons,B=T.aliases||Object.create(null);let J={};function fe(Te){J=h(F[Te]||B[Te],J)}return fe(O),U.forEach(fe),h(T,J)}function g(T,O){const U=[];if(typeof T!="object"||typeof T.icons!="object")return U;T.not_found instanceof Array&&T.not_found.forEach(B=>{O(B,null),U.push(B)});const F=d(T);for(const B in F){const J=F[B];J&&(O(B,_(T,B,J)),U.push(B))}return U}const m={provider:"",aliases:{},not_found:{},...a};function p(T,O){for(const U in O)if(U in T&&typeof T[U]!=typeof O[U])return!1;return!0}function b(T){if(typeof T!="object"||T===null)return null;const O=T;if(typeof O.prefix!="string"||!T.icons||typeof T.icons!="object"||!p(T,m))return null;const U=O.icons;for(const B in U){const J=U[B];if(!B||typeof J.body!="string"||!p(J,u))return null}const F=O.aliases||Object.create(null);for(const B in F){const J=F[B],fe=J.parent;if(!B||typeof fe!="string"||!U[fe]&&!F[fe]||!p(J,u))return null}return O}const v=Object.create(null);function E(T,O){return{provider:T,prefix:O,icons:Object.create(null),missing:new Set}}function w(T,O){const U=v[T]||(v[T]=Object.create(null));return U[O]||(U[O]=E(T,O))}function C(T,O){return b(O)?g(O,(U,F)=>{F?T.icons[U]=F:T.missing.add(U)}):[]}function P(T,O,U){try{if(typeof U.body=="string")return T.icons[O]={...U},!0}catch{}return!1}function L(T,O){let U=[];return(typeof T=="string"?[T]:Object.keys(v)).forEach(B=>{(typeof B=="string"&&typeof O=="string"?[O]:Object.keys(v[B]||{})).forEach(fe=>{const Te=w(B,fe);U=U.concat(Object.keys(Te.icons).map(be=>(B!==""?"@"+B+":":"")+fe+":"+be))})}),U}let M=!1;function y(T){return typeof T=="boolean"&&(M=T),M}function N(T){const O=typeof T=="string"?r(T,!0,M):T;if(O){const U=w(O.provider,O.prefix),F=O.name;return U.icons[F]||(U.missing.has(F)?null:void 0)}}function D(T,O){const U=r(T,!0,M);if(!U)return!1;const F=w(U.provider,U.prefix);return O?P(F,U.name,O):(F.missing.add(U.name),!0)}function k(T,O){if(typeof T!="object")return!1;if(typeof O!="string"&&(O=T.provider||""),M&&!O&&!T.prefix){let B=!1;return b(T)&&(T.prefix="",g(T,(J,fe)=>{D(J,fe)&&(B=!0)})),B}const U=T.prefix;if(!o({prefix:U,name:"a"}))return!1;const F=w(O,U);return!!C(F,T)}function j(T){return!!N(T)}function te(T){const O=N(T);return O&&{...c,...O}}const z=Object.freeze({width:null,height:null}),re=Object.freeze({...z,...l}),H=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ve=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ae(T,O,U){if(O===1)return T;if(U=U||100,typeof T=="number")return Math.ceil(T*O*U)/U;if(typeof T!="string")return T;const F=T.split(H);if(F===null||!F.length)return T;const B=[];let J=F.shift(),fe=ve.test(J);for(;;){if(fe){const Te=parseFloat(J);isNaN(Te)?B.push(J):B.push(Math.ceil(Te*O*U)/U)}else B.push(J);if(J=F.shift(),J===void 0)return B.join("");fe=!fe}}function Oe(T,O="defs"){let U="";const F=T.indexOf("<"+O);for(;F>=0;){const B=T.indexOf(">",F),J=T.indexOf("</"+O);if(B===-1||J===-1)break;const fe=T.indexOf(">",J);if(fe===-1)break;U+=T.slice(B+1,J).trim(),T=T.slice(0,F).trim()+T.slice(fe+1)}return{defs:U,content:T}}function Ge(T,O){return T?"<defs>"+T+"</defs>"+O:O}function st(T,O,U){const F=Oe(T);return Ge(F.defs,O+F.content+U)}const ce=T=>T==="unset"||T==="undefined"||T==="none";function Me(T,O){const U={...c,...T},F={...re,...O},B={left:U.left,top:U.top,width:U.width,height:U.height};let J=U.body;[U,F].forEach(Ct=>{const ke=[],zt=Ct.hFlip,Ut=Ct.vFlip;let yt=Ct.rotate;zt?Ut?yt+=2:(ke.push("translate("+(B.width+B.left).toString()+" "+(0-B.top).toString()+")"),ke.push("scale(-1 1)"),B.top=B.left=0):Ut&&(ke.push("translate("+(0-B.left).toString()+" "+(B.height+B.top).toString()+")"),ke.push("scale(1 -1)"),B.top=B.left=0);let Mt;switch(yt<0&&(yt-=Math.floor(yt/4)*4),yt=yt%4,yt){case 1:Mt=B.height/2+B.top,ke.unshift("rotate(90 "+Mt.toString()+" "+Mt.toString()+")");break;case 2:ke.unshift("rotate(180 "+(B.width/2+B.left).toString()+" "+(B.height/2+B.top).toString()+")");break;case 3:Mt=B.width/2+B.left,ke.unshift("rotate(-90 "+Mt.toString()+" "+Mt.toString()+")");break}yt%2===1&&(B.left!==B.top&&(Mt=B.left,B.left=B.top,B.top=Mt),B.width!==B.height&&(Mt=B.width,B.width=B.height,B.height=Mt)),ke.length&&(J=st(J,'<g transform="'+ke.join(" ")+'">',"</g>"))});const fe=F.width,Te=F.height,be=B.width,Se=B.height;let ze,Ve;fe===null?(Ve=Te===null?"1em":Te==="auto"?Se:Te,ze=Ae(Ve,be/Se)):(ze=fe==="auto"?be:fe,Ve=Te===null?Ae(ze,Se/be):Te==="auto"?Se:Te);const rt={},It=(Ct,ke)=>{ce(ke)||(rt[Ct]=ke.toString())};It("width",ze),It("height",Ve);const wt=[B.left,B.top,be,Se];return rt.viewBox=wt.join(" "),{attributes:rt,viewBox:wt,body:J}}const Ie=/\sid="(\S+)"/g,G="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ue=0;function pe(T,O=G){const U=[];let F;for(;F=Ie.exec(T);)U.push(F[1]);if(!U.length)return T;const B="suffix"+(Math.random()*16777216|Date.now()).toString(16);return U.forEach(J=>{const fe=typeof O=="function"?O(J):O+(ue++).toString(),Te=J.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");T=T.replace(new RegExp('([#;"])('+Te+')([")]|\\.[a-z])',"g"),"$1"+fe+B+"$3")}),T=T.replace(new RegExp(B,"g"),""),T}const he=Object.create(null);function He(T,O){he[T]=O}function $e(T){return he[T]||he[""]}function I(T){let O;if(typeof T.resources=="string")O=[T.resources];else if(O=T.resources,!(O instanceof Array)||!O.length)return null;return{resources:O,path:T.path||"/",maxURL:T.maxURL||500,rotate:T.rotate||750,timeout:T.timeout||5e3,random:T.random===!0,index:T.index||0,dataAfterTimeout:T.dataAfterTimeout!==!1}}const S=Object.create(null),Y=["https://api.simplesvg.com","https://api.unisvg.com"],oe=[];for(;Y.length>0;)Y.length===1||Math.random()>.5?oe.push(Y.shift()):oe.push(Y.pop());S[""]=I({resources:["https://api.iconify.design"].concat(oe)});function Q(T,O){const U=I(O);return U===null?!1:(S[T]=U,!0)}function ee(T){return S[T]}function ge(){return Object.keys(S)}let A=(()=>{let T;try{if(T=fetch,typeof T=="function")return T}catch{}})();function x(T){A=T}function V(){return A}function X(T,O){const U=ee(T);if(!U)return 0;let F;if(!U.maxURL)F=0;else{let B=0;U.resources.forEach(fe=>{B=Math.max(B,fe.length)});const J=O+".json?icons=";F=U.maxURL-B-U.path.length-J.length}return F}function Z(T){return T===404}const K=(T,O,U)=>{const F=[],B=X(T,O),J="icons";let fe={type:J,provider:T,prefix:O,icons:[]},Te=0;return U.forEach((be,Se)=>{Te+=be.length+1,Te>=B&&Se>0&&(F.push(fe),fe={type:J,provider:T,prefix:O,icons:[]},Te=be.length),fe.icons.push(be)}),F.push(fe),F};function xe(T){if(typeof T=="string"){const O=ee(T);if(O)return O.path}return"/"}const Ee={prepare:K,send:(T,O,U)=>{if(!A){U("abort",424);return}let F=xe(O.provider);switch(O.type){case"icons":{const J=O.prefix,Te=O.icons.join(","),be=new URLSearchParams({icons:Te});F+=J+".json?"+be.toString();break}case"custom":{const J=O.uri;F+=J.slice(0,1)==="/"?J.slice(1):J;break}default:U("abort",400);return}let B=503;A(T+F).then(J=>{const fe=J.status;if(fe!==200){setTimeout(()=>{U(Z(fe)?"abort":"next",fe)});return}return B=501,J.json()}).then(J=>{if(typeof J!="object"||J===null){setTimeout(()=>{J===404?U("abort",J):U("next",B)});return}setTimeout(()=>{U("success",J)})}).catch(()=>{U("next",B)})}};function Ye(T){const O={loaded:[],missing:[],pending:[]},U=Object.create(null);T.sort((B,J)=>B.provider!==J.provider?B.provider.localeCompare(J.provider):B.prefix!==J.prefix?B.prefix.localeCompare(J.prefix):B.name.localeCompare(J.name));let F={provider:"",prefix:"",name:""};return T.forEach(B=>{if(F.name===B.name&&F.prefix===B.prefix&&F.provider===B.provider)return;F=B;const J=B.provider,fe=B.prefix,Te=B.name,be=U[J]||(U[J]=Object.create(null)),Se=be[fe]||(be[fe]=w(J,fe));let ze;Te in Se.icons?ze=O.loaded:fe===""||Se.missing.has(Te)?ze=O.missing:ze=O.pending;const Ve={provider:J,prefix:fe,name:Te};ze.push(Ve)}),O}function me(T,O){T.forEach(U=>{const F=U.loaderCallbacks;F&&(U.loaderCallbacks=F.filter(B=>B.id!==O))})}function Ce(T){T.pendingCallbacksFlag||(T.pendingCallbacksFlag=!0,setTimeout(()=>{T.pendingCallbacksFlag=!1;const O=T.loaderCallbacks?T.loaderCallbacks.slice(0):[];if(!O.length)return;let U=!1;const F=T.provider,B=T.prefix;O.forEach(J=>{const fe=J.icons,Te=fe.pending.length;fe.pending=fe.pending.filter(be=>{if(be.prefix!==B)return!0;const Se=be.name;if(T.icons[Se])fe.loaded.push({provider:F,prefix:B,name:Se});else if(T.missing.has(Se))fe.missing.push({provider:F,prefix:B,name:Se});else return U=!0,!0;return!1}),fe.pending.length!==Te&&(U||me([T],J.id),J.callback(fe.loaded.slice(0),fe.missing.slice(0),fe.pending.slice(0),J.abort))})}))}let Be=0;function We(T,O,U){const F=Be++,B=me.bind(null,U,F);if(!O.pending.length)return B;const J={id:F,icons:O,callback:T,abort:B};return U.forEach(fe=>{(fe.loaderCallbacks||(fe.loaderCallbacks=[])).push(J)}),B}function Ue(T,O=!0,U=!1){const F=[];return T.forEach(B=>{const J=typeof B=="string"?r(B,O,U):B;J&&F.push(J)}),F}var je={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Xe(T,O,U,F){const B=T.resources.length,J=T.random?Math.floor(Math.random()*B):T.index;let fe;if(T.random){let ct=T.resources.slice(0);for(fe=[];ct.length>1;){const Dn=Math.floor(Math.random()*ct.length);fe.push(ct[Dn]),ct=ct.slice(0,Dn).concat(ct.slice(Dn+1))}fe=fe.concat(ct)}else fe=T.resources.slice(J).concat(T.resources.slice(0,J));const Te=Date.now();let be="pending",Se=0,ze,Ve=null,rt=[],It=[];typeof F=="function"&&It.push(F);function wt(){Ve&&(clearTimeout(Ve),Ve=null)}function Ct(){be==="pending"&&(be="aborted"),wt(),rt.forEach(ct=>{ct.status==="pending"&&(ct.status="aborted")}),rt=[]}function ke(ct,Dn){Dn&&(It=[]),typeof ct=="function"&&It.push(ct)}function zt(){return{startTime:Te,payload:O,status:be,queriesSent:Se,queriesPending:rt.length,subscribe:ke,abort:Ct}}function Ut(){be="failed",It.forEach(ct=>{ct(void 0,ze)})}function yt(){rt.forEach(ct=>{ct.status==="pending"&&(ct.status="aborted")}),rt=[]}function Mt(ct,Dn,vo){const Xa=Dn!=="success";switch(rt=rt.filter(Rs=>Rs!==ct),be){case"pending":break;case"failed":if(Xa||!T.dataAfterTimeout)return;break;default:return}if(Dn==="abort"){ze=vo,Ut();return}if(Xa){ze=vo,rt.length||(fe.length?Cs():Ut());return}if(wt(),yt(),!T.random){const Rs=T.resources.indexOf(ct.resource);Rs!==-1&&Rs!==T.index&&(T.index=Rs)}be="completed",It.forEach(Rs=>{Rs(vo)})}function Cs(){if(be!=="pending")return;wt();const ct=fe.shift();if(ct===void 0){if(rt.length){Ve=setTimeout(()=>{wt(),be==="pending"&&(yt(),Ut())},T.timeout);return}Ut();return}const Dn={status:"pending",resource:ct,callback:(vo,Xa)=>{Mt(Dn,vo,Xa)}};rt.push(Dn),Se++,Ve=setTimeout(Cs,T.rotate),U(ct,O,Dn.callback)}return setTimeout(Cs),zt}function ut(T){const O={...je,...T};let U=[];function F(){U=U.filter(Te=>Te().status==="pending")}function B(Te,be,Se){const ze=Xe(O,Te,be,(Ve,rt)=>{F(),Se&&Se(Ve,rt)});return U.push(ze),ze}function J(Te){return U.find(be=>Te(be))||null}return{query:B,find:J,setIndex:Te=>{O.index=Te},getIndex:()=>O.index,cleanup:F}}function W(){}const Re=Object.create(null);function le(T){if(!Re[T]){const O=ee(T);if(!O)return;const U=ut(O),F={config:O,redundancy:U};Re[T]=F}return Re[T]}function de(T,O,U){let F,B;if(typeof T=="string"){const J=$e(T);if(!J)return U(void 0,424),W;B=J.send;const fe=le(T);fe&&(F=fe.redundancy)}else{const J=I(T);if(J){F=ut(J);const fe=T.resources?T.resources[0]:"",Te=$e(fe);Te&&(B=Te.send)}}return!F||!B?(U(void 0,424),W):F.query(O,B,U)().abort}function Le(){}function Ne(T){T.iconsLoaderFlag||(T.iconsLoaderFlag=!0,setTimeout(()=>{T.iconsLoaderFlag=!1,Ce(T)}))}function Je(T){const O=[],U=[];return T.forEach(F=>{(F.match(s)?O:U).push(F)}),{valid:O,invalid:U}}function vt(T,O,U){function F(){const B=T.pendingIcons;O.forEach(J=>{B&&B.delete(J),T.icons[J]||T.missing.add(J)})}if(U&&typeof U=="object")try{if(!C(T,U).length){F();return}}catch(B){console.error(B)}F(),Ne(T)}function Ht(T,O){T instanceof Promise?T.then(U=>{O(U)}).catch(()=>{O(null)}):O(T)}function dt(T,O){T.iconsToLoad?T.iconsToLoad=T.iconsToLoad.concat(O).sort():T.iconsToLoad=O,T.iconsQueueFlag||(T.iconsQueueFlag=!0,setTimeout(()=>{T.iconsQueueFlag=!1;const{provider:U,prefix:F}=T,B=T.iconsToLoad;if(delete T.iconsToLoad,!B||!B.length)return;const J=T.loadIcon;if(T.loadIcons&&(B.length>1||!J)){Ht(T.loadIcons(B,F,U),ze=>{vt(T,B,ze)});return}if(J){B.forEach(ze=>{const Ve=J(ze,F,U);Ht(Ve,rt=>{const It=rt?{prefix:F,icons:{[ze]:rt}}:null;vt(T,[ze],It)})});return}const{valid:fe,invalid:Te}=Je(B);if(Te.length&&vt(T,Te,null),!fe.length)return;const be=F.match(s)?$e(U):null;if(!be){vt(T,fe,null);return}be.prepare(U,F,fe).forEach(ze=>{de(U,ze,Ve=>{vt(T,ze.icons,Ve)})})}))}const hn=(T,O)=>{const U=Ue(T,!0,y()),F=Ye(U);if(!F.pending.length){let be=!0;return O&&setTimeout(()=>{be&&O(F.loaded,F.missing,F.pending,Le)}),()=>{be=!1}}const B=Object.create(null),J=[];let fe,Te;return F.pending.forEach(be=>{const{provider:Se,prefix:ze}=be;if(ze===Te&&Se===fe)return;fe=Se,Te=ze,J.push(w(Se,ze));const Ve=B[Se]||(B[Se]=Object.create(null));Ve[ze]||(Ve[ze]=[])}),F.pending.forEach(be=>{const{provider:Se,prefix:ze,name:Ve}=be,rt=w(Se,ze),It=rt.pendingIcons||(rt.pendingIcons=new Set);It.has(Ve)||(It.add(Ve),B[Se][ze].push(Ve))}),J.forEach(be=>{const Se=B[be.provider][be.prefix];Se.length&&dt(be,Se)}),O?We(O,F,J):Le},Xn=T=>new Promise((O,U)=>{const F=typeof T=="string"?r(T,!0):T;if(!F){U(T);return}hn([F||T],B=>{if(B.length&&F){const J=N(F);if(J){O({...c,...J});return}}U(T)})});function Ua(T,O,U){w(U||"",O).loadIcons=T}function Fa(T,O,U){w(U||"",O).loadIcon=T}function di(T,O){const U={...T};for(const F in O){const B=O[F],J=typeof B;F in z?(B===null||B&&(J==="string"||J==="number"))&&(U[F]=B):J===typeof U[F]&&(U[F]=F==="rotate"?B%4:B)}return U}const mo=/[\s,]+/;function Ba(T,O){O.split(mo).forEach(U=>{switch(U.trim()){case"horizontal":T.hFlip=!0;break;case"vertical":T.vFlip=!0;break}})}function ka(T,O=0){const U=T.replace(/^-?[0-9.]*/,"");function F(B){for(;B<0;)B+=4;return B%4}if(U===""){const B=parseInt(T);return isNaN(B)?0:F(B)}else if(U!==T){let B=0;switch(U){case"%":B=25;break;case"deg":B=90}if(B){let J=parseFloat(T.slice(0,T.length-U.length));return isNaN(J)?0:(J=J/B,J%1===0?F(J):0)}}return O}function hr(T,O){let U=T.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const F in O)U+=" "+F+'="'+O[F]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+U+">"+T+"</svg>"}function Va(T){return T.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function dr(T){return"data:image/svg+xml,"+Va(T)}function Ha(T){return'url("'+dr(T)+'")'}const go={...re,inline:!1},ou={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},au={display:"inline-block"},_o={backgroundColor:"currentColor"},za={backgroundColor:"transparent"},Ga={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Wa={webkitMask:_o,mask:_o,background:za};for(const T in Wa){const O=Wa[T];for(const U in Ga)O[T+U]=Ga[U]}const R={};["horizontal","vertical"].forEach(T=>{const O=T.slice(0,1)+"Flip";R[T+"-flip"]=O,R[T.slice(0,1)+"-flip"]=O,R[T+"Flip"]=O});function $(T){return T+(T.match(/^[-0-9.]+$/)?"px":"")}const ne=(T,O)=>{const U=di(go,O),F={...ou},B=O.mode||"svg",J={},fe=O.style,Te=typeof fe=="object"&&!(fe instanceof Array)?fe:{};for(let Ct in O){const ke=O[Ct];if(ke!==void 0)switch(Ct){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":U[Ct]=ke===!0||ke==="true"||ke===1;break;case"flip":typeof ke=="string"&&Ba(U,ke);break;case"color":J.color=ke;break;case"rotate":typeof ke=="string"?U[Ct]=ka(ke):typeof ke=="number"&&(U[Ct]=ke);break;case"ariaHidden":case"aria-hidden":ke!==!0&&ke!=="true"&&delete F["aria-hidden"];break;default:{const zt=R[Ct];zt?(ke===!0||ke==="true"||ke===1)&&(U[zt]=!0):go[Ct]===void 0&&(F[Ct]=ke)}}}const be=Me(T,U),Se=be.attributes;if(U.inline&&(J.verticalAlign="-0.125em"),B==="svg"){F.style={...J,...Te},Object.assign(F,Se);let Ct=0,ke=O.id;return typeof ke=="string"&&(ke=ke.replace(/-/g,"_")),F.innerHTML=pe(be.body,ke?()=>ke+"ID"+Ct++:"iconifyVue"),i.h("svg",F)}const{body:ze,width:Ve,height:rt}=T,It=B==="mask"||(B==="bg"?!1:ze.indexOf("currentColor")!==-1),wt=hr(ze,{...Se,width:Ve+"",height:rt+""});return F.style={...J,"--svg":Ha(wt),width:$(Se.width),height:$(Se.height),...au,...It?_o:za,...Te},i.h("span",F)};function ie(T){}function q(T){}if(y(!0),He("",Ee),typeof document<"u"&&typeof window<"u"){const T=window;if(T.IconifyPreload!==void 0){const O=T.IconifyPreload,U="Invalid IconifyPreload syntax.";typeof O=="object"&&O!==null&&(O instanceof Array?O:[O]).forEach(F=>{try{(typeof F!="object"||F===null||F instanceof Array||typeof F.icons!="object"||typeof F.prefix!="string"||!k(F))&&console.error(U)}catch{console.error(U)}})}if(T.IconifyProviders!==void 0){const O=T.IconifyProviders;if(typeof O=="object"&&O!==null)for(let U in O){const F="IconifyProviders["+U+"] is invalid.";try{const B=O[U];if(typeof B!="object"||!B||B.resources===void 0)continue;Q(U,B)||console.error(F)}catch{console.error(F)}}}}const ye={...c,body:""},Pe=i.defineComponent({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(T,O,U){if(typeof T=="object"&&T!==null&&typeof T.body=="string")return this._name="",this.abortLoading(),{data:T};let F;if(typeof T!="string"||(F=r(T,!1,!0))===null)return this.abortLoading(),null;let B=N(F);if(!B)return(!this._loadingIcon||this._loadingIcon.name!==T)&&(this.abortLoading(),this._name="",B!==null&&(this._loadingIcon={name:T,abort:hn([F],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==T&&(this._name=T,O&&O(T)),U){B=Object.assign({},B);const fe=U(B.body,F.name,F.prefix,F.provider);typeof fe=="string"&&(B.body=fe)}const J=["iconify"];return F.prefix!==""&&J.push("iconify--"+F.prefix),F.provider!==""&&J.push("iconify--"+F.provider),{data:B,classes:J}}},render(){this.counter;const T=this.$attrs,O=this.iconMounted||T.ssr?this.getIcon(T.icon,T.onLoad,T.customise):null;if(!O)return ne(ye,T);let U=T;return O.classes&&(U={...T,class:(typeof T.class=="string"?T.class+" ":"")+O.classes.join(" ")}),ne({...c,...O.data},U)}}),Fe={getAPIConfig:ee,setAPIModule:He,sendAPIQuery:de,setFetch:x,getFetch:V,listAPIProviders:ge};n.Icon=Pe,n._api=Fe,n.addAPIProvider=Q,n.addCollection=k,n.addIcon=D,n.buildIcon=Me,n.calculateSize=Ae,n.disableCache=q,n.enableCache=ie,n.getIcon=te,n.iconExists=j,n.iconLoaded=j,n.listIcons=L,n.loadIcon=Xn,n.loadIcons=hn,n.replaceIDs=pe,n.setCustomIconLoader=Fa,n.setCustomIconsLoader=Ua})}(Oo,Oo.exports)),Oo.exports}var IL=wL();const PL={class:"container"},NL={data(){return{data:MP}}},LL=()=>{window.scrollTo({top:0,behavior:"smooth"})},WE=cs(null),af=()=>{var t;(t=WE.value)==null||t.closeMenu()},DL=hi({...NL,__name:"App",setup(t){return(e,n)=>{const i=jh("RouterLink");return en(),Nn(Dt,null,[tt(eA,{class:"top-bar",title:e.$route.name||e.data.brand,brand:e.data.brand,ref_key:"topBarRef",ref:WE},{default:rs(()=>[mt("nav",null,[tt(i,{onClick:n[0]||(n[0]=s=>af()),to:"/"},{default:rs(()=>n[4]||(n[4]=[Qs("Home")])),_:1}),tt(i,{onClick:n[1]||(n[1]=s=>af()),to:"/about"},{default:rs(()=>n[5]||(n[5]=[Qs("About")])),_:1}),tt(i,{onClick:n[2]||(n[2]=s=>af()),to:"/products"},{default:rs(()=>n[6]||(n[6]=[Qs("Products")])),_:1})])]),_:1},8,["title","brand"]),tt(aA,{title:e.$route.name||e.data.brand,brand:e.data.brand},null,8,["title","brand"]),n[7]||(n[7]=mt("video",{class:"background",src:"https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4",autoplay:"",loop:"",muted:"",width:"100%",height:"100%",style:{"object-fit":"cover"}},null,-1)),mt("div",PL,[tt(Vn(Zv),{data:e.data},null,8,["data"])]),tt(Vn(IL.Icon),{icon:"mingcute:up-line",class:"up-btn",onClick:n[3]||(n[3]=s=>LL())}),tt(wP,{data:e.data.contacts},null,8,["data"])],64)}}}),OL=bs(DL,[["__scopeId","data-v-59a9fde3"]]),UL="modulepreload",FL=function(t){return"/"+t},bg={},lf=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=FL(l),l in bg)return;bg[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":UL,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},BL={},kL={class:"banner"},VL={class:"wrapper"},HL={class:"content"},zL={style:{"justify-content":"end",display:"flex"}};function GL(t,e){const n=jh("RouterLink");return en(),Nn("div",kL,[mt("div",VL,[e[2]||(e[2]=mt("h1",{class:"title"},"Latest Products",-1)),mt("div",HL,[e[1]||(e[1]=mt("div",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. ",-1)),mt("div",zL,[tt(n,{class:"route-btn",to:"/about"},{default:rs(()=>e[0]||(e[0]=[Qs("More(TODO)")])),_:1})])])])])}const WL=bs(BL,[["render",GL],["__scopeId","data-v-fee5cbd6"]]),XL={props:["data"]},$L={class:"wrapper"},qL={class:"column left"},jL=["src"],YL={class:"column right"},KL=["src"];function ZL(t,e,n,i,s,r){return en(),Nn("div",$L,[mt("div",qL,[mt("img",{src:n.data.mission.banner,alt:"Left Image",class:"image",style:{"min-height":"100px"}},null,8,jL),e[0]||(e[0]=mt("h1",null,"Our Mission",-1)),e[1]||(e[1]=mt("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. ",-1))]),mt("div",YL,[mt("img",{src:n.data.mission.image,alt:"Right Image",class:"image",style:{"min-height":"100%"}},null,8,KL)])])}const JL=bs(XL,[["render",ZL],["__scopeId","data-v-78a6dca7"]]),QL={props:["data"]},eD=hi({...QL,__name:"HomeView",setup(t){return(e,n)=>(en(),Nn(Dt,null,[tt(gP,{class:"logo-animation"}),mt("main",null,[tt(JL,{data:t.data[e.$route.meta.path??"home"]},null,8,["data"]),tt(WL)])],64))}}),tD=bs(eD,[["__scopeId","data-v-422dee32"]]),nD=YT({history:bT("/"),scrollBehavior(t,e,n){return{top:0}},routes:[{path:"/",name:"Tomorrow's Brain",meta:{path:"home"},component:tD},{path:"/about",name:"About Us",component:()=>lf(()=>import("./AboutView-BSaw_OTI.js"),__vite__mapDeps([0,1]))},{path:"/products",name:"Our Products",component:()=>lf(()=>import("./ProductsView-epOWcW7c.js"),__vite__mapDeps([2,3]))},{path:"/products/:productId",name:"Our Product",component:()=>lf(()=>import("./ProductDetailView-Btmpl4rA.js"),__vite__mapDeps([4,5]))}]}),XE=oc(OL);XE.use(nD);XE.mount("#app");export{Dt as F,bs as _,mt as a,tt as b,Nn as c,hi as d,yf as e,IL as i,en as o,I_ as r,as as t,Vn as u};
