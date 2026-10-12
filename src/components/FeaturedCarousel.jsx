
import { useEffect, useState } from "react";

function FeaturedCarousel({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (articles.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % articles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [articles.length]);

  if (!articles || articles.length === 0) {
    return null;
  }

  const article = articles[currentIndex];

  const showPrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + articles.length) % articles.length
    );
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % articles.length);
  };

  return (
    <section className="featured-section">
      <h2 className="section-heading">Top Stories</h2>

      <div className="featured-card">
        <img
          className="featured-image"
          src={article.image}
          alt={article.title}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="featured-overlay">
          <span className="featured-category">
            {article.category}
          </span>

          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <small>{article.source}</small>
        </div>

        <button
          type="button"
          className="carousel-button previous"
          onClick={showPrevious}
          aria-label="Previous story"
        >
          &#10094;
        </button>

        <button
          type="button"
          className="carousel-button next"
          onClick={showNext}
          aria-label="Next story"
        >
          &#10095;
        </button>
      </div>

      <div className="carousel-indicators">
        {articles.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show story ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCarousel;