// ==========================================================================
// Samples.mixinSourceController
// ==========================================================================
/*globals Samples */
/** @static

  This ArrayController that serves up the SourceList to the Component Library
  
  @extends SC.ArrayController
  @author Evin Grano

*/

Samples.mixinSourceController = SC.ArrayController.create(
/** @scope Samples.mixinSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: "Mobility", view: 'mobility'}),
      SC.Object.create({ name: "Resizable", view: 'resizable'}),
      SC.Object.create({ name: "Simple Button", view: 'simpleButton'}),
      SC.Object.create({ name: "DropDown", view: 'dropDown1'}),
      SC.Object.create({ name: "DropDown Custom", view: 'dropDown2'}),
      SC.Object.create({ name: "ToolTip", view: 'toolTip'})
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[0]) );
  },
  
  mixinSelected: function(){
    var sel = this.getPath('selection.firstObject');
    if (sel) {
      var scene = Samples.mixinsPage.getPath('mainView.detail');
      var view = sel.get('view');
      scene.set('nowShowing', view);
    } 
    else {
      console.log('There is no selection...');
    }
    
  },
  
  // SimpleButton Mixin Action
  simpleButtonAction: function(){
    alert('You Triggered and Action with the SimpleButton Mixin');
  },
  
  // DropDown Mixin Actions
  fireAction1: function(){ 
    alert('You Just Fired Action #1'); 
  },
  
  fireAction2: function(){ 
    alert('You Just Fired Action #2'); 
  },
  
  fireAction3: function(){
    alert('You Just Fired Action #3'); 
  }
  
});
