# 未確認事項・公開前に確認すべき点

サイト上では該当箇所に **To be confirmed** バッジを表示しています。確認できたら `_data/` を更新し、バッジを外してください。

## 1. tRES 自体

1. **PI・Team Leader・Contact Person・連絡先**が未確定（会議メモに候補はあるが確認中のため未掲載）。
2. **メンバー名簿**が未確定。他チームと重複するメンバーの扱い。
3. **Re@dy の情報全般**：公式サイト URL、GitHub。（所属は北九州工業高等専門学校 / National Institute of Technology, Kitakyushu College と確認済み・2026-11-22）
   - サイト上のチーム表記は「eR@sers」「Re@dy」に統一済み（2026-11-22 指示）。
4. **ロボット構成**：G1 と HSR（タイプB）は「方向」であり確定ではない。HSR の運用チーム、計算機・センサ構成。
5. **研究テーマ**：場所・人物概念モデル、VLA ファインチューニング、実アリーナ再構築は「候補」。サイトでは Candidate / Ongoing と表示。TDP の最終内容と一致させること（CfP 上、TDP・動画・サイトの整合性が重要）。
6. 「tRES は 2026 年に結成」と記載 → 結成時期の表現で問題ないか。
7. トップの「“Tres” は スペイン語で 3、R・E・S は READY・Erasers・SOBITS」という説明を公開してよいか。
8. （削除）各チームの「tRES での役割」表示は不要との指示により削除済み。

## 2. 情報源間の食い違い（要確認）

| 項目 | 食い違い | 現在の掲載 |
|---|---|---|
| SOBITS の創設年 | トップ: 「2000年に崔先生が創設」/ About: 「2010年に SOBITS 結成、2000年に崔研究室設立」 | 「Team formed in 2010 (Choi Laboratory established in 2000)」 |
| RoboCup 2026 の賞名 | 結果ページ: Best Humanoid Award / 告知記事: Humanoid Special Award | Best Humanoid Award ＋ TBC |
| Erasers RoboCup 2012 準優勝 | About には記載、Awards ページには記載なし | 掲載 ＋ TBC |
| Erasers 合同チーム 2021–2023 | 「4位、Smoothest Safest Navigation 2回」の年・リーグ・チーム名が不明。Awards には 2022（Tama-Goya）の1回のみ | 要約として掲載 ＋ TBC |
| Erasers 2024 準優勝 | About: 「RoboCup 2024 2nd place」/ Awards: DSPL 2位 | DSPL 2位 |
| SOBITS RCJ 2023 Education | 受賞一覧: 3位 / 沿革: 2位 | 3位 ＋ TBC |
| SOBITS RCAP 2021 Simulation | 受賞一覧: 優勝 / 沿革: Sim OPL 2位、Technical Challenge 1位 | 受賞一覧に従う ＋ TBC |
| SOBITS RCJ 2020 | 受賞一覧: Sim 1位、Edu 2位 / 沿革: Sim OPL 1位、Edu 1位、OPL 1位 ほか | 受賞一覧に従う ＋ TBC |
| SOBITS RCJ 2024 の 5位 | 「Domestic Service Platform League」/「Domestic Open Platform League (Special Award for Outstanding Effort)」 | DSPL 5位（特別賞併記）＋ TBC |
| SOBITS RCJ 2018 Simulation 1位 | 沿革のみに記載 | 掲載 ＋ TBC |
| Erasers 論文（Advanced Robotics 37(8)） | 出典は 2022 年と記載。巻号から 2023 年の可能性 | 2022 ＋ 注記 |
| SOBITS 論文タイトル | 出典の「Path Planing」を「Path Planning」と表記 | 注記あり。原典で確認 |
| SOBITS 2026 TDP の著者・提出先 | PDF は公開されているが、書誌情報は未確認 | 「Team SOBITS」として掲載 ＋ 注記 |

## 3. 古くなっている可能性がある情報

- **SOBITS サイト**：ニュースの最新が 2025-05、受賞一覧も 2025-05 まで。
  - RoboCup 2026 Incheon：13位/24チーム（チームからの情報、2026-11-22 掲載）。公開の結果ページがあれば `awards.yml` の `source` に追加。
  - 「RoboCup France Open 2023」はチームの指示により「RoboCup 2023 Bordeaux」（世界大会）に修正（2026-11-22）。SOBITS サイト側の表記も更新を推奨。
- **SOBITS メンバー一覧**：学年表記が年度更新されていない可能性。
- **Erasers サイト**：フッターが「Copyright 2025」。2026 年の記事はあり。
- 論文の「Accepted」表記（CoRL 2025 Workshop、GCCE 2025）→ 発表済みなら DOI・ページ番号を追加。

## 4. 権利・許諾

- G1・HSR の写真は eR@sers サイト（https://erasers.jp/robots/）の画像を、チームの指示（2026-11-22）により掲載。クレジット「Photo: eR@sers, Tamagawa University」付き。EXIF 情報は削除し縮小済み。撮影者の確認は eR@sers 側で念のため実施を推奨。
- 動画は未掲載（プレースホルダー）。
- 文章は各サイトの記述を要約・英訳したもの。各チームの確認を推奨。
- 他チームサイトの TDP・動画へのリンクは「リンク」のみ（埋め込みなし）。

## 5. 公開・設定（実施前にご確認ください）

- 作業ブランチ `claude/tres-robocup-website-yqotd3` に push 済み。**`main` へのマージ、GitHub Pages の有効化、リポジトリ設定の変更は行っていません。**
- GitHub 上のリポジトリ `tres-athome/tres-athome.github.io` は確認時点で空（ブランチなし）でした。`main` ブランチの作成方法（このブランチから作る／PR でマージ）を決めてください。
- CfP の「No IP addresses permitted」に注意し、提出フォームには `https://tres-athome.github.io` を記入。
