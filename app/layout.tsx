import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import cn from 'classnames';

import NavBar from '@/src/components/NavBar';
import AuthProvider from '@/src/context/AuthProvider';
import NotificationProvider from '@/src/context/NotificationProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  fallback: ['arial'],
});

export const metadata: Metadata = {
  title: 'Farcana Test Task App',
  description: 'Farcana test task application un basis of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={cn(roboto.className, 'p-5')}>
          <NotificationProvider>
            <NavBar />
            {children}
          </NotificationProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
