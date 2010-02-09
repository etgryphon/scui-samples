/*globals TestApp */

sc_require('models/widget');

TestApp.contentController = SC.ArrayController.create( SCUI.DashboardDelegate, {
  
  // PUBLIC PROPERTIES
  
  allowsEmptySelection: YES,
  
  content: [
    TestApp.Widget.create({
      name: 'widget 1',
      isLocked: NO
    }),
    SCUI.ClockWidget.create({
    })
  ],
  
  // PUBLIC METHODS

  dashboardWidgetEditViewFor: function(dashboardView, content, contentIndex, item) {
    return 'TestApp.WidgetEditView';
  },
  
  addWidget: function() {
    console.log('%@.addWidget()'.fmt(this));
    var widget = TestApp.Widget.create({
      name: 'Widget %@'.fmt(this._widgetNumber += 1),
      position: { x: '200', y: '150' }
    });
    
    var content = this.get('content');
    if (SC.typeOf(content) === SC.T_ARRAY) {
      content.insertAt(0, widget);
    }
  },
  
  // PRIVATE PROPERTIES
  
  _widgetNumber: 1

});
