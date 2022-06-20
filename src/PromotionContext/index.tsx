/**
 * TheDerbyInn.co.uk
 *
 * @since 1.0.0
 * @package TheDerbyInn.co.uk
 * @copyright 2022 Derby Dreamon Ltd.
 * @link https://thederbyinn.co.uk
 */

import { createContext, ReactNode } from 'react';

interface PromotionIndexInterface {
  [key: string]: PromotionIndexInterface
  | Exclude<ReactNode, boolean | undefined>
  | (
    () => PromotionIndexInterface
    | Exclude<ReactNode, boolean | undefined>
  ),
}

const PromotionContext = createContext<PromotionIndexInterface>({});

export default PromotionContext;
export type {
  PromotionIndexInterface,
};
