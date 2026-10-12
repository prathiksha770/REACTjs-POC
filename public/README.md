# TN News Brief — React News Aggregator Dashboard

## Project Overview

TN News Brief is a responsive news dashboard built using React.js, JavaScript, and CSS. It displays Tamil Nadu-focused sample news articles and provides interactive features for browsing and filtering news.

**Note:** This project currently uses mock news data and is intended as an educational proof of concept. It does not fetch live news.

## Features

- **Scrolling News Ticker:** Displays headlines in a continuously scrolling strip.
- **Search:** Searches articles by title, description, category, and source.
- **Date Filters:** Filters articles by All Dates, Today, This Week, and This Month.
- **Featured News Carousel:** Automatically changes the featured article and includes Previous and Next navigation buttons.
- **News Cards:** Displays article images, titles, descriptions, sources, categories, and publication dates.
- **Responsive Design:** Adapts the layout for desktop, tablet, and mobile screens.
- **Mock Data:** Uses a local dataset containing 10 sample news articles.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5 and JSX
- CSS3
- Vite

## Project Structure

```text
react-project-texcoms/
├── public/
├── src/
│   ├── components/
│   │   ├── NewsTicker.jsx
│   │   ├── FeaturedCarousel.jsx
│   │   └── SearchFilters.jsx
│   ├── data/
│   │   └── newsData.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

Install Node.js and npm before running the project.

### Steps

1. Open the project folder in VS Code.
2. Open the integrated terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

### Production Build

Run the following command to check whether the project builds successfully:

```bash
npm run build
```

Vite generates the production files in the `dist` folder.

## Code Flow Explanation

### 1. Main Application — `App.jsx`

The main component imports the news dataset and reusable components. It manages the search term and selected date filter using React's `useState` Hook.

The `filter()` method checks which articles match the search text and selected date range. The filtered results are rendered as news cards using `map()`.

### 2. News Data — `newsData.js`

This file contains an array of article objects. Each article includes an ID, title, description, source, publication date, category, and image URL.

The application uses this local dataset instead of a backend API.

### 3. News Ticker — `NewsTicker.jsx`

The ticker displays a list of headlines. CSS keyframe animation moves the headlines horizontally, creating a continuous scrolling effect.

### 4. Featured Carousel — `FeaturedCarousel.jsx`

The carousel uses `useState` to track the currently selected article. The `useEffect` Hook sets up a timer to advance the featured article automatically. Previous and Next buttons allow manual navigation.

### 5. Search and Date Filters — `SearchFilters.jsx`

This component receives the current search text, selected date range, and update functions through props. Changes are passed to `App.jsx`, which recalculates the filtered articles.

### 6. Responsive Styling — `App.css`

CSS Grid displays news cards in three columns on larger screens. Media queries adapt the layout for tablets and mobile screens.

## How to Use

1. Browse the featured story and use the carousel arrows to change it.
2. Read the scrolling headlines in the news ticker.
3. Search for articles using keywords such as `Coimbatore`.
4. Select a date range to narrow the results.
5. Resize the browser to see the responsive layout.

## Limitations and Future Improvements

- Connect a genuine news API for current, verified headlines.
- Add more robust image fallbacks.
- Improve accessibility and loading states.
- Add category-specific filters and pagination.
- Deploy the application for public access.

## Project Status

Developed as a React.js proof of concept for a news aggregator dashboard assignment.

**Live Demo:** Add the deployed application URL here after deployment.

**Source Code:** Add the GitHub repository URL here after publishing the project.