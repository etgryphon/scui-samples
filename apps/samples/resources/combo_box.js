// ==========================================================================
// Project:   SCUI Samples - comboBoxPage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */
sc_require('views/code');
sc_require('core_code');

// This page describes the main user interface for your application.  
// @@CODE[combo_box]
Samples.comboBoxPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['combobox-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'label1 example1 label2 example2 code'.w(),
    
    label1: SC.LabelView.design({
      layout: { top: 0 , centerX: -220, height: 35, width: 300 },
      textAlign: SC.ALIGN_CENTER,
      value: 'Start Typing in the Area to Search for Color'
    }),
    
    example1: SCUI.ComboBoxView.design({
      layout: {top: 40, centerX: -220, height: 24, width: 150},
      objects: [{id: 1, name: "Red"}, {id: 2, name: "Blue"}, {id: 3, name: "Green"}, {id: 4, name: "Purple"}, {id: 5, name: "Brown"}, {id: 6, name: "Black"}],
      nameKey: "name",
      valueKey : "id"
    }),
    
    label2: SC.LabelView.design({
      layout: { top: 0 , centerX: 220, height: 35, width: 300 },
      textAlign: SC.ALIGN_CENTER,
      value: 'Start Typing in the Area to Search for US States'
    }),
    
    example2: SCUI.ComboBoxView.design({
      layout: { top: 40 , centerX: 220, height: 24, width: 150 },
      objectsBinding: SC.Binding.from('Samples.comboBoxController.content').oneWay(),
      valueKey: 'value',
      nameKey: 'name'
    }),
    
    code: Samples.CodeView.design({
      layout: {top: 90, left: 10, right: 10, bottom: 10},
      codeBinding: SC.Binding.from('Samples.codeSamples.combo_box').oneWay()
    })
  })
});
// @@END_CODE
