import { Outlet } from 'react-router';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export function RootLayout() {
  return (
    <>
      <GoogleAnalytics />
      <Outlet />
    </>
  );
}
