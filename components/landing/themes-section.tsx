'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MarqueeTheme = dynamic(() => import('../marquee-theme'));

const ThemesSection = () => {
  const [images, setImages] = useState([]);
  const fetchImage = async () => {
    const res = await axios.get('/api/fetch-images');

    setImages(res.data.images);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const middleIndex = Math.ceil(images.length / 2);
  const firstHalf = images.slice(0, middleIndex);
  const secondHalf = images.slice(middleIndex);

  return (
    <section className="my-32 max-w-7xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto mb-3">
        Customize Your Code Snippets
      </h3>
      <p className="text-muted-foreground text-sm md:text-base">
        with 20+ Custom Themes and Much More...
      </p>
      <section className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <section className="mt-16">
          <MarqueeTheme themes={firstHalf} direction="left" />
        </section>
        <section className="mt-3">
          <MarqueeTheme themes={secondHalf} direction="right" />
        </section>
      </section>
    </section>
  );
};

export default ThemesSection;
