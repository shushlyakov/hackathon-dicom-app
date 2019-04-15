define(["exports","meta"],function(_exports,meta){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.mixinBehaviors=mixinBehaviors;_exports.calculateSplices=calculateSplices;_exports.dashToCamelCase=dashToCamelCase;_exports.camelToDashCase=camelToDashCase;_exports.deepTargetFind=deepTargetFind;_exports.addListener=addListener;_exports.removeListener=removeListener;_exports.register=register$1;_exports.setTouchAction=setTouchAction;_exports.prevent=prevent;_exports.resetMouseCanceller=resetMouseCanceller;_exports.isPath=isPath;_exports.root=root;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.translate=translate;_exports.matches=matches;_exports.normalize=normalize;_exports.split=split;_exports.get=get;_exports.set=set;_exports.flush$2=flush$2;_exports.beforeNextRender=beforeNextRender;_exports.afterNextRender=afterNextRender;_exports.resolveUrl=resolveUrl;_exports.resolveCss=resolveCss;_exports.pathFromUrl=pathFromUrl;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromTemplate=stylesFromTemplate;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromModule=cssFromModule;_exports.cssFromTemplate=cssFromTemplate;_exports.cssFromModuleImports=cssFromModuleImports;_exports.incrementInstanceCount=incrementInstanceCount;_exports.register$1=register;_exports.dumpRegistrations=dumpRegistrations;_exports.templatize=templatize;_exports.modelForElement=modelForElement;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isValid=isValid;_exports.templateIsValid=templateIsValid;_exports.isValidating=isValidating;_exports.templateIsValidating=templateIsValidating;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.elementsAreInvalid=elementsAreInvalid;_exports.updateNativeProperties=updateNativeProperties;_exports.getComputedStyleValue=getComputedStyleValue;_exports.detectMixin=detectMixin;_exports.parse=parse$1;_exports.stringify=stringify;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.$documentWaitDefault=documentWait;_exports.toCssText=toCssText;_exports.rulesForStyle=rulesForStyle;_exports.isKeyframesSelector=isKeyframesSelector;_exports.forEachRule=forEachRule;_exports.applyCss=applyCss;_exports.createScopeStyle=createScopeStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.applyStyle=applyStyle;_exports.isTargetedBuild=isTargetedBuild;_exports.findMatchingParen=findMatchingParen;_exports.processVariableAndFallback=processVariableAndFallback;_exports.setElementClassRaw=setElementClassRaw;_exports.getIsExtends=getIsExtends;_exports.gatherStyleText=gatherStyleText;_exports.splitSelectorList=splitSelectorList;_exports.getCssBuild=getCssBuild;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.getBuildComment=getBuildComment;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.processUnscopedStyle=processUnscopedStyle;_exports.isUnscopedStyle=isUnscopedStyle;_exports.$styleUtil=_exports.$styleSettings=_exports.$documentWait=_exports.$customStyleInterface$1=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$applyShim$1=_exports.$applyShimUtils=_exports.$vaadinUsageStatistics=_exports.$vaadinUpload=_exports.$vaadinUploadFile=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextField=_exports.$vaadinTextFieldMixin=_exports.$vaadinTabs=_exports.$vaadinTab=_exports.$vaadinProgressMixin=_exports.$vaadinProgressBar=_exports.$vaadinOverlay=_exports.$vaadinFocusablesHelper=_exports.$version=_exports.$vaadinListMixin=_exports.$vaadinItemMixin=_exports.$vaadinGrid=_exports.$vaadinGridTemplatizer=_exports.$vaadinGridStylingMixin=_exports.$vaadinGridSortMixin=_exports.$vaadinGridSelectionMixin=_exports.$vaadinGridScroller=_exports.$vaadinGridScrollMixin=_exports.$vaadinGridRowDetailsMixin=_exports.$vaadinGridKeyboardNavigationMixin=_exports.$vaadinGridFilter=_exports.$vaadinGridFilterMixin=_exports.$vaadinGridFilterColumn=_exports.$vaadinGridEventContextMixin=_exports.$vaadinGridDynamicColumnsMixin=_exports.$vaadinGridDataProviderMixin=_exports.$vaadinGridColumn=_exports.$vaadinGridColumnResizingMixin=_exports.$vaadinGridColumnReorderingMixin=_exports.$vaadinGridArrayDataProviderMixin=_exports.$vaadinGridActiveItemMixin=_exports.$vaadinGridA11yMixin=_exports.$ironList=_exports.$vaadinElementMixin=_exports.$vaadinDialog=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinDetails=_exports.$vaadinControlStateMixin=_exports.$vaadinCheckbox=_exports.$vaadinButton=_exports.$vaadinAppLayout=_exports.$vaadinRouter=_exports.$polymerLegacy=_exports.$polymerElement=_exports.$wrap=_exports.$templatize=_exports.$telemetry=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$path=_exports.$mixin=_exports.$htmlTag=_exports.$gestures=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$debounce=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$templateStamp=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$mutableData=_exports.$gestureEventListeners=_exports.$elementMixin=_exports.$dirMixin=_exports.$templatizerBehavior=_exports.$polymerDom=_exports.$polymerFn=_exports.$mutableDataBehavior=_exports.$legacyElementMixin=_exports.$class=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$customStyle=_exports.$arraySelector=_exports.$paperSpinnerBehavior=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$elButton=void 0;_exports.ColumnBaseMixin=_exports.ColumnResizingMixin=_exports.ColumnReorderingMixin=_exports.ArrayDataProviderMixin=_exports.ActiveItemMixin=_exports.A11yMixin=_exports.PolymerIronList=_exports.ElementMixin$1=_exports.DialogElement=_exports.runIfDevelopmentMode=_exports.DetailsElement=_exports.ControlStateMixin=_exports.CheckboxElement=_exports.ButtonElement$1=_exports.AppLayoutElement=_exports.Resolver=_exports.Router=_exports.Base=_exports.PolymerElement=_exports.wrap=_exports.TemplateInstanceBase=_exports.registrations=_exports.instanceCount=_exports.setSyncInitialRender=_exports.syncInitialRender=_exports.setLegacyOptimizations=_exports.legacyOptimizations=_exports.setAllowTemplateFromDomModule=_exports.allowTemplateFromDomModule=_exports.setStrictTemplatePolicy=_exports.strictTemplatePolicy=_exports.setPassiveTouchGestures=_exports.passiveTouchGestures=_exports.setSanitizeDOMValue=_exports.sanitizeDOMValue=_exports.setRootPath=_exports.rootPath=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useShadow=_exports.isDeep=_exports.dedupingMixin=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.remove=_exports.add=_exports.findOriginalTarget=_exports.recognizers=_exports.gestures=_exports.FlattenedNodesObserver=_exports.flushDebouncers=_exports.Debouncer=_exports.microTask=_exports.idlePeriod=_exports.animationFrame=_exports.timeOut=_exports.TemplateStamp=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.OptionalMutableData=_exports.MutableData=_exports.GestureEventListeners=_exports.updateStyles=_exports.ElementMixin=_exports.version$1=_exports.version=_exports.DirMixin=_exports.Templatizer=_exports.dom=_exports.DomApi=_exports.EventApi=_exports.matchesSelector=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.flush$1=_exports.flush=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.MutableDataBehavior=_exports.LegacyElementMixin=_exports.Class=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.CustomStyle=_exports.ArraySelector=_exports.ArraySelectorMixin=_exports.PaperSpinnerBehavior=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.ButtonElement=_exports.$unscopedStyleHandler=_exports.$templateMap=void 0;_exports.scopingAttribute=_exports.$templateMapDefault=_exports.wrap$1=_exports.nativeCssVariables=_exports.disableRuntime=_exports.cssBuild=_exports.nativeShadow=_exports.CustomStyleInterfaceInterface=_exports.$customStyleInterfaceDefault=_exports.CustomStyleProvider=_exports.types=_exports.StyleNode=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.BRACKETED=_exports.IS_VAR=_exports.MEDIA_MATCH=_exports.ANIMATION_MATCH=_exports.VAR_CONSUMED=_exports.MIXIN_MATCH=_exports.VAR_ASSIGN=_exports.$applyShimDefault=_exports.usageStatistics=_exports.UploadElement=_exports.UploadFileElement=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldElement=_exports.TextFieldMixin=_exports.TabsElement=_exports.TabElement=_exports.ProgressMixin=_exports.ProgressBarElement=_exports.OverlayElement=_exports.FocusablesHelper=_exports.Lumo=_exports.ListMixin=_exports.ItemMixin=_exports.GridElement=_exports.Templatizer$1=_exports.StylingMixin=_exports.SortMixin=_exports.SelectionMixin=_exports.ScrollerElement=_exports.ScrollMixin=_exports.RowDetailsMixin=_exports.KeyboardNavigationMixin=_exports.GridFilterElement=_exports.FilterMixin=_exports.GridFilterColumnElement=_exports.EventContextMixin=_exports.DynamicColumnsMixin=_exports.DataProviderMixin=_exports.ItemCache=_exports.GridColumnElement=void 0;meta=babelHelpers.interopRequireWildcard(meta);var _Mathmax=Math.max,_Mathabs=Math.abs,_Mathround=Math.round,_Mathceil=Math.ceil,_Mathmin=Math.min,_Mathfloor=Math.floor;window.JSCompiler_renameProperty=function(prop,obj){return prop};let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){return new URL(url,baseURI).href}if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;const useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;let rootPath=pathFromUrl(document.baseURI||window.location.href);_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};_exports.setRootPath=setRootPath;let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};_exports.setSanitizeDOMValue=setSanitizeDOMValue;let passiveTouchGestures=!1;_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};_exports.setPassiveTouchGestures=setPassiveTouchGestures;let strictTemplatePolicy=!1;_exports.strictTemplatePolicy=strictTemplatePolicy;const setStrictTemplatePolicy=function(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;let allowTemplateFromDomModule=!1;_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;const setAllowTemplateFromDomModule=function(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;let legacyOptimizations=!1;_exports.legacyOptimizations=legacyOptimizations;const setLegacyOptimizations=function(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};_exports.setLegacyOptimizations=setLegacyOptimizations;let syncInitialRender=!1;_exports.syncInitialRender=syncInitialRender;const setSyncInitialRender=function(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};_exports.setSyncInitialRender=setSyncInitialRender;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender};_exports.$settings=settings;let dedupeId=0;function MixinFunction(){}MixinFunction.prototype.__mixinApplications;MixinFunction.prototype.__mixinSet;const dedupingMixin=function(mixin){let mixinApplications=mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;mixin.__mixinApplications=mixinApplications}let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=mixin(base);map.set(base,extended)}let mixinSet=Object.create(extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;extended.__mixinSet=mixinSet;return extended}return dedupingMixin};_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;let modules={},lcModules={};function setModule(id,module){modules[id]=lcModules[id.toLowerCase()]=module}function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}get assetpath(){if(!this.__assetpath){const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}register(id){id=id||this.id;if(id){if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`)}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";function importModule(moduleId){return DomModule.import(moduleId)}function styleForImport(importDoc){let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}let templateWithAssetPath;function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=m.querySelector("template");if(template){styles.push(...stylesFromTemplate(template,m.assetpath))}m._styles=styles}return m._styles}function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute(INCLUDE_ATTR);if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI)}styles.push(e)}template._styles=styles}return template._styles}function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){let cssText=_cssFromModuleImports(m),t=m.querySelector("template");if(t){cssText+=cssFromTemplate(t,m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;const wrap=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:n=>n;_exports.wrap=wrap;var wrap$1={wrap:wrap};_exports.$wrap=wrap$1;function isPath(path){return 0<=path.indexOf(".")}function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}function isAncestor(base,path){return 0===base.indexOf(path+".")}function isDescendant(base,path){return 0===path.indexOf(base+".")}function translate(base,newBase,path){return newBase+path.slice(base.length)}function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}function get(root,path,info){let prop=root,parts=split(path);for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}prop[last]=value}else{prop[path]=value}return parts.join(".")}const isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};_exports.$path=path;const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}const timeOut={after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},run(fn,delay){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={run(fn){return window.requestAnimationFrame(fn)},cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const microtask=microTask,PropertiesChanged=dedupingMixin(superClass=>{class PropertiesChanged extends superClass{static createProperties(props){const proto=this.prototype;for(let prop in props){if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}static attributeNameForProperty(property){return property.toLowerCase()}static typeForProperty(name){}_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}_addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){const attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}}_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{get(){return this._getProperty(property)},set:readOnly?function(){}:function(value){this._setProperty(property,value)}})}constructor(){super();this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;this.__serializing=!1;this._initializeProperties()}ready(){this.__dataReady=!0;this._flushProperties()}_initializeProperties(){for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}_initializeInstanceProperties(props){Object.assign(this,props)}_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}_getProperty(property){return this.__data[property]}_setPendingProperty(property,value,ext){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}_flushProperties(){const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}_shouldPropertiesChange(currentProps,changedProps,oldProps){return!!changedProps}_propertiesChanged(currentProps,changedProps,oldProps){}_shouldPropertyChange(property,value,old){return old!==value&&(old===old||value===value)}attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if(str===void 0){node.removeAttribute(attribute)}else{if("class"===attribute||"name"===attribute||"slot"===attribute){node=wrap(node)}node.setAttribute(attribute,str)}}_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}return PropertiesChanged});_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};_exports.$propertiesChanged=propertiesChanged;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}function saveAccessorValue(model,property){if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){model._setPendingProperty(property,value)}else{if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}const PropertyAccessors=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);class PropertyAccessors extends base{static createPropertiesForAttributes(){let a$=this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]))}}static attributeNameForProperty(property){return camelToDashCase(property)}_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}_ensureAttribute(attribute,value){const el=this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}_serializeValue(value){switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}_deserializeValue(value,type){let outValue;switch(type){case Object:try{outValue=JSON.parse(value)}catch(x){outValue=value}break;case Array:try{outValue=JSON.parse(value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};_exports.$propertyAccessors=propertyAccessors;const walker=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);if(parent){walker.currentNode=parent;for(let n=walker.firstChild(),i=0;n;n=walker.nextSibling()){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}const TemplateStamp=dedupingMixin(superClass=>{class TemplateStamp extends superClass{static _parseTemplate(template,outerTemplateInfo){if(!template._templateInfo){let templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");this._parseTemplateContent(template,templateInfo,{parent:null})}return template._templateInfo}static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted,element=node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){templateInfo.hasInsertionPoint=!0}walker.currentNode=element;if(walker.firstChild()){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}walker.currentNode=root;for(let node=walker.firstChild(),parentIndex=0,next;node;node=next){if("template"==node.localName){node=wrapTemplateExtension(node)}walker.currentNode=node;next=walker.nextSibling();if(node.nodeType===Node.TEXT_NODE){let n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=walker.nextSibling();root.removeChild(n);n=next}if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo={parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}walker.currentNode=node;if(walker.parentNode()){parentIndex++}}}static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){let templateInfo=this._parseTemplate(node,outerTemplateInfo),content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return!0}static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}else if("id"===name){nodeInfo.id=value;return!0}return!1}static _contentForTemplate(template){let templateInfo=template._templateInfo;return templateInfo&&templateInfo.content||template.content}_stampTemplate(template){if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}let templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=document.importNode(content,!0);dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=dom;return dom}_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};_exports.$templateStamp=templateStamp;let dedupeId$1=0;const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;let DataTrigger,DataEffect;function ensureOwnEffectMap(model,type){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}return effects}function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1,id=dedupeId$1++;for(let prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}wrap(inst).dispatchEvent(new CustomEvent(eventName,{detail}))}function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property]}dispatchNotifyEvent(inst,info.eventName,value,path)}function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",inst)}inst._propertyToAttribute(property,info.attrName,value)}function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}function runComputedEffect(inst,property,props,oldProps,info){let result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){nodeInfo.bindings=nodeInfo.bindings||[];let binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);applyBindingValue(inst,node,binding,part,value)}}function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){inst._valueToNodeAttribute(node,value,binding.target)}else{let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}function setupBindings(inst,templateInfo){let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}function setupCompoundStorage(node,binding){if(binding.isCompound){let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;if(binding.literal&&"property"==binding.kind){node[target]=binding.literal}}}function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}function runMethodEffect(inst,property,props,oldProps,info){let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}function parseMethod(expression){let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}function parseArg(rawArg){let arg=rawArg.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}if(!a.literal){a.rootProperty=root(arg);a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){let value=get(data,path);if(value===void 0){value=props[path]}return value}function notifySplices(inst,array,path,splices){inst.notifyPath(path+".splices",{indexSplices:splices});inst.notifyPath(path+".length",array.length)}function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}function upper(name){return name[0].toUpperCase()+name.substring(1)}const PropertyEffects=dedupingMixin(superClass=>{const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));class PropertyEffects extends propertyEffectsBase{constructor(){super();this.__isPropertyEffectsClient=!0;this.__dataCounter=0;this.__dataClientsReady;this.__dataPendingClients;this.__dataToNotify;this.__dataLinkedPaths;this.__dataHasPaths;this.__dataCompoundStorage;this.__dataHost;this.__dataTemp;this.__dataClientsInitialized;this.__data;this.__dataPending;this.__dataOld;this.__computeEffects;this.__reflectEffects;this.__notifyEffects;this.__propagateEffects;this.__observeEffects;this.__readOnly;this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}_initializeProperties(){super._initializeProperties();hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);let effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){if(!isPathNotification){let old=get(this,path);path=set(this,path,value);if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(path,value,shouldNotify)){computeLinkedPaths(this,path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(path,value,shouldNotify)}else{this[path]=value}}return!1}_setUnmanagedPropertyToNode(node,prop,value){if(value!==node[prop]||"object"==typeof value){node[prop]=value}}_setPendingProperty(property,value,shouldNotify){let propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}this.__dataPending[property]=value;if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}_flushProperties(){this.__dataCounter++;super._flushProperties();this.__dataCounter--}_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();this.__dataReady=!0}else{this.__enableOrFlushClients()}}__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}_readyClients(){this.__enableOrFlushClients()}setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}ready(){this._flushProperties();if(!this.__dataClientsReady){this._flushClients()}if(this.__dataPending){this._flushProperties()}}_propertiesChanged(currentProps,changedProps,oldProps){let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;runComputedEffects(this,changedProps,oldProps,hasPaths);let notifyProps=this.__dataToNotify;this.__dataToNotify=null;this._propagatePropertyChanges(changedProps,oldProps,hasPaths);this._flushClients();runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}if(1==this.__dataCounter){this.__dataTemp={}}}_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}let templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}notifySplices(path,splices){let info={path:""},array=get(this,path,info);notifySplices(this,array,info.path,splices)}get(path,root){return get(root||this,path)}set(path,value,root){if(root){set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}push(path,...items){let info={path:""},array=get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}pop(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}splice(path,start,deleteCount,...items){let info={path:""},array=get(this,path,info);if(0>start){start=array.length-_Mathfloor(-start)}else if(start){start=_Mathfloor(start)}let ret;if(2===arguments.length){ret=array.splice(start)}else{ret=array.splice(start,deleteCount,...items)}if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}shift(path){let info={path:""},array=get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}unshift(path,...items){let info={path:""},array=get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}notifyPath(path,value){let propPath;if(1==arguments.length){let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){propPath=normalize(path)}else{propPath=path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=function(value){this._setProperty(property,value)}}}_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}_marshalArgs(args,path,props){const data=this.__data,values=[];for(let i=0,l=args.length;i<l;i++){let{name,structured,wildcard,value,literal}=args[i];if(!literal){if(wildcard){const matches=isDescendant(name,path),pathValue=getArgValue(data,props,matches?path:name);value={path:matches?path:name,value:pathValue,base:matches?get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}values[i]=value}return values}static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}static bindTemplate(template){return this.prototype._bindTemplate(template)}_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){templateInfo=Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){let last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}_stampTemplate(template){hostStack.beginHosting(this);let dom=super._stampTemplate(template);hostStack.endHosting(this);let templateInfo=this._bindTemplate(template,!0);templateInfo.nodeList=dom.nodeList;if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;setupBindings(this,templateInfo);if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}_removeBoundDom(dom){let templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];node.parentNode.removeChild(node)}}static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=super._parseTemplateNode(node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){let origName=name,kind="property";if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}let literal=literalFromParts(parts);if(literal&&"attribute"==kind){if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}node.removeAttribute(origName);if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{return super._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value)}}static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){let noted=super._parseTemplateNestedTemplate(node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps,mode="{";for(let source in hostProps){let parts=[{mode,source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}return noted}static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;while(null!==(m=bindingRegex.exec(text))){if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}return PropertyEffects});_exports.PropertyEffects=PropertyEffects;class HostStack{constructor(){this.stack=[]}registerHost(inst){if(this.stack.length){let host=this.stack[this.stack.length-1];host._enqueueClient(inst)}}beginHosting(inst){this.stack.push(inst)}endHosting(inst){let stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}}const hostStack=new HostStack;var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;let instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}const registrations=[];_exports.registrations=registrations;function _regLog(prototype){console.log("["+prototype.is+"]: registered")}function register(prototype){registrations.push(prototype)}function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}const PropertiesMixin=dedupingMixin(superClass=>{const base=PropertiesChanged(superClass);function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);return superCtor.prototype instanceof PropertiesMixin?superCtor:null}function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){const properties=constructor.properties;if(properties){props=normalizeProperties(properties)}}constructor.__ownProperties=props}return constructor.__ownProperties}class PropertiesMixin extends base{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){register(this.prototype);const props=this._properties;this.__observedAttributes=props?Object.keys(props).map(p=>this.attributeNameForProperty(p)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}static _finalizeClass(){const props=ownProperties(this);if(props){this.createProperties(props)}}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(this))}return this.__properties}static typeForProperty(name){const info=this._properties[name];return info&&info.type}_initializeProperties(){incrementInstanceCount();this.constructor.finalize();super._initializeProperties()}connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;const bundledImportMeta=babelHelpers.objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.2.0";_exports.version$1=_exports.version=version;const builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin=dedupingMixin(base=>{const polymerElementBase=PropertiesMixin(PropertyEffects(base));function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?constructor.observers:null}return constructor.__ownObservers}function createPropertyFromConfig(proto,name,info,allProps){if(info.computed){info.readOnly=!0}if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn(`Cannot redefine computed property '${name}'.`)}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn(`Cannot make readOnly property '${name}' non-readOnly.`)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn(`Cannot make reflected property '${name}' non-reflected.`)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn(`Cannot make notify property '${name}' non-notify.`)}if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}proto._addPropertyToAttributeMap(name)}function processElementStyles(klass,template,is,baseURI){if(!builtCSS){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}let templateStyleIndex=0;for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}function getTemplateFromDomModule(is){let template=null;if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,"template");if(strictTemplatePolicy&&!template){throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`)}}return template}class PolymerElement extends polymerElementBase{static get polymerElementVersion(){return version}static _finalizeClass(){super._finalizeClass();const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}static _prepareTemplate(){let template=this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}this.prototype._template=template}static createProperties(props){for(let p in props){createPropertyFromConfig(this.prototype,p,props[p],props)}}static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:getTemplateFromDomModule(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(value){this._template=value}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule.import(this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super();this._template;this._importPath;this.rootPath;this.importPath;this.root;this.$}_initializeProperties(){this.constructor.finalize();this.constructor._finalizeTemplate(this.localName);super._initializeProperties();this.rootPath=rootPath;this.importPath=this.constructor.importPath;let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];if(!this.hasOwnProperty(p)){let value="function"==typeof info.value?info.value.call(this):info.value;if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}static _finalizeTemplate(is){const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(this)}super.connectedCallback()}ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}_readyClients(){if(this._template){this.root=this._attachDom(this.root)}super._readyClients()}_attachDom(dom){const n=wrap(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open"})}n.shadowRoot.appendChild(dom);if(syncInitialRender&&window.ShadyDOM){ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(this,properties)}}resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return super._parseTemplateContent(template,templateInfo,nodeInfo)}static _addTemplatePropertyEffect(templateInfo,prop,effect){if(legacyOptimizations&&!(prop in this._properties)){console.warn(`Property '${prop}' used in template but not declared in 'properties'; `+`attribute will not be observed.`)}return super._addTemplatePropertyEffect(templateInfo,prop,effect)}}return PolymerElement});_exports.ElementMixin=ElementMixin;const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;class LiteralString{constructor(string){this.value=string.toString()}toString(){return this.value}}function literalValue(value){if(value instanceof LiteralString){return value.value}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}function htmlValue(value){if(value instanceof HTMLTemplateElement){return value.innerHTML}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}const html=function html(strings,...values){const template=document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};_exports.html$2=_exports.html$1=_exports.html=html;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;function toArray(objectOrArray){objectOrArray=objectOrArray||[];return Array.isArray(objectOrArray)?objectOrArray:[objectOrArray]}function log(msg){return`[Vaadin.Router] ${msg}`}function logValue(value){if("object"!==typeof value){return value+""}const stringType=Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];if("Object"===stringType||"Array"===stringType){return`${stringType} ${JSON.stringify(value)}`}else{return stringType}}const MODULE="module",NOMODULE="nomodule",bundleKeys=[MODULE,NOMODULE];function ensureBundle(src){if(!src.match(/.+\.[m]?js$/)){throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`))}}function ensureRoute(route){if(!route||!isString(route.path)){throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`))}const bundle=route.bundle,stringKeys=["component","redirect","bundle"];if(!isFunction(route.action)&&!Array.isArray(route.children)&&!isFunction(route.children)&&!isObject(bundle)&&!stringKeys.some(key=>isString(route[key]))){throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join("\", \"")}" `+`or "action" function but none found.`))}if(bundle){if(isString(bundle)){ensureBundle(bundle)}else if(!bundleKeys.some(key=>key in bundle)){throw new Error(log("Expected route bundle to include either \""+NOMODULE+"\" or \""+MODULE+"\" keys, or both"))}else{bundleKeys.forEach(key=>key in bundle&&ensureBundle(bundle[key]))}}if(route.redirect){["bundle","component"].forEach(overriddenProp=>{if(overriddenProp in route){console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, `+`and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`))}})}}function ensureRoutes(routes){toArray(routes).forEach(route=>ensureRoute(route))}function loadScript(src,key){let script=document.head.querySelector("script[src=\""+src+"\"][async]");if(!script){script=document.createElement("script");script.setAttribute("src",src);if(key===MODULE){script.setAttribute("type",MODULE)}else if(key===NOMODULE){script.setAttribute(NOMODULE,"")}script.async=!0}return new Promise((resolve,reject)=>{script.onreadystatechange=script.onload=e=>{script.__dynamicImportLoaded=!0;resolve(e)};script.onerror=e=>{if(script.parentNode){script.parentNode.removeChild(script)}reject(e)};if(null===script.parentNode){document.head.appendChild(script)}else if(script.__dynamicImportLoaded){resolve()}})}function loadBundle(bundle){if(isString(bundle)){return loadScript(bundle)}else{return Promise.race(bundleKeys.filter(key=>key in bundle).map(key=>loadScript(bundle[key],key)))}}function fireRouterEvent(type,detail){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`,{cancelable:"go"===type,detail}))}function isObject(o){return"object"===typeof o&&!!o}function isFunction(f){return"function"===typeof f}function isString(s){return"string"===typeof s}function getNotFoundError(context){const error=new Error(log(`Page not found (${context.pathname})`));error.context=context;error.code=404;return error}const notFoundResult=new class NotFoundResult{};function getAnchorOrigin(anchor){const port=anchor.port,protocol=anchor.protocol,defaultHttp="http:"===protocol&&"80"===port,defaultHttps="https:"===protocol&&"443"===port,host=defaultHttp||defaultHttps?anchor.hostname:anchor.host;return`${protocol}//${host}`}function vaadinRouterGlobalClickHandler(event){if(event.defaultPrevented){return}if(0!==event.button){return}if(event.shiftKey||event.ctrlKey||event.altKey||event.metaKey){return}let anchor=event.target;const path=event.composedPath?event.composedPath():event.path||[];for(let i=0;i<path.length;i++){const target=path[i];if(target.nodeName&&"a"===target.nodeName.toLowerCase()){anchor=target;break}}while(anchor&&"a"!==anchor.nodeName.toLowerCase()){anchor=anchor.parentNode}if(!anchor||"a"!==anchor.nodeName.toLowerCase()){return}if(anchor.target&&"_self"!==anchor.target.toLowerCase()){return}if(anchor.hasAttribute("download")){return}if(anchor.pathname===window.location.pathname&&""!==anchor.hash){return}const origin=anchor.origin||getAnchorOrigin(anchor);if(origin!==window.location.origin){return}if(fireRouterEvent("go",{pathname:anchor.pathname})){event.preventDefault()}}const CLICK={activate(){window.document.addEventListener("click",vaadinRouterGlobalClickHandler)},inactivate(){window.document.removeEventListener("click",vaadinRouterGlobalClickHandler)}},isIE=/Trident/.test(navigator.userAgent);if(isIE&&!isFunction(window.PopStateEvent)){window.PopStateEvent=function(inType,params){params=params||{};var e=document.createEvent("Event");e.initEvent(inType,!!params.bubbles,!!params.cancelable);e.state=params.state||null;return e};window.PopStateEvent.prototype=window.Event.prototype}function vaadinRouterGlobalPopstateHandler(event){if("vaadin-router-ignore"===event.state){return}fireRouterEvent("go",{pathname:window.location.pathname})}const POPSTATE={activate(){window.addEventListener("popstate",vaadinRouterGlobalPopstateHandler)},inactivate(){window.removeEventListener("popstate",vaadinRouterGlobalPopstateHandler)}};var pathToRegexp_1=pathToRegexp,parse_1=parse,compile_1=compile,tokensToFunction_1=tokensToFunction,tokensToRegExp_1=tokensToRegExp,DEFAULT_DELIMITER="/",DEFAULT_DELIMITERS="./",PATH_REGEXP=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function parse(str,options){var tokens=[],key=0,index=0,path="",defaultDelimiter=options&&options.delimiter||DEFAULT_DELIMITER,delimiters=options&&options.delimiters||DEFAULT_DELIMITERS,pathEscaped=!1,res;while(null!==(res=PATH_REGEXP.exec(str))){var m=res[0],escaped=res[1],offset=res.index;path+=str.slice(index,offset);index=offset+m.length;if(escaped){path+=escaped[1];pathEscaped=!0;continue}var prev="",next=str[index],name=res[2],capture=res[3],group=res[4],modifier=res[5];if(!pathEscaped&&path.length){var k=path.length-1;if(-1<delimiters.indexOf(path[k])){prev=path[k];path=path.slice(0,k)}}if(path){tokens.push(path);path="";pathEscaped=!1}var partial=""!==prev&&next!==void 0&&next!==prev,repeat="+"===modifier||"*"===modifier,optional="?"===modifier||"*"===modifier,delimiter=prev||defaultDelimiter,pattern=capture||group;tokens.push({name:name||key++,prefix:prev,delimiter:delimiter,optional:optional,repeat:repeat,partial:partial,pattern:pattern?escapeGroup(pattern):"[^"+escapeString(delimiter)+"]+?"})}if(path||index<str.length){tokens.push(path+str.substr(index))}return tokens}function compile(str,options){return tokensToFunction(parse(str,options))}function tokensToFunction(tokens){for(var matches=Array(tokens.length),i=0;i<tokens.length;i++){if("object"===typeof tokens[i]){matches[i]=new RegExp("^(?:"+tokens[i].pattern+")$")}}return function(data,options){for(var path="",encode=options&&options.encode||encodeURIComponent,i=0,token;i<tokens.length;i++){token=tokens[i];if("string"===typeof token){path+=token;continue}var value=data?data[token.name]:void 0,segment;if(Array.isArray(value)){if(!token.repeat){throw new TypeError("Expected \""+token.name+"\" to not repeat, but got array")}if(0===value.length){if(token.optional)continue;throw new TypeError("Expected \""+token.name+"\" to not be empty")}for(var j=0;j<value.length;j++){segment=encode(value[j],token);if(!matches[i].test(segment)){throw new TypeError("Expected all \""+token.name+"\" to match \""+token.pattern+"\"")}path+=(0===j?token.prefix:token.delimiter)+segment}continue}if("string"===typeof value||"number"===typeof value||"boolean"===typeof value){segment=encode(value+"",token);if(!matches[i].test(segment)){throw new TypeError("Expected \""+token.name+"\" to match \""+token.pattern+"\", but got \""+segment+"\"")}path+=token.prefix+segment;continue}if(token.optional){if(token.partial)path+=token.prefix;continue}throw new TypeError("Expected \""+token.name+"\" to be "+(token.repeat?"an array":"a string"))}return path}}function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function escapeGroup(group){return group.replace(/([=!:$/()])/g,"\\$1")}function flags(options){return options&&options.sensitive?"":"i"}function regexpToRegexp(path,keys){if(!keys)return path;var groups=path.source.match(/\((?!\?)/g);if(groups){for(var i=0;i<groups.length;i++){keys.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null})}}return path}function arrayToRegexp(path,keys,options){for(var parts=[],i=0;i<path.length;i++){parts.push(pathToRegexp(path[i],keys,options).source)}return new RegExp("(?:"+parts.join("|")+")",flags(options))}function stringToRegexp(path,keys,options){return tokensToRegExp(parse(path,options),keys,options)}function tokensToRegExp(tokens,keys,options){options=options||{};for(var strict=options.strict,end=!1!==options.end,delimiter=escapeString(options.delimiter||DEFAULT_DELIMITER),delimiters=options.delimiters||DEFAULT_DELIMITERS,endsWith=[].concat(options.endsWith||[]).map(escapeString).concat("$").join("|"),route="",isEndDelimited=0===tokens.length,i=0,token;i<tokens.length;i++){token=tokens[i];if("string"===typeof token){route+=escapeString(token);isEndDelimited=i===tokens.length-1&&-1<delimiters.indexOf(token[token.length-1])}else{var prefix=escapeString(token.prefix),capture=token.repeat?"(?:"+token.pattern+")(?:"+prefix+"(?:"+token.pattern+"))*":token.pattern;if(keys)keys.push(token);if(token.optional){if(token.partial){route+=prefix+"("+capture+")?"}else{route+="(?:"+prefix+"("+capture+"))?"}}else{route+=prefix+"("+capture+")"}}}if(end){if(!strict)route+="(?:"+delimiter+")?";route+="$"===endsWith?"$":"(?="+endsWith+")"}else{if(!strict)route+="(?:"+delimiter+"(?="+endsWith+"))?";if(!isEndDelimited)route+="(?="+delimiter+"|"+endsWith+")"}return new RegExp("^"+route,flags(options))}function pathToRegexp(path,keys,options){if(path instanceof RegExp){return regexpToRegexp(path,keys)}if(Array.isArray(path)){return arrayToRegexp(path,keys,options)}return stringToRegexp(path,keys,options)}pathToRegexp_1.parse=parse_1;pathToRegexp_1.compile=compile_1;pathToRegexp_1.tokensToFunction=tokensToFunction_1;pathToRegexp_1.tokensToRegExp=tokensToRegExp_1;const{hasOwnProperty}=Object.prototype,cache=new Map;cache.set("|false",{keys:[],pattern:/(?:)/});function decodeParam(val){try{return decodeURIComponent(val)}catch(err){return val}}function matchPath(routepath,path,exact,parentKeys,parentParams){exact=!!exact;const cacheKey=`${routepath}|${exact}`;let regexp=cache.get(cacheKey);if(!regexp){const keys=[];regexp={keys,pattern:pathToRegexp_1(routepath,keys,{end:exact,strict:""===routepath})};cache.set(cacheKey,regexp)}const m=regexp.pattern.exec(path);if(!m){return null}const params=Object.assign({},parentParams);for(let i=1;i<m.length;i++){const key=regexp.keys[i-1],prop=key.name,value=m[i];if(value!==void 0||!hasOwnProperty.call(params,prop)){if(key.repeat){params[prop]=value?value.split(key.delimiter).map(decodeParam):[]}else{params[prop]=value?decodeParam(value):value}}}return{path:m[0],keys:(parentKeys||[]).concat(regexp.keys),params}}function matchRoute(route,pathname,ignoreLeadingSlash,parentKeys,parentParams){let match,childMatches,childIndex=0,routepath=route.path||"";if("/"===routepath.charAt(0)){if(ignoreLeadingSlash){routepath=routepath.substr(1)}ignoreLeadingSlash=!0}return{next(routeToSkip){if(route===routeToSkip){return{done:!0}}const children=route.__children=route.__children||route.children;if(!match){match=matchPath(routepath,pathname,!children,parentKeys,parentParams);if(match){return{done:!1,value:{route,keys:match.keys,params:match.params,path:match.path}}}}if(match&&children){while(childIndex<children.length){if(!childMatches){const childRoute=children[childIndex];childRoute.parent=route;let matchedLength=match.path.length;if(0<matchedLength&&"/"===pathname.charAt(matchedLength)){matchedLength+=1}childMatches=matchRoute(childRoute,pathname.substr(matchedLength),ignoreLeadingSlash,match.keys,match.params)}const childMatch=childMatches.next(routeToSkip);if(!childMatch.done){return{done:!1,value:childMatch.value}}childMatches=null;childIndex++}}return{done:!0}}}}function resolveRoute(context){if(isFunction(context.route.action)){return context.route.action(context)}return}function isChildRoute(parentRoute,childRoute){let route=childRoute;while(route){route=route.parent;if(route===parentRoute){return!0}}return!1}function generateErrorMessage(currentContext){let errorMessage=`Path '${currentContext.pathname}' is not properly resolved due to an error.`;const routePath=(currentContext.route||{}).path;if(routePath){errorMessage+=` Resolution had failed on route: '${routePath}'`}return errorMessage}function addRouteToChain(context,match){const{route,path}=match;function shouldDiscardOldChain(oldChain,route){return!route.parent||!oldChain||!oldChain.length||oldChain[oldChain.length-1].route!==route.parent}if(route&&!route.__synthetic){const item={path,route};if(shouldDiscardOldChain(context.chain,route)){context.chain=[item]}else{context.chain.push(item)}}}class Resolver{constructor(routes,options={}){if(Object(routes)!==routes){throw new TypeError("Invalid routes")}this.baseUrl=options.baseUrl||"";this.errorHandler=options.errorHandler;this.resolveRoute=options.resolveRoute||resolveRoute;this.context=Object.assign({resolver:this},options.context);this.root=Array.isArray(routes)?{path:"",__children:routes,parent:null,__synthetic:!0}:routes;this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(routes){ensureRoutes(routes);const newRoutes=[...toArray(routes)];this.root.__children=newRoutes}addRoutes(routes){ensureRoutes(routes);this.root.__children.push(...toArray(routes));return this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(pathnameOrContext){const context=Object.assign({},this.context,isString(pathnameOrContext)?{pathname:pathnameOrContext}:pathnameOrContext),match=matchRoute(this.root,this.__normalizePathname(context.pathname),this.baseUrl),resolve=this.resolveRoute;let matches=null,nextMatches=null,currentContext=context;function next(resume,parent=matches.value.route,prevResult){const routeToSkip=null===prevResult&&matches.value.route;matches=nextMatches||match.next(routeToSkip);nextMatches=null;if(!resume){if(matches.done||!isChildRoute(parent,matches.value.route)){nextMatches=matches;return Promise.resolve(notFoundResult)}}if(matches.done){return Promise.reject(getNotFoundError(context))}addRouteToChain(context,matches.value);currentContext=Object.assign({},context,matches.value);return Promise.resolve(resolve(currentContext)).then(resolution=>{if(null!==resolution&&resolution!==void 0&&resolution!==notFoundResult){currentContext.result=resolution.result||resolution;return currentContext}return next(resume,parent,resolution)})}context.next=next;return Promise.resolve().then(()=>next(!0,this.root)).catch(error=>{const errorMessage=generateErrorMessage(currentContext);if(!error){error=new Error(errorMessage)}else{console.warn(errorMessage)}error.context=error.context||currentContext;if(!(error instanceof DOMException)){error.code=error.code||500}if(this.errorHandler){currentContext.result=this.errorHandler(error);return currentContext}throw error})}static __createUrl(url,base){return new URL(url,base)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(pathname){if(!this.baseUrl){return pathname}const base=this.__effectiveBaseUrl,normalizedUrl=this.constructor.__createUrl(pathname,base).href;if(normalizedUrl.slice(0,base.length)===base){return normalizedUrl.slice(base.length)}}}_exports.Resolver=Resolver;Resolver.pathToRegexp=pathToRegexp_1;const{pathToRegexp:pathToRegexp$1}=Resolver,cache$1=new Map;function cacheRoutes(routesByName,route,routes){const name=route.name||route.component;if(name){if(routesByName.has(name)){routesByName.get(name).push(route)}else{routesByName.set(name,[route])}}if(Array.isArray(routes)){for(let i=0;i<routes.length;i++){const childRoute=routes[i];childRoute.parent=route;cacheRoutes(routesByName,childRoute,childRoute.__children||childRoute.children)}}}function getRouteByName(routesByName,routeName){const routes=routesByName.get(routeName);if(routes&&1<routes.length){throw new Error(`Duplicate route with name "${routeName}".`+` Try seting unique 'name' route properties.`)}return routes&&routes[0]}function getRoutePath(route){let path=route.path;path=Array.isArray(path)?path[0]:path;return path!==void 0?path:""}function generateUrls(router,options={}){if(!(router instanceof Resolver)){throw new TypeError("An instance of Resolver is expected")}const routesByName=new Map;return(routeName,params)=>{let route=getRouteByName(routesByName,routeName);if(!route){routesByName.clear();cacheRoutes(routesByName,router.root,router.root.__children);route=getRouteByName(routesByName,routeName);if(!route){throw new Error(`Route "${routeName}" not found`)}}let regexp=cache$1.get(route.fullPath);if(!regexp){let fullPath=getRoutePath(route),rt=route.parent;while(rt){const path=getRoutePath(rt);if(path){fullPath=path.replace(/\/$/,"")+"/"+fullPath.replace(/^\//,"")}rt=rt.parent}const tokens=pathToRegexp$1.parse(fullPath),toPath=pathToRegexp$1.tokensToFunction(tokens),keys=Object.create(null);for(let i=0;i<tokens.length;i++){if(!isString(tokens[i])){keys[tokens[i].name]=!0}}regexp={toPath,keys};cache$1.set(fullPath,regexp);route.fullPath=fullPath}let url=regexp.toPath(params,options)||"/";if(options.stringifyQueryParams&&params){const queryParams={},keys=Object.keys(params);for(let i=0;i<keys.length;i++){const key=keys[i];if(!regexp.keys[key]){queryParams[key]=params[key]}}const query=options.stringifyQueryParams(queryParams);if(query){url+="?"===query.charAt(0)?query:`?${query}`}}return url}}let triggers=[];function setNavigationTriggers(newTriggers){triggers.forEach(trigger=>trigger.inactivate());newTriggers.forEach(trigger=>trigger.activate());triggers=newTriggers}const willAnimate=elem=>{const name=getComputedStyle(elem).getPropertyValue("animation-name");return name&&"none"!==name},waitForAnimation=(elem,cb)=>{const listener=()=>{elem.removeEventListener("animationend",listener);cb()};elem.addEventListener("animationend",listener)};function animate(elem,className){elem.classList.add(className);return new Promise(resolve=>{if(willAnimate(elem)){const rect=elem.getBoundingClientRect(),size=`height: ${rect.bottom-rect.top}px; width: ${rect.right-rect.left}px`;elem.setAttribute("style",`position: absolute; ${size}`);waitForAnimation(elem,()=>{elem.classList.remove(className);elem.removeAttribute("style");resolve()})}else{elem.classList.remove(className);resolve()}})}const MAX_REDIRECT_COUNT=256;function isResultNotEmpty(result){return null!==result&&result!==void 0}function copyContextWithoutNext(context){const copy=Object.assign({},context);delete copy.next;return copy}function createLocation({pathname="",chain=[],params={},redirectFrom,resolver},route){const routes=chain.map(item=>item.route);return{baseUrl:resolver&&resolver.baseUrl||"",pathname,routes,route:route||routes.length&&routes[routes.length-1]||null,params,redirectFrom,getUrl:(userParams={})=>getPathnameForRouter(Router.pathToRegexp.compile(getMatchedPath(routes))(Object.assign({},params,userParams)),resolver)}}function createRedirect(context,pathname){const params=Object.assign({},context.params);return{redirect:{pathname,from:context.pathname,params}}}function renderComponent(context,component){const element=document.createElement(component);element.location=createLocation(context);const index=context.chain.map(item=>item.route).indexOf(context.route);context.chain[index].element=element;return element}function runCallbackIfPossible(callback,args,thisArg){if(isFunction(callback)){return callback.apply(thisArg,args)}}function amend(amendmentFunction,args,element){return amendmentResult=>{if(amendmentResult&&(amendmentResult.cancel||amendmentResult.redirect)){return amendmentResult}if(element){return runCallbackIfPossible(element[amendmentFunction],args,element)}}}function processNewChildren(newChildren,route){if(!Array.isArray(newChildren)&&!isObject(newChildren)){throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`))}route.__children=[];const childRoutes=toArray(newChildren);for(let i=0;i<childRoutes.length;i++){ensureRoute(childRoutes[i]);route.__children.push(childRoutes[i])}}function removeDomNodes(nodes){if(nodes&&nodes.length){const parent=nodes[0].parentNode;for(let i=0;i<nodes.length;i++){parent.removeChild(nodes[i])}}}function getPathnameForRouter(pathname,router){const base=router.__effectiveBaseUrl;return base?router.constructor.__createUrl(pathname.replace(/^\//,""),base).pathname:pathname}function getMatchedPath(chain){return chain.map(item=>item.path).reduce((a,b)=>{if(b.length){return a.replace(/\/$/,"")+"/"+b.replace(/^\//,"")}return a},"")}class Router extends Resolver{constructor(outlet,options){const baseElement=document.head.querySelector("base");super([],Object.assign({baseUrl:baseElement&&baseElement.getAttribute("href")},options));this.resolveRoute=context=>this.__resolveRoute(context);const triggers=Router.NavigationTrigger;Router.setTriggers.apply(Router,Object.keys(triggers).map(key=>triggers[key]));this.baseUrl;this.ready;this.ready=Promise.resolve(outlet);this.location;this.location=createLocation({resolver:this});this.__lastStartedRenderId=0;this.__navigationEventHandler=this.__onNavigationEvent.bind(this);this.setOutlet(outlet);this.subscribe()}__resolveRoute(context){const route=context.route;let callbacks=Promise.resolve();if(isFunction(route.children)){callbacks=callbacks.then(()=>route.children(copyContextWithoutNext(context))).then(children=>{if(!isResultNotEmpty(children)&&!isFunction(route.children)){children=route.children}processNewChildren(children,route)})}const commands={redirect:path=>createRedirect(context,path),component:component=>renderComponent(context,component)};return callbacks.then(()=>runCallbackIfPossible(route.action,[context,commands],route)).then(result=>{if(isResultNotEmpty(result)){if(result instanceof HTMLElement||result.redirect||result===notFoundResult){return result}}if(isString(route.redirect)){return commands.redirect(route.redirect)}if(route.bundle){return loadBundle(route.bundle).then(()=>{},()=>{throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`))})}}).then(result=>{if(isResultNotEmpty(result)){return result}if(isString(route.component)){return commands.component(route.component)}})}setOutlet(outlet){if(outlet){this.__ensureOutlet(outlet)}this.__outlet=outlet}getOutlet(){return this.__outlet}setRoutes(routes){this.__urlForName=void 0;super.setRoutes(routes);this.__onNavigationEvent()}render(pathnameOrContext,shouldUpdateHistory){const renderId=++this.__lastStartedRenderId,pathname=pathnameOrContext.pathname||pathnameOrContext;this.ready=this.resolve(pathnameOrContext).then(context=>this.__fullyResolveChain(context)).then(context=>{if(renderId===this.__lastStartedRenderId){const previousContext=this.__previousContext;if(context===previousContext){return this.location}this.location=createLocation(context);fireRouterEvent("location-changed",{router:this,location:this.location});if(shouldUpdateHistory){this.__updateBrowserHistory(context.pathname,context.redirectFrom)}this.__addAppearingContent(context,previousContext);const animationDone=this.__animateIfNeeded(context);this.__runOnAfterEnterCallbacks(context);this.__runOnAfterLeaveCallbacks(context,previousContext);return animationDone.then(()=>{if(renderId===this.__lastStartedRenderId){this.__removeDisappearingContent();this.__previousContext=context;return this.location}})}}).catch(error=>{if(renderId===this.__lastStartedRenderId){if(shouldUpdateHistory){this.__updateBrowserHistory(pathname)}removeDomNodes(this.__outlet&&this.__outlet.children);this.location=createLocation({pathname,resolver:this});fireRouterEvent("error",{router:this,error,pathname});throw error}});return this.ready}__fullyResolveChain(originalContext,currentContext=originalContext){return this.__amendWithResolutionResult(currentContext).then(amendedContext=>{const initialContext=amendedContext!==currentContext?amendedContext:originalContext;return amendedContext.next().then(nextContext=>{if(null===nextContext||nextContext===notFoundResult){const matchedPath=getPathnameForRouter(getMatchedPath(amendedContext.chain),amendedContext.resolver);if(matchedPath!==amendedContext.pathname){throw getNotFoundError(initialContext)}}return nextContext&&nextContext!==notFoundResult?this.__fullyResolveChain(initialContext,nextContext):this.__amendWithOnBeforeCallbacks(initialContext)})})}__amendWithResolutionResult(context){const result=context.result;if(result instanceof HTMLElement){return Promise.resolve(context)}else if(result.redirect){return this.__redirect(result.redirect,context.__redirectCount).then(context=>this.__amendWithResolutionResult(context))}else if(result instanceof Error){return Promise.reject(result)}else{return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". `+`Expected redirect object or HTML element, but got: "${logValue(result)}". `+`Double check the action return value for the route.`)))}}__amendWithOnBeforeCallbacks(contextWithFullChain){return this.__runOnBeforeCallbacks(contextWithFullChain).then(amendedContext=>{if(amendedContext===this.__previousContext||amendedContext===contextWithFullChain){return amendedContext}return this.__fullyResolveChain(amendedContext)})}__runOnBeforeCallbacks(newContext){const previousContext=this.__previousContext||{},previousChain=previousContext.chain||[],newChain=newContext.chain;let callbacks=Promise.resolve();const prevent=()=>({cancel:!0}),redirect=pathname=>createRedirect(newContext,pathname);newContext.__divergedChainIndex=0;if(previousChain.length){for(let i=0;i<_Mathmin(previousChain.length,newChain.length);i=++newContext.__divergedChainIndex){if(previousChain[i].route!==newChain[i].route||previousChain[i].path!==newChain[i].path||(previousChain[i].element&&previousChain[i].element.localName)!==(newChain[i].element&&newChain[i].element.localName)){break}}for(let i=previousChain.length-1;i>=newContext.__divergedChainIndex;i--){const location=createLocation(newContext);callbacks=callbacks.then(amend("onBeforeLeave",[location,{prevent},this],previousChain[i].element)).then(result=>{if(!(result||{}).redirect){return result}})}}for(let i=newContext.__divergedChainIndex;i<newChain.length;i++){const location=createLocation(newContext,newChain[i].route);callbacks=callbacks.then(amend("onBeforeEnter",[location,{prevent,redirect},this],newChain[i].element))}return callbacks.then(amendmentResult=>{if(amendmentResult){if(amendmentResult.cancel){return this.__previousContext}if(amendmentResult.redirect){return this.__redirect(amendmentResult.redirect,newContext.__redirectCount)}}return newContext})}__redirect(redirectData,counter){if(counter>MAX_REDIRECT_COUNT){throw new Error(log(`Too many redirects when rendering ${redirectData.from}`))}return this.resolve({pathname:this.urlForPath(redirectData.pathname,redirectData.params),redirectFrom:redirectData.from,__redirectCount:(counter||0)+1})}__ensureOutlet(outlet=this.__outlet){if(!(outlet instanceof Node)){throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`))}}__updateBrowserHistory(pathname,replace){if(window.location.pathname!==pathname){const changeState=replace?"replaceState":"pushState";window.history[changeState](null,document.title,pathname);window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__addAppearingContent(context,previousContext){this.__ensureOutlet();this.__removeAppearingContent();let deepestCommonParent=this.__outlet;for(let i=0;i<context.__divergedChainIndex;i++){const unchangedElement=previousContext&&previousContext.chain[i].element;if(unchangedElement){if(unchangedElement.parentNode===deepestCommonParent){context.chain[i].element=unchangedElement;deepestCommonParent=unchangedElement}else{break}}}this.__disappearingContent=Array.from(deepestCommonParent.children);this.__appearingContent=[];let parentElement=deepestCommonParent;for(let i=context.__divergedChainIndex;i<context.chain.length;i++){const elementToAdd=context.chain[i].element;if(elementToAdd){parentElement.appendChild(elementToAdd);if(parentElement===deepestCommonParent){this.__appearingContent.push(elementToAdd)}parentElement=elementToAdd}}}__removeDisappearingContent(){if(this.__disappearingContent){removeDomNodes(this.__disappearingContent)}this.__disappearingContent=null;this.__appearingContent=null}__removeAppearingContent(){if(this.__disappearingContent&&this.__appearingContent){removeDomNodes(this.__appearingContent);this.__disappearingContent=null;this.__appearingContent=null}}__runOnAfterLeaveCallbacks(currentContext,targetContext){if(!targetContext){return}for(let i=targetContext.chain.length-1;i>=currentContext.__divergedChainIndex;i--){const currentComponent=targetContext.chain[i].element;if(!currentComponent){continue}try{const location=createLocation(currentContext);runCallbackIfPossible(currentComponent.onAfterLeave,[location,{},targetContext.resolver],currentComponent)}finally{removeDomNodes(currentComponent.children)}}}__runOnAfterEnterCallbacks(currentContext){for(let i=currentContext.__divergedChainIndex;i<currentContext.chain.length;i++){const currentComponent=currentContext.chain[i].element||{},location=createLocation(currentContext,currentContext.chain[i].route);runCallbackIfPossible(currentComponent.onAfterEnter,[location,{},currentContext.resolver],currentComponent)}}__animateIfNeeded(context){const from=(this.__disappearingContent||[])[0],to=(this.__appearingContent||[])[0],promises=[],chain=context.chain;let config;for(let i=chain.length;0<i;i--){if(chain[i-1].route.animate){config=chain[i-1].route.animate;break}}if(from&&to&&config){const leave=isObject(config)&&config.leave||"leaving",enter=isObject(config)&&config.enter||"entering";promises.push(animate(from,leave));promises.push(animate(to,enter))}return Promise.all(promises).then(()=>context)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(event){const pathname=event?event.detail.pathname:window.location.pathname;if(isString(this.__normalizePathname(pathname))){if(event&&event.preventDefault){event.preventDefault()}this.render(pathname,!0)}}static setTriggers(...triggers){setNavigationTriggers(triggers)}urlForName(name,params){if(!this.__urlForName){this.__urlForName=generateUrls(this)}return getPathnameForRouter(this.__urlForName(name,params),this)}urlForPath(path,params){return getPathnameForRouter(Router.pathToRegexp.compile(path)(params),this)}static go(pathname){return fireRouterEvent("go",{pathname})}}_exports.Router=Router;const DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function isMinified(){function test(){return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{return isForcedDevelopmentMode()||isLocalhost()&&!isMinified()&&!isFlowProductionMode()}catch(e){return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const productionModeApps=Object.keys(window.Vaadin.Flow.clients).map(key=>window.Vaadin.Flow.clients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{callback=new Function(match[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}window.Vaadin=window.Vaadin||{};const runIfDevelopmentMode=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}function maybeGatherAndSendStats(){}const usageStatistics=function(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.2.0"});usageStatistics();Router.NavigationTrigger={POPSTATE,CLICK};var vaadinRouter={Router:Router,Resolver:Resolver};_exports.$vaadinRouter=vaadinRouter;function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;if(isObject){old=inst.__dataTemp[property]}}let shouldChange=old!==value&&(old===old||value===value);if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}const MutableData=dedupingMixin(superClass=>{class MutableData extends superClass{_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}return MutableData});_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{class OptionalMutableData extends superClass{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};_exports.$mutableData=mutableData;let newInstance=null;function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}const templateInstanceBase=PropertyEffects(class{});class TemplateInstanceBase extends templateInstanceBase{constructor(props){super();this._configureProperties(props);this.root=this._stampTemplate(this.__dataHost);let children=this.children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}_showHideChildren(hide){let c=this.children;for(let i=0,n;i<c.length;i++){n=c[i];if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap(wrap(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){wrap(wrap(replace).parentNode).replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}dispatchEvent(event){return!0}}_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;TemplateInstanceBase.prototype.__templatizeOptions;TemplateInstanceBase.prototype._methodHost;TemplateInstanceBase.prototype.__templatizeOwner;TemplateInstanceBase.prototype.__hostProps;const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}function createTemplatizerClass(template,templateInfo,options){let templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;if(templatize.mixin){templatizerBase=templatize.mixin(templatizerBase)}let klass=class extends templatizerBase{};klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}function addPropagateEffects(template,templateInfo,options){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){let klass=templateInfo.templatizeTemplateClass;if(!klass){let templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate;klass=templateInfo.templatizeTemplateClass=class TemplatizedTemplate extends templatizedBase{};let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);if(template.__dataProto){Object.assign(template.__data,template.__dataProto)}template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}function templatize(template,owner,options){if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}addPropagateEffects(template,templateInfo,options);let klass=class TemplateInstance extends baseClass{};klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=klass;return klass}function modelForElement(template,node){let model;while(node){if(model=node.__templatizeInstance){if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{node=wrap(node).parentNode}}return null}var templatize$1={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};_exports.$templatize=templatize$1;class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;debouncerQueue.delete(this);this._callback()})}cancel(){if(this.isActive()){this._cancelAsync();debouncerQueue.delete(this)}}_cancelAsync(){if(this.isActive()){this._asyncModule.cancel(this._timer);this._timer=null}}flush(){if(this.isActive()){this.cancel();this._callback()}}isActive(){return null!=this._timer}static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}_exports.Debouncer=Debouncer;let debouncerQueue=new Set;const enqueueDebouncer=function(debouncer){debouncerQueue.add(debouncer)};_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;const flushDebouncers=function(){const didFlush=!!debouncerQueue.size;debouncerQueue.forEach(debouncer=>{try{debouncer.flush()}catch(e){setTimeout(()=>{throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;const flush=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush;var flush$1={flush:flush,enqueueDebouncer:enqueueDebouncer};_exports.$flush=flush$1;const domRepeatBase=OptionalMutableData(PolymerElement);class DomRepeat extends domRepeatBase{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__limit=1/0;this.__pool=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__lastChunkTime=null;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;this.__ctor=null;this.__isDetached=!0;this.template=null}disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.__isDetached){this.__isDetached=!1;let wrappedParent=wrap(wrap(this).parentNode);for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,wrappedParent)}}}__ensureTemplatized(){if(!this.__ctor){let template=this.template=this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},notifyInstanceProp:function(inst,prop,value){if(matches(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,`${JSCompiler_renameProperty("items",this)}.${idx}`,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return _Mathceil(1e3/rate)}__initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}__tryRenderChunk(){if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=_Mathround(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}if(!this.__handleItemPath(change.path,change.value)){this.__initializeChunking();this.__debounceRender(this.__render)}}__handleObservedPaths(path){if(this.__sortFn||this.__filterFn){if(!path){this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}render(){this.__debounceRender(this.__render);flush()}__render(){if(!this.__ensureTemplatized()){return}this.__applyFullRefresh();this.__pool.length=0;this._setRenderedItemCount(this.__instances.length);this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this.__tryRenderChunk()}__applyFullRefresh(){let items=this.items||[],isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx=0;const limit=_Mathmin(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];const wrappedRoot=wrap(inst.root);for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];wrappedRoot.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){let inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){let inst=this.__pool.pop();if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap(wrap(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);this.__handleObservedPaths(itemSubPath);let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;class Lumo extends HTMLElement{static get version(){return"1.4.2"}}_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version$1={Lumo:Lumo};_exports.$version=version$1;"use strict";let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};_exports.$documentWait=documentWait$1;"use strict";let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";let transformFn=null,validateFn=null;class CustomStyleInterface{constructor(){this.customStyles=[];this.enqueued=!1;documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){const styleToTransform=style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{get(){return transformFn},set(fn){transformFn=fn}},validateCallback:{get(){return validateFn},set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});const CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};_exports.$customStyleInterface$1=customStyleInterface;const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};_exports.$commonRegex=commonRegex;"use strict";function updateNativeProperties(element,properties){for(let p in properties){if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}function getComputedStyleValue(element,property){const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};_exports.$commonUtils=commonUtils;"use strict";const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}let cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}const disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}const nativeCssVariables=nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};_exports.$styleSettings=styleSettings;"use strict";const customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){},prepareTemplateDom(template,elementName){},prepareTemplateStyles(template,elementName,elementExtends){},styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},styleElement(element){customStyleInterface$1.processStyles()},styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;class CustomStyle extends HTMLElement{constructor(){super();this._style=null;CustomStyleInterface$1.addCustomStyle(this)}getStyle(){if(this._style){return this._style}const style=this.querySelector("style");if(!style){return null}this._style=style;const include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent}if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>
  <style>
    html {
      /* Base (background) */
      --lumo-base-color: #FFF;

      /* Tint */
      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
      --lumo-tint: #FFF;

      /* Shade */
      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
      --lumo-shade: hsl(214, 35%, 15%);

      /* Contrast */
      --lumo-contrast-5pct: var(--lumo-shade-5pct);
      --lumo-contrast-10pct: var(--lumo-shade-10pct);
      --lumo-contrast-20pct: var(--lumo-shade-20pct);
      --lumo-contrast-30pct: var(--lumo-shade-30pct);
      --lumo-contrast-40pct: var(--lumo-shade-40pct);
      --lumo-contrast-50pct: var(--lumo-shade-50pct);
      --lumo-contrast-60pct: var(--lumo-shade-60pct);
      --lumo-contrast-70pct: var(--lumo-shade-70pct);
      --lumo-contrast-80pct: var(--lumo-shade-80pct);
      --lumo-contrast-90pct: var(--lumo-shade-90pct);
      --lumo-contrast: var(--lumo-shade);

      /* Text */
      --lumo-header-text-color: var(--lumo-contrast);
      --lumo-body-text-color: var(--lumo-contrast-90pct);
      --lumo-secondary-text-color: var(--lumo-contrast-70pct);
      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
      --lumo-disabled-text-color: var(--lumo-contrast-30pct);

      /* Primary */
      --lumo-primary-color: hsl(214, 90%, 52%);
      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
      --lumo-primary-text-color: var(--lumo-primary-color);
      --lumo-primary-contrast-color: #FFF;

      /* Error */
      --lumo-error-color: hsl(3, 100%, 61%);
      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
      --lumo-error-text-color: hsl(3, 92%, 53%);
      --lumo-error-contrast-color: #FFF;

      /* Success */
      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
      --lumo-success-text-color: hsl(145, 100%, 32%);
      --lumo-success-contrast-color: #FFF;
    }
  </style>
</custom-style><dom-module id="lumo-color">
  <template>
    <style>
      [theme~="dark"] {
        /* Base (background) */
        --lumo-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --lumo-tint: hsl(214, 100%, 98%);

        /* Shade */
        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --lumo-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --lumo-contrast-5pct: var(--lumo-tint-5pct);
        --lumo-contrast-10pct: var(--lumo-tint-10pct);
        --lumo-contrast-20pct: var(--lumo-tint-20pct);
        --lumo-contrast-30pct: var(--lumo-tint-30pct);
        --lumo-contrast-40pct: var(--lumo-tint-40pct);
        --lumo-contrast-50pct: var(--lumo-tint-50pct);
        --lumo-contrast-60pct: var(--lumo-tint-60pct);
        --lumo-contrast-70pct: var(--lumo-tint-70pct);
        --lumo-contrast-80pct: var(--lumo-tint-80pct);
        --lumo-contrast-90pct: var(--lumo-tint-90pct);
        --lumo-contrast: var(--lumo-tint);

        /* Text */
        --lumo-header-text-color: var(--lumo-contrast);
        --lumo-body-text-color: var(--lumo-contrast-90pct);
        --lumo-secondary-text-color: var(--lumo-contrast-70pct);
        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
        --lumo-disabled-text-color: var(--lumo-contrast-30pct);

        /* Primary */
        --lumo-primary-color: hsl(214, 86%, 55%);
        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --lumo-primary-text-color: hsl(214, 100%, 70%);
        --lumo-primary-contrast-color: #FFF;

        /* Error */
        --lumo-error-color: hsl(3, 90%, 63%);
        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --lumo-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --lumo-success-color: hsl(145, 65%, 42%);
        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --lumo-success-text-color: hsl(145, 85%, 47%);
      }

      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      [theme~="dark"] {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }

      a {
        color: var(--lumo-primary-text-color);
      }

      blockquote {
        color: var(--lumo-secondary-text-color);
      }

      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-color-legacy">
  <template>
    <style include="lumo-color">
      :host {
        color: var(--lumo-body-text-color) !important;
        background-color: var(--lumo-base-color) !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);;const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$1.content);;const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<custom-style>
  <style>
    html {
      --lumo-size-xs: 1.625rem;
      --lumo-size-s: 1.875rem;
      --lumo-size-m: 2.25rem;
      --lumo-size-l: 2.75rem;
      --lumo-size-xl: 3.5rem;

      /* Icons */
      --lumo-icon-size-s: 1.25em;
      --lumo-icon-size-m: 1.5em;
      --lumo-icon-size-l: 2.25em;
      /* For backwards compatibility */
      --lumo-icon-size: var(--lumo-icon-size-m);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<custom-style>
  <style>
    html {
      /* Square */
      --lumo-space-xs: 0.25rem;
      --lumo-space-s: 0.5rem;
      --lumo-space-m: 1rem;
      --lumo-space-l: 1.5rem;
      --lumo-space-xl: 2.5rem;

      /* Wide */
      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

      /* Tall */
      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$3.content);const $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML=`<custom-style>
  <style>
    html {
      /* Border radius */
      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --lumo-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --lumo-clickable-cursor: default;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$4.content);const $_documentContainer$5=document.createElement("template");$_documentContainer$5.innerHTML=`<custom-style>
  <style>
    html {
      /* Font families */
      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --lumo-font-size-xxs: .75rem;
      --lumo-font-size-xs: .8125rem;
      --lumo-font-size-s: .875rem;
      --lumo-font-size-m: 1rem;
      --lumo-font-size-l: 1.125rem;
      --lumo-font-size-xl: 1.375rem;
      --lumo-font-size-xxl: 1.75rem;
      --lumo-font-size-xxxl: 2.5rem;

      /* Line heights */
      --lumo-line-height-xs: 1.25;
      --lumo-line-height-s: 1.375;
      --lumo-line-height-m: 1.625;
    }

  </style>
</custom-style><dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$5.content);const $_documentContainer$6=html`<dom-module id="lumo-details" theme-for="vaadin-details">
  <template>
    <style>
      :host {
        margin: var(--lumo-space-xs) 0;
        outline: none;
      }

      [part="summary"] {
        display: flex;
        align-items: center;
        width: 100%;
        outline: none;
        padding: var(--lumo-space-s) 0;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-secondary-text-color);
        background-color: inherit;
        border-radius: var(--lumo-border-radius-m);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([focus-ring]) [part="summary"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part="toggle"] {
        display: block;
        width: 1em;
        height: 1em;
        margin-left: calc(var(--lumo-space-xs) * -1);
        margin-right: var(--lumo-space-xs);
        font-size: var(--lumo-icon-size-s);
        line-height: 1;
        color: var(--lumo-contrast-60pct);
        font-family: "lumo-icons";
      }

      :host([disabled]) [part="summary"],
      :host([disabled]) [part="toggle"] {
        color: var(--lumo-disabled-text-color);
      }

      @media (hover: hover) {
        :host(:not([disabled])) [part="summary"]:hover,
        :host(:not([disabled])) [part="summary"]:hover [part="toggle"] {
          color: var(--lumo-contrast-80pct);
        }
      }

      [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
      }

      :host([opened]) [part="toggle"] {
        transform: rotate(90deg);
      }

      [part="content"] {
        padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-m);
      }

      :host([theme~="filled"]) {
        background-color: var(--lumo-contrast-5pct);
        border-radius: var(--lumo-border-radius-m);
      }

      :host([theme~="filled"]) [part="summary"] {
        padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
      }

      :host([theme~="filled"]) [part="content"] {
        padding-left: var(--lumo-space-m);
        padding-right: var(--lumo-space-m);
      }

      :host([theme~="small"]) [part="summary"] {
        padding-top: var(--lumo-space-xs);
        padding-bottom: var(--lumo-space-xs);
      }

      :host([theme~="small"]) [part="toggle"] {
        margin-right: calc(var(--lumo-space-xs) / 2);
      }

      :host([theme~="small"]) [part\$="content"] {
        font-size: var(--lumo-font-size-s);
      }

      :host([theme~="reverse"]) [part="summary"] {
        justify-content: space-between;
      }

      :host([theme~="reverse"]) [part="toggle"] {
        order: 1;
        margin-right: 0;
      }

      :host([theme~="reverse"][theme~="filled"]) [part="summary"] {
        padding-left: var(--lumo-space-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$6.content);const ThemePropertyMixin=superClass=>class VaadinThemePropertyMixin extends superClass{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;const ThemableMixin=superClass=>class VaadinThemableMixin extends ThemePropertyMixin(superClass){static finalize(){super.finalize();const template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(s=>{this._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}static _includeMatchingThemes(template){const domModule=DomModule,modules=domModule.prototype.modules;let hasThemes=!1;const defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort((moduleNameA,moduleNameB)=>{const vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameA.indexOf(prefix)).length,vaadinThemeB=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameB.indexOf(prefix)).length;if(vaadinA!==vaadinB){return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){return vaadinThemeA?-1:1}else{return 0}}).forEach(moduleName=>{if(moduleName!==defaultModuleName){const themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(themeForToken=>{if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(this.is)){hasThemes=!0;this._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){this._includeStyle(defaultModuleName,template)}}static _includeStyle(moduleName,template){if(template&&!template.content.querySelector(`style[include="${moduleName}"]`)){const styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={ThemableMixin:ThemableMixin};_exports.$vaadinThemableMixin=vaadinThemableMixin;const DEV_MODE_CODE_REGEXP$1=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function isMinified$1(){function test(){return!0}return uncommentAndRun$1(test)}function isDevelopmentMode$1(){try{return isForcedDevelopmentMode$1()||isLocalhost$1()&&!isMinified$1()&&!isFlowProductionMode$1()}catch(e){return!1}}function isForcedDevelopmentMode$1(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost$1(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode$1(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const productionModeApps=Object.keys(window.Vaadin.Flow.clients).map(key=>window.Vaadin.Flow.clients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun$1(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP$1.exec(callback.toString());if(match){try{callback=new Function(match[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}window.Vaadin=window.Vaadin||{};const runIfDevelopmentMode$1=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun$1(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode$1;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode$1()}var vaadinDevelopmentModeDetector={runIfDevelopmentMode:runIfDevelopmentMode$1};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats$1(){}const usageStatistics$1=function(){if("function"===typeof runIfDevelopmentMode$1){return runIfDevelopmentMode$1(maybeGatherAndSendStats$1)}};_exports.usageStatistics=usageStatistics$1;var vaadinUsageStatistics={usageStatistics:usageStatistics$1};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics$1){usageStatistics$1()}};let statsJob;const ElementMixin$1=superClass=>class VaadinElementMixin extends superClass{static _finalizeClass(){super._finalizeClass();if(this.is){window.Vaadin.registrations.push(this);if(window.Vaadin.developmentModeCallback){statsJob=Debouncer.debounce(statsJob,idlePeriod,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});enqueueDebouncer(statsJob)}}}ready(){super.ready();if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}}};_exports.ElementMixin$1=ElementMixin$1;var vaadinElementMixin={ElementMixin:ElementMixin$1};_exports.$vaadinElementMixin=vaadinElementMixin;const TabIndexMixin=superClass=>class VaadinTabIndexMixin extends superClass{static get properties(){var properties={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){properties.tabIndex=properties.tabindex}return properties}},ControlStateMixin=superClass=>class VaadinControlStateMixin extends TabIndexMixin(superClass){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{if(e.composedPath()[0]===this){this._focus(e)}else if(-1!==e.composedPath().indexOf(this.focusElement)&&!this.disabled){this._setFocused(!0)}});this.addEventListener("focusout",e=>this._setFocused(!1));super.ready();const ensureEventComposed=e=>{if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){this._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(this);this._setFocused(!1);setTimeout(()=>this._isShiftTabbing=!1,0)}else{const firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(firefox&&63<=parseFloat(firefox[1])&&66>parseFloat(firefox[1])&&this.parentNode&&this.nextSibling){const fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=this.tabIndex;this.parentNode.insertBefore(fakeTarget,this.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",()=>this.parentNode.removeChild(fakeTarget))}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(()=>{this._focus();this._setFocused(!0);this.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback();document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback();document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);if(this.hasAttribute("focused")){this._setFocused(!1)}}_setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);return this}_focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}blur(){this.focusElement.blur();this._setFocused(!1)}_disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}_tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}click(){if(!this.disabled){super.click()}}};_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={ControlStateMixin:ControlStateMixin};_exports.$vaadinControlStateMixin=vaadinControlStateMixin;class DetailsElement extends ControlStateMixin(ElementMixin$1(ThemableMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="content"] {
        display: none;
        overflow: hidden;
      }

      [part="summary"][disabled] {
        pointer-events: none;
      }

      :host([opened]) [part="content"] {
        display: block;
        overflow: visible;
      }
    </style>
    <div role="heading">
      <div role="button" part="summary" on-click="_onToggleClick" on-keydown="_onToggleKeyDown" disabled\$="[[disabled]]" aria-expanded\$="[[_getAriaExpanded(opened)]]">
        <span part="toggle"></span>
        <span part="summary-content"><slot name="summary"></slot></span>
      </div>
    </div>
    <div part="content" aria-hidden\$="[[_getAriaHidden(opened)]]">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-details"}static get version(){return"1.0.1"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector("[part=\"content\"]")}get focusElement(){return this.shadowRoot.querySelector("[part=\"summary\"]")}ready(){super.ready();this._collapsible.addEventListener("keydown",e=>{if(e.shiftKey&&9===e.keyCode){e.stopPropagation()}})}_getAriaExpanded(opened){return opened?"true":"false"}_getAriaHidden(opened){return opened?"false":"true"}_openedChanged(opened){this._collapsible.style.maxHeight=opened?"":"0px"}_onToggleClick(e){this.opened=!this.opened}_onToggleKeyDown(e){if(-1<[13,32].indexOf(e.keyCode)){e.preventDefault();this.opened=!this.opened}}}_exports.DetailsElement=DetailsElement;customElements.define(DetailsElement.is,DetailsElement);var vaadinDetails={DetailsElement:DetailsElement};_exports.$vaadinDetails=vaadinDetails;const $_documentContainer$7=html`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      :host {
        background-color: var(--lumo-base-color);
      }

      [part="navbar"] {
        background: var(--vaadin-app-layout-navbar-background, linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct)) var(--lumo-base-color));
      }

      [part="navbar"] > ::slotted(vaadin-tabs[slot="menu"]) {
        box-shadow: none;
        --lumo-font-size-m: var(--lumo-font-size-s);
        --lumo-icon-size-m: 1.5rem;
      }

      @media (min-width: 700px) {
        [part="navbar"] {
          padding: 0 var(--lumo-space-m);
        }

        [part="navbar"] > ::slotted(vaadin-tabs[slot="menu"]) {
          --lumo-font-size-m: unset;
          --lumo-icon-size-m: unset;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$7.content);class AppLayoutElement extends ElementMixin$1(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: flex !important;
        flex-direction: column-reverse;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--vaadin-app-layout-viewport-bottom);
        /* CSS API for host */
        --vaadin-app-layout-viewport-bottom: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="branding"],
      [part="navbar"]::after {
        display: none;
      }

      [part="navbar"] {
        flex: none;
        display: flex;
        align-items: center;
        height: var(--vaadin-app-layout-navbar-height, auto);
        background: var(--vaadin-app-layout-navbar-background, #eee);
      }

      [part="navbar"]::after {
        content: '';
      }

      [part="branding"],
      [part="navbar"]::after {
        /*
          Makes the menu part horizontally centered on wide viewports,
          regardless of the size of contents inside the branding
          and the secondary parts. Prevents unnecessary menu shrinking.

          NOTE: IE requires a unit for the flex-basis value.

          NOTE: \`0px\` might confuse linters and minifiers.
        */
        flex: 1 0 0.001px;
      }

      [part=navbar] > ::slotted([slot="menu"]) {
        display: flex;
        align-items: center;
        overflow: hidden;
        max-width: 100%;
        margin: auto;
      }

      [part="content"] {
        flex: auto;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      @media (min-width: 700px) {
        :host {
          flex-direction: column;
        }

        [part=navbar] > ::slotted([slot="menu"]) {
          flex: initial;
        }

        [part="branding"],
        [part="navbar"]::after {
          display: flex;
        }
      }
    </style>

    <nav part="navbar">
      <div part="branding" role="banner">
        <slot name="branding"></slot>
      </div>
      <slot name="menu"></slot>
      </nav>
    <div part="content" role="main" aria-live="polite">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"1.0.2"}constructor(){super();if(/iPad|iPhone|iPod/.test(navigator.userAgent)){this._boundIosResizeListener=()=>this._detectIosNavbar()}}connectedCallback(){super.connectedCallback();if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}_detectIosNavbar(){const innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-app-layout-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-app-layout-viewport-bottom","0")}}}_exports.AppLayoutElement=AppLayoutElement;customElements.define(AppLayoutElement.is,AppLayoutElement);var vaadinAppLayout={AppLayoutElement:AppLayoutElement};_exports.$vaadinAppLayout=vaadinAppLayout;const $_documentContainer$8=html`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        text-align: center;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host([orientation="vertical"]) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
      }

      :host(:hover),
      :host([focus-ring]) {
        color: var(--lumo-body-text-color);
      }

      :host([selected]) {
        color: var(--lumo-primary-text-color);
        transition: 0.6s color;
      }

      :host([active]:not([selected])) {
        color: var(--lumo-primary-text-color);
        transition-duration: 0.1s;
      }

      :host::before,
      :host::after {
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
        transform-origin: 100% 50%;
      }

      :host::after {
        box-shadow: 0 0 0 4px var(--lumo-primary-color);
        opacity: 0.15;
        transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
      }

      :host([selected])::before,
      :host([selected])::after {
        transform: translateX(-50%) scale(1);
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
        margin: 0;
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        opacity: 1;
        color: var(--lumo-disabled-text-color);
      }

      /* Focus-ring */

      :host([focus-ring]) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
        border-radius: var(--lumo-border-radius);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$8.content);const ItemMixin=superClass=>class VaadinItemMixin extends superClass{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}constructor(){super();this.value}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(value){this._value=value}ready(){super.ready();const attrValue=this.getAttribute("value");if(null!==attrValue){this.value=attrValue}this.addEventListener("focus",e=>this._setFocused(!0),!0);this.addEventListener("blur",e=>this._setFocused(!1),!0);this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const mouseUpListener=()=>{this._setActive(this._mousedown=!1);document.removeEventListener("mouseup",mouseUpListener)};document.addEventListener("mouseup",mouseUpListener)});this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback();if(this.hasAttribute("active")){this._setFocused(!1)}}_selectedChanged(selected){this.setAttribute("aria-selected",selected)}_disabledChanged(disabled){if(disabled){this.selected=!1;this.setAttribute("aria-disabled","true");this.blur()}else{this.removeAttribute("aria-disabled")}}_setFocused(focused){if(focused){this.setAttribute("focused","");if(!this._mousedown){this.setAttribute("focus-ring","")}}else{this.removeAttribute("focused");this.removeAttribute("focus-ring");this._setActive(!1)}}_setActive(active){if(active){this.setAttribute("active","")}else{this.removeAttribute("active")}}_onKeydown(event){if(/^( |SpaceBar|Enter)$/.test(event.key)&&!event.defaultPrevented){event.preventDefault();this._setActive(!0)}}_onKeyup(event){if(this.hasAttribute("active")){this._setActive(!1);this.click()}}};_exports.ItemMixin=ItemMixin;var vaadinItemMixin={ItemMixin:ItemMixin};_exports.$vaadinItemMixin=vaadinItemMixin;class TabElement extends ElementMixin$1(ThemableMixin(ItemMixin(PolymerElement))){static get template(){return html`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"2.1.2"}ready(){super.ready();this.setAttribute("role","tab")}}_exports.TabElement=TabElement;customElements.define(TabElement.is,TabElement);var vaadinTab={TabElement:TabElement};_exports.$vaadinTab=vaadinTab;const $_documentContainer$9=html`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
        display: inline-flex;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
        position: absolute;
        z-index: 1;
        font-family: lumo-icons;
        color: var(--lumo-tertiary-text-color);
        font-size: var(--lumo-icon-size-m);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5em;
        height: 100%;
        transition: 0.2s opacity;
        top: 0;
      }

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$9.content);function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){let rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount);for(let i=0;i<rowCount;i++){distances[i]=Array(columnCount);distances[i][0]=i}for(let j=0;j<columnCount;j++)distances[0][j]=j;for(let i=1;i<rowCount;i++){for(let j=1;j<columnCount;j++){if(equals(current[currentStart+j-1],old[oldStart+i-1]))distances[i][j]=distances[i-1][j-1];else{let north=distances[i-1][j]+1,west=distances[i][j-1]+1;distances[i][j]=north<west?north:west}}}return distances}function spliceOperationsFromEditDistances(distances){let i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}let northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){let prefixCount=0,suffixCount=0,splice,minLength=_Mathmin(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd)splice.removed.push(old[oldStart++]);return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];let ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;let splices=[],index=currentStart,oldIndex=oldStart;for(let i=0;i<ops.length;i++){switch(ops[i]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(let i=0;i<searchLength;i++)if(!equals(current[i],old[i]))return i;return searchLength}function sharedSuffix(current,old,searchLength){let index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2]))count++;return count}function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}let FlattenedNodesObserver=class{static getFlattenedNodes(node){const wrapped=wrap(node);if(isSlot(node)){node=node;return wrapped.assignedNodes({flatten:!0})}else{return Array.from(wrapped.childNodes).map(node=>{if(isSlot(node)){node=node;return wrap(node).assignedNodes({flatten:!0})}else{return[node]}}).reduce((a,b)=>a.concat(b),[])}}constructor(target,callback){this._shadyChildrenObserver=null;this._nativeChildrenObserver=null;this._connected=!1;this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}connect(){if(isSlot(this._target)){this._listenSlots([this._target])}else if(wrap(this._target).children){this._listenSlots(wrap(this._target).children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,mutations=>{this._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(mutations=>{this._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(wrap(this._target).children){this._unlistenSlots(wrap(this._target).children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}_schedule(){if(!this._scheduled){this._scheduled=!0;microTask.run(()=>this.flush())}}_processMutations(mutations){this._processSlotMutations(mutations);this.flush()}_processSlotMutations(mutations){if(mutations){for(let i=0,mutation;i<mutations.length;i++){mutation=mutations[i];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;let info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes);for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=s.index;j<s.index+s.addedCount;j++){info.addedNodes.push(newNodes[j])}}this._effectiveNodes=newNodes;let didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}_listenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}_unlistenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}};_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};_exports.$flattenedNodesObserver=flattenedNodesObserver;const ListMixin=superClass=>class VaadinListMixin extends superClass{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected)"]}ready(){super.ready();this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("click",e=>this._onClick(e));this._observer=new FlattenedNodesObserver(this,info=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(items,orientation,selected){if(items){this.setAttribute("aria-orientation",orientation||"vertical");this.items.forEach(item=>{orientation?item.setAttribute("orientation",orientation):item.removeAttribute("orientation");item.updateStyles()});this._setFocusable(selected);const itemToSelect=items[selected];items.forEach(item=>item.selected=item===itemToSelect);if(itemToSelect&&!itemToSelect.disabled){this._scrollToItem(selected)}}}get focused(){return this.getRootNode().activeElement}_filterItems(array){return array.filter(e=>e._hasVaadinItemMixin)}_onClick(event){if(event.metaKey||event.shiftKey||event.ctrlKey){return}const item=this._filterItems(event.composedPath())[0];let idx;if(item&&!item.disabled&&0<=(idx=this.items.indexOf(item))){this.selected=idx}}_searchKey(currentIdx,key){this._searchReset=Debouncer.debounce(this._searchReset,timeOut.after(500),()=>this._searchBuf="");this._searchBuf+=key.toLowerCase();const increment=1,condition=item=>!item.disabled&&0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf);if(!this.items.some(item=>0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))){this._searchBuf=key.toLowerCase()}const idx=1===this._searchBuf.length?currentIdx+1:currentIdx;return this._getAvailableIndex(idx,increment,condition)}_onKeydown(event){if(event.metaKey||event.ctrlKey){return}const key=event.key.replace(/^Arrow/,""),currentIdx=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(key)&&1===key.length){const idx=this._searchKey(currentIdx,key);if(0<=idx){this._focus(idx)}return}const condition=item=>!item.disabled;let idx,increment;if(this._vertical&&"Up"===key||!this._vertical&&"Left"===key){increment=-1;idx=currentIdx-1}else if(this._vertical&&"Down"===key||!this._vertical&&"Right"===key){increment=1;idx=currentIdx+1}else if("Home"===key){increment=1;idx=0}else if("End"===key){increment=-1;idx=this.items.length-1}idx=this._getAvailableIndex(idx,increment,condition);if(0<=idx){this._focus(idx);event.preventDefault()}}_getAvailableIndex(idx,increment,condition){const totalItems=this.items.length;for(let i=0;"number"==typeof idx&&i<totalItems;i++,idx+=increment||1){if(0>idx){idx=totalItems-1}else if(idx>=totalItems){idx=0}const item=this.items[idx];if(condition(item)){return idx}}return-1}_setFocusable(idx){idx=this._getAvailableIndex(idx,1,item=>!item.disabled);const item=this.items[idx]||this.items[0];this.items.forEach(e=>e.tabIndex=e===item?0:-1)}_focus(idx){const item=this.items[idx];this.items.forEach(e=>e.focused=e===item);this._setFocusable(idx);this._scrollToItem(idx);item.focus()}focus(){this._observer&&this._observer.flush();const firstItem=this.querySelector("[tabindex=\"0\"]")||(this.items?this.items[0]:null);firstItem&&firstItem.focus()}get _scrollerElement(){}_scrollToItem(idx){const item=this.items[idx];if(!item){return}const props=this._vertical?["top","bottom"]:["left","right"],scrollerRect=this._scrollerElement.getBoundingClientRect(),nextItemRect=(this.items[idx+1]||item).getBoundingClientRect(),prevItemRect=(this.items[idx-1]||item).getBoundingClientRect();let scrollDistance=0;if(nextItemRect[props[1]]>=scrollerRect[props[1]]){scrollDistance=nextItemRect[props[1]]-scrollerRect[props[1]]}else if(prevItemRect[props[0]]<=scrollerRect[props[0]]){scrollDistance=prevItemRect[props[0]]-scrollerRect[props[0]]}this._scroll(scrollDistance)}get _vertical(){return"horizontal"!==this.orientation}_scroll(pixels){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=pixels}};_exports.ListMixin=ListMixin;var vaadinListMixin={ListMixin:ListMixin};_exports.$vaadinListMixin=vaadinListMixin;"use strict";class StyleNode{constructor(){this.start=0;this.end=0;this.previous=null;this.parent=null;this.rules=null;this.parsedCssText="";this.cssText="";this.atRule=!1;this.type=0;this.keyframesName="";this.selector="";this.parsedSelector=""}}_exports.StyleNode=StyleNode;function parse$1(text){text=clean(text);return parseCss(lex(text),text)}function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}function stringify(node,preserveProperties,text=""){let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse$1,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;"use strict";const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse$1(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse$1(style.textContent)}return style.__cssRules||null}function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}function createScopeStyle(cssText,moniker){let style=document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}let lastHeadApplyNode=null;function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}function processVariableAndFallback(str,callback){let start=str.indexOf("var(");if(-1===start){return callback(str,"","","")}let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");if(-1===comma){return callback(prefix,inner.trim(),"",suffix)}let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}function setElementClassRaw(element,value){if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}const wrap$2=window.ShadyDOM&&window.ShadyDOM.wrap||(node=>node);_exports.wrap$1=wrap$2;function getIsExtends(element){let localName=element.localName,is="",typeExtension="";if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=element.is;typeExtension=element.extends}return{is,typeExtension}}function gatherStyleText(element){const styleTextParts=[],styles=element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}function splitSelectorList(selector){const parts=[];let part="";for(let i=0;0<=i&&i<selector.length;i++){if("("===selector[i]){const end=findMatchingParen(selector,i);part+=selector.slice(i,end+1);i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}if(part){parts.push(part)}return parts}const CSS_BUILD_ATTR="css-build";function getCssBuild(element){if(cssBuild!==void 0){return cssBuild}if(element.__cssBuild===void 0){const attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{const buildComment=getBuildComment(element);if(""!==buildComment){removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}function elementHasBuiltCss(element){return""!==getCssBuild(element)}function getBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;if(buildComment instanceof Comment){const commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}function isOptimalCssBuild(cssBuild=""){if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}function removeBuildComment(element){const buildComment="template"===element.localName?element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap$2,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};_exports.$styleUtil=styleUtil;"use strict";const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";let PropertyEntry,DependantsEntry,MixinMapEntry;class MixinMap{constructor(){this._map={}}set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}get(name){name=name.trim();return this._map[name]||null}}let invalidCallback=null;class ApplyShim{constructor(){this._currentElement=null;this._measureElement=null;this._map=new MixinMap}detectMixin(cssText){return detectMixin(cssText)}gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);if(":root"===rule.selector){rule.selector=":host > *"}}transformCssText(cssText,rule){cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule));return this._consumeCssProperties(cssText,rule)}_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}_fallbacksFromPreviousRules(startRule){let topRule=startRule;while(topRule.parent){topRule=topRule.parent}const fallbacks={};let seenStartRule=!1;forEachRule(topRule,r=>{seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}if(r.selector===startRule.selector){Object.assign(fallbacks,this._cssTextToMap(r.parsedCssText))}});return fallbacks}_consumeCssProperties(text,rule){let m=null;while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));let replacement=this._atApplyToCssProperties(mixinName,defaults);text=`${textBeforeApply}${replacement}${textAfterApply}`;MIXIN_MATCH.lastIndex=idx+replacement.length}return text}_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){value=this._getInitialValueForProperty(property)}else{value="apply-shim-inherit"}}return value}_cssTextToMap(text,replaceInitialOrInherit=!1){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");if(1<sp.length){property=sp[0].trim();value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}_produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){if(valueProperty){processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;Object.defineProperty(ApplyShim.prototype,"invalidCallback",{get(){return invalidCallback},set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};_exports.$applyShim$1=applyShim;"use strict";const templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};_exports.$templateMap=templateMap$1;"use strict";const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}function invalidateTemplate(template){template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}function startValidatingTemplate(template){template[VALIDATING_VERSION]=template[NEXT_VERSION];if(!template._validating){template._validating=!0;promise.then(function(){template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};_exports.$applyShimUtils=applyShimUtils;"use strict";const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(children[i])}}}styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}let root=element.shadowRoot;if(root){let style=root.querySelector("style");if(style){style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;_exports.$customStyleInterfaceDefault=CustomStyleInterface;window.ShadyCSS={prepareTemplate(template,elementName,elementExtends){applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},prepareTemplateDom(template,elementName){},styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;let HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}let SUPPORTS_PASSIVE=!1;(function(){try{let opts=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{return}}let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function canBeLabelled(el){return labellable[el.localName]||!1}function matchingLabels(el){let labels=Array.prototype.slice.call(el.labels||[]);if(!labels.length){labels=[];let root=el.getRootNode();if(el.id){let matching=root.querySelectorAll(`label[for = ${el.id}]`);for(let i=0;i<matching.length;i++){labels.push(matching[i])}}}return labels}let mouseCanceller=function(mouseEvent){let sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}mouseEvent[HANDLED_OBJ]={skip:!0};if("click"===mouseEvent.type){let clickFromLabel=!1,path=getComposedPath(mouseEvent);for(let i=0;i<path.length;i++){if(path[i].nodeType===Node.ELEMENT_NODE){if("label"===path[i].localName){clickedLabels.push(path[i])}else if(canBeLabelled(path[i])){let ownerLabels=matchingLabels(path[i]);for(let j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(path[i]===POINTERSTATE.mouse.target){return}}if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};function setupTeardownMouseCanceller(setup){let events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i=0,en;i<events.length;i++){en=events[i];if(setup){clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}let unset=function(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=getComposedPath(e)[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}function hasLeftMouseButton(ev){let type=ev.type;if(!isMouseEvent(type)){return!1}if("mousemove"===type){let buttons=ev.buttons===void 0?1:ev.buttons;if(ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}return!!(1&buttons)}else{let button=ev.button===void 0?0:ev.button;return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){if(0===ev.detail){return!0}let t=_findOriginalTarget(ev);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE){return!0}let bcr=t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){let ta="auto",path=getComposedPath(ev);for(let i=0,n;i<path.length;i++){n=path[i];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}document.addEventListener("touchend",ignoreMouse,SUPPORTS_PASSIVE?{passive:!0}:!1);const getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:event=>event.composedPath&&event.composedPath()||[],gestures={};_exports.gestures=gestures;const recognizers=[];_exports.recognizers=recognizers;function deepTargetFind(x,y){let node=document.elementFromPoint(x,y),next=node;while(next&&next.shadowRoot&&!window.ShadyDOM){let oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);if(oldNext===next){break}if(next){node=next}}return node}function _findOriginalTarget(ev){const path=getComposedPath(ev);return 0<path.length?path[0]:ev.target}function _handleNative(ev){let handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}let gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=ev;let t=ev.changedTouches[0];if("touchstart"===type){if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];if(handled.skip){return}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){handled[r.name]=!0;r[type](ev)}}}function _handleTouchAction(ev){let t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;let ta=firstTouchAction(ev),shouldPrevent=!1,dx=_Mathabs(POINTERSTATE.touch.x-t.clientX),dy=_Mathabs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{prevent("track")}}}function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}function _add(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}function _remove(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}function register$1(recog){recognizers.push(recog);for(let i=0;i<recog.emits.length;i++){gestures[recog.emits[i]]=recog}}function _findRecognizerByEvent(evName){for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];for(let j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}function setTouchAction(node,value){if(HAS_NATIVE_TA&&node instanceof HTMLElement){microTask.run(()=>{node.style.touchAction=value})}node[TOUCH_ACTION]=value}function _fire(target,type,detail){let ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;wrap(target).dispatchEvent(ev);if(ev.defaultPrevented){let preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}function prevent(evName){let recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},touchstart:function(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function(e){return prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){let x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},touchstart:function(e){let ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},touchmove:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},touchend:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0];if(this.info.started){this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}let dx=_Mathabs(info.x-x),dy=_Mathabs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}function trackFire(info,target,touch){if(!target){return}let secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},mousedown:function(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},click:function(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},touchstart:function(e){const touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},touchend:function(e){trackForward(this.info,e.changedTouches[0],e)}});function trackForward(info,e,preventer){let dx=_Mathabs(e.clientX-info.x),dy=_Mathabs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[t.localName]&&t.hasAttribute("disabled")){return}if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}const findOriginalTarget=_findOriginalTarget;_exports.findOriginalTarget=findOriginalTarget;const add=addListener;_exports.add=add;const remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;const GestureEventListeners=dedupingMixin(superClass=>{class GestureEventListeners extends superClass{_addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){super._addEventListenerToNode(node,eventName,handler)}}_removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){super._removeEventListenerFromNode(node,eventName,handler)}}}return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!!(window.ShadyDOM&&window.ShadyDOM.inUse),DIR_INSTANCES=[];let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}function setRTL(instance){if(!instance.__autoDirOptOut){const el=instance;el.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let i=0;i<DIR_INSTANCES.length;i++){setRTL(DIR_INSTANCES[i])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}const DirMixin=dedupingMixin(base=>{if(!SHIM_SHADOW){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}}const elementBase=PropertyAccessors(base);class Dir extends elementBase{static _processStyleText(cssText,baseURI){cssText=super._processStyleText(cssText,baseURI);if(!SHIM_SHADOW&&DIR_CHECK.test(cssText)){cssText=this._replaceDirInCssText(cssText);this.__activateDir=!0}return cssText}static _replaceDirInCssText(text){let replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);return replacedText}constructor(){super();this.__autoDirOptOut=!1}ready(){super.ready();this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){if(elementBase.prototype.connectedCallback){super.connectedCallback()}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){super.disconnectedCallback()}if(this.constructor.__activateDir){const idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}function flush$2(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush$2,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(node,selector){return normalizedMatchesSelector.call(node,selector)};_exports.matchesSelector=matchesSelector;class DomApiNative{constructor(node){this.node=node}observeNodes(callback){return new FlattenedNodesObserver(this.node,callback)}unobserveNodes(observerHandle){observerHandle.disconnect()}notifyObserver(){}deepContains(node){if(wrap(this.node).contains(node)){return!0}let n=node,doc=node.ownerDocument;while(n&&n!==doc&&n!==this.node){n=wrap(n).parentNode||wrap(n).host}return n===this.node}getOwnerRoot(){return wrap(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?wrap(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let ip$=[],n=wrap(this.node).assignedSlot;while(n){ip$.push(n);n=wrap(n).assignedSlot}return ip$}importNode(node,deep){let doc=this.node instanceof Document?this.node:this.node.ownerDocument;return wrap(doc).importNode(node,deep)}getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(selector){let c$=this.getEffectiveChildNodes(),list=[];for(let i=0,l=c$.length,c;i<l&&(c=c$[i]);i++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}get activeElement(){let node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}function forwardMethods(proto,methods){for(let i=0,method;i<methods.length;i++){method=methods[i];proto[method]=function(){return this.node[method].apply(this.node,arguments)}}}function forwardReadOnlyProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=this;return domApi.node[name]},configurable:!0})}}function forwardProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){return this.node[name]},set:function(value){this.node[name]=value},configurable:!0})}}class EventApi{constructor(event){this.event=event}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}_exports.EventApi=EventApi;DomApiNative.prototype.cloneNode;DomApiNative.prototype.appendChild;DomApiNative.prototype.insertBefore;DomApiNative.prototype.removeChild;DomApiNative.prototype.replaceChild;DomApiNative.prototype.setAttribute;DomApiNative.prototype.removeAttribute;DomApiNative.prototype.querySelector;DomApiNative.prototype.querySelectorAll;DomApiNative.prototype.parentNode;DomApiNative.prototype.firstChild;DomApiNative.prototype.lastChild;DomApiNative.prototype.nextSibling;DomApiNative.prototype.previousSibling;DomApiNative.prototype.firstElementChild;DomApiNative.prototype.lastElementChild;DomApiNative.prototype.nextElementSibling;DomApiNative.prototype.previousElementSibling;DomApiNative.prototype.childNodes;DomApiNative.prototype.children;DomApiNative.prototype.classList;DomApiNative.prototype.textContent;DomApiNative.prototype.innerHTML;let DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class Wrapper extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(DomApiNative.prototype).forEach(prop=>{if("activeElement"!=prop){Wrapper.prototype[prop]=DomApiNative.prototype[prop]}});forwardReadOnlyProperties(Wrapper.prototype,["classList"]);DomApiImpl=Wrapper;Object.defineProperties(EventApi.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else{forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApiNative.prototype,["textContent","innerHTML"])}const DomApi=DomApiImpl;_exports.DomApi=DomApi;const dom=function(obj){obj=obj||document;if(obj instanceof DomApiImpl){return obj}if(obj instanceof EventApi){return obj}let helper=obj.__domApi;if(!helper){if(obj instanceof Event){helper=new EventApi(obj)}else{helper=new DomApiImpl(obj)}obj.__domApi=helper}return helper};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;const bundledImportMeta$1=babelHelpers.objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href});let styleInterface=window.ShadyCSS;const LegacyElementMixin=dedupingMixin(base=>{const legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class LegacyElement extends legacyElementBase{constructor(){super();this.isAttached;this.__boundListeners;this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback();this.isAttached=!0;this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this.detached()}detached(){}attributeChangedCallback(name,old,value,namespace){if(old!==value){super.attributeChangedCallback(name,old,value,namespace);this.attributeChanged(name,old,value)}}attributeChanged(name,old,value){}_initializeProperties(){let proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){this._registered();proto.__hasRegisterFinished=!0}super._initializeProperties();this.root=this;this.created();this._applyListeners()}_registered(){}ready(){this._ensureAttributes();super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(value){return this._serializeValue(value)}deserialize(value,type){return this._deserializeValue(value,type)}reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(node||this,value,attribute)}extend(prototype,api){if(!(prototype&&api)){return prototype||api}let n$=Object.getOwnPropertyNames(api);for(let i=0,n,pd;i<n$.length&&(n=n$[i]);i++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}mixin(target,source){for(let i in source){target[i]=source[i]}return target}chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}instanceTemplate(template){let content=this.constructor._contentForTemplate(template),dom=document.importNode(content,!0);return dom}fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;let event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;let node=options.node||this;wrap(node).dispatchEvent(event);return event}listen(node,eventName,methodName){node=node||this;let hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}let key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this)}}unlisten(node,eventName,methodName){node=node||this;let bl=this.__boundListeners&&this.__boundListeners.get(node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null}}setScrollDirection(direction,node){setTouchAction(node||this,DIRECTION_MAP[direction]||"auto")}$$(slctr){return this.root.querySelector(slctr)}get domHost(){let root=wrap(this).getRootNode();return root instanceof DocumentFragment?root.host:root}distributeContent(){const thisEl=this,domApi=dom(thisEl);if(window.ShadyDOM&&domApi.shadowRoot){ShadyDOM.flush()}}getEffectiveChildNodes(){const thisEl=this,domApi=dom(thisEl);return domApi.getEffectiveChildNodes()}queryDistributedElements(selector){const thisEl=this,domApi=dom(thisEl);return domApi.queryDistributedElements(selector)}getEffectiveChildren(){let list=this.getEffectiveChildNodes();return list.filter(function(n){return n.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let cn=this.getEffectiveChildNodes(),tc=[];for(let i=0,c;c=cn[i];i++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}queryEffectiveChildren(selector){let e$=this.queryDistributedElements(selector);return e$&&e$[0]}queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}getContentChildNodes(slctr){let content=this.root.querySelector(slctr||"slot");return content?dom(content).getDistributedNodes():[]}getContentChildren(slctr){let children=this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}isLightDescendant(node){const thisNode=this;return thisNode!==node&&wrap(thisNode).contains(node)&&wrap(thisNode).getRootNode()===wrap(node).getRootNode()}isLocalDescendant(node){return this.root===wrap(node).getRootNode()}scopeSubtree(container,shouldObserve){}getComputedStyleValue(property){return styleInterface.getComputedStyleValue(this,property)}debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}isDebouncerActive(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}flushDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}cancelDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}create(tag,props){let elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(let n in props){elt[n]=props[n]}}}return elt}elementMatches(selector,node){return matchesSelector(node||this,selector)}toggleAttribute(name,bool){let node=this;if(3===arguments.length){node=arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){wrap(node).setAttribute(name,"");return!0}else{wrap(node).removeAttribute(name);return!1}}toggleClass(name,bool,node){node=node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}transform(transformText,node){node=node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}translate3d(x,y,z,node){node=node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}arrayDelete(arrayOrPath,item){let index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{let arr=get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}_logger(level,args){if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":console[level](...args);}}_log(...args){this._logger("log",args)}_warn(...args){this._logger("warn",args)}_error(...args){this._logger("error",args)}_logf(methodName,...args){return["[%s::%s]",this.is,methodName,...args]}}LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;const lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(source,target,excludeProps){const noAccessors=source._noAccessors,propertyNames=Object.getOwnPropertyNames(source);for(let i=0,p;i<propertyNames.length;i++){p=propertyNames[i];if(p in excludeProps){continue}if(noAccessors){target[p]=source[p]}else{let pd=Object.getOwnPropertyDescriptor(source,p);if(pd){pd.configurable=!0;Object.defineProperty(target,p,pd)}}}}function mixinBehaviors(behaviors,klass){return GenerateClassFromInfo({},LegacyElementMixin(klass),behaviors)}function applyBehaviors(proto,behaviors,lifecycle){for(let i=0;i<behaviors.length;i++){applyInfo(proto,behaviors[i],lifecycle,excludeOnBehaviors)}}function applyInfo(proto,info,lifecycle,excludeProps){copyProperties(info,proto,excludeProps);for(let p in lifecycleProps){if(info[p]){lifecycle[p]=lifecycle[p]||[];lifecycle[p].push(info[p])}}}function flattenBehaviors(behaviors,list,exclude){list=list||[];for(let i=behaviors.length-1,b;0<=i;i--){b=behaviors[i];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}function mergeProperties(target,source){for(const p in source){const targetInfo=target[p],sourceInfo=source[p];if(!("value"in sourceInfo)&&targetInfo&&"value"in targetInfo){target[p]=Object.assign({value:targetInfo.value},sourceInfo)}else{target[p]=sourceInfo}}}function GenerateClassFromInfo(info,Base,behaviors){let behaviorList;const lifecycle={};class PolymerGenerated extends Base{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){super._finalizeClass()}else{if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.properties){this.createProperties(b.properties)}if(b.observers){this.createObservers(b.observers,b.properties)}}}if(info.properties){this.createProperties(info.properties)}if(info.observers){this.createObservers(info.observers,info.properties)}this._prepareTemplate()}}static get properties(){const properties={};if(behaviorList){for(let i=0;i<behaviorList.length;i++){mergeProperties(properties,behaviorList[i].properties)}}mergeProperties(properties,info.properties);return properties}static get observers(){let observers=[];if(behaviorList){for(let i=0,b;i<behaviorList.length;i++){b=behaviorList[i];if(b.observers){observers=observers.concat(b.observers)}}}if(info.observers){observers=observers.concat(info.observers)}return observers}created(){super.created();const list=lifecycle.created;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}_registered(){const generatedProto=PolymerGenerated.prototype;if(!generatedProto.hasOwnProperty("__hasRegisterFinished")){generatedProto.__hasRegisterFinished=!0;super._registered();if(legacyOptimizations){copyPropertiesToProto(generatedProto)}const proto=Object.getPrototypeOf(this);let list=lifecycle.beforeRegister;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}list=lifecycle.registered;if(list){for(let i=0;i<list.length;i++){list[i].call(proto)}}}}_applyListeners(){super._applyListeners();const list=lifecycle.listeners;if(list){for(let i=0;i<list.length;i++){const listeners=list[i];if(listeners){for(let l in listeners){this._addMethodEventListenerToNode(this,l,listeners[l])}}}}}_ensureAttributes(){const list=lifecycle.hostAttributes;if(list){for(let i=list.length-1;0<=i;i--){const hostAttributes=list[i];for(let a in hostAttributes){this._ensureAttribute(a,hostAttributes[a])}}}super._ensureAttributes()}ready(){super.ready();let list=lifecycle.ready;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attached(){super.attached();let list=lifecycle.attached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}detached(){super.detached();let list=lifecycle.detached;if(list){for(let i=0;i<list.length;i++){list[i].call(this)}}}attributeChanged(name,old,value){super.attributeChanged();let list=lifecycle.attributeChanged;if(list){for(let i=0;i<list.length;i++){list[i].call(this,name,old,value)}}}}if(behaviors){if(!Array.isArray(behaviors)){behaviors=[behaviors]}let superBehaviors=Base.prototype.behaviors;behaviorList=flattenBehaviors(behaviors,null,superBehaviors);PolymerGenerated.prototype.behaviors=superBehaviors?superBehaviors.concat(behaviors):behaviorList}const copyPropertiesToProto=proto=>{if(behaviorList){applyBehaviors(proto,behaviorList,lifecycle)}applyInfo(proto,info,lifecycle,excludeOnInfo)};if(!legacyOptimizations){copyPropertiesToProto(PolymerGenerated.prototype)}PolymerGenerated.generatedFrom=info;return PolymerGenerated}const Class=function(info,mixin){if(!info){console.warn("Polymer.Class requires `info` argument")}let klass=mixin?mixin(LegacyElementMixin(HTMLElement)):LegacyElementMixin(HTMLElement);klass=GenerateClassFromInfo(info,klass,info.behaviors);klass.is=klass.prototype.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;const Polymer=function(info){let klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}customElements.define(klass.is,klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;let TemplatizerUser;const Templatizer={templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=templatize(template,this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(model){return new this.ctor(model)},modelForElement(el){return modelForElement(this._templatizerTemplate,el)}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(strictTemplatePolicy){throw new Error(`strictTemplatePolicy: dom-bind not allowed`)}this.root=null;this.$=null;this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none";this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){wrap(wrap(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children){for(let i=0;i<this.__children.length;i++){this.root.appendChild(this.__children[i])}}}render(){let template;if(!this.__children){template=template||this.querySelector("template");if(!template){let observer=new MutationObserver(()=>{template=this.querySelector("template");if(template){observer.disconnect();this.render()}else{throw new Error("dom-bind requires a <template> child")}});observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(template);this.$=this.root.$;this.__children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;class DomIf extends PolymerElement{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super();this.__renderDebouncer=null;this.__invalidProps=null;this.__instance=null;this._lastIf=!1;this.__ctor=null;this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render());enqueueDebouncer(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const parent=wrap(this).parentNode;if(!parent||parent.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!wrap(parent).host){this.__teardownInstance()}}connectedCallback(){super.connectedCallback();this.style.display="none";if(this.if){this.__debounceRender()}}render(){flush()}__render(){if(this.if){if(!this.__ensureInstance()){return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}__ensureInstance(){let parentNode=wrap(this).parentNode;if(parentNode){if(!this.__ctor){let template=wrap(this).querySelector("template");if(!template){let observer=new MutationObserver(()=>{if(wrap(this).querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-if requires a <template> child")}});observer.observe(this,{childList:!0});return!1}this.__ctor=templatize(template,this,{mutableData:!0,forwardHostProp:function(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;wrap(parentNode).insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();let c$=this.__instance.children;if(c$&&c$.length){let lastChild=wrap(this).previousSibling;if(lastChild!==c$[c$.length-1]){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){wrap(parentNode).insertBefore(n,this)}}}}}return!0}__syncHostProperties(){let props=this.__invalidProps;if(props){for(let prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let c$=this.__instance.children;if(c$&&c$.length){let parent=wrap(c$[0]).parentNode;if(parent){parent=wrap(parent);for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parent.removeChild(n)}}}this.__instance=null;this.__invalidProps=null}}_showHideChildren(){let hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;let ArraySelectorMixin=dedupingMixin(superClass=>{let elementBase=ElementMixin(superClass);class ArraySelectorMixin extends elementBase{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null;this.__lastMulti=null;this.__selectedMap=null}__updateSelection(multi,itemsInfo){let path=itemsInfo.path;if(path==JSCompiler_renameProperty("items",this)){let newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){let splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if(`${JSCompiler_renameProperty("items",this)}.splices`==itemsInfo.path){this.__applySplices(itemsInfo.value.indexSplices)}else{let part=path.slice(`${JSCompiler_renameProperty("items",this)}.`.length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}__applySplices(splices){let selected=this.__selectedMap;for(let i=0,s;i<splices.length;i++){s=splices[i];selected.forEach((idx,item)=>{if(idx<s.index){}else if(idx>=s.index+s.removed.length){selected.set(item,idx+s.addedCount-s.removed.length)}else{selected.set(item,-1)}});for(let j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(this.items[idx])){selected.set(this.items[idx],idx)}}}this.__updateLinks();let sidx=0;selected.forEach((idx,item)=>{if(0>idx){if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}selected.delete(item)}else{sidx++}})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let sidx=0;this.__selectedMap.forEach(idx=>{if(0<=idx){this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${idx}`,`${JSCompiler_renameProperty("selected",this)}.${sidx++}`)}})}else{this.__selectedMap.forEach(idx=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${idx}`);this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${idx}`)})}}clearSelection(){this.__dataLinkedPaths={};this.__selectedMap=new Map;this.selected=this.multi?[]:null;this.selectedItem=null}isSelected(item){return this.__selectedMap.has(item)}isIndexSelected(idx){return this.isSelected(this.items[idx])}__deselectChangedIdx(idx){let sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){let i=0;this.__selectedMap.forEach((idx,item)=>{if(sidx==i++){this.deselect(item)}})}}__selectedIndexForItemIndex(idx){let selected=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${idx}`];if(selected){return parseInt(selected.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}}deselect(item){let idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);let sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}}}deselectIndex(idx){this.deselect(this.items[idx])}select(item){this.selectIndex(this.items.indexOf(item))}selectIndex(idx){let item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push(JSCompiler_renameProperty("selected",this),item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}return ArraySelectorMixin});_exports.ArraySelectorMixin=ArraySelectorMixin;let baseArraySelector=ArraySelectorMixin(PolymerElement);class ArraySelector extends baseArraySelector{static get is(){return"array-selector"}static get template(){return null}}_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};_exports.$arraySelector=arraySelector;let mutablePropertyChange$1;(()=>{mutablePropertyChange$1=MutableData._mutablePropertyChange})();const MutableDataBehavior={_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};_exports.MutableDataBehavior=MutableDataBehavior;const OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;const Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;const safari10=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class TabsElement extends ElementMixin$1(ListMixin(ThemableMixin(mixinBehaviors([IronResizableBehavior],PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '◀';
      }

      [part="forward-button"]::after {
        content: '▶';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"2.1.2"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready();this.addEventListener("iron-resize",()=>this._updateOverflow());this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow());this.setAttribute("role","tablist");afterNextRender(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(this._scrollOffset)}_scrollBack(){this._scroll(-1*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}_updateOverflow(){const scrollPosition=this._vertical?this._scrollerElement.scrollTop:this._scrollerElement.scrollLeft;let scrollSize=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;scrollSize-=1;let overflow=0<scrollPosition?"start":"";overflow+=scrollPosition+this._scrollOffset<scrollSize?" end":"";overflow?this.setAttribute("overflow",overflow.trim()):this.removeAttribute("overflow");this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(safari10&&this.root){const WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(el=>{el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}}_exports.TabsElement=TabsElement;customElements.define(TabsElement.is,TabsElement);var vaadinTabs={TabsElement:TabsElement};_exports.$vaadinTabs=vaadinTabs;const $_documentContainer$a=html`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$a.content);class CheckboxElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.7"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super();this.name}get name(){return this.checked?this._storedName:""}set name(name){this._storedName=name}ready(){super.ready();this.setAttribute("role","checkbox");this._nativeCheckbox=this.shadowRoot.querySelector("input[type=\"checkbox\"]");this.addEventListener("click",this._handleClick.bind(this));this._addActiveListeners();const attrName=this.getAttribute("name");if(attrName){this.name=attrName}this.shadowRoot.querySelector("[part~=\"label\"]").querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this));this._updateLabelAttribute()}_updateLabelAttribute(){const label=this.shadowRoot.querySelector("[part~=\"label\"]"),assignedNodes=label.firstElementChild.assignedNodes();if(this._isAssignedNodesEmpty(assignedNodes)){label.setAttribute("empty","")}else{label.removeAttribute("empty")}}_isAssignedNodesEmpty(nodes){return 0===nodes.length||1==nodes.length&&nodes[0].nodeType==Node.TEXT_NODE&&""===nodes[0].textContent.trim()}_checkedChanged(checked){if(this.indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",checked)}}_indeterminateChanged(indeterminate){if(indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",this.checked)}}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{if(this.__interactionsAllowed(e)){this.setAttribute("active","")}});this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this.setAttribute("active","")}});this.addEventListener("keyup",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this._toggleChecked();this.removeAttribute("active");if(this.indeterminate){this.indeterminate=!1}}})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){if(this.disabled){return!1}if("a"===e.target.localName){return!1}return!0}_handleClick(e){if(this.__interactionsAllowed(e)){if(!this.indeterminate){if(e.composedPath()[0]!==this._nativeCheckbox){e.preventDefault();this._toggleChecked()}}else{this.indeterminate=!1;e.preventDefault();this._toggleChecked()}}}_toggleChecked(){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{composed:!0,bubbles:!0}))}}_exports.CheckboxElement=CheckboxElement;customElements.define(CheckboxElement.is,CheckboxElement);var vaadinCheckbox={CheckboxElement:CheckboxElement};_exports.$vaadinCheckbox=vaadinCheckbox;const $_documentContainer$b=html`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$b.content);const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,ANIMATION_FRAME=animationFrame,IDLE_TIME=idlePeriod,MICRO_TASK=microTask;const PolymerIronList=Class({behaviors:[IronResizableBehavior,IronScrollTargetBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return _Mathmax(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=_Mathmin(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,ANIMATION_FRAME);this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=_Mathmax(0,_Mathmin(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(_Mathabs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=_Mathround(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),MICRO_TASK)}},_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(0>=virtualStart-idxs.length){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);var delta=nextPhysicalCount-this._physicalCount,nextIncrease=_Mathround(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=_Mathround(.5*this._physicalCount)}if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(_Mathround(50/this._templateCost),1,nextIncrease)),IDLE_TIME)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=this.items&&void 0?(void 0).get(this.items):null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,ANIMATION_FRAME)}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_updateMetrics:function(itemSet){flush?flush():flush();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:_Mathceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=_Mathround((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:_Mathmin(this._scrollPosition+this._physicalTop,0);if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+_Mathmax(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||_Mathabs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush?flush():flush();if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=_Mathfloor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;var delta=_Mathabs(this._viewportHeight-this._scrollTargetHeight);this.updateViewportBoundaries();if(this._isVisible){this.toggleScrollListener(!0);this._resetAverage();this._render()}else{this.toggleScrollListener(!1)}},ANIMATION_FRAME)},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?_Mathceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},_clamp:function(v,min,max){return _Mathmin(max,_Mathmax(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])}});_exports.PolymerIronList=PolymerIronList;var ironList={PolymerIronList:PolymerIronList};_exports.$ironList=ironList;class GridScrollerElement extends PolymerIronList{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback();this._scrollHandler()}_updateScrollerItem(item,index){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(index){this._warnPrivateAPIAccess("scrollToIndex");if(0<index){this._pendingScrollToIndex=null}if(!parseInt(this.$.items.style.borderTopWidth)&&0<index){this._pendingScrollToIndex=index}this._scrollingToIndex=!0;index=_Mathmin(_Mathmax(index,0),this._effectiveSize-1);this.$.table.scrollTop=index/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight);this._scrollHandler();if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(1e6)}this._accessIronListAPI(()=>super.scrollToIndex(index-this._vidxOffset));this._scrollHandler();const row=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(row){const headerOffset=row.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;if(1<_Mathabs(headerOffset)){this.$.table.scrollTop+=headerOffset;this._scrollHandler()}}this._scrollingToIndex=!1}_effectiveSizeChanged(size){let fvi,fviOffset=0;this._iterateItems((pidx,vidx)=>{if(vidx===this._firstVisibleIndex){const row=this._physicalItems[pidx];fvi=row.index;fviOffset=row.getBoundingClientRect().top}});if(this.items&&size<this.items.length){this._scrollTop=0}if(!Array.isArray(this.items)){const maxVirtualItems=this._edge||this._ie?3e4:1e5;this.items={length:_Mathmin(size,maxVirtualItems)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"}));this._virtualCount=_Mathmin(this.items.length,size)||0;if(0===this._scrollTop){this._accessIronListAPI(()=>this._scrollToIndex(_Mathmin(size-1,fvi)));this._iterateItems((pidx,vidx)=>{const row=this._physicalItems[pidx];if(row.index===fvi){this.$.table.scrollTop+=_Mathround(row.getBoundingClientRect().top-fviOffset)}if(row.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const cellIndex=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);row.children[cellIndex].focus()}})}this._assignModels();requestAnimationFrame(()=>this._update())}_positionItems(){this._adjustScrollPosition();let rePosition;if(isNaN(this._physicalTop)){rePosition=!0;this._physicalTop=0}let y=this._physicalTop;this._iterateItems((pidx,vidx)=>{this._physicalItems[pidx].style.transform=`translateY(${y}px)`;y+=this._physicalSizes[pidx]});if(rePosition){this._scrollToIndex(0)}}_increasePoolIfNeeded(count){if(0===count&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize){return}if(!this._initialPoolCreated){this._initialPoolCreated=!0;super._increasePoolIfNeeded(25)}else if(this._optPhysicalSize!==1/0){this._debounceIncreasePool=Debouncer.debounce(this._debounceIncreasePool,idlePeriod,()=>{this._updateMetrics();const remainingPhysicalSize=this._optPhysicalSize-this._physicalSize;let estimatedMissingRowCount=_Mathceil(remainingPhysicalSize/this._physicalAverage);if(this._physicalCount+estimatedMissingRowCount>this._effectiveSize){estimatedMissingRowCount=_Mathmax(0,this._effectiveSize-this._physicalCount)}if(this._physicalSize&&0<estimatedMissingRowCount){super._increasePoolIfNeeded(estimatedMissingRowCount);this.__reorderChildNodes()}})}}__reorderChildNodes(){const childNodes=Array.from(this.$.items.childNodes),rowsInOrder=!!childNodes.reduce((inOrder,current,currentIndex,array)=>{if(0===currentIndex||array[currentIndex-1].index===current.index-1){return inOrder}},!0);if(!rowsInOrder){childNodes.sort((row1,row2)=>{return row1.index-row2.index}).forEach(row=>this.$.items.appendChild(row))}}_createPool(size){const fragment=document.createDocumentFragment(),physicalItems=this._createScrollerRows(size);physicalItems.forEach(inst=>fragment.appendChild(inst));this._getRowTarget().appendChild(fragment);const content=this.querySelector("[slot]");if(content){const slot=content.getAttribute("slot");content.setAttribute("slot","foo-bar");content.setAttribute("slot",slot)}this._updateHeaderFooterMetrics();afterNextRender(this,()=>this.notifyResize());return physicalItems}_assignModels(itemSet){this._iterateItems((pidx,vidx)=>{const el=this._physicalItems[pidx];this._toggleAttribute("hidden",vidx>=this._effectiveSize,el);this._updateScrollerItem(el,vidx+(this._vidxOffset||0))},itemSet)}_scrollHandler(){const delta=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const oldOffset=this._vidxOffset;if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(delta)}if(this._vidxOffset!==oldOffset){this._update()}this._afterScroll()}_adjustVirtualIndexOffset(delta){if(1e4<_Mathabs(delta)){if(this._noScale){this._noScale=!1;return}const scale=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),offset=scale*this._effectiveSize;this._vidxOffset=_Mathround(offset-scale*this._virtualCount)}else{const oldOffset=this._vidxOffset||0,threshold=1e3,maxShift=100;if(0===this._scrollTop){this._vidxOffset=0;if(oldOffset!==this._vidxOffset){super.scrollToIndex(0)}}else if(this.firstVisibleIndex<threshold&&0<this._vidxOffset){this._vidxOffset-=_Mathmin(this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex+(oldOffset-this._vidxOffset))}this._noScale=!0}const maxOffset=this._effectiveSize-this._virtualCount;if(this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop){this._vidxOffset=maxOffset;if(oldOffset!==this._vidxOffset){super.scrollToIndex(this._virtualCount)}}else if(this.firstVisibleIndex>this._virtualCount-threshold&&this._vidxOffset<maxOffset){this._vidxOffset+=_Mathmin(maxOffset-this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-oldOffset))}this._noScale=!0}}}_accessIronListAPI(cb){this._warnPrivateAPIAccessAsyncEnabled=!1;const returnValue=cb.apply(this);this._debouncerWarnPrivateAPIAccess=Debouncer.debounce(this._debouncerWarnPrivateAPIAccess,animationFrame,()=>this._warnPrivateAPIAccessAsyncEnabled=!0);return returnValue}_debounceRender(cb,asyncModule){super._debounceRender(()=>this._accessIronListAPI(cb),asyncModule)}_warnPrivateAPIAccess(apiName){if(this._warnPrivateAPIAccessAsyncEnabled){console.warn(`Accessing private API (${apiName})!`)}}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(index){this._accessIronListAPI(()=>this.scrollToIndex(index))}get firstVisibleIndex(){this._warnPrivateAPIAccess("firstVisibleIndex");return super.firstVisibleIndex}set firstVisibleIndex(value){this._warnPrivateAPIAccess("firstVisibleIndex");super.firstVisibleIndex=value}get lastVisibleIndex(){this._warnPrivateAPIAccess("lastVisibleIndex");return super.lastVisibleIndex}set lastVisibleIndex(value){this._warnPrivateAPIAccess("lastVisibleIndex");super.lastVisibleIndex=value}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries");super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler();flush()}}_exports.ScrollerElement=GridScrollerElement;customElements.define(GridScrollerElement.is,GridScrollerElement);var vaadinGridScroller={ScrollerElement:GridScrollerElement};_exports.$vaadinGridScroller=vaadinGridScroller;const A11yMixin=superClass=>class A11yMixin extends superClass{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer||col.path||col.header)).length}_a11yGetFooterRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer)).length}_a11yUpdateGridSize(size,_columnTree){if(size===void 0||_columnTree===void 0){return}const bodyColumns=_columnTree[_columnTree.length-1];this.$.table.setAttribute("aria-rowcount",size+this._a11yGetHeaderRowCount(_columnTree)+this._a11yGetFooterRowCount(_columnTree));this.$.table.setAttribute("aria-colcount",bodyColumns&&bodyColumns.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((headerRow,index)=>headerRow.setAttribute("aria-rowindex",index+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((footerRow,index)=>footerRow.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+index+1))}_a11yUpdateRowRowindex(row,index){row.setAttribute("aria-rowindex",index+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(row,selected){row.setAttribute("aria-selected",!!selected);Array.from(row.children).forEach(cell=>cell.setAttribute("aria-selected",!!selected))}_a11yUpdateRowLevel(row,level){row.setAttribute("aria-level",level+1)}_a11yUpdateRowDetailsOpened(row,detailsOpened){Array.from(row.children).forEach(cell=>{if("boolean"===typeof detailsOpened){cell.setAttribute("aria-expanded",detailsOpened)}else{if(cell.hasAttribute("aria-expanded")){cell.removeAttribute("aria-expanded")}}})}_a11ySetRowDetailsCell(row,detailsCell){Array.from(row.children).forEach(cell=>{if(cell!==detailsCell){cell.setAttribute("aria-controls",detailsCell.id)}})}_a11yUpdateCellColspan(cell,colspan){cell.setAttribute("aria-colspan",+colspan)}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(sorter=>{let cellContent=sorter.parentNode;while(cellContent&&"vaadin-grid-cell-content"!==cellContent.localName){cellContent=cellContent.parentNode}if(cellContent&&cellContent.assignedSlot){const cell=cellContent.assignedSlot.parentNode;cell.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[sorter.direction+""]||"none")}})}};_exports.A11yMixin=A11yMixin;var vaadinGridA11yMixin={A11yMixin:A11yMixin};_exports.$vaadinGridA11yMixin=vaadinGridA11yMixin;const ActiveItemMixin=superClass=>class ActiveItemMixin extends superClass{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const model=e.detail.model,clickedItem=model?model.item:null;if(clickedItem){this.activeItem=!this._itemsEqual(this.activeItem,clickedItem)?clickedItem:null}}_onClick(e){if(e.defaultPrevented){return}const path=e.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell||-1<cell.getAttribute("part").indexOf("details-cell")){return}const cellContent=cell._content,activeElement=this.getRootNode().activeElement,cellContentHasFocus=cellContent.contains(activeElement)&&(!this._ie||this._isFocusable(activeElement));if(!cellContentHasFocus&&!this._isFocusable(e.target)){this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_isFocusable(target){if(!target.parentNode){return!1}const focusables=Array.from(target.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(element=>"cell body-cell"!==element.getAttribute("part")),isFocusableElement=-1!==focusables.indexOf(target);return!target.disabled&&isFocusableElement}};_exports.ActiveItemMixin=ActiveItemMixin;var vaadinGridActiveItemMixin={ActiveItemMixin:ActiveItemMixin};_exports.$vaadinGridActiveItemMixin=vaadinGridActiveItemMixin;const ArrayDataProviderMixin=superClass=>class ArrayDataProviderMixin extends superClass{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(items,splices,isAttached){if(!isAttached){return}if(!Array.isArray(items)){if(items===void 0||null===items){this.size=0}if(this.dataProvider===this._arrayDataProvider){this.dataProvider=void 0}return}this.size=items.length;this.dataProvider=this.dataProvider||this._arrayDataProvider;this.clearCache();this._ensureFirstPageLoaded()}_arrayDataProvider(opts,cb){let items=(Array.isArray(this.items)?this.items:[]).slice(0);if(this._filters&&this._checkPaths(this._filters,"filtering",items)){items=this._filter(items)}this.size=items.length;if(opts.sortOrders.length&&this._checkPaths(this._sorters,"sorting",items)){items=items.sort(this._multiSort.bind(this))}const start=opts.page*opts.pageSize,end=start+opts.pageSize,slice=items.slice(start,end);cb(slice,items.length)}_checkPaths(arrayToCheck,action,items){if(!items.length){return!1}let result=!0;for(var i in arrayToCheck){const path=arrayToCheck[i].path;if(!path||-1===path.indexOf(".")){continue}const parentProperty=path.replace(/\.[^\.]*$/,"");if(Base.get(parentProperty,items[0])===void 0){console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);result=!1}}return result}_multiSort(a,b){return this._sorters.map(sort=>{if("asc"===sort.direction){return this._compare(Base.get(sort.path,a),Base.get(sort.path,b))}else if("desc"===sort.direction){return this._compare(Base.get(sort.path,b),Base.get(sort.path,a))}return 0}).reduce((p,n)=>{return p?p:n},0)}_normalizeEmptyValue(value){if(0<=[void 0,null].indexOf(value)){return""}else if(isNaN(value)){return value.toString()}else{return value}}_compare(a,b){a=this._normalizeEmptyValue(a);b=this._normalizeEmptyValue(b);if(a<b){return-1}if(a>b){return 1}return 0}_filter(items){return items.filter((item,index)=>{return 0===this._filters.filter(filter=>{const value=this._normalizeEmptyValue(Base.get(filter.path,item)),filterValueLowercase=this._normalizeEmptyValue(filter.value).toString().toLowerCase();return-1===value.toString().toLowerCase().indexOf(filterValueLowercase)}).length})}};_exports.ArrayDataProviderMixin=ArrayDataProviderMixin;var vaadinGridArrayDataProviderMixin={ArrayDataProviderMixin:ArrayDataProviderMixin};_exports.$vaadinGridArrayDataProviderMixin=vaadinGridArrayDataProviderMixin;const ColumnResizingMixin=superClass=>class ColumnResizingMixin extends GestureEventListeners(superClass){ready(){super.ready();const scroller=this.$.scroller;addListener(scroller,"track",this._onHeaderTrack.bind(this));scroller.addEventListener("touchmove",e=>scroller.hasAttribute("column-resizing")&&e.preventDefault());scroller.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault());scroller.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){const handle=e.target;if("resize-handle"===handle.getAttribute("part")){const cell=handle.parentElement;let column=cell._column;this._toggleAttribute("column-resizing",!0,this.$.scroller);while("vaadin-grid-column-group"===column.localName){column=Array.prototype.slice.call(column._childColumns,0).sort(function(a,b){return a._order-b._order}).filter(function(column){return!column.hidden}).pop()}const columnRowCells=Array.from(this.$.header.querySelectorAll("[part~=\"row\"]:last-child [part~=\"cell\"]"));var targetCell=columnRowCells.filter(cell=>cell._column===column)[0];if(targetCell.offsetWidth){var style=window.getComputedStyle(targetCell),minWidth=10+parseInt(style.paddingLeft)+parseInt(style.paddingRight)+parseInt(style.borderLeftWidth)+parseInt(style.borderRightWidth)+parseInt(style.marginLeft)+parseInt(style.marginRight);column.width=_Mathmax(minWidth,targetCell.offsetWidth+e.detail.x-targetCell.getBoundingClientRect().right)+"px";column.flexGrow=0}columnRowCells.sort(function(a,b){return a._column._order-b._column._order}).forEach(function(cell,index,array){if(index<array.indexOf(targetCell)){cell._column.width=cell.offsetWidth+"px";cell._column.flexGrow=0}});if("end"===e.detail.state){this._toggleAttribute("column-resizing",!1,this.$.scroller)}this._resizeHandler()}}};_exports.ColumnResizingMixin=ColumnResizingMixin;var vaadinGridColumnResizingMixin={ColumnResizingMixin:ColumnResizingMixin};_exports.$vaadinGridColumnResizingMixin=vaadinGridColumnResizingMixin;const ItemCache=class ItemCache{constructor(grid,parentCache,parentItem){this.grid=grid;this.parentCache=parentCache;this.parentItem=parentItem;this.itemCaches={};this.items={};this.effectiveSize=0;this.size=0;this.pendingRequests={}}isLoading(){return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(index=>{return this.itemCaches[index].isLoading()})[0]}getItemForIndex(index){const{cache,scaledIndex}=this.getCacheAndIndex(index);return cache.items[scaledIndex]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((prev,curr)=>{const subCache=this.itemCaches[curr];subCache.updateSize();return prev+subCache.effectiveSize},0):0}ensureSubCacheForScaledIndex(scaledIndex){if(!this.itemCaches[scaledIndex]){const subCache=new ItemCache(this.grid,this,this.items[scaledIndex]);this.itemCaches[scaledIndex]=subCache;this.grid._loadPage(0,subCache)}}getCacheAndIndex(index){let thisLevelIndex=index;const keys=Object.keys(this.itemCaches);for(var i=0;i<keys.length;i++){const expandedIndex=+keys[i],subCache=this.itemCaches[expandedIndex];if(thisLevelIndex<=expandedIndex){return{cache:this,scaledIndex:thisLevelIndex}}else if(thisLevelIndex<=expandedIndex+subCache.effectiveSize){return subCache.getCacheAndIndex(thisLevelIndex-expandedIndex-1)}thisLevelIndex-=subCache.effectiveSize}return{cache:this,scaledIndex:thisLevelIndex}}};_exports.ItemCache=ItemCache;const DataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){const cache=new ItemCache(this);return cache}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(size){const delta=size-this._cache.size;this._cache.size+=delta;this._cache.effectiveSize+=delta;this._effectiveSize=this._cache.effectiveSize}_updateRowItem(item,el){el.children.forEach(cell=>{cell._instance&&(cell._instance.item=item)})}_getItem(index,el){if(index>=this._effectiveSize){return}el.index=index;const{cache,scaledIndex}=this._cache.getCacheAndIndex(index),item=cache.items[scaledIndex];if(item){this._toggleAttribute("loading",!1,el);this._updateItem(el,item);if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(scaledIndex)}}else{this._toggleAttribute("loading",!0,el);this._loadPage(this._getPageForIndex(scaledIndex),cache)}}_pagesForPhysicalItems(){const firstVisiblePage=this._getPageForIndex(this._firstVisibleIndex+this._vidxOffset);return[firstVisiblePage].concat(this._physicalItems.filter(row=>row.index).items(row=>this._getPageForIndex(row.index))).reduce((prev,curr)=>{if(-1===prev.indexOf(curr)){prev.push(curr)}return prev},[])}_expandedInstanceChangedCallback(inst,value){if(inst.item===void 0){return}if(value){this.expandItem(inst.item)}else{this.collapseItem(inst.item)}}getItemId(item){return this.itemIdPath?this.get(this.itemIdPath,item):item}_isExpanded(item){return this.expandedItems&&-1<this._getItemIndexInArray(item,this.expandedItems)}_expandedItemsChanged(e){this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;this._assignModels()}expandItem(item){if(!this._isExpanded(item)){this.push("expandedItems",item)}}collapseItem(item){if(this._isExpanded(item)){this.splice("expandedItems",this._getItemIndexInArray(item,this.expandedItems),1)}}_getIndexLevel(index){let{cache}=this._cache.getCacheAndIndex(index),level=0;while(cache.parentCache){cache=cache.parentCache;level++}return level}_canPopulate(){return this._hasData&&this._columnTree}_loadPage(page,cache){if(!cache.pendingRequests[page]&&this.dataProvider){this._setLoading(!0);cache.pendingRequests[page]=!0;const params={page,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:cache.parentItem};this.dataProvider(params,(items,size)=>{if(size!==void 0){cache.size=size}else{if(params.parentItem){cache.size=items.length}}items.forEach((item,itemsIndex)=>{const itemIndex=page*this.pageSize+itemsIndex;cache.items[itemIndex]=item;if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(itemIndex)}});this._hasData=!0;delete cache.pendingRequests[page];if(!this._cache.isLoading()){this._setLoading(!1);this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>{const cachedItem=this._cache.getItemForIndex(row.index);if(cachedItem){this._toggleAttribute("loading",!1,row);this._updateItem(row,cachedItem)}});this._increasePoolIfNeeded(0)}})}}_getPageForIndex(index){return _Mathfloor(index/this.pageSize)}clearCache(){this._cache=new ItemCache(this);Array.from(this.$.items.children).forEach(row=>{Array.from(row.children).forEach(cell=>{cell._instance&&cell._instance._setPendingProperty("item",{},!1)})});this._cache.size=this.size||0;this._cache.updateSize();this._hasData=!1;this._assignModels();if(!this._effectiveSize){this._loadPage(0,this._cache)}}_flushItemsDebouncer(){if(this._debouncerLoad){this._debouncerLoad.flush()}}_pageSizeChanged(pageSize,oldPageSize){if(oldPageSize!==void 0&&pageSize!==oldPageSize){this.clearCache()}}_checkSize(){if(this.size===void 0&&0===this._effectiveSize){console.warn("The <vaadin-grid> needs the total number of items"+" in order to display rows. Set the total number of items"+" to the `size` property, or provide the total number of items"+" in the second argument of the `dataProvider`\u2019s `callback` call.")}}_dataProviderChanged(dataProvider,oldDataProvider){if(oldDataProvider!==void 0){this.clearCache()}if(dataProvider&&this.items&&this.items.length){this._scrollToIndex(this._firstVisibleIndex)}this._ensureFirstPageLoaded();this._debouncerCheckSize=Debouncer.debounce(this._debouncerCheckSize,timeOut.after(2e3),this._checkSize.bind(this));this._scrollHandler()}_ensureFirstPageLoaded(){if(!this._hasData){this._loadPage(0,this._cache,()=>{const hadData=this._hasData;this._hasData=!0;if(!hadData){this.notifyResize()}})}}_itemsEqual(item1,item2){return this.getItemId(item1)===this.getItemId(item2)}_getItemIndexInArray(item,array){let result=-1;array.forEach((i,idx)=>{if(this._itemsEqual(i,item)){result=idx}});return result}};_exports.DataProviderMixin=DataProviderMixin;var vaadinGridDataProviderMixin={ItemCache:ItemCache,DataProviderMixin:DataProviderMixin};_exports.$vaadinGridDataProviderMixin=vaadinGridDataProviderMixin;const DynamicColumnsMixin=superClass=>class DynamicColumnsMixin extends superClass{ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(columns){for(let i=0;i<columns.length;i++){if("vaadin-grid-column-group"===columns[i].localName){return!0}}return!1}_getChildColumns(el){return FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement)}_flattenColumnGroups(columns){return columns.map(col=>{if("vaadin-grid-column-group"===col.localName){return this._getChildColumns(col)}else{return[col]}}).reduce((prev,curr)=>{return prev.concat(curr)},[])}_getColumnTree(){for(var rootColumns=FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement),_columnTree=[],c=rootColumns;;){_columnTree.push(c);if(!this._hasColumnGroups(c)){break}c=this._flattenColumnGroups(c)}return _columnTree}_updateColumnTree(){var columnTree=this._getColumnTree();if(!this._arrayEquals(columnTree,this._columnTree)){this._columnTree=columnTree}}_addNodeObserver(){this._observer=new FlattenedNodesObserver(this,info=>{const rowDetailsTemplate=info.addedNodes.filter(n=>"template"===n.localName&&n.classList.contains("row-details"))[0];if(rowDetailsTemplate&&this._rowDetailsTemplate!==rowDetailsTemplate){this._rowDetailsTemplate=rowDetailsTemplate}if(0<info.addedNodes.filter(this._isColumnElement).length||0<info.removedNodes.filter(this._isColumnElement).length){this._updateColumnTree()}this._debouncerCheckImports=Debouncer.debounce(this._debouncerCheckImports,timeOut.after(2e3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_arrayEquals(arr1,arr2){if(!arr1||!arr2||arr1.length!=arr2.length){return!1}for(var i=0,l=arr1.length;i<l;i++){if(arr1[i]instanceof Array&&arr2[i]instanceof Array){if(!this._arrayEquals(arr1[i],arr2[i])){return!1}}else if(arr1[i]!=arr2[i]){return!1}}return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(elementName=>{var element=this.querySelector(elementName);if(element&&!(element instanceof PolymerElement)){console.warn(`Make sure you have imported the required module for <${elementName}> element.`)}})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(row=>this._updateFirstAndLastColumnForRow(row))}_updateFirstAndLastColumnForRow(row){Array.from(row.querySelectorAll("[part~=\"cell\"]:not([part~=\"details-cell\"])")).sort((a,b)=>{return a._column._order-b._column._order}).forEach((cell,cellIndex,children)=>{this._toggleAttribute("first-column",0===cellIndex,cell);this._toggleAttribute("last-column",cellIndex===children.length-1,cell)})}_isColumnElement(node){return node.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(node.localName)}};_exports.DynamicColumnsMixin=DynamicColumnsMixin;var vaadinGridDynamicColumnsMixin={DynamicColumnsMixin:DynamicColumnsMixin};_exports.$vaadinGridDynamicColumnsMixin=vaadinGridDynamicColumnsMixin;const EventContextMixin=superClass=>class EventContextMixin extends superClass{getEventContext(event){const context={},path=event.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell){return context}context.section=["body","header","footer","details"].filter(section=>-1<cell.getAttribute("part").indexOf(section))[0];if(cell._column){context.column=cell._column}if("body"===context.section||"details"===context.section){Object.assign(context,this.__getRowModel(cell.parentElement))}return context}};_exports.EventContextMixin=EventContextMixin;var vaadinGridEventContextMixin={EventContextMixin:EventContextMixin};_exports.$vaadinGridEventContextMixin=vaadinGridEventContextMixin;const FilterMixin=superClass=>class FilterMixin extends superClass{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){if(-1===this._filters.indexOf(e.target)){this._filters.push(e.target)}e.stopPropagation();if(this.dataProvider){this.clearCache()}}_mapFilters(){return this._filters.map(filter=>{return{path:filter.path,value:filter.value}})}};_exports.FilterMixin=FilterMixin;var vaadinGridFilterMixin={FilterMixin:FilterMixin};_exports.$vaadinGridFilterMixin=vaadinGridFilterMixin;class GridTemplatizer extends class extends PolymerElement{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super();this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const instance=new this._TemplateClass({});this.addInstance(instance);return instance}addInstance(instance){if(-1===this._templateInstances.indexOf(instance)){this._templateInstances.push(instance);requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances))}}removeInstance(instance){const index=this._templateInstances.indexOf(instance);this.splice("_templateInstances",index,1)}_ensureTemplatized(){if(!this._TemplateClass){this._TemplateClass=templatize(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(prop,value){this._forwardParentProp(prop,value);if(this._templateInstances){this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}},notifyInstanceProp:function(inst,prop,value){if("index"===prop||"item"===prop){return}const originalProp=`__${prop}__`;if(inst[originalProp]===value){return}inst[originalProp]=value;const row=Array.from(this._grid.$.items.children).filter(row=>this._grid._itemsEqual(row._item,inst.item))[0];if(row){Array.from(row.children).forEach(cell=>{if(cell._instance){cell._instance[originalProp]=value;cell._instance.notifyPath(prop,value)}})}const itemPrefix="item.";if(Array.isArray(this._grid.items)&&0===prop.indexOf(itemPrefix)){const itemsIndex=this._grid.items.indexOf(inst.item),path=prop.slice(itemPrefix.length);this._grid.notifyPath(`items.${itemsIndex}.${path}`,value)}const gridCallback=`_${prop}InstanceChangedCallback`;if(this._grid&&this._grid[gridCallback]){this._grid[gridCallback](inst,value)}}})}}_forwardParentProp(prop,value){this._parentPathValues[prop]=value;this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}_templateInstancesChanged(t,p){let index,count;if("_templateInstances"===t.path){index=0;count=this._templateInstances.length}else if("_templateInstances.splices"===t.path){index=t.value.index;count=t.value.addedCount}else{return}Object.keys(this._parentPathValues||{}).forEach(keyName=>{for(var i=index;i<index+count;i++){this._templateInstances[i].set(keyName,this._parentPathValues[keyName])}})}}_exports.Templatizer$1=GridTemplatizer;customElements.define(GridTemplatizer.is,GridTemplatizer);var vaadinGridTemplatizer={Templatizer:GridTemplatizer};_exports.$vaadinGridTemplatizer=vaadinGridTemplatizer;const RowDetailsMixin=superClass=>class RowDetailsMixin extends superClass{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(rowDetailsTemplate,rowDetailsRenderer){if(rowDetailsTemplate&&rowDetailsRenderer){throw new Error("You should only use either a renderer or a template for row details")}if(rowDetailsTemplate||rowDetailsRenderer){if(rowDetailsTemplate&&!rowDetailsTemplate.templatizer){var templatizer=new GridTemplatizer;templatizer._grid=this;templatizer.dataHost=this.dataHost;templatizer.template=rowDetailsTemplate;rowDetailsTemplate.templatizer=templatizer}if(this._columnTree){Array.from(this.$.items.children).forEach(row=>{if(!row.querySelector("[part~=details-cell]")){this._updateRow(row,this._columnTree[this._columnTree.length-1]);this._a11yUpdateRowDetailsOpened(row,!1)}delete row.querySelector("[part~=details-cell]")._instance})}if(this.detailsOpenedItems.length){Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this);this._update()}}}_detailsOpenedItemsChanged(changeRecord,rowDetailsTemplate,rowDetailsRenderer){if("detailsOpenedItems.length"===changeRecord.path||!changeRecord.value){return}Array.from(this.$.items.children).forEach(row=>{this._toggleDetailsCell(row,row._item);this._a11yUpdateRowDetailsOpened(row,this._isDetailsOpened(row._item))})}_configureDetailsCell(cell){cell.setAttribute("part","cell details-cell");this._toggleAttribute("frozen",!0,cell)}_toggleDetailsCell(row,item){const cell=row.querySelector("[part~=\"details-cell\"]");if(!cell){return}const detailsHidden=!this._isDetailsOpened(item),hiddenChanged=!!cell.hidden!==detailsHidden;if(!cell._instance&&!cell._renderer||cell.hidden!==detailsHidden){cell.hidden=detailsHidden;if(detailsHidden){row.style.removeProperty("padding-bottom")}else{if(this.rowDetailsRenderer){cell._renderer=this.rowDetailsRenderer;cell._renderer.call(this,cell._content,this,{index:row.index,item:item})}else if(this._rowDetailsTemplate&&!cell._instance){cell._instance=this._rowDetailsTemplate.templatizer.createInstance();cell._content.innerHTML="";cell._content.appendChild(cell._instance.root);this._updateItem(row,item)}flush();row.style.setProperty("padding-bottom",`${cell.offsetHeight}px`);requestAnimationFrame(()=>this.notifyResize())}}if(hiddenChanged){this._updateMetrics();this._positionItems()}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll("[part~=\"details-cell\"]:not([hidden])")).forEach(cell=>{cell.parentElement.style.setProperty("padding-bottom",`${cell.offsetHeight}px`)})}_isDetailsOpened(item){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(item,this.detailsOpenedItems)}openItemDetails(item){if(!this._isDetailsOpened(item)){this.push("detailsOpenedItems",item)}}closeItemDetails(item){if(this._isDetailsOpened(item)){this.splice("detailsOpenedItems",this._getItemIndexInArray(item,this.detailsOpenedItems),1)}}_detailsOpenedInstanceChangedCallback(instance,value){if(super._detailsOpenedInstanceChangedCallback){super._detailsOpenedInstanceChangedCallback(instance,value)}if(value){this.openItemDetails(instance.item)}else{this.closeItemDetails(instance.item)}}};_exports.RowDetailsMixin=RowDetailsMixin;var vaadinGridRowDetailsMixin={RowDetailsMixin:RowDetailsMixin};_exports.$vaadinGridRowDetailsMixin=vaadinGridRowDetailsMixin;const ScrollMixin=superClass=>class ScrollMixin extends superClass{get _timeouts(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:function(){return[]}},_scrollbarWidth:{type:Number,value:function(){var scrollDiv=document.createElement("div");scrollDiv.style.width="100px";scrollDiv.style.height="100px";scrollDiv.style.overflow="scroll";scrollDiv.style.position="absolute";scrollDiv.style.top="-9999px";document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}static get observers(){return["_scrollHeightUpdated(_estScrollHeight)"]}ready(){super.ready();this.scrollTarget=this.$.table;this.addEventListener("wheel",e=>{this._wheelScrolling=!0;this._debouncerWheelScrolling=Debouncer.debounce(this._debouncerWheelScrolling,timeOut.after(this._timeouts.WHEEL_SCROLLING),()=>this._wheelScrolling=!1);this._onWheel(e)});this.$.table.addEventListener("scroll",e=>{if(this.$.outerscroller.outerScrolling){e.stopImmediatePropagation()}},!0);this.$.items.addEventListener("focusin",e=>{const itemsIndex=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[itemsIndex-1]});this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0)}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){return}var table=this.$.table,deltaY=e.deltaY;if(1===e.deltaMode){deltaY*=this._physicalAverage}if(this._wheelAnimationFrame){this._deltaYAcc+=deltaY;e.preventDefault();return}deltaY+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this._debouncerWheelAnimationFrame=Debouncer.debounce(this._debouncerWheelAnimationFrame,animationFrame,()=>this._wheelAnimationFrame=!1);var momentum=_Mathabs(e.deltaX)+_Mathabs(deltaY);if(this._canScroll(table,e.deltaX,deltaY)){e.preventDefault();table.scrollTop+=deltaY;table.scrollLeft+=e.deltaX;this._scrollHandler();this._hasResidualMomentum=!0;this._ignoreNewWheel=!0;this._debouncerIgnoreNewWheel=Debouncer.debounce(this._debouncerIgnoreNewWheel,timeOut.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)}else if(this._hasResidualMomentum&&momentum<=this._previousMomentum||this._ignoreNewWheel){e.preventDefault()}else if(momentum>this._previousMomentum){this._hasResidualMomentum=!1}this._previousMomentum=momentum}_hasScrolledAncestor(el,deltaX,deltaY){if("vaadin-grid-cell-content"===el.localName){return!1}else if(this._canScroll(el,deltaX,deltaY)&&-1!==["auto","scroll"].indexOf(getComputedStyle(el).overflow)){return!0}else if(el!==this&&el.parentElement){return this._hasScrolledAncestor(el.parentElement,deltaX,deltaY)}}_canScroll(el,deltaX,deltaY){return 0<deltaY&&el.scrollTop<el.scrollHeight-el.offsetHeight||0>deltaY&&0<el.scrollTop||0<deltaX&&el.scrollLeft<el.scrollWidth-el.offsetWidth||0>deltaX&&0<el.scrollLeft}_scheduleScrolling(){if(!this._scrollingFrame){this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))}this._debounceScrolling=Debouncer.debounce(this._debounceScrolling,timeOut.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this._toggleAttribute("scrolling",!1,this.$.scroller);if(!this.$.outerscroller.outerScrolling){this._reorderRows()}});if(!this._scrollPeriodFrame){this._scrollPeriodFrame=requestAnimationFrame(()=>this._toggleAttribute("scroll-period",!0,this.$.scroller))}this._debounceScrollPeriod=Debouncer.debounce(this._debounceScrollPeriod,timeOut.after(this._timeouts.SCROLL_PERIOD),()=>{cancelAnimationFrame(this._scrollPeriodFrame);delete this._scrollPeriodFrame;this._toggleAttribute("scroll-period",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements();if(!this.hasAttribute("reordering")){this._scheduleScrolling()}const os=this.$.outerscroller;if(!this._ios&&(this._wheelScrolling||os.passthrough)){os.syncOuterScroller()}if(this._ios){const overScroll=_Mathmax(-os.scrollTop,0)||_Mathmin(0,os.scrollHeight-os.scrollTop-os.offsetHeight);this.$.items.style.transform=`translateY(${overScroll}px)`}this._updateOverflow()}_updateOverflow(){let overflow="";const table=this.$.table;if(table.scrollTop<table.scrollHeight-table.clientHeight){overflow+=" bottom"}if(0<table.scrollTop){overflow+=" top"}if(table.scrollLeft<table.scrollWidth-table.clientWidth){overflow+=" right"}if(0<table.scrollLeft){overflow+=" left"}this._debounceOverflow=Debouncer.debounce(this._debounceOverflow,animationFrame,()=>{const value=overflow.trim();if(0<value.length&&this.getAttribute("overflow")!==value){this.setAttribute("overflow",value)}else if(0==value.length&&this.hasAttribute("overflow")){this.removeAttribute("overflow")}})}_reorderRows(){const body=this.$.items,items=body.querySelectorAll("tr");if(!items.length){return}const adjustedVirtualStart=this._virtualStart+this._vidxOffset,targetRow=this._rowWithFocusedElement||Array.from(items).filter(row=>!row.hidden)[0];if(!targetRow){return}const targetPhysicalIndex=targetRow.index-adjustedVirtualStart,delta=Array.from(items).indexOf(targetRow)-targetPhysicalIndex;if(0<delta){for(let i=0;i<delta;i++){body.appendChild(items[i])}}else if(0>delta){for(let i=items.length+delta;i<items.length;i++){body.insertBefore(items[i],items[0])}}}_frozenCellsChanged(){this._debouncerCacheElements=Debouncer.debounce(this._debouncerCacheElements,microTask,()=>{Array.from(this.root.querySelectorAll("[part~=\"cell\"]")).forEach(function(cell){cell.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._translateStationaryElements()});this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree){return}const columnsRow=this._columnTree[this._columnTree.length-1].slice(0);columnsRow.sort((a,b)=>{return a._order-b._order});const lastFrozen=columnsRow.reduce((prev,col,index)=>{col._lastFrozen=!1;return col.frozen&&!col.hidden?index:prev},void 0);if(lastFrozen!==void 0){columnsRow[lastFrozen]._lastFrozen=!0}}_translateStationaryElements(){if(this._edge&&!this._scrollbarWidth){this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0);this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)}else{this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop)}for(var frozenCellTransform=this._getTranslate(this._scrollLeft,0),i=0;i<this._frozenCells.length;i++){this._frozenCells[i].style.transform=frozenCellTransform}}_getTranslate(x,y){return"translate("+x+"px,"+y+"px)"}_scrollHeightUpdated(_estScrollHeight){this.$.outersizer.style.top=this.$.fixedsizer.style.top=_estScrollHeight+"px"}};_exports.ScrollMixin=ScrollMixin;var vaadinGridScrollMixin={ScrollMixin:ScrollMixin};_exports.$vaadinGridScrollMixin=vaadinGridScrollMixin;const SelectionMixin=superClass=>class SelectionMixin extends superClass{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(item){return this.selectedItems&&-1<this._getItemIndexInArray(item,this.selectedItems)}selectItem(item){if(!this._isSelected(item)){this.push("selectedItems",item)}}deselectItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1<index){this.splice("selectedItems",index,1)}}_toggleItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1===index){this.selectItem(item)}else{this.deselectItem(item)}}_selectedItemsChanged(e){if(this.$.items.children.length&&("selectedItems"===e.path||"selectedItems.splices"===e.path)){Array.from(this.$.items.children).forEach(row=>{this._updateItem(row,row._item)})}}_selectedInstanceChangedCallback(instance,value){if(super._selectedInstanceChangedCallback){super._selectedInstanceChangedCallback(instance,value)}if(value){this.selectItem(instance.item)}else{this.deselectItem(instance.item)}}};_exports.SelectionMixin=SelectionMixin;var vaadinGridSelectionMixin={SelectionMixin:SelectionMixin};_exports.$vaadinGridSelectionMixin=vaadinGridSelectionMixin;const SortMixin=superClass=>class SortMixin extends superClass{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged);if(window.ShadyDOM){microTask.run(()=>{const sorters=this.querySelectorAll("vaadin-grid-sorter");Array.from(sorters).forEach(sorter=>{if(sorter instanceof PolymerElement){sorter.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}})})}}_onSorterChanged(e){const sorter=e.target;this._removeArrayItem(this._sorters,sorter);sorter._order=null;if(this.multiSort){if(sorter.direction){this._sorters.unshift(sorter)}this._sorters.forEach((sorter,index)=>sorter._order=1<this._sorters.length?index:null,this)}else{if(sorter.direction){this._sorters.forEach(sorter=>{sorter._order=null;sorter.direction=null});this._sorters=[sorter]}}e.stopPropagation();if(this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())){this.clearCache()}this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(sorter=>{return{path:sorter.path,direction:sorter.direction}})}_removeArrayItem(array,item){const index=array.indexOf(item);if(-1<index){array.splice(index,1)}}};_exports.SortMixin=SortMixin;var vaadinGridSortMixin={SortMixin:SortMixin};_exports.$vaadinGridSortMixin=vaadinGridSortMixin;const StylingMixin=superClass=>class StylingMixin extends superClass{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(cellClassGenerator){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>this._generateCellClassNames(row,this.__getRowModel(row)))}_generateCellClassNames(row,rowData){Array.from(row.children).forEach(cell=>{if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.remove(className))}if(this.cellClassNameGenerator){const result=this.cellClassNameGenerator(cell._column,rowData);cell.__generatedClasses=result&&result.split(" ").filter(className=>0<className.length);if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.add(className))}}})}};_exports.StylingMixin=StylingMixin;var vaadinGridStylingMixin={StylingMixin:StylingMixin};_exports.$vaadinGridStylingMixin=vaadinGridStylingMixin;const KeyboardNavigationMixin=superClass=>class KeyboardNavigationMixin extends superClass{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready();if(this._ios||this._android){return}this.addEventListener("keydown",this._onKeyDown);this.addEventListener("focusin",this._onFocusIn);this.addEventListener("focusout",this._onFocusOut);this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this));this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this));this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this);this._isMousedown=!0});this.addEventListener("mouseup",()=>this._isMousedown=!1)}_focusableChanged(focusable,oldFocusable){if(oldFocusable){oldFocusable.setAttribute("tabindex","-1")}if(focusable){focusable.setAttribute("tabindex","0")}}_onKeyDown(e){let key=e.key;if("Up"===key||"Down"===key||"Left"===key||"Right"===key){key="Arrow"+key}if("Esc"===key){key="Escape"}if("Spacebar"===key){key=" "}let keyGroup;switch(key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":keyGroup="Navigation";break;case"Enter":case"Escape":case"F2":keyGroup="Interaction";break;case"Tab":keyGroup="Tab";break;case" ":keyGroup="Space";break;}this._detectInteracting(e);if(this.hasAttribute("interacting")&&"Interaction"!==keyGroup){keyGroup=void 0}if(keyGroup){this[`_on${keyGroup}KeyDown`](e,key)}}_ensureScrolledToIndex(index){const targetRowInDom=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(!targetRowInDom){this._scrollToIndex(index)}}_onNavigationKeyDown(e,key){e.preventDefault();function indexOfChildElement(el){return Array.prototype.indexOf.call(el.parentNode.children,el)}const visibleItemsCount=this._lastVisibleIndex-this._firstVisibleIndex-1;let dx=0,dy=0;switch(key){case"ArrowRight":dx=1;break;case"ArrowLeft":dx=-1;break;case"Home":dx=-Infinity;e.ctrlKey&&(dy=-Infinity);break;case"End":dx=1/0;e.ctrlKey&&(dy=1/0);break;case"ArrowDown":dy=1;break;case"ArrowUp":dy=-1;break;case"PageDown":dy=visibleItemsCount;break;case"PageUp":dy=-visibleItemsCount;break;}const activeCell=e.composedPath()[0],columnIndex=indexOfChildElement(activeCell),isRowDetails=this._elementMatches(activeCell,"[part~=\"details-cell\"]"),activeRow=activeCell.parentNode,activeRowGroup=activeRow.parentNode,maxRowIndex=(activeRowGroup===this.$.items?this._effectiveSize:activeRowGroup.children.length)-1,rowIndex=activeRowGroup===this.$.items?this._focusedItemIndex!==void 0?this._focusedItemIndex:activeRow.index:indexOfChildElement(activeRow);let dstRowIndex=_Mathmax(0,_Mathmin(rowIndex+dy,maxRowIndex)),dstIsRowDetails=!1;if(activeRowGroup===this.$.items){const item=activeRow._item,dstItem=this._cache.getItemForIndex(dstRowIndex);if(isRowDetails){dstIsRowDetails=0===dy}else{dstIsRowDetails=1===dy&&this._isDetailsOpened(item)||-1===dy&&dstRowIndex!==rowIndex&&this._isDetailsOpened(dstItem)}if(dstIsRowDetails!==isRowDetails&&(1===dy&&dstIsRowDetails||-1===dy&&!dstIsRowDetails)){dstRowIndex=rowIndex}}if(activeRowGroup!==this.$.items){if(dstRowIndex>rowIndex){while(dstRowIndex<maxRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex++}}else if(dstRowIndex<rowIndex){while(0<dstRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex--}}}if(this._focusedColumnOrder===void 0){if(isRowDetails){this._focusedColumnOrder=0}else{this._focusedColumnOrder=this._getColumns(activeRowGroup,rowIndex)[columnIndex]._order}}const dstColumns=this._getColumns(activeRowGroup,dstRowIndex),dstSortedColumnOrders=dstColumns.filter(c=>!c.hidden).map(c=>c._order).sort((b,a)=>b-a),maxOrderedColumnIndex=dstSortedColumnOrders.length-1,orderedColumnIndex=dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b,a)=>_Mathabs(b-this._focusedColumnOrder)-_Mathabs(a-this._focusedColumnOrder))[0]),dstOrderedColumnIndex=0===dy&&isRowDetails?orderedColumnIndex:_Mathmax(0,_Mathmin(orderedColumnIndex+dx,maxOrderedColumnIndex));if(dstOrderedColumnIndex!==orderedColumnIndex){this._focusedColumnOrder=void 0}if(activeRowGroup===this.$.items){this._ensureScrolledToIndex(dstRowIndex)}this._toggleAttribute("navigating",!0,this);const columnIndexByOrder=dstColumns.reduce((acc,col,i)=>(acc[col._order]=i,acc),{}),dstColumnIndex=columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]],dstRow=activeRowGroup===this.$.items?Array.from(activeRowGroup.children).filter(el=>el.index===dstRowIndex)[0]:activeRowGroup.children[dstRowIndex];if(!dstRow){return}const dstCell=dstIsRowDetails?Array.from(dstRow.children).filter(el=>this._elementMatches(el,"[part~=\"details-cell\"]"))[0]:dstRow.children[dstColumnIndex];this._scrollHorizontallyToCell(dstCell);if(activeRowGroup===this.$.items){this._focusedItemIndex=dstRowIndex}if(activeRowGroup===this.$.items){const dstRect=dstCell.getBoundingClientRect(),footerTop=this.$.footer.getBoundingClientRect().top,headerBottom=this.$.header.getBoundingClientRect().bottom;if(dstRect.bottom>footerTop){this.$.table.scrollTop+=dstRect.bottom-footerTop;this._scrollHandler()}else if(dstRect.top<headerBottom){this.$.table.scrollTop-=headerBottom-dstRect.top;this._scrollHandler()}}dstCell.focus()}_parseEventPath(path){const tableIndex=path.indexOf(this.$.table);return{rowGroup:path[tableIndex-1],row:path[tableIndex-2],cell:path[tableIndex-3]}}_onInteractionKeyDown(e,key){const localTarget=e.composedPath()[0],localTargetIsTextInput="input"===localTarget.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);let wantInteracting;switch(key){case"Enter":wantInteracting=this.hasAttribute("interacting")?!localTargetIsTextInput:!0;break;case"Escape":wantInteracting=!1;break;case"F2":wantInteracting=!this.hasAttribute("interacting");break;}const{cell}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==wantInteracting){if(wantInteracting){const focusTarget=cell._content.querySelector("[focus-target]")||cell._content.firstElementChild;if(focusTarget){e.preventDefault();focusTarget.focus();this._toggleAttribute("interacting",!0,this);this._toggleAttribute("navigating",!1,this)}}else{e.preventDefault();this._focusedColumnOrder=void 0;cell.focus();this._toggleAttribute("interacting",!1,this);this._toggleAttribute("navigating",!0,this)}}}_predictFocusStepTarget(srcElement,step){const tabOrder=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let index=tabOrder.indexOf(srcElement);index+=step;while(0<=index&&index<=tabOrder.length-1&&(!tabOrder[index]||tabOrder[index].parentNode.hidden)){index+=step}return tabOrder[index]}_onTabKeyDown(e){const focusTarget=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(focusTarget===this.$.table){this.$.table.focus()}else if(focusTarget===this.$.focusexit){this.$.focusexit.focus()}else if(focusTarget===this._itemsFocusable){let itemsFocusTarget=focusTarget;const targetRow=this._itemsFocusable.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);if(targetRow.index!==this._focusedItemIndex){const columnIndex=Array.from(targetRow.children).indexOf(this._itemsFocusable),focusedItemRow=Array.from(this.$.items.children).filter(row=>row.index===this._focusedItemIndex)[0];if(focusedItemRow){itemsFocusTarget=focusedItemRow.children[columnIndex]}}e.preventDefault();itemsFocusTarget.focus()}else{e.preventDefault();focusTarget.focus()}this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const cell=e.composedPath()[0];if(cell._content&&cell._content.firstElementChild){const wasNavigating=this.hasAttribute("navigating");cell._content.firstElementChild.click();this._toggleAttribute("navigating",wasNavigating,this)}else{this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_onFocusIn(e){if(!this._isMousedown){this._toggleAttribute("navigating",!0,this)}const rootTarget=e.composedPath()[0];if(rootTarget===this.$.table||rootTarget===this.$.focusexit){this._predictFocusStepTarget(rootTarget,rootTarget===this.$.table?1:-1).focus();this._toggleAttribute("interacting",!1,this)}else{this._detectInteracting(e)}}_onFocusOut(e){this._toggleAttribute("navigating",!1,this);this._detectInteracting(e)}_onCellFocusIn(e){this._detectInteracting(e);if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];this._activeRowGroup=cell.parentNode.parentNode;if(this._activeRowGroup===this.$.header){this._headerFocusable=cell}else if(this._activeRowGroup===this.$.items){this._itemsFocusable=cell}else if(this._activeRowGroup===this.$.footer){this._footerFocusable=cell}cell._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];cell._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(el=>"vaadin-grid-cell-content"===el.localName),this)}_detectFocusedItemIndex(e){const{rowGroup,row}=this._parseEventPath(e.composedPath());if(rowGroup===this.$.items){this._focusedItemIndex=row.index}}_preventScrollerRotatingCellFocus(item,index){if(item.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items){this._navigatingIsHidden=!0;this._toggleAttribute("navigating",!1,this)}if(index===this._focusedItemIndex&&this._navigatingIsHidden){this._navigatingIsHidden=!1;this._toggleAttribute("navigating",!0,this)}}_getColumns(rowGroup,rowIndex){let columnTreeLevel=this._columnTree.length-1;if(rowGroup===this.$.header){columnTreeLevel=rowIndex}else if(rowGroup===this.$.footer){columnTreeLevel=this._columnTree.length-1-rowIndex}return this._columnTree[columnTreeLevel]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild){this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(el=>!el.hidden)[0]}if(this.$.items.firstElementChild){const firstVisibleIndexRow=this._iterateItems((pidx,vidx)=>{if(this._firstVisibleIndex===vidx){return this.$.items.children[pidx]}});if(firstVisibleIndexRow){this._itemsFocusable=Array.from(firstVisibleIndexRow.children).filter(el=>!el.hidden)[0]}}if(this.$.footer.firstElementChild){this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(el=>!el.hidden)[0]}}_scrollHorizontallyToCell(dstCell){if(dstCell.hasAttribute("frozen")||this._elementMatches(dstCell,"[part~=\"details-cell\"]")){return}const dstCellRect=dstCell.getBoundingClientRect(),dstRow=dstCell.parentNode,dstCellIndex=Array.from(dstRow.children).indexOf(dstCell),tableRect=this.$.table.getBoundingClientRect();let leftBoundary=tableRect.left,rightBoundary=tableRect.right;for(let i=dstCellIndex-1;0<=i;i--){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){leftBoundary=cell.getBoundingClientRect().right;break}}for(let i=dstCellIndex+1;i<dstRow.children.length;i++){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){rightBoundary=cell.getBoundingClientRect().left;break}}if(dstCellRect.left<leftBoundary){this.$.table.scrollLeft+=_Mathround(dstCellRect.left-leftBoundary)}if(dstCellRect.right>rightBoundary){this.$.table.scrollLeft+=_Mathround(dstCellRect.right-rightBoundary)}}_elementMatches(el,query){return el.matches?el.matches(query):-1!==Array.from(el.parentNode.querySelectorAll(query)).indexOf(el)}};_exports.KeyboardNavigationMixin=KeyboardNavigationMixin;var vaadinGridKeyboardNavigationMixin={KeyboardNavigationMixin:KeyboardNavigationMixin};_exports.$vaadinGridKeyboardNavigationMixin=vaadinGridKeyboardNavigationMixin;const ColumnReorderingMixin=superClass=>class ColumnReorderingMixin extends GestureEventListeners(superClass){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready();addListener(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector("[part=\"reorder-ghost\"]");this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){if(this.hasAttribute("reordering")){e.preventDefault()}}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){if(this._draggedColumn){e.preventDefault()}clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const path=e.composedPath(),headerCell=path[path.indexOf(this.$.header)-2];if(!headerCell||!headerCell._content){return}const activeElement=this.getRootNode().activeElement;if(headerCell._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(activeElement))){return}if(this.$.scroller.hasAttribute("column-resizing")){return}if(!this._touchDevice){this._onTrackStart(e)}}else if("track"===e.detail.state){this._onTrack(e)}else if("end"===e.detail.state){this._onTrackEnd(e)}}_onTrackStart(e){if(!this.columnReorderingAllowed){return}const path=e.path||dom(e).path;if(path&&path.filter(node=>node.hasAttribute&&node.hasAttribute("draggable"))[0]){return}const headerCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!headerCell||-1===headerCell.getAttribute("part").indexOf("header-cell")){return}this._toggleAttribute("reordering",!0,this);this._draggedColumn=headerCell._column;while(1===this._draggedColumn.parentElement.childElementCount){this._draggedColumn=this._draggedColumn.parentElement}this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(headerCell);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._autoScroller()}_onTrack(e){if(!this._draggedColumn){return}const targetCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!targetCell){return}const targetColumn=this._getTargetColumn(targetCell,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,targetColumn)&&this._isSwappableByPosition(targetColumn,e.detail.x)){this._swapColumnOrders(this._draggedColumn,targetColumn)}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._lastDragClientX=e.detail.x}_onTrackEnd(){if(!this._draggedColumn){return}this._toggleAttribute("reordering",!1,this);this._draggedColumn._reorderStatus="";this._setSiblingsReorderStatus(this._draggedColumn,"");this._draggedColumn=null;this._lastDragClientX=null;this._reorderGhost.style.visibility="hidden"}_cellFromPoint(x,y){x=x||0;y=y||0;if(!this._draggedColumn){this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller)}let cell;if(useShadow){cell=this.shadowRoot.elementFromPoint(x,y)}else{cell=document.elementFromPoint(x,y);if("vaadin-grid-cell-content"===cell.localName){cell=cell.assignedSlot.parentNode}}this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller);if(cell&&cell._column){return cell}}_updateGhostPosition(eventClientX,eventClientY){const ghostRect=this._reorderGhost.getBoundingClientRect(),targetLeft=eventClientX-ghostRect.width/2,targetTop=eventClientY-ghostRect.height/2,_left=parseInt(this._reorderGhost._left||0),_top=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=_left-(ghostRect.left-targetLeft);this._reorderGhost._top=_top-(ghostRect.top-targetTop);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){if(e.localName){if("none"===getComputedStyle(e).display){return""}else{return Array.from(e.childNodes).map(n=>this._getInnerText(n)).join("")}}else{return e.textContent}}_updateGhost(cell){const ghost=this._reorderGhost;ghost.textContent=this._getInnerText(cell._content);const style=window.getComputedStyle(cell);["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(propertyName=>ghost.style[propertyName]=style[propertyName]);return ghost}_updateOrders(columnTree,splices){if(columnTree===void 0||splices===void 0){return}columnTree[0].forEach((column,index)=>column._order=(index+1)*this._orderBaseScope)}_setSiblingsReorderStatus(column,status){Array.from(column.parentNode.children).filter(child=>/column/.test(child.localName)&&this._isSwapAllowed(child,column)).forEach(sibling=>sibling._reorderStatus=status)}_autoScroller(){if(this._lastDragClientX){const rightDiff=this._lastDragClientX-this.getBoundingClientRect().right+50,leftDiff=this.getBoundingClientRect().left-this._lastDragClientX+50;if(0<rightDiff){this.$.table.scrollLeft+=rightDiff/10}else if(0<leftDiff){this.$.table.scrollLeft-=leftDiff/10}this._scrollHandler()}if(this._draggedColumn){this.async(this._autoScroller,10)}}_isSwapAllowed(column1,column2){if(column1&&column2){const differentColumns=column1!==column2,sameParent=column1.parentElement===column2.parentElement,sameFrozen=column1.frozen===column2.frozen;return differentColumns&&sameParent&&sameFrozen}}_isSwappableByPosition(targetColumn,clientX){const targetCell=Array.from(this.$.header.querySelectorAll("tr:not([hidden]) [part~=\"cell\"]")).filter(cell=>targetColumn.contains(cell._column))[0],sourceCellRect=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),targetRect=targetCell.getBoundingClientRect();if(targetRect.left>sourceCellRect.left){return clientX>targetRect.right-sourceCellRect.width}else{return clientX<targetRect.left+sourceCellRect.width}}_swapColumnOrders(column1,column2){const _order=column1._order;column1._order=column2._order;column2._order=_order;this._updateLastFrozen();this._updateFirstAndLastColumn()}_getTargetColumn(targetCell,draggedColumn){if(targetCell&&draggedColumn){let candidate=targetCell._column;while(candidate.parentElement!==draggedColumn.parentElement&&candidate!==this){candidate=candidate.parentElement}if(candidate.parentElement===draggedColumn.parentElement){return candidate}else{return targetCell._column}}}};_exports.ColumnReorderingMixin=ColumnReorderingMixin;var vaadinGridColumnReorderingMixin={ColumnReorderingMixin:ColumnReorderingMixin};_exports.$vaadinGridColumnReorderingMixin=vaadinGridColumnReorderingMixin;const ColumnBaseMixin=superClass=>class ColumnBaseMixin extends superClass{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName){return}const parent=this.parentNode;if(parent&&"vaadin-grid-column-group"===parent.localName){return parent.resizable||!1}else{return!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback();this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid);this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid);this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid);this._templateObserver.flush();if(!this._bodyTemplate){this._templateObserver.callback()}requestAnimationFrame(()=>{this._allCells.forEach(cell=>{if(!cell._content.parentNode){this._grid&&this._grid.appendChild(cell._content)}})})}disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>{if(!this._findHostGrid()){this._allCells.forEach(cell=>{if(cell._content.parentNode){cell._content.parentNode.removeChild(cell._content)}})}});this._gridValue=void 0}_findHostGrid(){let el=this;while(el&&!/^vaadin.*grid(-pro)?$/.test(el.localName)){el=el.assignedSlot?el.assignedSlot.parentNode:el.parentNode}return el||void 0}get _grid(){if(!this._gridValue){this._gridValue=this._findHostGrid()}return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(cell=>cell)}constructor(){super();this._templateObserver=new FlattenedNodesObserver(this,info=>{this._headerTemplate=this._prepareHeaderTemplate();this._footerTemplate=this._prepareFooterTemplate();this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(template,instanceProps){if(template&&!template.templatizer){const templatizer=new GridTemplatizer;templatizer._grid=this._grid;templatizer.dataHost=this.dataHost;templatizer._instanceProps=instanceProps||templatizer._instanceProps;templatizer.template=template;template.templatizer=templatizer}return template}_renderHeaderAndFooter(){if(this.headerRenderer){this.__runRenderer(this.headerRenderer,this._headerCell)}if(this.footerRenderer){this.__runRenderer(this.footerRenderer,this._footerCell)}}__runRenderer(renderer,cell,rowData){const args=[cell._content,this];if(rowData&&rowData.item){args.push(rowData)}renderer.apply(this,args)}__setColumnTemplateOrRenderer(template,renderer,cells){if(template&&renderer){throw new Error("You should only use either a renderer or a template")}cells.forEach(cell=>{const model=this._grid.__getRowModel(cell.parentElement);if(renderer){cell._renderer=renderer;if(model.item||renderer===this.headerRenderer||renderer===this.footerRenderer){this.__runRenderer(renderer,cell,model)}}else if(cell._template!==template){cell._template=template;cell._content.innerHTML="";template.templatizer._grid=template.templatizer._grid||this._grid;const inst=template.templatizer.createInstance();cell._content.appendChild(inst.root);cell._instance=inst;if(model.item){cell._instance.setProperties(model)}}})}_setBodyTemplateOrRenderer(template,renderer,cells,splices){if((template||renderer)&&cells){this.__setColumnTemplateOrRenderer(template,renderer,cells)}}_setHeaderTemplateOrRenderer(headerTemplate,headerRenderer,headerCell){if((headerTemplate||headerRenderer)&&headerCell){this.__setColumnTemplateOrRenderer(headerTemplate,headerRenderer,[headerCell])}}_setFooterTemplateOrRenderer(footerTemplate,footerRenderer,footerCell){if((footerTemplate||footerRenderer)&&footerCell){this.__setColumnTemplateOrRenderer(footerTemplate,footerRenderer,[footerCell]);this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement)}}_selectFirstTemplate(header=!1,footer=!1){return FlattenedNodesObserver.getFlattenedNodes(this).filter(node=>"template"===node.localName&&node.classList.contains("header")===header&&node.classList.contains("footer")===footer)[0]}_findTemplate(header,footer){const template=this._selectFirstTemplate(header,footer);if(template){if(this.dataHost){template._rootDataHost=this.dataHost._rootDataHost||this.dataHost}}return template}_flexGrowChanged(flexGrow,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("flexGrow")}this._allCells.forEach(cell=>cell.style.flexGrow=flexGrow)}_orderChanged(order,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.style.order=order)}_widthChanged(width,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("width")}this._allCells.forEach(cell=>cell.style.width=width)}_frozenChanged(frozen,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("frozen",frozen)}this._allCells.forEach(cell=>this._toggleAttribute("frozen",frozen,cell));this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(lastFrozen){this._allCells.forEach(cell=>this._toggleAttribute("last-frozen",lastFrozen,cell));if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._lastFrozen=lastFrozen}}_pathOrHeaderChanged(path,header,headerCell,footerCell,cells,renderer,headerRenderer,bodyTemplate,headerTemplate){const hasHeaderText=header!==void 0;if(!headerRenderer&&!headerTemplate&&hasHeaderText&&headerCell){this.__setTextContent(headerCell._content,header)}if(path&&cells.value){if(!renderer&&!bodyTemplate){const pathRenderer=(root,owner,{item})=>this.__setTextContent(root,this.get(path,item));this.__setColumnTemplateOrRenderer(void 0,pathRenderer,cells.value)}if(!headerRenderer&&!headerTemplate&&!hasHeaderText&&headerCell&&null!==header){this.__setTextContent(headerCell._content,this._generateHeader(path))}}if(headerCell){this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement)}}__setTextContent(node,textContent){node.textContent!==textContent&&(node.textContent=textContent)}_generateHeader(path){return path.substr(path.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,match=>match.toUpperCase())}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}_reorderStatusChanged(reorderStatus,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.setAttribute("reorder-status",reorderStatus))}_resizableChanged(resizable,headerCell){if(resizable===void 0||headerCell===void 0){return}if(headerCell){[headerCell].concat(this._emptyCells).forEach(cell=>{if(cell){const existingHandle=cell.querySelector("[part~=\"resize-handle\"]");if(existingHandle){cell.removeChild(existingHandle)}if(resizable){const handle=document.createElement("div");handle.setAttribute("part","resize-handle");cell.appendChild(handle)}}})}}_textAlignChanged(textAlign,_cells,_headerCell,_footerCell){if(textAlign===void 0){return}if(-1===["start","end","center"].indexOf(textAlign)){console.warn("textAlign can only be set as \"start\", \"end\" or \"center\"");return}let textAlignFallback;if("ltr"===getComputedStyle(this._grid).direction){if("start"===textAlign){textAlignFallback="left"}else if("end"===textAlign){textAlignFallback="right"}}else{if("start"===textAlign){textAlignFallback="right"}else if("end"===textAlign){textAlignFallback="left"}}this._allCells.forEach(cell=>{cell._content.style.textAlign=textAlign;if(getComputedStyle(cell._content).textAlign!==textAlign){cell._content.style.textAlign=textAlignFallback}})}_hiddenChanged(hidden,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("hidden",hidden)}this._allCells.forEach(cell=>this._toggleAttribute("hidden",hidden,cell));if(!!hidden!==!!this._previousHidden&&this._grid){this._grid._updateLastFrozen&&this._grid._updateLastFrozen();this._grid.notifyResize&&this._grid.notifyResize();this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()}this._previousHidden=hidden}};_exports.ColumnBaseMixin=ColumnBaseMixin;class GridColumnElement extends ColumnBaseMixin(PolymerElement){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},_bodyTemplate:{type:Object},_cells:Array}}}_exports.GridColumnElement=GridColumnElement;customElements.define(GridColumnElement.is,GridColumnElement);var vaadinGridColumn={ColumnBaseMixin:ColumnBaseMixin,GridColumnElement:GridColumnElement};_exports.$vaadinGridColumn=vaadinGridColumn;class GridOuterScrollerElement extends class extends PolymerElement{}{static get template(){return html`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready();this.addEventListener("scroll",()=>this._syncScrollTarget());this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this));this.style.webkitOverflowScrolling="touch";this.addEventListener("mousedown",_=>this.outerScrolling=!0);this.addEventListener("mouseup",_=>{this.outerScrolling=!1;this.scrollHandler._scrollHandler()})}_onMouseMove(e){if(!this._touchDevice){if(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")){this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20}else{this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth}}}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop;this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame(()=>{this.scrollTarget.scrollTop=this.scrollTop;this.scrollTarget.scrollLeft=this.scrollLeft;this.scrollHandler._scrollHandler()})}}customElements.define(GridOuterScrollerElement.is,GridOuterScrollerElement);const VaadinGridStyles=document.createElement("dom-module");VaadinGridStyles.appendChild(html`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: translateX(-100%);
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);const safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),firefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(safari||firefox){const scrollingStyles=document.createElement("style");scrollingStyles.textContent=`
    [scrolling][safari] #outerscroller,
    [scrolling][firefox] #outerscroller {
      pointer-events: auto;
    }

    [ios] #outerscroller {
      pointer-events: auto;
      z-index: -3;
    }

    [ios][scrolling] #outerscroller {
      z-index: 0;
    }
  `;VaadinGridStyles.querySelector("template").content.appendChild(scrollingStyles)}VaadinGridStyles.register("vaadin-grid-styles");const TOUCH_DEVICE=(()=>{try{document.createEvent("TouchEvent");return!0}catch(e){return!1}})();class GridElement extends ElementMixin$1(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(StylingMixin(GridScrollerElement))))))))))))))))){static get template(){return html`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.3.3"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},_edge:{type:Boolean,value:"undefined"!==typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:-1<navigator.userAgent.toLowerCase().indexOf("firefox")},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:TOUCH_DEVICE},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}_createScrollerRows(count){const rows=[];for(var i=0;i<count;i++){const row=document.createElement("tr");row.setAttribute("part","row");row.setAttribute("role","row");if(this._columnTree){this._updateRow(row,this._columnTree[this._columnTree.length-1],"body",!1,!0)}rows.push(row)}if(this._columnTree){this._columnTree[this._columnTree.length-1].forEach(c=>c.notifyPath&&c.notifyPath("_cells.*",c._cells))}beforeNextRender(this,()=>{this._updateFirstAndLastColumn();this._resetKeyboardNavigation()});return rows}_getRowTarget(){return this.$.items}_createCell(tagName){const contentId=this._contentIndex=this._contentIndex+1||0,slotName="vaadin-grid-cell-content-"+contentId,cellContent=document.createElement("vaadin-grid-cell-content");cellContent.setAttribute("slot",slotName);const cell=document.createElement(tagName);cell.id=slotName.replace("-content-","-");cell.setAttribute("tabindex","-1");cell.setAttribute("role","td"===tagName?"gridcell":"columnheader");const slot=document.createElement("slot");slot.setAttribute("name",slotName);cell.appendChild(slot);cell._content=cellContent;cellContent.addEventListener("mousedown",()=>{if(window.chrome){const mouseUpListener=()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}document.removeEventListener("mouseup",mouseUpListener,!0)};document.addEventListener("mouseup",mouseUpListener,!0)}else{setTimeout(()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}})}});return cell}_updateRow(row,columns,section,isColumnRow,noNotify){section=section||"body";const contentsFragment=document.createDocumentFragment();Array.from(row.children).forEach(cell=>cell._vacant=!0);row.innerHTML="";if("outersizer"!==row.id&&"fixedsizer"!==row.id){row.hidden=!0}columns.forEach((column,index)=>{let cell;if("body"===section){column._cells=column._cells||[];cell=column._cells.filter(cell=>cell._vacant)[0];if(!cell){cell=this._createCell("td");column._cells.push(cell)}cell.setAttribute("part","cell body-cell");row.appendChild(cell);if(index===columns.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const detailsCell=this._detailsCells.filter(cell=>cell._vacant)[0]||this._createCell("td");if(-1===this._detailsCells.indexOf(detailsCell)){this._detailsCells.push(detailsCell)}if(!detailsCell._content.parentElement){contentsFragment.appendChild(detailsCell._content)}this._configureDetailsCell(detailsCell);row.appendChild(detailsCell);this._a11ySetRowDetailsCell(row,detailsCell);detailsCell._vacant=!1}if(column.notifyPath&&!noNotify){column.notifyPath("_cells.*",column._cells)}}else{const tagName="header"===section?"th":"td";if(isColumnRow||"vaadin-grid-column-group"===column.localName){cell=column[`_${section}Cell`]||this._createCell(tagName);cell._column=column;row.appendChild(cell);column[`_${section}Cell`]=cell}else{column._emptyCells=column._emptyCells||[];cell=column._emptyCells.filter(cell=>cell._vacant)[0]||this._createCell(tagName);cell._column=column;row.appendChild(cell);if(-1===column._emptyCells.indexOf(cell)){column._emptyCells.push(cell)}}cell.setAttribute("part",`cell ${section}-cell`);this.__updateHeaderFooterRowVisibility(row)}if(!cell._content.parentElement){contentsFragment.appendChild(cell._content)}cell._vacant=!1;cell._column=column});this.appendChild(contentsFragment);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(row)}__updateHeaderFooterRowVisibility(row){if(!row){return}const visibleRowCells=Array.from(row.children).filter(cell=>{const column=cell._column;if(column._emptyCells&&-1<column._emptyCells.indexOf(cell)){return!1}if(row.parentElement===this.$.header){if(column.headerRenderer||column._headerTemplate){return!0}if(null===column.header){return!1}if(column.path||column.header!==void 0){return!0}}else{if(column.footerRenderer||column._footerTemplate){return!0}}});if(row.hidden!==!visibleRowCells.length){row.hidden=!visibleRowCells.length;this.notifyResize()}}_updateScrollerItem(row,index){this._preventScrollerRotatingCellFocus(row,index);if(!this._columnTree){return}this._toggleAttribute("first",0===index,row);this._toggleAttribute("odd",index%2,row);this._a11yUpdateRowRowindex(row,index);this._getItem(index,row)}_columnTreeChanged(columnTree,splices){Array.from(this.$.items.children).forEach(row=>this._updateRow(row,columnTree[columnTree.length-1]));while(this.$.header.children.length<columnTree.length){const headerRow=document.createElement("tr");headerRow.setAttribute("part","row");headerRow.setAttribute("role","row");this.$.header.appendChild(headerRow);const footerRow=document.createElement("tr");footerRow.setAttribute("part","row");footerRow.setAttribute("role","row");this.$.footer.appendChild(footerRow)}while(this.$.header.children.length>columnTree.length){this.$.header.removeChild(this.$.header.firstElementChild);this.$.footer.removeChild(this.$.footer.firstElementChild)}Array.from(this.$.header.children).forEach((headerRow,index)=>this._updateRow(headerRow,columnTree[index],"header",index===columnTree.length-1));Array.from(this.$.footer.children).forEach((footerRow,index)=>this._updateRow(footerRow,columnTree[columnTree.length-1-index],"footer",0===index));this._updateRow(this.$.outersizer,columnTree[columnTree.length-1]);this._updateRow(this.$.fixedsizer,columnTree[columnTree.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_updateItem(row,item){row._item=item;const model=this.__getRowModel(row);this._toggleAttribute("selected",model.selected,row);this._a11yUpdateRowSelected(row,model.selected);this._a11yUpdateRowLevel(row,model.level);this._toggleAttribute("expanded",model.expanded,row);if(this._rowDetailsTemplate||this.rowDetailsRenderer){this._toggleDetailsCell(row,item)}this._generateCellClassNames(row,model);Array.from(row.children).forEach(cell=>{if(cell._renderer){const owner=cell._column||this;cell._renderer.call(owner,cell._content,owner,model)}else if(cell._instance){cell._instance.__detailsOpened__=model.detailsOpened;cell._instance.__selected__=model.selected;cell._instance.__level__=model.level;cell._instance.__expanded__=model.expanded;cell._instance.setProperties(model)}});this._debouncerUpdateHeights=Debouncer.debounce(this._debouncerUpdateHeights,timeOut.after(1),()=>{this._updateMetrics();this._positionItems();this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights();this._accessIronListAPI(super._resizeHandler,!0);this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const headerHeight=this.$.header.clientHeight+"px",footerHeight=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(element=>{element.style.borderTopWidth=headerHeight;element.style.borderBottomWidth=footerHeight});afterNextRender(this.$.header,()=>{if(this._pendingScrollToIndex){this._scrollToIndex(this._pendingScrollToIndex)}})}_onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-grid-appear")){this._render();this._updateHeaderFooterMetrics();e.stopPropagation();this.notifyResize()}}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}__getRowModel(row){return{index:row.index,item:row._item,level:this._getIndexLevel(row.index),expanded:this._isExpanded(row._item),selected:this._isSelected(row._item),detailsOpened:!!(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._isDetailsOpened(row._item)}}render(){if(this._columnTree){this._columnTree.forEach(level=>{level.forEach(column=>column._renderHeaderAndFooter())});this._update()}}notifyResize(){super.notifyResize()}_heightByRowsChanged(value,oldValue){if(value||oldValue){this.notifyResize()}}}_exports.GridElement=GridElement;customElements.define(GridElement.is,GridElement);var vaadinGrid={GridElement:GridElement};_exports.$vaadinGrid=vaadinGrid;const $_documentContainer$c=document.createElement("template");$_documentContainer$c.innerHTML=`<dom-module id="lumo-required-field">
  <template>
    <style>
      [part="label"] {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        padding-bottom: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([has-label])::before {
        margin-top: calc(var(--lumo-font-size-s) * 1.5);
      }

      :host([has-label]) {
        padding-top: var(--lumo-space-m);
      }

      :host([required]) [part="label"] {
        padding-right: 1em;
      }

      [part="label"]::after {
        content: var(--lumo-required-field-indicator, "•");
        transition: opacity 0.2s;
        opacity: 0;
        color: var(--lumo-primary-text-color);
        position: absolute;
        right: 0;
        width: 1em;
        text-align: center;
      }

      :host([required]:not([has-value])) [part="label"]::after {
        opacity: 1;
      }

      :host([invalid]) [part="label"]::after {
        color: var(--lumo-error-text-color);
      }

      [part="error-message"] {
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-error-text-color);
        will-change: max-height;
        transition: 0.4s max-height;
        max-height: 5em;
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before,
      [part="error-message"]:not(:empty)::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host(:not([invalid])) [part="error-message"] {
        max-height: 0;
        overflow: hidden;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$c.content);const $_documentContainer$d=document.createElement("template");$_documentContainer$d.innerHTML=`<dom-module id="lumo-field-button">
  <template>
    <style>
      [part\$="button"] {
        flex: none;
        width: 1em;
        height: 1em;
        line-height: 1;
        font-size: var(--lumo-icon-size-m);
        text-align: center;
        color: var(--lumo-contrast-60pct);
        transition: 0.2s color;
        cursor: var(--lumo-clickable-cursor);
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--lumo-contrast-90pct);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--lumo-contrast-20pct);
      }

      [part\$="button"]::before {
        font-family: "lumo-icons";
        display: block;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$d.content);const $_documentContainer$e=html`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$e.content);const $_documentContainer$f=document.createElement("template");$_documentContainer$f.innerHTML=`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$f.content);const HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=subclass=>class VaadinTextFieldMixin extends ControlStateMixin(subclass){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId)"]}get focusElement(){if(!this.shadowRoot){return}const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(e){if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){const input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";this.setAttribute("input-prevented","");this._inputDebouncer=Debouncer.debounce(this._inputDebouncer,timeOut.after(200),()=>{this.removeAttribute("input-prevented")});return}}this.__userInput=!0;this.value=e.target.value}_stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}_onChange(e){if(this._valueClearing){return}const changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}_valueChanged(newVal,oldVal){if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}_labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}_onSlotChange(){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(key=>PROP_TYPE[key]).forEach(type=>this._propagateHostAttributes(HOST_PROPS[type].map(attr=>this[attr]),type))}_hostPropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}_hostAccessiblePropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}_validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}_propagateHostAttributes(attributesValues,type){const input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input);this._setOrToggleAttribute(`aria-${attr}`,attributesValues[index],input)})}else{attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input)})}}_setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}checkValidity(){if(this.required||this.pattern||this.maxlength||this.minlength){return this.inputElement.checkValidity()}else{return!this.invalid}}_addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready();this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);const defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0);this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId=`${this.constructor.is}-error-${uniqueId}`;this._labelId=`${this.constructor.is}-label-${uniqueId}`}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){if(this.autoselect){this.inputElement.select();setTimeout(()=>{this.inputElement.setSelectionRange(0,9999)})}}_onClearButtonClick(e){this.inputElement.focus();this.clear();this._valueClearing=!1;this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){this.clear()}}_addIEListeners(node){if(navigator.userAgent.match(/Trident/)){this._shouldPreventInput=()=>{this.__preventInput=!0;requestAnimationFrame(()=>{this.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}_removeIEListeners(node){if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}_getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.inputElement)}_getActiveLabelId(label,labelId){this._setOrToggleAttribute("aria-labelledby",label?labelId:void 0,this.inputElement)}_getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}attributeChangedCallback(prop,oldVal,newVal){super.attributeChangedCallback(prop,oldVal,newVal);if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari&&this.root){const WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(el=>{el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;class TextFieldElement extends ElementMixin$1(TextFieldMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.3.6"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;class GridFilterElement extends class extends PolymerElement{}{static get template(){return html`
    <style>
      :host {
        display: inline-flex;
        max-width: 100%;
      }

      #filter {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
    <slot name="filter">
      <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
    </slot>
`}static get is(){return"vaadin-grid-filter"}static get properties(){return{path:String,value:{type:String,notify:!0},_connected:Boolean}}connectedCallback(){super.connectedCallback();this._connected=!0}static get observers(){return["_filterChanged(path, value, _connected)"]}ready(){super.ready();const child=dom(this).firstElementChild;if(child&&"filter"!==child.getAttribute("slot")){console.warn("Make sure you have assigned slot=\"filter\" to the child elements of <vaadin-grid-filter>");child.setAttribute("slot","filter")}}_filterChanged(path,value,connected){if(path===void 0||value===void 0||!connected){return}if(this._previousValue===void 0&&""===value){return}this._previousValue=value;this._debouncerFilterChanged=Debouncer.debounce(this._debouncerFilterChanged,timeOut.after(200),()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))})}focus(){this.$.filter.focus()}}_exports.GridFilterElement=GridFilterElement;customElements.define(GridFilterElement.is,GridFilterElement);var vaadinGridFilter={GridFilterElement:GridFilterElement};_exports.$vaadinGridFilter=vaadinGridFilter;const $_documentContainer$g=html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--lumo-primary-text-color);
        background-color: var(--lumo-contrast-5pct);
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$g.content);class ButtonElement extends ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.1.5"}ready(){super.ready();this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback();if(this.hasAttribute("active")){this.removeAttribute("active")}}_addActiveListeners(){addListener(this,"down",()=>!this.disabled&&this.setAttribute("active",""));addListener(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>!this.disabled&&0<=[13,32].indexOf(e.keyCode)&&this.setAttribute("active",""));this.addEventListener("keyup",()=>this.removeAttribute("active"));this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}_exports.ButtonElement$1=ButtonElement;customElements.define(ButtonElement.is,ButtonElement);var vaadinButton={ButtonElement:ButtonElement};_exports.$vaadinButton=vaadinButton;const $_documentContainer$h=document.createElement("template");$_documentContainer$h.innerHTML=`<dom-module id="lumo-overlay">
  <template>
    <style>
      :host {
        top: var(--lumo-space-m);
        right: var(--lumo-space-m);
        bottom: var(--lumo-space-m);
        left: var(--lumo-space-m);
        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
        /* stylelint-disable-next-line */
        outline: 0px solid transparent;
      }

      [part="overlay"] {
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-xs);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
      }

      @keyframes lumo-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part="backdrop"] {
        animation: 0.2s lumo-overlay-backdrop-exit both;
      }

      @keyframes lumo-overlay-backdrop-exit {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-overlay-dummy-animation {
        0% { opacity: 1; }
        100% { opacity: 1; }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$h.content);const $_documentContainer$i=html`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$i.content);const p$1=Element.prototype,matches$1=p$1.matches||p$1.matchesSelector||p$1.mozMatchesSelector||p$1.msMatchesSelector||p$1.oMatchesSelector||p$1.webkitMatchesSelector,FocusablesHelper={getTabbableNodes:function(node){const result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},isFocusable:function(element){if(matches$1.call(element,"input, select, textarea, button, object")){return matches$1.call(element,":not([disabled])")}return matches$1.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(element){return this.isFocusable(element)&&matches$1.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},_normalizedTabIndex:function(element){if(this.isFocusable(element)){const tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},_collectTabbableNodes:function(node,result){if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}const element=node,tabIndex=this._normalizedTabIndex(element);let needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}let children;if("slot"===element.localName){children=element.assignedNodes({flatten:!0})}else{children=(element.shadowRoot||element).children}for(let i=0;i<children.length;i++){needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},_isVisible:function(element){let style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},_sortByTabIndex:function(tabbables){const len=tabbables.length;if(2>len){return tabbables}const pivot=_Mathceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},_mergeSortByTabIndex:function(left,right){const result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},_hasLowerTabOrder:function(a,b){const ati=_Mathmax(a.tabIndex,0),bti=_Mathmax(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.FocusablesHelper=FocusablesHelper;var vaadinFocusablesHelper={FocusablesHelper:FocusablesHelper};_exports.$vaadinFocusablesHelper=vaadinFocusablesHelper;let overlayContentCounter=0;const overlayContentCache={},createOverlayContent=cssText=>{const is=overlayContentCache[cssText]||processOverlayStyles(cssText);return document.createElement(is)},processOverlayStyles=cssText=>{overlayContentCounter++;const is=`vaadin-overlay-content-${overlayContentCounter}`,styledTemplate=document.createElement("template"),style=document.createElement("style");style.textContent=":host { display: block; }"+cssText;styledTemplate.content.appendChild(style);if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(styledTemplate,is)}const klass=(()=>class extends HTMLElement{static get is(){return is}connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(!this.shadowRoot){this.attachShadow({mode:"open"});this.shadowRoot.appendChild(document.importNode(styledTemplate.content,!0))}}})();customElements.define(klass.is,klass);overlayContentCache[cssText]=is;return is};class OverlayElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this);this._boundMouseUpListener=this._mouseUpListener.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this);this._boundKeydownListener=this._keydownListener.bind(this);this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)});this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this);if(/iPad|iPhone|iPod/.test(navigator.userAgent)){this._boundIosResizeListener=()=>this._detectIosNavbar()}}ready(){super.ready();this._observer.flush();this.addEventListener("click",()=>{});this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened){return}const innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-overlay-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(nodes){this.template=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this.template}close(sourceEvent){var evt=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=!1}}connectedCallback(){super.connectedCallback();if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}disconnectedCallback(){super.disconnectedCallback();this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(event){event.preventDefault()}_mouseDownListener(event){this._mouseDownInside=0<=event.composedPath().indexOf(this.$.overlay)}_mouseUpListener(event){this._mouseUpInside=0<=event.composedPath().indexOf(this.$.overlay)}_outsideClickListener(event){if(-1!==event.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1;this._mouseUpInside=!1;return}if(!this._last){return}const evt=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}_keydownListener(event){if(!this._last){return}if("Tab"===event.key&&this.focusTrap){this._cycleTab(event.shiftKey?-1:1);event.preventDefault()}else if("Escape"===event.key||"Esc"===event.key){const evt=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(opened,wasOpened){if(!this._instance){this._ensureTemplatized()}if(opened){this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();afterNextRender(this,()=>{if(this.focusTrap&&!this.contains(document._activeElement||document.activeElement)){this._cycleTab(0,0)}const evt=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(evt)});if(!this.modeless){this._addGlobalListeners()}}else if(wasOpened){this._animatedClosing();if(!this.modeless){this._removeGlobalListeners()}}}_hiddenChanged(hidden){if(hidden&&this.hasAttribute("closing")){this._flushAnimation("closing")}}_shouldAnimate(){const name=getComputedStyle(this).getPropertyValue("animation-name"),hidden="none"===getComputedStyle(this).getPropertyValue("display");return!hidden&&name&&"none"!=name}_enqueueAnimation(type,callback){const handler=`__${type}Handler`,listener=()=>{callback();this.removeEventListener("animationend",listener);delete this[handler]};this[handler]=listener;this.addEventListener("animationend",listener)}_flushAnimation(type){const handler=`__${type}Handler`;if("function"===typeof this[handler]){this[handler]()}}_animatedOpening(){if(this.parentNode===document.body&&this.hasAttribute("closing")){this._flushAnimation("closing")}this._attachOverlay();this.setAttribute("opening","");const finishOpening=()=>{this.removeAttribute("opening");document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);if(!this.modeless){this._enterModalState()}};if(this._shouldAnimate()){this._enqueueAnimation("opening",finishOpening)}else{finishOpening()}}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder");this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")){this._flushAnimation("opening")}if(this._placeholder){this.setAttribute("closing","");const finishClosing=()=>{this.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");this._exitModalState();document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);this._detachOverlay();this.removeAttribute("closing");if(this.restoreFocusOnClose&&this.__restoreFocusNode){const activeElement=this._getActiveElement();if(activeElement===document.body||this._deepContains(activeElement)){this.__restoreFocusNode.focus()}this.__restoreFocusNode=null}};if(this._shouldAnimate()){this._enqueueAnimation("closing",finishClosing)}else{finishClosing()}}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(el=>el instanceof OverlayElement)}get _last(){return this===OverlayElement.__attachedInstances.pop()}_modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState()}}else{this._removeGlobalListeners();this._exitModalState()}}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener);document.addEventListener("mouseup",this._boundMouseUpListener);document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0);document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){if("none"!==document.body.style.pointerEvents){this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents="none"}OverlayElement.__attachedInstances.forEach(el=>{if(el!==this){el.shadowRoot.querySelector("[part=\"overlay\"]").style.pointerEvents="none"}})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener);document.removeEventListener("mouseup",this._boundMouseUpListener);document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0);document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){if(this._previousDocumentPointerEvents!==void 0){document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents}const instances=OverlayElement.__attachedInstances;let el;while(el=instances.pop()){if(el===this){continue}el.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");if(!el.modeless){break}}}_removeOldContent(){if(!this.content||!this._contentNodes){return}this._observer.disconnect();this._contentNodes.forEach(node=>{if(node.parentNode===this.content){this.content.removeChild(node)}});if(this._originalContentPart){this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=void 0}this._observer.connect();this._contentNodes=void 0;this.content=void 0}_stampOverlayTemplate(template,instanceProps){this._removeOldContent();if(!template._Templatizer){template._Templatizer=templatize(template,this,{instanceProps:instanceProps,forwardHostProp:function(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value)}}})}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);const templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode()),_isScoped=templateRoot!==document;if(_isScoped){if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:"open"})}let scopeCssText="";const host=templateRoot.host;if(host&&host._template){scopeCssText=stylesFromTemplate(host._template).reduce((result,style)=>result+style.textContent,"")}scopeCssText=scopeCssText.replace(/:host/g,":host-nomatch");if(scopeCssText){if(window.ShadyCSS&&!window.ShadyCSS.nativeShadow){const contentPart=createOverlayContent(scopeCssText);contentPart.id="content";contentPart.setAttribute("part","content");this.$.content.parentNode.replaceChild(contentPart,this.$.content);contentPart.className=this.$.content.className;this._originalContentPart=this.$.content;this.$.content=contentPart}else{const style=document.createElement("style");style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style)}}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot}else{this.appendChild(this._instance.root);this.content=this}}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}render(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model)}}_templateOrRendererChanged(template,renderer,owner,model,instanceProps,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for overlay content")}const ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;const templateOrInstancePropsChanged=this._oldInstanceProps!==instanceProps||this._oldTemplate!==template;this._oldInstanceProps=instanceProps;this._oldTemplate=template;const rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;const openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(template&&templateOrInstancePropsChanged){this._stampOverlayTemplate(template,instanceProps)}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){this.content=this;if(rendererChanged){while(this.content.firstChild){this.content.removeChild(this.content.firstChild)}}if(opened){this.render()}}}_isFocused(element){return element&&element.getRootNode().activeElement===element}_focusedIndex(elements){elements=elements||this._getFocusableElements();return elements.indexOf(elements.filter(this._isFocused).pop())}_cycleTab(increment,index){const focusableElements=this._getFocusableElements();if(index===void 0){index=this._focusedIndex(focusableElements)}index+=increment;if(index>=focusableElements.length){index=0}else if(0>index){index=focusableElements.length-1}focusableElements[index].focus()}_getFocusableElements(){return FocusablesHelper.getTabbableNodes(this.$.overlay)}_getActiveElement(){let active=document._activeElement||document.activeElement;if(!active||active===document.documentElement||!1===active instanceof Element){active=document.body}while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement}return active}_deepContains(node){if(this.contains(node)){return!0}let n=node;const doc=node.ownerDocument;while(n&&n!==doc&&n!==this){n=n.parentNode||n.host}return n===this}}_exports.OverlayElement=OverlayElement;customElements.define(OverlayElement.is,OverlayElement);var vaadinOverlay={OverlayElement:OverlayElement};_exports.$vaadinOverlay=vaadinOverlay;const $_documentContainer$j=document.createElement("template");$_documentContainer$j.innerHTML=`<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">
  <template>
    <style>
      /*
        NOTE(platosha): Make some min-width to prevent collapsing of the content
        taking the parent width, e. g., <vaadin-grid> and such.
      */
      [part="content"] {
        min-width: 12em; /* matches the default <vaadin-text-field> width */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$j.content);class DialogOverlayElement extends OverlayElement{static get is(){return"vaadin-dialog-overlay"}}customElements.define(DialogOverlayElement.is,DialogOverlayElement);class DialogElement extends ThemePropertyMixin(ElementMixin$1(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready();this.$.overlay.setAttribute("role","dialog");this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this));this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this));this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)})}_setTemplateFromNodes(nodes){this._contentTemplate=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._contentTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}render(){this.$.overlay.render()}_templateOrRendererChanged(template,renderer){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for dialog content")}this._oldTemplate=template;this._oldRenderer=renderer;if(renderer){this.$.overlay.setProperties({owner:this,renderer:renderer})}}disconnectedCallback(){super.disconnectedCallback();this.opened=!1}_openedChanged(opened){if(opened){this.$.overlay.template=this.querySelector("template")}this.$.overlay.opened=opened}_ariaLabelChanged(ariaLabel){if(ariaLabel!==void 0&&null!==ariaLabel){this.$.overlay.setAttribute("aria-label",ariaLabel)}else{this.$.overlay.removeAttribute("aria-label")}}_onOverlayOpened(e){if(!1===e.detail.value){this.opened=!1}}_handleOutsideClick(e){if(this.noCloseOnOutsideClick){e.preventDefault()}}_handleEscPress(e){if(this.noCloseOnEsc){e.preventDefault()}}}_exports.DialogElement=DialogElement;customElements.define(DialogElement.is,DialogElement);var vaadinDialog={DialogElement:DialogElement};_exports.$vaadinDialog=vaadinDialog;const $_documentContainer$k=document.createElement("template");$_documentContainer$k.innerHTML=`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-slide 1.6s infinite cubic-bezier(.645, .045, .355, 1), vaadin-progress-scale 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-slide {
        0% {
          transform-origin: 0% 0%;
        }

        50% {
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        100% {
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      @keyframes vaadin-progress-scale {
        0% { transform: scaleX(0.015); }
        25% { transform: scaleX(0.4); }
        50% { transform: scaleX(0.015); }
        50.1% { transform: scaleX(0.015); }
        75% { transform: scaleX(0.4); }
        100% { transform: scaleX(0.015); }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$k.content);;const ProgressMixin=superClass=>class VaadinProgressMixin extends superClass{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready();this.setAttribute("role","progressbar")}_normalizedValueChanged(value,min,max){const newNormalizedValue=this._normalizeValue(value,min,max);this.style.setProperty("--vaadin-progress-value",newNormalizedValue);this.updateStyles({"--vaadin-progress-value":newNormalizedValue+""})}_valueChanged(newV,oldV){this.setAttribute("aria-valuenow",newV)}_minChanged(newV,oldV){this.setAttribute("aria-valuemin",newV)}_maxChanged(newV,oldV){this.setAttribute("aria-valuemax",newV)}_normalizeValue(value,min,max){let nV;if(!value&&0!=value){nV=0}else if(min>=max){nV=1}else{nV=(value-min)/(max-min);nV=_Mathmin(_Mathmax(nV,0),1)}return nV}};_exports.ProgressMixin=ProgressMixin;var vaadinProgressMixin={ProgressMixin:ProgressMixin};_exports.$vaadinProgressMixin=vaadinProgressMixin;class ProgressBarElement extends ElementMixin$1(ThemableMixin(ProgressMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.1.0"}}_exports.ProgressBarElement=ProgressBarElement;customElements.define(ProgressBarElement.is,ProgressBarElement);var vaadinProgressBar={ProgressBarElement:ProgressBarElement};_exports.$vaadinProgressBar=vaadinProgressBar;const $_documentContainer$l=document.createElement("template");$_documentContainer$l.innerHTML=`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$l.content);const $_documentContainer$m=document.createElement("template");$_documentContainer$m.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$m.content);;class UploadFileElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)","_toggleHostAttribute(file.error, \"error\")","_toggleHostAttribute(file.indeterminate, \"indeterminate\")","_toggleHostAttribute(file.uploading, \"uploading\")","_toggleHostAttribute(file.complete, \"complete\")"]}_fileAborted(abort){if(abort){this._remove()}}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(progress){return progress/100}_fireFileEvent(e){e.preventDefault();return this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(value,attributeName){const shouldHave=!!value,has=this.hasAttribute(attributeName);if(has!==shouldHave){if(shouldHave){this.setAttribute(attributeName,"")}else{this.removeAttribute(attributeName)}}}}_exports.UploadFileElement=UploadFileElement;customElements.define(UploadFileElement.is,UploadFileElement);var vaadinUploadFile={UploadFileElement:UploadFileElement};_exports.$vaadinUploadFile=vaadinUploadFile;class UploadElement extends ElementMixin$1(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.2.1"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready();this.addEventListener("dragover",this._onDragover.bind(this));this.addEventListener("dragleave",this._onDragleave.bind(this));this.addEventListener("drop",this._onDrop.bind(this));this.addEventListener("file-retry",this._onFileRetry.bind(this));this.addEventListener("file-abort",this._onFileAbort.bind(this));this.addEventListener("file-remove",this._onFileRemove.bind(this));this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(bytes){var _Mathlog=Math.log;if("function"===typeof this.i18n.formatSize){return this.i18n.formatSize(bytes)}const base=this.i18n.units.sizeBase||1e3,unit=~~(_Mathlog(bytes)/_Mathlog(base)),dec=_Mathmax(0,_Mathmin(3,unit-1)),size=parseFloat((bytes/Math.pow(base,unit)).toFixed(dec));return size+" "+this.i18n.units.size[unit]}_splitTimeByUnits(time){const unitSizes=[60,60,24,1/0],timeValues=[0];for(var i=0;i<unitSizes.length&&0<time;i++){timeValues[i]=time%unitSizes[i];time=_Mathfloor(time/unitSizes[i])}return timeValues}_formatTime(seconds,split){if("function"===typeof this.i18n.formatTime){return this.i18n.formatTime(seconds,split)}while(3>split.length){split.push(0)}return split.reverse().map(number=>{return(10>number?"0":"")+number}).join(":")}_formatFileProgress(file){return file.totalStr+": "+file.progress+"% ("+(0<file.loaded?this.i18n.uploading.remainingTime.prefix+file.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(maxFiles,numFiles){return 0<=maxFiles&&numFiles>=maxFiles}_onDragover(event){event.preventDefault();if(!this.nodrop&&!this._dragover){this._dragoverValid=!this.maxFilesReached;this._dragover=!0}event.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(event){event.preventDefault();if(this._dragover&&!this.nodrop){this._dragover=this._dragoverValid=!1}}_onDrop(event){if(!this.nodrop){event.preventDefault();this._dragover=this._dragoverValid=!1;this._addFiles(event.dataTransfer.files)}}_createXhr(){return new XMLHttpRequest}_configureXhr(xhr){if("string"==typeof this.headers){try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}}for(var key in this.headers){xhr.setRequestHeader(key,this.headers[key])}if(this.timeout){xhr.timeout=this.timeout}xhr.withCredentials=this.withCredentials}_setStatus(file,total,loaded,elapsed){file.elapsed=elapsed;file.elapsedStr=this._formatTime(file.elapsed,this._splitTimeByUnits(file.elapsed));file.remaining=_Mathceil(elapsed*(total/loaded-1));file.remainingStr=this._formatTime(file.remaining,this._splitTimeByUnits(file.remaining));file.speed=~~(total/elapsed/1024);file.totalStr=this._formatSize(total);file.loadedStr=this._formatSize(loaded);file.status=this._formatFileProgress(file)}uploadFiles(files){files=files||this.files;files=files.filter(file=>!file.complete);Array.prototype.forEach.call(files,this._uploadFile.bind(this))}_uploadFile(file){if(file.uploading){return}const ini=Date.now(),xhr=file.xhr=this._createXhr(file);let stalledId,last;xhr.upload.onprogress=e=>{clearTimeout(stalledId);last=Date.now();const elapsed=(last-ini)/1e3,loaded=e.loaded,total=e.total,progress=~~(100*(loaded/total));file.loaded=loaded;file.progress=progress;file.indeterminate=0>=loaded||loaded>=total;if(file.error){file.indeterminate=file.status=void 0}else if(!file.abort){if(100>progress){this._setStatus(file,total,loaded,elapsed);stalledId=setTimeout(()=>{file.status=this.i18n.uploading.status.stalled;this._notifyFileChanges(file)},2e3)}else{file.loadedStr=file.totalStr;file.status=this.i18n.uploading.status.processing;file.uploading=!1}}this._notifyFileChanges(file);this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file,xhr}}))};xhr.onreadystatechange=()=>{if(4==xhr.readyState){clearTimeout(stalledId);file.indeterminate=file.uploading=!1;if(file.abort){this._notifyFileChanges(file);return}file.status="";const evt=this.dispatchEvent(new CustomEvent("upload-response",{detail:{file,xhr},cancelable:!0}));if(!evt){return}if(0===xhr.status){file.error=this.i18n.uploading.error.serverUnavailable}else if(500<=xhr.status){file.error=this.i18n.uploading.error.unexpectedServerError}else if(400<=xhr.status){file.error=this.i18n.uploading.error.forbidden}file.complete=!file.error;this.dispatchEvent(new CustomEvent(`upload-${file.error?"error":"success"}`,{detail:{file,xhr}}));this._notifyFileChanges(file)}};const formData=new FormData;file.uploadTarget=this.target||"";file.formDataName=this.formDataName;const evt=this.dispatchEvent(new CustomEvent("upload-before",{detail:{file,xhr},cancelable:!0}));if(!evt){return}formData.append(file.formDataName,file,file.name);xhr.open(this.method,file.uploadTarget,!0);this._configureXhr(xhr);file.status=this.i18n.uploading.status.connecting;file.uploading=file.indeterminate=!0;file.complete=file.abort=file.error=file.held=!1;xhr.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file,xhr}}));this._notifyFileChanges(file)};const uploadEvt=this.dispatchEvent(new CustomEvent("upload-request",{detail:{file,xhr,formData},cancelable:!0}));if(uploadEvt){xhr.send(formData)}}_retryFileUpload(file){const evt=this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file,xhr:file.xhr},cancelable:!0}));if(evt){this._uploadFile(file)}}_abortFileUpload(file){const evt=this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file,xhr:file.xhr},cancelable:!0}));if(evt){file.abort=!0;if(file.xhr){file.xhr.abort()}this._notifyFileChanges(file)}}_notifyFileChanges(file){var p="files."+this.files.indexOf(file)+".";for(var i in file){if(file.hasOwnProperty(i)){this.notifyPath(p+i,file[i])}}}_addFiles(files){Array.prototype.forEach.call(files,this._addFile.bind(this))}_addFile(file){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.tooManyFiles}}));return}if(0<=this.maxFileSize&&file.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.fileIsTooBig}}));return}const fileExt=file.name.match(/\.[^\.]*$|$/)[0],re=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");if(this.accept&&!(re.test(file.type)||re.test(fileExt))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file,error:this.i18n.error.incorrectFileType}}));return}file.loaded=0;file.held=!0;file.status=this.i18n.uploading.status.held;this.unshift("files",file);if(!this.noAuto){this._uploadFile(file)}}_removeFile(file){if(-1<this.files.indexOf(file)){this.splice("files",this.files.indexOf(file),1)}}_onAddFilesTouchEnd(e){e.preventDefault();this.__resetMouseCanceller();this._onAddFilesClick()}__resetMouseCanceller(){resetMouseCanceller()}_onAddFilesClick(){if(this.maxFilesReached){return}this.$.fileInput.value="";this.$.fileInput.click()}_onFileInputChange(event){this._addFiles(event.target.files)}_onFileStart(event){this._uploadFile(event.detail.file)}_onFileRetry(event){this._retryFileUpload(event.detail.file)}_onFileAbort(event){this._abortFileUpload(event.detail.file)}_onFileRemove(event){event.stopPropagation();this._removeFile(event.detail.file)}_dragoverChanged(dragover){dragover?this.setAttribute("dragover",dragover):this.removeAttribute("dragover")}_dragoverValidChanged(dragoverValid){dragoverValid?this.setAttribute("dragover-valid",dragoverValid):this.removeAttribute("dragover-valid")}_i18nPlural(value,plural){return 1==value?plural.one:plural.many}_isMultiple(){return 1!=this.maxFiles}}_exports.UploadElement=UploadElement;customElements.define(UploadElement.is,UploadElement);var vaadinUpload={UploadElement:UploadElement};_exports.$vaadinUpload=vaadinUpload;const template=html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);const $_documentContainer$n=document.createElement("template");$_documentContainer$n.setAttribute("style","display: none;");$_documentContainer$n.innerHTML=`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$n.content);const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if("loading"===alt){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(""===alt);this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=!1;this.__coolingDown=!1}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};_exports.$paperSpinnerBehavior=paperSpinnerBehavior;const template$1=html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$1.setAttribute("strip-whitespace","");Polymer({_template:template$1,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});class DicomView extends PolymerElement{static get template(){return html`
      <style>
        :host {
            
        }
        .image {
          width:512px;
          height:512px;
          top:0;
          left:0;
          position:absolute;
        }
        .container {
          position: relative;
        }
      </style>

     <div class="container" oncontextmenu="return false;">
        <div class="image" id="dicomImage"></div>
      </div>
    `}upd_state(){window.states[cornerstone.getImage(this.$.dicomImage).imageId]=cornerstoneTools.getToolState(this.$.dicomImage,"FreehandMouse")}static get properties(){return{imageId:{type:String,observer:"_imageIdObserver"},meta:{type:Object,notify:!0}}}connectedCallback(){super.connectedCallback();window.cornerstone.enable(this.$.dicomImage);const PanTool=cornerstoneTools.PanTool;cornerstoneTools.addTool(PanTool);cornerstoneTools.setToolActive("Pan",{mouseButtonMask:2});const ZoomMouseWheelTool=cornerstoneTools.ZoomMouseWheelTool;cornerstoneTools.addTool(ZoomMouseWheelTool);cornerstoneTools.setToolActive("ZoomMouseWheel",{mouseButtonMask:1});const FreehandMouseTool=cornerstoneTools.FreehandMouseTool;window.handtool=FreehandMouseTool;cornerstoneTools.addTool(FreehandMouseTool);cornerstoneTools.setToolActive("FreehandMouse",{mouseButtonMask:1})}_imageIdObserver(imageId){var old_image=cornerstone.getImage(this.$.dicomImage);console.log(old_image);if(old_image!==void 0){window.states[old_image.imageId]=cornerstoneTools.getToolState(this.$.dicomImage,"FreehandMouse")}window.cornerstone.loadImage(imageId).then(image=>{const viewport=window.cornerstone.getDefaultViewportForImage(this.$.dicomImage,image);window.cornerstone.displayImage(this.$.dicomImage,image,viewport);this._parseMeta(image)})}_parseMeta(image){this.meta=[{name:"Samples Per Pixel",value:image.data.uint16("x00280002")},{name:"Photometric Interpretation",value:image.data.string("x00280004")},{name:"Number Of Frames",value:image.data.string("x00280008")},{name:"Planar Configuration",value:image.data.uint16("x00280006")},{name:"Rows",value:image.data.uint16("x00280010")},{name:"Columns",value:image.data.uint16("x00280011")},{name:"Pixel Spacing",value:image.data.string("x00280030")},{name:"Bits Allocated",value:image.data.uint16("x00280100")},{name:"Bits Stored",value:image.data.uint16("x00280101")},{name:"High Bit",value:image.data.uint16("x00280102")},{name:"Pixel Representation",value:image.data.uint16("x00280103")},{name:"WindowCenter",value:image.data.string("x00281050")},{name:"WindowWidth",value:image.data.string("x00281051")},{name:"RescaleIntercept",value:image.data.string("x00281052")},{name:"RescaleSlope",value:image.data.string("x00281053")},{name:"Fragments",value:image.data.elements.x7fe00010&&image.data.elements.x7fe00010.fragments?image.data.elements.x7fe00010.fragments.length:""},{name:"Min Stored Pixel Value",value:image.minPixelValue},{name:"Max Stored Pixel Value",value:image.maxPixelValue}]}}customElements.define("dicom-view",DicomView);class PageDicom extends PolymerElement{static get properties(){return{files:{type:Array,value:()=>[]},selectedItem:{type:Object,value:()=>{}},loading:{type:Boolean,value:!0}}}static get template(){return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%:
        }
        .container {
          margin-top: 16px;
          display: flex;
        }
        .row1 {
           min-width: 530px;
           
        }
        .row2 {
           width: 100%;
            display: flex;
        }
        #dicomImage {
          width:512px;
          height:512px;
          top:0px;
          left:0px;
          position:absolute;
        }
        .add-button {
          width: 110px;
         
        }
         .play-button {
          width: 110px;
         margin-left: 16px;
        }
        .dicomImageContainer {
          position: relative;
        }
        vaadin-details {
          margin-top: 516px;
            max-width: 512px;
        }
        vaadin-grid {
          max-width: 256px;
          height: 100%;
        }
        .navbar {
         display: flex;
        }
        #spinner {
          position: absolute;
          top: 300px;
          left: 266px;
        }
      </style>     
      <div class="navbar">
        <el-button class="add-button" on-click="_saveAll">Export</el-button>
        <vaadin-button class="play-button" on-click="_play" disabled="[[disabled]]">Play</vaadin-button>
    </div>
    
      
      <div class="container">
        <div class="row1">
          <paper-spinner-lite id="spinner"  active="[[loading]]"></paper-spinner-lite>
          <dicom-view id = "dicomview" image-id="[[selectedItem.imageId]]" meta="{{currentMeta}}" state="{{selectedItem.state}}"></dicom-view>    
          
          <vaadin-details theme="filled" opened>
            <div slot="summary">Details</div>
            <dom-repeat items="{{currentMeta}}">
              <template>
                <div>[[item.name]]: [[item.value]]</div>
              </template>
            </dom-repeat>
          </vaadin-details>
        </div>
        <div class="row2">
           <vaadin-grid items="[[files]]" selected id="grid">
              <vaadin-grid-filter-column path="originalname" header="Name"></vaadin-grid-filter-column>
            </vaadin-grid>
             
        </div>
      </div>
     
    `}_saveAll(e){this.$.dicomview.upd_state();var data=window.states,zip=new JSZip;for(var key in data){if(!data[key])continue;var v=data[key].data,name=this.files.find(f=>f.imageId===key).originalname,txt="";v.forEach(function(element){txt+=element.points_name+"\n";var ps=element.handles.points;ps.forEach(function(point){txt+=point.x+" "+point.y+"\n"})});zip.file(name+".txt",txt)}zip.generateAsync({type:"base64"}).then(function(content){window.location.href="data:application/zip;base64,"+content})}connectedCallback(){super.connectedCallback();window.states=[];const grid=this.$.grid;grid.addEventListener("active-item-changed",event=>{const item=event.detail.value;grid.selectedItems=item?[item]:[];if(item)this.selectedItem=grid.selectedItems[0]});fetch(`/dicom/api/study/get?id=${this.location.params.id}`).then(response=>response.json()).then(data=>{data.files=data.files.reverse();data.files.forEach(file=>{fetch(`/dicom/api/study/getFile`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({path:file.destination+""+file.filename})}).then(response=>response.blob()).then(d=>{const f=new File([d],file.originalname);file.imageId=window.cornerstoneWADOImageLoader.wadouri.fileManager.add(f);this.push("files",file);if(!this.selectedItem){grid.selectedItems=[this.files[0]];this.selectedItem=this.files[0]}})})});setTimeout(()=>{this.loading=!1},5e3)}_clear(){}_play(){let i=1,n=this.files.length;const grid=this.$.grid;grid.selectedItems=[this.files[0]];this.selectedItem=this.files[0];this.disabled=!0;const interv=setInterval(()=>{grid.selectedItems=[this.files[i]];this.selectedItem=this.files[i];i++;if(i===n){clearInterval(interv);this.disabled=!1}},500)}}customElements.define("page-dicom",PageDicom);class GridFilterColumnElement extends GridColumnElement{static get template(){return html`
    <template class="header" id="headerTemplate">
      <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
        <vaadin-text-field theme="small" focus-target="" style="max-width: 100%" slot="filter" value="{{_filterValue}}" label="[[_getHeader(header, path)]]"></vaadin-text-field>
      </vaadin-grid-filter>
    </template>
`}static get is(){return"vaadin-grid-filter-column"}static get properties(){return{path:String,header:String}}_prepareHeaderTemplate(){const headerTemplate=this._prepareTemplatizer(this.$.headerTemplate);headerTemplate.templatizer.dataHost=this;return headerTemplate}_getHeader(header,path){return header||this._generateHeader(path)}}_exports.GridFilterColumnElement=GridFilterColumnElement;customElements.define(GridFilterColumnElement.is,GridFilterColumnElement);var vaadinGridFilterColumn={GridFilterColumnElement:GridFilterColumnElement};_exports.$vaadinGridFilterColumn=vaadinGridFilterColumn;const $_documentContainer$o=html`<dom-module id="lumo-button-2" theme-for="el-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--lumo-primary-text-color);
        background-color: var(--lumo-contrast-5pct);
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$o.content);class ButtonElement$1 extends ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <a id="button" href="[[href]]" aria-label\$="[[_ariaLabel]]"></a>
`}static get is(){return"el-button"}static get version(){return"2.1.4"}static get properties(){return{_ariaLabel:{type:String},href:{type:String}}}static get observedAttributes(){return super.observedAttributes.concat(["aria-label"])}ready(){super.ready();this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners();this._updateAriaLabel(this.getAttribute("aria-label"))}disconnectedCallback(){super.disconnectedCallback();if(this.hasAttribute("active")){this.removeAttribute("active")}}attributeChangedCallback(attr,oldVal,newVal){super.attributeChangedCallback(attr,oldVal,newVal);if("aria-label"===attr){this._updateAriaLabel(newVal)}}_addActiveListeners(){addListener(this,"down",()=>!this.disabled&&this.setAttribute("active",""));addListener(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>!this.disabled&&0<=[13,32].indexOf(e.keyCode)&&this.setAttribute("active",""));this.addEventListener("keyup",()=>this.removeAttribute("active"));this.addEventListener("blur",()=>this.removeAttribute("active"))}_updateAriaLabel(ariaLabel){this._ariaLabel=ariaLabel!==void 0&&null!==ariaLabel?ariaLabel:this.innerText}get focusElement(){return this.$.button}}_exports.ButtonElement=ButtonElement$1;customElements.define(ButtonElement$1.is,ButtonElement$1);var elButton={ButtonElement:ButtonElement$1};_exports.$elButton=elButton;class PageStudy extends PolymerElement{static get properties(){return{items:{type:Array,value:()=>[]}}}static get template(){return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }
        vaadin-grid {
        max-width: 800px;
        margin-top: 16px;
        }
        .add-button {
          width: 100px;
        }
      </style>        
       <el-button class="add-button" href="/dicom/study-add" on-click="_addStudy">Add study</el-button>
       <vaadin-grid items="[[items]]" selected>
        <vaadin-grid-filter-column path="value" header="Name"></vaadin-grid-filter-column>
         <vaadin-grid-column text-align="end">
          <template>
            <el-button class="add-button" href="[[_computeLink(item)]]" on-click="_addStudy">Open</el-button>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
    `}connectedCallback(){super.connectedCallback();console.log("fdf00");fetch("/dicom/api/study/list").then(response=>response.json()).then(data=>{this.set("items",data)})}_computeLink(item){return`view/${item.id}`}}customElements.define("page-study",PageStudy);class PageStudyAdd extends PolymerElement{static get properties(){return{files:{type:Array,value:()=>[]},value:{type:String}}}static get template(){return html`
      <style>
        :host {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }      
        
        .container {
           max-width: 400px;
        } 
        
        #add {
          width: 80px;
        }
        .add-button {
          width: 100px;
        }
      </style>
      
      <el-button class="add-button" href="/dicom" on-click="_save">Save</el-button>
      
      <div class="container">
        <vaadin-text-field label="Name" value="{{value}}" autofocus></vaadin-text-field>
        <vaadin-upload
          id="uploader"
          target="/dicom/api/upload"
          form-data-name="files"
          files="{{files}}"
        ></vaadin-upload>
      </div>
    `}_save(){const data={value:this.value,files:this.files.map(item=>JSON.parse(item.xhr.response))};console.log(data);fetch("/dicom/api/study/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)})}}customElements.define("page-study-add",PageStudyAdd);class DicomShell extends PolymerElement{static get properties(){return{items:{type:Array,value:()=>[]}}}static get template(){return html`
      <style>
        :host {
          display: flex;
          width: 100%;
          height: 100%;
          
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }
        .content {
          padding: 16px;
        }
      
        h3 {
          text-align: center;
        }
      </style>
     
      <vaadin-app-layout>
        <h3 slot="branding" style="margin: 0;">Digital Imaging and Communications in Medicine</h3>
        <vaadin-tabs slot="menu">
<!--          <vaadin-tab>Workspace</vaadin-tab>-->
        </vaadin-tabs>  
        
        <div class="content" id="outlet">
         
        </div>
      </vaadin-app-layout>
    `}connectedCallback(){super.connectedCallback();this.router=new Router(this.$.outlet);this.router.setRoutes([{path:"/",component:"page-study"},{path:"dicom",component:"page-study"},{path:"study-add",component:"page-study-add"},{path:"view/:id",component:"page-dicom"}]);window.router=this.router;console.log(this.router)}}customElements.define("dicom-shell",DicomShell)});