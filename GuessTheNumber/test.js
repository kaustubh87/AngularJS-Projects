(function($){

Drupal.behaviors.exampleModule = {
  attach: function (context, settings) {
    $('select#edit-field-workshop-date-und', context).on('change', function(){
       alert(this.value); 
    });
  }
};
    
})(jQuery);