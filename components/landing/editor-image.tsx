'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const EditorImage = () => {
  const { theme, systemTheme } = useTheme();
  const selectedTheme =
    theme === 'dark' || theme === 'light' ? theme : systemTheme;
  const [themes, setThemes] = useState(selectedTheme);

  useEffect(() => {
    setThemes(selectedTheme);
  }, [selectedTheme]);

  return (
    <section className="flex justify-center my-16 px-5 md:my-32 md:px-0">
      <section className="flex items-center justify-center bg-primary w-full max-w-7xl h-[250px] md:h-[700px] rounded-xl md:rounded-lg">
        <Image
          src={`https://ik.imagekit.io/x7lxfswax/${themes}-editor-bg.webp`}
          alt="screenshot-editor"
          width={900}
          height={900}
          loading="eager"
          priority={true}
          className="object-contain rounded-md md:rounded-xl shadow-xl w-[300px] md:w-[1100px] h-auto"
        />
      </section>
    </section>
  );
};

export default EditorImage;
