!(function(e, t) {
    var n = []
      , r = e.BABYLON || this.BABYLON;
    "object" == typeof exports && "object" == typeof module ? (r = r || require("babylonjs"),
    module.exports = t(r)) : "function" == typeof define && define.amd ? (n.push("babylonjs"),
    define("babylonjs-inspector", n, t)) : "object" == typeof exports ? (r = r || require("babylonjs"),
    exports["babylonjs-inspector"] = t(r)) : e.INSPECTOR = t(r)
}
)(this, (function(e) {
    e = e || this.BABYLON;
    var t = (function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 0)
    }
    )([(function(e, t, n) {
        n(1),
        e.exports = n(5)
    }
    ), (function(e, t, n) {
        var r = n(2);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(4)(r, {});
        r.locals && (e.exports = r.locals)
    }
    ), (function(e, t, n) {
        t = e.exports = n(3)(),
        t.push([e.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);", ""]),
        t.push([e.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata);", ""]),
        t.push([e.i, '.insp-wrapper {\n  user-select: none;\n  display: flex;\n  font-size: 0.9em;\n  font-family: "Inconsolata", sans-serif;\n  background-color: #242424;\n  /**\r\n * A tool contained in the tree panel (available for each item of the tree)\r\n */\n  /**\r\n * The toolbar contains : \r\n * - a refresh tool - refresh the whole panel\r\n * - a popup tool - Open the inspector in a new panel\r\n * ...\r\n */\n  /*\r\n* 1. Set to 0 height and width, and remove border for a slider without a thumb\r\n*/ }\n  .insp-wrapper .gutter {\n    background-color: #2c2c2c; }\n    .insp-wrapper .gutter.gutter-vertical:not(.blocked) {\n      cursor: ns-resize; }\n    .insp-wrapper .gutter.gutter-horizontal:not(.blocked) {\n      cursor: ew-resize; }\n  .insp-wrapper .insp-right-panel {\n    width: 750px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0; }\n    .insp-wrapper .insp-right-panel.popupmode {\n      width: 100% !important; }\n    .insp-wrapper .insp-right-panel .top-panel {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      background-color: #242424;\n      color: #ccc;\n      font-size: 1em; }\n      .insp-wrapper .insp-right-panel .top-panel .tab-panel-content {\n        width: 100%;\n        height: calc(100% - 40px); }\n      .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel {\n        position: absolute;\n        z-index: 10;\n        top: 40px;\n        right: 0;\n        width: 100px;\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        border: 1px solid #454545;\n        background-color: #242424; }\n        .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab {\n          height: 25px;\n          width: 100%;\n          line-height: 25px;\n          text-align: center;\n          background-color: #2c2c2c;\n          cursor: pointer; }\n          .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab:hover {\n            background-color: #383838; }\n          .insp-wrapper .insp-right-panel .top-panel .more-tabs-panel .invisible-tab:active {\n            background-color: #454545; }\n  .insp-wrapper .tooltip {\n    position: absolute;\n    top: 40px;\n    right: 0;\n    color: #f29766;\n    display: none;\n    z-index: 4;\n    font-family: "Inconsolata", sans-serif;\n    padding: 2px;\n    background-color: #242424;\n    border: 1px solid #454545; }\n  .insp-wrapper .treeTool {\n    margin: 3px 8px 3px 3px;\n    cursor: pointer;\n    position: relative; }\n    .insp-wrapper .treeTool:hover {\n      color: #5db0d7; }\n    .insp-wrapper .treeTool.active {\n      color: #5db0d7; }\n  .insp-wrapper .tab-panel {\n    height: 100%; }\n    .insp-wrapper .tab-panel.searchable {\n      height: calc(100% - 30px - 10px); }\n    .insp-wrapper .tab-panel .texture-image {\n      max-height: 400px; }\n    .insp-wrapper .tab-panel .scene-actions {\n      overflow-y: auto;\n      padding-left: 5px; }\n      .insp-wrapper .tab-panel .scene-actions .actions-title {\n        font-size: 1.1em;\n        padding-bottom: 10px;\n        border-bottom: 1px solid #5db0d7;\n        margin: 10px 0 10px 0; }\n      .insp-wrapper .tab-panel .scene-actions .defaut-action, .insp-wrapper .tab-panel .scene-actions .action-radio, .insp-wrapper .tab-panel .scene-actions .action {\n        height: 20px;\n        line-height: 20px;\n        width: 100%;\n        cursor: pointer; }\n        .insp-wrapper .tab-panel .scene-actions .defaut-action:hover, .insp-wrapper .tab-panel .scene-actions .action-radio:hover, .insp-wrapper .tab-panel .scene-actions .action:hover {\n          background-color: #2c2c2c; }\n        .insp-wrapper .tab-panel .scene-actions .defaut-action:active, .insp-wrapper .tab-panel .scene-actions .action-radio:active, .insp-wrapper .tab-panel .scene-actions .action:active {\n          background-color: #383838; }\n      .insp-wrapper .tab-panel .scene-actions .action-radio:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F10C";\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action-radio.active:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F192";\n        color: #5db0d7;\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F096";\n        margin-right: 10px; }\n      .insp-wrapper .tab-panel .scene-actions .action.active:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F14A";\n        color: #5db0d7;\n        margin-right: 10px; }\n  .insp-wrapper .tab-panel .shader-tree-panel {\n    height: 30px; }\n    .insp-wrapper .tab-panel .shader-tree-panel select {\n      height: 30px;\n      background-color: transparent;\n      color: #ccc;\n      height: 30px;\n      width: 100%;\n      max-width: 300px;\n      padding-left: 15px;\n      border: 1px solid #2c2c2c;\n      outline: 1px solid #454545; }\n      .insp-wrapper .tab-panel .shader-tree-panel select option {\n        padding: 5px;\n        color: gray; }\n  .insp-wrapper .tab-panel .shader-panel {\n    min-height: 100px;\n    user-select: text;\n    box-sizing: border-box;\n    padding: 0 15px; }\n    .insp-wrapper .tab-panel .shader-panel pre {\n      margin: 0;\n      white-space: pre-wrap; }\n      .insp-wrapper .tab-panel .shader-panel pre code {\n        background-color: #242424 !important;\n        padding: 0;\n        margin: 0; }\n    .insp-wrapper .tab-panel .shader-panel .shader-panel-title {\n      height: 25px;\n      border-bottom: 1px solid #383838;\n      text-transform: uppercase;\n      line-height: 25px;\n      margin-bottom: 10px; }\n  .insp-wrapper .tab-panel .console-panel {\n    min-height: 100px;\n    user-select: text;\n    box-sizing: border-box;\n    padding: 0 15px; }\n    .insp-wrapper .tab-panel .console-panel .console-panel-title {\n      height: 25px;\n      border-bottom: 1px solid #383838;\n      text-transform: uppercase;\n      line-height: 25px;\n      margin-bottom: 10px; }\n    .insp-wrapper .tab-panel .console-panel .console-panel-content {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: calc(100% - 30px); }\n    .insp-wrapper .tab-panel .console-panel .defaut-line, .insp-wrapper .tab-panel .console-panel .log, .insp-wrapper .tab-panel .console-panel .warn, .insp-wrapper .tab-panel .console-panel .error, .insp-wrapper .tab-panel .console-panel .object {\n      word-wrap: break-word;\n      padding: 3px 0 3px 5px; }\n    .insp-wrapper .tab-panel .console-panel .caller {\n      padding: 3px 0 3px 0;\n      color: #349ccd; }\n    .insp-wrapper .tab-panel .console-panel .log {\n      color: white; }\n    .insp-wrapper .tab-panel .console-panel .warn {\n      color: orange; }\n    .insp-wrapper .tab-panel .console-panel .error {\n      color: orangered; }\n    .insp-wrapper .tab-panel .console-panel .object {\n      color: #5db0d7; }\n  .insp-wrapper .tab-panel.stats-panel {\n    overflow-y: auto; }\n  .insp-wrapper .tab-panel .stats-fps {\n    font-weight: 600;\n    color: #f29766; }\n  .insp-wrapper .tab-panel .stat-title1 {\n    font-size: 1.1em;\n    padding: 10px; }\n  .insp-wrapper .tab-panel .stat-title2 {\n    margin: 10px 0 10px 0;\n    font-size: 1.05em;\n    border-bottom: 1px solid #5db0d7;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-label {\n    display: inline-block;\n    width: 80%;\n    padding: 2px;\n    background-color: #2c2c2c;\n    border-bottom: 1px solid #242424;\n    border-top: 1px solid #242424;\n    height: 30px;\n    line-height: 30px;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-value {\n    display: inline-block;\n    width: 20%;\n    padding: 2px;\n    background-color: #2c2c2c;\n    border-top: 1px solid #242424;\n    border-bottom: 1px solid #242424;\n    height: 30px;\n    line-height: 30px;\n    box-sizing: border-box; }\n  .insp-wrapper .tab-panel .stat-infos {\n    width: 100%;\n    padding: 4px; }\n  .insp-wrapper .tab-panel .gltf-actions {\n    overflow-y: auto;\n    padding-left: 5px; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-title {\n      font-size: 1.1em;\n      padding-bottom: 10px;\n      border-bottom: 1px solid #5db0d7;\n      margin: 10px 0 10px 0; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-input {\n      background-color: #2c2c2c;\n      border: none;\n      outline: none;\n      font-family: "Inconsolata", sans-serif;\n      color: #b3b3b3;\n      padding: 5px;\n      margin: 0px 6px 0px 0; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-input:hover {\n        background-color: #383838; }\n    .insp-wrapper .tab-panel .gltf-actions .gltf-button {\n      background-color: #2c2c2c;\n      border: none;\n      outline: none;\n      font-family: "Inconsolata", sans-serif;\n      color: #ccc;\n      padding: 5px 10px;\n      margin: 0px 6px 0px 0; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-button:hover {\n        background-color: #383838; }\n      .insp-wrapper .tab-panel .gltf-actions .gltf-button:active {\n        background-color: #454545; }\n  .insp-wrapper .property-type {\n    color: #5db0d7; }\n  .insp-wrapper .property-name, .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name {\n    color: #f29766; }\n  .insp-wrapper .insp-tree {\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: calc(50% - 40px - 30px); }\n    .insp-wrapper .insp-tree .line {\n      padding: 3px;\n      cursor: pointer; }\n      .insp-wrapper .insp-tree .line:hover {\n        background-color: #2c2c2c; }\n      .insp-wrapper .insp-tree .line.active {\n        background-color: #454545; }\n        .insp-wrapper .insp-tree .line.active .line-content {\n          background-color: #242424; }\n      .insp-wrapper .insp-tree .line.unfolded:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F078"; }\n      .insp-wrapper .insp-tree .line.folded:before {\n        width: 1em;\n        height: 1em;\n        line-height: 1em;\n        display: inline-block;\n        font-family: \'FontAwesome\', sans-serif;\n        content: "\\F054"; }\n      .insp-wrapper .insp-tree .line.unfolded.transformNode > span:first-of-type {\n        color: #f29766; }\n      .insp-wrapper .insp-tree .line.folded.transformNode > span:first-of-type {\n        color: #f29766; }\n      .insp-wrapper .insp-tree .line .line-content {\n        padding-left: 15px; }\n        .insp-wrapper .insp-tree .line .line-content:hover {\n          background-color: #242424; }\n        .insp-wrapper .insp-tree .line .line-content .line:hover:first-child {\n          background-color: #383838; }\n    .insp-wrapper .insp-tree .line_invisible {\n      display: none; }\n  .insp-wrapper .insp-details {\n    background-color: #242424;\n    overflow-y: auto;\n    overflow-x: auto;\n    color: #ccc;\n    font-family: "Inconsolata", sans-serif; }\n    .insp-wrapper .insp-details .details {\n      padding-left: 5px; }\n    .insp-wrapper .insp-details .base-row, .insp-wrapper .insp-details .row, .insp-wrapper .insp-details .header-row {\n      display: flex;\n      width: 100%; }\n      .insp-wrapper .insp-details .base-row .base-property, .insp-wrapper .insp-details .row .base-property, .insp-wrapper .insp-details .header-row .base-property, .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name, .insp-wrapper .insp-details .base-row .prop-value, .insp-wrapper .insp-details .row .prop-value, .insp-wrapper .insp-details .header-row .prop-value {\n        padding: 2px 0 2px 0;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n      .insp-wrapper .insp-details .base-row .prop-name, .insp-wrapper .insp-details .row .prop-name, .insp-wrapper .insp-details .header-row .prop-name {\n        width: 35%; }\n      .insp-wrapper .insp-details .base-row .prop-value, .insp-wrapper .insp-details .row .prop-value, .insp-wrapper .insp-details .header-row .prop-value {\n        width: 59%;\n        padding-left: 5px; }\n        .insp-wrapper .insp-details .base-row .prop-value.clickable, .insp-wrapper .insp-details .row .prop-value.clickable, .insp-wrapper .insp-details .header-row .prop-value.clickable {\n          cursor: pointer; }\n          .insp-wrapper .insp-details .base-row .prop-value.clickable:hover, .insp-wrapper .insp-details .row .prop-value.clickable:hover, .insp-wrapper .insp-details .header-row .prop-value.clickable:hover {\n            background-color: #383838; }\n          .insp-wrapper .insp-details .base-row .prop-value.clickable:after, .insp-wrapper .insp-details .row .prop-value.clickable:after, .insp-wrapper .insp-details .header-row .prop-value.clickable:after {\n            font-family: \'FontAwesome\', sans-serif;\n            content: "\\A0   \\A0   \\A0   \\F054"; }\n    .insp-wrapper .insp-details .row:nth-child(even) {\n      background-color: #2c2c2c; }\n    .insp-wrapper .insp-details .row.unfolded .prop-value.clickable:after {\n      font-family: \'FontAwesome\', sans-serif;\n      content: "\\A0   \\A0   \\A0   \\F078"; }\n    .insp-wrapper .insp-details .header-row {\n      background-color: #2c2c2c;\n      color: #ccc;\n      width: 100%;\n      max-width: 100%; }\n      .insp-wrapper .insp-details .header-row > * {\n        color: #ccc !important;\n        padding: 5px 0 5px 5px !important;\n        cursor: pointer; }\n        .insp-wrapper .insp-details .header-row > *:hover {\n          background-color: #383838; }\n      .insp-wrapper .insp-details .header-row .header-col {\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n        .insp-wrapper .insp-details .header-row .header-col .sort-direction {\n          margin-right: 5px; }\n    .insp-wrapper .insp-details .element-viewer, .insp-wrapper .insp-details .color-element, .insp-wrapper .insp-details .texture-element {\n      position: relative;\n      width: 10px;\n      height: 10px;\n      display: inline-block;\n      margin-left: 5px; }\n    .insp-wrapper .insp-details .color-element {\n      width: 20px;\n      height: 15px; }\n    .insp-wrapper .insp-details .texture-element {\n      color: #f29766;\n      margin-left: 10px; }\n      .insp-wrapper .insp-details .texture-element .texture-viewer {\n        color: #ccc;\n        position: absolute;\n        z-index: 10;\n        bottom: 0;\n        right: 0;\n        display: block;\n        width: 150px;\n        height: 150px;\n        border: 1px solid #454545;\n        background-color: #242424;\n        transform: translateX(100%) translateY(100%);\n        display: none;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center; }\n        .insp-wrapper .insp-details .texture-element .texture-viewer .texture-viewer-img {\n          margin: 10px 0 10px 0;\n          max-width: 110px;\n          max-height: 110px; }\n  .insp-wrapper .tabbar {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #383838;\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    box-sizing: border-box; }\n    .insp-wrapper .tabbar .tab {\n      height: calc(40px - 2px);\n      width: auto;\n      padding: 0 10px 0 10px;\n      color: #ccc;\n      line-height: 40px;\n      text-align: center;\n      cursor: pointer;\n      margin: 0 5px 0 5px;\n      box-sizing: border-box; }\n      .insp-wrapper .tabbar .tab:hover {\n        border-bottom: 1px solid #f29766;\n        background-color: #2c2c2c; }\n      .insp-wrapper .tabbar .tab:active {\n        background-color: #383838; }\n      .insp-wrapper .tabbar .tab.active {\n        border-bottom: 1px solid #f29766; }\n    .insp-wrapper .tabbar .more-tabs {\n      width: 40px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      position: relative;\n      border-right: 1px solid #383838; }\n      .insp-wrapper .tabbar .more-tabs:hover {\n        background-color: #383838; }\n      .insp-wrapper .tabbar .more-tabs:active {\n        color: #f29766;\n        background-color: #454545; }\n      .insp-wrapper .tabbar .more-tabs.active {\n        color: #f29766; }\n  .insp-wrapper .toolbar {\n    display: flex; }\n    .insp-wrapper .toolbar .tool {\n      width: 40px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      position: relative;\n      border-right: 1px solid #383838; }\n      .insp-wrapper .toolbar .tool:hover {\n        background-color: #383838; }\n      .insp-wrapper .toolbar .tool:active {\n        color: #f29766;\n        background-color: #454545; }\n      .insp-wrapper .toolbar .tool.active {\n        color: #f29766; }\n  .insp-wrapper .searchbar {\n    border: 1px solid #2c2c2c;\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    color: #b3b3b3; }\n    .insp-wrapper .searchbar input {\n      background-color: #242424;\n      border: none;\n      width: 100%;\n      outline: none;\n      font-family: "Inconsolata", sans-serif;\n      color: #b3b3b3;\n      padding: 3px 0 3px 10px;\n      margin: 6px 0 6px 0; }\n  .insp-wrapper input[type="range"] {\n    margin: auto;\n    -webkit-appearance: none;\n    position: relative;\n    overflow: hidden;\n    height: 15px;\n    width: 50%;\n    cursor: pointer;\n    border-radius: 0;\n    /* iOS */ }\n  .insp-wrapper ::-webkit-slider-runnable-track {\n    background: #ddd; }\n  .insp-wrapper ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    /* 1 */\n    height: 15px;\n    /* 1 */\n    background: #fff;\n    box-shadow: -100vw 0 0 100vw dodgerblue;\n    border: 0px solid #999;\n    /* 1 */ }\n  .insp-wrapper ::-moz-range-track {\n    height: 15px;\n    background: #ddd; }\n  .insp-wrapper ::-moz-range-thumb {\n    background: #fff;\n    height: 15px;\n    width: 20px;\n    border: 0px solid #999;\n    border-radius: 0 !important;\n    box-shadow: -100vw 0 0 100vw dodgerblue;\n    box-sizing: border-box; }\n  .insp-wrapper ::-ms-fill-lower {\n    background: dodgerblue; }\n  .insp-wrapper ::-ms-thumb {\n    background: #fff;\n    border: 0px solid #999;\n    height: 15px;\n    width: 20px;\n    box-sizing: border-box; }\n  .insp-wrapper ::-ms-ticks-after {\n    display: none; }\n  .insp-wrapper ::-ms-ticks-before {\n    display: none; }\n  .insp-wrapper ::-ms-track {\n    background: #ddd;\n    color: transparent;\n    height: 15px;\n    border: none; }\n  .insp-wrapper ::-ms-tooltip {\n    display: none; }\n', ""])
    }
    ), (function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }
            ,
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < t.length; i++) {
                    var a = t[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    e.push(a))
                }
            }
            ,
            e
        }
    }
    ), (function(e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                  , i = h[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++)
                        i.parts.push(p(r.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++)
                        a.push(p(r.parts[o], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function r(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var i = e[r]
                  , o = i[0]
                  , a = i[1]
                  , s = i[2]
                  , p = i[3]
                  , l = {
                    css: a,
                    media: s,
                    sourceMap: p
                };
                n[o] ? n[o].parts.push(l) : t.push(n[o] = {
                    id: o,
                    parts: [l]
                })
            }
            return t
        }
        function i(e, t) {
            var n = f()
              , r = m[m.length - 1];
            if ("top" === e.insertAt)
                r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                m.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function o(e) {
            e.parentNode.removeChild(e);
            var t = m.indexOf(e);
            t >= 0 && m.splice(t, 1)
        }
        function a(e) {
            var t = document.createElement("style");
            return t.type = "text/css",
            i(e, t),
            t
        }
        function s(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
            i(e, t),
            t
        }
        function p(e, t) {
            var n, r, i;
            if (t.singleton) {
                var p = b++;
                n = v || (v = a(t)),
                r = l.bind(null, n, p, !1),
                i = l.bind(null, n, p, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t),
                r = u.bind(null, n),
                i = function() {
                    o(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = a(t),
                r = c.bind(null, n),
                i = function() {
                    o(n)
                }
                );
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    r(e = t)
                } else
                    i()
            }
        }
        function l(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = y(t, i);
            else {
                var o = document.createTextNode(i)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
        function c(e, t) {
            var n = t.css
              , r = t.media;
            if (r && e.setAttribute("media", r),
            e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function u(e, t) {
            var n = t.css
              , r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var i = new Blob([n],{
                type: "text/css"
            })
              , o = e.href;
            e.href = URL.createObjectURL(i),
            o && URL.revokeObjectURL(o)
        }
        var h = {}
          , d = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                t
            }
        }
          , _ = d((function() {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }
        ))
          , f = d((function() {
            return document.head || document.getElementsByTagName("head")[0]
        }
        ))
          , v = null
          , b = 0
          , m = [];
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {},
            void 0 === t.singleton && (t.singleton = _()),
            void 0 === t.insertAt && (t.insertAt = "bottom");
            var i = r(e);
            return n(i, t),
            function(e) {
                for (var o = [], a = 0; a < i.length; a++) {
                    var s = i[a]
                      , p = h[s.id];
                    p.refs--,
                    o.push(p)
                }
                if (e) {
                    n(r(e), t)
                }
                for (var a = 0; a < o.length; a++) {
                    var p = o[a];
                    if (0 === p.refs) {
                        for (var l = 0; l < p.parts.length; l++)
                            p.parts[l]();
                        delete h[p.id]
                    }
                }
            }
        }
        ;
        var y = (function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        }
        )()
    }
    ), (function(t, n, r) {
        var i, o = r(6);
        !(function(t) {
            var n = (function() {
                function n(r, i, a, s, p) {
                    void 0 === a && (a = 0),
                    void 0 === s && (s = null);
                    var l = this;
                    if (this._popupMode = !1,
                    e.GUI ? t.loadGUIProperties() : e.Tools.LoadScript("https://preview.babylonjs.com/gui/babylon.gui.js", (function() {
                        t.loadGUIProperties()
                    }
                    ), (function() {
                        console.warn("Please add script https://preview.babylonjs.com/gui/babylon.gui.js to the HTML file")
                    }
                    )),
                    this._initialTab = a,
                    this._parentElement = s,
                    this._scene = r,
                    n.DOCUMENT = window.document,
                    n.WINDOW = window,
                    i)
                        this.openPopup(!0);
                    else {
                        var c = this._scene.getEngine().getRenderingCanvas()
                          , u = c.parentElement
                          , h = n.WINDOW.getComputedStyle(c);
                        if (this._canvasStyle = {
                            width: t.Helpers.Css(c, "width"),
                            height: t.Helpers.Css(c, "height"),
                            position: h.position,
                            top: h.top,
                            bottom: h.bottom,
                            left: h.left,
                            right: h.right,
                            padding: h.padding,
                            paddingBottom: h.paddingBottom,
                            paddingLeft: h.paddingLeft,
                            paddingTop: h.paddingTop,
                            paddingRight: h.paddingRight,
                            margin: h.margin,
                            marginBottom: h.marginBottom,
                            marginLeft: h.marginLeft,
                            marginTop: h.marginTop,
                            marginRight: h.marginRight
                        },
                        this._parentElement) {
                            this._c2diwrapper = t.Helpers.CreateDiv("insp-wrapper", this._parentElement),
                            this._c2diwrapper.style.width = "100%",
                            this._c2diwrapper.style.height = "100%",
                            this._c2diwrapper.style.paddingLeft = "5px";
                            var d = t.Helpers.CreateDiv("insp-right-panel", this._c2diwrapper);
                            d.style.width = "100%",
                            d.style.height = "100%",
                            this._buildInspector(d)
                        } else {
                            this._c2diwrapper = t.Helpers.CreateDiv("insp-wrapper");
                            for (var _ in this._canvasStyle)
                                this._c2diwrapper.style[_] = this._canvasStyle[_];
                            if (!h.width || !h.height || !h.left)
                                return;
                            var f = parseFloat(h.width.substr(0, h.width.length - 2)) || 0
                              , v = parseFloat(h.height.substr(0, h.height.length - 2)) || 0;
                            if ("absolute" === h.position || "relative" === h.position) {
                                var b = parseFloat(h.left.substr(0, h.left.length - 2)) || 0;
                                f + b >= n.WINDOW.innerWidth && (this._c2diwrapper.style.maxWidth = f - b + "px")
                            }
                            var m = this._getRelativeParent(c)
                              , y = m.clientWidth
                              , g = m.clientHeight
                              , w = f / y * 100
                              , x = v / g * 100;
                            this._c2diwrapper.style.width = w + "%",
                            this._c2diwrapper.style.height = x + "%",
                            c.style.position = "static",
                            c.style.width = "100%",
                            c.style.height = "100%",
                            c.style.paddingBottom = "0",
                            c.style.paddingLeft = "0",
                            c.style.paddingTop = "0",
                            c.style.paddingRight = "0",
                            c.style.margin = "0",
                            c.style.marginBottom = "0",
                            c.style.marginLeft = "0",
                            c.style.marginTop = "0",
                            c.style.marginRight = "0",
                            u && u.replaceChild(this._c2diwrapper, c),
                            this._c2diwrapper.appendChild(c);
                            var d = t.Helpers.CreateDiv("insp-right-panel", this._c2diwrapper);
                            this._parentElement || o([c, d], {
                                direction: "horizontal",
                                sizes: [75, 25],
                                onDrag: function() {
                                    t.Helpers.SEND_EVENT("resize"),
                                    l._tabbar && l._tabbar.updateWidth()
                                }
                            }),
                            this._buildInspector(d)
                        }
                        t.Helpers.SEND_EVENT("resize"),
                        this._tabbar.updateWidth()
                    }
                    if (t.Helpers.IsBrowserEdge() || this.refresh(),
                    p)
                        for (var C = p.backgroundColor || "#242424", T = p.backgroundColorLighter || "#2c2c2c", P = p.backgroundColorLighter2 || "#383838", E = p.backgroundColorLighter3 || "#454545", O = p.color || "#ccc", S = p.colorTop || "#f29766", L = p.colorBot || "#5db0d7", I = n.DOCUMENT.querySelectorAll("style"), D = 0; D < I.length; D++) {
                            var H = I[D];
                            -1 != H.innerHTML.indexOf("insp-wrapper") && (I[D].innerHTML = I[D].innerHTML.replace(/#242424/g, C).replace(/#2c2c2c/g, T).replace(/#383838/g, P).replace(/#454545/g, E).replace(/#ccc/g, O).replace(/#f29766/g, S).replace(/#5db0d7/g, L))
                        }
                }
                return n.prototype._getRelativeParent = function(e, t) {
                    if (!e.parentElement)
                        return e;
                    var r = n.WINDOW.getComputedStyle(e);
                    return t ? "relative" === r.position || "absolute" === r.position ? e : this._getRelativeParent(e.parentElement, !0) : "static" == r.position ? e.parentElement : this._getRelativeParent(e.parentElement, !0)
                }
                ,
                n.prototype._buildInspector = function(e) {
                    this._tabbar = new t.TabBar(this,this._initialTab),
                    this._topPanel = t.Helpers.CreateDiv("top-panel", e),
                    this._topPanel.appendChild(this._tabbar.toHtml()),
                    this._tabbar.updateWidth(),
                    this._tabPanel = t.Helpers.CreateDiv("tab-panel-content", this._topPanel)
                }
                ,
                Object.defineProperty(n.prototype, "scene", {
                    get: function() {
                        return this._scene
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "popupMode", {
                    get: function() {
                        return this._popupMode
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype.filterItem = function(e) {
                    var t = this._tabbar.getActiveTab();
                    t && t.filter(e)
                }
                ,
                n.prototype.displayObjectDetails = function(e) {
                    this._tabbar.switchMeshTab(e)
                }
                ,
                n.prototype.refresh = function() {
                    t.Helpers.CleanDiv(this._tabPanel);
                    var e = this._tabbar.getActiveTab();
                    e && (e.update(),
                    this._tabPanel.appendChild(e.getPanel()),
                    t.Helpers.SEND_EVENT("resize"))
                }
                ,
                n.prototype.dispose = function() {
                    if (!this._popupMode) {
                        var e = this._tabbar.getActiveTab();
                        e && e.dispose();
                        var n = this._scene.getEngine().getRenderingCanvas();
                        for (var r in this._canvasStyle)
                            n.style[r] = this._canvasStyle[r];
                        if (n.parentElement) {
                            var i = n.parentElement.parentElement;
                            i && (i.insertBefore(n, this._c2diwrapper),
                            t.Helpers.CleanDiv(this._c2diwrapper),
                            this._c2diwrapper.remove(),
                            t.Helpers.SEND_EVENT("resize"))
                        }
                    }
                    t.Scheduler.getInstance().dispose()
                }
                ,
                n.prototype.openPopup = function(e) {
                    var r = this;
                    if (t.Helpers.IsBrowserEdge())
                        console.warn("Inspector - Popup mode is disabled in Edge, as the popup DOM cannot be updated from the main window for security reasons");
                    else {
                        var i = window.open("", "Babylon.js INSPECTOR", "toolbar=no,resizable=yes,menubar=no,width=750,height=1000");
                        if (!i)
                            return;
                        i.document.title = "Babylon.js INSPECTOR";
                        for (var o = n.DOCUMENT.querySelectorAll("style"), a = 0; a < o.length; a++)
                            i.document.body.appendChild(o[a].cloneNode(!0));
                        for (var s = document.querySelectorAll("link"), p = 0; p < s.length; p++) {
                            var l = i.document.createElement("link");
                            l.rel = "stylesheet",
                            l.href = s[p].href,
                            i.document.head.appendChild(l)
                        }
                        e || this.dispose(),
                        this._popupMode = !0,
                        n.DOCUMENT = i.document,
                        n.WINDOW = i,
                        this._c2diwrapper = t.Helpers.CreateDiv("insp-wrapper", i.document.body);
                        var c = t.Helpers.CreateDiv("insp-right-panel", this._c2diwrapper);
                        c.classList.add("popupmode"),
                        this._buildInspector(c),
                        this.refresh(),
                        i.addEventListener("resize", (function() {
                            r._tabbar && r._tabbar.updateWidth()
                        }
                        ))
                    }
                }
                ,
                n.prototype.getActiveTabIndex = function() {
                    return this._tabbar.getActiveTabIndex()
                }
                ,
                n
            }
            )();
            t.Inspector = n
        }
        )(i || (i = {}));
        var i;
        !(function(t) {
            t.PROPERTIES = {
                format: function(e) {
                    var n = t.Helpers.GET_TYPE(e) || "type_not_defined";
                    return t.PROPERTIES[n] && t.PROPERTIES[n].format ? t.PROPERTIES[n].format(e) : t.Helpers.GET_TYPE(e)
                },
                type_not_defined: {
                    properties: new Array,
                    format: function() {
                        return ""
                    }
                },
                Vector2: {
                    type: e.Vector2,
                    format: function(e) {
                        return "x:" + t.Helpers.Trunc(e.x) + ", y:" + t.Helpers.Trunc(e.y)
                    }
                },
                Vector3: {
                    type: e.Vector3,
                    format: function(e) {
                        return "x:" + t.Helpers.Trunc(e.x) + ", y:" + t.Helpers.Trunc(e.y) + ", z:" + t.Helpers.Trunc(e.z)
                    }
                },
                Color3: {
                    type: e.Color3,
                    format: function(e) {
                        return "R:" + e.r.toPrecision(2) + ", G:" + e.g.toPrecision(2) + ", B:" + e.b.toPrecision(2)
                    },
                    slider: {
                        r: {
                            min: 0,
                            max: 1,
                            step: .01
                        },
                        g: {
                            min: 0,
                            max: 1,
                            step: .01
                        },
                        b: {
                            min: 0,
                            max: 1,
                            step: .01
                        }
                    }
                },
                Color4: {
                    type: e.Color4,
                    format: function(e) {
                        return "R:" + e.r + ", G:" + e.g + ", B:" + e.b
                    },
                    slider: {
                        r: {
                            min: 0,
                            max: 1,
                            step: .01
                        },
                        g: {
                            min: 0,
                            max: 1,
                            step: .01
                        },
                        b: {
                            min: 0,
                            max: 1,
                            step: .01
                        }
                    }
                },
                Quaternion: {
                    type: e.Quaternion
                },
                Size: {
                    type: e.Size,
                    format: function(e) {
                        return "Size - w:" + t.Helpers.Trunc(e.width) + ", h:" + t.Helpers.Trunc(e.height)
                    }
                },
                Texture: {
                    type: e.Texture,
                    format: function(e) {
                        return e.name
                    }
                },
                RenderTargetTexture: {
                    type: e.RenderTargetTexture
                },
                DynamicTexture: {
                    type: e.DynamicTexture
                },
                BaseTexture: {
                    type: e.BaseTexture
                },
                CubeTexture: {
                    type: e.CubeTexture
                },
                HDRCubeTexture: {
                    type: e.HDRCubeTexture
                },
                Sound: {
                    type: e.Sound
                },
                ArcRotateCamera: {
                    type: e.ArcRotateCamera,
                    slider: {
                        alpha: {
                            min: 0,
                            max: 2 * Math.PI,
                            step: .01
                        },
                        beta: {
                            min: -Math.PI,
                            max: Math.PI,
                            step: .01
                        },
                        fov: {
                            min: 0,
                            max: 180,
                            step: 1
                        }
                    }
                },
                FreeCamera: {
                    type: e.FreeCamera,
                    slider: {
                        fov: {
                            min: 0,
                            max: 180,
                            step: 1
                        }
                    }
                },
                Scene: {
                    type: e.Scene
                },
                TransformNode: {
                    type: e.TransformNode,
                    format: function(e) {
                        return e.name
                    }
                },
                AbstractMesh: {
                    type: e.AbstractMesh,
                    format: function(e) {
                        return e.name
                    }
                },
                Mesh: {
                    type: e.Mesh,
                    format: function(e) {
                        return e.name
                    },
                    slider: {
                        visibility: {
                            min: 0,
                            max: 1,
                            step: .1
                        }
                    }
                },
                StandardMaterial: {
                    type: e.StandardMaterial,
                    format: function(e) {
                        return e.name
                    },
                    slider: {
                        alpha: {
                            min: 0,
                            max: 1,
                            step: .01
                        }
                    }
                },
                PBRMaterial: {
                    type: e.PBRMaterial,
                    slider: {
                        alpha: {
                            min: 0,
                            max: 1,
                            step: .01
                        }
                    }
                },
                PhysicsImpostor: {
                    type: e.PhysicsImpostor
                },
                ImageProcessingConfiguration: {
                    type: e.ImageProcessingConfiguration
                },
                ColorCurves: {
                    type: e.ColorCurves
                }
            }
        }
        )(i || (i = {}));
        var i;
        !(function(t) {
            function n() {
                var n = {
                    ValueAndUnit: {
                        type: e.GUI.ValueAndUnit,
                        properties: ["_value", "unit"],
                        format: function(e) {
                            return e
                        }
                    },
                    Control: {
                        type: e.GUI.Control,
                        properties: ["_alpha", "_fontFamily", "_color", "_scaleX", "_scaleY", "_rotation", "_currentMeasure", "_width", "_height", "_left", "_top", "_linkedMesh", "isHitTestVisible", "isPointerBlocker"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Button: {
                        type: e.GUI.Button,
                        properties: new Array,
                        format: function(e) {
                            return e.name
                        }
                    },
                    ColorPicker: {
                        type: e.GUI.ColorPicker,
                        properties: ["_value"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Checkbox: {
                        type: e.GUI.Checkbox,
                        properties: ["_isChecked", "_background"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Ellipse: {
                        type: e.GUI.Ellipse,
                        properties: ["_thickness"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Image: {
                        type: e.GUI.Image,
                        properties: ["_imageWidth", "_imageHeight", "_loaded", "_source"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Line: {
                        type: e.GUI.Line,
                        properties: ["_lineWidth", "_background", "_x1", "_y1", "_x2", "_y2"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    RadioButton: {
                        type: e.GUI.RadioButton,
                        properties: ["_isChecked", "_background"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Rectangle: {
                        type: e.GUI.Rectangle,
                        properties: ["_thickness", "_cornerRadius"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Slider: {
                        type: e.GUI.Slider,
                        properties: ["_minimum", "_maximum", "_value", "_background", "_borderColor"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    StackPanel: {
                        type: e.GUI.StackPanel,
                        properties: ["_isVertical"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    TextBlock: {
                        type: e.GUI.TextBlock,
                        properties: ["_text", "_textWrapping"],
                        format: function(e) {
                            return e.name
                        }
                    },
                    Container: {
                        type: e.GUI.Container,
                        properties: ["_background"],
                        format: function(e) {
                            return e.name
                        }
                    }
                };
                for (var r in n)
                    t.PROPERTIES[r] = n[r]
            }
            t.loadGUIProperties = n
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function t() {
                    this._div = e.Helpers.CreateDiv()
                }
                return t.prototype.toHtml = function() {
                    return this._div
                }
                ,
                t.prototype._build = function() {}
                ,
                t.prototype.dispose = function() {}
                ,
                t
            }
            )();
            e.BasicElement = t
        }
        )(i || (i = {}));
        var i;
        !(function(t) {
            var n = (function() {
                function t(e) {
                    this._obj = e
                }
                return t.prototype.correspondsTo = function(e) {
                    return e === this._obj
                }
                ,
                Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return t._name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "object", {
                    get: function() {
                        return this._obj
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t._name = e.Geometry.RandomId(),
                t
            }
            )();
            t.Adapter = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    var t = [];
                    return t.push(new e.CameraPOV(this)),
                    t
                }
                ,
                n.prototype.setPOV = function() {
                    this._obj.getScene().switchActiveCamera(this._obj)
                }
                ,
                n.prototype.getCurrentActiveCamera = function() {
                    var e = this._obj.getScene().activeCamera;
                    return null != e ? e.name : "0"
                }
                ,
                n
            }
            )(e.Adapter);
            e.CameraAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    var r = t.call(this, e) || this;
                    return r._isVisible = !1,
                    r._viewer = n,
                    r
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = ""
                      , t = this._obj;
                    return t && t.object && (e = t.object.name || ""),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    var t = [];
                    return t.push(new e.Checkbox(this)),
                    t
                }
                ,
                n.prototype.setVisible = function(e) {
                    this._isVisible = e,
                    e ? this._viewer.showImpostor(this._obj) : this._viewer.hideImpostor(this._obj)
                }
                ,
                n.prototype.isVisible = function() {
                    return this._isVisible
                }
                ,
                n
            }
            )(e.Adapter);
            e.PhysicsImpostorAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    var t = [];
                    return t.push(new e.Checkbox(this)),
                    t
                }
                ,
                n.prototype.setVisible = function(e) {
                    this._obj.isVisible = e
                }
                ,
                n.prototype.isVisible = function() {
                    return this._obj.isVisible
                }
                ,
                n
            }
            )(e.Adapter);
            e.GUIAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    var t = [];
                    return t.push(new e.SoundInteractions(this)),
                    t
                }
                ,
                n.prototype.setPlaying = function(e) {
                    this._obj.isPlaying ? this._obj.pause() : this._obj.play(),
                    this._obj.onended = function() {
                        e()
                    }
                }
                ,
                n
            }
            )(e.Adapter);
            e.SoundAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return []
                }
                ,
                n.prototype.getTools = function() {
                    return new Array
                }
                ,
                n
            }
            )(e.Adapter);
            e.TextureAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    var t = [];
                    return t.push(new e.Checkbox(this)),
                    t
                }
                ,
                n.prototype.setVisible = function(e) {
                    this._obj.setEnabled(e)
                }
                ,
                n.prototype.isVisible = function() {
                    return this._obj.isEnabled()
                }
                ,
                n
            }
            )(e.Adapter);
            e.LightAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                n.prototype.type = function() {
                    return e.Helpers.GET_TYPE(this._obj)
                }
                ,
                n.prototype.getProperties = function() {
                    return e.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                n.prototype.getTools = function() {
                    return []
                }
                ,
                n
            }
            )(e.Adapter);
            e.MaterialAdapter = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e) {
                    return n.call(this, e) || this
                }
                return a(r, n),
                r.prototype.id = function() {
                    var e = "";
                    return this._obj.name && (e = this._obj.name),
                    e
                }
                ,
                r.prototype.type = function() {
                    return t.Helpers.GET_TYPE(this._obj)
                }
                ,
                r.prototype.getProperties = function() {
                    return t.Helpers.GetAllLinesProperties(this._obj)
                }
                ,
                r.prototype.getTools = function() {
                    var n = [];
                    return n.push(new t.Checkbox(this)),
                    n.push(new t.DebugArea(this)),
                    this._obj instanceof e.AbstractMesh && this._obj.getTotalVertices() > 0 && n.push(new t.BoundingBox(this)),
                    n.push(new t.Info(this)),
                    n
                }
                ,
                r.prototype.setVisible = function(e) {
                    this._obj.setEnabled(e),
                    this._obj.isVisible = e
                }
                ,
                r.prototype.isVisible = function() {
                    return this._obj.isEnabled() && (void 0 === this._obj.isVisible || this._obj.isVisible)
                }
                ,
                r.prototype.isBoxVisible = function() {
                    return this._obj.showBoundingBox
                }
                ,
                r.prototype.setBoxVisible = function(e) {
                    return this._obj.showBoundingBox = e
                }
                ,
                r.prototype.debug = function(e) {
                    if (this._axesViewer || this._drawAxis(),
                    !e && this._axesViewer) {
                        this._obj.getScene().onBeforeRenderObservable.remove(this.onBeforeRenderObserver),
                        this._axesViewer.dispose(),
                        this._axesViewer = null
                    }
                }
                ,
                r.prototype.getInfo = function() {
                    return this._obj instanceof e.AbstractMesh ? this._obj.getTotalVertices() + " vertices" : "0 vertices"
                }
                ,
                r.prototype._drawAxis = function() {
                    var t = this;
                    this._obj.computeWorldMatrix();
                    var n = new e.Vector3(1,0,0)
                      , r = new e.Vector3(0,1,0)
                      , i = new e.Vector3(0,0,1);
                    this._axesViewer = new e.Debug.AxesViewer(this._obj.getScene());
                    var o = this._obj;
                    this.onBeforeRenderObserver = o.getScene().onBeforeRenderObservable.add((function() {
                        var a = o.getWorldMatrix()
                          , s = new e.Vector3(1,1,1);
                        o instanceof e.AbstractMesh && (s = o.getBoundingInfo().boundingBox.extendSizeWorld),
                        t._axesViewer.scaleLines = 2 * Math.max(s.x, s.y, s.z),
                        t._axesViewer.update(t._obj.position, e.Vector3.TransformNormal(n, a), e.Vector3.TransformNormal(r, a), e.Vector3.TransformNormal(i, a))
                    }
                    ))
                }
                ,
                r
            }
            )(t.Adapter);
            t.MeshAdapter = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    var n = t.call(this) || this;
                    return n._detailRows = [],
                    n._sortDirection = {},
                    n._build(),
                    e && (n._detailRows = e,
                    n.update()),
                    n
                }
                return a(n, t),
                Object.defineProperty(n.prototype, "details", {
                    set: function(t) {
                        this.clean(),
                        this._addSearchBarDetails(),
                        this._details = e.Helpers.CreateDiv("details", this._div),
                        this._detailRows = t,
                        this.update()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype._build = function() {
                    this._div.className = "insp-details",
                    this._div.id = "insp-details",
                    this._createHeaderRow(),
                    this._div.appendChild(this._headerRow)
                }
                ,
                n.prototype.update = function(e) {
                    this._sortDetails("name", 1),
                    e ? (this.cleanRow(),
                    this._addSearchDetails(e)) : this._addDetails()
                }
                ,
                n.prototype._addSearchBarDetails = function() {
                    var t = e.Helpers.CreateDiv("searchbar-details", this._div);
                    this._searchDetails = new e.SearchBarDetails(this),
                    t.appendChild(this._searchDetails.toHtml()),
                    this._div.appendChild(t)
                }
                ,
                n.prototype.searchByName = function(e) {
                    for (var t = [], n = 0, r = this._detailRows; n < r.length; n++) {
                        var i = r[n];
                        i.name.indexOf(e) >= 0 && t.push(i)
                    }
                    this.update(t)
                }
                ,
                n.prototype._addDetails = function() {
                    for (var e = 0, t = this._detailRows; e < t.length; e++) {
                        var n = t[e];
                        this._details.appendChild(n.toHtml())
                    }
                }
                ,
                n.prototype._addSearchDetails = function(e) {
                    for (var t = 0, n = e; t < n.length; t++) {
                        var r = n[t];
                        this._details.appendChild(r.toHtml())
                    }
                }
                ,
                n.prototype._sortDetails = function(t, n) {
                    for (var r = e.Inspector.DOCUMENT.querySelectorAll(".sort-direction"), i = 0; i < r.length; i++)
                        r[i].classList.remove("fa-chevron-up"),
                        r[i].classList.remove("fa-chevron-down");
                    n || !this._sortDirection[t] ? this._sortDirection[t] = n || 1 : this._sortDirection[t] *= -1;
                    var o = this._sortDirection[t]
                      , a = this._headerRow.querySelector("#sort-direction-" + t);
                    a && (1 == o ? (a.classList.remove("fa-chevron-down"),
                    a.classList.add("fa-chevron-up")) : (a.classList.remove("fa-chevron-up"),
                    a.classList.add("fa-chevron-down")));
                    var s = function(e) {
                        return "string" == typeof e || e instanceof String
                    };
                    this._detailRows.forEach((function(e) {
                        e.closeDetails()
                    }
                    )),
                    this._detailRows.sort((function(e, n) {
                        var r = String(e[t])
                          , i = String(n[t]);
                        return s(r) || (r = e[t].toString()),
                        s(i) || (i = n[t].toString()),
                        r.localeCompare(i, [], {
                            numeric: !0
                        }) * o
                    }
                    ))
                }
                ,
                n.prototype.clean = function() {
                    for (var t = 0, n = this._detailRows; t < n.length; t++) {
                        n[t].dispose()
                    }
                    e.Helpers.CleanDiv(this._div),
                    this._div.appendChild(this._headerRow)
                }
                ,
                n.prototype.cleanRow = function() {
                    for (var t = 0, n = this._detailRows; t < n.length; t++) {
                        n[t].dispose()
                    }
                    e.Helpers.CleanDiv(this._details)
                }
                ,
                n.prototype.dispose = function() {
                    for (var e = 0, t = this._detailRows; e < t.length; e++) {
                        t[e].dispose()
                    }
                }
                ,
                n.prototype._createHeaderRow = function() {
                    var t = this;
                    this._headerRow = e.Helpers.CreateDiv("header-row");
                    var n = function(n, r) {
                        var i = e.Helpers.CreateDiv(r + " header-col")
                          , o = e.Inspector.DOCUMENT.createElement("span");
                        o.textContent = n.charAt(0).toUpperCase() + n.slice(1);
                        var a = e.Inspector.DOCUMENT.createElement("i");
                        return a.className = "sort-direction fa",
                        a.id = "sort-direction-" + n,
                        i.appendChild(o),
                        i.appendChild(a),
                        i.addEventListener("click", (function(e) {
                            t._sortDetails(n),
                            t._addDetails()
                        }
                        )),
                        i
                    };
                    this._headerRow.appendChild(n("name", "prop-name")),
                    this._headerRow.appendChild(n("value", "prop-value"))
                }
                ,
                n
            }
            )(e.BasicElement);
            e.DetailPanel = t
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function t(e, t) {
                    this._property = e,
                    this._obj = t
                }
                return Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return this._property
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "value", {
                    get: function() {
                        return this._obj[this._property]
                    },
                    set: function(e) {
                        this._obj[this._property] = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "type", {
                    get: function() {
                        return e.Helpers.GET_TYPE(this.value)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "obj", {
                    get: function() {
                        return this._obj
                    },
                    set: function(e) {
                        this._obj = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }
            )();
            e.Property = t
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function e() {}
                return e.format = function(e, t) {
                    return e[t]
                }
                ,
                e
            }
            )();
            e.PropertyFormatter = t;
            var n = (function() {
                function n(t, n, r) {
                    void 0 === n && (n = null),
                    void 0 === r && (r = 0),
                    this._children = [],
                    this._elements = [],
                    this._property = t,
                    this._level = r,
                    this._parent = n,
                    this._div = e.Helpers.CreateDiv("row"),
                    this._div.style.marginLeft = this._level + "px",
                    e.Helpers.CreateDiv("prop-name", this._div).textContent = "" + this.name,
                    this._valueDiv = e.Helpers.CreateDiv("prop-value", this._div),
                    "boolean" == typeof this.value || this._isSliderType() || (this._valueDiv.textContent = this._displayValueContent() || "-"),
                    this._createElements();
                    for (var i = 0, o = this._elements; i < o.length; i++) {
                        var a = o[i];
                        this._valueDiv.appendChild(a.toHtml())
                    }
                    this._updateValue(),
                    "boolean" == typeof this.value ? this._checkboxInput() : this._isSliderType() ? this._rangeInput() : this._isSimple() ? (this._initInput(),
                    this._valueDiv.addEventListener("click", this._displayInputHandler),
                    this._input.addEventListener("focusout", this._focusOutInputHandler),
                    this._input.addEventListener("keydown", this._validateInputHandler),
                    this._input.addEventListener("keydown", this._escapeInputHandler)) : (this._valueDiv.classList.add("clickable"),
                    this._valueDiv.addEventListener("click", this._addDetails.bind(this))),
                    e.Scheduler.getInstance().add(this)
                }
                return n.prototype._initInput = function() {
                    this._input = document.createElement("input"),
                    this._input.setAttribute("type", "text"),
                    this._displayInputHandler = this._displayInput.bind(this),
                    this._validateInputHandler = this._validateInput.bind(this),
                    this._escapeInputHandler = this._escapeInput.bind(this),
                    this._focusOutInputHandler = this.update.bind(this),
                    this._onMouseDownHandler = this._onMouseDown.bind(this),
                    this._onMouseDragHandler = this._onMouseDrag.bind(this),
                    this._onMouseUpHandler = this._onMouseUp.bind(this)
                }
                ,
                n.prototype._validateInput = function(e) {
                    this._input.removeEventListener("focusout", this._focusOutInputHandler),
                    13 == e.keyCode ? this.validateInput(this._input.value) : 9 == e.keyCode ? (e.preventDefault(),
                    this.validateInput(this._input.value)) : 27 == e.keyCode && this.update()
                }
                ,
                n.prototype.validateInput = function(t, n) {
                    void 0 === n && (n = !0),
                    this.updateObject(),
                    "number" == typeof this._property.value ? this._property.value = parseFloat(t) : this._property.value = t,
                    n && (this.update(),
                    e.Scheduler.getInstance().pause = !1)
                }
                ,
                n.prototype._escapeInput = function(e) {
                    this._input.removeEventListener("focusout", this._focusOutInputHandler),
                    27 == e.keyCode && this.update()
                }
                ,
                n.prototype._removeInputWithoutValidating = function() {
                    e.Helpers.CleanDiv(this._valueDiv),
                    "boolean" == typeof this.value || this._isSliderType() || (this._valueDiv.textContent = "-");
                    for (var t = 0, n = this._elements; t < n.length; t++) {
                        var r = n[t];
                        this._valueDiv.appendChild(r.toHtml())
                    }
                    "boolean" == typeof this.value || this._isSliderType() || this._valueDiv.addEventListener("click", this._displayInputHandler)
                }
                ,
                n.prototype._displayInput = function(t) {
                    this._valueDiv.removeEventListener("click", this._displayInputHandler);
                    var n = this._valueDiv.textContent;
                    this._valueDiv.textContent = "",
                    this._input.value = n || "",
                    this._valueDiv.appendChild(this._input),
                    this._input.focus(),
                    "boolean" == typeof this.value || this._isSliderType() ? "number" == typeof this.value && this._input.addEventListener("mousedown", this._onMouseDownHandler) : this._input.addEventListener("focusout", this._focusOutInputHandler),
                    e.Scheduler.getInstance().pause = !0
                }
                ,
                n.prototype.updateObject = function() {
                    return this._parent && (this._property.obj = this._parent.updateObject()),
                    this._property.value
                }
                ,
                Object.defineProperty(n.prototype, "name", {
                    get: function() {
                        return this._property.name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "value", {
                    get: function() {
                        return t.format(this._property.obj, this._property.name)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(n.prototype, "type", {
                    get: function() {
                        return this._property.type
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                n.prototype._createElements = function() {
                    "Color3" != this.type && "Color4" != this.type || e.Helpers.IsBrowserIE() || this._elements.push(new e.ColorPickerElement(this.value,this)),
                    "Texture" == this.type && this._elements.push(new e.TextureElement(this.value)),
                    "HDRCubeTexture" == this.type && this._elements.push(new e.HDRCubeTextureElement(this.value)),
                    "CubeTexture" == this.type && this._elements.push(new e.CubeTextureElement(this.value))
                }
                ,
                n.prototype._displayValueContent = function() {
                    var t = this.value;
                    return "number" == typeof t ? e.Helpers.Trunc(t) : "string" == typeof t || "boolean" == typeof t ? t : e.PROPERTIES.format(t)
                }
                ,
                n.prototype.dispose = function() {
                    e.Scheduler.getInstance().remove(this);
                    for (var t = 0, n = this._children; t < n.length; t++) {
                        var r = n[t];
                        e.Scheduler.getInstance().remove(r)
                    }
                    for (var i = 0, o = this._elements; i < o.length; i++) {
                        o[i].dispose()
                    }
                    this._elements = []
                }
                ,
                n.prototype._updateValue = function() {
                    if (this.updateObject(),
                    "boolean" == typeof this.value)
                        this._checkboxInput();
                    else if (this._isSliderType())
                        this._rangeInput();
                    else if (this._valueDiv.childNodes[0].nodeValue = this._displayValueContent(),
                    "Color3" == this._property.type && 5 == this._children.length && 1 == this._children[1].value || "Color4" == this._property.type && 6 == this._children.length && 1 == this._children[1].value) {
                        if (void 0 != this._children[0] && "hex" == this._children[0].name) {
                            var e = this._children[0].value
                              , t = parseInt(e.slice(1, 3), 16) * (1 / 255)
                              , n = Math.round(100 * t) / 100;
                            this.value.r = n;
                            var r = parseInt(e.slice(3, 5), 16) * (1 / 255)
                              , i = Math.round(100 * r) / 100;
                            this.value.g = i;
                            var o = parseInt(e.slice(5, 7), 16) * (1 / 255)
                              , a = Math.round(100 * o) / 100;
                            if (this.value.b = a,
                            "a" == this._children[2].name) {
                                var s = parseInt(e.slice(7, 9), 16) * (1 / 255)
                                  , p = Math.round(100 * s) / 100;
                                this.value.a = p
                            }
                        }
                    } else if (("Color3" == this._property.type || "Color4" == this._property.type) && void 0 != this._property.value.hex && null != this._property.value.hex) {
                        var l = []
                          , c = (255 * this._property.value.r | 0).toString(16);
                        l.push(c),
                        "0" == c && l.push("0");
                        var u = (255 * this._property.value.g | 0).toString(16);
                        l.push(u),
                        "0" == u && l.push("0");
                        var h = (255 * this._property.value.b | 0).toString(16);
                        if (l.push(h),
                        "0" == h && l.push("0"),
                        void 0 != this._property.value.a) {
                            var d = (255 * this._property.value.a | 0).toString(16);
                            l.push(d),
                            "0" == d && l.push("0")
                        }
                        l.unshift("#");
                        var e = l.join("");
                        this._property.value.hex = e,
                        l.length = 0
                    }
                    for (var _ = 0, f = this._elements; _ < f.length; _++) {
                        f[_].update(this.value)
                    }
                }
                ,
                n.prototype.update = function() {
                    this._removeInputWithoutValidating(),
                    this._updateValue()
                }
                ,
                n.prototype._isSimple = function() {
                    return null == this.value || "type_not_defined" === this.type || -1 != n._SIMPLE_TYPE.indexOf(this.type)
                }
                ,
                n.prototype.toHtml = function() {
                    return this._div
                }
                ,
                n.prototype.closeDetails = function() {
                    if (this._div.classList.contains("unfolded") && (this._div.classList.remove("unfolded"),
                    this._div.parentNode))
                        for (var e = 0, t = this._children; e < t.length; e++) {
                            var n = t[e];
                            this._div.parentNode.removeChild(n.toHtml())
                        }
                }
                ,
                n.prototype._addDetails = function() {
                    if (this._div.classList.contains("unfolded")) {
                        if (this._div.classList.remove("unfolded"),
                        this._div.parentNode)
                            for (var t = 0, r = this._children; t < r.length; t++) {
                                var i = r[t];
                                this._div.parentNode.removeChild(i.toHtml())
                            }
                    } else {
                        if (this._div.classList.toggle("unfolded"),
                        0 == this._children.length) {
                            var o = this.value
                              , a = e.Helpers.GetAllLinesPropertiesAsString(o);
                            0 == (a.indexOf("r") && a.indexOf("g") && a.indexOf("b")) ? a.sort() : a.sort().reverse();
                            for (var s = 0, p = a; s < p.length; s++) {
                                var l = p[s]
                                  , c = new e.Property(l,this._property.value)
                                  , i = new n(c,this,this._level + n._MARGIN_LEFT);
                                this._children.push(i)
                            }
                            if (0 == (a.indexOf("r") && a.indexOf("g") && a.indexOf("b") && a.indexOf("a"))) {
                                var u = []
                                  , h = new e.Property("hexEnable",this._property.value);
                                h.value = !1;
                                var d = new n(h,this,this._level + n._MARGIN_LEFT);
                                this._children.unshift(d);
                                for (var _ = 0, f = a; _ < f.length; _++) {
                                    var l = f[_]
                                      , c = new e.Property(l,this._property.value)
                                      , v = (255 * c.value | 0).toString(16);
                                    u.push(v),
                                    "0" == v && u.push("0")
                                }
                                u.push("#"),
                                u.reverse();
                                var b = u.join("")
                                  , m = new e.Property("hex",this._property.value);
                                m.value = b;
                                var y = new n(m,this,this._level + n._MARGIN_LEFT);
                                this._children.unshift(y)
                            }
                        }
                        if (this._div.parentNode)
                            for (var g = 0, w = this._children; g < w.length; g++) {
                                var i = w[g];
                                this._div.parentNode.insertBefore(i.toHtml(), this._div.nextSibling)
                            }
                    }
                }
                ,
                n.prototype._onMouseDrag = function(e) {
                    var t = this._prevY - e.clientY;
                    this._input.value = (this._preValue + t).toString()
                }
                ,
                n.prototype._onMouseUp = function(e) {
                    window.removeEventListener("mousemove", this._onMouseDragHandler),
                    window.removeEventListener("mouseup", this._onMouseUpHandler),
                    this._prevY = e.clientY
                }
                ,
                n.prototype._onMouseDown = function(e) {
                    this._prevY = e.clientY,
                    this._preValue = this.value,
                    window.addEventListener("mousemove", this._onMouseDragHandler),
                    window.addEventListener("mouseup", this._onMouseUpHandler)
                }
                ,
                n.prototype._checkboxInput = function() {
                    var t = this;
                    this._valueDiv.childElementCount < 1 && (this._input = e.Helpers.CreateInput("checkbox-element", this._valueDiv),
                    this._input.type = "checkbox",
                    this._input.checked = this.value,
                    this._input.addEventListener("change", (function() {
                        e.Scheduler.getInstance().pause = !0,
                        t.validateInput(!t.value)
                    }
                    )))
                }
                ,
                n.prototype._rangeInput = function() {
                    this._valueDiv.childElementCount < 1 && (this._input = e.Helpers.CreateInput("slider-element", this._valueDiv),
                    this._input.type = "range",
                    this._input.style.display = "inline-block",
                    this._input.min = this._getSliderProperty().min,
                    this._input.max = this._getSliderProperty().max,
                    this._input.step = this._getSliderProperty().step,
                    this._input.value = this.value,
                    this._validateInputHandler = this._rangeHandler.bind(this),
                    this._input.addEventListener("input", this._validateInputHandler),
                    this._input.addEventListener("change", (function() {
                        e.Scheduler.getInstance().pause = !1
                    }
                    )),
                    this._textValue = e.Helpers.CreateDiv("value-text", this._valueDiv),
                    this._textValue.innerText = e.Helpers.Trunc(this.value).toString(),
                    this._textValue.style.paddingLeft = "10px",
                    this._textValue.style.display = "inline-block")
                }
                ,
                n.prototype._rangeHandler = function() {
                    e.Scheduler.getInstance().pause = !0,
                    this._textValue.innerText = this._input.value,
                    this.validateInput(this._input.value, !1)
                }
                ,
                n.prototype._isSliderType = function() {
                    return this._property && e.PROPERTIES.hasOwnProperty(this._property.obj.constructor.name) && e.PROPERTIES[this._property.obj.constructor.name].hasOwnProperty("slider") && e.PROPERTIES[this._property.obj.constructor.name].slider.hasOwnProperty(this.name)
                }
                ,
                n.prototype._getSliderProperty = function() {
                    return e.PROPERTIES[this._property.obj.constructor.name].slider[this.name]
                }
                ,
                n._SIMPLE_TYPE = ["number", "string", "boolean"],
                n._MARGIN_LEFT = 15,
                n
            }
            )();
            e.PropertyLine = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(t) {
                function n(e) {
                    var n = t.call(this) || this;
                    return n._div.className = "color-element",
                    n._div.style.backgroundColor = n._toRgba(e),
                    n
                }
                return a(n, t),
                n.prototype.update = function(e) {
                    e && (this._div.style.backgroundColor = this._toRgba(e))
                }
                ,
                n.prototype._toRgba = function(t) {
                    if (t) {
                        var n = 255 * t.r | 0
                          , r = 255 * t.g | 0
                          , i = 255 * t.b | 0
                          , o = 1;
                        return t instanceof e.Color4 && (o = t.a),
                        "rgba(" + n + ", " + r + ", " + i + ", " + o + ")"
                    }
                    return ""
                }
                ,
                n
            }
            )(t.BasicElement);
            t.ColorElement = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(r, i) {
                    var o = n.call(this) || this
                      , a = t.Scheduler.getInstance();
                    return o._div.className = "color-element",
                    o._div.style.backgroundColor = o._toRgba(r),
                    o.pline = i,
                    o._input = t.Helpers.CreateInput(),
                    o._input.type = "color",
                    o._input.style.opacity = "0",
                    o._input.style.width = "10px",
                    o._input.style.height = "15px",
                    o._input.value = r.toHexString(),
                    o._input.addEventListener("input", (function(t) {
                        var n = e.Color3.FromHexString(o._input.value);
                        n.r = parseFloat(n.r.toPrecision(2)),
                        n.g = parseFloat(n.g.toPrecision(2)),
                        n.b = parseFloat(n.b.toPrecision(2)),
                        o.pline.validateInput(n),
                        a.pause = !1
                    }
                    )),
                    o._div.appendChild(o._input),
                    o._input.addEventListener("click", (function(e) {
                        a.pause = !0
                    }
                    )),
                    o
                }
                return a(r, n),
                r.prototype.update = function(e) {
                    e && (this._div.style.backgroundColor = this._toRgba(e),
                    this._input.value = e.toHexString())
                }
                ,
                r.prototype._toRgba = function(t) {
                    if (t) {
                        var n = 255 * t.r | 0
                          , r = 255 * t.g | 0
                          , i = 255 * t.b | 0
                          , o = 1;
                        return t instanceof e.Color4 && (o = t.a),
                        "rgba(" + n + ", " + r + ", " + i + ", " + o + ")"
                    }
                    return ""
                }
                ,
                r
            }
            )(t.BasicElement);
            t.ColorPickerElement = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e) {
                    var r = n.call(this) || this;
                    return r._pause = !1,
                    r._div.className = "fa fa-search texture-element",
                    r._textureDiv = t.Helpers.CreateDiv("texture-viewer", r._div),
                    r._canvas = t.Helpers.CreateElement("canvas", "texture-viewer-img", r._textureDiv),
                    e && (r._textureUrl = e.name),
                    r._div.addEventListener("mouseover", r._showViewer.bind(r, "flex")),
                    r._div.addEventListener("mouseout", r._showViewer.bind(r, "none")),
                    r
                }
                return a(r, n),
                r.prototype.update = function(e) {
                    e && e.url === this._textureUrl || (e && (this._textureUrl = e.name),
                    this._engine ? (this._cube.material && this._cube.material.dispose(!0, !0),
                    this._cube.dispose()) : this._initEngine(),
                    this._populateScene())
                }
                ,
                r.prototype._populateScene = function() {
                    var t = this
                      , n = new e.CubeTexture(this._textureUrl,this._scene);
                    n.coordinatesMode = e.Texture.SKYBOX_MODE,
                    this._cube = e.Mesh.CreateBox("hdrSkyBox", 10, this._scene);
                    var r = new e.StandardMaterial("skyBox",this._scene);
                    r.backFaceCulling = !1,
                    r.reflectionTexture = n,
                    r.reflectionTexture.coordinatesMode = e.Texture.SKYBOX_MODE,
                    r.disableLighting = !0,
                    this._cube.material = r,
                    this._cube.registerBeforeRender((function() {
                        t._cube.rotation.y += .01
                    }
                    ))
                }
                ,
                r.prototype._initEngine = function() {
                    var t = this;
                    this._engine = new e.Engine(this._canvas),
                    this._scene = new e.Scene(this._engine),
                    this._scene.clearColor = new e.Color4(0,0,0,0),
                    this._engine.runRenderLoop((function() {
                        t._pause || t._scene.render()
                    }
                    )),
                    this._canvas.setAttribute("width", "110"),
                    this._canvas.setAttribute("height", "110")
                }
                ,
                r.prototype._showViewer = function(e) {
                    "none" != e ? (this._engine || (this._initEngine(),
                    this._populateScene()),
                    this._pause = !1) : this._pause = !0,
                    this._textureDiv.style.display = e
                }
                ,
                r.prototype.dispose = function() {
                    this._engine && (this._engine.dispose(),
                    this._engine = null)
                }
                ,
                r
            }
            )(t.BasicElement);
            t.CubeTextureElement = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(t) {
                function n(e) {
                    return t.call(this, e) || this
                }
                return a(n, t),
                n.prototype._populateScene = function() {
                    var t = this
                      , n = new e.HDRCubeTexture(this._textureUrl,this._scene,512);
                    n.coordinatesMode = e.Texture.SKYBOX_MODE,
                    this._cube = e.Mesh.CreateBox("hdrSkyBox", 10, this._scene);
                    var r = new e.PBRMaterial("skyBox",this._scene);
                    r.backFaceCulling = !1,
                    r.reflectionTexture = n,
                    r.microSurface = 1,
                    r.disableLighting = !0,
                    this._cube.material = r,
                    this._cube.registerBeforeRender((function() {
                        t._cube.rotation.y += .01
                    }
                    ))
                }
                ,
                n
            }
            )(t.CubeTextureElement);
            t.HDRCubeTextureElement = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(n) {
                    var r = t.call(this) || this;
                    r._propTab = n,
                    r._div.classList.add("searchbar");
                    var i = e.Inspector.DOCUMENT.createElement("i");
                    return i.className = "fa fa-search",
                    r._div.appendChild(i),
                    r._inputElement = e.Inspector.DOCUMENT.createElement("input"),
                    r._inputElement.placeholder = "Filter by name...",
                    r._div.appendChild(r._inputElement),
                    r._inputElement.addEventListener("keyup", (function(e) {
                        var t = r._inputElement.value;
                        r._propTab.filter(t)
                    }
                    )),
                    r
                }
                return a(n, t),
                n.prototype.reset = function() {
                    this._inputElement.value = ""
                }
                ,
                n.prototype.update = function() {}
                ,
                n
            }
            )(e.BasicElement);
            e.SearchBar = t;
            var n = (function(t) {
                function n(n) {
                    var r = t.call(this) || this;
                    r._detailTab = n,
                    r._div.classList.add("searchbar");
                    var i = e.Inspector.DOCUMENT.createElement("i");
                    return i.className = "fa fa-search",
                    r._div.appendChild(i),
                    r._inputElement = e.Inspector.DOCUMENT.createElement("input"),
                    r._inputElement.placeholder = "Filter by name...",
                    r._div.appendChild(r._inputElement),
                    r._inputElement.addEventListener("keyup", (function(e) {
                        var t = r._inputElement.value;
                        r._detailTab.searchByName(t)
                    }
                    )),
                    r
                }
                return a(n, t),
                n.prototype.reset = function() {
                    this._inputElement.value = ""
                }
                ,
                n.prototype.update = function() {}
                ,
                n
            }
            )(e.BasicElement);
            e.SearchBarDetails = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(n) {
                    var r = t.call(this) || this;
                    r._div.className = "fa fa-search texture-element",
                    r._textureDiv = e.Helpers.CreateDiv("texture-viewer", r._div);
                    var i = e.Helpers.CreateDiv("texture-viewer-img", r._textureDiv)
                      , o = e.Helpers.CreateDiv(null, r._textureDiv);
                    return n && (o.textContent = n.getBaseSize().width + "px x " + n.getBaseSize().height + "px",
                    i.style.backgroundImage = "url('" + n.url + "')",
                    i.style.width = n.getBaseSize().width + "px",
                    i.style.height = n.getBaseSize().height + "px"),
                    r._div.addEventListener("mouseover", r._showViewer.bind(r, "flex")),
                    r._div.addEventListener("mouseout", r._showViewer.bind(r, "none")),
                    r
                }
                return a(n, t),
                n.prototype.update = function(e) {}
                ,
                n.prototype._showViewer = function(e) {
                    this._textureDiv.style.display = e
                }
                ,
                n
            }
            )(e.BasicElement);
            e.TextureElement = t
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function t(t, n, r) {
                    void 0 === r && (r = null);
                    var i = this;
                    this._elem = t,
                    r || (r = this._elem.parentElement),
                    this._infoDiv = e.Helpers.CreateDiv("tooltip", r),
                    this._elem.addEventListener("mouseover", (function() {
                        i._infoDiv.textContent = n,
                        i._infoDiv.style.display = "block"
                    }
                    )),
                    this._elem.addEventListener("mouseout", (function() {
                        i._infoDiv.style.display = "none"
                    }
                    ))
                }
                return t
            }
            )();
            e.Tooltip = t
        }
        )(i || (i = {}));
        var i;
        !(function(t) {
            var n = (function() {
                function n() {}
                return n.GET_TYPE = function(t) {
                    if ("boolean" == typeof t)
                        return "boolean";
                    if (null != t && void 0 != t) {
                        var n = e.Tools.GetClassName(t);
                        return n && "object" !== n || (n = t.constructor.name) || (n = this._GetFnName(t.constructor)),
                        this._CheckIfTypeExists(n) ? n : this._GetTypeFor(t)
                    }
                    return "type_not_defined"
                }
                ,
                n._CheckIfTypeExists = function(e) {
                    return !!t.PROPERTIES[e]
                }
                ,
                n.IsBrowserEdge = function() {
                    return /Edge/.test(navigator.userAgent)
                }
                ,
                n.IsBrowserIE = function() {
                    return /Trident.*rv\:11\./.test(navigator.userAgent)
                }
                ,
                n._GetTypeFor = function(e) {
                    for (var n in t.PROPERTIES) {
                        var r = t.PROPERTIES[n];
                        if (r.type && e instanceof r.type)
                            return n
                    }
                    return "type_not_defined"
                }
                ,
                n._GetFnName = function(e) {
                    var t = "function" == typeof e
                      , n = t && (e.name && ["", e.name] || e.toString().match(/function ([^\(]+)/));
                    return !t && "not a function" || n && n[1] || "anonymous"
                }
                ,
                n.SEND_EVENT = function(e) {
                    var n;
                    t.Inspector.DOCUMENT.createEvent ? (n = t.Inspector.DOCUMENT.createEvent("HTMLEvents"),
                    n.initEvent(e, !0, !0)) : n = new Event(e),
                    window.dispatchEvent(n)
                }
                ,
                n.Trunc = function(e) {
                    return "number" != typeof e ? 0 : Math.round(e) !== e ? e.toFixed(2) : e
                }
                ,
                n.CreateDiv = function(e, t) {
                    return void 0 === e && (e = null),
                    n.CreateElement("div", e, t)
                }
                ,
                n.CreateInput = function(e, t) {
                    return n.CreateElement("input", e, t)
                }
                ,
                n.CreateElement = function(e, n, r) {
                    void 0 === n && (n = null);
                    var i = t.Inspector.DOCUMENT.createElement(e);
                    return n && (i.className = n),
                    r && r.appendChild(i),
                    i
                }
                ,
                n.CleanDiv = function(e) {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild)
                }
                ,
                n.Css = function(e, r) {
                    var i = e.cloneNode(!0)
                      , o = n.CreateDiv("", t.Inspector.DOCUMENT.body);
                    o.style.display = "none",
                    o.appendChild(i);
                    var a = t.Inspector.WINDOW.getComputedStyle(i)[r];
                    return o.parentNode && o.parentNode.removeChild(o),
                    a
                }
                ,
                n.LoadScript = function() {
                    e.Tools.LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js", (function(r) {
                        n.CreateElement("script", "", t.Inspector.DOCUMENT.body).textContent = r,
                        e.Tools.LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/languages/glsl.min.js", (function(r) {
                            n.CreateElement("script", "", t.Inspector.DOCUMENT.body).textContent = r,
                            e.Tools.LoadFile("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/zenburn.min.css", (function(e) {
                                n.CreateElement("style", "", t.Inspector.DOCUMENT.body).textContent = e
                            }
                            ))
                        }
                        ), void 0, void 0, void 0, (function() {
                            console.log("erreur")
                        }
                        ))
                    }
                    ), void 0, void 0, void 0, (function() {
                        console.log("erreur")
                    }
                    ))
                }
                ,
                n.IsSystemName = function(e) {
                    return null != e && (0 === e.indexOf("###") && e.lastIndexOf("###") === e.length - 3)
                }
                ,
                n.GetAllLinesProperties = function(e) {
                    for (var r = [], i = n.GetAllLinesPropertiesAsString(e), o = 0, a = i; o < a.length; o++) {
                        var s = a[o]
                          , p = new t.Property(s,e);
                        r.push(new t.PropertyLine(p))
                    }
                    return r
                }
                ,
                n.GetAllLinesPropertiesAsString = function(e, t) {
                    void 0 === t && (t = []);
                    var n = [];
                    for (var r in e)
                        -1 === t.indexOf(r) && "_" !== r.substring(0, 1) && "function" != typeof e[r] && n.push(r);
                    return n
                }
                ,
                n.Capitalize = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                ,
                n
            }
            )();
            t.Helpers = n
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function e() {
                    this.pause = !1,
                    this._updatableProperties = [],
                    this.interval = setInterval(this._update.bind(this), e.REFRESH_TIME)
                }
                return e.getInstance = function() {
                    return e._instance || (e._instance = new e),
                    e._instance
                }
                ,
                e.prototype.add = function(e) {
                    this._updatableProperties.push(e)
                }
                ,
                e.prototype.remove = function(e) {
                    var t = this._updatableProperties.indexOf(e);
                    -1 != t && this._updatableProperties.splice(t, 1)
                }
                ,
                e.prototype._update = function() {
                    if (!this.pause)
                        for (var e = 0, t = this._updatableProperties; e < t.length; e++) {
                            var n = t[e];
                            n.update()
                        }
                }
                ,
                e.prototype.dispose = function() {
                    window.clearInterval(this.interval)
                }
                ,
                e.REFRESH_TIME = 250,
                e
            }
            )();
            e.Scheduler = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    var r = t.call(this) || this;
                    return r._isActive = !1,
                    r._tabbar = e,
                    r.name = n,
                    r._build(),
                    r
                }
                return a(n, t),
                n.prototype.isActive = function() {
                    return this._isActive
                }
                ,
                n.prototype._build = function() {
                    var e = this;
                    this._div.className = "tab",
                    this._div.textContent = this.name,
                    this._div.addEventListener("click", (function(t) {
                        e._tabbar.switchTab(e)
                    }
                    ))
                }
                ,
                n.prototype.active = function(e) {
                    e ? this._div.classList.add("active") : this._div.classList.remove("active"),
                    this._isActive = e
                }
                ,
                n.prototype.update = function() {}
                ,
                n.prototype.getPanel = function() {
                    return this._panel
                }
                ,
                n.prototype.filter = function(e) {}
                ,
                n.prototype.select = function(e) {}
                ,
                n.prototype.getPixelWidth = function() {
                    var t = e.Inspector.WINDOW.getComputedStyle(this._div);
                    if (!t.marginLeft || !t.marginRight)
                        return 0;
                    var n = parseFloat(t.marginLeft.substr(0, t.marginLeft.length - 2)) || 0
                      , r = parseFloat(t.marginRight.substr(0, t.marginRight.length - 2)) || 0;
                    return (this._div.clientWidth || 0) + n + r
                }
                ,
                n
            }
            )(e.BasicElement);
            e.Tab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(n, r, i) {
                    var a = t.call(this, n, r) || this;
                    return a._treeItems = [],
                    a._inspector = i,
                    a._panel = e.Helpers.CreateDiv("tab-panel"),
                    a._panel.classList.add("searchable"),
                    a._searchBar = new e.SearchBar(a),
                    a._panel.appendChild(a._searchBar.toHtml()),
                    a._treePanel = e.Helpers.CreateDiv("insp-tree", a._panel),
                    a._detailsPanel = new e.DetailPanel,
                    a._panel.appendChild(a._detailsPanel.toHtml()),
                    o([a._treePanel, a._detailsPanel.toHtml()], {
                        blockDrag: a._inspector.popupMode,
                        direction: "vertical"
                    }),
                    a.update(),
                    a
                }
                return a(n, t),
                n.prototype.dispose = function() {
                    this._detailsPanel.dispose()
                }
                ,
                n.prototype.update = function(t) {
                    var n;
                    t ? n = t : (this._treeItems = this._getTree(),
                    n = this._treeItems),
                    e.Helpers.CleanDiv(this._treePanel),
                    this._detailsPanel.clean(),
                    n.sort((function(e, t) {
                        return e.compareTo(t)
                    }
                    ));
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        this._treePanel.appendChild(o.toHtml())
                    }
                }
                ,
                n.prototype.displayDetails = function(e) {
                    this.activateNode(e),
                    this._detailsPanel.details = e.getDetails()
                }
                ,
                n.prototype.select = function(e) {
                    this.activateNode(e),
                    this.displayDetails(e)
                }
                ,
                n.prototype.activateNode = function(e) {
                    if (this._treeItems)
                        for (var t = 0, n = this._treeItems; t < n.length; t++) {
                            var r = n[t];
                            r.active(!1)
                        }
                    e.active(!0)
                }
                ,
                n.prototype.getItemFor = function(e) {
                    for (var t = e, n = function(e, r) {
                        if (r.correspondsTo(e))
                            return r;
                        if (!(r.children.length > 0))
                            return null;
                        for (var i = 0, o = r.children; i < o.length; i++) {
                            var a = o[i]
                              , s = n(t, a);
                            if (s)
                                return s
                        }
                        return null
                    }, r = 0, i = this._treeItems; r < i.length; r++) {
                        var o = i[r]
                          , a = n(t, o);
                        if (a)
                            return a
                    }
                    return null
                }
                ,
                n.prototype.filter = function(e) {
                    for (var t = [], n = 0, r = this._treeItems; n < r.length; n++) {
                        var i = r[n];
                        -1 != i.id.toLowerCase().indexOf(e.toLowerCase()) && t.push(i);
                        for (var o = 0, a = i.children; o < a.length; o++) {
                            -1 != a[o].id.toLowerCase().indexOf(e.toLowerCase()) && t.push(i)
                        }
                    }
                    this.update(t)
                }
                ,
                n
            }
            )(e.Tab);
            e.PropertyTab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    return t.call(this, e, "Camera", n) || this
                }
                return a(n, t),
                n.prototype._getTree = function() {
                    for (var t = [], n = this._inspector.scene, r = 0, i = n.cameras; r < i.length; r++) {
                        var o = i[r];
                        t.push(new e.TreeItem(this,new e.CameraAdapter(o)))
                    }
                    return t
                }
                ,
                n
            }
            )(e.PropertyTab);
            e.CameraTab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, t) {
                    return n.call(this, e, "GUI", t) || this
                }
                return a(r, n),
                r.prototype._getTree = function() {
                    for (var n = this, r = [], i = function(e) {
                        var r = e.children;
                        if (r && r.length > 0) {
                            for (var o = new t.TreeItem(n,new t.GUIAdapter(e)), a = 0, s = r; a < s.length; a++) {
                                var p = s[a]
                                  , l = i(p);
                                o.add(l)
                            }
                            return o.update(),
                            o
                        }
                        return new t.TreeItem(n,new t.GUIAdapter(e))
                    }, o = this._inspector.scene, a = 0, s = o.textures; a < s.length; a++) {
                        var p = s[a];
                        if (p instanceof e.GUI.AdvancedDynamicTexture) {
                            var l = i(p._rootContainer);
                            r.push(l)
                        }
                    }
                    return r
                }
                ,
                r
            }
            )(t.PropertyTab);
            t.GUITab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, t) {
                    return n.call(this, e, "Physics", t) || this
                }
                return a(r, n),
                r.prototype._getTree = function() {
                    var n = new Array
                      , r = this._inspector.scene;
                    if (!r.isPhysicsEnabled())
                        return n;
                    this.viewer || (this.viewer = new e.Debug.PhysicsViewer(r));
                    for (var i = 0, o = r.meshes; i < o.length; i++) {
                        var a = o[i];
                        a.physicsImpostor && n.push(new t.TreeItem(this,new t.PhysicsImpostorAdapter(a.physicsImpostor,this.viewer)))
                    }
                    return n
                }
                ,
                r
            }
            )(t.PropertyTab);
            t.PhysicsTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    return t.call(this, e, "Audio", n) || this
                }
                return a(n, t),
                n.prototype._getTree = function() {
                    for (var t = this, n = new Array, r = this._inspector.scene, i = 0, o = r.soundTracks; i < o.length; i++) {
                        o[i].soundCollection.forEach((function(r) {
                            n.push(new e.TreeItem(t,new e.SoundAdapter(r)))
                        }
                        ))
                    }
                    return n
                }
                ,
                n
            }
            )(e.PropertyTab);
            e.SoundTab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, r) {
                    var i = n.call(this, e, "Textures") || this;
                    return i._treeItems = [],
                    i._inspector = r,
                    i._panel = t.Helpers.CreateDiv("tab-panel"),
                    i._treePanel = t.Helpers.CreateDiv("insp-tree", i._panel),
                    i._imagePanel = t.Helpers.CreateDiv("insp-details", i._panel),
                    o([i._treePanel, i._imagePanel], {
                        blockDrag: i._inspector.popupMode,
                        direction: "vertical"
                    }),
                    i.update(),
                    i
                }
                return a(r, n),
                r.prototype.dispose = function() {}
                ,
                r.prototype.update = function(e) {
                    var n;
                    e ? n = e : (this._treeItems = this._getTree(),
                    n = this._treeItems),
                    t.Helpers.CleanDiv(this._treePanel),
                    t.Helpers.CleanDiv(this._imagePanel),
                    n.sort((function(e, t) {
                        return e.compareTo(t)
                    }
                    ));
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        this._treePanel.appendChild(o.toHtml())
                    }
                }
                ,
                r.prototype._getTree = function() {
                    for (var e = [], n = this._inspector.scene, r = 0, i = n.textures; r < i.length; r++) {
                        var o = i[r];
                        e.push(new t.TreeItem(this,new t.TextureAdapter(o)))
                    }
                    return e
                }
                ,
                r.prototype.displayDetails = function(n) {
                    this.activateNode(n),
                    t.Helpers.CleanDiv(this._imagePanel);
                    var r = n.adapter.object
                      , i = []
                      , o = t.Helpers.CreateElement("img", "texture-image", this._imagePanel);
                    i.push(o);
                    for (var a = 0; a < 5; a++)
                        i.push(t.Helpers.CreateElement("img", "texture-image", this._imagePanel));
                    if (r instanceof e.RenderTargetTexture) {
                        var s = this._inspector.scene
                          , p = s.getEngine()
                          , l = r.getSize()
                          , c = r.clone();
                        c.activeCamera = r.activeCamera,
                        c.onBeforeRender = r.onBeforeRender,
                        c.onAfterRender = r.onAfterRender,
                        c.onBeforeRenderObservable = r.onBeforeRenderObservable,
                        c.onAfterRenderObservable.add((function(t) {
                            e.Tools.DumpFramebuffer(l.width, l.height, p, (function(e) {
                                return i[t].src = e
                            }
                            ))
                        }
                        )),
                        s.incrementRenderId(),
                        s.resetCachedMaterial(),
                        c.render(),
                        c.dispose()
                    } else if (r instanceof e.CubeTexture) {
                        var u = r.readPixels()
                          , h = document.createElement("canvas");
                        h.id = "MyCanvas",
                        o.parentElement && o.parentElement.appendChild(h);
                        var d = h.getContext("2d")
                          , _ = r.getSize()
                          , f = u.buffer.slice(0, _.height * _.width * 4)
                          , v = new Uint8ClampedArray(f)
                          , b = new ImageData(6 * _.width,_.height);
                        b.data.set(v);
                        var m = d.createImageData(6 * _.width, _.height);
                        m.data.set(v),
                        d.putImageData(m, 0, 0)
                    } else if (r._canvas) {
                        var y = r._canvas.toDataURL("image/png");
                        o.src = y
                    } else if (r.url) {
                        var u = r.readPixels()
                          , h = document.createElement("canvas");
                        h.id = "MyCanvas",
                        o.parentElement && o.parentElement.appendChild(h);
                        var d = h.getContext("2d")
                          , _ = r.getSize()
                          , m = d.createImageData(_.width, _.height);
                        m.data.set(u),
                        d.putImageData(m, 0, 0)
                    }
                }
                ,
                r.prototype.select = function(e) {
                    this.activateNode(e),
                    this.displayDetails(e)
                }
                ,
                r.prototype.activateNode = function(e) {
                    if (this._treeItems)
                        for (var t = 0, n = this._treeItems; t < n.length; t++) {
                            var r = n[t];
                            r.active(!1)
                        }
                    e.active(!0)
                }
                ,
                r
            }
            )(t.Tab);
            t.TextureTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    return t.call(this, e, "Light", n) || this
                }
                return a(n, t),
                n.prototype._getTree = function() {
                    for (var t = [], n = this._inspector.scene, r = 0, i = n.lights; r < i.length; r++) {
                        var o = i[r];
                        t.push(new e.TreeItem(this,new e.LightAdapter(o)))
                    }
                    return t
                }
                ,
                n
            }
            )(e.PropertyTab);
            e.LightTab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    return t.call(this, e, "Material", n) || this
                }
                return a(n, t),
                n.prototype._getTree = function() {
                    for (var t = [], n = this._inspector.scene, r = 0, i = n.materials; r < i.length; r++) {
                        var o = i[r];
                        t.push(new e.TreeItem(this,new e.MaterialAdapter(o)))
                    }
                    return t
                }
                ,
                n
            }
            )(e.PropertyTab);
            e.MaterialTab = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, t) {
                    return n.call(this, e, "Mesh", t) || this
                }
                return a(r, n),
                r.prototype._getTree = function() {
                    for (var n = this, r = new Array, i = new Array, o = function(a) {
                        var s = a.getDescendants(!0)
                          , p = new t.TreeItem(n,new t.MeshAdapter(a));
                        if (s.length > 0) {
                            for (var l = 0, c = s; l < c.length; l++) {
                                var u = c[l];
                                if (u instanceof e.TransformNode && !t.Helpers.IsSystemName(u.name)) {
                                    var h = o(u);
                                    p.add(h)
                                }
                            }
                            p.update()
                        }
                        if (null != a.parent && -1 != i.indexOf(a))
                            for (var d = 0, _ = !0; d < r.length && _; )
                                a.name === r[d].id && (r.splice(d, 1),
                                _ = !1),
                                d++;
                        return i.push(a),
                        p
                    }, a = this._inspector.scene, s = [], p = 0, l = a.meshes; p < l.length; p++) {
                        var c = l[p];
                        -1 != s.indexOf(c) || t.Helpers.IsSystemName(c.name) || c.parent || s.push(c)
                    }
                    for (var u = 0, h = a.transformNodes; u < h.length; u++) {
                        var d = h[u];
                        -1 != s.indexOf(d) || t.Helpers.IsSystemName(d.name) || d.parent || s.push(d)
                    }
                    for (var _ = 0, f = s; _ < f.length; _++) {
                        var c = f[_];
                        if (-1 == i.indexOf(c) && !t.Helpers.IsSystemName(c.name)) {
                            var v = o(c);
                            r.push(v)
                        }
                    }
                    return r
                }
                ,
                r
            }
            )(t.PropertyTab);
            t.MeshTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(r, i) {
                    var a = n.call(this, r, "Scene") || this;
                    a._skeletonViewers = [],
                    a._inspector = i,
                    a._panel = t.Helpers.CreateDiv("tab-panel"),
                    a._actions = t.Helpers.CreateDiv("scene-actions", a._panel),
                    a._detailsPanel = new t.DetailPanel,
                    a._panel.appendChild(a._detailsPanel.toHtml());
                    for (var s = [], p = ["interFramePerfCounter", "lastFramePerfCounter", "evaluateActiveMeshesDurationPerfCounter", "renderDurationPerfCounter", "particlesDurationPerfCounter", "spriteDuractionPerfCounter"], l = t.Helpers.GetAllLinesPropertiesAsString(a._inspector.scene, p), c = 0, u = l; c < u.length; c++) {
                        var h = u[c]
                          , d = new t.PropertyLine(new t.Property(h,a._inspector.scene));
                        s.push(d)
                    }
                    a._detailsPanel.details = s,
                    o([a._actions, a._detailsPanel.toHtml()], {
                        blockDrag: a._inspector.popupMode,
                        sizes: [50, 50],
                        direction: "vertical"
                    });
                    var _ = t.Helpers.CreateDiv("actions-title", a._actions);
                    _.textContent = "Rendering mode";
                    var f = t.Helpers.CreateDiv("action-radio", a._actions)
                      , v = t.Helpers.CreateDiv("action-radio", a._actions)
                      , b = t.Helpers.CreateDiv("action-radio", a._actions);
                    f.textContent = "Point",
                    v.textContent = "Wireframe",
                    b.textContent = "Solid",
                    a._inspector.scene.forcePointsCloud ? f.classList.add("active") : a._inspector.scene.forceWireframe ? v.classList.add("active") : b.classList.add("active"),
                    a._generateRadioAction([f, v, b]),
                    f.addEventListener("click", (function() {
                        a._inspector.scene.forcePointsCloud = !0,
                        a._inspector.scene.forceWireframe = !1
                    }
                    )),
                    v.addEventListener("click", (function() {
                        a._inspector.scene.forcePointsCloud = !1,
                        a._inspector.scene.forceWireframe = !0
                    }
                    )),
                    b.addEventListener("click", (function() {
                        a._inspector.scene.forcePointsCloud = !1,
                        a._inspector.scene.forceWireframe = !1
                    }
                    )),
                    _ = t.Helpers.CreateDiv("actions-title", a._actions),
                    _.textContent = "Textures channels",
                    a._generateActionLine("Diffuse Texture", e.StandardMaterial.DiffuseTextureEnabled, (function(t) {
                        e.StandardMaterial.DiffuseTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Ambient Texture", e.StandardMaterial.AmbientTextureEnabled, (function(t) {
                        e.StandardMaterial.AmbientTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Specular Texture", e.StandardMaterial.SpecularTextureEnabled, (function(t) {
                        e.StandardMaterial.SpecularTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Emissive Texture", e.StandardMaterial.EmissiveTextureEnabled, (function(t) {
                        e.StandardMaterial.EmissiveTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Bump Texture", e.StandardMaterial.BumpTextureEnabled, (function(t) {
                        e.StandardMaterial.BumpTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Opacity Texture", e.StandardMaterial.OpacityTextureEnabled, (function(t) {
                        e.StandardMaterial.OpacityTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Reflection Texture", e.StandardMaterial.ReflectionTextureEnabled, (function(t) {
                        e.StandardMaterial.ReflectionTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Refraction Texture", e.StandardMaterial.RefractionTextureEnabled, (function(t) {
                        e.StandardMaterial.RefractionTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("ColorGrading", e.StandardMaterial.ColorGradingTextureEnabled, (function(t) {
                        e.StandardMaterial.ColorGradingTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Lightmap Texture", e.StandardMaterial.LightmapTextureEnabled, (function(t) {
                        e.StandardMaterial.LightmapTextureEnabled = t
                    }
                    )),
                    a._generateActionLine("Fresnel", e.StandardMaterial.FresnelEnabled, (function(t) {
                        e.StandardMaterial.FresnelEnabled = t
                    }
                    )),
                    _ = t.Helpers.CreateDiv("actions-title", a._actions),
                    _.textContent = "Options",
                    a._generateActionLine("Animations", a._inspector.scene.animationsEnabled, (function(e) {
                        a._inspector.scene.animationsEnabled = e
                    }
                    )),
                    a._generateActionLine("Collisions", a._inspector.scene.collisionsEnabled, (function(e) {
                        a._inspector.scene.collisionsEnabled = e
                    }
                    )),
                    a._generateActionLine("Fog", a._inspector.scene.fogEnabled, (function(e) {
                        a._inspector.scene.fogEnabled = e
                    }
                    )),
                    a._generateActionLine("Lens flares", a._inspector.scene.lensFlaresEnabled, (function(e) {
                        a._inspector.scene.lensFlaresEnabled = e
                    }
                    )),
                    a._generateActionLine("Lights", a._inspector.scene.lightsEnabled, (function(e) {
                        a._inspector.scene.lightsEnabled = e
                    }
                    )),
                    a._generateActionLine("Particles", a._inspector.scene.particlesEnabled, (function(e) {
                        a._inspector.scene.particlesEnabled = e
                    }
                    )),
                    a._generateActionLine("Post-processes", a._inspector.scene.postProcessesEnabled, (function(e) {
                        a._inspector.scene.postProcessesEnabled = e
                    }
                    )),
                    a._generateActionLine("Probes", a._inspector.scene.probesEnabled, (function(e) {
                        a._inspector.scene.probesEnabled = e
                    }
                    )),
                    a._generateActionLine("Procedural textures", a._inspector.scene.proceduralTexturesEnabled, (function(e) {
                        a._inspector.scene.proceduralTexturesEnabled = e
                    }
                    )),
                    a._generateActionLine("Render targets", a._inspector.scene.renderTargetsEnabled, (function(e) {
                        a._inspector.scene.renderTargetsEnabled = e
                    }
                    )),
                    a._generateActionLine("Shadows", a._inspector.scene.shadowsEnabled, (function(e) {
                        a._inspector.scene.shadowsEnabled = e
                    }
                    )),
                    a._generateActionLine("Skeletons", a._inspector.scene.skeletonsEnabled, (function(e) {
                        a._inspector.scene.skeletonsEnabled = e
                    }
                    )),
                    a._generateActionLine("Sprites", a._inspector.scene.spritesEnabled, (function(e) {
                        a._inspector.scene.spritesEnabled = e
                    }
                    )),
                    a._generateActionLine("Textures", a._inspector.scene.texturesEnabled, (function(e) {
                        a._inspector.scene.texturesEnabled = e
                    }
                    )),
                    _ = t.Helpers.CreateDiv("actions-title", a._actions),
                    _.textContent = "Audio";
                    var m = t.Helpers.CreateDiv("action-radio", a._actions)
                      , y = t.Helpers.CreateDiv("action-radio", a._actions);
                    return a._generateActionLine("Disable audio", !a._inspector.scene.audioEnabled, (function(e) {
                        a._inspector.scene.audioEnabled = !e
                    }
                    )),
                    m.textContent = "Headphones",
                    y.textContent = "Normal speakers",
                    a._generateRadioAction([m, y]),
                    a._inspector.scene.headphone ? m.classList.add("active") : y.classList.add("active"),
                    m.addEventListener("click", (function() {
                        a._inspector.scene.headphone = !0
                    }
                    )),
                    y.addEventListener("click", (function() {
                        a._inspector.scene.headphone = !1
                    }
                    )),
                    _ = t.Helpers.CreateDiv("actions-title", a._actions),
                    _.textContent = "Viewer",
                    a._generateActionLine("Skeletons", !1, (function(t) {
                        if (t)
                            for (var n = 0; n < a._inspector.scene.meshes.length; n++) {
                                var r = a._inspector.scene.meshes[n];
                                if (r.skeleton) {
                                    for (var i = !1, o = 0; o < a._skeletonViewers.length; o++)
                                        if (a._skeletonViewers[o].skeleton === r.skeleton) {
                                            i = !0;
                                            break
                                        }
                                    if (i)
                                        continue;
                                    var s = new e.Debug.SkeletonViewer(r.skeleton,r,a._inspector.scene);
                                    s.isEnabled = !0,
                                    a._skeletonViewers.push(s)
                                }
                            }
                        else {
                            for (var n = 0; n < a._skeletonViewers.length; n++)
                                a._skeletonViewers[n].dispose();
                            a._skeletonViewers = []
                        }
                    }
                    )),
                    a
                }
                return a(r, n),
                r.prototype.dispose = function() {
                    this._detailsPanel.dispose()
                }
                ,
                r.prototype._generateActionLine = function(e, n, r) {
                    var i = t.Helpers.CreateDiv("scene-actions", this._actions);
                    i.textContent = e,
                    i.classList.add("action"),
                    n && i.classList.add("active"),
                    i.addEventListener("click", (function(e) {
                        i.classList.toggle("active");
                        var t = i.classList.contains("active");
                        r(t)
                    }
                    ))
                }
                ,
                r.prototype._generateRadioAction = function(e) {
                    for (var t = function(t, n) {
                        for (var r = 0, i = e; r < i.length; r++) {
                            i[r].classList.remove("active")
                        }
                        t.classList.add("active")
                    }, n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        i.addEventListener("click", t.bind(this, i))
                    }
                }
                ,
                r
            }
            )(t.Tab);
            t.SceneTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(r, i) {
                    var a = n.call(this, r, "Console") || this;
                    a._inspector = i,
                    a._panel = t.Helpers.CreateDiv("tab-panel");
                    var s = t.Helpers.CreateDiv("console-panel")
                      , p = t.Helpers.CreateDiv("console-panel");
                    a._panel.appendChild(s),
                    a._panel.appendChild(p),
                    o([s, p], {
                        blockDrag: a._inspector.popupMode,
                        sizes: [50, 50],
                        direction: "vertical"
                    });
                    var l = t.Helpers.CreateDiv("console-panel-title", s);
                    return l.textContent = "Console logs",
                    l = t.Helpers.CreateDiv("console-panel-title", p),
                    l.textContent = "Babylon.js logs",
                    a._consolePanelContent = t.Helpers.CreateDiv("console-panel-content", s),
                    a._bjsPanelContent = t.Helpers.CreateDiv("console-panel-content", p),
                    a._bjsPanelContent.innerHTML = e.Tools.LogCache,
                    e.Tools.OnNewCacheEntry = function(e) {
                        a._bjsPanelContent.innerHTML += e,
                        a._bjsPanelContent.scrollTop = a._bjsPanelContent.scrollHeight
                    }
                    ,
                    a
                }
                return a(r, n),
                r.prototype.dispose = function() {
                    console.log = this._oldConsoleLog,
                    console.warn = this._oldConsoleWarn,
                    console.error = this._oldConsoleError
                }
                ,
                r.prototype.active = function(e) {
                    n.prototype.active.call(this, e),
                    e && (this._oldConsoleLog = console.log,
                    this._oldConsoleWarn = console.warn,
                    this._oldConsoleError = console.error,
                    console.log = this._addConsoleLog.bind(this),
                    console.warn = this._addConsoleWarn.bind(this),
                    console.error = this._addConsoleError.bind(this))
                }
                ,
                r.prototype._message = function(e, n, r) {
                    t.Helpers.CreateDiv("caller", this._consolePanelContent).textContent = r,
                    t.Helpers.CreateDiv(e, this._consolePanelContent).textContent += n,
                    this._consolePanelContent.scrollTop = this._consolePanelContent.scrollHeight
                }
                ,
                r.prototype._addConsoleLog = function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    for (var r = this._addConsoleLog.caller, i = null == r ? "Window" : "Function " + r.name + ": ", o = 0; o < e.length; o++)
                        this._message("log", e[o], i),
                        t.Helpers.IsBrowserEdge() || this._oldConsoleLog(e[o])
                }
                ,
                r.prototype._addConsoleWarn = function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    for (var r = this._addConsoleLog.caller, i = null == r ? "Window" : r.name, o = 0; o < e.length; o++)
                        this._message("warn", e[o], i),
                        t.Helpers.IsBrowserEdge() || this._oldConsoleWarn(e[o])
                }
                ,
                r.prototype._addConsoleError = function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    for (var r = this._addConsoleLog.caller, i = null == r ? "Window" : r.name, o = 0; o < e.length; o++)
                        this._message("error", e[o], i),
                        t.Helpers.IsBrowserEdge() || this._oldConsoleError(e[o])
                }
                ,
                r
            }
            )(t.Tab);
            t.ConsoleTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(r, i) {
                    var o = n.call(this, r, "Stats") || this;
                    o._updatableProperties = [],
                    o._inspector = i,
                    o._scene = o._inspector.scene,
                    o._engine = o._scene.getEngine(),
                    o._glInfo = o._engine.getGlInfo(),
                    o._connectToInstrumentation(),
                    o._panel = t.Helpers.CreateDiv("tab-panel"),
                    o._panel.classList.add("stats-panel");
                    var a = t.Helpers.CreateDiv("stat-title1", o._panel)
                      , s = t.Helpers.CreateElement("span", "stats-fps");
                    o._updatableProperties.push({
                        elem: s,
                        updateFct: function() {
                            return e.Tools.Format(o._inspector.scene.getEngine().getFps(), 0) + " fps"
                        }
                    });
                    var p = t.Helpers.CreateElement("span");
                    p.textContent = "Babylon.js v" + e.Engine.Version + " - ",
                    a.appendChild(p),
                    a.appendChild(s),
                    o._updateLoopHandler = o._update.bind(o),
                    a = t.Helpers.CreateDiv("stat-title2", o._panel),
                    a.textContent = "Count",
                    o._createStatLabel("Total meshes", o._panel);
                    var l = t.Helpers.CreateDiv("stat-value", o._panel);
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.meshes.length.toString()
                        }
                    }),
                    o._createStatLabel("Draw calls", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._sceneInstrumentation.drawCallsCounter.current.toString()
                        }
                    }),
                    o._createStatLabel("Texture collisions", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._sceneInstrumentation.textureCollisionsCounter.current.toString()
                        }
                    }),
                    o._createStatLabel("Total lights", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.lights.length.toString()
                        }
                    }),
                    o._createStatLabel("Total vertices", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.getTotalVertices().toString()
                        }
                    }),
                    o._createStatLabel("Total materials", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.materials.length.toString()
                        }
                    }),
                    o._createStatLabel("Total textures", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.textures.length.toString()
                        }
                    }),
                    o._createStatLabel("Active meshes", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.getActiveMeshes().length.toString()
                        }
                    }),
                    o._createStatLabel("Active indices", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.getActiveIndices().toString()
                        }
                    }),
                    o._createStatLabel("Active bones", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.getActiveBones().toString()
                        }
                    }),
                    o._createStatLabel("Active particles", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._scene.getActiveParticles().toString()
                        }
                    }),
                    a = t.Helpers.CreateDiv("stat-title2", o._panel),
                    a.textContent = "Duration",
                    o._createStatLabel("Meshes selection", o._panel);
                    var l = t.Helpers.CreateDiv("stat-value", o._panel);
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.activeMeshesEvaluationTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Render targets", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.renderTargetsRenderTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Particles", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.particlesRenderTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Sprites", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.spritesRenderTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Animations", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.animationsTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Physics", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.physicsTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Render", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.renderTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Frame", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.frameTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("Inter-frame", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(o._sceneInstrumentation.interFrameTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("GPU Frame time", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(1e-6 * o._engineInstrumentation.gpuFrameTimeCounter.current)
                        }
                    }),
                    o._createStatLabel("GPU Frame time (average)", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(1e-6 * o._engineInstrumentation.gpuFrameTimeCounter.average)
                        }
                    }),
                    o._createStatLabel("Potential FPS", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return e.Tools.Format(1e3 / o._sceneInstrumentation.frameTimeCounter.current, 0)
                        }
                    }),
                    o._createStatLabel("Resolution", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getRenderWidth() + "x" + o._engine.getRenderHeight()
                        }
                    }),
                    a = t.Helpers.CreateDiv("stat-title2", o._panel),
                    a.textContent = "Extensions",
                    o._createStatLabel("Std derivatives", o._panel);
                    var l = t.Helpers.CreateDiv("stat-value", o._panel);
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().standardDerivatives ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Compressed textures", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().s3tc ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Hardware instances", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().instancedArrays ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Texture float", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().textureFloat ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("32bits indices", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().uintIndices ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Fragment depth", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().fragmentDepthSupported ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("High precision shaders", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().highPrecisionShaderSupported ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Draw buffers", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().drawBuffersExtension ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Vertex array object", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().vertexArrayObject ? "Yes" : "No"
                        }
                    }),
                    o._createStatLabel("Timer query", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().timerQuery ? "Yes" : "No"
                        }
                    }),
                    a = t.Helpers.CreateDiv("stat-title2", o._panel),
                    a.textContent = "Caps.",
                    o._createStatLabel("Stencil", o._panel);
                    var l = t.Helpers.CreateDiv("stat-value", o._panel);
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.isStencilEnable ? "Enabled" : "Disabled"
                        }
                    }),
                    o._createStatLabel("Max textures units", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().maxTexturesImageUnits.toString()
                        }
                    }),
                    o._createStatLabel("Max textures size", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().maxTextureSize.toString()
                        }
                    }),
                    o._createStatLabel("Max anisotropy", o._panel),
                    l = t.Helpers.CreateDiv("stat-value", o._panel),
                    o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return o._engine.getCaps().maxAnisotropy.toString()
                        }
                    }),
                    a = t.Helpers.CreateDiv("stat-title2", o._panel),
                    a.textContent = "Info";
                    var l = t.Helpers.CreateDiv("stat-infos", o._panel);
                    return o._updatableProperties.push({
                        elem: l,
                        updateFct: function() {
                            return "WebGL v" + o._engine.webGLVersion + " - " + o._glInfo.version + " - " + o._glInfo.renderer
                        }
                    }),
                    o
                }
                return a(r, n),
                r.prototype._connectToInstrumentation = function() {
                    this._sceneInstrumentation || (this._sceneInstrumentation = new e.SceneInstrumentation(this._scene),
                    this._sceneInstrumentation.captureActiveMeshesEvaluationTime = !0,
                    this._sceneInstrumentation.captureRenderTargetsRenderTime = !0,
                    this._sceneInstrumentation.captureFrameTime = !0,
                    this._sceneInstrumentation.captureRenderTime = !0,
                    this._sceneInstrumentation.captureInterFrameTime = !0,
                    this._sceneInstrumentation.captureParticlesRenderTime = !0,
                    this._sceneInstrumentation.captureSpritesRenderTime = !0,
                    this._sceneInstrumentation.capturePhysicsTime = !0,
                    this._sceneInstrumentation.captureAnimationsTime = !0,
                    this._engineInstrumentation = new e.EngineInstrumentation(this._engine),
                    this._engineInstrumentation.captureGPUFrameTime = !0)
                }
                ,
                r.prototype._createStatLabel = function(e, n) {
                    var r = t.Helpers.CreateDiv("stat-label", n);
                    return r.textContent = e,
                    r
                }
                ,
                r.prototype._update = function() {
                    for (var e = 0, t = this._updatableProperties; e < t.length; e++) {
                        var n = t[e];
                        n.elem.textContent = n.updateFct()
                    }
                }
                ,
                r.prototype.dispose = function() {
                    this._scene.unregisterAfterRender(this._updateLoopHandler),
                    this._sceneInstrumentation.dispose(),
                    this._sceneInstrumentation = null,
                    this._engineInstrumentation.dispose(),
                    this._engineInstrumentation = null
                }
                ,
                r.prototype.active = function(e) {
                    n.prototype.active.call(this, e),
                    e && (this._connectToInstrumentation(),
                    this._scene.registerAfterRender(this._updateLoopHandler))
                }
                ,
                r
            }
            )(t.Tab);
            t.StatsTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, r) {
                    var i = n.call(this, e, "GLTF") || this;
                    i._panel = t.Helpers.CreateDiv("tab-panel");
                    var o = t.Helpers.CreateDiv("gltf-actions", i._panel);
                    return i._addExport(r, o),
                    i
                }
                return a(r, n),
                r.prototype.dispose = function() {}
                ,
                r.prototype._addExport = function(n, i) {
                    t.Helpers.CreateDiv("gltf-title", i).textContent = "Export";
                    var o = t.Helpers.CreateInput("gltf-input", i);
                    o.placeholder = "File name...";
                    var a = t.Helpers.CreateElement("button", "gltf-button", i);
                    a.innerText = "Export GLB",
                    a.addEventListener("click", (function() {
                        e.GLTF2Export.GLBAsync(n.scene, o.value || "scene", {
                            shouldExportTransformNode: function(e) {
                                return !r._IsSkyBox(e)
                            }
                        }).then((function(e) {
                            e.downloadFiles()
                        }
                        ))
                    }
                    ))
                }
                ,
                r._IsSkyBox = function(t) {
                    if (t instanceof e.Mesh && t.material) {
                        var n = t.material
                          , r = n.reflectionTexture;
                        if (r && r.coordinatesMode === e.Texture.SKYBOX_MODE)
                            return !0
                    }
                    return !1
                }
                ,
                r
            }
            )(t.Tab);
            t.GLTFTab = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(r, i) {
                    var o = n.call(this) || this;
                    o._tabs = [],
                    o._invisibleTabs = [],
                    o._visibleTabs = [],
                    o._inspector = r,
                    o._tabs.push(new t.SceneTab(o,o._inspector)),
                    o._tabs.push(new t.ConsoleTab(o,o._inspector)),
                    o._tabs.push(new t.StatsTab(o,o._inspector)),
                    o._meshTab = new t.MeshTab(o,o._inspector),
                    o._tabs.push(new t.TextureTab(o,o._inspector)),
                    o._tabs.push(o._meshTab),
                    o._tabs.push(new t.LightTab(o,o._inspector)),
                    o._tabs.push(new t.MaterialTab(o,o._inspector)),
                    e.GLTF2Export && o._tabs.push(new t.GLTFTab(o,o._inspector)),
                    e.GUI && o._tabs.push(new t.GUITab(o,o._inspector)),
                    o._tabs.push(new t.PhysicsTab(o,o._inspector)),
                    o._tabs.push(new t.CameraTab(o,o._inspector)),
                    o._tabs.push(new t.SoundTab(o,o._inspector)),
                    o._toolBar = new t.Toolbar(o._inspector),
                    o._build(),
                    (!i || i < 0 || i >= o._tabs.length) && (i = 0),
                    o._tabs[i].active(!0);
                    for (var a = 0, s = o._tabs; a < s.length; a++) {
                        var p = s[a];
                        o._visibleTabs.push(p)
                    }
                    return o
                }
                return a(r, n),
                r.prototype.update = function() {}
                ,
                r.prototype._build = function() {
                    var e = this;
                    this._div.className = "tabbar",
                    this._div.appendChild(this._toolBar.toHtml());
                    for (var n = 0, r = this._tabs; n < r.length; n++) {
                        var i = r[n];
                        this._div.appendChild(i.toHtml())
                    }
                    this._moreTabsIcon = t.Helpers.CreateElement("i", "fa fa-angle-double-right more-tabs"),
                    this._moreTabsPanel = t.Helpers.CreateDiv("more-tabs-panel"),
                    this._moreTabsIcon.addEventListener("click", (function() {
                        if ("flex" == e._moreTabsPanel.style.display)
                            e._moreTabsPanel.style.display = "none";
                        else {
                            var n = e._div.parentNode;
                            n.contains(e._moreTabsPanel) || n.appendChild(e._moreTabsPanel),
                            t.Helpers.CleanDiv(e._moreTabsPanel);
                            for (var r = 0, i = e._invisibleTabs; r < i.length; r++) {
                                var o = i[r];
                                e._addInvisibleTabToPanel(o)
                            }
                            e._moreTabsPanel.style.display = "flex"
                        }
                    }
                    ))
                }
                ,
                r.prototype._addInvisibleTabToPanel = function(e) {
                    var n = this
                      , r = t.Helpers.CreateDiv("invisible-tab", this._moreTabsPanel);
                    r.textContent = e.name,
                    r.addEventListener("click", (function() {
                        n._moreTabsPanel.style.display = "none",
                        n.switchTab(e)
                    }
                    ))
                }
                ,
                r.prototype.switchTab = function(e) {
                    var t = this.getActiveTab();
                    t && t.dispose();
                    for (var n = 0, r = this._tabs; n < r.length; n++) {
                        r[n].active(!1)
                    }
                    e.active(!0),
                    this._inspector.refresh()
                }
                ,
                r.prototype.switchMeshTab = function(e) {
                    if (this.switchTab(this._meshTab),
                    e) {
                        var t = this._meshTab.getItemFor(e);
                        t && this._meshTab.select(t)
                    }
                }
                ,
                r.prototype.getActiveTab = function() {
                    for (var e = 0, t = this._tabs; e < t.length; e++) {
                        var n = t[e];
                        if (n.isActive())
                            return n
                    }
                    return null
                }
                ,
                r.prototype.getActiveTabIndex = function() {
                    for (var e = 0; e < this._tabs.length; e++)
                        if (this._tabs[e].isActive())
                            return e;
                    return 0
                }
                ,
                Object.defineProperty(r.prototype, "inspector", {
                    get: function() {
                        return this._inspector
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.getPixelWidth = function() {
                    for (var e = 0, t = 0, n = this._visibleTabs; t < n.length; t++) {
                        e += n[t].getPixelWidth()
                    }
                    return e += this._toolBar.getPixelWidth(),
                    this._div.contains(this._moreTabsIcon) && (e += 30),
                    e
                }
                ,
                r.prototype.updateWidth = function() {
                    if (this._div.parentElement) {
                        for (var e = this._div.parentElement.clientWidth, t = this.getPixelWidth(); this._visibleTabs.length > 0 && t > e; ) {
                            var n = this._visibleTabs.pop();
                            if (!n)
                                break;
                            this._invisibleTabs.push(n),
                            this._div.removeChild(n.toHtml()),
                            t = this.getPixelWidth() + 75
                        }
                        if (this._invisibleTabs.length > 0 && t + 75 < e) {
                            var r = this._invisibleTabs.pop();
                            r && (this._div.appendChild(r.toHtml()),
                            this._visibleTabs.push(r)),
                            this._div.contains(this._moreTabsIcon) && this._div.removeChild(this._moreTabsIcon)
                        }
                        this._invisibleTabs.length > 0 && !this._div.contains(this._moreTabsIcon) && this._div.appendChild(this._moreTabsIcon)
                    }
                }
                ,
                r
            }
            )(t.BasicElement);
            t.TabBar = n
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function t(t, n, r, i) {
                    var o = this;
                    this._inspector = r,
                    this._elem = e.Inspector.DOCUMENT.createElement("i"),
                    this._elem.className = "tool fa " + t,
                    n.appendChild(this._elem),
                    this._elem.addEventListener("click", (function(e) {
                        o.action()
                    }
                    )),
                    new e.Tooltip(this._elem,i)
                }
                return t.prototype.toHtml = function() {
                    return this._elem
                }
                ,
                t.prototype.getPixelWidth = function() {
                    var t = e.Inspector.WINDOW.getComputedStyle(this._elem);
                    if (!t.marginLeft || !t.marginRight)
                        return 0;
                    var n = parseFloat(t.marginLeft.substr(0, t.marginLeft.length - 2)) || 0
                      , r = parseFloat(t.marginRight.substr(0, t.marginRight.length - 2)) || 0;
                    return (this._elem.clientWidth || 0) + n + r
                }
                ,
                t.prototype._updateIcon = function(e) {
                    this._elem.className = "tool fa " + e
                }
                ,
                t
            }
            )();
            e.AbstractTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e, n) {
                    var r = t.call(this, "fa-pause", e, n, "Pause the automatic update of properties") || this;
                    return r._isPause = !1,
                    r
                }
                return a(n, t),
                n.prototype.action = function() {
                    this._isPause ? (e.Scheduler.getInstance().pause = !1,
                    this._updateIcon("fa-pause")) : (e.Scheduler.getInstance().pause = !0,
                    this._updateIcon("fa-play")),
                    this._isPause = !this._isPause
                }
                ,
                n
            }
            )(e.AbstractTool);
            e.PauseScheduleTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t, n) {
                    var r = e.call(this, "fa-mouse-pointer", t, n, "Select a mesh in the scene") || this;
                    return r._isActive = !1,
                    r._pickHandler = r._pickMesh.bind(r),
                    r
                }
                return a(t, e),
                t.prototype.action = function() {
                    if (this._isActive)
                        this._deactivate();
                    else {
                        this.toHtml().classList.add("active");
                        this._inspector.scene.getEngine().getRenderingCanvas().addEventListener("click", this._pickHandler),
                        this._isActive = !0
                    }
                }
                ,
                t.prototype._deactivate = function() {
                    this.toHtml().classList.remove("active"),
                    this._inspector.scene.getEngine().getRenderingCanvas().removeEventListener("click", this._pickHandler),
                    this._isActive = !1
                }
                ,
                t.prototype._pickMesh = function(e) {
                    var t = this._updatePointerPosition(e)
                      , n = this._inspector.scene.pick(t.x, t.y, (function(e) {
                        return !0
                    }
                    ));
                    n && n.pickedMesh && this._inspector.displayObjectDetails(n.pickedMesh),
                    this._deactivate()
                }
                ,
                t.prototype._updatePointerPosition = function(e) {
                    var t = this._inspector.scene.getEngine().getRenderingCanvasClientRect();
                    return {
                        x: e.clientX - t.left,
                        y: e.clientY - t.top
                    }
                }
                ,
                t
            }
            )(e.AbstractTool);
            e.PickTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t, n) {
                    return e.call(this, "fa-external-link", t, n, "Open the inspector in a popup") || this
                }
                return a(t, e),
                t.prototype.action = function() {
                    this._inspector.openPopup()
                }
                ,
                t
            }
            )(e.AbstractTool);
            e.PopupTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t, n) {
                    return e.call(this, "fa-refresh", t, n, "Refresh the current tab") || this
                }
                return a(t, e),
                t.prototype.action = function() {
                    this._inspector.refresh()
                }
                ,
                t
            }
            )(e.AbstractTool);
            e.RefreshTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, t) {
                    var r = n.call(this, "fa-tags", e, t, "Display mesh names on the canvas") || this;
                    return r._isDisplayed = !1,
                    r._advancedTexture = null,
                    r._labelInitialized = !1,
                    r._scene = null,
                    r._guiLoaded = !1,
                    r._scene = t.scene,
                    r
                }
                return a(r, n),
                r.prototype.dispose = function() {
                    this._advancedTexture && this._advancedTexture.dispose()
                }
                ,
                r.prototype._checkGUILoaded = function() {
                    return !0 === this._guiLoaded || (e.GUI && (this._guiLoaded = !0),
                    this._guiLoaded)
                }
                ,
                r.prototype._initializeLabels = function() {
                    var t = this;
                    if (!this._labelInitialized && this._scene && this._checkGUILoaded()) {
                        this._advancedTexture = e.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
                        for (var n = 0, r = this._scene.meshes; n < r.length; n++) {
                            var i = r[n];
                            this._createLabel(i)
                        }
                        this._scene.onNewMeshAddedObservable.add((function(e, n) {
                            t._createLabel(e)
                        }
                        )),
                        this._scene.onMeshRemovedObservable.add((function(e, n) {
                            t._removeLabel(e)
                        }
                        )),
                        this._labelInitialized = !0
                    }
                }
                ,
                r.prototype._createLabel = function(n) {
                    var r = n.name;
                    if (!t.Helpers.IsSystemName(r) && n && this._advancedTexture) {
                        var i = new e.GUI.Rectangle;
                        i.width = 4 + 10 * r.length + "px",
                        i.height = "22px",
                        i.background = "rgba(0,0,0,0.6)",
                        i.color = "black",
                        this._advancedTexture.addControl(i);
                        var o = new e.GUI.TextBlock;
                        o.text = r,
                        o.fontSize = 12,
                        i.addControl(o),
                        i.linkWithMesh(n)
                    }
                }
                ,
                r.prototype._removeLabel = function(e) {
                    if (this._advancedTexture)
                        for (var t = 0, n = this._advancedTexture._rootContainer.children; t < n.length; t++) {
                            var r = n[t]
                              , i = r._linkedMesh;
                            if (i === e) {
                                this._advancedTexture.removeControl(r);
                                break
                            }
                        }
                }
                ,
                r.prototype.action = function() {
                    this._checkGUILoaded() && this._advancedTexture && (this._isDisplayed = !this._isDisplayed,
                    this._isDisplayed ? (this._initializeLabels(),
                    this._advancedTexture._rootContainer.isVisible = !0) : this._advancedTexture._rootContainer.isVisible = !1)
                }
                ,
                r
            }
            )(t.AbstractTool);
            t.LabelTool = n
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    var n = t.call(this) || this;
                    return n._tools = [],
                    n._inspector = e,
                    n._build(),
                    n._addTools(),
                    n
                }
                return a(n, t),
                n.prototype.update = function() {}
                ,
                n.prototype._build = function() {
                    this._div.className = "toolbar"
                }
                ,
                n.prototype._addTools = function() {
                    this._tools.push(new e.RefreshTool(this._div,this._inspector)),
                    this._tools.push(new e.LabelTool(this._div,this._inspector)),
                    this._tools.push(new e.PickTool(this._div,this._inspector)),
                    this._inspector.popupMode || e.Helpers.IsBrowserEdge() || this._tools.push(new e.PopupTool(this._div,this._inspector)),
                    this._tools.push(new e.FullscreenTool(this._div,this._inspector)),
                    this._tools.push(new e.PauseScheduleTool(this._div,this._inspector)),
                    this._tools.push(new e.DisposeTool(this._div,this._inspector))
                }
                ,
                n.prototype.getPixelWidth = function() {
                    for (var e = 0, t = 0, n = this._tools; t < n.length; t++) {
                        e += n[t].getPixelWidth()
                    }
                    return e
                }
                ,
                n
            }
            )(e.BasicElement);
            e.Toolbar = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t, n) {
                    return e.call(this, "fa-times", t, n, "Close the inspector panel") || this
                }
                return a(t, e),
                t.prototype.action = function() {
                    this._inspector.dispose()
                }
                ,
                t
            }
            )(e.AbstractTool);
            e.DisposeTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t, n) {
                    return e.call(this, "fa-expand", t, n, "Open the scene in fullscreen, press Esc to exit") || this
                }
                return a(t, e),
                t.prototype.action = function() {
                    var e = document.body;
                    !(function(e) {
                        (e.requestFullscreen || e.webkitRequestFullScreen).call(e)
                    }
                    )(e)
                }
                ,
                t
            }
            )(e.AbstractTool);
            e.FullscreenTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(t) {
            var n = (function(n) {
                function r(e, t) {
                    var r = n.call(this) || this;
                    return r.children = [],
                    r._tab = e,
                    r._adapter = t,
                    r._tools = r._adapter.getTools(),
                    r._build(),
                    r
                }
                return a(r, n),
                Object.defineProperty(r.prototype, "id", {
                    get: function() {
                        return this._adapter.id()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.add = function(e) {
                    this.children.push(e),
                    this.update()
                }
                ,
                Object.defineProperty(r.prototype, "adapter", {
                    get: function() {
                        return this._adapter
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.compareTo = function(e) {
                    var t = this.id
                      , n = e.id;
                    return t.localeCompare(n, [], {
                        numeric: !0
                    })
                }
                ,
                r.prototype.correspondsTo = function(e) {
                    return this._adapter.correspondsTo(e)
                }
                ,
                r.prototype.fold = function() {
                    if (this.children.length > 0) {
                        for (var e = 0, t = this.children; e < t.length; e++) {
                            t[e].toHtml().style.display = "none"
                        }
                        this._div.classList.add("folded"),
                        this._div.classList.remove("unfolded")
                    }
                }
                ,
                r.prototype.unfold = function() {
                    if (this.children.length > 0) {
                        for (var e = 0, t = this.children; e < t.length; e++) {
                            t[e].toHtml().style.display = "block"
                        }
                        this._div.classList.add("unfolded"),
                        this._div.classList.remove("folded")
                    }
                }
                ,
                r.prototype._build = function() {
                    var n = this._adapter.id();
                    if (this._div.className = "xline" == n || "yline" == n || "zline" == n ? "line_invisible" : "line",
                    this.adapter instanceof t.MeshAdapter) {
                        var r = this.adapter.object;
                        r instanceof e.TransformNode && !(r instanceof e.AbstractMesh) && (this._div.className += " transformNode")
                    }
                    for (var i = 0, o = this._tools; i < o.length; i++) {
                        var a = o[i];
                        this._div.appendChild(a.toHtml())
                    }
                    var s = t.Inspector.DOCUMENT.createElement("span");
                    s.textContent = this._adapter.id(),
                    this._div.appendChild(s);
                    var p = t.Inspector.DOCUMENT.createElement("span");
                    p.className = "property-type",
                    "type_not_defined" !== this._adapter.type() && (p.textContent = " - " + this._adapter.type()),
                    this._div.appendChild(p),
                    this._lineContent = t.Helpers.CreateDiv("line-content", this._div),
                    this._addEvent()
                }
                ,
                r.prototype.getDetails = function() {
                    return this._adapter.getProperties()
                }
                ,
                r.prototype.update = function() {
                    t.Helpers.CleanDiv(this._lineContent);
                    for (var e = 0, n = this.children; e < n.length; e++) {
                        var r = n[e]
                          , i = r.toHtml();
                        this._lineContent.appendChild(i)
                    }
                    this.children.length > 0 && (this._div.classList.contains("folded") || this._div.classList.contains("unfolded") || this._div.classList.add("folded")),
                    this.fold()
                }
                ,
                r.prototype._addEvent = function() {
                    var e = this;
                    this._div.addEventListener("click", (function(t) {
                        e._tab.select(e),
                        e._isFolded() ? e.unfold() : e.fold(),
                        t.stopPropagation()
                    }
                    ))
                }
                ,
                r.prototype._isFolded = function() {
                    return !this._div.classList.contains("unfolded")
                }
                ,
                r.prototype.active = function(e) {
                    this._div.classList.remove("active");
                    for (var t = 0, n = this.children; t < n.length; t++) {
                        n[t].active(!1)
                    }
                    e && this._div.classList.add("active")
                }
                ,
                r.prototype.getDiv = function() {
                    return this._div
                }
                ,
                r
            }
            )(t.BasicElement);
            t.TreeItem = n
        }
        )(i || (i = {}));
        var i;
        !(function(e) {
            var t = (function() {
                function t() {
                    this._on = !1,
                    this._elem = e.Inspector.DOCUMENT.createElement("i"),
                    this._elem.className = "treeTool fa",
                    this._addEvents()
                }
                return t.prototype.toHtml = function() {
                    return this._elem
                }
                ,
                t.prototype._addEvents = function() {
                    var e = this;
                    this._elem.addEventListener("click", (function(t) {
                        e.action(),
                        t.stopPropagation()
                    }
                    ))
                }
                ,
                t.prototype.action = function() {
                    this._on = !this._on
                }
                ,
                t
            }
            )();
            e.AbstractTreeTool = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n._obj = t,
                    n._elem.classList.add("fa-square-o"),
                    n._on = n._obj.isBoxVisible(),
                    n._check(),
                    n
                }
                return a(t, e),
                t.prototype.action = function() {
                    e.prototype.action.call(this),
                    this._check()
                }
                ,
                t.prototype._check = function() {
                    this._on ? this._elem.classList.add("active") : this._elem.classList.remove("active"),
                    this._obj.setBoxVisible(this._on)
                }
                ,
                t
            }
            )(e.AbstractTreeTool);
            e.BoundingBox = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(e) {
                    var n = t.call(this) || this;
                    return n.cameraPOV = e,
                    n._elem.id = n.cameraPOV.id(),
                    n._elem.id == n.cameraPOV.getCurrentActiveCamera() ? n._elem.classList.add("fa-check-circle") : n._elem.classList.add("fa-circle"),
                    n
                }
                return a(n, t),
                n.prototype.action = function() {
                    t.prototype.action.call(this),
                    this._gotoPOV()
                }
                ,
                n.prototype._gotoPOV = function() {
                    for (var t = e.Inspector.DOCUMENT.querySelectorAll(".fa-check-circle"), n = 0; n < t.length; n++)
                        t[n].classList.remove("fa-check-circle"),
                        t[n].classList.add("fa-circle");
                    this.cameraPOV.setPOV(),
                    this._elem.id == this.cameraPOV.getCurrentActiveCamera() && (this._elem.classList.remove("fa-circle"),
                    this._elem.classList.add("fa-check-circle"))
                }
                ,
                n
            }
            )(e.AbstractTreeTool);
            e.CameraPOV = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.playSound = t,
                    n._elem.classList.add("fa-play"),
                    n
                }
                return a(t, e),
                t.prototype.action = function() {
                    e.prototype.action.call(this),
                    this._playSound()
                }
                ,
                t.prototype._playSound = function() {
                    var e = this;
                    this._elem.classList.contains("fa-play") ? (this._elem.classList.remove("fa-play"),
                    this._elem.classList.add("fa-pause")) : (this._elem.classList.remove("fa-pause"),
                    this._elem.classList.add("fa-play")),
                    this.playSound.setPlaying((function() {
                        e._elem.classList.remove("fa-pause"),
                        e._elem.classList.add("fa-play")
                    }
                    ))
                }
                ,
                t
            }
            )(e.AbstractTreeTool);
            e.SoundInteractions = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n._obj = t,
                    n._elem.classList.add("fa-eye"),
                    n._on = n._obj.isVisible(),
                    n._check(!0),
                    n
                }
                return a(t, e),
                t.prototype.action = function() {
                    e.prototype.action.call(this),
                    this._check()
                }
                ,
                t.prototype._check = function(e) {
                    this._on ? (this._elem.classList.add("fa-eye"),
                    this._elem.classList.add("active"),
                    this._elem.classList.remove("fa-eye-slash")) : (this._elem.classList.remove("fa-eye"),
                    this._elem.classList.remove("active"),
                    this._elem.classList.add("fa-eye-slash")),
                    e || this._obj.setVisible(this._on)
                }
                ,
                t
            }
            )(e.AbstractTreeTool);
            e.Checkbox = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n._obj = t,
                    n._elem.classList.add("fa-wrench"),
                    n
                }
                return a(t, e),
                t.prototype.action = function() {
                    e.prototype.action.call(this),
                    this._on ? this._elem.classList.add("active") : this._elem.classList.remove("active"),
                    this._obj.debug(this._on)
                }
                ,
                t
            }
            )(e.AbstractTreeTool);
            e.DebugArea = t
        }
        )(i || (i = {}));
        var i, a = this && this.__extends || (function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }
        )();
        !(function(e) {
            var t = (function(t) {
                function n(n) {
                    var r = t.call(this) || this;
                    return r._obj = n,
                    r._elem.classList.add("fa-info-circle"),
                    new e.Tooltip(r._elem,r._obj.getInfo(),r._elem),
                    r
                }
                return a(n, t),
                n.prototype.action = function() {
                    t.prototype.action.call(this)
                }
                ,
                n
            }
            )(e.AbstractTreeTool);
            e.Info = t
        }
        )(i || (i = {})),
        t.exports = i
    }
    ), (function(e, t, n) {
        "use strict";
        (function() {
            var n = this
              , r = n.attachEvent && !n[o]
              , i = n.document
              , o = "addEventListener"
              , a = "removeEventListener"
              , s = "getBoundingClientRect"
              , p = (function() {
                for (var e, t = ["", "-webkit-", "-moz-", "-o-"], n = 0; n < t.length; n++)
                    if (e = i.createElement("div"),
                    e.style.cssText = "width:" + t[n] + "calc(9px)",
                    e.style.length)
                        return t[n] + "calc"
            }
            )()
              , l = function(e) {
                return "string" == typeof e || e instanceof String ? i.querySelector(e) : e
            }
              , c = function(e, t) {
                var c, u, h, d, _, f, v, b, m = [];
                t = void 0 !== t ? t : {},
                void 0 === t.gutterSize && (t.gutterSize = 10),
                void 0 === t.minSize && (t.minSize = 100),
                void 0 === t.snapOffset && (t.snapOffset = 30),
                void 0 === t.direction && (t.direction = "horizontal"),
                "horizontal" == t.direction ? (c = "width",
                h = "clientWidth",
                d = "clientX",
                _ = "left",
                f = "gutter gutter-horizontal",
                v = "paddingLeft",
                b = "paddingRight",
                t.cursor || (t.cursor = "ew-resize")) : "vertical" == t.direction && (c = "height",
                h = "clientHeight",
                d = "clientY",
                _ = "top",
                f = "gutter gutter-vertical",
                v = "paddingTop",
                b = "paddingBottom",
                t.cursor || (t.cursor = "ns-resize")),
                t.blockDrag && (f += " blocked");
                var y = function(e) {
                    if (!t.blockDrag) {
                        var r = this
                          , i = r.a
                          , a = r.b;
                        !r.dragging && t.onDragStart && t.onDragStart(),
                        e.preventDefault(),
                        r.dragging = !0,
                        r.move = w.bind(r),
                        r.stop = g.bind(r),
                        n[o]("mouseup", r.stop),
                        n[o]("touchend", r.stop),
                        n[o]("touchcancel", r.stop),
                        r.parent[o]("mousemove", r.move),
                        r.parent[o]("touchmove", r.move),
                        i[o]("selectstart", P),
                        i[o]("dragstart", P),
                        a[o]("selectstart", P),
                        a[o]("dragstart", P),
                        i.style.userSelect = "none",
                        i.style.webkitUserSelect = "none",
                        i.style.MozUserSelect = "none",
                        i.style.pointerEvents = "none",
                        a.style.userSelect = "none",
                        a.style.webkitUserSelect = "none",
                        a.style.MozUserSelect = "none",
                        a.style.pointerEvents = "none",
                        r.gutter.style.cursor = t.cursor,
                        r.parent.style.cursor = t.cursor,
                        x.call(r)
                    }
                }
                  , g = function() {
                    if (!t.blockDrag) {
                        var e = this
                          , r = e.a
                          , i = e.b;
                        e.dragging && t.onDragEnd && t.onDragEnd(),
                        e.dragging = !1,
                        n[a]("mouseup", e.stop),
                        n[a]("touchend", e.stop),
                        n[a]("touchcancel", e.stop),
                        e.parent[a]("mousemove", e.move),
                        e.parent[a]("touchmove", e.move),
                        delete e.stop,
                        delete e.move,
                        r[a]("selectstart", P),
                        r[a]("dragstart", P),
                        i[a]("selectstart", P),
                        i[a]("dragstart", P),
                        r.style.userSelect = "",
                        r.style.webkitUserSelect = "",
                        r.style.MozUserSelect = "",
                        r.style.pointerEvents = "",
                        i.style.userSelect = "",
                        i.style.webkitUserSelect = "",
                        i.style.MozUserSelect = "",
                        i.style.pointerEvents = "",
                        e.gutter.style.cursor = "",
                        e.parent.style.cursor = ""
                    }
                }
                  , w = function(e) {
                    var n;
                    this.dragging && (n = "touches"in e ? e.touches[0][d] - this.start : e[d] - this.start,
                    n > this.aMin + t.snapOffset + this.aGutterSize ? n < this.size - (this.bMin + t.snapOffset + this.bGutterSize) || (n = this.size - (this.bMin + this.bGutterSize)) : n = this.aMin + this.aGutterSize,
                    C.call(this, n),
                    t.onDrag && t.onDrag())
                }
                  , x = function() {
                    var e = n.getComputedStyle(this.parent)
                      , t = this.parent[h] - parseFloat(e[v]) - parseFloat(e[b]);
                    this.size = this.a[s]()[c] + this.b[s]()[c] + this.aGutterSize + this.bGutterSize,
                    this.percentage = Math.min(this.size / t * 100, 100),
                    this.start = this.a[s]()[_]
                }
                  , C = function(e) {
                    this.a.style[c] = p + "(" + e / this.size * this.percentage + "% - " + this.aGutterSize + "px)",
                    this.b.style[c] = p + "(" + (this.percentage - e / this.size * this.percentage) + "% - " + this.bGutterSize + "px)"
                }
                  , T = function(e, n, i) {
                    "string" == typeof n || n instanceof String || (n = r ? t.sizes[u] + "%" : p + "(" + n + "% - " + i + "px)"),
                    e.style[c] = n
                }
                  , P = function() {
                    return !1
                }
                  , E = l(e[0]).parentNode;
                if (!t.sizes) {
                    var O = 100 / e.length;
                    for (t.sizes = [],
                    u = 0; u < e.length; u++)
                        t.sizes.push(O)
                }
                if (!Array.isArray(t.minSize)) {
                    var S = [];
                    for (u = 0; u < e.length; u++)
                        S.push(t.minSize);
                    t.minSize = S
                }
                for (u = 0; u < e.length; u++) {
                    var L, I = l(e[u]), D = 1 == u, H = u == e.length - 1, j = t.sizes[u], A = t.gutterSize;
                    if (u > 0 && (L = {
                        a: l(e[u - 1]),
                        b: I,
                        aMin: t.minSize[u - 1],
                        bMin: t.minSize[u],
                        dragging: !1,
                        parent: E,
                        isFirst: D,
                        isLast: H,
                        direction: t.direction
                    },
                    L.aGutterSize = t.gutterSize,
                    L.bGutterSize = t.gutterSize,
                    D && (L.aGutterSize = t.gutterSize / 2),
                    H && (L.bGutterSize = t.gutterSize / 2)),
                    !r) {
                        if (u > 0) {
                            var k = i.createElement("div");
                            k.className = f,
                            k.style[c] = t.gutterSize + "px",
                            k[o]("mousedown", y.bind(L)),
                            k[o]("touchstart", y.bind(L)),
                            E.insertBefore(k, I),
                            L.gutter = k
                        }
                        (0 === u || u == e.length - 1) && (A = t.gutterSize / 2)
                    }
                    T(I, j, A),
                    u > 0 && m.push(L)
                }
                return {
                    setSizes: function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (t > 0) {
                                var n = m[t - 1];
                                T(n.a, e[t - 1], n.aGutterSize),
                                T(n.b, e[t], n.bGutterSize)
                            }
                    },
                    collapse: function(e) {
                        var t;
                        e === m.length ? (t = m[e - 1],
                        x.call(t),
                        C.call(t, t.size - t.bGutterSize)) : (t = m[e],
                        x.call(t),
                        C.call(t, t.aGutterSize))
                    },
                    destroy: function() {
                        for (var e = 0; e < m.length; e++)
                            m[e].parent.removeChild(m[e].gutter),
                            m[e].a.style[c] = "",
                            m[e].b.style[c] = ""
                    }
                }
            };
            void 0 !== e && e.exports && (t = e.exports = c),
            t.Split = c
        }
        ).call(window)
    }
    )])
      , n = "undefined" != typeof global ? global : "undefined" != typeof window ? window : this;
    return n.INSPECTOR = t,
    "undefined" != typeof earcut && (n.Earcut = {
        earcut: earcut
    }),
    t
}
));
