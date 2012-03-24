define(["log","ui"],function(a,b){var c=a.getLogger("collection");c.info("Loading collection.js"),b.updateSplashscreenMessage("Chargement module Collection"),c.info("Defining collection object");var d={views:{}};return c.info("Defining Model"),d.EntryModel=Backbone.Model.extend({}),c.info("Defining collection"),d.EntryCollection=Backbone.Collection.extend({model:d.EntryModel,initialize:function(a,b){c.info("Initializing Entry Collection"),this.url=b.url,this.parse=function(a){b.beforeParse&&b.beforeParse(a);var c=b.parse?b.parse(a):a;return b.afterParse&&b.afterParse(c),c}}}),c.info("Defining view"),d.EntryListView=Backbone.View.extend({initialize:function(){c.info("Initializing Entry List View"),this.el=$(this.options.el),this.collection=new d.EntryCollection([],{url:this.options.fetchUrl,parse:this.options.parse,beforeParse:this.options.beforeParse,afterParse:this.options.afterParse}),this.collection.bind("reset",this.render,this)},render:function(){c.info("Rendering List View");var a=$(this.options.el),b=_.template(this.options.collectionTemplate,{entries:this.collection.models,view:this.options.view});return a.html(b),a.listview("refresh"),this.options.postRender&&this.options.postRender(this.collection.models),this}}),c.info("Loaded collection"),d})