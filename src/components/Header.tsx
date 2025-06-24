// File: src/components/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-green-300 transition ${
      pathname === path ? 'underline underline-offset-4' : ''
    }`;

  return (
    <header className="bg-black border-b border-green-400 p-4 shadow-md sticky top-0 z-50">
      <nav className="flex justify-center gap-6 text-green-400 font-mono">
        <Link href="/" className={linkClass('/')}>
          Home
        </Link>
        <Link href="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link href="/projects" className={linkClass('/projects')}>
          Projects
        </Link>
        <Link href="/contact" className={linkClass('/contact')}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
