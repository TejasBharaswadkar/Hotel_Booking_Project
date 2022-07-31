const viewMoreBtn = document.querySelector('#view_more');
const viewCity = document.getElementById('view-more-city-cards');

const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = '376546c246mshf5818e5483096dap1ec6';

viewMoreBtn.addEventListener('click', () => {
  if (viewMoreBtn.innerText == 'View More') {
    viewCity.style.display = 'block';
    viewMoreBtn.innerText = 'View Less';
  } else {
    viewCity.style.display = 'none';
    viewMoreBtn.innerText = 'View More';
  }
});

let debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
