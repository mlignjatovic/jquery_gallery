// input field on keyup
$('#search').on('keyup',function() {
    //get value of input
    var filter = $(this).val();
        //for each image check P sibling for matching filter
      $('.gallery li img').each(function() {
            if ($(this).siblings('p').text().search(new RegExp(filter,'i')) < 0) {
                $(this).fadeOut('slow');
            }else {
              $(this).show('slow');
            }
      });
});
