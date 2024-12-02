interface PaymentItemProps {
  name: string;
  iconPath: string;
}

export function PaymentItem({ name, iconPath }: PaymentItemProps): HTMLLIElement {
  const listItem = document.createElement('li');
  listItem.classList.add('payments__item');

  const paymentsIcon = document.createElement('img');
  paymentsIcon.classList.add('payments__icon');
  paymentsIcon.src = iconPath;
  paymentsIcon.alt = `${name} icon`;

  listItem.append(paymentsIcon);
  return listItem;
}
