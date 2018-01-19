MEME.MemeCanvasView = Backbone.View.extend({
    initialize: function() {
        var t = document.createElement("canvas"),
            e = MEME.$("#meme-canvas");
        t && t.getContext ? (e.html(t), this.canvas = t, this.setDownload(), this.render()) : e.html(this.$("noscript").html()), this.listenTo(this.model, "change", this.render)
    },
    setDownload: function() {
        var t = document.createElement("a");
        "undefined" == typeof t.download && this.$el.append('<p class="m-canvas__download-note">Right-click button and select "Download Linked File..." to save image.</p>')
    },
    render: function() {
        function t(t) {
            var e = n.background.height,
                a = n.background.width;
            if (e && a) {
                var i = e * h.imageScale,
                    o = a * h.imageScale,
                    l = h.backgroundPosition.x || h.width / 2,
                    d = h.backgroundPosition.y || h.height / 2;
                t.drawImage(n.background, 0, 0, a, e, l - o / 2, d - i / 2, o, i)
            }
        }

        function e(t) {
            h.overlayColor && (t.save(), t.globalAlpha = h.overlayAlpha, t.fillStyle = h.overlayColor, t.fillRect(0, 0, h.width, h.height), t.globalAlpha = 1, t.restore())
        }

        function a(t) {
            var e = Math.round(.75 * h.width),
                a = d,
                i = d;
            t.font = h.fontSize + "pt " + h.fontFamily, t.fillStyle = h.fontColor, t.textBaseline = "top", h.textShadow && (t.shadowColor = "#666", t.shadowOffsetX = -2, t.shadowOffsetY = 1, t.shadowBlur = 10), "center" == h.textAlign ? (t.textAlign = "center", a = h.width / 2, i = h.height - h.height / 1.5, e = h.width - h.width / 3) : "right" == h.textAlign ? (t.textAlign = "right", a = h.width - d) : t.textAlign = "left";
            for (var o = h.headlineText.split(" "), n = "", l = 0; l < o.length; l++) {
                var r = n + o[l] + " ",
                    s = t.measureText(r),
                    c = s.width;
                c > e && l > 0 ? (t.fillText(n, a, i), n = o[l] + " ", i += Math.round(1.5 * h.fontSize)) : n = r
            }
            t.fillText(n, a, i), t.shadowColor = "transparent"
        }

        function i(t) {
            t.textBaseline = "bottom", t.textAlign = "left", t.fillStyle = h.fontColor, t.font = "normal " + h.creditSize + "pt " + h.fontFamily, t.fillText(h.creditText, d, h.height - d)
        }

        function o(t) {
            var e, a, i, o;
            if (a = o = n.watermark.height, e = i = n.watermark.width, a && e) {
                var l = h.width * h.watermarkMaxWidthRatio;
                e > l && (o = a * (l / e), i = l), t.globalAlpha = h.watermarkAlpha, t.drawImage(n.watermark, 0, 0, e, a, h.width - d - i, h.height - d - o, i, o), t.globalAlpha = 1
            }
        }
        if (this.canvas) {
            var n = this.model,
                h = this.model.toJSON(),
                l = this.canvas.getContext("2d"),
                d = Math.round(h.width * h.paddingRatio);
            this.canvas.width = h.width, this.canvas.height = h.height, l.clearRect(0, 0, h.width, h.height), t(l), e(l), a(l), i(l), o(l);
            var r = this.canvas.toDataURL();
            this.$("#meme-download").attr({
                href: r,
                download: (h.downloadName || "share") + ".png"
            }), this.canvas.style.cursor = this.model.background.width ? "move" : "default"
        }
    },
    events: {
        "mousedown canvas": "onDrag"
    },
    onDrag: function(t) {
        function e(t) {
            t.preventDefault(), a.set("backgroundPosition", {
                x: Math.max(i.width - o, Math.min(l.x - (h.x - t.clientX), o)),
                y: Math.max(i.height - n, Math.min(l.y - (h.y - t.clientY), n))
            })
        }
        if (t.preventDefault(), this.model.hasBackground()) {
            var a = this.model,
                i = a.toJSON(),
                o = a.background.width * i.imageScale / 2,
                n = a.background.height * i.imageScale / 2,
                h = {
                    x: t.clientX,
                    y: t.clientY
                },
                l = i.backgroundPosition;
            l.x = l.x || i.width / 2, l.y = l.y || i.height / 2;
            var d = MEME.$(document).on("mousemove.drag", e).on("mouseup.drag", function(t) {
                d.off("mouseup.drag mousemove.drag"), e(t)
            })
        }
    }
});