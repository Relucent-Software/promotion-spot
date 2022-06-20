import { ReactNode } from 'react';
import { PromotionIndexInterface } from 'src/PromotionContext';
declare function getPromotionBySpot(id: string, promotions: PromotionIndexInterface, i?: number): ReactNode | null;
export default getPromotionBySpot;
