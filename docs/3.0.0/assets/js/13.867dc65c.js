(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{390:function(e,t,a){"use strict";a.r(t);var r=a(47),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugininterface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugininterface"}},[e._v("#")]),e._v(" PluginInterface")]),e._v(" "),a("p",[e._v("Interface for custom plugins added to the map. This is a specification for implementers to model: it is not an exported method or class.")]),e._v(" "),a("p",[e._v("Developers can implement callback methods to customize the Mini Tokyo 3D map. In order to add plugins, the objects that implement this interface have to be set to the "),a("RouterLink",{attrs:{to:"/developer-guide/api/map.html"}},[a("code",[e._v("Map")])]),e._v(" constructor option "),a("code",[e._v("plugins")]),e._v(".")],1),e._v(" "),a("p",[e._v("Custom plugins must have a unique "),a("code",[e._v("id")]),e._v(", and must have the "),a("code",[e._v("name")]),e._v(" and "),a("code",[e._v("iconStyle")]),e._v(". They may implement "),a("code",[e._v("onAdd")]),e._v(", "),a("code",[e._v("onRemove")]),e._v(", "),a("code",[e._v("onEnabled")]),e._v(", "),a("code",[e._v("onDisabled")]),e._v(" and "),a("code",[e._v("onVisibilityChanged")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"clockmodes-array-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clockmodes-array-string"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("clockModes")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Array")]),a("OutboundLink")],1),a("code",[e._v("<")]),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("string")]),a("OutboundLink")],1),a("code",[e._v(">")]),e._v(")")]),e._v(" "),a("p",[e._v("The plugin will be visible only in the clock modes specified here. "),a("code",[e._v("'realtime'")]),e._v(" and "),a("code",[e._v("'playback'")]),e._v(" are supported. If not specified, it will be always visible.")]),e._v(" "),a("h3",{attrs:{id:"enabled-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabled-boolean"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("enabled")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("boolean")]),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("false")]),e._v(", the plugin will be disabled when it is added to the map. If not specified, it will be enabled.")]),e._v(" "),a("h3",{attrs:{id:"iconstyle-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iconstyle-object"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("iconStyle")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Object")]),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("The inline style of the icon element that appears in the layer panel. All the style properties contained in the "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSSStyleDeclaration"),a("OutboundLink")],1),e._v(" are supported.")]),e._v(" "),a("h3",{attrs:{id:"id-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id-string"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("id")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("string")]),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("A unique plugin id.")]),e._v(" "),a("h3",{attrs:{id:"name-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-object"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("name")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Object")]),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("The name of the plugin. The key of each property indicates the language code and its value indicates the name in that language. If the language used in a browser is not included in the properties, it falls back to English.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Name")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.en")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in English")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.ja")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Japanese")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.ko")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Korean")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.ne")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Nepali")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.th")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Thai")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.zh-Hans")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Simplified Chinese")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[e._v("name.zh-Hant")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Name in Traditional Chinese")])])])]),e._v(" "),a("h3",{attrs:{id:"searchmodes-array-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searchmodes-array-string"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("searchModes")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Array")]),a("OutboundLink")],1),a("code",[e._v("<")]),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("string")]),a("OutboundLink")],1),a("code",[e._v(">")]),e._v(")")]),e._v(" "),a("p",[e._v("The plugin will be visible only in the search modes specified here. "),a("code",[e._v("'none'")]),e._v(", "),a("code",[e._v("'edit'")]),e._v(" and "),a("code",[e._v("'route'")]),e._v(" are supported. If not specified, it will be visible when the search panel is not displayed.")]),e._v(" "),a("h3",{attrs:{id:"viewmodes-array-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewmodes-array-string"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("viewModes")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Array")]),a("OutboundLink")],1),a("code",[e._v("<")]),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("string")]),a("OutboundLink")],1),a("code",[e._v(">")]),e._v(")")]),e._v(" "),a("p",[e._v("The plugin will be visible only in the view modes specified here. "),a("code",[e._v("'ground'")]),e._v(" and "),a("code",[e._v("'underground'")]),e._v(" are supported. If not specified, it will be always visible.")]),e._v(" "),a("h2",{attrs:{id:"instance-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-members"}},[e._v("#")]),e._v(" Instance Members")]),e._v(" "),a("h3",{attrs:{id:"onadd-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onadd-map"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("onAdd(map)")])])]),e._v(" "),a("p",[e._v("Optional method called when the plugin has been added to the Map. This gives the plugin a chance to initialize resources and register event listeners.")]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("map")])]),e._v(" ("),a("RouterLink",{attrs:{to:"/developer-guide/api/map.html"}},[a("code",[e._v("Map")])]),e._v(") The Mini Tokyo 3D Map this plugin was just added to.")],1),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"ondisabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ondisabled"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("onDisabled()")])])]),e._v(" "),a("p",[e._v("Optional method called when the plugin has been disabled by users. This gives the plugin a chance to clean up the display elements.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"onenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onenabled"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("onEnabled()")])])]),e._v(" "),a("p",[e._v("Optional method called when the plugin has been enabled by users. This gives the plugin a chance to initialize the display elements.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"onremove-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onremove-map"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("onRemove(map)")])])]),e._v(" "),a("p",[e._v("Optional method called when the plugin has been removed from the Map. This gives the plugin a chance to clean up resources and event listeners.")]),e._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("map")])]),e._v(" ("),a("RouterLink",{attrs:{to:"/developer-guide/api/map.html"}},[a("code",[e._v("Map")])]),e._v(") The Mini Tokyo 3D Map this plugin was just removed from.")],1),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"onvisibilitychanged-visible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onvisibilitychanged-visible"}},[e._v("#")]),e._v(" "),a("strong",[a("code",[e._v("onVisibilityChanged(visible)")])])]),e._v(" "),a("p",[e._v("Optional method called when the visibility of the plugin has been changed, such as when the display mode of the map is changed. This gives the plugin a chance to change the visibility of the display elements.")]),e._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("visible")])]),e._v(" ("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("boolean")]),a("OutboundLink")],1),e._v(") "),a("code",[e._v("true")]),e._v(" indicates that the plugin is in the visible state.")])])}),[],!1,null,null,null);t.default=n.exports}}]);