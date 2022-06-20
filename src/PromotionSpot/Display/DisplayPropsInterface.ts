import { ReactNode } from 'react';

interface DisplayPropsInterface {
  id: string,
  children?: ReactNode,
  render?: (promotion: ReactNode) => ReactNode,
}

export default DisplayPropsInterface;
