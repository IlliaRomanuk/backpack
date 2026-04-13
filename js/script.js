const openBtn = document.getElementById("openFilter");
const closeBtn = document.getElementById("closeFilter");
const modal = document.getElementById("filterModal");
const overlay = document.getElementById("overlay");
const openFilter = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};
const closeFilter = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};
openBtn.addEventListener("click", openFilter);
closeBtn.addEventListener("click", closeFilter);
overlay.addEventListener("click", closeFilter);


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
showSlide(current);
nextBtn.onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};
prevBtn.onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};


function createTimer({ hoursId, minutesId, secondsId, duration }) {
  let total = duration;
  function update() {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    document.getElementById(hoursId).textContent = String(h).padStart(2, "0");
    document.getElementById(minutesId).textContent = String(m).padStart(2, "0");
    document.getElementById(secondsId).textContent = String(s).padStart(2, "0");
    if (total > 0) total--;
  }
  update();
  setInterval(update, 1000);
}
// используем
createTimer({
  hoursId: "hours",
  minutesId: "minutes",
  secondsId: "seconds",
  duration: 3600
});
createTimer({
  hoursId: "hour",
  minutesId: "minute",
  secondsId: "second",
  duration: 3600
});


const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq__icon').textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.faq__icon').textContent = '−';
    }
  });
});