export function enableButton() {
  const spinButton = document.querySelector('.wheel__button') as HTMLButtonElement;
  spinButton.removeAttribute('disabled');
}
