import { ActionButton } from '../components/ActionButton';
const props = { id: 'takeBonusButton', text: 'Take bonus' };

export function renderPopupButton() {
  const popupButtonContainer = document.getElementById('popupButtonContainer');
  const popupButton = ActionButton(props);
  popupButtonContainer?.append(popupButton);
}
