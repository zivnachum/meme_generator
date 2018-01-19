MEME = {
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
});