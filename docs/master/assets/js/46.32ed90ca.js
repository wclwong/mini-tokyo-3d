(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{334:function(e,t,a){"use strict";a.r(t);var r=a(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"plugininterface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugininterface"}},[e._v("#")]),e._v(" PluginInterface")]),e._v(" "),t("p",[e._v("マップに追加するカスタムプラグインのインターフェースです。これは実装者がモデル化するための仕様であり、エクスポートされたメソッドやクラスではありません。")]),e._v(" "),t("p",[e._v("開発者はコールバックメソッドを実装して、Mini Tokyo 3D Map をカスタマイズすることができます。プラグインを追加するには、このインターフェースを実装したオブジェクトを "),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html"}},[t("code",[e._v("Map")])]),e._v(" のコンストラクタのオプション "),t("code",[e._v("plugins")]),e._v(" に設定する必要があります。")],1),e._v(" "),t("p",[e._v("カスタムプラグインは一意の "),t("code",[e._v("id")]),e._v(" を持ち、"),t("code",[e._v("name")]),e._v(" と "),t("code",[e._v("iconStyle")]),e._v(" を持つ必要があります。これらのプラグインは "),t("code",[e._v("onAdd")]),e._v("、"),t("code",[e._v("onRemove")]),e._v("、"),t("code",[e._v("onEnabled")]),e._v("、"),t("code",[e._v("onDisabled")]),e._v("、"),t("code",[e._v("onVisibilityChanged")]),e._v(" を実装することができます。")]),e._v(" "),t("h2",{attrs:{id:"プロパティ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#プロパティ"}},[e._v("#")]),e._v(" プロパティ")]),e._v(" "),t("h3",{attrs:{id:"clockmodes-array-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clockmodes-array-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("clockModes")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Array")]),t("OutboundLink")],1),t("code",[e._v("<")]),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),t("code",[e._v(">")]),e._v(")")]),e._v(" "),t("p",[e._v("ここで指定されたクロックモードの時だけ、プラグインが表示されます。"),t("code",[e._v("'realtime'")]),e._v("、"),t("code",[e._v("'playback'")]),e._v(" がサポートされています。指定がない場合は、常に表示されます。")]),e._v(" "),t("h3",{attrs:{id:"enabled-boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-boolean"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("enabled")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("boolean")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[t("code",[e._v("false")]),e._v("の場合、プラグインは無効化された状態でマップに追加されます。指定しない場合は、有効になります。")]),e._v(" "),t("h3",{attrs:{id:"iconstyle-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iconstyle-object"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("iconStyle")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Object")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("レイヤーパネルに表示されるアイコン要素のインラインスタイルです。"),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSSStyleDeclaration"),t("OutboundLink")],1),e._v(" に含まれるすべてのスタイルプロパティに対応しています。")]),e._v(" "),t("h3",{attrs:{id:"id-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("id")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("固有のプラグイン ID です。")]),e._v(" "),t("h3",{attrs:{id:"name-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name-object"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("name")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Object")]),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("p",[e._v("プラグインの名前です。各プロパティのキーは言語コード、値はその言語での名前を示します。ブラウザで使用されている言語がプロパティに含まれていない場合は、英語の名前が使われます。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("名前")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("説明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.en")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("英語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.fr")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("フランス語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.ja")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("日本語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.ko")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("韓国語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.ne")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("ネパール語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.pt")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("ポルトガル語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.th")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("タイ語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.zh-Hans")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("簡体中国語の名前")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("strong",[t("code",[e._v("name.zh-Hant")])])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("繁体中国語の名前")])])])]),e._v(" "),t("h3",{attrs:{id:"searchmodes-array-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchmodes-array-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("searchModes")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Array")]),t("OutboundLink")],1),t("code",[e._v("<")]),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),t("code",[e._v(">")]),e._v(")")]),e._v(" "),t("p",[e._v("ここで指定された検索モードの時だけ、プラグインが表示されます。"),t("code",[e._v("'none'")]),e._v("、"),t("code",[e._v("'edit'")]),e._v("、"),t("code",[e._v("'route'")]),e._v(" がサポートされています。指定がない場合は、検索パネルが表示されていない時に表示されます。")]),e._v(" "),t("h3",{attrs:{id:"viewmodes-array-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewmodes-array-string"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("viewModes")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Array")]),t("OutboundLink")],1),t("code",[e._v("<")]),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("string")]),t("OutboundLink")],1),t("code",[e._v(">")]),e._v(")")]),e._v(" "),t("p",[e._v("ここで指定された表示モードの時だけ、プラグインが表示されます。"),t("code",[e._v("'ground'")]),e._v("、"),t("code",[e._v("'underground'")]),e._v(" がサポートされています。指定がない場合は、常に表示されます。")]),e._v(" "),t("h2",{attrs:{id:"インスタンスメンバ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インスタンスメンバ"}},[e._v("#")]),e._v(" インスタンスメンバ")]),e._v(" "),t("h3",{attrs:{id:"onadd-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onadd-map"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onAdd(map)")])])]),e._v(" "),t("p",[e._v("プラグインが Map に追加されたときに呼び出される、任意実装のメソッドです。これを利用して、プラグインはリソースを初期化し、イベントリスナーを登録することができます。")]),e._v(" "),t("h4",{attrs:{id:"パラメータ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ"}},[e._v("#")]),e._v(" パラメータ")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("map")])]),e._v(" ("),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html"}},[t("code",[e._v("Map")])]),e._v(") このプラグインが追加された Mini Tokyo 3D の Map")],1),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"ondisabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ondisabled"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onDisabled()")])])]),e._v(" "),t("p",[e._v("プラグインがユーザによって無効化されたときに呼び出される、任意実装のメソッドです。これを利用して、プラグインは表示要素を削除することができます。")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"onenabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onenabled"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onEnabled()")])])]),e._v(" "),t("p",[e._v("プラグインがユーザーによって有効にされたときに呼び出される、任意実装のメソッドです。これを利用して、プラグインは表示要素を初期化することができます。")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"onremove-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onremove-map"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onRemove(map)")])])]),e._v(" "),t("p",[e._v("プラグインが Map から削除されたときに呼び出される、任意実装のメソッドです。これを利用して、プラグインはリソースを解放し、イベントリスナーを削除することができます。")]),e._v(" "),t("h4",{attrs:{id:"パラメータ-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ-2"}},[e._v("#")]),e._v(" パラメータ")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("map")])]),e._v(" ("),t("RouterLink",{attrs:{to:"/ja/developer-guide/api/map.html"}},[t("code",[e._v("Map")])]),e._v(") このプラグインが削除された Mini Tokyo 3D の Map")],1),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"onvisibilitychanged-visible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onvisibilitychanged-visible"}},[e._v("#")]),e._v(" "),t("strong",[t("code",[e._v("onVisibilityChanged(visible)")])])]),e._v(" "),t("p",[e._v("マップの表示モードが変更されたときなど、プラグインの表示状態が変更されたときに呼び出される、任意実装のメソッドです。これを利用して、プラグインは表示要素の状態を変更することができます。")]),e._v(" "),t("h4",{attrs:{id:"パラメータ-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パラメータ-3"}},[e._v("#")]),e._v(" パラメータ")]),e._v(" "),t("p",[t("strong",[t("code",[e._v("visible")])]),e._v(" ("),t("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("boolean")]),t("OutboundLink")],1),e._v(") "),t("code",[e._v("true")]),e._v(" はプラグインが表示されている状態であることを示す")])])}),[],!1,null,null,null);t.default=o.exports}}]);