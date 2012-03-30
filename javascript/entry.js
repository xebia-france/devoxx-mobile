define(["log","ui"],function(a,b){var c=a.getLogger("entry");c.info("Loading entry.js"),c.info("Defining entry object");var d={views:{}};return c.info("Defining Model"),d.EntryModel=Backbone.Model.extend({initialize:function(a){c.info("Initializing Entry"),this.url=a.url,this.parse=function(b){a.beforeParse&&a.beforeParse(b);var c=a.parse?a.parse(b):b;return a.afterParse&&a.afterParse(c),c}}}),c.info("Defining view"),d.EntryView=Backbone.View.extend({initialize:function(){c.info("Initializing Entry View"),this.el=$(this.options.el),this.entry=new d.EntryModel({url:this.options.fetchUrl,parse:this.options.parse,beforeParse:this.options.beforeParse,afterParse:this.options.afterParse}),this.entry.bind("change",this.render,this)},render:function(){c.info("Rendering Entry View");var a=$(this.options.el);a.empty();var b=_.template(this.options.entryTemplate,{entry:this.entry,view:this.options.view});return a.html(b),this.options.postRender&&this.options.postRender(this.entry),this}}),c.info("Loaded entry"),d})