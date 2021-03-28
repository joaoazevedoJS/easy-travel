import { FC } from 'react';

import { ToastProvider } from './toast';

const Providers: FC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export { Providers };
