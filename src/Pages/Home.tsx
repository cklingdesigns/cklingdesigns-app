import React, { useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import AnimatedCode from '../Components/AnimatedCode';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  ImageSlideshowHobbies,
  ImageSlideshowFunDesigns,
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
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/fortwayneschools.jpg"} loading="lazy" alt="2022 Fortwayneschools.org" />
              <ul>
                <li>Collaborated with the marketing team to develop and maintain a new Finalsite CMS website, enabling departments to update content independently without IT assistance.</li>
                <li>Managed and configured employee access levels to ensure proper permissions and security.</li>
                <li>Diagnosed and resolved issues related to ADA compliance, SEO performance, and overall user functionality.</li>
              </ul>
          </div>
          <div>
            <h2>MyFWCS</h2>
            <p><a href="https://www.myfwcs.fortwayneschools.org/" target="_blank">Parent Portal</a></p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/myfwcs.jpg"} loading="lazy" alt="2020 myfwcs.org" />
            <ul>
              <li>Updated and maintained the user interface to enhance functionality and user experience.</li>
              <li>Identified, fixed, and optimized bugs during the transition from WebForms to Blazor.</li>
            </ul>
          </div>
          <div>
            <h2>Intranet</h2>
            <p>FWCS Intranet</p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/intranet.png"} loading="lazy" alt="2011-2025 Intranet" />
            <ul>
              <li>Developed an SQL-based file system with controlled employee access to ensure data security and organization.</li>
              <li>Created a drag-and-drop content management system that enabled departments to easily personalize their web pages.</li>
            </ul>
          </div>
          <div>
            <h2>Software Application</h2>
            <p>SNAP Intranet Software Application</p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/snap.png"} loading="lazy" alt="2023-2025 Application Software" />
            <ul>
              <li>Updated and modernized the user interface to improve usability and visual appeal.</li>
              <li>Diagnosed, debugged, and resolved software issues to ensure smooth functionality.</li>
            </ul>
          </div>
          <div>
            <h2>2019 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20190630114014/https://www.fortwayneschools.org/" target="_blank">2019 Wayback Machine</a></p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/2019-fortwayneschools.jpg"} alt="2019 Fortwayneschools.org" />
            <ul>
              <li>Redesigned the public-facing website to modernize appearance and improve user experience.</li>
              <li>Implemented new jQuery-based drag-and-drop features to enhance back-end functionality.</li>
            </ul>
          </div>
          <div>
            <h2>2017 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20170625210912/https://www.fortwayneschools.org/" target="_blank">2017 Wayback Machine</a></p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/2017-fortwayneschools.jpg"} alt="2017 Fortwayneschools.org" />
            <ul>
              <li>Revamped the entire website by integrating Bootstrap 3, achieving a fully responsive and mobile-friendly design.</li>
              <li>Developed an in-house administrative back end using the TinyMCE WYSIWYG editor, enabling staff to independently update and manage departmental websites.</li>
            </ul>
          </div>
          <div>
            <h2>2016 Fortwayneschools.org</h2>
            <p><a href="https://web.archive.org/web/20160503211228/http://www.fortwayneschools.org/" target="_blank">2016 Wayback Machine</a></p>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/2016-fortwayneschools.jpg"} alt="2016 Fortwayneschools.org" />
            <ul>
              <li>Developed a modern, dynamic website using PHP, CSS, SQL, and JavaScript, featuring 50+ sub-sites for individual schools.</li>
            </ul>
          </div>
          <div>
            <h2>2010 WhiteHenn.com</h2>
            <LazyImage src={process.env.PUBLIC_URL + "/images/coding/whitehenn-2011.jpg"} alt="2011 WhiteHenn.com" />
            <ul>
              <li>Designed and developed orthopedic websites from the ground up, emphasizing SEO, visual design, and operational efficiency.</li>
              <li>Maintained and optimized call center and mobile device software to ensure reliable performance.</li>
              <li>Engineered and managed multiple database architectures to support scalable and secure operations.</li>
            </ul>
          </div>
        </div>
      </ParallaxProvider>
      <div className="album py-5 bg-dark row">
        <h2 className="text-center mb-4">Creative Portfolio Galleries</h2>
        <div className="container grid-view col-sm-12 mb-4">
          <h3 className="card-text">Marketing/Design</h3>
          <ImageSlideshowMarketing />
        </div>
        <hr />
        <div className="container grid-view col-sm-6 mb-4">
            <h3 className="card-text">Hobbies/Interests</h3>
          <ImageSlideshowHobbies />
        </div>
        <div className="container grid-view col-sm-6 mb-4">
          <h3 className="card-text">Wild Side</h3>
          <ImageSlideshowWildSide />
        </div>
        <div className="container grid-view col-sm-6 mb-4">
          <h3 className="card-text">Fun Designs</h3>
          <ImageSlideshowFunDesigns />
        </div>
        <div className="container grid-view col-sm-6 mb-4">
          <h3 className="card-text">Holiday Fun</h3>
          <ImageSlideshowHolidayFun />
        </div>
        <div className="container grid-view col-sm-6 mb-4">
          <h3 className="card-text">My Silly Side</h3>
          <ImageSlideshowSilly />
        </div>
        <div className="container grid-view col-sm-6 mb-4">
          <h3 className="card-text">Woodworking Projects</h3>
          <ImageSlideshowWoodworking />
        </div>
      </div>
    </main>
    </>
  );
}

export default Home;