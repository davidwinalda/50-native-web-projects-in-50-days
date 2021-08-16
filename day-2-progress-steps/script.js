let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.progress-number');
let progressLine = document.getElementById('progress-line');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  if (currentActive > 1) {
    prev.classList.remove('disabled')
  }
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active')
    }
  })

  let progressActive = document.querySelectorAll('.active');

  progressLine.style.width = ((progressActive.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}