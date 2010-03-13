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
      SC.Object.create({ name: 'Alabama', value: 'AL' }), 
      SC.Object.create({ name: 'Alaska', value: 'AK' }), 
      SC.Object.create({ name: 'American Samoa', value: 'AS' }), 
      SC.Object.create({ name: 'Arizona', value: 'AZ' }), 
      SC.Object.create({ name: 'Arkansas', value: 'AR' }), 
      SC.Object.create({ name: 'California', value: 'CA' }), 
      SC.Object.create({ name: 'Colorado', value: 'CO' }), 
      SC.Object.create({ name: 'Connecticut', value: 'CT' }), 
      SC.Object.create({ name: 'Delaware', value: 'DE' }), 
      SC.Object.create({ name: 'District of Columbia', value: 'DC' }),
      SC.Object.create({ name: 'Florida', value: 'FL' }), 
      SC.Object.create({ name: 'Georgia', value: 'GA' }), 
      SC.Object.create({ name: 'Guam', value: 'GU' }), 
      SC.Object.create({ name: 'Hawaii', value: 'HI' }), 
      SC.Object.create({ name: 'Idaho', value: 'ID' }), 
      SC.Object.create({ name: 'Illinois', value: 'IL' }), 
      SC.Object.create({ name: 'Indiana', value: 'IN' }), 
      SC.Object.create({ name: 'Iowa', value: 'IO' }), 
      SC.Object.create({ name: 'Kansas', value: 'KS' }), 
      SC.Object.create({ name: 'Kentucky', value: 'KE' }), 
      SC.Object.create({ name: 'Louisiana', value: 'LA' }), 
      SC.Object.create({ name: 'Maine', value: 'ME' }), 
      SC.Object.create({ name: 'Maryland', value: 'MD' }), 
      SC.Object.create({ name: 'Massachusetts', value: 'MA' }), 
      SC.Object.create({ name: 'Michigan', value: 'MG' }), 
      SC.Object.create({ name: 'Minnesota', value: 'MN' }), 
      SC.Object.create({ name: 'Mississippi', value: 'MS' }), 
      SC.Object.create({ name: 'Missouri', value: 'MI' }), 
      SC.Object.create({ name: 'Montana', value: 'MT' }), 
      SC.Object.create({ name: 'Nebraska', value: 'NB' }), 
      SC.Object.create({ name: 'Nevada', value: 'NV' }), 
      SC.Object.create({ name: 'New Hampshire', value: 'NH' }), 
      SC.Object.create({ name: 'New Jersey', value: 'NJ' }), 
      SC.Object.create({ name: 'New Mexico', value: 'NM' }), 
      SC.Object.create({ name: 'New York', value: 'NY' }), 
      SC.Object.create({ name: 'North Carolina', value: 'NC' }), 
      SC.Object.create({ name: 'North Dakota', value: 'ND' }), 
      SC.Object.create({ name: 'Northern Marianas Islands', value: 'NI' }), 
      SC.Object.create({ name: 'Ohio', value: 'OH' }), 
      SC.Object.create({ name: 'Oklahoma', value: 'OK' }), 
      SC.Object.create({ name: 'Oregon', value: 'OR' }), 
      SC.Object.create({ name: 'Pennsylvania', value: 'PA' }), 
      SC.Object.create({ name: 'Puerto Rico', value: 'PR' }), 
      SC.Object.create({ name: 'Rhode Island', value: 'RI' }), 
      SC.Object.create({ name: 'South Carolina', value: 'SC' }), 
      SC.Object.create({ name: 'South Dakota', value: 'SD' }), 
      SC.Object.create({ name: 'Tennessee', value: 'TN' }), 
      SC.Object.create({ name: 'Texas', value: 'TX' }), 
      SC.Object.create({ name: 'Utah', value: 'UI' }), 
      SC.Object.create({ name: 'Vermont', value: 'VT' }), 
      SC.Object.create({ name: 'Virginia', value: 'VA' }), 
      SC.Object.create({ name: 'Virgin Islands', value: 'VI' }), 
      SC.Object.create({ name: 'Washington', value: 'WA' }), 
      SC.Object.create({ name: 'West Virginia', value: 'WV' }), 
      SC.Object.create({ name: 'Wisconsin', value: 'WI' }), 
      SC.Object.create({ name: 'Wyoming', value: 'WY' })
    ];
    
    this.set('content', root);
  }
});
