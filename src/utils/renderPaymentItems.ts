import { PaymentItem } from '../components/PaymentItem';
import { paymentsObg } from '../consts/paymentsObj';

export function renderPaymentItems() {
  const paymentsContainer = document.querySelector('.payments');
  Object.entries(paymentsObg).forEach(([name, iconPath]) => {
    const paymentItem = PaymentItem({ name, iconPath });
    paymentsContainer?.append(paymentItem);
  });
}
