import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clock-In Dashboard',
  description: 'Admin dashboard for clock-in system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
