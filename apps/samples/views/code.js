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
        .attr({'lang': 'javascript'})
          .text(code)
        .end();
    }
  },
  
  isVisibleInWindow: function(){
    var items = document.getElementsByTagName("pre");
    for (var i=0, l = items.length; i < l; i++) {
      var code = items[i].innerHTML;
      console.log(code);
      var match = code.match(/^<code>\#\!([a-z]+)\n/);
      console.log(match);
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