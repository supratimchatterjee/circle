// JavaScript Document


var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '14rem', //distance from center
    start = -90, //shift start from 0
    //$elements = $('li:not(:first-child)'),
    $elements = $('li'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});
$('.text').first().show();
$('.dot').first().show();

$('.slider_one ul li').click(function(){
	var clkbtn =  $(this).data('id');
	  $('.text').hide();
      $('#'+clkbtn).not().fadeIn('1000');

      var clkdt =  $(this).data('tag');
      $('.dot').hide();
      $('#'+clkdt).not().fadeIn('1000');
      //alert(clkbtn);
});




