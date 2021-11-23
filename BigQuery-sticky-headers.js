// ==UserScript==
// @name         BigQuery sticky headers
// @description  This script will freeze/stick the table headers of the table preview and the query result window in the BigQuery UI. It was tested on Chrome and Firefox and it should work for both the old and the new UI.
// @version      0.2
// @author       Dr Ivol
// @match        https://console.cloud.google.com/bigquery*
// @icon         https://symbols.getvecta.com/stencil_75/69_bigquery-icon.63962c35cd.svg
// @licence      unlicense
// @run-at       document-idle
// ==/UserScript==

document.head.insertAdjacentHTML("afterbegin", "<style>th{position:-webkit-sticky; position:sticky; top:0;}</style>");
