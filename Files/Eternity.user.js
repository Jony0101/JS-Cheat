// ==UserScript==
// @name         Eternity
// @version      3.3
// @description  Tanki Online Cheat
// @author       Akz
// @match        https://*.test-eu.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @downloadURL  https://github.com/Jony0101/JS-Cheat/raw/main/Files/Eternity.user.js
// @updateURL    https://github.com/Jony0101/JS-Cheat/raw/main/Files/Eternity.meta.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow


// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/Jony0101/JS-Cheat/raw/main/Files/Eternity.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})
