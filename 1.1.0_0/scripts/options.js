!function(e) {
    function t(t) {
        for (var o, c, i = t[0], u = t[1], a = t[2], p = 0, d = []; p < i.length; p++) c = i[p], r[c] && d.push(r[c][0]), r[c] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        for (l && l(t); d.length;) d.shift()();
        return s.push.apply(s, a || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], o = !0, i = 1; i < n.length; i++) {
                var u = n[i];
                0 !== r[u] && (o = !1)
            }
            o && (s.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var o = {},
        r = {
            2: 0
        },
        s = [];

    function c(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.m = e, c.c = o, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) c.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || [],
        u = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var a = 0; a < i.length; a++) t(i[a]);
    var l = u;
    s.push([69, 0]), n()
}({
    34: function(e) {
        e.exports = {
            name: "__MSG_appName__",
            version: "1.1.0",
            manifest_version: 2,
            description: "__MSG_appDescription__",
            icons: {
                16: "images/icon-16.png",
                128: "images/icon-128.png"
            },
            default_locale: "en",
            background: {
                scripts: ["bower_components/file-saver/FileSaver.min.js", "bower_components/urijs/src/URI.min.js", "scripts/chromereload.js", "scripts/commons.js", "scripts/background.js"]
            },
            permissions: ["activeTab", "downloads", "management", "notifications", "tabs", "storage", "https://publicsuffix.org/*", "system.display"],
            options_ui: {
                page: "options.html",
                chrome_style: !0,
                open_in_tab: !0
            },
            browser_action: {
                default_icon: {
                    19: "images/icon-19.png",
                    38: "images/icon-38.png"
                },
                default_title: "tabSorter2",
                default_popup: "popup.html"
            },
            web_accessible_resources: ["images/icon-48.png"],
            content_security_policy: "script-src 'self' https://ssl.google-analytics.com; object-src 'self'"
        }
    },
    69: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0),
            r = n.n(o),
            s = n(1),
            c = n.n(s),
            i = n(7),
            u = n(34),
            a = n(2),
            l = n(5),
            p = chrome.extension.getBackgroundPage();
        p = p.ts2, console = p.console, console.log("Ts2 ".concat(u.version, " Options.js")), console.log("V2.2");
        var d = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = {};
                for (var r in t) o[r] = t[r] instanceof Element ? f(t[r], n) : e(t[r], n);
                return o
            },
            f = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = null;
                if (!e) return n;
                switch (e.type) {
                    case "checkbox":
                        n = e.checked;
                        break;
                    case "select-one":
                        n = t ? e.selectedOptions.item(0).value : {
                            name: e.selectedOptions.item(0).value,
                            index: e.selectedIndex
                        };
                        break;
                    default:
                        n = e.value
                }
                return n
            },
            m = function(e, t) {
                if (!e) return t;
                switch (e.type) {
                    case "checkbox":
                        e.checked = t;
                        break;
                    case "select-one":
                        e.selectedIndex = t.index % e.options.length;
                        break;
                    default:
                        e.value = t
                }
                return t
            },
            g = function() {
                var e = {};
                e.sideBySide = document.querySelector("#splitOptions_sideBySide"), e.fromHere = document.querySelector("#splitOptions_fromHere"), e.forceDimensions = document.querySelector("#splitOptions_forceDimensions"), e.numberOfWindows = document.querySelector("#splitOptions_numberOfWindows");
                var t = {};
                t.type = document.querySelector("#sortOptions_type"), t.regexInput = document.querySelector("#sortOptions_regexInput");
                var n = {};
                n.filePrefix = document.querySelector("#saveOptions_filePrefix");
                var o = {};
                o.auto = document.querySelector("#freezeOptions_auto"), o.time = document.querySelector("#freezeOptions_time");
                var r = {};
                return r.extendedIcon = document.querySelector("#miscOptions_extendedIcon"), r.forceSort = document.querySelector("#miscOptions_forceSort"), r.forcePinned = document.querySelector("#miscOptions_forcePinned"), r.compactMode = document.querySelector("#miscOptions_compactMode"), r.popupClickFeedback = document.querySelector("#miscOptions_popupClickFeedback"), {
                    merge: {},
                    split: e,
                    sort: t,
                    save: n,
                    freeze: o,
                    misc: r
                }
            }();

        function v(e, t) {
            for (var n in t)
                for (var o in e[n]) m(e[n][o], t[n][o])
        }
        document.querySelector("#save").addEventListener("click", function() {
            var e = d(g),
                t = d(g, !0),
                n = JSON.stringify(e),
                o = JSON.stringify(t),
                r = Object(a.g)({
                    Options: n
                }),
                s = Object(a.g)({
                    flatOptions: o
                });
            a.a.sendMessage({
                cmd: "REFRESH_OPTION"
            }, function(e) {
                console.log(e)
            }), Promise.all([r, s]).then(function() {
                var e = document.getElementById("status");
                e.textContent = "Options saved.", setTimeout(function() {
                    e.textContent = ""
                }, 1250)
            })
        }), document.querySelector("#reset").addEventListener("click", function() {
            chrome.storage.sync.clear(function() {
                v(g, i.a);
                var e = document.getElementById("status");
                e.textContent = "Options Reset.", a.a.sendMessage({
                    cmd: "REFRESH_OPTION"
                }, function(e) {
                    console.log("Reset Status = ", e)
                }), setTimeout(function() {
                    e.textContent = ""
                }, 750)
            })
        }), document.querySelector("#update_suffix_list").addEventListener("click", c()(r.a.mark(function e() {
            var t, n;
            return r.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Object(l.b)();
                    case 2:
                        return t = e.sent, e.next = 5, Object(a.g)({
                            PublicSuffixList: t
                        });
                    case 5:
                        console.log(t), (n = document.getElementById("status")).textContent = "Subdomain List updated.", setTimeout(function() {
                            n.textContent = ""
                        }, 1250);
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))), document.addEventListener("DOMContentLoaded", function(e) {
            chrome.storage.sync.get(["Options"], function(e) {
                chrome.storage.sync.get(["Options"], function(e) {
                    var t = e.Options;
                    console.log(t);
                    var n = t ? JSON.parse(t) : i.a;
                    console.log(n), v(g, n)
                }), console.log("→⇴ Options loaded", e)
            }), console.log("DOM fully loaded and parsed")
        }), t.default = null
    }
});