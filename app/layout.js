import './globals.css';
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Adjust as needed
  variable: '--font-albert',
});

export const metadata = {
  title: 'Kura Architects',
  description: 'Thoughtful / Smart / Reliable',
  icons: {
    icon: '/favicon.ico', // ✅ Your favicon file saved in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  );
}
