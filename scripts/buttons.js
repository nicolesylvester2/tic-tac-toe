document.addEventListener('click', () => {
  const button = document.querySelector('.button.primary');
  // remove the class to reset the animation
  button.classList.remove('glow-active');
  void button.offsetWidth;
  // add the class back to set next the animation
  button.classList.add('glow-active');
});
