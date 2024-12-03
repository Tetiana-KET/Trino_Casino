interface ActionButtonProps {
  id: string;
  text: string;
}

export function ActionButton({ id, text }: ActionButtonProps): HTMLButtonElement {
  const button = document.createElement('button');
  button.classList.add('button');
  button.id = id;
  button.type = 'button';
  button.textContent = text;

  return button;
}
