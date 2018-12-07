// more info at https://mindtheshift.wordpress.com/2015/04/02/r-i-p-rem-viva-css-reference-pixel/
// If the input field value changes we use the number to set the font-size property on the HTML element in pixel
$(document).on('change', '#htmlBaseFontSize', function() {
    $('html').css('font-size', $(this).val() + 'px');
  });