/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (de.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = be[e] = {};
        return ie.each(e.match(xe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), ie.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ce, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? ie.parseJSON(n) : n
                } catch (i) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                u = s ? ie.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : {
                toJSON: ie.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
        }
    }

    function f(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function h() {
        return !1
    }

    function p() {
        try {
            return pe.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, m(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function v(e) {
        je.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (x(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function E(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o
    }

    function C(e) {
        var t = pe,
            n = Ke[e];
        return n || (n = E(e, t), "none" !== n && n || (Ze = (Ze || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Ze.detach()), Ke[e] = n), n
    }

    function S(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = dt.length; i--;)
            if (t = dt[i] + n, t in e) return t;
        return r
    }

    function _(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _e(r) && (o[a] = ie._data(r, "olddisplay", C(r.nodeName)))) : (i = _e(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function A(e, t, n) {
        var r = ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Ne[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Ne[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Ne[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Ne[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Ne[o] + "Width", !0, i)));
        return a
    }

    function D(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }

    function H() {
        return setTimeout(function() {
            ht = void 0
        }), ht = ie.now()
    }

    function M(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ne[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function L(e, t, n) {
        for (var r, i = (xt[t] || []).concat(xt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
            d = {},
            h = e.style,
            p = e.nodeType && _e(e),
            g = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || C(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || f.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    p = !0
                }
                d[r] = g && g[r] || ie.style(e, r)
            } else l = void 0;
        if (ie.isEmptyObject(d)) "inline" === ("none" === l ? C(e.nodeName) : l) && (h.display = l);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = ie._data(e, "fxshow", {}), o && (g.hidden = !p), p ? ie(e).show() : f.done(function() {
                ie(e).hide()
            }), f.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in d) ie.style(e, t, d[t])
            });
            for (r in d) a = L(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o = 0,
            a = yt.length,
            s = ie.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = ht || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for ($(c, l.opts.specialEasing); a > o; o++)
            if (r = yt[o].call(l, e, c, l.opts)) return r;
        return ie.map(c, L, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(xe) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function B(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === It;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function P(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function z(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function I(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: a ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function(t, i) {
            n || Vt.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) W(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        Z = J.indexOf,
        K = {},
        ee = K.toString,
        te = K.hasOwnProperty,
        ne = {},
        re = "1.11.1",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ie.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: J.sort,
        splice: J.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ie.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ie.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ie.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (Z) return Z.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return G.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    });
    var le =
        /*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
        function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, f, h, p, g;
                if ((t ? t.ownerDocument || t : B) !== O && D(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (M && !r) {
                    if (i = ye.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!L || !L.test(e))) {
                        if (h = f = R, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = C(e), (f = t.getAttribute("id")) ? h = f.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
                            p = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                        }
                        if (g) try {
                            return K.apply(n, p.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[R] = !0, e
            }

            function i(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && typeof e.getElementsByTagName !== V && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function h(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = z++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, u, l = [P, o];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === P && s[1] === o) return l[2] = s[2];
                                if (u[r] = l, l[2] = e(t, n, a)) return !0
                            }
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, r) {
                for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                return r
            }

            function m(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function v(e, t, n, i, o, a) {
                return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(r, a, s, u) {
                    var l, c, f, d = [],
                        h = [],
                        p = a.length,
                        v = r || g(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !r && t ? v : m(v, d, e, s, u),
                        x = n ? o || (r ? e : p || i) ? [] : a : y;
                    if (n && n(y, x, s, u), i)
                        for (l = m(x, h), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[h[c]] = !(y[h[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else x = m(x === a ? x.splice(p, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                        return e === t
                    }, a, !0), l = h(function(e) {
                        return te.call(t, e) > -1
                    }, a, !0), c = [function(e, n, r) {
                        return !o && (r || n !== _) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }]; i > s; s++)
                    if (n = T.relative[e[s].type]) c = [h(p(c), n)];
                    else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                            for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                            return v(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function x(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function(r, a, s, u, l) {
                        var c, f, d, h = 0,
                            p = "0",
                            g = r && [],
                            v = [],
                            y = _,
                            x = r || o && T.find.TAG("*", l),
                            b = P += null == y ? 1 : Math.random() || .1,
                            w = x.length;
                        for (l && (_ = a !== O && a); p !== w && null != (c = x[p]); p++) {
                            if (o && c) {
                                for (f = 0; d = e[f++];)
                                    if (d(c, a, s)) {
                                        u.push(c);
                                        break
                                    }
                                l && (P = b)
                            }
                            i && ((c = !d && c) && h--, r && g.push(c))
                        }
                        if (h += p, i && p !== h) {
                            for (f = 0; d = n[f++];) d(g, v, a, s);
                            if (r) {
                                if (h > 0)
                                    for (; p--;) g[p] || v[p] || (v[p] = Q.call(u));
                                v = m(v)
                            }
                            K.apply(u, v), l && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (P = b, _ = y), g
                    };
                return i ? r(a) : a
            }
            var b, w, T, k, E, C, S, N, _, A, j, D, O, H, M, L, F, $, q, R = "sizzle" + -new Date,
                B = e.document,
                P = 0,
                z = 0,
                I = n(),
                W = n(),
                X = n(),
                U = function(e, t) {
                    return e === t && (j = !0), 0
                },
                V = "undefined",
                J = 1 << 31,
                Y = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Z = G.push,
                K = G.push,
                ee = G.slice,
                te = G.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                re = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
                se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                le = new RegExp("^" + re + "*," + re + "*"),
                ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
                de = new RegExp(se),
                he = new RegExp("^" + oe + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xe = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                Te = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                };
            try {
                K.apply(G = ee.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
            } catch (ke) {
                K = {
                    apply: G.length ? function(e, t) {
                        Z.apply(e, ee.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : B,
                    r = n.defaultView;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, H = n.documentElement, M = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                    D()
                }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                    D()
                })), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), w.getById = i(function(e) {
                    return H.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if (typeof t.getElementById !== V && M) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== V && M ? t.getElementsByClassName(e) : void 0
                }, F = [], L = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
                }), i(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = ve.test($ = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), F.push("!=", se)
                }), L = L.length && new RegExp(L.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(H.compareDocumentPosition), q = t || ve.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === B && q(B, e) ? -1 : t === n || t.ownerDocument === B && q(B, t) ? 1 : A ? te.call(A, e) - te.call(A, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var r, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        l = [t];
                    if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? te.call(A, e) - te.call(A, t) : 0;
                    if (o === s) return a(e, t);
                    for (r = e; r = r.parentNode;) u.unshift(r);
                    for (r = t; r = r.parentNode;) l.unshift(r);
                    for (; u[i] === l[i];) i++;
                    return i ? a(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
                }, n) : O
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && D(e), n = n.replace(fe, "='$1']"), w.matchesSelector && M && (!F || !F.test(n)) && (!L || !L.test(n))) try {
                    var r = $.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return t(n, O, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && D(e), q(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && D(e);
                var n = T.attrHandle[t.toLowerCase()],
                    r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                return void 0 !== r ? r : w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return A = null, e
            }, k = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += k(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = I[e + " "];
                        return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && I(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (c = m[R] || (m[R] = {}), l = c[e] || [], h = l[0] === P && l[1], d = l[0] === P && l[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [P, h, d];
                                            break
                                        }
                                } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === P) d = l[1];
                                else
                                    for (;
                                        (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[R] || (f[R] = {}))[e] = [P, d]), f !== t)););
                                return d -= i, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = te.call(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = S(e.replace(ue, "$1"));
                        return i[R] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return ge.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[b] = s(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[b] = u(b);
            return f.prototype = T.filters = T.pseudos, T.setFilters = new f, C = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = W[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, u = [], l = T.preFilter; s;) {
                    (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ue, " ")
                    }), s = s.slice(r.length));
                    for (a in T.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
            }, S = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = C(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r)), o.selector = e
                }
                return o
            }, N = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    f = !r && C(e = l.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                        if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
                            break
                        }
                }
                return (l || S(e, f))(r, t, !M, n, xe.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!j, D(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(ne, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
    ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
    var ce = ie.expr.match.needsContext,
        fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var he, pe = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), fe.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = pe.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return he.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = pe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    me.prototype = ie.fn, he = ie(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie.sibling(e.firstChild)
        },
        contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var xe = /\S+/g,
        be = {};
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? be[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        ! function o(t) {
                            ie.each(t, function(t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = u.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return u && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = l = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, n || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return f
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ie.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var we;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!pe.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(pe, [ie]), ie.fn.triggerHandler && (ie(pe).triggerHandler("ready"), ie(pe).off("ready")))
            }
        }
    }), ie.ready.promise = function(t) {
        if (!we)
            if (we = ie.Deferred(), "complete" === pe.readyState) setTimeout(ie.ready);
            else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            pe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && pe.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, ke = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n, r;
            n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = pe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ce = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ie.data(this, e, t)
            }) : o ? u(o, e, ie.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = ["Top", "Right", "Bottom", "Left"],
        _e = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        Ae = ie.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ie(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        je = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = pe.createElement("input"),
            t = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = pe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        Oe = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        Le = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = ie._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                        return typeof ie === ke || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(xe) || [""], s = t.length; s--;) o = Le.exec(t[s]) || [], h = g = o[1], p = (o[2] || "").split(".").sort(), h && (l = ie.event.special[h] || {}, h = (i ? l.delegateType : l.bindType) || h, l = ie.event.special[h] || {}, f = ie.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ie.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ie.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = ie.hasData(e) && ie._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(xe) || [""], l = t.length; l--;)
                    if (s = Le.exec(t[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = ie.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || ie.removeEvent(e, h, m.handle), delete c[h])
                    } else
                        for (h in c) ie.event.remove(e, h + t[l], n, r, !0);
                ie.isEmptyObject(c) && (delete m.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || pe],
                h = te.call(t, "type") ? t.type : t,
                p = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || pe, 3 !== r.nodeType && 8 !== r.nodeType && !Me.test(h + ie.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[ie.expando] ? t : new ie.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3,
                    t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[h] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !ie.isWindow(r)) {
                    for (u = l.delegateType || h, Me.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (r.ownerDocument || pe) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0;
                    (s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || h, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && ie.acceptData(r) && a && r[h] && !ie.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ie.event.triggered = h;
                    try {
                        r[h]()
                    } catch (g) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                u = (ie._data(this, "events") || {})[e.type] || [],
                l = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = He.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || pe, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = pe.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === ke && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                De.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ie.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = h;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        $e = / jQuery\d+="(?:null|\d+)"/g,
        qe = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        Re = /^\s+/,
        Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pe = /<([\w:]+)/,
        ze = /<tbody/i,
        Ie = /<|&#?\w+;/,
        We = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = g(pe),
        Qe = Ge.appendChild(pe.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = m(o), s = m(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || m(e), r = r || m(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = m(o, "script"), r.length > 0 && w(r, !u && m(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = g(t), h = [], p = 0; f > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(h, o.nodeType ? [o] : o);
                    else if (Ie.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Pe.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Be, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Re.test(o) && h.push(t.createTextNode(Re.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== u || ze.test(o) ? "<table>" !== c[1] || ze.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ie.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ne.appendChecked || ie.grep(m(h, "input"), v), p = 0; o = h[p++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = m(d.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
            return s = null, d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }
    }), ie.fn.extend({
        text: function(e) {
            return Ae(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(m(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace($e, "") : void 0;
                if ("string" == typeof e && !We.test(e) && (ne.htmlSerialize || !qe.test(e)) && (ne.leadingWhitespace || !Re.test(e)) && !Ye[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Be, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ie.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                d = e[0],
                h = ie.isFunction(d);
            if (h || l > 1 && "string" == typeof d && !ne.checkClone && Xe.test(d)) return this.each(function(n) {
                var r = c.eq(n);
                h && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(m(s, "script"), x), i = o.length; l > u; u++) r = s, u !== f && (r = ie.clone(r, !0, !0), i && ie.merge(o, m(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, b), u = 0; i > u; u++) r = o[u], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ze, Ke = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (t = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : pe.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r, i;
                n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), r = pe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(pe.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, u;
            n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == u && t(), u
                }
            }))
        }(), ie.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + Se + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + Se + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    u = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = N(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n
                } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = N(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in ft && (o = ft[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                    return D(e, t, r)
                }) : D(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && et(e);
                return A(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = S(ne.reliableMarginRight, function(e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ne[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nt.test(e) || (ie.cssHooks[e + t].set = A)
    }), ie.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return _(this, !0)
        },
        hide: function() {
            return _(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _e(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = O.prototype.init, ie.fx.step = {};
    var ht, pt, gt = /^(?:toggle|show|hide)$/,
        mt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [F],
        xt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = mt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && mt.exec(ie.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(q, {
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xt[n] = xt[n] || [], xt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(_e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function() {
                        var t = q(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (ht = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), ht = void 0
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            pt || (pt = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            clearInterval(pt), pt = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = pe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = pe.createElement("select"), i = n.appendChild(pe.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = pe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var bt = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], (n.selected || u === i) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Tt, kt = ie.expr.attrHandle,
        Et = /^(?:checked|selected)$/i,
        Ct = ne.getSetAttribute,
        St = ne.input;
    ie.fn.extend({
        attr: function(e, t) {
            return Ae(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(xe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? St && Ct || !Et.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Ct ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function(e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : St && Ct || !Et.test(n) ? e.setAttribute(!Ct && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = kt[t] || ie.find.attr;
        kt[t] = St && Ct || !Et.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = kt[t], kt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, kt[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), St && Ct || (ie.attrHooks.value = {
        set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), Ct || (wt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, kt.id = kt.name = kt.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, ie.attrHooks.contenteditable = {
        set: function(e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, ie.each(["width", "height"], function(e, t) {
        ie.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (ie.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,
        _t = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return Ae(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) {
        ie.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ie.propFix.enctype = "encoding");
    var At = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(xe) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(xe) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a);
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(xe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jt = ie.now(),
        Dt = /\?/,
        Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(Ot, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var Ht, Mt, Lt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zt = {},
        It = {},
        Wt = "*/".concat("*");
    try {
        Mt = location.href
    } catch (Xt) {
        Mt = pe.createElement("a"), Mt.href = "", Mt = Mt.href
    }
    Ht = Pt.exec(Mt.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: qt.test(Ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? P(P(e, ie.ajaxSettings), t) : P(ie.ajaxSettings, e)
        },
        ajaxPrefilter: R(zt),
        ajaxTransport: R(It),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, b, T = t;
                2 !== x && (x = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = z(f, w, n)), y = I(f, y, w, i), i ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ie.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (ie.etag[o] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? p.resolveWith(d, [c, T, w]) : p.rejectWith(d, [w, T, v]), w.statusCode(m), m = void 0, u && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : v]), g.fireWith(d, [w, T]), u && (h.trigger("ajaxComplete", [w, f]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, f = ie.ajaxSetup({}, t),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? ie(d) : ie.event,
                p = ie.Deferred(),
                g = ie.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!c)
                                for (c = {}; t = $t.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Mt) + "").replace(Lt, "").replace(Bt, Ht[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ie.trim(f.dataType || "*").toLowerCase().match(xe) || [""], null == f.crossDomain && (r = Pt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Ht[1] && r[2] === Ht[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ie.param(f.data, f.traditional)), B(zt, f, t, w), 2 === x) return w;
            u = f.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Dt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + jt++)), f.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]);
            for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
            if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](f[i]);
            if (l = B(It, f, t, w)) {
                w.readyState = 1, u && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, l.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Jt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Qt = 0,
        Zt = {},
        Kt = ie.ajaxSettings.xhr();
    e.ActiveXObject && ie(e).on("unload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), ne.cors = !!Kt && "withCredentials" in Kt, Kt = ne.ajax = !!Kt, Kt && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Qt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = pe.head || ie("head")[0] || pe.documentElement;
            return {
                send: function(r, i) {
                    t = pe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || ie.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ie.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || pe;
        var r = fe.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var nn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = ie.css(e, "position"),
                f = ie(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) {
            return Ae(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = S(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ae(this, function(t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function() {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
    }, typeof t === ke && (e.jQuery = e.$ = ie), ie
}),
function() {
    var e = this,
        t = e._,
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        c = Array.isArray,
        f = Object.keys,
        d = i.bind,
        h = function(e) {
            return e instanceof h ? e : this instanceof h ? void(this._wrapped = e) : new h(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : e._ = h, h.VERSION = "1.7.0";
    var p = function(e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function(n, r, i, o) {
                    return e.call(t, n, r, i, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    };
    h.iteratee = function(e, t, n) {
        return null == e ? h.identity : h.isFunction(e) ? p(e, t, n) : h.isObject(e) ? h.matches(e) : h.property(e)
    }, h.each = h.forEach = function(e, t, n) {
        if (null == e) return e;
        t = p(t, n);
        var r, i = e.length;
        if (i === +i)
            for (r = 0; i > r; r++) t(e[r], r, e);
        else {
            var o = h.keys(e);
            for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
        }
        return e
    }, h.map = h.collect = function(e, t, n) {
        if (null == e) return [];
        t = h.iteratee(t, n);
        for (var r, i = e.length !== +e.length && h.keys(e), o = (i || e).length, a = Array(o), s = 0; o > s; s++) r = i ? i[s] : s, a[s] = t(e[r], r, e);
        return a
    };
    var g = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function(e, t, n, r) {
        null == e && (e = []), t = p(t, r, 4);
        var i, o = e.length !== +e.length && h.keys(e),
            a = (o || e).length,
            s = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = e[o ? o[s++] : s++]
        }
        for (; a > s; s++) i = o ? o[s] : s, n = t(n, e[i], i, e);
        return n
    }, h.reduceRight = h.foldr = function(e, t, n, r) {
        null == e && (e = []), t = p(t, r, 4);
        var i, o = e.length !== +e.length && h.keys(e),
            a = (o || e).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = e[o ? o[--a] : --a]
        }
        for (; a--;) i = o ? o[a] : a, n = t(n, e[i], i, e);
        return n
    }, h.find = h.detect = function(e, t, n) {
        var r;
        return t = h.iteratee(t, n), h.some(e, function(e, n, i) {
            return t(e, n, i) ? (r = e, !0) : void 0
        }), r
    }, h.filter = h.select = function(e, t, n) {
        var r = [];
        return null == e ? r : (t = h.iteratee(t, n), h.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        }), r)
    }, h.reject = function(e, t, n) {
        return h.filter(e, h.negate(h.iteratee(t)), n)
    }, h.every = h.all = function(e, t, n) {
        if (null == e) return !0;
        t = h.iteratee(t, n);
        var r, i, o = e.length !== +e.length && h.keys(e),
            a = (o || e).length;
        for (r = 0; a > r; r++)
            if (i = o ? o[r] : r, !t(e[i], i, e)) return !1;
        return !0
    }, h.some = h.any = function(e, t, n) {
        if (null == e) return !1;
        t = h.iteratee(t, n);
        var r, i, o = e.length !== +e.length && h.keys(e),
            a = (o || e).length;
        for (r = 0; a > r; r++)
            if (i = o ? o[r] : r, t(e[i], i, e)) return !0;
        return !1
    }, h.contains = h.include = function(e, t) {
        return null == e ? !1 : (e.length !== +e.length && (e = h.values(e)), h.indexOf(e, t) >= 0)
    }, h.invoke = function(e, t) {
        var n = a.call(arguments, 2),
            r = h.isFunction(t);
        return h.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, h.pluck = function(e, t) {
        return h.map(e, h.property(t))
    }, h.where = function(e, t) {
        return h.filter(e, h.matches(t))
    }, h.findWhere = function(e, t) {
        return h.find(e, h.matches(t))
    }, h.max = function(e, t, n) {
        var r, i, o = -(1 / 0),
            a = -(1 / 0);
        if (null == t && null != e) {
            e = e.length === +e.length ? e : h.values(e);
            for (var s = 0, u = e.length; u > s; s++) r = e[s], r > o && (o = r)
        } else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
            i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
        });
        return o
    }, h.min = function(e, t, n) {
        var r, i, o = 1 / 0,
            a = 1 / 0;
        if (null == t && null != e) {
            e = e.length === +e.length ? e : h.values(e);
            for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
        } else t = h.iteratee(t, n), h.each(e, function(e, n, r) {
            i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
        });
        return o
    }, h.shuffle = function(e) {
        for (var t, n = e && e.length === +e.length ? e : h.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = h.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
    }, h.sample = function(e, t, n) {
        return null == t || n ? (e.length !== +e.length && (e = h.values(e)), e[h.random(e.length - 1)]) : h.shuffle(e).slice(0, Math.max(0, t))
    }, h.sortBy = function(e, t, n) {
        return t = h.iteratee(t, n), h.pluck(h.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var m = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = h.iteratee(n, r), h.each(t, function(r, o) {
                var a = n(r, o, t);
                e(i, r, a)
            }), i
        }
    };
    h.groupBy = m(function(e, t, n) {
        h.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), h.indexBy = m(function(e, t, n) {
        e[n] = t
    }), h.countBy = m(function(e, t, n) {
        h.has(e, n) ? e[n]++ : e[n] = 1
    }), h.sortedIndex = function(e, t, n, r) {
        n = h.iteratee(n, r, 1);
        for (var i = n(t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, h.toArray = function(e) {
        return e ? h.isArray(e) ? a.call(e) : e.length === +e.length ? h.map(e, h.identity) : h.values(e) : []
    }, h.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
    }, h.partition = function(e, t, n) {
        t = h.iteratee(t, n);
        var r = [],
            i = [];
        return h.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e)
        }), [r, i]
    }, h.first = h.head = h.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : a.call(e, 0, t)
    }, h.initial = function(e, t, n) {
        return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, h.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
    }, h.rest = h.tail = h.drop = function(e, t, n) {
        return a.call(e, null == t || n ? 1 : t)
    }, h.compact = function(e) {
        return h.filter(e, h.identity)
    };
    var v = function(e, t, n, r) {
        if (t && h.every(e, h.isArray)) return s.apply(r, e);
        for (var i = 0, a = e.length; a > i; i++) {
            var u = e[i];
            h.isArray(u) || h.isArguments(u) ? t ? o.apply(r, u) : v(u, t, n, r) : n || r.push(u)
        }
        return r
    };
    h.flatten = function(e, t) {
        return v(e, t, !1, [])
    }, h.without = function(e) {
        return h.difference(e, a.call(arguments, 1))
    }, h.uniq = h.unique = function(e, t, n, r) {
        if (null == e) return [];
        h.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = h.iteratee(n, r));
        for (var i = [], o = [], a = 0, s = e.length; s > a; a++) {
            var u = e[a];
            if (t) a && o === u || i.push(u), o = u;
            else if (n) {
                var l = n(u, a, e);
                h.indexOf(o, l) < 0 && (o.push(l), i.push(u))
            } else h.indexOf(i, u) < 0 && i.push(u)
        }
        return i
    }, h.union = function() {
        return h.uniq(v(arguments, !0, !0, []))
    }, h.intersection = function(e) {
        if (null == e) return [];
        for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
            var o = e[r];
            if (!h.contains(t, o)) {
                for (var a = 1; n > a && h.contains(arguments[a], o); a++);
                a === n && t.push(o)
            }
        }
        return t
    }, h.difference = function(e) {
        var t = v(a.call(arguments, 1), !0, !0, []);
        return h.filter(e, function(e) {
            return !h.contains(t, e)
        })
    }, h.zip = function(e) {
        if (null == e) return [];
        for (var t = h.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) n[r] = h.pluck(arguments, r);
        return n
    }, h.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, h.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = h.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, h.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = e.length;
        for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;)
            if (e[r] === t) return r;
        return -1
    }, h.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
        return i
    };
    var y = function() {};
    h.bind = function(e, t) {
        var n, r;
        if (d && e.bind === d) return d.apply(e, a.call(arguments, 1));
        if (!h.isFunction(e)) throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return e.apply(t, n.concat(a.call(arguments)));
            y.prototype = e.prototype;
            var i = new y;
            y.prototype = null;
            var o = e.apply(i, n.concat(a.call(arguments)));
            return h.isObject(o) ? o : i
        }
    }, h.partial = function(e) {
        var t = a.call(arguments, 1);
        return function() {
            for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++) r[i] === h && (r[i] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, h.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++) n = arguments[t], e[n] = h.bind(e[n], e);
        return e
    }, h.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache,
                o = t ? t.apply(this, arguments) : r;
            return h.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
    }, h.delay = function(e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, h.defer = function(e) {
        return h.delay.apply(h, [e, 1].concat(a.call(arguments, 1)))
    }, h.throttle = function(e, t, n) {
        var r, i, o, a = null,
            s = 0;
        n || (n = {});
        var u = function() {
            s = n.leading === !1 ? 0 : h.now(), a = null, o = e.apply(r, i), a || (r = i = null)
        };
        return function() {
            var l = h.now();
            s || n.leading !== !1 || (s = l);
            var c = t - (l - s);
            return r = this, i = arguments, 0 >= c || c > t ? (clearTimeout(a), a = null, s = l, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, c)), o
        }
    }, h.debounce = function(e, t, n) {
        var r, i, o, a, s, u = function() {
            var l = h.now() - a;
            t > l && l > 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
        };
        return function() {
            o = this, i = arguments, a = h.now();
            var l = n && !r;
            return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s
        }
    }, h.wrap = function(e, t) {
        return h.partial(t, e)
    }, h.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }, h.compose = function() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
        }
    }, h.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, h.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n
        }
    }, h.once = h.partial(h.before, 2), h.keys = function(e) {
        if (!h.isObject(e)) return [];
        if (f) return f(e);
        var t = [];
        for (var n in e) h.has(e, n) && t.push(n);
        return t
    }, h.values = function(e) {
        for (var t = h.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, h.pairs = function(e) {
        for (var t = h.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, h.invert = function(e) {
        for (var t = {}, n = h.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, h.functions = h.methods = function(e) {
        var t = [];
        for (var n in e) h.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, h.extend = function(e) {
        if (!h.isObject(e)) return e;
        for (var t, n, r = 1, i = arguments.length; i > r; r++) {
            t = arguments[r];
            for (n in t) l.call(t, n) && (e[n] = t[n])
        }
        return e
    }, h.pick = function(e, t, n) {
        var r, i = {};
        if (null == e) return i;
        if (h.isFunction(t)) {
            t = p(t, n);
            for (r in e) {
                var o = e[r];
                t(o, r, e) && (i[r] = o)
            }
        } else {
            var u = s.apply([], a.call(arguments, 1));
            e = new Object(e);
            for (var l = 0, c = u.length; c > l; l++) r = u[l], r in e && (i[r] = e[r])
        }
        return i
    }, h.omit = function(e, t, n) {
        if (h.isFunction(t)) t = h.negate(t);
        else {
            var r = h.map(s.apply([], a.call(arguments, 1)), String);
            t = function(e, t) {
                return !h.contains(r, t)
            }
        }
        return h.pick(e, t, n)
    }, h.defaults = function(e) {
        if (!h.isObject(e)) return e;
        for (var t = 1, n = arguments.length; n > t; t++) {
            var r = arguments[t];
            for (var i in r) void 0 === e[i] && (e[i] = r[i])
        }
        return e
    }, h.clone = function(e) {
        return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
    }, h.tap = function(e, t) {
        return t(e), e
    };
    var x = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof h && (e = e._wrapped), t instanceof h && (t = t._wrapped);
        var i = u.call(e);
        if (i !== u.call(t)) return !1;
        switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;)
            if (n[o] === e) return r[o] === t;
        var a = e.constructor,
            s = t.constructor;
        if (a !== s && "constructor" in e && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(s) && s instanceof s)) return !1;
        n.push(e), r.push(t);
        var l, c;
        if ("[object Array]" === i) {
            if (l = e.length, c = l === t.length)
                for (; l-- && (c = x(e[l], t[l], n, r)););
        } else {
            var f, d = h.keys(e);
            if (l = d.length, c = h.keys(t).length === l)
                for (; l-- && (f = d[l], c = h.has(t, f) && x(e[f], t[f], n, r)););
        }
        return n.pop(), r.pop(), c
    };
    h.isEqual = function(e, t) {
        return x(e, t, [], [])
    }, h.isEmpty = function(e) {
        if (null == e) return !0;
        if (h.isArray(e) || h.isString(e) || h.isArguments(e)) return 0 === e.length;
        for (var t in e)
            if (h.has(e, t)) return !1;
        return !0
    }, h.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, h.isArray = c || function(e) {
        return "[object Array]" === u.call(e)
    }, h.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        h["is" + e] = function(t) {
            return u.call(t) === "[object " + e + "]"
        }
    }), h.isArguments(arguments) || (h.isArguments = function(e) {
        return h.has(e, "callee")
    }), "function" != typeof /./ && (h.isFunction = function(e) {
        return "function" == typeof e || !1
    }), h.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, h.isNaN = function(e) {
        return h.isNumber(e) && e !== +e
    }, h.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" === u.call(e)
    }, h.isNull = function(e) {
        return null === e
    }, h.isUndefined = function(e) {
        return void 0 === e
    }, h.has = function(e, t) {
        return null != e && l.call(e, t)
    }, h.noConflict = function() {
        return e._ = t, this
    }, h.identity = function(e) {
        return e
    }, h.constant = function(e) {
        return function() {
            return e
        }
    }, h.noop = function() {}, h.property = function(e) {
        return function(t) {
            return t[e]
        }
    }, h.matches = function(e) {
        var t = h.pairs(e),
            n = t.length;
        return function(e) {
            if (null == e) return !n;
            e = new Object(e);
            for (var r = 0; n > r; r++) {
                var i = t[r],
                    o = i[0];
                if (i[1] !== e[o] || !(o in e)) return !1
            }
            return !0
        }
    }, h.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = p(t, n, 1);
        for (var i = 0; e > i; i++) r[i] = t(i);
        return r
    }, h.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, h.now = Date.now || function() {
        return (new Date).getTime()
    };
    var b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        w = h.invert(b),
        T = function(e) {
            var t = function(t) {
                    return e[t]
                },
                n = "(?:" + h.keys(e).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
        };
    h.escape = T(b), h.unescape = T(w), h.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return h.isFunction(n) ? e[t]() : n
    };
    var k = 0;
    h.uniqueId = function(e) {
        var t = ++k + "";
        return e ? e + t : t
    }, h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var E = /(.)^/,
        C = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        S = /\\|'|\r|\n|\u2028|\u2029/g,
        N = function(e) {
            return "\\" + C[e]
        };
    h.template = function(e, t, n) {
        !t && n && (t = n), t = h.defaults({}, t, h.templateSettings);
        var r = RegExp([(t.escape || E).source, (t.interpolate || E).source, (t.evaluate || E).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
        e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(S, N), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o)
        } catch (s) {
            throw s.source = o, s
        }
        var u = function(e) {
                return a.call(this, e, h)
            },
            l = t.variable || "obj";
        return u.source = "function(" + l + "){\n" + o + "}", u
    }, h.chain = function(e) {
        var t = h(e);
        return t._chain = !0, t
    };
    var _ = function(e) {
        return this._chain ? h(e).chain() : e
    };
    h.mixin = function(e) {
        h.each(h.functions(e), function(t) {
            var n = h[t] = e[t];
            h.prototype[t] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments), _.call(this, n.apply(h, e))
            }
        })
    }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = n[e];
        h.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], _.call(this, n)
        }
    }), h.each(["concat", "join", "slice"], function(e) {
        var t = n[e];
        h.prototype[e] = function() {
            return _.call(this, t.apply(this._wrapped, arguments))
        }
    }), h.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return h
    })
}.call(this),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t, n, r) {
        var i = e.Backbone,
            o = [],
            a = (o.push, o.slice);
        o.splice;
        t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = t.Events = {
                on: function(e, t, n) {
                    if (!l(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var r = this._events[e] || (this._events[e] = []);
                    return r.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, r) {
                    if (!l(this, "once", e, [t, r]) || !t) return this;
                    var i = this,
                        o = n.once(function() {
                            i.off(e, o), t.apply(this, arguments)
                        });
                    return o._callback = t, this.on(e, o, r)
                },
                off: function(e, t, r) {
                    var i, o, a, s, u, c, f, d;
                    if (!this._events || !l(this, "off", e, [t, r])) return this;
                    if (!e && !t && !r) return this._events = void 0, this;
                    for (s = e ? [e] : n.keys(this._events), u = 0, c = s.length; c > u; u++)
                        if (e = s[u], a = this._events[e]) {
                            if (this._events[e] = i = [], t || r)
                                for (f = 0, d = a.length; d > f; f++) o = a[f], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && i.push(o);
                            i.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = a.call(arguments, 1);
                    if (!l(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && c(n, t), r && c(r, arguments), this
                },
                stopListening: function(e, t, r) {
                    var i = this._listeningTo;
                    if (!i) return this;
                    var o = !t && !r;
                    r || "object" != typeof t || (r = this), e && ((i = {})[e._listenId] = e);
                    for (var a in i) e = i[a], e.off(t, r, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
                    return this
                }
            },
            u = /\s+/,
            l = function(e, t, n, r) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    return !1
                }
                if (u.test(n)) {
                    for (var o = n.split(u), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(r));
                    return !1
                }
                return !0
            },
            c = function(e, t) {
                var n, r = -1,
                    i = e.length,
                    o = t[0],
                    a = t[1],
                    s = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                        return;
                    case 3:
                        for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                        return;
                    default:
                        for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
                        return
                }
            },
            f = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(f, function(e, t) {
            s[t] = function(t, r, i) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    a = t._listenId || (t._listenId = n.uniqueId("l"));
                return o[a] = t, i || "object" != typeof r || (i = this), t[e](r, i, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
        var d = t.Model = function(e, t) {
            var r = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(d.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            set: function(e, t, r) {
                var i, o, a, s, u, l, c, f;
                if (null == e) return this;
                if ("object" == typeof e ? (o = e, r = t) : (o = {})[e] = t, r || (r = {}), !this._validate(o, r)) return !1;
                a = r.unset, u = r.silent, s = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), f = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (i in o) t = o[i], n.isEqual(f[i], t) || s.push(i), n.isEqual(c[i], t) ? delete this.changed[i] : this.changed[i] = t, a ? delete f[i] : f[i] = t;
                if (!u) {
                    s.length && (this._pending = r);
                    for (var d = 0, h = s.length; h > d; d++) this.trigger("change:" + s[d], this, f[s[d]], r)
                }
                if (l) return this;
                if (!u)
                    for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var r in this.attributes) t[r] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, r = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var o in e) n.isEqual(i[o], t = e[o]) || ((r || (r = {}))[o] = t);
                return r
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    r = e.success;
                return e.success = function(n) {
                    return t.set(t.parse(n, e), e) ? (r && r(t, n, e), void t.trigger("sync", t, n, e)) : !1
                }, $(this, e), this.sync("read", this, e)
            },
            save: function(e, t, r) {
                var i, o, a, s = this.attributes;
                if (null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
                        validate: !0
                    }, r), i && !r.wait) {
                    if (!this.set(i, r)) return !1
                } else if (!this._validate(i, r)) return !1;
                i && r.wait && (this.attributes = n.extend({}, s, i)), void 0 === r.parse && (r.parse = !0);
                var u = this,
                    l = r.success;
                return r.success = function(e) {
                    u.attributes = s;
                    var t = u.parse(e, r);
                    return r.wait && (t = n.extend(i || {}, t)), n.isObject(t) && !u.set(t, r) ? !1 : (l && l(u, e, r), void u.trigger("sync", u, e, r))
                }, $(this, r), o = this.isNew() ? "create" : r.patch ? "patch" : "update", "patch" === o && (r.attrs = i), a = this.sync(o, this, r), i && r.wait && (this.attributes = s), a
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    r = e.success,
                    i = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (e.success = function(n) {
                        (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    }, this.isNew()) return e.success(), !1;
                $(this, e);
                var o = this.sync("delete", this, e);
                return e.wait || i(), o
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return r ? (this.trigger("invalid", this, r, n.extend(t, {
                    validationError: r
                })), !1) : !0
            }
        });
        var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(h, function(e) {
            d.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var p = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            g = {
                add: !0,
                remove: !0,
                merge: !0
            },
            m = {
                add: !0,
                remove: !1
            };
        n.extend(p.prototype, s, {
            model: d,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, m))
            },
            remove: function(e, t) {
                var r = !n.isArray(e);
                e = r ? [e] : n.clone(e), t || (t = {});
                var i, o, a, s;
                for (i = 0, o = e.length; o > i; i++) s = e[i] = this.get(e[i]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                return r ? e[0] : e
            },
            set: function(e, t) {
                t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
                var r = !n.isArray(e);
                e = r ? e ? [e] : [] : n.clone(e);
                var i, o, a, s, u, l, c, f = t.at,
                    h = this.model,
                    p = this.comparator && null == f && t.sort !== !1,
                    m = n.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    x = {},
                    b = t.add,
                    w = t.merge,
                    T = t.remove,
                    k = !p && b && T ? [] : !1;
                for (i = 0, o = e.length; o > i; i++) {
                    if (u = e[i] || {}, a = u instanceof d ? s = u : u[h.prototype.idAttribute || "id"], l = this.get(a)) T && (x[l.cid] = !0), w && (u = u === s ? s.attributes : u, t.parse && (u = l.parse(u, t)), l.set(u, t), p && !c && l.hasChanged(m) && (c = !0)), e[i] = l;
                    else if (b) {
                        if (s = e[i] = this._prepareModel(u, t), !s) continue;
                        v.push(s), this._addReference(s, t)
                    }
                    s = l || s, !k || !s.isNew() && x[s.id] || k.push(s), x[s.id] = !0
                }
                if (T) {
                    for (i = 0, o = this.length; o > i; ++i) x[(s = this.models[i]).cid] || y.push(s);
                    y.length && this.remove(y, t)
                }
                if (v.length || k && k.length)
                    if (p && (c = !0), this.length += v.length, null != f)
                        for (i = 0, o = v.length; o > i; i++) this.models.splice(f + i, 0, v[i]);
                    else {
                        k && (this.models.length = 0);
                        var E = k || v;
                        for (i = 0, o = E.length; o > i; i++) this.models.push(E[i])
                    }
                if (c && this.sort({
                        silent: !0
                    }), !t.silent) {
                    for (i = 0, o = v.length; o > i; i++)(s = v[i]).trigger("add", s, this, t);
                    (c || k && k.length) && this.trigger("sort", this, t)
                }
                return r ? e[0] : e
            },
            reset: function(e, t) {
                t || (t = {});
                for (var r = 0, i = this.models.length; i > r; r++) this._removeReference(this.models[r], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(e) {
                return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    r = this;
                return e.success = function(n) {
                    var i = e.reset ? "reset" : "set";
                    r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
                }, $(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var r = this,
                    i = t.success;
                return t.success = function(e, n) {
                    t.wait && r.add(e, t), i && i(e, n, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof d) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var r = new this.model(e, t);
                return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(v, function(e) {
            p.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(e) {
            p.prototype[e] = function(t, r) {
                var i = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, i, r)
            }
        });
        var x = t.View = function(e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(x.prototype, s, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    if (n.isFunction(r) || (r = this[e[t]]), r) {
                        var i = t.match(b),
                            o = i[1],
                            a = i[2];
                        r = n.bind(r, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, r) : this.$el.on(o, a, r)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(n.result(this, "el"), !1);
                else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(r, !1)
                }
            }
        }), t.sync = function(e, r, i) {
            var o = k[e];
            n.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var a = {
                type: o,
                dataType: "json"
            };
            if (i.url || (a.url = n.result(r, "url") || F()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                a.type = "POST", i.emulateJSON && (a.data._method = o);
                var s = i.beforeSend;
                i.beforeSend = function(e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || i.emulateJSON || (a.processData = !1), "PATCH" === a.type && T && (a.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var u = i.xhr = t.ajax(n.extend(a, i));
            return r.trigger("request", r, u, i), u
        };
        var T = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            k = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var E = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            C = /\((.*?)\)/g,
            S = /(\(\?)?:\w+/g,
            N = /\*\w+/g,
            _ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(E.prototype, s, {
            initialize: function() {},
            route: function(e, r, i) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                var o = this;
                return t.history.route(e, function(n) {
                    var a = o._extractParameters(e, n);
                    o.execute(i, a), o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a)
                }), this
            },
            execute: function(e, t) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace(_, "\\$&").replace(C, "(?:$1)?").replace(S, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(N, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var r = e.exec(t).slice(1);
                return n.map(r, function(e, t) {
                    return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var A = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            j = /^[#\/]|\s+$/g,
            D = /^\/+|\/+$/g,
            O = /msie [\w.]+/,
            H = /\/$/,
            M = /#.*$/;
        A.started = !1, n.extend(A.prototype, s, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(H, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(j, "")
            },
            start: function(e) {
                if (A.started) throw new Error("Backbone.history has already been started");
                A.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var r = this.getFragment(),
                    i = document.documentMode,
                    o = O.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                if (this.root = ("/" + this.root + "/").replace(D, "/"), o && this._wantsHashChange) {
                    var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(r)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                var s = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(j, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), A.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
            },
            loadUrl: function(e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            },
            navigate: function(e, t) {
                if (!A.started) return !1;
                t && t !== !0 || (t = {
                    trigger: !!t
                });
                var n = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(M, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new A;
        var L = function(e, t) {
            var r, i = this;
            r = e && n.has(e, "constructor") ? e.constructor : function() {
                return i.apply(this, arguments)
            }, n.extend(r, i, t);
            var o = function() {
                this.constructor = r
            };
            return o.prototype = i.prototype, r.prototype = new o, e && n.extend(r.prototype, e), r.__super__ = i.prototype, r
        };
        d.extend = p.extend = E.extend = x.extend = A.extend = L;
        var F = function() {
                throw new Error('A "url" property or function must be specified')
            },
            $ = function(e, t) {
                var n = t.error;
                t.error = function(r) {
                    n && n(e, r, t), e.trigger("error", e, r, t)
                }
            };
        return t
    }), MEME = {
        $: jQuery,
        render: function() {
            this.canvas && this.canvas.render()
        },
        init: function() {
            this.model = new this.MemeModel(window.MEME_SETTINGS || {}), this.canvas = new this.MemeCanvasView({
                el: "#meme-canvas-view",
                model: this.model
            }), this.editor = new this.MemeEditorView({
                el: "#meme-editor-view",
                model: this.model
            }), this.waitForFonts().then(function() {
                MEME.render()
            })
        }
    }, MEME.$(function() {
        MEME.init()
    }), MEME.MemeModel = Backbone.Model.extend({
        defaults: {
            backgroundPosition: {
                x: null,
                y: null
            },
            creditText: "Source:",
            creditSize: 12,
            downloadName: "share",
            fontColor: "white",
            fontFamily: "Helvetica Neue",
            fontFamilyOpts: ["Helvetica", "Helvetica Neue", "Comic Sans MS"],
            fontSize: 24,
            fontSizeOpts: [14, 24, 36],
            headlineText: "Write your own headline",
            height: 378,
            imageScale: 1,
            imageSrc: "",
            overlayAlpha: .5,
            overlayColor: "#000",
            overlayColorOpts: ["#000", "#777", "#2980b9"],
            paddingRatio: .05,
            textAlign: "left",
            textAlignOpts: ["left", "center", "right"],
            textShadow: !0,
            textShadowEdit: !0,
            watermarkAlpha: .75,
            watermarkMaxWidthRatio: .25,
            watermarkSrc: "",
            watermarkOpts: [],
            width: 755
        },
        initialize: function() {
            this.background = new Image, this.watermark = new Image, this.background.onload = this.watermark.onload = _.bind(function() {
                this.trigger("change")
            }, this), this.get("imageSrc") && (this.background.src = this.get("imageSrc")), this.get("watermarkSrc") && this.setWatermarkSrc(this.get("watermarkSrc")), this.listenTo(this, "change:imageSrc", function() {
                this.background.src = this.get("imageSrc")
            }), this.listenTo(this, "change:watermarkSrc", function() {
                this.setWatermarkSrc(this.get("watermarkSrc"))
            })
        },
        hasBackground: function() {
            return this.background.width && this.background.height
        },
        loadFileForImage: function(e, t) {
            var n = new FileReader;
            n.onload = function() {
                t.src = n.result
            }, n.readAsDataURL(e)
        },
        loadBackground: function(e) {
            this.loadFileForImage(e, this.background)
        },
        loadWatermark: function(e) {
            this.loadFileForImage(e, this.watermark)
        },
        setWatermarkSrc: function(e) {
            var t = _.findWhere(this.get("watermarkOpts"), {
                    value: e
                }),
                n = t && t.data || e;
            0 === n.indexOf("data:") ? this.watermark.removeAttribute("crossorigin") : this.watermark.setAttribute("crossorigin", "anonymous"), this.watermark.src = n, this.set("watermarkSrc", e)
        }
    }), MEME.MemeCanvasView = Backbone.View.extend({
        initialize: function() {
            var e = document.createElement("canvas"),
                t = MEME.$("#meme-canvas");
            e && e.getContext ? (t.html(e), this.canvas = e, this.setDownload(), this.render()) : t.html(this.$("noscript").html()), this.listenTo(this.model, "change", this.render)
        },
        setDownload: function() {
            var e = document.createElement("a");
            "undefined" == typeof e.download && this.$el.append('<p class="m-canvas__download-note">Right-click button and select "Download Linked File..." to save image.</p>')
        },
        render: function() {
            function e(e) {
                var t = o.background.height,
                    n = o.background.width;
                if (t && n) {
                    var r = t * a.imageScale,
                        i = n * a.imageScale,
                        s = a.backgroundPosition.x || a.width / 2,
                        u = a.backgroundPosition.y || a.height / 2;
                    e.drawImage(o.background, 0, 0, n, t, s - i / 2, u - r / 2, i, r)
                }
            }

            function t(e) {
                a.overlayColor && (e.save(), e.globalAlpha = a.overlayAlpha, e.fillStyle = a.overlayColor, e.fillRect(0, 0, a.width, a.height), e.globalAlpha = 1, e.restore())
            }

            function n(e) {
                var t = Math.round(.75 * a.width),
                    n = u,
                    r = u;
                e.font = a.fontSize + "pt " + a.fontFamily, e.fillStyle = a.fontColor, e.textBaseline = "top", a.textShadow && (e.shadowColor = "#666", e.shadowOffsetX = -2, e.shadowOffsetY = 1, e.shadowBlur = 10), "center" == a.textAlign ? (e.textAlign = "center", n = a.width / 2,  t = a.width - a.width / 3) : "right" == a.textAlign ? (e.textAlign = "right", n = a.width - u) : e.textAlign = "left";
                for (var i = a.headlineText.split(" "), o = "", s = 0; s < i.length; s++) {
                    var l = o + i[s] + " ",
                        c = e.measureText(l),
                        f = c.width;
                    f > t && s > 0 ? (e.fillText(o, n, r), o = i[s] + " ", r += Math.round(1.5 * a.fontSize)) : o = l
                }
                e.fillText(o, n, r), e.shadowColor = "transparent"
            }

            function r(e) {
                e.textBaseline = "bottom", e.textAlign = "left", e.fillStyle = a.fontColor, e.font = "normal " + a.creditSize + "pt " + a.fontFamily, e.fillText(a.creditText, u, a.height - u)
            }

            function i(e) {
                var t, n, r, i;
                if (n = i = o.watermark.height, t = r = o.watermark.width, n && t) {
                    var s = a.width * a.watermarkMaxWidthRatio;
                    t > s && (i = n * (s / t), r = s), e.globalAlpha = a.watermarkAlpha, e.drawImage(o.watermark, 0, 0, t, n, a.width - u - r, a.height - u - i, r, i), e.globalAlpha = 1
                }
            }
            if (this.canvas) {
                var o = this.model,
                    a = this.model.toJSON(),
                    s = this.canvas.getContext("2d"),
                    u = Math.round(a.width * a.paddingRatio);
                this.canvas.width = a.width, this.canvas.height = a.height, s.clearRect(0, 0, a.width, a.height), e(s), t(s), n(s), r(s), i(s);
                var l = this.canvas.toDataURL();
                this.$("#meme-download").attr({
                    href: l,
                    download: (a.downloadName || "share") + ".png"
                }), this.canvas.style.cursor = this.model.background.width ? "move" : "default"
            }
        },
        events: {
            "mousedown canvas": "onDrag"
        },
        onDrag: function(e) {
            function t(e) {
                e.preventDefault(), n.set("backgroundPosition", {
                    x: Math.max(r.width - i, Math.min(s.x - (a.x - e.clientX), i)),
                    y: Math.max(r.height - o, Math.min(s.y - (a.y - e.clientY), o))
                })
            }
            if (e.preventDefault(), this.model.hasBackground()) {
                var n = this.model,
                    r = n.toJSON(),
                    i = n.background.width * r.imageScale / 2,
                    o = n.background.height * r.imageScale / 2,
                    a = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    s = r.backgroundPosition;
                s.x = s.x || r.width / 2, s.y = s.y || r.height / 2;
                var u = MEME.$(document).on("mousemove.drag", t).on("mouseup.drag", function(e) {
                    u.off("mouseup.drag mousemove.drag"), t(e)
                })
            }
        }
    }), MEME.MemeEditorView = Backbone.View.extend({
        initialize: function() {
            this.buildForms(), this.listenTo(this.model, "change", this.render), this.render()
        },
        buildForms: function() {
            function e(e) {
                return _.reduce(e, function(e, t) {
                    return e += ['<option value="', t.hasOwnProperty("value") ? t.value : t, '">', t.hasOwnProperty("text") ? t.text : t, "</option>"].join("")
                }, "")
            }
            var t = this.model.toJSON();
            if (t.textShadowEdit && $("#text-shadow").parent().show(), t.textAlignOpts && t.textAlignOpts.length && $("#text-align").append(e(t.textAlignOpts)).show(), t.fontSizeOpts && t.fontSizeOpts.length && $("#font-size").append(e(t.fontSizeOpts)).show(), t.fontFamilyOpts && t.fontFamilyOpts.length && $("#font-family").append(e(t.fontFamilyOpts)).show(), t.watermarkOpts && t.watermarkOpts.length && $("#watermark").append(e(t.watermarkOpts)).show(), t.overlayColorOpts && t.overlayColorOpts.length) {
                var n = _.reduce(t.overlayColorOpts, function(e, t) {
                    var n = t.hasOwnProperty("value") ? t.value : t;
                    return e += '<li><label><input class="m-editor__swatch" style="background-color:' + n + '" type="radio" name="overlay" value="' + n + '"></label></li>'
                }, "");
                $("#overlay").show().find("ul").append(n)
            }
        },
        render: function() {
            var e = this.model.toJSON();
            this.$("#headline").val(e.headlineText), this.$("#credit").val(e.creditText), this.$("#watermark").val(e.watermarkSrc), this.$("#image-scale").val(e.imageScale), this.$("#font-size").val(e.fontSize), this.$("#font-family").val(e.fontFamily), this.$("#text-align").val(e.textAlign), this.$("#text-shadow").prop("checked", e.textShadow), this.$("#overlay").find('[value="' + e.overlayColor + '"]').prop("checked", !0)
        },
        events: {
            "input #headline": "onHeadline",
            "input #credit": "onCredit",
            "input #image-scale": "onScale",
            "change #font-size": "onFontSize",
            "change #font-family": "onFontFamily",
            "change #watermark": "onWatermark",
            "change #text-align": "onTextAlign",
            "change #text-shadow": "onTextShadow",
            'change [name="overlay"]': "onOverlayColor",
            "dragover #dropzone": "onZoneOver",
            "dragleave #dropzone": "onZoneOut",
            "drop #dropzone": "onZoneDrop"
        },
        onCredit: function() {
            this.model.set("creditText", this.$("#credit").val())
        },
        onHeadline: function() {
            this.model.set("headlineText", this.$("#headline").val())
        },
        onTextAlign: function() {
            this.model.set("textAlign", this.$("#text-align").val())
        },
        onTextShadow: function() {
            this.model.set("textShadow", this.$("#text-shadow").prop("checked"))
        },
        onFontSize: function() {
            this.model.set("fontSize", this.$("#font-size").val())
        },
        onFontFamily: function() {
            this.model.set("fontFamily", this.$("#font-family").val())
        },
        onWatermark: function() {
            this.model.set("watermarkSrc", this.$("#watermark").val()), localStorage && localStorage.setItem("meme_watermark", this.$("#watermark").val())
        },
        onScale: function() {
            this.model.set("imageScale", this.$("#image-scale").val())
        },
        onOverlayColor: function(e) {
            this.model.set("overlayColor", this.$(e.target).val())
        },
        getDataTransfer: function(e) {
            return e.stopPropagation(), e.preventDefault(), e.originalEvent.dataTransfer || null
        },
        onZoneOver: function(e) {
            var t = this.getDataTransfer(e);
            t && (t.dropEffect = "copy", this.$("#dropzone").addClass("pulse"))
        },
        onZoneOut: function(e) {
            this.$("#dropzone").removeClass("pulse")
        },
        onZoneDrop: function(e) {
            var t = this.getDataTransfer(e);
            t && (this.model.loadBackground(t.files[0]), this.$("#dropzone").removeClass("pulse"))
        }
    }), MEME.waitForFonts = function(e) {
        function t(e) {
            var t = document.createElement("span");
            t.innerHTML = "giItT1WQy@!-/#", t.style.position = "absolute", t.style.left = t.style.top = "-10000px", t.style.fontSize = "300px", t.style.fontFamily = "sans-serif", t.style.fontVariant = "normal", t.style.fontStyle = "normal", t.style.fontWeight = "normal", t.style.letterSpacing = "0", document.body.appendChild(t), this.el = t, this.sw = t.offsetWidth, t.style.fontFamily = e
        }

        function n() {
            if (!(o < a.length)) return i.resolve(), void("function" == typeof e && e());
            setTimeout(n, 50);
            for (var t = 0; t < a.length; t++) {
                var r = a[t];
                r.el && r.el.offsetWidth != r.sw && (r.el.parentNode.removeChild(r.el), r.el = null, o++)
            }
        }
        var r = this.model.get("fontFamily").split(",");
        r = _.map(this.model.get("fontFamilyOpts") || [], function(e) {
            return e.hasOwnProperty("value") ? e.value : e
        }).concat(r), r = _.unique(r);
        for (var i = this.$.Deferred(), o = 0, a = [], s = 0; s < r.length; s++) a.push(new t(r[s]));
        return n(), i.promise()
    };