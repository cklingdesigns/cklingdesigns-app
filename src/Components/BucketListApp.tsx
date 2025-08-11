import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// --- Type Definitions ---
interface BucketListItem {
  id: number;
  name: string;
  category: string;
  completed: boolean;
  url?: string;
  url2?: string;
  url3?: string;
  url4?: string;
  url5?: string;
  video?: string;
}

// --- Lazy Image Component ---
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`fade-in ${inView && loaded ? "loaded" : ""}`}>
      {inView && (
        <img src={src} alt={alt} onLoad={() => setLoaded(true)} {...props} />
      )}
    </div>
  );
};

// --- Main Component ---
const BucketListItemComponent: React.FC = () => {
  const [bucketList, setBucketList] = useState<BucketListItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => setModalContent({src, alt});
  const closeModal = () => setModalContent(null);

  useEffect(() => {
    const fetchBucketList = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/bucketlist.json?${Date.now()}`,
          { headers: { Accept: "application/json" } }
        );
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data: BucketListItem[] = await response.json();
        setBucketList(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Error fetching data:", message);
        setError(message);
      }
    };
    fetchBucketList();
  }, []);

  const renderImageButtons = (item: BucketListItem) => {
    return ["url", "url2", "url3", "url4", "url5"].map(
      (key) =>
        item[key as keyof BucketListItem] && (
          <button
            key={key}
            type="button"
            className="NoArrow ModalButton"
            onClick={() =>
              openModal(
                process.env.PUBLIC_URL + (item[key as keyof BucketListItem] as string),item.name
              )
            }
          >
            <LazyImage
              src={
                process.env.PUBLIC_URL +
                (item[key as keyof BucketListItem] as string)
              }
              alt={item.name}
              className="lazy-image"
            />
          </button>
        )
    );
  };

  const renderCategory = (category: string) => (
    <div className="col-sm-4 card" key={category}>
      <h3>{category}</h3>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {bucketList
          .filter((item) => item.category.toLowerCase() === category.toLowerCase())
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              {item.completed ? (
                <i className="fas fa-square-check"></i>
              ) : (
                <i className="fas fa-square"></i>
              )}
              {renderImageButtons(item)}
              {item.video && (
                <button
                  type="button"
                  className="NoArrow ModalButton"
                  onClick={() =>
                    openModal(process.env.PUBLIC_URL + item.video!, item.name)
                  }
                >
                  <i className="fa-solid fa-film"></i>
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <div className="BucketListApp">
      <h2>My Bucket List</h2>
      <div className="row">
        {renderCategory("Adventure")}
        {renderCategory("Travel")}
        {renderCategory("Nature")}
        {renderCategory("Creative")}
        {renderCategory("Cultural")}
        {renderCategory("Learning")}
      </div>

      {modalContent  && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
             {modalContent.src.endsWith(".mp4") ? (
              <video src={modalContent.src} controls autoPlay />
            ) : (
              <img src={modalContent.src} alt={modalContent.alt} />
            )}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BucketListItemComponent;
