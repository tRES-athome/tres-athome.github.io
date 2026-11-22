# 埋める必要のある情報・素材チェックリスト

提出期限: **2026-12-06 23:59 GMT**（日本時間 12-07 08:59）。サイト URL は Google Form で提出。
編集先は `_data/` の各ファイル（[README](../README.md) 参照）。

## A. 必須（CfP の Website 要件）

- [ ] **【不合格条件 H-G1】チーム集合写真**：メンバーの大半と組み立て済みロボットが一緒に写った、今年度撮影の写真。TDP・動画・Webサイトのいずれかに必須（無いと自動不合格）。Webサイトにも載せるのが安全 → [審査基準](https://athome.robocup.org/rules/submission-review-criteria/)
  - 2026-11-22：暫定で2枚掲載（eR@sers & Re@dy の RoboCup 2026 Incheon 写真〔erasers.jp の元画像 6000×4000 から 1600px に縮小〕、SOBITS 集合写真〔撮影年未記載〕）→ `_data/team_photos.yml`。最新の集合写真（できれば3チーム合同）と高解像度版に差し替え予定

- [ ] **Principal Investigator**：氏名・所属・研究室/個人サイトURL → `people.yml` `roles`
- [ ] **Team Leader**：氏名・所属 → `people.yml` `roles`
- [ ] **Contact Person**：氏名・所属 → `people.yml` `roles`
- [ ] **連絡方法**：tRES 用のメールアドレス（チーム共用推奨、`[at]` 表記）→ `people.yml` `contact`
- [ ] **メンバー名簿**（3チーム分、表記は英語、学年/役職、担当）→ `people.yml` `rosters`
  - [ ] 他チームとの重複メンバーの扱い（会議方針：外部チームの正式メンバーは tRES の名簿に入れない）
  - [ ] 掲載の同意（氏名・写真）
- [x] **ロボットの写真**（G1、HSR 各1枚。eR@sers サイトの写真を使用、2026-11-22 追加）→ `robots.yml` `media`
- [ ] **ロボットの動画**（YouTube 推奨、英語または英語字幕）→ `robots.yml` `media`
- [ ] **TDP 2027**（PDF または URL）→ `qualification.yml`（`status` を更新）
- [ ] **クオリフィケーションビデオ 2027**（YouTube URL / ID）→ `qualification.yml`
- [ ] **Re@dy 関連論文**（直近5年）→ `publications.yml`
- [ ] **論文リンク**：「Link to be added」と表示されている論文の DOI・PDF → `publications.yml`
- [ ] **Re@dy の大会参加歴・受賞** → `awards.yml`

## B. チーム情報

- [x] Re@dy の所属機関（National Institute of Technology, Kitakyushu College）
- [ ] Re@dy の紹介文、公式サイト URL、GitHub → `teams.yml`
- [ ] SOBITS・eR@sers の紹介文の確認（各チーム代表のチェック）
- [ ] HSR（タイプB）の運用担当チーム → `robots.yml` `operated_by`
- [ ] 2027 年用のハードウェア構成（センサ、計算機、外部計算機の有無）→ `robots.yml` `hardware`

## C. 研究・成果

- [ ] 場所・人物概念モデル：概要、関連論文・コード → `research.yml`
- [ ] VLA ファインチューニング：成果、モデル/データの公開予定
- [ ] 実アリーナのシミュレーション再構築：再現した会場名、他チームの利用数など**確認できる数値**
- [ ] HSR による国際会議発表（会議ノートでは4本）の書誌情報
- [ ] G1 関連の技術更新、公開予定のパッケージ
- [ ] 研究説明用の図（自作）

## D. ソフトウェア

- [ ] 各リポジトリに英語 README（インストール・使い方）があるか確認（特に `g1_ws`、`g1_amazing_hand_connector`、`erasers_kachaka`、SIGVerse 系）
- [ ] ライセンスが「To be confirmed」のリポジトリにライセンスを設定
- [ ] tRES 共通リポジトリ（`tres-athome` Organization）に何を置くか

## E. 権利・許諾

- [ ] 掲載する写真・動画の著作権者と、tRES サイトでの使用許諾（大学広報・撮影者・写っている人）
- [ ] 各チームサイトの文章・ロゴを使う場合の許諾（現在は文章を要約・翻訳し、画像は使用していない）
- [ ] 大学名・研究室名の表記ルール（英語名）

## F. 公開作業

- [ ] 内容レビュー（3チーム）
- [ ] `main` ブランチへマージ
- [ ] Settings → Pages で公開設定、HTTPS 有効化
- [ ] スマホ・PC で表示確認、リンク切れ確認
- [ ] `_config.yml` の `last_updated` を更新
