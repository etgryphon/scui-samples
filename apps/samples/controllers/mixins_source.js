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
    
  refreshSources: function(){
    var root = [
      SC.Object.create({ displayName: "Mobility"}),
      SC.Object.create({ displayName: "Resizable"})
    ];
    
    this.set('content', root);
  },
  
  mixinSelected: function(){
    console.log.("I'm here!!!!");
  }
});
