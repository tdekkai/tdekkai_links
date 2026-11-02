(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const themeButton = document.getElementById('theme-toggle');
  themeButton?.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    themeButton.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.setAttribute('aria-pressed', String(dark));
  });
})();
