// ==========================================================================
// Project:   SCUI Samples - CodeView
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */

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
  }
  
});