import Link from 'next/link';
import { ArrowUpCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="max-w-4xl mx-auto text-center mt-32 flex flex-col justify-center px-5 md:px-0">
      <h1 className="text-3xl md:text-6xl font-black leading-tight">
        Elevate your code snippets with impressive visuals
      </h1>
      <p className="mt-8 md:mx-32 text-muted-foreground text-base md:text-xl">
        Effortlessly create and beautify your code snippets with TaaYoo Styles,
        making them eye-catching code showcases.
      </p>
      <section className="flex justify-center mt-10 group">
        <Link
          href="/screenshot-editor"
          className="bg-primary w-fit py-3 px-6 flex items-center rounded-lg justify-center hover:bg-primary/90 transition-colors shadow-lg"
        >
          <span className="text-primary-foreground">Get Started</span>
          <ArrowUpCircle className="h-5 w-5 rotate-45 ml-4 group-hover:rotate-90 transition text-primary-foreground" />
        </Link>
      </section>
    </section>
  );
};

export default HeroSection;
