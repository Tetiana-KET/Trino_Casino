import { MAX_TURN_COUNT } from '../consts/turnCount';
import { wheelSectors } from '../consts/wheelSectors';
import { getRandomIntInclusive } from '../utils/getRandomIntInclusive';

let previousPosition = 0;

export function spinTheWheel() {
  const fortuneWheel = document.getElementById('fortuneWheel') as HTMLElement;

  // const index = getRandomIntInclusive(0, wheelSectors.length - 1) ?? 1;//  in case we want eny sector to win
  const index = getRandomIntInclusive(0, 2);
  const winSector = wheelSectors[index];

  const randomRotation = getRandomIntInclusive(1, MAX_TURN_COUNT) * 360;
  const period = getRandomIntInclusive(0, 5);
  const winAngle = previousPosition + winSector.positionStart + randomRotation + period;

  fortuneWheel.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.99)';
  fortuneWheel.style.transform = `rotate(${winAngle}deg)`;
}
