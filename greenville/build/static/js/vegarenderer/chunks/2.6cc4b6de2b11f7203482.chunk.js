webpackJsonp_name_([2],{55:function(a,b){"use strict";class c{}b.a=c,Object.defineProperty(c,"getHighlightedDocViewer",{enumerable:!0,writable:!0,value:()=>{const a=document.querySelector("#text_highlight_0_0");if(a){const b=a.parentNode,c=b.id;return-1<c.indexOf("docViewer2")?"docViewer2":-1<c.indexOf("docViewer")?"docViewer":null}return null}}),Object.defineProperty(c,"getNextPage",{enumerable:!0,writable:!0,value:(a,b,c)=>{const d=b.find((b)=>b.id==a);let e=d.index;if(c){if(0===e)return d;e+=1}const f=b[e+1];return f||null}}),Object.defineProperty(c,"getPage",{enumerable:!0,writable:!0,value:(a,b)=>{const c=b.find((b)=>b.id===a);return c||null}}),Object.defineProperty(c,"getPageTitle",{enumerable:!0,writable:!0,value:(a,b)=>{const c=b.find((b)=>b.id===a);return c.pagenumber||a}})},59:function(a,b,c){"use strict";var d=c(5),e=c.n(d),f=c(7),g=c.n(f),h=c(4),i=c(55),j=c(6);b.a=class{constructor(a){Object.defineProperty(this,"getPopupLocation",{enumerable:!0,writable:!0,value:(a)=>{const b=document.querySelector(".pdf-fwr-pc-right").scrollTop;return a.offsetTop-b}}),Object.defineProperty(this,"handleTextSelection",{enumerable:!0,writable:!0,value:(a)=>{if(0<a.selection.length){const b=this.getPopupLocation(a.selection[0])+40;document.querySelector(".annotation")||e.a.publish(f.AnnotationUtil.actions.NewSelection,{top:b,bottom:500,left:a.event.screenX+30})}}}),Object.defineProperty(this,"getColorId",{enumerable:!0,writable:!0,value:(a)=>{let b="";switch(a.toLowerCase()){case"#ffa7d1":b="1";break;case"#f4d97b":b="2";break;case"#01cbb7":b="0";break;case"#31d0fd":b="3";break;default:b="0";}return b}}),Object.defineProperty(this,"handleHighlightClicked",{enumerable:!0,writable:!0,value:(a,b)=>{const c=b.id,d=this.viewerContext.isEt1SpdfContent;let f=!1,g=this.annotationStore.filter((a)=>a.id===c);0===g.length&&(g=this.annotationStoreSecondPage.filter((a)=>a.id===c),f=!0);const i=this.getStoreIndex(c,f),j=d?document.querySelector(".vega-reader-content").scrollTop:0,k=this.viewerContext.props.getServerId(c)||c;if(!k.startsWith("_")){f?this.annotationStoreSecondPage[i].id=k:this.annotationStore[i].id=k;const c=(a.currentTarget||a.target).getBoundingClientRect(),d={action:"tap",annotation:{annotationType:b.annotationType,color:b.color,id:k,quote:b.data.quote,ranges:b.data.ranges,rect:{left:c.left,top:c.top,bottom:c.bottom,right:c.right,width:c.width,height:c.height},text:b.text,shareable:b.shareable,highlight:b.highlight,tags:b.tags||[],title:b.data.title||"",chapter:b.chapter},location:{pageX:c.left-h.g,pageY:c.top+j}};e.a.publish("user-tapped-highlight",d)}}}),this.viewerContext=a,this.annotationStore=[],this.annotationStoreSecondPage=[],this.overlapList=[],this.overlapObj={}}load(a=[]){const b=this.viewerContext.secondFrameId;if(0<a.length){window.$(".fwr-search-text-highlight").remove();const c=!!a[0].pageId&&a[0].pageId===b;c?this.annotationStoreSecondPage=a:this.annotationStore=a;try{this.restoreHighlights(a,c)}catch(a){}}}restoreHighlights(a,b=!1){const c=this.viewerContext.isEt1SpdfContent;b?window.$(".docViewer2 .pdfHighlight").remove():window.$(".docViewer .pdfHighlight").remove();for(let d=0;d<a.length;d+=1)try{const e=a[d].data?a[d].data.ranges:"",f=a[d].pageId||null,g=e.split("@")[0].trim().replace(/(\r\n|\n|\r)/gm,"").replace(/['"]+/g,"");let h=[];if(h=g.split(":"),null!==f||void 0!==f){const e=[];for(let a=0;a<h.length-1;a+=4){const b=new window.WebPDF.PDFRect,c=h[a].split("{")[1].trim(),d=h[a+1].split(",")[1].trim(),f=h[a+2].split(",")[1].trim(),g=h[a+3].split(",")[1].trim(),i=h[a+1].split(",")[0],j=h[a+2].split(",")[0],k=h[a+3].split(",")[0],l=h[a+4].split("}")[0];b[c+""]=parseFloat(i),b[d+""]=parseFloat(j),b[f+""]=parseFloat(k),b[g+""]=parseFloat(l);try{e.push(b)}catch(a){}}try{c?b?window.frame2.customHighlightText(0,e,2):window.frame1.customHighlightText(0,e,1):window.WebPDF.ViewerInstance.highlightText(0,e),this.saveHighlight(f,a[d],b)}catch(a){}}}catch(a){}e.a.publish(h.j)}create(a,b){const c=a.annotationType,d=a.color,e=a.shareable,f=a.tags,g=a.text;var h=this.viewerContext;const j=h.isEt1SpdfContent,k=h.props.pagePlayList,l=h.secondFrameId,m=h.userRoleTypeId;let n,o,p;if(j){const a=i.a.getHighlightedDocViewer();"docViewer2"===a?(o=!0,n=window.frame2.getPluginByName(window.WebPDF.TextSelectPluginName),p=window.frame2.getCurToolHandler().getTextSelectTool().getSelectedText(2)):(n=window.frame1.getPluginByName(window.WebPDF.TextSelectPluginName),p=window.frame1.getCurToolHandler().getTextSelectTool().getSelectedText(1))}else n=window.WebPDF.ViewerInstance.getToolHandlerByName("Select Text"),p=n&&n.getTextSelectService().getSelectedText();const q={highlight:{content:[],ranges:[]},data:{}};let r="";if(p&&""!==p){const a=j?o?n.getCustomSelectedTextRectInfo(2)[0]:n.getCustomSelectedTextRectInfo(1)[0]:n.getTextSelectService().getSelectedTextRectInfo()[0],h=a&&a.selectedRectArray;for(let a=0;a<h.length;a+=1){const b=h[a];0==a?q.rect={left:b.left,right:b.right,top:b.top,bottom:b.bottom}:r+=",",r=`${r}{"left":"${parseFloat(b.left).toFixed(6)}",`+`"top":"${parseFloat(b.top).toFixed(6)}","right":"${parseFloat(b.right).toFixed(6)}",`+`"bottom":"${parseFloat(b.bottom).toFixed(6)}"}`}r=`[${r}]@0.000000`,q.highlight.content.push({type:"text",content:{text:p||"",title:""}}),q.highlight.ranges.push({title:r});const i=o&&l?l:b,s=k.find((a)=>a.id===i),t=s.title;q.contextualInfo={chapterId:s.chapterId||"",chapterTitle:s.chapterTitle||"",title:t||""},q.chapter={contextualInfo:q.contextualInfo,pageTitle:t},q.pageId=i,q.pageNo=s.pagenumber,q.annotationType=c,q.color=d,q.highlight.noteText=g||"",q.selectedText=p,q.shareable=e,q.tags=f,q.text=g||"",q.userRoleTypeId=m,q.id=`_${Math.random().toString(36).substr(2,9)}`,q.data={quote:p||"",ranges:r,text:g||"",title:t||""};try{j?o?window.frame2.customHighlightText(0,h,2):window.frame1.customHighlightText(0,h,1):window.WebPDF.ViewerInstance.highlightText(0,h),this.saveHighlight(0,q,o)}catch(a){}j&&o?this.annotationStoreSecondPage.push(q):this.annotationStore.push(q)}return q}get(){const a=this.viewerContext.isEt1SpdfContent;let b,c,d;if(a){const a=i.a.getHighlightedDocViewer();"docViewer2"===a?(c=!0,b=window.frame2.getPluginByName(window.WebPDF.TextSelectPluginName),d=window.frame2.getCurToolHandler().getTextSelectTool().getSelectedText(2)):(b=window.frame1.getPluginByName(window.WebPDF.TextSelectPluginName),d=window.frame1.getCurToolHandler().getTextSelectTool().getSelectedText(1))}else b=window.WebPDF.ViewerInstance.getToolHandlerByName("Select Text"),d=b&&b.getTextSelectService().getSelectedText();const e={highlight:{content:[],ranges:[]},data:{}};let f="";if(d&&""!==d){const g=a?c?b.getCustomSelectedTextRectInfo(2)[0]:b.getCustomSelectedTextRectInfo(1)[0]:b.getTextSelectService().getSelectedTextRectInfo()[0],h=g&&g.selectedRectArray;for(let a=0;a<h.length;a+=1){const b=h[a];0==a?e.rect={left:b.left,right:b.right,top:b.top,bottom:b.bottom}:f+=",",f=`${f}{"left":"${parseFloat(b.left).toFixed(6)}",`+`"top":"${parseFloat(b.top).toFixed(6)}","right":"${parseFloat(b.right).toFixed(6)}",`+`"bottom":"${parseFloat(b.bottom).toFixed(6)}"}`}f=`[${f}]@0.000000`,e.highlight.content.push({type:"text",content:{text:d||"",title:""}}),e.highlight.ranges.push({title:f}),e.highlight.noteText=""}return e}search(){const a=this.viewerContext.isEt1SpdfContent;let b,c;if(a){const a=i.a.getHighlightedDocViewer();"docViewer2"===a?(b=window.frame2.getCurToolHandler().getTextSelectTool(),c=window.frame2.getCurToolHandler().getTextSelectTool().getSelectedText(2)):(b=window.frame1.getCurToolHandler().getTextSelectTool(),c=window.frame1.getCurToolHandler().getTextSelectTool().getSelectedText(1))}else b=window.WebPDF.ViewerInstance.getToolHandlerByName("Select Text"),c=b&&b.getTextSelectService().getSelectedText();const d={highlight:{content:[]}};return c&&""!==c&&(d.highlight.content.push({type:"text",content:{text:c||"",title:""}}),b.clearSelection()),d}saveHighlight(a,b,c=!1){const d=b.data.ranges,e=b.id,f=b.color,g=document.querySelectorAll(".fwr-search-text-highlight"),k=document.createElement("div"),l=j.a.getLineColor(f),m=j.a.hexToRGB(f,h.a);k.setAttribute("data-id",e),k.setAttribute("highlight-hash",d),k.classList.add("pdfHighlight");for(let d=0;d<g.length&&!(b.annotationType&&b.annotationType.toLowerCase()===h.b);d+=1){const c=document.createElement("div");c.classList.add("fwr-highlight-annot"),c.setAttribute("page-index",a),c.setAttribute("id",e),c.style.left=g[d].style.left,c.style.top=g[d].style.top,c.style.width=g[d].style.width,c.style.height=g[d].style.height,c.style.backgroundColor=m,c.style.borderBottom=`2px solid ${l}`,c.onclick=(a)=>{this.handleHighlightClicked(a,b)},k.appendChild(c)}const i=c?document.getElementById("docViewer2_ViewContainer_PageContainer_0"):document.getElementById("docViewer_ViewContainer_PageContainer_0");i.appendChild(k),window.$(".fwr-search-text-highlight").remove()}update(a){const b=a.chapter,c=a.color,d=a.id,e=a.shareable,f=a.tags,g=a.text,i=this.viewerContext.props.getInternalId,k=this.annotationStoreSecondPage.some((a)=>a.id===d),l=this.getStoreIndex(d,k),m=this.viewerContext.props.getServerId(d)||d,n=k?this.annotationStoreSecondPage[l]:this.annotationStore[l];if(n&&!m.startsWith("_")){n.id=m,n.chapter=b,n.color=c,n.data.text=g,n.text=g,n.highlight.noteText=g,n.shareable=e,n.tags=f;let a=document.querySelector(`[data-id="${d}"]`);a||(a=document.querySelector(`[data-id="${i(d)}"]`));let o="";for(let b=0;a&&b<a.children.length;b+=1)if(o=a.children[b],o){const a=j.a.getLineColor(c),b=j.a.hexToRGB(c,h.a);o.style.backgroundColor=b,o.style.borderBottom=`2px solid ${a}`,!0===e?o.classList.contains("annotator-handle")&&(o.setAttribute("class",""),o.classList.add("annotator-handle",`color-${this.getColorId(c)}`)):(o.classList.remove("color-3"),o.classList.add(`color-${this.getColorId(c)}`))}k?(this.annotationStoreSecondPage.splice(l,1),this.annotationStoreSecondPage.push(n)):(this.annotationStore.splice(l,1),this.annotationStore.push(n))}return n}delete(a){let b=!1;const c=this.viewerContext.props.getServerId(a);let d=this.annotationStore.filter((b)=>b.id===a||b.id===c);0===d.length&&(d=this.annotationStoreSecondPage.filter((b)=>b.id===a||b.id===c),b=!0);const e=this.getStoreIndex(a,b),f=b?this.annotationStoreSecondPage[e]:this.annotationStore[e];if(f){this.annotationStore.splice(e,1);const b=document.querySelector(`[data-id="${f.id}"]`)||document.querySelector(`[data-id="${a}"]`)||document.querySelector(`[data-id="${this.viewerContext.props.getInternalId(a)}"]`);b&&b.remove()}}getStoreIndex(a,b=!1){let c=[];c=b?this.annotationStoreSecondPage:this.annotationStore;let d=c.findIndex((b)=>b.id===a);return-1===d&&(d=c.findIndex((b)=>b.id===this.viewerContext.props.getServerId(a))),d}sendDimension(a){const b=this.viewerContext.props.isDoublePage,c=document.querySelector(".vega-reader-content"),d=document.querySelector(`[data-id="${a}"]`);d&&d.firstElementChild&&(c.scrollTop=d.firstElementChild.offsetTop-60,b&&(c.scrollLeft=d.firstElementChild.offsetLeft))}}},66:function(a,b,c){var d=c(67);"string"==typeof d&&(d=[[a.i,d,""]]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c(9)(d,f);d.locals&&(a.exports=d.locals),!1},67:function(a,b,c){b=a.exports=c(8)(!1),b.push([a.i,".pdf-viewer-body .docViewer{margin-top:51px;display:inline-block}.pdf-viewer-body ::-webkit-scrollbar{-webkit-appearance:none;width:0}.pdf-viewer-body .fwr-navigation{width:0;display:none}.pdf-viewer-body .pdf-fwr-pc-main{position:absolute}.pdf-viewer-body .pdf-fwr-pc-main .pdf-fwr-pc-right{width:calc(100vw - 94px);overflow:auto}.pdf-viewer-body .pdf-fwr-pc-main .drawer-open{width:calc(100vw - 494px)}.pdf-viewer-body .pdf-fwr-pc-main .fwr-single-page{margin:0 auto !important}.pdf-viewer-body .fwr-highlight-annot{position:absolute;opacity:0.5;filter:alpha(opacity=50)}.pdf-viewer-body .fwr-search-text-highlight{position:absolute;background-color:#55AAAA;z-index:7}.pdf-viewer-body .fwr-text-highlight{position:absolute;background-color:rgba(121,231,255,0.3);opacity:1.0;filter:alpha(opacity=30);z-index:2}.pdf-viewer-body .hotspotIcon{position:absolute;z-index:1}.pdf-viewer-body .hotspot{position:absolute;z-index:2}.pdf-viewer-body .hotspot .tooltiptext{visibility:hidden;width:auto;background-color:#F2E9BD;color:#333333;text-align:center;position:absolute;display:inline-block;overflow:hidden;white-space:nowrap;right:0%;top:100%;font-size:13px;font-family:inherit;z-index:2}.pdf-viewer-body .hotspot:hover{cursor:pointer}.pdf-viewer-body .hotspot:hover .tooltiptext{visibility:visible;opacity:1}.pdf-viewer-body .fwr-search-result-highlight{position:absolute;background-color:#D5D5D5;border-bottom:2px solid #000;opacity:0.5;z-index:7}.pdf-viewer-body .annotator-handle.color-3{border-radius:17px;padding:2px}.fwr_contextmenu{display:none !important}\n",""])},71:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(1),g=c.n(f),h=c(10),i=c.n(h),j=c(5),k=c.n(j),l=c(2),m=c.n(l),n=c(7),o=c.n(n),p=c(59),q=c(66),r=c.n(q),s=c(3),t=c(4);class u extends e.a.Component{constructor(a){super(a),Object.defineProperty(this,"onPdfDocLoaded",{enumerable:!0,writable:!0,value:()=>{k.a.publish("pdfDocumentLoaded")}}),Object.defineProperty(this,"onPdfPageTextLoaded",{enumerable:!0,writable:!0,value:()=>{k.a.publish("pdfPageTextLoaded"),this.viewerInstance.off(window.WebPDF.EventList.ANNOTS_LOADED_SUCCESS)}}),Object.defineProperty(this,"onPdfZoomChanged",{enumerable:!0,writable:!0,value:()=>{this.annotationInterface.load(this.annotationInterface.annotationStore)}}),Object.defineProperty(this,"initialize",{enumerable:!0,writable:!0,value:()=>{this.pageId=this.props.currentPageId||"",this.viewerRef=e.a.createRef(),this.viewerInstance=null}}),Object.defineProperty(this,"loadPage",{enumerable:!0,writable:!0,value:()=>{try{const a=this.context.learningContext.metadata.pdfPageBaseUrl,b=this.props.currentPage;this.viewerInstance&&this.viewerInstance.openFileByUri||(this.viewerInstance=window.WebPDF.ViewerInstance),this.viewerInstance&&this.viewerInstance.openFileByUri&&this.viewerInstance.openFileByUri({url:b.id&&b.id.toLowerCase()==="cover"?b.href:a+b.href}).then(()=>{this.setState({loading:!1},()=>{this.viewerInstance.on(window.WebPDF.EventList.DOCUMENT_LOADED,this.onPdfDocLoaded),this.viewerInstance.on(window.WebPDF.EventList.ANNOTS_LOADED_SUCCESS,this.onPdfPageTextLoaded),this.initializeTextSelection(),this.annotationDisabled&&this.props.fetchAnnotation(this.pageId)})}).catch((a)=>{console.error(a)})}catch(a){}}}),Object.defineProperty(this,"initializeTextSelection",{enumerable:!0,writable:!0,value:()=>{this.annotationDisabled&&this.viewerInstance.setCurrentToolByName(window.WebPDF.Tools.TOOL_NAME_SELECTTEXT),this.viewerInstance.setLayoutShowMode(2);const a=this.viewerRef.current,b=a&&a.querySelector(".docViewer");b&&(b.addEventListener("mouseup",this.handleSelection),b.addEventListener("dblclick",this.handleSelection))}}),Object.defineProperty(this,"handleSelection",{enumerable:!0,writable:!0,value:(a)=>{try{const b=this.viewerInstance.getCurToolHandlerName(),c=this.viewerInstance.getToolHandlerByName(b).getTextSelectService().getSelectedText(),d=this.props.isDrawerOpen;let e=a.screenX;d||(e-=t.g),""!==c.toString().trim()&&k.a.publish(n.AnnotationUtil.actions.NewSelection,{top:a.screenY-t.d,left:e})}catch(a){}}}),this.state={loading:!0,isDrawerOpen:a.isDrawerOpen},this.initialize()}componentDidMount(){var a=this.context.learningContext,b=a.metadata;const c=b.foxitViewerInstance,d=b.userRoleTypeId,e=a.features.annotationDisabled;c!==void 0&&(this.viewerInstance=c),this.annotationDisabled=e,this.userRoleTypeId=d,this.notifyPageChange(),this.annotationInterface=new p.a(this),this.props.setAnnotationInterface(this.annotationInterface),this.webPdfReadySubscription=k.a.on("webPdfReady",this.loadPage.bind(this)),this.pdfZoomChangedSubscription=k.a.on("PdfZoomLevelChanged",this.onPdfZoomChanged)}static getDerivedStateFromProps(a,b){if(a.isDrawerOpen!==b.isDrawerOpen){const b=document.querySelector("#docViewer"),c=document.querySelector(".fwrJspContainer"),d=document.querySelector(".fwrJspPane"),e=document.querySelector("#docViewer_ViewContainer"),f=`${window.innerWidth-96}px`;return a.isDrawerOpen||(b.style.width=f,c.style.width=f,d.style.width=f,e.style.width=f),{isDrawerOpen:a.isDrawerOpen}}return null}componentWillUnmount(){this.pdfZoomChangedSubscription&&this.pdfZoomChangedSubscription(),this.webPdfReadySubscription&&this.webPdfReadySubscription()}notifyPageChange(){this.props.onPageLoad&&this.props.onPageLoad(this.pageId),this.loadPage()}render(){var a=this.context.learningContext.features;const b=a.enableAnnotationWidget,c=a.showAnnotationLabel,e=a.showDictionary,f=a.showHighlights,g=a.showFlashcard,h=a.showSearch,i=a.showShare,j=a.showSocialPost,k=a.showAudio,m=a.showCustomizeMenu,o=a.theme,p=a.masterTheme;var q=this.props;const r=q.annDataClient,s=q.childComponents,t=q.currentPageId,u=q.getInternalId,v=q.getServerId,w=q.handleAnnotation,x=q.handleAnnotationSearch,y=q.handleCreateEditCard,z=q.locale,A=q.showAnnotation,B=q.storeServerId,C=this.state.isDrawerOpen;return Object(d.createElement)("div",null,b&&r&&Object(d.createElement)(n.AnnotationComponent,{onChange:w,onAnnotationSearch:x,onCreateEditCard:y,getInternalId:u,getServerId:v,storeServerId:B,showAnnotation:A,showLabel:c,showShare:i,showHighlights:f,showFlashcard:g,showSearch:h,showDictionary:e,showSocialPost:j,showAudio:k,showCustomizeMenu:m,theme:o,masterTheme:p,annotationClient:r,pageId:t,locale:z,childComponents:s}),this.state.loading&&Object(d.createElement)(l.Progress,null),Object(d.createElement)("div",{className:"pdf-viewer-body",ref:this.viewerRef},Object(d.createElement)("div",{id:"main",className:"pdf-fwr-pc-main"},Object(d.createElement)("div",{id:"right",className:`pdf-fwr-pc-right ${C?"drawer-open":""}`},Object(d.createElement)("div",{id:"toolbar",className:"pdf-fwr-toolbar"}),Object(d.createElement)("div",{id:"frame"},Object(d.createElement)("div",{id:"docViewer",className:"docViewer"}))))))}}u.propTypes={currentPage:g.a.object.isRequired,locale:g.a.string,onPageLoad:g.a.func,annDataClient:g.a.object,handleAnnotation:g.a.func,setAnnotationInterface:g.a.func,showAnnotation:g.a.bool,currentPageId:g.a.string.isRequired,fetchAnnotation:g.a.func,getInternalId:g.a.func,getServerId:g.a.func,isDrawerOpen:g.a.bool,storeServerId:g.a.func,handleAnnotationSearch:g.a.func,handleCreateEditCard:g.a.func,childComponents:g.a.object},u.defaultProps={onPageLoad:()=>{},locale:"en",isDrawerOpen:!1},u.contextTypes={learningContext:g.a.shape(s.a).isRequired},b["default"]=Object(h.injectIntl)(u)}});
//# sourceMappingURL=2.6cc4b6de2b11f7203482.chunk.js.map