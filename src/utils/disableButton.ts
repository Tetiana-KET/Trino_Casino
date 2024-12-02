export function disableButton(id: string) {
  const spinButton = document.getElementById(`${id}`) as HTMLButtonElement;
  spinButton.disabled = true;
}
