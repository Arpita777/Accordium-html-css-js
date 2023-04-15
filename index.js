// Import stylesheets
import './style.css';

const labels = document.querySelectorAll('label');
labels.forEach((label) => {
  label.setAttribute('data-content', '+');
  label.addEventListener('click', () => {
    const mycontent = label.closest('li').querySelector('div');
    if (mycontent.classList.contains('expand')) {
      mycontent.classList.remove('expand');
      setTimeout(() => {
        label.setAttribute('data-content', '+');
      }, 200);
    } else {
      mycontent.classList.add('expand');
      label.setAttribute('data-content', '-');
    }
  });
});
