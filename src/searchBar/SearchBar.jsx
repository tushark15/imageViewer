import React, { useEffect, useState } from "react";
import { SearchBarDiv, SearchInput, SearchHistoryDiv, SearchHistoryInnerDiv, HistoryTabs } from "./SearchStyles"; // Search bar styles



function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [timeoutId, setTimeoutId] = useState(null); // Timeout id
  const [searchHistory, setSearchHistory] = useState([]); // Search history

  const saveToLocalStorage = (items) => {
    const limitedItems = items.slice(Math.max(items.length - 5, 0)); // Limit search history to 5 items
    localStorage.setItem("search-history", JSON.stringify(limitedItems));
  }; // Save to local storage

  const getFromLocalStorage = () => {
    const items = localStorage.getItem("search-history");
    if (items) {
      setSearchHistory(JSON.parse(items)); // Set search history
    }
  }; // Get from local storage

  useEffect(() => {
    getFromLocalStorage();
  }, []); // Get from local storage when component mounts

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      onSearch(value);
      if (value.trim() !== "" && !searchHistory.includes(value.trim())) {
        // If search term is not empty and not in search history
        const newSearchHistory = [...searchHistory, value.trim()];
        setSearchHistory(newSearchHistory);
        saveToLocalStorage(newSearchHistory);
      }
    }, 1000); // Set timeout
    setTimeoutId(newTimeoutId);
  };

  return (
    <div>
      <SearchBarDiv>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {/* Search bar */}
      </SearchBarDiv>
      <SearchHistoryDiv>
        <SearchHistoryInnerDiv>
          {/* Search history */}
          {searchHistory.slice(-5).map((item) => (
            <HistoryTabs
              key={item}
              className="btn btn-outline-light"
              onClick={() => {
                setSearchTerm(item);
                onSearch(item);
              }}
            >
              {item}
            </HistoryTabs>
          ))}
        </SearchHistoryInnerDiv>
      </SearchHistoryDiv>
    </div>
  );
}

export default SearchBar;
