(function(a){console.log("[jqmr] Loading jqmr.js"),a(document).bind("mobileinit",function(){function d(a){c&&console.log("[jqmr][err] "+a)}console.log("[jqmr][mobileinit] Event handled");var b=a.extend({fixFirstPageDataUrl:!1,firstPageDataUrl:"index.html",ajaxApp:!1},a.mobile.jqmRouter||{}),c=!0,e=null,f=null;a(document).bind("pagebeforechange",function(b,c){if(typeof c.toPage=="string"){var d=a.mobile.path.parseUrl(c.toPage),g=e;e=f,f=d;if(d.hash.indexOf("?")!==-1){var h=d.hash.replace(/\?.*$/,"");c.options.dataUrl=d.href,a.mobile.activePage&&h.replace(/^#/,"")==a.mobile.activePage.jqmData("url")&&(!e||!g||e.hash!=g.hash&&e.hash.replace(/\?.*$/,"")==g.hash.replace(/\?.*$/,""))?(c.options.allowSamePageTransition=!0,a.mobile.changePage(a(h),c.options)):a.mobile.changePage(a(h),c.options),b.preventDefault()}}}),b.fixFirstPageDataUrl&&a(document).ready(function(){if(!window.location.pathname.match("/$"))return;var c=a(":jqmData(role='page')").first(),d=c.jqmData("url"),e=window.location.pathname+b.firstPageDataUrl+window.location.search+window.location.hash;d!=e&&c.attr("data-url",e).jqmData("url",e)}),a.mobile.Router=function(c,d,e){console.log("[jqmr]"+this),this.routes={pagebeforecreate:null,pagecreate:null,pagebeforeshow:null,pageshow:null,pagebeforehide:null,pagehide:null,pageinit:null,pageremove:null},this.evtLookup={bc:"pagebeforecreate",c:"pagecreate",bs:"pagebeforeshow",s:"pageshow",bh:"pagebeforehide",h:"pagehide",i:"pageinit",rm:"pageremove"},this.routesRex={},this.conf=a.extend({},b,e||{}),this.defaultHandlerEvents={};if(this.conf.defaultHandlerEvents){var f=this.conf.defaultHandlerEvents.split(",");for(var g=0;g<f.length;g++)this.defaultHandlerEvents[this.evtLookup[f[g]]]=f[g]}this.add(c,d)},a.extend(a.mobile.Router.prototype,{add:function(b,c){if(!b)return;var e=this,f=[];b instanceof Array?a.each(b,a.proxy(function(a,b){this.add(b,c)},this)):(a.each(b,function(a,b){if(typeof b=="string"||typeof b=="function")e.routes.pagebeforeshow===null&&(e.routes.pagebeforeshow={}),e.routes.pagebeforeshow[a]=b,e.routesRex.hasOwnProperty(a)||(e.routesRex[a]=new RegExp(a));else{var c,f=b.events.split(","),g;for(c=0;c<f.length;c++)g=e.evtLookup[f[c]],e.routes.hasOwnProperty(g)?(e.routes[g]===null&&(e.routes[g]={}),e.routes[g][a]=b.handler,e.routesRex.hasOwnProperty(a)||(e.routesRex[a]=new RegExp(a))):d("can't set unsupported route "+f[c])}}),a.each(e.routes,function(a,b){b!==null&&f.push(a)}),this.userHandlers||(this.userHandlers={}),a.extend(this.userHandlers,c||{}),this._detachEvents(),f.length>0&&(this._liveData={events:f.join(" "),handler:function(a,b){e._processRoutes(a,b,this)}},a(":jqmData(role='page'),:jqmData(role='dialog')").live(this._liveData.events,this._liveData.handler)))},_processRoutes:function(b,c,g){var h=this,i,j,k,l=0;b.type in{pagebeforehide:!0,pagehide:!0,pageremove:!0}?i=e:i=f;do{if(!i)g&&(k=a(g),i=k.jqmData("url"),i&&(k.attr("id")==i&&(i="#"+i),i=a.mobile.path.parseUrl(i)));else if(g&&!a(g).jqmData("url"))return;if(!i)return;j=this.conf.ajaxApp?i.pathname+i.search+i.hash:i.hash,j.length==0&&(i=""),l++}while(j.length==0&&l<=1);var m=!1;a.each(this.routes[b.type],function(a,e){var f,i;if(f=j.match(h.routesRex[a])){typeof e=="function"?i=e:typeof h.userHandlers[e]=="function"&&(i=h.userHandlers[e]);if(i)try{i(b.type,f,c,g,b),m=!0}catch(k){d(k)}}});if(!m&&this.conf.defaultHandler&&this.defaultHandlerEvents[b.type]&&typeof this.conf.defaultHandler=="function")try{this.conf.defaultHandler(b.type,c,g,b)}catch(n){d(n)}},_detachEvents:function(){this._liveData&&a(":jqmData(role='page'),:jqmData(role='dialog')").die(this._liveData.events,this._liveData.handler)},destroy:function(){this._detachEvents(),this.routes=this.routesRex=null},getParams:function(b){if(!b)return null;var c={},d,e=b.slice(b.indexOf("?")+1).split("&");return a.each(e,function(a,b){d=b.split("="),c[d[0]]?(c[d[0]]instanceof Array||(c[d[0]]=[c[d[0]]]),c[d[0]].push(d[1])):c[d[0]]=d[1]}),a.isEmptyObject(c)?null:c}})})})(jQuery)