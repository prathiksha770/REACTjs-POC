
import { useState } from "react";
import { newsArticles } from "./data/newsData";
import NewsTicker from "./components/NewsTicker";
import FeaturedCarousel from "./components/FeaturedCarousel";
import SearchFilters from "./components/SearchFilters";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("all");

  // Filter articles using the search term and date selection
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = (
      article.title +
      " " +
      article.description +
      " " +
      article.category +
      " " +
      article.source
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const articleDate = new Date(article.publishedAt);
    const now = new Date();

    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);

    const weekStart = new Date(todayStart);
    weekStart.setDate(weekStart.getDate() - 6);

    const monthStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    let matchesDate = true;

    if (selectedDate === "today") {
      matchesDate =
        articleDate >= todayStart && articleDate < tomorrowStart;
    } else if (selectedDate === "week") {
      matchesDate =
        articleDate >= weekStart && articleDate < tomorrowStart;
    } else if (selectedDate === "month") {
      matchesDate =
        articleDate >= monthStart && articleDate < tomorrowStart;
    }

    return matchesSearch && matchesDate;
  });

  return (
    <div className="app">
      <header>
        <h1>TN News Brief</h1>
        <p>Tamil Nadu • Coimbatore • Chennai</p>
      </header>

      <NewsTicker />

      <FeaturedCarousel articles={newsArticles} />

      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <main className="news-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <article className="news-card" key={article.id}>
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
              />

              <h2>{article.title}</h2>

              <p>{article.description}</p>

            
<div className="news-meta">
  <span>{article.source}</span>
  <span className="news-category">{article.category}</span>
</div>

<small className="published-time">
  {new Date(article.publishedAt).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</small>
            </article>
          ))
        ) : (
          <p className="no-results">
            No news found. Try another search or date filter.
          </p>
        )}
      </main>

      <footer className="app-footer">
        <p>TN News Brief · Your Tamil Nadu news dashboard</p>
        <small>Educational demo using mock news data.</small>
      </footer>
    </div>
  );
}

export default App;