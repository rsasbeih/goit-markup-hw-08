(() => {
  const mobileMenu = document.querySelector('.js-menu-container');

  const toggleMenu = () => {
    const isMenuOpen =
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();