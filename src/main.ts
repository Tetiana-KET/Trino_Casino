import { spinTheWheel } from './controllers/spinTheWheel';
import { renderPaymentItems } from './utils/renderPaymentItems';
import { renderPopupButton } from './utils/renderPopupButton';

renderPaymentItems();
renderPopupButton();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('spinWheelButton')?.addEventListener('click', spinTheWheel);
});
