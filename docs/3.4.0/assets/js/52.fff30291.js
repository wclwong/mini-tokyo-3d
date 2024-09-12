(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{335:function(t,a,e){"use strict";e.r(a);var r=e(14),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mini-tokyo-3d-のビルド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mini-tokyo-3d-のビルド"}},[t._v("#")]),t._v(" Mini Tokyo 3D のビルド")]),t._v(" "),a("p",[t._v("リリース前の最新版の機能を試したい、自分でコードを改造したい、Mini Tokyo 3D の開発にコントリビュートしたい、という場合には、本セクションの手順に従ってソースコードからプロジェクトをビルドすることができます。")]),t._v(" "),a("h2",{attrs:{id:"ビルド準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ビルド準備"}},[t._v("#")]),t._v(" ビルド準備")]),t._v(" "),a("p",[t._v("次のソフトウェアが必要です。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/ja/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v(" 最新版")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1),t._v(" 最新版（リポジトリをクローンする場合）")])]),t._v(" "),a("p",[t._v("Mini Tokyo 3D は次のデータソースを使用しており、ビルド時および実行時にそれぞれのデータソースに対するアクセストークンが必要です。下記の手順に従って、アクセストークンを入手してください。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("データソース")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("サインアップ用 URL")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("アクセストークンの形式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.odpt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("公共交通オープンデータセンター"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.odpt.org/users/sign_up",target:"_blank",rel:"noopener noreferrer"}},[t._v("リンク"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数字と英小文字からなる文字列")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.mapbox.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mapbox"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://account.mapbox.com/auth/signup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("リンク"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("pk.")]),t._v(" で始まるピリオドを含む英数字文字列")])])])]),t._v(" "),a("h3",{attrs:{id:"公共交通オープンデータセンターアクセストークンの入手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共交通オープンデータセンターアクセストークンの入手"}},[t._v("#")]),t._v(" 公共交通オープンデータセンターアクセストークンの入手")]),t._v(" "),a("p",[t._v("Mini Tokyo 3D は"),a("a",{attrs:{href:"https://www.odpt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("公共交通オープンデータセンター"),a("OutboundLink")],1),t._v("で配信されている列車データや旅客機データを利用しています。データの入手には開発者としての登録が必要ですが、無料で利用可能です。")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://developer.odpt.org/users/sign_up",target:"_blank",rel:"noopener noreferrer"}},[t._v("開発者サイトへの登録"),a("OutboundLink")],1),t._v("ページでユーザー情報を入力して、開発者登録をします。登録完了のメールが届くまでに数日かかる場合があります。")]),t._v(" "),a("li",[t._v("開発者アカウントでログイン後、画面上部のメニューから「Account」をクリックして「アクセストークンの確認・追加」を選びます。")]),t._v(" "),a("li",[t._v("アクセストークン一覧が表示されます。アカウント作成直後はデフォルトの「DefaultApplication」のみが表示されます。「アクセストークンの追加発行」をクリックします。")]),t._v(" "),a("li",[t._v("「名前」に任意のアプリケーション名を入力して、「Submit」ボタンをクリックします。")]),t._v(" "),a("li",[t._v("アクセストークン一覧に新たに作成されたトークンが表示されます。")])]),t._v(" "),a("h3",{attrs:{id:"mapbox-アクセストークンの入手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapbox-アクセストークンの入手"}},[t._v("#")]),t._v(" Mapbox アクセストークンの入手")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ja/developer-guide/integration.html#mapbox-アクセストークンの入手"}},[t._v("Mapbox アクセストークンの入手")]),t._v(" を参照してください。")],1),t._v(" "),a("h2",{attrs:{id:"ビルド手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ビルド手順"}},[t._v("#")]),t._v(" ビルド手順")]),t._v(" "),a("h3",{attrs:{id:"_1-ファイルのダウンロード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ファイルのダウンロード"}},[t._v("#")]),t._v(" 1. ファイルのダウンロード")]),t._v(" "),a("p",[t._v("Mini Tokyo 3D の "),a("a",{attrs:{href:"https://github.com/nagix/mini-tokyo-3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub レポジトリ"),a("OutboundLink")],1),t._v("から "),a("code",[t._v("master")]),t._v(" ブランチ最新版をダウンロードして、zipファイルを展開します。"),a("code",[t._v("mini-tokyo-3d-master")]),t._v(" というディレクトリができますが、"),a("code",[t._v("mini-tokyo-3d")]),t._v(" という名前に変更しておきます。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-LO")]),t._v(" https://github.com/nagix/mini-tokyo-3d/archive/master.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" master.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" mini-tokyo-3d-master mini-tokyo-3d\n")])])]),a("p",[t._v("もし Git をお使いでしたら、上記のコマンドの代わりに GitHub からリポジトリを直接クローンしても構いません。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/nagix/mini-tokyo-3d.git\n")])])]),a("h3",{attrs:{id:"_2-ビルド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ビルド"}},[t._v("#")]),t._v(" 2. ビルド")]),t._v(" "),a("p",[t._v("Mini Tokyo 3D のトップディレクトリに移動します。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" mini-tokyo-3d\n")])])]),a("p",[t._v("ビルド準備のステップで取得した公共交通オープンデータセンターのアクセストークンを記載した JSON ファイルを作成し、"),a("code",[t._v("secrets")]),t._v(" というファイル名でこのディレクトリに保存します。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"odpt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("依存 npm モジュールをインストールします。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("次のコマンドでプロジェクトをビルドします。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build-all\n")])])]),a("p",[t._v("ビルドが正常に完了すると、"),a("code",[t._v("dist")]),t._v(" ディレクトリが作成されます。この中には配布用のスタイルシートおよび JavaScript ファイルが含まれています。また、同時に "),a("code",[t._v("build")]),t._v(" ディレクトリも作成されます。この中には Web サイトへの設置に必要なすべてのファイルが含まれています。")]),t._v(" "),a("h3",{attrs:{id:"_3-web-サイトへの設置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-web-サイトへの設置"}},[t._v("#")]),t._v(" 3. Web サイトへの設置")]),t._v(" "),a("p",[a("code",[t._v("build")]),t._v(" ディレクトリに含まれる "),a("code",[t._v("index.html")]),t._v(" は "),a("a",{attrs:{href:"http://minitokyo3d.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://minitokyo3d.com"),a("OutboundLink")],1),t._v(" 用の Web ページです。"),a("code",[t._v("Map")]),t._v(" コンストラクタに渡される "),a("code",[t._v("accessToken")]),t._v(" プロパティを、ビルド準備のステップで取得した Mapbox アクセストークンで置き換えます。そして設置する Web サイトに合わせて編集した上で、"),a("code",[t._v("build")]),t._v(" ディレクトリのファイル全てを Web サーバの公開ディレクトリに配置してください。")])])}),[],!1,null,null,null);a.default=s.exports}}]);