export function setModalContent(message: string) {
  const popupBonusMessage = document.getElementById('popupBonusMessage') as HTMLElement;
  popupBonusMessage.textContent = message;
}
