!function(e) {
    function n(n) {
        for (var r, u, c = n[0], a = n[1], s = n[2], f = 0, p = []; f < c.length; f++) u = c[f], o[u] && p.push(o[u][0]), o[u] = 0;
        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
        for (l && l(n); p.length;) p.shift()();
        return i.push.apply(i, s || []), t()
    }

    function t() {
        for (var e, n = 0; n < i.length; n++) {
            for (var t = i[n], r = !0, c = 1; c < t.length; c++) {
                var a = t[c];
                0 !== o[a] && (r = !1)
            }
            r && (i.splice(n--, 1), e = u(u.s = t[0]))
        }
        return e
    }
    var r = {},
        o = {
            3: 0
        },
        i = [];

    function u(n) {
        if (r[n]) return r[n].exports;
        var t = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, u), t.l = !0, t.exports
    }
    u.m = e, u.c = r, u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function(e, n) {
        if (1 & n && (e = u(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (u.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) u.d(t, r, function(n) {
                return e[n]
            }.bind(null, r));
        return t
    }, u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return u.d(n, "a", n), n
    }, u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, u.p = "";
    var c = window.webpackJsonp = window.webpackJsonp || [],
        a = c.push.bind(c);
    c.push = n, c = c.slice();
    for (var s = 0; s < c.length; s++) n(c[s]);
    var l = a;
    i.push([35, 0]), t()
}({
    35: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(3),
            o = t.n(r),
            i = t(0),
            u = t.n(i),
            c = t(1),
            a = t.n(c),
            s = t(2),
            l = t(7),
            f = Object(s.f)(chrome.windows.getCurrent),
            p = chrome.extension.getBackgroundPage(),
            d = !0;
        d && console.log("chrome", chrome.extension), d && console.log("Background JS - loaded ?", p), d && console.log("Background JS - TS2 ?", p.ts2), console = p.console;
        var m = (p = p.ts2).getOptions(),
            g = null;
        m.then(function() {
            var e = a()(u.a.mark(function e(n) {
                var t;
                return u.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = Object(s.c)(l.a, n), d = n.misc.debug, n.split.numberOfWindows = +n.split.numberOfWindows, n.sideBySide = Boolean(n.sideBySide), p.newColor, e.next = 7, f();
                        case 7:
                            g = e.sent, (t = document.querySelector("html")).classList.toggle(n.theme), n.misc.compactMode && t.classList.add("full_compact"), h(n);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()).catch(function(e) {
            console.log(e)
        });
        var h = function(e) {
            var n = {
                mergeBtn: function(e) {
                    return p.mergeAllTab()
                },
                mergeLastNBtn: function(e) {
                    return p.mergeLastXWindows()
                },
                sortCurrBtn: function(n) {
                    return p.sortTabs(!0, e.sort.type)
                },
                sortAllBtn: function(n) {
                    return p.sortTabs(!1, e.sort.type)
                },
                uniteBtn: function(e) {
                    return p.unite()
                },
                splitBtnV: function(n) {
                    return p.splittingMyHairHere(e.split, !0)
                },
                splitBtnH: function(n) {
                    return p.splittingMyHairHere(e.split, !1)
                },
                splitByGrpBtn: function(e) {
                    return p.isolateAllDomains()
                },
                shuffleBtn: function(e) {
                    return p.doTheShuffle()
                },
                isolateBtn: function(e) {
                    return p.isolateDomain()
                },
                closeBtn: function(e) {
                    return p.closeDomain()
                },
                saveBtn: function(e) {
                    return p.saveCurrentTab()
                },
                saveAllBtn: function(e) {
                    return p.saveAllWindows(!0)
                },
                loadBtn: function(e) {
                    return c.click()
                },
                freezeBtn: function(e) {
                    return p.freezeAllTabs()
                },
                removeDuplicateBtn: function(e) {
                    return p.deduplicate()
                },
                githubBtn: function(e) {
                    return window.open("https://github.com/Mimieam/TabSorter2")
                },
                donationBtn: function(e) {
                    return window.open("https://www.buymeacoffee.com/tabSorter2")
                },
                optionBtn: function(e) {
                    return p.openOptionWindow()
                }
            };
            document.onclick = function() {
                var n = a()(u.a.mark(function n(t) {
                    var r, i, c, a, l, f;
                    return u.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                g && s.a.sendMessage({
                                    popup_window_id: g.id
                                }), e.misc.popupClickFeedback && (r = t.path.filter(function(e) {
                                    return e && "BUTTON" == e.nodeName
                                }), i = o()(r, 1), (c = i[0]) && (a = c && Array.from(c.children).filter(function(e) {
                                    return e && "LABEL" == e.nodeName
                                }), l = o()(a, 1), (f = l[0]).innerHTML = f.innerHTML + "⚙", setTimeout(function() {
                                    f.innerHTML = f.innerHTML.replace("⚙", "")
                                }, 1e3)));
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }();
            for (var t = Object.entries(n), r = function() {
                    var e = o()(t[i], 2),
                        n = e[0],
                        r = e[1];
                    n = "." === n[0] ? n : "." + n, document.querySelector(n).addEventListener("click", function(e) {
                        r()
                    })
                }, i = 0; i < t.length; i++) r();
            var c = document.querySelector("#file-upload");
            c.addEventListener("change", function() {
                var e = this.files;
                p.loadFiles(e)
            }, !1);
            var l = document.querySelector("#toggleBtnTest");
            l && l.addEventListener("change", function(n) {
                var t = n.target,
                    r = document.querySelector("html");
                r.classList = Array.from(r.classList).filter(function(e) {
                    return !e.includes("Theme")
                }), r.classList.toggle(e.theme, !!t.checked)
            }, !1)
        }
    }
});