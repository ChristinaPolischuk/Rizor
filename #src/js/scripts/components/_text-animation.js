let textAnimation = function () {
	const text = document.querySelector('.js-animate-text');
	const box = document.querySelector('.home__content');

	text.innerHTML = [...text.textContent].map(n => `<div>${n.trim() ? n : '&nbsp;'}</div>`).join('');

	function rand(x) {
		return `${Math.random() * x - x * 0.5}px`;
	}

	function animateText() {
		[...text.querySelectorAll('div')].map(n => n.style).forEach((n, i) => {
			setTimeout(() => Object.assign(n, !n.opacity || +n.opacity === 1 ? {
				opacity: 0,
				transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(30)})`,
			} : {
					opacity: .3,
					transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(30)})`,
				}), i * 20);
		});
	}

	function stopAnimateText() {
		[...text.querySelectorAll('div')].map(n => n.style).forEach((n, i) => {
			setTimeout(() => Object.assign(n, !n.opacity || +n.opacity === 1 ? {
				opacity: 1,
				transform: `translate3d(0, 0, 0)`,
				color: `#000`
			} : {
					opacity: 1,
					transform: `translate3d(0, 0, 0)`,
					color: `#4237f7`
				}), i * 20);
		});
	}

	box.addEventListener('mouseenter', animateText);
	box.addEventListener('mouseout', stopAnimateText);
}
textAnimation();
