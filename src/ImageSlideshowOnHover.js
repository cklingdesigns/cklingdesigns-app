import React, { useState, useRef } from 'react';

const ImageSlideshowHobbies = () => {
  const images = [
    '/images/hobbies/alien-ceiling.jpg',
    '/images/hobbies/camp-buddy-bear.jpg',
    '/images/hobbies/pond-night.jpg'
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
    '/images/artwork/airbrushed-owl.jpg',
    '/images/artwork/airbrushed-wall.jpg',
    '/images/artwork/airbushed-mask.jpg',
    '/images/artwork/bird-chair.jpg',
    '/images/artwork/airbushed-helmet.jpg',
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

export { ImageSlideshowFunDesigns };

const ImageSlideshowCoding = () => {
  const images = [
    '/images/coding/fortwayneschools.jpg',
    '/images/coding/myfwcs.jpg',
    '/images/coding/python-cheatsheet.jpg',
    '/images/coding/whitehenn-2011.jpg',
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

export { ImageSlideshowCoding };

const ImageSlideshowWildSide = () => {
  const images = [
    '/images/crazy/parasailing.jpg',
    '/images/crazy/white-water-rafting.jpg',
    '/images/crazy/skydive.jpg',
    '/images/crazy/skydive1.jpg',
    '/images/crazy/skydive2.jpg',
    '/images/crazy/skydive3.jpg',
    '/images/crazy/skydive4.jpg',
    '/images/crazy/skydive5.jpg',
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

export { ImageSlideshowWildSide };

const ImageSlideshowHolidayFun = () => {
  const images = [
    '/images/holidayFun/halloween-skeleton.jpg',
    '/images/holidayFun/spiderman-car.jpg',
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

export { ImageSlideshowHolidayFun };

const ImageSlideshowSilly = () => {
  const images = [
    '/images/silly/fun-eggs.jpg',
    '/images/silly/photoshop-sith.png',
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

export { ImageSlideshowSilly };

const ImageSlideshowMarketing = () => {
  const images = [
    '/images/ckling-logo.png',
    '/images/myfwcs.png',
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

export { ImageSlideshowMarketing };

const ImageSlideshowWoodworking = () => {
  const images = [
    '/images/woodworking/lightpost.jpg',
    '/images/woodworking/mailbox1.jpg',
    '/images/woodworking/wishing-well.jpg',
    '/images/woodworking/windmill.jpg',
    '/images/woodworking/playset3.jpg',
    '/images/woodworking/mailbox2.jpg',
    '/images/woodworking/bunk-beds3.jpg',
    '/images/woodworking/activity-box1.jpg',
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

export { ImageSlideshowWoodworking };