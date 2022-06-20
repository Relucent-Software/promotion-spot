import { isValidElement } from 'react';
import _get from 'lodash.get';
function getPromotionBySpot(id, promotions, i = 0) {
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
