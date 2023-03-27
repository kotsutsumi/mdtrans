#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const node_html_markdown_1 = require("node-html-markdown");
const URL = process.argv[2];
(0, node_fetch_1.default)(URL)
    .then((res) => {
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }
    return res.text();
})
    // これがレスポンス本文のテキスト
    .then((text) => {
    const nhm = new node_html_markdown_1.NodeHtmlMarkdown(
    /* options (optional) */ {}, 
    /* customTransformers (optional) */ undefined, 
    /* customCodeBlockTranslators (optional) */ undefined);
    console.log(nhm.translate(text));
})
    // エラーはここでまとめて処理
    .catch((err) => {
    // console.error(err);
});
