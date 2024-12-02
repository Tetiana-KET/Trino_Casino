import { ActionButton } from '../components/ActionButton';
const props = { id: 'spinWheelButton', text: 'Spin the Wheel' };

export function renderWheelButton() {
  const wheelButtonContainer = document.getElementById('wheelButtonContainer');
  const wheelButton = ActionButton(props);
  wheelButtonContainer?.append(wheelButton);
}
