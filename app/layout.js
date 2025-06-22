import './globals.css';
import Header from './components/header';

export const metadata = {
  title: 'Kura Architects | Chartered Architects',
  description: 'Experienced design-led architectural practice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
          &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
