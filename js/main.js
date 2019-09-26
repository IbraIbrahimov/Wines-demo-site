$(document).ready(function(){

$('.burger-menu').on('click', function(){

$('#p311-nav').addClass("show");

});

$('.mobile-menu-close').on('click', function(){

$('#p311-nav').removeClass('show');


});

$('.burger-menu').on('click', function(){

	$('#p311-meranda-nav').addClass("show");
	
	});
	
	$('.meranda-mobile-menu-close').on('click', function(){
	
	$('#p311-meranda-nav').removeClass('show');
	
	
	});

$(window).scroll(function(){
	if($(this).scrollTop() >40){
		 $('#topBtn').fadeIn();

	}else{
		$("#topBtn").fadeOut();
	}
});

$('#topBtn').click(function(){
$('html, body').animate({scrollTop : 0},1500);

});


	
	
	$(window).on('scroll', function () {
        

        if(window.scrollY>=100)
        {
            $('.site-navbar').addClass('nav-top-sabit');
        }
        else{
            $('.site-navbar').removeClass('nav-top-sabit');
        }

    });

$('#myCarousel-hero').owlCarousel({
    items: 1,
	loop: true,
    margin: 0,
	autoplay: true,
	nav: true,
	dots: true,
	navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	smartSpeed: 1000,
    autoplayHoverPause: true
});

$('#myCarousel-comment').owlCarousel({
	center: false,
	items: 1,
	loop: true,
	stagePadding: 0,
	margin: 30,
	autoplay: true,
	smartSpeed: 500,
	nav: true,
	dots: true,
	
	responsive:{
		600:{
			items: 2
		},
		1000:{
			items: 2
		},
		1200:{
			items: 3
		}
	}
});

var sitePlusMinus = function() {
	$('#btn-minus').on('click', function(e){
		e.preventDefault();
		if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
		} else {
			$(this).closest('.input-group').find('.form-control').val(parseInt(0));
		}
	});
	$('#btn-plus').on('click', function(e){
		e.preventDefault();
		$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
	});
};
sitePlusMinus();


		


$("#c_create-account").change(function()
{
  if ($(this).is(':checked')) {
	 
	 $('#createAccount').addClass('show');
	 $('.show').css({transition:'0.5s'});

  }
  else{
	$('#createAccount').removeClass('show');
  }
});

$("#c_ship-address").change(function()
{
  if ($(this).is(':checked')) {
	 
	 $('#c_shipAddress').addClass('show');
	 $('.show').css({transition:'0.5s'});

  }
  else{
	$('#c_shipAddress').removeClass('show');
  }
});




});

