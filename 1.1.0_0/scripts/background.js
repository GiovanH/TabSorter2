! function(n) {
    function t(t) {
        for (var r, o, i = t[0], c = t[1], s = t[2], p = 0, l = []; p < i.length; p++) o = i[p], a[o] && l.push(a[o][0]), a[o] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (n[r] = c[r]);
        for (f && f(t); l.length;) l.shift()();
        return u.push.apply(u, s || []), e()
    }

    function e() {
        for (var n, t = 0; t < u.length; t++) {
            for (var e = u[t], r = !0, i = 1; i < e.length; i++) {
                var c = e[i];
                0 !== a[c] && (r = !1)
            }
            r && (u.splice(t--, 1), n = o(o.s = e[0]))
        }
        return n
    }
    var r = {},
        a = {
            1: 0
        },
        u = [];

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    o.m = n, o.c = r, o.d = function(n, t, e) {
        o.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, o.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, o.t = function(n, t) {
        if (1 & t && (n = o(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n.__esModule) return n;
        var e = Object.create(null);
        if (o.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var r in n) o.d(e, r, function(t) {
                return n[t]
            }.bind(null, r));
        return e
    }, o.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return o.d(t, "a", t), t
    }, o.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, o.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || [],
        c = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var s = 0; s < i.length; s++) t(i[s]);
    var f = c;
    u.push([70, 0]), e()
}({
    20: function(n, t, e) {
        var r = e(43);
        n.exports = function(n, t) {
            if (null == n) return {};
            var e, a, u = r(n, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                for (a = 0; a < o.length; a++) e = o[a], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (u[e] = n[e])
            }
            return u
        }
    },
    31: function(n, t) {
        n.exports = function(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    },
    32: function(n, t) {
        function e(n, t) {
            for (var e = 0; e < t.length; e++) {
                var r = t[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
            }
        }
        n.exports = function(n, t, r) {
            return t && e(n.prototype, t), r && e(n, r), n
        }
    },
    43: function(n, t) {
        n.exports = function(n, t) {
            if (null == n) return {};
            var e, r, a = {},
                u = Object.keys(n);
            for (r = 0; r < u.length; r++) e = u[r], t.indexOf(e) >= 0 || (a[e] = n[e]);
            return a
        }
    },
    70: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e(20),
            a = e.n(r),
            u = e(8),
            o = e.n(u),
            i = e(4),
            c = e.n(i),
            s = e(3),
            f = e.n(s),
            p = e(0),
            l = e.n(p),
            d = e(1),
            h = e.n(d),
            v = e(2),
            w = e(31),
            m = e.n(w),
            b = e(32),
            x = e.n(b),
            g = e(10),
            y = e.n(g),
            k = Object(v.f)(chrome.windows.get),
            O = Object(v.f)(chrome.windows.getAll),
            P = 1,
            j = 2,
            S = 3,
            _ = 4,
            T = function(n, t) {
                var e = c()(new Set(n.map(function(n) {
                        return n[3]
                    }))),
                    r = n.map(function(n) {
                        return y()({}, n[0], [n[0], n[1], n[2], n[3], !1])
                    }).reduce(function(n, t) {
                        return o()({}, t, n)
                    });
                return r.future_tabs = [], t.forEach(function(n, t) {
                    var a = f()(n, 4),
                        u = a[0],
                        o = a[1],
                        i = a[2],
                        c = a[3];
                    r[u] || (r[u] = [u, o, i, -1, !1]);
                    var s = f()(r[u], 4),
                        p = s[0],
                        l = s[1],
                        d = s[2],
                        h = s[3];
                    if (l !== o && (r.future_tabs.push([p, l, d, h, !1]), r[u] = [p, o, i, h, !1]), l !== o && (r.future_tabs.push([p, l, d, h, !1]), r[u][P] = o), d !== i && (r[u][j] = i), h !== c) {
                        var v = c;
                        e.includes(c) || (v = "new_".concat(c)), r[u][S] = v
                    }
                    r[u][_] = !0
                }), r
            },
            I = function() {
                function n() {
                    m()(this, n)
                }
                return x()(n, null, [{
                    key: "_serializeState",
                    value: function(n) {
                        return {
                            timeStamp: Date.now(),
                            id: n.id,
                            tabs: n.tabs.map(function(n) {
                                return {
                                    id: n.id,
                                    url: n.url,
                                    title: n.title,
                                    favIconUrl: n.favIconUrl,
                                    pinned: n.pinned,
                                    index: n.index
                                }
                            })
                        }
                    }
                }, {
                    key: "snapshot",
                    value: function() {
                        var t = h()(l.a.mark(function t(e) {
                            var r;
                            return l.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, k(e, {
                                            populate: !0
                                        });
                                    case 2:
                                        return r = t.sent, t.abrupt("return", n._serializeState(r));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));
                        return function(n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "snapshot_all",
                    value: function() {
                        var n = h()(l.a.mark(function n() {
                            var t, e = this;
                            return l.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, O({
                                            populate: !0
                                        });
                                    case 2:
                                        t = n.sent, this.state.push(t.map(function(n) {
                                            return e._serializeState(n)
                                        })), console.log(this.state);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, this)
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "reshapeStateToFlatTabs",
                    value: function(n) {
                        return n.map(function(n) {
                            return n.tabs.map(function(t) {
                                return [t.id, t.url, t.index, n.id]
                            })
                        }).flat()
                    }
                }, {
                    key: "get_new_windows",
                    value: function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
                        return Object.entries(Object(v.e)(n, t)).filter(function(n) {
                            return n[0].startsWith("new")
                        }).reduce(function(n, t) {
                            return o()({}, n, y()({}, t[0], t[1]))
                        }, {})
                    }
                }, {
                    key: "get_sealed_tabs",
                    value: function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                        return Object(v.e)(n, t).true
                    }
                }, {
                    key: "get_unsealed_tabs",
                    value: function(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                        return Object(v.e)(n, t).false
                    }
                }, {
                    key: "_analyse",
                    value: function() {
                        var n = h()(l.a.mark(function n() {
                            var t, e, r, a, u, o, i;
                            return l.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, this.snapshot_all();
                                    case 2:
                                        if (t = this.state.slice(-2), e = f()(t, 2), r = e[0], a = e[1], console.log(a, r), a && r) {
                                            n.next = 7;
                                            break
                                        }
                                        return console.log("state 1 = ".concat(a, " -- state 2 = ").concat(r)), n.abrupt("return", "No state found");
                                    case 7:
                                        return u = this.reshapeStateToFlatTabs(a), o = this.reshapeStateToFlatTabs(r), i = T(u, o), console.log(i), console.log(this.get_sealed_tabs(i)), console.log(this.get_unsealed_tabs(i)), console.log(this.get_new_windows(i)), n.abrupt("return", {
                                            move: [],
                                            create: [],
                                            delete: []
                                        });
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, this)
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }()
                }]), n
            }();
        y()(I, "state", []);
        var L = e(5),
            A = !1;

        function F(n, t) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = h()(l.a.mark(function n(t, e) {
                var r, a;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            r = f()(this, 2), a = r[0], r[1], A && sn(!0, a.sort.type, !1);
                        case 2:
                        case "end":
                            return n.stop()
                    }
                }, n, this)
            }))).apply(this, arguments)
        }
        var W = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] && a[0], n.next = 3, G();
                            case 3:
                                return e = n.sent, (r = t || e.misc.forceSort) ? (A = !0, chrome.tabs.onUpdated.addListener(F.bind([e, !1])), console.log("Active Sort = ", r)) : (A = !1, chrome.tabs.onUpdated.removeListener(F), console.log("Active Sort = ", r)), n.abrupt("return", r);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            E = !1;

        function M(n, t) {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = h()(l.a.mark(function n(t, e) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            E && Dn();
                        case 1:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }))).apply(this, arguments)
        }
        var D = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] && a[0], n.next = 3, G();
                            case 3:
                                return e = n.sent, (r = t || e.misc.forcePinned) ? (E = !0, chrome.windows.onFocusChanged.addListener(M), chrome.windows.onCreated.addListener(M), console.log("Active Tab Pin = ", r)) : (E = !1, chrome.windows.onFocusChanged.removeListener(M), chrome.windows.onCreated.removeListener(M), console.log("Active Tab Pin = ", r)), n.abrupt("return", r);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            N = e(7),
            R = "\n\r-----------------------------------------------------\n\r";
        e.d(t, "keepThemPinned", function() {
            return Dn
        }), e.d(t, "sortTabs", function() {
            return sn
        }), e.d(t, "getOptions", function() {
            return G
        }), e.d(t, "TS2_OPTIONS", function() {
            return H
        }), e.d(t, "TS2", function() {
            return Nn
        }), e.d(t, "DEFAULT_OPTIONS", function() {
            return N.a
        });
        var q = [],
            B = [],
            J = [],
            z = [null, null],
            H = N.a;
        H.misc.debug = !0;
        var G = function() {
            var n = h()(l.a.mark(function n() {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.abrupt("return", new Promise(function(n, t) {
                                chrome.storage.sync.get(["flatOptions"], function(t) {
                                    var e = {};
                                    try {
                                        e = JSON.parse(t.flatOptions)
                                    } catch (n) {
                                        console.log("Error Loading Options, falling back to default options "), Object(v.g)({
                                            flatOptions: N.a
                                        })
                                    } finally {
                                        H = Object(v.c)(N.a, e)
                                    }
                                    return n(H)
                                })
                            }));
                        case 1:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function() {
                return n.apply(this, arguments)
            }
        }();
        window.getOptions = G, h()(l.a.mark(function n() {
            var t;
            return l.a.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2, window.getOptions();
                    case 2:
                        return t = n.sent, n.next = 5, new Promise(function() {
                            var n = h()(l.a.mark(function n(t) {
                                return l.a.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, chrome.windows.getAll({}, function(n) {
                                                return t(n.map(function(n) {
                                                    return n.id
                                                }))
                                            });
                                        case 2:
                                            return n.abrupt("return", n.sent);
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n)
                            }));
                            return function(t) {
                                return n.apply(this, arguments)
                            }
                        }());
                    case 5:
                        if (q = n.sent, n.t1 = t.misc.autoSort, !n.t1) {
                            n.next = 11;
                            break
                        }
                        return n.next = 10, sn(!1, t.sort.type, !1);
                    case 10:
                        n.t1 = n.sent;
                    case 11:
                        if (n.t0 = n.t1, !n.t0) {
                            n.next = 14;
                            break
                        }
                        n.t0 = !1;
                    case 14:
                        if (n.t2 = n.t0, !n.t2) {
                            n.next = 17;
                            break
                        }
                        console.log("AutoSort On Start");
                    case 17:
                    case "end":
                        return n.stop()
                }
            }, n)
        }))(), v.a.onMessage(function() {
            var n = h()(l.a.mark(function n(t, e, r) {
                var a;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if ("REFRESH_OPTION" != t.cmd) {
                                n.next = 9;
                                break
                            }
                            return W(!1), D(!1), V(), n.next = 7, window.getOptions();
                        case 7:
                            (a = n.sent).misc.forceSort && sn(!1, a.sort.type, !1);
                        case 9:
                            t.popup_window_id && X(t.popup_window_id);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t, e, r) {
                return n.apply(this, arguments)
            }
        }());
        var X = function() {
                var n = h()(l.a.mark(function n(t) {
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (null !== z[0]) {
                                    n.next = 5;
                                    break
                                }
                                return n.next = 3, K().then(function(n) {
                                    z[0] = n[0], z[1] = n[1]
                                });
                            case 3:
                                n.next = 6;
                                break;
                            case 5:
                                z[0] = t;
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            K = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 3, new Promise(function(n) {
                                    return chrome.windows.getLastFocused(function(t) {
                                        if (chrome.runtime.lastError) return reject();
                                        n(t.id)
                                    })
                                });
                            case 3:
                                return t = n.sent, n.next = 6, new Promise(function(n) {
                                    return chrome.windows.getCurrent(function(t) {
                                        if (chrome.runtime.lastError) return reject();
                                        n(t.id)
                                    })
                                });
                            case 6:
                                return e = n.sent, n.next = 9, new Promise(function(n) {
                                    return n(Q())
                                });
                            case 9:
                                return r = n.sent, n.abrupt("return", Promise.all([t, e, r]));
                            case 11:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Q = function() {
                return z[0]
            },
            V = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, o = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = o.length > 0 && void 0 !== o[0] && o[0], n.next = 3, _n.getLastFocused(!0);
                            case 3:
                                return e = n.sent, n.next = 6, _n.getAll(!1);
                            case 6:
                                if (r = n.sent, t) {
                                    n.next = 11;
                                    break
                                }
                                return n.next = 10, X(e.id);
                            case 10:
                                q = Object(v.b)(q, e.id);
                            case 11:
                                a = e.tabs.length, u = H.misc.extendedIcon ? "".concat(a, "|").concat(r.length) : "".concat(a), chrome.browserAction.setBadgeText({
                                    text: "".concat(u)
                                }), chrome.browserAction.setBadgeBackgroundColor({
                                    color: "#ff813f"
                                });
                            case 15:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Y = !1;
        chrome.tabs.onRemoved.addListener(function() {
            var n = h()(l.a.mark(function n(t, e) {
                var r;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!(H.misc.forcePinned && e && e.isWindowClosing) || Y) {
                                n.next = 6;
                                break
                            }
                            return r = q[q.length - 2], n.next = 6, Promise.all(B.map(function(n) {
                                return new Promise(function() {
                                    var t = h()(l.a.mark(function t(e) {
                                        return l.a.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return Y = !0, t.next = 3, Sn.create({
                                                        url: n.url,
                                                        windowId: r,
                                                        pinned: !0
                                                    });
                                                case 3:
                                                    return t.sent, t.next = 7, Object(v.i)(700);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }, t)
                                    }));
                                    return function(n) {
                                        return t.apply(this, arguments)
                                    }
                                }())
                            }));
                        case 6:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t, e) {
                return n.apply(this, arguments)
            }
        }()), chrome.tabs.onActivated.addListener(function(n) {
            n.windowId, V()
        }), chrome.windows.onFocusChanged.addListener(function() {
            var n = h()(l.a.mark(function n(t) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, V();
                        case 2:
                        case 3:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }()), chrome.windows.onCreated.addListener(function() {
            var n = h()(l.a.mark(function n(t) {
                var e;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, V(!0);
                        case 2:
                            if (q = Object(v.b)(q, t.id), !H.misc.forcePinned) {
                                n.next = 10;
                                break
                            }
                            return n.next = 6, Object(v.i)(200);
                        case 6:
                            return n.next = 8, In(!1);
                        case 8:
                            e = n.sent, On(!0, e);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }()), chrome.windows.onRemoved.addListener(function() {
            var n = h()(l.a.mark(function n(t) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2, V(!0);
                        case 2:
                            Y = !1, q = q.filter(function(n) {
                                return n != t
                            });
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }()), chrome.runtime.onInstalled.addListener(function() {
            var n = h()(l.a.mark(function n(t) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (n.t0 = !1, !n.t0) {
                                n.next = 8;
                                break
                            }
                            return n.t1 = console, n.next = 6, G();
                        case 6:
                            n.t2 = n.sent, n.t1.log.call(n.t1, "Active Options: ", n.t2);
                        case 8:
                            return V(), W(), D(), n.next = 16, Object(L.b)();
                        case 16:
                            return J = n.sent, n.next = 19, Object(v.g)({
                                PublicSuffixList: J
                            }, "local");
                        case 19:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }()), chrome.runtime.onStartup.addListener(h()(l.a.mark(function n() {
            return l.a.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        V(), W(), D();
                    case 5:
                    case "end":
                        return n.stop()
                }
            }, n)
        }))), chrome.runtime.onUpdateAvailable.addListener(function() {
            var n = h()(l.a.mark(function n(t) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (n.t0 = !1, !n.t0) {
                                n.next = 10;
                                break
                            }
                            return n.t1 = console, n.next = 8, G();
                        case 8:
                            n.t2 = n.sent, n.t1.log.call(n.t1, "Active Options: ", n.t2);
                        case 10:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }());
        var Z = function n(t) {
                return t.reduce(function(t, e) {
                    return t.concat(Array.isArray(e) ? n(e) : e)
                }, [])
            },
            $ = function() {
                return new Promise(function() {
                    var n = h()(l.a.mark(function n(t, e) {
                        var r;
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    r = Q(), chrome.windows.get(r, {
                                        populate: !0
                                    }, function(n) {
                                        return t([{
                                            windowId: n.id,
                                            window: n,
                                            tabs: n.tabs
                                        }])
                                    });
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }, n)
                    }));
                    return function(t, e) {
                        return n.apply(this, arguments)
                    }
                }())
            },
            nn = function() {
                var n = h()(l.a.mark(function n() {
                    var t;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = Q(), chrome.tabs.query({
                                    windowId: -1
                                }, function(n) {
                                    var e = n.map(function(n) {
                                        return n.id
                                    });
                                    Ln(e, t)
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            tn = function() {
                var n = h()(l.a.mark(function n(t) {
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t.length > 0 && chrome.tabs.remove(t, function(n) {});
                            case 1:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            en = function(n) {
                var t = n.filter(function(n) {
                    return n.url.includes("chrome://newtab/")
                }).map(function(n) {
                    return n.id
                });
                return t.length > 0 && chrome.tabs.remove(t, function(n) {}), t
            },
            rn = function(n, t) {
                var e = Object(L.a)(n.url, J),
                    r = Object(L.a)(t.url, J);
                if (e.domain < r.domain) return -1;
                if (e.domain == r.domain) {
                    if (e.subdomain < r.subdomain) return -1;
                    if (e.subdomain == r.subdomain && e.pathname + e.search < r.pathname + r.search) return -1
                }
                return 0
            },
            an = function(n, t) {
                var e = n.title.toLowerCase(),
                    r = t.title.toLowerCase();
                return e.toLowerCase().localeCompare(r.toLowerCase())
            },
            un = {
                url: rn,
                title: an
            },
            on = function(n, t) {
                var e = n.tabs;
                if (e = Z(e), t == rn) {
                    var r = cn(e),
                        a = f()(r, 2),
                        u = a[0],
                        o = a[1];
                    u.sort(rn);
                    var i = o.sort(function(n, t) {
                        return n.url > t.url ? 1 : -1
                    });
                    e = [].concat(c()(u), c()(i))
                } else e.sort(t);
                var s = e.map(function(n) {
                    return n.id
                });
                return {
                    tabs: e,
                    tabsId: s,
                    windowId: n.windowId
                }
            },
            cn = function(n) {
                var t = n.filter(function(n) {
                        return n.url.startsWith("http")
                    }).map(function(n) {
                        return Object.assign(n, {
                            _parsed: Object(L.a)(n.url, J)
                        })
                    }),
                    e = n.filter(function(n) {
                        return !n.url.startsWith("http")
                    }).map(function(n) {
                        return Object.assign(n, n.url ? {
                            _parsed: Object(L.a)(n.url, J)
                        } : {
                            _parsed: {
                                domain: ""
                            }
                        })
                    }),
                    r = new Set(t.map(function(n) {
                        return n._parsed.domain
                    }));
                return e.map(function(n) {
                    return r.has(n._parsed.domain) ? (t.push(n), null) : n
                }), [t, e]
            },
            sn = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "url",
                    e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                t = t.toLowerCase(), t = Object.keys(un).includes(t) ? t : "url", chrome.windows.getAll(function(r) {
                    (n ? $() : function(n) {
                        return new Promise(function(t, e) {
                            var r = n.map(function(n) {
                                return new Promise(function(t, e) {
                                    chrome.tabs.query({
                                        windowId: n.id
                                    }, function(e) {
                                        return t({
                                            windowId: n.id,
                                            window: n,
                                            tabs: e
                                        })
                                    })
                                })
                            });
                            return t(r)
                        })
                    }(r)).then(function(n) {
                        return Promise.all(n)
                    }).then(function(n) {
                        return n.map(function(n) {
                            return on(n, un[t])
                        })
                    }).then(function(n) {
                        n.map(function(n) {
                            Ln(n.tabsId, n.windowId);
                            n.tabs.filter(function(n) {
                                return n.url.includes("chrome://")
                            }).map(function(n) {
                                return n.id
                            });
                            e && en(n.tabs)
                        })
                    })
                })
            },
            fn = function() {
                var n = h()(l.a.mark(function n(t) {
                    var e, r, u, i, c, s, p, d = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (e = d.length > 1 && void 0 !== d[1] ? d[1] : {}, r = d.length > 2 && void 0 !== d[2] ? d[2] : function() {}, e = e || {}, !t) {
                                    n.next = 10;
                                    break
                                }
                                return u = t.slice(-1), i = f()(u, 1), c = i[0], n.next = 7, Sn.get(c);
                            case 7:
                                s = n.sent, p = o()({
                                    tabId: s.id
                                }, e), chrome.windows.create(p, function(n) {
                                    var e, u, o = s.pinned;
                                    a()(s, ["pinned"]);
                                    Sn.update(c, {
                                        pinned: o
                                    }), (e = t, u = e.map(function(n) {
                                        return new Promise(function(t, e) {
                                            chrome.tabs.get(n, function(n) {
                                                return n ? t(n) : e(chrome.runtime.lastError.message)
                                            })
                                        }).catch(function(n) {})
                                    }), Promise.all(u)).then(function(t) {
                                        var e = t.filter(function(n) {
                                                return void 0 !== n
                                            }),
                                            a = e.map(function(n) {
                                                return n.id
                                            });
                                        Ln(a, n.id, function() {
                                            chrome.runtime.lastError ? chrome.windows.remove(n.id) : chrome.windows.update(n.id, {
                                                drawAttention: !0
                                            }), en(e), r()
                                        })
                                    })
                                });
                            case 10:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            pn = function(n, t) {
                var e, r, a, u, o;
                t = t > 0 ? t : 1;
                var i = null;
                return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? (r = window.screen.width, a = window.screen.height, u = Math.ceil(r / t) || r, o = Math.ceil(Number(n) * u), i = window.screenTop) : (e = window.screen.height - 25, a = Math.ceil(e / t) || e, u = window.screen.width, o = window.screenLeft, i = Math.ceil(Number(n) * (a + 25))), {
                    width: u,
                    height: a,
                    left: o,
                    top: i
                }
            },
            ln = function(n, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    u = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                (r ? function(n) {
                    return new Promise(function(t, e) {
                        chrome.windows.get(n, {
                            populate: !0
                        }, function(n) {
                            var e, r = n.tabs,
                                a = r.filter(function(n) {
                                    return n.active
                                }).map(function(n) {
                                    return n.id
                                }),
                                u = f()(a, 1)[0],
                                o = r.findIndex(function(n) {
                                    return n.id == u
                                });
                            return o = o > 0 ? o : 0, e = [r = r.map(function(n) {
                                return n.id
                            }), r.splice(o)], t(e)
                        })
                    })
                }(t) : function(n, t) {
                    return new Promise(function(e, r) {
                        chrome.windows.get(t, {
                            populate: !0
                        }, function(t) {
                            for (var r = [], a = t.tabs, u = Math.ceil(a.length / n || 1) || 1; a.length;) r.push(a.splice(0, u).map(function(n) {
                                return n.id
                            }));
                            return e(r)
                        })
                    })
                }(n, t)).then(function() {
                    var n = h()(l.a.mark(function n(o) {
                        var i, c;
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, _n.get(t);
                                case 2:
                                    i = n.sent, c = o.length, o.map(function() {
                                        var n = h()(l.a.mark(function n(t, s) {
                                            var p;
                                            return l.a.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        if (!e) {
                                                            n.next = 6;
                                                            break
                                                        }
                                                        return n.next = 3, pn(s, c, u);
                                                    case 3:
                                                        n.t0 = n.sent, n.next = 7;
                                                        break;
                                                    case 6:
                                                        n.t0 = {};
                                                    case 7:
                                                        return p = n.t0, a && (u ? (p.top = i.top, p.height = i.height) : (p.left = i.left, p.width = i.width)), n.next = 11, fn(t, p, function() {
                                                            if (r && s === o.length - 1) {
                                                                var n = f()(t, 1)[0];
                                                                chrome.tabs.get(n, function(n) {
                                                                    chrome.tabs.highlight({
                                                                        windowId: n.windowId,
                                                                        tabs: n.index
                                                                    }, function(n) {})
                                                                })
                                                            }
                                                        });
                                                    case 11:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }, n)
                                        }));
                                        return function(t, e) {
                                            return n.apply(this, arguments)
                                        }
                                    }());
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }, n)
                    }));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }())
            },
            dn = function() {
                var n = h()(l.a.mark(function n() {
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                v.a.sendMessage({
                                    msg: "STARTED"
                                }), $().then(function(n) {
                                    var t, e = ((t = n[0].tabs.map(function(n) {
                                        return n.id
                                    })).forEach(function(n, t, e) {
                                        var r = Math.floor(Math.random() * (t + 1)),
                                            a = [e[r], e[t]];
                                        e[t] = a[0], e[r] = a[1]
                                    }), t);
                                    Ln(e, n[0].windowId)
                                }).then(function(n) {
                                    v.a.sendMessage({
                                        msg: "COMPLETED"
                                    })
                                });
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            hn = function(n, t) {
                var e = function(n) {
                    n.tabs, n.state, n.id;
                    var t = a()(n, ["tabs", "state", "id"]);
                    return o()({}, t)
                }(n);
                return JSON.stringify(e)
            },
            vn = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, o, i = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = !(i.length > 0 && void 0 !== i[0]) || i[0], n.next = 3, _n.getAll();
                            case 3:
                                return e = n.sent, r = e.map(function() {
                                    var n = h()(l.a.mark(function n(t, e) {
                                        var r, a;
                                        return l.a.wrap(function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, wn(t.id, !1);
                                                case 2:
                                                    return r = n.sent, a = hn(t), n.abrupt("return", [a, r]);
                                                case 5:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }, n)
                                    }));
                                    return function(t, e) {
                                        return n.apply(this, arguments)
                                    }
                                }()), n.next = 7, Promise.all(r);
                            case 7:
                                return a = n.sent, n.next = 10, Z(a).join(R);
                            case 10:
                                return u = n.sent, t && (o = H.save.filePrefix || "savedTabs.txt", bn(o, u)), n.abrupt("return", u);
                            case 13:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            wn = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, o, i, c, s = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (t = s.length > 0 && void 0 !== s[0] ? s[0] : null, e = !(s.length > 1 && void 0 !== s[1]) || s[1], !t) {
                                    n.next = 8;
                                    break
                                }
                                return n.next = 5, ts2.GChromeWindow.getWindow(t);
                            case 5:
                                n.t0 = n.sent, n.next = 11;
                                break;
                            case 8:
                                return n.next = 10, $();
                            case 10:
                                n.t0 = n.sent;
                            case 11:
                                return r = n.t0, a = r.map(function(n) {
                                    return on(n, an)
                                }), u = a[0].tabs, o = u.map(function(n) {
                                    var t = n.url;
                                    return {
                                        title: n.title,
                                        url: n.url,
                                        shortUrl: t
                                    }
                                }), i = mn(o), e && (c = H.save.filePrefix || "savedTabs.txt", bn(c, i)), n.abrupt("return", i);
                            case 18:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            mn = function(n) {
                var t = "";
                return n.map(function(n) {
                    t += "\n• ".concat(n.title, "\n\t→ ").concat(n.shortUrl, "\r")
                }), t
            },
            bn = function(n, t) {
                var e = new Blob([t], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(e, n)
            },
            xn = function(n) {
                var t = n.match(/(\w|-)*:\/\/\S+/gi);
                return t
            },
            gn = function(n) {
                var t = n.split(R).reduce(function(n, t, e, r) {
                        return e % 2 == 0 && n.push(r.slice(e, e + 2)), n
                    }, []),
                    e = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(e = (u = i.next()).done); e = !0) {
                        var c = f()(u.value, 2),
                            s = c[0],
                            p = c[1],
                            l = xn(p),
                            d = JSON.parse(s);
                        o()({}, d, {
                            url: l
                        })
                    }
                } catch (n) {
                    r = !0, a = n
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (r) throw a
                    }
                }
            },
            yn = function() {
                var n = h()(l.a.mark(function n() {
                    var t;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, vn(!1);
                            case 2:
                                t = n.sent, gn(t);
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            kn = function() {
                var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null).map(function(n) {
                    return o()({}, n, {
                        url: n.url || n.pendingUrl
                    })
                });
                if (n) {
                    var t = Pn(n, "url"),
                        e = c()(t.values()),
                        r = e.map(function(n) {
                            return n.id
                        }),
                        a = n.map(function(n) {
                            return n.id
                        }).filter(function(n) {
                            return !r.includes(n)
                        });
                    return tn(a), e
                }
            },
            On = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, o, i, s, p, d, h, v, w, m, b, x = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!(x.length > 0 && void 0 !== x[0]) || x[0], t = x.length > 1 && void 0 !== x[1] ? x[1] : null, e = t) {
                                    n.next = 9;
                                    break
                                }
                                return n.next = 6, $();
                            case 6:
                                r = n.sent, a = f()(r, 1), e = a[0].tabs;
                            case 9:
                                u = e.filter(function(n) {
                                    return n.pinned
                                }), o = e.filter(function(n) {
                                    return !n.pinned
                                }), i = Pn(u, "url"), s = Pn(o, "url"), p = c()(i.values()).map(function(n) {
                                    return n.id
                                }), d = c()(s.values()).map(function(n) {
                                    return n.id
                                }), h = u.map(function(n) {
                                    return n.id
                                }), v = o.map(function(n) {
                                    return n.id
                                }), w = h.filter(function(n) {
                                    return !p.includes(n)
                                }), m = v.filter(function(n) {
                                    return !d.includes(n)
                                }), b = [].concat(c()(w), c()(m)), tn(b);
                            case 22:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Pn = function(n, t) {
                var e = t || Object.keys(n[0])[0];
                return n.reduce(function(n, t) {
                    return n.set(t[e], t)
                }, new Map)
            },
            jn = function() {
                var n = h()(l.a.mark(function n() {
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, chrome.tabs.query({}, function() {
                                    var n = h()(l.a.mark(function n(t) {
                                        return l.a.wrap(function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 3, t.map(function() {
                                                        var n = h()(l.a.mark(function n(t) {
                                                            return l.a.wrap(function(n) {
                                                                for (;;) switch (n.prev = n.next) {
                                                                    case 0:
                                                                        return n.next = 3, chrome.tabs.discard(t.id, function(n) {});
                                                                    case 3:
                                                                    case "end":
                                                                        return n.stop()
                                                                }
                                                            }, n)
                                                        }));
                                                        return function(t) {
                                                            return n.apply(this, arguments)
                                                        }
                                                    }());
                                                case 3:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }, n)
                                    }));
                                    return function(t) {
                                        return n.apply(this, arguments)
                                    }
                                }());
                            case 2:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Sn = {},
            _n = {};
        _n.getWindow = function() {
            var n = h()(l.a.mark(function n(t) {
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.abrupt("return", new Promise(function(n, e) {
                                chrome.windows.get(t, {
                                    populate: !0
                                }, function(t) {
                                    return n([{
                                        windowId: t.id,
                                        window: t,
                                        tabs: t.tabs
                                    }])
                                })
                            }));
                        case 1:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function(t) {
                return n.apply(this, arguments)
            }
        }(), _n.getAll = function() {
            var n = h()(l.a.mark(function n() {
                var t, e = arguments;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = e.length > 0 && void 0 !== e[0] && e[0], n.next = 3, new Promise(function() {
                                var n = h()(l.a.mark(function n(e) {
                                    return l.a.wrap(function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, chrome.windows.getAll({
                                                    populate: t
                                                }, function(n) {
                                                    return e(n)
                                                });
                                            case 2:
                                                return n.abrupt("return", n.sent);
                                            case 3:
                                            case "end":
                                                return n.stop()
                                        }
                                    }, n)
                                }));
                                return function(t) {
                                    return n.apply(this, arguments)
                                }
                            }());
                        case 3:
                            return n.abrupt("return", n.sent);
                        case 4:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function() {
                return n.apply(this, arguments)
            }
        }(), _n.getLastFocused = function() {
            var n = h()(l.a.mark(function n() {
                var t, e, r = arguments;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = r.length > 0 && void 0 !== r[0] && r[0], n.next = 3, new Promise(function(n) {
                                return chrome.windows.getLastFocused({
                                    populate: t
                                }, function(t) {
                                    return n(t)
                                })
                            });
                        case 3:
                            return e = n.sent, n.abrupt("return", e);
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function() {
                return n.apply(this, arguments)
            }
        }(), _n._createWindow = function() {
            var n = h()(l.a.mark(function n() {
                var t, e, r, a = arguments;
                return l.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e = a.length > 1 && void 0 !== a[1] && a[1], n.next = 4, new Promise(function(n, r) {
                                return chrome.windows.create({}, function() {
                                    var r = h()(l.a.mark(function r(a) {
                                        var u, o;
                                        return l.a.wrap(function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return t.url = t.url ? t.url : [], u = t.url, r.next = 5, u.map(function(n, t) {
                                                        return t === u.length - 1 ? Sn.createTabAtWindowID(n, a.id, !1) : Sn.createTabAtWindowID(n, a.id, e)
                                                    });
                                                case 5:
                                                    return o = r.sent, r.next = 8, Promise.all(o);
                                                case 8:
                                                    r.sent, n(a);
                                                case 11:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }, r)
                                    }));
                                    return function(n) {
                                        return r.apply(this, arguments)
                                    }
                                }())
                            });
                        case 4:
                            return r = n.sent, n.abrupt("return", r);
                        case 6:
                        case "end":
                            return n.stop()
                    }
                }, n)
            }));
            return function() {
                return n.apply(this, arguments)
            }
        }(), Sn.createTabAtWindowID = function(n, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return new Promise(function(r) {
                chrome.tabs.create({
                    url: n,
                    windowId: t
                }, function() {
                    var n = h()(l.a.mark(function n(t) {
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    e && chrome.tabs.onUpdated.addListener(function() {
                                        var n = h()(l.a.mark(function n(a, u) {
                                            return l.a.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        if ("complete" !== u.status || a !== t.id) {
                                                            n.next = 5;
                                                            break
                                                        }
                                                        return n.next = 3, chrome.tabs.discard(t.id, function(n) {});
                                                    case 3:
                                                        chrome.tabs.onUpdated.removeListener(e), r(t);
                                                    case 5:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }, n)
                                        }));

                                        function e(t, e) {
                                            return n.apply(this, arguments)
                                        }
                                        return e
                                    }());
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }, n)
                    }));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }())
            })
        }, Sn.create = Object(v.f)(chrome.tabs.create), Sn.get = Object(v.f)(chrome.tabs.get), Sn.move = Object(v.f)(chrome.tabs.move), Sn.query = Object(v.f)(chrome.tabs.query), Sn.discard = Object(v.f)(chrome.tabs.discard), Sn.update = Object(v.f)(chrome.tabs.update), _n.get = Object(v.f)(chrome.windows.get), _n.create = Object(v.f)(chrome.windows.create), Sn.closeEmptyTabs = function(n) {
            var t = n.filter(function(n) {
                return n.url.includes("chrome://newtab/")
            }).map(function(n) {
                return n.id
            });
            return t.length > 0 && chrome.tabs.remove(t, function(n) {}), t
        };
        var Tn = function() {
                var n = h()(l.a.mark(function n(t) {
                    var e;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, In();
                            case 2:
                                if (e = n.sent, !((t = t.filter(function(n) {
                                        return !e.includes(n)
                                    })).length > 0)) {
                                    n.next = 10;
                                    break
                                }
                                return n.next = 10, chrome.tabs.remove(t, function(n) {});
                            case 10:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            In = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = !(a.length > 0 && void 0 !== a[0]) || a[0], e = a.length > 1 && void 0 !== a[1] && a[1], n.next = 4, new Promise(function(n, r) {
                                    chrome.tabs.query({
                                        pinned: !0
                                    }, function(r) {
                                        if (0 !== r.length) {
                                            var a = JSON.stringify(r);
                                            B = JSON.parse(a), B = kn(B)
                                        }
                                        return n(t ? r.map(function(n) {
                                            return n.id
                                        }) : e ? B : r)
                                    })
                                });
                            case 4:
                                return r = n.sent, n.abrupt("return", r);
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Ln = function() {
                var n = h()(l.a.mark(function n(t, e) {
                    var r, a, u = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (r = u.length > 2 && void 0 !== u[2] ? u[2] : function() {}, !e) {
                                    n.next = 11;
                                    break
                                }
                                return n.next = 4, In();
                            case 4:
                                return a = n.sent, n.next = 7, Sn.move(t, {
                                    windowId: e,
                                    index: 0
                                });
                            case 7:
                                An(a), r(), n.next = 12;
                                break;
                            case 11:
                                console.error(" Invalid - moveTabs With id:", e);
                            case 12:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t, e) {
                    return n.apply(this, arguments)
                }
            }(),
            An = function() {
                var n = h()(l.a.mark(function n(t) {
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t.map(function(n) {
                                    chrome.tabs.update(n, {
                                        pinned: !0
                                    }, function(n) {})
                                });
                            case 1:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            Fn = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                _n.getWindow(Q()).then(function(e) {
                    var r = e.map(function(n) {
                        return n.tabs.filter(function(n) {
                            return !0 === n.active
                        }).map(function(n) {
                            return {
                                url: n.url,
                                windowId: n.windowId
                            }
                        })[0]
                    })[0];
                    Cn(r.url, r.windowId, n, t)
                })
            },
            Cn = function(n, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = new URL(n);
                chrome.windows.getAll(function(n) {
                    (function(n) {
                        return new Promise(function(t, e) {
                            var r = n.map(function(n) {
                                return new Promise(function(t, e) {
                                    chrome.tabs.query({
                                        windowId: n.id
                                    }, function(e) {
                                        return t({
                                            windowId: n.id,
                                            window: n,
                                            tabs: e
                                        })
                                    })
                                })
                            });
                            return t(r)
                        })
                    })(n).then(function(n) {
                        return Promise.all(n)
                    }).then(function(n) {
                        var u = n.map(function(n) {
                                return n.tabs.filter(function(n) {
                                    return new URL(n.url).hostname === a.hostname && !n.pinned
                                }).map(function(n) {
                                    return n.id
                                })
                            }),
                            o = Z(u);
                        r ? Tn(o) : e ? fn(o) : Ln(o, t)
                    })
                })
            },
            Wn = function() {
                var n = h()(l.a.mark(function n(t) {
                    var e, r, a, u, o, i, c, s;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                e = [], r = !0, a = !1, u = void 0, n.prev = 4, o = t[Symbol.iterator]();
                            case 6:
                                if (r = (i = o.next()).done) {
                                    n.next = 15;
                                    break
                                }
                                return c = i.value, n.next = 10, _n.get(c, {
                                    populate: !0
                                });
                            case 10:
                                s = n.sent, e.push(s.tabs.map(function(n) {
                                    return n.id
                                }));
                            case 12:
                                r = !0, n.next = 6;
                                break;
                            case 15:
                                n.next = 21;
                                break;
                            case 17:
                                n.prev = 17, n.t0 = n.catch(4), a = !0, u = n.t0;
                            case 21:
                                n.prev = 21, n.prev = 22, r || null == o.return || o.return();
                            case 24:
                                if (n.prev = 24, !a) {
                                    n.next = 27;
                                    break
                                }
                                throw u;
                            case 27:
                                return n.finish(24);
                            case 28:
                                return n.finish(21);
                            case 29:
                                return n.abrupt("return", e);
                            case 30:
                            case "end":
                                return n.stop()
                        }
                    }, n, null, [
                        [4, 17, 21, 29],
                        [22, , 24, 28]
                    ])
                }));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }(),
            En = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, o, i, c = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (t = c.length > 0 && void 0 !== c[0] ? c[0] : 2, e = !1, t = t || 2, !(r = q.slice(-t))) {
                                    n.next = 13;
                                    break
                                }
                                return n.t0 = Z, n.next = 9, Wn(r);
                            case 9:
                                n.t1 = n.sent, a = (0, n.t0)(n.t1);
                                try {
                                    u = r.slice(-1), o = f()(u, 1), i = o[0], Ln(a, i)
                                } catch (n) {
                                    e = !0
                                } finally {
                                    !e && q.splice(-2, 1)
                                }
                                case 13:
                                    return n.abrupt("return", r[0]);
                                case 14:
                                case "end":
                                    return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Mn = function() {
                var n = h()(l.a.mark(function n() {
                    var t;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 3, I._analyse();
                            case 3:
                                (t = n.sent).move, t.create, t.delete;
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Un = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u, i, c = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = c.length > 0 && void 0 !== c[0] ? c[0] : 2, n.next = 3, Sn.query({});
                            case 3:
                                return e = n.sent, r = e.map(function(n) {
                                    return o()({}, Object(L.a)(n.url, J), {
                                        id: n.id
                                    })
                                }), n.next = 8, r.reduce(function(n, t) {
                                    return Object.keys(n).includes(t.domain) ? n[t.domain].push(t) : n[t.domain] = [t], n
                                }, {});
                            case 8:
                                return a = n.sent, u = Object.keys(a).filter(function(n) {
                                    return a[n].length >= t
                                }).map(function(n) {
                                    return a[n].map(function(n) {
                                        return n.id
                                    })
                                }).sort(function(n, t) {
                                    return t.length - n.length
                                }), i = Object.keys(a).filter(function(n) {
                                    return a[n].length < t
                                }).flatMap(function(n) {
                                    return a[n].map(function(n) {
                                        return n.id
                                    })
                                }).sort(function(n, t) {
                                    return n.domain < t.domain ? -1 : n.domain > t.domain ? 1 : 0
                                }), u.push(i), u.map(function(n) {
                                    return fn(n)
                                }), n.abrupt("return", u);
                            case 15:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Dn = function() {
                var n = h()(l.a.mark(function n() {
                    var t, e, r, a, u = arguments;
                    return l.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return t = u.length > 0 && void 0 !== u[0] ? u[0] : null, u.length > 1 && void 0 !== u[1] && u[1], n.next = 4, In();
                            case 4:
                                if (!(e = n.sent) || !e.length) {
                                    n.next = 14;
                                    break
                                }
                                return n.next = 8, _n.getLastFocused(!1);
                            case 8:
                                if (r = n.sent, a = t || r.id, !e) {
                                    n.next = 14;
                                    break
                                }
                                return n.next = 14, Ln(e, a);
                            case 14:
                            case "end":
                                return n.stop()
                        }
                    }, n)
                }));
                return function() {
                    return n.apply(this, arguments)
                }
            }(),
            Nn = {
                PUBLIC_SUFFIX_LIST: J,
                newColor: "#ff813f",
                updatePublicSuffixList: L.b,
                saveLoadTestWrapper: yn,
                keepThemPinned: Dn,
                useStrongerSort: cn,
                sortByDomainWithSubDomain: rn,
                parseUrl: L.a,
                pivotThis: v.e,
                getOptions: G,
                closeDomain: function() {
                    Fn(!1, !0)
                },
                deduplicate: On,
                doTheShuffle: dn,
                freezeAllTabs: jn,
                isolateDomain: function() {
                    Fn(!0)
                },
                isolateAllDomains: Un,
                loadFiles: function(n) {
                    var t = !0,
                        e = !1,
                        r = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(t = (a = u.next()).done); t = !0) {
                            var o = a.value,
                                i = new FileReader;
                            if (i.onloadend = function(n) {
                                    if (n.target.readyState == FileReader.DONE) {
                                        var t = n.target.result,
                                            e = xn(t);
                                        e && _n._createWindow({
                                            url: e
                                        }, !0)
                                    }
                                }, !o.name.endsWith("txt") || "text/plain" != o.type) throw console.error("Invalid File '".concat(o.name, "' of type '").concat(o.type, "'")), new Error("Invalid File ".concat(o.name, " of type ").concat(o.type));
                            if (!(o.size <= 25e4)) throw console.error("File is over 2 mb"), new Error("File is over 2 mb");
                            i.readAsText(o)
                        }
                    } catch (n) {
                        e = !0, r = n
                    } finally {
                        try {
                            t || null == u.return || u.return()
                        } finally {
                            if (e) throw r
                        }
                    }
                },
                mergeAllTab: nn,
                mergeLastXWindows: En,
                openOptionWindow: function() {
                    chrome.runtime.openOptionsPage ? chrome.runtime.openOptionsPage() : window.open(chrome.runtime.getURL("options.html"))
                },
                saveCurrentTab: wn,
                saveAllWindows: vn,
                sortTabs: sn,
                splittingMyHairHere: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    ln(n.numberOfWindows, Q(), n.sideBySide, n.fromHere, n.forceDimensions, t)
                },
                undo: Mn,
                undoMerge: function() {
                    Object(v.d)("mergeFlag").then(function(n) {
                        Object(v.d)("undo").then(function(n) {
                            for (var t in n) fn(n[t])
                        })
                    })
                },
                unite: function() {
                    Fn(!1)
                },
                GChromeWindow: _n,
                GCTabs: Sn,
                chrome: chrome,
                DEFAULT_OPTIONS: N.a,
                console: console
            };
        window.ts2 = Nn;
        t.default = Nn
    }
});