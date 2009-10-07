// Project:   Samples - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Samples */
sc_require('core');

// This page describes the main user interface for your application.  
Samples.contextMenuPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['context-menu-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'example code'.w(),
    
    example: SC.LabelView.design({
      layout: {top: 50, centerX: 0, width: 150, height: 30},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Right Click on Me'
    }),
    
    code: SC.LabelView.design({
      layout: {top: 200, centerX: 0, width: 500, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  })
});
