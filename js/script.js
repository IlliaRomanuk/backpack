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













// const endTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 8 часов

// function updateTimer() {
//   const now = new Date().getTime();
//   const distance = endTime - now;

//   const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((distance / (1000 * 60)) % 60);
//   const seconds = Math.floor((distance / 1000) % 60);

//   document.getElementById("hours").textContent = String(hours).padStart(2, '0');
//   document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
//   document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
// }

// setInterval(updateTimer, 1000);


  

// let totalSeconds = 3600;

// function updateTimer() {
//   const h = Math.floor(totalSeconds / 3600);
//   const m = Math.floor((totalSeconds % 3600) / 60);
//   const s = totalSeconds % 60;

//   document.getElementById("hours").textContent = String(h).padStart(2, "0");
//   document.getElementById("minutes").textContent = String(m).padStart(2, "0");
//   document.getElementById("seconds").textContent = String(s).padStart(2, "0");

//   if (totalSeconds > 0) totalSeconds--;
// }

// setInterval(updateTimer, 1000);
// updateTimer();

// let totalSecond = 3600;

// function updateTime() {
//   const hour = Math.floor(totalSecond / 3600);
//   const min = Math.floor((totalSecond % 3600) / 60);
//   const sec = totalSecond % 60;

//   document.getElementById("hour").textContent = String(hour).padStart(2, "0");
//   document.getElementById("minute").textContent = String(min).padStart(2, "0");
//   document.getElementById("second").textContent = String(sec).padStart(2, "0");

//   if (totalSecond > 0) totalSecond--;
// }
// setInterval(updateTime, 1000);
// updateTime();



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

    // закрываем все
    faqItems.forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq__icon').textContent = '+';
    });

    // если был закрыт — открываем
    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.faq__icon').textContent = '−';
    }
  });
});