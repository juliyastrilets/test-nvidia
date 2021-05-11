// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

function initMobileMenu() {
	const $mobileMenuBtn = $(".js-mobile-menu-btn")
	$mobileMenuBtn.click(function() {
		$(".js-mobile-menu-content").toggleClass("menu__content--show")
		$mobileMenuBtn.toggleClass("menu__btn--active")
		if ($mobileMenuBtn[0].classList.contains("menu__btn--active")) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	});
}

$(document).ready(function(){
	initMobileMenu()
});
