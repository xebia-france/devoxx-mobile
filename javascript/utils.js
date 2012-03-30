define(["log","ui"],function(a,b){var c=a.getLogger("utils");c.info("Loading utils.js");var d={},e=OFFLINE?"http://localhost:9000/rest/v1":PROXY?"http://devoxx-xebia.cloudfoundry.com/rest/v1":"https://cfp.devoxx.com/rest/v1",f=OFFLINE?"http://localhost:9000":"http://devoxx-xebia.cloudfoundry.com";return d.getJsonApiBaseUrl=function(){return e},d.getSpeakerImgBaseUrl=function(){return f},d.saveDataToDb=function(a,b){var e=new Date;c.info("Saving Json "+a+" content: "+d.showInterval(e)),d.db.save({key:a,value:b}),c.info("Saved Json "+a+" content: "+d.showInterval(e))},d.loadFromUrl=function(a,b,e){var f=new Date;c.info("Start loading "+a+" content: "+d.showInterval(f)),$.when($.ajax(b,{dataType:"json"})).then(function(b){c.info("Loaded Json "+a+" content: "+d.showInterval(f)),e(b)})},d.linkify=function(a){var b=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,c=a.replace(b,'<a href="$1" target="_blank">$1</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim;c=c.replace(d,'$1<a href="http://$2" target="_blank">$2</a>');var e=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;return c=c.replace(e,'<a href="mailto:$1">$1</a>'),c},d.decodeHtmlEntities=function(a){return $("<div/>").html(a).text()},d.stripTags=function(a){var b=a.replace(/(<([^>]+)>)/ig,"").replace(/\r\n/g,"<br>").replace(/\r/g,"<br>").replace(/\n/g,"<br>");return d.linkify(b)},d.getParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(window.location.href);return c==null?"":decodeURIComponent(c[1].replace(/\+/g," "))},d.showInterval=function(a){var b=new Date(new Date-a+a.getTimezoneOffset()*6e4),c=b.toString("HH:mm:ss");return c+"."+b.getMilliseconds()},d.getFullUrl=function(a){return e+a},c.info("Loaded utils"),d})