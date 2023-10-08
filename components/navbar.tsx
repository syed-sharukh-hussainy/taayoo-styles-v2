'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-background fixed top-0 left-0 flex w-full  border-b px-5 justify-between items-center z-50">
      <nav className="w-full h-14 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          {/* <TaaYooLogo /> */}
          <p className="hidden md:flex font-black text-xl">TaaYoo</p>
        </Link>
        <div className="flex items-center gap-3">
          {/* {NavButtons} */}
          {/* <ModeToggle /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
