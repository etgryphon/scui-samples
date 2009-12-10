// Project:   Samples - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Samples */
sc_require('core');

// This page describes the main user interface for your application.  
Samples.contentEditablePage = SC.Page.design({
  
  mainView: SC.View.design({
    childViews: 'bold italic underlined createLink contentEditable translucentCE resizableContentEdiable'.w(),
    
    bold: SC.ButtonView.design({
      layout: { left: 40, top: 50, width: 90, height: 24 },
      title: 'Bold',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsBold'
    }),
    
    italic: SC.ButtonView.design({
      layout: { left: 135, top: 50, width: 90, height: 24 },
      title: 'Italic',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsItalicized'
    }),
    
    underlined: SC.ButtonView.design({
      layout: { left: 40, top: 79, width: 90, height: 24 },
      title: 'Underline',
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      toggleOnValue: YES,
      toggleOffValue: NO,
      valueBinding: 'Samples.contentEditableController*content.selectionIsUnderlined'
    }),
    
    createLink: SC.ButtonView.design({
      layout: { left: 135, top: 79, width: 90, height: 24 },
      title: "Create Link",
      target: Samples.contentEditableController,
      action: 'createLink'
    }),
    
    contentEditable: SCUI.ContentEditableView.design({
      layout: { left: 40, top: 108, width: 300, height: 125 },
      value: 'Basic content editable view'
    }),
    
    translucentCE: SCUI.ContentEditableView.design({
      layout: { left: 360, top: 108, width: 300, height: 125 },
      value: 'A transparent content editable view',
      isOpaque: YES,
      allowScrolling: NO
    }),
    
    resizableContentEdiable: SCUI.ContentEditableView.design({
      layout: { left: 680, top: 108, width: 300, height: 125 },
      value: 'A content editable view that grows or shrinks depending on the size of the content',
      hasFixedDimensions: NO,
      allowScrolling: NO
    })
    
  }),
  
  contentEditableOutlet: SC.outlet('mainView.childViews.4')
  
});
