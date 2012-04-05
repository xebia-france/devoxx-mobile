function init(){console.log("[app][init] Initializing require"),console.log("[app][init][require] Setting config"),require.config({paths:{text:"lib/require/require.text-1.0.2",order:"lib/require/require.order-1.0.5",core:"core",utils:"utils",ui:"ui",db:"db",log:"log",collection:"collection",entry:"entry",register:"register",analytics:"analytics",synchronize:"synchronize",jquery:"lib/jquery/jquery-1.7.1",underscore:"lib/underscore/underscore-1.3.1",backbone:"lib/backbone/backbone-0.9.1",jqmr:"lib/jquerymobile/jquery.mobile.router-0.6",jqm:"lib/jquerymobile/jquery.mobile-1.1.0-rc.1"},baseUrl:"javascript"}),console.log("[app][require] Requiring base application modules"),require(["require","order!jquery","order!underscore","order!backbone"],function(a,b,c,d){window.$=b,window._=c,window.Backbone=d,window.app=window.app||{},a(["require","order!log","order!analytics","order!jqmr","order!core","db","utils","ui","collection","entry","register"],function(a,c,d,e,f,g,h,i){window.app.core=f,window.app.ui=i,window.app.utils=h;var j=c.getLogger("app");j.info("Loading app.js"),b.mobile=b.mobile||{},j.info("Setup of 'deviceready' event"),document.addEventListener("deviceready",function(){j.info("[event][deviceready]")},!0),j.info("Setup of 'mobileinit' event"),b(document).bind("mobileinit",function(){j.info("[mobileinit] Event handled"),b.event.special.swipe.horizontalDistanceThreshold=130,b.mobile.defaultPageTransition="none",b.mobile.jqmRouter=b.mobile.jqmRouter||{},b.mobile.page.prototype.options.backBtnText="&nbsp;",b.mobile.jqmRouter.fixFirstPageDataUrl=!0,b.mobile.jqmRouter.firstPageDataUrl="index.html",b.support.cors=!0,b.mobile.allowCrossDomainPages=!0,f.setupRouter(),j.info("Show body"),SAFE&&(b("#splash-screen").hide(),b("body").show(),b("#pages").show()),d.setupListener()}),j.info("Loading jqmr, jqm, phonegap and core"),a(["require","order!jqm"],function(a,b){j.info("Loading ...")})})})}function getLocationParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(window.location.href);return c==null?"":decodeURIComponent(c[1].replace(/\+/g," "))}function supports_input_placeholder(){var a=document.createElement("input");return"placeholder"in a}var DEFAULT_DEBUG_MODE=!1,DEBUG=DEFAULT_DEBUG_MODE||getLocationParameterByName("debug")==="true",SAFE=!0,OFFLINE=!1,PROXY=!0,DB_NUKE=!1,WAIT_TIME=DEBUG?0:0,DEBUG_JSON_CALLBACK="onJsonLoad";console.log("DEBUG: "+DEBUG),console.log("SAFE: "+SAFE),console.log("OFFLINE: "+OFFLINE),console.log("WAIT_TIME: "+WAIT_TIME),console.log("DEBUG_JSON_CALLBACK: "+DEBUG_JSON_CALLBACK),console.log("PROXY: "+PROXY),DEBUG&&console.log("Waiting for "+WAIT_TIME+"ms before loading application"),SAFE||($("#logo").hide(),$("#home-footer").hide(),$("#version").hide(),$("#home").css("background-image","url(images/none.png)"),document.title="Dev/Debug mode"),setTimeout(init,WAIT_TIME);if(!supports_input_placeholder()){var fields=document.getElementsByTagName("INPUT");for(var i=0;i<fields.length;i++)fields[i].hasAttribute("placeholder")&&(fields[i].defaultValue=fields[i].getAttribute("placeholder"),fields[i].onfocus=function(){this.value==this.defaultValue&&(this.value="")},fields[i].onblur=function(){this.value==""&&(this.value=this.defaultValue)})};