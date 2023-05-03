import { ReactNode } from 'react';
import Navbar from '../Navbar';

interface MainContainerProps {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
