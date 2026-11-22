# 収集した情報と出典

確認日: **2026-11-22**。サイトに載せた事実はすべて以下の公開ページに基づきます（チーム内の会議メモは方針の参考のみ）。
個々の受賞・論文の出典は `_data/awards.yml` / `_data/publications.yml` の `source` 欄にもあります。

## 公式要項

| 情報 | 出典 |
|---|---|
| 大会日程（2027-06-15〜21、ドイツ・ニュルンベルク、OPL）、締切、TDP・動画・Webサイト要件、評価基準 | https://athome.robocup.org/call-for-participation-robocuphome-2027/ |
| 審査基準の詳細（リンクのみ） | https://athome.robocup.org/rules/submission-review-criteria/ |

## eR@sers（玉川大学）

| 情報 | 出典 |
|---|---|
| 結成（2000年頃、4足リーグ）、@Home 優勝 2008・2010、準優勝 2009・2012・2017・2024、3位 2018、2016 Innovation Award（HSR）、2024 Soul of the Party Award、WRS 2018 ファイナリスト、合同チームで 2021–2023 参加（4位、Smoothest Safest Navigation Award 2回）、所属（玉川大学 AIBot） | https://erasers.jp/about/ |
| ロボット：HSR（2016年導入）、G1（Amazing Hand / Pollen Robotics）、Kachaka、PiPER×2、UR5e | https://erasers.jp/robots/ |
| 大会成績・受賞一覧（2008–2026） | https://erasers.jp/awards/ |
| 論文リスト | https://erasers.jp/publication/ |
| GitHub（trcp, sigverse, robocupathomesim）、SIGVerse の説明 | https://erasers.jp/github/ |
| 委員会・大会運営への貢献（EC/TC/OC、Japan Open 議長、Simulation League 議長、WRS） | https://erasers.jp/contributions/ |
| メンバー一覧（役職なし） | https://erasers.jp/members/ |
| RoboCup 2026 Incheon：HSR と G1 で参加、Best Humanoid Award、総合 8位/24チーム、各競技スコア | https://erasers.jp/2026/07/06/results-of-robocup-2026-incheon/ |
| 同上：「Team eR@sers & Re@dy」が Humanoid Special Award、G1 は初のヒューマノイド参加で Restaurant・HRI で好成績 | https://erasers.jp/2026/07/05/the-best-humanoid-award-robocup-2026-incheon/ |
| 研究所 | https://www.tamagawa.jp/research/brain_e/aibot.html |

## Team SOBITS（創価大学）

| 情報 | 出典 |
|---|---|
| 崔先生が2000年に創設（トップページの表記）、代表挨拶、GitHub、SNS | https://teamsobits.github.io/ |
| 崔研究室・萩原研究室で構成、ロボット名、SOBITS 結成 2010年、研究領域（Guider, @Space, SOBIT-X, Hactile-Robotics, World Model）、沿革・大会成績、TDP・動画リンク | https://teamsobits.github.io/about.html |
| 研究紹介（生活支援ロボット等） | https://teamsobits.github.io/research.html |
| ロボット紹介（SOBIT MINI/PRO/EDU/LIGHT/HOME） | https://teamsobits.github.io/robot.html |
| 受賞一覧・国際/国内発表・論文 | https://teamsobits.github.io/publication.html |
| メンバー（崔 龍雲 教授、萩原 良信 准教授 ほか） | https://teamsobits.github.io/member.html |
| 2026 TDP（PDF） | https://teamsobits.github.io/pdf/SOBITS_2026_Team_Description_Paper.pdf |
| 2024 TDP（PDF） | https://teamsobits.github.io/pdf/SOBITS_2024_Team_Description_Paper.pdf |

## GitHub（ソフトウェア欄）

公開リポジトリ一覧は GitHub 検索 API（`org:TeamSOBITS` 等、fork・archive 除外、更新日順）で取得。README は raw.githubusercontent.com で存在と内容を確認。

| リポジトリ | 確認した内容 |
|---|---|
| https://github.com/TeamSOBITS/sobits_gazebo_worlds | README（英/日）、ROS 2 Jazzy・Gazebo、機能一覧、BSD-3-Clause、2026-11 更新 |
| https://github.com/TeamSOBITS/sobits_vla_tools | README（日/英）、ROS 2 Humble、現在はデータ収集のみ、BSD-3-Clause |
| https://github.com/TeamSOBITS/sobit_light | README あり、BSD-3-Clause |
| https://github.com/TeamSOBITS/sobit_home | README あり、BSD-3-Clause |
| https://github.com/TeamSOBITS/sobits_viz | README あり、説明文、BSD-3-Clause |
| https://github.com/trcp/g1_ws | README（日本語のみ、セットアップ手順）、ライセンス表示なし |
| https://github.com/trcp/g1_amazing_hand_connector | README（短い）、ライセンス表示なし |
| https://github.com/trcp/erasers_kachaka | README あり、説明文「Eduction 向け Kachaka パッケージ Gen2」 |
| https://github.com/sigverse | sigverse_unity_project, sigverse_ros_package（README は短い） |
| https://github.com/robocupathomesim | overview リポジトリに README、各タスクの Unity/ROS リポジトリ |

## 掲載しなかった情報（理由）

- **各チームサイトの写真・動画**：転載の許諾を確認できないため。リンクのみ掲載し、プレースホルダーを表示。
- **SOBITS の船舶関連の論文**（バース支援・ドッキング等）：RoboCup@Home との関連が薄いため除外。必要なら `publications.yml` に追加可能。
- **2021 年以前の論文**：CfP の「直近5年」に合わせ 2022 年以降のみ表示（データとしての追加は可能）。
- **eR@sers の Flying Robot Challenge、WRS ジュニア部門（Pacific Hou-Ou）**：@Home と直接関係しないため除外。
- **RCJ 2023 の人工知能学会賞（OPL Steering Committee 個人宛）**：チームの成績ではないため除外。
- **学生メンバー個人名**：tRES の名簿が未確定のため、各チームのメンバーページへのリンクのみ。
- **各チームの連絡先メール**：tRES の連絡先として使ってよいか未確認のため掲載せず。
- **チーム内会議メモの内容**（リーダー候補名、予算、担当者名など）：未確定・内部情報のため掲載せず。
