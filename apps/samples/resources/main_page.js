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
  		layout: { top: 30, centerX: 0, width: 1024, bottom: 30 },
      classNames: ['sample-tabs'],
      nowShowing: 'Samples.comboBoxPage.mainView', 
      items: [
        /*{ title: "Calendar", value:'Samples.mainPage.calendarSampleView' },*/
        { title: "Combo Box", value: 'Samples.comboBoxPage.mainView' },
        /*{ title: "Collapsible", value:'Samples.mainPage.collapsibleSampleView' },*/
        { title: "Context Menu Pane", value:'Samples.contextMenuPage.mainView' },
        /*{ title: "ContentEditable", value:'Samples.mainPage.contentEditableSampleView' },*/
        /*{ title: "Upload", value:'Samples.mainPage.uploadSampleView' },*/
        { title: "Mixins", value:'Samples.mixinsPage.mainView' }
      ],
      itemTitleKey: 'title',
      itemValueKey: 'value'
    })
  })

});
