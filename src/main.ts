import { spinTheWheel } from './controllers/spinTheWheel';
import { takeBonus } from './controllers/takeBonus';
import { renderPaymentItems } from './utils/renderPaymentItems';
import { renderPopupButton } from './utils/renderPopupButton';
import { renderWheelButton } from './utils/renderWheelButton';

renderWheelButton();
renderPaymentItems();
renderPopupButton();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('spinWheelButton')?.addEventListener('click', spinTheWheel);
  document.getElementById('takeBonusButton')?.addEventListener('click', takeBonus);
});
