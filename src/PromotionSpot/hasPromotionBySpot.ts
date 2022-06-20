import { PromotionIndexInterface } from 'src/PromotionContext';
import getPromotionBySpot from './getPromotionsBySpot';

function hasPromotionBySpot(
  id: string,
  promotions: PromotionIndexInterface,
): boolean {
  return getPromotionBySpot(id, promotions) !== null;
}

export default hasPromotionBySpot;
