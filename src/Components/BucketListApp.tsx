import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

// --- Type Definitions ---
interface BucketListItem {
  id: number;
  name: string;
  category: string;
  completed: boolean;
  url?: string;
}

// --- Component ---
const BucketListApp: React.FC = () => {
  const [bucketList, setBucketList] = useState<BucketListItem[]>([]);
  const [error, setError] = useState<string | null>(null);

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
useEffect(() => {
  const fetchBucketList = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/bucketlist.json?${Date.now()}`, {
        headers: {
          "Accept": "application/json",
        },
      });

      const data: BucketListItem[] = await response.json();
      setBucketList(data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError(error.message || "Unknown error");
    }
  };

  fetchBucketList();
}, []);

  return (
    <div className="BucketListApp">
      <h2>My Bucket List</h2>
      <div className="row">
        <div className="col-sm-4 card">
          <h3>Adventures</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'adventure')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4 card">
          <h3>Travel</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'travel')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4 card">
           <h3>Nature</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'nature')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4 card">
           <h3>Creative</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'creative')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4 card">
           <h3>Cultural</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'cultural')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-4 card">
           <h3>Learning</h3>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul>
            {bucketList
              .filter((item) => item.category.toLowerCase() === 'learning')
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
              <li key={item.id}>
                {item.name} {item.completed ? <i className="fas fa-square-check"></i> : <i className="fas fa-square"></i>}
                {item.url && <a href={process.env.PUBLIC_URL + item.url} target="_blank" className="NoArrow"><LazyImage src={process.env.PUBLIC_URL + item.url} alt={item.name} className="lazy-image" /></a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BucketListApp;
