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
      scenes: ['mobility', 'resizable'],
      nowShowing: 'mobility'
    })
    
  }),
  
  mobility: SC.View.design({
    classNames: ['mixins-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'mobilityExample mobilityCode'.w(),
    
    mobilityExample: SC.LabelView.design(SCUI.Mobility, {
      layout: {top: 25, left: 25, width: 200, height: 30},
      classNames: ['click'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Click on Me And Drag Around'
    }),
    
    mobilityCode: SC.LabelView.design({
      layout: {top: 175, left: 10, width: 200, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  }),
  
  resizable: SC.View.design({
    childViews: 'resizableExample1 resizable1Code resizableExample2 resizableCode2 resizableExample3 resizableCode3'.w(),
    
    resizableExample1: SC.View.design({
      layout: {top: 25, left: 300, width: 200, height: 125},
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
    
    resizable1Code: SC.LabelView.design({
      layout: {top: 175, left: 300, width: 200, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    }),
    
    resizableExample2: SC.View.design({
      layout: {top: 25, left: 600, width: 200, height: 125},
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
    
    resizableCode2: SC.LabelView.design({
      layout: {top: 175, left: 600, width: 200, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    }),
    
    resizableExample3: SC.View.design({
      layout: {top: 25, left: 900, width: 200, height: 125},
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
    
    resizableCode3: SC.LabelView.design({
      layout: {top: 175, left: 900, width: 200, height: 500},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })    
  })
});
