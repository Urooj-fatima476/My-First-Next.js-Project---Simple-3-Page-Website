// src/app/layout.tsx
import Navbar from './Navbar';  // Import Navbar
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* Add Navbar here */}
        {children}
      </body>
    </html>
  );
}
