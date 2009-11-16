// ==========================================================================
// Samples.comboBoxController
// ==========================================================================

/** @static

  This ArrayController that serves up the SourceList to the Component Library
  
  @extends SC.ArrayController
  @author Evin Grano

*/
Samples.comboBoxController = SC.ArrayController.create(
/** @scope Samples.mixinSourceController.prototype */ {

  /**
    Expecting a tree structure
  */
  content: null,
  selection: null,
    
  refresh: function(){
    var root = [
      SC.Object.create({ name: 'Alabama' }), 
      SC.Object.create({ name: 'Alaska' }), 
      SC.Object.create({ name: 'American Samoa' }), 
      SC.Object.create({ name: 'Arizona' }), 
      SC.Object.create({ name: 'Arkansas' }), 
      SC.Object.create({ name: 'California' }), 
      SC.Object.create({ name: 'Colorado' }), 
      SC.Object.create({ name: 'Connecticut' }), 
      SC.Object.create({ name: 'Delaware'}), 
      SC.Object.create({ name: 'District of Columbia' }),
      SC.Object.create({ name: 'Florida' }), 
      SC.Object.create({ name: 'Georgia'}), 
      SC.Object.create({ name: 'Guam' }), 
      SC.Object.create({ name: 'Hawaii' }), 
      SC.Object.create({ name: 'Idaho' }), 
      SC.Object.create({ name: 'Illinois' }), 
      SC.Object.create({ name: 'Indiana' }), 
      SC.Object.create({ name: 'Iowa' }), 
      SC.Object.create({ name: 'Kansas' }), 
      SC.Object.create({ name: 'Kentucky' }), 
      SC.Object.create({ name: 'Louisiana' }), 
      SC.Object.create({ name: 'Maine' }), 
      SC.Object.create({ name: 'Maryland' }), 
      SC.Object.create({ name: 'Massachusetts' }), 
      SC.Object.create({ name: 'Michigan' }), 
      SC.Object.create({ name: 'Minnesota' }), 
      SC.Object.create({ name: 'Mississippi' }), 
      SC.Object.create({ name: 'Missouri' }), 
      SC.Object.create({ name: 'Montana' }), 
      SC.Object.create({ name: 'Nebraska' }), 
      SC.Object.create({ name: 'Nevada' }), 
      SC.Object.create({ name: 'New Hampshire' }), 
      SC.Object.create({ name: 'New Jersey' }), 
      SC.Object.create({ name: 'New Mexico' }), 
      SC.Object.create({ name: 'New York' }), 
      SC.Object.create({ name: 'North Carolina' }), 
      SC.Object.create({ name: 'North Dakota' }), 
      SC.Object.create({ name: 'Northern Marianas Islands' }), 
      SC.Object.create({ name: 'Ohio' }), 
      SC.Object.create({ name: 'Oklahoma' }), 
      SC.Object.create({ name: 'Oregon' }), 
      SC.Object.create({ name: 'Pennsylvania' }), 
      SC.Object.create({ name: 'Puerto Rico' }), 
      SC.Object.create({ name: 'Rhode Island' }), 
      SC.Object.create({ name: 'South Carolina' }), 
      SC.Object.create({ name: 'South Dakota' }), 
      SC.Object.create({ name: 'Tennessee' }), 
      SC.Object.create({ name: 'Texas' }), 
      SC.Object.create({ name: 'Utah' }), 
      SC.Object.create({ name: 'Vermont' }), 
      SC.Object.create({ name: 'Virginia' }), 
      SC.Object.create({ name: 'Virgin Islands' }), 
      SC.Object.create({ name: 'Washington' }), 
      SC.Object.create({ name: 'West Virginia' }), 
      SC.Object.create({ name: 'Wisconsin' }), 
      SC.Object.create({ name: 'Wyoming' })
    ];
    
    this.set('content', root);
  }
});
