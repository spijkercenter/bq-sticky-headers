// ==UserScript==
// @name         BigQuery sticky headers
// @version      0.2
// @author       Dr Ivol
// @match        https://console.cloud.google.com/bigquery*
// @icon         https://symbols.getvecta.com/stencil_75/69_bigquery-icon.63962c35cd.svg
// @licence      unlicense
// @run-at       document-idle
// ==/UserScript==

document.head.insertAdjacentHTML("afterbegin", "<style>th{position:-webkit-sticky; position:sticky; top:0;}</style>");
