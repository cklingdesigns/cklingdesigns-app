import React, { useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import AnimatedCode from '../Components/AnimatedCode';
import { ParallaxProvider } from 'react-scroll-parallax';
import BucketListApp from '../Components/BucketListApp';
import {
  ImageSlideshowHobbies,
  ImageSlideshowFunDesigns,
  ImageSlideshowCoding,
  ImageSlideshowWildSide,
  ImageSlideshowMarketing,
  ImageSlideshowSilly,
  ImageSlideshowWoodworking,
  ImageSlideshowHolidayFun,
} from '../Components/ImageSlideshowOnHover';
const icons = [
  { type: "icon", className: "fa-brands fa-php" },
  { type: "icon", className: "fa-brands fa-js" },
  { type: "icon", className: "fa-brands fa-html5" },
  { type: "text", label: "ADA" },  
  { type: "icon", className: "fa-brands fa-css3-alt" },
  { type: "icon", className: "fa-brands fa-sass" },
  { type: "text", label: "JSON" },
  { type: "icon", className: "fa-brands fa-wordpress" },
  { type: "icon", className: "fa-brands fa-react" },
  { type: "icon", className: "fa-brands fa-bootstrap" },
  { type: "icon", className: "fa-brands fa-github" },
  { type: "text", label: "AJAX" },
  { type: "icon", className: "fa-brands fa-microsoft" },
  { type: "icon", className: "fa-brands fa-node-js" },
  { type: "icon", className: "fa-brands fa-laravel" },
  { type: "icon", className: "fa-solid fa-database" },
  { type: "icon", className: "fa-brands fa-wordpress" },
  { type: "icon", className: "fa-brands fa-font-awesome" },
  { type: "icon", className: "fa-brands fa-google" },
  { type: "icon", className: "fa-brands fa-node" },
  { type: "text", label: "Adobe" },
  { type: "icon", className: "fa-brands fa-weebly" },
  { type: "icon", className: "fa-brands fa-npm" },
  { type: "text", label: "365" }

];
const repeatIcons = (iconList: typeof icons, minCount = 40) => {
  const result = [];
  while (result.length < minCount) {
    result.push(...iconList);
  }
  return result.slice(0, minCount); // exact count
};

function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowModal(true);
  };
  interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
  }
  const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [loaded, setLoaded] = useState(false);

    return (
      <div ref={ref} className={`fade-in ${inView && loaded ? 'loaded' : ''}`}>
        {inView && <img src={src} alt={alt} onLoad={() => setLoaded(true)} {...props} />}
      </div>
    );
  };
  return (
    <>
    <main role="main">
      <section className="jumbotron text-center">
        <h1 className="loading-text">Kling's Creative Portfolio</h1>
        <p className="lead text-muted">A Fusion of Art, Design & Innovation</p>
        <hr></hr>
        <div className="row">
          <p className="col-sm-6 kling-cartoon"><img width="300" src={process.env.PUBLIC_URL + "/images/kling-cartoon.png"} alt="Corey Kling - Full Stack Developer" /></p>
          <p className="col-sm-6 intro-text">
            Results-driven Full Stack Developer with a strong foundation in web development, SEO, social media management, and multimedia integration. Adept at designing and deploying custom, responsive websites with afocus on accessibility and performance. Possesses a deep understanding of modern programming languages, database design, and digital marketing strategies. Proven ability to translate complex requirements into functional, user-friendly solutions while aligning with organizational goals.
          </p>
        </div>
        <div className="IconScrollWrapper">
          <div className="IconScrollContainer">
            {repeatIcons(icons).concat(repeatIcons(icons)).map((item, index) =>
              item.type === "icon" ? (
                <i key={index} className={`Icon ${item.className}`}></i>
              ) : (
                <span key={index} className="IconText">
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>
      </section>
      <ParallaxProvider>
        <Parallax translateY={[-20, 20]}>
          <div className="AnimatedCodeContainer">
              <AnimatedCode />
          </div>
        </Parallax>
        <div className="FortwayneschoolsContainer">
          <div>
            <h2>Fort Wayne Schools</h2>
            <p><a href="https://www.fortwayneschools.org/" target="_blank">Current Website</a></p>
            <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/fortwayneschools.jpg"} loading="lazy" alt="2022 Fortwayneschools.org" />
          </div>
          <div>
            <h2>2019 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20190630114014/https://www.fortwayneschools.org/" target="_blank">2019 Wayback Machine</a></p>
            <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/2019-fortwayneschools.jpg"} alt="2019 Fortwayneschools.org" />
          </div>
          <div>
            <h2>2017 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20170625210912/https://www.fortwayneschools.org/" target="_blank">2017 Wayback Machine</a></p>
            <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/2017-fortwayneschools.jpg"} alt="2017 Fortwayneschools.org" />
          </div>
          <div>
            <h2>2016 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20160503211228/http://www.fortwayneschools.org/" target="_blank">2016 Wayback Machine</a></p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/2016-fortwayneschools.jpg"} alt="2016 Fortwayneschools.org" />
          </div>
        </div>
      <Parallax translateY={[-20, 20]}>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <ImageSlideshowCoding />
                  <div className="card-body">
                  <p className="card-text">Programming/Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowMarketing />
                <div className="card-body">
                  <p className="card-text">Marketing/Design</p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHobbies />
                <div className="card-body">
                  <p className="card-text">Hobbies/Interests</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWildSide />
                <div className="card-body">
                  <p className="card-text">Wild Side</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowFunDesigns />
                <div className="card-body">
                  <p className="card-text">Fun Designs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
            <div className="col-md-4 VerticalLine"></div>
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHolidayFun />
                <div className="card-body">
                  <p className="card-text">Holiday Fun</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowSilly />
                <div className="card-body">
                  <p className="card-text">My Silly Side</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWoodworking />
                <div className="card-body">
                  <p className="card-text">Woodworking Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
      <div><BucketListApp /></div>
    </ParallaxProvider>
    </main>
    </>
  );
}

export default Home;