import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';
import { ChatBot } from './components/ChatBot';
// import faviconImage from '../../assets/sticker.png';

export default function App() {
  useEffect(() => {
    // Set favicon
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    // link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Set page title
    document.title = 'Nergal Labs | Software Engineer & Creative Technologist';
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ChatBot />
    </>
  );
}