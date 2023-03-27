#! /usr/bin/env node

import fetch from "node-fetch";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from "node-html-markdown";
const URL = process.argv[2];

fetch(URL)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.text();
  })
  // これがレスポンス本文のテキスト
  .then((text) => {
    const nhm = new NodeHtmlMarkdown(
      /* options (optional) */ {},
      /* customTransformers (optional) */ undefined,
      /* customCodeBlockTranslators (optional) */ undefined
    );

    console.log(nhm.translate(text));
  })
  // エラーはここでまとめて処理
  .catch((err) => {
    // console.error(err);
  });
