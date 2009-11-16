// Project:   SCUI Samples
// Copyright: ©2009 Evin Grano
// ==========================================================================
/*globals Samples */
sc_require('core');

// This page describes the main user interface for your application.  
Samples.mixinsPage = SC.Page.design({
  
  mainView: SC.View.design({
    childViews: 'master detail'.w(),
    
    master: SC.ListView.design({
      layout: { left: 10, top: 10, width: 250, bottom: 10 },
      rowHeight: 35,
      selectionBinding: 'Samples.mixinSourceController.selection',
      contentBinding: 'Samples.mixinSourceController',
      contentValueKey: 'name',
      actOnSelect: YES,
      target: Samples.mixinSourceController,
      action: 'mixinSelected'
    }),
    
    detail: SC.SceneView.design({
      layout: {top: 10, left: 260, right: 10, bottom: 10},
      scenes: ['mobility', 'resizable', 'simpleButton', 'dropDown', 'toolTip'],
      nowShowing: 'mobility'
    })
    
  }),
  
  mobility: SC.View.design({
    classNames: ['mixins-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'example code'.w(),
    
    example: SC.LabelView.design(SCUI.Mobility, {
      layout: {top: 25, centerX: 0, width: 200, height: 30},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Click on Me And Drag Around'
    }),
    
    code: SC.LabelView.design({
      layout: {top: 175, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  }),
  
  resizable: SC.View.design({
    childViews: 'code example1 example2 example3'.w(),
    
    example1: SC.View.design({
      layout: {top: 10, centerX: -210, width: 200, height: 125},
      classNames: ['resize'],
      childViews: 'label draghandle'.w(),
      
      label: SC.LabelView.design({
        layout: {top: 10, left: 10, bottom: 10, right: 10},
        textAlign: SC.ALIGN_CENTER,
        value: 'I\'m a View that you can resize both ways. Grab the Red handle and resize me'
      }),
      
      draghandle: SC.View.design(SCUI.Resizable, {
        layout: {right: 0, bottom: 0, width: 10, height: 10},
        classNames: ['handle']
      })
    }),
      
    example2: SC.View.design({
      layout: {top: 10, centerX: 0, width: 200, height: 125},
      classNames: ['resize'],
      childViews: 'label draghandle'.w(),
      
      label: SC.LabelView.design({
        layout: {top: 10, left: 10, bottom: 10, right: 10},
        textAlign: SC.ALIGN_CENTER,
        value: 'I\'m a View that you can resize horizontal. Grab the Red handle and resize me'
      }),
      
      draghandle: SC.View.design(SCUI.Resizable, {
        layout: {right: 0, bottom: 0, width: 10, height: 10},
        classNames: ['handle'],
        verticalMove: NO
      })
    }),
        
    example3: SC.View.design({
      layout: {top: 10, centerX: 210, width: 200, height: 125},
      classNames: ['resize'],
      childViews: 'label draghandle'.w(),
      
      label: SC.LabelView.design({
        layout: {top: 10, left: 10, bottom: 10, right: 10},
        textAlign: SC.ALIGN_CENTER,
        value: 'I\'m a View that you can resize vertical. Grab the Red handle and resize me'
      }),
      
      draghandle: SC.View.design(SCUI.Resizable, {
        layout: {right: 0, bottom: 0, width: 10, height: 10},
        classNames: ['handle'],
        horizontalMove: NO
      })
    }),
    
    code: SC.LabelView.design({
      layout: {top: 175, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  }),
  
  simpleButton: SC.View.design({
    classNames: ['mixins-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'example code'.w(),
    
    example: SC.LabelView.design(SCUI.SimpleButton, {
      layout: {top: 25, centerX: 0, width: 200, height: 30},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Click on Me To Fire an Event',
      target: Samples.mixinSourceController,
      action: 'simpleButtonAction'
    }),
    
    code: SC.LabelView.design({
      layout: {top: 175, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  }),
  
  dropDown: SC.View.design({
    classNames: ['mixins-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'example1 example2 code'.w(),
    
    example1: SC.LabelView.design(SCUI.SimpleButton, SCUI.DropDown, {
      layout: {top: 25, centerX: -105, width: 200, height: 45},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Click on Me To Do a Normal Menu',
      dropDown: SC.MenuPane.design({
        contentView: SC.View.design({}), /* blank view; sproutcore will take care of this automatically */
        layout: { width: 116, height: 0 }, /* height gets set automatically */
        itemTitleKey: 'title',
        itemTargetKey: 'target',
        itemActionKey: 'action',
        itemSeparatorKey: 'isSeparator',
        itemIsEnabledKey: 'isEnabled',
        items: [
          { title: "Action 1", target: Samples.mixinSourceController, action: 'fireAction1', isEnabled: YES },
          { title: "Action 2", target: Samples.mixinSourceController, action: 'fireAction2', isEnabled: YES },
          { isSeparator: YES },
          { title: "Action 3", target: Samples.mixinSourceController, action: 'fireAction3', isEnabled: YES }
        ]
      })
    }),
    
    example2: SC.LabelView.design(SCUI.SimpleButton, SCUI.DropDown, {
      layout: {top: 25, centerX: 105, width: 200, height: 45},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Click on Me To Do a Custom Menu',
      dropDownType: SC.PICKER_POINTER,
      dropDown: SC.PickerPane.design({
        classNames: ['dockbutton-menu'],
        layout: { top: 5, width: 298, height: 82 },
        contentView: SC.View.design({
          layout: { left: 7, top: 0, right: 7, bottom: 5 },
          childViews: 'action1 action2 action3'.w(),
          
          action1: SC.LabelView.design( SCUI.SimpleButton, {
            layout: { left: 3, top: 10, width: 62, height: 47 },
            value: "Action #1",
            target: Samples.mixinSourceController,
            action: 'fireAction1'
          }),
          
          action2: SC.LabelView.design( SCUI.SimpleButton, {
            layout: { left: 75, top: 10, width: 62, height: 62 },
            value: "Action #2",
            target: Samples.mixinSourceController,
            action: 'fireAction2'
          }),
          
          action3: SC.LabelView.design( SCUI.SimpleButton, {
            layout: { left: 147, top: 10, width: 62, height: 47 },
            value: "Action #3",
            target: Samples.mixinSourceController,
            action: 'fireAction3'
          })
        })
      })
    }),
    
    code: SC.LabelView.design({
      layout: {top: 175, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  }),
  
  // ToolTip Example
  toolTip: SC.View.design({
    classNames: ['mixins-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'example code'.w(),
    
    example: SC.LabelView.design(SCUI.ToolTip, {
      layout: {top: 25, centerX: 0, width: 200, height: 30},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Hover on Me To see a Tool Tip',
      toolTip: 'Buy Low, Sell High, only drink Cappuccino'
    }),
    
    code: SC.LabelView.design({
      layout: {top: 175, left: 10, right: 10, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  })
  
});
