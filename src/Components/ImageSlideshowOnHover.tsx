import React, { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';
import { useInView } from 'react-intersection-observer';

// Typed LazyImage component
interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} style={{ minHeight: '200px' }}>
      {inView && <img src={src} alt={alt} {...props} />}
    </div>
  );
};

// Generic Slideshow component
interface ImageSlideshowProps {
  images: string[];
  intervalMs?: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, intervalMs = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, intervalMs);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentIndex(0);
  };

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
      style={{
        height: '225px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    >
      <LazyImage
        className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

// Now export your specific slideshows using the generic component:

export const ImageSlideshowHobbies = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/hobbies/alien-ceiling.jpg',
      process.env.PUBLIC_URL + '/images/hobbies/camp-buddy-bear.jpg',
      process.env.PUBLIC_URL + '/images/hobbies/pond-night.jpg',
    ]}
  />
);

export const ImageSlideshowFunDesigns = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/artwork/airbrushed-owl.jpg',
      process.env.PUBLIC_URL + '/images/artwork/airbrushed-wall.jpg',
      process.env.PUBLIC_URL + '/images/artwork/airbushed-mask.jpg',
      process.env.PUBLIC_URL + '/images/artwork/bird-chair.jpg',
      process.env.PUBLIC_URL + '/images/artwork/airbushed-helmet.jpg',
    ]}
  />
);

export const ImageSlideshowCoding = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/coding/fortwayneschools.jpg',
      process.env.PUBLIC_URL + '/images/coding/myfwcs.jpg',
      process.env.PUBLIC_URL + '/images/coding/whitehenn-2011.jpg',
    ]}
  />
);

export const ImageSlideshowWildSide = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/crazy/parasailing.jpg',
      process.env.PUBLIC_URL + '/images/crazy/white-water-rafting.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive1.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive2.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive3.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive4.jpg',
      process.env.PUBLIC_URL + '/images/crazy/skydive5.jpg',
    ]}
  />
);

export const ImageSlideshowHolidayFun = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/holidayFun/halloween-skeleton.jpg',
      process.env.PUBLIC_URL + '/images/holidayFun/spiderman-car.jpg',
    ]}
  />
);

export const ImageSlideshowSilly = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/silly/fun-eggs.jpg',
      process.env.PUBLIC_URL + '/images/silly/photoshop-sith.png',
    ]}
  />
);

export const ImageSlideshowMarketing = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/ckling-logo.png',
      process.env.PUBLIC_URL + '/images/myfwcs.png',
    ]}
  />
);

export const ImageSlideshowWoodworking = () => (
  <ImageSlideshow
    images={[
      process.env.PUBLIC_URL + '/images/woodworking/lightpost.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/mailbox1.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/wishing-well.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/windmill.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/playset3.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/mailbox2.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/bunk-beds3.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/activity-box1.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/activity-box2.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/activity-box3.jpg',
      process.env.PUBLIC_URL + '/images/woodworking/activity-box4.jpg',
    ]}
  />
);
