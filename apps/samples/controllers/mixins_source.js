// ==========================================================================
// Samples.mixinSourceController
// ==========================================================================

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
    
  refreshSources: function(){
    var root = [
      SC.Object.create({ name: "Mobility"}),
      SC.Object.create({ name: "Resizable"})
    ];
    
    this.set('content', root);
    this.set('selection', SC.SelectionSet.create().addObject(root[0]) );
  },
  
  mixinSelected: function(){
    console.log("I'm here!!!!");
  }
});
