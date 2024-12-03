export function resetWheelPosition(fortuneWheel: HTMLElement) {
  fortuneWheel.style.transition = 'none';
  fortuneWheel.style.transform = 'rotate(0deg)';
  fortuneWheel.offsetHeight;
  fortuneWheel.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.99)';
}
