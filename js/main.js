onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U SAYANG').split('');
    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('subtitle');
    
    let index = 0;
    let subIndex = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); 
      } else {
        // Setelah title selesai, mulai ketik subtitle
        appendSubtitle();
      }
    }

    function appendSubtitle() {
      if (subIndex < subtitleText.length) {
        subtitleElement.innerHTML += subtitleText[subIndex];
        subIndex++;
        setTimeout(appendSubtitle, 100); // Nama diketik lebih cepat
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};