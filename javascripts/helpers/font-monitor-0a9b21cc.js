MEME.waitForFonts = function(t) {
    function e(t) {
        var e = document.createElement("span");
        e.innerHTML = "giItT1WQy@!-/#", e.style.position = "absolute", e.style.left = e.style.top = "-10000px", e.style.fontSize = "300px", e.style.fontFamily = "sans-serif", e.style.fontVariant = "normal", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "0", document.body.appendChild(e), this.el = e, this.sw = e.offsetWidth, e.style.fontFamily = t
    }

    function n() {
        if (!(i < s.length)) return o.resolve(), void("function" == typeof t && t());
        setTimeout(n, 50);
        for (var e = 0; e < s.length; e++) {
            var l = s[e];
            l.el && l.el.offsetWidth != l.sw && (l.el.parentNode.removeChild(l.el), l.el = null, i++)
        }
    }
    var l = this.model.get("fontFamily").split(",");
    l = _.map(this.model.get("fontFamilyOpts") || [], function(t) {
        return t.hasOwnProperty("value") ? t.value : t
    }).concat(l), l = _.unique(l);
    for (var o = this.$.Deferred(), i = 0, s = [], r = 0; r < l.length; r++) s.push(new e(l[r]));
    return n(), o.promise()
};