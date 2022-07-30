function showNav() {
  const nav = document.querySelector('nav');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  } else {
    nav.classList.add('active');
  }
}
