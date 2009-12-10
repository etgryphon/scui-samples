// ==========================================================================
// Samples.contentEditableController
// ==========================================================================

/** @static

  This controller is responsible for interacting with the content editable
  view.
  
  @extends SC.ObjectController
  @author Mohammed Taher

*/

Samples.contentEditableController = SC.ObjectController.create(
/** @scope Samples.contentEditableController.prototype */ {
  
  contentBinding: 'Samples.contentEditablePage.contentEditableOutlet',
  
  createLink: function() {
    var value = prompt('Enter address');
    var content = this.get('content');
    content.createLink(value);
  }


  
});
