																		/* Слайдер */

$(document).ready(function () {
	$('.slider').slick();
});


																		/* Анимация */
$(function () {

	$(window).scroll(function() {
	    $('.section__feature').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInUp slow");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.feature__vertical--items').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
		$('.vertical__item--right').each(function(){
			 var imagePos = $(this).offset().top;
			 var topOfWindow = $(window).scrollTop();
			 if (imagePos < topOfWindow+650) {
				  $(this).addClass("animated fadeInRight");
			 }
		});
	});
	
})


/* Faq Menu */

const listItemsTitle = document.querySelectorAll(".list__item--title");

listItemsTitle.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
  });
});