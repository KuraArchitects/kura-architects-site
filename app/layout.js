import './globals.css';
import Header from './components/Header';
import Header from './components/Footer';
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-albert-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Kura Architects | Chartered Architects',
  description: 'Experienced design-led architectural practice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
