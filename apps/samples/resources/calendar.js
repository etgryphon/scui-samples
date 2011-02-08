// ==========================================================================
// Project:   SCUI Samples - calendarPage
// Copyright: ©2009-2010 Evin Grano and Contributors
// ==========================================================================
/*globals Samples */
sc_require('views/code');
sc_require('core_code');

// This page describes the main user interface for your application.  
// @@CODE[calendar]
Samples.calendarPage = SC.Page.design({
  
  mainView: SC.View.design({
    classNames: ['datepicker-sample'],
    layout: { top: 30, left: 0, right: 0, bottom: 0 },
    childViews: 'label example code'.w(),
    
    label: SC.LabelView.design({
      layout: { top: 0 , centerX: -220, height: 35, width: 300 },
      textAlign: SC.ALIGN_CENTER,
      value: 'Click to choose a date'
    }),
    
    example: SCUI.DatePickerView.design({
      layout: {top: 40, centerX: -220, height: 24, width: 150}
    }),
        
    code: Samples.CodeView.design({
      layout: {top: 90, left: 10, right: 10, bottom: 10},
      codeBinding: SC.Binding.from('Samples.codeSamples.calendar').oneWay()
    })
  })
});
// @@END_CODE
