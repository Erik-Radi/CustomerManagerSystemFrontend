import { ReactNode } from 'react';

export type BackdropProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};
