
function NewsTicker() {
  const headlines = [
    "Tamil Nadu News & Updates",
    "Coimbatore City Developments",
    "Chennai Transport Updates",
    "Education and Technology in Tamil Nadu",
    "Weather and Public Safety Updates",
  ];

  return (
    <div className="ticker">
      <span className="ticker-label">TN NEWS</span>

      <div className="ticker-window">
        <div className="ticker-track">
          {[...headlines, ...headlines].map((headline, index) => (
            <span className="ticker-item" key={index}>
              {headline}
              <span className="ticker-dot"> ◆ </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;