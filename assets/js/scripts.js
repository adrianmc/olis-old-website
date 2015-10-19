$(document).ready(function() {
 $('.view-sources').click(function(){
    if ($(".sources").hasClass('hidden')) {
      $(".sources").removeClass('hidden');
    } else {
      $(".sources").addClass('hidden');
    }
 });
});
