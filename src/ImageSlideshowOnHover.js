import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} style={{ minHeight: '200px' }}>
      {inView && <img src={src} alt={alt} {...props} />}
    </div>
  );
};
const ImageSlideshowHobbies = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/hobbies/alien-ceiling.jpg',
    process.env.PUBLIC_URL + '/images/hobbies/camp-buddy-bear.jpg',
    process.env.PUBLIC_URL + '/images/hobbies/pond-night.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <img className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowHobbies };

const ImageSlideshowFunDesigns = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/artwork/airbrushed-owl.jpg',
    process.env.PUBLIC_URL + '/images/artwork/airbrushed-wall.jpg',
    process.env.PUBLIC_URL + '/images/artwork/airbushed-mask.jpg',
    process.env.PUBLIC_URL + '/images/artwork/bird-chair.jpg',
    process.env.PUBLIC_URL + '/images/artwork/airbushed-helmet.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage  className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowFunDesigns };

const ImageSlideshowCoding = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/coding/fortwayneschools.jpg',
    process.env.PUBLIC_URL + '/images/coding/myfwcs.jpg',
    process.env.PUBLIC_URL + '/images/coding/whitehenn-2011.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowCoding };

const ImageSlideshowWildSide = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/crazy/parasailing.jpg',
    process.env.PUBLIC_URL + '/images/crazy/white-water-rafting.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive1.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive2.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive3.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive4.jpg',
    process.env.PUBLIC_URL + '/images/crazy/skydive5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowWildSide };

const ImageSlideshowHolidayFun = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/holidayFun/halloween-skeleton.jpg',
    process.env.PUBLIC_URL + '/images/holidayFun/spiderman-car.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowHolidayFun };

const ImageSlideshowSilly = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/silly/fun-eggs.jpg',
    process.env.PUBLIC_URL + '/images/silly/photoshop-sith.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowSilly };

const ImageSlideshowMarketing = () => {
  const images = [
    process.env.PUBLIC_URL + '/images/ckling-logo.png',
    process.env.PUBLIC_URL + '/images/myfwcs.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowMarketing };

const ImageSlideshowWoodworking = () => {
  const images = [
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // change image every 1 second
  };

  const stopSlideshow = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(0);
  };

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
      <LazyImage className="card-img-top main-images"
        src={images[currentIndex]}
        alt="Slideshow"
      />
    </div>
  );
};

export { ImageSlideshowWoodworking };