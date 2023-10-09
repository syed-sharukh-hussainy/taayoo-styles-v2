'use client';
import Link from 'next/link';
import TaaYooLogo from './taayoo-logo';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathName = usePathname();
  if (pathName === '/' || pathName === 'cookies') {
    return (
      <footer className="border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-10 px-5 md:px-0">
          <div className="flex flex-col items-start justify-center gap-5">
            <Link href="/" className="flex items-center gap-3">
              <TaaYooLogo />
              <p className="text-lg font-black">TaaYoo Styles</p>
            </Link>
            <p className="max-w-sm text-sm">
              Effortlessly create and beautify your code snippets with TaaYoo
              Styles, making them eye-catching code showcases.
            </p>
          </div>
          <div className="flex flex-col mt-5 md:mt-0">
            <p className="text-lg font-bold mb-3">Legal</p>
            <Link href="/" className="text-sm">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm">
              Cookie Prefences
            </Link>
          </div>
        </div>
        <div className="text-sm py-6 bg-muted">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <p>&copy; 2023. TaaYoo Styles. All Rights Reserved.</p>
            <div className="text-sm text-center mt-1 md:mt-0">
              Created With ❤️ by{' '}
              <Link
                target="_blank"
                className="text-foreground underline font-medium"
                href="https://twitter.com/syed_sharukh_"
              >
                Syed Sharukh Hussainy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
