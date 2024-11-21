// src/app/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="link">Home</Link>
        <Link href="/about" className="link">About</Link>
        <Link href="/contact" className="link">Contact</Link>
      </div>
    </nav>
  );
}
