# 公式要件との対応表

出典: [Call for Participation – RoboCup@Home 2027](https://athome.robocup.org/call-for-participation-robocuphome-2027/)（2026-11-22 確認）

## 1. Instructions for the Website（必須要件）

| # | CfP の要件（原文） | 対応ページ / セクション | データ | 現状 |
|---|---|---|---|---|
| W0 | *No IP addresses permitted* | 公開URL `https://tres-athome.github.io` | `_config.yml` `url` | ✅ ドメインで提出すること |
| W0 | *designed for a broader audience* | 全ページ（平易な英語、"In short" 欄） | — | ✅ |
| W1 | Photos and videos of the robot(s) | Robots（`/robots/`）各ロボットの写真・動画枠 / Qualification の動画枠 | `robots.yml` `media`, `qualification.yml` | ⚠️ 枠のみ。自前素材の追加が必要 |
| W2 | Description of the approaches and information on scientific achievements | Research（`/research/`）、About「Why a joint team?」 | `research.yml` | ⚠️ 研究テーマは候補段階。成果（論文・数値）を追記 |
| W3 | Relevant publications (last 5 years, preferably available to download) | Publications（`/publications/`）年別・チーム別、PDFバッジ | `publications.yml`, `publications_since: 2022` | ⚠️ 18件掲載。リンク未設定の論文あり、Re@dy分なし |
| W4 | Link to repositories with software for the community | Software（`/software/`）README・リポジトリへのリンク、使い方 | `software.yml` | ✅ 10件（ライセンス・README言語の一部は要確認） |
| W5 | Team members | People（`/people/`）チーム別ロスター | `people.yml` `rosters` | ❌ 名簿未確定 |
| W5a | Principal Investigator … with a link to their website | People「Key roles」 | `people.yml` `roles` | ❌ 未確定 |
| W5b | Team Leader | People「Key roles」 | 同上 | ❌ 未確定 |
| W5c | Contact Person | People「Key roles」「Contact」、フッター | `people.yml` `roles`, `contact` | ❌ 未確定 |
| W6 | Previous participation in RoboCup, local RoboCup tournaments, and rankings | History & Awards（`/history/`）、About「Track record」 | `awards.yml` | ✅ 各チーム別に明記。tRES は「実績なし」と明示 |
| W7 | *Only documented active software repositories are considered … clear and straightforward to other teams how to use your software* | Software ページ冒頭「How to use our software」、各カードの Documentation リンク・確認日 | `software.yml` `docs`, `checked` | ⚠️ 英語READMEのないリポジトリあり（g1_ws 等） |

## 2. Qualification and evaluation criteria との関係

| 評価項目 | サイトでの対応 |
|---|---|
| TDP | Qualification ページに TDP のリンク枠（準備中表示） |
| Performance in local tournaments and previous competitions | History & Awards、トップの Track record |
| Qualification Video | Qualification ページに動画枠（YouTube 埋め込み対応） |
| Website (multimedia, publications from the last 5 years, downloadable content, open-source software, and other contributions) | Robots（メディア）、Publications（PDF）、Software、Research の Community 節 |
| Relevant scientific contributions/publications (downloadable papers and open-source software) | Publications の PDF リンク、Software |
| Novelty of approach | Research（ヒューマノイド、VLA、Real2Sim など）※ TDP と内容を一致させる |
| Recent accomplishments weighted higher | 論文・受賞を新しい順に表示 |

## 3. ユーザー指定の掲載項目との対応

| 指定項目 | ページ |
|---|---|
| 1. Team / About | `/`（Who we are, Why a joint team?） |
| 2. Robots | `/robots/` |
| 3. Research & Achievements | `/research/` |
| 4. Publications | `/publications/` |
| 5. Open-source Software | `/software/` |
| 6. People | `/people/` |
| 7. RoboCup History & Awards | `/history/` |
| 8. Qualification Materials | `/qualification/` |

## 4. 公式要件ではない任意の改善（提案・実装済み）

- ロゴ代わりのワードマーク「tRES」（R/E/S を各チームの色で表示）とトップの3チーム表示
- 各実績へのチームタグと「Entrant（大会での登録名）」の併記、出典リンク
- チーム別の絞り込みボタン（JS 無効時も全件表示）
- 情報源間で食い違う項目に「To be confirmed」バッジと説明
- ダークモード対応、スキップリンク、キーボード操作、印刷用スタイル
- 他チームの過去 TDP・動画へのリンク（Qualification ページ下部）

## 5. 今後の任意提案（未実装）

- 各ロボットの短い紹介動画（30秒程度、英語字幕付き）をトップに配置
- 研究テーマごとの図（構成図・結果グラフ）。図は自前で作成したもの
- OSS の利用実績（他チームの利用数、ダウンロード数）を数値で表示（TDP会議の方針）
- ニュース欄（大会参加報告）。更新が続けられる場合のみ
- OGP 画像（SNS で共有したときのサムネイル）
