// Project:   Samples - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Samples */
sc_require('core');

// This page describes the main user interface for your application.  
Samples.comboBoxPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['combobox-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'label example code'.w(),
    
    label: SC.LabelView.design({
      layout: { top: 0 , centerX: 20, height: 35, width: 300 },
      textAlign: SC.ALIGN_CENTER,
      value: 'Start Typing in the Area to Search for US States'
    }),
    
    example: SCUI.ComboBoxView.design({
      layout: { top: 40 , centerX: 20, height: 24, width: 150 },
      contentBinding: 'Samples.comboBoxController',
      contentBindingDefault: SC.Binding.oneWay(),
      contentValueKey: 'name',
      selectedItemBinding: 'Samples.comboBoxController.selection'
    }),
    
    code: SC.LabelView.design({
      layout: {top: 90, left: 10, right: 10, bottom: 10},
      classNames: ['code'],
      textAlign: SC.ALIGN_CENTER,
      value: 'Code Here'
    })
  })
});
