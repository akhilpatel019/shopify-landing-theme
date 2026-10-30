 
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.getElementById('closeMenu');
    const offcanvasMenu = document.getElementById('offcanvasMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
      offcanvasMenu.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenuHandler() {
      offcanvasMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', openMenu);
    }

    if (closeMenu) {
      closeMenu.addEventListener('click', closeMenuHandler);
    }

    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenuHandler);
    }

