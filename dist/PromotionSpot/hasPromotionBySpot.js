import getPromotionBySpot from './getPromotionsBySpot';
function hasPromotionBySpot(id, promotions) {
    return getPromotionBySpot(id, promotions) !== null;
}
export default hasPromotionBySpot;
