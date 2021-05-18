var n2f_slide_data = {
  "slides": [
  { //slide1
    "title": "ABSTRACT THIS CONTENTS",
    "design": "series",
    "contents": [
      {
        "type": "panel",
        "content": [
          {
            "tag": "p",
            "elements": [
              "hello again to all my friend!",
              {"tag": "a","class": "small","href": "https://www.youtube.com/watch?v=eOofWzI3flA","elements": ["(元ネタ)"]}
            ]
          },
          { "tag": "p",
            "elements": ["このスライドは、scssを学習する主目的のついでにスライド制作をするという、 製作者の都合丸出しの成果物である。"] 
          }
        ]
      },
      {
        "type": "panel",
        "content": [
          {
            "tag": "p",
            "elements": [
              { "tag": "a", "href": "https://github.com/n2-freevas/introduce_slide_maked_by_3-jinki",
                "target": "_blank", "rel": "noopener noreferrer",
                "elements": ["github",{"tag": "i", "class": "fab fa-github-square"}]
              },
              "に、このスライドで使われたすべてのマテリアルを格納した。興味があれば、閲覧されたし。"
            ]
          }
        ]
      },
      {
        "type": "panel",
        "content": [
          {
            "tag": "p", "elements": ["また、本コンテンツは、以下の環境で動作確認済み。また、本コンテンツはWindows/MacのChromeを特に推奨する。"]
          },
          {
            "tag": "table", 
            "item": [["ブラウザ","Chrome,Safari"],["OS","iOS,MacOS,Windows10"]]
          },
          {
            "tag": "p", "class":"mobile", "elements": ["モバイル端末で表示されるコンテンツは一部を縮小・削除しており、コンテンツの体験を最大化したい方はPCでの閲覧を推奨する。"]
          }
        ]
      }
    ]
  },
  { //slide2
    "title": "INTRODUCE MYSELF",
    "design": "series",
    "contents": [
      {
        "type": "back-panel",
        "class": ["right","large","up"],
        "content": [
          {
            "tag": "img",
            "src": "img/selfie.jpg",
          },
        ]
      },
      {
        "type": "panel",
        "class": ["transparent"],
        "content": [
          { "tag": "p", 
            "elements": [
              {
                "tag": "ruby",
                "item": ["野々山","ののやま","太郎","たろう"]
              }," /男性"," /A型"," /2021春入社"
          ]
          }
        ]
      },
      {
        "type": "panel",
        "class": ["transparent"],
        "content": [
          { "tag": "ul", 
            "item": [
              "名城大学 情報工学部 色彩系","同大学院 知的センサ情報処理研究室","いくばくかの副業経験",
              "キャンプ、料理、アート活動、ボードゲーム、麻雀、花札、ウィンドサーフィン(New)、",
              "CSSの申し子、CSSとJSをこよなく愛する、Webアニメーション、Webページスクレイピング",
              "機動力、過激、諦めの心(良くも悪くも)、躁病の疑い、みてくれへの拘り"]
          }
        ]
      },
    ]
  },
  {
    //slide3
      "title": "CODING HISTORY OF MYSELF",
      "design": "history",
      "contents": [
        {
          "type": "panel",
          "content": [{ "tag": "p", "elements": ["大学4年次に従事した色彩科学系の研究の際、<br>CSSに割とハマる"] }]
        },
        {
          "type": "panel",
          "content": [{ "tag": "p", "elements": ["Rails、Flask、Postgres、React等の便利技術、Sketchやgimpなどのアートボート、<br>これらにハマってチェックメイト。エンジニアを目指す"] }]
        },
        {
          "type": "panel",
          "content": [{ "tag": "p", "elements": ["「面白い人と一緒に何かやってみる」というテーマで副業を始める。"] }]
        },
        {
          "type": "image-panel",
          "class": ["wide"],
          "content": [
            {"tag": "a", "href": "https://camp-fire.jp/projects/view/203802?list=search_result_projects_popular",
                "target": "_blank", "rel": "noopener noreferrer",
                "elements": [{"tag": "img","src": "img/cof.png",}]
            },
            {"tag": "p", "elements": ["社会的弱者をかき集め、一夜限りの舞台を展開する「Create Our Festival」にデザイナーとして参画。企画は、ファンドで102万円/26日の収集に成功し、コロナで3度延期して崩壊しかけたがこの4月についに舞台が実現した。"]}
          ]
        },
        {
          "type": "image-panel",
          "class": ["wide"],
          "content": [
            {"tag": "a", "href": "https://www.chunichi.co.jp/article/71145",
                "target": "_blank", "rel": "noopener noreferrer",
                "elements": [{"tag": "img","src": "img/sumitomo-sensor.png",},]
            },
            {"tag": "p", "elements": ["修士2年間は、「寝るだけセンサ」に関する研究に着手。呼吸・心拍を計測できるセンサが実用化されているが、自分は「脈拍(心臓以外の脈)の計測」、「脈拍計測を応用したPTT(≒血圧)の計測」を研究した。"]}            
          ]
        },
        {
          "type": "panel",
          "content": [{ "tag": "p", "elements": [
            "初めて",
            {"tag": "a", "href": "https://bakuzetsu-searcher-app.herokuapp.com/",
                "target": "_blank", "rel": "noopener noreferrer",
                "elements": ["「おもちゃ",{"tag": "i", "class": "fab fa-aws"},"」"]
            },
            "をデプロイ。"
          ] }]
        },
        {
          "type": "image-panel",
          "class": ["wide"],
          "content": [
            {"tag": "a", "href": "https://www.yoridokoro.site/",
                "target": "_blank", "rel": "noopener noreferrer",
                "elements": [{"tag": "img","src": "img/yoridokoro.png",}]
            },
            {"tag": "p", "elements": ["今度は不登校の親子のための有料オンラインコミュニティの構築に関わる。ここで初めてAPI初体験を飾ることになるが、いきなり決済API(Paypal)を繰ってサブスクを構築するという暴挙をした。"]}
          ]
        },
        {
          "type": "panel",
          "content": [{ "tag": "p", "elements": ["ACCESS入社"] }]
        }
      ]
  },
  { //slide4
    "title": "REFLEC AND AMBITIOUS",
    "design": "series",
    "contents": [
      {
        "type": "panel",
        "class": ["transparent"],
        "content": [
          { "tag": "p", "elements": ["<副業活動を通じて>"]},
          { "tag": "ul", 
            "item":　["フロントの表側の面白さ","案外フロントの後ろ側やサーバサイドも面白い","技術の活用が不自由という気付き","収入/時間が***","エンジニア・エゴとの向き合い方"]}
        ]
      },
      {
        "type": "back-panel",
        "class": ["right","large","middle"],
        "content": [
          {
            "tag": "img",
            "src": "img/it-engineer-02.png",
          },
        ]
      },
      {
        "type": "back-panel",
        "class": ["left","large","down"],
        "content": [
          {
            "tag": "img",
            "src": "img/frontends.png",
          },
        ]
      },
      {
        "type": "panel",
        "class": ["transparent"],
        "content": [
          { "tag": "p", "elements": ["<野望>"]},
          { "tag": "ul",
            "item": ["Webだけでない、あらゆるフロントを制する","表現の幅を広げる","表現の許される環境を見つける","自身の価値を正しく値打ちする"]}
        ]
      }
      
    ]
  },
]};