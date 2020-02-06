export function calcLineStyle(orientation: string, deg: number, lineHeight: number, lineLength: number) {

  const getLineTransform = (orientation: string, deg: number, lineHeight: number): number => {

    if (deg < 0 || deg > 360) {
      console.warn('Line rotation should be between 0 an 360 but was', deg, 'degrees');
    }

    switch (orientation) {
      case 'left':
        if (deg < 90) {
          return -lineHeight;
        } else if (deg >= 90 && deg < 180) {
          return 0
        } else if (deg >= 180 && deg < 270) {
          return -2 * lineHeight
        } else {
          return -lineHeight
        }
      case 'right':
        if (deg < 90) {
          return 0
        } else if (deg >= 90 && deg < 180) {
          return -lineHeight;
        } else if (deg >= 180 && deg < 270) {
          return -lineHeight;
        } else {
          return -2 * lineHeight;
        }
      default:
        return 0;
    }
  }

  const getTransformOrigin = (orientation: string, deg: number): string => {
    switch (orientation) {
      case 'left':
        if (deg <= 90) {
          return 'left top'
        } else if (deg < 180) {
          return 'left top'
        } else if (deg < 270) {
          return 'left bottom'
        } else {
          return 'left bottom'
        }
      case 'right':
        if (deg <= 90) {
          return 'right top'
        } else if (deg < 180) {
          return 'right top';
        } else if (deg < 270) {
          return 'right bottom'
        } else {
          return 'right bottom'
        }
      default:
        return 'left bottom';
    }
  }

  const getRealLineRotation = (orientation: string, deg: number): number => {
    return (orientation === 'left' ? deg : deg + 180) % 360 * -1;
  }

  const lineTranslate = getLineTransform(orientation, deg, lineHeight);
  const lineTransformOrigin = getTransformOrigin(orientation, deg);
  const realLineRotation = getRealLineRotation(orientation, deg);

  return {
    width: `${lineLength}px`,
    transform: `translateY(${lineTranslate}px) rotate(${realLineRotation}deg)`,
    transformOrigin: lineTransformOrigin
  }
}
