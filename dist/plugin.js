(()=>{"use strict";const e={filename:"design-tokens",extension:".tokens.json",nameConversion:"default",tokenFormat:"standard",compression:!1,urlJsonCompression:!0,serverUrl:void 0,eventType:"update-tokens",accessToken:void 0,acceptHeader:"application/vnd.github.everest-preview+json",contentType:"text/plain;charset=UTF-8",authType:"token",reference:"main",exclusionPrefix:"",alias:"alias, ref, reference",keyInName:!1,prefixInName:!0,prefix:{color:"color",gradient:"gradient",typography:"typography",font:"font",effect:"effect",grid:"grid",border:"border, borders",breakpoint:"breakpoint, breakpoints",radius:"radius, radii",size:"size, sizes",spacing:"spacing",motion:"motion",opacity:"opacity, opacities"},exports:{color:!0,gradient:!0,font:!0,typography:!0,effect:!0,grid:!0,border:!0,breakpoint:!0,radius:!0,size:!0,spacing:!0,motion:!0,opacity:!0}},t={ui:{generalSettings:{width:550,height:755},export:{width:550,height:356},urlExport:{width:550,height:650}},key:{lastVersionSettingsOpened:"lastVersionSettingsOpened",fileId:"fileId",settings:"settings",extensionPluginData:"org.lukasoppermann.figmaDesignTokens",extensionFigmaStyleId:"styleId",extensionAlias:"alias",authType:{token:"token",gitlabToken:"gitlab_token",basic:"Basic",bearer:"Bearer"}},exclusionPrefixDefault:["_","."],fileExtensions:[{label:".tokens.json",value:".tokens.json"},{label:".tokens",value:".tokens"},{label:".json",value:".json"}]},i=(e,t=!0)=>!0===t?JSON.stringify(e):JSON.stringify(e,null,2),n=(e,t)=>Object.fromEntries(Object.entries(e).map((([i,n])=>void 0!==n&&typeof t[i]!=typeof n?[i,e[i]]:[i,t[i]])));var a=function(e,t,i,n){return new(i||(i=Promise))((function(a,o){function r(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))};const o={generalSettings:"generalSettings",export:"export",sendSettings:"sendSettings",urlExport:"urlExport",help:"help",demo:"demo",openUrl:"openUrl",reset:"reset",saveSettings:"saveSettings",closePlugin:"closePlugin"},r="6.4.0";const s=e=>{return i=void 0,n=void 0,o=function*(){const i=yield e.clientStorage.getAsync(t.key.lastVersionSettingsOpened),n=((e,t="1.0.0")=>{const[i,n,a]=t.split("."),[o,r,s]=e.split(".");return i<o?"major":n<r?"minor":a<s?"patch":void 0})(r,i);return i&&i===r||(yield e.clientStorage.setAsync(t.key.lastVersionSettingsOpened,r)),n},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{l(o.next(e))}catch(e){t(e)}}function s(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(r,s)}l((o=o.apply(i,n||[])).next())}));var i,n,a,o},l=e=>{let i=e.root.getPluginData(t.key.fileId);return void 0!==i&&""!==i||(e.root.setPluginData(t.key.fileId,e.root.name+" "+Math.floor(1e9*Math.random())),i=e.root.getPluginData(t.key.fileId)),i},p="color",u="gradient",c="font",d="effect",g="grid",y="border",m="breakpoint",f="radius",x="size",v="spacing",h="motion",b="opacity",k=(e,t=2)=>{if(void 0===e)return;if("number"!=typeof e||"number"!=typeof t)throw new Error(`Invalid parameters, both value "${e}" (${typeof e}) and decimalPlaces "${t}" (${typeof t}) must be of type number`);const i=Math.pow(10,t);return Math.round(e*i)/i},S=(e,t)=>{var i;return{r:k(255*e.r,0),g:k(255*e.g,0),b:k(255*e.b,0),a:k(null!==(i=null!=t?t:e.a)&&void 0!==i?i:1)}},R=e=>"SOLID"===e.type&&!0===e.visible?S(e.color,e.opacity):null,E={fill:{value:{r:0,g:0,b:0,a:0},type:"color"}},A=e=>e?{[t.key.extensionAlias]:e}:{},I={GRADIENT_LINEAR:"linear",GRADIENT_RADIAL:"radial",GRADIENT_ANGULAR:"angular",GRADIENT_DIAMOND:"diamond"},C=([[e,t],[i,n]])=>{const a=Math.atan2(n-t,i-e)*(180/Math.PI)+315;return a>360?a-360:a},O=(e,i)=>e.reduce(((e,n)=>{const a=n.paints.filter((e=>"IMAGE"!==e.type));if(n.paints.length&&0===a.length)return e;n.paints=a;const{alias:o,description:r}=((e="",t)=>{t=t&&0!==t.filter((e=>e)).length?t:["Ref:"];const i=new RegExp("("+t.join("|").toLowerCase()+"):?\\s");let n;const a=e.split(/\r?\n/).filter((e=>!e.toLowerCase().match(i)||(n=e.toLowerCase().replace(i,"").trim(),!1)));return{alias:n,description:a.join("\n")}})(n.description,i.alias),s=(l=n.paints[0],["GRADIENT_LINEAR","GRADIENT_RADIAL","GRADIENT_ANGULAR","GRADIENT_DIAMOND"].includes(null==l?void 0:l.type));var l;const c=n.paints.length?n.paints.map((e=>(e=>"SOLID"===e.type?{fill:{value:R(e),type:"color"}}:["GRADIENT_LINEAR","GRADIENT_RADIAL","GRADIENT_ANGULAR","GRADIENT_DIAMOND"].includes(e.type)?{gradientType:{value:I[e.type],type:"string"},rotation:{value:C(e.gradientTransform),type:"number",unit:"degree"},stops:e.gradientStops.map((e=>({position:{value:k(e.position),type:"number"},color:{value:S(e.color),type:"color"}}))),opacity:{value:k(e.opacity),type:"number"}}:null)(e))):[E];return[...e,{name:`${s?i.gradient[0]:i.color[0]}/${n.name}`,category:s?"gradient":"color",exportKey:s?u:p,description:r,values:c,extensions:{[t.key.extensionPluginData]:Object.assign({[t.key.extensionFigmaStyleId]:n.id,exportKey:s?u:p},A(o))}}]}),[]),N=(e,i)=>e.filter((e=>e.layoutGrids.length>0)).map((e=>({name:`${i[0]}/${e.name}`,category:"grid",exportKey:g,description:e.description||null,values:e.layoutGrids.map((e=>"GRID"===e.pattern?(e=>({pattern:{value:e.pattern.toLowerCase(),type:"string"},sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}))(e):(e=>{return Object.assign(Object.assign(Object.assign({pattern:{value:e.pattern.toLowerCase(),type:"string"}},void 0!==e.sectionSize&&{sectionSize:{value:e.sectionSize,unit:"pixel",type:"number"}}),{gutterSize:{value:e.gutterSize,unit:"pixel",type:"number"},alignment:{value:e.alignment.toLowerCase(),type:"string"},count:(t=e.count,t===1/0?{value:"auto",type:"string"}:{value:t,type:"number"})}),void 0!==e.offset&&{offset:{value:e.offset,unit:"pixel",type:"number"}});var t})(e))),extensions:{[t.key.extensionPluginData]:{[t.key.extensionFigmaStyleId]:e.id,exportKey:g}}}))),D={NONE:"none",UNDERLINE:"underline",STRIKETHROUGH:"line-through"},L={ORIGINAL:"none",UPPER:"uppercase",LOWER:"lowercase",TITLE:"capitalize"},T={100:100,thin:100,200:200,extralight:200,ultralight:200,extraleicht:200,300:300,light:300,leicht:300,400:400,normal:400,regular:400,buch:400,500:500,medium:500,kraeftig:500,kräftig:500,600:600,semibold:600,demibold:600,halbfett:600,700:700,bold:700,dreiviertelfett:700,800:800,extrabold:800,ultabold:800,fett:800,900:900,black:900,heavy:900,super:900,extrafett:900},P={normal:"normal",condensed:"condensed",expanded:"expanded",extended:"expanded"},w={normal:"normal",italic:"italic",kursiv:"italic",oblique:"oblique"},_=e=>{const t=e.toLowerCase().split(" ");let i=t[0];return["extra","ultra","semi","demi"].includes(t[0])&&["bold","light"].includes(t[1])&&(i=`${t[0]}${t[1]}`),T[i]||400},z=e=>{const t=e.toLowerCase().split(" ");return P[t[t.length-1]]||P[t[t.length-2]]||"normal"},B=e=>{const t=e.toLowerCase().split(" ").pop();return w[t]||"normal"},F=(e,i)=>e.map((e=>({name:`${i[0]}/${e.name}`,category:"font",exportKey:c,description:e.description||void 0,values:{fontSize:{value:e.fontSize,unit:"pixel",type:"number"},textDecoration:{value:D[e.textDecoration],type:"string"},fontFamily:{value:e.fontName.family,type:"string"},fontWeight:{value:_(e.fontName.style),type:"number"},fontStyle:{value:B(e.fontName.style),type:"string"},fontStretch:{value:z(e.fontName.style),type:"string"},_fontStyleOld:{value:e.fontName.style,type:"string"},letterSpacing:{value:k(e.letterSpacing.value),unit:"pixels"===e.letterSpacing.unit.toLowerCase()?"pixel":e.letterSpacing.unit.toLowerCase(),type:"number"},lineHeight:{value:k(e.lineHeight.value)||"normal",unit:"pixels"===e.lineHeight.unit.toLowerCase()?"pixel":e.lineHeight.unit.toLowerCase(),type:Object.prototype.hasOwnProperty.call(e.lineHeight,"value")?"number":"string"},paragraphIndent:{value:e.paragraphIndent,unit:"pixel",type:"number"},paragraphSpacing:{value:e.paragraphSpacing,unit:"pixel",type:"number"},textCase:{value:L[e.textCase],type:"string"}},extensions:{[t.key.extensionPluginData]:{[t.key.extensionFigmaStyleId]:e.id,exportKey:c}}}))),j={LAYER_BLUR:"layerBlur",BACKGROUND_BLUR:"backgroundBlur",DROP_SHADOW:"dropShadow",INNER_SHADOW:"innerShadow"},M=(e,i)=>e.filter((e=>e.effects.length>0)).map((e=>({name:`${i[0]}/${e.name}`,category:"effect",exportKey:d,description:e.description||null,values:e.effects.map((e=>"LAYER_BLUR"===e.type||"BACKGROUND_BLUR"===e.type?(e=>({effectType:{value:j[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"}}))(e):(e=>({effectType:{value:j[e.type],type:"string"},radius:{value:e.radius,unit:"pixel",type:"number"},color:{value:S(e.color),type:"color"},offset:{x:{value:e.offset.x,unit:"pixel",type:"number"},y:{value:e.offset.y,unit:"pixel",type:"number"}},spread:{value:e.spread,unit:"pixel",type:"number"}}))(e))),extensions:{[t.key.extensionPluginData]:{[t.key.extensionFigmaStyleId]:e.id,exportKey:d}}}))),U=e=>t=>{if(!Array.isArray(e))return;const i=t.name.substr(0,t.name.indexOf("/")).replace(/\s+/g,"");return 0!==i.length?e.includes(i):void 0},G=e=>{if(Object.prototype.hasOwnProperty.call(e,"direction"))return{direction:{value:e.direction.toLowerCase(),type:"string"}}},K={CUSTOM_CUBIC_BEZIER:{},LINEAR:{type:"linear",easingFunctionCubicBezier:{x1:0,y1:0,x2:1,y2:1}},EASE_IN:{type:"ease-in",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:1,y2:1}},EASE_OUT:{type:"ease-out",easingFunctionCubicBezier:{x1:0,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_AND_OUT:{type:"ease-in-out",easingFunctionCubicBezier:{x1:.41999998688697815,y1:0,x2:.5799999833106995,y2:1}},EASE_IN_BACK:{type:"ease-in-back",easingFunctionCubicBezier:{x1:.30000001192092896,y1:-.05000000074505806,x2:.699999988079071,y2:-.5}},EASE_OUT_BACK:{type:"ease-out-back",easingFunctionCubicBezier:{x1:.44999998807907104,y1:1.4500000476837158,x2:.800000011920929,y2:1}},EASE_IN_AND_OUT_BACK:{type:"ease-in-out-back",easingFunctionCubicBezier:{x1:.699999988079071,y1:-.4000000059604645,x2:.4000000059604645,y2:1.399999976158142}}},$=Object.keys(K),H=e=>{if("type"in e&&void 0!==K[e.type])return"CUSTOM_CUBIC_BEZIER"===e.type&&(K.CUSTOM_CUBIC_BEZIER={type:"cubic-bezier",easingFunctionCubicBezier:{x1:e.easingFunctionCubicBezier.x1,y1:e.easingFunctionCubicBezier.y1,x2:e.easingFunctionCubicBezier.x2,y2:e.easingFunctionCubicBezier.y2}}),{easing:{value:K[e.type].type,type:"string"},easingFunction:{x1:{value:K[e.type].easingFunctionCubicBezier.x1,type:"number"},x2:{value:K[e.type].easingFunctionCubicBezier.x2,type:"number"},y1:{value:K[e.type].easingFunctionCubicBezier.y1,type:"number"},y2:{value:K[e.type].easingFunctionCubicBezier.y2,type:"number"}}}},J=e=>{var t;return!!(e.reactions.length>0&&"NODE"===(null===(t=e.reactions[0].action)||void 0===t?void 0:t.type)&&null!==e.reactions[0].action.transition&&$.includes(e.reactions[0].action.transition.easing.type))},W=(e,i)=>e.filter(U(i)).filter(J).map((e=>({name:e.name,category:"motion",exportKey:h,description:e.description||null,values:Object.assign(Object.assign({transitionType:{value:e.reactions[0].action.transition.type.toLocaleLowerCase(),type:"string"},duration:{value:Math.round(1e3*(e.reactions[0].action.transition.duration+Number.EPSILON))/1e3,unit:"s",type:"number"}},H(e.reactions[0].action.transition.easing)),G(e.reactions[0].action.transition)),extensions:{[t.key.extensionPluginData]:{exportKey:h}}}))),V=(e,i)=>e.filter(U(i)).map((e=>({name:e.name,category:"spacing",exportKey:v,description:e.description||null,values:{top:{value:k(e.paddingTop,2),unit:"pixel",type:"number"},right:{value:k(e.paddingRight,2),unit:"pixel",type:"number"},bottom:{value:k(e.paddingBottom,2),unit:"pixel",type:"number"},left:{value:k(e.paddingLeft,2),unit:"pixel",type:"number"}},extensions:{[t.key.extensionPluginData]:{exportKey:v}}}))),q={MITER:"miter",BEVEL:"bevel",ROUND:"round"},Z={CENTER:"center",INSIDE:"inside",OUTSIDE:"outside"},Q=(e,i)=>e.filter(U(i)).filter((e=>e.strokes.length>0)).map((e=>({name:e.name,category:"border",exportKey:y,description:e.description||null,values:{strokeAlign:{value:Z[e.strokeAlign],type:"string"},dashPattern:{value:[...void 0!==e.dashPattern&&e.dashPattern.length>0?e.dashPattern:[0,0]],type:"string"},strokeCap:{value:"string"==typeof e.strokeCap?e.strokeCap.toLowerCase():"mixed",type:"string"},strokeJoin:{value:q[e.strokeJoin],type:"string"},strokeMiterLimit:{value:k(e.strokeMiterLimit),unit:"degree",type:"number"},strokeWeight:{value:e.strokeWeight,unit:"pixel",type:"number"},stroke:{value:e.strokes[0],type:"color"}},extensions:{[t.key.extensionPluginData]:{exportKey:y}}}))),Y=(e,i)=>{const n=e=>({topLeft:{value:e.topLeftRadius||0,unit:"pixel",type:"number"},topRight:{value:e.topRightRadius||0,unit:"pixel",type:"number"},bottomRight:{value:e.bottomRightRadius||0,unit:"pixel",type:"number"},bottomLeft:{value:e.bottomLeftRadius||0,unit:"pixel",type:"number"}});return e.filter(U(i)).map((e=>{return{name:e.name,category:"radius",exportKey:f,description:e.description||null,values:Object.assign(Object.assign({},"number"==typeof e.cornerRadius&&{radius:{value:e.cornerRadius,unit:"pixel",type:"number"}}),{radiusType:{value:(i=e.cornerRadius,"number"==typeof i?"single":"mixed"),type:"string"},radii:n(e),smoothing:{value:k(e.cornerSmoothing,2),comment:"Percent as decimal from 0.0 - 1.0",type:"number"}}),extensions:{[t.key.extensionPluginData]:{exportKey:f}}};var i}))},X=(e,i)=>e.filter(U(i)).map((e=>({name:e.name,category:"breakpoint",exportKey:m,description:e.description||null,values:{width:{value:k(e.width,2),unit:"pixel",type:"number"},height:{value:k(e.height,2),unit:"pixel",type:"number"}},extensions:{[t.key.extensionPluginData]:{exportKey:m}}}))),ee=(e,i)=>e.filter(U(i)).map((e=>({name:e.name,category:"opacity",exportKey:b,description:e.description||null,values:{opacity:{value:k(e.opacity,2),type:"number"}},extensions:{[t.key.extensionPluginData]:{exportKey:b}}}))),te=(e,i)=>!(e=>[...t.exclusionPrefixDefault,...e])(i).includes(e.name.trim().substr(0,1)),ie=e=>{const t=[];return e.forEach((e=>{t.push({name:e.name,id:e.id,description:e.description,paints:e.paints})})),t},ne=e=>{const t=[];return e.forEach((e=>{t.push({name:e.name,id:e.id,description:e.description,layoutGrids:e.layoutGrids})})),t},ae=e=>{var t,i;return{name:e.name,description:e.description||void 0,bottomLeftRadius:e.bottomLeftRadius,bottomRightRadius:e.bottomRightRadius,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,cornerRadius:e.cornerRadius||void 0,cornerSmoothing:e.cornerSmoothing,strokes:(i=e.strokes,[...i].map((e=>R(e))).filter((e=>null!=e))),strokeWeight:e.strokeWeight,strokeStyleId:e.strokeStyleId,strokeMiterLimit:e.strokeMiterLimit,strokeJoin:e.strokeJoin,strokeCap:e.strokeCap,dashPattern:e.dashPattern,strokeAlign:e.strokeAlign,width:e.width,height:e.height,reactions:e.reactions||void 0,paddingTop:e.paddingTop||0,paddingRight:e.paddingRight||0,paddingBottom:e.paddingBottom||0,paddingLeft:e.paddingLeft||0,opacity:null!==(t=e.opacity)&&void 0!==t?t:1}},oe=["COMPONENT","COMPONENT_SET","RECTANGLE","FRAME"],re="_tokens",se=e=>[...e.map((e=>e.findChildren((e=>(e=>"FRAME"===e.type&&e.name.trim().toLowerCase().substr(0,re.length)===re)(e))))).reduce(((e,t)=>[...e,...t]))].map((e=>e.findAll((e=>(e=>"COMPONENT_SET"!==e.parent.type&&oe.includes(e.type))(e))))).reduce(((e,t)=>[...e,...t]),[]).map((e=>("RECTANGLE"!==e.type&&"FRAME"!==e.type||console.warn("Please use only main components and variants, other types may be deprecated as tokens in the future"),"COMPONENT_SET"===e.type?e.children.map((t=>{return Object.assign(Object.assign({},ae(t)),{name:(i=e.name,n=t.name,`${i}/${n=n.split(",").filter((e=>!["_","."].includes(e.trim().substr(0,1)))).map((e=>e.split("=")[1])).join("/")}`)});var i,n})):[ae(e)]))).reduce(((e,t)=>[...e,...t]),[]),le=e=>{const t=[];return e.forEach((e=>{t.push({name:e.name,id:e.id,description:e.description,fontSize:e.fontSize,textDecoration:e.textDecoration,fontName:e.fontName,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,paragraphIndent:e.paragraphIndent,paragraphSpacing:e.paragraphSpacing,textCase:e.textCase})})),t},pe=e=>{const t=[];return e.forEach((e=>{t.push({name:e.name,id:e.id,description:e.description,effects:e.effects})})),t},ue=(e="")=>e.split(",").map((e=>e.replace(/\s+/g,""))),ce=(e,i)=>{const n=((e,t)=>{const i=se([...e.root.children]),n=t.exclusionPrefix.split(",").map((e=>e.replace(/\s+/g,"")));return{tokenFrames:i,paintStyles:ie(e.getLocalPaintStyles()).filter((e=>te(e,n))),gridStyles:ne(e.getLocalGridStyles()).filter((e=>te(e,n))),textStyles:le(e.getLocalTextStyles()).filter((e=>te(e,n))),effectStyles:pe(e.getLocalEffectStyles()).filter((e=>te(e,n)))}})(e,i);return[...(a=n.tokenFrames,o=ue(i.prefix.size),a.filter(U(o)).map((e=>({name:e.name,category:"size",exportKey:x,description:e.description||null,values:{width:{value:k(e.width,2),unit:"pixel",type:"number"},height:{value:k(e.height,2),unit:"pixel",type:"number"}},extensions:{[t.key.extensionPluginData]:{exportKey:x}}})))),...X(n.tokenFrames,ue(i.prefix.breakpoint)),...V(n.tokenFrames,ue(i.prefix.spacing)),...Q(n.tokenFrames,ue(i.prefix.border)),...Y(n.tokenFrames,ue(i.prefix.radius)),...W(n.tokenFrames,ue(i.prefix.motion)),...ee(n.tokenFrames,ue(i.prefix.opacity)),...O(n.paintStyles,{color:ue(i.prefix.color),gradient:ue(i.prefix.gradient),alias:ue(i.alias)}),...N(n.gridStyles,ue(i.prefix.grid)),...F(n.textStyles,ue(i.prefix.font)),...M(n.effectStyles,ue(i.prefix.effect))];var a,o};var de=function(e,t,i,n){return new(i||(i=Promise))((function(a,o){function r(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))};figma.showUI(__html__,{themeColors:!0,visible:!1}),[o.export,o.urlExport,o.generalSettings].includes(figma.command)&&de(void 0,void 0,void 0,(function*(){const o=(()=>{let i=figma.root.getPluginData(t.key.settings);if(""===i)return e;i=JSON.parse(i);const a=n(e,i);return a.prefix=n(e.prefix,a.prefix),a.exports=n(e.exports,a.exports),a})(),r=yield s(figma);var p;figma.ui.resize(t.ui[figma.command].width,t.ui[figma.command].height),void 0!==r&&"patch"!==r&&figma.ui.resize(t.ui[figma.command].width,t.ui[figma.command].height+60),figma.ui.postMessage({command:figma.command,payload:{settings:Object.assign(Object.assign({},o),{accessToken:yield(p=l(figma),a(void 0,void 0,void 0,(function*(){const e=yield figma.clientStorage.getAsync("accessTokens");return void 0!==e&&e instanceof Object&&e[p]||""})))}),data:i(ce(figma,o)),versionDifference:r,metadata:{filename:figma.root.name}}}||{}),figma.ui.show()})),figma.command===o.help&&figma.ui.postMessage({command:o.help,payload:{url:"https://github.com/lukasoppermann/design-tokens"}}),figma.command===o.demo&&figma.ui.postMessage({command:o.demo,payload:{url:"https://www.figma.com/file/2MQ759R5kJtzQn4qSHuqR7/Design-Tokens-for-Figma?node-id=231%3A2"}}),figma.command===o.reset&&(figma.root.setPluginData(t.key.settings,i(e)),figma.notify("⚙️ Settings have been reset."),figma.closePlugin()),figma.ui.onmessage=n=>de(void 0,void 0,void 0,(function*(){const{command:r,payload:s}=n;var p,u,c;r===o.closePlugin&&(void 0!==(null==s?void 0:s.notification)&&""!==(null==s?void 0:s.notification)&&figma.notify(s.notification),figma.ui.hide(),figma.closePlugin()),r===o.saveSettings&&(c=s.settings,c=Object.assign(Object.assign({},e),c),figma.root.setPluginData(t.key.settings,i(c)),yield(p=l(figma),u=s.accessToken,a(void 0,void 0,void 0,(function*(){const e=(yield figma.clientStorage.getAsync("accessTokens"))||{},t=Object.assign(Object.assign({},e),{[p]:u});return yield figma.clientStorage.setAsync("accessTokens",t)}))),s.closePlugin&&!0===s.closePlugin&&figma.closePlugin())}))})();