import React, { useContext } from 'react';
import PromotionContext from 'src/PromotionContext';
import hasPromotionBySpot from '../hasPromotionBySpot';
import ConditionalPropsInterface from './ConditionalPropsInterface';

function Conditional({
  test,
  children,
}: ConditionalPropsInterface) {
  const promotions = useContext(PromotionContext);
  const normalizedTest = typeof test === 'string' ? [test] : test;

  const testPassed = normalizedTest.every(
    (testId) => hasPromotionBySpot(testId, promotions),
  );

  return testPassed
    ? (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {children}
      </>
    )
    : null;
}

export default Conditional;
