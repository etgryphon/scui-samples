// ==========================================================================
// Project:   SCUI Samples - CodeView
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples sh_highlightDocument  */

Samples.CodeView = SC.View.extend({
  
  classNames: 'code-sample',
  code: null,
  displayProperties: 'code'.w(),
  
  render: function(context, firstTime){
    var code = this.get('code');
    if (code){
      context = context.begin('pre')
        .setClass({'sh_javascript': YES, 'sh_sourceCode': YES})
        .attr({'lang': 'javascript'})
          .text(code)
        .end();
    }
  },
  
  didCreateLayer: function(){
    this._codeHighlighting();
  },
  
  didUpdateLayer: function(){
    this._codeHighlighting();
  },
  
  _codeHighlighting: function(){
    var items = this.$('pre');
    console.log('items.length == %@'.fmt(items.length));
    for (var i=0, l = items.length; i < l; i++) {
      var code = items[i].innerHTML;
      //console.log(code);
      var match = code.match(/^<code>\#\!([a-z]+)\n/);
      //console.log(match);
      if (match) {
        items[i].className = "sh_" + match[1];
        items[i].innerHTML = "<code>" + code.substr(match[0].length);
      } else {
        items[i].className = "sh_javascript";
      }
    }
    sh_highlightDocument();
  }
});