'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Button } from './ui/button';

import TaaYooLogo from './taayoo-logo';
import ModeToggle from './mode-toggle';
import dynamic from 'next/dynamic';

const ThemesSheet = dynamic(() => import('./themes-sheet'), { ssr: false });
const ExportToImage = dynamic(() => import('./export-to-image'), {
  ssr: false,
});
const ShareImage = dynamic(() => import('./share-image'), {
  ssr: false,
});

const Navbar = () => {
  const pathName = usePathname();

  const NavButtons = useMemo(() => {
    if (pathName === '/' || pathName === '/cookies') {
      return (
        <Link href="/screenshot-editor">
          <Button size="sm">Get Started</Button>
        </Link>
      );
    } else {
      return (
        <section className="hidden md:flex items-center gap-3">
          <ThemesSheet />
          <ExportToImage />
          <ShareImage />
        </section>
      );
    }
  }, [pathName]);

  return (
    <header className="bg-background fixed top-0 left-0 flex w-full  border-b px-5 justify-between items-center z-50">
      <nav className="w-full h-14 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <TaaYooLogo />
          <span className="hidden md:flex font-black text-xl">TaaYoo</span>
        </Link>
        <section className="flex items-center gap-3">
          {NavButtons}
          <ModeToggle />
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
