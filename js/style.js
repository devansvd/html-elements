let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 150, 150);

function onBorderToggle() {
  const state = document.getElementById('border-toggler').checked;
  const allElements = document.querySelectorAll('*');
  if (!state) {
    for (const el of allElements) {
      el.classList.remove('solid-border');
    }
    return;
  }
  for (const el of allElements) {
    el.classList.add('solid-border');
  }
  return;
}
