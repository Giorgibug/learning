// function printFor() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// function syncFn() {
//   console.log("start sync function");
//   printFor();
//   console.log("after for");
// }
// // syncFn();

// function asyncFn() {
//   console.log("start async");
//   setTimeout(printFor, 2000);
//   console.log("after for");
// }

// setInterval(() => {
//   console.log("set interval");
// }, 5000);
// const startTimeout = document.querySelector(".start");
// const stopTimeout = document.querySelector(".stop");

// function startTimeoutFn() {
//   console.log("start timeout fn");
//   timeoutID = setTimeout(() => {
//     console.log("start timeout");
//   }, 5000);
// }

// function stopTimeoutFn() {
//   console.log("clear timeout");
//   clearTimeout(timeoutID);
// }

// startTimeout.addEventListener("click", startTimeoutFn);
// stopTimeout.addEventListener("click", stopTimeoutFn);

const slides = document.querySelectorAll(".slide");
const leftArr = document.querySelector(".left");
const rightArr = document.querySelector(".right");

let activeSlideIndex = 0;

function renderSlides() {
  slides.forEach((slide, index) => {
    console.log(slide, index, activeSlideIndex);
    if (activeSlideIndex === index) {
      slide.classList.add("active-slide");
    } else {
      slide.classList.remove("active-slide");
    }
  });
}

function nextSlide() {
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex++;
  }

  renderSlides();
}

function prevSlide() {
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex--;
  }
  renderSlides();
}

function createSlider() {
  renderSlides();
  //   renderBullets();

  rightArr.addEventListener("click", nextSlide);
  leftArr.addEventListener("click", prevSlide);

  //   setInterval(nextSlide, 6000);
  document.addEventListener("keyup", (e) => {
    // console.log(e.code);
    if (e.code === "ArrowRight") {
      nextSlide();
    }
    if (e.code === "ArrowLeft") {
      prevSlide();
    }
  });
}

createSlider();

// const clock = document.querySelector(".clock-block");
// function createClock() {
//   const day = new Date();

//   const hour = day.getHours();
//   const min = day.getMinutes();
//   const sec = day.getSeconds();

//   if (hour < 12) {
//     clock.innerHTML = `${hour} : ${min} : ${sec} AM`;
//   } else {
//     clock.innerHTML = `${hour - 12} : ${min} : ${sec} PM`;
//   }
// }

// function renderBullets() {
//   slides.forEach((slide, idnex) => {
//     const btn = document.createElement("button");
//     btn.classList.add("slide-btn", "btn");
//     sliderBtns.append(btn);
//   });
// }

// createClock();
// setInterval(createClock, 1000);
