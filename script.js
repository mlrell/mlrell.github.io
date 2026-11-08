(() => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  function setTheme(theme) {
    const dark = theme === 'dark';
    document.body.classList.toggle('dark', dark);
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    metaTheme.content = dark ? '#111827' : '#f5f8ff';
  }

  const saved = localStorage.getItem('zamira-theme');
  setTheme(saved === 'dark' ? 'dark' : 'light');
  toggle.addEventListener('click', () => {
    const theme = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(theme);
    localStorage.setItem('zamira-theme', theme);
  });
})();
