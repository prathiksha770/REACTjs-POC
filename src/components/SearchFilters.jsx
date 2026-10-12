
function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <section className="search-filters">
      <input
        type="text"
        placeholder="Search Tamil Nadu news..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search news by title"
      />

      <select
        value={selectedDate}
        onChange={(event) => setSelectedDate(event.target.value)}
        aria-label="Filter news by date"
      >
        <option value="all">All Dates</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </section>
  );
}

export default SearchFilters;