// Project:   SCUI Samples - contentEditablePage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */

// This page describes the main user interface for your application.
// @@CODE[content_editable]  
Samples.contentEditablePage = SC.Page.design({
  
  mainView: SC.View.design({
    childViews: 'bold italic underlined createLink contentEditable translucentCE resizableContentEdiable code'.w(),
    
    bold: SC.ButtonView.design({
      layout: { left: 40, top: 40, width: 90, height: 24 },
      title: 'Bold',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsBold'
    }),
    
    italic: SC.ButtonView.design({
      layout: { left: 135, top: 40, width: 90, height: 24 },
      title: 'Italic',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsItalicized'
    }),
    
    underlined: SC.ButtonView.design({
      layout: { left: 40, top: 69, width: 90, height: 24 },
      title: 'Underline',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsUnderlined'
    }),
    
    createLink: SC.ButtonView.design({
      layout: { left: 135, top: 69, width: 90, height: 24 },
      title: "Create Link",
      target: Samples.contentEditableController,
      action: 'createLink'
    }),
    
    contentEditable: SCUI.ContentEditableView.design({
      layout: { left: 40, top: 98, width: 300, height: 125 },
      value: 'Basic content editable view'
    }),
    
    translucentCE: SCUI.ContentEditableView.design({
      layout: { left: 360, top: 98, width: 300, height: 125 },
      value: 'A transparent content editable view',
      isOpaque: YES,
      allowScrolling: NO
    }),
    
    resizableContentEdiable: SCUI.ContentEditableView.design({
      layout: { left: 680, top: 98, width: 300, height: 125 },
      value: 'A content editable view that grows or shrinks depending on the size of the content',
      hasFixedDimensions: NO,
      allowScrolling: NO
    }),
    
    code: Samples.CodeView.design({
      layout: {top: 245, left: 10, right: 10, bottom: 10},
      codeBinding: SC.Binding.from('Samples.codeSamples.content_editable').oneWay()
    })
    
  }),
  
  contentEditableOutlet: SC.outlet('mainView.childViews.4')
  
});
// @@END_CODE