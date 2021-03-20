const $slide = document.querySelector('.slide');
const $slideInner = document.querySelector('.slide > li > .inner');
const $slideH3 = document.querySelector('.slide  h3');
const $slideP = document.querySelector('.slide  p');
const $slideQuoteGroup = document.querySelector('.slide .quote-group');
$('.slide').slick({
	autoplay: true,

	autoplaySpeed: 3000,
	focusOnSelect: true,
});

$('.follow-img-slide').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	focusOnSelect: true,
});

// console.log($slideInner.classList.contains('active'));
$slide.addEventListener('transitionstart', () => {
	if ($slideInner.classList.contains('active')) {
		$slideInner.classList.remove('active');
	} else {
		$slideInner.classList.add('active');
	}
});
$slide.addEventListener('transitionend', () => {
	if ($slideInner.classList.contains('active')) {
		$slideInner.classList.remove('active');
	} else {
		$slideInner.classList.add('active');
	}
});

window.onload = () => {
	const state = [
		{
			id: 1,
			title: "Hello I'm Alime",
			phara:
				'I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.',
			email: 'hello.alime@gmail.com',
		},
		{
			id: 2,
			title: "Hello I'm Jackson",
			phara:
				'I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.',
			email: 'hello.alime@gmail.com',
		},
	];
	render(state);
};
