import React, { useContext } from 'react';
import PromotionContext from 'src/PromotionContext';
import getPromotionBySpot from '../getPromotionsBySpot';
import DisplayPropsInterface from './DisplayPropsInterface';

function Display({
  id,
  children,
  render,
}: DisplayPropsInterface) {
  const promotions = useContext(PromotionContext);
  const promotion = getPromotionBySpot(id, promotions);

  if (promotion !== null) {
    return render
      ? (
        <>
          {render(promotion)}
        </>
      )
      : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {promotion}
        </>
      );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children || null}
    </>
  );
}

export default Display;
