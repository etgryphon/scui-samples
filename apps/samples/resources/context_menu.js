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
      value: 'Right Click on Me',
      
      mouseDown: function(evt){
        var menuOptions = [
          { title: "Action #1",  target: 'Samples', action: 'fireAction1', isEnabled: YES },
          { title: "Action #2",  target: 'Samples', action: 'fireAction2', isEnabled: YES },
          { isSeparator: YES },
          { title: "Action #3", target: Samples, action: '', isEnabled: NO },
          { isSeparator: YES },
          { title: "Action #4", target: Samples, action: '', isEnabled: NO }
        ];

        var menu = SCUI.ContextMenuPane.create({
          layout: { width: 200, height: 0 },
          contentView: SC.View.design({}),
          items: menuOptions
        });

        menu.popup(this, evt);
        return YES;
      }
    }),
    
    code: SC.LabelView.design({
      layout: {top: 200, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  })
});
