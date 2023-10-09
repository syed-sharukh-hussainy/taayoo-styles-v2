import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeTheme = ({
  themes,
  direction,
}: {
  themes: any[];
  direction: 'left' | 'right' | 'up' | 'down' | undefined;
}) => {
  return (
    <Marquee pauseOnHover direction={direction}>
      {themes.map((theme, index) => (
        <section key={index} className="mr-3">
          <Image
            src={`https://taayoo-images.s3.ap-south-1.amazonaws.com/${theme.Key}`}
            alt={theme.Key}
            width={200}
            height={100}
            loading="lazy"
            className="w-auto h-auto rounded-lg"
          />
        </section>
      ))}
    </Marquee>
  );
};

export default MarqueeTheme;
