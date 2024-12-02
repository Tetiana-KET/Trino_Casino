import { enableButton } from '../utils/enableButton';
import { hideModal } from './hideModal';

export function takeBonus() {
  window.open('https://trinocasino.com/', '_blank');
  enableButton('spinWheelButton');
  hideModal();
}
