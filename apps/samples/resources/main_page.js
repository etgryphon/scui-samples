// ==========================================================================
// Project:   Samples - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Samples */

// This page describes the main user interface for your application.  
Samples.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'sampleTabView'.w(),
    
    sampleTabView: SC.TabView.design({
  		layout: { top: 30, left: 30, right: 30, bottom: 30 },
      classNames: ['sample-tabs'],
      nowShowing: 'Samples.mainPage.calendarSampleView', 
      items: [
        { title: "Calendar".loc(), value:'Samples.mainPage.calendarSampleView' },
        { title: "Auto-Suggest".loc(), value:'Samples.mainPage.autoSuggestSampleView' },
        { title: "Collapsible".loc(), value:'Samples.mainPage.collapsibleSampleView' },
        { title: "Context Menu Pane".loc(), value:'Samples.mainPage.contextMenuSampleView' },
        { title: "ContentEditable".loc(), value:'Samples.mainPage.contentEditableSampleView' },
        { title: "Upload".loc(), value:'Samples.mainPage.uploadSampleView' },
        { title: "Mixins".loc(), value:'Samples.mainPage.mixinSampleView' }
      ],
      itemTitleKey: 'title',
      itemValueKey: 'value'
    }),
    
    calendarSampleView: SC.View.design({
      classNames: ['calendar-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    autoSuggestSampleView: SC.View.design({
      classNames: ['auto-suggest-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    collapsibleSampleView: SC.View.design({
      classNames: ['auto-suggest-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    contextMenuSampleView: SC.View.design({
      classNames: ['context-menu-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    contentEditableSampleView: SC.View.design({
      classNames: ['content-editable-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    uploadSampleView: SC.View.design({
      classNames: ['upload-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    }),
    
    mixinSampleView: SC.View.design({
      classNames: ['mixin-sample'],
      layout: { top: 30, left: 0, right: 0, bottom: 0 }
    })
  })

});
