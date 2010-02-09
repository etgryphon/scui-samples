/*globals TestApp */

sc_require('core');

TestApp.Widget = SC.Object.extend( SCUI.Widget, {
  
  // PUBLIC PROPERTIES
  
  size: { width: 200, height: 200 },
  
  name: null,
  
  widgetViewClass: SC.View.extend( SC.Border, SC.Control, {

    // PUBLIC PROPERTIES

    layout: { left: 0, right: 0, top: 0, bottom: 0 },
    backgroundColor: 'pink',
    borderStyle: SC.BORDER_BLACK,

    // PUBLIC METHODS
    
    createChildViews: function() {
      var childViews = [];
      
      childViews.push(this.createChildView(
        SC.ButtonView.design({
          layout: { centerX: 0, top: 40, width: 80, height: 24 },
          title: "Smaller",
          target: this,
          action: 'makeSmaller'
        })
      ));
  
      childViews.push(this.createChildView(
        SC.ButtonView.design({
          layout: { centerX: 0, top: 80, width: 80, height: 24 },
          title: "Larger",
          target: this,
          action: 'makeLarger'
        })
      ));

      this._labelView = this.createChildView(
        SC.LabelView.design({
          layout: { left: 0, right: 0, bottom: 0,  height: 24 },
          textAlign: SC.ALIGN_CENTER,
          content: this.get('content'),
          contentValueKey: 'name'
        })
      );
      childViews.push(this._labelView);
      
      this.set('childViews', childViews);
    },
    
    makeSmaller: function() {
      console.log('%@.makeSmaller()'.fmt(this));
      var size = this.getPath('content.size');
      if (size) {
        size = { width: size.width, height: 150 };
        this.setPath('content.size', size);
      }
    },

    makeLarger: function() {
      console.log('%@.makeLarger()'.fmt(this));
      var size = this.getPath('content.size');
      if (size) {
        size = { width: size.width, height: 300 };
        this.setPath('content.size', size);
      }
    },
    
    // PRIVATE PROPERTIES
    
    _labelView: null
    
  }),

  // PUBLIC METHODS

  init: function() {
    sc_super();
    this._sizeDidChange();
  },

  // PRIVATE METHODS

  _positionDidChange: function() {
    var position = this.get('position');
    var x = position ? position.x : null;
    var y = position ? position.y : null;
    console.log('%@._positionDidChange(x: %@, y: %@)'.fmt(this, x, y));
  }.observes('position'),
  
  _isEditingDidChange: function() {
    var size = this.get('size');

    if (this.get('isEditing')) {
      this.set('size', { width: size.width, height: 400 });
    }
    else {
      this.set('size', this._lastSize);
    }
  }.observes('isEditing'),
  
  _sizeDidChange: function() {
    if (!this.get('isEditing')) {
      this._lastSize = this.get('size');
    }
  }.observes('size'),
  
  // PRIVATE PROPERTIES
  
  _lastSize: null

});
