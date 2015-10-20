$(document).ready(function() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.disabled').click(function(e){
    e.preventDefault();
  });

  $('.view-sources').click(function(){
    if ($(".sources").hasClass('hidden')) {
      $(".sources").removeClass('hidden');
    } else {
      $(".sources").addClass('hidden');
    }
 });
});
