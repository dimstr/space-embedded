$(function() {
    var images = $('.large-image')
      , total = images.length
      , count = 0;

    $('#loading').show();
    images.load(function() {
        count = count + 1;
        if (count >= total) {
            $('#loading').hide();
        }
    });
});
