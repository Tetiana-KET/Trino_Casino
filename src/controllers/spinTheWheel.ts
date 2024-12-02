// uncomment this imports, if you want to uncomment functions call below
// that will start every rotation from initial sector

// import { enableButton } from '../utils/enableButton';
// import { resetWheelPosition } from '../utils/resetWheelPosition';

import { MS_BEFORE_POPUP } from '../consts/msBeforePopupIsShown';
import { MAX_TURN_COUNT } from '../consts/turnCount';
import { wheelSectors } from '../consts/wheelSectors';
import { disableButton } from '../utils/disableButton';
import { getRandomIntInclusive } from '../utils/getRandomIntInclusive';
import { setModalContent } from './setModalContent';
import { showModal } from './showModal';

let previousPosition = 0;

export function spinTheWheel() {
  disableButton('spinWheelButton');
  const fortuneWheel = document.getElementById('fortuneWheel') as HTMLElement;

  // in case you want any sector could win, uncomment the line bellow, and DO comment next to it line
  // const index = getRandomIntInclusive(0, wheelSectors.length - 1) ?? 1;
  const index = getRandomIntInclusive(0, 2);

  const winSector = wheelSectors[index];
  setModalContent(winSector.description);
  const randomRotation = getRandomIntInclusive(1, MAX_TURN_COUNT) * 360;
  const period = getRandomIntInclusive(0, 5);
  const winAngle = previousPosition + winSector.positionStart + randomRotation + period;

  fortuneWheel.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.99)';
  fortuneWheel.style.transform = `rotate(${winAngle}deg)`;

  fortuneWheel.addEventListener('transitionend', () => {
    setTimeout(() => {
      showModal();
      /* if you want next rotation start from the initial position, just uncomment next 2 lines and imports for them*/
      // resetWheelPosition(fortuneWheel);
      // previousPosition = 0;
    }, MS_BEFORE_POPUP);
  });
}
