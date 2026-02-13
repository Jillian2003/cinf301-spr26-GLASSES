document.addEventListener('DOMContentLoaded', () => {
	const frames = Array.from(document.querySelectorAll('.frame'));
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');

	let idx = frames.findIndex(f => f.classList.contains('active'));
	if (idx < 0) idx = 0;

	function show(i) {
		frames.forEach((f, n) => {
			f.classList.remove('active');
			if(n === i) f.classList.add('active');
		});
	}

	function next() {
		idx = (idx + 1) % frames.length;
		show(idx);
	}

	function prev() {
		idx = (idx - 1 + frames.length) % frames.length;
		show(idx);
	}

	let timer = setInterval(next, 4000);

	function resetTimer() {
		clearInterval(timer);
		timer = setInterval(next, 4000);
	}

	prevBtn?.addEventListener('click', () => { prev(); resetTimer(); });
	nextBtn?.addEventListener('click', () => { next(); resetTimer(); });

	show(idx);
});
