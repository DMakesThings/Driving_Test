(function () {
  const total = QUESTIONS.length;
  let order = QUESTIONS.map((_, i) => i);
  let pos = 0;
  let flipped = false;

  const card = document.getElementById('card');
  const cardInner = document.getElementById('cardInner');
  const frontBadge = document.getElementById('frontBadge');
  const frontQuestion = document.getElementById('frontQuestion');
  const frontImageWrap = document.getElementById('frontImageWrap');
  const optionsList = document.getElementById('optionsList');
  const progressText = document.getElementById('progressText');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const resetBtn = document.getElementById('resetBtn');
  const jumpInput = document.getElementById('jumpInput');

  function render() {
    const q = QUESTIONS[order[pos]];
    flipped = false;
    card.classList.remove('flipped');

    frontBadge.textContent = 'Câu ' + q.id;
    frontQuestion.textContent = q.question;

    frontImageWrap.innerHTML = '';
    if (q.image) {
      const img = document.createElement('img');
      img.src = q.image;
      img.alt = 'Câu ' + q.id + ' hình minh họa';
      frontImageWrap.appendChild(img);
    }

    optionsList.innerHTML = '';
    q.options.forEach((opt) => {
      const li = document.createElement('li');
      li.textContent = opt;
      optionsList.appendChild(li);
    });

    progressText.textContent = (pos + 1) + ' / ' + total;
    jumpInput.value = q.id;
  }

  function goTo(newPos) {
    pos = ((newPos % total) + total) % total;
    render();
  }

  function flip() {
    flipped = !flipped;
    card.classList.toggle('flipped', flipped);
  }

  function shuffle() {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    pos = 0;
    render();
  }

  function resetOrder() {
    order = QUESTIONS.map((_, i) => i);
    pos = 0;
    render();
  }

  cardInner.addEventListener('click', flip);
  prevBtn.addEventListener('click', () => goTo(pos - 1));
  nextBtn.addEventListener('click', () => goTo(pos + 1));
  shuffleBtn.addEventListener('click', shuffle);
  resetBtn.addEventListener('click', resetOrder);

  jumpInput.addEventListener('change', () => {
    const id = parseInt(jumpInput.value, 10);
    const idx = order.findIndex((i) => QUESTIONS[i].id === id);
    const targetIndex = QUESTIONS.findIndex((q) => q.id === id);
    if (targetIndex === -1) return;
    const orderIdx = order.indexOf(targetIndex);
    goTo(orderIdx === -1 ? 0 : orderIdx);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(pos + 1);
    else if (e.key === 'ArrowLeft') goTo(pos - 1);
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
  });

  render();
})();
