export function initDropdowns() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-button');
    const menu = dropdown.querySelector('.dropdown-content');

    button.addEventListener('click', () => {
      menu.classList.toggle('visible');
    });
  });

  window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-content.visible').forEach(openMenu => {
      if (!openMenu.parentElement.contains(event.target)) {
        openMenu.classList.remove('visible');
      }
    });
  });
}
