// ==UserScript==
// @name         BigQuery sticky headers
// @namespace    --
// @version      0.1
// @description  --
// @author       Dr Ivol
// @match        https://console.cloud.google.com/bigquery*
// @icon         https://symbols.getvecta.com/stencil_75/69_bigquery-icon.63962c35cd.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName('th').forEach(th => {
        th.style.position = 'sticky';
        th.style.top = 0;
    });
})();