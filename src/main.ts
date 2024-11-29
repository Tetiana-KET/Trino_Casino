import { spinTheWheel } from './controllers/spinTheWheel';
import { renderPaymentItems } from './utils/renderPaymentItems';

renderPaymentItems();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('SpinWheelButton')?.addEventListener('click', spinTheWheel);
});
