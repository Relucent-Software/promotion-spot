import { ReactNode } from 'react';

interface ConditionalPropsInterface {
  test: string | string[],
  children: ReactNode,
}

export default ConditionalPropsInterface;
