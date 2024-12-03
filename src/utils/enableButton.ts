export function enableButton(id: string) {
  const spinButton = document.getElementById(`${id}`) as HTMLButtonElement;
  spinButton.removeAttribute('disabled');
}
