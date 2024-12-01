import { enableButton } from '../utils/enableButton';
import { hideModal } from './hideModal';

export function takeBonus() {
  enableButton('spinWheelButton');
  hideModal();
}
