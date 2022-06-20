import { isValidElement, ReactNode } from 'react';
import _get from 'lodash.get';
import { PromotionIndexInterface } from 'src/PromotionContext';

function getPromotionBySpot(
  id: string,
  promotions: PromotionIndexInterface,
  i: number = 0,
): ReactNode | null {
  if (i >= 5) {
    return null;
  }

  let promotion = _get(promotions, id, null);

  if (typeof promotion === 'function') {
    promotion = promotion();
  }

  if (promotion && isValidElement(promotion)) {
    return promotion;
  }

  if (typeof promotion === 'string') {
    return getPromotionBySpot(promotion, promotions, i + 1);
  }

  return null;
}

export default getPromotionBySpot;
