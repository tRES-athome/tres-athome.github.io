# tRES — RoboCup@Home joint team website

Official website of **tRES**, the joint RoboCup@Home team of **Re@dy**, **eR@sers** and **SOBITS**.
Published at <https://tres-athome.github.io> (GitHub Pages, Jekyll).

> このREADMEとdocs/はサイトに公開されません（`_config.yml`の`exclude`で除外）。以下、更新担当者向けに日本語で説明します。

## 構成

```
_config.yml          サイト設定（最終更新日、論文の掲載開始年、公式リンク）
_data/               ★ 掲載内容はほぼすべてここ（YAML）
  teams.yml          3チームの紹介・リンク（Re@dyのURLは未確認のため空欄）
  robots.yml         G1 / HSR の説明・写真/動画
  research.yml       研究テーマ・コミュニティ貢献
  publications.yml   論文（直近5年）
  software.yml       OSSリポジトリ
  people.yml         PI・Team Leader・Contact Person・メンバー
  awards.yml         大会参加歴・受賞（チーム別に明記）
  qualification.yml  TDP・クオリフィケーションビデオ
  navigation.yml     メニュー
_layouts/ _includes/ 共通テンプレート（通常は編集不要）
index.html ほか      各ページ（About, Robots, Research, Publications, Software, People, History, Qualification）
assets/css/site.css  デザイン（色は先頭の :root 変数で一括管理）
assets/js/main.js    スマホメニュー・チーム絞り込み（JSなしでも全内容が表示される）
assets/img/          画像置き場（許諾を確認した素材のみ）
docs/                チェックリスト・要件対応表・出典一覧・未確認事項（非公開）
```

## ローカルで確認する

Ruby 3.x と Bundler が必要です。GitHub Pages と同じバージョンの Jekyll を使います。

```sh
bundle install
bundle exec jekyll serve
# → http://localhost:4000 を開く
```

> `assets/css/style.css` というファイル名は使わないでください。GitHub Pages の既定テーマのCSSと衝突します（`_config.yml`で`theme: null`も設定済み）。

## GitHub Pages で公開する

1. このリポジトリ（`tres-athome/tres-athome.github.io`）の既定ブランチ（例: `main`）にファイルを置く。
2. GitHub の **Settings → Pages → Build and deployment** で
   *Source: Deploy from a branch*、*Branch: `main` / `(root)`* を選んで保存。
3. 数分後に <https://tres-athome.github.io> で公開されます（Actions タブでビルド状況を確認できます）。
4. 公開後、HTTPS が有効（*Enforce HTTPS*）になっていることを確認。

※ 2026-11-22 に `main` ブランチから公開済みです（Settings → Pages: `main` / `(root)`）。`main` に push すると数分で自動的にサイトへ反映されます。
※ CfP の注意「No IP addresses permitted」に従い、URLは必ずドメイン（`tres-athome.github.io`）で提出してください。

## よくある更新

| やりたいこと | 編集するファイル |
| --- | --- |
| 論文を追加 | `_data/publications.yml` に1件追加（`year`, `team`, `type`, `authors`, `title`, `venue`, `url`）。並び替えは自動 |
| 受賞・順位を追加 | `_data/awards.yml` に追加。**必ず `teams` と `entrant` を正しく**。tRES としての成果は `teams: [tres]` |
| PI・リーダー・連絡先を確定 | `_data/people.yml` の `roles` を埋めて `confirmed: true` |
| メンバーを掲載 | `_data/people.yml` の `rosters[].members` |
| Re@dy の情報 | `_data/teams.yml` の `ready`（`url`, `affiliation`, `summary`） |
| ロボットの写真・動画 | 画像を `assets/img/robots/` に置き、`_data/robots.yml` の `media` に追加（`alt` 必須） |
| TDP・動画を公開 | `_data/qualification.yml` の `current` で `url`（と `youtube_id`）を入れ、`status` を変更 |
| OSS を追加 | `_data/software.yml`（README・利用方法があり、更新が続いているもののみ） |
| 最終更新日 | `_config.yml` の `last_updated` |
| 掲載する論文の年 | `_config.yml` の `publications_since`（2027年度に更新するなら 2023 など） |

YAML の注意: インデントはスペース2つ。`:` や `"` を含む文字列は `"..."` で囲み、中の `"` は `\"` にします。

## アクセシビリティ

- すべての画像に英語の `alt` を付けてください（装飾のみなら `alt=""`）。
- 色はコントラスト比 4.5:1 以上を目安に `site.css` の変数で調整してください。
- キーボード操作（Tab・Enter・Esc）でメニューと絞り込みが使えることを確認してください。

## 関連ドキュメント

- [docs/CHECKLIST.md](docs/CHECKLIST.md) — 私たちが埋める情報・素材のチェックリスト
- [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md) — 公式Webサイト要件との対応表
- [docs/SOURCES.md](docs/SOURCES.md) — 収集した情報と出典URL
- [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) — 未確認事項・公開前の確認点
