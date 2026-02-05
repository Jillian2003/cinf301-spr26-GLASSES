(() => {
	const slides = Array.from(document.querySelectorAll('.slide'));
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');
	const searchForm = document.getElementById('search-form');
	const searchInput = document.getElementById('q');

	let idx = slides.findIndex(s => s.classList.contains('active'));
	if (idx < 0) idx = 0;

	function show(i) {
		slides.forEach((s, n) => {
			s.classList.toggle('active', n === i);
		});
	}

	function next() {
		idx = (idx + 1) % slides.length;
		show(idx);
	}

	function prev() {
		idx = (idx - 1 + slides.length) % slides.length;
		show(idx);
	}

	let timer = setInterval(next, 4000);

	function resetTimer() {
		clearInterval(timer);
		timer = setInterval(next, 4000);
	}

	prevBtn?.addEventListener('click', () => { prev(); resetTimer(); });
	nextBtn?.addEventListener('click', () => { next(); resetTimer(); });

	searchForm?.addEventListener('submit', (e) => {
		e.preventDefault();
		const q = (searchInput?.value || '').trim();
		if (!q) {
			alert('Please enter a search term.');
			return;
		}
		alert(`Searching frames for: ${q}`);
	});
})();
